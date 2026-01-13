"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-300 focus:outline-none"
      >
        <span className="material-symbols-outlined text-[20px]">light_mode</span>
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-300 focus:outline-none"
    >
      <span className="material-symbols-outlined absolute text-[20px] transition-transform duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100">
        light_mode
      </span>
      <span className="material-symbols-outlined absolute text-[20px] transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0">
        dark_mode
      </span>
    </button>
  );
}
