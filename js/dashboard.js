import { mountSidebar } from '../assets/js/components/sidebar.js';
import { mountNavbar } from '../assets/js/components/navbar.js';
import { renderStudyCard } from './components.js';
import { studySpaces as data } from './study-spaces.js';
mountSidebar({ active: 'dashboard.html' });
mountNavbar({ breadcrumb: 'Eksplorasi Kampus', title: 'Beranda' });
const dashboardSpaces = [{ ...data.find((space) => space.id === 'perpustakaan-pusat'), name: 'Ruang Baca Utama' }, { ...data.find((space) => space.id === 'diskusi-a') }, { ...data.find((space) => space.id === 'student-center'), name: 'Study Lounge' }].filter((space) => space.id);
document.querySelector('#dashboardRecommendations').innerHTML = dashboardSpaces.map((space) => renderStudyCard(space)).join('');
document.querySelector('#dashboardSearchForm')?.addEventListener('submit', (event) => { event.preventDefault(); const params = new URLSearchParams(); for (const [key, value] of new FormData(event.currentTarget)) if (value) params.set(key, value); window.location.href = `results.html?${params}`; });
