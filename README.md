# 🎀 Website Hadiah untuk Gesti

Website 2 halaman — Ulang Tahun (26 Juni) & Anniversary (28 Juni).

---

## 🗓️ Cara Kerja

| Waktu buka | Yang tampil |
|---|---|
| Sebelum 26 Juni 2026 | Layar terkunci + countdown |
| 26 Juni 2026 | Halaman Ulang Tahun 🎂 |
| 28 Juni 2026 ke atas | Halaman Anniversary 💑 |

---

## 🖼️ Cara Ganti Foto Journey (24 bulan)

1. Siapkan 24 foto, rename jadi: `foto-01.jpg`, `foto-02.jpg`, ... `foto-24.jpg`
2. Taruh semua foto di folder yang sama dengan `index.html`
3. Buka `script.js`, cari bagian `MONTHS`
4. Pada setiap bulan, ganti `photo:''` jadi `photo:'foto-01.jpg'` (sesuai urutan)
5. Ganti juga `caption:` dengan cerita singkat bulan itu

Contoh:
```js
{ label:'Juni 2024', caption:'Awal dari segalanya 🌱', photo:'foto-01.jpg' },
{ label:'Juli 2024', caption:'Nonton bareng pertama kali 🎬', photo:'foto-02.jpg' },
```

---

## 📄 Cara Pasang PDF Surat

1. Buat file PDF suratmu, rename jadi `surat-anniversary.pdf`
2. Taruh di folder yang sama dengan `index.html`
3. Otomatis tombol di website langsung nyambung!

Atau kalau nama filenya beda, buka `index.html` cari:
```html
href="surat-anniversary.pdf"
```
Ganti dengan nama file PDF kamu.

---

## 🎵 Cara Pasang Spotify Playlist

1. Buka Spotify di browser → buka playlist kamu
2. Klik ••• → Share → **Copy link to playlist**
3. Link-nya seperti ini:
   `https://open.spotify.com/playlist/37i9dQZF1DX...`
4. Salin bagian ID-nya saja (setelah `/playlist/`), contoh: `37i9dQZF1DX...`
5. Buka `index.html`, cari `PLAYLIST_ID_KAMU`
6. Ganti dengan ID playlist kamu

---

## 🔓 Cara Preview Tanpa Nunggu Tanggal

Buka `script.js`, ubah sementara:
```js
// Untuk lihat halaman Ulang Tahun:
const BDAY_DATE = new Date('2026-06-20T00:00:00+07:00');

// Untuk lihat halaman Anniversary:
const BDAY_DATE = new Date('2026-06-20T00:00:00+07:00');
const ANNI_DATE = new Date('2026-06-20T00:00:00+07:00');
```
Balik ke tanggal asli setelah selesai preview!

---

## 🚀 Deploy ke GitHub Pages (Gratis)

1. Daftar/login [github.com](https://github.com)
2. Klik **+** → New repository → nama: `untuk-gesti` → Public → Create
3. Klik **uploading an existing file** → drag semua file + foto + PDF
4. **Settings** → **Pages** → Source: main / root → Save
5. Tunggu 1-2 menit → link siap:
   `https://USERNAME.github.io/untuk-gesti`

---

Made with 💕 for Gesti
