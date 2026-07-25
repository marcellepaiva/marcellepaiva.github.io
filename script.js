// =============================================
//   PORTFOLIO UX/UI — script.js
// =============================================

/* ---------- PROJECTS DATA ---------- */
const PROJECTS = [
  {
    id: 1,
    title: "Conecta Jovem",
    category: "Mobile · UX/UI Design · Impacto Social",
    tagline: "Como criei uma solução para ajudar jovens a conquistar a primeira oportunidade, da simulação de entrevista à candidatura",
    desc: "Plataforma mobile de impacto social que conecta jovens de 18 a 24 anos às primeiras oportunidades profissionais, integrando capacitação, simulação de entrevistas e matching de vagas.",
    coverGradient: "linear-gradient(135deg,#0077B6 0%,#00B4D8 60%,#90E0EF 100%)",
    coverEmoji: "🚀",
    coverImage: "./img/imagem_principal.png",

    /* Campos da página de detalhe */
    impact: "O Conecta Jovem transforma a busca pelo emprego em uma jornada de desenvolvimento. Ao integrar educação, simulação de entrevistas e matching de vagas no mesmo fluxo, o projeto ataca a causa raiz do desemprego juvenil — promovendo inclusão digital e social para jovens de 18 a 24 anos. Esse projeto foi desenvolvido através da Jornada Menina de UX, que tinha como tema: Jovens querem trabalhar, mas enfrentam precarizações e falta de oportunidade.",
    context: "O Conecta Jovem é uma plataforma de impacto social projetada para mitigar as barreiras de entrada de jovens (18 a 24 anos) no mercado de trabalho. O projeto foca especialmente em jovens de escolas públicas que buscam o primeiro estágio ou emprego, mas se deparam com o paradoxo da exigência de experiência prévia — um ciclo difícil de romper sem apoio e oportunidade.",
    problem: "A pesquisa quantitativa com usuários reais revelou os principais obstáculos: 56,3% citam a falta de indicação e networking como maior barreira; 50% enfrentam a exigência de experiência prévia como critério eliminatório; 31,3% sofrem pela baixa oferta de vagas em sua região; e 18,8% pela falta de acesso ao ensino superior. Além disso, apenas 37,5% dos jovens se sentem totalmente preparados para processos seletivos, enquanto 62,5% precisam desenvolver conhecimentos técnicos para conseguir uma vaga.",
    objective: "Criar uma plataforma mobile acessível e empática que quebre o ciclo da inexperiência — integrando trilhas de capacitação (hard e soft skills), simulador de entrevistas para ganho de confiança, matching de vagas por geolocalização e acompanhamento transparente de candidaturas com feedback das empresas.",
    research: "Metodologia Design Thinking, passando pelas fases de imersão, definição, ideação e prototipagem. Desk Research com dados do IBGE sobre a 'Geração Nem-Nem' e o desemprego juvenil (mais que o dobro da média nacional). Pesquisa quantitativa com usuários reais para validar as dores do público-alvo. Benchmark competitivo com LinkedIn, Gupy e CIEE para identificar lacunas e oportunidades de diferenciação.",
    wireframes: "Fluxos desenhados a partir das dores mapeadas na pesquisa: onboarding simplificado, área de vagas com filtro por geolocalização, hub de cursos por trilhas de aprendizado e simulador de entrevistas interativo. Validação de hierarquia e navegação antes de avançar para alta fidelidade.",
    solutionText: "As telas finais foram desenvolvidas em Dark Mode com paleta Teal/Ciano e Verde Neon, transmitindo tecnologia e esperança. Tipografia com Urbanist e Inter para máxima legibilidade em diferentes dispositivos. UX Writing empático, motivacional e direto — sem termos corporativos que afastam o jovem. A interface foi estruturada para atacar cada dor levantada na pesquisa: Simulador de Entrevista para os 37,5% que se sentem despreparados; Hub de Capacitação com trilhas de Soft e Hard Skills para os 62,5% que buscam qualificação; Matching por Geolocalização para reduzir barreiras de deslocamento; e Área de Candidaturas com acompanhamento e feedback construtivo.",

    processSteps: [
      {
        icon: "🔍",
        title: "Imersão e Pesquisa",
        desc: "Desk Research com dados do IBGE sobre a 'Geração Nem-Nem' e o desemprego juvenil — que é mais que o dobro da média nacional. Análise do contexto social e das barreiras estruturais que impedem jovens de 18 a 24 anos de entrarem no mercado de trabalho.",
        images: [{ src: "./img/deskresearch.png", label: "Desk Research & Dados IBGE", landscape: true }]
      },
      {
        icon: "🗣️",
        title: "Pesquisa com Usuários",
        desc: "Pesquisa quantitativa com pessoas reais para validar as dores do público-alvo. Resultado: 56,3% citam falta de networking; 50% enfrentam a barreira da experiência prévia; 31,3% sofrem com baixa oferta de vagas na região; apenas 37,5% se sentem preparados para processos seletivos.",
        images: [{ src: "./img/pesquisaimg.png", label: "Síntese da Pesquisa Quantitativa", landscape: true }]
      },
      {
        icon: "🏆",
        title: "Benchmark Competitivo",
        desc: "A análise dos principais concorrentes revelou que as soluções existentes priorizam processos burocráticos e perfis seniores, gerando atrito e insegurança em jovens em início de carreira. A oportunidade foi direcionar o foco para a jornada de preparação, oferecendo linguagem humanizada, treino prático para entrevistas e suporte focado em confiança.",
        images: [{ src: "./img/benchmark.png", label: "Análise Competitiva", landscape: true }]
      },
      {
        icon: "✏️",
        title: "Definição e Wireframes",
        desc: "Estruturação dos fluxos e wireframes com foco em hierarquia de informação e navegação intuitiva.",
        images: [
          { src: "./img/wireframes/01-boas-vindas.png",          label: "Wireframe — Boas-vindas" },
          { src: "./img/wireframes/02-cadastro.png",             label: "Wireframe — Cadastro" },
          { src: "./img/wireframes/03-conta-criada.png",         label: "Wireframe — Conta Criada" },
          { src: "./img/wireframes/04-login.png",                label: "Wireframe — Login" },
          { src: "./img/wireframes/05-home.png",                 label: "Wireframe — Home" },
          { src: "./img/wireframes/06-encontre-vaga.png",        label: "Wireframe — Encontre uma Vaga" },
          { src: "./img/wireframes/07-capacite-se.png",          label: "Wireframe — Capacite-se" },
          { src: "./img/wireframes/08-perfil.png",               label: "Wireframe — Perfil" },
          { src: "./img/wireframes/09-simulador-entrevista.png", label: "Wireframe — Simulador de Entrevista" },
          { src: "./img/wireframes/10-minhas-candidaturas.png",  label: "Wireframe — Minhas Candidaturas" }
        ]
      },
      {
        icon: "💎",
        title: "Prototipagem e UI Final",
        desc: "Protótipo de alta fidelidade em Dark Mode com paleta Teal/Ciano. Tipografia Urbanist e Inter para acessibilidade. UX Writing empático e motivacional. Funcionalidades: Simulador de Entrevista, Hub de Capacitação com trilhas de aprendizado, Matching por Geolocalização e Área de Candidaturas com feedback.",
        images: [{ src: "./img/imagem_principal.png", label: "Visão Geral — Fluxo Completo do App" }]
      }
    ],

    solutionImages: [
      { src: "./img/Login.png",                  label: "Login — Acesso à Conta" },
      { src: "./img/Login realizado.png",        label: "Login Realizado com Sucesso" },
      { src: "./img/Cadastro.png",               label: "Cadastro — Criação de Conta" },
      { src: "./img/Conta criada.png",           label: "Conta Criada com Sucesso" },
      { src: "./img/Tela Principal.png",         label: "Tela Principal — Home" },
      { src: "./img/Vagas.png",                  label: "Vagas — Matching por Geolocalização" },
      { src: "./img/Simulador.png",              label: "Simulador de Entrevista" },
      { src: "./img/Cursos.png",                 label: "Cursos — Hub de Capacitação" },
      { src: "./img/Minhas candidaturas.png",    label: "Minhas Candidaturas & Feedbacks" },
      { src: "./img/Perfil.png",                 label: "Perfil — Ana Souza" }
    ],

    resultItems: [
      { icon: "🎯", text: "Simulador de Entrevista: ferramenta interativa de treino para os 37,5% que se sentem despreparados para processos seletivos" },
      { icon: "📚", text: "Hub de Capacitação: trilhas de Soft e Hard Skills (informática, design, marketing) para os 62,5% que buscam qualificação técnica" },
      { icon: "📍", text: "Matching por Geolocalização: filtro inteligente de vagas próximas à residência, reduzindo custos de deslocamento" },
      { icon: "📋", text: "Área de Candidaturas: acompanhamento transparente de status e feedbacks construtivos das empresas" },
      { icon: "🌐", text: "Linguagem empática e acessível — sem termos corporativos que criam distância com o jovem usuário" },
      { icon: "🌱", text: "Inclusão digital e social: foco em jovens de escolas públicas sem acesso a cursos caros ou redes de contato" }
    ],

    result: "Plataforma que integra capacitação, simulação de entrevistas e matching de vagas — atacando as 4 principais barreiras identificadas na pesquisa: falta de networking (56,3%), exigência de experiência prévia (50%), baixa oferta regional (31,3%) e despreparo para seleções (62,5% precisam de qualificação).",
    tools: ["Figma", "FigJam", "Design Thinking", "Google Forms"],
    figmaLink: "https://www.figma.com/design/vfMjtEjwdX8rx6Lmnyca4b/Conecta-Jovem?node-id=0-1&t=d9S7nlfRqmGkayAs-1",

    metrics: [],
    slides: [
      { src: "./img/imagem_principal.png", label: "Telas do Aplicativo" },
      { emoji: "📊", label: "Pesquisa & Insights" }
    ]
  },
  {
    id: 2,
    title: "Átris",
    inDevelopment: true,
    category: "Web · SaaS · UX/UI Design · Acessibilidade",
    tagline: "Redesign do fluxo de criação de projetos no TaskFlow",
    desc: "O Átris redesenhou o fluxo de criação de projetos do TaskFlow eliminando os 4 principais pontos de abandono do onboarding. Ao simplificar um modal de 14 campos em um stepper de 3 etapas com feedback visual imediato, o projeto ataca a causa raiz do churn precoce.",
    coverGradient: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#a78bfa 100%)",
    coverEmoji: "⚡",
    coverImage: "",

    /* Campos da página de detalhe */
    impact: "O Átris redesenhou o fluxo de criação de projetos do TaskFlow eliminando os 4 principais pontos de abandono do onboarding. Ao simplificar o modal de 14 campos em um stepper de 3 etapas, adicionar feedback visual imediato e corrigir falhas de acessibilidade, o projeto ataca a causa raiz do churn precoce — promovendo retenção e primeiro sucesso do usuário.",
    context: "TaskFlow é um SaaS B2B de gestão de projetos para agências de marketing, consultorias e estúdios criativos (5–100 colaboradores). O diferencial é um portal externo onde clientes aprovam entregas sem login completo.",
    problem: "Mais de metade dos novos usuários abandona a plataforma antes de criar o primeiro projeto. O modal de criação tem 14 campos empilhados sem progresso visual, botões idênticos sem distinção e nenhum feedback ao concluir.",
    objective: "Simplificar o modal de criação em um stepper de 3 etapas com indicador de progresso, Kanban visualmente aprimorado com etapas cromáticas, cards informativos com nome, responsável, prazo e badge de status, feedback imediato e permissionamento claro.",
    solutionText: "Fluxo redesenhado com stepper de 3 etapas, Kanban cromático, cards informativos, toast de confirmação, templates inline e acessibilidade corrigida para WCAG 2.2. Resultado: redução drástica no abandono do onboarding e no tempo de criação do primeiro projeto.",

    processSteps: [
      {
        icon: "🔍",
        title: "Imersão e Pesquisa",
        desc: "Desk Research com dados de uso da plataforma TaskFlow do último trimestre. Análise do contexto: 67 tickets/semana sobre \"como criar projeto\", tempo médio de 11 minutos (meta: 3 min) e NPS de onboarding de apenas 18. Identificação do fluxo de Criação do Primeiro Projeto como momento mais crítico do produto.",
        images: [{ emoji: "📊", label: "Dados de Uso & Tickets de Suporte" }]
      },
      {
        icon: "🗺️",
        title: "Pesquisa com Usuários / Journey Map",
        desc: "Mapeamento do fluxo real de criação de projetos com usuários. Resultado: 59% abandonam no meio do fluxo; 52% nunca criam o primeiro projeto. Identificados 4 atritos principais: (1) listagem sem filtros, (2) modal com 14 campos, (3) botões \"Salvar\" e \"Salvar e Continuar\" idênticos, (4) ausência de feedback ao criar projeto.",
        images: [{ emoji: "🗺️", label: "Journey Map — Fluxo de Criação" }]
      },
      {
        icon: "🏆",
        title: "Benchmark Competitivo",
        desc: "Análise de ferramentas concorrentes: Asana, Monday, Trello e ClickUp. Foco em como cada plataforma conduz o onboarding e a criação do primeiro projeto. Identificação de padrões: stepper com indicação de progresso, templates inline e feedback visual imediato como práticas consolidadas no mercado.",
        images: [{ emoji: "🔎", label: "Análise Competitiva — Asana, Monday, ClickUp" }]
      },
      {
        icon: "♿",
        title: "Diagnóstico de Acessibilidade e Usabilidade",
        desc: "Auditoria das heurísticas de Nielsen e critérios WCAG 2.2. Problemas críticos: contraste de labels 1.9:1 (mínimo WCAG: 4.5:1); date-picker sem navegação por teclado e incompatível com Firefox; campos sem distinção entre obrigatório e opcional; \"Aplicar Template\" abria nova aba e perdia dados preenchidos.",
        images: [{ emoji: "📋", label: "Relatório de Acessibilidade & Heurísticas" }]
      },
      {
        icon: "💎",
        title: "Prototipagem e Testes",
        desc: "Redesign do fluxo completo: modal dividido em stepper de 3 etapas, Kanban com separação visual cromática, cards com informações essenciais visíveis sem cliques, feedback toast ao criar projeto e destaque do novo projeto na listagem. Protótipo validado com usuários do público-alvo.",
        images: [
          { emoji: "📱", label: "Stepper — Etapa 1 de 3" },
          { emoji: "🎨", label: "Kanban Cromático Redesenhado" }
        ]
      }
    ],

    solutionImages: [
      { emoji: "🏠", label: "Home — Dashboard" },
      { emoji: "📋", label: "Projetos — Kanban Cromático" },
      { emoji: "✏️", label: "Criação de Projeto — Stepper" },
      { emoji: "✅", label: "Tarefas — Visão Global" },
      { emoji: "👤", label: "Minhas Tarefas" },
      { emoji: "👥", label: "Equipe" }
    ],

    resultItems: [
      { icon: "🪜", text: "Stepper de 3 Etapas: modal de 14 campos substituído por fluxo progressivo com indicador \"Etapa X de 3\", agrupando campos por contexto e reduzindo sobrecarga cognitiva" },
      { icon: "🔔", text: "Feedback Imediato: toast de confirmação ao criar projeto + destaque visual do novo item na listagem — elimina confusão de \"projeto criado sem confirmação\" reportada em 67 tickets/semana" },
      { icon: "🎨", text: "Kanban Cromático: etapas com cores e separação visual distintas. O usuário não precisa mais \"ler para entender\" o estado de cada coluna" },
      { icon: "🃏", text: "Cards Informativos: cada card exibe nome, responsável, prazo e badge de status sem cliques adicionais — com modal interno para tarefas, anexos, comentários e @marcação" },
      { icon: "📄", text: "Templates Inline: \"Aplicar Template\" agora abre inline, sem nova aba. Dados preenchidos são preservados. Opções: do zero, Template de Marketing, Template de Social" },
      { icon: "♿", text: "Acessibilidade: contraste corrigido para WCAG 2.2 (mín. 4.5:1), date-picker com navegação por teclado e compatibilidade Firefox, distinção clara entre campos obrigatórios e opcionais" },
      { icon: "🔐", text: "Permissionamento: apenas criador e responsável pela tarefa podem editar, excluir ou finalizar. Clientes externos acessam apenas o portal de revisão" }
    ],

    result: "Redesign completo do onboarding do TaskFlow: stepper de 3 etapas, Kanban cromático, feedback imediato e acessibilidade WCAG 2.2 — atacando as 4 causas raiz de um NPS de 18 e 52% de abandono antes do primeiro projeto.",
    tools: ["Figma", "FigJam", "Heurísticas de Nielsen", "WCAG 2.2"],
    figmaLink: "#", /* substitua pelo link real do Figma */

    metrics: [
      { num: "52%", label: "Abandonavam antes do 1º projeto" },
      { num: "59%", label: "Taxa de abandono no fluxo" },
      { num: "18", label: "NPS do onboarding" }
    ],
    slides: [
      { emoji: "🪜", label: "Stepper de Criação" },
      { emoji: "🎨", label: "Kanban Cromático" },
      { emoji: "📊", label: "Métricas & Impacto" }
    ],
    learnings: [
      { icon: "🎯", text: "O primeiro sucesso do usuário — não o cadastro — é o momento mais crítico de um SaaS." },
      { icon: "📋", text: "Formulários longos sem indicação de progresso causam abandono independentemente da qualidade do produto." },
      { icon: "🔔", text: "Feedback ausente é interpretado como erro: o usuário tenta de novo e gera duplicidade de dados." },
      { icon: "🌐", text: "Compatibilidade de browser deve ser validada no início, não no final do projeto." },
      { icon: "✳️", text: "Distinção clara entre campos obrigatórios e opcionais reduz significativamente o tempo de preenchimento." },
      { icon: "📄", text: "Templates que interrompem o fluxo (nova aba) são ignorados — precisam ser inline para funcionar." }
    ]
  }
];

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects(); // Projetos ativos — página de detalhe em projeto.html
  initNav();
  initModal();
  initScrollFade();
  initRipple();
  initStaggerGroups();
  initCursorTrail();
});

