"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/app/lib/supabase/supabase";

const GoogleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
        <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.4-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.5 16.3 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" />
    </svg>
);

export default function AuthToast() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClient();

    useEffect(() => {
        const toastType = searchParams.get("toast");
        if (toastType !== "signin") return;

        // Only show the toast if there's actually an active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) return; // signed out — ignore the param

            toast("Signed in with Google", {
                description: "Welcome back! You're now signed in.",
                icon: <GoogleIcon />,
                duration: 4000,
                style: {
                    background: "#ffffff",
                    border: "1px solid #e4e4e7",
                    color: "#111111",
                    borderRadius: "14px",
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    padding: "12px 16px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                },
            });

            const params = new URLSearchParams(searchParams.toString());
            params.delete("toast");
            const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
            router.replace(newUrl, { scroll: false });
        });
    }, [searchParams, router, pathname]);

    return null;
}