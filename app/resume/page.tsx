import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Resume Preview */}
          <section className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Resume Preview
              </h1>
            </div>

            {/* Preview Container */}
            <div className="relative w-full rounded-xl bg-slate-200 dark:bg-slate-900 p-4 md:p-8 overflow-hidden shadow-inner flex justify-center min-h-[500px] md:min-h-[800px]">
              {/* Resume Document Simulation */}
              <div className="relative w-full max-w-[700px] h-full shadow-2xl transition-transform duration-300">
                <div className="w-full h-auto aspect-[1/1.414] bg-white dark:bg-slate-100 rounded-sm overflow-hidden relative group">
                  <div className="p-8 md:p-12">
                    {/* Resume Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">Anesu Romeo Mutimbire</h2>
                      <p className="text-sm text-slate-600 mb-4">Full Stack Developer</p>
                      <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
                        <span>contact@anesu.dev</span>
                        <span>•</span>
                        <span>Harare, Zimbabwe</span>
                        <span>•</span>
                        <span>github.com/anesu-romeo</span>
                      </div>
                    </div>

                    {/* Experience Section */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-primary pb-1">
                        Experience
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-semibold text-slate-900">Freelance Developer</h4>
                            <span className="text-xs text-slate-600">2022 - Present</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Built custom web solutions for local businesses using WordPress and React.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-primary pb-1">
                        Education
                      </h3>
                      <div className="flex justify-between items-baseline">
                        <div>
                          <h4 className="font-semibold text-slate-900">BS Computer Science</h4>
                          <p className="text-xs text-slate-600">Great Zimbabwe University</p>
                        </div>
                        <span className="text-xs text-slate-600">2021 - Present</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 border-b-2 border-primary pb-1">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">Python</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">Django</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">React</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">PostgreSQL</span>
                      </div>
                    </div>
                  </div>

                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      Preview Mode
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Actions & Summary */}
          <section className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 h-fit">
            {/* Primary Action Card */}
            <div className="rounded-xl bg-white dark:bg-card-dark p-6 shadow-sm border border-slate-100 dark:border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Download Resume</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Get the full PDF version formatted for print and ATS.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98]">
                  <span className="material-symbols-outlined">download</span>
                  <span>Download PDF</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-white/10">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    Last updated
                  </span>
                  <span className="font-medium">October 2023</span>
                </div>
              </div>
            </div>

            {/* Profile Summary Card */}
            <div className="rounded-xl bg-white dark:bg-card-dark p-6 shadow-sm border border-slate-100 dark:border-white/10">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">About Anesu</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Computer Science student at Great Zimbabwe University with a focus on backend web development. 
                Specialized in building scalable APIs and efficient database architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                  Python
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                  Django
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                  SQL
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="rounded-xl bg-white dark:bg-card-dark p-6 shadow-sm border border-slate-100 dark:border-white/10">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">code</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">GitHub Profile</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-[20px]">
                    open_in_new
                  </span>
                </Link>

                <Link
                  href="#"
                  className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">work</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">LinkedIn Profile</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-[20px]">
                    open_in_new
                  </span>
                </Link>

                <Link
                  href="mailto:contact@anesu.dev"
                  className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">email</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Email Me</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-[20px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
