"use client";

const experiences = [
    {
        title: "Full-Stack Dev.",
        company: "Freelance / Personal Projects",
        period: "2023 – Present",
        active: true, 
    },
    {
        title: "Kitchen Crew",
        company: "McDonald's Munoz",
        period: "2025 – Present",
        active: false, 
    },
];

export default function Experience() {
    return (
        <div className="p-6 rounded-3xl border border-border bg-card transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 text-foreground">Experience</h3>
            <div className="space-y-0"> 
                {experiences.map((exp, i) => (
                    <div key={i} className="relative flex items-start gap-4 pb-6 last:pb-0">

                        {/* Timeline Logic */}
                        <div className="flex flex-col items-center flex-shrink-0 relative">
                            {/* Vertical Line */}
                            {i !== experiences.length - 1 && (
                                <div className="absolute top-6 w-[1px] h-full bg-border" />
                            )}

                            {/* Dot Logic */}
                            <div className="mt-1.5 z-10">
                                {exp.active ? (
                                    // Solid "Ink" Dot
                                    <div className="w-3 h-3 rounded-full bg-foreground shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                                ) : (
                                    // Outlined "No Ink" Dot
                                    <div className="w-3 h-3 rounded-full border-2 border-border bg-background" />
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <p className="text-sm font-bold leading-snug text-foreground tracking-tight">
                                    {exp.title}
                                </p>
                                <span className="mono-text text-[10px] text-muted flex-shrink-0 mt-0.5 bg-muted/10 px-2 py-0.5 rounded-full border border-border/50">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-xs text-muted mt-1 font-medium">{exp.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}