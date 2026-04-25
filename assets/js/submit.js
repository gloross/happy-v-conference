/* Happy V — submit sample-kit form to Google Apps Script Web App */
(function (global) {
  'use strict';

  // PASTE YOUR APPS SCRIPT WEB APP URL HERE (after deploying — see docs/google-apps-script-setup.md)
  // While empty, submissions are stashed in localStorage so nothing is lost during testing.
  const ENDPOINT = '';

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

  global.HV = global.HV || {};
  global.HV.submit = { submitSampleForm };
})(window);
