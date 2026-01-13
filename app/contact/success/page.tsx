import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactSuccessPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />

      {/* Main Content: Centered Success State */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-12 md:py-24">
        <div className="flex flex-col w-full max-w-[960px] items-center">
          {/* Success Card Container */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-lg p-8 md:p-12 rounded-xl bg-white dark:bg-[#1a2e1a] shadow-xl border border-slate-100 dark:border-[#283928]">
            {/* Subtle Glow Effect Behind Icon */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl pointer-events-none"></div>

            {/* Animated Icon */}
            <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
              <span className="material-symbols-outlined text-[48px] font-bold">check</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight tracking-[-0.015em] mb-4 text-slate-900 dark:text-white">
              Message Sent!
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg font-normal text-center text-slate-600 dark:text-slate-300 max-w-[400px] leading-relaxed mb-8">
              Thanks for reaching out. Anesu has received your message and will get back to you within 24-48 hours.
            </p>

            {/* Action Button */}
            <div className="flex w-full justify-center">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                <span>Return to Home</span>
              </Link>
            </div>
          </div>

          {/* Optional Decorative Element */}
          <div className="mt-12 w-full max-w-[640px] opacity-20 grayscale mix-blend-overlay pointer-events-none">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
