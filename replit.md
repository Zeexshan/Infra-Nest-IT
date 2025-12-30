# Infra Nest IT - Company Website

## Overview

This is a modern, professional website for "Infra Nest IT" - a software development company that takes on client projects. The application is a full-stack TypeScript project with a React frontend and Express backend, featuring a portfolio showcase, contact forms with Google Sheets integration, and 3D visual effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS v4 with custom dark theme
- **UI Components**: Shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **3D Graphics**: React Three Fiber with Drei helpers for hero section visuals
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Build Tool**: esbuild for server bundling, Vite for client
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon serverless)

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Path Aliases**: `@/` for client source, `@shared/` for shared types
- **Component Organization**: UI primitives in `components/ui/`, feature components in `components/sections/`
- **Form Submissions**: Client-side submission to Google Sheets via Apps Script (no-cors mode)

### Data Flow
- Contact forms submit directly to Google Sheets using a Google Apps Script web app
- The `no-cors` fetch mode is used because Google Apps Script doesn't support CORS
- Auto-reply emails are handled server-side by Google Apps Script using MailApp

## External Dependencies

### Third-Party Services
- **Google Sheets**: Backend for form submissions (requires `VITE_GOOGLE_SCRIPT_URL` environment variable)
- **EmailJS**: Alternative email service integration available (`@emailjs/browser` installed)
- **Google Apps Script**: Handles form data storage and auto-reply emails

### Database
- **Neon PostgreSQL**: Serverless Postgres via `@neondatabase/serverless`
- **Connection**: Requires `DATABASE_URL` environment variable
- **Schema Location**: `shared/schema.ts`

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `VITE_GOOGLE_SCRIPT_URL`: Google Apps Script web app URL for form submissions

### Notable npm Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `framer-motion`: Animation library
- `@react-three/fiber` / `@react-three/drei`: 3D graphics
- `wouter`: Client-side routing
- `zod`: Schema validation
- `react-hook-form`: Form state management