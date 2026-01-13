"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

      // Send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: 'error', message: "Failed to send message. Please try emailing me directly at armutimbire@gmail.com" });
    } finally {
      setLoading(false);
    }
  };

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

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {status.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                    }`}
                  >
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
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
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="px-4 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
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
                      <a href="mailto:armutimbire@gmail.com" className="text-sm text-primary hover:underline mt-2 inline-block">
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
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Aomine-c2c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all"
                    aria-label="GitHub"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/romeo-mutimbire-011b42282"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a
                    href="mailto:armutimbire@gmail.com"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all"
                    aria-label="Email"
                  >
                    <span className="material-symbols-outlined">email</span>
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
