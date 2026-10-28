# Project evidence and final polish

This is an incremental update to the approved brighter V2 design. The hero markup, original JL artwork, navigation component, routes, base-path configuration, resume PDF and publication URL are unchanged.

## LaunchStack architecture

The native React/CSS diagram summarizes two related efforts:

- Founder Weekly Review: documents, GitHub activity, customer signals and team context feed evidence processing/retrieval and a source-grounded weekly report.
- Vantage: role-aware context/retrieval leads to AI-assisted reports, human review, decisions and tracked commitments.

Solid and dashed lanes distinguish the reporting workflow from the broader Vantage design. The diagram and card explicitly label mixed maturity; dashed borders do not claim that each individual component is unimplemented. No graph library, animation loop or runtime service was added.

Inspected sources in the local LaunchStack checkout:

- `docs/runbooks/founder-weekly-review-staging.md` (staging smoke test remains marked pending)
- `pipelines/src/vantage/README.md` (evidence, signals, cited drafts, decisions and commitments)
- `docs/design/weekly-decision-agenda.md` (technical design and integration boundaries)

## Aftershock screenshot provenance

The user supplied:

`C:/Users/junku/AppData/Local/Temp/orca-paste-1793214097967-555c1ed0-ef8e-4571-b990-57d1ca3d8a46.png`

Original dimensions: 2047×1151. SHA-256:

`57B27D997F7B32AC1948262B8C70FB89DD85AA6D4D26F30BE3B553037053746D`

The screenshot shows a paused “Aftershock Demo” video at 2:16 / 3:34. A lossless crop at x=98, y=194, width=1854, height=886 removes the outer video title, black sidebars and timeline while retaining incoming reports, the rescue map, drone progress and rescue dispatch. It is stored as `public/projects/aftershock-dashboard.webp` (678,952 bytes), SHA-256:

`97FE1E8D941895820ECDB5DFF3078C7788D46BA92683EC8944CB4F1DDC76FCD3`

The image was not regenerated, inpainted, brightened or reconstructed. Responsive rendering preserves its aspect ratio and does not further crop away panels. The caption identifies it as a prototype demo and the alt text identifies the supplied screenshot.

**Known limitation:** no original video URL or clean source frame was verified. The small central play/cursor overlay and paused-player dimming remain part of the supplied image. The caption is not a functional video player. Replacing this image with a clean source frame later requires no layout change.

The inspected `EricLiu2795/Aftershock` repository is private; inspected README/assets did not establish a public repository linked to the actual submission. A repository `image.png` was explicitly labeled a design reference and was rejected as product evidence. An isolated prototype setup was stopped once the user supplied the genuine screenshot; no capture from that setup was used and no provider calls were made. The original Aftershock checkout was not modified.

The Aftershock card therefore retains the existing verified project destination:

https://devpost.com/software/aftershock-wd7a4s

LaunchStack retains:

https://github.com/Deodat-Lawson/LaunchStack

## Interaction and copy

Each featured and research card is one native external anchor with a concise accessible name, `target="_blank"`, `rel="noopener noreferrer"`, pointer cursor, subtle hover background/border and a visible cyan keyboard outline. The bottom CTA is a noninteractive span; there are no nested links or click handlers. Typed card links use a one-item tuple so each card has exactly one destination.

Mystra opens the existing [arXiv paper](https://arxiv.org/abs/2607.12308). Genesis Mission opens the [official Johns Hopkins project announcement](https://www.cs.jhu.edu/news/hopkins-led-team-selected-for-inaugural-department-of-energy-genesis-mission-award/), which identifies Ziyang Li and the computational-physics research project. These destinations match in English and Chinese.

Mystra now emphasizes “ICSE 2027 · Accepted Paper · Second Author”. Its contribution wording is limited to reproducing/evaluating real-world web-application CVE cases and assisting with cross-runtime evaluation. Both languages use the updated footer, “Let's build something useful.” / “一起构建有用的软件。” Main project/research descriptive copy is 14px; compact diagram labels, metadata and tags remain smaller for hierarchy, with increased tag/metadata sizing.

The final research-card cleanup removes the decorative Mystra and Genesis symbols without replacement. Dates remain aligned at the top-right; titles move 12px closer to the date row, with the released spacing moved before the CTA to retain card dimensions. Typography, colors, content and the research grid remain unchanged in both languages.

TypeScript now excludes the ignored `tmp/` directory. The exploratory Aftershock source archive was otherwise swept up by the portfolio's broad TypeScript glob; application sources remain included and checked normally.

## Validation and captures

- `pnpm lint`: passed, no warnings/errors.
- `pnpm typecheck`: passed after excluding the unrelated temporary archive.
- `pnpm build`: passed for root paths.
- `GITHUB_PAGES=true pnpm build`: passed for the GitHub Pages base path.
- Resume SHA-256 remains `CD7128273CFB7341FD9BD29689576C40EB8BCDA488DE6378449E44F37C2F2834`.
- Before/after captures are under `artifacts/website-refresh/final-polish/`. The folder is local and ignored by Git.
- Detailed browser results: [QA evidence](../artifacts/website-refresh/final-polish/qa.md).

| View | Before | After |
| --- | --- | --- |
| EN desktop projects | [Before](../artifacts/website-refresh/final-polish/before/en-desktop-work.png) | [After](../artifacts/website-refresh/final-polish/after/en-desktop-work.png) |
| EN mobile projects | [Before](../artifacts/website-refresh/final-polish/before/en-mobile-work.png) | [After](../artifacts/website-refresh/final-polish/after/en-mobile-work.png) |
| ZH desktop projects | [Before](../artifacts/website-refresh/final-polish/before/zh-desktop-work.png) | [After](../artifacts/website-refresh/final-polish/after/zh-desktop-work.png) |
| ZH mobile projects | [Before](../artifacts/website-refresh/final-polish/before/zh-mobile-work.png) | [After](../artifacts/website-refresh/final-polish/after/zh-mobile-work.png) |

Research, footer, full-page and hero comparisons are in the same folders. All work is local; no push, PR, deployment or live-site change.

The last symbol-only cleanup has separate [desktop before](../artifacts/website-refresh/final-polish/symbol-cleanup/en-desktop-before.png) / [after](../artifacts/website-refresh/final-polish/symbol-cleanup/en-desktop-after.png) and [mobile before](../artifacts/website-refresh/final-polish/symbol-cleanup/en-mobile-before.png) / [after](../artifacts/website-refresh/final-polish/symbol-cleanup/en-mobile-after.png) comparisons; matching `zh-*` captures are in that folder. Section captures are crops of the full-page browser images, avoiding floating navigation overlays without altering page content.
