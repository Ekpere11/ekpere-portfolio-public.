/* Ekpere Abundance site script */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shots = n => n.map(i => "/img/shot-" + i + ".jpg");
  const galleries = { reviews: ["/img/review-1.jpg", "/img/review-2.jpg", "/img/review-3.jpg"], certs: ["/img/cert-securiti.jpg", "/img/cert-bluedot.jpg"] };

  /* tools marquee */
  const tools = [["ClickUp","tool-clickup.png"],["Monday.com","tool-monday.png"],["Asana",null,"AS"],["Trello","tool-trello.jpg"],["Notion","tool-notion.png"],["Jira","tool-jira.jpg"],["Slack","tool-slack.png"],["Google Workspace","tool-gworkspace.png"],["Excel / Sheets",null,"XL"],["HubSpot","tool-hubspot.png"],["Zoho","tool-zoho.jpg"],["HighLevel","tool-highlevel.jpg"],["Canva","tool-canva.jpg"],["Zoom",null,"Z"],["Calendly",null,"CAL"]];
  const toolHtml = tools.map(t => '<span class="tool"><span class="ic' + (t[1] ? "" : " txt") + '">' + (t[1] ? '<img src="/img/' + t[1] + '" alt="">' : t[2]) + "</span>" + t[0] + "</span>").join("");
  const mq = document.getElementById("marquee"); if (mq) mq.innerHTML = toolHtml + toolHtml.replace(/<span class="tool">/g, '<span class="tool" aria-hidden="true">');

  const cases = [
    { id: "medaxis", meta: "Digital health · Jira · Agile",
      title: "Project documentation for a $4.8M multi-country digital health platform",
      summary: "A full PMO document set for an 18-month telehealth launch across four countries.",
      context: "MedAxis Health Group: an 18-month, $4.8M programme to launch a telehealth and digital health platform across the Netherlands, Germany, Belgium and Nigeria, with a team of 35–50 people.",
      challenge: "Clinics ran on manual, phone-based scheduling with no digital records, no telehealth and no single view across markets. The project had to meet GDPR and NDPR requirements, a fixed budget and a fixed 18-month deadline.",
      did: "Created the full project documentation set: planning, scope, requirements, stakeholder management, RACI, risk management, budget, roadmap, communication, resources, procurement, UAT and go-live planning. I structured the project for Agile delivery in Jira.",
      tools: ["Jira", "Agile", "RACI", "Risk register", "Budget planning"],
      outcome: "A complete foundation for governing and delivering the project, with clear decision rights, escalation paths, milestones and budget controls from kickoff to closure.",
      media: { type: "shots", list: [1,2,3,4,5,6,7,8].map(i => "/img/medaxis-" + i + ".jpg") } },
    { id: "northstar", meta: "Marketing operations · Portfolio case study",
      title: "Marketing operations and delivery review for a 20-client agency",
      summary: "Found why ad costs rose and work ran late, then built the dashboard and toolkit to fix it.",
      context: "Northstar Growth Studio, a digital marketing agency running 20 client campaigns across Google Ads, Meta Ads, LinkedIn Ads and TikTok Ads, with an eight-person team. Built on a simulated dataset as a portfolio case study.",
      challenge: "Ad costs were rising and work was regularly delivered late, but nobody could see why. Campaign results, tasks and team workload sat in separate places.",
      did: "Ran campaign performance analysis tracking CPA, ROAS, CPL and lead quality, and traced the workflow bottlenecks behind late delivery and rising costs. I then built an Excel KPI dashboard and operations toolkit with a task tracker, workload planner, client reporting calendar, risk log and SOPs, plus a 30-day process improvement plan.",
      tools: ["Excel", "Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"],
      outcome: ["Blended CPA rose 26.7% from July to September, with 9 of 20 campaigns flagged red.", "Only 53.7% of 197 tracked tasks were completed on time.", "Blocked tasks ran late 89% of the time, against 15.7% for unblocked tasks. Client approvals and feedback were the biggest single cause.", "Clear owners, approval deadlines and escalation rules were set out in SOPs and the 30-day improvement plan."],
      media: { type: "shots", list: [1,2,3,4,5,6,7,8,9].map(i => "/img/northstar-" + i + ".jpg") } },
    { id: "sales", meta: "Sales operations · Excel",
      title: "Team performance and revenue tracking for a sales company",
      summary: "A weekly tracker that tied each person's work to revenue.",
      context: "Embedded with a sales company whose leadership needed to see how individual work connected to revenue.",
      challenge: "Leadership couldn't measure anyone's real impact. People said they were working, but nothing tied that effort to revenue.",
      did: "Set up a weekly tracker in Excel that logged each employee's tasks, completion status, turnaround time and the revenue their work generated, with dashboards on top so leadership could read it at a glance. I run it weekly.",
      tools: ["Excel", "Dashboards", "Weekly reporting"],
      outcome: ["38 completed tasks tracked in one week, with an average turnaround of just under two days.", "Showed that one employee generated $9,200 of $10,000 total revenue (~92%), which led to recognition, a promotion and targeted coaching for the rest of the team.", "Flagged that same 92% concentration to leadership as a business risk.", "Surfaced the 14% of tasks still pending, an early warning on stalled work."],
      media: { type: "shots", list: shots([6,7,8,9,10]) } },
    { id: "clickup", meta: "Digital marketing agency · ClickUp",
      title: "Organizing project delivery for a digital marketing agency",
      summary: "One ClickUp workspace for ownership, deadlines and status.",
      context: "A digital marketing agency running several client projects at once.",
      challenge: "The team lacked clarity on task ownership, deadlines and project status. Work was scattered and communication was fragmented.",
      did: "Planned and set up the agency's ClickUp workspace with structured task workflows and custom dashboards built around how the team delivers client work.",
      tools: ["ClickUp", "Dashboards"],
      outcome: "Task ownership and deadlines became visible in one place, with fewer manual follow-ups and delivery kept on schedule.",
      cover: "/img/tool-clickup.png",
      media: { type: "video", href: "https://drive.google.com/file/d/15-N9UKdxUo0XYJ5SrmSYJOcCHqVFV9A4/view" } },
    { id: "monday", meta: "Construction · Monday.com",
      title: "Scheduling and coordination for a construction team",
      summary: "A shared hub for schedules, tasks and handoffs.",
      context: "A construction team coordinating schedules, tasks and handoffs across crews.",
      challenge: "No central place for scheduling, task tracking or coordination, which caused delays and miscommunication.",
      did: "Implemented Monday.com as the team's central hub, with boards for scheduling, workflow management and real-time communication between teams.",
      tools: ["Monday.com"],
      outcome: "One shared source of truth for scheduling, with fewer missed handoffs and clearer accountability.",
      media: { type: "shots", list: shots([1,2,3,4,5]) } },
    { id: "ecom", meta: "Ecommerce · Excel",
      title: "Profit reporting for an ecommerce store",
      summary: "From waiting weeks for profit numbers to seeing them in real time.",
      context: "An ecommerce store selling through Shopify, with ads on Meta and Google.",
      challenge: "Sales, ad spend, fees and shipping sat in separate places. The owner didn't know whether a month was profitable until an accountant confirmed it weeks later.",
      did: "Consolidated six months of order-level data (600+ transactions) into one Excel workbook, with a dashboard that calculates revenue, COGS, ad spend, platform fees, shipping and profit margin.",
      tools: ["Excel", "Shopify data", "Reporting"],
      outcome: ["600+ transactions tracked and categorized.", "Profit visibility went from weeks after month-end to real time.", "Surfaced overspend a full month earlier than the old process would have.", "One dashboard replaced three to four disconnected data sources."],
      media: { type: "shots", list: shots([13,14,15,16]) } },
    { id: "gantt", meta: "Property management · Gantt charts",
      title: "Project timelines for property management",
      summary: "Milestones, deadlines and responsibilities in one view.",
      context: "Property management projects running across several properties and teams.",
      challenge: "No structured timeline view, which led to missed deadlines and poor resource allocation.",
      did: "Built Gantt chart timelines showing project milestones, deadlines and team responsibilities in one view.",
      tools: ["Gantt charts", "Resource planning"],
      outcome: "Smoother project execution, clearer deadline accountability and better resource planning.",
      media: { type: "shots", list: shots([11,12]) } },
    { id: "sop", meta: "Cross-functional · SOPs",
      title: "Process documentation and team reporting",
      summary: "Templates that made onboarding faster and mistakes rarer.",
      context: "Growing teams without documented ways of working.",
      challenge: "No documented processes meant inconsistent work, long onboarding and recurring mistakes.",
      did: "Created reusable SOP templates for documenting any business process, plus daily and weekly reporting templates that track progress and surface blockers.",
      tools: ["SOP templates", "Daily & weekly reports"],
      outcome: "Faster, more consistent onboarding and fewer repeated mistakes, with blockers caught before they caused delays.",
      cover: "/img/tool-notion.png",
      media: { type: "video", href: "https://drive.google.com/file/d/1uFZJnjkpPMc29VBqkXoPAooKoSMk-DdQ/view" } }
  ];

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  cases.forEach(c => { if (c.media.type === "shots") galleries[c.id] = c.media.list; });
  const casesEl = document.getElementById("cases"); if (casesEl) casesEl.innerHTML = cases.map((c, i) => {
    const isVideo = c.media.type === "video";
    const cover = isVideo
      ? '<div class="case-cover" style="display:grid;place-items:center;background:linear-gradient(135deg,var(--sky),var(--accent-soft))"><img src="' + c.cover + '" alt="" style="width:96px;height:96px;object-fit:contain;border-radius:22px;background:#fff;padding:14px;box-shadow:var(--shadow-lg)"><span class="count">▶ Video walkthrough</span></div>'
      : '<div class="case-cover"><img src="' + c.media.list[0] + '" alt="" loading="lazy"><span class="count">' + c.media.list.length + ' screenshots</span></div>';
    return '<button type="button" class="case-card tilt" data-case="' + i + '">' + cover +
      '<div class="case-info"><span class="meta">' + esc(c.meta) + "</span><h3>" + esc(c.title) + "</h3><p>" + esc(c.summary) + '</p><span class="more">View project →</span></div></button>';
  }).join("");

  /* detail panel */
  const panel = document.getElementById("panel"), panelBody = document.getElementById("panel-body");
  let lastFocus = null;
  function openCase(i) {
    const c = cases[i];
    const outcome = Array.isArray(c.outcome) ? "<ul>" + c.outcome.map(o => "<li>" + esc(o) + "</li>").join("") + "</ul>" : esc(c.outcome);
    const media = c.media.type === "shots"
      ? '<div class="gallery">' + c.media.list.map((s, k) => '<button type="button" data-gallery="' + c.id + '" data-i="' + k + '"><img src="' + s + '" alt="Screenshot ' + (k + 1) + '" loading="lazy"></button>').join("") + "</div>"
      : '<a class="watch" href="' + c.media.href + '" target="_blank" rel="noopener"><span class="play"></span>Watch the walkthrough in Google Drive ↗</a>';
    panelBody.innerHTML = '<div class="panel-top"><div><div class="meta">' + esc(c.meta) + '</div><h2 id="panel-title">' + esc(c.title) + '</h2></div><button class="x-btn" type="button" data-close aria-label="Close">×</button></div>' +
      '<dl class="facts-list"><div><dt>Context</dt><dd>' + esc(c.context) + "</dd></div><div><dt>Challenge</dt><dd>" + esc(c.challenge) + "</dd></div><div><dt>What I did</dt><dd>" + esc(c.did) + '</dd></div><div><dt class="out">Outcome</dt><dd>' + outcome + '</dd></div><div><dt>Tools</dt><dd><div class="chips">' + c.tools.map(t => '<span class="chip">' + esc(t) + "</span>").join("") + "</div></dd></div></dl>" + media;
    lastFocus = document.activeElement;
    panel.hidden = false; document.body.style.overflow = "hidden";
    panelBody.scrollTop = 0; panelBody.querySelector("[data-close]").focus();
  }
  function closePanel() { panel.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  panel.addEventListener("click", e => { if (e.target === panel || e.target.closest("[data-close]")) closePanel(); });

  /* lightbox */
  const lb = document.getElementById("lightbox"), lbImg = document.getElementById("lb-img"), lbCount = document.getElementById("lb-count");
  let cur = [], idx = 0;
  const show = () => { lbImg.src = cur[idx]; lbCount.textContent = (idx + 1) + " / " + cur.length; };
  document.addEventListener("click", e => {
    const g = e.target.closest("[data-gallery]");
    if (g) { cur = galleries[g.dataset.gallery]; idx = +g.dataset.i; show(); lb.hidden = false; document.getElementById("lb-close").focus(); return; }
    const c = e.target.closest("[data-case]");
    if (c) openCase(+c.dataset.case);
  });
  const closeLb = () => { lb.hidden = true; };
  document.getElementById("lb-close").onclick = closeLb;
  document.getElementById("lb-prev").onclick = e => { e.stopPropagation(); idx = (idx - 1 + cur.length) % cur.length; show(); };
  document.getElementById("lb-next").onclick = e => { e.stopPropagation(); idx = (idx + 1) % cur.length; show(); };
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", e => {
    if (!lb.hidden) {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") document.getElementById("lb-next").click();
      if (e.key === "ArrowLeft") document.getElementById("lb-prev").click();
    } else if (!panel.hidden && e.key === "Escape") closePanel();
  });

  /* 3D: hero scene follows the pointer; cards tilt on hover */
  const scene = document.getElementById("scene"), stage = document.getElementById("stage");
  if (!reduce && matchMedia("(hover: hover)").matches) {
    window.addEventListener("pointermove", e => {
      if (!scene) return;
      const r = scene.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / innerWidth, y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      stage.style.transform = "rotateX(" + (8 - y * 16) + "deg) rotateY(" + (-14 + x * 26) + "deg)";
    });
    document.addEventListener("pointermove", e => {
      const t = e.target.closest(".tilt");
      document.querySelectorAll(".tilt.tilting").forEach(el => { if (el !== t) { el.classList.remove("tilting"); el.style.transform = ""; } });
      if (!t) return;
      const r = t.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      t.classList.add("tilting");
      t.style.transform = "perspective(1000px) rotateY(" + px * 9 + "deg) rotateX(" + (-py * 9) + "deg) translateY(-4px)";
    });
  }

  /* copy */
  document.querySelectorAll("[data-copy]").forEach(btn => btn.addEventListener("click", () => {
    const done = () => { btn.textContent = "Copied"; setTimeout(() => btn.textContent = "Copy", 1600); };
    const sel = () => { const r = document.createRange(); r.selectNodeContents(document.getElementById("email-text")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done).catch(sel); else sel();
  }));

  /* mobile menu */
  const menuBtn = document.getElementById("menu-btn"), links = document.getElementById("nav-links");
  const setMenu = o => { links.classList.toggle("open", o); menuBtn.setAttribute("aria-expanded", o); menuBtn.textContent = o ? "Close" : "Menu"; };
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });

  /* current page in nav */
  const page = document.body.dataset.page;
  const navKey = page === "home" ? "home" : "ai-governance";
  const navCur = document.querySelector('[data-nav="' + navKey + '"]'); if (navCur) navCur.setAttribute("aria-current", "page");

  /* reading progress on the article */
  const prog = document.getElementById("progress");
  window.addEventListener("scroll", () => {
    if (!prog) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = "scaleX(" + (max > 0 ? Math.min(1, scrollY / max) : 0) + ")";
  }, { passive: true });
})();
