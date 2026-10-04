# Junkun Liu — Personal Website

Technical portfolio for Junkun Liu, focused on reliable AI agents, orchestration, retrieval, evaluation, and AI systems engineering.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Verify

```bash
pnpm lint
pnpm build
```

The build is configured for a static export and writes the deployable site to `out/`.

## GitHub Pages

GitHub Actions deploys changes merged into `main` to:

`https://ericliu2795.github.io/Personal-Website/`

The Pages workflow builds with the `/Personal-Website` base path so the resume, CSS, JavaScript, and internal anchors resolve correctly under the repository subpath. Local development remains available at `http://localhost:3000`.

## Content and languages

English lives at `/`; Chinese lives at `/zh/`. Both render the shared `PortfolioPage` component from typed content in `lib/content.ts`. Root layouts provide the correct document language and localized metadata. The navigation supports keyboard focus, mobile section shortcuts, and reduced motion.

Selected work includes Personal Action Agent, LaunchStack, and Aftershock. Research covers Genesis Mission and Dynamic Taint Analysis. Project evidence links point to the public GitHub repositories and Aftershock's Devpost page; no private repository is linked. The downloadable resume is the supplied October 2026 revision.
