"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

const SUGGESTED = [
    "What's your tech stack?",
    "Tell me about your projects",
    "How do you stay disciplined?",
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "ai",
            content:
                "Hi! 👋 I'm Roel's AI assistant. Ask me about his projects, tech stack, or anything else!",
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkDark = () =>
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (scrollRef.current)
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, loading]);

    const headerProfileSrc = isDarkMode
        ? "/profile-dark.jpeg"
        : "/profile-light.jpeg";

    const sendMessage = async (text: string) => {
        if (!text.trim() || loading) return;
        const userMsg = { role: "user", content: text };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            });
            const data = await res.json();
            setMessages((prev) => [...prev, { role: "ai", content: data.text }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: "Connection error. Please try again!" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const showSuggestions = messages.length === 1 && !loading;

    return (
        /*
         * Single fixed anchor at bottom-right.
         * Panel grows upward from the trigger — never off-screen.
         */
        <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end gap-3">

            {/* ── Chat panel ── */}
            {isOpen && (
                <div
                    className="
                        w-[calc(100vw-2rem)] max-w-[320px] sm:max-w-[340px]
                        h-[min(460px,calc(100dvh-120px))]
                        bg-card border border-border rounded-2xl
                        flex flex-col shadow-2xl
                        animate-in fade-in slide-in-from-bottom-3 duration-200
                        overflow-hidden
                    "
                >
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-border flex justify-between items-center bg-muted/20 flex-shrink-0">
                        <div className="flex items-center gap-2.5">
                            <div className="relative w-7 h-7 flex-shrink-0">
                                <img
                                    src={headerProfileSrc}
                                    alt="Roel"
                                    className="w-full h-full rounded-full border border-border/50 object-cover"
                                />
                                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-card rounded-full" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground leading-none">
                                    Chat with Roel
                                </p>
                                <p className="text-[10px] text-green-500 mt-0.5 uppercase tracking-wider font-medium">
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-muted hover:text-foreground transition-colors p-1 -mr-1"
                            aria-label="Close chat"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-background overscroll-contain"
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-1.5 ${m.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                {m.role === "ai" && (
                                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                                        <img
                                            src={headerProfileSrc}
                                            alt="Roel Avatar"
                                            className="w-full h-full rounded-full border border-border/50 object-cover"
                                        />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-[12px] leading-relaxed ${m.role === "user"
                                            ? "bg-foreground text-background font-medium rounded-tr-none shadow-md"
                                            : "bg-muted/10 text-foreground rounded-tl-none border border-border"
                                        }`}
                                >
                                    {m.role === "ai" ? (
                                        <ReactMarkdown
                                            components={{
                                                p: ({ children }) => (
                                                    <p className="mb-1 last:mb-0">{children}</p>
                                                ),
                                                strong: ({ children }) => (
                                                    <strong className="font-semibold">{children}</strong>
                                                ),
                                                ul: ({ children }) => (
                                                    <ul className="list-disc list-inside space-y-0.5 mt-1">
                                                        {children}
                                                    </ul>
                                                ),
                                                li: ({ children }) => (
                                                    <li className="text-[12px]">{children}</li>
                                                ),
                                                a: ({ children, href }) => (
                                                    <a
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 hover:underline font-medium transition-colors"
                                                    >
                                                        {children}
                                                    </a>
                                                ),
                                            }}
                                        >
                                            {m.content}
                                        </ReactMarkdown>
                                    ) : (
                                        m.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Suggested Questions */}
                        {showSuggestions && (
                            <div className="flex flex-col gap-1.5 mt-1">
                                {SUGGESTED.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => sendMessage(q)}
                                        className="text-left text-[11px] px-3 py-1.5 rounded-xl border border-border bg-muted/10 hover:bg-muted/30 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {loading && (
                            <div className="flex items-start gap-1.5">
                                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                                    <img
                                        src={headerProfileSrc}
                                        alt="Loading"
                                        className="w-full h-full rounded-full grayscale opacity-50 object-cover"
                                    />
                                </div>
                                <div className="bg-muted/10 px-3 py-2.5 rounded-2xl rounded-tl-none border border-border">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.3s]" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="px-3 py-2.5 bg-card border-t border-border flex-shrink-0">
                        <div className="flex gap-1.5 bg-background border border-border p-1 rounded-xl focus-within:border-foreground/30 transition-all">
                            <input
                                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent px-2.5 py-1.5 text-[12px] text-foreground focus:outline-none placeholder:text-muted-foreground"
                                placeholder="Ask Roel's AI..."
                                autoComplete="off"
                                autoCorrect="off"
                            />
                            <button
                                onClick={() => sendMessage(input)}
                                disabled={loading || !input.trim()}
                                className="p-1.5 bg-foreground text-background rounded-lg hover:opacity-90 disabled:opacity-40 transition-opacity flex-shrink-0"
                                aria-label="Send"
                            >
                                <Send size={13} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Trigger button ── */}
            <button
                onClick={() => setIsOpen((v) => !v)}
                className="group flex items-center gap-2 bg-card text-foreground px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-foreground/30 border border-border"
            >
                <div className="relative">
                    {isOpen ? (
                        <X size={16} className="text-muted group-hover:text-foreground transition-colors" />
                    ) : (
                        <>
                            <MessageSquare
                                size={16}
                                className="group-hover:rotate-12 transition-transform text-muted group-hover:text-foreground"
                            />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 border-2 border-background rounded-full animate-pulse" />
                        </>
                    )}
                </div>
                <span className="font-semibold text-xs">Chat with Roel</span>
            </button>
        </div>
    );
}