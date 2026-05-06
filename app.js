const state = {
  filter: 'all',
  search: '',
  colors: {},
  elements: [],
  nodes: [],
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildLegend() {
  const legend = $('#legend');
  legend.innerHTML = Object.values(state.colors).map((c) => `
    <div class="legend-item">
      <div class="legend-color" style="background:${c.bg}; border-color:${c.border};"></div>
      <span>${escapeHtml(c.label)}</span>
    </div>
  `).join('');
}

function buildTable() {
  const table = $('#table');
  const grid = {};
  state.elements.forEach((el) => { grid[`${el.row}-${el.col}`] = el; });

  const frag = document.createDocumentFragment();
  state.nodes = [];

  for (let row = 1; row <= 7; row++) {
    for (let col = 1; col <= 18; col++) {
      const data = grid[`${row}-${col}`];
      const div = document.createElement('div');
      if (!data) {
        div.className = 'element empty';
        frag.appendChild(div);
        continue;
      }
      const color = state.colors[data.cat];
      div.className = 'element';
      div.tabIndex = 0;
      div.role = 'button';
      div.setAttribute('aria-label', `${data.name} — ${color.label}`);
      div.style.background = color.bg;
      div.style.borderColor = color.border;
      div.style.color = color.text;
      div.dataset.category = data.cat;
      div.dataset.search = `${data.sym} ${data.name} ${data.desc}`.toLowerCase();
      div.innerHTML = `
        <div class="element-number">${data.num}</div>
        <div class="element-symbol">${escapeHtml(data.sym)}</div>
        <div class="element-name">${escapeHtml(data.name)}</div>
      `;
      div.addEventListener('click', () => openModal(data, color));
      div.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(data, color);
        }
      });
      frag.appendChild(div);
      state.nodes.push(div);
    }
  }

  table.innerHTML = '';
  table.appendChild(frag);
}

function applyFilters() {
  const q = state.search.trim().toLowerCase();
  state.nodes.forEach((node) => {
    const matchCat = state.filter === 'all' || node.dataset.category === state.filter;
    const matchSearch = !q || node.dataset.search.includes(q);
    node.classList.toggle('dim', !(matchCat && matchSearch));
  });
}

function openModal(data, color) {
  const refsHtml = (data.refs || []).map((r) => `
    <li>
      <span class="ref-type">${escapeHtml(r.type)}</span>
      <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.title)}</a>
    </li>
  `).join('');

  const refsBlock = refsHtml
    ? `<div class="modal-refs"><h3>Dig deeper</h3><ul>${refsHtml}</ul></div>`
    : '';

  $('#modal-body').innerHTML = `
    <div class="modal-header">
      <div class="modal-symbol-box" style="background:${color.bg}; border-color:${color.border}; color:${color.text};">
        <div class="modal-num">${data.num}</div>
        <div class="modal-sym">${escapeHtml(data.sym)}</div>
      </div>
      <div class="modal-title">
        <h2>${escapeHtml(data.name)}</h2>
        <span class="category-badge" style="background:${color.bg}; color:${color.text}; border-color:${color.border};">${escapeHtml(color.label)}</span>
      </div>
    </div>
    <div class="modal-body">${escapeHtml(data.desc)}</div>
    ${refsBlock}
  `;
  $('#modal').classList.add('active');
}

function closeModal() {
  $('#modal').classList.remove('active');
}

function bindControls() {
  $('#search').addEventListener('input', (e) => {
    state.search = e.target.value;
    applyFilters();
  });

  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      applyFilters();
    });
  });

  $('#modal-close').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

async function init() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    state.colors = data.colors;
    state.elements = data.elements;
    buildLegend();
    buildTable();
    bindControls();
    applyFilters();
  } catch (err) {
    $('#table').innerHTML = `<p style="padding:2rem;color:#c00">Failed to load data: ${escapeHtml(err.message)}. Serve via HTTP (e.g. <code>python3 -m http.server</code>).</p>`;
  }
}

init();
