"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Trash2, MessageCircle, Send } from "lucide-react";
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

function timeAgo(date: string) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    if (months > 0) return `${months}mo ago`;
    if (weeks > 0) return `${weeks}w ago`;
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (mins > 0) return `${mins}m ago`;
    return "just now";
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

export default function CommunityPage() {
    const { user, signOut } = useUser();
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [tab, setTab] = useState<"latest" | "discussed">("latest");
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
    const [showNewPost, setShowNewPost] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [posting, setPosting] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Comments state
    const [openComments, setOpenComments] = useState<Set<string>>(new Set());
    const [comments, setComments] = useState<Record<string, Comment[]>>({});
    const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
    const [loadingComments, setLoadingComments] = useState<Set<string>>(new Set());
    const [submittingComment, setSubmittingComment] = useState<Set<string>>(new Set());

    const supabase = createClient();

    const fetchPosts = useCallback(async () => {
        const { data: postsData, error } = await supabase
            .from("posts")
            .select("*, likes(user_id), comments(id)")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("fetchPosts error:", error.message);
            return;
        }

        const userIds = [...new Set((postsData || []).map((p: any) => p.user_id))];
        const { data: profilesData } = await supabase
            .from("profiles")
            .select("id, first_name, last_name, role")
            .in("id", userIds);

        const profileMap = Object.fromEntries(
            (profilesData || []).map((p: any) => [p.id, p])
        );

        const mapped: Post[] = (postsData || []).map((p: any) => ({
            ...p,
            profiles: profileMap[p.user_id] ?? null,
            likes_count: p.likes?.length ?? 0,
            liked_by_me: user
                ? (p.likes ?? []).some((l: any) => l.user_id === user.id)
                : false,
            comments_count: p.comments?.length ?? 0,
        }));

        if (tab === "discussed") {
            mapped.sort((a, b) => b.likes_count - a.likes_count);
        }

        setPosts(mapped);
    }, [user, tab]);

    const fetchStats = useCallback(async () => {
        const { count } = await supabase
            .from("profiles")
            .select("*", { count: "exact", head: true });
        setTotalUsers(count || 0);
    }, []);

    useEffect(() => {
        fetchPosts();
        fetchStats();
    }, [fetchPosts, fetchStats]);

    // Realtime
    useEffect(() => {
        const channel = supabase
            .channel("community-realtime")
            .on("postgres_changes", { event: "*", schema: "public", table: "posts" }, () => fetchPosts())
            .on("postgres_changes", { event: "*", schema: "public", table: "likes" }, () => fetchPosts())
            .on("postgres_changes", { event: "*", schema: "public", table: "comments" }, (payload: any) => {
                fetchPosts();
                const postId = payload.new?.post_id || payload.old?.post_id;
                if (postId && openComments.has(postId)) {
                    fetchComments(postId);
                }
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [fetchPosts, openComments]);

    const fetchComments = async (postId: string) => {
        setLoadingComments((prev) => new Set(prev).add(postId));

        const { data: commentsData, error } = await supabase
            .from("comments")
            .select("*")
            .eq("post_id", postId)
            .order("created_at", { ascending: true });

        if (error) {
            console.error("fetchComments error:", error.message);
            setLoadingComments((prev) => { const s = new Set(prev); s.delete(postId); return s; });
            return;
        }

        const userIds = [...new Set((commentsData || []).map((c: any) => c.user_id))];
        let profileMap: Record<string, any> = {};
        if (userIds.length > 0) {
            const { data: profilesData } = await supabase
                .from("profiles")
                .select("id, first_name, last_name")
                .in("id", userIds);
            profileMap = Object.fromEntries((profilesData || []).map((p: any) => [p.id, p]));
        }

        const mapped: Comment[] = (commentsData || []).map((c: any) => ({
            ...c,
            profiles: profileMap[c.user_id] ?? null,
        }));

        setComments((prev) => ({ ...prev, [postId]: mapped }));
        setLoadingComments((prev) => { const s = new Set(prev); s.delete(postId); return s; });
    };

    const toggleComments = async (postId: string) => {
        const isOpen = openComments.has(postId);
        setOpenComments((prev) => {
            const s = new Set(prev);
            isOpen ? s.delete(postId) : s.add(postId);
            return s;
        });
        if (!isOpen && !comments[postId]) {
            await fetchComments(postId);
        }
    };

    const handleComment = async (postId: string) => {
        const text = commentInputs[postId]?.trim();
        if (!text || !user) return;

        setSubmittingComment((prev) => new Set(prev).add(postId));

        const { error } = await supabase
            .from("comments")
            .insert({ post_id: postId, user_id: user.id, body: text });

        if (error) {
            toast.error("Failed to post comment.");
        } else {
            setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
            await fetchComments(postId);
        }

        setSubmittingComment((prev) => { const s = new Set(prev); s.delete(postId); return s; });
    };

    const handleDeleteComment = async (comment: Comment) => {
        if (!user || user.id !== comment.user_id) return;
        const { error } = await supabase
            .from("comments")
            .delete()
            .eq("id", comment.id)
            .eq("user_id", user.id);
        if (error) {
            toast.error("Failed to delete comment.");
        } else {
            setComments((prev) => ({
                ...prev,
                [comment.post_id]: (prev[comment.post_id] || []).filter((c) => c.id !== comment.id),
            }));
            fetchPosts();
        }
    };

    const handlePost = async () => {
        if (!title.trim() || !user) return;
        setPosting(true);
        const { error } = await supabase
            .from("posts")
            .insert({ title, body, user_id: user.id });
        if (error) {
            toast.error("Failed to publish post: " + error.message);
        } else {
            toast.success("Post published!");
            setTitle(""); setBody(""); setShowNewPost(false);
        }
        setPosting(false);
    };

    const handleDelete = async (post: Post) => {
        if (!user || user.id !== post.user_id) return;
        setDeletingId(post.id);
        const { error } = await supabase
            .from("posts")
            .delete()
            .eq("id", post.id)
            .eq("user_id", user.id);
        if (error) {
            toast.error("Failed to delete post.");
        } else {
            toast.success("Post deleted.");
            setPosts((prev) => prev.filter((p) => p.id !== post.id));
        }
        setDeletingId(null);
    };

    const handleLike = async (post: Post) => {
        if (!user) { setAuthMode("signin"); setAuthOpen(true); return; }
        setPosts((prev) =>
            prev.map((p) => p.id === post.id
                ? { ...p, liked_by_me: !post.liked_by_me, likes_count: post.liked_by_me ? p.likes_count - 1 : p.likes_count + 1 }
                : p
            )
        );
        if (post.liked_by_me) {
            await supabase.from("likes").delete().eq("post_id", post.id).eq("user_id", user.id);
        } else {
            await supabase.from("likes").insert({ post_id: post.id, user_id: user.id });
        }
    };

    const isGoogleUser = user?.app_metadata?.provider === "google";

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-zinc-800 pb-20">

            {/* Navigation */}
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex items-center justify-between">
                <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group">
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
                {user && (
                    <button onClick={signOut} className="text-xs border border-border px-3 py-1.5 rounded-full hover:bg-muted/20 transition-colors text-muted hover:text-foreground">
                        Sign Out
                    </button>
                )}
            </nav>

            {/* Header */}
            <header className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
                <div className="border-l-4 border-foreground pl-5 py-1">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2 mono-text">Community · Open to All</p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">Community Hub</h1>
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
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {totalUsers} Members
                    </div>
                    {user && (
                        <div className="px-4 py-2.5 rounded-full border border-border bg-card text-xs font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {isGoogleUser ? (
                                <>
                                    <svg width="12" height="12" viewBox="0 0 48 48" className="flex-shrink-0">
                                        <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
                                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                                        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.4-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.5 16.3 44 24 44z" />
                                        <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" />
                                    </svg>
                                    Signed in as Google
                                </>
                            ) : (
                                <>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                    </svg>
                                    Signed in as Manual
                                </>
                            )}
                        </div>
                    )}
                </div>
            </header>

            {/* Layout */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-5 items-start">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[300px] lg:flex-shrink-0 space-y-4 lg:sticky lg:top-10">
                        <div className="p-5 rounded-3xl border border-border bg-card">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-sm font-bold text-foreground">
                                            👋 Hi, {user.user_metadata?.first_name || user.email?.split("@")[0]}!
                                        </p>
                                        {isGoogleUser && (
                                            <svg width="14" height="14" viewBox="0 0 48 48">
                                                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
                                                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                                                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.4-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.5 16.3 44 24 44z" />
                                                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-1">You're part of the community.</p>
                                    {user.email && (
                                        <p className="text-xs text-muted-foreground mb-4 font-mono">{maskEmail(user.email)}</p>
                                    )}
                                    <button
                                        onClick={() => setShowNewPost(!showNewPost)}
                                        className="w-full bg-foreground text-background py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        {showNewPost ? "Cancel" : "+ New Post"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="font-bold text-foreground mb-1">Join the Community</p>
                                    <p className="text-xs text-muted-foreground mb-4">Sign up to join discussions, ask questions, and share knowledge.</p>
                                    <button onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}
                                        className="w-full bg-foreground text-background py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity mb-2">
                                        Register to Participate
                                    </button>
                                    <button onClick={() => { setAuthMode("signin"); setAuthOpen(true); }}
                                        className="w-full text-sm font-medium text-muted hover:text-foreground transition-colors">
                                        Sign In
                                    </button>
                                </>
                            )}
                        </div>

                        {showNewPost && user && (
                            <div className="p-5 rounded-3xl border border-border bg-card space-y-3">
                                <p className="text-sm font-bold text-foreground">Create Post</p>
                                <div>
                                    <label className="text-xs text-muted-foreground mb-1 block">Title *</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)}
                                        placeholder="What's on your mind?"
                                        className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground mb-1 block">Body (optional)</label>
                                    <textarea value={body} onChange={(e) => setBody(e.target.value)}
                                        placeholder="Add more details..." rows={3}
                                        className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none" />
                                </div>
                                <button onClick={handlePost} disabled={posting || !title.trim()}
                                    className="w-full bg-foreground text-background py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity">
                                    {posting ? "Posting..." : "Publish Post"}
                                </button>
                            </div>
                        )}

                        <div className="p-5 rounded-3xl border border-border bg-card">
                            <p className="font-bold text-foreground mb-3 text-sm">Hub Stats</p>
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">Total Posts</span>
                                    <span className="text-sm font-bold text-foreground">{posts.length}</span>
                                </div>
                                <div className="h-px bg-border" />
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">Total Users</span>
                                    <span className="text-sm font-bold text-foreground">{totalUsers}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Feed */}
                    <main className="w-full lg:flex-1 min-w-0 space-y-4">
                        <div className="flex gap-6 border-b border-border pb-3">
                            {(["latest", "discussed"] as const).map((t) => (
                                <button key={t} onClick={() => setTab(t)}
                                    className={`text-sm font-semibold capitalize pb-0.5 border-b-2 transition-colors ${tab === t ? "text-foreground border-foreground" : "text-muted-foreground border-transparent hover:text-foreground"}`}>
                                    {t === "latest" ? "Latest" : "Most Discussed"}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                            <span className="font-semibold uppercase tracking-wider">Viewing: Global Feed</span>
                        </div>

                        {posts.length === 0 ? (
                            <div className="p-10 rounded-3xl border border-border bg-card text-center">
                                <p className="text-muted-foreground text-sm">No posts yet.</p>
                                <p className="text-muted-foreground/60 text-xs mt-1">Be the first to start a discussion!</p>
                            </div>
                        ) : (
                            posts.map((post) => {
                                const isOwner = user?.id === post.user_id;
                                const commentsOpen = openComments.has(post.id);
                                const postComments = comments[post.id] || [];
                                const isLoadingComments = loadingComments.has(post.id);
                                const isSubmitting = submittingComment.has(post.id);

                                return (
                                    <div key={post.id} className="rounded-3xl border border-border bg-card hover:border-foreground/20 transition-all overflow-hidden">

                                        {/* Post body */}
                                        <div className="p-5">
                                            {/* Author Row */}
                                            <div className="flex items-start justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <div className="w-8 h-8 rounded-full bg-muted/30 border border-border flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0">
                                                        {getAvatar(post)}
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <div className="flex items-center gap-1.5 flex-wrap">
                                                            <span className="text-sm font-semibold text-foreground">{getDisplayName(post)}</span>
                                                            <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {isOwner && (
                                                                <span className="text-[10px] bg-foreground text-background px-1.5 py-0.5 rounded-full font-semibold">you</span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 flex-wrap">
                                                            <span className="text-xs text-muted-foreground">{timeAgo(post.created_at)}</span>
                                                            {post.profiles?.role && (
                                                                <span className="text-xs text-muted-foreground italic">· {post.profiles.role}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {isOwner && (
                                                    <button onClick={() => handleDelete(post)} disabled={deletingId === post.id}
                                                        className="flex-shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-all disabled:opacity-50">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                            </div>

                                            <h3 className="font-bold text-foreground mb-1 leading-snug">{post.title}</h3>
                                            {post.body && (
                                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.body}</p>
                                            )}

                                            {/* Reaction bar */}
                                            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
                                                <button onClick={() => handleLike(post)}
                                                    className={`flex items-center gap-1.5 text-xs transition-colors group ${post.liked_by_me ? "text-red-500" : "text-muted-foreground hover:text-red-500"}`}>
                                                    <Heart className={`w-4 h-4 transition-all ${post.liked_by_me ? "fill-red-500 scale-110" : "group-hover:scale-110"}`} />
                                                    <span>{post.likes_count}</span>
                                                </button>

                                                <button onClick={() => toggleComments(post.id)}
                                                    className={`flex items-center gap-1.5 text-xs transition-colors group ${commentsOpen ? "text-blue-500" : "text-muted-foreground hover:text-blue-500"}`}>
                                                    <MessageCircle className={`w-4 h-4 transition-all group-hover:scale-110 ${commentsOpen ? "fill-blue-500/20" : ""}`} />
                                                    <span>{post.comments_count}</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Comments section — expands inline */}
                                        {commentsOpen && (
                                            <div className="border-t border-border bg-background/50">

                                                {/* Comment input */}
                                                <div className="px-5 py-3 flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-muted/30 border border-border flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0">
                                                        {user ? (user.user_metadata?.first_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "?") : "?"}
                                                    </div>
                                                    <div className="flex-1 flex items-center gap-2">
                                                        <input
                                                            value={commentInputs[post.id] || ""}
                                                            onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter" && !e.shiftKey) {
                                                                    e.preventDefault();
                                                                    if (user) handleComment(post.id);
                                                                    else { setAuthMode("signin"); setAuthOpen(true); }
                                                                }
                                                            }}
                                                            placeholder={user ? "Write a comment..." : "Sign in to comment..."}
                                                            disabled={!user || isSubmitting}
                                                            className="flex-1 bg-card border border-border rounded-2xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors disabled:opacity-60"
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                if (user) handleComment(post.id);
                                                                else { setAuthMode("signin"); setAuthOpen(true); }
                                                            }}
                                                            disabled={!commentInputs[post.id]?.trim() || isSubmitting}
                                                            className="p-2 rounded-xl bg-foreground text-background hover:opacity-80 disabled:opacity-40 transition-opacity flex-shrink-0"
                                                        >
                                                            <Send className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Comments list */}
                                                <div className="px-5 pb-4 space-y-3 max-h-80 overflow-y-auto">
                                                    {isLoadingComments ? (
                                                        <div className="flex items-center justify-center py-6">
                                                            <div className="w-4 h-4 border-2 border-border border-t-foreground rounded-full animate-spin" />
                                                        </div>
                                                    ) : postComments.length === 0 ? (
                                                        <p className="text-xs text-muted-foreground text-center py-4">
                                                            No comments yet. Be the first!
                                                        </p>
                                                    ) : (
                                                        postComments.map((comment) => {
                                                            const isMyComment = user?.id === comment.user_id;
                                                            return (
                                                                <div key={comment.id} className="flex items-start gap-2.5 group">
                                                                    <div className="w-7 h-7 rounded-full bg-muted/30 border border-border flex items-center justify-center text-xs font-bold text-foreground flex-shrink-0 mt-0.5">
                                                                        {getAvatar(comment)}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="bg-card rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                                                                            <div className="flex items-center gap-1.5 mb-0.5">
                                                                                <span className="text-xs font-semibold text-foreground">{getDisplayName(comment)}</span>
                                                                                {isMyComment && (
                                                                                    <span className="text-[10px] bg-foreground text-background px-1.5 py-0.5 rounded-full font-semibold">you</span>
                                                                                )}
                                                                            </div>
                                                                            <p className="text-sm text-foreground leading-relaxed break-words">{comment.body}</p>
                                                                        </div>
                                                                        <div className="flex items-center gap-3 mt-1 px-1">
                                                                            <span className="text-[11px] text-muted-foreground">{timeAgo(comment.created_at)}</span>
                                                                            {isMyComment && (
                                                                                <button
                                                                                    onClick={() => handleDeleteComment(comment)}
                                                                                    className="text-[11px] text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
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