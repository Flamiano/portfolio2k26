"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    ShieldCheck,
    Building2,
    FileArchive,
    Scale,
    UserCheck,
    CheckCircle2,
    Lock,
    Users,
    Monitor,
    Smartphone,
    MessageSquare,
    LayoutDashboard,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const Envirocab = () => {
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
                        Envirocab
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A TNVS (Transport Network Vehicle Service) integrated platform featuring an
                        Administrative Module — covering Facility Reservation, Document Management,
                        Legal Management, and Visitor Management — built for Module 9 of the system.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <a
                        href="https://tnvs-envirocab.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background rounded-full text-xs font-bold transition-all hover:opacity-90"
                    >
                        View Live Site <ExternalLink className="w-3 h-3" />
                    </a>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        System Status: Live
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Monitor className="w-3 h-3" />
                        Web + Mobile Responsive
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
                                    ["Developer", "John Roel Flamiano"],
                                    ["Platform", "Web Application"],
                                    ["Type", "TNVS Admin System"],
                                    ["Module", "Module 9 — Administrative"],
                                    ["Year", "2026"],
                                ].map(([label, val]) => (
                                    <div key={label} className="flex justify-between gap-2">
                                        <span className="text-muted font-medium shrink-0">{label}</span>
                                        <span className="font-semibold text-right">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "Next.js", "React", "TypeScript",
                                    "Supabase", "PostgreSQL", "Supabase Auth",
                                    "Tailwind CSS", "Framer Motion",
                                    "Nodemailer", "Vercel",
                                ].map((tech) => (
                                    <span key={tech} className="px-2.5 py-1 rounded-full border border-border bg-background text-[10px] font-bold mono-text">
                                        {tech}
                                    </span>
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


                        {/* Key Features */}
                        <div className="p-6 rounded-3xl border border-border bg-card space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mono-text">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "User Registration & Login",
                                    "Dark / Light Mode",
                                    "Admin Management",
                                    "Facility Reservation",
                                    "Document Management",
                                    "Document Organization",
                                    "Legal Management",
                                    "Legal Vehicle Records",
                                    "Visitor Management",
                                    "Real-Time Messaging",
                                    "Mobile Responsive Design",
                                    "Integrated TNVS Platform",
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

                        {/* Project Background */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">Project Background</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                Envirocab is a large-scale TNVS platform composed of multiple integrated modules
                                built by different teams. Our contribution covers Module 9 — the Administrative
                                Module — which handles the internal operational backbone of the system: facility
                                booking, document handling, legal compliance, and visitor tracking.
                            </p>

                            <img
                                src="/images/projects/Envirocab/landingpage.jpeg"
                                alt="Envirocab Landing Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Facility Reservation",
                                        desc: "Reserve rooms and equipment in real-time with automatic conflict detection and status management.",
                                    },
                                    {
                                        title: "Document Archiving",
                                        desc: "Secure upload, organization, and retrieval of important files with structured categorization.",
                                    },
                                    {
                                        title: "Legal File Management",
                                        desc: "Ensure compliance and traceability with vehicle and employee legal records, review workflows.",
                                    },
                                    {
                                        title: "Visitor Logging",
                                        desc: "Real-time visitor registration and historical reports to improve security and operational planning.",
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
                                    <h2 className="text-xl font-bold">Authentication</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Login, Register & Dark Mode</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Users access the platform through a secure login and registration flow. The system
                                supports both light and dark mode, with a clean mobile-responsive auth UI designed
                                for ease of use across all devices.
                            </p>

                            {/* Desktop auth */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Loginpage.png"
                                        alt="Login Page"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Login</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/RegisterUser.png"
                                        alt="Register User"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Register</p>
                                </div>
                            </div>

                            {/* Mobile auth — 3 cols */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Envirocab/Mobile/LoginPage.jpg", label: "Mobile Login" },
                                    { src: "/images/projects/Envirocab/Mobile/LoginPageDark.jpg", label: "Dark Mode" },
                                    { src: "/images/projects/Envirocab/Mobile/RegisterUser.jpg", label: "Register" },
                                ].map((item) => (
                                    <div key={item.label} className="space-y-2">
                                        <img
                                            src={item.src}
                                            alt={item.label}
                                            className="rounded-2xl border border-border w-full object-cover"
                                        />
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-background border border-border flex flex-col gap-3">
                                <p className="text-xs font-bold">Auth Module</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Secure authentication built on Supabase Auth — with role-based session management ensuring users only access their permitted administrative modules.
                                </p>
                                <ul className="space-y-1.5">
                                    {[
                                        { icon: <Lock className="w-3 h-3" />, text: "Encrypted Session Management" },
                                        { icon: <Users className="w-3 h-3" />, text: "Role-Based Access Control" },
                                        { icon: <Smartphone className="w-3 h-3" />, text: "Dark & Light Mode Support" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                            {item.icon} {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Homepage & Navigation */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <LayoutDashboard className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Homepage & Navigation</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">System Entry Point</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The homepage provides users a clean entry point to the administrative module —
                                surfacing key navigation links and module overviews. The navbar adapts to mobile
                                viewports with a collapsible menu for full responsiveness.
                            </p>

                            <img
                                src="/images/projects/Envirocab/Desktop/Homepage.png"
                                alt="Homepage Desktop"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            {/* Mobile homepage — 3 cols */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Envirocab/Mobile/HomePage.jpg", label: "Home" },
                                    { src: "/images/projects/Envirocab/Mobile/HomaPage2.jpg", label: "Home 2" },
                                    { src: "/images/projects/Envirocab/Mobile/NavBar.jpg", label: "Navbar" },
                                ].map((item) => (
                                    <div key={item.label} className="space-y-2">
                                        <img
                                            src={item.src}
                                            alt={item.label}
                                            className="rounded-2xl border border-border w-full object-cover"
                                        />
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Envirocab/Mobile/HomePage3.jpg"
                                    alt="Home 3"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Extended View</p>
                            </div>
                        </section>

                        {/* Admin Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Admin Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">User & Role Administration</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Administrators have full control over user accounts — managing roles, access levels,
                                and account status across the TNVS system. The admin panel provides a centralized
                                view of all registered users with CRUD operations.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/AdminManagement.png"
                                        alt="Admin Management Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Admin Panel</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/AdminManagement.jpg"
                                        alt="Admin Management Mobile"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Admin Panel</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Envirocab/Mobile/RegisterUser2.jpg"
                                    alt="Register User 2"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — User Registration Flow</p>
                            </div>
                        </section>

                        {/* Facility Reservation */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Facility Reservation</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Real-Time Room & Equipment Booking</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Facility Reservation module allows staff to book rooms and equipment in real-time.
                                Automatic conflict detection prevents double-bookings, and reservation status is
                                tracked and updated throughout the approval workflow.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Facilities.png"
                                        alt="Facilities Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Facilities</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/Facilities2.jpg"
                                        alt="Facilities Mobile"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Facilities</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Conflict-Free Scheduling</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The reservation engine validates every booking against existing schedules in real-time —
                                    blocking overlapping requests before submission and keeping facility availability
                                    accurate at all times.
                                </p>
                            </div>
                        </section>

                        {/* Document Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <FileArchive className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Document Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Archiving & Organization</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Document Management module handles secure upload, structured organization,
                                and retrieval of institutional files. Documents are categorized for fast access
                                with role-based visibility ensuring only authorized users can view or modify records.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Document.png"
                                        alt="Document Management Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Documents</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/DocumentOrg.png"
                                        alt="Document Organization"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Organization</p>
                                </div>
                            </div>

                            {/* Mobile document views */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/EmployeeDocument.jpg"
                                        alt="Employee Document"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Employee Documents</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/DocumentOrganization_.jpg"
                                        alt="Document Organization Mobile"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Doc Organization</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Secure Archiving", "Files are stored securely with role-based access — only authorized personnel can retrieve, edit, or delete archived documents."],
                                    ["Structured Organization", "Documents are categorized by type and department — eliminating the chaos of scattered files and enabling instant retrieval."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Legal Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Scale className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Legal Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Contracts, Vehicles & Employee Records</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Legal Management module maintains compliance and traceability across three
                                record types — contracts, vehicle legal documentation, and employee legal files.
                                All records are version-tracked and accessible only to authorized roles.
                            </p>

                            {/* Desktop legal views */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Legal.png"
                                        alt="Legal Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Legal</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Legal Vehicle.png"
                                        alt="Legal Vehicle"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Vehicles</p>
                                </div>
                            </div>

                            {/* Mobile legal views — 3 cols */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Envirocab/Mobile/LegalContracts.jpg", label: "Contracts" },
                                    { src: "/images/projects/Envirocab/Mobile/LegalEmployee.jpg", label: "Employee" },
                                    { src: "/images/projects/Envirocab/Mobile/LegalVehicle_.jpg", label: "Vehicle" },
                                ].map((item) => (
                                    <div key={item.label} className="space-y-2">
                                        <img
                                            src={item.src}
                                            alt={item.label}
                                            className="rounded-2xl border border-border w-full object-cover"
                                        />
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — {item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Full Legal Traceability</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Every legal document — whether for a vehicle, employee, or contract — is logged
                                    with version history and timestamps. This ensures the TNVS system remains
                                    compliant and auditable at every operational level.
                                </p>
                            </div>
                        </section>

                        {/* Visitor Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <UserCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Visitor Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Real-Time Logging & History</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Visitor Management module allows staff to register and track visitors in
                                real-time. Historical visitor records are stored and accessible for security
                                reviews and operational planning — giving administrators a full picture of
                                facility access at any point in time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Visitor.png"
                                        alt="Visitor Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Visitors</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/VisitorManagement_.jpg"
                                        alt="Visitor Mobile"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Visitors</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Envirocab/Mobile/VisitorManagement2.jpg"
                                    alt="Visitor Management 2"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Visitor Log Detail</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Real-Time Registration", "Visitors are logged instantly on arrival — ensuring the facility roster is always up to date without manual paperwork."],
                                    ["Historical Reports", "All visitor records are retained and searchable — enabling security reviews and access pattern analysis over time."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Messaging */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Messaging</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                An integrated messaging system lets administrators and staff communicate directly
                                within the platform — keeping all operational communication in one place without
                                relying on external tools.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Desktop/Message.png"
                                        alt="Messages Desktop"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Desktop — Messages</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Envirocab/Mobile/Messages_.jpg"
                                        alt="Messages Mobile"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Mobile — Messages</p>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Envirocab;