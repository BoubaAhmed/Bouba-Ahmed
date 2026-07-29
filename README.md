# Ahmed Bouba Portfolio

A modern bilingual portfolio website for presenting my profile, experience, projects, technical stack, certifications, and contact details.

The site is built as a production-ready React application with a polished responsive interface, dark/light theme support, English/French localization, project category browsing, and project detail pages.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- English and French language switcher
- Dark/light theme with persisted preference
- Profile, experience, projects, skills, certifications, and contact sections
- Project carousel grouped by Web, AI, Electronics, Data, and Desktop categories
- Multi-category project support for projects such as EnsLMS
- Project detail pages with stack, highlights, challenge, build notes, and links
- Fallback project images by category
- Scroll progress indicator and back-to-top control
- CV links for English and French versions
- Static deployment setup for Vercel

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- i18next and react-i18next
- lucide-react
- simple-icons
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run a TypeScript check:

```bash
npm run check
```

## Project Structure

```text
src/
  components/   Reusable UI sections and project views
  content/      Portfolio data for profile, projects, experience, and certificates
  hooks/        Theme and UI hooks
  lib/          Shared utilities
  locales/      English and French translation files
  App.tsx       App routing and page composition
  styles.css    Global design system and responsive styles
```

## Deployment

The project is configured for static hosting on Vercel.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` includes an SPA rewrite to `index.html` so project detail routes work on refresh.

## Author

Ahmed Bouba  
Full Stack & AI Developer
