import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white font-display"
      style={{
        backgroundImage: "radial-gradient(#111 10%, transparent 10%)",
        backgroundSize: "3px 3px",
      }}
    >
      {/* Main Navigation */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="px-4 lg:px-40 flex justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-3 bg-black/50 backdrop-blur-md rounded-xl">
              <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Anesu Romeo Mutimbire
                </h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link
                    href="/"
                    className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#projects"
                    className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#about"
                    className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-3xl bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden mt-20">
        {/* Terminal Title Bar */}
        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-xs text-white/40 font-mono flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">terminal</span>
            zsh — 80x24
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
          {/* Terminal Output Lines */}
          <div className="space-y-2 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-primary">anesu@portfolio:~$</span>
              <span className="text-white">visit /non-existent-page</span>
            </div>
            <div className="text-white/60">
              bash: /non-existent-page: No such file or directory
            </div>
          </div>

          {/* Big 404 Headline */}
          <div className="py-8 text-center">
            <h1 className="text-primary tracking-widest text-5xl md:text-7xl font-bold leading-tight uppercase animate-pulse">
              404
            </h1>
            <p className="text-white text-lg font-bold tracking-[0.2em] mt-2 uppercase">
              Page Not Found
            </p>
          </div>

          {/* Scanning Status */}
          <div className="flex items-center gap-3 text-white/40 mb-6">
            <span className="material-symbols-outlined animate-spin text-sm">sync</span>
            <h3 className="text-sm font-bold tracking-widest uppercase">
              Scanning for alternatives...
            </h3>
          </div>

          {/* Command Suggestions */}
          <div className="space-y-4 mb-10">
            <p className="text-white/50 italic mb-2">
              // Suggested commands to get back on track:
            </p>
            <Link
              href="/"
              className="group flex items-center gap-4 hover:bg-primary/10 p-2 rounded transition-all w-fit"
            >
              <span className="text-primary font-bold">cd</span>
              <span className="text-white group-hover:underline">/home</span>
              <span className="text-white/30 text-xs hidden group-inline">
                Return to the landing page
              </span>
            </Link>
            <Link
              href="/#projects"
              className="group flex items-center gap-4 hover:bg-primary/10 p-2 rounded transition-all w-fit"
            >
              <span className="text-primary font-bold">ls</span>
              <span className="text-white group-hover:underline">/projects</span>
              <span className="text-white/30 text-xs hidden group-inline">
                View my latest work
              </span>
            </Link>
            <Link
              href="/#about"
              className="group flex items-center gap-4 hover:bg-primary/10 p-2 rounded transition-all w-fit"
            >
              <span className="text-primary font-bold">cat</span>
              <span className="text-white group-hover:underline">about_me.txt</span>
              <span className="text-white/30 text-xs hidden group-inline">
                Learn more about Anesu
              </span>
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-4 hover:bg-primary/10 p-2 rounded transition-all w-fit"
            >
              <span className="text-primary font-bold">ssh</span>
              <span className="text-white group-hover:underline">armutimbire@gmail.com</span>
              <span className="text-white/30 text-xs hidden group-inline">
                Start a conversation
              </span>
            </Link>
          </div>

          {/* Input Prompt */}
          <div className="flex items-center gap-2 mt-auto border-t border-white/5 pt-6">
            <span className="text-primary">anesu@portfolio:~$</span>
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-8 text-white/20 text-xs font-mono uppercase tracking-[0.3em]">
        System Status: All other systems nominal
      </div>
    </div>
  );
}
