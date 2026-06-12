import resumeData from "./resumeData.json";
import "./styles.css";

const resumeTextUrl = new URL("../documents/Brian Flieck Resume.txt", import.meta.url).href;
const localResumeKey = "bflieck-resume-draft";
const editorPassword = "To@sty";
const editorUnlockKey = "bflieck-resume-editor-unlocked";

let activeResume = structuredClone(resumeData);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const toLines = (items = []) => items.join("\n");
const fromLines = (value = "") => value.split("\n").map((item) => item.trim()).filter(Boolean);
const compact = (items = []) => items.filter(Boolean).join("\n");
const shouldShowProfile = (resume) => resume.showProfile !== false;

const formatResumeText = (resume) =>
  `${resume.name.first} ${resume.name.last}
${resume.title}

${resume.contact.join(" | ")}

SUMMARY
${resume.headline}

${shouldShowProfile(resume) ? `PROFILE
${resume.profileTitle}
${resume.profile}

` : ""}
${resume.showProductLeadership !== false && resume.productLeadership?.length ? `PRODUCT LEADERSHIP
${resume.productLeadership.map((item) => `- ${item}`).join("\n")}

` : ""}
IMPACT
${resume.accomplishments.map((item) => `- ${item.metric}: ${item.title}. ${item.description}`).join("\n")}

EXPERIENCE
${resume.experience
  .map(
    (job) => `${job.role} | ${job.company} | ${job.dates}
${job.bullets.map((bullet) => `- ${bullet}`).join("\n")}`,
  )
  .join("\n\n")}

EARLY CAREER
${resume.earlyCareer.map((item) => `- ${item.company}: ${item.details}`).join("\n")}

SKILLS
${resume.skills.map((group) => `${group.group}: ${group.items.join(", ")}`).join("\n")}

EDUCATION
${resume.education.map((school) => compact([school.school, ...school.details])).join("\n\n")}
`;

const loadDraft = () => {
  const draft = window.localStorage.getItem(localResumeKey);
  if (!draft) return;

  try {
    activeResume = JSON.parse(draft);
  } catch {
    window.localStorage.removeItem(localResumeKey);
  }
};

const saveDraft = () => {
  window.localStorage.setItem(localResumeKey, JSON.stringify(activeResume, null, 2));
};

const unlockResumeEditor = () => {
  if (window.sessionStorage.getItem(editorUnlockKey) === "true") return true;

  const attempt = window.prompt("Enter the resume editor password.");
  if (attempt === editorPassword) {
    window.sessionStorage.setItem(editorUnlockKey, "true");
    return true;
  }

  window.alert("Incorrect password.");
  window.location.hash = "#/";
  return false;
};

