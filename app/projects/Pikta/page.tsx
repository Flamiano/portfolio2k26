"use client";

import Link from "next/link";
import {
    ArrowLeft,
    Camera,
    Palette,
    ImageIcon,
    Type,
    CheckCircle2,
    Sparkles,
    Monitor,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const Pikta = () => {
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
                        Case Study • 2025
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                        PikTà
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A web-based photo booth experience that lets users capture moments,
                        customize layouts, add text and dates, and download polished photo strips —
                        built for events, gatherings, and everyday fun.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live on Vercel
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Monitor className="w-3 h-3" />
                        Web Application
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Camera className="w-3 h-3" />
                        Photo Booth
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
                                    ["Creator", "John Roel Flamiano"],
                                    ["Platform", "Web Application"],
                                    ["Type", "Photo Booth Experience"],
                                    ["Year", "2025"],
                                    ["Deployed", "Vercel"],
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
                                    "Tailwind CSS", "Canvas API", "WebRTC",
                                    "Vercel", "html2canvas",
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
                                    "Live Camera Capture",
                                    "Choose Number of Photos",
                                    "Layout Customization",
                                    "Text Overlay Input",
                                    "Date Stamp Support",
                                    "Filter & Style Options",
                                    "Downloadable Photo Strip",
                                    "Responsive Landing Page",
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

                        {/* Overview / Landing */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">Project Overview</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                PikTà is a browser-based photo booth that brings the fun of a physical photo booth
                                to any device with a camera. Users can capture photos directly from their webcam,
                                choose how many shots to take, customize the output, and download a finished
                                photo strip — no app install required.
                            </p>

                            <img
                                src="/images/projects/Pikta/landingpage.jpeg"
                                alt="PikTà Landing Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Landing Page</p>

                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Instant, No-Install Experience",
                                        desc: "Runs entirely in the browser using WebRTC for camera access and the Canvas API for image composition — no downloads, no sign-ups, just open and shoot.",
                                    },
                                    {
                                        title: "Personalized Output",
                                        desc: "Every photo strip can be tailored with custom text, date stamps, and layout choices — making each output unique to the moment.",
                                    },
                                    {
                                        title: "Event-Ready Design",
                                        desc: "Built for corporate events, celebrations, and casual use — the UI is clean and approachable for all ages and tech comfort levels.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Motivations */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Motivations</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Why PikTà Was Built</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Physical photo booths are expensive to rent and limited to specific venues.
                                PikTà was created to democratize the experience — making it accessible
                                at any event, anywhere, with just a laptop or desktop browser.
                            </p>

                            <img
                                src="/images/projects/Pikta/motivations.png"
                                alt="PikTà Motivations"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Accessibility", "No physical booth, no rental fee — just a URL. Anyone with a browser and webcam can use PikTà instantly."],
                                    ["Memorability", "Photo strips are a timeless keepsake format. PikTà modernizes them for the digital era without losing their charm."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* The Photo Booth Process */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Camera className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">The Photo Booth Process</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Step-by-Step Capture Flow</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                PikTà guides users through a smooth, sequential flow — from choosing how many
                                photos to take, to capturing them live, to downloading the finished strip.
                                Each step is intentionally simple to keep the experience fun and frictionless.
                            </p>

                            {/* Step 1: Choose Number of Photos */}
                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Pikta/process/choosing-number-of-photos.png"
                                    alt="Choosing Number of Photos"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <div className="px-0.5">
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest">Step 1 — Choose Number of Photos</p>
                                    <p className="text-[11px] text-muted mt-0.5 leading-relaxed">
                                        Users select how many shots they want in their strip — giving full control
                                        over the output format before the camera even opens.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2: Capturing */}
                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Pikta/process/capturing.png"
                                    alt="Capturing Photos"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <div className="px-0.5">
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest">Step 2 — Capture</p>
                                    <p className="text-[11px] text-muted mt-0.5 leading-relaxed">
                                        Live camera feed via WebRTC with a countdown timer between shots —
                                        replicating the authentic feel of a physical photo booth.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Camera-First UX</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Built on the browser's native WebRTC API — no plugins, no third-party camera
                                    services. The capture flow is designed to feel snappy and reactive, keeping
                                    energy high during group shots and events.
                                </p>
                            </div>
                        </section>

                        {/* Customization */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Palette className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Customization</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Layout, Style & Personalization</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                After capturing, users can personalize their strip — choosing layout styles,
                                applying filters, and configuring the overall look before finalizing their output.
                            </p>

                            <img
                                src="/images/projects/Pikta/process/customization.png"
                                alt="Customization Screen"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Customization Panel</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Layout Control", "Choose the strip arrangement that fits the moment — vertical or tiled layouts for different vibe and output size preferences."],
                                    ["Filter & Style", "Apply visual styles to unify the look of all captured photos in the strip for a cohesive, polished result."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Text & Date Input */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Type className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Text & Date Overlays</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Personalize Every Strip</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Users can add custom text and date stamps directly onto their photo strip —
                                perfect for labeling event names, memorable quotes, or just the date of the occasion.
                            </p>

                            <img
                                src="/images/projects/Pikta/process/example-of-input-text-and-date.png"
                                alt="Text and Date Input"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Text & Date Input</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Custom Text", "Type any message, event name, or label to embed directly on the strip — rendered via Canvas API for pixel-perfect placement."],
                                    ["Date Stamp", "Toggle a date overlay to automatically imprint the current date on the strip, giving every output a timestamped memory."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final Output */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <ImageIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Final Output</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Download-Ready Photo Strip</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The final step produces a complete, download-ready photo strip — composited
                                from all captured frames, customizations, and text overlays using the Canvas API.
                                One click saves it directly to the user's device.
                            </p>

                            <img
                                src="/images/projects/Pikta/process/example-of-output.png"
                                alt="Example Output"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Example Output — Finished Photo Strip</p>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Canvas-Powered Composition</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    All captured frames are stitched together on an HTML Canvas element alongside
                                    any applied overlays and styles. The final strip is exported as a high-quality
                                    image file — no server processing required, everything runs client-side.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Client-Side Only", "Zero server dependency for image processing — the entire composition pipeline runs in the browser, keeping the experience fast and private."],
                                    ["Instant Download", "One-click download exports the finished strip directly to the device — no email, no account, no waiting."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Pikta;