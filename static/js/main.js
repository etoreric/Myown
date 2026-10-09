const site = {
  company: {
    name: "Ricset",
    tagline: "Creating intelligent digital products for ambitious organizations.",
    email: "aricsoftgh@gmail.com",
    phone: "+233 24 169 0006",
    whatsapp: "https://wa.me/233241690006",
    linkedin: "https://www.linkedin.com/in/eric-buatsi-b62ba3250/",
    location: "Accra · Worldwide",
    meta_description:
      "Ricset is a strategy, design, and technology studio building software, websites, and intelligent digital experiences.",
  },
  media: {
    hero_video: "https://v1.pinimg.com/videos/iht/expMp4/cc/f9/ac/ccf9ac3f96709da35790de273b0663cf_720w.mp4",
    hero_poster: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88",
  },
  hero: {
    kicker: "Independent digital studio",
    eyebrow: "Strategy · Design · Engineering",
    title_line_1: "WE BUILD THE",
    title_line_2: "DIGITAL FUTURE.",
    subtitle:
      "Transforming ideas into powerful software, innovative websites, and intelligent digital experiences.",
    cta_primary: "Let's build something",
    cta_secondary: "Explore our work",
  },
  about: {
    eyebrow: "About the Innovation",
    title: "ENGINEERING IDEAS INTO REALITY.",
    intro:
      "We are a strategy, design, and technology studio for organizations ready to move beyond ordinary.",
    statement:
      "We combine deep technical thinking with expressive design to create digital products that feel inevitable.",
  },
  footer: {
    copyright: "© 2026 Ricset",
    powered_by: "Powered by Ricset · +233241690006",
  },
  service_options: [
    "Website development",
    "Software development",
    "Web application",
    "AI application",
    "School management system",
  ],
  technologies: [
    ["PY", "Python"],
    ["FL", "Flask"],
    ["JS", "JavaScript"],
    ["RE", "React"],
    ["H5", "HTML5"],
    ["C3", "CSS3"],
    ["BS", "Bootstrap"],
    ["3J", "Three.js"],
    ["MY", "MySQL"],
    ["PG", "PostgreSQL"],
    ["GT", "Git"],
    ["CL", "Cloud"],
  ],
  principles: [
    ["zap", "Modern technology", "A future-ready stack, selected for your exact challenge."],
    ["sparkles", "Creative problem-solving", "Fresh thinking grounded in business reality."],
    ["mouse-pointer-2", "User-focused design", "Every decision begins with the person using it."],
    ["shield-check", "Reliable performance", "Secure, resilient, and obsessively optimized."],
    ["cloud", "Scalable solutions", "Architecture that grows without getting in the way."],
    ["message-circle", "Dedicated support", "A long-term technical partner, not a hand-off."],
  ],
};

const services = [
  {
    icon: "earth",
    number: "01",
    title: "Website Development",
    text: "High-performance digital flagships built to turn attention into action.",
    items: ["Corporate platforms", "E-commerce", "Portfolio experiences"],
  },
  {
    icon: "blocks",
    number: "02",
    title: "Software Development",
    text: "Purpose-built systems that remove friction and move your business forward.",
    items: ["Business software", "Enterprise tools", "Automation"],
  },
  {
    icon: "code-xml",
    number: "03",
    title: "Web Applications",
    text: "Scalable cloud products with intuitive interfaces and robust architecture.",
    items: ["Dashboards", "Customer portals", "Online platforms"],
  },
  {
    icon: "sparkles",
    number: "04",
    title: "AI Application",
    text: "Smart, workflow-driven tools that automate decisions, analysis, and customer experience.",
    items: ["AI chat assistants", "Workflow automation", "Intelligent dashboards"],
  },
  {
    icon: "graduation-cap",
    number: "05",
    title: "School Systems",
    text: "One connected platform for every part of the academic experience.",
    items: ["Students & results", "Fees & attendance", "Parent portals"],
  },
  {
    icon: "wrench",
    number: "06",
    title: "Technical Support",
    text: "Proactive care that keeps your digital infrastructure secure and fast.",
    items: ["Maintenance", "Deployment", "Priority support"],
  },
];

