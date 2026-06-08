export const personalInfo = {
  name: "Tanushka Bhoir",
  title: "B.E. Information Technology Student",
  college: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
  location: "Navi Mumbai, Maharashtra",
  email: "bhoirtanushka@gmail.com",
  github: "https://github.com/Tanushka-08",
  linkedin: "https://www.linkedin.com/in/tanushka-bhoir-a52160372",
  about: `I'm a B.E. Information Technology student at Bharati Vidyapeeth College of Engineering, Navi Mumbai, with a genuine passion for building tools that solve real problems. From automating file organization with Java to predicting student performance using machine learning, I enjoy turning ideas into working software.

I'm actively expanding my skills across Python, web development, and AI — earning certifications from IBM SkillsBuild, NPTEL (IIT Kharagpur), and completing a Generative AI Bootcamp. I thrive at the intersection of curiosity and code, and I'm always looking for my next challenge to learn something new and ship something meaningful.`,
};

export const skills = {
  technical: [
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "HTML & CSS", level: 80 },
    { name: "JavaScript", level: 65 },
    { name: "React.js", level: 55 },
    { name: "MySQL", level: 55 },
    { name: "Git & GitHub", level: 70 },
    { name: "Machine Learning", level: 55 },
    { name: "Generative AI", level: 60 },
    { name: "Basic DSA", level: 60 },
    { name: "Computer Networks", level: 65 },
  ],
  tools: ["VS Code", "Jupyter Notebook", "GitHub", "Spring Boot"],
  soft: ["Problem Solving", "Quick Learner", "Team Coordination", "Adaptability"],
};

export const projects = [
  {
    id: 1,
    title: "File Organizer",
    description:
      "A Java Swing-based desktop application that automatically categorizes and organizes files by extension. Features include preview before organizing, undo last action, custom categories, duplicate file handling, a logging system, file statistics dashboard, and a sleek dark mode GUI.",
    tech: ["Java", "Java Swing", "File Handling API", "OOP", "Collections Framework"],
    github: "https://github.com/Tanushka-08/File-Organizer",
    live: null,
    status: "completed",
    highlight: "Dark Mode GUI + Undo feature",
    icon: "folder",
  },
  {
    id: 2,
    title: "Student Performance Prediction",
    description:
      "A machine learning project that predicts student math scores using demographic and academic factors such as gender, parental education, lunch type, reading and writing scores. Trained and compared 6 regression models — Linear Regression achieved the best R² score.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    github: "https://github.com/Tanushka-08/Student-Performance-Prediction-ML",
    live: null,
    status: "completed",
    highlight: "6 ML models compared",
    icon: "brain",
  },
  {
    id: 3,
    title: "Smart Study Planner",
    description:
      "A web-based productivity tool that helps students manage study tasks, set goals, and track progress. Features a donut chart for overall completion, weekly bar charts, light/dark mode toggle, and persistent LocalStorage — no backend required.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "LocalStorage"],
    github: "https://github.com/Tanushka-08/Smart-Study-Planner",
    live: null,
    status: "completed",
    highlight: "Charts + LocalStorage persistence",
    icon: "book",
  },
  {
    id: 4,
    title: "Resume Builder",
    description:
      "A full-stack web application to help users create and manage professional resumes through an intuitive interface. Built with React.js on the frontend and Spring Boot on the backend — currently in active development.",
    tech: ["React.js", "Spring Boot", "Java", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Tanushka-08/Resume-builder",
    live: null,
    status: "in-progress",
    highlight: "Full-stack: React + Spring Boot",
    icon: "file-text",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL — IIT Kharagpur",
    date: "Jan – Apr 2026",
    badge: "Elite",
    detail: "12-week course · 66% score · 4 credits recommended · Skill India",
    verify: null,
    color: "orange",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2025",
    badge: "Credly",
    detail: "HTML, CSS, JavaScript · Verifiable digital credential",
    verify: "https://www.credly.com/badges/6525432d-6e1e-4857-baf3-0415eb279c6a",
    color: "blue",
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    badge: "Credly",
    detail: "AI concepts, tools & applications · Verifiable digital credential",
    verify: "https://www.credly.com/badges/39de8820-3cd1-430c-80de-b052d0a467c9",
    color: "blue",
  },
  {
    id: 4,
    title: "Generative AI Bootcamp",
    issuer: "Dept. of IT, BV College of Engineering",
    date: "Sep 2025",
    badge: "Completion",
    detail: "5-day value-added bootcamp · Navi Mumbai",
    verify: null,
    color: "purple",
  },
  {
    id: 5,
    title: "Python Complete Course for Beginners",
    issuer: "Udemy — Horizon Tech",
    date: "Apr 2025",
    badge: "Completion",
    detail: "7.5 hours · Certificate No: UC-a1f72b25",
    verify: "https://ude.my/UC-a1f72b25-c033-4767-93b0-1319d879b42b",
    color: "green",
  },
];

export const achievements = [
  {
    id: 1,
    title: "UAi Hawkathon 2026",
    org: "Universal AI University",
    date: "2026",
    description:
      "Participated in UAi Hawkathon 2026, demonstrating innovation, creativity, and teamwork while building impactful solutions. Recognized for collaborative problem-solving under pressure.",
    type: "hackathon",
    icon: "trophy",
  },
  {
    id: 2,
    title: "Workshop on Basic Programming using Python",
    org: "FOSSEE Project, IIT Bombay",
    date: "Jan 2026",
    description:
      "Completed a 3-day intensive workshop organized by Bharati Vidyapeeth College of Engineering, Navi Mumbai. Awarded A grade in the proctored online test. Workshop funded by the National Mission on Education through ICT, MHRD, Govt. of India.",
    type: "workshop",
    icon: "award",
  },
];
