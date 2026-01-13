import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5">
        <div className="absolute inset-0 z-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#30363d_1px,transparent_1px),linear-gradient(to_bottom,#30363d_1px,transparent_1px)] opacity-[0.4] dark:opacity-[0.03] pointer-events-none bg-grid-fade"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Building Practical <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">
              Web Solutions
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Anesu Romeo Mutimbire</strong>, 
            a Computer Science student and web developer based in Zimbabwe. I specialize in building robust 
            backend systems and clean, modern frontends.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#projects"
              className="h-12 px-6 flex items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-background-dark font-bold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0 hover:bg-slate-800 dark:hover:bg-slate-200"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="h-12 px-6 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-white font-medium text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0d131a]" id="skills">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A curated list of technologies I use to build scalable and efficient applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend Card */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 p-8 hover:border-primary/50 transition-colors shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary">dns</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">dns</span> Backend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Python
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Django &amp; DRF
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> PostgreSQL
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Node.js (Basics)
                </li>
              </ul>
            </div>

            {/* Frontend Card */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 p-8 hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-purple-500">web</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-500">web</span> Frontend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span> React.js
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span> Tailwind CSS
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span> HTML5 &amp; CSS3
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span> JavaScript (ES6+)
                </li>
              </ul>
            </div>

            {/* Tools Card */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 p-8 hover:border-emerald-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-emerald-500">build</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500">build</span> Tools &amp; DevOps
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Git &amp; GitHub
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Docker (Learning)
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> VS Code
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Linux/Unix
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">Some of the things I&apos;ve built recently.</p>
            </div>
            <Link
              href="https://github.com/Aomine-c2c"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-sm font-bold text-primary hover:text-blue-400"
            >
              View GitHub{" "}
              <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: SwiftQueue Hospital Management */}
            <div className="group rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 overflow-hidden hover:border-slate-300 dark:hover:border-white/10 transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-primary/5 shadow-sm dark:shadow-none">
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-blue-200 dark:text-white/20">
                  <span className="material-symbols-outlined text-6xl opacity-20">local_hospital</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Link
                    href="https://github.com/Aomine-c2c/SwiftQueue-Hospital-Managent-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white text-black px-6 py-2 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-slate-100"
                  >
                    View Code
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">SwiftQueue Hospital Management</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  AI-powered hospital management system with real-time queue monitoring, telemedicine, 
                  and intelligent triage. Features patient management, appointments, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    React 18
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    Docker
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2: Regisbridge School Management */}
            <div className="group rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 overflow-hidden hover:border-slate-300 dark:hover:border-white/10 transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-primary/5 shadow-sm dark:shadow-none">
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center text-indigo-200 dark:text-white/20">
                  <span className="material-symbols-outlined text-6xl opacity-20">school</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Link
                    href="https://github.com/Aomine-c2c/Regisbridge-pvt-school-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white text-black px-6 py-2 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-slate-100"
                  >
                    View Code
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Regisbridge School Management</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  Comprehensive school management system with student/parent/teacher portals, 
                  admin dashboard, attendance tracking, and real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0d131a]" id="about">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-400 mb-6">
                <span className="material-symbols-outlined text-[16px]">person</span>
                <span>About Me</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Engineering digital experiences with precision.
              </h2>

              <div className="prose prose-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                <p className="mb-4">
                  I am currently pursuing a Bachelor of Science in Computer Science at{" "}
                  <span className="text-slate-900 dark:text-white font-medium">Great Zimbabwe University</span>. 
                  My journey into tech began with a curiosity about how software shapes our daily lives, 
                  which quickly evolved into a passion for building systems that matter.
                </p>
                <p className="mb-4">
                  I focus primarily on{" "}
                  <span className="text-slate-900 dark:text-white font-medium">Backend Development</span>{" "}
                  using Python and Django, but I strongly believe in being versatile. That&apos;s why I&apos;ve 
                  honed my skills in modern frontend frameworks like React to deliver complete, full-stack solutions.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m likely exploring new tech documentation, contributing to 
                  open-source, or refining my problem-solving skills through algorithmic challenges.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 border-t border-slate-200 dark:border-white/5 pt-8">
                <div>
                  <span className="block text-4xl font-bold text-slate-900 dark:text-white tracking-tight">3+</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1 block">
                    Years Coding
                  </span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-slate-900 dark:text-white tracking-tight">10+</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1 block">
                    Projects Built
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-square lg:aspect-[5/4] rounded-2xl bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 p-1 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 via-transparent to-transparent dark:from-slate-900/50"></div>
                
                {/* SVG Illustration */}
                <svg className="w-full h-full p-4 sm:p-8" fill="none" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="card-grad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"></stop>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05"></stop>
                    </linearGradient>
                  </defs>
                  
                  <path className="text-slate-300 dark:text-slate-700" d="M200 80 L200 140" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1"></path>
                  <path className="text-slate-300 dark:text-slate-700" d="M200 220 L200 260" stroke="currentColor" strokeWidth="1"></path>
                  <path className="text-slate-300 dark:text-slate-700" d="M120 180 L280 180" stroke="currentColor" strokeWidth="1"></path>
                  <path className="text-slate-300 dark:text-slate-700" d="M120 180 L120 220" stroke="currentColor" strokeWidth="1"></path>
                  <path className="text-slate-300 dark:text-slate-700" d="M280 180 L280 220" stroke="currentColor" strokeWidth="1"></path>
                  
                  <rect className="fill-white dark:fill-[#161b22] stroke-slate-200 dark:stroke-slate-700" height="80" rx="8" strokeWidth="1.5" width="120" x="140" y="140"></rect>
                  <rect fill="url(#card-grad)" height="80" rx="8" width="120" x="140" y="140"></rect>
                  <rect className="fill-primary/20" height="6" rx="3" width="40" x="156" y="160"></rect>
                  <rect className="fill-slate-200 dark:fill-slate-700" height="4" rx="2" width="88" x="156" y="174"></rect>
                  <rect className="fill-slate-200 dark:fill-slate-700" height="4" rx="2" width="60" x="156" y="186"></rect>
                  <rect className="fill-slate-200 dark:fill-slate-700" height="4" rx="2" width="80" x="156" y="198"></rect>
                  
                  <rect className="fill-white dark:fill-[#161b22] stroke-slate-200 dark:stroke-slate-700" height="40" rx="6" strokeWidth="1.5" width="60" x="170" y="40"></rect>
                  <circle className="fill-slate-100 dark:fill-slate-800" cx="200" cy="60" r="8"></circle>
                  
                  <rect className="fill-white dark:fill-[#161b22] stroke-slate-200 dark:stroke-slate-700" height="60" rx="6" strokeWidth="1.5" width="60" x="90" y="220"></rect>
                  <path className="text-slate-400" d="M110 240 L120 250 L130 240" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path className="text-slate-200 dark:text-slate-800" d="M110 260 L130 260" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                  
                  <rect className="fill-white dark:fill-[#161b22] stroke-slate-200 dark:stroke-slate-700" height="60" rx="6" strokeWidth="1.5" width="60" x="250" y="220"></rect>
                  <rect className="fill-slate-100 dark:fill-slate-800" height="30" rx="2" width="30" x="265" y="235"></rect>
                  
                  <circle className="fill-primary" cx="210" cy="110" r="3"></circle>
                  <circle className="fill-emerald-400" cx="160" cy="180" r="1.5"></circle>
                  <circle className="fill-purple-400" cx="240" cy="180" r="1.5"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span> Experience &amp; Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 mb-4">
                  2021 - Present
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">BS Computer Science</h3>
                <p className="text-sm font-medium text-primary mb-3">Great Zimbabwe University</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Specializing in Software Engineering and Database Systems. Active member of the Developer Student Club.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 mb-4">
                  2022 - Present
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Freelance Developer</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-300 mb-3">Self-Employed</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Delivering custom web solutions for local businesses using WordPress and custom React implementations.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 mb-4">
                  2023 (Summer)
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Web Dev Intern</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-300 mb-3">Local Tech Startup</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Assisted in migrating legacy PHP codebases to modern Python frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/5" id="contact">
        <div className="mx-auto max-w-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Have a project in mind or want to discuss the latest tech trends? Drop me a message.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-slate-900 dark:bg-white py-3 text-sm font-bold text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <Link
              href="#"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Email"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0d131a]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical insights to your inbox.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Occasional notes on software engineering, web development, and what I&apos;m learning.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-1 rounded-lg bg-white dark:bg-card-dark border border-slate-200 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="john@example.com"
              required
              type="email"
            />
            <button
              className="rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-sm font-bold text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
