import { mountShell, renderStudyCard } from './components.js';

const page = mountShell({ activePage: 'dashboard.html', title: 'Beranda' });
page.innerHTML = `<section class="container" style="padding:32px 0"><p class="eyebrow">FONDASI FRONTEND BARU</p><h2 style="color:var(--navy-900)">Komponen reusable siap digunakan</h2><p>Halaman ini adalah preview fondasi rebuild. Konten halaman Hi-Fi akan dibangun di atas komponen yang sama.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:28px">${(window.studySpaces || []).slice(0, 3).map(renderStudyCard).join('')}</div></section>`;
