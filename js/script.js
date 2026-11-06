document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#spaceList");
  const empty = document.querySelector("#emptyState");
  const form = document.querySelector("#searchForm");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  function renderSpaces(spaces) {
    list.innerHTML = spaces.map(space => `
      <article class="space-card">
        <img src="${space.image}" alt="${space.name}">
        <div class="space-content"><div class="space-title-row"><h3>${space.name}</h3></div>
          <p class="location">⌖ ${space.location}</p><p class="capacity">♙ Kapasitas <b>${space.capacity} orang</b></p>
          <div class="facilities">${space.facilities.map(item => `<span>${item}</span>`).join("")}</div>
          <a class="button detail-link" href="pages/detail.html">Lihat Detail <span>→</span></a>
        </div>
      </article>`).join("");
    empty.hidden = spaces.length !== 0;
  }
  renderSpaces(studySpaces);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const keyword = document.querySelector("#keyword").value.toLowerCase().trim();
    const capacity = document.querySelector("#capacity").value;
    const facility = document.querySelector("#facility").value;
    const results = studySpaces.filter(space => (!keyword || `${space.name} ${space.location}`.toLowerCase().includes(keyword)) && (!capacity || space.category === capacity) && (!facility || space.facilities.includes(facility)));
    renderSpaces(results);
    document.querySelector("#recommendations").scrollIntoView({ behavior: "smooth" });
  });
  menuButton.addEventListener("click", () => { const open = navLinks.classList.toggle("open"); menuButton.setAttribute("aria-expanded", open); });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
});
