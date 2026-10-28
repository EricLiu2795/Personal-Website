# Junkun Liu — Personal Website V2

A bilingual software engineering portfolio built with Next.js 14, React, TypeScript and Tailwind CSS. The dark navy/violet design uses original static SVG artwork and no additional runtime dependencies.

## Local development

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

Open http://localhost:3000. On Windows PowerShell, use `pnpm.cmd` if script execution policy blocks the shim.

## Checks and static preview

```sh
pnpm lint
pnpm typecheck
pnpm build
python -m http.server 4173 --bind 127.0.0.1 --directory out
```

The production export is in `out/`. `next start` does not serve this static export; use a static server for production previews.

To verify GitHub Pages paths locally in PowerShell:

```powershell
$env:GITHUB_PAGES = 'true'
pnpm.cmd build
Remove-Item Env:GITHUB_PAGES
```

Serve that output mounted at `/Personal-Website/`. `next.config.mjs` derives `basePath`, `assetPrefix` and `NEXT_PUBLIC_BASE_PATH` together. The existing GitHub Actions workflow deploys pushes to `main`; local feature-branch commits do not deploy anything.

## Architecture and content

- `/` and `/zh/` share the server-rendered `PortfolioPage` and typed bilingual content in `lib/content.ts`.
- The only client component is the accessible mobile navigation. Project and coursework disclosures use native `details` elements.
- Order: hero, featured projects, research/publications, experience/teaching, about/skills, contact.
- LaunchStack distinguishes Founder Weekly Review reporting from Vantage's broader, partially integrated technical design. Aftershock is featured; Personal Action Agent is a secondary disclosure.
- Mystra lists ICSE 2027 acceptance, second authorship and the limited personal contribution. Genesis describes scientific-workload reconstruction and CPU/GPU validation.
- Metadata includes localized titles/descriptions, canonical URLs, language alternates and OpenGraph. No web fonts, remote artwork, Figma runtime, WebGL or animation framework are required.
- The existing resume URL `/Junkun-Liu-Resume.pdf` is preserved. The October 28 local source was visually checked as one page and copied byte-for-byte; see the review record for provenance.

See [the V2 review record](docs/website-v2-review.md) for evidence, screenshots and limitations. Screenshot/QA artifacts are local under `artifacts/website-refresh/` and excluded from Git.

The [project evidence polish record](docs/project-evidence-polish.md) documents the architecture thumbnail, supplied Aftershock screenshot provenance, accessible full-card links and follow-up QA.
