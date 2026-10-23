(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = url => { const s = String(url || ''); return /^(https?:\/\/|mailto:|assets\/|\.\/assets\/)/i.test(s) ? escapeHTML(s) : '#'; };
  const tags = items => (items || []).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('');
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const grid = document.getElementById('projects-grid');
  if (grid) {
    const filters = document.getElementById('filters');
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    function draw(category) {
      const chosen = category === 'All' ? projects : projects.filter(p => p.category === category);
      grid.innerHTML = chosen.map((p, i) => `<a class="project-card" href="project.html?slug=${encodeURIComponent(p.slug)}" aria-label="View ${escapeHTML(p.title)}"><div class="card-top"><span class="number">${String(i + 1).padStart(2, '0')} / ${escapeHTML(p.year)}</span><span class="card-category">${escapeHTML(p.category)}</span></div><h3>${escapeHTML(p.title)}</h3><p class="card-subtitle">${escapeHTML(p.subtitle)}</p><p class="card-summary">${escapeHTML(p.summary)}</p><div class="card-bottom"><div class="tags">${tags((p.tags || []).slice(0, 3))}</div><span class="link-arrow" aria-hidden="true">↗</span></div></a>`).join('');
      if (!chosen.length) grid.innerHTML = '<p class="empty">No projects in this category.</p>';
      filters.querySelectorAll('button').forEach(b => {const active = b.dataset.category === category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    }
    filters.innerHTML = categories.map(c => `<button class="filter" type="button" data-category="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join('');
    filters.addEventListener('click', e => { const b=e.target.closest('button[data-category]'); if(b) draw(b.dataset.category); });
    draw('All');
  }
  const root = document.getElementById('project-detail');
  if (root) {
    const slug = new URLSearchParams(location.search).get('slug');
    const p = projects.find(item => item.slug === slug);
    if (!p) { document.title='Project not found — Leo Yang';root.innerHTML='<a class="back" href="index.html#projects">← All projects</a><h1>Project not found</h1><p class="muted">This project may have moved.</p>';return; }
    document.title = `${p.title} — Leo Yang`;
    const linkHTML = (p.links||[]).map(l=>`<a target="_blank" rel="noopener noreferrer" href="${safeUrl(l.url)}">${escapeHTML(l.label)} ↗</a>`).join('');
    const filesHTML = (p.files||[]).map(f=>`<a href="${safeUrl(f.url)}" ${f.download?'download':''}><span>↓</span>${escapeHTML(f.label||f.url)}</a>`).join('');
    const mediaHTML = (p.media||[]).map(m=>{
      let visual='';
      if (m.type==='image') visual=`<img loading="lazy" src="${safeUrl(m.src)}" alt="${escapeHTML(m.alt||m.caption||p.title)}">`;
      if (m.type==='video') visual=`<video controls preload="metadata" src="${safeUrl(m.src)}"></video>`;
      if (m.type==='youtube' && /^https:\/\/www\.youtube-nocookie\.com\/embed\/[\w-]+$/.test(m.src)) visual=`<iframe loading="lazy" src="${escapeHTML(m.src)}" title="${escapeHTML(m.caption||p.title)}" allowfullscreen></iframe>`;
      if (!visual) return '';
      return `<figure class="media-card">${visual}${m.caption?`<figcaption>${escapeHTML(m.caption)}</figcaption>`:''}</figure>`;
    }).join('');
    root.innerHTML = `<a class="back mono" href="index.html#projects">← BACK TO PROJECTS</a><div class="detail-header"><div class="eyebrow">${escapeHTML(p.category)} / ${escapeHTML(p.year)}</div><h1>${escapeHTML(p.title)}</h1><p class="detail-subtitle">${escapeHTML(p.subtitle)}</p><div class="detail-meta tags">${tags(p.tags)}</div></div><div class="detail-columns"><article class="detail-body"><h2>Overview</h2><p>${escapeHTML(p.overview||p.summary)}</p>${p.highlights?.length?`<h2>Engineering notes</h2><ul>${p.highlights.map(h=>`<li>${escapeHTML(h)}</li>`).join('')}</ul>`:''}</article><aside><div class="sidebar-block"><h3>Project details</h3><div class="meta">${escapeHTML(p.category)}<br>${escapeHTML(p.year)}</div></div>${linkHTML?`<div class="sidebar-block"><h3>Links</h3>${linkHTML}</div>`:''}${filesHTML?`<div class="sidebar-block"><h3>Downloads</h3><div class="file-list">${filesHTML}</div></div>`:''}</aside></div>${mediaHTML?`<div class="media-section"><h2 class="media-heading">Media / Documentation</h2><div class="media-grid">${mediaHTML}</div></div>`:''}`;
  }
})();
