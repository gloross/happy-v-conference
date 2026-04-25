/* Happy V — hash router and view mounter */
(function (global) {
  'use strict';

  const app = document.getElementById('app');
  const backBtn = document.getElementById('backBtn');
  const bottomNav = document.getElementById('bottomnav');
  const progress = document.getElementById('progress');

  const ROUTES = ['home', 'about', 'condition-first', 'narrow-stage', 'patient-first', 'narrow-condition', 'recommendation', 'comparison', 'coming-soon', 'sample-form', 'thank-you'];
  const HOME_LIKE = new Set(['home']);
  /* Bottom nav is hidden until the user reaches the recommendation. After that
     it's available everywhere as a quick-switcher. */
  const POST_SURVEY_ROUTES = new Set(['recommendation', 'comparison', 'coming-soon', 'sample-form', 'thank-you', 'about']);

  function currentRoute() {
    const h = (location.hash || '#/home').replace(/^#\//, '');
    return ROUTES.includes(h) ? h : 'home';
  }

  function syncBack(route) {
    if (HOME_LIKE.has(route)) {
      backBtn.classList.add('invisible');
    } else {
      backBtn.classList.remove('invisible');
    }
  }

  function syncNav(route) {
    /* Show on routes that come after the survey is complete. Once the user has
       hit the recommendation page (sets `lastRec`), keep the nav visible on
       Home too — it's the quick-restart entry point. */
    const taken = !!global.HV.state.get('lastRec.primaryId');
    const show = POST_SURVEY_ROUTES.has(route) || (taken && route === 'home');
    bottomNav.classList.toggle('hidden', !show);
    bottomNav.querySelectorAll('.navlink').forEach(a => {
      a.classList.toggle('active', a.dataset.route === route);
    });
  }

  function syncProgress(route) {
    const steps = {
      'condition-first': [true, false],
      'narrow-stage':    [true, true],
      'patient-first':   [true, false],
      'narrow-condition':[true, true],
    }[route];
    if (!steps) { progress.innerHTML = ''; return; }
    progress.innerHTML = steps.map(on => `<span class="dot${on ? ' on' : ''}"></span>`).join('');
  }

  function render() {
    const route = currentRoute();
    const view = global.HV.views[route];
    if (!view) {
      app.innerHTML = '<p class="p-10 text-center text-navy/60">Page not found.</p>';
      return;
    }
    app.innerHTML = view.render();
    if (typeof view.init === 'function') view.init(app);
    document.body.dataset.route = route;
    /* Path drives chip selected-state color (pink for condition, sky for patient) */
    const path = global.HV.state.get('path');
    if (path) document.body.dataset.path = path; else delete document.body.dataset.path;
    syncBack(route);
    syncNav(route);
    syncProgress(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  backBtn.addEventListener('click', () => {
    if (history.length > 1) history.back();
    else location.hash = '#/home';
  });

  // Re-evaluate nav visibility when state changes mid-render
  document.addEventListener('hv:state-change', () => syncNav(currentRoute()));

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', () => {
    if (!location.hash) location.hash = '#/home';
    else render();
  });
  // If DOMContentLoaded already fired, render immediately
  if (document.readyState !== 'loading') {
    if (!location.hash) location.hash = '#/home';
    else render();
  }
})(window);
