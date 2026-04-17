"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [dark, setDark] = useState(true);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    const profileSrc = dark
        ? hovered ? "/profile-dark-hover.jpeg" : "/profile-dark.jpeg"
        : hovered ? "/profile-light-hover.jpeg" : "/profile-light.jpeg";

    return (
        <header className="relative flex flex-row items-center gap-3 sm:gap-6 animate-fade-up">
            {/* Avatar with Hover Logic */}
            <div
                className="flex-shrink-0 cursor-pointer group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
            >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 group-hover:border-accent group-hover:shadow-xl group-hover:shadow-accent/10">
                    <Image
                        src={profileSrc}
                        alt="John Roel Flamiano"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Info block */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 flex-wrap">
                    <h1 className="text-[14px] min-[390px]:text-[16px] sm:text-xl md:text-2xl font-bold tracking-tight leading-tight text-foreground">
                        John Roel Flamiano
                    </h1>
                    <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-muted mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="mono-text text-[9px] sm:text-xs">Quezon City, Philippines</span>
                </div>

                {/* Tagline */}
                <p className="text-[10px] sm:text-sm text-muted/80 mono-text leading-tight mt-1.5">
                    Software Engineer&nbsp;|&nbsp;React &amp; Next.js&nbsp;|&nbsp;UI/UX&nbsp;|&nbsp;SEO&nbsp;|&nbsp;Freelancer
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-3 sm:mt-5">
                    <div className="flex flex-row gap-1.5">
                        <a
                            href="https://calendly.com/johnroelf17/30min"
                            target="_blank"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-[9px] sm:text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth={2} />
                            </svg>
                            <span className="hidden min-[400px]:inline">Schedule a Call</span>
                            <span className="inline min-[400px]:hidden">Call</span>
                        </a>
                        <a
                            href="mailto:johnroelf17@gmail.com"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-[9px] sm:text-xs font-medium hover:bg-accent transition-colors text-foreground"
                        >
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={2} />
                            </svg>
                            <span className="hidden min-[400px]:inline">Send Email</span>
                            <span className="inline min-[400px]:hidden">Email</span>
                        </a>
                    </div>

                    <Link
                        href="/community"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-[9px] sm:text-xs font-medium hover:border-foreground/30 transition-all text-foreground"
                    >
                        <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} />
                        </svg>
                        <span>Join My Community</span>
                    </Link>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDark(!dark)}
                className="absolute top-0 right-0 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:border-foreground/30 transition-all text-foreground touch-manipulation"
            >
                {dark ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                )}
            </button>
        </header>
    );
}