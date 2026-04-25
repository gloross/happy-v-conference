# Handoff — pixel-perfect Figma styling pass

This is the bridge from session 1 (initial build) to a future session that will style the site pixel-perfect against the Figma design using the **Figma Dev Mode MCP server**.

---

## Project context (read first)

- **What:** single-page interactive booth site for **Happy V** at the **ACOG annual meeting** (American College of OB/GYNs).
- **Audience:** OB/GYNs and clinical staff visiting the booth.
- **Mechanic:** attendees take a guided quiz → see a personalized product recommendation → fill the sample-kit form → entered into iPad raffle.
- **Owner:** Georgi (`valkovgeorgi1997@gmail.com`, GitHub `Georgi1997`, GitHub Pages org `gloross`).
- **Deadline:** built in one day on **2026-04-25**. Conference is imminent.
- **Live URL:** https://gloross.github.io/happy-v-conference/ (after Pages is enabled in repo settings).

## What is already done (session 1)

A fully functional, deployed site:

- All 11 routes working: `home`, `about`, `condition-first`, `narrow-stage`, `patient-first`, `narrow-condition`, `recommendation`, `comparison`, `coming-soon`, `sample-form`, `thank-you`.
- Hash-based router, no build step, Tailwind via CDN.
- Two quiz paths fully wired with multi-select chips, "X matching products" live counter, "Skip — show me everything" escape, step indicator.
- Recommendation engine pulling from Excel logic ([`docs/superpowers/specs/2026-04-25-happy-v-conference-design.md`](superpowers/specs/2026-04-25-happy-v-conference-design.md) and `assets/js/quiz-data.js`).
- Comparison table with switcher across 5 products and their 3 competitors each.
- Coming-soon shelf (3 products).
- Sample-kit form mirrors the Figma layout with auto-populated condition/stage tags.
- localStorage queue when Apps Script endpoint isn't wired yet, so testing never loses data.

**Read the full design spec:** [`docs/superpowers/specs/2026-04-25-happy-v-conference-design.md`](superpowers/specs/2026-04-25-happy-v-conference-design.md)

## What is NOT done (the work for this next session)

1. **Pixel-perfect styling against Figma** — the layouts are right, but exact colors, spacing, typography weights, border radii, drop shadows, button shapes, etc. are approximated from PNG screenshots. The Figma file has the source of truth.
2. **Real product imagery** — product cards currently render placeholder pill-shaped boxes labelled with the product short name. Need actual product PNGs from Happy V's Shopify/CDN or Figma exports.
3. **Logo** — currently an inline SVG approximation of the "V" mark inside a circle. Replace with the actual Happy V wordmark / mark from Figma.
4. **Optional refinements**:
   - About-page hero quote currently sits over a flat color block; in Figma there's a real photo.
   - Path-card icons on home are inline SVGs; Figma uses bespoke illustrated icons.
   - Some chip icons use emoji placeholders (🌸💧🌙…); Figma uses condition-specific small illustrations.

## Project architecture

```
index.html                       shell, top bar, bottom nav, script wiring
assets/
  css/site.css                   token CSS vars + custom component CSS on top of Tailwind
  js/
    quiz-data.js                 products, conditions, life stages, recommendation rules, competitor matrix, coming-soon
    state.js                     localStorage wrapper (hv.session.v1) + hasTakenSurvey()
    submit.js                    POST to Apps Script (ENDPOINT constant — empty in repo)
    views.js                     ALL view templates (home, about, condition-first, narrow-stage, patient-first, narrow-condition, recommendation, comparison, coming-soon, sample-form, thank-you) and their init() handlers
    app.js                       hash router + view mounter; manages back button, bottom nav visibility, step counter
docs/
  HANDOFF.md                     this file
  google-apps-script-setup.md    5-minute copy-paste setup for the form backend
  superpowers/specs/             design spec
```

### Key implementation details

- **Tailwind config is inline in `index.html`** under `tailwind.config = {...}`. Custom colors live there: `navy`, `pink`, `cream`, `mist`, `sand`, `ink`. Update them when Figma tokens are confirmed.
- **CSS tokens are also in `:root`** in `assets/css/site.css` — keep them in sync with Tailwind.
- **All view layouts in `assets/js/views.js`** — single file, JS template strings. Edit there to refine markup.
- **State persistence:** `localStorage["hv.session.v1"]` holds `{ path, conditions, stages, lastRec, lastSubmit }`.
- **Bottom nav** auto-shows once user has selected at least one condition or stage (driven by `hv.state.hasTakenSurvey()`), and only on routes in `SHOWS_NAV` (recommendation, comparison, coming-soon, sample-form, thank-you, about).

## Figma file & deliverables

