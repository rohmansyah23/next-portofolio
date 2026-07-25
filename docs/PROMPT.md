# PROMPT - Eksekusi Portfolio Muhammad Rohman Syah

## Instrusi

```
Ubah portfolio Next.js ini dari template "Jigar Sable" menjadi
portfolio pribadi Muhammad Rohman Syah. Seluruh data sumber ada di /.raw-data-me.
```

---

## Langkah Eksekusi

### STEP 1: Copy Gambar

```powershell
Copy-Item -Path ".raw-data-me/profile-me/profile-me.png" -Destination "public/profile-me.png"
```

---

### STEP 2: Update `data.json`

Ganti **SELURUH** isi `data.json` dengan data berikut:

```json
{
  "main": {
    "name": "Muhammad Rohman Syah",
    "shortDesc": "Fullstack Web Developer bersertifikasi BNSP dengan pengalaman praktis dalam pengembangan web end-to-end. Berfokus pada solusi yang solutif dan berpusat pada pemecahan masalah pengguna.",
    "titles": [
      "Fullstack Web Developer",
      "PHP & CodeIgniter",
      "Flutter Development",
      "Go Backend"
    ],
    "heroImage": "/profile-me.png",
    "techStackImages": [
      "https://img.icons8.com/color/144/000000/php.png",
      "https://img.icons8.com/color/144/000000/flutter.png",
      "https://img.icons8.com/color/144/000000/firebase.png",
      "https://img.icons8.com/color/144/000000/javascript.png"
    ]
  },
  "about": {
    "aboutImage": "/profile-me.png",
    "aboutImageCaption": "< Fullstack Developer />",
    "title": "Fullstack Web Developer | BNSP Certified",
    "about": "Lulusan S1 Teknologi Informasi bersertifikasi BNSP (Analis Program & Network Administrator) dengan pengalaman praktis dalam pengembangan web full-stack. Memiliki rekam jejak dalam merancang Sistem PPDB Online terintegrasi Payment Gateway, serta pengalaman operasional selama hampir 4 tahun yang membentuk pemahaman kuat tentang logika bisnis, efisiensi alur kerja, dan akurasi data. Berfokus pada pengembangan perangkat lunak yang solutif dan berpusat pada pemecahan masalah pengguna.",
    "callUrl": "",
    "resumeUrl": ""
  },
  "socials": [
    { "name": "GitHub", "icon": "FaGithub", "link": "https://github.com/rohmansyah23" },
    { "name": "Instagram", "icon": "FaInstagram", "link": "https://www.instagram.com/roman.syahr/" },
    { "name": "LinkedIn", "icon": "FaLinkedin", "link": "https://www.linkedin.com/in/muhammad-rohman-syah-13a0873a8/" },
    { "name": "YouTube", "icon": "FaYoutube", "link": "https://www.youtube.com/@m.rohmansyah203" }
  ],
  "skills": [
    { "name": "PHP", "image": "https://img.icons8.com/color/144/000000/php.png", "category": "Backend" },
    { "name": "JavaScript", "image": "https://img.icons8.com/color/144/000000/javascript.png", "category": "Frontend" },
    { "name": "HTML5", "image": "https://img.icons8.com/color/144/000000/html-5--v1.png", "category": "Frontend" },
    { "name": "CSS3", "image": "https://img.icons8.com/color/144/000000/css3.png", "category": "Frontend" },
    { "name": "Bootstrap", "image": "https://img.icons8.com/color/144/000000/bootstrap.png", "category": "Frontend" },
    { "name": "CodeIgniter", "image": "https://img.icons8.com/ios-filled/150/000000/codeigniter.png", "category": "Backend" },
    { "name": "Laravel", "image": "https://img.icons8.com/color/144/000000/laravel.png", "category": "Backend" },
    { "name": "Node.js", "image": "https://img.icons8.com/color/144/000000/nodejs.png", "category": "Backend" },
    { "name": "Go", "image": "https://img.icons8.com/color/144/000000/golang.png", "category": "Backend" },
    { "name": "Python", "image": "https://img.icons8.com/color/144/000000/python.png", "category": "Backend" },
    { "name": "Flutter", "image": "https://img.icons8.com/color/144/000000/flutter.png", "category": "Mobile" },
    { "name": "Dart", "image": "https://img.icons8.com/color/144/000000/dart.png", "category": "Mobile" },
    { "name": "Firebase", "image": "https://img.icons8.com/color/144/000000/firebase.png", "category": "Database & Tools" },
    { "name": "SQL", "image": "https://img.icons8.com/color/144/000000/sql.png", "category": "Database & Tools" },
    { "name": "Git", "image": "https://img.icons8.com/color/144/000000/git.png", "category": "Database & Tools" },
    { "name": "Supabase", "image": "https://img.icons8.com/color/144/000000/supabase.png", "category": "Database & Tools" }
  ],
  "projects": [
    {
      "name": "CroCode Marketplace",
      "techstack": "PHP, CodeIgniter 3, Bootstrap",
      "category": "PHP",
      "image": "https://img.icons8.com/color/144/000000/php.png",
      "links": {
        "code": "https://github.com/rohmansyah23/Crocode",
        "video": "",
        "visit": "https://rohmansyah23.github.io/Crocode/"
      }
    },
    {
      "name": "AI Go - Warehouse Chatbot",
      "techstack": "Go (Gin Gonic), Google Gemini API",
      "category": "Go",
      "image": "https://img.icons8.com/color/144/000000/golang.png",
      "links": {
        "code": "https://github.com/rohmansyah23/ai-go",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "PawsCare Portal",
      "techstack": "CodeIgniter 3, PHP, MySQL",
      "category": "PHP",
      "image": "https://img.icons8.com/ios-filled/150/000000/codeigniter.png",
      "links": {
        "code": "https://github.com/rohmansyah23/portal-paswcare",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "QC Mobile App",
      "techstack": "Flutter, Dart, Supabase",
      "category": "Mobile",
      "image": "https://img.icons8.com/color/144/000000/flutter.png",
      "links": {
        "code": "https://github.com/rohmansyah23/QC-Mobile-App",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Flutter Auto-Refresh Bot",
      "techstack": "Flutter, Dart",
      "category": "Mobile",
      "image": "https://img.icons8.com/color/144/000000/dart.png",
      "links": {
        "code": "https://github.com/rohmansyah23/flutter-auto-refresh-bot",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Red Line Guardian AI",
      "techstack": "Python, Computer Vision, PID Control",
      "category": "Python",
      "image": "https://img.icons8.com/color/144/000000/python.png",
      "links": {
        "code": "https://github.com/rohmansyah23/red-line-guardian-ai",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Pustaka Booking UBSI",
      "techstack": "CodeIgniter 3, PHP, MySQL",
      "category": "PHP",
      "image": "https://img.icons8.com/color/144/000000/sql.png",
      "links": {
        "code": "https://github.com/rohmansyah23/pustaka-booking-ubsi",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Eat Scroll",
      "techstack": "Android, Kotlin",
      "category": "Mobile",
      "image": "https://img.icons8.com/color/144/000000/android-os.png",
      "links": {
        "code": "https://github.com/rohmansyah23/eat-scroll",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Taskbar Navigator",
      "techstack": "Python",
      "category": "Python",
      "image": "https://img.icons8.com/color/144/000000/python.png",
      "links": {
        "code": "https://github.com/rohmansyah23/taskbar-navigator",
        "video": "",
        "visit": ""
      }
    },
    {
      "name": "Milagros Web",
      "techstack": "PHP, MySQL",
      "category": "PHP",
      "image": "https://img.icons8.com/color/144/000000/php.png",
      "links": { "code": "", "video": "", "visit": "" }
    },
    {
      "name": "Catering Mama Akbar",
      "techstack": "PHP, CodeIgniter 3",
      "category": "PHP",
      "image": "https://img.icons8.com/ios-filled/150/000000/codeigniter.png",
      "links": { "code": "", "video": "", "visit": "" }
    },
    {
      "name": "Shress",
      "techstack": "Kotlin, React",
      "category": "Mobile",
      "image": "https://img.icons8.com/color/144/000000/kotlin.png",
      "links": { "code": "", "video": "", "visit": "" }
    }
  ],
  "experiences": [
    {
      "company": "Fullstack Web Developer (Freelance)",
      "position": "Freelance",
      "startDate": "Jan 2024",
      "endDate": "Sekarang",
      "desc": [
        "Mengelola siklus hidup pengembangan perangkat lunak (SDLC) secara end-to-end, mulai dari perancangan arsitektur sistem, penulisan kode, hingga deployment dan pemeliharaan",
        "Melakukan kustomisasi dan modifikasi fitur aplikasi sesuai dengan kebutuhan bisnis klien untuk meningkatkan nilai fungsionalitas produk"
      ]
    },
    {
      "company": "IT Support & Teaching Assistant",
      "position": "Magang",
      "startDate": "Okt 2024",
      "endDate": "Des 2024",
      "desc": [
        "Membangun dan mengimplementasikan Sistem PPDB Online yang terintegrasi dengan Payment Gateway",
        "Mengembangkan Website Akademik fungsional yang mengotomatisasi proses input data siswa",
        "Memelihara infrastruktur TI dan melakukan troubleshooting jaringan laboratorium"
      ]
    },
    {
      "company": "Admin Operasional & Stockist",
      "position": "Agen Milagros Pondok Kelapa",
      "startDate": "Feb 2021",
      "endDate": "Des 2024",
      "desc": [
        "Menyusun laporan penjualan harian & bulanan dengan tingkat akurasi data stok 100%",
        "Mengelola inventaris dan sirkulasi logistik dengan volume hingga 60 dus/bulan",
        "Memproses lebih dari 20 pesanan pelanggan per minggu secara efisien"
      ]
    }
  ],
  "educations": [
    {
      "institute": "Universitas Bina Sarana Informatika - Jakarta",
      "degree": "S1 Teknologi Informasi (Fakultas Teknik dan Informatika)",
      "startDate": "Agu 2021",
      "endDate": "Des 2025",
      "desc": [
        "Skripsi: Pengembangan Sistem Informasi PPDB Terpadu Berbasis Web pada SMKS Jakarta 1 Pondok Kopi Jakarta Timur",
        "Publikasi Jurnal: Developing an Efficient PPDB System Integrating Payment Gateway and Secure Exams"
      ]
    }
  ]
}
```

