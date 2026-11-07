import { mountSidebar } from '../assets/js/components/sidebar.js';
import { mountNavbar } from '../assets/js/components/navbar.js';

mountSidebar({ active: 'search.html' });
mountNavbar({ breadcrumb: 'Eksplorasi Kampus', title: 'Cari Study Space' });

const form = document.querySelector('#searchPageForm');
form?.addEventListener('submit', (event) => { event.preventDefault(); const params = new URLSearchParams(); const formData = new FormData(form); for (const [key, value] of formData) { if (key === 'facility') { const facilities = params.get('facility'); params.set('facility', facilities ? `${facilities},${value}` : value); } else if (value) params.set(key, value); } window.location.href = `results.html?${params}`; });
document.querySelector('#resetButton')?.addEventListener('click', () => { form.reset(); document.querySelector('#spaceName')?.focus(); });
