import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AcademicPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-6 lg:px-40 py-12 pt-24">
        <div className="max-w-[960px] mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              Academic Work
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Coursework, research projects, and academic contributions from my Computer Science journey at Great
              Zimbabwe University.
            </p>
          </div>

          {/* Current Coursework */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">school</span>
              Current Coursework (2023-2024)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  code: "CSC 401",
                  name: "Advanced Algorithms",
                  description: "Dynamic programming, graph algorithms, complexity analysis",
                  grade: "In Progress",
                },
                {
                  code: "CSC 402",
                  name: "Database Systems",
                  description: "Relational databases, SQL optimization, transaction management",
                  grade: "In Progress",
                },
                {
                  code: "CSC 403",
                  name: "Software Engineering",
                  description: "Agile methodologies, design patterns, software architecture",
                  grade: "In Progress",
                },
                {
                  code: "CSC 404",
                  name: "Computer Networks",
                  description: "OSI model, TCP/IP, network security, routing protocols",
                  grade: "In Progress",
                },
              ].map((course) => (
                <div
                  key={course.code}
                  className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {course.code}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{course.grade}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{course.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{course.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notable Projects */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">assignment</span>
              Notable Projects
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Distributed File System
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Built a fault-tolerant distributed file system using Go, implementing the Raft consensus
                      algorithm for data replication across nodes.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                    A Grade
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    Go
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    Distributed Systems
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    Raft Algorithm
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Machine Learning Classifier
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Developed a binary classifier using scikit-learn to predict student performance based on
                      demographic and academic features with 87% accuracy.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                    A- Grade
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    Python
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    Machine Learning
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    scikit-learn
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">science</span>
              Research Interests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <span className="material-symbols-outlined text-primary mb-3 block">cloud</span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Cloud Computing</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Scalable architectures and serverless computing patterns
                </p>
              </div>

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <span className="material-symbols-outlined text-primary mb-3 block">psychology</span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">AI & ML</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Natural language processing and recommendation systems
                </p>
              </div>

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <span className="material-symbols-outlined text-primary mb-3 block">security</span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Cybersecurity</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Application security and secure coding practices
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
