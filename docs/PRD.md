# PRD - Portfolio Muhammad Rohman Syah

## Overview

Mengubah template portfolio Next.js (-original: Jigar Sable) menjadi portfolio pribadi **Muhammad Rohman Syah** menggunakan data dari `/.raw-data-me`.

**Stack:** Next.js 13 (App Router) + Tailwind CSS + Firebase Realtime DB + Formspree  
**Deploy:** Vercel (subdomain `xxx.vercel.app`)

---

## Current State Analysis

| Component | Status | Issue |
|-----------|--------|-------|
| `data.json` | Placeholder | Masih "Jhon Doe" / "Jigar Sable" |
| `app/head.tsx` | Placeholder | Meta SEO milik Jigar Sable |
| `app/Header.tsx` | Hardcoded | Conditional check `Jigar Sable` di logo |
| `components/CallToAction.tsx` | Template CTA | "Fork this template" - bukan portfolio CTA |
| `pages/api/mail.ts` | SendGrid | Perlu ganti ke Formspree |
| `components/Contact.tsx` | SendGrid client | Perlu ganti endpoint |
| `public/profile-me.png` | Missing | Belum ada gambar profile |
| `.env.local` | Missing | Belum ada env file |

---

## Data Architecture

```
app/page.tsx → fetch(Firebase_URL + '/.json') → <HomePage data={data} />
    │
    ├── Hero.tsx        ← data.main
    ├── Socials.tsx     ← data.socials
    ├── About.tsx       ← data.about
    ├── Skills.tsx      ← data.skills
    ├── Projects.tsx    ← data.projects
    ├── Experiences.tsx ← data.experiences + data.educations
    ├── Contact.tsx     ← POST ke Formspree
    └── CallToAction.tsx ← static component
```

Data di-host di **Firebase Realtime Database**. `data.json` hanya sebagai template/reference.

---

## Data Mapping

### Section: `main`
```json
{
  "name": "Muhammad Rohman Syah",
  "shortDesc": "Fullstack Web Developer bersertifikasi BNSP dengan pengalaman praktis dalam pengembangan web end-to-end.",
  "titles": ["Fullstack Web Developer", "PHP & CodeIgniter", "Flutter Development", "Go Backend"],
  "heroImage": "/profile-me.png",
  "techStackImages": [
    "https://img.icons8.com/color/144/000000/php.png",
    "https://img.icons8.com/color/144/000000/flutter.png",
    "https://img.icons8.com/color/144/000000/firebase.png",
    "https://img.icons8.com/color/144/000000/javascript.png"
  ]
}
```

### Section: `about`
```json
{
  "aboutImage": "/profile-me.png",
  "aboutImageCaption": "< Fullstack Developer />",
  "title": "Fullstack Web Developer | BNSP Certified",
  "about": "Lulusan S1 Teknologi Informasi bersertifikasi BNSP (Analis Program & Network Administrator) dengan pengalaman praktis dalam pengembangan web full-stack. Memiliki rekam jejak dalam merancang Sistem PPDB Online terintegrasi Payment Gateway...",
  "resumeUrl": "",
  "callUrl": ""
}
```

### Section: `socials`
| Icon | Platform | URL |
|------|----------|-----|
| FaGithub | GitHub | https://github.com/rohmansyah23 |
| FaInstagram | Instagram | https://www.instagram.com/roman.syahr/ |
| FaLinkedin | LinkedIn | https://www.linkedin.com/in/muhammad-rohman-syah-13a0873a8/ |
| FaYoutube | YouTube | https://www.youtube.com/@m.rohmansyah203 |

### Section: `skills` (16 items, 4 kategori)
| Category | Skills |
|----------|--------|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap |
| Backend | PHP, CodeIgniter, Laravel, Node.js, Go, Python |
| Mobile | Flutter, Dart |
| Database & Tools | Firebase, SQL, Git, Supabase |

> Semua icon dari `https://img.icons8.com/color/144/{name}.png`

