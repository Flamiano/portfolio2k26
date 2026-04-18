import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    // Basic validation
    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Always generate — client already detected the bad words, no need to re-check here
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

    // Get the suggestion text from Groq response
    const suggestion =
      response.choices[0]?.message?.content?.trim() ??
      "Unable to generate a suggestion. Please rewrite manually.";

    return NextResponse.json({ suggestion });
  } catch (error: any) {
    console.error("Suggest API Error:", error?.message || error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
