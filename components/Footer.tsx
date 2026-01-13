export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Anesu Mutimbire</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Full Stack Developer specializing in building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/resume" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="/tech-stack" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="/snippets" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  Code Snippets
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Aomine-c2c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                href="https://linkedin.com/in/anesu-mutimbire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined">work</span>
              </a>
              <a
                href="mailto:armutimbire@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined">email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Anesu Romeo Mutimbire. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Designed with ❤️ in Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}
