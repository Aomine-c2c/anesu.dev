import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function BlogArticlePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div className="h-full bg-primary shadow-[0_0_10px_rgba(19,127,236,0.5)]" style={{ width: "35%" }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <span className="hidden sm:block text-slate-900 dark:text-white font-bold tracking-tight">
                Anesu Romeo Mutimbire
              </span>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              Back to Writing
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Column */}
          <article className="lg:col-span-8 lg:col-start-2 xl:col-span-7 xl:col-start-2 flex flex-col">
            {/* Hero Section */}
            <header className="mb-10 pb-10 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  #Django
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  #Performance
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  #SQL
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
                Optimizing Database Queries in Django
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-6">
                A deep dive into <code className="text-base bg-primary/15 text-blue-400 px-1.5 py-0.5 rounded">select_related</code> and{" "}
                <code className="text-base bg-primary/15 text-blue-400 px-1.5 py-0.5 rounded">prefetch_related</code> for solving the N+1 problem.
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                  <span className="font-medium text-slate-900 dark:text-slate-200">Anesu Romeo</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  <span>Oct 24, 2023</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span>8 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Django's ORM is incredibly powerful, abstracting away the complexities of raw SQL. However, this abstraction can sometimes be a double-edged sword. It's easy to write Python code that looks efficient but generates hundreds of duplicate database queries under the hood. This is known as the{" "}
                <strong>N+1 query problem</strong>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                In this article, we'll explore how to identify these performance bottlenecks and fix them using Django's built-in query optimization tools.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The N+1 Problem</h2>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Let's imagine a simple blog application with two models: <code>Author</code> and <code>Post</code>. Each post belongs to one author.
              </p>

              {/* Callout */}
              <div className="my-8 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Why does this happen?</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 m-0 leading-normal">
                      By default, Django's QuerySets are lazy. Accessing a ForeignKey attribute that hasn't been pre-fetched triggers a new database lookup immediately.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Solution: select_related</h2>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                For "single-valued" relationships (like ForeignKey or OneToOneField), use <code>select_related</code>. It performs a SQL JOIN and includes the fields of the related object in the SELECT statement.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Conclusion</h2>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Database optimization is often the lowest-hanging fruit when improving Django application performance. By consistently using the Django Debug Toolbar to inspect query counts and applying{" "}
                <code>select_related</code> and <code>prefetch_related</code> appropriately, you can scale your application significantly without rewriting complex logic.
              </p>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-slate-200 dark:border-slate-800 my-12"></div>

            {/* Share & Next Article */}
            <footer className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Share this article
                </span>
                <div className="flex gap-4">
                  <button className="text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </footer>
          </article>

          {/* Sidebar / ToC */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 lg:pl-8">
            <div className="sticky top-28">
              <h3 className="uppercase text-xs font-bold text-slate-500 tracking-wider mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">list</span>
                On this page
              </h3>
              <nav>
                <ul className="relative border-l border-slate-200 dark:border-slate-800 space-y-4">
                  <li className="relative pl-6">
                    <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary"></div>
                    <Link href="#problem" className="block text-sm font-medium text-primary">
                      The N+1 Problem
                    </Link>
                  </li>
                  <li className="relative pl-6">
                    <Link
                      href="#solution"
                      className="block text-sm font-normal text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                    >
                      The Solution
                    </Link>
                  </li>
                  <li className="relative pl-6">
                    <Link
                      href="#conclusion"
                      className="block text-sm font-normal text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                    >
                      Conclusion
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
