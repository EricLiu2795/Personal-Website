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