### Section: `projects` (12 projects)
| # | Name | Category | Private? | Links |
|---|------|----------|----------|-------|
| 1 | CroCode Marketplace | PHP | No | code + visit |
| 2 | AI Go - Warehouse Chatbot | Go | No | code |
| 3 | PawsCare Portal | PHP | No | code |
| 4 | QC Mobile App | Mobile | No | code |
| 5 | Flutter Auto-Refresh Bot | Mobile | No | code |
| 6 | Red Line Guardian AI | Python | No | code |
| 7 | Pustaka Booking UBSI | PHP | No | code |
| 8 | Eat Scroll | Mobile | No | code |
| 9 | Taskbar Navigator | Python | No | code |
| 10 | Milagros Web | PHP | Yes | (no code link) |
| 11 | Catering Mama Akbar | PHP | Yes | (no code link) |
| 12 | Shress | Mobile | Yes | (no code link) |

### Section: `experiences`
| Company | Position | Duration |
|---------|----------|----------|
| Fullstack Web Developer (Freelance) | Freelance | Jan 2024 - Sekarang |
| IT Support & Teaching Assistant | Magang | Okt 2024 - Des 2024 |
| Admin Operasional & Stockist | Agen Milagros Pondok Kelapa | Feb 2021 - Des 2024 |

### Section: `educations`
| Institute | Degree | Duration |
|-----------|--------|----------|
| Universitas Bina Sarana Informatika - Jakarta | S1 Teknologi Informasi | Agu 2021 - Des 2025 |

---

## Changes Required

### 1. Copy Image
```
.raw-data-me/profile-me/profile-me.png → public/profile-me.png
```

### 2. Update `data.json`
Ganti SELURUH isi dengan data Muhammad Rohman Syah (lihat Data Mapping di atas).

### 3. Update `app/head.tsx`
Ganti semua meta tags:
- `title`: "Portfolio | Muhammad Rohman Syah - Fullstack Developer"
- `description`: "Fullstack Web Developer bersertifikasi BNSP..."
- `keywords`: "muhammad rohman syah, portfolio, fullstack developer, php, codeigniter, flutter, golang"
- `og:title`, `og:description`, `author`, `twitter:*`

### 4. Update `app/Header.tsx`
- Hapus conditional check `Jigar Sable` di line 31 dan 58
- Logo selalu render: `{logo.split(' ')[0]}`

### 5. Ganti Contact Form → Formspree
- **Hapus** `@sendgrid/mail` dari dependencies
- **Update** `pages/api/mail.ts`: fetch langsung ke Formspree endpoint
- **Update** `components/Contact.tsx`: POST ke `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- **Env**: `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxx`

### 6. Ganti `CallToAction.tsx`
- Hapus "Fork this template" CTA
- Ganti menjadi "Let's Work Together" dengan link ke LinkedIn

### 7. Create `.env.local.example`
List semua env variables yang dibutuhkan.

---

## Environment Variables

### Firebase (8 vars)
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID=
NEXT_PUBLIC_FIREBASE_APPID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTD=
```

### Formspree (1 var)
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Total: 3 Services, 9 Env Variables
| Service | Purpose | Daftar |
|---------|---------|--------|
| Firebase | Data storage (portfolio data) | [console.firebase.google.com](https://console.firebase.google.com) |
| Formspree | Contact form submission | [formspree.io](https://formspree.io) |
| Vercel | Hosting & deploy | [vercel.com](https://vercel.com) |

---

## File Changes Summary

| File | Action | Priority |
|------|--------|----------|
| `public/profile-me.png` | Copy from raw-data | HIGH |
| `data.json` | Rewrite | HIGH |
| `app/head.tsx` | Rewrite meta | HIGH |
| `app/Header.tsx` | Remove conditional | HIGH |
| `pages/api/mail.ts` | Rewrite → Formspree | HIGH |
| `components/Contact.tsx` | Update POST endpoint | HIGH |
| `components/CallToAction.tsx` | Rewrite CTA | MEDIUM |
| `.env.local.example` | Create new | MEDIUM |
| `package.json` | Remove @sendgrid/mail | LOW |
