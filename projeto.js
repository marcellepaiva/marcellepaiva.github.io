// =============================================
//   PROJETO DETAIL — projeto.js
//   Lê ?id=N da URL e popula a página com
//   os dados do array PROJECTS (script.js)
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  initThemeProj();
  initNavProj();
  initBackTop();
  loadProject();
  initLightbox();
});

/* ---------- THEME (replica do script.js p/ esta página) ---------- */
function initThemeProj() {
  const saved = localStorage.getItem("theme") || "dark";
  applyThemeProj(saved);
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyThemeProj(current === "dark" ? "light" : "dark");
  });
}
function applyThemeProj(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  document.getElementById("theme-icon").textContent = t === "dark" ? "☀️" : "🌙";
}

/* ---------- NAV ---------- */
function initNavProj() {
  const header   = document.querySelector("header");
  const hamburger = document.getElementById("nav-hamburger");
  const mobileMenu = document.getElementById("nav-mobile");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 20);
  });

  hamburger?.addEventListener("click", () => mobileMenu?.classList.toggle("open"));
  document.querySelectorAll(".nav-mobile a").forEach(a => {
    a.addEventListener("click", () => mobileMenu?.classList.remove("open"));
  });
}

function initBackTop() {
  document.getElementById("back-top")?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* ---------- LOAD PROJECT ---------- */
function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const project = typeof PROJECTS !== "undefined"
    ? PROJECTS.find(p => p.id === id)
    : null;

  if (!project) {
    // projeto não encontrado → redireciona ao portfólio
    document.getElementById("proj-title").textContent = "Projeto não encontrado";
    document.getElementById("proj-tagline").textContent = "Retorne ao portfólio e tente novamente.";
    return;
  }

  renderCover(project);
  renderHeroImage(project);      // imagem fullwidth hero
  renderKeyInfo(project);        // Sobre / Problema / Solução
  renderKeyScreens(project);     // 3 telas principais (layout 1+2)
  renderImpact(project);
  renderResults(project);
  renderOverview(project);
  renderProcess(project);
  renderLearnings(project);
  renderFooterRow(project);
  renderNavOthers(project);
  updatePageTitle(project);
  initScrollFadeProj();
}

/* 1. COVER */
function renderCover(p) {
  document.getElementById("proj-title").textContent    = p.title;
  document.getElementById("proj-tagline").textContent  = p.tagline;
  document.title = `${p.title} — Marcelle Paiva`;

  // Ícone ao lado do título (lado direito)
  if (p.projectIcon) {
    const titleEl = document.getElementById("proj-title");
    
    // Cria um wrapper para não quebrar o layout do container pai
    const titleRow = document.createElement("div");
    titleRow.className = "proj-title-row";
    
    const icon = document.createElement("img");
    icon.src = p.projectIcon;
    icon.alt = `${p.title} icon`;
    icon.className = "proj-cover-icon";
    
    // Coloca o wrapper onde o título estava, move o título para dentro e adiciona o ícone
    titleEl.parentNode.insertBefore(titleRow, titleEl);
    titleRow.appendChild(titleEl);
    titleRow.appendChild(icon);
  }
}

/* 1b. HERO IMAGE — imagem fullwidth de destaque */
function renderHeroImage(p) {
  // Se o projeto tem ícone próprio, oculta o hero
  if (p.projectIcon) {
    const section = document.getElementById("proj-hero-section");
    if (section) section.style.display = "none";
    return;
  }
  const img = document.getElementById("proj-hero-img");
  if (!img) return;
  const src = p.heroImage || p.coverImage || "";
  if (!src) {
    const section = document.getElementById("proj-hero-section");
    if (section) section.style.display = "none";
    return;
  }
  img.src = src;
  img.alt = `Hero — ${p.title}`;
  const isMobile = p.category && p.category.toLowerCase().includes("mobile");
  if (isMobile) img.closest(".proj-hero-img-wrap").classList.add("proj-hero-mobile");
}

