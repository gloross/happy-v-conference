/* Happy V — hash router and view mounter */
(function (global) {
  'use strict';

  const app = document.getElementById('app');
  const backBtn = document.getElementById('backBtn');
  const bottomNav = document.getElementById('bottomnav');
  const progress = document.getElementById('progress');

  const ROUTES = ['home', 'about', 'condition-first', 'narrow-stage', 'patient-first', 'narrow-condition', 'recommendation', 'comparison', 'coming-soon', 'sample-form', 'thank-you'];
  const HOME_LIKE = new Set(['home']);
  const SHOWS_NAV = new Set(['recommendation', 'comparison', 'coming-soon', 'sample-form', 'thank-you', 'about']);

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
    const taken = global.HV.state.hasTakenSurvey();
    if (taken && SHOWS_NAV.has(route)) {
      bottomNav.classList.remove('hidden');
    } else {
      bottomNav.classList.add('hidden');
    }
    bottomNav.querySelectorAll('.navlink').forEach(a => {
      a.classList.toggle('active', a.dataset.route === route);
    });
  }

  function syncProgress(route) {
    const labels = {
      'condition-first': '1 / 2',
      'narrow-stage': '2 / 2',
      'patient-first': '1 / 2',
      'narrow-condition': '2 / 2',
    };
    progress.textContent = labels[route] || '';
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
