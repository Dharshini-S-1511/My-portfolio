export const personalInfo = {
  name: "Dharshini S",
  title: "Full-Stack Developer & GenAI Enthusiast",
  roles: [
    "Gen AI & RAG Specialist",
    "Full-Stack Web Developer",
    "Java & Python Programmer",
    "College Cricket Captain"
  ],
  status: "Available for Internships & High-Impact Projects",
  objective: "To be part of a reputed and pioneering organization in the Software and Hardware industry that provides a dynamic platform to solve challenging problems, innovate with emerging technologies, and grow as a visionary software engineer.",
  email: "dharshini.cs25@krct.ac.in",
  phone: "+91 8667722195",
  address: "Plot No.12, 6th Cross West, Sri Balaji Nagar, Kattur, Trichy - 620019, Tamil Nadu, India",
  college: "K. Ramakrishnan College of Technology, Trichy (Anna University)",
  profileImage: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  department: "Computer Science and Engineering",
  graduationYear: "2029",
  cgpa: "87% (Up to 3rd Sem)"
};

export const stats = [
  { value: "87%", label: "BE Academic Score", desc: "Anna University (up to 3rd Sem)" },
  { value: "4+", label: "Key Projects", desc: "GenAI, Web & Java Systems" },
  { value: "3+", label: "Specialized Trainings", desc: "GenAI, RAG & Java" },
  { value: "🏏", label: "Cricket Captain", desc: "College Team Leadership" }
];

export const skillsData = {
  aiAndEmerging: [
    { name: "Gen AI & Prompt Engineering", level: 92, category: "Emerging Tech" },
    { name: "RAG Systems & LangChain", level: 90, category: "AI Architecture" },
    { name: "Vector Search & Embeddings", level: 85, category: "AI / Data" },
    { name: "LLM Orchestration & Evaluation", level: 88, category: "AI Engineering" }
  ],
  languages: [
    { name: "Java (Core, OOP, Swing GUI)", level: 90, category: "Programming" },
    { name: "Python (AI, Scripting, Data)", level: 88, category: "Programming" },
    { name: "JavaScript (ES6+, Async, DOM)", level: 86, category: "Web Core" },
    { name: "SQL & Relational Databases", level: 82, category: "Databases" }
  ],
  frontend: [
    { name: "React.js & Modern Components", level: 85, category: "Frontend" },
    { name: "HTML5 Semantic Architecture", level: 95, category: "Frontend" },
    { name: "CSS3 (Flexbox, Grid, Glassmorphism)", level: 94, category: "Styling" },
    { name: "Responsive & Mobile-First UI", level: 92, category: "UI/UX" }
  ],
  toolsAndLeadership: [
    { name: "Git & Version Control", level: 86, category: "DevOps/Tools" },
    { name: "VS Code & IDE Tooling", level: 90, category: "Tools" },
    { name: "Team Leadership & Sports Strategy", level: 95, category: "Leadership" },
    { name: "Problem Solving & Analytical Thinking", level: 90, category: "Core Soft Skill" }
  ]
};

export const allSkillsList = [
  "Gen AI", "RAG Systems", "LangChain", "Python", "Java", "JavaScript",
  "HTML5", "CSS3", "React", "SQL", "Git", "Object-Oriented Programming (OOP)",
  "Vector Embeddings", "Data Analytics", "Responsive Web Design", "Team Leadership"
];

