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

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#projects"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>

            {/* More dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-0.5">
                More
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                <Link
                  href="/resume"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  Resume
                </Link>
                <Link
                  href="/tech-stack"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  Tech Stack
                </Link>
                <Link
                  href="/now"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  Now
                </Link>
                <Link
                  href="/academic"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  Academic
                </Link>
                <Link
                  href="/snippets"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                >
                  Code Snippets
                </Link>
              </div>
            </div>
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
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/#projects"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#about"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
            <Link
              href="/resume"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/tech-stack"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech Stack
            </Link>
            <Link
              href="/now"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Now
            </Link>
            <Link
              href="/academic"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academic
            </Link>
            <Link
              href="/snippets"
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Code Snippets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
