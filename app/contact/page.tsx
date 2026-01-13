import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 px-4 py-12 md:py-24 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Form */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                  Get in Touch
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Have a project in mind or want to discuss the latest tech trends? Drop me a message.
                </p>
              </div>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="px-4 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="px-4 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="px-4 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div className="flex flex-col gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">email</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">armutimbire@gmail.com</p>
                      <a
                        href="mailto:armutimbire@gmail.com"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        Send an email →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">phone</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+263 77 268 8051</p>
                      <a
                        href="tel:+263772688051"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        Call me →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Location</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Harare, Zimbabwe
                        <br />
                        Open to remote opportunities globally
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Response Time</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        I typically respond within 24-48 hours during weekdays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Connect on Social</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">work</span>
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
