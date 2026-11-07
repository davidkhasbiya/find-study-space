import { mountSidebar } from '../assets/js/components/sidebar.js';
import { mountNavbar } from '../assets/js/components/navbar.js';
import { renderStudyCard } from './components.js';
import { studySpaces } from './study-spaces.js';

const buildingParam = new URLSearchParams(location.search).get('building');
if (buildingParam && !new URLSearchParams(location.search).get('location')) history.replaceState(null, '', `location.html?location=${encodeURIComponent(buildingParam)}`);

mountSidebar({ active: 'location.html' });
mountNavbar({ breadcrumb: 'Eksplorasi Kampus / Informasi Lokasi', title: 'Informasi Lokasi' });

const params = new URLSearchParams(location.search); const requested = params.get('id') || params.get('location'); const buildings = [...new Set(studySpaces.map((space) => space.location))]; const selectedBuilding = requested ? buildings.find((building) => building.toLowerCase() === requested.toLowerCase()) || studySpaces.find((space) => space.id === requested)?.location : 'Perpustakaan Pusat'; const spaces = selectedBuilding ? studySpaces.filter((space) => space.location === selectedBuilding) : [];
const empty = document.querySelector('#locationEmpty'); const content = document.querySelector('.location-content');
if (!selectedBuilding || !spaces.length) { document.querySelector('.location-layout').hidden = true; document.querySelector('.access-card').hidden = true; document.querySelector('.building-spaces').hidden = true; empty.hidden = false; } else { document.querySelector('#buildingName').textContent = selectedBuilding; document.querySelector('#buildingLocation').textContent = 'Area kampus utama'; document.querySelector('#buildingHours').textContent = '07.00–22.00'; document.querySelector('#spaceCount').textContent = `${spaces.length} ruang`; document.querySelector('#spaceCountLabel').textContent = `${spaces.length} ruang ditemukan`; document.querySelector('#buildingDescription').textContent = `Informasi ilustrasi mengenai ${selectedBuilding} dan study space yang tersedia di dalamnya.`; document.querySelector('#accessBuilding').textContent = selectedBuilding; document.querySelector('#accessFloor').textContent = spaces.map((space) => space.floor).filter((floor, index, all) => all.indexOf(floor) === index).join(' dan '); const markerMap = { 'Perpustakaan Pusat': 'markerOne', 'Gedung Fakultas': 'markerTwo', 'Student Center': 'markerThree' }; document.getElementById(markerMap[selectedBuilding])?.classList.add('is-selected'); document.querySelector('#locationSpaces').innerHTML = spaces.map((space) => renderStudyCard(space, 'detail.html')).join(''); }