/* 1c. KEY INFO — Sobre / Problema / Solução */
function renderKeyInfo(p) {
  // Sobre: versão curta do impact/desc
  const sobre = p.desc || p.impact || "";
  // Problema: primeira frase ou frase principal do problem
  const problemaFull = p.problem || "";
  const problemaCurto = problemaFull.split(".")[0] + ".";
  // Solução: primeira frase do solutionText ou objective
  const solucaoFull = p.solutionText || p.objective || "";
  const solucaoCurta = solucaoFull.split(".").slice(0, 2).join(".") + ".";

  setText("proj-key-sobre",   sobre);
  setText("proj-key-problema", problemaCurto.length > 10 ? problemaCurto : problemaFull);
  setText("proj-key-solucao",  solucaoCurta.length > 10 ? solucaoCurta  : solucaoFull);
}

/* 1d. KEY SCREENS — 3 telas principais (layout 1 grande + 2 menores) */
function renderKeyScreens(p) {
  const container = document.getElementById("proj-screens-layout");
  if (!container) return;

  const screens = p.keyScreens || [];
  if (!screens.length) {
    const section = document.getElementById("proj-key-screens-section");
    if (section) section.style.display = "none";
    return;
  }

  // Detecta se projeto é mobile (telas portrait)
  const isMobile = p.category && p.category.toLowerCase().includes("mobile");

  const [primary, secondary, tertiary] = screens;

  container.innerHTML = `
    <div class="screens-primary-wrap">
      <div class="screen-item screen-primary" onclick="openLightboxNav(0)">
        <img src="${primary.src}" alt="${primary.label}" loading="lazy" class="${isMobile ? 'screen-mobile' : 'screen-desktop'}" />
        <div class="screen-caption">${primary.label}</div>
      </div>
    </div>
    ${ (secondary || tertiary) ? `
    <div class="screens-secondary-row">
      ${ secondary ? `
      <div class="screen-item screen-secondary" onclick="openLightboxNav(1)">
        <img src="${secondary.src}" alt="${secondary.label}" loading="lazy" class="${isMobile ? 'screen-mobile' : 'screen-desktop'}" />
        <div class="screen-caption">${secondary.label}</div>
      </div>` : '' }
      ${ tertiary ? `
      <div class="screen-item screen-tertiary" onclick="openLightboxNav(2)">
        <img src="${tertiary.src}" alt="${tertiary.label}" loading="lazy" class="${isMobile ? 'screen-mobile' : 'screen-desktop'}" />
        <div class="screen-caption">${tertiary.label}</div>
      </div>` : '' }
    </div>` : '' }
  `;

  // Alimenta o lightbox com as keyScreens
  window._galleryImages = screens.map(s => s.src);
}


/* 2. IMPACT */
function renderImpact(p) {
  document.getElementById("proj-impact").textContent =
    p.impact || p.result || "";

  const metricsWrap = document.getElementById("proj-metrics");
  if (p.metrics && p.metrics.length) {
    metricsWrap.innerHTML = p.metrics.map(m => `
      <div class="impact-metric fade-in">
        <span class="impact-metric-num">${m.num}</span>
        <span class="impact-metric-label">${m.label}</span>
      </div>
    `).join("");
  }

  const figmaTopWrap = document.getElementById("proj-figma-top");
  if (figmaTopWrap) {
    if ((p.figmaLink && p.figmaLink !== "#") || (p.figjamLink && p.figjamLink !== "#")) {
      figmaTopWrap.style.display = "flex";
      figmaTopWrap.style.flexDirection = "column"; // Organiza os botões em coluna se tiver mais de um
      figmaTopWrap.style.gap = "8px";
      
      let html = `<span class="figma-label">🔗 LINKS EXTERNOS</span><div style="display:flex; gap:12px; flex-wrap:wrap;">`;
      
      if (p.figmaLink && p.figmaLink !== "#") {
        html += `<a href="${p.figmaLink}" target="_blank" class="btn btn-primary">Ver protótipo no Figma ↗</a>`;
      }
      
      if (p.figjamLink && p.figjamLink !== "#") {
        html += `<a href="${p.figjamLink}" target="_blank" class="btn btn-primary">Pesquisa e Descoberta no FigJam ↗</a>`;
      }
      
      html += `</div>`;
      figmaTopWrap.innerHTML = html;
    } else {
      figmaTopWrap.style.display = "none";
    }
  }
}

