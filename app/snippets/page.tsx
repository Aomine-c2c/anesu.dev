"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const snippets = [
  {
    id: 1,
    title: "Django Query Optimization",
    description: "Eliminate N+1 queries using select_related and prefetch_related",
    language: "Python",
    category: "Backend",
    code: `posts = Post.objects.select_related('author').all()
for post in posts:
    print(post.author.name)  # No extra queries!`,
  },
  {
    id: 2,
    title: "React Custom Hook - useLocalStorage",
    description: "Persist state to localStorage with automatic synchronization",
    language: "TypeScript",
    category: "Frontend",
    code: `function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`,
  },
  {
    id: 3,
    title: "PostgreSQL Partial Index",
    description: "Index only active users to improve query performance",
    language: "SQL",
    category: "Database",
    code: `CREATE INDEX active_users_idx 
ON users (email) 
WHERE is_active = true AND deleted_at IS NULL;`,
  },
  {
    id: 4,
    title: "Node.js Rate Limiting",
    description: "Simple in-memory rate limiter using Map",
    language: "JavaScript",
    category: "Backend",
    code: `const rateLimiter = new Map();

function rateLimit(ip, maxRequests = 10, window = 60000) {
  const now = Date.now();
  const record = rateLimiter.get(ip) || { count: 0, resetTime: now + window };
  
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + window;
  }
  
  record.count++;
  rateLimiter.set(ip, record);
  
  return record.count <= maxRequests;
}`,
  },
];

const categories = ["All", "Backend", "Frontend", "Database", "DevOps"];

export default function SnippetsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredSnippets =
    activeCategory === "All"
      ? snippets
      : snippets.filter((s) => s.category === activeCategory);

  const copyToClipboard = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-6 lg:px-40 py-12 pt-24">
        <div className="max-w-[960px] mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              Code Snippets
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Handy code snippets and patterns I've collected and use frequently. Copy, adapt, and use freely.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Snippets Grid */}
          <div className="space-y-6">
            {filteredSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{snippet.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{snippet.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                        {snippet.language}
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        {snippet.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Block */}
                <div className="relative">
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={() => copyToClipboard(snippet.code, snippet.id)}
                      className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedId === snippet.id ? "check" : "content_copy"}
                      </span>
                      {copiedId === snippet.id ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <pre className="p-6 bg-slate-900 dark:bg-slate-950 overflow-x-auto">
                    <code className="text-sm font-mono text-slate-100 leading-relaxed">{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSnippets.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4 block">
                code_off
              </span>
              <p className="text-slate-600 dark:text-slate-400">No snippets found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
