/* Happy V — minimal localStorage wrapper for quiz answers */
(function (global) {
  'use strict';

  const KEY = 'hv.session.v1';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function write(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  function get(path, fallback) {
    const obj = read();
    return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj) ?? fallback;
  }
  function set(path, value) {
    const obj = read();
    const keys = path.split('.');
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      cur[keys[i]] = cur[keys[i]] || {};
      cur = cur[keys[i]];
    }
    cur[keys[keys.length - 1]] = value;
    write(obj);
    document.dispatchEvent(new CustomEvent('hv:state-change', { detail: { path, value } }));
  }

  function reset() {
    localStorage.removeItem(KEY);
    document.dispatchEvent(new CustomEvent('hv:state-change', { detail: { reset: true } }));
  }

  // Has the user completed enough of the quiz to unlock bottom nav?
  function hasTakenSurvey() {
    const s = read();
    return Boolean(
      (s.conditions && s.conditions.length) ||
      (s.stages && s.stages.length) ||
      s.path === 'skip'
    );
  }

  global.HV = global.HV || {};
  global.HV.state = { read, write, get, set, reset, hasTakenSurvey };
})(window);
