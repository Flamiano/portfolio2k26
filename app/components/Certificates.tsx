"use client";

import Link from "next/link";
import { useState } from "react";

const certificates = [
    {
        id: "mcdo",
        src: "/images/certificates/mcdo.jpeg",
        title: "Station Champion",
        subtitle: "Rising Star Award",
        issuer: "McDonald's",
        description: "Recognized as a Station Champion and Rising Star for exceptional performance, consistency, and dedication to quality service at McDonald's.",
        // Adaptive colors: subtle yellow for light, deep amber for dark
        color: "from-yellow-50 dark:from-yellow-950/40 to-transparent",
        accent: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-900/40",
    },
    {
        id: "agile",
        src: "/images/certificates/agile-leadership.jpeg",
        title: "Agile Leadership",
        subtitle: "Foundation Certificate",
        issuer: "BCP — Section Leadership",
        description: "Awarded for demonstrating leadership and agile foundation principles as a section leader in Bestlink College of the Philippines (BCP).",
        color: "from-blue-50 dark:from-blue-950/40 to-transparent",
        accent: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-900/40",
    },
    {
        id: "research",
        src: "/images/certificates/research-development.jpeg",
        title: "Research & Development",
        subtitle: "Participant Certificate",
        issuer: "BCP — Academic & Social Impact",
        description: "Recognized as a participant in the BCP Research and Development program focused on academic and social impact within the institution.",
        color: "from-emerald-50 dark:from-emerald-950/40 to-transparent",
        accent: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-900/40",
    },
];

export default function Certificates() {
    const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    return (
        <>
            <div className="p-6 rounded-3xl border border-border bg-card transition-colors duration-300">

                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-foreground">Certificates</h3>
                    <Link href="/certifications" className="text-xs text-muted hover:text-foreground transition-colors mono-text">
                        View All ›
                    </Link>
                </div>

                <div className="space-y-3">
                    {certificates.map((cert) => (
                        <button
                            key={cert.id}
                            onClick={() => setSelected(cert)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl border bg-gradient-to-r ${cert.color} ${cert.border} hover:brightness-105 dark:hover:brightness-110 transition-all text-left group`}
                        >
                            <div className="w-14 h-14 rounded-xl overflow-hidden bg-background border border-border flex-shrink-0">
                                {!imgErrors[cert.id] ? (
                                    <img src={cert.src} alt={cert.title} className="w-full h-full object-cover" onError={() => setImgErrors((e) => ({ ...e, [cert.id]: true }))} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                                        <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm leading-snug text-foreground">{cert.title}</p>
                                <p className={`text-xs font-medium mt-0.5 ${cert.accent}`}>{cert.subtitle}</p>
                                <p className="text-xs text-muted mt-0.5 mono-text truncate">{cert.issuer}</p>
                            </div>

                            <svg className="w-4 h-4 text-muted flex-shrink-0 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelected(null)}>
                    <div className="relative bg-card border border-border rounded-3xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 relative">
                            {!imgErrors[selected.id] ? (
                                <img src={selected.src} alt={selected.title} className="w-full h-full object-contain" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted text-sm mono-text">Certificate image not found</div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="font-bold text-lg text-foreground">{selected.title}</h4>
                                    <p className={`text-sm font-medium mt-0.5 ${selected.accent}`}>{selected.subtitle}</p>
                                    <p className="text-xs text-muted mono-text mt-0.5">{selected.issuer}</p>
                                </div>
                                <button onClick={() => setSelected(null)} className="flex-shrink-0 w-8 h-8 rounded-xl border border-border bg-background flex items-center justify-center hover:bg-card transition-colors"><svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                            </div>
                            {/* Replaced text-zinc-400 with text-muted for the long description */}
                            <p className="text-sm text-muted leading-relaxed mt-3">{selected.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}