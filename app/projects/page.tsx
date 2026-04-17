"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, Monitor } from "lucide-react";
import { projects } from "@/app/lib/projects";
import Footer from "@/app/components/Footer";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-zinc-800 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Navigation */}
                <nav className="py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group mono-text"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </nav>

                {/* Header */}
                <header className="mb-10">
                    <div className="border-l-4 border-foreground pl-5 py-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2 mono-text">
                            Portfolio • 2024–2026
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                            Projects
                        </h1>
                        <p className="text-sm text-muted max-w-2xl leading-relaxed">
                            A collection of engineered solutions ranging from management systems
                            to interactive web platforms.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            Availability: Open for Projects
                        </div>
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <Monitor className="w-3 h-3" />
                            Full-stack Development
                        </div>
                    </div>
                </header>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-3xl border border-border bg-card overflow-hidden flex flex-col"
                        >
                            {/* Thumbnail */}
                            {project.folder ? (
                                <Link href={`/projects/${project.folder}`} className="block">
                                    <div className="aspect-video w-full overflow-hidden bg-muted/20">
                                        <Image
                                            src={project.landingPage}
                                            alt={project.name}
                                            width={600}
                                            height={338}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <div className="aspect-video w-full overflow-hidden bg-muted/20">
                                    <Image
                                        src={project.landingPage}
                                        alt={project.name}
                                        width={600}
                                        height={338}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Body */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    {project.date && (
                                        <span className="text-[10px] mono-text text-muted">
                                            {project.date}
                                        </span>
                                    )}
                                    <span className="text-[10px] mono-text font-bold px-2.5 py-1 rounded-full border border-border">
                                        {project.folder ?? "Static"}
                                    </span>
                                </div>

                                {/* Title */}
                                {project.folder ? (
                                    <Link href={`/projects/${project.folder}`}>
                                        <h2 className="text-base font-bold tracking-tight mb-1.5 hover:underline underline-offset-2">
                                            {project.name}
                                        </h2>
                                    </Link>
                                ) : (
                                    <h2 className="text-base font-bold tracking-tight mb-1.5">
                                        {project.name}
                                    </h2>
                                )}

                                <p className="text-xs text-muted leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-2 mt-4">
                                    {project.folder ? (
                                        <Link
                                            href={`/projects/${project.folder}`}
                                            className="text-[11px] font-bold mono-text px-3.5 py-1.5 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"
                                        >
                                            Case study
                                        </Link>
                                    ) : (
                                        <span className="text-[11px] font-bold mono-text px-3.5 py-1.5 rounded-full border border-border text-muted cursor-not-allowed select-none">
                                            No case study
                                        </span>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] font-bold mono-text px-3.5 py-1.5 rounded-full border border-border hover:bg-card transition-colors inline-flex items-center gap-1"
                                        >
                                            Live
                                            <ArrowUpRight className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;