/* 3/4/5. OVERVIEW */
function renderOverview(p) {
  setText("proj-context",   p.context   || p.desc   || "");
  setText("proj-problem",   p.problem   || "");
  setText("proj-objective", p.objective || "");
}

/* 6. PROCESS */
function renderProcess(p) {
  const container = document.getElementById("proj-steps");
  const steps = p.processSteps || buildDefaultSteps(p);

  container.innerHTML = steps.map((step, i) => `
    <div class="process-step fade-in" style="transition-delay:${i * 0.08}s">
      <div class="step-number">${String(i + 1).padStart(2, "0")}</div>
      <div class="step-content">
        <h3 class="step-title">${step.icon ? step.icon + " " : ""}${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
        ${step.images && step.images.length
          ? `<div class="step-images${step.images.some(i => i.fullwidth) ? ' step-images--fullwidth' : ''}">${step.images.map(img =>
              img.src
                ? `<div class="step-img-wrap${img.landscape ? ' step-img-wrap--landscape' : ''}${img.fullwidth ? ' step-img-wrap--fullwidth' : ''}" onclick="openLightbox('${img.src}')">
                     <img src="${img.src}" alt="${img.label || ''}" loading="lazy">
                     <div class="solution-img-caption">${img.label || ''}</div>
                   </div>`
                : `<div class="step-img-wrap">
                     <div class="step-img-placeholder">
                       <span>${img.emoji || '🖼️'}</span>
                       <p>${img.label || 'Imagem em breve'}</p>
                     </div>
                   </div>`
            ).join('')}</div>`
          : ''}
      </div>
    </div>
  `).join("");
}

/* SOLUTION — renderiza o carrossel de telas dentro do hero cover */
function renderSolution(p) {
  const coverSolution = document.getElementById("proj-cover-solution");
  if (!coverSolution) return;

  const images = p.solutionImages || [];
  const validImgs = images.filter(img => img.src);

  // Track src list for lightbox navigation
  window._galleryImages = validImgs.map(img => img.src);

  if (!validImgs.length) {
    coverSolution.innerHTML = placeholderHtml(p.coverEmoji, "Telas em breve");
    return;
  }

  // Build a horizontal scrollable gallery (mesmo estilo da solution-gallery)
  const galleryEl = document.createElement("div");
  galleryEl.className = "solution-gallery";
  galleryEl.id = "proj-solution-gallery";

  galleryEl.innerHTML = validImgs.map((img, idx) =>
    `<div class="solution-img-wrap" data-idx="${idx}" onclick="openLightboxNav(${idx})">
       <img src="${img.src}" alt="${img.label || p.title}" loading="lazy">
       <div class="solution-img-caption">${img.label || ""}</div>
     </div>`
  ).join("");

  // Outer wrapper com fade nas bordas
  const outer = document.createElement("div");
  outer.className = "solution-gallery-outer";
  outer.appendChild(galleryEl);

  // Scroll hint
  if (validImgs.length > 1) {
    const hint = document.createElement("p");
    hint.className = "solution-scroll-hint";
    hint.textContent = "deslize para ver mais →";
    outer.appendChild(hint);
    galleryEl.addEventListener("scroll", () => hint.style.opacity = "0", { once: true });
  }

  coverSolution.innerHTML = "";
  coverSolution.appendChild(outer);
}

