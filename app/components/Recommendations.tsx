"use client";

import { useState, useEffect } from "react";

const recommendations = [
    {
        quote: "Roel is a fast learner and always delivers clean, well-structured code. Great to work with!",
        name: "— A. Santos",
    },
    {
        quote: "Very dedicated to his craft. His attention to detail in UI development is impressive for someone still in school.",
        name: "— J. Reyes",
    },
];

export default function Recommendations() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + recommendations.length) % recommendations.length);
    const next = () => setCurrent((c) => (c + 1) % recommendations.length);

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    const rec = recommendations[current];

    return (
        <div className="p-6 rounded-3xl border border-border bg-card">
            <h3 className="text-xl font-bold mb-4 text-foreground">Recommendations</h3>
            <div className="p-5 rounded-2xl border border-border bg-background min-h-[120px] flex flex-col justify-center transition-all duration-500">
                <p className="text-sm text-muted leading-relaxed italic">
                    &quot;{rec.quote}&quot;
                </p>
                <p className="text-sm font-semibold mt-2 text-foreground/80">{rec.name}</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
                {recommendations.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current
                                ? "w-6 h-2 bg-foreground"
                                : "w-2 h-2 bg-muted/30 hover:bg-muted"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}