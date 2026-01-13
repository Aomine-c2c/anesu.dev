"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-primary/10 dark:bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Anesu Mutimbire
            </h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#projects"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95 hover:bg-blue-600"
            >
              Let&apos;s Talk
            </Link>
            <button
              className="md:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#projects"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
