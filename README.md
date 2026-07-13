![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

# SECHIVE

A responsive, multi-page website for SECHIVE Security Services Egypt, built with React, TypeScript, and Vite.

[Open the live website](https://sechivee.github.io/SECHIVE/)

## Features

- Responsive desktop and mobile navigation
- Dedicated pages for corporate, industrial, event, tourism, healthcare, monitoring, and consulting services
- Logistics, equipment, and personnel galleries
- Interactive client-brand gallery modal
- Animated hero slideshow and typewriter content
- Direct email and WhatsApp contact paths
- Hash-based routing compatible with GitHub Pages

## Stack

- React 18
- TypeScript 5 with strict compiler settings
- React Router 6
- Vite 6
- ESLint 9
- React Icons

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

GitHub Actions runs these checks for every push to `main` and for pull requests.

## Local development

```bash
git clone git@github.com:SECHIVEE/SECHIVE.git
cd SECHIVE
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build is written to `dist/` and uses the `/SECHIVE/` GitHub Pages base path.

## Project structure

```text
src/
├── assets/       Image and brand assets
├── components/   Shared navigation, brand, modal, and feature components
├── pages/        Service and gallery pages
├── App.tsx       Application layout and routes
└── main.tsx      React entry point and router setup
```
