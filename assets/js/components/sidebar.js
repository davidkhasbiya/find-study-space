const icon = (body) => `<svg class="sidebar__icon" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
const links = [
  ['dashboard.html', 'Beranda', '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>'],
  ['search.html', 'Cari Study Space', '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>'],
  ['results.html', 'Hasil Pencarian', '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>'],
  ['location.html', 'Informasi Lokasi', '<path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>'],
  ['settings.html', 'Pengaturan', '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>']
];
export function sidebarTemplate(active = '') { return `<aside class="sidebar" data-global-sidebar><a class="sidebar__brand" href="../index.html"><span class="sidebar__mark">FS</span><span>Find Study <b>Space</b></span></a><nav class="sidebar__nav" aria-label="Navigasi utama"><p class="sidebar__label">MENU UTAMA</p>${links.map(([href, label, body]) => `<a class="sidebar__link" href="${href}" ${href === active ? "aria-current=\"page\"" : ''}>${icon(body)}<span>${label}</span></a>`).join('')}</nav><div class="sidebar__bottom"><div class="sidebar__help">${icon('<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.4 2.4 0 1 1 4.2 1.6c-.9.8-1.8 1.1-1.8 2.4"/><path d="M12 16h.01"/>')}<span>Butuh bantuan?</span></div><a class="sidebar__link" href="login.html">${icon('<path d="M10 17l5-5-5-5M15 12H3M21 4v16"/>')}<span>Logout</span></a></div></aside>`; }
export function mountSidebar({ active = '', target = document.body } = {}) { target.insertAdjacentHTML('afterbegin', sidebarTemplate(active)); return target.querySelector('[data-global-sidebar]'); }
