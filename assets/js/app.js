/**
 * Rebala Village CSP — Interactive Documentary Application
 * Reads photo & map configuration strictly from `window.CSP_MEDIA` (assets/js/photos.js).
 */
(function () {
  "use strict";

  const MEDIA = window.CSP_MEDIA || {
    heroPhoto: null,
    weeklyPhotos: {
      week1: [], week2: [], week3: [], week4: [],
      week5: [], week6: [], week7: [], week8: []
    },
    mapStudyContext: {
      villageName: "Rebala Village",
      mandal: "Buchireddypalem Mandal",
      district: "SPSR Nellore District",
      state: "Andhra Pradesh, India",
      approxCenterLat: 14.5202,
      approxCenterLng: 79.9056,
      defaultZoom: 15,
      approxRadiusMeters: 650
    },
    mapLocations: []
  };

  const WEEK_META = [
    { key: "week1", label: "Week 1", folder: "assets/images/week-1/", dates: "01–06 Jun 2026" },
    { key: "week2", label: "Week 2", folder: "assets/images/week-2/", dates: "08–13 Jun 2026" },
    { key: "week3", label: "Week 3", folder: "assets/images/week-3/", dates: "15–20 Jun 2026" },
    { key: "week4", label: "Week 4", folder: "assets/images/week-4/", dates: "22–27 Jun 2026" },
    { key: "week5", label: "Week 5", folder: "assets/images/week-5/", dates: "29 Jun–04 Jul 2026" },
    { key: "week6", label: "Week 6", folder: "assets/images/week-6/", dates: "06–11 Jul 2026" },
    { key: "week7", label: "Week 7", folder: "assets/images/week-7/", dates: "13–25 Jul 2026 (Combined)" },
    { key: "week8", label: "Week 8", folder: "assets/images/week-8/", dates: "13–25 Jul 2026 (Combined)" }
  ];

  const FACILITY_LABELS = {
    "rwss-plant": "RWSS Mineral Water Plant",
    "overhead-tank": "Overhead Storage Reservoir",
    "standposts": "Public Standposts & Tap Room",
    "washing-platform": "Multi-Tap Washing Platform",
    "hand-pumps": "Hand Pumps",
    "pumping-installation": "Water-Pumping Installations",
    "borewells": "Borewells",
    "school-awareness": "School Awareness",
    "sachivalayam": "Gram Sachivalayam",
    "general": "General Fieldwork",
    "website-documentation": "Website Documentation"
  };

  const METHODOLOGY_STAGES = [
    {
      step: "Stage 01 · Week 1",
      title: "Administrative Coordination & Planning",
      summary: "Before inspecting infrastructure, the team reviewed APSCHE CSP guidelines and visited Rebala Gram Sachivalayam (Swarna Rebala 1 & 2) to explain project goals, obtain study permissions, and align with local officials.",
      bullets: [
        "Reviewed 8-week Community Service Project guidelines and objectives.",
        "Briefed Gram Sachivalayam officials on rural drinking water scope.",
        "Planned ethical, non-intrusive village observation routes."
      ]
    },
    {
      step: "Stage 02 · Weeks 1, 3–6",
      title: "Direct Physical Facility Audits",
      summary: "Field visits examined visible structural arrangements, pipeline connections, storage tanks, dispensing points, and site surroundings across multiple locations in Rebala Village.",
      bullets: [
        "Observed the RWSS Mineral Water Plant and container-filling operations.",
        "Inspected the elevated overhead storage reservoir, columns, and spiral staircase.",
        "Studied indoor multi-tap assemblies, washing platforms, hand pumps, and pumping units."
      ]
    },
    {
      step: "Stage 03 · Weeks 1, 2, 5–6",
      title: "Community Interviews & School Outreach",
      summary: "Field observations were paired with human context through conversations with residents near neighborhood hand pumps and an interactive school awareness programme.",
      bullets: [
        "Interviewed local and elderly residents on drinking water availability and access.",
        "Engaged school students on water conservation, hygiene, and avoiding wastage.",
        "Gathered perspectives on everyday reliance on shared neighborhood taps."
      ]
    },
    {
      step: "Stage 04 · Continuous",
      title: "Photographic & Spatial Documentation",
      summary: "Each week concluded with reviewing field notes, organizing photographs, and recording geographical orientation while separating verified observations from unconfirmed coordinates.",
      bullets: [
        "Structured weekly activity logs across Days 1–6 (Weeks 1–6).",
        "Preserved original fieldwork context without fabricated measurements.",
        "Maintained a central visual archive and spatial coordinate registry distinguishing GPS-verified and approximate locations."
      ]
    },
    {
      step: "Stage 05 · Weeks 7–8",
      title: "Digital Synthesis & Transparent Reporting",
      summary: "Field findings were organized into a modular digital monograph presenting infrastructure profiles, recommendations, conservation context, and open verification flags.",
      bullets: [
        "Designed an accessible static web documentation platform.",
        "Explicitly separated direct field observations from unverified metrics.",
        "Compiled findings, recommendations, and APSCHE reporting deliverables."
      ]
    }
  ];

  const FACILITIES_DATA = [
    {
      id: "rwss-plant",
      number: "01",
      name: "Government RWSS Mineral Water Plant",
      weekTag: "Week 1 · Live Water Operations",
      lead: "Community purification and dispensing point visited during Week 1 to observe local drinking water container filling and distribution practices.",
      observed: [
        "Visited the Mineral Water Plant in Rebala Village (Day 5, Week 1), interacted with an attendant at the facility, and observed water filling into containers.",
        "Mini Project operations notes document a ₹5 coin-operated dispensing arrangement providing 20 litres of water.",
        "Mobile tanker delivery operations were also observed alongside walk-up container filling."
      ],
      purpose: "Provides centralized community access to treated drinking water at a nominal local dispensing rate and supports mobile water delivery where needed.",
      gap: "Water-quality laboratory measurements (TDS, pH, or microbiological potability test results) and daily plant output capacity were not tested or documented during this field study."
    },
    {
      id: "overhead-tank",
      number: "02",
      name: "Overhead Water Storage Reservoir (OHT)",
      weekTag: "Week 3 · Elevated Storage",
      lead: "Elevated reinforced concrete storage tank inspected during Week 3 across structural supports, access stairs, and site enclosure.",
      observed: [
        "Observed an elevated tank supported on vertical concrete columns with horizontal bracing within a fenced perimeter.",
        "Documented the external spiral staircase rising alongside the column framework for upper-level access and inspection.",
        "Noted associated vertical water conduits and surrounding open premises during site walks."
      ],
      purpose: "Stores pumped water at elevation to maintain gravity head and support distribution through village pipelines to public outlets and household connections.",
      gap: "Exact storage volume (litres), pumping schedule, and age or structural inspection records were not available in the field documentation."
    },
    {
      id: "standposts",
      number: "03",
      name: "Public Standposts & Indoor Multi-Tap Facility",
      weekTag: "Week 4 · Public Distribution",
      lead: "Shared public water points and an indoor wall-mounted tap assembly connected via a common distribution pipeline.",
      observed: [
        "Visited public water tap locations (Week 4, Day 1) and assessed visibility, access, and immediate surroundings.",
        "Inspected an indoor tap facility (Day 2) featuring multiple taps mounted along a wall and linked by a common supply pipe connected to a storage tank.",
        "Assessed tap condition and discussed the need to prevent unnecessary wastage and keep common water points clean."
      ],
      purpose: "Delivers water at shared neighborhood or institutional points so multiple users can collect or use water simultaneously without relying solely on private connections.",
      gap: "Supply pressure ratings, daily operating hours, and exact number of downstream households served were not measured."
    },
    {
      id: "washing-platform",
      number: "04",
      name: "Multi-Tap Washing Facilities",
      weekTag: "Week 4 · Common Utility Platform",
      lead: "Purpose-built shared washing platform fitted with multiple water outlets observed on Day 3 of Week 4.",
      observed: [
        "Observed a long tiled washing platform fitted with multiple water outlets arranged in sequence along the wall.",
        "Documented how shared multi-outlet design accommodates several community users at one accessible location.",
        "Noted the importance of keeping the platform floor, taps, and runoff drainage clean to prevent stagnant water."
      ],
      purpose: "Consolidates domestic washing and utility water use at a dedicated common platform, reducing congestion and local runoff scatter compared to single outlets.",
      gap: "Source tank volume, wastewater drainage destination, and daily user counts were not quantified."
    },
    {
      id: "hand-pumps",
      number: "05",
      name: "Hand Pumps",
      weekTag: "Week 5 · Residential Groundwater",
      lead: "Manual neighborhood hand pumps documented alongside direct interviews with local residents regarding everyday water access.",
      observed: [
        "Visited residential areas in Rebala Village and observed manual hand pump units serving nearby houses.",
        "Interacted directly with an elderly resident near a hand pump (Week 5) to understand how residents depend on nearby pumps for daily water needs.",
        "Reviewed accessibility and surrounding ground conditions across residential hand pump sites."
      ],
      purpose: "Extracts shallow or medium-depth groundwater manually without continuous electrical power, offering a resilient neighborhood backup or primary source.",
      gap: "Bore depth, seasonal water-table fluctuation, and groundwater potability testing were not measured."
    },
    {
      id: "pumping-installation",
      number: "06",
      name: "Water-Pumping Installations & Pipe Outlets",
      weekTag: "Weeks 5–6 · Mechanical Transfer",
      lead: "Outdoor pumping hardware and open pipe discharge outlets observed across Weeks 5 and 6 to understand water conveyance.",
      observed: [
        "Week 5 (Day 1): Observed an outdoor pipe outlet discharging water toward an adjacent open channel.",
        "Week 6 (Days 1–2): Inspected an outdoor water-pumping installation noting its physical frame, covered upper housing, and connected outlet pipe.",
        "Cross-reviewed how pumping installations link groundwater or source points with overhead storage and distribution pipes."
      ],
      purpose: "Transfers water mechanically from source wells or sumps into overhead reservoirs, local pipelines, or discharge channels.",
      gap: "Motor horsepower, pump manufacturer details, power-outage frequency, and flow discharge rate (LPM) were not documented."
    },
    {
      id: "borewells",
      number: "07",
      name: "Borewells",
      weekTag: "Report Inventory · Groundwater",
      lead: "Groundwater extraction infrastructure referenced across the project executive summary, community overview, and national water-source findings.",
      observed: [
        "Identified in the CSP report overview and findings as a standard rural groundwater extraction mechanism alongside hand pumps.",
        "Referenced within the context of groundwater availability, seasonal rainfall recharge, and avoiding over-extraction."
      ],
      purpose: "Taps deeper subsurface aquifers using motorized or submersible pumping to feed community tanks, public water points, or domestic supply.",
      gap: "Scope Note: While borewells are documented in the report's infrastructure overview, no standalone dated daily visit log was recorded separately for a specific borewell site in Weeks 1–6."
    }
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeLightboxList = [];
  let activeLightboxIndex = 0;
  let lastFocusedTrigger = null;
  let leafletMapInstance = null;
  let leafletMarkersLayer = null;

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getAllRegisteredPhotos() {
    const all = [];
    WEEK_META.forEach((week) => {
      const items = (MEDIA.weeklyPhotos && MEDIA.weeklyPhotos[week.key]) || [];
      items.forEach((photo, idx) => {
        if (photo && photo.src) {
          all.push({
            ...photo,
            weekKey: week.key,
            weekLabel: week.label,
            weekDates: week.dates,
            id: `${week.key}-${idx}`
          });
        }
      });
    });
    return all;
  }

  function applyOrientationClass(container, img, orientationHint, portraitClass, landscapeClass) {
    if (orientationHint === "portrait") {
      container.classList.add(portraitClass);
    } else if (orientationHint === "landscape") {
      container.classList.add(landscapeClass);
    }

    function syncFromImage() {
      if (!img.naturalWidth || !img.naturalHeight) return;
      const isPortrait = img.naturalHeight > img.naturalWidth;
      container.classList.toggle(portraitClass, isPortrait);
      container.classList.toggle(landscapeClass, !isPortrait);
    }

    if (img.complete && img.naturalWidth > 0) {
      syncFromImage();
    } else {
      img.addEventListener("load", syncFromImage, { once: true });
    }
  }

  /* --------------------------------------------------------------------------
     1. HERO FEATURED PHOTO & SCROLL CHOREOGRAPHY
     -------------------------------------------------------------------------- */
  function initHero() {
    const heroPhoto = MEDIA.heroPhoto;
    const mount = document.getElementById("hero-plate-mount");
    const figcaption = document.getElementById("hero-figcaption");

    if (heroPhoto && heroPhoto.src && mount) {
      const frame = document.createElement("div");
      frame.className = "hero-plate__photo-frame";

      const img = document.createElement("img");
      img.src = heroPhoto.src;
      img.alt = heroPhoto.alt || "Fieldwork photograph from Rebala Village Community Service Project";
      img.loading = "eager";
      img.fetchPriority = "high";
      img.decoding = "async";
      if (heroPhoto.objectPosition) {
        img.style.objectPosition = heroPhoto.objectPosition;
      }

      img.addEventListener("error", () => {
        mount.innerHTML = `
          <div class="hero-plate__placeholder">
            <div class="hero-plate__header">
              <span class="mono-label">FIELD PLATE 00 · MONOGRAPH COVER</span>
              <span class="mono-label">REBALA VILLAGE CSP</span>
            </div>
            <div class="hero-plate__footer">
              <p class="hero-plate__caption-sub">Featured fieldwork photograph is currently unavailable.</p>
            </div>
          </div>
        `;
        if (figcaption) figcaption.hidden = true;
      });

      frame.appendChild(img);
      mount.innerHTML = "";
      mount.appendChild(frame);

      if (figcaption && heroPhoto.caption) {
        figcaption.textContent = heroPhoto.caption;
        figcaption.hidden = false;
      }
    }
  }

  function initScrollEffects() {
    const progressBar = document.getElementById("scroll-progress-bar");
    const header = document.getElementById("site-header");
    const backToTop = document.getElementById("back-to-top");
    const hero = document.getElementById("home");
    let ticking = false;

    function updateOnScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

      if (progressBar) {
        progressBar.style.width = `${scrollPct.toFixed(2)}%`;
      }
      if (header) {
        header.classList.toggle("is-scrolled", scrollY > 24);
      }
      if (backToTop) {
        backToTop.hidden = scrollY < 480;
      }
      if (hero && !prefersReducedMotion) {
        const heroHeight = hero.offsetHeight || 600;
        const heroProgress = Math.min(1, Math.max(0, scrollY / (heroHeight * 0.85)));
        document.documentElement.style.setProperty("--hero-scroll", heroProgress.toFixed(4));
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth"
        });
      });
    }

    updateOnScroll();
  }

  /* --------------------------------------------------------------------------
     2. NAVIGATION, MOBILE DRAWER & INTERSECTION OBSERVERS
     -------------------------------------------------------------------------- */
  function initNavigation() {
    const menuToggle = document.getElementById("menu-toggle");
    const drawer = document.getElementById("mobile-drawer");

    function setDrawerOpen(open) {
      if (!menuToggle || !drawer) return;
      menuToggle.setAttribute("aria-expanded", String(open));
      drawer.hidden = !open;
    }

    if (menuToggle && drawer) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setDrawerOpen(!isOpen);
      });

      drawer.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => setDrawerOpen(false));
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
          setDrawerOpen(false);
          menuToggle.focus();
        }
      });

      const desktopMedia = window.matchMedia("(min-width: 1081px)");
      desktopMedia.addEventListener("change", (e) => {
        if (e.matches && !drawer.hidden) {
          setDrawerOpen(false);
        }
      });
    }

    // Deterministic single-active section highlight
    const navLinks = Array.from(document.querySelectorAll(".nav-link[data-section]"));
    const mobileNavLinks = Array.from(document.querySelectorAll(".mobile-nav-link[data-section]"));
    const sectionOrder = navLinks
      .map((link) => document.getElementById(link.dataset.section))
      .filter(Boolean);

    const weekLinks = Array.from(document.querySelectorAll(".week-nav__link[data-week]"));
    const weekChapters = weekLinks
      .map((link) => document.getElementById(link.dataset.week))
      .filter(Boolean);

    let scrollSpyTicking = false;

    function syncActiveLinkGroup(links, key, activeVal) {
      links.forEach((l) => {
        const active = l.dataset[key] === activeVal;
        l.classList.toggle("is-active", active);
        if (active) {
          l.setAttribute("aria-current", "location");
        } else {
          l.removeAttribute("aria-current");
        }
      });
    }

    function setActiveNavSection(activeId) {
      syncActiveLinkGroup(navLinks, "section", activeId);
      syncActiveLinkGroup(mobileNavLinks, "section", activeId);
    }

    function setActiveWeekLink(activeWeekId) {
      syncActiveLinkGroup(weekLinks, "week", activeWeekId);
    }

    function syncActiveNavigation() {
      scrollSpyTicking = false;
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerY = Math.max(120, Math.round(window.innerHeight * 0.28));

      if (sectionOrder.length) {
        let activeId = sectionOrder[0].id;
        if (scrollY > 80) {
          const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 24;
          if (atBottom) {
            activeId = sectionOrder[sectionOrder.length - 1].id;
          } else {
            for (let i = 0; i < sectionOrder.length; i += 1) {
              const rect = sectionOrder[i].getBoundingClientRect();
              if (rect.top <= triggerY) {
                activeId = sectionOrder[i].id;
              }
            }
          }
        }
        setActiveNavSection(activeId);
      }

      if (weekChapters.length) {
        let activeWeekId = weekChapters[0].id;
        for (let i = 0; i < weekChapters.length; i += 1) {
          const rect = weekChapters[i].getBoundingClientRect();
          if (rect.top <= triggerY) {
            activeWeekId = weekChapters[i].id;
          }
        }
        setActiveWeekLink(activeWeekId);
      }
    }

    function requestNavSync() {
      if (!scrollSpyTicking) {
        window.requestAnimationFrame(syncActiveNavigation);
        scrollSpyTicking = true;
      }
    }

    window.addEventListener("scroll", requestNavSync, { passive: true });
    window.addEventListener("resize", requestNavSync, { passive: true });
    window.addEventListener("hashchange", () => setTimeout(syncActiveNavigation, 50));
    syncActiveNavigation();
  }

  function initReveals() {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("js-reveal-ready");

    function revealInOrAboveView() {
      const thresholdY = window.innerHeight + 120;
      revealEls.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= thresholdY) {
          el.classList.add("is-visible");
        }
      });
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "120px 0px 120px 0px", threshold: 0 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    revealInOrAboveView();

    window.addEventListener("scroll", revealInOrAboveView, { passive: true });
    window.addEventListener("hashchange", () => setTimeout(revealInOrAboveView, 60));
  }

  /* --------------------------------------------------------------------------
     3. METHODOLOGY TABS
     -------------------------------------------------------------------------- */
  function initMethodology() {
    const tabs = Array.from(document.querySelectorAll(".method-tab"));
    const panel = document.getElementById("methodology-panel");
    if (!tabs.length || !panel) return;

    function renderStage(index, moveFocus) {
      const safeIndex = (index + tabs.length) % tabs.length;
      const stage = METHODOLOGY_STAGES[safeIndex] || METHODOLOGY_STAGES[0];
      tabs.forEach((t, idx) => {
        const active = idx === safeIndex;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
        t.setAttribute("tabindex", active ? "0" : "-1");
      });

      if (tabs[safeIndex] && tabs[safeIndex].id) {
        panel.setAttribute("aria-labelledby", tabs[safeIndex].id);
      }

      panel.innerHTML = `
        <div class="methodology-panel__grid">
          <div>
            <span class="mono-label">${escapeHtml(stage.step)}</span>
            <h4>${escapeHtml(stage.title)}</h4>
            <p>${escapeHtml(stage.summary)}</p>
          </div>
          <div>
            <span class="mono-label">Key Documentary Actions</span>
            <ul class="methodology-panel__bullets" style="margin-top:0.65rem;">
              ${stage.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;

      if (moveFocus && tabs[safeIndex]) {
        tabs[safeIndex].focus();
      }
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => renderStage(idx, false));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          renderStage(idx + 1, true);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          renderStage(idx - 1, true);
        } else if (e.key === "Home") {
          e.preventDefault();
          renderStage(0, true);
        } else if (e.key === "End") {
          e.preventDefault();
          renderStage(tabs.length - 1, true);
        }
      });
    });

    renderStage(0, false);
  }

  /* --------------------------------------------------------------------------
     4. WEEK-BY-WEEK GALLERIES
     -------------------------------------------------------------------------- */
  function buildPhotoFigure(photo, index, listForLightbox, isLead) {
    const figure = document.createElement("figure");
    const isScreenshot = photo.facility === "website-documentation";
    figure.className = `photo-plate${isLead ? " photo-plate--lead" : ""}${isScreenshot ? " photo-plate--screenshot" : ""}`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo-plate__trigger";
    btn.setAttribute(
      "aria-label",
      `Inspect ${isScreenshot ? "website documentation screenshot" : "photograph"}: ${photo.alt || photo.caption || "Project media"}`
    );

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || photo.caption || "Rebala Village CSP fieldwork photograph";
    img.loading = "lazy";
    img.decoding = "async";
    if (photo.objectPosition) {
      img.style.objectPosition = photo.objectPosition;
    }

    applyOrientationClass(figure, img, photo.orientation, "photo-plate--portrait", "photo-plate--landscape");

    img.addEventListener("error", () => {
      figure.innerHTML = `
        <div class="week-gallery__empty">
          <p class="week-gallery__empty-title">Photograph currently unavailable.</p>
          <span class="mono-label">Check Media Source</span>
        </div>
      `;
    });

    btn.addEventListener("click", () => openLightbox(listForLightbox, index, btn));
    btn.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "photo-plate__caption";
    const metaParts = [photo.date, photo.location, FACILITY_LABELS[photo.facility]].filter(Boolean);
    figcaption.innerHTML = `
      <p>${escapeHtml(photo.caption || photo.alt || "")}</p>
      ${metaParts.length ? `<span class="mono-label">${escapeHtml(metaParts.join(" · "))}</span>` : ""}
    `;

    figure.appendChild(btn);
    figure.appendChild(figcaption);
    return figure;
  }

  function initWeeklyGalleries(allPhotos) {
    WEEK_META.forEach((week) => {
      const mount = document.getElementById(`week-gallery-${week.key}`);
      if (!mount) return;
      const validItems = allPhotos.filter((p) => p.weekKey === week.key);

      if (!validItems.length) {
        const isWebsiteDocWeek = week.key === "week7" || week.key === "week8";
        mount.innerHTML = `
          <div class="week-gallery__empty">
            <p class="week-gallery__empty-title">
              ${isWebsiteDocWeek
                ? `<strong>${escapeHtml(week.label)} Website Documentation Slot</strong> — Reserved for photographs and screenshots of the completed website, to be added after completion of the website.`
                : `<strong>${escapeHtml(week.label)} Photography Slot</strong> — Reserved for documented project photographs.`}
            </p>
            <span class="mono-label">${isWebsiteDocWeek ? "Reserved · Website Documentation" : "Reserved Slot"}</span>
          </div>
        `;
        return;
      }

      const grid = document.createElement("div");
      grid.className = "week-gallery__grid";
      validItems.forEach((photo, idx) => {
        const isLead = idx === 0 && validItems.length % 2 === 1;
        grid.appendChild(buildPhotoFigure(photo, idx, validItems, isLead));
      });
      mount.innerHTML = "";
      mount.appendChild(grid);
    });
  }

  /* --------------------------------------------------------------------------
     5. WATER FACILITIES DOCUMENTATION
     -------------------------------------------------------------------------- */
  function renderFacilityCard(facility, allPhotos) {
    const related = allPhotos.filter((p) => p.facility === facility.id);

    const article = document.createElement("article");
    article.className = "facility-dossier";
    article.id = `facility-${facility.id}`;
    article.innerHTML = `
      <header class="facility-dossier__head">
        <div class="facility-dossier__tags">
          <span class="mono-pill">Facility ${escapeHtml(facility.number)}</span>
          <span class="mono-label">${escapeHtml(facility.weekTag)}</span>
        </div>
        <h3>${escapeHtml(facility.name)}</h3>
        <p class="facility-dossier__lead">${escapeHtml(facility.lead)}</p>
      </header>

      <div class="facility-dossier__columns">
        <div class="dossier-block">
          <h4>What We Observed on Field</h4>
          <ul>
            ${facility.observed.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="dossier-block">
          <h4>General Infrastructure Purpose</h4>
          <p>${escapeHtml(facility.purpose)}</p>
        </div>
      </div>

      <div class="dossier-gap">
        <strong>Not Documented / Unconfirmed:</strong> ${escapeHtml(facility.gap)}
      </div>
    `;

    const photoWrap = document.createElement("div");
    photoWrap.className = "facility-photos";
    if (!related.length) {
      photoWrap.innerHTML = `
        <div class="week-gallery__empty">
          <p class="week-gallery__empty-title">
            No separate site-specific photograph was captured for ${escapeHtml(facility.name)} during the Weeks 1–6 field visits.
          </p>
          <span class="mono-label">Reported in Inventory</span>
        </div>
      `;
    } else {
      const grid = document.createElement("div");
      grid.className = "week-gallery__grid";
      related.forEach((photo, idx) => {
        grid.appendChild(buildPhotoFigure(photo, idx, related, related.length === 1));
      });
      photoWrap.appendChild(grid);
    }

    article.appendChild(photoWrap);
    return article;
  }

  function initFacilities(allPhotos) {
    const showcase = document.getElementById("facilities-showcase");
    const panel = document.getElementById("facility-dossier-panel");
    const toggleAllBtn = document.getElementById("toggle-all-facilities");
    const selectorBtns = Array.from(document.querySelectorAll(".facility-btn"));
    if (!showcase || !panel) return;
    let currentId = FACILITIES_DATA[0].id;
    let showAll = false;

    function render() {
      panel.innerHTML = "";
      showcase.classList.toggle("is-all-mode", showAll);

      if (showAll) {
        FACILITIES_DATA.forEach((fac) => panel.appendChild(renderFacilityCard(fac, allPhotos)));
      } else {
        const found = FACILITIES_DATA.find((f) => f.id === currentId) || FACILITIES_DATA[0];
        panel.appendChild(renderFacilityCard(found, allPhotos));
      }

      selectorBtns.forEach((btn) => {
        const active = !showAll && btn.dataset.facilityId === currentId;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
    }

    selectorBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentId = btn.dataset.facilityId;
        showAll = false;
        if (toggleAllBtn) {
          toggleAllBtn.setAttribute("aria-pressed", "false");
          toggleAllBtn.textContent = "View All 7 Facilities Together";
        }
        render();
        if (window.innerWidth <= 1080) {
          panel.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
        }
      });
    });

    if (toggleAllBtn) {
      toggleAllBtn.addEventListener("click", () => {
        showAll = !showAll;
        toggleAllBtn.setAttribute("aria-pressed", String(showAll));
        toggleAllBtn.textContent = showAll ? "Return to Interactive Selector" : "View All 7 Facilities Together";
        render();
      });
    }

    render();
  }

  /* --------------------------------------------------------------------------
     6. INTERACTIVE MAP (OPENSTREETMAP + GRACEFUL FALLBACK)
     -------------------------------------------------------------------------- */
  function renderMapFallback(container, ctx) {
    const osmUrl = `https://www.openstreetmap.org/#map=${ctx.defaultZoom}/${ctx.approxCenterLat}/${ctx.approxCenterLng}`;
    container.innerHTML = `
      <div class="map-fallback">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
          <span class="mono-pill">Study Area Orientation</span>
          <span class="mono-label">${escapeHtml(ctx.villageName)}, ${escapeHtml(ctx.mandal)}</span>
        </div>
        <div class="map-fallback__ring">
          <div>
            <p style="margin:0 0 0.3rem; font-family:var(--font-serif); font-size:1.1rem; font-weight:500;">Rebala Study Zone</p>
            <p style="margin:0; font-size:0.78rem; color:var(--ink-secondary);">Approximate 650 m map reference around documented facilities (~${ctx.approxCenterLat.toFixed(4)}° N, ${ctx.approxCenterLng.toFixed(4)}° E, not an official village boundary). Includes 1 GPS-verified Week 6 hand-pump pin and 5 approximate facility locations.</p>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-size:0.8rem;">
          <span class="mono-label">Map tiles unavailable offline · OpenStreetMap attribution</span>
          <a href="${osmUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-water); font-weight:600;">Open Rebala on OpenStreetMap ↗</a>
        </div>
      </div>
    `;
  }

  function loadLeafletAsync(timeoutMs) {
    return new Promise((resolve) => {
      if (typeof window.L !== "undefined") {
        resolve(window.L);
        return;
      }
      let settled = false;
      const done = (val) => {
        if (settled) return;
        settled = true;
        resolve(val);
      };
      const timer = setTimeout(() => done(null), timeoutMs);
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.crossOrigin = "";
      script.async = true;
      script.onload = () => {
        clearTimeout(timer);
        done(window.L || null);
      };
      script.onerror = () => {
        clearTimeout(timer);
        done(null);
      };
      document.head.appendChild(script);
    });
  }

  async function initMap() {
    const mapContainer = document.getElementById("rebala-map");
    const listContainer = document.getElementById("map-location-list");
    const filterBtns = Array.from(document.querySelectorAll("[data-map-filter]"));
    const ctx = MEDIA.mapStudyContext;
    const locations = MEDIA.mapLocations || [];

    function renderLocationList(filter) {
      if (!listContainer) return;
      const filtered = locations.filter((loc) => {
        if (filter === "all") return true;
        if (filter === "verified") return loc.status === "verified";
        if (filter === "approximate") return loc.status === "approximate";
        return loc.status === "pending";
      });

      if (!filtered.length) {
        listContainer.innerHTML = `
          <li class="location-item">
            <p>No facility markers currently have <strong>${escapeHtml(filter)}</strong> status.</p>
          </li>
        `;
        return;
      }

      listContainer.innerHTML = filtered
        .map((loc) => {
          const isConfirmed = loc.status === "verified" && typeof loc.lat === "number" && typeof loc.lng === "number";
          const isApprox = loc.status === "approximate" && typeof loc.lat === "number" && typeof loc.lng === "number";
          const badgeClass = isConfirmed ? "mono-pill" : "mono-pill mono-pill--amber";
          const badgeLabel = isConfirmed
            ? "GPS Ground-Truth"
            : isApprox
              ? "Approximate Field Location"
              : "Pending GPS Confirmation";
          let coordText = "Coordinates withheld pending author confirmation";
          if (isConfirmed) {
            coordText = `GPS Verified: ${loc.lat.toFixed(6)}° N, ${loc.lng.toFixed(6)}° E` +
              (loc.plusCode ? ` · Plus Code: ${loc.plusCode}` : "");
          } else if (isApprox) {
            coordText = `Approximate: ${loc.lat.toFixed(4)}° N, ${loc.lng.toFixed(4)}° E` +
              (loc.uncertaintyMeters ? ` (±${loc.uncertaintyMeters}m field reference)` : "");
          }

          return `
            <li class="location-item" data-loc-id="${escapeHtml(loc.id)}">
              <div class="location-item__top">
                <span class="mono-label">Slot ${escapeHtml(loc.slotNumber)} · ${escapeHtml(loc.weekRef)}</span>
                <span class="${badgeClass}">${escapeHtml(badgeLabel)}</span>
              </div>
              <h4>${escapeHtml(loc.name)}</h4>
              <p>${escapeHtml(loc.description)}</p>
              <p class="location-item__coords">${escapeHtml(coordText)}</p>
              ${loc.pinNote ? `<p class="location-item__coords" style="margin-top:0.25rem; color:var(--ink-secondary);">${escapeHtml(loc.pinNote)}</p>` : ""}
            </li>
          `;
        })
        .join("");
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        renderLocationList(btn.dataset.mapFilter);
      });
    });

    renderLocationList("all");

    if (!mapContainer) return;
    const L = await loadLeafletAsync(5000);
    if (!L) {
      renderMapFallback(mapContainer, ctx);
      return;
    }

    try {
      leafletMapInstance = L.map(mapContainer, {
        center: [ctx.approxCenterLat, ctx.approxCenterLng],
        zoom: ctx.defaultZoom,
        scrollWheelZoom: false
      });

      const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        referrerPolicy: "strict-origin-when-cross-origin",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
      });

      let tileErrors = 0;
      let tilesLoaded = 0;
      tiles.on("tileload", () => {
        tilesLoaded += 1;
      });
      tiles.on("tileerror", () => {
        tileErrors += 1;
        if (tileErrors >= 3 && tilesLoaded === 0) {
          leafletMapInstance.remove();
          leafletMapInstance = null;
          renderMapFallback(mapContainer, ctx);
        }
      });

      tiles.addTo(leafletMapInstance);

      // Approximate map reference circle (explicitly not an official village boundary)
      L.circle([ctx.approxCenterLat, ctx.approxCenterLng], {
        radius: ctx.approxRadiusMeters,
        color: "#17596C",
        weight: 1.5,
        dashArray: "6 6",
        fillColor: "#17596C",
        fillOpacity: 0.08
      })
        .bindPopup(
          `<strong>${escapeHtml(ctx.villageName)} — Map Reference Zone (650 m)</strong><br>` +
          `${escapeHtml(ctx.mandal)}, ${escapeHtml(ctx.district)}<br>` +
          `<em>Approximate map reference framing the documented facilities, not an official village administrative boundary.</em>`
        )
        .addTo(leafletMapInstance);

      leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);

      // Render verified and approximate facility markers from photos.js
      locations.forEach((loc) => {
        if ((loc.status === "verified" || loc.status === "approximate") && typeof loc.lat === "number" && typeof loc.lng === "number") {
          const isVerified = loc.status === "verified";
          const marker = L.circleMarker([loc.lat, loc.lng], {
            radius: 8,
            color: isVerified ? "#0D2430" : "#8B451E",
            weight: 2,
            fillColor: isVerified ? "#17596C" : "#D98A4E",
            fillOpacity: 0.9
          });
          const coordFormatted = isVerified
            ? `${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)}`
            : `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}${loc.uncertaintyMeters ? ` (±${loc.uncertaintyMeters}m)` : ""}`;
          const label = isVerified ? "GPS Ground-Truth (Week 6 Hand Pump)" : "Approximate Field Location";
          marker.bindPopup(
            `<strong>${escapeHtml(loc.name)}</strong><br>` +
            `<small>${label}: ${coordFormatted}${isVerified && loc.plusCode ? ` · ${escapeHtml(loc.plusCode)}` : ""}</small><br>` +
            `${escapeHtml(loc.description)}` +
            (loc.pinNote ? `<br><small><em>${escapeHtml(loc.pinNote)}</em></small>` : "")
          );
          marker.addTo(leafletMarkersLayer);
        }
      });
    } catch (_err) {
      renderMapFallback(mapContainer, ctx);
    }
  }

  /* --------------------------------------------------------------------------
     7. PHOTO ARCHIVE & ACCESSIBLE LIGHTBOX
     -------------------------------------------------------------------------- */
  function setBackgroundInert(isInert) {
    ["site-header", "main-content", "back-to-top"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.inert = isInert;
    });
    const footer = document.querySelector(".site-footer");
    if (footer) footer.inert = isInert;
  }

  function openLightbox(photosList, startIndex, triggerEl) {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || !photosList.length) return;

    activeLightboxList = photosList;
    activeLightboxIndex = Math.max(0, Math.min(startIndex, photosList.length - 1));
    lastFocusedTrigger = triggerEl || document.activeElement;

    updateLightboxView();
    lightbox.hidden = false;
    setBackgroundInert(true);
    document.body.style.overflow = "hidden";

    const closeBtn = document.getElementById("lightbox-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || lightbox.hidden) return;
    const img = document.getElementById("lightbox-image");
    if (img) img.removeAttribute("src");
    lightbox.hidden = true;
    setBackgroundInert(false);
    document.body.style.overflow = "";
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  function stepLightbox(delta) {
    if (!activeLightboxList.length) return;
    activeLightboxIndex = (activeLightboxIndex + delta + activeLightboxList.length) % activeLightboxList.length;
    updateLightboxView();
  }

  function updateLightboxView() {
    const item = activeLightboxList[activeLightboxIndex];
    if (!item) return;

    const img = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const meta = document.getElementById("lightbox-meta");
    const counter = document.getElementById("lightbox-counter");

    if (img) {
      img.src = item.src;
      img.alt = item.alt || item.caption || "Fieldwork photograph";
    }
    if (caption) {
      caption.textContent = item.caption || item.alt || "Fieldwork Documentation";
    }
    if (meta) {
      const parts = [item.weekLabel, item.date, item.location, FACILITY_LABELS[item.facility]].filter(Boolean);
      meta.textContent = parts.join(" · ");
    }
    if (counter) {
      counter.textContent = `${activeLightboxIndex + 1} / ${activeLightboxList.length}`;
    }
  }

  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (!lightbox || lightbox.dataset.bound === "1") return;
    lightbox.dataset.bound = "1";

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
      el.addEventListener("click", closeLightbox);
    });
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", () => stepLightbox(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepLightbox(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stepLightbox(1);
      } else if (e.key === "Tab") {
        const focusables = Array.from(
          lightbox.querySelectorAll("button:not([disabled])")
        ).filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Mobile swipe support
    let touchStartX = 0;
    lightbox.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    lightbox.addEventListener(
      "touchend",
      (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 48) {
          stepLightbox(diff > 0 ? -1 : 1);
        }
      },
      { passive: true }
    );
  }

  function initArchive(allPhotos) {
    const stage = document.getElementById("archive-stage");
    const countLabel = document.getElementById("archive-count");
    const weekButtons = Array.from(document.querySelectorAll("[data-archive-week]"));
    const categorySelect = document.getElementById("archive-facility-filter");
    if (!stage) return;
    let activeWeek = "all";
    let activeFacility = "all";

    function renderArchive() {
      const filtered = allPhotos.filter((p) => {
        const weekMatch = activeWeek === "all" || p.weekKey === activeWeek;
        const facMatch = activeFacility === "all" || p.facility === activeFacility;
        return weekMatch && facMatch;
      });

      if (countLabel) {
        countLabel.textContent = allPhotos.length === 0
          ? "0 photographs uploaded"
          : `${filtered.length} of ${allPhotos.length} shown`;
      }

      if (allPhotos.length === 0) {
        stage.innerHTML = `
          <div class="archive-manifest">
            <div class="archive-manifest__intro">
              <h3>Fieldwork &amp; Website Documentation Archive</h3>
              <p>
                Documentary photographs for Weeks 1–8 will appear here once published.
              </p>
            </div>
            <div class="manifest-grid">
              ${WEEK_META.map((w) => `
                <div class="manifest-slot">
                  <span class="mono-label">${escapeHtml(w.dates)}</span>
                  <span class="manifest-slot__week">${escapeHtml(w.label)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `;
        return;
      }

      if (!filtered.length) {
        const weekLabel = activeWeek === "all"
          ? "All Weeks"
          : (WEEK_META.find((w) => w.key === activeWeek) || { label: activeWeek }).label;
        const facLabel = activeFacility === "all"
          ? "All Categories"
          : (FACILITY_LABELS[activeFacility] || activeFacility);

        if ((activeWeek === "week7" || activeWeek === "week8") && activeFacility === "all") {
          stage.innerHTML = `
            <div class="archive-manifest">
              <p style="margin:0;"><strong>${escapeHtml(weekLabel)} Reserved:</strong> Website documentation photographs and screenshots will be added in ${escapeHtml(weekLabel)} after completion of the website.</p>
            </div>
          `;
        } else {
          stage.innerHTML = `
            <div class="archive-manifest">
              <p style="margin:0;">No photographs currently match <strong>${escapeHtml(weekLabel)}</strong> / <strong>${escapeHtml(facLabel)}</strong>.</p>
            </div>
          `;
        }
        return;
      }

      const grid = document.createElement("div");
      grid.className = "archive-grid";

      filtered.forEach((photo, idx) => {
        const fig = document.createElement("figure");
        const isFeature = idx % 5 === 0;
        const isScreenshot = photo.facility === "website-documentation";
        fig.className = `archive-card${isFeature ? " archive-card--feature" : ""}${isScreenshot ? " archive-card--screenshot" : ""}`;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "archive-card__btn";
        btn.setAttribute(
          "aria-label",
          `Open full view: ${photo.alt || photo.caption || (isScreenshot ? "Website documentation screenshot" : "Fieldwork photo")}`
        );

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt || photo.caption || "Rebala Village fieldwork photograph";
        img.loading = "lazy";
        img.decoding = "async";
        if (photo.objectPosition) img.style.objectPosition = photo.objectPosition;

        applyOrientationClass(fig, img, photo.orientation, "archive-card--portrait", "archive-card--landscape");

        img.addEventListener("error", () => {
          fig.innerHTML = `
            <div class="week-gallery__empty">
              <p class="week-gallery__empty-title">Photograph currently unavailable.</p>
            </div>
          `;
        });

        btn.addEventListener("click", () => openLightbox(filtered, idx, btn));
        btn.appendChild(img);

        const body = document.createElement("figcaption");
        body.className = "archive-card__body";
        body.innerHTML = `
          <div class="archive-card__meta">
            <span class="mono-pill">${escapeHtml(photo.weekLabel)}</span>
            ${photo.facility ? `<span class="mono-label">${escapeHtml(FACILITY_LABELS[photo.facility] || photo.facility)}</span>` : ""}
          </div>
          <p>${escapeHtml(photo.caption || photo.alt || "")}</p>
        `;

        fig.appendChild(btn);
        fig.appendChild(body);
        grid.appendChild(fig);
      });

      stage.innerHTML = "";
      stage.appendChild(grid);
    }

    weekButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeWeek = btn.dataset.archiveWeek;
        weekButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        renderArchive();
      });
    });

    if (categorySelect) {
      categorySelect.addEventListener("change", () => {
        activeFacility = categorySelect.value;
        renderArchive();
      });
    }

    renderArchive();
  }

  /* --------------------------------------------------------------------------
     BOOT
     -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initHero();
    initScrollEffects();
    initNavigation();
    initReveals();
    initMethodology();
    const allPhotos = getAllRegisteredPhotos();
    initWeeklyGalleries(allPhotos);
    initFacilities(allPhotos);
    initMap();
    initLightbox();
    initArchive(allPhotos);
  });
})();
