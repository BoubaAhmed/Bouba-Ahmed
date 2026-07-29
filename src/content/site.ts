import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, BriefcaseBusiness, Microscope } from "lucide-react";

export type SupportedLanguage = "en" | "fr";
export type ProjectCategoryGroup = "web" | "ai" | "electronics" | "data" | "desktop";
export type ProjectCategoryMembership = ProjectCategoryGroup | readonly ProjectCategoryGroup[];

export type ProjectMeta = {
  id: string;
  year: string;
  title: string;
  summary: string;
  detail: string;
  category: string;
  categoryGroup: ProjectCategoryMembership;
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
  languages: readonly {
    name: string;
    level: string;
  }[];
  strengths: readonly string[];
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
  details: readonly string[];
  icon: LucideIcon;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  year?: string;
  url?: string;
};

export const profile: ProfileMeta = {
  name: "Bouba Ahmed",
  role: "Full Stack & AI Developer",
  location: "Khemisset, Morocco",
  email: "ahmedbouuba@gmail.com",
  phone: "+212 628 987 577",
  github: "https://github.com/BoubaAhmed",
  linkedin: "https://www.linkedin.com/in/ahmed-bouba-861b91231/",
  portrait: "/media/portrait.png",
  tagline: "Full-stack and AI developer turning product ideas into reliable, polished software.",
  summary:
    "I build practical web platforms, AI-assisted workflows, and data-driven applications with a strong focus on clean architecture, usable interfaces, and production delivery. My background in Intelligent Systems helps me connect frontend quality, backend reliability, and machine learning features into products that solve real problems.",
  availability:
    "Open to full-time roles, freelance work, and product teams that need reliable engineering with an AI edge.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Intermediate" },
  ],
  strengths: ["Full-stack delivery", "AI product thinking", "Clean UI execution", "Production deployment"],
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
    summary: "Adaptive LMS for ENS Meknes academic administration, course delivery, AI workflows, and personalized learning.",
    detail:
      "An adaptive Learning Management System built primarily for ENS Meknes, centralizing faculty-level administration, course delivery, instructor workflows, BKT mastery tracking, FSLSM learner profiling, and asynchronous AI generation.",
    category: "Web + AI platform",
    categoryGroup: ["web", "ai"],
    stack: ["Django", "Django REST Framework", "PostgreSQL 16", "pgvector", "Redis", "Celery", "React 19", "TypeScript", "Vite", "Tailwind CSS", "BKT", "FSLSM"],
    screenshots: [],
    highlights: [
      "Institution-provisioned roles for superadmins, faculty admins, professors, and students",
      "Faculty-scoped academic administration for faculties, departments, programs, semesters, academic years, and batch Excel imports/exports",
      "Adaptive learning with BKT mastery tracking, FSLSM profiling, recommended learning paths, trace views, and AI-generated content, quizzes, labs, and variants",
    ],
    challenge: [
      "The platform had to follow ENS Meknes governance first while still allowing controlled partner-institution access when needed.",
      "The product needed to connect academic administration, flexible course authoring, student learning, professor workflows, adaptive recommendations, and AI generation without becoming a public self-registration LMS.",
    ],
    build: [
      "Built academic administration modules for university branding, faculties, departments, programs, semesters, academic years, faculty admins, student/professor import-export, and operational account exports.",
      "Implemented course delivery structures for course-to-chapter, course-to-chapter-to-sequence, and course-to-chapter-to-sequence-to-unit authoring, with rich content editing and resource uploads.",
      "Integrated Django REST Framework, PostgreSQL with pgvector, Redis, Celery Beat, drf-spectacular OpenAPI docs, React, TypeScript, Vite, Tailwind CSS, forums, notifications, contact workflows, and Docker-based deployment.",
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
    screenshots: [],
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
    screenshots: [],
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
    id: "lung-xray-prediction",
    year: "2025",
    title: "Lung X-Ray Prediction with Deep Learning",
    summary: "CNN-based radiography classifier for COVID-19, pneumonia, and healthy lungs with a Streamlit interface.",
    detail:
      "A deep learning project using TensorFlow and Keras to classify lung radiographs into COVID-19, pneumonia, and normal cases, deployed through a simple interactive Streamlit app.",
    category: "Deep learning",
    categoryGroup: "ai",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "Kaggle"],
    screenshots: [],
    highlights: [
      "Three-class lung X-ray classification for COVID-19, pneumonia, and healthy lungs",
      "CNN training workflow using the Kaggle COVID-19 Radiography Database",
      "Streamlit app for uploading radiography images and testing predictions interactively",
    ],
    challenge: [
      "The model needed to learn meaningful image patterns from medical radiography data while keeping the prediction workflow simple to test.",
      "Training had to be controlled with callbacks to reduce overfitting and preserve the best-performing model.",
    ],
    build: [
      "Built and trained a Convolutional Neural Network with TensorFlow and Keras.",
      "Added EarlyStopping, ReduceLROnPlateau, and best-model checkpointing for smarter training.",
      "Saved the trained model and reused it inside a Streamlit interface for image upload and prediction.",
    ],
  },
  {
    id: "corn-disease-detection",
    year: "2025",
    title: "Corn Disease Detection",
    summary: "CNN and Streamlit application for detecting corn leaf diseases from uploaded images.",
    detail:
      "A deep learning project for classifying corn leaf diseases using a Convolutional Neural Network, TensorFlow/Keras preprocessing, data augmentation, and a Streamlit web app.",
    category: "Deep learning",
    categoryGroup: "ai",
    stack: ["Python", "TensorFlow", "Keras", "Streamlit", "NumPy", "Pandas", "Matplotlib"],
    screenshots: [],
    highlights: [
      "CNN model trained to classify four corn leaf disease categories",
      "TensorFlow/Keras preprocessing and augmentation pipeline",
      "Streamlit interface for image upload and real-time disease prediction",
    ],
    challenge: [
      "The project needed to transform leaf image data into a practical disease detection workflow that could be tested by non-technical users.",
      "The model pipeline had to support preprocessing, augmentation, training, and prediction in a repeatable way.",
    ],
    build: [
      "Prepared the image dataset with TensorFlow/Keras preprocessing and augmentation.",
      "Trained a CNN model for multi-class corn leaf disease classification.",
      "Built a user-friendly Streamlit app for uploading images and displaying predictions in real time.",
    ],
  },
  {
    id: "als-vs-svd-movielens",
    year: "November 2025",
    title: "ALS vs SVD - MovieLens Recommender Systems",
    summary: "Collaborative filtering comparison between a from-scratch ALS model and Surprise SVD on MovieLens 1M.",
    detail:
      "A recommender systems project comparing Alternating Least Squares and SVD on the MovieLens 1M dataset with RMSE and MAE evaluation.",
    category: "Recommendation systems",
    categoryGroup: "ai",
    stack: ["Python", "ALS", "SVD", "Surprise", "MovieLens 1M", "Collaborative Filtering"],
    screenshots: [],
    highlights: [
      "MovieLens 1M dataset with 6,040 users, 3,706 movies, 1,000,209 ratings, 95.64% sparsity, and 4.36% density",
      "From-scratch ALS implementation with early stopping and regularization",
      "Comparative results: ALS RMSE 0.2160 and MAE 0.1683 versus SVD RMSE 0.2417 and MAE 0.1965",
    ],
    challenge: [
      "The project needed a fair comparison between a custom ALS implementation and a standard Surprise SVD baseline.",
      "The MovieLens 1M structure had to be handled across ratings.dat, movies.dat, and users.dat while accounting for high sparsity.",
    ],
    build: [
      "Implemented ALS from scratch with regularization and early stopping.",
      "Used Surprise SVD as a comparison model for collaborative recommendation performance.",
      "Evaluated both models with RMSE and MAE, concluding that ALS performed slightly better on this experiment.",
    ],
  },
  {
    id: "credit-card-fraud-detection-ml",
    year: "2025",
    title: "Credit Card Fraud Detection ML",
    summary: "Machine learning project for detecting fraudulent credit card transactions from transaction data.",
    detail:
      "An AI project focused on credit card fraud detection using machine learning workflows for data analysis, model training, and transaction classification.",
    category: "Fraud detection",
    categoryGroup: "ai",
    stack: ["Python", "Machine Learning", "Data Analysis", "Classification", "Fraud Detection"],
    screenshots: [],
    highlights: [
      "Credit card transaction classification for separating fraudulent and legitimate activity",
      "Machine learning workflow for preprocessing, training, evaluation, and prediction",
      "Fraud detection use case focused on financial risk and anomaly-oriented decision support",
    ],
    challenge: [
      "The project needed to address a high-risk financial classification problem where false positives and false negatives both matter.",
      "The workflow had to turn transaction data into useful fraud signals through preprocessing, model selection, and evaluation.",
    ],
    build: [
      "Prepared transaction data for supervised machine learning experiments.",
      "Trained and evaluated classification models for credit card fraud detection.",
      "Structured the project around repeatable analysis and prediction workflows.",
    ],
    code: "https://github.com/BoubaAhmed/Credit-Card-Fraud-Detection-ML",
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
    screenshots: [],
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
    title: "Real-Time IoT Analytics Pipeline with Kafka, Spark, Docker, and HDFS",
    summary: "Real-time IoT data pipeline using Kafka, Spark Streaming, HDFS, Docker, and a Flask dashboard.",
    detail:
      "A robust data engineering architecture for collecting sensor streams, processing them with Spark Streaming, storing transformed data in HDFS, and visualizing results through a Flask web interface.",
    category: "Data engineering",
    categoryGroup: "data",
    stack: ["Apache Kafka", "Apache Spark Streaming", "HDFS", "Docker", "Flask"],
    screenshots: [],
    highlights: [
      "Real-time data ingestion from IoT sensors or external sources with Apache Kafka",
      "Continuous stream processing with Apache Spark Streaming for transformations and anomaly detection",
      "Distributed storage in HDFS and live visualization through charts and tables in Flask",
    ],
    challenge: [
      "The project needed to demonstrate how temperature, humidity, or similar industrial sensor data could be collected, analyzed, stored, and visualized in real time.",
      "The architecture had to keep Kafka, Spark Streaming, HDFS, Docker services, and the Flask interface coordinated as one extensible pipeline.",
    ],
    build: [
      "Used Apache Kafka to collect and transmit real-time data streams.",
      "Processed incoming streams with Apache Spark Streaming and stored transformed results in HDFS for later analysis.",
      "Containerized the services with Docker and built a Flask web interface for intuitive real-time data visualization.",
    ],
    code: "https://github.com/BoubaAhmed/Real-Time-IoT-Analytics-Pipeline-with-Kafka-Spark-Docker-HDFS",
  },
  {
    id: "smartcity",
    year: "2025",
    title: "SmartCityMek",
    summary: "Smart citizen platform for Meknes covering urban reports, waste tracking, utilities, education, and admin planning.",
    detail:
      "A smart city web platform for Meknes that lets citizens report urban issues, track household waste, monitor water and electricity consumption, learn eco-friendly habits, and gives authorities a centralized dashboard.",
    category: "Smart city platform",
    categoryGroup: "web",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Cloudinary", "Leaflet.js", "Recharts", "TensorFlow.js"],
    screenshots: [],
    highlights: [
      "Citizen reporting for waste, water leaks, lighting problems, and road damage with photos and geolocation",
      "Waste tracking, water/electricity consumption charts, quizzes, eco-tips, and personalized eco-advice",
      "Municipality dashboard with map filtering, incident moderation, neighborhood statistics, and high-consumption area detection",
    ],
    challenge: [
      "The platform needed to connect citizen participation, environmental education, utility awareness, and municipal planning in one coherent experience.",
      "The system had to support geolocated reports, image upload, status workflows, map-based moderation, consumption analytics, and AI-assisted educational or prediction features.",
    ],
    build: [
      "Built modules for signalements, waste tracking, consumption input and prediction, educational quizzes, gamified learning, and admin moderation.",
      "Implemented the frontend with React.js, Tailwind CSS, Leaflet.js maps, and Recharts data visualization.",
      "Built the backend with Node.js, Express.js, MongoDB Atlas, JWT authentication, Cloudinary image uploads, and AI features using TensorFlow.js and Teachable Machine.",
    ],
    code: "https://github.com/BoubaAhmed/smartcity-meknes-MERN",
  },
  {
    id: "inventflow",
    year: "2025",
    title: "InventFlow",
    summary: "MERN inventory management system for products, orders, suppliers, customers, and analytics.",
    detail:
      "A complete inventory management platform built with MongoDB, Express.js, React, and Node.js for operational tracking and real-time dashboard insights.",
    category: "MERN application",
    categoryGroup: "web",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    screenshots: [],
    highlights: [
      "Dashboard for sales, stock, active orders, and recent activity",
      "Product management with barcode, category, stock, pricing, and replenishment alerts",
      "Order, supplier, customer, reporting, and analytics workflows",
    ],
    challenge: [
      "The system needed to bring inventory, sales, suppliers, customers, and order status into one coherent operational interface.",
      "The dashboard had to make stock levels, low-stock alerts, sales trends, and activity metrics easy to track in real time.",
    ],
    build: [
      "Built a secured REST API with Express.js and Node.js backed by MongoDB collections for products, orders, customers, suppliers, and categories.",
      "Developed a React interface for dashboards, product records, order processing, supplier profiles, customer history, and loyalty levels.",
      "Added business logic for payments, discounts, stock tracking, supplier ratings, bulk management, and reporting views.",
    ],
  },
  {
    id: "examly",
    year: "2025",
    title: "Examly - School Management System",
    summary: "Multi-tenant MERN school management platform for academic operations, exams, dashboards, and analytics.",
    detail:
      "A comprehensive multi-tenant school management system built with Node.js, Express.js, React, MongoDB, and Mongoose for administrators, teachers, and students.",
    category: "MERN SaaS",
    categoryGroup: "web",
    stack: ["Node.js", "Express.js", "React", "MongoDB", "Mongoose", "AI"],
    screenshots: [],
    highlights: [
      "Separate dashboards for administrators, teachers, and students",
      "Academic structure management for departments, programs, groups, semesters, modules, and classrooms",
      "Exam creation, automated grading, participation tracking, anti-cheating measures, and AI-assisted fraud detection",
    ],
    challenge: [
      "The platform needed to centralize school operations while keeping each institution isolated through a multi-tenant architecture.",
      "The exam system had to support flexible assessments, open-answer correction, performance analytics, scheduling rules, and fraud prevention.",
    ],
    build: [
      "Designed role-based access control with secure authentication and institution-specific user profiles.",
      "Built modules for departments, programs, groups, semesters, timetables, teacher availability, classroom allocation, holidays, and resources.",
      "Integrated academic analytics, automated grading flows, and AI-oriented monitoring to support performance review and anti-fraud workflows.",
    ],
  },
  {
    id: "darstudent",
    year: "2025",
    title: "DarStudent - Moroccan Student Housing Platform",
    summary: "Student housing and roommate matching platform for Moroccan universities built with Spring Boot and React.",
    detail:
      "A web platform helping students find verified housing near Moroccan universities, connect with landlords, and match with compatible roommates.",
    category: "Web platform",
    categoryGroup: "web",
    stack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate", "React", "Redux Toolkit", "Tailwind CSS", "Google Maps API", "Socket.IO"],
    screenshots: [],
    highlights: [
      "University-centric housing search with verified listings, MAD price filters, room types, amenities, favorites, and direct landlord chat",
      "Roommate matching with lifestyle profiles, study habits, budget preferences, compatibility scoring, and secure chat",
      "Admin dashboard for listing moderation, user management, reports, disputes, and platform analytics",
    ],
    challenge: [
      "The platform needed to combine housing discovery, landlord trust, roommate compatibility, and university proximity in one practical student workflow.",
      "The system had to handle secure authentication, moderation, reports, chat, maps, and analytics across student, landlord, and admin use cases.",
    ],
    build: [
      "Built the backend with Spring Boot 3.1, Spring Security, JWT authentication, MySQL, Hibernate, and Swagger/OpenAPI documentation.",
      "Developed a React 18 frontend with Redux Toolkit, Tailwind CSS, Google Maps integration, and Socket.IO chat.",
      "Implemented verified listing approval, favorite apartments, advanced filters, roommate profiles, compatibility scoring, and admin moderation tools.",
    ],
  },
  {
    id: "tasky",
    year: "2025",
    title: "Tasky - Collaborative Project Management Platform",
    summary: "Modern Laravel, React, and Inertia.js platform for collaborative user, project, and task management.",
    detail:
      "A responsive web application built for teams to centralize users, projects, tasks, dashboards, authentication, and progress tracking.",
    category: "Web application",
    categoryGroup: "web",
    stack: ["Laravel 10", "React 18", "Inertia.js", "MySQL", "Laravel Sanctum", "Laravel Breeze", "Tailwind CSS"],
    screenshots: [],
    highlights: [
      "Centralized user, project, and task management with secure Laravel Breeze authentication",
      "Interactive dashboard with real-time progress indicators, project statistics, charts, search, and advanced filters",
      "Responsive React and Inertia.js interface optimized for desktop, tablet, and mobile screens",
    ],
    challenge: [
      "The application needed to make team collaboration clear by connecting users, roles, projects, tasks, priorities, deadlines, and statuses in one workflow.",
      "The interface had to stay reactive while Laravel handled routing, models, controllers, authentication, and relational data management.",
    ],
    build: [
      "Built the backend with Laravel 10, MySQL, Sanctum, Breeze authentication, routes, models, and controllers.",
      "Developed React 18 components connected through Inertia.js for smooth Laravel-to-React navigation.",
      "Implemented user registration, password reset, custom roles, project assignment, task assignment, dynamic statuses, dashboards, charts, search, and filters.",
    ],
  },
  {
    id: "portfolio",
    year: "2026",
    title: "Ahmed Bouba Portfolio",
    summary: "Production-ready bilingual portfolio website built with React, Vite, TypeScript, and Tailwind CSS.",
    detail:
      "A polished personal portfolio for presenting profile, experience, projects, skills, contact details, CV links, multilingual content, and dark/light theming.",
    category: "Portfolio website",
    categoryGroup: "web",
    stack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "i18next", "React i18next", "Lucide React", "Vercel"],
    screenshots: [],
    highlights: [
      "Bilingual English/French content with localized profile, projects, experience, navigation, and metadata",
      "Project category carousel with detail pages, fallback media, multi-category support, and responsive layouts",
      "Dark/light theme, scroll progress, back-to-top control, CV links, and Vercel-ready static deployment",
    ],
    challenge: [
      "The site needed to present a growing project catalog clearly while supporting multiple categories, translations, and project detail routes.",
      "The interface had to stay polished and responsive while keeping content easy to maintain from centralized data files.",
    ],
    build: [
      "Built the frontend with React 19, Vite, TypeScript, Tailwind CSS, lucide-react icons, and reusable portfolio sections.",
      "Integrated i18next and react-i18next for English/French switching across navigation, sections, project data, and metadata.",
      "Configured static deployment with Vercel, SPA routing rewrites, category fallback images, theme persistence, and production build checks.",
    ],
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
    screenshots: [],
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
    summary: "LMS adaptatif pour l'administration academique ENS Meknes, les cours, les workflows IA et l'apprentissage personnalise.",
    detail:
      "Un Learning Management System adaptatif construit principalement pour l'ENS Meknes, centralisant l'administration par faculte, la livraison des cours, les workflows enseignants, le suivi BKT, le profilage FSLSM et la generation IA asynchrone.",
    category: "Plateforme Web + IA",
    categoryGroup: ["web", "ai"],
    stack: ["Django", "Django REST Framework", "PostgreSQL 16", "pgvector", "Redis", "Celery", "React 19", "TypeScript", "Vite", "Tailwind CSS", "BKT", "FSLSM"],
    screenshots: [],
    highlights: [
      "Roles institutionnels provisionnes pour superadmins, admins de faculte, professeurs et etudiants",
      "Administration academique limitee par faculte: facultes, departements, filieres, semestres, annees academiques et imports/exports Excel",
      "Apprentissage adaptatif avec suivi BKT, profilage FSLSM, parcours recommandes, vues de trace et generation IA de contenus, quiz, labs et variantes",
    ],
    challenge: [
      "La plateforme devait respecter d'abord la gouvernance de l'ENS Meknes tout en permettant un acces controle a des institutions partenaires si necessaire.",
      "Le produit devait relier administration academique, authoring flexible des cours, apprentissage etudiant, workflows professeurs, recommandations adaptatives et generation IA sans devenir un LMS public en auto-inscription.",
    ],
    build: [
      "Creation des modules d'administration pour branding universite, facultes, departements, filieres, semestres, annees academiques, admins de faculte, import-export etudiants/professeurs et exports operationnels de comptes.",
      "Implementation de structures de cours course -> chapter, course -> chapter -> sequence et course -> chapter -> sequence -> unit, avec edition riche et upload de ressources.",
      "Integration de Django REST Framework, PostgreSQL avec pgvector, Redis, Celery Beat, documentation OpenAPI drf-spectacular, React, TypeScript, Vite, Tailwind CSS, forums, notifications, contacts et deploiement Docker.",
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
    screenshots: [],
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
    screenshots: [],
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
    id: "lung-xray-prediction",
    year: "2025",
    title: "Radiographie Pulmonaire - Prediction avec Deep Learning",
    summary: "Classificateur CNN de radiographies pulmonaires pour COVID-19, pneumonie et poumons sains avec Streamlit.",
    detail:
      "Un projet Deep Learning avec TensorFlow et Keras pour classer des radiographies pulmonaires en COVID-19, pneumonie et cas normal, deploye dans une application Streamlit simple et interactive.",
    category: "Deep learning",
    categoryGroup: "ai",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "Kaggle"],
    screenshots: [],
    highlights: [
      "Classification de radiographies pulmonaires en trois classes: COVID-19, pneumonie et poumons sains",
      "Workflow d'entrainement CNN base sur le dataset Kaggle COVID-19 Radiography Database",
      "Application Streamlit pour importer des radiographies et tester les predictions interactivement",
    ],
    challenge: [
      "Le modele devait apprendre des motifs pertinents dans des images medicales tout en gardant un workflow de prediction simple a tester.",
      "L'entrainement devait etre controle avec des callbacks pour limiter l'overfitting et conserver le meilleur modele.",
    ],
    build: [
      "Creation et entrainement d'un Convolutional Neural Network avec TensorFlow et Keras.",
      "Ajout de EarlyStopping, ReduceLROnPlateau et sauvegarde du meilleur modele pour un entrainement plus fiable.",
      "Sauvegarde du modele entraine et reutilisation dans une interface Streamlit pour l'import d'image et la prediction.",
    ],
  },
  {
    id: "corn-disease-detection",
    year: "2025",
    title: "Corn Disease Detection",
    summary: "Application CNN et Streamlit pour detecter les maladies des feuilles de mais a partir d'images.",
    detail:
      "Un projet Deep Learning pour classifier les maladies des feuilles de mais avec un CNN, du preprocessing TensorFlow/Keras, de l'augmentation de donnees et une application web Streamlit.",
    category: "Deep learning",
    categoryGroup: "ai",
    stack: ["Python", "TensorFlow", "Keras", "Streamlit", "NumPy", "Pandas", "Matplotlib"],
    screenshots: [],
    highlights: [
      "Modele CNN entraine pour classifier quatre types de maladies des feuilles de mais",
      "Pipeline de preprocessing et d'augmentation de donnees avec TensorFlow/Keras",
      "Interface Streamlit pour l'import d'images et la detection en temps reel",
    ],
    challenge: [
      "Le projet devait transformer des images de feuilles en un workflow pratique de detection utilisable par des non-techniciens.",
      "Le pipeline devait couvrir preprocessing, augmentation, entrainement et prediction de maniere reproductible.",
    ],
    build: [
      "Preparation du dataset image avec preprocessing et augmentation TensorFlow/Keras.",
      "Entrainement d'un modele CNN pour la classification multi-classe des maladies des feuilles de mais.",
      "Creation d'une application Streamlit simple pour importer une image et afficher la prediction en temps reel.",
    ],
  },
  {
    id: "als-vs-svd-movielens",
    year: "Novembre 2025",
    title: "ALS vs SVD - Systemes de Recommandation MovieLens",
    summary: "Comparaison de recommandation collaborative entre ALS from scratch et SVD Surprise sur MovieLens 1M.",
    detail:
      "Un projet de systemes de recommandation comparant Alternating Least Squares et SVD sur le dataset MovieLens 1M avec evaluation RMSE et MAE.",
    category: "Systemes de recommandation",
    categoryGroup: "ai",
    stack: ["Python", "ALS", "SVD", "Surprise", "MovieLens 1M", "Collaborative Filtering"],
    screenshots: [],
    highlights: [
      "Dataset MovieLens 1M avec 6 040 utilisateurs, 3 706 films, 1 000 209 evaluations, 95.64% de sparsity et 4.36% de density",
      "Implementation ALS from scratch avec early stopping et regularisation",
      "Resultats comparatifs: ALS RMSE 0.2160 et MAE 0.1683 contre SVD RMSE 0.2417 et MAE 0.1965",
    ],
    challenge: [
      "Le projet devait proposer une comparaison equitable entre une implementation ALS personnalisee et un baseline SVD standard avec Surprise.",
      "La structure MovieLens 1M devait etre exploitee a travers ratings.dat, movies.dat et users.dat tout en tenant compte de la forte sparsity.",
    ],
    build: [
      "Implementation d'ALS from scratch avec regularisation et early stopping.",
      "Utilisation de SVD via Surprise comme modele de comparaison pour la recommandation collaborative.",
      "Evaluation des deux modeles avec RMSE et MAE, avec une conclusion montrant ALS legerement meilleur dans cette experience.",
    ],
  },
  {
    id: "credit-card-fraud-detection-ml",
    year: "2025",
    title: "Credit Card Fraud Detection ML",
    summary: "Projet machine learning pour detecter les transactions frauduleuses par carte bancaire.",
    detail:
      "Un projet IA centre sur la detection de fraude par carte bancaire avec des workflows de machine learning pour l'analyse de donnees, l'entrainement de modeles et la classification des transactions.",
    category: "Detection de fraude",
    categoryGroup: "ai",
    stack: ["Python", "Machine Learning", "Analyse de donnees", "Classification", "Fraud Detection"],
    screenshots: [],
    highlights: [
      "Classification des transactions bancaires pour separer activites frauduleuses et legitimes",
      "Workflow machine learning pour preprocessing, entrainement, evaluation et prediction",
      "Cas d'usage fraude bancaire oriente risque financier et aide a la decision par detection d'anomalies",
    ],
    challenge: [
      "Le projet devait traiter un probleme de classification financier sensible ou les faux positifs et faux negatifs sont importants.",
      "Le workflow devait transformer les donnees de transaction en signaux de fraude utiles via preprocessing, choix de modeles et evaluation.",
    ],
    build: [
      "Preparation des donnees de transaction pour des experimentations de machine learning supervise.",
      "Entrainement et evaluation de modeles de classification pour la detection de fraude par carte bancaire.",
      "Structuration du projet autour de workflows reproductibles d'analyse et de prediction.",
    ],
    code: "https://github.com/BoubaAhmed/Credit-Card-Fraud-Detection-ML",
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
    screenshots: [],
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
    title: "Real-Time IoT Analytics Pipeline avec Kafka, Spark, Docker et HDFS",
    summary: "Pipeline de donnees IoT temps reel avec Kafka, Spark Streaming, HDFS, Docker et dashboard Flask.",
    detail:
      "Une architecture data engineering robuste pour collecter des flux de capteurs, les traiter avec Spark Streaming, stocker les donnees transformees dans HDFS et visualiser les resultats avec une interface web Flask.",
    category: "Data engineering",
    categoryGroup: "data",
    stack: ["Apache Kafka", "Apache Spark Streaming", "HDFS", "Docker", "Flask"],
    screenshots: [],
    highlights: [
      "Collecte de donnees temps reel depuis des capteurs IoT ou d'autres sources avec Apache Kafka",
      "Traitement continu avec Apache Spark Streaming pour les transformations et la detection d'anomalies",
      "Stockage distribue dans HDFS et visualisation live avec graphiques et tableaux dans Flask",
    ],
    challenge: [
      "Le projet devait montrer comment des donnees de temperature, d'humidite ou de capteurs industriels peuvent etre collectees, analysees, stockees et visualisees en temps reel.",
      "L'architecture devait coordonner Kafka, Spark Streaming, HDFS, les services Docker et l'interface Flask comme un pipeline extensible.",
    ],
    build: [
      "Utilisation d'Apache Kafka pour collecter et transmettre les flux de donnees en temps reel.",
      "Traitement des flux entrants avec Apache Spark Streaming et stockage des resultats transformes dans HDFS pour des analyses futures.",
      "Conteneurisation des services avec Docker et creation d'une interface web Flask pour une visualisation intuitive des donnees temps reel.",
    ],
    code: "https://github.com/BoubaAhmed/Real-Time-IoT-Analytics-Pipeline-with-Kafka-Spark-Docker-HDFS",
  },
  {
    id: "smartcity",
    year: "2025",
    title: "SmartCityMek",
    summary: "Plateforme citoyenne intelligente pour Meknes: signalements, dechets, consommation, education et dashboard municipal.",
    detail:
      "Une plateforme smart city pour Meknes permettant aux citoyens de signaler les problemes urbains, suivre les dechets menagers, surveiller la consommation eau/electricite, apprendre des habitudes eco-responsables et fournir aux autorites un dashboard centralise.",
    category: "Plateforme smart city",
    categoryGroup: "web",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Cloudinary", "Leaflet.js", "Recharts", "TensorFlow.js"],
    screenshots: [],
    highlights: [
      "Signalement citoyen des dechets, fuites d'eau, eclairage et routes abimees avec photos et geolocalisation",
      "Suivi des dechets, graphiques de consommation eau/electricite, quiz, eco-tips et conseils personnalises",
      "Dashboard municipal avec filtrage sur carte, moderation des incidents, statistiques par quartier et detection des zones a forte consommation",
    ],
    challenge: [
      "La plateforme devait relier participation citoyenne, education environnementale, suivi de consommation et planification urbaine dans une experience coherente.",
      "Le systeme devait gerer les signalements geolocalises, l'upload d'images, les workflows de statut, la moderation sur carte, les analyses de consommation et les fonctionnalites IA.",
    ],
    build: [
      "Creation des modules signalements, waste, consumption, education et admin pour le reporting urbain, les conseils, la prediction et la moderation.",
      "Developpement du frontend avec React.js, Tailwind CSS, cartes Leaflet.js et visualisations Recharts.",
      "Developpement du backend avec Node.js, Express.js, MongoDB Atlas, authentification JWT, uploads Cloudinary et IA avec TensorFlow.js et Teachable Machine.",
    ],
    code: "https://github.com/BoubaAhmed/smartcity-meknes-MERN",
  },
  {
    id: "inventflow",
    year: "2025",
    title: "InventFlow",
    summary: "Systeme complet de gestion d'inventaire avec produits, commandes, fournisseurs, clients et analyses.",
    detail:
      "Un systeme complet de gestion d'inventaire developpe avec le MERN Stack pour suivre les operations et offrir un tableau de bord analytique en temps reel.",
    category: "Application MERN",
    categoryGroup: "web",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "API REST"],
    screenshots: [],
    highlights: [
      "Tableau de bord pour les ventes, les stocks, les commandes en cours et les activites recentes",
      "Gestion des produits avec code-barres, categorie, stock, prix et alertes de reapprovisionnement",
      "Workflows pour les commandes, fournisseurs, clients, rapports et analyses",
    ],
    challenge: [
      "Le systeme devait regrouper inventaire, ventes, fournisseurs, clients et suivi des commandes dans une interface operationnelle coherente.",
      "Le tableau de bord devait rendre visibles les niveaux de stock, les alertes de stock bas, les tendances de ventes et les statistiques d'activite en temps reel.",
    ],
    build: [
      "Creation d'une API REST securisee avec Express.js et Node.js, connectee a MongoDB pour les produits, commandes, clients, fournisseurs et categories.",
      "Developpement d'une interface React pour le dashboard, les fiches produits, le traitement des commandes, les profils fournisseurs, l'historique client et les niveaux de fidelite.",
      "Ajout de logique metier pour les paiements, remises, suivi de stock, notation des fournisseurs, gestion en masse et vues de reporting.",
    ],
  },
  {
    id: "examly",
    year: "2025",
    title: "Examly - Systeme de Gestion Scolaire",
    summary: "Plateforme scolaire multi-tenant MERN pour operations academiques, examens, dashboards et analyses.",
    detail:
      "Une application web full-stack multi-tenant construite avec Node.js, Express.js, React, MongoDB et Mongoose pour les administrateurs, enseignants et etudiants.",
    category: "SaaS MERN",
    categoryGroup: "web",
    stack: ["Node.js", "Express.js", "React", "MongoDB", "Mongoose", "IA"],
    screenshots: [],
    highlights: [
      "Dashboards distincts pour administrateurs, enseignants et etudiants",
      "Gestion de la structure academique: departements, filieres, groupes, semestres, modules et salles",
      "Creation d'examens, correction automatisee, suivi de participation, anti-triche et detection de fraude assistee par IA",
    ],
    challenge: [
      "La plateforme devait centraliser les operations scolaires tout en isolant les donnees de chaque institution grace a une architecture multi-tenant.",
      "Le systeme d'examens devait couvrir les evaluations flexibles, la correction des reponses ouvertes, les analyses de performance, la planification et la lutte contre la fraude.",
    ],
    build: [
      "Conception d'un controle d'acces par role avec authentification securisee et profils utilisateurs propres a chaque institution.",
      "Developpement des modules pour departements, filieres, groupes, semestres, emplois du temps, disponibilite enseignants, affectation des salles, vacances et ressources.",
      "Integration d'analyses pedagogiques, de workflows de correction automatisee et de surveillance orientee IA pour la performance et l'anti-fraude.",
    ],
  },
  {
    id: "darstudent",
    year: "2025",
    title: "DarStudent - Plateforme Marocaine de Logement Etudiant",
    summary: "Plateforme de logement et de matching de colocataires pour les universites marocaines avec Spring Boot et React.",
    detail:
      "Une plateforme web qui aide les etudiants a trouver des logements verifies pres des universites marocaines, contacter les proprietaires et trouver des colocataires compatibles.",
    category: "Plateforme web",
    categoryGroup: "web",
    stack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate", "React", "Redux Toolkit", "Tailwind CSS", "Google Maps API", "Socket.IO"],
    screenshots: [],
    highlights: [
      "Recherche de logements par universite avec annonces verifiees, filtres de prix en MAD, type de chambre, equipements, favoris et chat direct",
      "Matching de colocataires avec profils de style de vie, habitudes d'etude, budget, score de compatibilite et chat securise",
      "Dashboard admin pour moderation des annonces, gestion utilisateurs, signalements, litiges et statistiques d'utilisation",
    ],
    challenge: [
      "La plateforme devait reunir recherche de logement, confiance proprietaire, compatibilite entre colocataires et proximite universitaire dans un parcours etudiant clair.",
      "Le systeme devait gerer l'authentification securisee, la moderation, les signalements, le chat, les cartes et les analyses pour les etudiants, proprietaires et admins.",
    ],
    build: [
      "Developpement du backend avec Spring Boot 3.1, Spring Security, authentification JWT, MySQL, Hibernate et documentation Swagger/OpenAPI.",
      "Creation du frontend React 18 avec Redux Toolkit, Tailwind CSS, integration Google Maps et chat Socket.IO.",
      "Implementation de la validation des annonces, favoris, filtres avances, profils colocataires, score de compatibilite et outils de moderation admin.",
    ],
  },
  {
    id: "tasky",
    year: "2025",
    title: "Tasky - Plateforme Collaborative de Gestion de Projets",
    summary: "Solution moderne Laravel, React et Inertia.js pour gerer utilisateurs, projets et taches en equipe.",
    detail:
      "Une application web responsive concue pour centraliser la gestion des utilisateurs, projets, taches, dashboards, authentification et suivi d'avancement.",
    category: "Application web",
    categoryGroup: "web",
    stack: ["Laravel 10", "React 18", "Inertia.js", "MySQL", "Laravel Sanctum", "Laravel Breeze", "Tailwind CSS"],
    screenshots: [],
    highlights: [
      "Gestion centralisee des utilisateurs, projets et taches avec authentification securisee Laravel Breeze",
      "Tableau de bord interactif avec suivi d'avancement, statistiques, graphiques, recherche et filtres avances",
      "Interface React et Inertia.js responsive, optimisee pour desktop, tablette et mobile",
    ],
    challenge: [
      "L'application devait clarifier la collaboration d'equipe en reliant utilisateurs, roles, projets, taches, priorites, deadlines et statuts dans un seul workflow.",
      "L'interface devait rester reactive pendant que Laravel gere le routage, les modeles, les controleurs, l'authentification et les donnees relationnelles.",
    ],
    build: [
      "Developpement du backend avec Laravel 10, MySQL, Sanctum, Breeze, routes, modeles et controleurs.",
      "Creation de composants React 18 connectes avec Inertia.js pour une navigation fluide entre Laravel et React.",
      "Implementation de l'inscription, connexion, reinitialisation de mot de passe, roles, assignation de projets et taches, statuts dynamiques, dashboards, graphiques, recherche et filtres.",
    ],
  },
  {
    id: "portfolio",
    year: "2026",
    title: "Portfolio Ahmed Bouba",
    summary: "Portfolio bilingue pret pour la production avec React, Vite, TypeScript et Tailwind CSS.",
    detail:
      "Un portfolio personnel soigne pour presenter le profil, l'experience, les projets, les competences, les contacts, les liens CV, le contenu multilingue et le theme dark/light.",
    category: "Site portfolio",
    categoryGroup: "web",
    stack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "i18next", "React i18next", "Lucide React", "Vercel"],
    screenshots: [],
    highlights: [
      "Contenu bilingue anglais/francais avec profil, projets, experience, navigation et metadata localises",
      "Carousel de projets par categorie avec pages detail, images fallback, support multi-categorie et layouts responsives",
      "Theme dark/light, progression de scroll, retour en haut, liens CV et deploiement statique pret pour Vercel",
    ],
    challenge: [
      "Le site devait presenter clairement un catalogue de projets en croissance tout en supportant plusieurs categories, les traductions et les routes de detail.",
      "L'interface devait rester soignee et responsive tout en gardant le contenu facile a maintenir depuis des fichiers de donnees centralises.",
    ],
    build: [
      "Developpement du frontend avec React 19, Vite, TypeScript, Tailwind CSS, icones lucide-react et sections portfolio reutilisables.",
      "Integration de i18next et react-i18next pour le switch anglais/francais dans la navigation, les sections, les donnees projets et les metadata.",
      "Configuration du deploiement statique avec Vercel, rewrites SPA, images fallback par categorie, persistance du theme et verification de build production.",
    ],
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
    screenshots: [],
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
    details: [
      "Designed and developed a full-stack Learning Management System using Django, React, PostgreSQL, Redis, Celery, and Docker.",
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
    details: [
      "Developed and evaluated a Bayesian Neural Network model for fraud prediction.",
      "Contributed to the writing and submission of the paper A Probabilistic Approach to Fraud Prediction Using Bayesian Neural Network to the I2ASD conference hosted at ENS Meknes.",
    ],
    icon: Microscope,
  },
  {
    title: "Java/JavaFX Developer",
    place: "ENS Tetouan - Human Resources Management System",
    period: "May - July 2024",
    details: [
      "Developed a desktop human resources management application using Java, JavaFX, and MySQL using MVC architecture.",
      "Centralized employee, leave, and business travel management, with automated generation of administrative certificates.",
      "Used Git for version control and packaged the application as an executable JAR file.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Full Stack Developer",
    place: "Fronton Center - Inventory Management Application",
    period: "April - May 2023",
    details: [
      "Developed a Laravel and MySQL web application for product and inventory management.",
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
  { title: "Git Essentials for Developers", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-7fd021ce-a451-4e86-9081-9f7cf9241be4/"},
  { title: "Microsoft Office Specialist - Word 2016", issuer: "Microsoft" },
  { title: "Microsoft Office Specialist - Excel 2016", issuer: "Microsoft" },
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
        "Je developpe des plateformes web, des workflows assistes par IA et des applications orientees donnees avec une attention forte a l'architecture, l'experience utilisateur et la livraison en production. Mon parcours en Systemes Intelligents me permet de relier frontend, backend et fonctionnalites IA dans des produits utiles.",
      availability:
        "Ouvert aux postes a temps plein, au freelance et aux equipes produit qui ont besoin d'une engineering fiable avec une dimension IA.",
      languages: [
        { name: "Arabe", level: "Natif" },
        { name: "Anglais", level: "Professionnel" },
        { name: "Francais", level: "Intermediaire" },
      ],
      strengths: ["Livraison full-stack", "Vision produit IA", "UI propre", "Deploiement production"],
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
        details: [
          "Conception et developpement d'un Learning Management System full-stack avec Django, React, PostgreSQL, Redis, Celery et Docker.",
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
        details: [
          "Developpement et evaluation d'un modele de reseau neuronal bayesien pour la prediction de fraude.",
          "Contribution a la redaction et a la soumission de l'article A Probabilistic Approach to Fraud Prediction Using Bayesian Neural Network a la conference I2ASD organisee a l'ENS Meknes.",
        ],
        icon: Microscope,
      },
      {
        title: "Developpeur Java/JavaFX",
        place: "ENS Tetouan - Systeme de Gestion des Ressources Humaines",
        period: "Mai - Juillet 2024",
        details: [
          "Developpement d'une application desktop de gestion RH avec Java, JavaFX et MySQL en architecture MVC.",
          "Centralisation de la gestion des employes, conges et missions, avec generation automatique de certificats administratifs.",
          "Utilisation de Git pour le versioning et packaging de l'application en fichier JAR executable.",
        ],
        icon: BriefcaseBusiness,
      },
      {
        title: "Developpeur Full Stack",
        place: "Fronton Center - Application de Gestion d'Inventaire",
        period: "Avril - Mai 2023",
        details: [
          "Developpement d'une application web Laravel et MySQL pour la gestion des produits et de l'inventaire.",
          "Contribution a l'integration de fonctionnalites, aux tests fonctionnels et a la correction de bugs au sein d'une equipe.",
        ],
        icon: BriefcaseBusiness,
      },
    ],
    certifications: [
      { title: "Python Programming", issuer: "Cisco" },
      { title: "JavaScript Programming", issuer: "Cisco" },
      { title: "Introduction to IoT", issuer: "Cisco" },
      { title: "Git Essentials for Developers", issuer: "Udemy" },
      { title: "Microsoft Office Specialist - Word 2016", issuer: "Microsoft" },
      { title: "Microsoft Office Specialist - Excel 2016", issuer: "Microsoft" },
    ],
  },
} as const;

export const socialLinks = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin },
  { id: "email", label: "Email", href: `mailto:${profile.email}` },
] as const;
