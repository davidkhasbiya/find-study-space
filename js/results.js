import { mountSidebar } from '../assets/js/components/sidebar.js';
import { mountNavbar } from '../assets/js/components/navbar.js';
import { renderStudyCard } from './components.js';
import { studySpaces as spaces } from './study-spaces.js';

mountSidebar({ active: 'results.html' });
mountNavbar({ breadcrumb: 'Eksplorasi Kampus', title: 'Hasil Pencarian' });

const query = new URLSearchParams(location.search);
const form = document.querySelector('#resultsFilterForm');
const grid = document.querySelector('#resultsGrid');
const empty = document.querySelector('#emptyState');
const pagination = document.querySelector('#pagination');
const sortControl = document.querySelector('#sortResults');
const pageSize = 3;
const capacityCategories = {
    small: { minimum: 1, maximum: 10, label: '1–10 orang' },
    medium: { minimum: 11, maximum: 30, label: '11–30 orang' },
    large: { minimum: 31, maximum: null, label: '31+ orang' }
};
let currentPage = 1;
const card = (space) => renderStudyCard(space);
function readFilters() {
    const capacityValue = form.elements.capacity.value;
    const capacityRange = capacityCategories[capacityValue] || null;
    const capacityMinimum = Number(capacityValue) || 0;

    return {
        name: form.elements.name.value.trim().toLowerCase(),
        location: form.elements.location.value,
        capacity: capacityRange ? 0 : capacityMinimum,
        capacityRange,
        capacityLabel: capacityRange?.label || (capacityMinimum ? `${capacityMinimum}+` : ''),
        facility: Array.from(form.querySelectorAll('input[name="facility"]:checked'), (input) => input.value)
    };
}

function syncForm() {
    for (const key of ['name', 'location', 'capacity']) {
        if (query.has(key) && form.elements[key]) form.elements[key].value = query.get(key);
    }

    if (query.has('facility')) {
        const facilities = new Set(query.get('facility').split(',').map((value) => value.trim()).filter(Boolean));
        form.querySelectorAll('input[name="facility"]').forEach((input) => {
            input.checked = facilities.has(input.value);
        });
    }
}

function render() {
    const filters = readFilters();
    let filtered = spaces.filter((space) =>
        (!filters.name || space.name.toLowerCase().includes(filters.name)) &&
        (!filters.location || space.location === filters.location) &&
        (!filters.capacityRange || (
            space.capacity >= filters.capacityRange.minimum &&
            (filters.capacityRange.maximum === null || space.capacity <= filters.capacityRange.maximum)
        )) &&
        (!filters.capacity || space.capacity >= filters.capacity) &&
        filters.facility.every((facility) => space.facilities.includes(facility))
    );
    const sort = sortControl.value;
    if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'capacity-low') filtered.sort((a, b) => a.capacity - b.capacity);
    if (sort === 'capacity-high') filtered.sort((a, b) => b.capacity - a.capacity);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    document.querySelector('#resultCount').textContent = `${filtered.length} study space ditemukan`;

    const activeFilters = document.querySelector('#activeFilters');
    activeFilters.replaceChildren();
    const filterValues = [
        ['name', filters.name],
        ['location', filters.location],
        ['capacity', filters.capacityLabel],
        ['facility', filters.facility.join(', ')]
    ];
    for (const [key, value] of filterValues) {
        if (!value) continue;
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.textContent = `${key}: ${value}`;
        activeFilters.append(chip);
    }

    grid.innerHTML = filtered.slice(start, start + pageSize).map(card).join('');
    grid.hidden = filtered.length === 0;
    empty.hidden = filtered.length !== 0;
    pagination.innerHTML = filtered.length
        ? `<button class="page-button" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>${Array.from({ length: totalPages }, (_, index) => `<button class="page-button ${index + 1 === currentPage ? 'is-active' : ''}" data-page="${index + 1}">${index + 1}</button>`).join('')}<button class="page-button" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>`
        : '';
    pagination.querySelectorAll('[data-page]').forEach((button) => button.addEventListener('click', () => {
        currentPage = Number(button.dataset.page);
        render();
    }));
}

function reset() {
    form.reset();
    sortControl.value = 'relevance';
    currentPage = 1;
    history.replaceState(null, '', 'results.html');
    render();
}
syncForm(); render(); form.addEventListener('submit', (event) => { event.preventDefault(); currentPage = 1; render(); }); sortControl.addEventListener('change', () => { currentPage = 1; render(); }); document.querySelector('#resetResults').addEventListener('click', reset); document.querySelector('#emptyReset').addEventListener('click', reset);
