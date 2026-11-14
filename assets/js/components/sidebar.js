const icon = (body) => `<svg class="sidebar__icon" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
const links = [
  ['dashboard.html', 'Beranda', '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>'],
  ['search.html', 'Cari Study Space', '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>'],
  ['results.html', 'Hasil Pencarian', '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>'],
  ['location.html', 'Informasi Lokasi', '<path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>'],
  ['settings.html', 'Pengaturan', '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>']
];

function bindSidebarTooltips(sidebar) {
  if (sidebar.dataset.tooltipsBound === 'true') return;
  sidebar.dataset.tooltipsBound = 'true';

  let activeLink = null;

  const hideTooltip = () => {
    if (activeLink) activeLink.removeAttribute('aria-describedby');
    activeLink = null;
    document.querySelector('[data-sidebar-tooltip-element]')?.remove();
  };

  const updateTooltip = () => {
    if (!activeLink) return;

    const tooltip = document.querySelector('[data-sidebar-tooltip-element]');
    if (!tooltip) return;

    const linkRect = activeLink.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const top = Math.min(
      Math.max(linkRect.top + linkRect.height / 2, tooltipRect.height / 2 + 8),
      window.innerHeight - tooltipRect.height / 2 - 8
    );
    const left = Math.min(linkRect.right + 8, window.innerWidth - tooltipRect.width - 8);

    tooltip.style.left = `${Math.max(8, left)}px`;
    tooltip.style.top = `${top}px`;
  };

  const showTooltip = (link) => {
    if (!sidebar.classList.contains('is-collapsed')) {
      hideTooltip();
      return;
    }

    let tooltip = document.querySelector('[data-sidebar-tooltip-element]');
    if (!tooltip) {
      tooltip = document.createElement('span');
      tooltip.className = 'sidebar__tooltip';
      tooltip.id = 'globalSidebarTooltip';
      tooltip.setAttribute('role', 'tooltip');
      tooltip.dataset.sidebarTooltipElement = '';
      document.body.append(tooltip);
    }

    if (activeLink && activeLink !== link) activeLink.removeAttribute('aria-describedby');
    activeLink = link;
    tooltip.textContent = link.dataset.sidebarTooltip;
    link.setAttribute('aria-describedby', tooltip.id);
    updateTooltip();
  };

  sidebar.addEventListener('pointerover', (event) => {
    const link = event.target.closest('[data-sidebar-tooltip]');
    if (link && sidebar.contains(link) && !link.contains(event.relatedTarget)) showTooltip(link);
  });
  sidebar.addEventListener('pointerout', (event) => {
    const link = event.target.closest('[data-sidebar-tooltip]');
    if (link && !link.contains(event.relatedTarget) && document.activeElement !== link) hideTooltip();
  });
  sidebar.addEventListener('focusin', (event) => {
    const link = event.target.closest('[data-sidebar-tooltip]');
    if (link && sidebar.contains(link)) showTooltip(link);
  });
  sidebar.addEventListener('focusout', (event) => {
    const link = event.target.closest('[data-sidebar-tooltip]');
    if (link && !link.matches(':hover')) hideTooltip();
  });
  sidebar.addEventListener('scroll', updateTooltip);
  sidebar.addEventListener('transitionend', updateTooltip);
  sidebar.addEventListener('pointerleave', () => {
    if (activeLink && document.activeElement !== activeLink) hideTooltip();
  });
}

export function sidebarTemplate(active = '') {
  return `<button class="sidebar__overlay" type="button" aria-label="Tutup navigasi" data-sidebar-overlay></button><aside class="sidebar" id="globalSidebar" data-global-sidebar aria-hidden="true"><button class="sidebar__collapse" type="button" aria-label="Perkecil sidebar" aria-expanded="true" aria-controls="globalSidebar" data-sidebar-collapse-toggle><svg class="sidebar__collapse-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button><a class="sidebar__brand" href="../index.html"><span class="sidebar__mark">FS</span><span class="sidebar__brand-name">Find Study <b>Space</b></span></a><nav class="sidebar__nav" aria-label="Navigasi utama"><p class="sidebar__label">MENU UTAMA</p>${links.map(([href, label, body]) => `<a class="sidebar__link" href="${href}" aria-label="${label}" data-sidebar-tooltip="${label}" ${href === active ? "aria-current=\"page\"" : ''}>${icon(body)}<span class="sidebar__link-label">${label}</span></a>`).join('')}</nav><div class="sidebar__bottom"><div class="sidebar__help">${icon('<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.4 2.4 0 1 1 4.2 1.6c-.9.8-1.8 1.1-1.8 2.4"/><path d="M12 16h.01"/>')}<span class="sidebar__help-label">Butuh bantuan?</span></div><a class="sidebar__link" href="login.html" aria-label="Logout" data-sidebar-tooltip="Logout">${icon('<path d="M10 17l5-5-5-5M15 12H3M21 4v16"/>')}<span class="sidebar__link-label">Logout</span></a></div></aside>`;
}

export function mountSidebar({ active = '', target = document.body } = {}) {
  let sidebar = target.querySelector('[data-global-sidebar]');

  if (!sidebar) {
    target.insertAdjacentHTML('afterbegin', sidebarTemplate(active));
    sidebar = target.querySelector('[data-global-sidebar]');
  }

  if (sidebar) bindSidebarTooltips(sidebar);
  return sidebar;
}
