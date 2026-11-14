# Find Study Space Kampus

Website frontend untuk membantu mahasiswa menemukan ruang belajar kampus berdasarkan lokasi, kapasitas, fasilitas, dan kebutuhan aktivitas.

## A. Project Overview

**Find Study Space Kampus** merupakan proyek website yang dirancang untuk memudahkan mahasiswa dalam mencari informasi ruang belajar di lingkungan kampus.

Mahasiswa dapat melihat informasi ruang, membandingkan fasilitas, mencari lokasi gedung, dan menemukan ruang belajar yang sesuai dengan kebutuhan mereka.

Proyek ini dikembangkan sebagai aplikasi frontend menggunakan HTML, CSS, JavaScript, dan Bootstrap. Data ruang belajar yang digunakan masih berupa data dummy dan belum terhubung dengan backend atau database.

**Preview**
<<<<<<< HEAD
=======
<img width="1368" height="802" alt="image" src="https://github.com/user-attachments/assets/714f14ec-39f8-435c-a04c-732d9fa71773" />

## B. Features
>>>>>>> origin/main

<img width="1368" height="802" alt="image" src="https://github.com/user-attachments/assets/714f14ec-39f8-435c-a04c-732d9fa71773" />

## B. Main Features

### 1. Landing Page
- Halaman utama sebagai pengenalan aplikasi.
- Navigasi menuju halaman pencarian dan fitur lainnya.
- Pencarian awal berdasarkan kriteria ruang belajar.
- Rekomendasi study space.

### 2. Authentication
- Halaman Login dan Register.
- Validasi input menggunakan JavaScript.
- Toggle visibilitas password.
- Tampilan responsif.

*Catatan: Login dan Register masih berupa simulasi frontend, belum menggunakan autentikasi backend.*

### 3. Dashboard
- Ringkasan informasi study space.
- Rekomendasi ruang belajar.
- Navigasi menuju fitur utama aplikasi.

### 4. Study Space Search
- Pencarian berdasarkan nama atau kriteria ruang.
- Filter kapasitas ruang.
- Filter fasilitas.
- Sorting hasil pencarian.
- Pagination.

### 5. Study Space Detail
- Informasi detail ruang belajar.
- Informasi kapasitas dan fasilitas.
- Informasi berdasarkan ID ruang melalui query parameter.

### 6. Location Information
- Informasi gedung kampus.
- Denah lokasi berbasis SVG.
- Informasi ruang berdasarkan gedung.

### 7. Settings
- Pengaturan profil.
- Pengaturan Light Mode dan Dark Mode.
- Preferensi notifikasi.
- Pengaturan preferensi akun.

### 8. Responsive Interface
- Layout desktop, tablet, dan mobile.
- Sidebar yang dapat disesuaikan pada desktop dan tablet.
- Navigasi mobile menggunakan drawer.
- Komponen antarmuka yang digunakan bersama.

## C. Technology Stack

| Teknologi | Penggunaan |
|---|---|
| HTML5 | Struktur halaman website |
| CSS3 | Styling, layout, dan responsive design |
| JavaScript ES Modules | Interaksi dan logika frontend |
| Bootstrap 5.3.8 | Framework CSS dan komponen antarmuka |
| SVG | Ikon dan denah lokasi |
| localStorage | Penyimpanan preferensi pengguna |
| Live Server | Menjalankan aplikasi secara lokal |

Proyek ini tidak memerlukan proses instalasi dependency menggunakan `npm install`.

## D. Project Structure

```text
find-study-space/
â”œâ”€â”€ index.html
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ login.html
â”‚   â”œâ”€â”€ register.html
â”‚   â”œâ”€â”€ dashboard.html
â”‚   â”œâ”€â”€ search.html
â”‚   â”œâ”€â”€ results.html
â”‚   â”œâ”€â”€ detail.html
â”‚   â”œâ”€â”€ location.html
â”‚   â”œâ”€â”€ settings.html
â”‚   â”œâ”€â”€ directions.html
â”‚   â”œâ”€â”€ foundation.html
â”‚   â””â”€â”€ components-preview.html
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ css/
â”‚   â”‚   â”œâ”€â”€ global.css
â”‚   â”‚   â”œâ”€â”€ auth.css
â”‚   â”‚   â”œâ”€â”€ dashboard.css
â”‚   â”‚   â”œâ”€â”€ detail.css
â”‚   â”‚   â”œâ”€â”€ landing.css
â”‚   â”‚   â”œâ”€â”€ location.css
â”‚   â”‚   â”œâ”€â”€ login.css
â”‚   â”‚   â”œâ”€â”€ register.css
â”‚   â”‚   â”œâ”€â”€ results.css
â”‚   â”‚   â”œâ”€â”€ search.css
â”‚   â”‚   â”œâ”€â”€ settings.css
â”‚   â”‚   â””â”€â”€ components/
â”‚   â”‚       â”œâ”€â”€ navbar.css
â”‚   â”‚       â””â”€â”€ sidebar.css
â”‚   â”œâ”€â”€ js/
â”‚   â”‚   â”œâ”€â”€ theme.js
â”‚   â”‚   â””â”€â”€ components/
â”‚   â”‚       â”œâ”€â”€ navbar.js
â”‚   â”‚       â””â”€â”€ sidebar.js
â”‚   â””â”€â”€ images/
â”œâ”€â”€ js/
â”‚   â”œâ”€â”€ components.js
â”‚   â”œâ”€â”€ data.js
â”‚   â”œâ”€â”€ study-spaces.js
â”‚   â”œâ”€â”€ landing.js
â”‚   â”œâ”€â”€ login.js
â”‚   â”œâ”€â”€ register.js
â”‚   â”œâ”€â”€ dashboard.js
â”‚   â”œâ”€â”€ search.js
â”‚   â”œâ”€â”€ results.js
â”‚   â”œâ”€â”€ detail.js
â”‚   â”œâ”€â”€ location.js
â”‚   â”œâ”€â”€ settings.js
â”‚   â”œâ”€â”€ directions.js
â”‚   â”œâ”€â”€ foundation-demo.js
â”‚   â”œâ”€â”€ script.js
â”‚   â””â”€â”€ sidebar.js
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ navbar.html
â”‚   â””â”€â”€ sidebar.html
â”œâ”€â”€ css/
â”‚   â””â”€â”€ (Legacy stylesheets)
â”œâ”€â”€ .gitignore
â””â”€â”€ README.md
```