---

### STEP 3: Update `app/head.tsx`

Ganti seluruh isi file menjadi:

```tsx
export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Portfolio Muhammad Rohman Syah - Fullstack Web Developer bersertifikasi BNSP dengan pengalaman dalam pengembangan web end-to-end." />
      <meta name="keywords" content="muhammad rohman syah, portfolio, fullstack developer, php, codeigniter, flutter, golang, jakarta" />
      <meta property="og:site_name" content="Muhammad Rohman Syah's Portfolio" />
      <meta property="og:title" content="Portfolio | Muhammad Rohman Syah - Fullstack Developer" />
      <meta property="og:description" content="Fullstack Web Developer bersertifikasi BNSP dengan pengalaman dalam pengembangan web end-to-end." />
      <meta property="og:url" content="https://YOUR-VERCEL-APP.vercel.app" />
      <meta property="og:image" content="/profile-me.png" />
      <link rel="canonical" href="https://YOUR-VERCEL-APP.vercel.app" />
      <meta name="author" content="Muhammad Rohman Syah" />
      <meta name="language" content="English" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://YOUR-VERCEL-APP.vercel.app" />
      <meta name="application-name" content="Portfolio | Muhammad Rohman Syah" />
      <meta name="apple-mobile-web-app-title" content="Portfolio | Muhammad Rohman Syah" />
      <link rel="icon" href="/favicon.ico" />
      <title>Portfolio | Muhammad Rohman Syah - Fullstack Developer</title>
    </>
  )
}
```

