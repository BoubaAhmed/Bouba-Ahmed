import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, BriefcaseBusiness, Globe2, Microscope, Wrench } from "lucide-react";

export type SupportedLanguage = "en" | "fr";
export type ProjectCategoryGroup = "web" | "ai" | "electronics" | "data" | "desktop";

export type ProjectMeta = {
  id: string;
  year: string;
  title: string;
  summary: string;
  detail: string;
  category: string;
  categoryGroup: ProjectCategoryGroup;
  stack: string[];
  screenshots: string[];
  highlights: string[];
  challenge: string[];
  build: string[];
  code?: string;
  demo?: string;
  featuredOnHome?: boolean;
};

export type ProfileMeta = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portrait: string;
  tagline: string;
  summary: string;
  availability: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: readonly string[];
};

export type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  text: string;
  details: readonly string[];
  icon: LucideIcon;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  year?: string;
  image?: string;
};

export const profile: ProfileMeta = {
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
    categoryGroup: "ai",
    stack: ["Django", "React", "PostgreSQL", "Redis", "Celery", "Docker"],
    screenshots: ["/media/project-enslms-01.svg", "/media/project-enslms-02.svg"],
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
    categoryGroup: "electronics",
    stack: ["React", "Flask", "Python", "Firebase", "OCR", "Raspberry Pi"],
    screenshots: ["/media/project-reading-eye-01.svg"],
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
    categoryGroup: "ai",
    stack: ["Python", "Bayesian Neural Networks", "Machine Learning", "Data Analysis"],
    screenshots: ["/media/project-fraud-research-01.svg"],
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
    categoryGroup: "electronics",
    stack: ["React", "Flask", "ESP32", "Firebase", "IoT"],
    screenshots: ["/media/project-attendance-01.svg"],
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
    categoryGroup: "data",
    stack: ["Kafka", "Spark", "Docker", "HDFS", "Flask"],
    screenshots: ["/media/project-analytics-01.svg"],
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
    categoryGroup: "web",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    screenshots: ["/media/project-smartcity-01.svg"],
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
    categoryGroup: "desktop",
    stack: ["Java", "JavaFX", "MySQL", "MVC", "Git"],
    screenshots: ["/media/project-hr-system-01.svg"],
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

export const homeProjects = featuredProjects;

export const featuredProjectsFr: ProjectMeta[] = [
  {
    id: "enslms",
    year: "2025 - 2026",
    title: "EnsLMS",
    summary: "Plateforme d'apprentissage adaptatif avec Django, React, PostgreSQL, Redis, Celery et Docker.",
    detail:
      "Un LMS full-stack concu pour la gestion academique, le suivi des apprenants et des workflows educatifs assistes par IA.",
    category: "Plateforme IA",
    categoryGroup: "ai",
    stack: ["Django", "React", "PostgreSQL", "Redis", "Celery", "Docker"],
    screenshots: ["/media/project-enslms-01.svg", "/media/project-enslms-02.svg"],
    highlights: [
      "Profilage des apprenants base sur FSLSM",
      "Recommandations de parcours d'apprentissage",
      "Generation de contenu assistee par LLM",
      "Deploiement en production sur VPS Ubuntu",
    ],
    challenge: [
      "Le produit devait connecter la gestion academique, les donnees apprenants et la personnalisation IA dans un systeme coherent.",
      "L'architecture devait rester pratique pour le deploiement, les taches en arriere-plan et l'evolution future.",
    ],
    build: [
      "Conception des modules utilisateurs, programmes, cours, evaluations et suivi de progression.",
      "Integration de Redis et Celery pour les workflows educatifs asynchrones.",
      "Containerisation avec Docker Compose et deploiement sur VPS Ubuntu.",
    ],
    featuredOnHome: true,
  },
  {
    id: "reading-eye",
    year: "2025",
    title: "Reading Eye",
    summary: "Systeme OCR et synthese vocale oriente accessibilite pour les personnes malvoyantes.",
    detail:
      "Une experience de lecture assistee combinant Raspberry Pi, services Flask, OCR et interface React.",
    category: "Accessibilite",
    categoryGroup: "electronics",
    stack: ["React", "Flask", "Python", "Firebase", "OCR", "Raspberry Pi"],
    screenshots: ["/media/project-reading-eye-01.svg"],
    highlights: ["Pipeline OCR pour la lecture de documents", "Flux de sortie en synthese vocale", "Orientation accessibilite concrete"],
    challenge: [
      "L'interface devait rester simple pendant que le flux gere la capture, l'extraction et la sortie vocale.",
      "Le projet devait relier interaction materielle et livraison frontend utilisable.",
    ],
    build: [
      "Connexion du traitement Raspberry Pi a des services Flask.",
      "Creation de l'interface React pour un controle clair et responsive.",
      "Centrage du produit sur l'usage assistif plutot que sur une simple sortie OCR.",
    ],
    code: "https://github.com/BoubaAhmed/reading-eye-raspberry-pi",
    featuredOnHome: true,
  },
  {
    id: "fraud-research",
    year: "2025",
    title: "Recherche sur la Prediction de Fraude",
    summary: "Contribution de recherche autour des reseaux neuronaux bayesiens pour la prediction de fraude.",
    detail:
      "Un travail d'IA appliquee centre sur la modelisation probabiliste et le support de soumission d'article pour I2ASD.",
    category: "Recherche",
    categoryGroup: "ai",
    stack: ["Python", "Reseaux Neuronaux Bayesiens", "Machine Learning", "Analyse de donnees"],
    screenshots: ["/media/project-fraud-research-01.svg"],
    highlights: ["Evaluation de modeles de prediction de fraude", "Approche ML probabiliste", "Contribution a un article de conference"],
    challenge: [
      "Le travail demandait d'equilibrer modelisation technique, clarte scientifique et discipline d'evaluation.",
      "Le resultat devait soutenir a la fois l'experimentation et la communication academique.",
    ],
    build: [
      "Developpement et evaluation de l'approche par reseau neuronal bayesien.",
      "Contribution a la soumission de l'article pour I2ASD a l'ENS Meknes.",
      "Transformation du travail experimental en resultat de recherche defendable.",
    ],
  },
  {
    id: "attendance",
    year: "2025",
    title: "Systeme de Presence IoT",
    summary: "Plateforme de presence par empreinte digitale avec ESP32, Flask, Firebase et React.",
    detail: "Un workflow de presence en temps reel concu pour le suivi educatif ou organisationnel.",
    category: "IoT",
    categoryGroup: "electronics",
    stack: ["React", "Flask", "ESP32", "Firebase", "IoT"],
    screenshots: ["/media/project-attendance-01.svg"],
    highlights: ["Flux de presence par empreinte", "Architecture objet connecte", "Synchronisation en temps reel"],
    challenge: [
      "Le systeme devait unifier l'entree materielle, la logique backend et la visibilite dashboard sans flux fragiles.",
      "La valeur du produit dependait davantage de la fiabilite que de la nouveaute visuelle.",
    ],
    build: [
      "Connexion des evenements ESP32 aux services Flask et a l'etat Firebase.",
      "Creation d'une couche React pour le monitoring et l'interaction.",
      "Orientation du produit vers des operations de presence pratiques.",
    ],
    code: "https://github.com/BoubaAhmed/iot-attendance-system",
  },
  {
    id: "analytics",
    year: "2025",
    title: "Pipeline Analytics IoT Temps Reel",
    summary: "Pipeline scalable de traitement d'evenements avec Kafka, Spark Streaming, Docker et HDFS.",
    detail:
      "Un projet data engineering concu pour traiter et analyser des flux IoT temps reel avec une architecture proche production.",
    category: "Data engineering",
    categoryGroup: "data",
    stack: ["Kafka", "Spark", "Docker", "HDFS", "Flask"],
    screenshots: ["/media/project-analytics-01.svg"],
    highlights: ["Ingestion streaming avec Kafka", "Traitement avec Spark Streaming", "Architecture analytics containerisee"],
    challenge: [
      "Le systeme devait montrer une conception de flux scalable plutot qu'un dashboard isole.",
      "L'architecture devait coordonner clairement ingestion, traitement et stockage.",
    ],
    build: [
      "Utilisation de Kafka pour le transport d'evenements et Spark Streaming pour le traitement live.",
      "Ajout de HDFS et d'une orchestration Docker pour soutenir une logique orientee scale.",
      "Presentation du projet comme pipeline backend/data plutot que simple vitrine frontend.",
    ],
    code: "https://github.com/BoubaAhmed/Real-Time-IoT-Analytics-Pipeline-with-Kafka-Spark-Docker-HDFS",
  },
  {
    id: "smartcity",
    year: "2025",
    title: "SmartCityMek",
    summary: "Plateforme citoyenne pour signaler les problemes urbains et ameliorer l'interaction avec la ville.",
    detail: "Un produit MERN construit autour du signalement public, du suivi des incidents et d'une interaction plus claire avec les services urbains.",
    category: "Application MERN",
    categoryGroup: "web",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    screenshots: ["/media/project-smartcity-01.svg"],
    highlights: ["Signalement citoyen", "Architecture full-stack MERN", "Logique de dashboard operationnel"],
    challenge: [
      "Le produit devait etre utile et direct pour les citoyens plutot que trop technique.",
      "La plateforme devait equilibrer simplicite de signalement et traitement backend structure.",
    ],
    build: [
      "Construction avec une architecture MERN standard pour la clarte et la vitesse d'iteration.",
      "Focus sur les flux de signalement et de monitoring urbain.",
      "Conception comme interface civique pratique, pas seulement comme dashboard de cours.",
    ],
    code: "https://github.com/BoubaAhmed/smartcity-meknes-MERN",
  },
  {
    id: "hr-system",
    year: "2024",
    title: "Systeme de Gestion RH",
    summary: "Application desktop Java/JavaFX pour la gestion des employes, conges et missions.",
    detail: "Un systeme RH desktop realise pendant l'experience a l'ENS Tetouan avec MVC et MySQL.",
    category: "Logiciel desktop",
    categoryGroup: "desktop",
    stack: ["Java", "JavaFX", "MySQL", "MVC", "Git"],
    screenshots: ["/media/project-hr-system-01.svg"],
    highlights: ["Operations RH centralisees", "Generation de certificats administratifs", "Packaging en JAR executable"],
    challenge: [
      "L'application demandait une logique metier structuree et des workflows desktop fiables pour un usage administratif.",
      "L'architecture devait garder le code organise pour plusieurs operations RH.",
    ],
    build: [
      "Implementation en Java et JavaFX avec une architecture MVC.",
      "Connexion de la couche donnees a MySQL et gestion du versioning avec Git.",
      "Packaging du logiciel sous forme de fichier JAR executable.",
    ],
  },
] as const;

export const experienceItems = [
  {
    title: "EnsLMS - AI-Powered Adaptive Learning Platform",
    place: "Full-stack product build",
    period: "2025 - 2026",
    text: "Designed and developed a full-stack Learning Management System using Django, React, PostgreSQL, Redis, Celery, and Docker.",
    details: [
      "Built modules for user, academic program, course, assessment, and learner progress management.",
      "Integrated AI features for FSLSM-based learner profiling, educational recommendations, and LLM-powered content generation.",
      "Deployed the platform to production on an Ubuntu VPS using Docker Compose.",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Research Project - Fraud Prediction Using Bayesian Neural Networks",
    place: "I2ASD conference submission, ENS Meknes",
    period: "April 2025",
    text: "Developed and evaluated a Bayesian Neural Network model for fraud prediction.",
    details: [
      "Contributed to the writing and submission of the paper A Probabilistic Approach to Fraud Prediction Using Bayesian Neural Network to the I2ASD conference hosted at ENS Meknes.",
    ],
    icon: Microscope,
  },
  {
    title: "Java/JavaFX Developer",
    place: "ENS Tetouan - Human Resources Management System",
    period: "May - July 2024",
    text: "Developed a desktop human resources management application using Java, JavaFX, and MySQL using MVC architecture.",
    details: [
      "Centralized employee, leave, and business travel management, with automated generation of administrative certificates.",
      "Used Git for version control and packaged the application as an executable JAR file.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Full Stack Developer",
    place: "Fronton Center - Inventory Management Application",
    period: "April - May 2023",
    text: "Developed a Laravel and MySQL web application for product and inventory management.",
    details: [
      "Contributed to feature integration, functional testing, and bug fixing within a development team.",
    ],
    icon: BriefcaseBusiness,
  },
] as const;

export const educationItems = [
  {
    degree: "Master's Degree in Intelligent Systems",
    institution: "ENS Meknes",
    period: "2024 - 2026",
    details: [
      "Coursework in Artificial Intelligence, Machine Learning, Deep Learning, NLP, IoT, and recommender systems.",
    ],
  },
  {
    degree: "Professional Bachelor's Degree in Software and Web Development",
    institution: "ENS Tetouan",
    period: "2023 - 2024",
    details: [
      "Coursework in web development, software design, databases, project management, and version control with Git.",
    ],
  },
] as const;

export const certifications: readonly CertificateItem[] = [
  { title: "Python Programming", issuer: "Cisco" },
  { title: "JavaScript Programming", issuer: "Cisco" },
  { title: "Introduction to IoT", issuer: "Cisco" },
  { title: "Git Essentials for Developers", issuer: "Udemy" },
  { title: "Microsoft Office Specialist - Word & Excel 2016", issuer: "Microsoft" },
] as const;

export const localizedContent = {
  en: {
    profile,
    featuredProjects,
    homeProjects,
    educationItems,
    experienceItems,
    certifications,
  },
  fr: {
    profile: {
      ...profile,
      role: "Developpeur Full Stack & IA",
      location: "Khemisset, Maroc",
      tagline: "Developpeur full-stack et IA qui cree des produits utiles avec une execution propre.",
      summary:
        "Diplome de master en Systemes Intelligents avec une experience pratique sur Django, React, workflows IA, logiciels desktop Java, bases de donnees, Docker et livraison orientee production.",
      availability:
        "Ouvert aux postes a temps plein, au freelance et aux equipes produit qui ont besoin d'une engineering fiable avec une dimension IA.",
    },
    featuredProjects: featuredProjectsFr,
    homeProjects: featuredProjectsFr,
    educationItems: [
      {
        degree: "Master en Systemes Intelligents",
        institution: "ENS Meknes",
        period: "2024 - 2026",
        details: ["Cours en intelligence artificielle, machine learning, deep learning, NLP, IoT et systemes de recommandation."],
      },
      {
        degree: "Licence Professionnelle en Developpement Logiciel et Web",
        institution: "ENS Tetouan",
        period: "2023 - 2024",
        details: ["Cours en developpement web, conception logicielle, bases de donnees, gestion de projet et versioning avec Git."],
      },
    ],
    experienceItems: [
      {
        title: "EnsLMS - Plateforme d'apprentissage adaptatif propulsee par IA",
        place: "Produit full-stack",
        period: "2025 - 2026",
        text: "Conception et developpement d'un Learning Management System full-stack avec Django, React, PostgreSQL, Redis, Celery et Docker.",
        details: [
          "Creation des modules de gestion utilisateurs, programmes academiques, cours, evaluations et progression apprenant.",
          "Integration de fonctionnalites IA pour le profilage FSLSM, les recommandations educatives et la generation de contenu par LLM.",
          "Deploiement de la plateforme en production sur un VPS Ubuntu avec Docker Compose.",
        ],
        icon: BookOpenCheck,
      },
      {
        title: "Projet de recherche - Prediction de fraude avec reseaux neuronaux bayesiens",
        place: "Soumission conference I2ASD, ENS Meknes",
        period: "Avril 2025",
        text: "Developpement et evaluation d'un modele de reseau neuronal bayesien pour la prediction de fraude.",
        details: [
          "Contribution a la redaction et a la soumission de l'article A Probabilistic Approach to Fraud Prediction Using Bayesian Neural Network a la conference I2ASD organisee a l'ENS Meknes.",
        ],
        icon: Microscope,
      },
      {
        title: "Developpeur Java/JavaFX",
        place: "ENS Tetouan - Systeme de Gestion des Ressources Humaines",
        period: "Mai - Juillet 2024",
        text: "Developpement d'une application desktop de gestion RH avec Java, JavaFX et MySQL en architecture MVC.",
        details: [
          "Centralisation de la gestion des employes, conges et missions, avec generation automatique de certificats administratifs.",
          "Utilisation de Git pour le versioning et packaging de l'application en fichier JAR executable.",
        ],
        icon: BriefcaseBusiness,
      },
      {
        title: "Developpeur Full Stack",
        place: "Fronton Center - Application de Gestion d'Inventaire",
        period: "Avril - Mai 2023",
        text: "Developpement d'une application web Laravel et MySQL pour la gestion des produits et de l'inventaire.",
        details: ["Contribution a l'integration de fonctionnalites, aux tests fonctionnels et a la correction de bugs au sein d'une equipe."],
        icon: BriefcaseBusiness,
      },
    ],
    certifications: [
      { title: "Python Programming", issuer: "Cisco" },
      { title: "JavaScript Programming", issuer: "Cisco" },
      { title: "Introduction to IoT", issuer: "Cisco" },
      { title: "Git Essentials for Developers", issuer: "Udemy" },
      { title: "Microsoft Office Specialist - Word & Excel 2016", issuer: "Microsoft" },
    ],
  },
} as const;

export const socialLinks = [
  { id: "github", label: "GitHub", href: profile.github, icon: Globe2 },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, icon: Wrench },
] as const;
