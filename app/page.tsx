"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import PreLoader from "./components/PreLoader";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import AccessCard from "./components/AccessCard";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import BeyondTheScene from "./components/BeyondTheScreen";
import Gallery from "./components/Gallery";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import Link from "next/link";

// Reusable fade-up animation variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Wrapper that triggers animation when component enters the viewport
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader — unmounts itself after completion */}
      <PreLoader onComplete={() => setLoaded(true)} />

      {/* Main content — fades in only after the preloader exits */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="min-h-screen bg-background text-foreground selection:bg-zinc-800"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

              {/* Hero — no scroll animation; it's above the fold */}
              <div className="relative z-50">
                <Hero />
              </div>

              {/* Main 2-column grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-10 items-start relative z-10">

                {/* ── Left Column (8/12) ── */}
                <div className="contents lg:flex lg:flex-col lg:col-span-8 lg:space-y-5">

                  <Reveal className="order-1 lg:order-none">
                    <About />
                  </Reveal>

                  <Reveal className="order-2 lg:order-none" delay={0.05}>
                    <div className="p-6 rounded-3xl border border-border bg-card">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-bold text-foreground">Education</h3>
                        <Link
                          href="/educations"
                          className="text-xs text-muted hover:text-foreground transition-colors mono-text"
                        >
                          View All ›
                        </Link>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">BS Information Technology</p>
                        <p className="text-zinc-500 text-sm">Bestlink College of the Philippines</p>
                        <p className="mono-text text-xs text-zinc-600 mt-1">2023 – 2027</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal className="order-6 lg:order-none">
                    <Projects />
                  </Reveal>

                  <Reveal className="order-10 lg:order-none w-full">
                    <Gallery />
                  </Reveal>

                  <Reveal className="order-9 lg:order-none">
                    <BeyondTheScene />
                  </Reveal>
                </div>

                {/* ── Right Column (4/12) ── */}
                <aside className="contents lg:flex lg:flex-col lg:col-span-4 lg:space-y-5 lg:sticky lg:top-10">

                  <Reveal className="order-3 lg:order-none">
                    <Experience />
                  </Reveal>

                  <Reveal className="order-7 lg:order-none">
                    <Certificates />
                  </Reveal>

                  <Reveal className="order-8 lg:order-none">
                    <Recommendations />
                  </Reveal>

                  <Reveal className="order-4 lg:order-none">
                    <TechStack />
                  </Reveal>

                  <Reveal className="order-5 lg:order-none">
                    <AccessCard />
                  </Reveal>
                </aside>
              </div>

              {/* Footer */}
              <Reveal>
                <Footer />
              </Reveal>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}