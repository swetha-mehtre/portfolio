const D = PORTFOLIO_DATA;

/* ---------- Reveal-on-scroll observer (defined early; used by dynamically rendered sections too) ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

/* ---------- Typed name effect ---------- */
(function typeName() {
  const el = document.getElementById('typedName');
  const text = D.name;
  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  function tick() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(tick, 110);
    else el.innerHTML += '<span class="type-cursor">|</span>';
  }
  tick();
})();

/* ---------- Avatar initials ---------- */
document.getElementById('avatar').innerHTML = `<span>${D.initials || D.name[0]}</span>`;

/* ---------- Rotating tagline ---------- */
(function rotateTagline() {
  const el = document.getElementById('rotatingTagline');
  const lines = D.taglines && D.taglines.length ? D.taglines : [D.tagline];
  let i = 0;
  function show(text) {
    el.style.opacity = 0;
    setTimeout(() => { el.textContent = text; el.style.opacity = 1; }, 250);
  }
  el.style.transition = 'opacity .25s ease';
  show(lines[0]);
  if (lines.length > 1) {
    setInterval(() => { i = (i + 1) % lines.length; show(lines[i]); }, 3000);
  }
})();

/* ---------- Particle field ---------- */
(function particles() {
  const canvas = document.getElementById('fx');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particlesArr;
  const COLORS = ['#7dd3fc', '#a78bfa', '#f472b6', '#34d399'];

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  function init() {
    resize();
    const count = Math.min(70, Math.floor((w * h) / 18000));
    particlesArr = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }
  function step() {
    ctx.clearRect(0, 0, w, h);
    particlesArr.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.5;
      ctx.fill();
    });
    // connective lines
    for (let i = 0; i < particlesArr.length; i++) {
      for (let j = i + 1; j < particlesArr.length; j++) {
        const a = particlesArr[i], b = particlesArr[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(125,211,252,' + (0.12 * (1 - d / 110)) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }
  init();
  window.addEventListener('resize', init);
  requestAnimationFrame(step);
})();

/* ---------- Hero stats ---------- */
(function heroStats() {
  const stats = [
    { n: D.projects.length, l: 'Projects' },
    { n: '97.6%', l: 'ML Accuracy (SMART AI)' },
    { n: '8.36', l: 'CGPA' },
    { n: '🥉', l: 'Kaggle Medal' },
  ];
  document.getElementById('heroStats').innerHTML = stats.map(s =>
    `<div class="stat"><div class="n">${s.n}</div><div class="l">${s.l}</div></div>`
  ).join('');
})();

/* ---------- About ---------- */
document.getElementById('summaryText').textContent = D.summary;
document.getElementById('skillsBox').innerHTML = Object.entries(D.skills).map(([group, items]) => `
  <div class="skills-group">
    <h4>${group}</h4>
    <div class="chip-row">${items.map(i => `<span class="chip">${i}</span>`).join('')}</div>
  </div>
`).join('');

/* ---------- Experience timeline ---------- */
document.getElementById('timeline').innerHTML = D.experience.map(e => `
  <div class="tl-item reveal">
    <h3>${e.role}</h3>
    <div class="org">${e.org}</div>
    <div class="period">${e.period}</div>
    <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
  </div>
`).join('');

document.getElementById('eduCard').innerHTML = `
  <h3>${D.education.degree}</h3>
  <div class="org">${D.education.school}</div>
  <div class="meta">${D.education.period} · ${D.education.detail}</div>
`;

/* ---------- Projects ---------- */
const categories = ['All', ...new Set(D.projects.map(p => p.category))];
let activeCategory = 'All';
let searchTerm = '';

document.getElementById('filterChips').innerHTML = categories.map(c =>
  `<button class="filter-chip${c === 'All' ? ' active' : ''}" data-cat="${c}">${c}</button>`
).join('');

function projectCardHtml(p, idx) {
  const img = p.image || `https://opengraph.githubassets.com/1/swetha-mehtre/${p.name}`;
  return `
    <div class="tilt-outer" style="animation-delay:${idx * 0.06}s">
      <div class="project-card" data-name="${p.name}">
        <div class="card-shine"></div>
        ${p.featured ? '<div class="featured-ribbon">★ Featured</div>' : ''}
        <a class="thumb" href="${p.liveUrl || p.url}" target="_blank" rel="noopener">
          <div class="thumb-fallback">${p.title.slice(0,2).toUpperCase()}</div>
          <img src="${img}" alt="${p.title} preview" loading="lazy"
               onerror="this.style.display='none'" />
          <div class="thumb-overlay">${p.liveUrl ? 'Open Live Demo ↗' : 'View on GitHub ↗'}</div>
        </a>
        <div class="card-body">
          <span class="cat-tag">${p.category}</span>
          ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tech-row">${p.tech.slice(0, 5).map(t => `<span>${t}</span>`).join('')}</div>
          <div class="card-links">
            ${p.liveUrl ? `<a class="card-link live" href="${p.liveUrl}" target="_blank" rel="noopener">▸ Live Demo</a>` : ''}
            <a class="card-link" href="${p.url}" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function wireCardTilt(root) {
  root.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-py * 18}deg) rotateY(${px * 18}deg) translateZ(20px) scale(1.06)`;
      const shine = card.querySelector('.card-shine');
      shine.style.background = `radial-gradient(circle at ${(px+0.5)*100}% ${(py+0.5)*100}%, rgba(255,255,255,0.25), transparent 55%)`;
      shine.style.opacity = 1;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.querySelector('.card-shine').style.opacity = 0;
    });
  });
}

