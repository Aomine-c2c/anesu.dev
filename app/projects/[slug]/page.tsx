import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col">
      <Navigation />

      <main className="flex flex-col items-center w-full pb-20 pt-16">
        {/* Hero Section */}
        <section className="w-full max-w-[960px] px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 self-center sm:self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Live Production
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">
              Inventory Management System
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Optimizing high-volume retail supply chains with real-time tracking, automated restocking logic, and predictive analytics.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full mt-6 group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-primary/30 to-transparent opacity-50 blur-2xl transition duration-1000 group-hover:opacity-75"></div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            </div>
          </div>
        </section>

        {/* Metadata Bar */}
        <section className="w-full max-w-[960px] px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10 py-6">
            <div className="flex flex-col gap-1 px-4 py-2 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Role</span>
              <span className="text-base font-medium">Full Stack Developer</span>
            </div>
            <div className="flex flex-col gap-1 px-4 py-2 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tech Stack</span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="text-sm font-medium">Django</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm font-medium">PostgreSQL</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm font-medium">Docker</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-4 py-2 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Timeline</span>
              <span className="text-base font-medium">Oct 2023 - Dec 2023</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="w-full max-w-[960px] px-6 flex flex-col gap-16">
          {/* The Problem */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <span className="material-symbols-outlined text-[20px]">warning</span>
              </span>
              The Problem
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                The client, a mid-sized retail chain, was relying on a legacy spreadsheet-based system to manage inventory across 5 regional warehouses. This manual process led to data fragmentation, significant stock discrepancies (averaging 15%), and delayed restocking orders.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                They needed a centralized, web-based solution that could handle concurrent updates, provide real-time visibility into stock levels, and automate the reordering process based on predictive thresholds.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
              </span>
              The Solution
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I architected a monolithic application using Django to leverage its robust ORM and built-in administrative interface. The core of the solution is a normalized PostgreSQL database design that ensures data integrity across warehouses.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To handle high-volume transactions, we implemented optimistic locking on inventory rows and used Celery with Redis for asynchronous report generation and email notifications, ensuring the main UI remained responsive.
              </p>
            </div>
          </section>

          {/* Key Features Grid */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Core Functionality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "sync_alt", color: "blue", title: "Real-time Sync", desc: "WebSockets integration pushes stock updates instantly." },
                { icon: "analytics", color: "purple", title: "Predictive Analytics", desc: "Linear regression model estimates stock depletion rates." },
                { icon: "verified_user", color: "green", title: "Role-Based Access", desc: "Granular permission system for different user roles." },
                { icon: "picture_as_pdf", color: "orange", title: "Auto-Invoicing", desc: "PDF generation for purchase orders sent via SMTP." },
                { icon: "history", color: "teal", title: "Audit Logs", desc: "Immutable logs of every stock movement." },
                { icon: "api", color: "indigo", title: "Supplier API", desc: "Integration to fetch current pricing automatically." },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card-dark hover:border-primary/50 transition-colors duration-300"
                >
                  <div
                    className={`h-10 w-10 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#1c1c1c] dark:to-[#111] border border-slate-200 dark:border-white/10 p-8 sm:p-12">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Results & Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    The system was deployed in December 2023. Within the first month, the client reported a{" "}
                    <strong className="text-white">40% reduction in stock discrepancies</strong> and saved 15 hours per week on manual data entry.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-sm font-medium text-slate-300">Stock Discrepancy</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 line-through text-xs">15%</span>
                      <span className="material-symbols-outlined text-green-500 text-sm">arrow_right_alt</span>
                      <span className="text-green-400 font-bold">2.4%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-sm font-medium text-slate-300">Weekly Labor Saved</span>
                    <span className="text-white font-bold">15+ Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Next Project */}
        <div className="w-full max-w-[960px] px-6 mt-16">
          <Link href="/#projects" className="group block outline-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
              Back to Projects
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-3xl sm:text-4xl font-black group-hover:text-primary transition-colors">
                View All Projects
              </h3>
              <div className="h-12 w-12 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
