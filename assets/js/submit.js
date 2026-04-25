/* Happy V — submit sample-kit form to Google Apps Script Web App */
(function (global) {
  'use strict';

  // Apps Script Web App endpoint (deployed 2026-04-25 — see docs/google-apps-script-setup.md).
  // While empty, submissions are stashed in localStorage so nothing is lost during testing.
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxDttL-pPl-OIhFUVQ3NUaoeIgbGhoZvqOqfzqy83K1Hrd_N_1RfuWYu-b_o7IHWX8z/exec';

  async function submitSampleForm(payload) {
    const body = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => {
      body.append(k, Array.isArray(v) ? v.join(',') : (v == null ? '' : String(v)));
    });
    body.append('submittedAt', new Date().toISOString());

    if (!ENDPOINT) {
      // Dev mode: stash locally
      const queue = JSON.parse(localStorage.getItem('hv.queue.v1') || '[]');
      queue.push(Object.fromEntries(body.entries()));
      localStorage.setItem('hv.queue.v1', JSON.stringify(queue));
      console.warn('[Happy V] No ENDPOINT set — submission queued in localStorage:', queue);
      return { ok: true, queued: true };
    }

    try {
      // Apps Script Web Apps accept form-encoded POST without a CORS preflight.
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      return { ok: true };
    } catch (err) {
      console.error('[Happy V] submit failed', err);
      return { ok: false, error: err.message };
    }
  }

  /* Klaviyo client subscriptions (public, browser-safe — uses public Company ID
     as the only credential; no private API key exposed). One master list with
     a custom `interest` property per product so the marketing team can segment. */
  const KLAVIYO_COMPANY_ID = 'PtrUzD';
  const KLAVIYO_LIST_ID    = 'VJ6tcU';

  async function subscribeWaitlist({ email, productName }) {
    const body = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: 'ACOG Conference \u2014 Coming Soon',
          profile: {
            data: {
              type: 'profile',
              attributes: {
                email,
                properties: { interest: productName, source: 'ACOG conference booth' },
              },
            },
          },
        },
        relationships: { list: { data: { type: 'list', id: KLAVIYO_LIST_ID } } },
      },
    };
    try {
      const res = await fetch(
        `https://a.klaviyo.com/client/subscriptions/?company_id=${encodeURIComponent(KLAVIYO_COMPANY_ID)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', revision: '2024-10-15' },
          body: JSON.stringify(body),
        },
      );
      /* Klaviyo returns 202 Accepted on success (queued for processing). */
      if (res.status === 202 || res.status === 200) return { ok: true };
      const text = await res.text().catch(() => '');
      return { ok: false, status: res.status, error: text };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  }

  global.HV = global.HV || {};
  global.HV.submit = { submitSampleForm, subscribeWaitlist };
})(window);