const projects = [
  {
    title: "BLUE STONE LIMITED",
    category: "Medical laboratory & diagnostics",
    image: "https://bslmedicals.com/assets/img/top.jpg",
    image_alt: "Blue Stone Limited medical laboratory and diagnostics landing page",
    url: "https://bslmedicals.com/",
    tech: ["Diagnostics", "Laboratory", "Healthcare"],
    wide: false,
  },
  {
    title: "SUNNYROSES INTERNATIONAL SCHOOL",
    category: "Education & STEM",
    image: "https://sunnyrosesschool.com/assets/img/air/a6.jpg",
    image_alt: "SunnyRoses International School campus from the About section",
    url: "https://sunnyrosesschool.com/",
    tech: ["Education", "Robotics", "Learning"],
    wide: false,
  },
];

const process = [
  ["01", "Discover", "We align on ambition, audience, and the problem worth solving."],
  ["02", "Strategize", "A clear product roadmap turns complexity into focused action."],
  ["03", "Design", "We prototype an interface with a distinctive, intuitive rhythm."],
  ["04", "Develop", "Clean engineering brings every interaction and system to life."],
  ["05", "Validate", "Rigorous QA secures performance, accessibility, and reliability."],
  ["06", "Evolve", "We launch, learn from real usage, and continuously improve."],
];

const capabilities = [
  "Custom software development",
  "Website design & development",
  "Web application development",
  "School management systems",
  "Business management systems",
  "E-commerce solutions",
  "Database & API development",
  "System integration",
];

const sectionHeading = (eyebrow, title, intro = "") => `
  <div class="section-heading reveal">
    <div>
      <span class="eyebrow">
        <span></span>
        ${eyebrow}
      </span>
      <h2>${title}</h2>
    </div>
    ${intro ? `<p>${intro}</p>` : ""}
  </div>
`;

const heroTitle = () => {
  const [first, ...rest] = site.hero.title_line_2.split(" ");
  const secondLine = rest.join(" ");

  return `
    ${site.hero.title_line_1}
    <br />
    ${first} <em>${secondLine}</em>
  `;
};

