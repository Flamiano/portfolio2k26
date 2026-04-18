"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Trash2, MessageCircle, Send, Sparkles, RotateCcw } from "lucide-react";
import { createClient } from "@/app/lib/supabase/supabase";
import { useUser } from "@/app/hooks/useUser";
import AuthModal from "@/app/components/auth/AuthModal";
import { toast } from "sonner";

type Comment = {
    id: string;
    post_id: string;
    user_id: string;
    body: string;
    created_at: string;
    profiles?: {
        first_name: string | null;
        last_name: string | null;
    };
};

type Post = {
    id: string;
    title: string;
    body: string;
    created_at: string;
    user_id: string;
    profiles?: {
        first_name: string | null;
        last_name: string | null;
        role: string;
    };
    likes_count: number;
    liked_by_me: boolean;
    comments_count: number;
};

/* ── Bad word filter (client-side pre-check) ── */
const BAD_WORDS = [
    "burat", "tae", "puke", "gago", "gaga", "putang ina", "putangina",
    "tangina", "punyeta", "pakshet", "pakshit", "leche", "lintik", "ulol",
    "bobo", "boba", "inutil", "peste", "fuck", "shit", "ass", "bitch",
    "bastard", "dick", "cock", "pussy", "cunt", "fag", "slut", "whore",
    "motherfucker", "fucker", "fucking", "damn",
];

function containsBadWords(text: string): boolean {
    const lower = text.toLowerCase();
    return BAD_WORDS.some((word) => {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`\\b${escaped}\\b`, "i");
        return regex.test(lower) || lower.includes(word);
    });
}

/* ── Helpers ── */
function timeAgo(date: string) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    if (months > 0) return `${months}mo`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (mins > 0) return `${mins}m`;
    return "now";
}

function maskEmail(email: string) {
    const [local, domain] = email.split("@");
    if (local.length <= 3) return `${local[0]}***@${domain}`;
    return `${local.slice(0, 2)}${"*".repeat(local.length - 4)}${local.slice(-2)}@${domain}`;
}

function getDisplayName(post: Post | Comment) {
    const fn = post.profiles?.first_name;
    const ln = post.profiles?.last_name;
    if (fn || ln) return `${fn ?? ""} ${ln ?? ""}`.trim();
    return "Anonymous";
}

function getAvatar(post: Post | Comment) {
    const fn = post.profiles?.first_name;
    if (fn) return fn[0].toUpperCase();
    return "?";
}

/* ── AI Suggestion hook ── */
async function fetchAiSuggestion(text: string): Promise<string> {
    const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
    if (!res.ok) throw new Error("Suggest API error");
    const data = await res.json();
    return data.suggestion ?? "";
}

