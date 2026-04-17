"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/app/lib/projects";

const DASHBOARD_COUNT = 4;

export default function Projects() {
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
    const displayed = projects.slice(0, DASHBOARD_COUNT);

    return (
        <div className="p-6 rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-foreground">Projects</h3>
                <Link href="/projects" className="text-xs text-muted hover:text-foreground transition-colors mono-text">
                    View All ›
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayed.map((project) => (
                    <div key={project.id} className="rounded-2xl border border-border bg-background overflow-hidden group">
                        <div className="w-full h-32 bg-muted/20 relative flex items-center justify-center">
                            {!imgErrors[project.folder] ? (
                                <img
                                    src={project.landingPage}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    onError={() => setImgErrors((e) => ({ ...e, [project.folder]: true }))}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex items-center justify-center">
                                    <span className="mono-text text-muted text-[10px] uppercase">{project.name}</span>
                                </div>
                            )}
                        </div>

                        <div className="p-4">
                            <p className="font-semibold text-sm text-foreground">{project.name}</p>
                            <p className="text-xs text-muted mt-1 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <Link href={`/projects/${project.id}`} className="px-3 py-1 rounded-full border border-border text-[10px] mono-text text-foreground hover:bg-foreground hover:text-background transition-colors">
                                    View Project
                                </Link>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-border text-[10px] mono-text text-foreground hover:bg-accent transition-colors">
                                        Visit Site ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}