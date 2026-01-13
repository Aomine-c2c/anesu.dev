"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing React Server Components for Performance",
    excerpt: "An exploration of how RSCs change the data fetching paradigm and strategies to minimize waterfall requests in Next.js applications.",
    date: "Nov 14, 2023",
    readTime: "6 min read",
    tags: ["React", "NextJS", "Performance"],
    gradient: "from-blue-900 to-slate-900",
    slug: "optimizing-react-server-components",
  },
  {
    id: 2,
    title: "Understanding Database Indexing Strategies",
    excerpt: "A deep dive into B-Trees, Hash Indexes, and when to use composite keys in PostgreSQL to optimize query speeds for large datasets.",
    date: "Oct 02, 2023",
    readTime: "8 min read",
    tags: ["SQL", "Database", "Backend"],
    gradient: "from-indigo-900 to-purple-900",
    slug: "database-indexing-strategies",
  },
  {
    id: 3,
    title: "Mastering Python Decorators",
    excerpt: "Unpacking the magic behind the @ symbol. How closures and first-class functions enable powerful metaprogramming patterns in Python.",
    date: "Sep 15, 2023",
    readTime: "4 min read",
    tags: ["Python", "CS-Fundamentals"],
    gradient: "from-yellow-700/20 to-orange-900/40",
    slug: "mastering-python-decorators",
  },
  {
    id: 4,
    title: "Implementing JWT Authentication from Scratch",
    excerpt: "A comprehensive guide to building a secure authentication system using JSON Web Tokens, including refresh tokens and security best practices.",
    date: "Aug 28, 2023",
    readTime: "12 min read",
    tags: ["Security", "WebDev"],
    gradient: "from-red-900/50 to-pink-900/50",
    slug: "jwt-authentication-from-scratch",
  },
];

const categories = ["All", "Python", "React", "System Design", "DevOps", "CS Fundamentals"];

const tagColors: Record<string, string> = {
  React: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-400/20",
  NextJS: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 ring-purple-700/10 dark:ring-purple-400/20",
  Performance: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 ring-green-700/10 dark:ring-green-400/20",
  SQL: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 ring-indigo-700/10 dark:ring-indigo-400/20",
  Database: "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 ring-slate-500/10 dark:ring-slate-400/20",
  Backend: "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 ring-slate-500/10 dark:ring-slate-400/20",
  Python: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 ring-yellow-600/20 dark:ring-yellow-400/20",
  "CS-Fundamentals": "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 ring-slate-500/10 dark:ring-slate-400/20",
  Security: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 ring-red-600/10 dark:ring-red-400/20",
  WebDev: "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 ring-slate-500/10 dark:ring-slate-400/20",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col gap-10">
          {/* Hero / Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black tracking-tight">
              Writing
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              Documenting my journey through Computer Science, web development, and solving complex problems.
            </p>
          </div>

          {/* Controls: Search & Chips */}
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400" style={{ fontSize: "20px" }}>
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-border-dark rounded-xl leading-5 bg-white dark:bg-surface-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                placeholder="Search articles..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-slate-100 dark:bg-surface-dark border border-transparent dark:border-border-dark text-slate-600 dark:text-slate-300 hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog List */}
          <div className="flex flex-col gap-6 mt-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 dark:hover:border-primary/40"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="text-primary">{post.date}</span>
                    <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          tagColors[tag] || tagColors.Backend
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Thumbnail for desktop */}
                <div className="hidden sm:block w-32 h-24 sm:w-48 sm:h-32 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                  <div className={`w-full h-full bg-gradient-to-br ${post.gradient}`}></div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary dark:hover:border-primary transition-all">
              Load more articles
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
