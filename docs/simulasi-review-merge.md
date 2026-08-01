# Simulasi Review + Merge PR — Panduan Akun Utama

Panduan ini menjelaskan cara mensimulasikan alur **review → approve → merge** terhadap Pull Request (PR) yang diajukan oleh contributor, dari sisi **akun utama (owner)**.

## 1. Konteks Simulasi

| Peran | Akun | Perangkat |
|-------|------|-----------|
| Owner / Reviewer | `rohmansyah23` | PC |
| Contributor | `syahr642` | Android (Termux) |

- Repo: `rohmansyah23/next-portofolio` (public, default branch `main`)
- Contributor sudah membuka 2 PR:
  - **PR #1** — `docs: add contributors section to README` (dari **fork** / cross-repo)
  - **PR #2** — `fix: add aria-labels to footer social links` (push langsung sebagai **collaborator**)

> Jika PR belum ada, buat dulu dengan alur di `docs/setup-kolaborasi.md` (opsional).

## 2. Prasyarat di PC (Akun Utama)

1. `gh` CLI sudah login sebagai akun utama:
   ```bash
   gh auth status
   # seharusnya menampilkan: Logged in to github.com account rohmansyah23
   ```
2. Repo lokal sudah terhubung ke GitHub:
   ```bash
   git remote -v
   # origin → https://github.com/rohmansyah23/next-portofolio.git
   ```

## 3. Cara Review PR

### A. Via Web UI (Browser)

1. Buka https://github.com/rohmansyah23/next-portofolio/pulls
2. Klik PR yang mau direview
3. Klik tab **Files changed** untuk melihat diff
4. Klik tombol **Review changes** (kanan atas)
5. Pilih salah satu:
   - **Comment** — komentar biasa
   - **Approve** — menyetujui
   - **Request changes** — meminta perbaikan
6. Tulis komentar (opsional), lalu **Submit review**

### B. Via `gh` CLI

```bash
# Lihat detail PR
gh pr view 1 --repo rohmansyah23/next-portofolio

# Lihat diff
gh pr diff 1 --repo rohmansyah23/next-portofolio

# Approve
gh pr review 1 --repo rohmansyah23/next-portofolio --approve --body "LGTM 👍"

# Request changes
gh pr review 2 --repo rohmansyah23/next-portofolio --request-changes --body "Tolong perbaiki dulu..."

# Komentar biasa
gh pr review 2 --repo rohmansyah23/next-portofolio --comment --body "Menurutku oke, cek lagi aksesibilitasnya."
```

## 4. Simulasi Alur Lengkap: Request Changes → Fix → Approve → Merge

Ini simulasi nyata alur kerja tim.

### Langkah 1 — Owner meminta perubahan

```bash
gh pr review 2 --repo rohmansyah23/next-portofolio \
  --request-changes \
  --body "Ada saran: tambahkan aria-label agar konsisten dengan semua link ikon."
```

### Langkah 2 — Contributor memperbaiki (di Termux)

```bash
git checkout feat/footer-accessibility
# ... edit file yang diminta ...
git add . && git commit -m "fix: address review feedback"
git push upstream feat/footer-accessibility
```

> PR otomatis ter-update dengan commit baru — tidak perlu buat PR baru.

### Langkah 3 — Owner approve setelah revisi

```bash
gh pr review 2 --repo rohmansyah23/next-portofolio \
  --approve \
  --body "Sudah sesuai, disetujui."
```

### Langkah 4 — Owner merge

```bash
gh pr merge 2 --repo rohmansyah23/next-portofolio --squash --delete-branch
```

### Langkah 5 — Sinkronkan PC

```bash
git checkout main
git pull origin main
```

## 5. Strategi Merge

| Perintah | Hasil |
|----------|-------|
| `gh pr merge 1 --merge` | Merge commit (riwayat lengkap) |
| `gh pr merge 1 --squash` | Satu commit baru di `main` (riwayat bersih) |
| `gh pr merge 1 --rebase` | Commit di-replay di atas `main` tanpa merge commit |

Tambahan:
- `--delete-branch` otomatis menghapus branch sumber setelah merge.
- Merge juga bisa lewat web UI dengan tombol **Merge pull request**.

## 6. Sinkronisasi Setelah Merge

### PC — Akun Utama (penerima perubahan)

```bash
git checkout main
git pull origin main        # fast-forward: commit hasil merge masuk ke lokal
```

Jika PC punya commit lokal yang belum di-push:

```bash
git pull --rebase origin main   # replay commit lokal di atas main terbaru
```

### Termux — Contributor (menyinkronkan workspace)

```bash
git checkout main
git pull upstream main          # ambil hasil merge dari repo utama
git push origin main            # samakan fork (untuk alur fork+PR)
```

## 7. Cheat-Sheet Perintah

```bash
# Review
gh pr view <n> --repo rohmansyah23/next-portofolio
gh pr diff <n> --repo rohmansyah23/next-portofolio
gh pr review <n> --repo rohmansyah23/next-portofolio --approve
gh pr review <n> --repo rohmansyah23/next-portofolio --request-changes

# Merge
gh pr merge <n> --repo rohmansyah23/next-portofolio --squash --delete-branch
gh pr merge <n> --repo rohmansyah23/next-portofolio --merge --delete-branch
gh pr merge <n> --repo rohmansyah23/next-portofolio --rebase --delete-branch

# Sync
git pull origin main            # PC (owner)
git pull upstream main          # Termux (contributor)
git push origin main            # samakan fork
```
