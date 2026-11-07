# Find Study Space Kampus

## A. Project Overview

Find Study Space Kampus adalah website frontend untuk membantu mahasiswa menemukan ruang belajar yang sesuai dengan lokasi, kapasitas, fasilitas, dan kebutuhan aktivitas mereka.

Project ini ditujukan untuk mahasiswa yang membutuhkan informasi ruang belajar kampus secara lebih terstruktur. Permasalahan yang ingin diselesaikan adalah sulitnya menemukan ruang yang nyaman, mengetahui fasilitas yang tersedia, serta memahami lokasi ruang di lingkungan kampus.

Seluruh data pada project ini masih berupa data dummy dan belum terhubung ke backend.

**Preview**
<img width="1368" height="802" alt="image" src="https://github.com/user-attachments/assets/714f14ec-39f8-435c-a04c-732d9fa71773" />

## B. Features

- Landing Page dengan CTA dan pencarian awal.
- Login dan Register dengan validasi frontend.
- Dashboard mahasiswa.
- Pencarian study space.
- Hasil pencarian dengan filter, sorting, dan pagination.
- Detail study space berdasarkan query parameter ID.
- Informasi lokasi gedung dan denah kampus berbasis SVG.
- Pengaturan profil dan preferensi akun.
- Light/Dark Theme pada halaman Pengaturan.
- Preferensi notifikasi.
- Responsive layout untuk desktop, tablet, dan mobile.

Login dan Register hanya merupakan simulasi frontend. Tidak ada autentikasi backend.

## C. Technology Stack

- HTML5 untuk struktur halaman.
- CSS3 untuk design system, layout, dan responsive styling.
- Vanilla JavaScript ES Modules untuk komponen dan interaksi.
- SVG untuk icon outline dan denah lokasi.
- `localStorage` untuk menyimpan preferensi tema dan notifikasi.
- Live Server untuk menjalankan project secara lokal.

Project tidak memerlukan `npm install` atau framework frontend.

## D. Project Structure

```text
find-study-space/
├── index.html
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── search.html
│   ├── results.html
│   ├── detail.html
│   ├── location.html
│   ├── settings.html
│   ├── directions.html
│   ├── foundation.html
│   └── components-preview.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   ├── detail.css
│   │   ├── landing.css
│   │   ├── location.css
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── results.css
│   │   ├── search.css
│   │   ├── settings.css
│   │   └── components/
│   │       ├── sidebar.css
│   │       └── navbar.css
│   └── js/
│       └── components/
│           ├── sidebar.js
│           └── navbar.js
├── js/
│   ├── components.js
│   ├── study-spaces.js
│   ├── landing.js
│   ├── login.js
│   ├── register.js
│   ├── dashboard.js
│   ├── search.js
│   ├── results.js
│   ├── detail.js
│   ├── location.js
│   └── settings.js
├── components/
├── css/
├── assets/images/
├── .gitignore
└── README.md
```

Folder `components/` dan `css/` lama masih dipertahankan karena berisi implementasi legacy atau referensi migrasi halaman yang belum seluruhnya dipindahkan.

## E. Installation & Running

1. Clone repository:

   ```bash
   https://github.com/davidkhasbiya/find-study-space.git
   ```

2. Buka folder `find-study-space` di VS Code.
3. Install extension Live Server jika belum tersedia.
4. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
5. Website akan terbuka pada URL lokal seperti:

   ```text
   http://127.0.0.1:5500/index.html
   ```

Port dapat berbeda tergantung konfigurasi Live Server.

## F. Application Pages

| Halaman | Path | Deskripsi |
| --- | --- | --- |
| Landing Page | `/index.html` | Halaman publik dan pencarian awal. |
| Login | `/pages/login.html` | Simulasi login mahasiswa dengan validasi frontend. |
| Register | `/pages/register.html` | Simulasi pendaftaran akun. |
| Dashboard | `/pages/dashboard.html` | Ringkasan dan rekomendasi study space. |
| Cari Study Space | `/pages/search.html` | Form pencarian berdasarkan kriteria. |
| Hasil Pencarian | `/pages/results.html` | Daftar hasil dengan filter, sorting, dan pagination. |
| Detail Study Space | `/pages/detail.html?id=perpustakaan-pusat` | Informasi lengkap satu study space. |
| Informasi Lokasi | `/pages/location.html` | Informasi gedung, denah SVG, dan ruang di dalamnya. |
| Pengaturan | `/pages/settings.html` | Profil, tema, notifikasi, dan simulasi keamanan akun. |

## G. Data & Limitations

- Data study space berasal dari dummy data di `js/study-spaces.js`.
- Login dan Register belum menggunakan autentikasi backend.
- Password tidak pernah disimpan ke `localStorage`.
- Tema dan preferensi notifikasi disimpan menggunakan `localStorage`.
- Denah lokasi dibuat dengan SVG tanpa API eksternal.
- Belum tersedia database, reservasi ruang, atau sinkronisasi ketersediaan real-time.
- Browser testing masih perlu dilakukan secara manual melalui Live Server.

## H. Testing

Static validation dilakukan menggunakan `node --check` pada seluruh file JavaScript yang digunakan project. Hasil validasi terakhir: seluruh JavaScript lulus syntax validation.

Integration review Phase 10 mencakup pemeriksaan path, komponen global, shared data, navigasi, query parameter, form validation, reset, theme switching, dan localStorage.

Browser automation belum tersedia pada lingkungan pengembangan ini. Karena itu, pengujian visual, console browser, dan responsive viewport tetap perlu dilakukan manual melalui Live Server pada ukuran desktop, tablet, dan mobile.

## I. Future Development

Rencana pengembangan berikut belum tersedia pada versi ini:

- Integrasi backend.
- Autentikasi pengguna yang sebenarnya.
- Database study space.
- Reservasi study space.
- Integrasi peta kampus.
- Automated browser testing.
