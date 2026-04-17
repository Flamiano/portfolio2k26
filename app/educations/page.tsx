"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { educations, educationStory } from "@/app/lib/educations";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-zinc-800 pb-20">

            {/* Navigation */}
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </nav>

            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <header className="mb-12">
                    <div className="border-l-4 border-foreground pl-5 py-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2 mono-text">
                            Academic Journey
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                            Education
                        </h1>
                        <p className="text-sm text-muted max-w-2xl leading-relaxed">
                            Every school, every lesson, every honor — the path that built the developer I am today.
                        </p>
                    </div>
                </header>

                {/* Story Section */}
                <section className="mb-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-3xl border border-border bg-card">
                        {/* Profile image */}
                        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border border-border">
                            <Image
                                src="/profile1.png"
                                alt="John Roel Flamiano"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Story text */}
                        <div className="space-y-4">
                            {educationStory.split("\n\n").map((paragraph, i) => (
                                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Timeline */}
                <section>
                    <h2 className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-6 mono-text">
                        Academic Timeline
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {educations.map((edu) => (
                            <div
                                key={edu.id}
                                className="p-5 rounded-3xl border border-border bg-card hover:border-foreground/20 transition-all group"
                            >
                                {/* Level badge */}
                                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted mono-text mb-3">
                                    {edu.level}
                                </p>

                                {/* School */}
                                <h3 className="font-bold text-foreground leading-snug mb-1">
                                    {edu.school}
                                </h3>

                                {/* Course */}
                                {edu.course && (
                                    <p className="text-xs text-muted-foreground mb-2">
                                        {edu.course}
                                    </p>
                                )}

                                {/* Period */}
                                <p className="mono-text text-xs text-muted mb-3">
                                    {edu.period}
                                </p>

                                {/* Honor badge */}
                                {edu.honor && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-background text-xs font-semibold text-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                        {edu.honor}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}