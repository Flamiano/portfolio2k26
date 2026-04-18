import type { Metadata } from "next";
import "./globals.css";
import ChatBot from "./components/chat/ChatBot";
import { Toaster } from "sonner";
import { Suspense } from "react";
import AuthToast from "./components/auth/AuthToast";

export const metadata: Metadata = {
  title: "John Roel Flamiano | Software Engineer",
  description:
    "IT student at Bestlink College of the Philippines. Building software and websites with React, Next.js, Tailwind CSS, Supabase, PHP, and MySQL.",
  openGraph: {
    title: "John Roel Flamiano | Software Engineer",
    description:
      "IT student focused on building software and websites using React, Next.js, and Tailwind CSS.",
    url: "https://roeldevv.dev",
  },
  icons: {
    icon: "/profile-light.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  try {
                    var root = document.documentElement;
                    var saved = localStorage.getItem('theme');
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var isDark = saved === 'dark' || (!saved && prefersDark);
                    if (isDark) {
                      root.classList.add('dark');
                      root.style.backgroundColor = '#000000';
                    } else {
                      root.classList.remove('dark');
                      root.style.backgroundColor = '#ffffff';
                    }
                  } catch(e) {}
                })();
              `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Iosevka+Charon+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ChatBot />
        <Toaster
          position="top-right"
          toastOptions={{
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
          }}
        />
        <Suspense>
          <AuthToast />
        </Suspense>
      </body>
    </html>
  );
}