# Environment Setup Guide

## Overview

Portfolio ini membutuhkan **3 services** dengan total **9 environment variables**.

---

## Services Required

### 1. Firebase (8 env vars)

**Tujuan:** Menyimpan data portfolio (biodata, projects, skills, experience)

**Setup:**
1. Buka [Firebase Console](https://console.firebase.google.com)
2. Klik **Create Project** → masukkan nama project → Continue
3. Disable Google Analytics (opsional) → Create Project
4. Setelah jadi, klik icon **Web** (</>) untuk tambah web app
5. Register app → beri nama → Copy `firebaseConfig` object
6. Buka **Build** → **Realtime Database** → Create Database
7. Pilih region → Start in **test mode** → Enable

**Env Variables:**
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...          # dari firebaseConfig.apiKey
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com  # dari firebaseConfig.authDomain
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://xxx-default-rtdb.firebaseio.com  # dari firebaseConfig.databaseURL
NEXT_PUBLIC_FIREBASE_PROJECTID=xxx              # dari firebaseConfig.projectId
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx.appspot.com  # dari firebaseConfig.storageBucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID=123456  # dari firebaseConfig.messagingSenderId
NEXT_PUBLIC_FIREBASE_APPID=1:123:web:abc        # dari firebaseConfig.appId
NEXT_PUBLIC_FIREBASE_MEASUREMENTD=G-XXXXXX      # dari firebaseConfig.measurementId
```

**Cara isi data ke Firebase:**
- Buka Realtime Database → klik ikon titik tiga → Import JSON
- Upload `data.json` yang sudah diupdate

---

### 2. Formspree (1 env vars)

**Tujuan:** Contact form submission (pesan dari visitor)

**Setup:**
1. Buka [formspree.io](https://formspree.io)
2. Klik **Get Started** → Daftar dengan email
3. Klik **New Form** → beri nama "Portfolio Contact"
4. Copy endpoint URL (format: `https://formspree.io/f/xwkdqgzp`)

**Env Variables:**
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Penting:**
- Di dashboard Formspree, tambahkan email penerima di **Email notifications**
- Form akan otomatis forward pesan ke email kamu

---

### 3. Vercel (deploy, tanpa env vars tambahan)

**Setup:**
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik **Add New** → **Project**
4. Import repository GitHub kamu
5. Framework: **Next.js** (auto-detected)
6. Di bagian **Environment Variables**, tambahkan semua 9 env vars dari atas
7. Klik **Deploy**

---

## Complete `.env.local` Template

```bash
# === FIREBASE ===
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID=
NEXT_PUBLIC_FIREBOX_APPID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTD=

# === FORMSPREE ===
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

---

## Deployment Checklist

- [ ] Firebase project created
- [ ] Firebase Realtime Database activated
- [ ] `data.json` uploaded to Firebase
- [ ] Formspree form created
- [ ] `.env.local` filled with all 9 vars
- [ ] `npm run build` succeeds locally
- [ ] Push to GitHub
- [ ] Vercel project imported
- [ ] Vercel env vars configured
- [ ] Deploy success
- [ ] Visit portfolio URL - check all sections
- [ ] Test contact form
- [ ] Update `head.tsx` og:url with actual Vercel URL
