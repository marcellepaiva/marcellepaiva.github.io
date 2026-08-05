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
    coverImage: "./img/Conecta Jovem/imagem_principal.png",
    cardCover:   "./img/Conecta Jovem/Telas.png",
    projectIcon: "./img/Conecta Jovem/icon_jovem.png",

    /* Hero fullwidth e telas principais (Behance-style) */
    heroImage: "./img/Conecta Jovem/imagem_principal.png",
    keyScreens: [
      { src: "./img/Conecta Jovem/Tela Principal.png",      label: "Home — Vagas recomendadas e cursos",   role: "primary" },
      { src: "./img/Conecta Jovem/Vagas.png",               label: "Vagas — Matching por geolocalização",  role: "secondary" },
      { src: "./img/Conecta Jovem/Simulador.png",           label: "Simulador de Entrevista",             role: "tertiary" }
    ],

    /* Campos da página de detalhe */
    impact: "Desenvolvido durante a Jornada Menina de UX, o Conecta Jovem é uma plataforma que ajuda jovens a conquistar o primeiro emprego, reunindo capacitação, preparação para entrevistas e acesso a oportunidades em um só lugar. O projeto foi criado para tornar esse processo mais acessível e inclusivo para jovens de 18 a 24 anos.",
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
        images: [{ src: "./img/Conecta Jovem/deskresearch.png", label: "Desk Research & Dados IBGE", landscape: true }]
      },
      {
        icon: "🗣️",
        title: "Pesquisa com Usuários",
        desc: "Pesquisa quantitativa com pessoas reais para validar as dores do público-alvo. Resultado: 56,3% citam falta de networking; 50% enfrentam a barreira da experiência prévia; 31,3% sofrem com baixa oferta de vagas na região; apenas 37,5% se sentem preparados para processos seletivos.",
        images: [{ src: "./img/Conecta Jovem/pesquisaimg.png", label: "Síntese da Pesquisa Quantitativa", landscape: true }]
      },
      {
        icon: "🏆",
        title: "Benchmark Competitivo",
        desc: "A análise dos principais concorrentes revelou que as soluções existentes priorizam processos burocráticos e perfis seniores, gerando atrito e insegurança em jovens em início de carreira. A oportunidade foi direcionar o foco para a jornada de preparação, oferecendo linguagem humanizada, treino prático para entrevistas e suporte focado em confiança.",
        images: [{ src: "./img/Conecta Jovem/benchmark.png", label: "Análise Competitiva", landscape: true }]
      },
      {
        icon: "✏️",
        title: "Definição e Wireframes",
        desc: "Estruturação dos fluxos e wireframes com foco em hierarquia de informação e navegação intuitiva. Abaixo, destaco as principais telas desenvolvidas nesta etapa:",
        images: [
          { src: "./img/Conecta Jovem/wireframes/01-boas-vindas.png",          label: "Wireframe — Boas-vindas" },
          { src: "./img/Conecta Jovem/wireframes/05-home.png",                 label: "Wireframe — Home" },
          { src: "./img/Conecta Jovem/wireframes/09-simulador-entrevista.png", label: "Wireframe — Simulador de Entrevista" }
        ]
      },
      {
        icon: "💎",
        title: "Prototipagem e UI Final",
        desc: "Protótipo de alta fidelidade em Dark Mode com paleta Teal/Ciano. Tipografia Urbanist e Inter para acessibilidade. UX Writing empático e motivacional. Funcionalidades: Simulador de Entrevista, Hub de Capacitação com trilhas de aprendizado, Matching por Geolocalização e Área de Candidaturas com feedback. Abaixo, destaco as principais telas desenvolvidas nesta etapa:",
        images: [
          { src: "./img/Conecta Jovem/Tela Principal.png", label: "Home — Vagas recomendadas" },
          { src: "./img/Conecta Jovem/Vagas.png",          label: "Vagas — Matching por geolocalização" },
          { src: "./img/Conecta Jovem/Simulador.png",      label: "Simulador de Entrevista" }
        ]
      }
    ],

    solutionImages: [
      { src: "./img/Conecta Jovem/Login.png",                  label: "Login — Acesso à Conta" },
      { src: "./img/Conecta Jovem/Login realizado.png",        label: "Login Realizado com Sucesso" },
      { src: "./img/Conecta Jovem/Cadastro.png",               label: "Cadastro — Criação de Conta" },
      { src: "./img/Conecta Jovem/Conta criada.png",           label: "Conta Criada com Sucesso" },
      { src: "./img/Conecta Jovem/Tela Principal.png",         label: "Tela Principal — Home" },
      { src: "./img/Conecta Jovem/Vagas.png",                  label: "Vagas — Matching por Geolocalização" },
      { src: "./img/Conecta Jovem/Simulador.png",              label: "Simulador de Entrevista" },
      { src: "./img/Conecta Jovem/Cursos.png",                 label: "Cursos — Hub de Capacitação" },
      { src: "./img/Conecta Jovem/Minhas candidaturas.png",    label: "Minhas Candidaturas & Feedbacks" },
      { src: "./img/Conecta Jovem/Perfil.png",                 label: "Perfil — Ana Souza" }
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
    figjamLink: "https://www.figma.com/board/a44ggVwTeu6KCPksPTgCVj/Pesquisa-e-Descoberta-Conecta-Jovem?node-id=0-1&t=PShYX0u5SwAU1D2r-1",

    metrics: [],
    slides: [
      { src: "./img/Conecta Jovem/imagem_principal.png", label: "Telas do Aplicativo" },
      { emoji: "📊", label: "Pesquisa & Insights" }
    ]
  },
  {
    id: 2,
    title: "Átris",
    category: "UX/UI Design · SaaS B2B · Onboarding · Gestão de Projetos",
    tagline: "Redesenhando o fluxo de criação do primeiro projeto para tornar o onboarding mais rápido, claro e seguro",
    desc: "Redesign do fluxo de criação do primeiro projeto do TaskFlow — SaaS de gestão de projetos para agências e consultorias. O formulário foi reorganizado em três etapas progressivas, com melhorias de usabilidade, legibilidade e feedback visual que tornam o onboarding mais rápido, claro e seguro.",
    coverGradient: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#a78bfa 100%)",
    coverEmoji: "⚡",
    coverImage: "./img/Atris/Home.png",
    cardCover: "./img/Atris/Card Projeto.png",
    projectIcon: "./img/Atris/icon_atris.png",

    /* Hero fullwidth e telas principais (Behance-style) */
    heroImage: "./img/Atris/Tarefas.png",
    keyScreens: [
      { src: "./img/Atris/Home.png",              label: "Dashboard — Visão Kanban de Projetos", role: "primary" },
      { src: "./img/Atris/criar_projeto_1.png",   label: "Novo Projeto — Etapa 1: Identificação", role: "secondary" },
      { src: "./img/Atris/criar_projeto_3.png",   label: "Novo Projeto — Etapa 3: Detalhes",     role: "tertiary" }
    ],

    /* Campos da página de detalhe */
    impact: "Átris é um projeto fictício de redesign do TaskFlow, um SaaS de gerenciamento de projetos, desenvolvido a partir de um desafio proposto pelo Claude Code. O desafio consistiu em analisar o fluxo de criação do primeiro projeto, identificar oportunidades de melhoria e redesenhar a experiência de onboarding. A proposta foi simplificar a jornada do usuário, reduzir barreiras de uso e criar uma interface mais intuitiva, tornando o processo mais fluido desde o primeiro acesso.",
    context: "O TaskFlow é uma plataforma SaaS voltada para gestão de projetos, utilizada por agências, consultorias e estúdios criativos. Neste desafio de UX/UI, meu objetivo foi redesenhar o fluxo de criação do primeiro projeto — etapa essencial para a experiência inicial do usuário e um dos principais pontos de abandono da plataforma.",
    problem: "Durante a análise do fluxo existente, identifiquei diversos problemas que tornavam a primeira experiência confusa e cansativa. O formulário reunia muitas informações em uma única tela, sem organização clara, o que aumentava a carga cognitiva e dificultava o preenchimento. Além disso, a interface apresentava falhas de usabilidade: baixa legibilidade, falta de diferenciação entre campos obrigatórios e opcionais, ausência de feedback após ações importantes e uma navegação que fazia o usuário perder informações já preenchidas. Esses fatores contribuíam para uma experiência frustrante e aumentavam a chance de desistência logo nos primeiros minutos de uso.",
    objective: "Reduzir a fricção durante o onboarding e tornar a criação do primeiro projeto uma experiência mais rápida, clara e segura. Cada decisão de design foi pensada para diminuir dúvidas, evitar erros e aumentar a confiança do usuário durante todo o processo.",
    research: "Análise do fluxo existente e identificação dos principais pontos de atrito na experiência do usuário. Auditoria de usabilidade com foco em legibilidade, hierarquia visual, feedback de interações e navegação entre etapas. Benchmark com ferramentas do mercado para identificar padrões de onboarding consolidados.",
    wireframes: "Estruturação do novo fluxo em três etapas progressivas com os campos reorganizados por contexto — eliminando a sobrecarga da tela única e permitindo que o usuário avance de forma gradual. Validação da hierarquia e navegação antes do refinamento visual.",
    solutionText: "Formulário dividido em três etapas progressivas. Campos reorganizados por contexto, com componentes mais rápidos substituindo elementos de alta fricção. Melhorias de legibilidade e distinção entre obrigatórios e opcionais. Busca facilitada para membros, seleção de datas acessível, resumo antes da conclusão, feedback após a criação e sugestões de próximos passos.",

    processSteps: [
      {
        icon: "🔍",
        title: "Análise do Fluxo Original",
        desc: "O formulário original concentrava 14 campos em uma única tela, sem progressão ou agrupamento. Labels com contraste insuficiente e campos obrigatórios indistinguíveis dos opcionais aumentavam a confusão desde o primeiro contato. O botão de template abria uma nova aba ao invés de aplicar diretamente, fazendo o usuário perder todos os dados já preenchidos ao retornar.",
        images: [
          { src: "./img/Atris/taskflow_02.png", label: "Análise — Formulário Original", landscape: true }
        ]
      },
      {
        icon: "⚠️",
        title: "Problemas de Usabilidade e Acessibilidade",
        desc: "O seletor de datas sobrepunha o formulário e cobria campos importantes durante o preenchimento. Não funcionava no Firefox e não tinha suporte a navegação por teclado, uma falha direta de acessibilidade.",
        images: [
          { src: "./img/Atris/taskflow_03.png", label: "Análise — Problemas no Date Picker", landscape: true }
        ]
      },
      {
        icon: "📉",
        title: "Ausência de Feedback e Perda de Confiança",
        desc: "Após salvar, nenhuma confirmação era exibida. O projeto recém-criado sumia no meio da listagem em ordem A–Z sem destaque visual. Sem saber se a ação havia sido concluída, 23% dos usuários tentavam criar o mesmo projeto novamente, gerando duplicatas e frustrando ainda mais a experiência.",
        images: [
          { src: "./img/Atris/taskflow_01.png", label: "Análise — Falta de Feedback", landscape: true }
        ]
      },
      {
        icon: "💎",
        title: "Redesign do Fluxo em 3 Etapas",
        desc: "Os 14 campos foram reorganizados em três etapas progressivas dentro do modal. Etapa 1: identificação, com chips de seleção rápida e template aplicável sem sair da tela. Etapa 2: equipe e prazos, com busca por nome e confirmação visual de membros. Etapa 3: detalhes opcionais e revisão completa antes de confirmar. Ao concluir, um toast de sucesso é exibido e o projeto aparece em destaque no topo da listagem. Abaixo, destaco as principais telas desenvolvidas nesta etapa:",
        images: [
          { src: "./img/Atris/Home.png",           label: "Home — Dashboard Kanban",      fullwidth: true },
          { src: "./img/Atris/criar_projeto_1.png", label: "Novo Projeto — Etapa 1",       fullwidth: true },
          { src: "./img/Atris/Tarefas.png",         label: "Tarefas — Visão Global",       fullwidth: true }
        ]
      }
    ],

    solutionImages: [
      { src: "./img/Atris/Home.png",                          label: "Home — Dashboard" },
      { src: "./img/Atris/Card Projeto.png",                  label: "Projetos — Listagem Redesenhada" },
      { src: "./img/Atris/taskflow_01.png",                   label: "TaskFlow — Etapa 1" },
      { src: "./img/Atris/taskflow_02.png",                   label: "TaskFlow — Etapa 2" },
      { src: "./img/Atris/taskflow_03.png",                   label: "TaskFlow — Etapa 3" },
      { src: "./img/Atris/Projeto criado com sucesso!.png",   label: "Projeto Criado com Sucesso" },
      { src: "./img/Atris/Tarefas.png",                       label: "Tarefas — Visão Global" },
      { src: "./img/Atris/Equipe.png",                        label: "Equipe" }
    ],

    resultItems: [
      { icon: "🪜", text: "Formulário dividido em três etapas progressivas — o usuário avança de forma gradual, sem precisar lidar com todas as informações de uma só vez" },
      { icon: "🗂️", text: "Campos reorganizados por contexto, com componentes mais rápidos substituindo elementos que exigiam muitas interações" },
      { icon: "🔤", text: "Hierarquia visual e legibilidade melhoradas, com distinção clara entre campos obrigatórios e opcionais" },
      { icon: "👥", text: "Busca facilitada para adicionar membros da equipe, com confirmação visual imediata de quem foi incluído" },
      { icon: "📅", text: "Seleção de datas mais simples e acessível, sem componentes que causavam perda de navegação ou dados" },
      { icon: "🔔", text: "Feedback visual após a criação do projeto e destaque para o item recém-criado na listagem — evitando duplicidades e confirmando que a ação foi concluída" },
      { icon: "🚀", text: "Sugestões de próximos passos para ajudar o usuário a continuar utilizando a plataforma após criar o primeiro projeto" }
    ],

    result: "Redesign completo do fluxo de criação do primeiro projeto do TaskFlow: formulário dividido em três etapas, campos reorganizados por contexto, melhorias de legibilidade e hierarquia visual, feedback imediato e sugestões de próximos passos — tornando o onboarding mais rápido, claro e seguro.",
    tools: ["Figma", "FigJam", "Claude Code"],
    figmaLink: "https://www.figma.com/design/fSPuZpzDZnJle9jLv9NTML/%C3%81tris?node-id=0-1&t=Nem4JRoJIkKmsHv9-1",
    figjamLink: "https://www.figma.com/board/J0lDbpLF4A3HlV7oCz60rl/Pesquisa-e-Descoberta-%C3%81tris?node-id=0-1&t=VT6KkBqZf9dqMeBn-1",

    metrics: [
      { num: "52%", label: "Não criavam o 1º projeto no trial" },
      { num: "41%", label: "Taxa de conclusão do fluxo" },
      { num: "18",  label: "NPS do onboarding" },
      { num: "38%", label: "Churn nos primeiros 7 dias" }
    ],
    slides: [
      { src: "./img/Atris/Home.png",          label: "Home — Dashboard" },
      { src: "./img/Atris/Card Projeto.png",  label: "Projetos — Listagem Redesenhada" },
      { src: "./img/Atris/taskflow_01.png",   label: "TaskFlow — Etapa 1" }
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
  // Não registra o listener na página de projeto (projeto.js é responsável lá)
  if (document.body.closest("[data-page='projeto']") || document.getElementById("projeto-main")) return;
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

  grid.style.display = "";
  if (empty) empty.style.display = "none";

  grid.innerHTML = PROJECTS.map(p => {

    // — CARD COVER —
    let coverHtml;
    if (p.projectIcon) {
      // Se tem ícone, a capa é apenas o ícone centralizado num fundo
      coverHtml = `<div class="card-cover card-cover--icon-only" style="background:${p.coverGradient || 'var(--surface2)'}">
        <img src="${p.projectIcon}" alt="${p.title} icon" loading="lazy" class="card-cover-icon-img">
      </div>`;
    } else if (p.cardCover) {
      // Imagem estática de capa (mockup/telas)
      coverHtml = `<div class="card-cover card-cover--static">
        <img src="${p.cardCover}" alt="Capa ${p.title}" loading="lazy" class="card-cover-static-img">
      </div>`;
    } else {
      const screens = p.solutionImages || [];
      const hasScreens = screens.some(s => s.src);
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
        </div>`;
      } else {
        coverHtml = `<div class="card-cover" style="background:${p.coverGradient}">
          <img src="${p.coverImage}" alt="Capa ${p.title}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="card-cover-emoji" style="display:none">${p.coverEmoji}</span>
        </div>`;
      }
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