> Ganti `YOUR-VERCEL-APP` dengan nama app Vercel kamu.

---

### STEP 4: Update `app/Header.tsx`

Hapus conditional check "Jigar Sable". Ganti:

**Line 31:**
```tsx
// SEBELUM:
{logo === 'Jigar Sable' ? <FaNodeJs size={28} /> : <span className='text-lg font-medium'>{logo.split(' ')[0]}</span>}

// SESUDAH:
<span className='text-lg font-medium'>{logo.split(' ')[0]}</span>
```

**Line 58:**
```tsx
// SEBELUM:
{logo === 'Jigar Sable' ? <FaNodeJs size={28} /> : <span className='text-lg font-medium'>{logo.split(' ')[0]}</span>}

// SESUDAH:
<span className='text-lg font-medium'>{logo.split(' ')[0]}</span>
```

Hapus import `FaNodeJs` jika tidak digunakan lagi.

---

### STEP 5: Ganti SendGrid → Formspree

#### 5a. `pages/api/mail.ts`

Ganti seluruh isi:

```ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${name.toUpperCase()} sent you a message from Portfolio`,
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: "Your message was sent successfully." });
      } else {
        res.status(500).json({ message: "There was an error sending your message." });
      }
    } catch (err) {
      res.status(500).json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
```

#### 5b. `package.json`

Hapus dependency `@sendgrid/mail`:
```bash
npm uninstall @sendgrid/mail
```

---

### STEP 6: Ganti `components/CallToAction.tsx`

Ganti seluruh isi:

```tsx
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {
  return (
    <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center bg-gradient-to-r from-violet-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10">
      <div className="flex flex-col md:w-full">
        <h2 className="text-2xl lg:text-4xl font-extrabold">Let&apos;s Work <span className="text-yellow-400">Together</span></h2>
        <p className="text-sm md:text-base mt-2.5 md:mt-6">Have a project in mind? I&apos;m always open to new opportunities and collaborations.</p>
        <div className="flex items-center gap-4 my-4">
          <Link href="https://www.linkedin.com/in/muhammad-rohman-syah-13a0873a8/" target="_blank" className="py-2 px-4 bg-white text-black rounded-lg w-fit flex items-center gap-2 hover:shadow-xl transition-shadow">
            <FaLinkedin />
            Contact on LinkedIn
          </Link>
        </div>
      </div>
    </SectionWrapper >
  )
}

export default CallToAction
```

---

### STEP 7: Create `.env.local.example`

```bash
# Firebase Realtime Database
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID=
NEXT_PUBLIC_FIREBASE_APPID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTD=

# Formspree (Contact Form)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

---

## Env Setup Instructions

### 1. Firebase
1. Buka [Firebase Console](https://console.firebase.google.com)
2. Create project baru (atau pakai yang existing)
3. Aktifkan **Realtime Database**
4. Buka **Project Settings** → **General** → **Your apps** → Web app
5. Copy config values ke `.env.local`

### 2. Formspree
1. Buka [formspree.io](https://formspree.io)
2. Daftar / Login
3. Create form baru
4. Copy endpoint URL (format: `https://formspree.io/f/xxxxx`)
5. Paste ke `NEXT_PUBLIC_FORMSPREE_ENDPOINT` di `.env.local`

### 3. Deploy ke Vercel
1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import GitHub repo
3. Tambahkan environment variables di Vercel dashboard
4. Deploy

---

## Verification

Setelah semua perubahan, run:

```bash
npm run build
```

Pastikan tidak ada error. Jika build success, push ke GitHub dan deploy ke Vercel.
