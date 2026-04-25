# Happy V — ACOG 2026

Single-page interactive site for the Happy V booth at the ACOG annual meeting. Attendees take a short path (condition-first or patient-first), get a personalized product recommendation, optionally compare against competitors, then request sample kits and enter the iPad raffle.

**Live:** https://gloross.github.io/happy-v-conference/

## Stack

- Static HTML + vanilla JS + Tailwind via CDN — **no build step**.
- Hash-based router. Quiz answers persisted in `localStorage`.
- Form submissions go to a Google Sheet via a Google Apps Script Web App.

## Local development

```sh
python3 -m http.server 5173
# open http://localhost:5173/
```

## Form backend

See [`docs/google-apps-script-setup.md`](docs/google-apps-script-setup.md) — 5-minute copy-paste setup for the Google Sheet + Apps Script Web App. After deploying, paste the Web App URL into `assets/js/submit.js` (`ENDPOINT` constant) and commit.

While `ENDPOINT` is empty, submissions are queued in `localStorage` so nothing is lost during testing — open DevTools and inspect `localStorage["hv.queue.v1"]`.

## File map

```
index.html
assets/
  css/site.css
  js/
    quiz-data.js   product catalogue, conditions, life stages, recommendation logic, competitor matrix
    state.js       localStorage wrapper
    submit.js      Apps Script POST
    views.js       all view templates + their init() handlers
    app.js         hash router and view mounter
docs/
  google-apps-script-setup.md
  superpowers/specs/2026-04-25-happy-v-conference-design.md
```

## Deploy to GitHub Pages

In the repo on GitHub: **Settings → Pages → Source: Deploy from branch → main → / (root)**. The site is live at `https://gloross.github.io/happy-v-conference/` within ~1 minute.

## Editing content quickly

- Product copy / recommendation logic: `assets/js/quiz-data.js` — top of the file.
- Quiz questions or chip labels: same file (`conditions`, `lifeStages`).
- Competitor table rows: `competitorMatrix` in same file.
- Coming-soon products: `comingSoon` array in same file.
- All view layouts: `assets/js/views.js`.
