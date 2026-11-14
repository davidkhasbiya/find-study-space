const mobileViewport = window.matchMedia('(max-width: 767.98px)');
const tabletViewport = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
const sidebarPreferenceKey = 'findStudySpaceSidebarMode';

function readSidebarPreference() {
  try {
    const preference = window.localStorage.getItem(sidebarPreferenceKey);
    if (preference === 'collapsed') return true;
    if (preference === 'expanded') return false;
  } catch (error) {
    console.warn('Preferensi sidebar tidak dapat dibaca.', error);
  }
  return null;
}

let savedCollapsedPreference = readSidebarPreference();

function syncCollapsedState() {
  const sidebar = document.querySelector('[data-global-sidebar]');
  const toggle = document.querySelector('[data-sidebar-collapse-toggle]');
  const isCollapsed = !mobileViewport.matches && (savedCollapsedPreference ?? tabletViewport.matches);

  sidebar?.classList.toggle('is-collapsed', isCollapsed);
  document.body.dataset.sidebarCollapsed = String(isCollapsed);
  toggle?.setAttribute('aria-expanded', String(!isCollapsed));
  toggle?.setAttribute('aria-label', isCollapsed ? 'Perluas sidebar' : 'Perkecil sidebar');

  if (!isCollapsed) {
    sidebar?.querySelectorAll('[aria-describedby="globalSidebarTooltip"]')
      .forEach((link) => link.removeAttribute('aria-describedby'));
    document.querySelector('[data-sidebar-tooltip-element]')?.remove();
  }
}

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
  syncCollapsedState();
}

mobileViewport.addEventListener('change', () => syncSidebarState());
tabletViewport.addEventListener('change', () => syncCollapsedState());

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
  const collapseToggle = document.querySelector('[data-sidebar-collapse-toggle]');
  const overlay = document.querySelector('[data-sidebar-overlay]');
  const closeButton = document.querySelector('[data-sidebar-close]');

  if (collapseToggle) {
    collapseToggle.onclick = () => {
      const sidebar = document.querySelector('[data-global-sidebar]');
      const isCollapsed = !sidebar?.classList.contains('is-collapsed');
      savedCollapsedPreference = isCollapsed;

      try {
        window.localStorage.setItem(sidebarPreferenceKey, isCollapsed ? 'collapsed' : 'expanded');
      } catch (error) {
        console.warn('Preferensi sidebar tidak dapat disimpan.', error);
      }

      syncCollapsedState();
    };
  }

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