export const projectsData = [
  {
    id: "rag-chatbot",
    title: "AI-Powered PDF RAG Chatbot",
    category: "AI & GenAI",
    tagline: "Semantic search and hallucination-free document question answering",
    description: "Architected an end-to-end Retrieval-Augmented Generation (RAG) assistant capable of reading and processing dense multi-page PDF documents. Splits texts into semantic chunks, generates contextual embeddings, stores them in vector space, and queries language models for precise, cited responses.",
    tags: ["Python", "LangChain", "Gen AI", "Vector Embeddings", "Semantic Search"],
    icon: "Bot",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    accentColor: "#6366f1",
    featured: true,
    highlights: [
      "Zero-hallucination document query engine with source page citations",
      "Dynamic text chunking with recursive semantic splitting",
      "Fast vector indexing with cosine similarity retrieval",
      "Conversational memory maintaining multi-turn context"
    ],
    metrics: "Sub-second search • 100% Citation Grounding"
  },
  {
    id: "greencampus",
    title: "GreenCampus Sustainability Platform",
    category: "Web Development",
    tagline: "Eco-tracking, carbon footprint audit, and campus green metrics portal",
    description: "Designed and built an interactive sustainability management web portal for educational institutions. Allows campus administrators and students to monitor carbon footprint, energy consumption, waste audits, and green initiatives with real-time visual dashboards.",
    tags: ["HTML5", "CSS3", "JavaScript", "Data Visualization", "Eco Tech"],
    icon: "Leaf",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    accentColor: "#10b981",
    featured: true,
    highlights: [
      "Dynamic visual analytics dashboard tracking energy & waste metrics",
      "Eco-score calculator gamifying sustainable student behaviors",
      "Mobile-friendly, responsive interface adhering to WCAG standards",
      "Department-wise comparison charts and sustainability benchmarks"
    ],
    metrics: "Interactive Dashboards • Real-time Eco Scoring"
  },
  {
    id: "placement-prep",
    title: "AI-Powered Placement Preparation Platform",
    category: "AI & EdTech",
    tagline: "Smart placement mock tests, coding practice, and AI interview simulator",
    description: "Developed a comprehensive career readiness platform tailored for college students preparing for technical placements. Features topic-wise aptitude practice modules, algorithmic coding drills, and AI-assisted interview scenario questions with immediate feedback.",
    tags: ["HTML5", "CSS3", "JavaScript", "Gen AI Integration", "EdTech"],
    icon: "GraduationCap",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    accentColor: "#f59e0b",
    featured: true,
    highlights: [
      "Module-driven learning paths covering Quantitative, Logical & Verbal tracks",
      "Mock technical assessment simulator mirroring Tier-1 tech interviews",
      "Instant response evaluation and step-by-step logic breakdown",
      "Intuitive student performance tracking dashboard"
    ],
    metrics: "Comprehensive Aptitude Modules • Simulated Mock Rounds"
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker & Financial Analytics",
    category: "Java Software",
    tagline: "Desktop financial management suite with custom charts & gradient UI",
    description: "Built a robust Java application featuring custom Swing UI components, dynamic gradient panels, interactive category chart visualizers, and serialized data storage. Tracks periodic spending, calculates running budgets, and provides category analytics.",
    tags: ["Java", "OOP", "Swing UI", "Custom Graphics2D", "Data Persistence"],
    icon: "PieChart",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    accentColor: "#3b82f6",
    featured: false,
    highlights: [
      "Custom Java 2D graphics rendering with sleek gradient backgrounds",
      "Dynamic category-based spending breakdown with auto-updating charts",
      "Encrypted local data serialization for secure transaction history",
      "Period-based total calculations (weekly, monthly, annual totals)"
    ],
    metrics: "Custom 2D Charting • Instant Serialization"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (BE) - Computer Science",
    institution: "K. Ramakrishnan College of Technology (KRCT)",
    university: "Anna University, Chennai",
    period: "2025 – 2029 (Currently in BE)",
    score: "87% (Up to 3rd Semester)",
    status: "Pursuing",
    description: "Core focus on Data Structures, Object-Oriented Programming, Database Management Systems, Artificial Intelligence, and Modern Web Development. Actively participates in technical symposiums and department coding challenges.",
    highlights: ["87% Aggregate Score", "Top academic quartile", "Active member of Tech & Coding clubs"]
  },
  {
    degree: "Higher Secondary Certificate (HSC) - 12th Grade",
    institution: "Montfort School, Kattur, Trichy",
    university: "Central Board of Secondary Education (CBSE)",
    period: "2023 – 2025",
    score: "86%",
    status: "Completed",
    description: "Completed higher secondary curriculum with major focus on Mathematics, Physics, Chemistry, and Computer Science.",
    highlights: ["86% Aggregate CBSE Board", "Strong analytical foundation"]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC) - 10th Grade",
    institution: "Montfort School, Kattur, Trichy",
    university: "Central Board of Secondary Education (CBSE)",
    period: "2021 – 2023",
    score: "90.4%",
    status: "Completed",
    description: "Achieved distinction across core sciences and mathematics, nurturing an early passion for technology and algorithmic problem-solving.",
    highlights: ["90.4% Distinction", "Excellence in Mathematics & Science"]
  }
];

