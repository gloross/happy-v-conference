/* Happy V — view templates as JS functions returning HTML strings.
 * Keeping all views in one file (vs fetched fragments) makes deployment to
 * GitHub Pages a single static HTML page with a few JS files. */
(function (global) {
  'use strict';

  const D = () => global.HV.data;
  const S = () => global.HV.state;

  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  // ---------------------------------------------------------------------------
  // Home — "How do you want to explore?"
  // ---------------------------------------------------------------------------
  const home = () => /* html */ `
    <section class="view-enter max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p class="section-label mb-4">Welcome — ACOG 2026</p>
          <h1 class="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-5">
            Clinically formulated for women's whole-body health.
          </h1>
          <p class="text-lg text-navy/70 mb-8 leading-relaxed">
            Happy V is a women's health line built on strain-level studies, full label transparency,
            and physician-vetted formulations. Take a quick path to see what fits your patient.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="match-pill">200+ MDs</span>
            <span class="match-pill">12 years R&amp;D</span>
            <span class="match-pill">5 patented actives</span>
          </div>
        </div>
        <div class="grid gap-6">
          <h2 class="font-serif text-2xl text-navy text-center md:text-left">How do you want to explore?</h2>
          <div class="grid grid-cols-2 gap-4">
            <button class="path-card" data-go="#/condition-first" data-path="condition">
              <span class="icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M21 9V7a2 2 0 0 0-2-2h-3l-2-2H10L8 5H5a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.6"/>
                  <rect x="3" y="9" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/>
                  <path d="M9 13h6M9 16h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </span>
              <span class="label">What are we solving for?</span>
              <span class="sub">Start with the symptom or condition</span>
            </button>
            <button class="path-card" data-go="#/patient-first" data-path="patient">
              <span class="icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/>
                  <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </span>
              <span class="label">Who is our patient?</span>
              <span class="sub">Start with life stage, then narrow</span>
            </button>
          </div>
          <a href="#/about" class="text-sm text-navy/60 hover:text-navy underline underline-offset-4 self-center md:self-start">About Happy V →</a>
        </div>
      </div>
    </section>`;

  function homeInit(root) {
    root.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.dataset.path;
        S().set('path', path);
        S().set('conditions', []);
        S().set('stages', []);
        location.hash = btn.dataset.go;
      });
    });
  }

  // ---------------------------------------------------------------------------
  // About Happy V
  // ---------------------------------------------------------------------------
  const about = () => /* html */ `
    <section class="view-enter max-w-4xl mx-auto px-6 py-10 md:py-16">
      <p class="section-label mb-3">About Happy V</p>
      <h1 class="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
        We make supplements OB/GYNs feel comfortable recommending.
      </h1>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="rounded-2xl overflow-hidden bg-mist aspect-[4/5] flex items-end p-6">
          <div class="bg-white/85 backdrop-blur rounded-xl p-5 shadow-soft">
            <p class="font-serif text-xl text-navy leading-snug">
              "Built on strain-level science, not marketing claims."
            </p>
            <p class="text-sm text-navy/60 mt-2">— Dr. Aimee Eyvazzadeh, OB/GYN</p>
          </div>
        </div>
        <div class="space-y-5 text-navy/80 leading-relaxed">
          <p>
            Every Happy V formula is built around <span class="font-semibold text-navy">individual subspecies strain IDs</span>,
            full per-strain CFU disclosure, and patented actives at clinical dose. No proprietary blend masking.
          </p>
          <p>
            Our line covers vaginal pH and microbiome, UTI prevention, digestive health, internal odor support,
            and an AM/PM menopause system — each with its own published mechanism studies.
          </p>
          <div class="grid grid-cols-3 gap-4 pt-2">
            ${[
              ['200+', 'OB/GYNs recommend'],
              ['12 yrs', 'Formulation R&D'],
              ['5+', 'Patented branded actives'],
            ].map(([n, l]) => `
              <div class="rounded-xl bg-white border border-navy/10 p-4">
                <div class="font-serif text-2xl text-navy">${n}</div>
                <div class="text-xs text-navy/60">${l}</div>
              </div>
            `).join('')}
          </div>
          <a href="#/home" class="btn-secondary inline-flex mt-2">← Back to start</a>
        </div>
      </div>
    </section>`;

  // ---------------------------------------------------------------------------
  // Condition-first flow
  // Step 1: pick condition(s). Step 2: narrow by life stage. Step 3: results.
  // ---------------------------------------------------------------------------
  const conditionFirst = () => {
    const sel = S().get('conditions', []) || [];
    return /* html */ `
    <section class="view-enter max-w-3xl mx-auto px-6 py-10">
      <div class="flex items-center justify-between mb-6">
        <p class="section-label">Condition-first flow</p>
        <span class="steps"><span class="on"></span><span></span><span></span></span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy mb-3 text-center">What are you solving for?</h1>
      <div class="flex justify-center mb-6"><span class="match-pill" id="matchPill">${D().matchCount({ conditions: sel })} matching products</span></div>

      <div class="grid sm:grid-cols-2 gap-3 mb-10">
        ${D().conditions.map(c => `
          <button class="chip w-full" data-cond="${c.id}" aria-pressed="${sel.includes(c.id)}">
            <span class="text-lg" aria-hidden="true">${c.icon}</span>
            <span>${escape(c.label)}</span>
          </button>
        `).join('')}
      </div>

      <div class="flex items-center justify-between">
        <a href="#/home" class="text-navy/60 hover:text-navy text-sm">← Back</a>
        <div class="flex items-center gap-3">
          <button class="btn-secondary" id="skipBtn">Skip — show me everything</button>
          <button class="btn-primary" id="nextBtn" disabled>
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>`;
  };

  function conditionFirstInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('conditions', []) || [];
      root.querySelector('#matchPill').textContent = `${D().matchCount({ conditions: sel })} matching products`;
      root.querySelector('#nextBtn').disabled = sel.length === 0;
    };
    root.querySelectorAll('[data-cond]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.cond;
        const sel = S().get('conditions', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1); else sel.push(id);
        S().set('conditions', sel);
        btn.setAttribute('aria-pressed', String(sel.includes(id)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => {
      // After picking conditions, send to a stage-narrow step
      location.hash = '#/narrow-stage';
    });
    root.querySelector('#skipBtn').addEventListener('click', () => {
      S().set('path', 'skip');
      location.hash = '#/recommendation';
    });
    updateMatchPill();
  }

  // ---------------------------------------------------------------------------
  // Narrow by life stage (step 2 of condition-first)
  // ---------------------------------------------------------------------------
  const narrowStage = () => {
    const sel = S().get('stages', []) || [];
    const conds = S().get('conditions', []) || [];
    return /* html */ `
    <section class="view-enter max-w-3xl mx-auto px-6 py-10">
      <div class="flex items-center justify-between mb-6">
        <p class="section-label">Condition-first flow</p>
        <span class="steps"><span class="on"></span><span class="on"></span><span></span></span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy mb-3 text-center">Narrow by life stage</h1>
      <p class="text-center text-navy/60 mb-2">Refine your results</p>
      <div class="flex justify-center mb-8"><span class="match-pill" id="matchPill">${D().matchCount({ conditions: conds, stages: sel })} matching products</span></div>

      <div class="grid sm:grid-cols-3 gap-3 mb-10">
        ${D().lifeStages.map(s => `
          <button class="chip w-full justify-center text-center" data-stage="${s.id}" aria-pressed="${sel.includes(s.id)}">
            <span class="block">
              <span class="block text-base font-semibold">${escape(s.label)}</span>
              ${s.range ? `<span class="block text-xs text-navy/50">${s.range}</span>` : ''}
            </span>
          </button>
        `).join('')}
      </div>

      <div class="flex items-center justify-between">
        <a href="#/condition-first" class="text-navy/60 hover:text-navy text-sm">← Back</a>
        <div class="flex items-center gap-3">
          <button class="btn-secondary" id="skipBtn">Skip — show me everything</button>
          <button class="btn-primary" id="nextBtn">See recommendation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>`;
  };

  function narrowStageInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('stages', []) || [];
      const conds = S().get('conditions', []) || [];
      root.querySelector('#matchPill').textContent = `${D().matchCount({ conditions: conds, stages: sel })} matching products`;
    };
    root.querySelectorAll('[data-stage]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stage;
        const sel = S().get('stages', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1); else sel.push(id);
        S().set('stages', sel);
        btn.setAttribute('aria-pressed', String(sel.includes(id)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => location.hash = '#/recommendation');
    root.querySelector('#skipBtn').addEventListener('click', () => {
      S().set('stages', []);
      location.hash = '#/recommendation';
    });
    updateMatchPill();
  }

  // ---------------------------------------------------------------------------
  // Patient-first flow
  // Step 1: pick life stage(s). Step 2: narrow by condition. Step 3: results.
  // ---------------------------------------------------------------------------
  const patientFirst = () => {
    const sel = S().get('stages', []) || [];
    return /* html */ `
    <section class="view-enter max-w-3xl mx-auto px-6 py-10">
      <div class="flex items-center justify-between mb-6">
        <p class="section-label">Patient-first flow</p>
        <span class="steps"><span class="on"></span><span></span><span></span></span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy mb-3 text-center">Select life stage(s)</h1>
      <p class="text-center text-navy/60 mb-2">Select one or more</p>
      <div class="flex justify-center mb-8"><span class="match-pill" id="matchPill">${D().matchCount({ stages: sel })} matching products</span></div>

      <div class="grid sm:grid-cols-3 gap-3 mb-10">
        ${D().lifeStages.map(s => `
          <button class="chip w-full justify-center text-center" data-stage="${s.id}" aria-pressed="${sel.includes(s.id)}">
            <span class="block">
              <span class="block text-base font-semibold">${escape(s.label)}</span>
              ${s.range ? `<span class="block text-xs text-navy/50">${s.range}</span>` : ''}
            </span>
          </button>
        `).join('')}
      </div>

      <div class="flex items-center justify-between">
        <a href="#/home" class="text-navy/60 hover:text-navy text-sm">← Back</a>
        <button class="btn-primary" id="nextBtn" disabled>Next
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </section>`;
  };

  function patientFirstInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('stages', []) || [];
      root.querySelector('#matchPill').textContent = `${D().matchCount({ stages: sel })} matching products`;
      root.querySelector('#nextBtn').disabled = sel.length === 0;
    };
    root.querySelectorAll('[data-stage]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stage;
        const sel = S().get('stages', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1); else sel.push(id);
        S().set('stages', sel);
        btn.setAttribute('aria-pressed', String(sel.includes(id)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => location.hash = '#/narrow-condition');
    updateMatchPill();
  }

  const narrowCondition = () => {
    const sel = S().get('conditions', []) || [];
    const stages = S().get('stages', []) || [];
    return /* html */ `
    <section class="view-enter max-w-3xl mx-auto px-6 py-10">
      <div class="flex items-center justify-between mb-6">
        <p class="section-label">Patient-first flow</p>
        <span class="steps"><span class="on"></span><span class="on"></span><span></span></span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy mb-3 text-center">Narrow by condition</h1>
      <p class="text-center text-navy/60 mb-2">Refine your results</p>
      <div class="flex justify-center mb-8"><span class="match-pill" id="matchPill">${D().matchCount({ stages, conditions: sel })} matching products</span></div>

      <div class="grid sm:grid-cols-2 gap-3 mb-10">
        ${D().conditions.map(c => `
          <button class="chip w-full" data-cond="${c.id}" aria-pressed="${sel.includes(c.id)}">
            <span class="text-lg" aria-hidden="true">${c.icon}</span>
            <span>${escape(c.label)}</span>
          </button>
        `).join('')}
      </div>

      <div class="flex items-center justify-between">
        <a href="#/patient-first" class="text-navy/60 hover:text-navy text-sm">← Back</a>
        <div class="flex items-center gap-3">
          <button class="btn-secondary" id="skipBtn">Skip — show me everything</button>
          <button class="btn-primary" id="nextBtn">See recommendation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>`;
  };

  function narrowConditionInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('conditions', []) || [];
      const stages = S().get('stages', []) || [];
      root.querySelector('#matchPill').textContent = `${D().matchCount({ stages, conditions: sel })} matching products`;
    };
    root.querySelectorAll('[data-cond]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.cond;
        const sel = S().get('conditions', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1); else sel.push(id);
        S().set('conditions', sel);
        btn.setAttribute('aria-pressed', String(sel.includes(id)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => location.hash = '#/recommendation');
    root.querySelector('#skipBtn').addEventListener('click', () => location.hash = '#/recommendation');
    updateMatchPill();
  }

  // ---------------------------------------------------------------------------
  // Recommendation
  // ---------------------------------------------------------------------------
  const productCard = (p, badge) => /* html */ `
    <article class="prod-card ${badge === 'Complementary' ? 'complementary' : ''} ${badge === 'Supportive' ? 'supportive' : ''}">
      ${badge ? `<span class="badge">${badge}</span>` : ''}
      <div class="img-wrap" style="background:${p.bg}">
        <div class="text-center px-2">
          <div class="w-16 h-24 mx-auto rounded-xl bg-white/70 shadow-soft flex items-end justify-center pb-1.5">
            <span class="font-serif text-[10px] text-navy/70">${escape(p.shortName)}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-serif text-lg text-navy">${escape(p.name)}</h3>
        <div class="flex items-center gap-2 text-xs text-navy/60">
          <span class="stars">★★★★★</span>
          <span>(${p.reviews.toLocaleString()})</span>
        </div>
        <p class="text-sm text-navy/70 mt-1.5 leading-snug">${escape(p.tagline)}</p>
      </div>
      <div class="flex items-center justify-between gap-2 mt-auto pt-2">
        <button class="btn-secondary !py-2 !px-3 text-sm" data-compare="${p.id}">⇄ Compare</button>
        <button class="btn-secondary !py-2 !px-3 text-sm" data-details="${p.id}">Clinical Details +</button>
      </div>
    </article>`;

  const recommendation = () => {
    const conds = S().get('conditions', []) || [];
    const stages = S().get('stages', []) || [];
    const r = D().recommend({ conditions: conds, stages });
    S().set('lastRec', { primaryId: r.primary.id });

    return /* html */ `
    <section class="view-enter max-w-6xl mx-auto px-6 py-10 pb-32">
      <div class="text-center mb-2"><p class="section-label">Recommendations</p></div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy text-center mb-3">Recommended for your patient</h1>
      ${r.context ? `<div class="flex justify-center mb-8"><span class="match-pill">${escape(r.context)}</span></div>` : '<div class="mb-8"></div>'}

      <div class="grid ${r.complementary.length ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-md mx-auto'} gap-6 items-start mb-10">
        <div class="${r.complementary.length ? 'lg:col-span-1' : 'lg:col-span-2'}">
          <p class="section-label mb-2">Primary recommendation</p>
          ${productCard(r.primary, 'Recommended')}
        </div>

        ${r.complementary.length ? `
          <div class="lg:col-span-2">
            <p class="section-label mb-2">Complementary</p>
            <div class="grid sm:grid-cols-2 gap-4">${r.complementary.map(p => productCard(p, 'Complementary')).join('')}</div>
          </div>
        ` : ''}
      </div>

      ${r.supportive.length ? `
        <div class="mb-10">
          <p class="section-label mb-3">Also worth showing your patient</p>
          <div class="scroller">
            ${r.supportive.map(p => productCard(p, 'Supportive')).join('')}
          </div>
        </div>` : ''}

      <div class="text-center">
        <a href="#/sample-form" class="btn-primary">Get Samples
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>`;
  };

  function recommendationInit(root) {
    root.querySelectorAll('[data-compare]').forEach(b => b.addEventListener('click', () => {
      S().set('compareWith', b.dataset.compare);
      location.hash = '#/comparison';
    }));
    root.querySelectorAll('[data-details]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.details;
      const p = D().products[id];
      if (!p) return;
      alert(
        `${p.name}\n\n` +
        `Strains / Active: ${p.strains}\n\n` +
        `Dosage: ${p.dosage}\n\n` +
        `Mechanism: ${p.mechanism}\n\n` +
        `Clinical proof: ${p.proof}\n\n` +
        `Note: ${p.detail}`
      );
    }));
  }

  // ---------------------------------------------------------------------------
  // Comparison
  // ---------------------------------------------------------------------------
  const comparison = () => {
    const allIds = Object.keys(D().competitorMatrix);
    const lastRec = S().get('lastRec.primaryId');
    const compareWith = S().get('compareWith');
    const initial = compareWith || lastRec || 'prepro';
    return /* html */ `
    <section class="view-enter max-w-6xl mx-auto px-6 py-10 pb-32">
      <div class="flex items-center justify-between mb-4">
        <p class="section-label">Comparison</p>
        <div class="flex items-center gap-2 text-sm">
          <label class="text-navy/60">Compare</label>
          <select id="compareSel" class="input !py-1.5 !w-auto">
            ${allIds.map(id => `<option value="${id}" ${id === initial ? 'selected' : ''}>${escape(D().competitorMatrix[id].product.name)}</option>`).join('')}
          </select>
          <span class="text-navy/60">with competitors</span>
        </div>
      </div>

      <div id="cmpHost" class="bg-white rounded-2xl shadow-card p-4 md:p-6 overflow-x-auto">
        ${comparisonTable(initial)}
      </div>

      <div class="flex justify-center mt-8">
        <a href="#/sample-form" class="btn-primary">Get Samples
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>`;
  };

  function comparisonTable(productId) {
    const m = D().competitorMatrix[productId];
    if (!m) return '<p class="text-navy/50">Comparison not available.</p>';
    const headers = [m.product.name + ' (Happy V)', ...m.competitors];
    return /* html */ `
      <table class="cmp-table min-w-[760px]">
        <thead>
          <tr>
            <th></th>
            ${headers.map((h, i) => `<th>${i === 0 ? `<span class="text-pink-brand">★ </span>` : ''}${escape(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${m.rows.map(row => `
            <tr>
              <th>${escape(row[0])}</th>
              ${row.slice(1).map((cell, i) => `<td class="${i === 0 ? 'brand-col font-medium' : ''}">${escape(cell)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>`;
  }

  function comparisonInit(root) {
    const sel = root.querySelector('#compareSel');
    sel.addEventListener('change', () => {
      root.querySelector('#cmpHost').innerHTML = comparisonTable(sel.value);
    });
  }

  // ---------------------------------------------------------------------------
  // Coming Soon
  // ---------------------------------------------------------------------------
  const comingSoonView = () => /* html */ `
    <section class="view-enter max-w-6xl mx-auto px-6 py-10 pb-32">
      <div class="text-center mb-8">
        <p class="section-label">Coming Soon</p>
        <h1 class="font-serif text-4xl md:text-5xl text-navy mt-2">Next in the Happy V line</h1>
        <p class="text-navy/60 mt-2">Sneak peek of what's in formulation. Sign up at the booth to be first to hear.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${D().comingSoon.map(p => `
          <article class="prod-card">
            <span class="badge">Coming Soon</span>
            <div class="img-wrap" style="background:${p.bg}">
              <div class="w-16 h-24 mx-auto rounded-xl bg-white/70 shadow-soft flex items-end justify-center pb-1.5">
                <span class="font-serif text-[10px] text-navy/70">${escape(p.name)}</span>
              </div>
            </div>
            <h3 class="font-serif text-lg text-navy">${escape(p.name)}</h3>
            <p class="text-sm text-navy/70 leading-snug">${escape(p.tagline)}</p>
            <div class="flex flex-wrap gap-1.5 mt-1">
              ${p.tags.map(t => `<span class="text-[11px] bg-mist text-navy/70 px-2.5 py-1 rounded-full">${escape(t)}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>`;

  // ---------------------------------------------------------------------------
  // Sample Kits Form
  // ---------------------------------------------------------------------------
  const sampleForm = () => /* html */ `
    <section class="view-enter max-w-5xl mx-auto px-6 py-10 pb-32">
      <div class="text-center mb-8">
        <h1 class="font-serif text-4xl md:text-5xl text-navy">Get Sample Kits</h1>
        <p class="text-navy/60 mt-2">Request professional samples to share with your patients</p>
        <p class="text-xs text-navy/50 mt-1">Submitting your details enters you into the iPad raffle drawn at end of conference.</p>
      </div>

      <form id="sampleForm" class="grid lg:grid-cols-2 gap-5">
        <div class="rounded-2xl bg-sand p-6 lg:p-7">
          <h2 class="font-serif text-xl text-navy mb-4">Your Details</h2>
          <label class="field-label">Full name<span class="req">*</span></label>
          <input class="input mb-4" name="fullName" required placeholder="Enter your name" />

          <label class="field-label">Email address<span class="req">*</span></label>
          <input class="input mb-4" name="email" type="email" required placeholder="Enter your email address" />

          <div class="grid grid-cols-3 gap-3">
            <div class="col-span-2">
              <label class="field-label">Practice name<span class="req">*</span></label>
              <input class="input" name="practiceName" required placeholder="Ex: Willow Creek OB/GYN" />
            </div>
            <div>
              <label class="field-label">Patients/month <span class="text-navy/40 font-normal">(optional)</span></label>
              <input class="input" name="patientsPerMonth" type="number" inputmode="numeric" placeholder="180" min="0" />
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-sand p-6 lg:p-7">
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-serif text-xl text-navy">Best person in your office to follow up with?</h2>
          </div>
          <label class="inline-flex items-center gap-2 mb-4 text-sm text-navy/70">
            <input type="checkbox" id="sameAsYou" class="accent-pink-brand" />
            Same person as your details
          </label>

          <label class="field-label">Name</label>
          <input class="input mb-4" name="contactName" placeholder="Enter name" />

          <label class="field-label">Role</label>
          <input class="input mb-4" name="contactRole" placeholder="Enter role" />

          <label class="field-label">Email / Phone</label>
          <input class="input" name="contactEmailPhone" placeholder="Enter email or phone" />
        </div>

        <div class="lg:col-span-2 suggest-box">
          <input type="checkbox" id="suggestKit" class="accent-pink-brand w-5 h-5" checked />
          <div class="flex-1">
            <label for="suggestKit" class="font-semibold text-navy">Send me sample kits matched to my patients</label>
            <div class="text-xs text-navy/60 mt-1" id="suggestSummary">Based on your selections during the survey.</div>
          </div>
        </div>

        <div class="lg:col-span-2 flex justify-center">
          <button type="submit" class="btn-primary !px-10">Get Samples
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </form>
    </section>`;

  function sampleFormInit(root) {
    const summaryEl = root.querySelector('#suggestSummary');
    const conds = (S().get('conditions', []) || []).map(id =>
      (D().conditions.find(c => c.id === id) || {}).label
    ).filter(Boolean);
    const stages = (S().get('stages', []) || []).map(id =>
      (D().lifeStages.find(l => l.id === id) || {}).label
    ).filter(Boolean);
    const tags = [...conds, ...stages];
    if (tags.length) {
      summaryEl.innerHTML = tags.map(t => `<span class="inline-block text-[11px] mr-1.5 mt-1 px-2.5 py-1 rounded-full bg-white text-navy/70 border border-navy/10">${escape(t)}</span>`).join('');
    }

    const sameAs = root.querySelector('#sameAsYou');
    sameAs.addEventListener('change', () => {
      const f = root.querySelector('#sampleForm');
      const fullName = f.fullName.value;
      const email = f.email.value;
      if (sameAs.checked) {
        f.contactName.value = fullName;
        f.contactEmailPhone.value = email;
      }
    });

    root.querySelector('#sampleForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = e.currentTarget;
      const btn = f.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Submitting…';

      const payload = {
        fullName: f.fullName.value.trim(),
        email: f.email.value.trim(),
        practiceName: f.practiceName.value.trim(),
        patientsPerMonth: f.patientsPerMonth.value.trim(),
        contactName: f.contactName.value.trim(),
        contactRole: f.contactRole.value.trim(),
        contactEmailPhone: f.contactEmailPhone.value.trim(),
        wantsKit: root.querySelector('#suggestKit').checked ? 'yes' : 'no',
        conditions: (S().get('conditions', []) || []).join('|'),
        stages: (S().get('stages', []) || []).join('|'),
        path: S().get('path', '') || '',
        primaryRec: S().get('lastRec.primaryId', '') || '',
        raffleEntry: 'yes',
      };
      const res = await global.HV.submit.submitSampleForm(payload);
      if (res.ok) {
        S().set('lastSubmit', payload);
        location.hash = '#/thank-you';
      } else {
        btn.disabled = false; btn.textContent = 'Get Samples';
        alert('Submission failed — please try again.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Thank-you
  // ---------------------------------------------------------------------------
  const thankYou = () => {
    const last = S().get('lastSubmit', null);
    return /* html */ `
    <section class="view-enter max-w-3xl mx-auto px-6 py-16 text-center">
      <div class="mx-auto mb-6 w-16 h-16 rounded-full bg-pink-soft grid place-items-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#B85272" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-navy mb-3">Your sample kit is on its way</h1>
      <p class="text-navy/70 mb-2">Thanks${last ? `, ${escape((last.fullName || '').split(' ')[0])}` : ''} — we'll follow up with your sample shipment within 5 business days.</p>
      <p class="text-sm text-navy/60 mb-8">You're entered into the iPad raffle. The winner is drawn at 4pm on the final conference day.</p>
      <div class="flex items-center justify-center gap-3">
        <a href="#/recommendation" class="btn-secondary">View recommendations</a>
        <a href="#/home" class="btn-primary">Back to start</a>
      </div>
    </section>`;
  };

  // ---------------------------------------------------------------------------
  // Registry
  // ---------------------------------------------------------------------------
  global.HV = global.HV || {};
  global.HV.views = {
    home:             { render: home,             init: homeInit },
    about:            { render: about,            init: null },
    'condition-first':{ render: conditionFirst,   init: conditionFirstInit },
    'narrow-stage':   { render: narrowStage,      init: narrowStageInit },
    'patient-first':  { render: patientFirst,     init: patientFirstInit },
    'narrow-condition': { render: narrowCondition, init: narrowConditionInit },
    recommendation:   { render: recommendation,   init: recommendationInit },
    comparison:       { render: comparison,       init: comparisonInit },
    'coming-soon':    { render: comingSoonView,   init: null },
    'sample-form':    { render: sampleForm,       init: sampleFormInit },
    'thank-you':      { render: thankYou,         init: null },
  };
})(window);