/* ── Post Form (sidebar) ── */
function NewPostForm({ onSuccess }: { onSuccess: () => void }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [posting, setPosting] = useState(false);

    // Profanity guard state
    const [titleError, setTitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);
    const [suggestion, setSuggestion] = useState<{ field: "title" | "body"; text: string } | null>(null);
    const [loadingSuggest, setLoadingSuggest] = useState(false);

    const supabase = createClient();
    const { user } = useUser();

    const handlePost = async () => {
        if (!title.trim() || !user) return;

        const titleBad = containsBadWords(title);
        const bodyBad = containsBadWords(body);
        setTitleError(titleBad);
        setBodyError(bodyBad);

        if (titleBad || bodyBad) {
            toast.error("Your post contains words that are not allowed.");
            // Auto-suggest for whichever field triggered first
            const badField = titleBad ? "title" : "body";
            const badText = titleBad ? title : body;
            setLoadingSuggest(true);
            try {
                const s = await fetchAiSuggestion(badText);
                if (s) setSuggestion({ field: badField, text: s });
            } catch {
                toast.error("Could not generate AI suggestion.");
            } finally {
                setLoadingSuggest(false);
            }
            return;
        }

        setPosting(true);
        const { error } = await supabase.from("posts").insert({ title, body, user_id: user.id });
        if (error) {
            toast.error("Failed to publish post: " + error.message);
        } else {
            toast.success("Post published!");
            setTitle("");
            setBody("");
            setSuggestion(null);
            setTitleError(false);
            setBodyError(false);
            onSuccess();
        }
        setPosting(false);
    };

    const applySuggestion = () => {
        if (!suggestion) return;
        if (suggestion.field === "title") setTitle(suggestion.text);
        else setBody(suggestion.text);
        setSuggestion(null);
        setTitleError(false);
        setBodyError(false);
    };

    const handleRetry = async () => {
        if (!suggestion) return;
        const badText = suggestion.field === "title" ? title : body;
        setLoadingSuggest(true);
        try {
            const s = await fetchAiSuggestion(badText);
            if (s) setSuggestion({ field: suggestion.field, text: s });
        } catch {
            toast.error("Could not generate AI suggestion.");
        } finally {
            setLoadingSuggest(false);
        }
    };

    return (
        <div className="p-4 rounded-2xl border border-border bg-card space-y-2.5">
            <p className="text-sm font-bold text-foreground">Create Post</p>

            {/* Community rules notice */}
            <div className="text-[10px] text-muted bg-background border border-border rounded-xl px-3 py-2 leading-relaxed">
                <span className="font-semibold text-foreground">Community rules:</span> No offensive language allowed —
                Filipino or English bad words (burat, tae, puke, gago, fuck, shit, etc.) will be blocked.
                Our AI can suggest a cleaner version if flagged.
            </div>

            {/* Title */}
            <div>
                <label className="text-[11px] text-muted mb-1 block">Title *</label>
                <input
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); setTitleError(false); setSuggestion(null); }}
                    placeholder="What's on your mind?"
                    className={`w-full bg-background border rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted focus:outline-none transition-colors ${titleError ? "border-red-500/60 focus:border-red-500" : "border-border focus:border-foreground/30"
                        }`}
                />
                {titleError && (
                    <p className="text-[10px] text-red-500 mt-1">Title contains disallowed words.</p>
                )}
            </div>

            {/* Body */}
            <div>
                <label className="text-[11px] text-muted mb-1 block">Body (optional)</label>
                <textarea
                    value={body}
                    onChange={(e) => { setBody(e.target.value); setBodyError(false); setSuggestion(null); }}
                    placeholder="Add more details..."
                    rows={3}
                    className={`w-full bg-background border rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted focus:outline-none transition-colors resize-none ${bodyError ? "border-red-500/60 focus:border-red-500" : "border-border focus:border-foreground/30"
                        }`}
                />
                {bodyError && (
                    <p className="text-[10px] text-red-500 mt-1">Body contains disallowed words.</p>
                )}
            </div>

            {/* AI Suggestion box */}
            {(suggestion || loadingSuggest) && (
                <div className="rounded-xl border border-border bg-background p-3 space-y-2">
                    <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-[10px] font-bold tracking-widest text-muted uppercase mono-text">
                            AI Suggestion — {suggestion?.field ?? "..."}
                        </span>
                    </div>
                    {loadingSuggest ? (
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border-2 border-border border-t-foreground rounded-full animate-spin" />
                            <span className="text-[11px] text-muted italic">Generating cleaner version...</span>
                        </div>
                    ) : suggestion ? (
                        <>
                            <p className="text-xs text-foreground leading-relaxed break-words">{suggestion.text}</p>
                            <div className="flex items-center gap-2 pt-0.5">
                                <button
                                    onClick={applySuggestion}
                                    className="text-[11px] font-semibold bg-foreground text-background px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
                                >
                                    Use this
                                </button>
                                <button
                                    onClick={handleRetry}
                                    className="text-[11px] text-muted hover:text-foreground transition-colors flex items-center gap-1"
                                >
                                    <RotateCcw className="w-2.5 h-2.5" />
                                    Retry
                                </button>
                                <button
                                    onClick={() => { setSuggestion(null); setTitleError(false); setBodyError(false); }}
                                    className="text-[11px] text-muted hover:text-foreground transition-colors ml-auto"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            )}

            <button
                onClick={handlePost}
                disabled={posting || !title.trim() || loadingSuggest}
                className="w-full bg-foreground text-background py-2 rounded-xl text-xs font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
                {posting ? "Posting..." : "Publish Post"}
            </button>
        </div>
    );
}

