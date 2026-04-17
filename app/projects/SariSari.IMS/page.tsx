"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    ShieldCheck,
    Box,
    ShoppingCart,
    BarChart3,
    Users,
    Lock,
    CheckCircle2,
    Mail,
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

const SariSariIMS = () => {
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
                        SariSari.IMS
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A comprehensive Inventory Management System engineered to modernize
                        traditional retail through secure, multi-role administration and
                        real-time sales analytics.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <a
                        href="https://sarisariims.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background rounded-full text-xs font-bold transition-all hover:opacity-90"
                    >
                        Launch Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        System Status: Operational
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
                                    ["Architecture", "Client-Server (BaaS)"],
                                    ["Type", "Web Platform"],
                                    ["Subject", "IAS 2 • March 2026"],
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
                                        "Licudan, Jhon Peter R.",
                                        "Martin, John Kevin",
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
                                    "Next.js 16", "React 19", "TypeScript", "Tailwind CSS",
                                    "Supabase", "PostgreSQL", "Supabase Auth", "Recharts", "jsPDF", "SheetJS",
                                    "Framer Motion", "Lucide Icons", "Vercel",
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
                                    "Multi-Factor Authentication (MFA/2FA)",
                                    "Role-Based Access Control (RBAC)",
                                    "Real-Time Inventory Tracking",
                                    "Intelligent Point of Sale (POS)",
                                    "Debt & Utang Tracker",
                                    "Business Analytics & Charts",
                                    "PDF & Excel Report Export",
                                    "Supplier / Vendor Directory",
                                    "Session Idle Timeout Security",
                                    "Transactional Audit Trail",
                                    "Staff Performance Monitoring",
                                    "Automated Email Notifications",
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
                                SariSari.IMS was designed to replace manual paper-ledger workflows of traditional
                                sari-sari stores with a secure, automated digital ecosystem built around three core objectives:
                            </p>
                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Automated Financial Accuracy",
                                        desc: "Eliminate arithmetic errors through automated POS calculations, batch costing for prepared meals, and real-time change computation — reducing manual workload by an estimated 85%.",
                                    },
                                    {
                                        title: "Operational Security & Access Control",
                                        desc: "Enforce Multi-Factor Authentication (MFA/2FA) for administrative access and RBAC to ensure each user — Owner, Cashier, or Staff — sees only what their role permits.",
                                    },
                                    {
                                        title: "Data Integrity & Business Intelligence",
                                        desc: "Replace vulnerable physical ledgers with a cloud-backed PostgreSQL database, complete with visual analytics, PDF/Excel exports, and a full digital audit trail.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Authentication */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Authentication System</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Security & Multi-Factor Auth</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Secure authentication with role-based access control ensures proper data segregation
                                between Owners, Staff, and Cashiers. The system uses Gmail SMTP via custom App Passwords
                                for 2FA code delivery, combined with Supabase Auth for encrypted session management.
                            </p>

                            {/* Login — full width */}
                            <img
                                src="/images/projects/SariSari.IMS/auth/login.jpeg"
                                alt="Login Interface"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            {/* 2FA · Forgot · Auth Module
        Mobile: 2 images side-by-side on top, Auth Module card full-width below
        Desktop (sm+): all 3 in one row, equal height, no crop
    */}
                            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                                {/* Two images: side-by-side on mobile, stacked vertically on desktop */}
                                <div className="grid grid-cols-2 sm:contents sm:flex sm:flex-col gap-3">
                                    <img
                                        src="/images/projects/SariSari.IMS/auth/2FA.png"
                                        alt="2FA Screen"
                                        className="rounded-2xl border border-border w-full object-contain bg-background sm:flex-1"
                                    />
                                    <img
                                        src="/images/projects/SariSari.IMS/auth/forgot.png"
                                        alt="Password Recovery"
                                        className="rounded-2xl border border-border w-full object-contain bg-background sm:flex-1"
                                    />
                                </div>

                                {/* Auth Module card */}
                                <div className="p-4 rounded-2xl bg-background border border-border flex flex-col justify-center gap-3 sm:w-1/3 sm:shrink-0">
                                    <p className="text-xs font-bold">Auth Module</p>
                                    <p className="text-[11px] text-muted leading-relaxed">
                                        Built on Supabase Auth for reliable 2FA delivery.
                                    </p>
                                    <ul className="space-y-1.5">
                                        {[
                                            { icon: <Lock className="w-3 h-3" />, text: "Multi-Factor Auth" },
                                            { icon: <Users className="w-3 h-3" />, text: "Role-Based Permissions" },
                                            { icon: <ShieldCheck className="w-3 h-3" />, text: "Secure Sessions" },
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                                {item.icon} {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* User Experience / Secure Recovery */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["User Experience", "Login features a 'Remember Me' option and password visibility toggle for enhanced usability."],
                                    ["Secure Recovery", "Password reset links sent exclusively to registered email addresses with real-time UI alerts."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Email Notification System */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Email Notification System</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Actual emails received by users</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The system sends branded transactional emails at key security moments — when a user
                                registers, logs in with 2FA, or changes their password. All emails are delivered via
                                Gmail SMTP using custom App Passwords, ensuring reliable inbox delivery.
                            </p>

                            {/* Email screenshots — 3 cols on all sizes, small on mobile */}
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    {
                                        src: "/images/projects/SariSari.IMS/email/8digits.jpg",
                                        alt: "8-digit OTP Email",
                                        label: "Login OTP",
                                        desc: "8-digit one-time code sent on every login.",
                                    },
                                    {
                                        src: "/images/projects/SariSari.IMS/email/confim.jpg",
                                        alt: "Sign Up Confirmation Email",
                                        label: "Welcome Email",
                                        desc: "Sent upon successful account registration.",
                                    },
                                    {
                                        src: "/images/projects/SariSari.IMS/email/passwordnotif.jpg",
                                        alt: "Password Change Notification",
                                        label: "Password Alert",
                                        desc: "Sent when an account password is changed.",
                                    },
                                ].map((item) => (
                                    <div key={item.label} className="space-y-1.5">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="rounded-xl border border-border w-full object-cover aspect-[3/4]"
                                        />
                                        <div className="px-0.5">
                                            <p className="text-[9px] font-bold mono-text text-muted uppercase tracking-widest">{item.label}</p>
                                            <p className="text-[10px] text-muted leading-relaxed mt-0.5 hidden sm:block">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">Dual Notification System</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Real-time dashboard bell alerts handle internal updates, while branded email
                                    notifications manage all external client communication — ensuring no security
                                    event goes unnoticed by the account holder.
                                </p>
                            </div>
                        </section>

                        {/* Admin Dashboard */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Box className="w-4 h-4" />
                                </div>
                                <h2 className="text-xl font-bold">Admin Command Center</h2>
                            </div>

                            <img
                                src="/images/projects/SariSari.IMS/dashboard/1.png"
                                alt="Primary Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            {/* Dashboard screenshots — side by side, equal height, no whitespace */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                                <img
                                    src="/images/projects/SariSari.IMS/dashboard/2.png"
                                    alt="Dashboard Analytics"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                                <img
                                    src="/images/projects/SariSari.IMS/dashboard/3.png"
                                    alt="Navigation"
                                    className="rounded-xl border border-border w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Real-Time Operational Monitoring</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The central hub gives owners immediate visibility into store performance — total sales,
                                    total products, and system-wide low-stock alerts from a single unified view.
                                    Dashboard access requires a re-entry password to protect sensitive financial summaries.
                                </p>
                            </div>

                            {/* Efficiency / Precision */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Efficiency", "Reduces manual calculation time by 85% through automated totals."],
                                    ["Precision", "Real-time low-stock alerts prevent missed sales opportunities."],
                                ].map(([label, text]) => (
                                    <div key={label} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] mono-text text-muted uppercase tracking-widest mb-1">{label}</p>
                                        <p className="text-[11px] font-medium italic">{`"${text}"`}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inventory & POS */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <ShoppingCart className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Inventory & Sales Protocol</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Operational Infrastructure</p>
                                </div>
                            </div>

                            {/* Inventory screenshots — stacks to 1 col on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <img src="/images/projects/SariSari.IMS/inventory/1.png" alt="Inventory Table" className="rounded-2xl border border-border w-full" />
                                <img src="/images/projects/SariSari.IMS/inventory/2.png" alt="Inventory Edit" className="rounded-2xl border border-border w-full" />
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Automated Inventory Management</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Full CRUD across Almusal, Meryenda, and Sari-Sari categories with history tracking,
                                    bulk stock updates, and automated batch-cost calculation. Row Level Security (RLS)
                                    ensures only authorized roles can modify stock levels.
                                </p>
                            </div>

                            <img src="/images/projects/SariSari.IMS/pos/1.png" alt="POS Terminal" className="rounded-2xl border border-border w-full" />
                            <div className="p-4 rounded-2xl border border-border bg-background/50 text-center">
                                <p className="text-xs font-bold italic mb-1">Optimized Point of Sale</p>
                                <p className="text-[11px] text-muted">
                                    Seamless checkout for high-frequency retail. Disables item buttons when stock is zero
                                    and timestamps every transaction to the active User ID.
                                </p>
                            </div>

                            {/* Export screenshots — stacks to 1 col on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { src: "/images/projects/SariSari.IMS/inventory/excel.png", label: "XLSX EXPORT", alt: "Excel Export" },
                                    { src: "/images/projects/SariSari.IMS/inventory/pdf.png", label: "PDF INVOICING", alt: "PDF Invoice" },
                                ].map((item) => (
                                    <div key={item.label} className="relative overflow-hidden rounded-2xl border border-border group">
                                        <img src={item.src} alt={item.alt} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                        <span className="absolute bottom-2 left-3 text-[10px] font-bold mono-text">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Business Intelligence */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <BarChart3 className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Business Intelligence</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                The Analytics module converts raw sales data into visual charts, enabling the owner to
                                identify revenue trends, top-selling products, and cashier efficiency — all protected
                                by server-side data aggregation.
                            </p>
                            {/* Analytics screenshots — stacks to 1 col on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <img src="/images/projects/SariSari.IMS/analytics/1.png" className="rounded-2xl border border-border w-full" alt="Analytics 1" />
                                <img src="/images/projects/SariSari.IMS/analytics/2.png" className="rounded-2xl border border-border w-full" alt="Analytics 2" />
                                <img src="/images/projects/SariSari.IMS/analytics/3.png" className="rounded-2xl border border-border w-full" alt="Analytics 3" />
                                <img src="/images/projects/SariSari.IMS/analytics/4.png" className="rounded-2xl border border-border w-full" alt="Analytics 4" />
                            </div>
                        </section>

                        {/* Human Capital */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <Users className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Human Capital Management</h2>
                            </div>
                            {/* Staff screenshots — stacks to 1 col on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <img src="/images/projects/SariSari.IMS/staff/1.png" className="rounded-2xl border border-border w-full" alt="Staff 1" />
                                <img src="/images/projects/SariSari.IMS/staff/2.png" className="rounded-2xl border border-border w-full" alt="Staff 2" />
                            </div>
                            <div className="p-5 rounded-2xl">
                                <p className="text-sm font-bold italic leading-tight mb-2">
                                    "Securing operational workflows by managing personnel access levels."
                                </p>
                                <p className="text-[10px] opacity-60 mono-text uppercase tracking-widest mb-3">— Admin Module</p>
                                <p className="text-xs opacity-80 leading-relaxed">
                                    The Staff Management module allows the owner to create, modify, or delete staff
                                    accounts and assign access rights — Cashier vs. Staff-Worker. This is a High-Privilege
                                    module requiring MFA/2FA to prevent unauthorized privilege escalation.
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

export default SariSariIMS;