const projectGroups = [
  {
    slug: "sla-workfront-dashboard",
    category: "Workfront Systems",
    title: "Enterprise SLA Visibility & Reporting Framework",
    image:
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/545c9f2e-f99d-4c14-afc8-46ce90d91437/REDslap1.jpg?format=1000w",
    images: [
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/545c9f2e-f99d-4c14-afc8-46ce90d91437/REDslap1.jpg?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/de3cfffd-9419-4591-94a2-cacd542c5cd2/REDsladetails.jpg?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/7cedcceb-b0f3-4509-b49c-df4c5b52a790/REDslapage3.jpg?format=1600w",
    ],
    summary:
      "A custom Workfront API dashboard that shows group projects, SLA health, planned versus actual milestone dates, issue duration, and timeline adjustments caused by project issues.",
  },
  {
    slug: "dynamic-workflow-chart",
    category: "Workflow Automation",
    title: "Automated Resource Visibility & Workflow Monitoring",
    image:
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1569877842715-BHYJGAJ5H0TI2PWRTKST/01_sm.gif?format=1000w",
    images: [
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1569877842715-BHYJGAJ5H0TI2PWRTKST/01_sm.gif?format=1600w",
    ],
    summary:
      "A Google Charts workflow monitor that refreshed every 10 minutes, read image folders, surfaced due dates, and color-coded metadata so production teams could see what was ready to work.",
  },
  {
    slug: "dynamic-image-product-lookup",
    category: "Production Utility",
    title: "Production Asset Intelligence System",
    summary:
      "An AppleScript droplet that let production staff drop in a file and retrieve product descriptions and color codes, reducing manual Workhorse lookups during image editing.",
  },
  {
    slug: "under-armour-lights-out",
    category: "E-commerce Video",
    title: "Cross-Functional Creative Production Initiative",
    image:
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1578095189635-VS10MEABV9OP8ELYU4Y9/UAbefore.gif?format=1000w",
    images: [
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1578095189635-VS10MEABV9OP8ELYU4Y9/UAbefore.gif?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1578096660551-9NESG678RV1LNYDI5YKE/Screen+Shot+2020-01-03+at+7.10.46+PM.png?format=1600w",
    ],
    summary:
      "A 360 shoe spin concept shot twice, once normally and once with controlled low-light reflection, then composited to show reflective performance in the same production framework.",
  },
  {
    slug: "digital-overlay",
    category: "Retouching",
    title: "Editorial Review & Quality Assurance Workflow",
    image:
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1407977689844-E5D7DF1CSNWJXFTOD298/step3.jpg?format=1000w",
    images: [
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1407977690035-38QNXMY1OTC84F3EML0W/step1.jpg?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1407977689850-J233BD3IMF5OPMKMLTS8/step2.jpg?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1407977689844-E5D7DF1CSNWJXFTOD298/step3.jpg?format=1600w",
    ],
    summary:
      "A practical Photoshop problem-solving example: remove a polka-dot print, rebuild the garment tone, and overlay a leopard pattern while preserving the structure of the suit.",
  },
  {
    slug: "luma-color-changes",
    category: "Content Scale",
    title: "AI-Assisted Creative Production Workflow",
    video: "https://player.vimeo.com/video/101630008",
    summary:
      "A rapid content-scaling project that created hundreds of colorway variations from original fashion files to support a Magento color-search demo in under two weeks.",
  },
  {
    slug: "tumi-motion-studies",
    category: "Motion Concepts",
    title: "TUMI Motion Studies",
    video: "https://www.youtube.com/embed/KlYs3TRB9tM",
    videos: [
      {
        title: "TUMI Parallax Concept",
        src: "https://www.youtube.com/embed/KlYs3TRB9tM",
      },
      {
        title: "TUMI Stop Motion Animation",
        src: "https://player.vimeo.com/video/139271909",
        className: "portrait-video",
      },
    ],
    summary:
      "Parallax, stop-motion, and reflective-product concepts using static product assets, retouching consistency, and lightweight animation to extend e-commerce storytelling.",
  },
  {
    slug: "best-in-coat",
    category: "Brand Build",
    title: "Best In Coat",
    image:
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375713078-GJ3IGK6CQURB7XS03T2W/IMG_4008.JPG?format=1000w",
    images: [
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375713078-GJ3IGK6CQURB7XS03T2W/IMG_4008.JPG?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375723065-M754PESUS9DB2PIGUE4B/IMG_7671.JPG?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375730842-X1DEKBKITRQK11RL8MB7/IMG_8103.JPG?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375701149-RXC9VA6509YY8N5IIDS4/IMG_1606.jpg?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375732774-F91B5KG465145NHHS44R/IMG_8033.JPG?format=1600w",
      "https://images.squarespace-cdn.com/content/v1/51755529e4b0152c1903f6df/1570375714728-V689KAYD6ZAV93MSZ5CK/IMG_3974.JPG?format=1600w",
    ],
    summary:
      "A small-business concept built from an empty space into a full brand, retail environment, and online presence.",
  },
];

const renderHeader = () => `
  <header class="site-header">
    <a class="brand" href="#/" aria-label="Brian Flieck home">Brian Flieck <span>Creative Operations</span></a>
    <nav aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#impact">Impact</a>
      <a href="#experience">Experience</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
      <a class="nav-button" href="mailto:brianflieck@gmail.com">Get in touch</a>
    </nav>
  </header>
`;

const renderContactItem = (item) => {
  if (item.includes("@")) return `<a href="mailto:${escapeHtml(item)}">${escapeHtml(item)}</a>`;
  if (item.startsWith("linkedin.com")) return `<a href="https://${escapeHtml(item)}/">${escapeHtml(item)}</a>`;
  if (item.startsWith("www.")) return `<span>${escapeHtml(item)}</span>`;
  return `<span>${escapeHtml(item)}</span>`;
};