/* ---------- THEME ---------- */
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  document.getElementById("theme-icon").textContent = t === "dark" ? "☀️" : "🌙";
}

/* ---------- PROJECTS ---------- */
function renderProjects() {
  const grid  = document.getElementById("projects-grid");
  const empty = document.getElementById("projects-empty");
  if (!grid) return;

  // Mostra o grid e esconde o estado vazio
  grid.style.display = "";
  if (empty) empty.style.display = "none";

  grid.innerHTML = PROJECTS.map(p => {
    const screens = p.solutionImages || [];
    const hasScreens = screens.some(s => s.src);

    let coverHtml;
    if (hasScreens) {
      const validScreens = screens.filter(s => s.src);
      const slidesHtml = validScreens.map(s =>
        `<div class="card-slide">
          <img src="${s.src}" alt="${s.label || p.title}" loading="lazy">
        </div>`
      ).join("");
      const dotsHtml = validScreens.length > 1
        ? `<div class="card-slider-dots">${validScreens.map((_, i) =>
            `<span class="cs-dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`
          ).join("")}</div>`
        : "";
      const navHtml = validScreens.length > 1
        ? `<button class="card-slider-btn cs-prev" onclick="event.stopPropagation();csNav(this,-1)">‹</button>
           <button class="card-slider-btn cs-next" onclick="event.stopPropagation();csNav(this,1)">›</button>`
        : "";
      coverHtml = `<div class="card-cover">
        <div class="card-slider" data-idx="0" data-len="${validScreens.length}">
          <div class="card-slides-track">${slidesHtml}</div>
          ${navHtml}
          ${dotsHtml}
        </div>
        <span class="card-cat">${p.category}</span>
      </div>`;
    } else {
      coverHtml = `<div class="card-cover" style="background:${p.coverGradient}">
        <img src="${p.coverImage}" alt="Capa ${p.title}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="card-cover-emoji" style="display:none">${p.coverEmoji}</span>
        <span class="card-cat">${p.category}</span>
      </div>`;
    }

    const isDev = p.inDevelopment;
    const onClick = isDev ? "" : `onclick="window.location.href='projeto.html?id=${p.id}'"`;
    const cursorStyle = isDev ? `style="cursor: default; opacity: 0.8;"` : "";
    const ariaRole = isDev ? "" : `role="link" aria-label="Ver estudo de caso: ${p.title}"`;
    const btnHtml = isDev 
      ? `<span class="card-btn" style="color: var(--muted); cursor: default;">Em desenvolvimento 🚧</span>`
      : `<span class="card-btn">Ver estudo de caso <span>→</span></span>`;

    return `<article class="project-card fade-in"
      ${onClick}
      tabindex="0" ${ariaRole} ${cursorStyle}>
      ${coverHtml}
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <div class="card-tools">${p.tools.slice(0,3).map(t=>`<span class="tool-tag">${t}</span>`).join("")}</div>
          ${btnHtml}
        </div>
      </div>
    </article>`;
  }).join("");

  // suporte a teclado
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("keydown", e => { if (e.key === "Enter") card.click(); });
  });

  // inicializa sliders dos cards
  initCardSliders();
  initScrollFade();
}

/* ---------- MODAL ---------- */
let slideIdx = 0;
let activeProject = null;

function initModal() {
  const ov = document.getElementById("modal-overlay");
  ov.addEventListener("click", e => { if (e.target === ov) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  activeProject = p;
  slideIdx = 0;
  const content = document.getElementById("modal-content");
  content.innerHTML = buildModal(p);

  // events
  content.querySelector(".modal-close").addEventListener("click", closeModal);
  content.querySelector(".g-prev").addEventListener("click", () => goSlide(-1));
  content.querySelector(".g-next").addEventListener("click", () => goSlide(1));
  content.querySelectorAll(".g-dot").forEach((d, i) => d.addEventListener("click", () => setSlide(i)));

  const ov = document.getElementById("modal-overlay");
  ov.classList.add("open");
  document.body.style.overflow = "hidden";
  setSlide(0);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
  activeProject = null;
}

function buildModal(p) {
  // Usa as solutionImages reais (com src) para o slider do modal
  const screenImgs = (p.solutionImages || []).filter(s => s.src);
  const galleryItems = screenImgs.length ? screenImgs : (p.slides || []);

  const slides = galleryItems.map((s, i) =>
    `<div class="g-slide${i===0?" active":""}">` +
      (s.src
        ? `<img src="${s.src}" alt="${s.label || p.title}">`
        : `<div class="g-placeholder"><span>${s.emoji||'🖼️'}</span><p>${s.label}</p></div>`
      ) +
    `</div>`).join("");
  const dots = galleryItems.map((_,i) => `<span class="g-dot${i===0?" active":""}" data-i="${i}"></span>`).join("");
  const tools = p.tools.map(t => `<span class="m-tool">${t}</span>`).join("");
  const metrics = (p.metrics||[]).map(m => `<div class="metric"><span class="metric-num">${m.num}</span><span class="metric-label">${m.label}</span></div>`).join("");
  const metricsSection = metrics ? `<div class="m-section full"><div class="m-label">📈 Resultados</div><div class="m-metrics">${metrics}</div></div>` : "";

  return `
    <div class="modal-head">
      <div>
        <div class="modal-cat">${p.category}</div>
        <h2 class="modal-title">${p.title}</h2>
        <p class="modal-tagline">${p.tagline}</p>
      </div>
      <button class="modal-close" aria-label="Fechar">✕</button>
    </div>
    <div class="modal-gallery-wrap">
      <button class="g-btn g-prev" aria-label="Anterior">‹</button>
      <div class="modal-gallery">
        ${slides}
      </div>
      <button class="g-btn g-next" aria-label="Próximo">›</button>
    </div>
    <div class="g-nav">${dots}</div>
    <div class="modal-body">
      <div class="modal-grid">
        <div class="m-section"><div class="m-label">📌 Objetivo</div><p class="m-text">${p.objective}</p></div>
        <div class="m-section"><div class="m-label">🔍 Problema</div><p class="m-text">${p.problem}</p></div>
        ${metricsSection}
        <div class="m-section full"><div class="m-label">🛠️ Ferramentas</div><div class="m-tools">${tools}</div></div>
      </div>
    </div>`;
}

function setSlide(i) {
  const slides = document.querySelectorAll(".g-slide");
  const dots = document.querySelectorAll(".g-dot");
  slideIdx = (i + slides.length) % slides.length;
  slides.forEach((s,idx) => s.classList.toggle("active", idx === slideIdx));
  dots.forEach((d,idx) => d.classList.toggle("active", idx === slideIdx));
}
function goSlide(dir) { setSlide(slideIdx + dir); }

/* ---------- NAV ---------- */
function initNav() {
  const header = document.querySelector("header");
  const hamburger = document.getElementById("nav-hamburger");
  const mobileMenu = document.getElementById("nav-mobile");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 20);
    updateActiveLink();
  });

  hamburger?.addEventListener("click", () => mobileMenu?.classList.toggle("open"));

  // close mobile menu on link click
  document.querySelectorAll(".nav-mobile a").forEach(a => {
    a.addEventListener("click", () => mobileMenu?.classList.remove("open"));
  });

  document.getElementById("back-top")?.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

function updateActiveLink() {
  const sections = ["inicio","projetos","processo","sobre","contato"];
  let active = "";
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop - 120) active = id;
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${active}`);
  });
}

