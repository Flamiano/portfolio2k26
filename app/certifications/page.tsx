"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { certificates } from "@/app/lib/certificates";

export default function CertificationsPage() {
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
                            Credentials & Achievements
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                            Certifications
                        </h1>
                        <p className="text-sm text-muted max-w-2xl leading-relaxed">
                            A collection of certifications and credentials earned through dedication, learning, and hands-on practice.
                        </p>
                    </div>

                    {/* Count badge */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            {certificates.length} Certificates
                        </div>
                    </div>
                </header>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group rounded-3xl border border-border bg-card hover:border-foreground/20 transition-all overflow-hidden flex flex-col"
                        >
                            {/* Certificate image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-background border-b border-border">
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-5 flex flex-col flex-1">
                                {/* Issuer badge */}
                                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted mono-text mb-2">
                                    {cert.issuer}
                                </p>

                                {/* Name */}
                                <h3 className="font-bold text-foreground leading-snug mb-2">
                                    {cert.name}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                                    {cert.description}
                                </p>

                                {/* Footer row */}
                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                                    {cert.date ? (
                                        <span className="mono-text text-xs text-muted">{cert.date}</span>
                                    ) : (
                                        <span />
                                    )}
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:opacity-70 transition-opacity"
                                        >
                                            View <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}