const renderResumeSections = (resume) => `
  <section class="resume-sheet dark-panel" aria-labelledby="resume-title">
    <div class="hero-lockup">
      <div class="hero-copy">
        <p class="name-kicker">${escapeHtml(resume.title)}</p>
        <h1 id="resume-title"><span>${escapeHtml(resume.name.first)}</span><span>${escapeHtml(resume.name.last)}</span></h1>
        <p class="hero-statement">${escapeHtml(resume.headline)}</p>
      </div>
      <div class="hero-mark" aria-hidden="true"><span></span><strong>ops</strong></div>
    </div>

    <div class="contact-strip" aria-label="Contact details">
      ${resume.contact.map(renderContactItem).join("")}
    </div>

    ${
      shouldShowProfile(resume)
        ? `<section class="profile-section intro-panel" id="profile">
            <div class="section-title">
              <p>Profile</p>
              <h2>${escapeHtml(resume.profileTitle)}</h2>
            </div>
            <p class="profile-copy">${escapeHtml(resume.profile)}</p>
          </section>`
        : ""
    }

    <section class="accomplishments-section" id="accomplishments">
      <div class="section-title">
        <h2>Accomplishments</h2>
        <span aria-hidden="true"></span>
      </div>
      <div class="accomplishment-grid">
        ${resume.accomplishments
          .map(
            (item) => `
              <article>
                <p class="achievement-metric">${escapeHtml(item.metric)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <div class="resume-grid">
      <aside class="sidebar" aria-label="Education and skills">
        <section>
          <div class="section-title compact">
            <h2>Education</h2>
            <span aria-hidden="true"></span>
          </div>
          <div class="stack">
            ${resume.education
              .map(
                (school) => `
                  <article>
                    <h3>${escapeHtml(school.school)}</h3>
                    ${school.details.map((detail) => `<p>${escapeHtml(detail)}</p>`).join("")}
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section id="skills">
          <div class="section-title compact">
            <h2>Skills</h2>
            <span aria-hidden="true"></span>
          </div>
          ${resume.skills
            .map(
              (group) => `
                <div class="skill-group">
                  <h3>${escapeHtml(group.group)}</h3>
                  <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                </div>
              `,
            )
            .join("")}
        </section>
      </aside>

      <section class="experience" id="experience" aria-label="Work experience">
        <div class="section-title compact">
          <h2>Work Experience</h2>
          <span aria-hidden="true"></span>
        </div>

        ${resume.experience
          .map(
            (job) => `
              <article class="job ${job.featured ? "featured" : ""}">
                <div class="job-heading">
                  <div>
                    <h3>${escapeHtml(job.company)}</h3>
                    <p>${escapeHtml(job.role)}</p>
                  </div>
                  <p class="date">${escapeHtml(job.dates)}</p>
                </div>
                <ul>${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
              </article>
            `,
          )
          .join("")}

        <div class="early-career">
          ${resume.earlyCareer
            .map(
              (item) => `
                <p><strong>${escapeHtml(item.company)}</strong> <span>${escapeHtml(item.details)}</span></p>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  </section>
`;

const renderResumeDocument = (resume) => `
  <section class="resume-document" aria-labelledby="resume-document-title">
    <header class="resume-document-hero">
      <div>
        <p class="status-pill">Creative Operations & Technology Leader</p>
        <h1 id="resume-document-title">${escapeHtml(resume.name.first)} ${escapeHtml(resume.name.last)}</h1>
        <p>${escapeHtml(resume.headline)}</p>
      </div>
      <div class="resume-contact-card">
        ${resume.contact.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </header>

    ${
      shouldShowProfile(resume)
        ? `<section class="resume-document-section">
            <p class="section-kicker">Profile</p>
            <h2>${escapeHtml(resume.profileTitle)}</h2>
            <p class="section-lede">${escapeHtml(resume.profile)}</p>
          </section>`
        : ""
    }

    ${
      resume.showProductLeadership !== false && resume.productLeadership?.length
        ? `<section class="resume-document-section">
            <p class="section-kicker">Product Leadership</p>
            <ul class="resume-leadership-list">
              ${resume.productLeadership.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>`
        : ""
    }

    <section class="resume-document-section">
      <p class="section-kicker">Impact</p>
      <div class="resume-impact-grid">
        ${resume.accomplishments
          .slice(0, 6)
          .map(
            (item) => `
              <article>
                <strong>${escapeHtml(item.metric)}</strong>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="resume-document-section resume-document-grid">
      <aside>
        <p class="section-kicker">Skills</p>
        ${resume.skills
          .map(
            (group) => `
              <div class="resume-skill-block">
                <h3>${escapeHtml(group.group)}</h3>
                <div class="tag-cloud">
                  ${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
                </div>
              </div>
            `,
          )
          .join("")}

        <p class="section-kicker">Education</p>
        <div class="resume-education">
          ${resume.education
            .map(
              (school) => `
                <article>
                  <h3>${escapeHtml(school.school)}</h3>
                  ${school.details.map((detail) => `<p>${escapeHtml(detail)}</p>`).join("")}
                </article>
              `,
            )
            .join("")}
        </div>
      </aside>

      <div>
        <p class="section-kicker">Experience</p>
        <div class="resume-timeline">
          ${resume.experience
            .map(
              (job) => `
                <article>
                  <div>
                    <h3>${escapeHtml(job.role)} <span>· ${escapeHtml(job.company)}</span></h3>
                    <p>${escapeHtml(job.dates)}</p>
                  </div>
                  <ul>${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="resume-early-career">
          ${resume.earlyCareer
            .map((item) => `<p><strong>${escapeHtml(item.company)}</strong> ${escapeHtml(item.details)}</p>`)
            .join("")}
        </div>
      </div>
    </section>
  </section>
`;

const renderPdfResumeDocument = (resume) => `
  <section class="pdf-resume" aria-labelledby="pdf-resume-title">
    <header class="pdf-resume-header">
      <div>
        <p class="pdf-kicker">${escapeHtml(resume.title)}</p>
        <h1 id="pdf-resume-title">${escapeHtml(resume.name.first)} ${escapeHtml(resume.name.last)}</h1>
      </div>
      <ul>
        ${resume.contact.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </header>

    <section class="pdf-section pdf-summary">
      <h2>Summary</h2>
      <p>${escapeHtml(resume.headline)}</p>
    </section>

    ${
      shouldShowProfile(resume)
        ? `<section class="pdf-section pdf-profile">
            <h2>Profile</h2>
            <h3>${escapeHtml(resume.profileTitle)}</h3>
            <p>${escapeHtml(resume.profile)}</p>
          </section>`
        : ""
    }

    ${
      resume.showProductLeadership !== false && resume.productLeadership?.length
        ? `<section class="pdf-section">
            <h2>Product Leadership</h2>
            <ul class="pdf-two-column-list">
              ${resume.productLeadership.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>`
        : ""
    }

    <section class="pdf-section">
      <h2>Selected Impact</h2>
      <div class="pdf-impact-grid">
        ${resume.accomplishments
          .map(
            (item) => `
              <article>
                <strong>${escapeHtml(item.metric)}</strong>
                <span>${escapeHtml(item.title)}</span>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="pdf-section pdf-main-grid">
      <aside>
        <h2>Skills</h2>
        ${resume.skills
          .map(
            (group) => `
              <div class="pdf-skill-group">
                <h3>${escapeHtml(group.group)}</h3>
                <p>${escapeHtml(group.items.join(", "))}</p>
              </div>
            `,
          )
          .join("")}

        <h2>Education</h2>
        ${resume.education
          .map(
            (school) => `
              <div class="pdf-education">
                <h3>${escapeHtml(school.school)}</h3>
                ${school.details.map((detail) => `<p>${escapeHtml(detail)}</p>`).join("")}
              </div>
            `,
          )
          .join("")}
      </aside>

      <div>
        <h2>Experience</h2>
        <div class="pdf-experience-list">
          ${resume.experience
            .map(
              (job) => `
                <article>
                  <div>
                    <h3>${escapeHtml(job.role)} <span>${escapeHtml(job.company)}</span></h3>
                    <p>${escapeHtml(job.dates)}</p>
                  </div>
                  <ul>${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="pdf-early-career">
          ${resume.earlyCareer
            .map((item) => `<p><strong>${escapeHtml(item.company)}</strong> ${escapeHtml(item.details)}</p>`)
            .join("")}
        </div>
      </div>
    </section>
  </section>
`;

const homeMetrics = [
  ["Based", "Coatesville, PA"],
  ["Focus", "Creative Ops + Tech"],
  ["Experience", "18+ years"],
  ["Open to", "Director / Manager"],
];

const impactMetricOrder = ["$23M", "23%", "1 day to 5 min", "99.9%", "57+", "Top 3"];
const impactMetrics = impactMetricOrder
  .map((metric) => activeResume.accomplishments.find((item) => item.metric === metric))
  .filter(Boolean);

const aboutCards = [
  [
    "Streamline creative workflows from intake to delivery.",
    "I identify bottlenecks, reduce unnecessary handoffs, and create processes that help work move predictably through the organization.",
  ],
  [
    "Design operational systems that scale with the business.",
    "From Workfront implementations and automation programs to reporting frameworks and governance models, I create solutions that grow with the team.",
  ],
  [
    "Align teams, stakeholders, and technology.",
    "Strong operations isn't just about tools. It's about creating shared visibility, clear expectations, and confidence across creative, marketing, and business teams.",
  ],
];

const focusAreas = [
  "Creative Operations Leadership",
  "Workflow Design & Optimization",
  "Creative Technology Strategy",
  "Resource & Capacity Planning",
  "Process Governance",
  "Automation & AI Enablement",
  "Studio Operations",
  "Cross-Functional Team Leadership",
];

const workCards = projectGroups.slice(0, 6);

const renderHome = () => `
  ${renderHeader()}
  <main class="syndicate-home">
    <section class="syndicate-hero">
      <div class="hero-copy">
        <p class="status-pill">Open to Director / Manager roles · Coatesville, PA & remote</p>
        <h1 id="resume-title">I help creative organizations scale <span>without losing quality, clarity, or momentum.</span></h1>
        <p class="hero-statement">
          I'm Brian Flieck, a creative operations and technology leader who helps creative teams work smarter at scale.
          My focus is building the processes, workflows, systems, and team structures that reduce friction, improve
          visibility, and help great creative work move faster. Over the last 18 years I've led studio operations,
          creative services teams, workflow transformation initiatives, and automation programs across enterprise organizations.
        </p>
        <div class="hero-actions">
          <a class="button" href="mailto:brianflieck@gmail.com">Start a conversation</a>
          <a class="button ghost" href="#work">See selected work</a>
        </div>
      </div>
    </section>

    <section class="quick-facts" aria-label="Profile facts">
      ${homeMetrics.map(([label, value]) => `<article><p>${label}</p><strong>${value}</strong></article>`).join("")}
    </section>

    <section class="content-band" id="about">
      <p class="section-kicker">About</p>
      <h2>How I help creative organizations perform at scale.</h2>
      <p class="section-lede">
        My role sits at the intersection of people, process, and technology. Sometimes that means redesigning workflows.
        Sometimes it means implementing new systems. Sometimes it means helping teams align around a better way of working.
        The goal is always the same: create an environment where creative teams can focus on creative work.
      </p>
      <div class="about-grid">
        ${aboutCards
          .map(
            ([title, copy]) => `
              <article>
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="content-band" id="impact">
      <p class="section-kicker">Impact</p>
      <h2>Results driven through process, workflow, and operational transformation.</h2>
      <p class="section-lede">Selected numbers from the systems and teams I've led. Details and references available on request.</p>
      <div class="metric-grid">
        ${impactMetrics
          .map(
            (item) => `
              <article>
                <strong>${escapeHtml(item.metric)}</strong>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="content-band experience-band" id="experience">
      <p class="section-kicker">Experience</p>
      <h2>Leadership experience across creative operations, studio management, and workflow transformation.</h2>
      <div class="experience-layout">
        <aside>
          <h3>Core Focus Areas</h3>
          <div class="tag-cloud">
            ${focusAreas.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </aside>
        <div class="timeline-cards">
          ${activeResume.experience
            .map(
              (job) => `
                <article>
                  <div>
                    <h3>${escapeHtml(job.role)} <span>· ${escapeHtml(job.company)}</span></h3>
                    <p>${escapeHtml(job.dates).toUpperCase()}</p>
                  </div>
                  <ul>${job.bullets.slice(0, 3).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
                </article>
              `,
            )
            .join("")}
          <p class="history-note">Full work history available on request — <a href="#contact">get in touch</a>.</p>
        </div>
      </div>
    </section>

    <section class="content-band" id="work">
      <p class="section-kicker">Selected Work</p>
      <h2>Workflow transformations and operational solutions.</h2>
      <p class="section-lede">Selected work migrated from the previous portfolio, reframed around creative technology and workflow systems.</p>
      <div class="work-matrix">
        ${workCards
          .map(
            (project) => `
              <a href="#project/${project.slug}">
                <p>${escapeHtml(project.category)}</p>
                <h3>${escapeHtml(project.title)}</h3>
                <span>${escapeHtml(project.summary)}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="content-band contact-band" id="contact">
      <div>
        <p class="section-kicker">Contact</p>
        <h2>If you're looking to improve how creative work gets planned, produced, and delivered, I'd love to talk.</h2>
        <p class="section-lede">I partner with organizations that want better visibility, stronger processes, and more efficient creative operations without sacrificing creative quality.</p>
        <div class="hero-actions">
          <a class="button" href="mailto:brianflieck@gmail.com">Email Brian</a>
          <a class="button ghost" href="#resume-print">Print resume (PDF)</a>
          <a class="button ghost" href="${resumeTextUrl}" download>Download resume (TXT)</a>
        </div>
      </div>
      <dl class="contact-card">
        <div><dt>Email</dt><dd>brianflieck@gmail.com</dd></div>
        <div><dt>LinkedIn</dt><dd>/in/brianflieck</dd></div>
        <div><dt>Location</dt><dd>Coatesville, PA</dd></div>
        <div><dt>Availability</dt><dd>Open</dd></div>
      </dl>
    </section>
  </main>
  <footer class="site-footer">
    <span>© 2026 Brian Flieck</span>
    <span>Creative Operations & Technology · Coatesville, PA</span>
  </footer>
`;

const projectCards = projectGroups
  .map(
    (project) => `
      <article class="project-card">
        ${
          project.video
            ? `<iframe class="project-video" src="${project.video}" title="${escapeHtml(project.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
            : `<a class="project-card-link" href="#project/${project.slug}" aria-label="Open ${escapeHtml(project.title)}">
                ${project.image ? `<img src="${project.image}" alt="" loading="lazy">` : ""}
              </a>`
        }
        <div>
          <p class="date">${escapeHtml(project.category)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
        </div>
        <a class="project-open" href="#project/${project.slug}">Open Project</a>
      </article>
    `,
  )
  .join("");

const renderProject = (project) => `
  ${renderHeader()}
  <main>
    <section class="project-detail">
      <a class="back-link" href="#work">Back to Portfolio</a>
      <div class="detail-heading">
        <p class="date">${escapeHtml(project.category)}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      ${
        project.videos?.length
          ? `<div class="detail-videos">
              ${project.videos
                .map(
                  (video) => `
                    <figure class="detail-video-frame ${video.className ?? ""}">
                      <iframe src="${video.src}" title="${escapeHtml(video.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                      <figcaption>${escapeHtml(video.title)}</figcaption>
                    </figure>
                  `,
                )
                .join("")}
            </div>`
          : project.video
            ? `<iframe class="detail-video" src="${project.video}" title="${escapeHtml(project.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
            : ""
      }
      ${
        project.images?.length
          ? `<div class="detail-gallery">
              ${project.images.map((image) => `<img src="${image}" alt="" loading="lazy">`).join("")}
            </div>`
          : project.video
            ? ""
            : `<div class="detail-empty">
              <p>This project was migrated from the previous portfolio. More project media can be added here as assets are recovered.</p>
            </div>`
      }
    </section>
  </main>
`;

const renderPrintResume = () => `
  <main class="print-shell">
    <div class="print-actions">
      <a class="button ghost" href="#resume-editor">Back to Editor</a>
      <button class="button" data-action="print-resume" type="button">Print / Save PDF</button>
      <button class="button ghost" data-action="download-txt" type="button">Download TXT</button>
    </div>
    ${renderPdfResumeDocument(activeResume)}
  </main>
`;

const renderResumeEditor = () => `
  ${renderHeader()}
  <main class="resume-editor-shell">
    <section class="editor-toolbar">
      <div>
        <p class="name-kicker">Resume Publisher</p>
        <h1><span>Edit</span><span>Resume</span></h1>
        <p class="hero-statement">Make changes, preview the site version, create a PDF from the print view, then publish when Netlify secrets are configured.</p>
      </div>
      <div class="editor-actions">
        <button class="button" data-action="save-draft" type="button">Save Draft</button>
        <a class="button ghost" href="#resume-print">Print View</a>
        <button class="button ghost" data-action="download-txt" type="button">Download TXT</button>
        <button class="button ghost" data-action="download-json" type="button">Download JSON</button>
        <button class="button ghost" data-action="publish" type="button">Publish</button>
      </div>
    </section>

    <section class="editor-grid">
      <form class="editor-panel" id="resume-form">
        <fieldset>
          <legend>Core</legend>
          <label>Title <input name="title" value="${escapeHtml(activeResume.title)}"></label>
          <label>First Name <input name="name.first" value="${escapeHtml(activeResume.name.first)}"></label>
          <label>Last Name <input name="name.last" value="${escapeHtml(activeResume.name.last)}"></label>
          <label>Headline <textarea name="headline" rows="3">${escapeHtml(activeResume.headline)}</textarea></label>
          <label>Contact Lines <textarea name="contact" rows="4">${escapeHtml(toLines(activeResume.contact))}</textarea></label>
        </fieldset>

        <fieldset>
          <legend>Profile</legend>
          <div class="toggle-group" role="radiogroup" aria-label="Profile section visibility">
            <label>
              <input name="showProfile" type="radio" value="true" ${activeResume.showProfile !== false ? "checked" : ""}>
              <span>Keep Profile</span>
            </label>
            <label>
              <input name="showProfile" type="radio" value="false" ${activeResume.showProfile === false ? "checked" : ""}>
              <span>Leave Out</span>
            </label>
          </div>
          <label>Profile Title <textarea name="profileTitle" rows="3">${escapeHtml(activeResume.profileTitle)}</textarea></label>
          <label>Profile Copy <textarea name="profile" rows="5">${escapeHtml(activeResume.profile)}</textarea></label>
        </fieldset>

        <fieldset>
          <legend>Product Leadership</legend>
          <label class="checkbox-label">
            <input name="showProductLeadership" type="checkbox" value="true" ${activeResume.showProductLeadership !== false ? "checked" : ""}>
            Show Product Leadership section
          </label>
          <label>Bullets <textarea name="productLeadership" rows="7">${escapeHtml(toLines(activeResume.productLeadership ?? []))}</textarea></label>
        </fieldset>

        <fieldset>
          <legend>Accomplishments</legend>
          ${activeResume.accomplishments
            .map(
              (item, index) => `
                <div class="editor-card">
                  <label>Metric <input name="accomplishments.${index}.metric" value="${escapeHtml(item.metric)}"></label>
                  <label>Title <input name="accomplishments.${index}.title" value="${escapeHtml(item.title)}"></label>
                  <label>Description <textarea name="accomplishments.${index}.description" rows="3">${escapeHtml(item.description)}</textarea></label>
                </div>
              `,
            )
            .join("")}
        </fieldset>

        <fieldset>
          <legend>Experience</legend>
          ${activeResume.experience
            .map(
              (job, index) => `
                <div class="editor-card">
                  <label>Company <input name="experience.${index}.company" value="${escapeHtml(job.company)}"></label>
                  <label>Role <input name="experience.${index}.role" value="${escapeHtml(job.role)}"></label>
                  <label>Dates <input name="experience.${index}.dates" value="${escapeHtml(job.dates)}"></label>
                  <label>Bullets <textarea name="experience.${index}.bullets" rows="6">${escapeHtml(toLines(job.bullets))}</textarea></label>
                </div>
              `,
            )
            .join("")}
        </fieldset>

        <fieldset>
          <legend>Skills</legend>
          ${activeResume.skills
            .map(
              (group, index) => `
                <div class="editor-card">
                  <label>Group <input name="skills.${index}.group" value="${escapeHtml(group.group)}"></label>
                  <label>Items <textarea name="skills.${index}.items" rows="5">${escapeHtml(toLines(group.items))}</textarea></label>
                </div>
              `,
            )
            .join("")}
        </fieldset>
      </form>

      <aside class="editor-preview" aria-label="Resume preview">
        <div class="editor-preview-heading">
          <p class="section-kicker">Resume Preview</p>
        </div>
        ${renderResumeDocument(activeResume)}
      </aside>
    </section>

    <p class="publish-status" role="status" aria-live="polite"></p>
  </main>
`;

const setPathValue = (target, path, value) => {
  const parts = path.split(".");
  const last = parts.pop();
  const parent = parts.reduce((obj, part) => obj[part], target);
  if (path === "showProductLeadership" || path === "showProfile") {
    parent[last] = value === "true";
    return;
  }

  parent[last] =
    last === "bullets" || last === "items" || path === "contact" || path === "productLeadership"
      ? fromLines(value)
      : value.trim();
};

const syncResumeFromForm = () => {
  const form = document.querySelector("#resume-form");
  if (!form) return;

  const nextResume = structuredClone(activeResume);
  nextResume.showProductLeadership = false;
  new FormData(form).forEach((value, key) => setPathValue(nextResume, key, value));
  activeResume = nextResume;
};

const publishResume = async () => {
  syncResumeFromForm();
  saveDraft();

  const publishKey = window.prompt("Enter the resume publish key from Netlify.");
  if (!publishKey) return;

  const status = document.querySelector(".publish-status");
  status.textContent = "Publishing resume data...";

  try {
    const response = await fetch("/.netlify/functions/publish-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-publish-key": publishKey,
      },
      body: JSON.stringify({ resume: activeResume }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Publish failed");
    status.textContent = "Published. Netlify will rebuild the site from the GitHub commit.";
  } catch (error) {
    status.textContent = `Publish failed: ${error.message}`;
  }
};

const downloadResumeJson = () => {
  syncResumeFromForm();
  saveDraft();

  const blob = new Blob([JSON.stringify(activeResume, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resumeData.json";
  link.click();
  URL.revokeObjectURL(link.href);
};

const downloadResumeText = () => {
  syncResumeFromForm();
  saveDraft();

  const blob = new Blob([formatResumeText(activeResume)], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Brian Flieck Resume.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

const bindEditor = () => {
  const form = document.querySelector("#resume-form");
  form?.addEventListener("input", () => {
    syncResumeFromForm();
    saveDraft();
    document.querySelector(".editor-preview").innerHTML = `
      <div class="editor-preview-heading">
        <p class="section-kicker">Resume Preview</p>
      </div>
      ${renderResumeDocument(activeResume)}
    `;
  });

  document.querySelector('[data-action="save-draft"]')?.addEventListener("click", () => {
    syncResumeFromForm();
    saveDraft();
    document.querySelector(".publish-status").textContent = "Draft saved in this browser.";
  });

  document.querySelector('[data-action="publish"]')?.addEventListener("click", publishResume);
  document.querySelector('[data-action="download-txt"]')?.addEventListener("click", downloadResumeText);
  document.querySelector('[data-action="download-json"]')?.addEventListener("click", downloadResumeJson);
};

const bindHiddenEditorTrigger = () => {
  document.querySelector(".brand")?.addEventListener("click", (event) => {
    if (!event.shiftKey) return;

    event.preventDefault();
    window.location.hash = "#resume-editor";
  });
};

const render = () => {
  loadDraft();

  const projectSlug = window.location.hash.match(/^#project\/(.+)/)?.[1];
  const project = projectGroups.find((item) => item.slug === projectSlug);
  const route = window.location.hash.replace("#", "");

  if (route === "resume-editor") {
    if (!unlockResumeEditor()) return;

    document.querySelector("#app").innerHTML = renderResumeEditor();
    bindEditor();
    bindHiddenEditorTrigger();
    window.scrollTo(0, 0);
    return;
  }

  if (route === "resume-print") {
    document.querySelector("#app").innerHTML = renderPrintResume();
    document.querySelector('[data-action="print-resume"]')?.addEventListener("click", () => window.print());
    document.querySelector('[data-action="download-txt"]')?.addEventListener("click", downloadResumeText);
    window.scrollTo(0, 0);
    return;
  }

  document.querySelector("#app").innerHTML = project ? renderProject(project) : renderHome();
  bindHiddenEditorTrigger();

  if (project) {
    window.scrollTo(0, 0);
  } else if (window.location.hash && window.location.hash !== "#/") {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }
};

window.addEventListener("hashchange", render);
render();
