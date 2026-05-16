# Codex Status

Last updated: 2026-05-16 11:34 EDT

## Current State

- Repository: `/Users/brianflieck/career-ops/bflieck-site`
- Branch: `main`
- Git status at handoff: in progress, restoring portfolio sections and updated resume PDF
- Local branch status: synced with `origin/main`
- Latest pushed commit before current work: `71f968d Create resume-based portfolio page`
- Previous commits: `78be2a7 Update deployment workflow runtime`, `4f32e85 Initial portfolio site scaffold`

## Deployment

- Workflow file: `.github/workflows/netlify.yml`
- Latest GitHub Actions deploy run succeeded:
  - Run ID: `25965123781`
  - Workflow: `Deploy to Netlify`
  - Trigger: push to `main`
  - Commit: `Update deployment workflow runtime`
  - Duration: about 1m5s
  - Timestamp: 2026-05-16T15:01:14Z
- Earlier initial scaffold deploy failed before the workflow runtime update.

## Workflow Details

The Netlify deployment workflow currently:

1. Checks out the repository with `actions/checkout@v5`
2. Sets up Node with `actions/setup-node@v5`
3. Uses Node `24`
4. Runs `npm install`
5. Runs `npm run build`
6. Deploys `dist` to Netlify with `npx netlify-cli deploy --prod`

Required GitHub secrets:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

## Project Commands

```bash
npm run dev
npm run build
npm run preview
```

## Notes For Next Session

- `src/main.js` and `src/styles.css` were rewritten into a resume-forward site based on `documents/Brian Flieck Creative Technology.pdf`.
- The RED @ Vanguard Creative Technologist bullets were updated per user-provided copy before push.
- User asked to restore the broader page structure while keeping the resume as the home page. Portfolio sections for Selected Projects and Workflow Systems were restored below the resume-home section.
- User updated `documents/Brian Flieck Creative Technology.pdf`; replace the previously pushed PDF with this updated local file in the next commit.
- The page now uses the resume's look and feel: gray paper background, centered all-caps name, letter-spaced subtitle, bordered contact strip, section rules, and a two-column resume layout.
- The public page includes work history, skills, education, and a PDF link. Reference contact details from the PDF were intentionally not published on the page; it says references are available on request.
- `npm run build` passed after the site rewrite, and Vite bundled the resume PDF into `dist/assets`.
- A local dev server was started at `http://127.0.0.1:5173/` for preview.
- `dist/index.html` exists from a build.
- Main source files are `index.html`, `src/main.js`, and `src/styles.css`.
- If continuing deployment work, check `gh run list --limit 10` first.
- If continuing site work, run `npm run dev` or inspect the Vite source files before editing.