**Keterangan:**
- `assets/css/` berisi stylesheet utama yang digunakan oleh halaman aktif.
- `assets/js/` berisi JavaScript untuk tema dan komponen navigasi bersama.
- `js/` berisi logika halaman, pengelolaan data, dan interaksi aplikasi.
- `components/` dan `css/` masih menyimpan file legacy atau referensi dari pengembangan sebelumnya.
- `pages/` berisi halaman-halaman aplikasi.

## E. Installation & Running

### Requirements
- Git
- Visual Studio Code
- Browser modern
- Extension Live Server pada Visual Studio Code

### Steps

1. Clone repository:

   ```bash
   git clone https://github.com/davidkhasbiya/find-study-space.git

   ```

2. Masuk ke direktori proyek:

   ```bash
   cd find-study-space
   ```

3. Buka folder proyek menggunakan Visual Studio Code.

4. Pastikan extension Live Server sudah terpasang.

5. Klik kanan `index.html`, kemudian pilih **Open with Live Server**.

6. Website akan terbuka melalui alamat lokal, contohnya:

   ```text
   http://127.0.0.1:5500/index.html
   ```

Port dapat berbeda sesuai konfigurasi Live Server.

## F. Application Pages

| Halaman | Path | Deskripsi |
|---|---|---|
| Landing Page | `/index.html` | Halaman utama dan pencarian awal. |
| Login | `/pages/login.html` | Simulasi login dengan validasi frontend. |
| Register | `/pages/register.html` | Simulasi pendaftaran akun. |
| Dashboard | `/pages/dashboard.html` | Ringkasan dan rekomendasi study space. |
| Search | `/pages/search.html` | Form pencarian ruang belajar. |
| Results | `/pages/results.html` | Hasil pencarian, filter, sorting, dan pagination. |
| Detail | `/pages/detail.html?id=<space-id>` | Informasi detail ruang belajar. |
| Location | `/pages/location.html` | Informasi gedung dan denah kampus. |
| Settings | `/pages/settings.html` | Pengaturan profil, tema, dan preferensi. |

## G. Data Management & Limitations

- Data study space dikelola melalui file JavaScript lokal, terutama `js/study-spaces.js`.
- Aplikasi belum terhubung ke backend maupun database.
- Login dan Register belum menggunakan autentikasi sungguhan.
- Password tidak disimpan ke `localStorage`.
- Preferensi tema dan pengaturan pengguna disimpan melalui `localStorage`.
- Denah lokasi dibuat menggunakan SVG dan belum menggunakan layanan peta eksternal.
- Belum tersedia fitur reservasi ruang.
- Belum tersedia sinkronisasi ketersediaan ruang secara real-time.

## H. Testing & Quality Assurance

Pengujian dilakukan melalui pemeriksaan kode dan browser.

### 1. Static Validation
- Pemeriksaan sintaks JavaScript menggunakan `node --check`.
- Pemeriksaan perubahan kode menggunakan `git diff --check`.
- Pemeriksaan struktur dan referensi file.

### 2. Browser Testing
Pemeriksaan browser mencakup:
- Sembilan halaman aktif.
- Light Mode dan Dark Mode.
- Responsivitas desktop, tablet, dan mobile.
- Navigasi antarhalaman.
- Query parameter pencarian dan detail.
- Validasi form Login dan Register.
- Filter kapasitas dan fasilitas.
- Sorting dan pagination.
- Penyimpanan preferensi tema.
- Pengaturan ulang preferensi melalui Settings.
- Navigasi sidebar dan navbar.

### 3. Known QA Findings

Pemeriksaan kualitas sebelumnya masih menemukan beberapa hal yang perlu ditindaklanjuti, terutama:
- Konsistensi kontras teks pada beberapa halaman.
- Indikator keyboard focus pada sejumlah elemen interaktif.
- Beberapa detail aksesibilitas pada komponen form dan tombol.

Karena itu, pengujian akhir dan perbaikan aksesibilitas masih menjadi bagian dari tahap finalisasi proyek.

## I. Future Development

Pengembangan berikut dapat dilakukan pada tahap selanjutnya:

- Integrasi backend dan database.
- Implementasi autentikasi pengguna.
- Pengelolaan data study space secara dinamis.
- Fitur reservasi ruang belajar.
- Informasi ketersediaan ruang secara real-time.
- Integrasi peta kampus.
- Automated browser testing.
- Peningkatan aksesibilitas antarmuka.

---

**Project:** Find Study Space Kampus
**Category:** Web Development / Frontend
**Status:** Frontend Development
**Development Stack:** HTML, CSS, JavaScript, Bootstrap 5.3.8