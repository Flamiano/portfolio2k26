"use client";

import Link from "next/link";
import {
    Layout,
    Database,
    Globe,
    BarChart3,
    Settings2,
    Cpu,
    ArrowLeft
} from "lucide-react";

const fullStack = {
    "Frontend": {
        icon: <Layout className="w-5 h-5" />,
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Blade", "Vite", "Framer Motion", "GSAP"]
    },
    "Backend & Database": {
        icon: <Database className="w-5 h-5" />,
        items: ["PHP", "Laravel", "Node.js", "Python", "C", "Cobol", "MySQL", "PostgreSQL", "Supabase"]
    },
    "Mobile Development": {
        icon: <Globe className="w-5 h-5" />,
        items: ["React Native", "Kotlin", "Java", "Android Studio"]
    },
    "CMS & Marketing": {
        icon: <Globe className="w-5 h-5" />,
        items: ["WordPress", "SEO Optimization", "Google Analytics", "Google AdSense", "Google Search Console", "Google My Business", "MailChimp"]
    },
    "Data Analysis": {
        icon: <BarChart3 className="w-5 h-5" />,
        items: ["SQL", "Python", "Data Visualization", "Excel"]
    },
    "Tools & Version Control": {
        icon: <Settings2 className="w-5 h-5" />,
        items: ["Git & GitHub", "VS Code", "Composer", "npm", "Vercel", "Netlify", "Hostinger", "Infinityfree", "Figma", "Canva", "CapCut"]
    },
    "AI & Intelligent Systems": {
        icon: <Cpu className="w-5 h-5" />,
        items: ["Gemini AI API", "Prompt Engineering", "LLM Orchestration", "AI-Driven Content"]
    }
};

export default function TechStacksPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
            <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">

                {/* Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Full Tech Stack</h1>
                    <p className="text-muted text-lg leading-relaxed">
                        Comprehensive list of tools and technologies I use.
                    </p>
                </header>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {Object.entries(fullStack).map(([category, data]) => (
                        <div
                            key={category}
                            className="p-6 rounded-3xl border border-border bg-card transition-all hover:border-foreground/10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-foreground">
                                    {data.icon}
                                </div>
                                <h2 className="text-xl font-bold">{category}</h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {data.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-1.5 rounded-xl border border-border bg-background text-sm font-medium hover:border-foreground/30 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <footer className="text-center space-y-1 pt-10 border-t border-border/50">
                    <p className="text-sm text-muted">
                        © {new Date().getFullYear()} John Roel Flamiano. All Rights Reserved.
                    </p>
                    <p className="text-xs text-muted/60 mono-text">
                        Developed in Quezon City, Philippines
                    </p>
                </footer>
            </div>
        </div>
    );
}