export const trainingsData = [
  {
    title: "Web Development using Gen AI",
    subtitle: "Modern AI-Augmented Full-Stack Workflows",
    description: "Intensive training on accelerating web application development using generative AI models, automated component scaffolding, and smart prompt engineering.",
    icon: "Sparkles",
    badge: "Gen AI"
  },
  {
    title: "Building Applications & RAG Chatbots",
    subtitle: "Autonomous RAG & Retrieval Pipelines",
    description: "Hands-on engineering training on constructing production-grade RAG systems independently using vector stores, chunking strategies, and language model APIs.",
    icon: "Bot",
    badge: "RAG & LLM"
  },
  {
    title: "Java Programming & Web Application Architecture",
    subtitle: "Enterprise Java & Object-Oriented Principles",
    description: "Comprehensive training covering Object-Oriented Programming, data structures, event-driven GUI development with Swing, and foundational web backend concepts.",
    icon: "Code",
    badge: "Java Core"
  }
];

export const leadershipData = [
  {
    title: "Captain, College Cricket Team",
    category: "Sports & Leadership",
    icon: "Trophy",
    description: "Leading the college women's cricket team across inter-collegiate and regional tournaments. Responsible for match strategy, player motivation, agile on-field decisions, and team bonding.",
    points: [
      "Mentored squad members to build resilience and high match awareness",
      "Designed tactical field setups and bowling rotations under high pressure",
      "Cultivated a culture of mutual accountability, dedication, and sportsmanship"
    ]
  },
  {
    title: "Active Football Player",
    category: "Athletics & Teamwork",
    icon: "Activity",
    description: "Regularly representing the institution in competitive football matches, reinforcing stamina, split-second strategic communication, and tight team synchronization.",
    points: [
      "Strengthened tactical defensive and offensive coordination",
      "Demonstrated swift situational adaptability on the pitch"
    ]
  },
  {
    title: "NSS Unit Volunteer (National Service Scheme)",
    category: "Community Impact & Social Service",
    icon: "HeartHandshake",
    description: "Dedicated volunteer at the college NSS chapter, driving grassroots community impact, tree plantation drives, health awareness, and educational initiatives.",
    points: [
      "Organized campus cleanliness drives and green awareness programs",
      "Volunteered in community welfare and blood donation camps",
      "Passionate advocate for social responsibility and student community action"
    ]
  }
];

export const coCurricular = [
  {
    title: "Department Coding Competitions & Hackathons",
    desc: "Actively participated in competitive coding contests, algorithmic problem-solving sprints, and technical paper events conducted by the CSE department."
  },
  {
    title: "Emerging Tech & AI Workshops",
    desc: "Attended hands-on technical workshops exploring Generative AI, Web Technologies, Cloud Architectures, and the future of intelligent software systems."
  },
  {
    title: "Multi-Language System Development",
    desc: "Engineered diverse projects combining Python, Java, JavaScript, and SQL to solve practical student and operational challenges."
  }
];

export const referenceInfo = {
  name: "R. Rajavarman",
  designation: "The Head of the Department (HOD)",
  institution: "K. Ramakrishnan College of Technology",
  location: "Trichy, Tamil Nadu"
};
