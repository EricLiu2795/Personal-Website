# Featured Work and Hackathon Spotlight

October 28, 2026. Local refinement of the approved V2 portfolio, based on `c93dfa6` on `codex/portfolio-v2`. The remote remains `https://github.com/EricLiu2795/Personal-Website`. The working tree was clean before this change.

## Composition and implementation

| Before | After | Why |
| --- | --- | --- |
| LaunchStack and Aftershock occupied matching columns. | LaunchStack is the sole Featured Work entry; Aftershock follows in a distinct Hackathon Spotlight. | Separate sustained engineering leadership from a time-bounded, award-winning prototype. |
| A small architecture diagram introduced LaunchStack. | A two-column case-study surface puts ownership and positioning beside two concise modules. | The project's scope and personal contribution are readable without decorative complexity. |
| The architecture thumbnail was always visible. | The existing diagram is inside a native, independent Technical Design disclosure. | Keep explanatory detail available without letting it dominate the main presentation. |
| Aftershock shared the same card template. | The real dashboard and award sit beside the project narrative, four-person leadership and 36-hour result. | Make product evidence and external recognition immediately apparent. |

`components/selected-work.tsx` now composes LaunchStack, the separate hackathon section, and the existing compact Personal Action Agent disclosure. The main project surfaces are single semantic external anchors; their CTAs are spans. Technical Design and Personal Action Agent controls sit outside those anchors, so disclosure interaction does not navigate to an external site. No client component, animation loop, runtime service or dependency was added.

`lib/content.ts` supplies the English and Chinese labels, module descriptions, design-maturity note, team/time statistics and CTA copy. Founder Weekly Review remains a source-grounded reporting workflow; Vantage is explicitly the broader design with partially integrated and proposed components. No design sample or simulated product UI is presented as shipped functionality.

The desktop compositions are deliberately different. Tablet layouts stack the lead content while retaining paired explanatory modules or columns where they fit; mobile layouts stack naturally. A visual pass corrected the mobile statistic alignment and prevented an isolated award year at wider widths.

`components/portfolio-page.tsx` only changes section numbering: Featured Work 01, Hackathon 02, Research 03, Experience 04, About 05, Contact 06. Work navigation still targets `#work`; the existing `#launchstack`, `#aftershock` and `#action-agent` anchors remain valid. No additional top-level navigation entry was added.

Hero markup/artwork, navigation component, research-card styling/content, experience/about content, publication links, SEO layouts and `next.config.mjs` are unchanged. The resume and Aftershock image are byte-for-byte preserved:

- Resume SHA-256: `CD7128273CFB7341FD9BD29689576C40EB8BCDA488DE6378449E44F37C2F2834`.
- Dashboard SHA-256: `97FE1E8D941895820ECDB5DFF3078C7788D46BA92683EC8944CB4F1DDC76FCD3`.

## Verification

- `pnpm lint`: passed, no ESLint warnings or errors.
- `pnpm typecheck`: passed.
- `pnpm build`: passed, static EN/ZH export.
- `GITHUB_PAGES=true pnpm build`: passed, `/Personal-Website/` base path.
- Browser evidence and scope: [QA record](../artifacts/website-refresh/editorial-work/qa.md).

Local previews: root at `http://127.0.0.1:4173/`, Pages at `http://127.0.0.1:4174/Personal-Website/`.

## Screenshots

| View | Previous work layout | LaunchStack | Aftershock |
| --- | --- | --- | --- |
| EN desktop | [Before](../artifacts/website-refresh/editorial-work/before/en-desktop-work.png) | [Featured Work](../artifacts/website-refresh/editorial-work/after/en-desktop-work.png) | [Hackathon Spotlight](../artifacts/website-refresh/editorial-work/after/en-desktop-hackathon.png) |
| EN mobile | [Before](../artifacts/website-refresh/editorial-work/before/en-mobile-work.png) | [Featured Work](../artifacts/website-refresh/editorial-work/after/en-mobile-work.png) | [Hackathon Spotlight](../artifacts/website-refresh/editorial-work/after/en-mobile-hackathon.png) |
| ZH desktop | [Before](../artifacts/website-refresh/editorial-work/before/zh-desktop-work.png) | [Featured Work](../artifacts/website-refresh/editorial-work/after/zh-desktop-work.png) | [Hackathon Spotlight](../artifacts/website-refresh/editorial-work/after/zh-desktop-hackathon.png) |
| ZH mobile | [Before](../artifacts/website-refresh/editorial-work/before/zh-mobile-work.png) | [Featured Work](../artifacts/website-refresh/editorial-work/after/zh-mobile-work.png) | [Hackathon Spotlight](../artifacts/website-refresh/editorial-work/after/zh-mobile-hackathon.png) |

Tablet, 320px, full-page, unchanged-hero and expanded technical-design captures are in the same local artifact folder, which is excluded from Git.

## Limits

The unchanged supplied Aftershock frame retains its small central play/cursor overlay and paused dimming; embedded dashboard text is small at mobile thumbnail size. The Devpost destination is preserved, but its Cloudflare challenge limits automated inspection of its content. Browser QA uses resized desktop Chrome rather than physical devices or full screen-reader certification.

All work is local. No push, PR, deployment or live-site change was performed.
