"use client";

import Link from "next/link";
import {
    ArrowLeft,
    GraduationCap,
    Globe,
    Newspaper,
    Monitor,
    Smartphone,
    CheckCircle2,
    Layout,
    Image as ImageIcon,
    FileText,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const MCST = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-zinc-800 pb-20">

            {/* Navigation */}
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </Link>
            </nav>

            {/* Header */}
            <header className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
                <div className="border-l-4 border-foreground pl-5 py-1">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2 mono-text">
                        Case Study • 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                        MCST Website
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        An official college website built for Mandaluyong College of Science and Technology —
                        featuring a landing page, academics section, news feed, and mobile-responsive design,
                        requested by Professor Jessa Brogada.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                        School Website
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Monitor className="w-3 h-3" />
                        Web Application
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Smartphone className="w-3 h-3" />
                        Mobile Responsive
                    </div>
                </div>
            </header>

            {/* ── TWO-COLUMN LAYOUT ── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-5 items-start">

                    {/* ── STICKY SIDEBAR ── */}
                    <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-8 space-y-4">

                        {/* Project Overview */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Project Overview
                            </h3>
                            <div className="space-y-2 text-xs">
                                {[
                                    ["Developer", "John Roel Flamiano"],
                                    ["Client", "Prof. Jessa Brogada"],
                                    ["Institution", "MCST"],
                                    ["Platform", "Web Application"],
                                    ["Type", "College Website"],
                                    ["Year", "2026"],
                                ].map(([label, val]) => (
                                    <div key={label} className="flex justify-between gap-2">
                                        <span className="text-muted font-medium shrink-0">{label}</span>
                                        <span className="font-semibold text-right">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "Next.js", "React", "TypeScript",
                                    "Tailwind CSS", "Vercel",
                                ].map((tech) => (
                                    <span key={tech} className="px-2.5 py-1 rounded-full border border-border bg-background text-[10px] font-bold mono-text">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Hero Landing Page",
                                    "Academics Section",
                                    "News & Updates Feed",
                                    "Mobile Responsive Design",
                                    "Header & Navigation",
                                    "Footer with Site Links",
                                    "Institutional Branding",
                                    "Clean & Professional UI",
                                ].map((feat) => (
                                    <li key={feat} className="flex items-start gap-2 text-[11px] text-muted">
                                        <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-foreground" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* ── MAIN CONTENT ── */}
                    <main className="flex-1 min-w-0 space-y-5">

                        {/* Project Background */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">Project Background</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                The MCST website was commissioned by Professor Jessa Brogada of Mandaluyong
                                College of Science and Technology. The goal was to build a clean, professional,
                                and fully responsive college website that serves as the institution's primary
                                digital presence — showcasing academics, news, and essential college information.
                            </p>
                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Institutional Digital Presence",
                                        desc: "A centralized web platform for MCST to publish college information, academic programs, and campus news — accessible to students, faculty, and prospective enrollees.",
                                    },
                                    {
                                        title: "Mobile-First & Responsive",
                                        desc: "Designed to be fully usable across all screen sizes — from desktop browsers to mobile phones — ensuring accessibility for the entire MCST community.",
                                    },
                                    {
                                        title: "Professional & Branded",
                                        desc: "Consistent institutional branding throughout, with a visual identity that reflects the college's academic standards and professional culture.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Landing Page */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Landing Page</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Hero & First Impression</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The landing page is the first thing visitors see — designed to immediately communicate
                                MCST's identity, values, and offerings. A strong hero section anchors the page,
                                drawing in students and presenting the college's key highlights at a glance.
                            </p>

                            <img
                                src="/images/projects/MCST/landingpage.jpeg"
                                alt="MCST Landing Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Hero Section", "Bold headline and visuals that immediately establish MCST's identity and invite visitors to explore the college's offerings."],
                                    ["Clear Navigation", "Intuitive header navigation guiding users to academics, news, and key college pages without friction."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Header */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Layout className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Header & Navigation</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Site-wide Navigation Bar</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The header provides persistent, site-wide navigation — keeping the MCST brand
                                and key links accessible from every page. Designed to be clean, scannable, and
                                consistent with the overall institutional tone.
                            </p>

                            <img
                                src="/images/projects/MCST/header.png"
                                alt="MCST Header"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Persistent Branding</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The header carries the MCST logo and navigation links across all pages —
                                    ensuring users always know where they are and can easily move through the site.
                                </p>
                            </div>
                        </section>

                        {/* Academics */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <GraduationCap className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Academics Section</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Programs & Courses</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Academics section presents MCST's academic programs, courses, and college
                                departments in a structured, readable layout — helping prospective students
                                explore their options and understand what MCST offers.
                            </p>

                            <img
                                src="/images/projects/MCST/academics.png"
                                alt="MCST Academics Section"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Program Listings", "Clearly structured display of available degree programs, helping students quickly identify their area of interest."],
                                    ["Department Overview", "Each department's offerings are presented with enough detail to support informed enrollment decisions."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* News */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Newspaper className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">News & Updates</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Campus News Feed</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The News section keeps the college community informed — publishing announcements,
                                events, and institutional updates in a clean, easy-to-browse feed that keeps
                                students and faculty up to date.
                            </p>

                            <img
                                src="/images/projects/MCST/news.png"
                                alt="MCST News Section"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Live Campus Updates</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    News articles are displayed with titles, dates, and previews — giving the MCST
                                    community a reliable place to check for the latest announcements and upcoming events.
                                </p>
                            </div>
                        </section>

                        {/* Mobile Responsive */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Smartphone className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Mobile Responsive Design</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Accessible on Any Device</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The MCST website is fully responsive — adapting seamlessly from wide desktop
                                screens down to mobile phones. Every section, navigation element, and content
                                block reflows cleanly for smaller viewports.
                            </p>

                            <img
                                src="/images/projects/MCST/mobile.png"
                                alt="MCST Mobile View"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Phone-First Layout", "All content stacks and reflows cleanly on mobile — no horizontal scrolling, no broken layouts."],
                                    ["Touch-Friendly UI", "Navigation and interactive elements are sized for finger taps, not just mouse clicks."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Footer</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                The footer anchors every page with institutional information, quick links, and
                                contact details — giving users a consistent reference point regardless of where
                                they are on the site.
                            </p>
                            <img
                                src="/images/projects/MCST/fotoer.png"
                                alt="MCST Footer"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Institutional Anchor</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The footer consolidates MCST's contact information, site links, and college
                                    branding — serving as a reliable reference for all visitors at the bottom of every page.
                                </p>
                            </div>
                        </section>

                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MCST;