"use client";

import Link from "next/link";
import {
    ArrowLeft,
    FileText,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/Flamiano",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/roelflamiano",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://web.facebook.com/johnroel.flamiano.7",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

const LostandFound = () => {
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
                        Lost & Found System
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A research-driven web platform engineered to digitize and streamline
                        the lost and found process within a school environment — grounded in
                        real documentation, student interviews, and field observations.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        System Status: Operational
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <FileText className="w-3 h-3 text-muted" />
                        Research-Based Project
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
                                    ["Lead Dev", "John Roel Flamiano"],
                                    ["Architecture", "PHP / LAMP Stack"],
                                    ["Type", "Web Platform"],
                                    ["Context", "Research • 2025"],
                                    ["Method", "Documentation & Interviews"],
                                ].map(([label, val]) => (
                                    <div key={label} className="flex justify-between gap-2">
                                        <span className="text-muted font-medium shrink-0">{label}</span>
                                        <span className="font-semibold text-right">{val}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-3 border-t border-border">
                                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted mono-text mb-2">
                                    Group Members
                                </p>
                                <ul className="text-[11px] text-muted space-y-1 italic">
                                    {[
                                        "Barte, Jomar",
                                        "Cañaveral, Bianca Mae D.",
                                        "Dadivas, Jaymark N.",
                                        "Flamiano, John Roel R.",
                                        "Magas, Russel",
                                    ].map((m) => <li key={m}>{m}</li>)}
                                </ul>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "PHP", "MySQL", "Composer", "JavaScript",
                                    "Tailwind CSS", "Node.js", "SweetAlert2",
                                    "ApexCharts", "FontAwesome", "InfinityFree",
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
                                    "Student Email Verification",
                                    "Role-Based Access Control",
                                    "Lost & Found Item Reporting",
                                    "Admin Approval Workflow",
                                    "Auto-Post on Approval",
                                    "Claimed Items Tracker",
                                    "Public Item Browsing",
                                    "Student & Item CRUD (Admin)",
                                    "Dashboard Analytics (ApexCharts)",
                                    "SweetAlert2 Notifications",
                                    "Settings & Profile Management",
                                    "Research-Backed Design",
                                ].map((feat) => (
                                    <li key={feat} className="flex items-start gap-2 text-[11px] text-muted">
                                        <i className="fas fa-check-circle w-3 h-3 mt-0.5 shrink-0 text-foreground" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* ── MAIN CONTENT ── */}
                    <main className="flex-1 min-w-0 space-y-5">

                        {/* Research Background */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">Research Background</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                This system was born from a documented research problem: traditional school lost
                                and found processes rely on physical bulletin boards and manual logbooks.
                                Through interviews and direct observation, the team identified the core pain points
                                and designed a digital solution grounded in real evidence.
                            </p>
                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Identified Problem",
                                        desc: "Students at BCP have no centralized way to report lost items. Physical boards are rarely updated and lack accountability.",
                                    },
                                    {
                                        title: "Research Methodology",
                                        desc: "Conducted structured interviews with students and staff, reviewing existing manual claim procedures and manual logbook efficiency.",
                                    },
                                    {
                                        title: "Proposed Solution",
                                        desc: "A PHP-powered web platform where students submit reports and admins manage the full item lifecycle using a MySQL database.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Authentication System */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <i className="fas fa-shield-alt w-4 h-4 flex items-center justify-center" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Secure Authentication</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">PHP Session Management & MySQL</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Built using native PHP login logic, the system utilizes secure password hashing (`password_hash`)
                                and session-based access control. Students register using verified school credentials,
                                ensuring only the BCP community can interact with the system.
                            </p>

                            <img
                                src="/images/projects/LostandFound/auth/student-login.png"
                                alt="Student Login Interface"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                                <div className="grid grid-cols-2 sm:contents sm:flex sm:flex-col gap-3">
                                    <img
                                        src="/images/projects/LostandFound/auth/student-register.png"
                                        alt="Student Registration"
                                        className="rounded-2xl border border-border w-full object-contain bg-background sm:flex-1"
                                    />
                                    <img
                                        src="/images/projects/LostandFound/auth/student-verify.png"
                                        alt="Email Verification"
                                        className="rounded-2xl border border-border w-full object-contain bg-background sm:flex-1"
                                    />
                                </div>

                                <div className="p-4 rounded-2xl bg-background border border-border flex flex-col justify-center gap-3 sm:w-1/3 sm:shrink-0">
                                    <p className="text-xs font-bold">Auth Module</p>
                                    <p className="text-[11px] text-muted leading-relaxed">
                                        Custom-built PHP backend managing student accounts and admin roles via MySQL.
                                    </p>
                                    <ul className="space-y-1.5">
                                        {[
                                            { icon: <i className="fas fa-envelope w-3 h-3" />, text: "Account Validation" },
                                            { icon: <i className="fas fa-user-shield w-3 h-3" />, text: "Role-Based Access" },
                                            { icon: <i className="fas fa-lock w-3 h-3" />, text: "Bcrypt Hashing" },
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                                {item.icon} {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <img
                                src="/images/projects/LostandFound/auth/student-email-verification.png"
                                alt="Email Verification Screen"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["BCP-Only Access", "Access is restricted to verified student accounts, maintaining a closed and secure school environment."],
                                    ["Local Dev Environment", "Optimized and tested using XAMPP for robust local development before InfinityFree deployment."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Admin Panel */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <i className="fas fa-database w-4 h-4 flex items-center justify-center" />
                                </div>
                                <h2 className="text-xl font-bold">Admin Management System</h2>
                            </div>

                            <img
                                src="/images/projects/LostandFound/admin/dashboard.png"
                                alt="Admin Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Centralized MySQL Administration</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The admin dashboard pulls real-time data from the MySQL database —
                                    monitoring pending approvals, item counts, and student activity
                                    visualized through ApexCharts.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                                <img
                                    src="/images/projects/LostandFound/admin/item-approved.png"
                                    alt="Item Approval"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                                <img
                                    src="/images/projects/LostandFound/admin/auto-post-approved.png"
                                    alt="Auto Post on Approval"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Approval Workflow", "Admins moderate every report, ensuring photo evidence and descriptions are accurate before the entry is updated in the database."],
                                    ["Real-time Updates", "MySQL triggers or PHP logic ensures that once approved, the item status changes immediately for public viewing."],
                                ].map(([label, text]) => (
                                    <div key={label} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] mono-text text-muted uppercase tracking-widest mb-1">{label}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>

                            <img
                                src="/images/projects/LostandFound/admin/claimed-items-list.png"
                                alt="Claimed Items List"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                                <img
                                    src="/images/projects/LostandFound/admin/view-all-items-crud.png"
                                    alt="All Items CRUD"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                                <img
                                    src="/images/projects/LostandFound/admin/view-all-students-crud.png"
                                    alt="All Students CRUD"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["CRUD Management", "Full Create, Read, Update, and Delete capabilities for both items and student accounts using PHP Data Objects (PDO)."],
                                    ["Data Accountability", "The system logs all administrative changes, creating a traceable history for every lost and found item."],
                                ].map(([label, text]) => (
                                    <div key={label} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] mono-text text-muted uppercase tracking-widest mb-1">{label}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Student Portal */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <i className="fas fa-list-ul w-4 h-4 flex items-center justify-center" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Student Portal</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Reporting & Item Browsing</p>
                                </div>
                            </div>

                            <img
                                src="/images/projects/LostandFound/student/dashboard.png"
                                alt="Student Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Interactive User Interface</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Using JavaScript and Tailwind CSS, the student dashboard provides a smooth experience
                                    for tracking personal reports and browsing recovered items at BCP.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                                <img
                                    src="/images/projects/LostandFound/student/submit-report.png"
                                    alt="Submit Report"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                                <img
                                    src="/images/projects/LostandFound/student/sucessfully-added-report.png"
                                    alt="Report Successfully Added"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50 text-center">
                                <p className="text-xs font-bold italic mb-1">Swift Reporting Flow</p>
                                <p className="text-[11px] text-muted">
                                    PHP handles the form processing while SweetAlert2 provides instant feedback on report submission status.
                                </p>
                            </div>
                        </section>

                        {/* Public Landing Pages */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <i className="fas fa-search w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Public Landing Pages</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                The platform features public views allowing visitors to browse found items
                                without logging in, facilitating quicker recovery for the entire school community.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="relative overflow-hidden rounded-2xl border border-border group">
                                    <img
                                        src="/images/projects/LostandFound/pages/view-items.png"
                                        alt="Public View Items Page"
                                        className="w-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    <span className="absolute bottom-2 left-3 text-[10px] font-bold mono-text">PUBLIC ITEM FEED</span>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-border group">
                                    <img
                                        src="/images/projects/LostandFound/pages/about.png"
                                        alt="About Page"
                                        className="w-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    <span className="absolute bottom-2 left-3 text-[10px] font-bold mono-text">ABOUT PAGE</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    ["Public Access", "MySQL-driven public feed allowing non-logged users to browse recoverables."],
                                    ["Information Hub", "Details the system's mission and technical architecture to the BCP community."],
                                    ["Contact Channel", "A dedicated PHP contact form for direct inquiries and recovery support."],
                                ].map(([label, text]) => (
                                    <div key={label} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] mono-text text-muted uppercase tracking-widest mb-1">{label}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{text}</p>
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

export default LostandFound;