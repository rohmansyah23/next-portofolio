# Kesimpulan — Setup SSH & Push ke GitHub

## Masalah
Repo menggunakan remote HTTPS (`https://github.com/rohmansyah23/next-portofolio.git`) dan perlu diubah ke SSH agar bisa push dari perangkat Android.

## Langkah-langkah

1. **Generate SSH key** (ED25519, tanpa passphrase):
   ```
   ssh-keygen -t ed25519 -C "syahr642@gmail.com"
   ```

2. **Bersihkan format file public key** — file `.pub` hasil generate di Windows mengandung CRLF (`\r\n`) yang ditolak GitHub sebagai *"invalid key format"*. Solusi: hapus trailing CRLF dengan PowerShell:
   ```
   [System.IO.File]::WriteAllText("file.pub", (Get-Content "file.pub" -Raw).TrimEnd("`r`n"))
   ```

3. **Tambahkan public key ke GitHub**:
   - Buka https://github.com/settings/keys
   - New SSH Key → paste key dari `id_ed25519_clean.pub`

4. **Verifikasi koneksi SSH**:
   ```
   ssh -T git@github.com
   ```
   Output: *"Hi rohmansyah23! You've successfully authenticated"*

5. **Ubah remote URL**:
   ```
   git remote set-url origin git@github.com:rohmansyah23/next-portofolio.git
   ```

6. **Push**:
   ```
   git push -u origin main
   ```

## Status Akhir
- Remote: `git@github.com:rohmansyah23/next-portofolio.git` (SSH)
- Branch `main` ter-track ke `origin/main`
- Semua commit sudah ter-push
