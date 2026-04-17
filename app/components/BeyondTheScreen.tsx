"use client";

import { useState } from "react";

const labels = [
    { text: "Coffee Culture" },
    { text: "Physical Fitness" },
    { text: "Basketball" },
];

const images = [
    { src: "/images/beyondthescreen/1.png" },
    { src: "/images/beyondthescreen/2.jpeg" },
    { src: "/images/beyondthescreen/3.jpeg" },
    { src: "/images/beyondthescreen/4.jpeg" },
    { src: "/images/beyondthescreen/5.jpeg" },
    { src: "/images/beyondthescreen/6.jpeg" },
    { src: "/images/beyondthescreen/7.jpeg" },
];

export default function BeyondTheScene() {
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
    const scrollImages = [...images, ...images];

    return (
        <div className="p-6 rounded-3xl border border-border bg-card h-full flex flex-col overflow-hidden transition-colors duration-300">
            <h3 className="text-lg font-bold mb-3 text-foreground">Beyond the Screen</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
                Outside of development, I maintain a disciplined lifestyle centered around
                <span className="text-foreground font-medium"> coffee culture</span>,
                <span className="text-foreground font-medium"> physical fitness</span>, and
                <span className="text-foreground font-medium"> basketball</span>.
                These activities are essential to my creative process and overall performance.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {labels.map((l) => (
                    <span
                        key={l.text}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 text-[10px] uppercase tracking-widest font-bold text-muted"
                    >
                        {/* Dot indicator adjusts based on theme */}
                        <div className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                        {l.text}
                    </span>
                ))}
            </div>

            {/* Scroller container - simplified by removing gradient overlays */}
            <div className="relative mt-auto pt-4 overflow-hidden group">
                {/* The two gradient div overlays that were here 
                  (bg-gradient-to-r and bg-gradient-to-l) have been deleted.
                */}

                <div className="flex gap-3 animate-infinite-scroll w-max group-hover:[animation-play-state:paused]">
                    {scrollImages.map((img, i) => (
                        <div
                            key={i}
                            className="w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-background border border-border transition-transform duration-700 hover:scale-105"
                        >
                            {!imgErrors[`${i}-${img.src}`] ? (
                                <img
                                    src={img.src}
                                    alt="Gallery item"
                                    className="w-full h-full object-cover"
                                    onError={() => setImgErrors((e) => ({ ...e, [`${i}-${img.src}`]: true }))}
                                />
                            ) : (
                                /* Adaptive placeholder color */
                                <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-900" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}