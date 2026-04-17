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
    Building2,
    FileArchive,
    Scale,
    UserCheck,
    Settings,
    MessageSquare,
    Monitor,
    Crown,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const ViaVanta = () => {
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
                        ViaVanta
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A multi-role property and facility management platform featuring real-time reservations,
                        document archiving, legal file management, visitor logging, and a three-tier role
                        system — Master Admin, Admin, and User.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        System Status: Operational
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Monitor className="w-3 h-3" />
                        Web Application
                    </div>
                    <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                        <Crown className="w-3 h-3" />
                        3-Tier Role System
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
                                    ["Platform", "Web Application"],
                                    ["Type", "Facility Management"],
                                    ["Roles", "Master Admin / Admin / User"],
                                    ["Year", "2026"],
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
                                    "Next.js 15", "React 19", "TypeScript",
                                    "Supabase", "PostgreSQL", "Supabase Auth",
                                    "Tailwind CSS", "Framer Motion", "Recharts",
                                    "Nodemailer", "react-pdf", "Lucide Icons", "Vercel",
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
                                    "Facility Reservation System",
                                    "Document Archiving",
                                    "Legal File Management",
                                    "Visitor Logging & Reports",
                                    "Real-Time Chat (Admin ↔ User)",
                                    "Role-Based Access Control",
                                    "Email Notifications",
                                    "Master Admin Dashboard",
                                    "Admin User Management",
                                    "Print & Report Export",
                                    "Settings & Profile Control",
                                    "Conflict Detection",
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

                        {/* Landing Page */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <h2 className="text-xl font-bold text-foreground">System Overview</h2>
                            <p className="text-sm text-muted leading-relaxed">
                                ViaVanta is a fully integrated facility and property management platform built around
                                a three-tier role architecture — Master Admin, Admin, and User. It centralizes
                                reservations, archiving, compliance, visitor tracking, and real-time communication
                                into one secure, role-aware web system.
                            </p>

                            <img
                                src="/images/projects/Viavanta/landingpage.jpeg"
                                alt="ViaVanta Landing Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    {
                                        title: "Public Landing Page",
                                        desc: "A clean, professional landing page that presents ViaVanta's core offerings and routes visitors to the appropriate login portal.",
                                    },
                                    {
                                        title: "Solutions Page",
                                        desc: "Detailed breakdown of the platform's four core modules — reservations, archiving, legal management, and visitor logging.",
                                    },
                                ].map((obj) => (
                                    <div key={obj.title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <img
                                src="/images/projects/Viavanta/pages/solutions.png"
                                alt="ViaVanta Solutions Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                        </section>

                        {/* Authentication */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Authentication & Role Portals</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Three-Tier Login System</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                ViaVanta operates three separate login portals — one for each role tier. Each portal
                                is secured with Supabase Auth, email-based registration confirmation, and
                                role-validated session management. Users register and await admin approval before
                                gaining access.
                            </p>

                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Viavanta/auth/login.png", label: "User Login" },
                                    { src: "/images/projects/Viavanta/auth/adminlogin.png", label: "Admin Login" },
                                    { src: "/images/projects/Viavanta/auth/masterlogin.png", label: "Master Login" },
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

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/auth/register.png"
                                        alt="Registration"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Register</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/auth/email-notificaiton-after-registration.png"
                                        alt="Registration Email"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Welcome Email</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-background border border-border flex flex-col gap-3">
                                <p className="text-xs font-bold">Auth Module</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Powered by Supabase Auth with admin approval workflow — users register, receive a confirmation email, and are only activated once an admin approves their account.
                                </p>
                                <ul className="space-y-1.5">
                                    {[
                                        { icon: <Lock className="w-3 h-3" />, text: "Role-Segregated Login Portals" },
                                        { icon: <Mail className="w-3 h-3" />, text: "Email Notification on Registration" },
                                        { icon: <UserCheck className="w-3 h-3" />, text: "Admin Approval Before Access" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                            {item.icon} {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Master Admin */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Crown className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Master Admin</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Highest Privilege Tier</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Master Admin sits at the top of the role hierarchy with full system-wide
                                visibility — managing all admin accounts, viewing all users across tenants,
                                generating reports, and accessing a consolidated overview dashboard.
                            </p>

                            <img
                                src="/images/projects/Viavanta/master-admin/dashboard.png"
                                alt="Master Admin Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/master-admin/crud-admin.png"
                                        alt="Admin Management"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Admin CRUD</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/master-admin/view-all-users-and-print.png"
                                        alt="View All Users"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">All Users & Print</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/master-admin/view-reports.png"
                                        alt="Reports"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Reports</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/master-admin/settings.png"
                                        alt="Settings"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Settings</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">System-Wide Authority</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The Master Admin can create, edit, and remove admin accounts, view all registered
                                    users across the platform, export printable reports, and maintain full configuration
                                    control — without being bound by any tenant restrictions.
                                </p>
                            </div>
                        </section>

                        {/* Admin Dashboard */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <BarChart3 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Admin Dashboard</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Operational Command Center</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Admin dashboard consolidates all operational metrics — reservation status,
                                active users, document counts, and visitor logs — into a single real-time command
                                center. Admins manage all platform activity from here.
                            </p>

                            <img
                                src="/images/projects/Viavanta/admin/dashboard1.png"
                                alt="Admin Dashboard 1"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <img
                                src="/images/projects/Viavanta/admin/dashboard2.png"
                                alt="Admin Dashboard 2"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                        </section>

                        {/* Admin — User Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">User Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Admin Controls & Email Notifications</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Admins have full authority over user accounts — approving registrations, editing status,
                                or removing users. Every critical action triggers an automated email notification
                                to the affected user, ensuring transparency throughout the lifecycle.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/crud-users.png"
                                        alt="User CRUD"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Users CRUD</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/admin-edit-status-users.png"
                                        alt="Edit User Status"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Edit Status</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/email-notification-after-approved-users.png"
                                        alt="Approval Email"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Approval Email</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/email-notificaiton-after-deleted-users.png"
                                        alt="Deletion Email"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Deletion Email</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">Transparent User Lifecycle</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Every status change — approval or removal — dispatches a branded email to the user,
                                    keeping them informed at every step without requiring them to re-check the portal.
                                </p>
                            </div>
                        </section>

                        {/* Facility Reservations */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Facility Reservation</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Real-Time Booking & Conflict Detection</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Users can browse and reserve rooms and equipment in real-time. The system
                                automatically detects scheduling conflicts and prevents double-bookings.
                                Admins manage all reservations with full CRUD controls and status workflows.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/users-can-reserve-facilities.png"
                                        alt="User Reserve Facilities"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User — Reserve</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/after-reserving-facilities-facility-view.png"
                                        alt="After Reserving"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Facility View</p>
                                </div>
                            </div>

                            <img
                                src="/images/projects/Viavanta/admin/crud-reservations.png"
                                alt="Admin Reservation CRUD"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                            <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Admin — Reservation CRUD</p>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Automated Conflict Detection</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    The reservation engine validates time slots against existing bookings in real-time —
                                    blocking overlapping requests before they're submitted and notifying users of available
                                    windows instantly.
                                </p>
                            </div>
                        </section>

                        {/* Document Archiving */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <FileArchive className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Document Archiving</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Secure Upload & Retrieval</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Admins can upload, organize, and retrieve important institutional documents
                                with built-in expiration rules. Users can access archived files relevant to
                                their account — all governed by role-based visibility controls.
                            </p>

                            <img
                                src="/images/projects/Viavanta/admin/admin-can-archive-documents-users.png"
                                alt="Document Archiving"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Secure Upload", "Documents are stored securely with role-based retrieval — only authorized roles can access, edit, or delete archived files."],
                                    ["Expiration Rules", "Files can be assigned expiration dates, automatically flagging outdated documents for review or removal."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Legal File Management */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Scale className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Legal File Management</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Compliance & Traceability</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Legal documents are managed through a dedicated compliance workflow — admins can
                                add digital legal papers, track versions, and maintain a full audit trail.
                                Users can view their associated cases and compliance files through a read-only portal.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/admin-can-add-legal-digital-papers.png"
                                        alt="Admin Add Legal Papers"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Admin — Legal Papers</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/user-can-view-casesOrCompliance.png"
                                        alt="User Legal View"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User — Cases View</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Compliance-Driven Architecture</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Legal file management enforces full traceability — every document action is logged,
                                    version-tracked, and accessible only to users with the appropriate role permissions,
                                    ensuring regulatory compliance at every level.
                                </p>
                            </div>
                        </section>

                        {/* Visitor Logging */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <UserCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Visitor Logging</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Real-Time Registration & History</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Admins can register visitors in real-time and access historical visitor reports
                                for security planning. Full CRUD operations allow management of visitor records
                                with timestamped entries for auditing purposes.
                            </p>

                            <img
                                src="/images/projects/Viavanta/admin/admin-can-crud-visitors.png"
                                alt="Visitor CRUD"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="p-4 rounded-2xl border border-border bg-background/50">
                                <p className="text-xs font-bold mb-1">Security & Planning Intelligence</p>
                                <p className="text-[11px] text-muted leading-relaxed">
                                    Every visitor entry is timestamped and stored — enabling historical reports that
                                    surface peak traffic periods, frequent visitors, and access patterns for improved
                                    facility security planning.
                                </p>
                            </div>
                        </section>

                        {/* Real-Time Chat */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Real-Time Chat</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Admin ↔ User Messaging</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                A built-in real-time messaging system connects users directly with admins —
                                enabling fast resolution of reservations, document queries, and compliance
                                questions without leaving the platform.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/admin/admin-can-chat-realtime-all-users.png"
                                        alt="Admin Chat"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Admin — Chat View</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/realtime-chat-with-admins.png"
                                        alt="User Chat"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User — Chat View</p>
                                </div>
                            </div>
                        </section>

                        {/* User Dashboard */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <BarChart3 className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">User Dashboard & Settings</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                Each user has a personal dashboard surfacing their active reservations,
                                documents, and compliance status at a glance — alongside a settings panel
                                for profile and account management.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/dashboard.png"
                                        alt="User Dashboard"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User Dashboard</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Viavanta/users/settings.png"
                                        alt="User Settings"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User Settings</p>
                                </div>
                            </div>
                        </section>

                        {/* Admin Settings */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <Settings className="w-4 h-4 text-muted" />
                                <h2 className="text-xl font-bold">Admin Settings</h2>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                Admin accounts have dedicated settings for profile management, notification
                                preferences, and security configuration — keeping administrators in full
                                control of their environment and access.
                            </p>
                            <img
                                src="/images/projects/Viavanta/admin/admin-settings.png"
                                alt="Admin Settings"
                                className="rounded-2xl border border-border w-full object-cover"
                            />
                        </section>

                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ViaVanta;