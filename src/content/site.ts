import type { LucideIcon } from "lucide-react";
import {
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  DatabaseZap,
  Globe2,
  GraduationCap,
  Layers3,
  ServerCog,
  Sparkles,
  Wrench,
} from "lucide-react";

export type SupportedLanguage = "en" | "fr" | "ar";

export type ProjectMeta = {
  id: string;
  year: string;
  title: string;
  summary: string;
  detail: string;
  category: string;
  stack: string[];
  highlights: string[];
  challenge: string[];
  build: string[];
  code?: string;
  demo?: string;
  featuredOnHome?: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  skills: string[];
};

export const profile = {
  name: "Ahmed Bouba",
  role: "Full Stack & AI Developer",
  location: "Khemisset, Morocco",
  email: "ahmedbouuba@gmail.com",
  phone: "+212 628 987 577",
  github: "https://github.com/BoubaAhmed",
  linkedin: "https://www.linkedin.com/in/ahmed-bouba-861b91231/",
  portrait: "/media/portrait.png",
  tagline: "Full-stack and AI developer building useful products with clean execution.",
  summary:
    "Master's graduate in Intelligent Systems with hands-on experience across Django, React, AI workflows, Java desktop software, databases, Docker, and production-minded delivery.",
  availability:
    "Open to full-time roles, freelance work, and product teams that need reliable engineering with an AI edge.",
};

export const resumeLinks = [
  { id: "fr", href: "/docs/CV_Bouba_Ahmed_FR.pdf", label: "CV FR" },
  { id: "en", href: "/docs/CV_Bouba_Ahmed_ENG.pdf", label: "CV EN" },
] as const;

