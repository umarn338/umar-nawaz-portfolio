export const PROFILE = {
  name: "Umar Nawaz",
  role: "Software Engineer — Frontend, Mobile & DevOps",
  tagline:
    "Building high-craft web & mobile applications with React.js and Flutter, backed by scalable cloud & DevOps pipelines.",
  location: "Islamabad / Lahore, Pakistan",
  email: "umar.n1061@gmail.com",
  phone: "+92 348 6999083",
  whatsapp: "https://wa.me/923486999083",
  github: "https://github.com/umarn338",
  githubHandle: "github.com/umarn338",
  linkedin: "https://linkedin.com/in/umar-nawaz-un338",
  linkedinHandle: "linkedin.com/in/umar-nawaz-un338",
  portfolioUrl: "https://umar-nawaz-portfolio-omega.vercel.app",
  resumeUrl: "/Umar_Nawaz_CV.pdf",
  availability: "Open to Frontend, Mobile & DevOps Engineer Opportunities",
  summary:
    "Software Engineering graduate (BSSE, COMSATS University Islamabad) with hands-on industry experience across Enterprise DevOps (Systems Limited, Lahore) and Frontend & Mobile Application Engineering (DevelopersHub Corporation & Firnas Tech). Proven track record of architecting responsive, high-conversion user interfaces with React.js, Tailwind CSS, and Flutter while automating cloud deployments, CI/CD workflows, and backend integrations using Supabase, Firebase, and Docker.",
  stats: [
    { label: "Flagship Apps Built", value: "4+", detail: "Web & Mobile Production UIs" },
    { label: "Industry Internships", value: "3", detail: "Systems Ltd, DevelopersHub & Firnas" },
    { label: "Core Stack", value: "React & Flutter", detail: "+ DevOps CI/CD & Supabase" },
    { label: "Degree", value: "BS SE", detail: "COMSATS University (Mar 2026)" },
  ],
};

