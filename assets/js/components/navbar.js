const mobileViewport = window.matchMedia('(max-width: 767.98px)');

function syncSidebarState(open = false) {
  const sidebar = document.querySelector('[data-global-sidebar]');
  const toggle = document.querySelector('[data-navbar-toggle]');
  const overlay = document.querySelector('[data-sidebar-overlay]');
  const isMobile = mobileViewport.matches;
  const isOpen = isMobile && open;

  sidebar?.classList.toggle('is-open', isOpen);
  sidebar?.setAttribute('aria-hidden', String(isMobile && !isOpen));
  toggle?.setAttribute('aria-expanded', String(isOpen));
  toggle?.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
  overlay?.classList.toggle('is-visible', isOpen);
  document.querySelector('.app-navbar')?.classList.toggle('is-sidebar-open', isOpen);
}

mobileViewport.addEventListener('change', () => syncSidebarState());

export function navbarTemplate({ breadcrumb = 'Beranda', title = 'Beranda' } = {}) {
  return `<header class="app-navbar"><div class="navbar__left"><button class="navbar__toggle" type="button" aria-label="Buka navigasi" aria-expanded="false" aria-controls="globalSidebar" data-navbar-toggle><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><span class="navbar__breadcrumb">${breadcrumb}</span><span class="navbar__separator">/</span><h1 class="navbar__title">${title}</h1></div><span class="navbar__portal">Portal Mahasiswa</span></header>`;
}

export function mountNavbar(options = {}, target = document.querySelector('.main-content')) {
  let navbar = target?.querySelector('.app-navbar') || document.querySelector('.app-navbar');
  if (!navbar && target) {
    target.insertAdjacentHTML('afterbegin', navbarTemplate(options));
    navbar = target.querySelector('.app-navbar');
  }

  const toggle = navbar?.querySelector('[data-navbar-toggle]');
  const overlay = document.querySelector('[data-sidebar-overlay]');
  const closeButton = document.querySelector('[data-sidebar-close]');

  if (toggle) {
    toggle.onclick = () => {
      const sidebar = document.querySelector('[data-global-sidebar]');
      syncSidebarState(!sidebar?.classList.contains('is-open'));
    };
  }
  if (overlay) overlay.onclick = () => syncSidebarState(false);
  if (closeButton) closeButton.onclick = () => syncSidebarState(false);

  syncSidebarState(Boolean(document.querySelector('[data-global-sidebar]')?.classList.contains('is-open')));
}