function renderProjects() {
  const container = document.getElementById('projectRows');
  const filtered = D.projects.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = !searchTerm ||
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.tech.some(t => t.toLowerCase().includes(searchTerm));
    return matchesCat && matchesSearch;
  });

  document.getElementById('emptyState').hidden = filtered.length > 0;

  // Netflix-style: one horizontally-scrolling row per category, featured projects surfaced first within each.
  const byCategory = {};
  filtered.forEach(p => { (byCategory[p.category] = byCategory[p.category] || []).push(p); });
  Object.values(byCategory).forEach(list => list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)));

  container.innerHTML = Object.entries(byCategory).map(([cat, list]) => `
    <div class="category-row">
      <h3 class="category-row-title reveal"><span class="dot"></span> ${cat}</h3>
      <div class="row-scroll">${list.map((p, idx) => projectCardHtml(p, idx)).join('')}</div>
    </div>
  `).join('');

  wireCardTilt(container);
  container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

document.getElementById('filterChips').addEventListener('click', e => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === btn));
  renderProjects();
});

document.getElementById('projectSearch').addEventListener('input', e => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderProjects();
});

renderProjects();

/* ---------- Highlights: publications + certifications + achievements, Netflix-row style ---------- */
// Each card links to its own verify/DOI/credential link if one exists, otherwise falls back to the LinkedIn profile.
const highlightItems = [
  ...D.publications.map(p => ({
    kind: 'Publication', icon: '📄', title: p.title, sub: `${p.venue} — ${p.detail}`,
    link: p.verifyUrl || D.linkedin, linkLabel: p.verifyUrl ? 'View publication ↗' : 'View on LinkedIn ↗', image: p.image,
  })),
  ...D.certifications.map(c => ({
    kind: 'Certification', icon: '🎓', title: c.name, sub: `${c.issuer} · ${c.date}`,
    link: c.verifyUrl || D.linkedin, linkLabel: c.verifyUrl ? 'Verify ↗' : 'View on LinkedIn ↗', image: c.image,
  })),
  ...D.achievements.map(a => ({
    kind: 'Achievement', icon: '🏆', title: a.split('—')[0].trim(), sub: a.split('—').slice(1).join('—').trim() || a,
    link: D.linkedin, linkLabel: 'View on LinkedIn ↗',
  })),
];

document.getElementById('highlightRow').innerHTML = highlightItems.map(h => `
  <a class="hl-card reveal" href="${h.link || '#'}" target="_blank" rel="noopener">
    ${h.image ? `<img src="${h.image}" alt="${h.title}" style="width:100%;border-radius:8px;" loading="lazy"/>` : `<div class="hl-icon">${h.icon}</div>`}
    <div class="hl-kind">${h.kind}</div>
    <h4>${h.title}</h4>
    <p>${h.sub}</p>
    <span class="hl-link">${h.linkLabel}</span>
  </a>
`).join('');
document.querySelectorAll('#highlightRow .reveal').forEach(el => revealObserver.observe(el));

/* ---------- Contact ---------- */
const contacts = [
  { label: '✉ Email', href: `mailto:${D.email}` },
  { label: '🐙 GitHub', href: D.github },
];
if (D.linkedin) contacts.push({ label: '💼 LinkedIn', href: D.linkedin });
if (D.phone) contacts.push({ label: '📞 ' + D.phone, href: `tel:${D.phone.replace(/\s/g, '')}` });
document.getElementById('contactLinks').innerHTML = contacts.map(c =>
  `<a href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`
).join('');

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Nav scroll shadow ---------- */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- Reveal on scroll (initial static elements; dynamic sections observe themselves on render) ---------- */
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
// Re-observe dynamically added reveal elements (timeline, pubs, certs, achievements)
setTimeout(() => document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el)), 50);

/* ---------- Cursor glow ---------- */
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* ---------- Theme toggle ---------- */
const themeBtn = document.getElementById('themeToggle');
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);
themeBtn.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});