export const featuredProjects: ProjectMeta[] = [
  {
    id: "enslms",
    year: "2025 - 2026",
    title: "EnsLMS",
    summary: "Adaptive learning platform built with Django, React, PostgreSQL, Redis, Celery, and Docker.",
    detail:
      "A full-stack LMS designed for academic delivery, learner tracking, and AI-assisted educational workflows.",
    category: "AI platform",
    stack: ["Django", "React", "PostgreSQL", "Redis", "Celery", "Docker"],
    highlights: [
      "FSLSM-based learner profiling",
      "Recommendation features for learning paths",
      "LLM-assisted content generation",
      "Production deployment on Ubuntu VPS",
    ],
    challenge: [
      "The product needed to connect academic management, learner data, and AI-driven personalization in one coherent system.",
      "The architecture had to stay practical enough for deployment, background jobs, and future growth.",
    ],
    build: [
      "Designed modules for users, programs, courses, assessments, and progress tracking.",
      "Integrated Redis and Celery for asynchronous educational workflows.",
      "Containerized the stack with Docker Compose and deployed it on Ubuntu VPS.",
    ],
    featuredOnHome: true,
  },
  {
    id: "reading-eye",
    year: "2025",
    title: "Reading Eye",
    summary: "Accessibility-focused OCR and text-to-speech system for visually impaired users.",
    detail:
      "A hardware-assisted reading experience combining Raspberry Pi, Flask services, OCR, and a React interface.",
    category: "Accessibility",
    stack: ["React", "Flask", "Python", "Firebase", "OCR", "Raspberry Pi"],
    highlights: [
      "OCR pipeline for document reading",
      "Text-to-speech output flow",
      "Real-world accessibility orientation",
    ],
    challenge: [
      "The interface needed to stay simple while the underlying flow handled capture, extraction, and voice output.",
      "The project had to bridge hardware interaction and usable frontend delivery.",
    ],
    build: [
      "Connected Raspberry Pi processing with Flask-based services.",
      "Built the interface layer in React for clear and responsive control.",
      "Focused the product around assistive usability instead of generic OCR output.",
    ],
    code: "https://github.com/BoubaAhmed/reading-eye-raspberry-pi",
    featuredOnHome: true,
  },
  {
    id: "fraud-research",
    year: "2025",
    title: "Fraud Prediction Research",
    summary: "Research contribution around Bayesian Neural Networks for fraud prediction.",
    detail:
      "An applied AI research effort that focused on probabilistic modeling and paper submission support for I2ASD.",
    category: "Research",
    stack: ["Python", "Bayesian Neural Networks", "Machine Learning", "Data Analysis"],
    highlights: [
      "Model evaluation for fraud prediction",
      "Probabilistic ML framing",
      "Conference paper contribution",
    ],
    challenge: [
      "The work required balancing technical modeling with research clarity and evaluation discipline.",
      "The output had to support both experimentation and academic communication.",
    ],
    build: [
      "Developed and evaluated the Bayesian neural network approach.",
      "Contributed to the paper submission for I2ASD hosted at ENS Meknes.",
      "Focused on translating experimental work into a defensible research output.",
    ],
  },
  {
    id: "attendance",
    year: "2025",
    title: "IoT Attendance System",
    summary: "Fingerprint-based attendance platform using ESP32, Flask, Firebase, and React.",
    detail:
      "A real-time attendance workflow designed for educational or organizational monitoring.",
    category: "IoT",
    stack: ["React", "Flask", "ESP32", "Firebase", "IoT"],
    highlights: [
      "Fingerprint attendance flow",
      "Connected-device architecture",
      "Real-time sync behavior",
    ],
    challenge: [
      "The system needed to unify device input, backend logic, and dashboard visibility without creating fragile flows.",
      "The value of the product depended on reliability more than visual novelty.",
    ],
    build: [
      "Connected ESP32 hardware events to Flask services and Firebase state.",
      "Built a React layer for monitoring and interaction.",
      "Shaped the product for practical attendance operations.",
    ],
    code: "https://github.com/BoubaAhmed/iot-attendance-system",
  },
  {
    id: "analytics",
    year: "2025",
    title: "Real-Time IoT Analytics Pipeline",
    summary: "Scalable event-processing pipeline with Kafka, Spark Streaming, Docker, and HDFS.",
    detail:
      "A data engineering project built to process and analyze real-time IoT streams with a production-like architecture.",
    category: "Data engineering",
    stack: ["Kafka", "Spark", "Docker", "HDFS", "Flask"],
    highlights: [
      "Streaming ingestion with Kafka",
      "Processing with Spark Streaming",
      "Containerized analytics architecture",
    ],
    challenge: [
      "The system needed to show scalable flow design rather than a single isolated dashboard.",
      "The architecture had to coordinate ingestion, processing, and storage layers coherently.",
    ],
    build: [
      "Used Kafka for event transport and Spark Streaming for live processing.",
      "Added HDFS and Docker-based orchestration to support scale-oriented design.",
      "Framed the project as a backend-heavy analytics pipeline instead of only a frontend showcase.",
    ],
    code: "https://github.com/BoubaAhmed/Real-Time-IoT-Analytics-Pipeline-with-Kafka-Spark-Docker-HDFS",
  },
  {
    id: "smartcity",
    year: "2025",
    title: "SmartCityMek",
    summary: "Citizen-focused platform for reporting urban issues and improving city interaction.",
    detail:
      "A MERN-based product built around public reporting flows, issue tracking, and clearer city-service interaction.",
    category: "MERN application",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    highlights: [
      "Citizen issue reporting",
      "MERN full-stack architecture",
      "Operational dashboard logic",
    ],
    challenge: [
      "The product needed to feel useful and direct for citizens rather than overly technical.",
      "The platform had to balance reporting simplicity with structured backend handling.",
    ],
    build: [
      "Built the product with a standard MERN architecture for clarity and speed of iteration.",
      "Focused on urban issue reporting and monitoring flows.",
      "Designed it as a practical civic interface, not just a coursework dashboard.",
    ],
    code: "https://github.com/BoubaAhmed/smartcity-meknes-MERN",
  },
  {
    id: "hr-system",
    year: "2024",
    title: "HR Management System",
    summary: "Java/JavaFX desktop application for employee, leave, and business travel management.",
    detail:
      "A desktop-focused human resources system built during the ENS Tetouan experience using MVC and MySQL.",
    category: "Desktop software",
    stack: ["Java", "JavaFX", "MySQL", "MVC", "Git"],
    highlights: [
      "Centralized HR operations",
      "Administrative certificate generation",
      "Executable JAR packaging",
    ],
    challenge: [
      "The application needed structured business logic and reliable desktop workflows for administrative use.",
      "The architecture had to keep the code organized for multiple HR operations.",
    ],
    build: [
      "Implemented the application in Java and JavaFX using MVC.",
      "Connected the data layer with MySQL and managed version control with Git.",
      "Packaged the software as an executable JAR for delivery.",
    ],
  },
] as const;

