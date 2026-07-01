# Mobi Portfolio

Mobi Portfolio is a modern, animated personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It showcases a developer’s profile, skills, selected projects, and a contact form with email delivery through Resend.

## Overview

This project is designed as a polished single-page portfolio experience with a strong visual identity, smooth transitions, and responsive sections. The UI is built to feel modern and premium while remaining lightweight and easy to maintain.

## Main Features

- Animated hero section with a downloadable resume button
- About section with personal branding and storytelling
- Skills showcase with interactive visual blocks
- Portfolio section with category filters and search
- Project detail modal with image galleries
- Contact form connected to an API endpoint for email sending

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Resend
- Biome for linting and formatting

## Project Structure

```text
src/
  app/
    api/
      projects/
        route.ts
      projects/contact/
        route.ts
    layout.tsx
    page.tsx
  components/
    section/
      AboutMe.tsx
      contactme.tsx
      heroSection.tsx
      MyPortofilo.tsx
      MySkill.tsx
      NavBar.tsx
      portfolio/
        PortfolioSection.tsx
        ProjectCard.tsx
        ProjectModal.tsx
    ui/
  lib/
    utils.ts
public/
  projects/
  fonts/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run Biome checks
npm run format   # Format code with Biome
```

## Environment Variables

The contact form depends on the following environment variables:

```env
RESEND_API_KEY=your_resend_api_key
RECEIVER_EMAIL=your_destination_email
```

## API Endpoints

- GET /api/projects: returns the portfolio project list
- POST /api/projects/contact: sends a contact form message via Resend

## Notes

- The site is currently localized in Persian and uses RTL layout.
- Resume assets and images are stored under the public directory.
- The portfolio content is primarily defined in the API route for projects and rendered dynamically in the portfolio section.
