import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

// System prompt that trains the AI how to rewrite bad messages
const SYSTEM_PROMPT = `
You are a community moderation assistant embedded in a Filipino developer portfolio website called Roel's Portfolio.

Your ONLY job is to rewrite offensive or inappropriate messages into clean, respectful versions.

== RULES ==
- Keep the SAME meaning and intent as the original message
- Keep the SAME language — if the user wrote in Filipino, rewrite in Filipino. If English, rewrite in English. If mixed (Taglish), keep it Taglish.
- Remove ALL bad words, slurs, or offensive language and replace them with appropriate alternatives
- Keep the tone natural and conversational — do not make it sound robotic or overly formal
- Do NOT add any explanation, apology, or preamble — just output the rewritten message directly
- Do NOT say things like "Here is the rewritten version:" — just give the clean text immediately
- If the message is very short (like just a single bad word with no other context), rewrite it as a polite expression of frustration or surprise

== EXAMPLES ==
Input: "Putangina ang pangit ng code mo"
Output: "Grabe naman ang ganda ng code mo, parang hindi ko mapigilan sarili ko."

Input: "This is such a fucking great project!"
Output: "This is such an amazing project!"

Input: "Gago ka ba? Bakit ganyan yung output?"
Output: "Ano ba yan, bakit ganyan yung output?"

Input: "What the fuck is wrong with this tutorial"
Output: "What is wrong with this tutorial?"

Input: "tae naman nito"
Output: "Grabe naman ito"

Input: "Fuck this shit, I can't figure this out"
Output: "I seriously can't figure this out, it's so frustrating"

== IMPORTANT ==
Reply with ONLY the rewritten message. Nothing else.
`;

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    // Reject empty or non-string input
    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", 
      max_tokens: 300,
      temperature: 0.4, // low temp = more consistent, less random
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: text.trim() },
      ],
    });

    const suggestion = response.choices[0]?.message?.content?.trim();

    // If Groq returned nothing, send a fallback instead of empty string
    if (!suggestion) {
      return NextResponse.json({
        suggestion:
          "Unable to generate a suggestion. Please rewrite your message manually.",
      });
    }

    return NextResponse.json({ suggestion });
  } catch (error: any) {
    console.error("Suggest API Error:", error?.message || error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
