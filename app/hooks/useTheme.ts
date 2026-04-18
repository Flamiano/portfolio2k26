"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Read saved preference, fall back to system
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    root.style.backgroundColor = next ? "#000000" : "#ffffff";
  };

  return { dark, toggle };
}
