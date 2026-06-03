const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const requiredString = (value) => typeof value === "string" && value.trim().length > 0;

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

  const path = "src/resumeData.json";
  const apiBase = `https://api.github.com/repos/${repo}/contents/${path}`;
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    "User-Agent": "bflieck-site-resume-publisher",
    Accept: "application/vnd.github+json",
  };

  const currentResponse = await fetch(`${apiBase}?ref=${encodeURIComponent(branch)}`, {
    headers: authHeaders,
  });

  if (!currentResponse.ok) {
    return jsonResponse(502, { error: "Could not read the current resume file from GitHub." });
  }

  const current = await currentResponse.json();
  const content = Buffer.from(`${JSON.stringify(resume, null, 2)}\n`).toString("base64");

  const updateResponse = await fetch(apiBase, {
    method: "PUT",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Update resume content",
      content,
      sha: current.sha,
      branch,
    }),
  });

  const update = await updateResponse.json();
  if (!updateResponse.ok) {
    return jsonResponse(502, { error: update.message || "GitHub rejected the resume update." });
  }

  return jsonResponse(200, {
    commit: update.commit?.sha,
    message: "Resume data published.",
  });
};
