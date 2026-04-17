"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ShieldCheck,
    BarChart3,
    Users,
    Lock,
    CheckCircle2,
    Mail,
    Smartphone,
    BookOpen,
    PiggyBank,
    TrendingUp,
    Settings,
    CreditCard,
    Target,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const Moneyga = () => {
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
                        Case Study • 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                        Moneyga
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A personal finance mobile application built for graduating BSIT students —
                        featuring savings tracking, budget planning, earnings management, and
                        spend monitoring with a full documentation website and beta testing program.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        Beta Testing: Active
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Smartphone className="w-3 h-3" />
                        Mobile Application
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <BookOpen className="w-3 h-3" />
                        Documentation Site
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
                                    ["Platform", "Mobile Application"],
                                    ["Type", "Personal Finance App"],
                                    ["Subject", "Project • 2026"],
                                    ["Beta Users", "BSIT Graduating"],
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
                                        "Cañaveral, Bianca Mae D.",
                                        "Cruz, Mark Justin S.",
                                        "Dadivas, Jaymark N.",
                                        "Flamiano, John Roel R.",
                                        "Liducan, Jhon Peter R.",
                                        "Pablo, Airiz Mae O.",
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
                                    "React Native", "Expo", "TypeScript",
                                    "Supabase", "PostgreSQL", "Supabase Auth",
                                    "Next.js", "Tailwind CSS", "Email SMTP",
                                    "Recharts", "Vercel",
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
                                    "Email Confirmation on Register",
                                    "Ipon (Savings) Tracker",
                                    "Budget Plan Management",
                                    "Earnings CRUD",
                                    "Spending CRUD",
                                    "Financial Reports & Analytics",
                                    "Interactive Dashboard",
                                    "Documentation Website",
                                    "Beta Testing Program",
                                    "Settings & Profile Control",
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

                        {/* System Objectives */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">System Objectives</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                Moneyga was built to solve a real problem: graduating BSIT students transitioning
                                into the workforce have little to no tools to manage personal finances. The app
                                centralizes savings, income, spending, and planning into one cohesive mobile experience.
                            </p>
                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Financial Clarity at a Glance",
                                        desc: "A unified dashboard that shows savings progress, income vs. expenses, and upcoming budget plans — all in real-time without manual computation.",
                                    },
                                    {
                                        title: "Guided Savings & Budget Planning",
                                        desc: "Structured tools for creating and managing savings goals (Ipon) and budget plans with full CRUD capabilities, edit/delete workflows, and progress visualization.",
                                    },
                                    {
                                        title: "Documentation-First Development",
                                        desc: "Ships with a full documentation website covering project scope, quickstart guides, and an analytics page — built for beta testers and future maintainers.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Authentication & Email Confirmation */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Authentication & Email Confirmation</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Secure Onboarding Flow</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                User registration triggers an automated email confirmation before account activation.
                                Built on Supabase Auth, the system ensures only verified users access financial data,
                                with a clean login and registration UI designed for mobile-first usability.
                            </p>

                            {/* Login + Register side by side */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/auth/login.png"
                                        alt="Login Screen"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Login</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/auth/register.png"
                                        alt="Register Screen"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Register</p>
                                </div>
                            </div>

                            {/* Auth feature cards */}
                            <div className="p-4 rounded-2xl bg-background border border-border flex flex-col gap-3">
                                <p className="text-xs font-bold">Auth Module</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Powered by Supabase Auth with email confirmation on sign-up to verify user identity before granting access.
                                </p>
                                <ul className="space-y-1.5">
                                    {[
                                        { icon: <Mail className="w-3 h-3" />, text: "Email Confirmation on Registration" },
                                        { icon: <Lock className="w-3 h-3" />, text: "Encrypted Session Management" },
                                        { icon: <Users className="w-3 h-3" />, text: "Verified User Access Control" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                            {item.icon} {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Email Verification", "New accounts require email confirmation before the user can log in — preventing unauthorized access from unverified registrations."],
                                    ["Mobile-First UX", "Clean, minimal auth screens designed for phone-sized viewports with intuitive form validation and real-time feedback."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Dashboard & Home */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Dashboard & Home Screen</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Financial Overview at a Glance</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The home and dashboard screens give users an immediate snapshot of their financial
                                health — total savings, recent transactions, and budget progress — all surfaced
                                without requiring any manual input after initial setup.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/home.png"
                                        alt="Home Screen"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Home</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/dashboard.png"
                                        alt="Dashboard"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Dashboard</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Unified Financial Command Center</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The dashboard aggregates data from all modules — earnings, spendings, savings, and plans —
                                    giving users a real-time picture of their financial standing without needing to navigate
                                    between screens.
                                </p>
                            </div>
                        </section>

                        {/* Ipon Tracker (Savings) */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <PiggyBank className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Ipon Tracker</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Savings Goal Management</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                "Ipon" (Filipino for savings) is the core feature of Moneyga — a dedicated tracker
                                for setting savings goals, monitoring progress, and building financial discipline
                                through structured goal-setting.
                            </p>

                            {/* Video demo */}
                            <div className="rounded-2xl border border-border overflow-hidden bg-background">
                                <video
                                    src="/images/projects/Moneyga/mobile/IponTracker.mp4"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="px-4 py-3">
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest">Live Demo — Ipon Tracker Workflow</p>
                                    <p className="text-[11px] text-muted mt-0.5">Create, update, and track savings goals in real-time.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold italic mb-1">"Designed for the Filipino saving mindset."</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Named after the local concept of saving money, Ipon Tracker bridges cultural
                                    financial habits with modern app design — making goal-based saving intuitive
                                    and motivating for BSIT graduates entering the workforce.
                                </p>
                            </div>
                        </section>

                        {/* Earnings & Spending CRUD */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Earnings & Spending Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Full CRUD Operations</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Users can log income and spending entries with full create, read, update, and delete
                                capabilities. Both modules feed directly into the dashboard analytics and reports,
                                ensuring data is always current and accurate.
                            </p>

                            {/* Add Earn + Earn CRUD */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/add-earn.png"
                                        alt="Add Earning"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Add Earning</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/earn-crud.png"
                                        alt="Earnings CRUD"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Earnings CRUD</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Spending Tracker</p>
                                <p className="text-[11px] text-muted leading-relaxed mb-3">
                                    Log all expenditures by category with timestamps. Spending data flows into the
                                    analytics engine to surface trends and help users understand where their money goes.
                                </p>
                            </div>

                            <img
                                src="/images/projects/Moneyga/mobile/spend-crud.png"
                                alt="Spending CRUD"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Spending CRUD</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Income Logging", "Record multiple income streams with source labels, amounts, and dates — supporting freelancers, part-timers, and employed graduates alike."],
                                    ["Expense Tracking", "Categorized spending logs with instant totals — preventing budget overruns by keeping all expenditures visible and organized."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Budget Plan Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Target className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Budget Plan Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Plan, Edit & Delete Workflows</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Budget plans allow users to allocate money ahead of time — setting spending limits
                                per category or period. Full edit and delete functionality ensures plans stay
                                accurate as financial situations evolve.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/plan-crud.png"
                                        alt="Plan CRUD"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Plan CRUD</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/plan-edit-delete.png"
                                        alt="Plan Edit & Delete"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Edit & Delete</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Proactive Financial Planning</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Unlike reactive expense tracking, budget plans encourage users to plan forward — allocating
                                    funds before spending occurs. This shifts the mindset from tracking loss to controlling spend.
                                </p>
                            </div>
                        </section>

                        {/* Reports */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <BarChart3 className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Reports & Financial Analytics</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                The Reports screen aggregates all user data into digestible summaries and visual
                                breakdowns — helping users understand spending patterns, savings velocity, and
                                income trends over time.
                            </p>
                            <img
                                src="/images/projects/Moneyga/mobile/reports.png"
                                alt="Reports Screen"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Data-Driven Financial Decisions</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Reports pull from earnings, spendings, savings, and plan data in real-time — giving users
                                    actionable insight rather than raw numbers. Visual summaries replace the need for manual
                                    spreadsheet tracking.
                                </p>
                            </div>
                        </section>

                        {/* Settings */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <Settings className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Settings & Profile Management</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                Profile management and security options, keeping the user in full
                                control of their experience.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/settings1.png"
                                        alt="Settings Screen 1"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Settings — General</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/mobile/settings2.png"
                                        alt="Settings Screen 2"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Settings — Security</p>
                                </div>
                            </div>
                        </section>

                        {/* Documentation Website */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Documentation Website</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">For Beta Testers & Developers</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Moneyga ships with a full companion documentation website covering project scope,
                                quickstart guides, an analytics dashboard, and a blog — serving both beta testers
                                onboarding to the app and future developers maintaining the codebase.
                            </p>

                            {/* Docs Overview full width */}
                            <img
                                src="/images/projects/Moneyga/pages/docs-overview.png"
                                alt="Documentation Overview"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            {/* Quickstart + Project Scope */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/pages/docs-quickstart.png"
                                        alt="Quickstart Guide"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Quickstart Guide</p>
                                    <p className="text-[11px] text-muted px-0.5">Step-by-step onboarding for new beta testers to install and start using the app immediately.</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Moneyga/pages/docs-project-scope.png"
                                        alt="Project Scope"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Project Scope</p>
                                    <p className="text-[11px] text-muted px-0.5">Formal documentation of system boundaries, deliverables, and feature definitions for the capstone.</p>
                                </div>
                            </div>

                            {/* Analytics + Blog */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="relative overflow-hidden rounded-2xl border border-border group">
                                    <img
                                        src="/images/projects/Moneyga/pages/analytics.png"
                                        alt="Analytics Page"
                                        className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    <span className="absolute bottom-2 left-3 text-[10px] font-bold mono-text">ANALYTICS PAGE</span>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-border group">
                                    <img
                                        src="/images/projects/Moneyga/pages/blogs.png"
                                        alt="Blog Page"
                                        className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    <span className="absolute bottom-2 left-3 text-[10px] font-bold mono-text">BLOG PAGE</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">Documentation-First Philosophy</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Building the documentation website alongside the app — not after — ensured every feature was
                                    purposefully scoped and clearly communicated to beta testers. This reduced onboarding friction
                                    and produced higher-quality feedback during the testing phase.
                                </p>
                            </div>
                        </section>

                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Moneyga;