/* 8. RESULTS */
function renderResults(p) {
  const list = document.getElementById("proj-results-list");
  const items = p.resultItems || buildDefaultResults(p);

  list.innerHTML = items.map(item => `
    <div class="result-item fade-in">
      <div class="result-icon">${item.icon || "✅"}</div>
      <p class="result-text">${item.text}</p>
    </div>
  `).join("");
}

/* 8b. LEARNINGS */
function renderLearnings(p) {
  if (!p.learnings || !p.learnings.length) return;

  const section  = document.getElementById("proj-learnings-section");
  const divider  = document.getElementById("proj-learnings-divider");
  const list     = document.getElementById("proj-learnings-list");

  section.style.display  = "";
  divider.style.display  = "";

  list.innerHTML = p.learnings.map(item => `
    <div class="learning-item fade-in">
      <span class="learning-icon">${item.icon || "💡"}</span>
      <p class="learning-text">${item.text}</p>
    </div>
  `).join("");
}

/* 9 + 10. TOOLS + CTA */
function renderFooterRow(p) {
  const toolsWrap = document.getElementById("proj-tools");
  toolsWrap.innerHTML = (p.tools || []).map(t =>
    `<span class="proj-tool">${t}</span>`
  ).join("");

  const ctaWrap = document.getElementById("proj-cta-wrap");
  let html = "";
  
  if ((p.figmaLink && p.figmaLink !== "#") || (p.figjamLink && p.figjamLink !== "#")) {
    html += `<span class="proj-cta-label">🔗 LINKS EXTERNOS</span>`;
    html += `<div style="display:flex; gap:12px; flex-wrap:wrap; justify-content: flex-end;">`;
    
    if (p.figmaLink && p.figmaLink !== "#") {
      html += `
        <a href="${p.figmaLink}" target="_blank" rel="noopener" class="btn btn-primary" id="btn-figma-${p.id}">
          Ver protótipo no Figma ↗
        </a>
      `;
    }
    
    if (p.figjamLink && p.figjamLink !== "#") {
      html += `
        <a href="${p.figjamLink}" target="_blank" rel="noopener" class="btn btn-primary" id="btn-figjam-${p.id}">
          Pesquisa e Descoberta no FigJam ↗
        </a>
      `;
    }
    
    html += `</div>`;
  }
  
  ctaWrap.innerHTML = html;
}

/* NAVIGATION (outros projetos) */
function renderNavOthers(current) {
  const nav = document.getElementById("proj-nav-others");
  if (nav) nav.innerHTML = "";
}

/* --- HELPERS --- */
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function placeholderHtml(emoji, label) {
  return `<div class="proj-cover-placeholder"><span>${emoji}</span><p>${label}</p></div>`;
}

function updatePageTitle(p) {
  document.title = `${p.title} — Marcelle Paiva`;
  const descMeta = document.querySelector("meta[name='description']");
  if (descMeta) descMeta.setAttribute("content", p.tagline || p.desc || "");
}

/* Build default process steps from flat data */
function buildDefaultSteps(p) {
  return [
    { icon: "🔍", title: "Entendimento do Problema",   desc: p.problem    || "Análise do contexto e definição do escopo do projeto." },
    { icon: "🗣️", title: "Pesquisa",                   desc: p.research   || "Pesquisa com usuários, benchmarking e análise heurística." },
    { icon: "✏️", title: "Wireframes",                 desc: p.wireframes || "Estruturação dos fluxos e layout de baixa fidelidade.",
      images: [{ emoji: "🗂️", label: "Wireframes — em breve" }] },
    { icon: "⚡", title: "Prototipação",                desc: "Protótipo de alta fidelidade no Figma para validação dos fluxos.",
      images: [{ emoji: "📱", label: "Protótipo — em breve" }] },
    { icon: "💎", title: "Refinamento Visual",          desc: p.process    || "Aplicação da identidade visual e micro-interações." }
  ];
}

