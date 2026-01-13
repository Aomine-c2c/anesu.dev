import { Navigation } from "@/components/Navigation";

export default function NowPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <Navigation />

      <main className="flex-1 px-6 lg:px-40 py-10 flex justify-center pt-24">
        <div className="flex flex-col max-w-[800px] w-full gap-12">
          {/* Page Heading & Meta */}
          <section>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between flex-wrap gap-4">
                <h1 className="text-5xl font-black tracking-tighter">Now</h1>
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Last updated: October 2023
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                A snapshot of what I'm focused on right now. Inspired by{" "}
                <a
                  href="https://nownownow.com/about"
                  className="underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Derek Sivers
                </a>
                . Instead of a resume, this is what I'm actually doing.
              </p>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Section 1: Learning */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">school</span>
              <h2 className="text-xl font-bold tracking-tight">What I'm Learning</h2>
            </div>
            <div className="grid gap-3">
              <div className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-4 transition-all hover:border-primary/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Learning Go</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Building CLI tools and exploring concurrency patterns
                  </span>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-4 transition-all hover:border-primary/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Distributed Systems</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Reading papers on Paxos and Raft consensus algorithms
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Active Projects */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">rocket_launch</span>
              <h2 className="text-xl font-bold tracking-tight">Active Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-5 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    P2
                  </div>
                  <span className="inline-flex items-center rounded-md bg-amber-400/10 px-2 py-1 text-xs font-medium text-amber-500 ring-1 ring-inset ring-amber-400/20">
                    Refactoring
                  </span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Portfolio V2</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    Migrating the entire codebase from CRA to Next.js 14 for better SEO and performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-5 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                    AG
                  </div>
                  <span className="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-400/20">
                    In Progress
                  </span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">API Gateway</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    Designing a custom gateway to handle rate limiting and authentication for microservices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Consuming */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">headphones</span>
              <h2 className="text-xl font-bold tracking-tight">Consuming</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors">
                <div className="h-16 w-12 shrink-0 rounded bg-slate-200 dark:bg-slate-800 overflow-hidden relative shadow-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400">book</span>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Reading</span>
                  <span className="font-medium">Designing Data-Intensive Applications</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Martin Kleppmann</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors">
                <div className="h-16 w-16 shrink-0 rounded bg-slate-200 dark:bg-slate-800 overflow-hidden relative shadow-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400">podcasts</span>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Listening</span>
                  <span className="font-medium">The Changelog</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Conversations with the hackers, leaders, and innovators of software development.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Location & Life */}
          <section className="rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3 w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <div className="z-10 bg-primary/20 p-3 rounded-full backdrop-blur-sm border border-primary/40">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                </div>
              </div>
              <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-sm">public</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                    Location & Status
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Based in Zimbabwe</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Currently completing my final year of Computer Science at University. Available for freelance
                  work and remote opportunities.
                </p>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    Student
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[16px]">laptop_mac</span>
                    Freelancer
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400 pb-8">
            <p>© 2023 Anesu Romeo Mutimbire</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
