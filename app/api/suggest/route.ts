import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

const BAD_WORDS = [
  "burat",
  "tae",
  "puke",
  "gago",
  "gaga",
  "putang ina",
  "putangina",
  "tangina",
  "punyeta",
  "pakshet",
  "pakshit",
  "leche",
  "lintik",
  "ulol",
  "bobo",
  "boba",
  "inutil",
  "peste",
  "fuck",
  "shit",
  "ass",
  "bitch",
  "bastard",
  "dick",
  "cock",
  "pussy",
  "cunt",
  "fag",
  "slut",
  "whore",
  "motherfucker",
  "fucker",
  "fucking",
  "damn",
];

export function containsBadWords(text: string): boolean {
  const lower = text.toLowerCase();
  return BAD_WORDS.some((word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    return regex.test(lower) || lower.includes(word);
  });
}

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (!containsBadWords(text)) {
      return NextResponse.json({ suggestion: null, clean: true });
    }

    const response = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      max_tokens: 200,
      temperature: 0.5,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful community moderator. The user wrote a message containing offensive or inappropriate language. Rewrite it in a respectful, clean way that preserves the original intent. Keep the same language (Filipino or English) as the original. Reply ONLY with the rewritten message — no explanation, no preamble.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const suggestion =
      response.choices[0]?.message?.content?.trim() ??
      "Unable to generate a suggestion. Please rewrite manually.";

    return NextResponse.json({ suggestion, clean: false });
  } catch (error: any) {
    console.error("Suggest API Error:", error?.message || error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
