import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Brian Flieck home">FLIECK</a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#systems">Systems</a>
      <a href="#resume">Resume</a>
      <a href="mailto:brianflieck@gmail.com">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <p class="eyebrow">Creative Technology Operations</p>
      <h1>Production systems, e-commerce imaging, and AI-enabled creative workflows.</h1>
      <p class="hero-copy">
        I build the connective tissue between creative teams, content operations,
        and automation: from polished product imagery to workflow systems that
        reduce production drag.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="#work">View Work</a>
        <a class="button secondary" href="#resume">Resume</a>
      </div>
    </section>

    <section class="section" id="work">
      <div class="section-heading">
        <p class="eyebrow">Featured Work</p>
        <h2>Selected Projects</h2>
      </div>
      <div class="project-grid">
        <article class="project-card">
          <span>E-commerce</span>
          <h3>Photography & Video Projects</h3>
          <p>Product-focused visual systems for commerce, campaign, and digital merchandising work.</p>
          <a href="#">Open Case Study</a>
        </article>
        <article class="project-card">
          <span>Operations</span>
          <h3>E-commerce Photography Workflows</h3>
          <p>Workflow planning, intake, tracking, review, and delivery systems for creative production.</p>
          <a href="#">Open Case Study</a>
        </article>
        <article class="project-card">
          <span>Product</span>
          <h3>Best in Coat</h3>
          <p>A concept combining brand, product presentation, and a sharper commerce experience.</p>
          <a href="#">Open Project</a>
        </article>
      </div>
    </section>

    <section class="band" id="systems">
      <p class="eyebrow">Workflow Systems</p>
      <h2>Creative operations that move faster because the process is designed.</h2>
      <p>
        Experience across Adobe Creative Cloud, Workfront, Wrike, Smartsheet,
        Figma, AI-assisted content generation, and cross-functional production systems.
      </p>
    </section>

    <section class="section resume" id="resume">
      <div>
        <p class="eyebrow">Resume</p>
        <h2>Creative Technology Operations</h2>
      </div>
      <a class="button primary" href="mailto:brianflieck@gmail.com">Request Resume</a>
    </section>
  </main>
`;
