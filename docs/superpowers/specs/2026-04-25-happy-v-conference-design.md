# Happy V — ACOG Conference Site

**Date:** 2026-04-25
**Owner:** Georgi
**Status:** In implementation
**Deadline:** Today (live before ACOG conference)

## Goal

Single-page interactive site for the Happy V booth at the ACOG conference. Attending OB/GYNs explore Happy V products through a guided quiz, get personalized recommendations, request sample kits, and enter an iPad raffle.

## Audience & Device

- OB/GYNs and clinical staff at ACOG.
- Booth-staffed iPad in landscape, primary breakpoint **1366×1024**.
- Must also be reasonably usable on phones if attendees scan a QR.

## Flow

1. **Home** — "How do you want to explore?" Two paths:
   - *What are we solving for?* → condition-first flow
   - *Who is our patient?* → patient-first flow
2. **About Happy V** — credibility/intro screen, accessible from home.
3. **Condition-first flow:** select conditions → narrow by life stage → recommendation.
4. **Patient-first flow:** select life stage(s) → narrow by condition (progressive filtering, "Skip — show me everything" available) → recommendation.
5. **Recommendation screen** — "Recommended for your patient", contextual tag (e.g. *Recurrent BV + Age 18-35*), product cards with Compare and Clinical Details. CTA: *Get Samples →*.
6. **Recommendation Carousel** variant — Recommended / Complementary / Supportive product groupings.
7. **Comparison table** — Happy V vs competitors (Love Wellness, AZO, Fem-OptiGut, Seventh Generation) across Strain Specificity, Clinical Evidence, Prebiotic, Label Transparency, Price/day, Compliance.
8. **Coming Soon** — Menopause Probiotic placeholder (scroll-down list + carousel variants both shown in Figma; pick one).
9. **Get Sample Kits** — form with Your Details (Full name, Email, Practice name, Patients/month) + Best contact (Name, Role, Email/Phone) + condition tags. Submission writes to Google Sheet.
10. **Thank-you** — confirmation, raffle entry confirmed, return-to-home CTA.

Persistent **bottom nav**: Home / Products / Compare / Coming Soon / Get Samples.

## Quiz logic

- Conditions (multi-select): Recurrent BV / Vaginal Imbalance, UTI, Cycle Irregularity / PMS, Bloating / Digestive Discomfort, Body Odor Concerns, Perimenopause Symptoms, Vaginal Dryness, Menopause, Post-menopause Maintenance.
- Life stages (multi-select): Reproductive 18-35, Reproductive/perimenopause 35-45, Menopause transition 45-55, Post-menopause 55+, Pregnant/postpartum.
- Static rule-based mapping `(conditions[], stages[]) → ranked product list` lives in `quiz-data.js`.
- Live "X matching products" counter on each filter step.

## Stack

| Layer | Choice |
|---|---|
| Hosting | GitHub Pages — `gloross.github.io/happy-v-conference/` |
| Frontend | Static HTML + vanilla JS + Tailwind via CDN (no build step) |
| Routing | URL hash router (`#/home`, `#/condition-first`, etc.) |
| State | `localStorage` for quiz answers |
| Form backend | Google Apps Script Web App writing to a Google Sheet |
| Fonts | Google Fonts CDN — serif heading (likely *Cormorant* or similar) + clean sans body |

## File layout

```
index.html
assets/
  css/site.css
  js/
    app.js          (router + view mounter)
    quiz-data.js    (conditions, life stages, products, recommendation map)
    state.js        (localStorage wrapper)
    submit.js       (POST to Apps Script)
  img/              (logos, product shots from Figma exports)
views/
  home.html
  about.html
  condition-first.html
  patient-first.html
  recommendation.html
  comparison.html
  coming-soon.html
  sample-form.html
  thank-you.html
docs/superpowers/specs/
  2026-04-25-happy-v-conference-design.md  (this file)
```

## Form → Google Sheet

- Apps Script Web App deployed as "Anyone" execute, returns `{status: 'ok'}`.
- Frontend POSTs `application/x-www-form-urlencoded` (avoids CORS preflight).
- Script appends a row with timestamp + all form fields + selected condition tags + raffle entry flag.

## Out of scope (today)

- Custom domain.
- Real analytics (placeholder script tag only).
- CMS / admin UI for editing products.
- Server-side raffle drawing (do it in Sheets after the conference).
- Localization (English only).

## Open items

- [ ] Final product shot assets — currently placeholder boxes; need real Figma image exports if available.
- [ ] Pick *one* Coming Soon variant (scroll-down vs carousel).
- [ ] Apps Script URL — Georgi creates the sheet + deploys script, pastes URL into `submit.js`.