/* ── Comment Input with filter ── */
function CommentInput({
    postId,
    user,
    onAuthRequired,
    onSubmitted,
}: {
    postId: string;
    user: any;
    onAuthRequired: () => void;
    onSubmitted: () => void;
}) {
    const [value, setValue] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [suggestion, setSuggestion] = useState<string | null>(null);
    const [loadingSuggest, setLoadingSuggest] = useState(false);

    const supabase = createClient();

    const handleSubmit = async () => {
        const text = value.trim();
        if (!text || !user) return;

        if (containsBadWords(text)) {
            setError(true);
            setLoadingSuggest(true);
            try {
                const s = await fetchAiSuggestion(text);
                if (s) setSuggestion(s);
            } catch {
                toast.error("Could not generate AI suggestion.");
            } finally {
                setLoadingSuggest(false);
            }
            return;
        }

        setSubmitting(true);
        const { error: err } = await supabase
            .from("comments")
            .insert({ post_id: postId, user_id: user.id, body: text });
        if (err) {
            toast.error("Failed to post comment.");
        } else {
            setValue("");
            setSuggestion(null);
            setError(false);
            onSubmitted();
        }
        setSubmitting(false);
    };

    const applySuggestion = () => {
        if (!suggestion) return;
        setValue(suggestion);
        setSuggestion(null);
        setError(false);
    };

    return (
        <div className="px-4 sm:px-5 py-3 space-y-2">
            <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-muted/20 border border-border flex items-center justify-center text-[10px] font-bold text-foreground flex-shrink-0">
                    {user
                        ? (user.user_metadata?.first_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "?")
                        : "?"}
                </div>
                <div className="flex-1 flex items-center gap-2 min-w-0">
                    <input
                        value={value}
                        onChange={(e) => { setValue(e.target.value); setError(false); setSuggestion(null); }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                if (user) handleSubmit();
                                else onAuthRequired();
                            }
                        }}
                        placeholder={user ? "Write a comment..." : "Sign in to comment..."}
                        disabled={!user || submitting}
                        className={`flex-1 min-w-0 bg-card border rounded-2xl px-3 py-1.5 text-xs text-foreground placeholder:text-muted focus:outline-none transition-colors disabled:opacity-60 ${error ? "border-red-500/60" : "border-border focus:border-foreground/30"
                            }`}
                    />
                    <button
                        onClick={() => { if (user) handleSubmit(); else onAuthRequired(); }}
                        disabled={!value.trim() || submitting || loadingSuggest}
                        className="p-1.5 rounded-xl bg-foreground text-background hover:opacity-80 disabled:opacity-40 transition-opacity flex-shrink-0"
                    >
                        <Send className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* AI suggestion for comment */}
            {(suggestion || loadingSuggest) && (
                <div className="ml-8 rounded-xl border border-border bg-background p-3 space-y-2">
                    <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-[10px] font-bold tracking-widest text-muted uppercase mono-text">AI Suggestion</span>
                    </div>
                    {loadingSuggest ? (
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border-2 border-border border-t-foreground rounded-full animate-spin" />
                            <span className="text-[11px] text-muted italic">Generating cleaner version...</span>
                        </div>
                    ) : suggestion ? (
                        <>
                            <p className="text-xs text-foreground leading-relaxed break-words">{suggestion}</p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={applySuggestion}
                                    className="text-[11px] font-semibold bg-foreground text-background px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
                                >
                                    Use this
                                </button>
                                <button
                                    onClick={() => { setSuggestion(null); setError(false); }}
                                    className="text-[11px] text-muted hover:text-foreground transition-colors ml-auto"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            )}
        </div>
    );
}

