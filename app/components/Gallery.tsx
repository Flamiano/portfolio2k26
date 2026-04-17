"use client";

import { useState, useEffect } from "react";

const photos = [
    { src: "/images/gallery/1.jpeg", alt: "Photo 1" },
    { src: "/images/gallery/2.jpeg", alt: "Photo 2" },
    { src: "/images/gallery/3.jpeg", alt: "Photo 3" },
    { src: "/images/gallery/4.jpeg", alt: "Photo 4" },
    { src: "/images/gallery/5.jpeg", alt: "Photo 5" },
    { src: "/images/gallery/6.jpeg", alt: "Photo 6" },
];

export default function Gallery() {
    const [start, setStart] = useState(0);
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
    const [visibleCount, setVisibleCount] = useState(1); // Default to 1 for mobile

    // Handle responsive visible count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setVisibleCount(3);
            } else {
                setVisibleCount(1);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const prev = () => {
        setStart((s) => (s > 0 ? s - 1 : photos.length - visibleCount));
    };

    const next = () => {
        setStart((s) => (s + visibleCount < photos.length ? s + 1 : 0));
    };

    // Auto-swipe effect
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(interval);
    }, [start, visibleCount]);

    const visiblePhotos = photos.slice(start, start + visibleCount);

    return (
        <div className="p-6 rounded-3xl border border-border bg-card h-full flex flex-col transition-colors duration-300">
            <h3 className="text-lg font-bold mb-4 text-foreground">Gallery</h3>

            <div className="relative flex items-center gap-2 flex-1">
                {/* Navigation Buttons - Overlay style with background/80 for visibility */}
                <button
                    onClick={prev}
                    className="absolute left-2 sm:relative sm:left-0 flex-shrink-0 w-8 h-8 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-foreground/30 transition-colors z-20 shadow-sm"
                    aria-label="Previous photo"
                >
                    <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex gap-3 flex-1 overflow-hidden h-full py-1">
                    {visiblePhotos.map((photo, i) => {
                        const actualIndex = start + i;
                        return (
                            <div
                                key={actualIndex}
                                className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-border transition-all duration-300 flex items-center justify-center group"
                            >
                                {!imgErrors[actualIndex] ? (
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        onError={() => setImgErrors((e) => ({ ...e, [actualIndex]: true }))}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted text-[10px] mono-text text-center p-4">
                                        Photo {actualIndex + 1} <br /> Not Found
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={next}
                    className="absolute right-2 sm:relative sm:right-0 flex-shrink-0 w-8 h-8 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-foreground/30 transition-colors z-20 shadow-sm"
                    aria-label="Next photo"
                >
                    <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
                {Array.from({ length: photos.length - visibleCount + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setStart(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === start ? "bg-foreground w-6" : "bg-muted/30 w-1.5"
                            }`}
                        aria-label={`Go to photo ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}