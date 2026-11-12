import { renderStudyCard } from './components.js';

// ── Rekomendasi study space ──────────────────────────────────────────────────
const recommendations = document.querySelector('[data-recommendations]');
const fallback = window.studySpaces || [];
const names = ['Perpustakaan Pusat', 'Gedung Teknik', 'Student Center'];

const spaces = names.map((name, index) =>
    fallback.find((space) => space.name === name) || {
        id: ['perpustakaan-pusat', 'gedung-teknik', 'student-center'][index],
        name,
        location: [
            'Gedung Perpustakaan, Lantai 1',
            'Gedung Teknik, Lantai 2',
            'Student Center, Lantai 2',
        ][index],
        capacity: [50, 35, 40][index],
        image:
            fallback[index]?.image ||
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    }
);

if (recommendations) {
    recommendations.innerHTML = spaces
        .map((space) => renderStudyCard(space, 'pages/detail.html'))
        .join('');
}

// ── Mobile navbar toggle ───────────────────────────────────────────────────────
// Navbar tidak memakai Bootstrap navbar class — toggle dikontrol sepenuhnya
// oleh JS ini. Bootstrap collapse JS tidak aktif di sini.
const menuBtn = document.querySelector('[data-public-menu]');
const navEl   = document.querySelector('[data-public-nav]');

if (menuBtn && navEl) {
    menuBtn.addEventListener('click', () => {
        const isOpen = navEl.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Tutup menu saat link nav diklik (smooth UX di mobile)
    navEl.querySelectorAll('.nav-item').forEach((link) => {
        link.addEventListener('click', () => {
            navEl.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Tutup menu saat klik di luar navbar
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.public-navbar')) {
            navEl.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// ── Search form — teruskan parameter ke halaman results ──────────────────────
document.querySelector('[data-search-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    for (const [key, value] of new FormData(event.currentTarget)) {
        if (value) params.set(key, value);
    }

    // Parameter: location, capacity, facility
    window.location.href = `pages/results.html?${params}`;
});