/* ── Main Page ── */
export default function CommunityPage() {
    const { user, signOut } = useUser();
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [tab, setTab] = useState<"latest" | "discussed">("latest");
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
    const [showNewPost, setShowNewPost] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const [openComments, setOpenComments] = useState<Set<string>>(new Set());
    const [comments, setComments] = useState<Record<string, Comment[]>>({});
    const [loadingComments, setLoadingComments] = useState<Set<string>>(new Set());

    const supabase = createClient();

    const fetchPosts = useCallback(async () => {
        const { data: postsData, error } = await supabase
            .from("posts")
            .select("*, likes(user_id), comments(id)")
            .order("created_at", { ascending: false });

        if (error) { console.error("fetchPosts error:", error.message); return; }

        const userIds = [...new Set((postsData || []).map((p: any) => p.user_id))];
        const { data: profilesData } = await supabase
            .from("profiles")
            .select("id, first_name, last_name, role")
            .in("id", userIds);

        const profileMap = Object.fromEntries((profilesData || []).map((p: any) => [p.id, p]));

        const mapped: Post[] = (postsData || []).map((p: any) => ({
            ...p,
            profiles: profileMap[p.user_id] ?? null,
            likes_count: p.likes?.length ?? 0,
            liked_by_me: user ? (p.likes ?? []).some((l: any) => l.user_id === user.id) : false,
            comments_count: p.comments?.length ?? 0,
        }));

        if (tab === "discussed") mapped.sort((a, b) => b.likes_count - a.likes_count);
        setPosts(mapped);
    }, [user, tab]);

    const fetchStats = useCallback(async () => {
        const { count } = await supabase.from("profiles").select("*", { count: "exact", head: true });
        setTotalUsers(count || 0);
    }, []);

    useEffect(() => { fetchPosts(); fetchStats(); }, [fetchPosts, fetchStats]);

    useEffect(() => {
        const channel = supabase
            .channel("community-realtime")
            .on("postgres_changes", { event: "*", schema: "public", table: "posts" }, () => fetchPosts())
            .on("postgres_changes", { event: "*", schema: "public", table: "likes" }, () => fetchPosts())
            .on("postgres_changes", { event: "*", schema: "public", table: "comments" }, (payload: any) => {
                fetchPosts();
                const postId = payload.new?.post_id || payload.old?.post_id;
                if (postId && openComments.has(postId)) fetchComments(postId);
            })
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, [fetchPosts, openComments]);

    const fetchComments = async (postId: string) => {
        setLoadingComments((prev) => new Set(prev).add(postId));
        const { data: commentsData, error } = await supabase
            .from("comments").select("*").eq("post_id", postId).order("created_at", { ascending: true });

        if (error) {
            console.error("fetchComments error:", error.message);
            setLoadingComments((prev) => { const s = new Set(prev); s.delete(postId); return s; });
            return;
        }

        const userIds = [...new Set((commentsData || []).map((c: any) => c.user_id))];
        let profileMap: Record<string, any> = {};
        if (userIds.length > 0) {
            const { data: profilesData } = await supabase
                .from("profiles").select("id, first_name, last_name").in("id", userIds);
            profileMap = Object.fromEntries((profilesData || []).map((p: any) => [p.id, p]));
        }

        const mapped: Comment[] = (commentsData || []).map((c: any) => ({ ...c, profiles: profileMap[c.user_id] ?? null }));
        setComments((prev) => ({ ...prev, [postId]: mapped }));
        setLoadingComments((prev) => { const s = new Set(prev); s.delete(postId); return s; });
    };

    const toggleComments = async (postId: string) => {
        const isOpen = openComments.has(postId);
        setOpenComments((prev) => { const s = new Set(prev); isOpen ? s.delete(postId) : s.add(postId); return s; });
        if (!isOpen && !comments[postId]) await fetchComments(postId);
    };

    const handleDeleteComment = async (comment: Comment) => {
        if (!user || user.id !== comment.user_id) return;
        const { error } = await supabase.from("comments").delete().eq("id", comment.id).eq("user_id", user.id);
        if (error) { toast.error("Failed to delete comment."); }
        else {
            setComments((prev) => ({ ...prev, [comment.post_id]: (prev[comment.post_id] || []).filter((c) => c.id !== comment.id) }));
            fetchPosts();
        }
    };

    const handleDelete = async (post: Post) => {
        if (!user || user.id !== post.user_id) return;
        setDeletingId(post.id);
        const { error } = await supabase.from("posts").delete().eq("id", post.id).eq("user_id", user.id);
        if (error) { toast.error("Failed to delete post."); }
        else { toast.success("Post deleted."); setPosts((prev) => prev.filter((p) => p.id !== post.id)); }
        setDeletingId(null);
    };

    const handleLike = async (post: Post) => {
        if (!user) { setAuthMode("signin"); setAuthOpen(true); return; }
        setPosts((prev) =>
            prev.map((p) => p.id === post.id
                ? { ...p, liked_by_me: !post.liked_by_me, likes_count: post.liked_by_me ? p.likes_count - 1 : p.likes_count + 1 }
                : p)
        );
        if (post.liked_by_me) { await supabase.from("likes").delete().eq("post_id", post.id).eq("user_id", user.id); }
        else { await supabase.from("likes").insert({ post_id: post.id, user_id: user.id }); }
    };

    const isGoogleUser = user?.app_metadata?.provider === "google";

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-zinc-200 dark:selection:bg-zinc-800 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* ── Navigation ── */}
                <nav className="flex items-center justify-between py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group mono-text"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    {user && (
                        <button
                            onClick={signOut}
                            className="text-xs border border-border px-3 py-1.5 rounded-full hover:bg-card transition-colors text-muted hover:text-foreground mono-text"
                        >
                            Sign Out
                        </button>
                    )}
                </nav>

                {/* ── Header ── */}
                <header className="mb-10">
                    <div className="border-l-4 border-foreground pl-5 py-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2 mono-text">
                            Community · Open to All
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                            Community Hub
                        </h1>
                        <p className="text-sm text-muted max-w-2xl leading-relaxed">
                            A space for students, professionals, and developers to share ideas, ask questions, and connect.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            {posts.length} Posts
                        </div>
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {totalUsers} Members
                        </div>
                        {user && (
                            <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                {isGoogleUser ? (
                                    <><GoogleSVG size={12} /><span>Google</span></>
                                ) : (
                                    <><UserSVG /><span>Manual</span></>
                                )}
                            </div>
                        )}
                    </div>
                </header>

                {/* ── Layout ── */}
                <div className="flex flex-col lg:flex-row gap-5 items-start w-full min-w-0">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[260px] xl:w-[280px] lg:flex-shrink-0 space-y-3 lg:sticky lg:top-8 min-w-0">

                        {/* Auth card */}
                        <div className="p-4 rounded-2xl border border-border bg-card">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-1.5 mb-0.5 min-w-0">
                                        <p className="text-sm font-bold text-foreground truncate">
                                            👋 Hi, {user.user_metadata?.first_name || user.email?.split("@")[0]}!
                                        </p>
                                        {isGoogleUser && <GoogleSVG size={13} />}
                                    </div>
                                    <p className="text-[11px] text-muted mb-0.5">You're part of the community.</p>
                                    {user.email && (
                                        <p className="text-[11px] text-muted mb-3 font-mono truncate">{maskEmail(user.email)}</p>
                                    )}
                                    <button
                                        onClick={() => setShowNewPost(!showNewPost)}
                                        className="w-full bg-foreground text-background py-2 rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        {showNewPost ? "Cancel" : "+ New Post"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="font-bold text-foreground mb-1 text-sm">Join the Community</p>
                                    <p className="text-[11px] text-muted mb-3">Sign up to join discussions and share knowledge.</p>
                                    <button
                                        onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}
                                        className="w-full bg-foreground text-background py-2 rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity mb-2"
                                    >
                                        Register to Participate
                                    </button>
                                    <button
                                        onClick={() => { setAuthMode("signin"); setAuthOpen(true); }}
                                        className="w-full text-xs font-medium text-muted hover:text-foreground transition-colors"
                                    >
                                        Sign In
                                    </button>
                                </>
                            )}
                        </div>

                        {/* New post form (extracted component) */}
                        {showNewPost && user && (
                            <NewPostForm onSuccess={() => setShowNewPost(false)} />
                        )}

                        {/* Hub Stats */}
                        <div className="p-4 rounded-2xl border border-border bg-card">
                            <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-3 mono-text">Hub Stats</p>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted">Total Posts</span>
                                    <span className="text-sm font-bold text-foreground">{posts.length}</span>
                                </div>
                                <div className="h-px bg-border" />
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted">Total Users</span>
                                    <span className="text-sm font-bold text-foreground">{totalUsers}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Feed */}
                    <main className="w-full lg:flex-1 min-w-0 space-y-3">

                        {/* Tabs */}
                        <div className="flex gap-5 border-b border-border pb-3">
                            {(["latest", "discussed"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`text-xs font-semibold pb-0.5 border-b-2 transition-colors mono-text ${tab === t
                                        ? "text-foreground border-foreground"
                                        : "text-muted border-transparent hover:text-foreground"
                                        }`}
                                >
                                    {t === "latest" ? "Latest" : "Most Discussed"}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-muted mono-text">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block flex-shrink-0" />
                            Global Feed
                        </div>

                        {posts.length === 0 ? (
                            <div className="p-10 rounded-2xl border border-border bg-card text-center">
                                <p className="text-muted text-sm">No posts yet.</p>
                                <p className="text-muted/60 text-xs mt-1">Be the first to start a discussion!</p>
                            </div>
                        ) : (
                            posts.map((post) => {
                                const isOwner = user?.id === post.user_id;
                                const commentsOpen = openComments.has(post.id);
                                const postComments = comments[post.id] || [];
                                const isLoadingComments = loadingComments.has(post.id);

                                return (
                                    <div key={post.id} className="rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all overflow-hidden w-full">

                                        {/* Post content */}
                                        <div className="p-4 sm:p-5">

                                            {/* Author row */}
                                            <div className="flex items-start justify-between gap-2 mb-3 min-w-0">
                                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                                    <div className="w-7 h-7 rounded-full bg-muted/20 border border-border flex items-center justify-center text-[11px] font-bold text-foreground flex-shrink-0">
                                                        {getAvatar(post)}
                                                    </div>
                                                    <div className="flex flex-col min-w-0 flex-1">
                                                        <div className="flex items-center gap-1 flex-wrap min-w-0">
                                                            <span className="text-xs font-semibold text-foreground truncate max-w-[140px] sm:max-w-[220px]">
                                                                {getDisplayName(post)}
                                                            </span>
                                                            <svg className="w-3 h-3 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {isOwner && (
                                                                <span className="text-[9px] bg-foreground text-background px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">
                                                                    you
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-1 flex-wrap min-w-0">
                                                            <span className="text-[11px] text-muted mono-text flex-shrink-0">{timeAgo(post.created_at)}</span>
                                                            {post.profiles?.role && (
                                                                <span className="text-[11px] text-muted italic truncate">· {post.profiles.role}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {isOwner && (
                                                    <button
                                                        onClick={() => handleDelete(post)}
                                                        disabled={deletingId === post.id}
                                                        className="flex-shrink-0 p-1.5 rounded-lg text-muted hover:text-red-500 hover:bg-red-500/10 transition-all disabled:opacity-50"
                                                    >
                                                        <Trash2 className="w-3 h-3" />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Title & body */}
                                            <h3 className="font-bold text-foreground mb-1 leading-snug text-sm break-words">{post.title}</h3>
                                            {post.body && (
                                                <p className="text-xs text-muted line-clamp-3 leading-relaxed break-words">{post.body}</p>
                                            )}

                                            {/* Reaction bar */}
                                            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                                                <button
                                                    onClick={() => handleLike(post)}
                                                    className={`flex items-center gap-1.5 text-xs transition-colors group ${post.liked_by_me ? "text-red-500" : "text-muted hover:text-red-500"}`}
                                                >
                                                    <Heart className={`w-3.5 h-3.5 transition-all ${post.liked_by_me ? "fill-red-500 scale-110" : "group-hover:scale-110"}`} />
                                                    <span>{post.likes_count}</span>
                                                </button>
                                                <button
                                                    onClick={() => toggleComments(post.id)}
                                                    className={`flex items-center gap-1.5 text-xs transition-colors group ${commentsOpen ? "text-blue-500" : "text-muted hover:text-blue-500"}`}
                                                >
                                                    <MessageCircle className={`w-3.5 h-3.5 transition-all group-hover:scale-110 ${commentsOpen ? "fill-blue-500/20" : ""}`} />
                                                    <span>{post.comments_count}</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Comments section */}
                                        {commentsOpen && (
                                            <div className="border-t border-border bg-background/50">

                                                {/* Comment input (extracted component with filter) */}
                                                <CommentInput
                                                    postId={post.id}
                                                    user={user}
                                                    onAuthRequired={() => { setAuthMode("signin"); setAuthOpen(true); }}
                                                    onSubmitted={() => fetchComments(post.id)}
                                                />

                                                {/* Comments list */}
                                                <div className="px-4 sm:px-5 pb-4 space-y-3 max-h-64 overflow-y-auto">
                                                    {isLoadingComments ? (
                                                        <div className="flex items-center justify-center py-5">
                                                            <div className="w-3.5 h-3.5 border-2 border-border border-t-foreground rounded-full animate-spin" />
                                                        </div>
                                                    ) : postComments.length === 0 ? (
                                                        <p className="text-[11px] text-muted text-center py-3">No comments yet. Be the first!</p>
                                                    ) : (
                                                        postComments.map((comment) => {
                                                            const isMyComment = user?.id === comment.user_id;
                                                            return (
                                                                <div key={comment.id} className="flex items-start gap-2 group min-w-0">
                                                                    <div className="w-6 h-6 rounded-full bg-muted/20 border border-border flex items-center justify-center text-[10px] font-bold text-foreground flex-shrink-0 mt-0.5">
                                                                        {getAvatar(comment)}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="bg-card rounded-2xl rounded-tl-sm px-3 py-2">
                                                                            <div className="flex items-center gap-1 mb-0.5 flex-wrap min-w-0">
                                                                                <span className="text-[11px] font-semibold text-foreground truncate">
                                                                                    {getDisplayName(comment)}
                                                                                </span>
                                                                                {isMyComment && (
                                                                                    <span className="text-[9px] bg-foreground text-background px-1 py-0.5 rounded-full font-semibold flex-shrink-0">
                                                                                        you
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            <p className="text-xs text-foreground leading-relaxed break-words">{comment.body}</p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2.5 mt-0.5 px-1">
                                                                            <span className="text-[10px] text-muted mono-text">{timeAgo(comment.created_at)}</span>
                                                                            {isMyComment && (
                                                                                <button
                                                                                    onClick={() => handleDeleteComment(comment)}
                                                                                    className="text-[10px] text-muted hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                                                >
                                                                                    Delete
                                                                                </button>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </main>
                </div>
            </div>

            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} defaultMode={authMode} />
        </div>
    );
}

/* ── Inline SVG helpers ── */
function GoogleSVG({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.4-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.5 16.3 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" />
        </svg>
    );
}

function UserSVG() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}