"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const categories = ["All", "Languages", "Backend", "Frontend", "Databases", "DevTools"];

const techStack = {
  languages: [
    { name: "Python", icon: "terminal", level: 90, badge: "Core", description: "Primary choice for backend services, automation scripts, and data processing pipelines." },
    { name: "TypeScript", icon: "code", level: 85, badge: "Core", description: "Ensuring type safety across the full stack, from React components to Node.js APIs." },
    { name: "C++", icon: "settings_ethernet", level: 65, badge: "Secondary", description: "Utilized for performance-critical algorithms and competitive programming challenges." },
  ],
  frameworks: [
    { name: "Django", icon: "dns", description: "Primary backend framework for robust and secure API development." },
    { name: "React", icon: "layers", description: "Building dynamic and interactive user interfaces with reusable components." },
    { name: "Next.js", icon: "bolt", description: "Optimized full-stack framework for SEO and high-performance web apps." },
    { name: "Node.js", icon: "token", description: "Server-side JavaScript runtime for real-time and scalable systems." },
  ],
  infrastructure: [
    { name: "PostgreSQL & Redis", icon: "database", description: "Reliable relational storage coupled with lightning-fast in-memory caching for performance." },
    { name: "Docker & Kubernetes", icon: "view_in_ar", description: "Containerization and orchestration for consistent deployment across environments." },
  ],
};

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Navigation />

      <main className="max-w-[1200px] mx-auto px-6 md:px-20 lg:px-40 py-12 pt-24">
        {/* Page Heading */}
        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
            Tech Stack
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
            A comprehensive look at the tools, languages, and frameworks I leverage to build robust, scalable, 
            and modern digital experiences.
          </p>
        </div>

        {/* Chips / Filter Bar */}
        <div className="flex gap-3 mb-10 flex-wrap overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex h-10 shrink-0 items-center justify-center rounded-lg px-6 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Section: Languages */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-white text-2xl font-bold tracking-tight">Languages</h2>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.languages.map((lang) => (
              <div
                key={lang.name}
                className="group relative flex flex-col p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">{lang.icon}</span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                      lang.badge === "Core"
                        ? "bg-primary/10 text-primary"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {lang.badge}
                  </span>
                </div>

                <h3 className="text-white text-lg font-bold mb-1">{lang.name}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{lang.description}</p>

                <div className="mt-auto">
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${lang.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Backend & Frontend */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-white text-2xl font-bold tracking-tight">Backend & Frontend</h2>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.frameworks.map((framework) => (
              <div
                key={framework.name}
                className="p-5 rounded-lg border border-slate-800 bg-white/5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{framework.icon}</span>
                  <h4 className="text-white font-semibold">{framework.name}</h4>
                </div>
                <p className="text-slate-400 text-xs">{framework.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Infrastructure */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-white text-2xl font-bold tracking-tight">Infrastructure & DBs</h2>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.infrastructure.map((item) => (
              <div
                key={item.name}
                className="flex items-center p-6 gap-6 rounded-xl bg-slate-900/40 border border-slate-800"
              >
                <div className="size-16 shrink-0 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