export const EXPERIENCES = [
  {
    id: "exp-systems-ltd",
    role: "DevOps Engineer Intern",
    company: "Systems Limited",
    location: "Lahore, Pakistan (On-Site)",
    period: "July 2026 – Sept 2026",
    type: "Enterprise IT & Cloud Infrastructure",
    badge: "Enterprise DevOps",
    highlightColor: "from-cyan-500 to-blue-600",
    description:
      "Gained hands-on enterprise DevOps and cloud automation experience at Pakistan's premier global technology and software house.",
    achievements: [
      "Assisted in configuring, maintaining, and monitoring automated CI/CD pipelines (GitHub Actions / GitLab CI) for build, test, and multi-stage deployment workflows.",
      "Worked with containerized application environments using Docker and Linux CLI to standardize development and staging deployments across engineering teams.",
      "Collaborated with infrastructure and product teams on server environment setup, release automation, and deployment log diagnostics.",
      "Applied Git branching best practices and automated deployment checks to reduce manual release overhead and improve deployment reliability.",
    ],
    tech: ["CI/CD Pipelines", "Docker", "GitHub Actions", "Linux CLI", "Git", "Cloud Deployment", "Shell Scripting", "Monitoring"],
  },
  {
    id: "exp-developers-hub",
    role: "Frontend Developer Intern",
    company: "DevelopersHub Corporation",
    location: "Remote",
    period: "May 2026 – June 2026",
    type: "Remote Frontend Web Engineering",
    badge: "Remote Frontend",
    highlightColor: "from-violet-500 to-indigo-600",
    description:
      "Engineered responsive, modern web interfaces and reusable React.js component libraries within a distributed remote agile engineering team.",
    achievements: [
      "Developed responsive, pixel-accurate web interfaces and reusable UI components using React.js, JavaScript (ES6+), and Tailwind CSS.",
      "Integrated dynamic frontend views with RESTful APIs, managed client-side application state, and optimized rendering performance.",
      "Ensured cross-browser compatibility and mobile-first responsiveness across desktop, tablet, and mobile viewports.",
      "Collaborated asynchronously via Git and GitHub pull requests, peer code reviews, and structured agile sprint milestones.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "REST APIs", "Git & GitHub", "Responsive UI"],
  },
  {
    id: "exp-firnas-tech",
    role: "Frontend Developer Intern",
    company: "Firnas Tech",
    location: "Abbottabad, Pakistan",
    period: "March 2025 – Nov 2025",
    type: "Web & Mobile Application Development",
    badge: "Frontend & Mobile",
    highlightColor: "from-emerald-500 to-teal-600",
    description:
      "Developed responsive, user-centric web and cross-platform mobile interfaces in an agile product team using React.js, Tailwind CSS, and Flutter.",
    achievements: [
      "Assisted in developing responsive frontend interfaces for production web and mobile applications using React.js and Flutter.",
      "Engineered modular, reusable UI components and design system elements to accelerate feature delivery and maintain visual consistency.",
      "Collaborated closely with team members on debugging, state management, feature implementation, and usability testing.",
      "Used Git and GitHub for collaborative version control, branch management, and modern software engineering workflows.",
    ],
    tech: ["React.js", "Flutter", "Dart", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Git & GitHub"],
  },
];

export const PROJECTS = [
  {
    id: "loom-and-label",
    title: "Loom & Label — Luxury Fashion & Boutique E-Commerce",
    subtitle: "Ongoing Flagship Project • Full-Stack E-Commerce Platform",
    category: "Web App",
    featured: true,
    status: "Ongoing (2026)",
    image: "/loom-and-label-preview.jpg",
    monogram: "/loom-monogram-gold.png",
    githubUrl: "https://github.com/umarn338/loom-and-label",
    tech: [
      "React 18",
      "Tailwind CSS",
      "Supabase",
      "Vite 6",
      "PostgreSQL",
      "Lucide Icons",
      "GitHub CI/CD",
    ],
    summary:
      "A bespoke Pakistani luxury fashion & couture e-commerce platform ('Stitched ✦ Unstitched ✦ You') featuring a custom crystal-glass UI aesthetic, real-time Supabase product catalog, live multi-currency pricing (PKR, USD, AED), full Admin CRUD dashboard, customer authentication, and WhatsApp order integration.",
    metrics: [
      { label: "Architecture", value: "React 18 + Supabase" },
      { label: "Currencies", value: "PKR / USD / AED" },
      { label: "Modules", value: "18+ Custom Components" },
      { label: "Admin", value: "Live Catalog CRUD" },
    ],
    highlights: [
      "Architected a full-featured luxury boutique storefront with Pret, Unstitched 3-Pc, Festive Wear, Men's Kurta, Accessories, and Archive Sale filtering.",
      "Integrated Supabase backend (@supabase/supabase-js) for real-time product inventory synchronization, customer authentication, and persistent admin catalog operations.",
      "Engineered a Store Manager Admin Dashboard allowing live creation, updating, deletion, and demo reset of products with multi-angle photography and fabric metadata.",
      "Implemented real-time multi-currency conversion (PKR, USD, AED), interactive Cart & Wishlist drawers, Size Guide modal, and direct WhatsApp order checkout.",
      "Crafted a signature luxury stationery & crystal-glass visual system with full Dark and Light mode support and digital Grand Opening invitation cards.",
    ],
  },
  {
    id: "track-site-pro",
    title: "Track Site Pro — Construction Site Management App",
    subtitle: "Final Year Project (FYP) • Cross-Platform Mobile Application",
    category: "Mobile (Flutter)",
    featured: true,
    status: "Final Year Project",
    githubUrl: "https://github.com/umarn338",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "State Management", "Android Studio"],
    summary:
      "A comprehensive construction and project site management mobile application built with Flutter and Firebase to digitize field task tracking, worker attendance, and real-time project progress reporting.",
    metrics: [
      { label: "Platform", value: "iOS & Android (Flutter)" },
      { label: "Backend", value: "Firebase Auth & DB" },
      { label: "Core Modules", value: "Tasks, Attendance, Reports" },
      { label: "Role", value: "Lead Mobile Developer" },
    ],
    highlights: [
      "Developed a cross-platform construction and site management application for tracking daily field tasks, worker attendance, and milestone progress.",
      "Built responsive, intuitive mobile interfaces in Flutter optimized for on-site supervisors and project managers.",
      "Integrated Firebase Authentication for secure role-based access and Firebase real-time database services for instant multi-device synchronization.",
      "Designed dedicated modules for task assignment, daily attendance logging, and centralized progress reporting dashboards.",
    ],
  },
  {
    id: "smart-healthcare-app",
    title: "Smart Healthcare Appointment App",
    subtitle: "Patient Booking & Medical Records Platform",
    category: "Web App",
    featured: false,
    status: "Completed",
    githubUrl: "https://github.com/umarn338",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Firestore", "State Management"],
    summary:
      "A healthcare appointment management application featuring specialist doctor discovery, real-time appointment booking, Firebase Authentication, and patient medical history interfaces.",
    metrics: [
      { label: "Framework", value: "React.js + Firebase" },
      { label: "Auth", value: "Firebase Authentication" },
      { label: "Workflows", value: "Booking & Patient Records" },
    ],
    highlights: [
      "Developed a healthcare appointment management web application with an accessible, modern UI.",
      "Implemented doctor discovery, specialty filtering, and time-slot appointment scheduling features.",
      "Created secure patient login and signup flows powered by Firebase Authentication.",
      "Designed structured patient record views and historical appointment tracking interfaces with form validation.",
    ],
  },
  {
    id: "student-portal-dashboard",
    title: "Student Portal Dashboard",
    subtitle: "Academic Analytics & Campus Management Interface",
    category: "Web App",
    featured: false,
    status: "Completed",
    githubUrl: "https://github.com/umarn338",
    tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive UI", "Dark/Light Theme"],
    summary:
      "A modern, responsive student portal dashboard providing real-time visibility into attendance records, GPA progression, weekly course timetables, and campus notifications.",
    metrics: [
      { label: "Framework", value: "React.js + Tailwind" },
      { label: "Theme", value: "Dark & Light Mode" },
      { label: "Modules", value: "GPA, Attendance, Timetable" },
    ],
    highlights: [
      "Designed and developed a clean, responsive student portal dashboard interface with intuitive navigation.",
      "Implemented interactive attendance tracking, semester GPA display cards, weekly class timetable views, and real-time notification panels.",
      "Built a reusable UI component architecture with seamless Dark and Light mode switching.",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile Engineering",
    subtitle: "Crafting responsive, pixel-accurate web & cross-platform mobile apps",
    badge: "Primary Focus",
    skills: [
      { name: "React.js (Hooks, Context, SPA Architecture)", level: 92 },
      { name: "Flutter & Dart (Cross-Platform Mobile)", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS & Responsive UI Design", level: 95 },
      { name: "HTML5 & Modern CSS3 (Animations/Grid)", level: 94 },
    ],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    subtitle: "Hands-on experience from Systems Limited (Lahore) & cloud projects",
    badge: "Systems Ltd Experience",
    skills: [
      { name: "CI/CD Pipelines (GitHub Actions / Automation)", level: 84 },
      { name: "Docker & Containerization", level: 80 },
      { name: "Git Version Control & Branch Workflows", level: 92 },
      { name: "Linux CLI & Server Environment Setup", level: 82 },
      { name: "Cloud Deployment (Vercel, Netlify, Firebase)", level: 88 },
    ],
  },
  {
    id: "backend-database",
    title: "Backend, BaaS & Databases",
    subtitle: "Full-stack data persistence, authentication & REST API integration",
    badge: "Full-Stack Capable",
    skills: [
      { name: "Supabase (PostgreSQL, Auth, Realtime)", level: 88 },
      { name: "Firebase (Auth, Firestore, Realtime DB)", level: 90 },
      { name: "Node.js & Express.js (Basic)", level: 76 },
      { name: "PostgreSQL, MongoDB & Prisma ORM", level: 78 },
      { name: "RESTful API Integration & State Management", level: 88 },
    ],
  },
  {
    id: "tools-practices",
    title: "Engineering Tools & Core Concepts",
    subtitle: "Modern developer workflows & AI-accelerated software delivery",
    badge: "Workflow",
    skills: [
      { name: "VS Code, Android Studio & Vite", level: 94 },
      { name: "Performance Optimization & Debugging", level: 88 },
      { name: "Component-Driven Architecture", level: 90 },
      { name: "AI-Assisted Engineering (Claude, ChatGPT)", level: 95 },
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Software Engineering (BSSE)",
  university: "COMSATS University Islamabad — Abbottabad Campus",
  graduated: "March 2026",
  fyp: "Track Site Pro — Construction & Project Site Management Application (Flutter & Firebase)",
  highlights: [
    "Software Engineering core curriculum: Object-Oriented Programming, Data Structures & Algorithms, Web Engineering, Mobile Application Development, Database Systems, and DevOps/Software Quality Engineering.",
    "Led Final Year Project (Track Site Pro) from requirements analysis and UI/UX prototyping to Flutter + Firebase implementation.",
  ],
};

export const LANGUAGES = [
  { name: "Pashto", proficiency: "Fluent / Native", percent: 100 },
  { name: "Urdu", proficiency: "Fluent / Native", percent: 100 },
  { name: "English", proficiency: "Working Professional", percent: 85 },
];