export const homeProjects = featuredProjects.filter((project) => project.featuredOnHome).slice(0, 2);

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    text: "Applied ML, experimentation, modeling, and intelligent product features.",
    icon: BrainCircuit,
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "Deep Learning", "Recommendation systems"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    text: "Interfaces that stay clear, responsive, and implementation-driven.",
    icon: Layers3,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    text: "Practical backend work across web platforms, business logic, and service orchestration.",
    icon: ServerCog,
    skills: ["Django", "Flask", "Express", "Laravel", "Java EE", "REST APIs", "Celery"],
  },
  {
    id: "data",
    title: "Data & Infrastructure",
    text: "Databases, containers, deployment, and tooling needed for serious delivery.",
    icon: DatabaseZap,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Docker", "Linux/Ubuntu"],
  },
] as const;

export const experienceItems = [
  {
    title: "Java/JavaFX Developer",
    place: "ENS Tetouan",
    period: "May - Jul 2024",
    text: "Built a human resources desktop system with Java, JavaFX, MySQL, and MVC architecture.",
  },
  {
    title: "Full Stack Developer",
    place: "Fronton Center",
    period: "Apr - May 2023",
    text: "Developed a Laravel and MySQL inventory management application inside a delivery team.",
  },
  {
    title: "Research Contributor",
    place: "ENS Meknes / I2ASD",
    period: "Apr 2025",
    text: "Contributed to a Bayesian neural network fraud prediction paper and its conference submission.",
  },
] as const;

export const educationItems = [
  {
    degree: "Master's Degree in Intelligent Systems",
    institution: "ENS Meknes",
    period: "2024 - 2026",
  },
  {
    degree: "Professional Bachelor's Degree in Software and Web Development",
    institution: "ENS Tetouan",
    period: "2023 - 2024",
  },
] as const;

export const certifications = [
  "Python Programming - Cisco",
  "JavaScript Programming - Cisco",
  "Introduction to IoT - Cisco",
  "Git Essentials for Developers - Udemy",
  "Microsoft Office Specialist - Word & Excel 2016",
] as const;

export const professionalStrengths = [
  "Problem-solving",
  "Teamwork",
  "Communication",
  "Autonomy",
  "Time management",
] as const;

export const languageItems = [
  "Arabic - native",
  "English - fluent",
  "French - working proficiency",
] as const;

export const interestItems = [
  "Artificial intelligence",
  "Web development",
  "IoT",
  "Sports",
  "Travel",
  "Hiking",
] as const;

export const socialLinks = [
  { id: "github", label: "GitHub", href: profile.github, icon: Globe2 },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, icon: Wrench },
] as const;

export const floatingTech = [
  { id: "react", label: "React", icon: Layers3 },
  { id: "ai", label: "AI", icon: BrainCircuit },
  { id: "api", label: "API", icon: Sparkles },
  { id: "data", label: "Data", icon: DatabaseZap },
  { id: "dev", label: "Code", icon: Binary },
  { id: "master", label: "Master", icon: GraduationCap },
  { id: "react-2", label: "Frontend", icon: Layers3 },
  { id: "ai-2", label: "Model", icon: BrainCircuit },
  { id: "data-2", label: "Infra", icon: DatabaseZap },
  { id: "dev-2", label: "Build", icon: Binary },
] as const;
