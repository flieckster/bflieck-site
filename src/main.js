import "./styles.css";

const resumeUrl = new URL("../documents/Brian Flieck Creative Technology.pdf", import.meta.url).href;

const projectGroups = [
  {
    slug: "sla-workfront-dashboard",
    category: "Workfront Systems",
    title: "SLA Workfront-Powered Dashboard",
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
    title: "Dynamic Workflow Chart",
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
    title: "Dynamic Image Product Lookup App",
    summary:
      "An AppleScript droplet that let production staff drop in a file and retrieve product descriptions and color codes, reducing manual Workhorse lookups during image editing.",
  },
  {
    slug: "under-armour-lights-out",
    category: "E-commerce Video",
    title: "Under Armour Lights Out Concept",
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
    title: "Digital Overlay",
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
    title: "Luma Color Changes",
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

const projectCards = projectGroups
  .map(
    (project) => `
        <article class="project-card">
          ${
            project.video
              ? `<iframe class="project-video" src="${project.video}" title="${project.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
              : `<a class="project-card-link" href="#project/${project.slug}" aria-label="Open ${project.title}">
                  ${project.image ? `<img src="${project.image}" alt="" loading="lazy">` : ""}
                </a>`
          }
          <div>
            <p class="date">${project.category}</p>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <a class="project-open" href="#project/${project.slug}">Open Project</a>
        </article>
      `,
  )
  .join("");

const renderHeader = () => `
  <header class="site-header">
    <a class="brand" href="#/" aria-label="Brian Flieck home">Brian Flieck</a>
    <nav aria-label="Primary navigation">
      <a href="#profile">Profile</a>
      <a href="#origin">Origin</a>
      <a href="#work">Work</a>
      <a href="#accomplishments">Accomplishments</a>
      <a href="#systems">Systems</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="${resumeUrl}">PDF</a>
    </nav>
  </header>
`;

const renderHome = () => `
  ${renderHeader()}
  <main>
    <section class="resume-sheet dark-panel" aria-labelledby="resume-title">
      <div class="hero-lockup">
        <div class="hero-copy">
          <p class="name-kicker">Creative Technology Operations</p>
          <h1 id="resume-title"><span>Brian</span><span>Flieck</span></h1>
          <p class="hero-statement">
            Creative operations leader and technologist building AI-enabled systems that help teams move faster,
            produce better work, and reduce operational drag.
          </p>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <span></span>
          <strong>ops</strong>
        </div>
      </div>

      <div class="contact-strip" aria-label="Contact details">
        <span>Coatesville, PA</span>
        <span>www.bflieck.com</span>
        <a href="mailto:brianflieck@gmail.com">brianflieck@gmail.com</a>
        <a href="https://linkedin.com/in/brianflieck/">linkedin.com/in/brianflieck</a>
      </div>

      <section class="profile-section intro-panel" id="profile">
        <div class="section-title">
          <p>Profile</p>
          <h2>Creative operations leader with the hands-on builder mindset to turn complex workflow problems into usable systems.</h2>
        </div>
        <p class="profile-copy">
          Innovative professional with 24 years of experience in creative technology, operations, and product management.
          Proven record driving adoption of Adobe Creative Cloud and AI-driven workflows, integrating systems to improve
          efficiency, and delivering measurable business impact in regulated environments. Adept at translating operational
          needs into product roadmaps, coaching teams, and optimizing performance.
        </p>
      </section>

      <section class="accomplishments-section" id="accomplishments">
        <div class="section-title">
          <h2>Accomplishments</h2>
          <span aria-hidden="true"></span>
        </div>
        <div class="accomplishment-grid">
          <article>
            <p class="achievement-metric">23%</p>
            <h3>Reduced time-to-market</h3>
            <p>Optimized Adobe Workfront workflows through process redesign, automation, and platform improvements.</p>
          </article>
          <article>
            <p class="achievement-metric">1 day to 5 min</p>
            <h3>Built RED Ink</h3>
            <p>Developed an AI content-generation app trained on approved assets, brand rules, style guides, and compliance frameworks.</p>
          </article>
          <article>
            <p class="achievement-metric">Top 3</p>
            <h3>Automated resource matching</h3>
            <p>Created a Workfront Fusion tool that evaluates roles, capacity, and project needs to recommend best-fit staffing options.</p>
          </article>
          <article>
            <p class="achievement-metric">99.9%</p>
            <h3>Maintained production SLA</h3>
            <p>Led image production workflow improvements that increased tracking, automation, offshore handoffs, and delivery accuracy.</p>
          </article>
          <article>
            <p class="achievement-metric">Work Horse</p>
            <h3>Led software onboarding</h3>
            <p>Led onboarding of Work Horse software, including configuration, testing, rollout planning, and production adoption.</p>
          </article>
          <article>
            <p class="achievement-metric">57+</p>
            <h3>Onboarded retail clients</h3>
            <p>Onboarded more than 57 large retail clients into e-commerce image production workflows, style guides, and delivery standards.</p>
          </article>
          <article>
            <p class="achievement-metric">$23M</p>
            <h3>Helped scale studio business</h3>
            <p>Contributed to building a creative production operation that grew into a $23 million annual business.</p>
          </article>
          <article>
            <p class="achievement-metric">11</p>
            <h3>Led and developed staff</h3>
            <p>Led a staff of 11 people, hired two managers, and mentored them into leadership roles under my direction.</p>
          </article>
          <article>
            <p class="achievement-metric">3</p>
            <h3>Built remote studios</h3>
            <p>Helped design and staff three remote studios, onboarding teams to shared production procedures, tools, and processes.</p>
          </article>
          <article>
            <p class="achievement-metric">KPIs</p>
            <h3>Established growth metrics</h3>
            <p>Established departmental year-over-year growth metrics aligned to company KPIs and production performance goals.</p>
          </article>
          <article>
            <p class="achievement-metric">India</p>
            <h3>Managed vendor partnerships</h3>
            <p>Onboarded retouching partners in India, defining image volume estimates, pricing, billing, SLA terms, and operating processes.</p>
          </article>
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
              <article>
                <h3>University of Penn</h3>
                <p>Full Stack Web Development Boot Camp</p>
              </article>
              <article>
                <h3>Antonelli Institute</h3>
                <p>Associates Degree in Specialized Technology</p>
                <p>Major: Graphic Design / Commercial Art</p>
              </article>
            </div>
          </section>

          <section id="skills">
            <div class="section-title compact">
              <h2>Skills</h2>
              <span aria-hidden="true"></span>
            </div>
            <div class="skill-group">
              <h3>Technical</h3>
              <ul>
                <li>Workfront</li>
                <li>Workfront Fusion</li>
                <li>Adobe Creative Cloud</li>
                <li>Firefly familiarity</li>
                <li>Writer.com API & Agents</li>
                <li>Figma</li>
                <li>Wrike</li>
                <li>Smartsheet</li>
                <li>Bedrock</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            <div class="skill-group">
              <h3>Operations</h3>
              <ul>
                <li>Project Management</li>
                <li>Stakeholder Alignment</li>
                <li>Agile Project Management</li>
                <li>Client Relations</li>
                <li>AI-driven Workflow Automation</li>
                <li>Image Production & Quality Review</li>
              </ul>
            </div>
            <div class="skill-group">
              <h3>Leadership</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Troubleshooting</li>
                <li>Critical Thinking</li>
                <li>Process Improvement</li>
                <li>Employee Growth</li>
                <li>Training Initiatives</li>
              </ul>
            </div>
          </section>
        </aside>

        <section class="experience" id="experience" aria-label="Work experience">
          <div class="section-title compact">
            <h2>Work Experience</h2>
            <span aria-hidden="true"></span>
          </div>

          <article class="job featured">
            <div class="job-heading">
              <div>
                <h3>RED @ Vanguard</h3>
                <p>Creative Technologist</p>
              </div>
              <p class="date">2024 - Present</p>
            </div>
            <ul>
              <li>Optimized Adobe Workfront workflows, reducing time-to-market by 23% through process redesign, automation, and platform optimization.</li>
              <li>Designed and implemented custom Workfront workflows to support agency users, improving operational efficiency, team productivity, and cross-functional visibility.</li>
              <li>Partnered with IT and business stakeholders to gather requirements, define scalable solutions, and deliver cross-platform integrations.</li>
              <li>Led cross-functional integration and ongoing optimization of Adobe Workfront across teams, improving adoption and process consistency.</li>
              <li>Developed RED Ink, a custom AI content-generation application trained on approved assets, brand guidelines, style guides, and compliance frameworks. Enabled automated creation of articles, emails, and social content directly from creative briefs, reducing content production time from approximately one day to five minutes.</li>
              <li>Created an automated Workfront Fusion-powered resourcing tool that evaluates project roles, identifies users with matching roles and available capacity, and recommends the top three candidates for each role. The tool posts an ordered recommendation list at the project update level and notifies the resource coordinator, streamlining staffing decisions.</li>
            </ul>
          </article>

          <article class="job">
            <div class="job-heading">
              <div>
                <h3>RED @ Vanguard</h3>
                <p>Creative Agency Manager</p>
              </div>
              <p class="date">2021 - 2024</p>
            </div>
            <ul>
              <li>Led and optimized creative processes for digital, video, UX, interactive, print, and presentation materials.</li>
              <li>Managed end-to-end project lifecycles, ensuring on-time and high-quality creative deliverables across multiple channels.</li>
              <li>Designed Workfront efficiencies that reduced bottlenecks and improved team productivity.</li>
              <li>Oversaw creative asset development with internal stakeholders to align brand and business objectives.</li>
              <li>Served as Workfront administrator and subject matter expert during the Wrike-to-Workfront transition.</li>
            </ul>
          </article>

          <article class="job">
            <div class="job-heading">
              <div>
                <h3>Industrial Color Studios</h3>
                <p>Director of Retouching - Workflow Solutions</p>
              </div>
              <p class="date">2016 - 2021</p>
            </div>
            <ul>
              <li>Managed final asset delivery for high-profile clients while meeting budget, deadline, and quality standards.</li>
              <li>Led client onboarding, project scope, deliverables, and technical requirements to streamline workflows.</li>
              <li>Developed automated file management with custom PERL scripts, reducing manual sorting errors and saving production time.</li>
              <li>Launched Google Data Studio dashboards for real-time project tracking and optimized image processing workflows.</li>
              <li>Managed a team of 14 employees and multiple freelancers with mentorship and performance-focused leadership.</li>
            </ul>
          </article>

          <article class="job">
            <div class="job-heading">
              <div>
                <h3>eBay Enterprise</h3>
                <p>Post Production Manager</p>
              </div>
              <p class="date">2007 - 2016</p>
            </div>
            <ul>
              <li>Led nine post-production specialists across image editing, asset management, and client delivery.</li>
              <li>Consulted with business units to onboard new eCommerce clients and shape image workflows and style guides.</li>
              <li>Improved retouching processes to reduce production time and increase output quality.</li>
            </ul>
          </article>

          <div class="early-career">
            <p><strong>GSI Commerce</strong> <span>Sr. Production Artist, 2002 - 2007</span></p>
            <p><strong>Global Sports</strong> <span>Intern / Production Artist, 1999 - 2002</span></p>
          </div>
        </section>
      </div>
    </section>

    <section class="portfolio-section origin-section" id="origin">
      <div class="section-title">
        <h2>Creative Foundation</h2>
        <span aria-hidden="true"></span>
      </div>
      <div class="origin-grid">
        <div>
          <p>
            I originally wanted to be an artist and graphic designer, so I chose art school. After graduating, I landed
            as an intern at Global Sports, a startup e-commerce company, where I helped dress mannequins and path out
            product images from the photo studio. That internship became a production artist role, where I learned how
            to edit product imagery and got my first real taste of creative workflow.
          </p>
          <p>
            Product arrived, was barcoded, steamed, styled, photographed, added to the server, and then picked up by the
            production team. We transformed those files into final flat images ready for online use. The goal was always
            better and faster. Over time, we used automation to move files, resize images, and speed up repetitive work
            with Photoshop actions. As my role grew into management, I kept pushing the process forward with better
            tracking, better offshore handoffs, and better methods for retouching teams to move quickly and accurately.
            During my time there, the team maintained a 99.9% on-time SLA rate.
          </p>
          <p>
            After more than 20 years in e-commerce production, I moved into a new challenge: financial marketing and
            creative project management. At Vanguard, we helped build a creative agency from the ground up. We started
            small, grew more effective, and soon adopted Workfront. I dove deeply into the platform, earned admin access
            in less than a year, and became one of the team's Workfront subject matter experts.
          </p>
          <p>
            A few years later, I moved into the role that became my new passion: creative technologist. The work became
            finding inventive ways to solve creative and operational problems with technology. Then AI changed the scale
            of what was possible. It turned more of my ideas into working tools, especially where creative thinking and
            code meet.
          </p>
        </div>
        <aside>
          <p class="date">Through Line</p>
          <h3>Better workflows, happier clients, faster creative production.</h3>
          <p>
            The constant thread has been the challenge I enjoy most: inventing new methods, tools, and systems that help
            creative teams produce better work with more speed, accuracy, and confidence.
          </p>
        </aside>
      </div>
    </section>

    <section class="portfolio-section" id="work">
      <div class="section-title">
        <h2>Portfolio</h2>
        <span aria-hidden="true"></span>
      </div>
      <p class="section-intro">
        Selected work migrated from the previous bflieck.com portfolio, reframed around creative technology,
        e-commerce production, and workflow systems.
      </p>
      <div class="project-grid">
        ${projectCards}
      </div>
    </section>

    <section class="systems-band" id="systems">
      <div>
        <p class="name-kicker">Workflow Systems</p>
        <h2>Creative operations that move faster because the process is designed.</h2>
      </div>
      <p>
        Experience across Adobe Creative Cloud, Workfront, Workfront Fusion, Wrike, Smartsheet, Figma,
        AI-assisted content generation, cross-functional production systems, and the legacy production utilities
        migrated from bflieck.com.
      </p>
      <div class="systems-grid" aria-label="Creative operations capabilities">
        <span>Creative Intake</span>
        <span>AI Resource Matching</span>
        <span>Asset Automation</span>
        <span>AI Content Generation</span>
        <span>SLA Dashboarding</span>
        <span>Workflow Governance</span>
      </div>
    </section>

    <section class="closing-band">
      <p>References available on request.</p>
      <a class="button" href="${resumeUrl}">View Resume PDF</a>
      <a class="button ghost" href="mailto:brianflieck@gmail.com">Contact Brian</a>
    </section>
  </main>
`;

const renderProject = (project) => `
  ${renderHeader()}
  <main>
    <section class="project-detail">
      <a class="back-link" href="#work">Back to Portfolio</a>
      <div class="detail-heading">
        <p class="date">${project.category}</p>
        <h1>${project.title}</h1>
        <p>${project.summary}</p>
      </div>
      ${
        project.videos?.length
          ? `<div class="detail-videos">
              ${project.videos
                .map(
                  (video) => `
                    <figure class="detail-video-frame ${video.className ?? ""}">
                      <iframe src="${video.src}" title="${video.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                      <figcaption>${video.title}</figcaption>
                    </figure>
                  `,
                )
                .join("")}
            </div>`
          : project.video
            ? `<iframe class="detail-video" src="${project.video}" title="${project.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
          : ""
      }
      ${
        project.images?.length
          ? `<div class="detail-gallery">
              ${project.images
                .map((image) => `<img src="${image}" alt="" loading="lazy">`)
                .join("")}
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

const render = () => {
  const projectSlug = window.location.hash.match(/^#project\/(.+)/)?.[1];
  const project = projectGroups.find((item) => item.slug === projectSlug);

  document.querySelector("#app").innerHTML = project ? renderProject(project) : renderHome();

  if (project) {
    window.scrollTo(0, 0);
  } else if (window.location.hash && window.location.hash !== "#/") {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }
};

window.addEventListener("hashchange", render);
render();
