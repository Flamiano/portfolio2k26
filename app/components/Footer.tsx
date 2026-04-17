"use client";

import { Mail, Calendar, ArrowUpRight, ExternalLink } from "lucide-react"; 
import { useEffect, useState, useCallback } from "react";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = useCallback(() => {
        setShowScrollTop(window.scrollY > 400);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/Flamiano",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/roelflamiano",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://web.facebook.com/johnroel.flamiano.7",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Scroll-to-top button — visible on mobile when scrolled down */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`
          fixed bottom-24 right-4 z-50 
          w-10 h-10 rounded-full
          border border-border bg-card text-muted
          flex items-center justify-center
          shadow-md hover:text-foreground hover:border-foreground/40
          transition-all duration-300
          sm:hidden
          ${showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>

            <footer className="mt-6 space-y-4">
                <div className="p-5 sm:p-8 rounded-3xl border border-border bg-card transition-colors duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* Left side */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                                Let&apos;s work together.
                            </h2>
                            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                                Available for freelance projects — React, Next.js, full-stack web
                                apps, and anything that needs to be built well.
                            </p>

                            {/* Portfolio 2k25 link */}
                            <a
                                href="https://johnroelflamiano2025.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-xl border border-border bg-background hover:border-foreground/40 text-xs font-medium text-muted hover:text-foreground transition-all group"
                            >
                                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="mono-text">Portfolio 2k25</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>

                            <div>
                                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                                    Follow Me
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-xl border border-border bg-background flex items-center justify-center hover:border-foreground/50 text-muted hover:text-foreground transition-all"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right side - Contact */}
                        <div>
                            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                                Get In Touch
                            </p>
                            <div className="space-y-2">
                                <a
                                    href="mailto:johnroelf17@gmail.com"
                                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-border bg-background hover:border-foreground/30 transition-all group"
                                >
                                    <div className="text-muted group-hover:text-foreground transition-colors flex-shrink-0">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-muted uppercase tracking-wider font-semibold mono-text">
                                            Email
                                        </p>
                                        <p className="text-xs sm:text-sm font-medium text-foreground truncate">
                                            johnroelf17@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://calendly.com/johnroelf17/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-border bg-background hover:border-foreground/30 transition-all group"
                                >
                                    <div className="text-muted group-hover:text-foreground transition-colors flex-shrink-0">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-muted uppercase tracking-wider font-semibold mono-text">
                                            Let&apos;s Talk
                                        </p>
                                        <p className="text-xs sm:text-sm font-medium text-foreground">
                                            Schedule a Call
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center pb-8 space-y-1">
                    <p className="text-xs sm:text-sm text-muted">
                        © {new Date().getFullYear()} John Roel Flamiano. All Rights Reserved.
                    </p>
                    <p className="text-xs text-muted/60 mono-text">
                        Developed in Quezon City, Philippines
                    </p>
                </div>
            </footer>
        </>
    );
}