- **Original Figma:** https://www.figma.com/design/pL4N4OtwRWAjqnPsRRiM1Q/ACOG?node-id=157-5425
- **Duplicated copy** (so next session can edit/inspect freely): https://www.figma.com/design/ouHDBrZtNtgdLGyAUbRRHX/ACOG--Copy-?node-id=1-107
- Local PNG exports session 1 used: `/Users/georgivalkov/Downloads/ACOG/` (`UPDATED.png`, `Recommendation Carousel.png`, `Product recommendation.png`, `Frame 2147228337.png`)
- Local `.fig` archive: `/Users/georgivalkov/Downloads/ACOG.fig`
- Source-of-truth Excel for product/competitor/recommendation logic: `/Users/georgivalkov/Downloads/ACOG event presentation.xlsx`

## Setting up the Figma MCP (Georgi to do, before starting next session)

1. Open the **Figma desktop app** (the MCP requires desktop, not the browser version).
2. Open the duplicated Figma file linked above.
3. **Figma → Preferences → Enable Dev Mode MCP Server**. Confirm it says `Server enabled` at `http://127.0.0.1:3845/mcp` (or similar local URL Figma surfaces).
4. Add the server to Claude Code's MCP config. From a terminal:
   ```sh
   claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
   ```
   (Or edit `~/.claude/mcp.json` / equivalent and add the server manually.)
5. Quit and reopen the Claude Code session **inside the project directory**:
   ```sh
   cd /Users/georgivalkov/Projects/happy-v-conference
   claude
   ```
   Starting in this directory keeps tooling local and avoids the boom-coffee context bleed-through.

When the new session starts, ask Claude to confirm Figma MCP is reachable: "List Figma MCP tools" — there should be at least `get_code`, `get_image`, `get_variable_defs`, etc.

## What to ask the next session to do

Paste this as the opening prompt for the new session:

---

> I'm picking up the Happy V ACOG site after a previous session built the structure. Before doing anything else, **read `docs/HANDOFF.md` in this repo end-to-end** — that's your context.
>
> Goal for this session: **pixel-perfect styling against the Figma file using the Figma Dev Mode MCP server**.
>
> Process I want you to follow:
>
> 1. Confirm the Figma MCP is reachable (list its tools).
> 2. Frame-by-frame, in order — Home → Condition-first → Narrow-stage → Patient-first → Narrow-condition → Recommendation → Comparison → Coming-soon → Sample-form → Thank-you — do this for each:
>    - Pull the frame from Figma MCP (`get_code` / `get_image` / variable defs).
>    - Compare against the current implementation in `assets/js/views.js` and `assets/css/site.css`.
>    - Update Tailwind config in `index.html` and CSS tokens in `assets/css/site.css` to match exact tokens (colors, spacing, type ramp, radii, shadows).
>    - Update the view template to match exact markup structure where it differs meaningfully.
>    - Verify in the browser preview at `http://localhost:5173/` (run `python3 -m http.server 5173` from the project root if needed).
>    - Take a screenshot before and after, side-by-side with the Figma frame, and tell me what changed.
> 3. After all frames are matched, do a **global pass**: hover/active/focus states, transitions, and accessibility (focus rings, ARIA on chips, keyboard tab order).
> 4. Replace placeholder product image boxes with real product imagery — pull from Figma exports or Happy V's Shopify CDN.
> 5. Replace the inline SVG logo with the actual Happy V wordmark from Figma.
>
> Don't change the routing, recommendation logic, or form submission code — those are validated and shouldn't churn. Stay scoped to styling and assets.
>
> Once each frame is approved, commit with a focused message like `polish home view to match Figma tokens`. Push at the end.

---

## Constraints / things NOT to change

- **Routing** in `app.js` — works, validated end-to-end.
- **Recommendation logic** in `quiz-data.js` (`recommend()` function and `primaryByCondition` / `complementaryByCondition` maps) — derived from the Excel logic sheet and approved.
- **Apps Script integration** — Georgi may have wired the `ENDPOINT` already; don't overwrite it.
- **`docs/superpowers/specs/2026-04-25-happy-v-conference-design.md`** — frozen design doc; only update if a fundamental architecture choice changes.

## Open questions for Georgi

- [ ] Real Happy V wordmark / brand assets — share via Figma export or `assets/img/` drop.
- [ ] Real product photography — likely available on happyv.com or in Figma; need PNGs sized for ~280×420 cards.
- [ ] Coming Soon: Figma had two variants (scroll list vs carousel). Currently using a 3-card grid. Pick one and align.
- [ ] Photos for About page hero (the Dr. Aimee Eyvazzadeh quote area).

## Tooling notes for the next session

- **Preview server:** `python3 -m http.server 5173` from project root, then `http://localhost:5173/`. Or use Claude Code's preview tool (config already in `boom-coffee/.claude/launch.json` under name `happy-v` — that's tooling-local, not committed).
- **Where assets go:** `assets/img/` — referenced via relative paths from view templates.
- **Verify after every change:** the verification workflow in this repo's setup expects the preview to be observed, not assumed.
- **Don't push to boom-coffee:** that's a separate, unrelated project at `/Users/georgivalkov/Projects/boom-coffee`. Everything here lives only in `gloross/happy-v-conference`.

---

**End of handoff. The next session has everything it needs.**
