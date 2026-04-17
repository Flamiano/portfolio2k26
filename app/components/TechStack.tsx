"use client";

import Link from "next/link";

const stack = {
    "Web Development": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    "Mobile Development": ["React Native", "Flutter", "Kotlin", "Java", "Android Studio"],
    "Backend & Database": ["PHP", "Laravel", "Node.js", "PostgreSQL", "MySQL", "Supabase"],
    "Design & Motion": ["Figma", "Framer Motion", "GSAP", "Lucide React", "Canva", "CapCut"],
    "Tools & Platforms": [
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "Infinityfree",
        "VS Code",
        "Composer",
    ],
};

export default function TechStack() {
    return (
        <div className="p-6 rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-foreground">Tech Stack</h3>
                {/* Updated to use Link for the redirect */}
                <Link
                    href="/techstacks"
                    className="text-xs text-muted hover:text-foreground transition-colors mono-text"
                >
                    View All ›
                </Link>
            </div>
            <div className="space-y-4">
                {Object.entries(stack).map(([category, items]) => (
                    <div key={category}>
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">
                            {category}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="px-2.5 py-1 rounded-full border border-border bg-background text-xs mono-text text-foreground hover:border-foreground/30 transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}