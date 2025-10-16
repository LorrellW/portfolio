"use client";
import { useEffect, useId, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const labelId = useId();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="inline-flex items-center  gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-labelledby={labelId}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        className={[
          "group relative flex h-8 w-14 items-center rounded-full transition-colors duration-200",
          "shadow-sm ring-1 ring-foreground/25",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "hover:brightness-110 active:brightness-105",
          "bg-foreground/50",
        ].join(" ")}
      >
        <span className="sr-only">Toggle theme</span>

        {/* Icons (contrast against the track using background color) */}
        <span
          aria-hidden
          className={[
            "absolute left-1 text-[10px] select-none transition-opacity",
            isDark ? "opacity-0" : "opacity-100",
            "text-background/90",
          ].join(" ")}
        >
          {/* ☀️ */}
        </span>
        <span
          aria-hidden
          className={[
            "absolute right-1 text-[10px] select-none transition-opacity",
            isDark ? "opacity-100" : "opacity-0",
            "text-background/90",
          ].join(" ")}
        >
          {/* 🌙 */}
        </span>

        {/* Thumb (contrasts with track using background color) */}
        <span
          aria-hidden
          className={[
            "absolute top-1 left-1 h-6 w-6 rounded-full border transition-transform duration-200",
            "bg-background border-foreground/25 shadow",
            isDark ? "translate-x-6" : "translate-x-0",
          ].join(" ")}
        />
      </button>

      {/* Live label updates with the theme */}
      <span
        id={labelId}
        aria-live="polite"
        className="select-none text-sm font-medium text-foreground"
      >
        {isDark ? "Dark ⚫" : "Light ⚪"}
      </span>
    </div>
  );
}
