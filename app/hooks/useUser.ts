"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/supabase";
import type { User } from "@supabase/supabase-js";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = () => supabase.auth.signOut().then(() => setUser(null));

  return { user, signOut };
}
