"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreLoader({ onComplete }: { onComplete?: () => void }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    }}
                >
                    {/* Initials / logo mark */}
                    <motion.div
                        className="relative flex items-center gap-[3px] select-none"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-4xl font-bold tracking-tight text-foreground font-[Poppins,sans-serif]">
                            JRF
                        </span>
                        <span className="text-4xl font-bold tracking-tight text-muted">.</span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="mt-8 w-24 h-[2px] bg-border rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-foreground rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}