/* ---------- SCROLL FADE ---------- */
function initScrollFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".fade-in:not(.observed)").forEach(el => {
    el.classList.add("observed");
    obs.observe(el);
  });
}

/* ---------- RIPPLE EFFECT ---------- */
function initRipple() {
  document.querySelectorAll(".btn").forEach(btn => {
    if (btn.dataset.rippleReady) return;
    btn.dataset.rippleReady = "1";
    btn.addEventListener("click", function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height) * 1.5;
      Object.assign(ripple.style, {
        position: "absolute",
        width: size + "px",
        height: size + "px",
        left: (x - size / 2) + "px",
        top:  (y - size / 2) + "px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.25)",
        transform: "scale(0)",
        pointerEvents: "none",
        zIndex: "10",
        animation: "ripple-expand 0.55s ease-out forwards",
      });
      // Ensure button is positioned
      if (getComputedStyle(btn).position === "static") btn.style.position = "relative";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe if not present
  if (!document.getElementById("ripple-style")) {
    const style = document.createElement("style");
    style.id = "ripple-style";
    style.textContent = `
      @keyframes ripple-expand {
        to { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ---------- STAGGER SCROLL GROUPS ---------- */
function initStaggerGroups() {
  // Any direct siblings of fade-in inside grids get a progressive delay
  document.querySelectorAll(
    ".projects-grid, .processo-grid, .skill-chips, .impact-metrics, .results-list, .proj-overview-grid"
  ).forEach(grid => {
    const items = grid.querySelectorAll(".fade-in, .project-card, .processo-card, .chip, .impact-metric, .result-item, .proj-block");
    items.forEach((item, idx) => {
      const delay = Math.min(idx * 0.08, 0.4);
      item.style.transitionDelay = delay + "s";
    });
  });
}

/* ---------- CARD SLIDERS ---------- */
const _csTimers = new Map(); // slider -> intervalId

function initCardSliders() {
  document.querySelectorAll(".card-slider").forEach(slider => {
    if (slider.dataset.csReady) return;
    slider.dataset.csReady = "1";

    const len = parseInt(slider.dataset.len || "1", 10);
    if (len <= 1) return;

    // Auto-advance
    const start = () => {
      if (_csTimers.has(slider)) return;
      const id = setInterval(() => csGoNext(slider), 3500);
      _csTimers.set(slider, id);
    };
    const stop = () => {
      clearInterval(_csTimers.get(slider));
      _csTimers.delete(slider);
    };

    // Pause on hover
    slider.closest(".project-card")?.addEventListener("mouseenter", stop);
    slider.closest(".project-card")?.addEventListener("mouseleave", start);

    // Dots click
    slider.querySelectorAll(".cs-dot").forEach((dot, i) => {
      dot.addEventListener("click", e => {
        e.stopPropagation();
        csSetSlide(slider, i);
      });
    });

    start();
  });
}

function csGetIdx(slider) {
  return parseInt(slider.dataset.idx || "0", 10);
}

function csSetSlide(slider, i) {
  const len = parseInt(slider.dataset.len || "1", 10);
  const next = ((i % len) + len) % len;
  slider.dataset.idx = next;
  const track = slider.querySelector(".card-slides-track");
  if (track) track.style.transform = `translateX(-${next * 100}%)`;
  slider.querySelectorAll(".cs-dot").forEach((d, idx) => {
    d.classList.toggle("active", idx === next);
  });
}

function csGoNext(slider) {
  csSetSlide(slider, csGetIdx(slider) + 1);
}

function csNav(btn, dir) {
  const slider = btn.closest(".card-slider");
  if (!slider) return;
  csSetSlide(slider, csGetIdx(slider) + dir);
}

/* ---------- CURSOR TRAIL (canvas scribble) ---------- */
function initCursorTrail() {
  // Create the canvas and place it behind everything
  const canvas = document.createElement("canvas");
  canvas.id = "cursor-trail-canvas";
  Object.assign(canvas.style, {
    position:      "fixed",
    inset:         "0",
    width:         "100%",
    height:        "100%",
    pointerEvents: "none",   // never blocks clicks
    zIndex:        "0",
    opacity:       "1",
  });
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");

  // Resize handler
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Trail points — each has { x, y, age }
  const MAX_POINTS = 80;   // length of the trail
  const FADE_RATE  = 0.018; // how fast each point fades (0–1 per frame)
  const trail = [];         // circular-ish array of {x, y, alpha}

  // Current smoothed mouse pos (lerped for butter-smooth feel)
  let mx = -999, my = -999;
  let smx = -999, smy = -999;
  let isOver = false;       // mouse is on the page
  let overInteractive = false;

  // Detect if the element under the cursor is interactive
  function checkInteractive(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el) { overInteractive = false; return; }
    const tag = el.tagName;
    const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
    // Walk up max 5 parents to catch children inside buttons/links
    let node = el;
    overInteractive = false;
    for (let i = 0; i < 5 && node && node !== document.body; i++) {
      if (
        interactiveTags.includes(node.tagName) ||
        node.getAttribute("role") === "button" ||
        node.getAttribute("role") === "link" ||
        node.tabIndex >= 0 ||
        getComputedStyle(node).cursor === "pointer"
      ) {
        overInteractive = true;
        break;
      }
      node = node.parentElement;
    }
  }

  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
    isOver = true;
    checkInteractive(e);
  });
  document.addEventListener("mouseleave", () => { isOver = false; });

  // Returns the stroke color adapted to the current theme + a bit transparent
  function trailColor(alpha) {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    if (isDark) {
      // Vermelho accent do site — #F43F5E
      return `rgba(244, 63, 94, ${alpha})`;
    } else {
      // Vermelho hover do site — #FB7185
      return `rgba(251, 113, 133, ${alpha})`;
    }
  }

  let raf;
  function draw() {
    raf = requestAnimationFrame(draw);

    // Lerp the smoothed position toward the real mouse position
    const lerpFactor = 0.18;
    if (smx === -999) { smx = mx; smy = my; }
    smx += (mx - smx) * lerpFactor;
    smy += (my - smy) * lerpFactor;

    // Add a new point only when mouse is on-page & not over interactive elements
    if (isOver && !overInteractive) {
      // Only add if we moved at least 2px to avoid jitter standing still
      const last = trail[trail.length - 1];
      const dx = last ? smx - last.x : 99;
      const dy = last ? smy - last.y : 99;
      if (Math.hypot(dx, dy) > 2) {
        trail.push({ x: smx, y: smy, alpha: 1 });
        // Keep trail bounded
        if (trail.length > MAX_POINTS) trail.shift();
      }
    }

    // Fade every point
    for (let i = trail.length - 1; i >= 0; i--) {
      trail[i].alpha -= FADE_RATE;
      if (trail[i].alpha <= 0) { trail.splice(i, 1); }
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (trail.length < 2) return;

    // Draw the trail as a smooth quadratic bezier path
    // Split into segments and draw each with its local alpha
    ctx.lineCap  = "round";
    ctx.lineJoin = "round";

    for (let i = 1; i < trail.length; i++) {
      const t0 = trail[i - 1];
      const t1 = trail[i];
      const alpha = Math.min(t0.alpha, t1.alpha);
      if (alpha <= 0) continue;

      // Line width tapers toward the tip
      const progress = i / trail.length;          // 0 = oldest, 1 = newest
      const lineWidth = 1.5 + progress * 1.5;     // 1.5px → 3px

      ctx.beginPath();
      ctx.moveTo(t0.x, t0.y);

      // Use a midpoint for smooth curves when we have a next point
      if (i < trail.length - 1) {
        const t2 = trail[i + 1];
        const mx2 = (t1.x + t2.x) / 2;
        const my2 = (t1.y + t2.y) / 2;
        ctx.quadraticCurveTo(t1.x, t1.y, mx2, my2);
      } else {
        ctx.lineTo(t1.x, t1.y);
      }

      ctx.strokeStyle = trailColor(alpha * 0.7);
      ctx.lineWidth   = lineWidth;
      ctx.stroke();
    }

    // Glowing dot at the tip of the trail (newest point)
    const tip = trail[trail.length - 1];
    if (tip && tip.alpha > 0.4) {
      const grd = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 6);
      grd.addColorStop(0, trailColor(tip.alpha * 0.6));
      grd.addColorStop(1, trailColor(0));
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }

  draw();
}