/* Build default result items from result text */
function buildDefaultResults(p) {
  if (!p.result) return [];
  // Tenta separar por vírgula ou ponto e vírgula
  const parts = p.result.split(/[,;]/).filter(s => s.trim().length > 4);
  if (parts.length > 1) {
    const icons = ["📉","📈","⚡","🎯","🌟","♿"];
    return parts.map((t, i) => ({ icon: icons[i % icons.length], text: t.trim() }));
  }
  return [{ icon: "🌟", text: p.result }];
}

/* ---------- LIGHTBOX (com navegação entre telas) ---------- */
let _lightbox = null;
let _currentLbIdx = -1;

function initLightbox() {
  _lightbox = document.createElement("div");
  _lightbox.className = "lightbox-overlay";
  _lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar">✕</button>
    <button class="lightbox-prev" aria-label="Anterior">‹</button>
    <img src="" alt="Imagem ampliada">
    <button class="lightbox-next" aria-label="Próxima">›</button>
    <span class="lightbox-counter"></span>
  `;
  document.body.appendChild(_lightbox);

  _lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  _lightbox.querySelector(".lightbox-prev").addEventListener("click", e => { e.stopPropagation(); lbNav(-1); });
  _lightbox.querySelector(".lightbox-next").addEventListener("click", e => { e.stopPropagation(); lbNav(+1); });
  _lightbox.addEventListener("click", e => { if (e.target === _lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  lbNav(-1);
    if (e.key === "ArrowRight") lbNav(+1);
  });
}

function openLightbox(src) {
  openLightboxNav(-1, src);
}

function openLightboxNav(idx, src) {
  if (!_lightbox) return;
  const imgs = window._galleryImages || [];
  _currentLbIdx = idx >= 0 ? idx : -1;
  const imgEl  = _lightbox.querySelector("img");
  const counter = _lightbox.querySelector(".lightbox-counter");
  const prevBtn = _lightbox.querySelector(".lightbox-prev");
  const nextBtn = _lightbox.querySelector(".lightbox-next");

  imgEl.src = src || imgs[idx] || "";
  imgEl.style.transform = "scale(.92)";
  setTimeout(() => imgEl.style.transform = "", 20);

  const hasNav = imgs.length > 1 && idx >= 0;
  prevBtn.style.display = hasNav ? "" : "none";
  nextBtn.style.display = hasNav ? "" : "none";
  counter.style.display = hasNav ? "" : "none";
  if (hasNav) counter.textContent = `${idx + 1} / ${imgs.length}`;

  _lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function lbNav(dir) {
  const imgs = window._galleryImages || [];
  if (!imgs.length || _currentLbIdx < 0) return;
  _currentLbIdx = (_currentLbIdx + dir + imgs.length) % imgs.length;
  const imgEl   = _lightbox.querySelector("img");
  const counter = _lightbox.querySelector(".lightbox-counter");
  imgEl.style.transform = `translateX(${dir > 0 ? "30px" : "-30px"}) scale(.94)`;
  imgEl.style.opacity = "0";
  setTimeout(() => {
    imgEl.src = imgs[_currentLbIdx];
    imgEl.style.transition = "none";
    imgEl.style.transform = `translateX(${dir > 0 ? "-20px" : "20px"}) scale(.96)`;
    imgEl.style.opacity = "0";
    requestAnimationFrame(() => {
      imgEl.style.transition = "";
      imgEl.style.transform = "";
      imgEl.style.opacity = "1";
    });
  }, 160);
  counter.textContent = `${_currentLbIdx + 1} / ${imgs.length}`;
}

function closeLightbox() {
  _lightbox?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- SCROLL FADE (para esta página) ---------- */
function initScrollFadeProj() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.08 });
  document.querySelectorAll(".fade-in:not(.observed)").forEach(el => {
    el.classList.add("observed");
    obs.observe(el);
  });
}