const renderSite = () => {
  document.body.innerHTML = `
    <div class="cinematic-bg" aria-hidden="true">
      <video
        class="scrub-video"
        id="scrub-video"
        src="${site.media.hero_video}"
        poster="${site.media.hero_poster}"
        preload="auto"
        autoplay
        loop
        muted
        playsinline
        style="opacity: 0.36;"
      ></video>
      <div class="color-wash"></div>
      <div class="noise"></div>
      <div class="three-scene" id="three-scene"></div>
    </div>

    <div class="cursor" id="cursor" aria-hidden="true">
      <span></span>
    </div>

    <header class="site-header">
      <a class="logo" href="#top" aria-label="${site.company.name} home">
        <svg class="logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 4.5h6a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="9.5" cy="11" r="1.25" fill="currentColor"/>
          <circle cx="14.5" cy="11" r="1.25" fill="currentColor"/>
          <path d="M9.25 15.3h5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 2.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 19.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>${site.company.name.toUpperCase()}<span class="dot">.</span></span>
      </a>
      <nav class="nav" id="nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
        <a class="nav-cta" href="#contact">
          Start a project <i data-lucide="arrow-up-right"></i>
        </a>
      </nav>
      <button class="menu-button" type="button" id="menu-button" aria-label="Open menu" aria-expanded="false">
        <span class="icon-open"><i data-lucide="menu"></i></span>
        <span class="icon-close"><i data-lucide="x"></i></span>
      </button>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero-kicker">
          <span>${site.hero.kicker}</span>
          <span>${site.company.location}</span>
        </div>
        <div class="hero-content">
          <p class="eyebrow">
            <span></span>
            ${site.hero.eyebrow}
          </p>
          <h1>${heroTitle()}</h1>
          <div class="hero-bottom">
            <p>${site.hero.subtitle}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">
                ${site.hero.cta_primary} <i data-lucide="arrow-up-right"></i>
              </a>
              <a class="button button-ghost" href="#work">${site.hero.cta_secondary}</a>
            </div>
          </div>
        </div>
        <a class="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <span class="scroll-line">
            <i data-lucide="arrow-down"></i>
          </span>
        </a>
        <div class="hero-index">01 / 09</div>
      </section>

      <section class="section about" id="about">
        ${sectionHeading(site.about.eyebrow, site.about.title, site.about.intro)}
        <div class="about-grid reveal">
          <div class="about-statement">
            <p>${site.about.statement}</p>
          </div>
          <div class="capabilities">
            ${capabilities
              .map(
                (item, index) => `
                  <div>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${item}</p>
                    <i data-lucide="arrow-up-right"></i>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section services" id="services">
        ${sectionHeading("What we do", "BUILT FOR WHAT'S NEXT.", "From first sketch to millions of users, we create digital infrastructure designed to keep evolving.")}
        <div class="services-grid">
          ${services
            .map(
              (service) => `
                <article class="service-card reveal">
                  <div class="service-top">
                    <span>${service.number}</span>
                    <div class="service-icon">
                      <i data-lucide="${service.icon}"></i>
                    </div>
                  </div>
                  <h3>${service.title}</h3>
                  <p>${service.text}</p>
                  <ul>
                    ${service.items.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                  <a href="#contact">
                    Explore service <i data-lucide="arrow-up-right"></i>
                  </a>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section work" id="work">
        ${sectionHeading("Selected work", "BUILT TO MAKE AN IMPACT.", "Digital products that turn ambitious ideas into measurable momentum.")}
        <div class="projects">
          ${projects
            .map(
              (project, index) => `
                <article class="project-card reveal ${project.wide ? "project-wide" : ""}">
                  <div class="project-image">
                    ${project.video
                      ? `<video src="${project.video}" autoplay muted loop playsinline role="img" aria-label="${project.image_alt}"></video>`
                      : `<img src="${project.image}" alt="${project.image_alt}" />`}
                    <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${project.title} website">
                      <i data-lucide="arrow-up-right"></i>
                    </a>
                  </div>
                  <div class="project-meta">
                    <div>
                      <span>${project.category}</span>
                      <h3>${project.title}</h3>
                    </div>
                    <div class="tags">
                      ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section why">
        ${sectionHeading("Why Ricset", "TECHNOLOGY WITH PURPOSE.")}
        <div class="why-layout">
          <div class="metric-card reveal">
            <span class="eyebrow">
              <span></span>
              Performance measured
            </span>
            <strong>98<span>%</span></strong>
            <p>Average performance score across the digital products we launch.</p>
            <div class="metric-ring">
              <i data-lucide="gauge"></i>
            </div>
          </div>
          <div class="principles">
            ${site.principles
              .map(
                ([icon, title, text]) => `
                  <div class="principle reveal">
                    <i data-lucide="${icon}"></i>
                    <div>
                      <h3>${title}</h3>
                      <p>${text}</p>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section process" id="process">
        ${sectionHeading("How we work", "FROM AMBITION TO LAUNCH.", "A proven, transparent process with space for discovery and momentum.")}
        <div class="process-wrap">
          <div class="process-line">
            <span></span>
          </div>
          <div class="process-list">
            ${process
              .map(
                ([number, title, text]) => `
                  <article class="process-step reveal">
                    <span>${number}</span>
                    <h3>${title}</h3>
                    <p>${text}</p>
                    <i data-lucide="circle-check"></i>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section technology">
        ${sectionHeading("Our technology", "TOOLS CHANGE. CRAFT ENDURES.", "A flexible, proven stack chosen to create the best outcome—not to follow the latest trend.")}
        <div class="tech-orbit reveal">
          <div class="orbit-core">
            <i data-lucide="braces"></i>
            <span>
              Built
              <br />
              to scale
            </span>
          </div>
          <div class="tech-grid">
            ${site.technologies
              .map(
                ([short, name]) => `
                  <div class="tech-item">
                    <strong>${short}</strong>
                    <span>${name}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section cta">
        <div class="cta-card reveal">
          <div class="cta-glow"></div>
          <span class="eyebrow">
            <span></span>
            Have an idea?
          </span>
          <h2>
            YOUR NEXT BIG IDEA
            <br />
            <em>STARTS HERE.</em>
          </h2>
          <p>Let's turn your vision into a powerful digital solution.</p>
          <div>
            <a class="button button-primary" href="#contact">
              Get a free consultation <i data-lucide="arrow-up-right"></i>
            </a>
            <a class="button button-ghost" href="#contact">Start a project</a>
          </div>
        </div>
      </section>

      <section class="section contact" id="contact">
        ${sectionHeading("Start a conversation", "LET'S CREATE SOMETHING REMARKABLE.", "Tell us where you want to go. We'll help you build the way there.")}
        <div class="contact-layout">
          <div class="contact-details reveal">
            <p>New business</p>
            <a href="mailto:${site.company.email}">
              ${site.company.email} <i data-lucide="arrow-up-right"></i>
            </a>
            <a href="tel:${site.company.phone.replace(/\s+/g, "")}">
              ${site.company.phone} <i data-lucide="phone"></i>
            </a>
            <a href="${site.company.whatsapp}">
              WhatsApp <i data-lucide="message-circle"></i>
            </a>
            <div class="socials">
              <a href="${site.company.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span class="linkedin-mark" aria-hidden="true">in</span></a>
              <a href="#" aria-label="GitHub"><i data-lucide="code-xml"></i></a>
            </div>
          </div>

          <form class="contact-form reveal" id="contact-form" action="https://formspree.io/f/xppqdokv" method="POST" novalidate>
            <label>
              <span>Full name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" placeholder="+233" />
            </label>
            <label>
              <span>Service required</span>
              <select name="service" required>
                <option value="" disabled selected>Select a service</option>
                ${site.service_options
                  .map((option) => `<option value="${option}">${option}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="full">
              <span>Tell us about your project</span>
              <textarea name="message" rows="4" placeholder="The opportunity, ambition, or challenge..." required></textarea>
            </label>
            <button class="button button-primary full" type="submit">
              Send enquiry <i data-lucide="send"></i>
            </button>
            <p class="form-success full" id="form-success" role="status" hidden>
              <i data-lucide="circle-check"></i>
              Thanks. We'll be in touch within one business day.
            </p>
            <p class="form-error full" id="form-error" role="alert" hidden>
              Something went wrong. Please try again.
            </p>
          </form>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-top">
        <a class="logo" href="#top" aria-label="${site.company.name} home">
          <svg class="logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 4.5h6a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="9.5" cy="11" r="1.25" fill="currentColor"/>
            <circle cx="14.5" cy="11" r="1.25" fill="currentColor"/>
            <path d="M9.25 15.3h5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 2.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 19.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>${site.company.name.toUpperCase()}<span class="dot">.</span></span>
        </a>
        <p>${site.company.tagline}</p>
        <a href="#top" class="back-top">
          Back to top <i data-lucide="arrow-up-right"></i>
        </a>
      </div>
      <div class="footer-grid">
        <div>
          <span>Navigate</span>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
        </div>
        <div>
          <span>Expertise</span>
          <a href="#services">Web development</a>
          <a href="#services">Software</a>
          <a href="#services">Product design</a>
        </div>
        <div>
          <span>Connect</span>
          <a href="mailto:${site.company.email}">Email</a>
          <a href="${site.company.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${site.footer.copyright}</span>
        <span>${site.footer.powered_by}</span>
      </div>
    </footer>
  `;

  lucide.createIcons();

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (window.gsap && window.ScrollTrigger && window.Lenis) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    const lenis = new window.Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    const raf = (time) => {
      lenis.raf(time);
      window.ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 1.15, ease: "power4.out" },
    );

    window.gsap.utils.toArray(".reveal").forEach((element) => {
      window.gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        },
      );
    });

    window.gsap.to(".process-line span", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".process-list",
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }

  const cursor = document.getElementById("cursor");
  if (cursor) {
    window.addEventListener("mousemove", (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    });
  }

  const menuButton = document.getElementById("menu-button");
  const nav = document.getElementById("nav");
  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    };

    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  const video = document.getElementById("scrub-video");
  if (video && !reduced) {
    const mobile = window.matchMedia("(max-width: 700px)").matches;
    let lastScrollY = window.scrollY;
    let reverseBias = 0;

    const updateReverseBias = () => {
      if (mobile) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (delta < 0 && currentScrollY < 120) {
        reverseBias = Math.min(Math.abs(delta) * 0.012, 0.3);
      } else {
        reverseBias *= 0.7;
      }
    };

    const tickVideo = () => {
      if (!mobile && Number.isFinite(video.duration) && video.readyState >= 2) {
        const baseStep = 0.0125;
        const drift = baseStep - reverseBias;
        const nextTime = video.currentTime + drift;

        if (nextTime >= video.duration) {
          video.currentTime = 0;
        } else if (nextTime <= 0) {
          video.currentTime = Math.max(video.duration - 0.05, 0);
        } else {
          video.currentTime = nextTime;
        }

        reverseBias *= 0.82;
      }
      requestAnimationFrame(tickVideo);
    };

    video.addEventListener("loadedmetadata", () => {
      video.classList.add("is-loaded");
      video.style.opacity = "0.9";
      video.style.filter = "contrast(1.35) brightness(0.45) saturate(1.2)";
      video.muted = true;
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    video.style.opacity = "0.8";
    video.style.filter = "contrast(1.35) brightness(0.45) saturate(1.2)";
    window.addEventListener("scroll", updateReverseBias, { passive: true });
    requestAnimationFrame(tickVideo);
  }

  const mount = document.getElementById("three-scene");
  if (mount && window.THREE && !reduced) {
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.z = 6;
    const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const geometry = new window.THREE.TorusKnotGeometry(1.3, 0.35, 120, 12);
    const material = new window.THREE.MeshBasicMaterial({
      color: 0x79f2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.17,
    });
    const knot = new window.THREE.Mesh(geometry, material);
    scene.add(knot);

    const pointsGeo = new window.THREE.BufferGeometry();
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    pointsGeo.setAttribute("position", new window.THREE.BufferAttribute(positions, 3));
    const points = new window.THREE.Points(
      pointsGeo,
      new window.THREE.PointsMaterial({
        color: 0xa78bfa,
        size: 0.025,
        transparent: true,
        opacity: 0.55,
      }),
    );
    scene.add(points);

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      requestAnimationFrame(render);
      const scroll = window.scrollY / Math.max(document.body.scrollHeight, 1);
      knot.rotation.x += 0.0015;
      knot.rotation.y = scroll * Math.PI * 2;
      points.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    render();
  }

  const form = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");
  const formError = document.getElementById("form-error");

  if (form && formSuccess && formError) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      formSuccess.hidden = true;
      formError.hidden = true;

      const formData = new FormData(form);
      const name = (formData.get("name") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const service = (formData.get("service") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      if (!name || !email || !service || !message || !email.includes("@") || !email.includes(".")) {
        formError.textContent = "Please fill in every required field with a valid email.";
        formError.hidden = false;
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      form.setAttribute("aria-busy", "true");

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error("Form submission failed");

        form.reset();
        formSuccess.hidden = false;
      } catch {
        formError.textContent = "Unable to send your enquiry. Please check your connection and try again.";
        formError.hidden = false;
      } finally {
        submitButton.disabled = false;
        form.removeAttribute("aria-busy");
      }
    });
  }
};

renderSite();

