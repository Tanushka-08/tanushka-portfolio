export const personalInfo = {
  name: "Tanushka Bhoir",
  title: "B.E. Information Technology Student",
  college: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
  location: "Navi Mumbai, Maharashtra",
  email: "bhoirtanushka@gmail.com",
  github: "https://github.com/Tanushka-08",
  linkedin: "https://www.linkedin.com/in/tanushka-bhoir-a52160372",
  resumeUrl: "/resume.pdf",
  about: [
    "I'm a B.E. IT student at Bharati Vidyapeeth College of Engineering with a genuine love for building things that actually work. From automating messy file systems with Java to predicting student outcomes with machine learning — I'm drawn to problems where code meets real impact.",
    "Currently expanding across Python, web dev, and AI — with certifications from IBM SkillsBuild, NPTEL (IIT Kharagpur), and a Generative AI bootcamp under my belt. I learn fastest when I'm building.",
  ],
};

// Proficiency: "learning" | "familiar" | "comfortable" | "proficient"
export const skills = {
  technical: [
    { name: "Python",           level: "proficient",  icon: "🐍" },
    { name: "HTML & CSS",       level: "proficient",  icon: "🎨" },
    { name: "JavaScript",       level: "comfortable", icon: "⚡" },
    { name: "React.js",         level: "familiar",    icon: "⚛️" },
    { name: "MySQL",            level: "familiar",    icon: "🗄️" },
    { name: "Git & GitHub",     level: "comfortable", icon: "🔧" },
    { name: "Machine Learning", level: "familiar",    icon: "🤖" },
    { name: "Generative AI",    level: "familiar",    icon: "✨" },
    { name: "Spring Boot",      level: "learning",    icon: "🌱" },
    { name: "DSA",              level: "familiar",    icon: "📊" },
    { name: "Networks",         level: "comfortable", icon: "🌐" },
  ],
  tools: [
    { name: "VS Code",          category: "editor"   },
    { name: "Jupyter Notebook", category: "notebook" },
    { name: "GitHub",           category: "vcs"      },
    { name: "Spring Boot",      category: "backend"  },
    { name: "Postman",          category: "api"      },
  ],
  soft: [
    { name: "Problem Solving",     icon: "🔍" },
    { name: "Quick Learner",       icon: "⚡" },
    { name: "Team Coordination",   icon: "🤝" },
    { name: "Adaptability",        icon: "🌊" },
    { name: "Attention to Detail", icon: "🎯" },
  ],
};

// Proficiency label descriptions (used in UI legend)
export const proficiencyMeta = {
  learning:    { label: "Learning",    color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  bar: 20 },
  familiar:    { label: "Familiar",    color: "#3b82f6", bg: "rgba(59,130,246,0.1)",  bar: 45 },
  comfortable: { label: "Comfortable", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)",  bar: 68 },
  proficient:  { label: "Proficient",  color: "#10b981", bg: "rgba(16,185,129,0.1)",  bar: 88 },
};

export const projects = [
  {
    id: 1,
    title: "File Organizer",
    tagline: "Stop hunting. Start finding.",
    description:
      "A Java Swing desktop app that automatically sorts files by extension into smart categories. Built with preview-before-organize, undo last action, custom categories, duplicate detection, logging, statistics dashboard, and a dark mode GUI.",
    tech: ["Java", "Java Swing", "File I/O API", "OOP", "Collections"],
    github: "https://github.com/Tanushka-08/File-Organizer",
    live: null,
    status: "completed",
    highlight: "Undo + dark mode GUI",
    icon: "folder",
    accent: "#f97316",
  },
  {
    id: 2,
    title: "Student Performance Prediction",
    tagline: "Turning grades into insights.",
    description:
      "ML model predicting math scores using gender, parental education, lunch type, reading and writing scores. Compared 6 regression models — Linear Regression topped with the best R² score. Full EDA included.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Tanushka-08/Student-Performance-Prediction-ML",
    live: null,
    status: "completed",
    highlight: "6 models benchmarked",
    icon: "brain",
    accent: "#8b5cf6",
  },
  {
    id: 3,
    title: "Smart Study Planner",
    tagline: "Plan smarter. Study better.",
    description:
      "Browser-based productivity tool for managing study tasks and tracking progress. Features donut chart for completion, weekly bar chart, light/dark toggle, and LocalStorage persistence — fully offline, no backend.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "LocalStorage"],
    github: "https://github.com/Tanushka-08/Smart-Study-Planner",
    live: "https://tanushka-08.github.io/Smart-Study-Planner",
    status: "completed",
    highlight: "Live demo available",
    icon: "book",
    accent: "#06b6d4",
  },
  {
    id: 4,
    title: "Resume Builder",
    tagline: "Your story, your format.",
    description:
      "Full-stack web app for creating professional resumes through an intuitive form-based interface. React.js frontend, Spring Boot backend. Currently building out the PDF export and template engine.",
    tech: ["React.js", "Spring Boot", "Java", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Tanushka-08/Resume-builder",
    live: null,
    status: "in-progress",
    highlight: "Full-stack in progress",
    icon: "file",
    accent: "#ec4899",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL — IIT Kharagpur",
    date: "Jan – Apr 2026",
    badge: "Elite",
    detail: "12-week · 66% · 4 credits · Skill India",
    verify: null,
    color: "orange",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2025",
    badge: "Credly verified",
    detail: "HTML, CSS, JavaScript",
    verify: "https://www.credly.com/badges/6525432d-6e1e-4857-baf3-0415eb279c6a",
    color: "blue",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    badge: "Credly verified",
    detail: "AI concepts, tools & applications",
    verify: "https://www.credly.com/badges/39de8820-3cd1-430c-80de-b052d0a467c9",
    color: "blue",
    icon: "🤖",
  },
  {
    id: 4,
    title: "Generative AI Bootcamp",
    issuer: "Dept. of IT, BV College of Engineering",
    date: "Sep 2025",
    badge: "Completion",
    detail: "5-day value-added program",
    verify: null,
    color: "purple",
    icon: "✨",
  },
  {
    id: 5,
    title: "Python Complete Course",
    issuer: "Udemy — Horizon Tech",
    date: "Apr 2025",
    badge: "Completion",
    detail: "7.5 hours · UC-a1f72b25",
    verify: "https://ude.my/UC-a1f72b25-c033-4767-93b0-1319d879b42b",
    color: "green",
    icon: "🐍",
  },
];

export const achievements = [
  {
    id: 1,
    title: "UAi Hawkathon 2026",
    org: "Universal AI University",
    date: "2026",
    description:
      "Competed in a high-intensity AI-focused hackathon — built an impactful solution under tight deadlines with a cross-functional team, demonstrating rapid prototyping and collaborative problem-solving.",
    type: "hackathon",
  },
  {
    id: 2,
    title: "Python Workshop — Grade A",
    org: "FOSSEE Project, IIT Bombay",
    date: "Jan 2026",
    description:
      "Completed a 3-day intensive programming workshop and scored Grade A in the proctored online test. Funded by the National Mission on Education through ICT, MHRD, Govt. of India.",
    type: "workshop",
  },
];
