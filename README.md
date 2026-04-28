# DevOps SRE Portfolio — Shanmukha Sai Praneeth

Built with **Next.js 14 + Framer Motion + Tailwind CSS**

## Project Structure

```
/
├── app/
│   ├── globals.css        ← All global styles, animations, custom CSS
│   ├── layout.tsx         ← Root layout + metadata
│   └── page.tsx           ← Main page (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx           ← 3D avatar, stats, marquee
│   │   ├── Terminal.tsx       ← Live CLI typewriter
│   │   ├── Skills.tsx         ← Animated skill bars
│   │   ├── Experience.tsx     ← Timeline
│   │   ├── Infrastructure.tsx ← Interactive SVG infra diagram
│   │   ├── Projects.tsx       ← Project cards
│   │   ├── Achievements.tsx   ← Metrics grid
│   │   └── Contact.tsx        ← Contact links
│   └── ui/
│       ├── Cursor.tsx         ← Custom cursor
│       ├── Nav.tsx            ← Fixed navbar
│       └── Footer.tsx
├── lib/
│   └── data.ts            ← ALL resume data (edit here)
├── public/
│   └── avatar.mp4         ← YOUR 3D avatar video (place here)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo on vercel.com
3. Vercel auto-detects Next.js — click Deploy

## Customisation

All personal data lives in **`lib/data.ts`** — edit only that file to update
name, stats, skills, experience, projects, and achievements.

## Video Avatar

Place your 3D head video at `public/avatar.mp4`
