# Form → Google Sheet (5-minute setup)

The site collects ACOG sample-kit requests + iPad raffle entries and sends them to a Google Sheet via a Google Apps Script Web App. No paid backend, no API keys exposed.

## 1. Create the sheet

1. Go to https://sheets.google.com → **Blank**.
2. Name it `Happy V — ACOG Submissions`.
3. In **row 1**, paste these column headers (one per cell, A→N):

```
submittedAt | fullName | email | practiceName | patientsPerMonth | contactName | contactRole | contactEmailPhone | wantsKit | conditions | stages | path | primaryRec | raffleEntry
```

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**. Delete any starter code.
2. Paste the script below, then **save** (💾, name the project `HappyV-ACOG-API`).

```javascript
const SHEET_NAME = 'Sheet1'; // rename if your tab is called something else

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
    const data = e.parameter || {};

    const row = headers.map(h => {
      if (h === 'submittedAt') return data.submittedAt || new Date().toISOString();
      return data[h] != null ? String(data[h]) : '';
    });
    sh.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'happy-v-acog' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy as a Web App

1. Top-right: **Deploy → New deployment**.
2. **Type:** Web app (gear icon → Web app).
3. **Description:** `Happy V ACOG submissions`.
4. **Execute as:** *Me*.
5. **Who has access:** *Anyone* (this is required so the site can POST without auth).
6. Click **Deploy** → grant permissions when prompted.
7. **Copy the Web App URL.** It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Wire it into the site

Open `assets/js/submit.js` and paste the URL into the `ENDPOINT` constant:

```javascript
const ENDPOINT = 'https://script.google.com/macros/s/AKfycb..../exec';
```

Commit and push — that's it. Submissions now flow into the sheet.

## 5. Smoke test

1. Open the live site.
2. Walk through the quiz, hit **Get Samples**, fill the form with test data, submit.
3. Refresh the Google Sheet — your row should appear within ~2 seconds.

## Drawing the iPad winner

After the conference, in the sheet:

1. Filter `raffleEntry = yes`.
2. In a blank cell run `=INDEX(B2:B, RANDBETWEEN(1, COUNTA(B2:B)))` to pull a random `fullName`.
3. Document the seed by adding a "Drawn at" timestamp + winner row link as evidence for the conference attendees.

## Troubleshooting

- **Submissions aren't arriving:** open the live site, open DevTools → Network, submit again, check for the POST to `script.google.com`. If it shows status `0` (CORS-opaque), that's expected with `mode: 'no-cors'` — confirm the row landed in the sheet anyway. If no row appears, re-deploy the Apps Script as **Anyone** (not "Anyone with Google Account").
- **You see "queued in localStorage" warnings in console:** `ENDPOINT` in `submit.js` is still empty. Paste the URL and commit again.
- **Permissions popup loops:** delete the deployment and redeploy.
