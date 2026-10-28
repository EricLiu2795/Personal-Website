# Personal Website V2 — review record

Date: October 28, 2026. Work is local only; no push, PR, deployment or live-site modification was performed.

## Repository and preservation

- Checkout: `C:/Users/junku/orca/Personal-Website`.
- Remote: `https://github.com/EricLiu2795/Personal-Website`.
- Base: clean `main` at `a7468149848df49d62294b0183ac05fa480baad3`, verified against `git ls-remote --heads origin`.
- The other remote branch, `codex/personal-portfolio` at `26dfbd6e0d6a8cb49b69049360725b1073fd8d28`, is an ancestor of main.
- Dedicated local branch: `codex/portfolio-v2`.
- The older matching checkout at `C:/Users/junku/Documents/ChatGPT/Personal Website` was not edited. Before and after inventory both show modified globals.css, selected-work.tsx, site-navigation.tsx and untracked project-details.tsx, project-shortcuts.tsx, use-current-section.ts.

## Design and architecture

| Before | After | Why |
| --- | --- | --- |
| Cream/rust editorial layout and experience first | Deep navy/violet system, generous hero and featured projects first | Expose engineering work early |
| Agent-focused headline | Software Engineering × AI Systems × Research | Broader and more accurate engineering positioning |
| Text-only hero | Original static SVG JL field, clear project/resume actions | Distinct identity with no animation loop or added dependency |
| Three equally prominent projects | LaunchStack and Aftershock cards; Action Agent disclosure | Prioritize current work and the hackathon outcome |
| Manuscript-in-preparation and Lean-oriented research | Accepted Mystra paper and concrete scientific-code validation work | Match current verified sources and resume |

Kept the existing Next.js/React/TypeScript structure, shared typed content and static export. Only navigation is a client component. Native disclosures, visible focus rings, skip link, language navigation, responsive breakpoints and reduced-motion CSS are retained. Cards have restrained hover color/border feedback; hero artwork stays static.

## Content provenance

- **Mystra:** [arXiv 2607.12308](https://arxiv.org/abs/2607.12308) confirms title and author order (Junkun Liu second); [coauthor Yinzhi Cao's publication list](https://yinzhicao.org/) lists ICSE 2027. Contribution wording follows the user's description and current resume: real-world application vulnerability validation and limited runtime-porting/evaluation support.
- **LaunchStack:** inspected local `docs/runbooks/founder-weekly-review-staging.md`, `docs/design/weekly-decision-agenda.md` and `pipelines/src/vantage/README.md`. Weekly reporting is distinguished from Vantage's role-aware evidence, review and commitment design. The page explicitly states some Vantage components are proposed or partially integrated.
- **Aftershock:** current resume and [teammate account](https://www.linkedin.com/in/hussam-makhoul123) support the Bloomberg Most Philanthropic Hack track first place. Existing [Devpost link](https://devpost.com/software/aftershock-wd7a4s) is retained. The four-person team and 36-hour demo are described as a prototype.
- **Genesis:** local `hpc-project/agentic-hpc-code-synthesis/src/experience-notes/0913-run01.md` records workload tests, CPU reference comparisons and H100 evaluation; individual benchmark READMEs also describe unexecuted GPU paths. The site describes reconstruction, CUDA setup and numerical validation responsibilities, without claiming universal GPU correctness or that fresh GPU experiments were run during this website task.

## Resume provenance

The latest identified local PDF is `C:/Users/junku/Desktop/Junkun_resume.pdf`, modified October 28, 2026. No file named exactly `Junkun_Liu_Resume.pdf` was found in the searched project/user locations. The available PDF contains the requested current LaunchStack/Vantage, Aftershock, Mystra ICSE 2027 and Genesis updates.

A PDF reader confirmed one page, and a rendered page was visually inspected. It was copied unchanged to `public/Junkun-Liu-Resume.pdf`, preserving existing download URLs. Source and destination SHA-256:

`CD7128273CFB7341FD9BD29689576C40EB8BCDA488DE6378449E44F37C2F2834`

Size: 150,444 bytes. The prior tracked PDF remains recoverable from the base commit. No resume text or layout was invented or regenerated.

## Executed checks

| Check | Result |
| --- | --- |
| `pnpm lint` | Passed, no warnings/errors |
| `pnpm typecheck` | Passed |
| `pnpm build` | Passed; English and Chinese statically exported |
| `GITHUB_PAGES=true pnpm build` | Passed; `/Personal-Website/` asset and navigation paths |
| `git diff --check` | Passed |
| Desktop/mobile browser capture | EN/ZH, 1440×1000 and 390×844, before and after |
| Static root and Pages export browser navigation | Both locales return 200; language switch, hero CTA and Work/Research/Experience/About anchors pass |
| Keyboard/mobile menu | Skip link, keyboard open, Escape close/focus return and section navigation pass |
| Width matrix | EN/ZH at 320, 390, 768 and 1440px: no horizontal overflow |
| Resume and favicon | HTTP 200 on both export variants; PDF MIME, byte count and PDF signature correct |
| Reduced motion | `scroll-behavior: auto`; zero active animations |
| Contrast sampling | 136 visible English text samples, no failures; CTA 5.17:1, hero 16.96:1, nav 9.92:1; gradient background approximation |
| Console/network | No console/page errors, local request failures or local HTTP 4xx observed in final static-export tests |
| SEO | Correct document language, localized title/description, canonical/OG URL and EN/zh-CN alternates on both export variants |
| External links | GitHub repository and Mystra abstract opened; Devpost reached correct destination but Cloudflare challenged page contents |

Browser checks used isolated desktop Chrome with resized mobile viewports; they are not physical-device, Safari or full screen-reader certification. Contrast sampling is not a complete WCAG audit. No fresh AI-provider, research GPU or live-site deployment validation was performed.

## Local screenshots

| View | Before | After |
| --- | --- | --- |
| EN desktop | [Full page](../artifacts/website-refresh/before/en-desktop.png) | [Full page](../artifacts/website-refresh/after/en-desktop.png) / [Hero](../artifacts/website-refresh/after/en-desktop-hero.png) |
| ZH desktop | [Full page](../artifacts/website-refresh/before/zh-desktop.png) | [Full page](../artifacts/website-refresh/after/zh-desktop.png) / [Hero](../artifacts/website-refresh/after/zh-desktop-hero.png) |
| EN mobile | [Full page](../artifacts/website-refresh/before/en-mobile.png) | [Full page](../artifacts/website-refresh/after/en-mobile.png) / [Hero](../artifacts/website-refresh/after/en-mobile-hero.png) |
| ZH mobile | [Full page](../artifacts/website-refresh/before/zh-mobile.png) | [Full page](../artifacts/website-refresh/after/zh-mobile.png) / [Hero](../artifacts/website-refresh/after/zh-mobile-hero.png) |

The screenshots are local artifacts, not committed website assets. Final after captures come from the production static export, not the development server.
