"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    ShieldCheck,
    LayoutDashboard,
    Globe,
    Users,
    CheckCircle2,
    Lock,
    Smartphone,
    MessageSquare,
    Settings,
    Star,
    Printer,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const Adventours = () => {
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
                        AdvenTours
                    </h1>
                    <p className="text-sm text-muted max-w-2xl leading-relaxed">
                        A responsive and dynamic travel booking website built with PHP, MySQL, Bootstrap,
                        and JavaScript. This platform allows users to explore popular destinations, book
                        appointments or inquire about flights, and view travel information — complete with
                        an admin dashboard for managing bookings, users, appointments, and inquiries.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <a
                        href="https://adventourstravelinc.com"
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
                        <Smartphone className="w-3 h-3" />
                        Web Responsive
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
                                    ["Type", "Travel Booking System"],
                                    ["Stack", "PHP + MySQL"],
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
                                    "PHP >= 7.4",
                                    "MySQL",
                                    "Bootstrap",
                                    "JavaScript",
                                    "Chart.js",
                                    "FontAwesome",
                                    "Composer",
                                    "Node.js",
                                    "npm",
                                    "XAMPP / Laragon",
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
                                        "Arcueno, Nechol Jane A",
                                        "Flamiano, John Roel R.",
                                        "Hallig, Maria Victoria M.",
                                        "Legaspi, Eloisa Jannel B.",
                                        "Longabela, Michelle G.",
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
                                    "OTP Email Verification",
                                    "One-Way & Roundtrip Inquiry",
                                    "Admin Dashboard",
                                    "Booking Management",
                                    "Appointment Management",
                                    "User Management (CRUD)",
                                    "Promotions Management",
                                    "Flight Inquiries",
                                    "Destination Info Pages",
                                    "Real-Time Feedback",
                                    "Print & Export Reports",
                                    "Chart.js Analytics",
                                    "Responsive Bootstrap UI",
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
                                AdvenTours Travel Inc. is a full-featured travel booking platform that brings
                                curated Philippine travel experiences online. Built with PHP and MySQL, the system
                                enables users to explore destinations like Bohol and Jomalig Island, inquire about
                                flights, and book appointments — while administrators manage every aspect of the
                                operation through a centralized dashboard.
                            </p>

                            <img
                                src="/images/projects/Adventours/landingpage.jpeg"
                                alt="AdvenTours Landing Page"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Flight Inquiry System",
                                        desc: "Users can inquire about one-way or roundtrip travel between regions, with admin review and response workflows.",
                                    },
                                    {
                                        title: "Appointment Booking",
                                        desc: "Travelers can book appointments with the agency, which admins can approve or disapprove with status tracking.",
                                    },
                                    {
                                        title: "Destination Showcase",
                                        desc: "Rich destination pages with Wikipedia-style layout covering nature spots, islands, and highlands across the Philippines.",
                                    },
                                    {
                                        title: "Admin Control Center",
                                        desc: "Full CRUD management of users, promotions, bookings, appointments, and flight inquiries from one dashboard.",
                                    },
                                ].map((obj, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-xs font-bold mb-1">{obj.title}</p>
                                        <p className="text-xs text-muted leading-relaxed">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Services & About */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Landing Page</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Services, About & Public Pages</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The public-facing site greets visitors with a hero section, destination highlights,
                                and service overviews. The About and Services pages communicate the agency's
                                offerings and mission — all wrapped in a fully responsive Bootstrap layout with
                                FontAwesome icons throughout.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/services.png"
                                        alt="Services Page"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Services Page</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/about.png"
                                        alt="About Page"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">About Page</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Adventours/realtime-dynamic-feedback.png"
                                    alt="Real-Time Dynamic Feedback"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Real-Time Dynamic Feedback</p>
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
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Login, Register & OTP Verification</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Users register and log in through a secure auth flow with OTP email verification.
                                The system also includes a full forgot-password and reset-password workflow, ensuring
                                account recovery without compromising security.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/auth/login.png"
                                        alt="Login Page"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Login</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/auth/register.png"
                                        alt="Register Page"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Register</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Adventours/auth/enter-otp.png", label: "OTP Verification" },
                                    { src: "/images/projects/Adventours/auth/forgot.png", label: "Forgot Password" },
                                    { src: "/images/projects/Adventours/auth/reset-password.png", label: "Reset Password" },
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
                                    Secure session-based authentication with OTP email verification — ensuring only verified users can access booking and inquiry features.
                                </p>
                                <ul className="space-y-1.5">
                                    {[
                                        { icon: <Lock className="w-3 h-3" />, text: "Session-Based Auth" },
                                        { icon: <MessageSquare className="w-3 h-3" />, text: "OTP Email Verification" },
                                        { icon: <Users className="w-3 h-3" />, text: "Role-Based Access Control" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-muted">
                                            {item.icon} {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* User Dashboard */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <LayoutDashboard className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">User Dashboard</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Bookings, Inquiries & Promotions</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Logged-in users access a personal dashboard where they can manage their appointments,
                                submit flight inquiries for one-way or roundtrip travel, and browse active promotions
                                from the agency.
                            </p>

                            <img
                                src="/images/projects/Adventours/user/dashboard.png"
                                alt="User Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Adventours/user/book-appointment.png", label: "Book Appointment" },
                                    { src: "/images/projects/Adventours/user/flight-inquiries.png", label: "Flight Inquiries" },
                                    { src: "/images/projects/Adventours/user/view-promotions.png", label: "View Promotions" },
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["One-Way & Roundtrip Inquiry", "Users can inquire about flights between Philippine regions with a structured form covering travel type, dates, and passenger details."],
                                    ["Appointment Booking", "Users submit appointment requests to meet with agency staff — subject to admin approval with real-time status updates."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Admin Dashboard */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Settings className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Admin Dashboard</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Bookings, Users, Appointments & Inquiries</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                Administrators get a full-featured dashboard with Chart.js analytics and
                                operational overviews. From here, they can manage all users, approve or
                                disapprove appointments, handle flight inquiries, and control promotional
                                content — all in one place.
                            </p>

                            <img
                                src="/images/projects/Adventours/admin/dashboard.png"
                                alt="Admin Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/admin/admin-can-approved-or-disapproved-appointment.png"
                                        alt="Approve/Disapprove Appointment"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Approve / Disapprove Appointments</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/admin/flight-inquiries.png"
                                        alt="Flight Inquiries Admin"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Flight Inquiries Management</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/admin/admin-crud-users.png"
                                        alt="Admin CRUD Users"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User Management (CRUD)</p>
                                </div>
                                <div className="space-y-2">
                                    <img
                                        src="/images/projects/Adventours/admin/admin-crud-promotions.png"
                                        alt="Admin CRUD Promotions"
                                        className="rounded-2xl border border-border w-full object-cover"
                                    />
                                    <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Promotions Management (CRUD)</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <img
                                    src="/images/projects/Adventours/admin/admin-contact-inputted-by-users.png"
                                    alt="Contact Messages"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">User Contact Messages</p>
                            </div>
                        </section>

                        {/* Master Admin */}
                        <section className="p-6 rounded-3xl border border-border bg-card space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground text-background">
                                    <Star className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Master Admin</h2>
                                    <p className="text-[10px] text-muted mono-text uppercase tracking-widest">Super Admin Controls & Reporting</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted leading-relaxed">
                                The Master Admin role sits above the standard Admin — with exclusive access to
                                manage and create other admin accounts, view full system history, and generate
                                printable reports across all users and operational records.
                            </p>

                            <img
                                src="/images/projects/Adventours/master-admin/dashboard.png"
                                alt="Master Admin Dashboard"
                                className="rounded-2xl border border-border w-full object-cover"
                            />

                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { src: "/images/projects/Adventours/master-admin/crud-admin.png", label: "Manage Admins" },
                                    { src: "/images/projects/Adventours/master-admin/history.png", label: "System History" },
                                    { src: "/images/projects/Adventours/master-admin/view-all-users-can-print.png", label: "View All Users" },
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
                                    src="/images/projects/Adventours/master-admin/print-view.png"
                                    alt="Print View"
                                    className="rounded-2xl border border-border w-full object-cover"
                                />
                                <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest px-0.5">Print View — Exportable Reports</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ["Admin Account Management", "Master admins can create, update, or remove regular admin accounts — maintaining full hierarchy control over who operates the platform."],
                                    ["Printable Reports", "All user records and operational data can be exported to a print-ready view — enabling physical archiving and audit trails."],
                                ].map(([title, desc]) => (
                                    <div key={title} className="p-4 rounded-2xl border border-border bg-background/50">
                                        <p className="text-[10px] font-bold mono-text text-muted uppercase tracking-widest mb-1">{title}</p>
                                        <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
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

export default Adventours;