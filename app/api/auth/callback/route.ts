import { createClient } from "@/app/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();

    // Exchange the code for a session (this sets the cookies automatically)
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Return to the origin page (e.g., localhost:3000 or your domain)
      return NextResponse.redirect(`${origin}${next}?toast=signin`);
    }
  }

  // If there's an error, redirect to an error page (you can create this later)
  return NextResponse.redirect(`${origin}/auth-error`);
}