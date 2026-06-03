const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const requiredString = (value) => typeof value === "string" && value.trim().length > 0;
const compact = (items = []) => items.filter(Boolean).join("\n");

const formatResumeText = (resume) =>
  `${resume.name.first} ${resume.name.last}
${resume.title}

${resume.contact.join(" | ")}

SUMMARY
${resume.headline}

PROFILE
${resume.profileTitle}
${resume.profile}

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

const validateResume = (resume) => {
  if (!resume || typeof resume !== "object") return "Resume payload is missing.";
  if (!requiredString(resume.title)) return "Resume title is required.";
  if (!requiredString(resume.name?.first) || !requiredString(resume.name?.last)) return "Resume name is required.";
  if (!requiredString(resume.headline)) return "Resume headline is required.";
  if (!Array.isArray(resume.experience) || resume.experience.length === 0) return "At least one experience entry is required.";
  return null;
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  const publishKey = process.env.RESUME_PUBLISH_KEY;
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";

  if (!publishKey || !token || !repo) {
    return jsonResponse(500, {
      error: "Publishing is not configured. Set RESUME_PUBLISH_KEY, GITHUB_TOKEN, and GITHUB_REPO in Netlify.",
    });
  }

  if (event.headers["x-publish-key"] !== publishKey) {
    return jsonResponse(401, { error: "Invalid publish key." });
  }

  let resume;
  try {
    resume = JSON.parse(event.body || "{}").resume;
  } catch {
    return jsonResponse(400, { error: "Invalid JSON payload." });
  }

  const validationError = validateResume(resume);
  if (validationError) {
    return jsonResponse(400, { error: validationError });
  }

  const apiBase = `https://api.github.com/repos/${repo}/contents`;
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    "User-Agent": "bflieck-site-resume-publisher",
    Accept: "application/vnd.github+json",
  };

  const updateFile = async ({ path, content, message }) => {
    const fileBase = `${apiBase}/${path}`;
    const currentResponse = await fetch(`${fileBase}?ref=${encodeURIComponent(branch)}`, {
      headers: authHeaders,
    });

    if (!currentResponse.ok && currentResponse.status !== 404) {
      throw new Error(`Could not read ${path} from GitHub.`);
    }

    const current = currentResponse.ok ? await currentResponse.json() : null;
    const updateResponse = await fetch(fileBase, {
      method: "PUT",
      headers: {
        ...authHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString("base64"),
        sha: current?.sha,
        branch,
      }),
    });

    const update = await updateResponse.json();
    if (!updateResponse.ok) {
      throw new Error(update.message || `GitHub rejected ${path}.`);
    }

    return update.commit?.sha;
  };

  let dataCommit;
  let textCommit;
  try {
    dataCommit = await updateFile({
      path: "src/resumeData.json",
      content: `${JSON.stringify(resume, null, 2)}\n`,
      message: "Update resume content",
    });
    textCommit = await updateFile({
      path: "documents/Brian Flieck Resume.txt",
      content: formatResumeText(resume),
      message: "Update text resume download",
    });
  } catch (error) {
    return jsonResponse(502, { error: error.message });
  }

  return jsonResponse(200, {
    commit: textCommit || dataCommit,
    message: "Resume data and text download published.",
  });
};
