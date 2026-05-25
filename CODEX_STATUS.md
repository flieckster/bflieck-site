# Codex Status

Last updated: 2026-05-24

## Current State

- Repository: `/Users/brianflieck/career-ops/bflieck-site`
- Branch: `main`
- Git status at handoff: in progress, legacy portfolio detail pages
- Local branch status: synced with `origin/main`
- Latest pushed commit before current work: `7a5cbb9 Rewrite creative foundation story`
- Previous commits: `4b9f68b Embed Luma video and remove legacy links`, `2332b6d Migrate legacy portfolio content`, `1a1f271 Restore portfolio sections below resume home`, `71f968d Create resume-based portfolio page`

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
- Updated resume PDF was already pushed in commit `1a1f271`.
- User asked to scrape bflieck.com for content to bring into the new site. Added a `projectGroups` data set in `src/main.js` with legacy portfolio content and source links for SLA Workfront dashboard, Dynamic Workflow Chart, Dynamic Image Product Lookup App, Under Armour Lights Out Concept, Digital Overlay, Luma Color Changes, TUMI Motion Studies, and Best In Coat.
- User asked to embed Vimeo `101630008` for Luma Color Changes and remove clicks to the old bflieck.com site. Luma now uses a Vimeo iframe, project-card "View Original" links were removed, and `www.bflieck.com` in the contact strip is plain text instead of a link.
- User asked for legacy portfolio cards to click into larger project views and return home. Implemented hash-based internal project detail pages in `src/main.js` using `#project/<slug>`, plus larger image/video galleries and a "Back to Legacy Portfolio" link.
- Added a Creative Foundation section using the old About Me positioning: art/design background, commercial studio craft, and operations systems.
- Added remote Squarespace CDN thumbnails for selected migrated projects where usable image assets were exposed.
- The page now uses the resume's look and feel: gray paper background, centered all-caps name, letter-spaced subtitle, bordered contact strip, section rules, and a two-column resume layout.
- The public page includes work history, skills, education, and a PDF link. Reference contact details from the PDF were intentionally not published on the page; it says references are available on request.
- `npm run build` passed after the site rewrite, and Vite bundled the resume PDF into `dist/assets`.
- A local dev server was started at `http://127.0.0.1:5173/` for preview.
- `dist/index.html` exists from a build.
- Main source files are `index.html`, `src/main.js`, and `src/styles.css`.
- If continuing deployment work, check `gh run list --limit 10` first.
- If continuing site work, run `npm run dev` or inspect the Vite source files before editing.
