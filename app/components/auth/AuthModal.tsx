"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createClient } from "@/app/lib/supabase/supabase";
import { toast } from "sonner";

type Mode = "signin" | "signup";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultMode?: Mode;
}

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email.trim());
}

export default function AuthModal({ isOpen, onClose, defaultMode = "signin" }: AuthModalProps) {
    const [mode, setMode] = useState<Mode>(defaultMode);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<"Student" | "Professional">("Student");
    const [organization, setOrganization] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const supabase = createClient();

    useEffect(() => {
        if (isOpen) {
            setMode(defaultMode);
            setError("");
            setSuccess("");
        }
    }, [isOpen, defaultMode]);

    if (!isOpen) return null;

    const resetFields = () => {
        setFirstName(""); setLastName(""); setEmail("");
        setPassword(""); setOrganization(""); setError(""); setSuccess("");
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/api/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'select_account',
                },
            },
        });

        if (error) {
            setError(error.message);
            toast.error(error.message);
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        setError("");
        setSuccess("");
        setLoading(true);

        if (mode === "signup") {
            if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
                const msg = "Please fill in all required fields.";
                setError(msg);
                toast.error(msg);
                setLoading(false);
                return;
            }

            if (!validateEmail(email)) {
                const msg = "Please enter a valid email address (e.g. you@example.com).";
                setError(msg);
                toast.error(msg);
                setLoading(false);
                return;
            }

            if (password.length < 6) {
                const msg = "Password must be at least 6 characters.";
                setError(msg);
                toast.error(msg);
                setLoading(false);
                return;
            }

            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { first_name: firstName, last_name: lastName, role, organization },
                },
            });

            if (error) {
                const msg =
                    error.message.toLowerCase().includes("already registered") ||
                        error.message.toLowerCase().includes("user already exists") ||
                        error.message.toLowerCase().includes("email address is already")
                        ? "An account with this email already exists. Try signing in instead."
                        : error.message;
                setError(msg);
                toast.error(msg);
            } else {
                // Success: show toast, switch to sign-in after 2s
                toast.success("Account created! Check your email to confirm, then sign in.", {
                    duration: 4000,
                });
                setSuccess("✅ Check your email to confirm your account!");
                setTimeout(() => {
                    resetFields();
                    setMode("signin");
                }, 2000);
            }

        } else {
            if (!email.trim() || !password.trim()) {
                const msg = "Please enter your email and password.";
                setError(msg);
                toast.error(msg);
                setLoading(false);
                return;
            }

            if (!validateEmail(email)) {
                const msg = "Please enter a valid email address.";
                setError(msg);
                toast.error(msg);
                setLoading(false);
                return;
            }

            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                const msg =
                    error.message.toLowerCase().includes("invalid login") ||
                        error.message.toLowerCase().includes("invalid credentials")
                        ? "Incorrect email or password. Please try again."
                        : error.message;
                setError(msg);
                toast.error(msg);
            } else {
                toast.success("Welcome back! Signed in successfully.");
                onClose();
            }
        }

        setLoading(false);
    };

    const switchMode = (m: Mode) => {
        setMode(m);
        resetFields();
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">

                <button onClick={onClose}
                    className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors">
                    <X size={18} />
                </button>

                <h2 className="text-xl font-bold text-foreground mb-1">
                    {mode === "signin" ? "Sign In" : "Join the Community"}
                </h2>
                <p className="text-xs text-muted-foreground mb-5">
                    {mode === "signin"
                        ? "Welcome back! Sign in to your account."
                        : "Create your free account to join discussions."}
                </p>

                {/* Google Button */}
                <button onClick={handleGoogleSignIn} disabled={loading}
                    className="w-full flex items-center justify-center gap-3 border border-border rounded-xl py-2.5 text-sm font-medium text-foreground hover:bg-muted/20 transition-colors mb-4">
                    <svg width="18" height="18" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.4-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.5 16.3 44 24 44z" />
                        <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" />
                    </svg>
                    {mode === "signin" ? "Sign in with Google" : "Sign up with Google"}
                </button>

                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground">or</span>
                    <div className="flex-1 h-px bg-border" />
                </div>

                {/* Email Form */}
                <div className="space-y-3">
                    {mode === "signup" && (
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="text-xs text-muted-foreground mb-1 block">First Name <span className="text-red-500">*</span></label>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Juan"
                                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                            </div>
                            <div className="flex-1">
                                <label className="text-xs text-muted-foreground mb-1 block">Last Name <span className="text-red-500">*</span></label>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Dela Cruz"
                                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                            </div>
                        </div>
                    )}
                    <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                    </div>
                    <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                    </div>

                    {mode === "signup" && (
                        <>
                            <div>
                                <label className="text-xs text-muted-foreground mb-1.5 block">I am a <span className="text-red-500">*</span></label>
                                <div className="flex gap-2">
                                    {(["Student", "Professional"] as const).map((r) => (
                                        <button key={r} onClick={() => { setRole(r); setOrganization(""); }}
                                            className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${role === r
                                                ? "bg-foreground text-background border-foreground"
                                                : "bg-background border-border text-muted-foreground hover:border-foreground/30"
                                                }`}>
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-muted-foreground mb-1 block">
                                    {role === "Student" ? "School / University" : "Company"} <span className="text-muted-foreground/60">(Optional)</span>
                                </label>
                                <input value={organization} onChange={(e) => setOrganization(e.target.value)}
                                    placeholder={role === "Student" ? "e.g. Bestlink College" : "e.g. Google"}
                                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                            </div>
                        </>
                    )}
                </div>

                {error && (
                    <div className="mt-3 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <p className="text-red-500 text-xs">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="mt-3 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-500 text-xs">{success}</p>
                    </div>
                )}

                <button onClick={handleSubmit} disabled={loading}
                    className="w-full mt-4 bg-foreground text-background py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity">
                    {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Join Community"}
                </button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                    {mode === "signin" ? (
                        <>Need an account?{" "}
                            <button onClick={() => switchMode("signup")} className="text-foreground font-medium underline underline-offset-2">
                                Register here
                            </button>
                        </>
                    ) : (
                        <>Already have an account?{" "}
                            <button onClick={() => switchMode("signin")} className="text-foreground font-medium underline underline-offset-2">
                                Sign in here
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}