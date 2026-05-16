import "./styles.css";

const resumeUrl = new URL("../documents/Brian Flieck Creative Technology.pdf", import.meta.url).href;

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Brian Flieck home">Brian Flieck</a>
    <nav aria-label="Primary navigation">
      <a href="#profile">Profile</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="${resumeUrl}">PDF</a>
    </nav>
  </header>

  <main>
    <section class="resume-sheet" aria-labelledby="resume-title">
      <div class="hero-lockup">
        <p class="name-kicker">Creative Technology Operations</p>
        <h1 id="resume-title">Brian Flieck</h1>
      </div>

      <div class="contact-strip" aria-label="Contact details">
        <span>Coatesville, PA</span>
        <a href="https://www.bflieck.com">www.bflieck.com</a>
        <a href="mailto:brianflieck@gmail.com">brianflieck@gmail.com</a>
        <a href="https://linkedin.com/in/brianflieck/">linkedin.com/in/brianflieck/</a>
      </div>

      <section class="profile-section" id="profile">
        <div class="section-title">
          <h2>Profile Info</h2>
          <span aria-hidden="true"></span>
        </div>
        <p class="profile-copy">
          Innovative professional with 24 years of experience in creative technology, operations, and product management.
          Proven record driving adoption of Adobe Creative Cloud and AI-driven workflows, integrating systems to improve
          efficiency, and delivering measurable business impact in regulated environments. Adept at translating operational
          needs into product roadmaps, coaching teams, and optimizing performance.
        </p>
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
                <p class="date">2020 - 2021</p>
                <h3>University of Penn</h3>
                <p>Full Stack Web Development Boot Camp</p>
              </article>
              <article>
                <p class="date">1999 - 2001</p>
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

    <section class="closing-band">
      <p>References available on request.</p>
      <a class="button" href="${resumeUrl}">View Resume PDF</a>
      <a class="button ghost" href="mailto:brianflieck@gmail.com">Contact Brian</a>
    </section>
  </main>
`;
