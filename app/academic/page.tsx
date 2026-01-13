import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AcademicPage() {
  const academicAreas = [
    {
      category: "Core Computer Science",
      icon: "code",
      skills: [
        {
          name: "Data Structures & Algorithms",
          description: "Proficient in implementing and analyzing complex data structures, algorithm design, and computational complexity",
          level: "Advanced",
          topics: ["Binary Trees", "Graph Algorithms", "Dynamic Programming", "Sorting & Searching"]
        },
        {
          name: "Object-Oriented Programming",
          description: "Expert-level understanding of OOP principles, design patterns, and software architecture",
          level: "Expert",
          topics: ["Design Patterns", "SOLID Principles", "Inheritance & Polymorphism", "Encapsulation"]
        },
        {
          name: "Database Systems",
          description: "Strong foundation in database design, SQL, normalization, and query optimization",
          level: "Advanced",
          topics: ["Relational Databases", "SQL", "Normalization", "Transaction Management"]
        },
        {
          name: "Computer Architecture",
          description: "Deep understanding of hardware-software interaction, memory management, and system design",
          level: "Proficient",
          topics: ["CPU Architecture", "Memory Hierarchy", "Instruction Sets", "System Buses"]
        }
      ]
    },
    {
      category: "Software Engineering & Development",
      icon: "engineering",
      skills: [
        {
          name: "Software Engineering",
          description: "Comprehensive knowledge of SDLC, Agile methodologies, and software project management",
          level: "Advanced",
          topics: ["Agile/Scrum", "Software Testing", "Version Control", "CI/CD"]
        },
        {
          name: "Net-Centric Development",
          description: "Experienced in building web applications, RESTful APIs, and distributed systems",
          level: "Advanced",
          topics: ["Web APIs", "HTTP/HTTPS", "Client-Server Architecture", "Web Services"]
        },
        {
          name: "Design Thinking",
          description: "Skilled in user-centered design, prototyping, and iterative development processes",
          level: "Proficient",
          topics: ["User Research", "Prototyping", "Design Patterns", "UX Principles"]
        }
      ]
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: "psychology",
      skills: [
        {
          name: "Machine Learning",
          description: "Hands-on experience with supervised/unsupervised learning, model training, and evaluation",
          level: "Advanced",
          topics: ["Regression", "Classification", "Neural Networks", "Model Evaluation"]
        },
        {
          name: "Artificial Intelligence",
          description: "Understanding of AI concepts, search algorithms, and intelligent agent design",
          level: "Proficient",
          topics: ["Search Algorithms", "Knowledge Representation", "Constraint Satisfaction", "Planning"]
        }
      ]
    },
    {
      category: "Systems & Networks",
      icon: "hub",
      skills: [
        {
          name: "Operating Systems",
          description: "Strong grasp of OS concepts, process management, and system resource optimization",
          level: "Advanced",
          topics: ["Process Management", "Memory Management", "File Systems", "Concurrency"]
        },
        {
          name: "Computer Networks",
          description: "Proficient in network protocols, architecture, and data communication principles",
          level: "Advanced",
          topics: ["TCP/IP", "Network Security", "Routing", "Protocol Design"]
        },
        {
          name: "Computer Security",
          description: "Knowledge of cybersecurity principles, encryption, and secure system design",
          level: "Proficient",
          topics: ["Cryptography", "Network Security", "Threat Analysis", "Access Control"]
        },
        {
          name: "Microprocessors & Embedded Systems",
          description: "Experience with low-level programming and embedded system development",
          level: "Proficient",
          topics: ["Assembly Language", "Hardware Interfacing", "Real-time Systems", "IoT"]
        }
      ]
    },
    {
      category: "Mathematics & Theory",
      icon: "functions",
      skills: [
        {
          name: "Discrete Mathematics",
          description: "Solid foundation in mathematical logic, set theory, and combinatorics",
          level: "Advanced",
          topics: ["Graph Theory", "Logic", "Combinatorics", "Proof Techniques"]
        },
        {
          name: "Engineering Mathematics",
          description: "Proficient in calculus, linear algebra, and statistical analysis",
          level: "Proficient",
          topics: ["Calculus", "Linear Algebra", "Probability", "Statistics"]
        },
        {
          name: "Research Methods & Statistics",
          description: "Skilled in research methodology, statistical analysis, and data interpretation",
          level: "Advanced",
          topics: ["Statistical Testing", "Research Design", "Data Analysis", "Scientific Writing"]
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Programming Project (Capstone)",
      description: "Designed and developed a full-stack application applying software engineering best practices",
      technologies: ["Full Stack Development", "Database Design", "API Development", "Testing"],
      achievement: "Successfully delivered production-ready software"
    },
    {
      title: "Machine Learning Implementation",
      description: "Built and trained ML models for real-world data classification and prediction",
      technologies: ["Python", "Scikit-learn", "Data Preprocessing", "Model Evaluation"],
      achievement: "Achieved high accuracy on test datasets"
    },
    {
      title: "Database Management System",
      description: "Designed normalized database schema for complex business requirements",
      technologies: ["SQL", "Database Design", "Normalization", "Query Optimization"],
      achievement: "Optimized query performance by 40%"
    }
  ];

  const getLevelColor = (level: string) => {
    if (level === "Expert") return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
    if (level === "Advanced") return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
    return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300";
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1 px-4 py-12 md:py-24 pt-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              Academic Background
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Technical competencies and skills developed through rigorous academic training in Computer Science.
            </p>
          </div>

          {/* Current Program */}
          <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  BSc Computer Science
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Comprehensive computer science education covering theoretical foundations and practical applications
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    2024 - Present
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    Year 2
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    27+ Courses Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Competencies
            </h2>
            <div className="space-y-8">
              {academicAreas.map((area, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-xl">{area.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {area.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {area.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {skill.topics.map((topic, topicIdx) => (
                            <span
                              key={topicIdx}
                              className="px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-400"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Academic Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Notable Academic Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:border-primary transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400">
                      ✓ {project.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Development */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Continuous Learning</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Committed to staying current with emerging technologies and industry best practices
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Active participation in coding challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Contributing to open-source projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Building personal projects to apply new skills</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Soft Skills</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Developed essential professional competencies alongside technical skills
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Strong problem-solving and analytical thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Effective team collaboration and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Research and technical writing abilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
