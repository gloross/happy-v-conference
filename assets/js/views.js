/* Happy V — view templates as JS functions returning HTML strings.
 * Keeping all views in one file (vs fetched fragments) makes deployment to
 * GitHub Pages a single static HTML page with a few JS files. */
(function (global) {
  'use strict';

  const D = () => global.HV.data;
  const S = () => global.HV.state;

  const escape = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c],
    );

  // ---------------------------------------------------------------------------
  // Home — "How do you want to explore?"
  // ---------------------------------------------------------------------------
  const home = () => /* html */ `
    <section class="view-enter home-view">
      <!-- Hero (navy gradient with product imagery) -->
      <div class="home-hero">
        <div class="home-hero__bg" aria-hidden="true">
          <img class="home-hero__products home-hero__products--right" src="assets/img/hero-products.png" alt="" />
          <img class="home-hero__products home-hero__products--left"  src="assets/img/hero-products.png" alt="" />
        </div>
        <div class="home-hero__inner">
          <div class="home-hero__brand">
            <span class="logo logo--white home-hero__wordmark" aria-hidden="true">
              <span class="logo__part logo__v-circle"  ><img src="assets/img/logo/v-mark-circle.svg" alt=""/></span>
              <span class="logo__part logo__r-small"   ><img src="assets/img/logo/registered-mark-small.svg" alt=""/></span>
              <span class="logo__part logo__h"         ><img src="assets/img/logo/letter-h-white.svg" alt=""/></span>
              <span class="logo__part logo__a"         ><img src="assets/img/logo/letter-a-white.svg" alt=""/></span>
              <span class="logo__part logo__p1"        ><img src="assets/img/logo/letter-p1-white.svg" alt=""/></span>
              <span class="logo__part logo__p2"        ><img src="assets/img/logo/letter-p2-white.svg" alt=""/></span>
              <span class="logo__part logo__y"         ><img src="assets/img/logo/letter-y-white.svg" alt=""/></span>
              <span class="logo__part logo__v"         ><img src="assets/img/logo/letter-v-white.svg" alt=""/></span>
              <span class="logo__part logo__r-large"   ><img src="assets/img/logo/registered-mark-large-white.svg" alt=""/></span>
            </span>
            <div class="home-hero__rating">
              <span class="home-hero__stars" aria-hidden="true">
                ${'<img src="assets/img/icons/star.svg" alt="" width="22" height="22" />'.repeat(5)}
              </span>
              <span class="home-hero__rating-text">25,000 Happy Customers</span>
            </div>
            <p class="home-hero__sub">Clinically dosed · Strain-specific · Peer-reviewed evidence</p>
          </div>
          <a href="#/about" class="home-hero__cta">
            About HAPPY V
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Stat tiles overlapping bottom of hero -->
      <div class="home-stats-wrap">
        <div class="home-stats">
          <div class="home-stat">
            <p class="home-stat__num">1000</p>
            <p class="home-stat__label">Physician partnerships</p>
          </div>
          <div class="home-stats__divider" aria-hidden="true"></div>
          <div class="home-stat">
            <p class="home-stat__num">1,000,000+</p>
            <p class="home-stat__label">Happy Customers</p>
          </div>
          <div class="home-stats__divider" aria-hidden="true"></div>
          <div class="home-stat">
            <p class="home-stat__num">28 years</p>
            <p class="home-stat__label">cGMP manufacturing</p>
          </div>
        </div>
      </div>

      <!-- Path picker -->
      <div class="home-paths">
        <h2 class="home-paths__heading">How do you want to explore?</h2>
        <div class="home-paths__grid">
          <button class="path-card path-card--condition" data-go="#/condition-first" data-path="condition">
            <img class="path-card__icon" src="assets/img/illustrations/condition-first.svg" alt="" width="100" height="100" />
            <p class="path-card__kicker">CONDITION-FIRST</p>
            <p class="path-card__title">What are we solving for?</p>
            <p class="path-card__sub">I have a specific clinical condition in mind</p>
          </button>
          <button class="path-card path-card--patient" data-go="#/patient-first" data-path="patient">
            <img class="path-card__icon" src="assets/img/illustrations/patient-first.svg" alt="" width="100" height="100" />
            <p class="path-card__kicker path-card__kicker--patient">PATIENT-FIRST</p>
            <p class="path-card__title">Who is our patient?</p>
            <p class="path-card__sub">I want to see what fits my patient population</p>
          </button>
        </div>
      </div>
    </section>`;

  function homeInit(root) {
    root.querySelectorAll('[data-go]').forEach((btn) => {
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
    <section class="view-enter about-view">
      <div class="about-grid">
        <div class="about-left">
          <div class="about-photo">
            <img src="assets/img/about-team.jpg" alt="Happy V founders and team" />
          </div>
          <div class="about-stats">
            <div class="about-stat">
              <p class="about-stat__num">1000</p>
              <p class="about-stat__label">Physician partnerships</p>
            </div>
            <div class="about-stats__divider" aria-hidden="true"></div>
            <div class="about-stat">
              <p class="about-stat__num">1,000,000+</p>
              <p class="about-stat__label">Happy Customers</p>
            </div>
            <div class="about-stats__divider" aria-hidden="true"></div>
            <div class="about-stat">
              <p class="about-stat__num">28 years</p>
              <p class="about-stat__label">cGMP manufacturing</p>
            </div>
          </div>
        </div>

        <div class="about-content">
          <div class="about-rating">
            <span class="home-hero__stars" aria-hidden="true">
              ${'<img src="assets/img/icons/star.svg" alt="" width="22" height="22" />'.repeat(5)}
            </span>
            <span class="about-rating__text">25,000 Happy Customer Reviews</span>
          </div>
          <h1 class="about-heading">About Happy V</h1>
          <p class="about-subhead">Clinically dosed · Strain-specific · Peer-reviewed evidence</p>

          <div class="about-body">
            <p class="about-para">
              <strong>28 years of manufacturing heritage</strong>, Founded under Nutrition Formulators, Inc.(NFI) in 1997, Happy V is manufactured in a cGMP-compliant
              facility and is a proud member of the International Probiotics Association (IPA).
            </p>
            <p class="about-para">
              With <strong>1000 physician partnerships and 55,000+ active customers</strong>, our
              products are trusted by healthcare professionals and sold on Amazon, Walmart,
              TikTok Shop, and direct-to-consumer channels.
            </p>
            <div class="about-callout">
              <p class="about-callout__title">Key Differentiator</p>
              <p class="about-callout__body">
                <strong>No probiotic stuffing.</strong> Every strain is dosed at clinically studied
                levels with full label transparency. We don't add strains just to pad the label.
                If it's in the bottle, it's there at a therapeutic dose backed by research.
              </p>
            </div>
            <p class="about-para">
              <strong>For healthcare professionals:</strong> We provide the science, dosing
              rationale, and clinical context you need to confidently recommend our products to
              your patients.
            </p>
          </div>
        </div>
      </div>
    </section>`;

  // ---------------------------------------------------------------------------
  // Condition-first flow
  // Step 1: pick condition(s). Step 2: narrow by life stage. Step 3: results.
  // ---------------------------------------------------------------------------
  // Shared helper: render a chip
  const chip = (data) => /* html */ `
    <button class="chip${data.icon ? '' : ' chip--no-icon'}" ${data.attr}="${data.id}" aria-pressed="${data.selected}">
      ${data.icon ? `<span class="chip__icon" aria-hidden="true">${data.icon}</span>` : ''}
      <span class="chip__label">${escape(data.label)}${data.range ? ` <span class="chip__range">${data.range}</span>` : ''}</span>
    </button>`;

  /* Figma pattern (verified against 157:4005 Patient first → Symptoms / 18-35):
     when 1+ items are selected, BOTH "Skip - Show me everything" (white pill) and
     "Next" (navy pill) appear, stacked vertically. When nothing selected, only Skip. */
  const quizActions = ({nextLabel = 'Next', disabled = false} = {}) => /* html */ `
    <div class="quiz-actions">
      <button class="btn-skip" id="skipBtn" type="button">Skip - Show me everything</button>
      <button class="btn-primary" id="nextBtn"${disabled ? ' hidden' : ''}>
        ${nextLabel}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;

  const conditionFirst = () => {
    const sel = S().get('conditions', []) || [];
    const count = D().matchCount({conditions: sel});
    return /* html */ `
    <section class="view-enter quiz-view">
      <div class="quiz-head">
        <h1 class="quiz-head__title">What are you solving for?</h1>
        <p class="quiz-head__sub">Select all that apply:</p>
        <span class="match-pill" id="matchPill"${sel.length === 0 ? ' hidden' : ''}>${count} matching products</span>
      </div>
      <div class="chip-grid">
        ${D()
          .primaryConditions.map((c) =>
            chip({id: c.id, attr: 'data-cond', icon: c.icon, label: c.label, selected: sel.includes(c.id)}),
          )
          .join('')}
      </div>
      ${quizActions({disabled: sel.length === 0})}
    </section>`;
  };

  function conditionFirstInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('conditions', []) || [];
      const pill = root.querySelector('#matchPill');
      pill.textContent = `${D().matchCount({conditions: sel})} matching products`;
      pill.toggleAttribute('hidden', sel.length === 0);
      root.querySelector('#nextBtn').toggleAttribute('hidden', sel.length === 0);
      /* Skip is always visible — see Figma 157:4005 */
    };
    root.querySelectorAll('[data-cond]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.cond;
        const sel = S().get('conditions', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1);
        else sel.push(id);
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
  /* Step 2 of condition-first: pick complementary concerns. These selections
     populate the secondary panel on every recommendation slide. */
  /* Step 2 of condition-first: narrow by life stage (optional, single-select).
     Per ACOG.xlsx logic-tab: 45-55 / 55+ always surfaces Meno AM+PM as
     secondary unless the primary is already a menopause product. */
  const narrowStage = () => {
    const sel = S().get('stages', []) || [];
    const primary = S().get('conditions', []) || [];
    const count = D().matchCount({conditions: primary, stages: sel});
    return /* html */ `
    <section class="view-enter quiz-view">
      <div class="quiz-head">
        <h1 class="quiz-head__title">Narrow by life stage</h1>
        <p class="quiz-head__sub">Refine your results</p>
        <span class="match-pill" id="matchPill"${count === 0 ? ' hidden' : ''}>${count} matching products</span>
      </div>
      <div class="chip-grid chip-grid--3">
        ${D()
          .lifeStages.map((s) =>
            chip({id: s.id, attr: 'data-stage', label: s.label, range: s.range, selected: sel.includes(s.id)}),
          )
          .join('')}
      </div>
      ${quizActions({nextLabel: 'See recommendation'})}
    </section>`;
  };

  function narrowStageInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('stages', []) || [];
      const primary = S().get('conditions', []) || [];
      const pill = root.querySelector('#matchPill');
      const count = D().matchCount({conditions: primary, stages: sel});
      pill.textContent = `${count} matching products`;
      pill.toggleAttribute('hidden', count === 0);
      root.querySelector('#skipBtn').removeAttribute('hidden');
      root.querySelector('#nextBtn').removeAttribute('hidden');
    };
    /* Single-select life stage chips */
    const stageButtons = root.querySelectorAll('[data-stage]');
    stageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stage;
        const current = S().get('stages', []) || [];
        const isActive = current.includes(id);
        const next = isActive ? [] : [id];
        S().set('stages', next);
        stageButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.stage === id && !isActive)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => (location.hash = '#/recommendation'));
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
    const count = D().matchCount({stages: sel});
    return /* html */ `
    <section class="view-enter quiz-view">
      <div class="quiz-head">
        <h1 class="quiz-head__title">Select life stage(s)</h1>
        <p class="quiz-head__sub">Select one</p>
        <span class="match-pill" id="matchPill"${sel.length === 0 ? ' hidden' : ''}>${count} matching products</span>
      </div>
      <div class="chip-grid chip-grid--3">
        ${D()
          .lifeStages.map((s) =>
            chip({id: s.id, attr: 'data-stage', label: s.label, range: s.range, selected: sel.includes(s.id)}),
          )
          .join('')}
      </div>
      ${quizActions({disabled: sel.length === 0})}
    </section>`;
  };

  function patientFirstInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('stages', []) || [];
      const pill = root.querySelector('#matchPill');
      pill.textContent = `${D().matchCount({stages: sel})} matching products`;
      pill.toggleAttribute('hidden', sel.length === 0);
      root.querySelector('#nextBtn').toggleAttribute('hidden', sel.length === 0);
      /* Skip is always visible — see Figma 157:4005 */
    };
    /* Life stage is a single-select (radio). Clicking a different chip
       deselects the previous one; clicking the active chip clears the choice. */
    const stageButtons = root.querySelectorAll('[data-stage]');
    stageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stage;
        const current = S().get('stages', []) || [];
        const isActive = current.includes(id);
        const next = isActive ? [] : [id];
        S().set('stages', next);
        stageButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.stage === id && !isActive)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => (location.hash = '#/narrow-condition'));
    root.querySelector('#skipBtn').addEventListener('click', () => {
      S().set('stages', []);
      S().set('conditions', []);
      S().set('path', 'skip');
      location.hash = '#/recommendation';
    });
    updateMatchPill();
  }

  const narrowCondition = () => {
    const sel = S().get('conditions', []) || [];
    const stages = S().get('stages', []) || [];
    const count = D().matchCount({stages, conditions: sel});
    /* Patient-first flow step 2: conditions are filtered by the life stage
       picked in step 1. Each age band has a clinically curated list per spec. */
    const stageId = stages[0];
    const conds = D().patientConditionsForStage(stageId);
    return /* html */ `
    <section class="view-enter quiz-view">
      <div class="quiz-head">
        <h1 class="quiz-head__title">Narrow by condition</h1>
        <p class="quiz-head__sub">Refine your results</p>
        <span class="match-pill" id="matchPill">${count} matching products</span>
      </div>
      <div class="chip-grid">
        ${conds
          .map((c) => chip({id: c.id, attr: 'data-cond', icon: c.icon, label: c.label, selected: sel.includes(c.id)}))
          .join('')}
      </div>
      ${quizActions({nextLabel: 'See recommendation'})}
    </section>`;
  };

  function narrowConditionInit(root) {
    const updateMatchPill = () => {
      const sel = S().get('conditions', []) || [];
      const stages = S().get('stages', []) || [];
      root.querySelector('#matchPill').textContent = `${D().matchCount({stages, conditions: sel})} matching products`;
      /* narrow-condition is the second step — keep Next visible always and hide skip */
      /* Both buttons visible — see Figma 157:4005 */
      root.querySelector('#skipBtn').removeAttribute('hidden');
      root.querySelector('#nextBtn').removeAttribute('hidden');
    };
    root.querySelectorAll('[data-cond]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.cond;
        const sel = S().get('conditions', []) || [];
        const idx = sel.indexOf(id);
        if (idx >= 0) sel.splice(idx, 1);
        else sel.push(id);
        S().set('conditions', sel);
        btn.setAttribute('aria-pressed', String(sel.includes(id)));
        updateMatchPill();
      });
    });
    root.querySelector('#nextBtn').addEventListener('click', () => (location.hash = '#/recommendation'));
    root.querySelector('#skipBtn').addEventListener('click', () => {
      S().set('stages', []);
      S().set('conditions', []);
      S().set('path', 'skip');
      location.hash = '#/recommendation';
    });
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
    const r = D().recommend({conditions: conds, stages});
    S().set('lastRec', {primaryId: r.primary.id});

    const stars = (n = 5) =>
      `<span class="rec-stars" aria-hidden="true">${'<img src="assets/img/icons/star.svg" alt="" width="14" height="14" />'.repeat(n)}</span>`;
    const productImg = (p) =>
      `<img src="${escape(p.img || '')}" alt="" class="rec-card__product" onerror="this.style.display='none'; this.parentElement.classList.add('rec-card__media--no-img'); this.parentElement.dataset.label='${escape(p.shortName)}';"/>`;
    const multi = r.pages.length > 1;

    const renderPage = (page, idx) => /* html */ `
      <div class="rec-page${page.complementary.length ? '' : ' rec-page--solo'}" data-rec-page="${idx}">
        <div class="rec-page__head">
          ${page.context ? `<span class="rec-context">${escape(page.context)}</span>` : ''}
        </div>
        <div class="rec-stage${page.complementary.length ? '' : ' rec-stage--solo'}">
          <article class="rec-card rec-card--primary" data-product="${page.primary.id}">
            <div class="rec-card__media" style="background:${escape(page.primary.bgGradient || page.primary.bg || '#A6CDEC')};">
              <span class="rec-card__badge">RECOMMENDED</span>
              <a class="rec-card__open" href="#" data-details="${page.primary.id}" aria-label="Open product details">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              ${productImg(page.primary)}
            </div>
            <div class="rec-card__body">
              <h2 class="rec-card__name">${escape(page.primary.name)}</h2>
              <div class="rec-card__rating">${stars(5)}<span class="rec-card__rcount">(${page.primary.reviews.toLocaleString()})</span></div>
              <p class="rec-card__tagline">${escape(page.primary.tagline)}</p>
              <div class="rec-card__actions">
                <button class="rec-link" data-compare="${page.primary.id}">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L4 7L8 11" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7H20" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 21L20 17L16 13" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 17H4" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  Compare
                </button>
                <button class="rec-pill" data-details="${page.primary.id}">Clinical Details</button>
              </div>
            </div>
          </article>

          ${
            page.complementary.length
              ? `
            <div class="rec-side">
              <p class="rec-side__label">Complementary:</p>
              ${page.complementary
                .slice(0, 3)
                .map(
                  (p) => `
                <article class="rec-card rec-card--complementary" data-product="${p.id}">
                  <div class="rec-card__media rec-card__media--small" style="background:${escape(p.bgGradient || p.bg || '#DEF1EA')};">
                    ${productImg(p)}
                  </div>
                  <div class="rec-card__body rec-card__body--inline">
                    <div class="rec-card__head-row">
                      <h3 class="rec-card__name rec-card__name--small">${escape(p.name)}</h3>
                      <a class="rec-card__open" href="#" data-details="${p.id}" aria-label="Open product details">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </a>
                    </div>
                    <div class="rec-card__rating">${stars(5)}<span class="rec-card__rcount">(${p.reviews.toLocaleString()})</span></div>
                    <p class="rec-card__tagline rec-card__tagline--small">${escape(p.tagline)}</p>
                  </div>
                </article>
              `,
                )
                .join('')}
            </div>
          `
              : ''
          }
        </div>
      </div>`;
    /* Pager: ONE row of dots below the swiper, not per-page (cleaner state mgmt) */
    const pagerHtml = multi
      ? `<div class="rec-pager">${r.pages.map((_, i) => `<button class="rec-dot${i === 0 ? ' rec-dot--on' : ''}" data-rec-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('')}</div>`
      : '';

    /* Title flips based on entry path: "for your patient" reads as a quiz
       follow-up, so it only fits when conditions or stages were actually
       selected. Direct nav (Products tab without taking the quiz, or Skip)
       gets the neutral "Recommended from us". */
    const tookQuiz = conds.length > 0 || stages.length > 0;
    const title = tookQuiz ? 'Recommended for your patient' : 'Recommended from us';
    return /* html */ `
    <section class="view-enter rec-view${multi ? '' : ' rec-view--single'}">
      <div class="rec-head">
        <h1 class="rec-head__title">${escape(title)}</h1>
        ${multi ? `<p class="rec-head__sub">Swipe to next condition</p>` : ''}
      </div>

      <div class="rec-swiper-wrap">
        ${
          multi
            ? `
          <button class="rec-arrow rec-arrow--prev" id="recArrowPrev" type="button" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="rec-arrow rec-arrow--next" id="recArrowNext" type="button" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        `
            : ''
        }
        <div class="rec-swiper${multi ? ' rec-swiper--multi' : ''}" id="recSwiper">
          ${r.pages.map(renderPage).join('')}
        </div>
      </div>

      ${pagerHtml}

      <div class="rec-cta">
        <a href="#/sample-form" class="btn-primary">Get Samples
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>`;
  };

  function recommendationInit(root) {
    root.querySelectorAll('[data-compare]').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault();
        S().set('compareWith', b.dataset.compare);
        location.hash = '#/comparison';
      }),
    );
    root.querySelectorAll('[data-details]').forEach((b) =>
      b.addEventListener('click', (e) => {
        e.preventDefault();
        openClinicalDetails(b.dataset.details);
      }),
    );
    /* Swiper: dots + arrows scroll the swiper container horizontally. Single
       row of dots below the swiper makes the active state easy to keep in sync. */
    const swiper = root.querySelector('#recSwiper');
    if (!swiper) return;
    const pages = Array.from(swiper.querySelectorAll('.rec-page'));
    const dots = Array.from(root.querySelectorAll('[data-rec-dot]'));
    let current = 0;

    let scrollLock = false;
    const setActive = (i) => {
      current = Math.max(0, Math.min(pages.length - 1, i));
      pages.forEach((p, idx) => p.classList.toggle('rec-page--active', idx === current));
      const target = pages[current];
      if (target) {
        scrollLock = true;
        /* Direct scrollLeft works reliably on horizontal flex containers */
        swiper.scrollLeft = target.offsetLeft - pages[0].offsetLeft;
        setTimeout(() => {
          scrollLock = false;
        }, 200);
      }
      dots.forEach((d, idx) => d.classList.toggle('rec-dot--on', idx === current));
      const prev = root.querySelector('#recArrowPrev');
      const next = root.querySelector('#recArrowNext');
      if (prev) prev.toggleAttribute('disabled', current === 0);
      if (next) next.toggleAttribute('disabled', current === pages.length - 1);
    };

    dots.forEach((d) =>
      d.addEventListener('click', (e) => {
        e.preventDefault();
        setActive(parseInt(d.dataset.recDot, 10));
      }),
    );
    root.querySelector('#recArrowPrev')?.addEventListener('click', () => setActive(current - 1));
    root.querySelector('#recArrowNext')?.addEventListener('click', () => setActive(current + 1));

    /* Sync dots when user scrolls/swipes manually. Skip during programmatic
       smooth-scroll (driven by setActive) to avoid the dot resetting back. */
    let scrollTimer;
    swiper.addEventListener('scroll', () => {
      if (scrollLock) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const sr = swiper.getBoundingClientRect();
        const visibleIdx = pages.findIndex((p) => {
          const pr = p.getBoundingClientRect();
          return pr.left >= sr.left - 50 && pr.left < sr.left + sr.width / 2;
        });
        if (visibleIdx >= 0 && visibleIdx !== current) {
          current = visibleIdx;
          /* Mirror what setActive does — flip the active class on the page
             so the highlighted card visually tracks the swipe gesture. */
          pages.forEach((p, idx) => p.classList.toggle('rec-page--active', idx === current));
          dots.forEach((d, idx) => d.classList.toggle('rec-dot--on', idx === current));
          const prev = root.querySelector('#recArrowPrev');
          const next = root.querySelector('#recArrowNext');
          if (prev) prev.toggleAttribute('disabled', current === 0);
          if (next) next.toggleAttribute('disabled', current === pages.length - 1);
        }
      }, 80);
    });

    setActive(0);
  }

  function openClinicalDetails(productId) {
    /* Look up across both live products (sold today) and coming-soon products
       (preorder). Both share the `clinical` shape so the drawer renders the
       same way; only the "Add to sample box" CTA and the rating row differ. */
    const p = D().products[productId] || (D().comingSoon || []).find((c) => c.id === productId);
    if (!p) return;
    const isPreorder = !!p.preorder;
    /* Per client (2026-04-30): only Pre + Pro shows the full transparency
       trio. Every other product just shows "No proprietary blends". */
    const tags =
      productId === 'prepro'
        ? ['Strain-level transparency', 'No proprietary blends', 'Therapeutic CFU dosing']
        : ['No proprietary blends'];
    const clinical = p.clinical || {sections: [], ingredients: null};
    const ing = clinical.ingredients;
    const sections = [...clinical.sections];
    if (ing) {
      sections.push({
        label: 'Ingredients',
        kind: 'ingredients',
        ingredients: ing,
      });
    }
    const stars = `<span class="rec-stars">${'<img src="assets/img/icons/star.svg" alt="" width="20" height="20"/>'.repeat(5)}</span>`;
    const inBox = (S().get('sampleBox', []) || []).includes(productId);

    const renderBody = (s) => {
      if (s.kind === 'ingredients') {
        return /* html */ `
          <table class="cd-ing">
            <thead>
              <tr><th>Ingredients</th><th>Dosage</th><th>Substantiation</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><ul class="cd-ing__list">${s.ingredients.items.map((i) => `<li>${escape(i)}</li>`).join('')}</ul></td>
                <td>${escape(s.ingredients.dosage || '')}</td>
                <td>${escape(s.ingredients.substantiation || '')}</td>
              </tr>
            </tbody>
          </table>`;
      }
      /* Preserve newlines within section bodies (e.g. Strains list) */
      return `<p class="cd-acc__text">${escape(s.body || '—').replace(/\n/g, '<br/>')}</p>`;
    };

    const overlay = document.createElement('div');
    overlay.className = 'cd-overlay';
    overlay.innerHTML = /* html */ `
      <button class="cd-close" type="button" aria-label="Close details">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#25425D" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <aside class="cd-drawer" role="dialog" aria-modal="true" aria-labelledby="cdTitle">
        <div class="cd-content">
          <div class="cd-image${isPreorder ? ' cd-image--preorder' : ''}" style="background:${escape(p.bgGradient || p.bg || '#A6CDEC')};">
            ${
              isPreorder
                ? `<span class="cs-card__pill">Coming soon...</span>`
                : p.img
                  ? `<img src="${escape(p.img)}" alt="" onerror="this.style.display='none';"/>`
                  : `<span class="cd-image__label">${escape(p.shortName || '')}</span>`
            }
          </div>
          <div class="cd-meta">
            <h2 id="cdTitle" class="cd-title">${escape(p.name)}</h2>
            ${
              p.reviews
                ? `<div class="cd-rating">${stars}<span class="cd-rcount">(${p.reviews.toLocaleString()})</span></div>`
                : ''
            }
          </div>
          <div class="cd-tags">
            ${tags.map((t) => `<span class="cd-tag">${escape(t)}</span>`).join('')}
          </div>
          <div class="cd-accordion">
            ${sections
              .map(
                (s, i) => `
              <div class="cd-acc${i === 0 ? ' cd-acc--open' : ''}" data-cd-acc>
                <button class="cd-acc__head" type="button">
                  <span class="cd-acc__label">${escape(s.label)}</span>
                  <span class="cd-acc__icon" aria-hidden="true">
                    <svg class="cd-acc__plus" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" stroke="#25425D" stroke-width="1.5"/><path d="M12 7v10M7 12h10" stroke="#25425D" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <svg class="cd-acc__minus" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" stroke="#25425D" stroke-width="1.5"/><path d="M7 12h10" stroke="#25425D" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                </button>
                <div class="cd-acc__body">${renderBody(s)}</div>
              </div>
            `,
              )
              .join('')}
          </div>
          ${
            isPreorder
              ? ''
              : `<div class="cd-cta">
            <button class="btn-primary cd-add" type="button" data-cd-add aria-pressed="${inBox}">
              <span class="cd-add__label">${inBox ? 'Added to sample box' : 'Add to sample box'}</span>
              <svg class="cd-add__check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>`
          }
        </div>
      </aside>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('cd-overlay--open'));
    const close = () => {
      overlay.classList.remove('cd-overlay--open');
      setTimeout(() => overlay.remove(), 200);
      document.removeEventListener('keydown', escClose);
    };
    const escClose = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', escClose);
    overlay.querySelector('.cd-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    overlay.querySelectorAll('[data-cd-acc]').forEach((acc) => {
      acc.querySelector('.cd-acc__head').addEventListener('click', () => acc.classList.toggle('cd-acc--open'));
    });
    /* Add to sample box — toggle product in/out of state.sampleBox.
       Skipped for preorder products (no sample-kit pathway yet). */
    const addBtn = overlay.querySelector('[data-cd-add]');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const list = S().get('sampleBox', []) || [];
        const i = list.indexOf(productId);
        if (i >= 0) list.splice(i, 1);
        else list.push(productId);
        S().set('sampleBox', list);
        const isIn = list.includes(productId);
        addBtn.setAttribute('aria-pressed', String(isIn));
        addBtn.querySelector('.cd-add__label').textContent = isIn ? 'Added to sample box' : 'Add to sample box';
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Comparison
  // ---------------------------------------------------------------------------
  const comparison = () => {
    const allIds = Object.keys(D().competitorMatrix);
    const compareWith = S().get('compareWith');
    /* Honor an explicit Compare click on a recommendation card (sets
       `compareWith`) once, then clear it so any subsequent visit — bottom-nav
       tab, reload, deep link — defaults to Pre + Pro instead of the last
       compared product. */
    if (compareWith) S().set('compareWith', null);
    const initial = compareWith || 'prepro';
    return /* html */ `
    <section class="view-enter cmp-view">
      <div class="cmp-controls">
        <span class="cmp-controls__label">Compare</span>
        <div class="cmp-select">
          <select id="compareSel">
            ${allIds.map((id) => `<option value="${id}" ${id === initial ? 'selected' : ''}>${escape(D().competitorMatrix[id].product.name)}</option>`).join('')}
          </select>
          <svg class="cmp-select__chev" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="cmp-controls__label">with</span>
        <div class="cmp-multi" id="cmpMulti">
          <button class="cmp-multi__trigger" type="button" id="cmpMultiTrigger">
            <span id="cmpMultiLabel">All competitors</span>
            <svg class="cmp-multi__chev" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="cmp-multi__panel" id="cmpMultiPanel" hidden>
            <p class="cmp-multi__hint">Select competitors to compare:</p>
            <ul class="cmp-multi__list" id="cmpMultiList"></ul>
          </div>
        </div>
      </div>

      <div class="cmp-pills" id="cmpPills" hidden></div>

      <div id="cmpHost" class="cmp-host">
        ${comparisonTable(initial)}
      </div>

      <div class="rec-cta">
        <a href="#/sample-form" class="btn-primary">Get Samples
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>`;
  };

  /* Brand registry mapped to brand wordmark logo + product photo + short product name.
     Product photos pulled from each brand's CDN per ACOG event presentation.xlsx.
     Logos drop into assets/img/brands/ — missing files fall back to a styled text label. */
  const COMPETITOR_META = {
    /* Pre+Pro competitors */
    'Love Wellness — Good Girl Probiotics': {
      brand: 'LOVE WELLNESS',
      logo: 'assets/img/brands/love-wellness.svg',
      img: 'assets/img/products/love-wellness-good-girl.png',
      short: 'Good Girl Probiotics',
    },
    'AZO — Complete Feminine Balance': {
      brand: 'AZO',
      logo: 'assets/img/brands/azo.svg',
      img: 'assets/img/products/azo-feminine.webp',
      short: 'Complete Feminine Balance',
    },
    'O Positiv — URO Vaginal Probiotic': {
      brand: 'O POSITIV',
      logo: 'assets/img/brands/o-positiv.svg',
      img: 'assets/img/products/o-positiv-uro.webp',
      short: 'URO Vaginal Probiotic',
    },
    /* Debloat competitors */
    'Love Wellness — Bye Bye Bloat': {
      brand: 'LOVE WELLNESS',
      logo: 'assets/img/brands/love-wellness.svg',
      img: 'assets/img/products/love-wellness-bbb.jpg',
      short: 'Bye Bye Bloat',
    },
    'Enzymedica — Digest Gold\u00ae': {
      brand: 'ENZYMEDICA',
      logo: 'assets/img/brands/enzymedica.png',
      img: 'assets/img/products/enzymedica-digest-gold.webp',
      short: 'Digest Gold\u00ae with ATPro\u00ae',
    },
    'Physician\u2019s Choice — Digestive Enzymes': {
      brand: "PHYSICIAN'S CHOICE",
      logo: 'assets/img/brands/physicians-choice.png',
      img: 'assets/img/products/physicians-choice-digestive.png',
      short: 'Digestive Enzymes',
    },
    "Physician's Choice — Digestive Enzymes": {
      brand: "PHYSICIAN'S CHOICE",
      logo: 'assets/img/brands/physicians-choice.png',
      img: 'assets/img/products/physicians-choice-digestive.png',
      short: 'Digestive Enzymes',
    },
    /* Cranberry competitors */
    'Uquora — Defend': {
      brand: 'UQORA',
      logo: 'assets/img/brands/uqora.svg',
      img: 'assets/img/products/uqora-defend.png',
      short: 'Defend',
    },
    'AZO — Cranberry Caplets': {
      brand: 'AZO',
      logo: 'assets/img/brands/azo.svg',
      img: 'assets/img/products/azo-cranberry.webp',
      short: 'Cranberry Caplets',
    },
    'Ellura — Urinary Tract Health': {
      brand: 'ELLURA',
      logo: 'assets/img/brands/ellura.png',
      img: 'assets/img/products/ellura-uti.jpg',
      short: 'Urinary Tract Health Supplement',
    },
    /* Chlorophyll competitors */
    'Nature\u2019s Way — Chlorofresh\u00ae': {
      brand: "NATURE'S WAY",
      logo: 'assets/img/brands/natures-way.png',
      img: 'assets/img/products/natures-way-chlorofresh.png',
      short: 'Chlorofresh\u00ae Liquid Chlorophyll',
    },
    "Nature's Way — Chlorofresh\u00ae": {
      brand: "NATURE'S WAY",
      logo: 'assets/img/brands/natures-way.png',
      img: 'assets/img/products/natures-way-chlorofresh.png',
      short: 'Chlorofresh\u00ae Liquid Chlorophyll',
    },
    'MaryRuth Organics — Vegan Chlorophyll': {
      brand: 'MARYRUTH ORGANICS',
      logo: 'assets/img/brands/maryruth.png',
      img: 'assets/img/products/maryruth-chlorophyll.png',
      short: 'Vegan Chlorophyll Liquid Drops',
    },
    'Double Wood — Liquid Chlorophyll': {
      brand: 'DOUBLE WOOD',
      logo: 'assets/img/brands/double-wood.png',
      img: 'assets/img/products/double-wood-chlorophyll.png',
      short: 'Liquid Chlorophyll',
    },
    /* Menopause competitors (per competitors.xlsx 2026-05-01).
       Image/logo file paths are pre-wired to expected filenames; they fall
       back to a styled text label if the file isn't present yet. */
    'Estroven — Complete Menopause Relief': {
      brand: 'ESTROVEN',
      logo: 'assets/img/brands/estroven.png',
      img: 'assets/img/products/estroven-complete-menopause-relief.webp',
      short: 'Complete Menopause Relief',
    },
    'Estroven — Complete + Ashwagandha': {
      brand: 'ESTROVEN',
      logo: 'assets/img/brands/estroven.png',
      img: 'assets/img/products/estroven-complete-ashwagandha.webp',
      short: 'Complete + Ashwagandha',
    },
    'Bonafide — Relizen': {
      brand: 'BONAFIDE',
      logo: 'assets/img/brands/bonafide.svg',
      img: 'assets/img/products/bonafide-relizen.jpg',
      short: 'Relizen',
    },
    'Amberen — Menopause Relief': {
      brand: 'AMBEREN',
      logo: 'assets/img/brands/amberen.png',
      img: 'assets/img/products/amberen-menopause-relief.jpg',
      short: 'Menopause Relief',
    },
    "New Chapter — Every Woman's One Daily 40+": {
      brand: 'NEW CHAPTER',
      logo: 'assets/img/brands/new-chapter.jpg',
      img: 'assets/img/products/new-chapter-every-woman-40.webp',
      short: "Every Woman's One Daily 40+",
    },
    'Thorne — Meta-Balance': {
      brand: 'THORNE',
      logo: 'assets/img/brands/thorne.svg',
      img: 'assets/img/products/thorne-meta-balance.jpg',
      short: 'Meta-Balance',
    },
    'Metagenics — Estrovera': {
      brand: 'METAGENICS',
      logo: 'assets/img/brands/metagenics.svg',
      img: 'assets/img/products/metagenics-estrovera.jpg',
      short: 'Estrovera',
    },
    'Perelel — Peri Support Pack': {
      brand: 'PERELEL',
      logo: 'assets/img/brands/perelel.png',
      img: 'assets/img/products/perelel-peri-support-pack.webp',
      short: 'Peri Support Pack',
    },
    /* Ovarian competitors (per competitors.xlsx 2026-05-01) */
    'O Positiv — FLO Ovarian Support': {
      brand: 'O POSITIV',
      logo: 'assets/img/brands/o-positiv.svg',
      img: 'assets/img/products/o-positiv-flo-ovarian-support.png',
      short: 'FLO Ovarian Support',
    },
    'Theralogix — Ovasitol': {
      brand: 'THERALOGIX',
      logo: 'assets/img/brands/theralogix.png',
      img: 'assets/img/products/theralogix-ovasitol.webp',
      short: 'Ovasitol',
    },
    'Thorne — Ovary Good': {
      brand: 'THORNE',
      logo: 'assets/img/brands/thorne.svg',
      img: 'assets/img/products/ovary-good.jpg',
      short: 'Ovary Good',
    },
    'Fullwell — Inositol Stick Pack': {
      brand: 'FULLWELL',
      logo: 'assets/img/brands/fullwell.png',
      img: 'assets/img/products/fullwell-inositol-stick-pack.png',
      short: 'Inositol Stick Pack',
    },
    'Arrae — IN401\u2122 Inositol': {
      brand: 'ARRAE',
      logo: 'assets/img/brands/arrae.png',
      img: 'assets/img/products/arrae-in401-inositol.webp',
      short: 'IN401\u2122 Inositol',
    },
    'Pure Encapsulations — Inositol (Caronositol-Fertility\u2122)': {
      brand: 'PURE ENCAPSULATIONS',
      logo: 'assets/img/brands/pure-encapsulations.svg',
      img: 'assets/img/products/pure-encapsulations-inositol.jpg',
      short: 'Inositol (Caronositol-Fertility\u2122)',
    },
    'Wholesome Story - Myo & D-Chiro Inositol': {
      brand: 'WHOLESOME STORY',
      logo: 'assets/img/brands/wholesome-story.png',
      img: 'assets/img/products/wholesome-story-myo-d-chiro-inositol.webp',
      short: 'Myo & D-Chiro Inositol',
    },
    /* Pre + Pro competitors — second wave (per competitors.xlsx 2026-05-01) */
    'Her Florastor — Balanced Benefits': {
      brand: 'HER FLORASTOR',
      logo: 'assets/img/brands/her-florastor.svg',
      img: 'assets/img/products/her-florastor-balanced-benefits.webp',
      short: 'Good Girl Probiotics',
    },
    'VagiBiom — Complete Feminine Balance': {
      brand: 'VAGIBIOM',
      logo: 'assets/img/brands/vagibiom.svg',
      img: 'assets/img/products/vagibiom-feminine-support.webp',
      short: 'Complete Feminine Balance',
    },
    "Māge — Women's Probiotic": {
      brand: 'MĀGE',
      logo: 'assets/img/brands/solvwellness.svg',
      img: 'assets/img/products/mage-womens-probiotic.webp',
      short: "Women's Probiotic",
    },
    'Bonafide — Clairvee': {
      brand: 'BONAFIDE',
      logo: 'assets/img/brands/bonafide.svg',
      img: 'assets/img/products/bonafide-clairvee.webp',
      short: 'Clairvee',
    },
    'AZO — Dual Protection': {
      brand: 'AZO',
      logo: 'assets/img/brands/azo.svg',
      img: 'assets/img/products/azo-dual-protection.webp',
      short: 'Dual Protection',
    },
    "Physician's Choice — Vaginal Probiotic": {
      brand: "PHYSICIAN'S CHOICE",
      logo: 'assets/img/brands/physicians-choice.png',
      img: 'assets/img/products/physicians-choice-vaginal-probiotic.webp',
      short: 'Vaginal Probiotic',
    },
    "Culturelle — Women's 4-in-1": {
      brand: 'CULTURELLE',
      logo: 'assets/img/brands/culturelle.svg',
      img: 'assets/img/products/culturelle-womens-4-in-1.webp',
      short: "Women's 4-in-1",
    },
    "Garden of Life — Dr. Formulated Women's": {
      brand: 'GARDEN OF LIFE',
      logo: 'assets/img/brands/garden-of-life.png',
      img: 'assets/img/products/garden-of-life-dr-formulated-womens.webp',
      short: "Dr. Formulated Women's",
    },
  };
  const HAPPY_V_BRAND = {brand: 'HAPPY V', logo: 'assets/img/brands/happy-v.png'};

  function comparisonTable(productId, filterSet) {
    const m = D().competitorMatrix[productId];
    if (!m) return '<p class="text-navy/50">Comparison not available.</p>';
    /* If the user has filtered, show only those competitors. Empty filter = all. */
    const competitors = filterSet && filterSet.size > 0 ? m.competitors.filter((c) => filterSet.has(c)) : m.competitors;
    /* Track each competitor's original index in m.competitors so we can pull the right row cell */
    const competitorWithIdx = competitors.map((name) => ({name, origIdx: m.competitors.indexOf(name)}));
    const cols = [
      {
        name: m.product.name,
        brand: HAPPY_V_BRAND.brand,
        logo: HAPPY_V_BRAND.logo,
        isPrimary: true,
        img: m.product.img,
        imgBg: m.product.bgGradient || m.product.bg || '#A6CDEC',
        short: m.product.name,
        origIdx: -1,
      },
      ...competitorWithIdx.map(({name: fullName, origIdx}) => {
        const meta = COMPETITOR_META[fullName] || {
          brand: fullName.split(/[—\-]/)[0].trim().toUpperCase(),
          logo: '',
          img: '',
          short: fullName,
        };
        return {
          name: fullName,
          brand: meta.brand,
          logo: meta.logo,
          isPrimary: false,
          img: meta.img,
          imgBg: '#FBF8F7',
          short: meta.short,
          origIdx,
        };
      }),
    ];
    return /* html */ `
      <div class="cmp-table" style="--cmp-cols:${cols.length}; --cmp-rows:${m.rows.length};">
        <div class="cmp-table__rowlabels">
          <div class="cmp-table__corner"></div>
          ${m.rows.map((r) => `<div class="cmp-table__rowlabel">${escape(r[0])}</div>`).join('')}
        </div>
        ${cols
          .map(
            (c, ci) => `
          <div class="cmp-col${c.isPrimary ? ' cmp-col--primary' : ''}" style="background:${c.imgBg};">
            <div class="cmp-col__media" style="background:${c.imgBg};">
              ${
                c.img
                  ? `<img src="${escape(c.img)}" alt="" onerror="this.style.display='none';this.parentElement.querySelector('.cmp-col__placeholder').style.display='block';"/><span class="cmp-col__placeholder" style="display:none">${escape(c.short)}</span>`
                  : `<span class="cmp-col__placeholder">${escape(c.short)}</span>`
              }
            </div>
            <div class="cmp-col__head">
              <div class="cmp-col__brand">
                ${
                  c.logo
                    ? `<img class="cmp-col__brand-logo" src="${escape(c.logo)}" alt="${escape(c.brand)}" onerror="this.style.display='none';this.nextElementSibling.style.display='block';"/><span class="cmp-col__brand-text" style="display:none">${escape(c.brand)}</span>`
                    : `<span class="cmp-col__brand-text">${escape(c.brand)}</span>`
                }
              </div>
              <p class="cmp-col__product">${escape(c.short)}</p>
            </div>
            ${m.rows
              .map((r) => {
                /* Primary product cell is r[1]; competitor cells are r[2..] indexed by original position */
                const cellIdx = c.isPrimary ? 1 : c.origIdx + 2;
                const cell = r[cellIdx] || '';
                const positive = c.isPrimary;
                const icon = positive
                  ? `<img class="cmp-mark" src="assets/img/icons/cmp-check.svg" alt="" width="20" height="20"/>`
                  : `<img class="cmp-mark cmp-mark--x" src="assets/img/icons/cmp-x.svg" alt="" width="12" height="12"/>`;

                return `<div class="cmp-col__cell">${!cell.includes('$') ? (!(cell == '') ? icon : '') : ''}<span>${escape(cell)}</span></div>`;
              })
              .join('')}
          </div>
        `,
          )
          .join('')}
      </div>`;
  }

  function comparisonInit(root) {
    const sel = root.querySelector('#compareSel');
    const trigger = root.querySelector('#cmpMultiTrigger');
    const panel = root.querySelector('#cmpMultiPanel');
    const list = root.querySelector('#cmpMultiList');
    const label = root.querySelector('#cmpMultiLabel');
    const pillHost = root.querySelector('#cmpPills');
    let selected = new Set(); // Empty = "All competitors"

    /* Group competitors by brand (everything before the first em-dash/hyphen)
       so the dropdown and pills show one entry per brand even when the matrix
       has multiple products from the same brand (e.g. two Estroven SKUs).
       Toggling a brand chip adds/removes ALL of that brand's products from
       the selected set. */
    const brandOf = (name) => name.split(/[—\-]/)[0].trim();
    const brandGroups = () => {
      const m = D().competitorMatrix[sel.value];
      const map = new Map();
      m.competitors.forEach((name) => {
        const b = brandOf(name);
        if (!map.has(b)) map.set(b, []);
        map.get(b).push(name);
      });
      return map;
    };

    const renderList = () => {
      const groups = brandGroups();
      list.innerHTML = [...groups.entries()]
        .map(([brand, names]) => {
          const allChecked = names.every((n) => selected.has(n));
          return `<li class="cmp-multi__item">
          <label>
            <span class="cmp-cb${allChecked ? ' cmp-cb--on' : ''}" aria-hidden="true"></span>
            <input type="checkbox" data-cmp-brand="${escape(brand)}" ${allChecked ? 'checked' : ''} />
            <span>${escape(brand)}</span>
          </label>
        </li>`;
        })
        .join('');
      list.querySelectorAll('input[data-cmp-brand]').forEach((cb) => {
        cb.addEventListener('change', () => {
          const brand = cb.dataset.cmpBrand;
          const names = brandGroups().get(brand) || [];
          if (cb.checked) names.forEach((n) => selected.add(n));
          else names.forEach((n) => selected.delete(n));
          syncAll();
        });
      });
    };

    const renderPills = () => {
      if (selected.size === 0) {
        pillHost.hidden = true;
        pillHost.innerHTML = '';
        return;
      }
      pillHost.hidden = false;
      /* Dedupe selected names down to brands so multi-product brands show as
         one removable pill that clears every product under that brand. */
      const brands = [...new Set([...selected].map(brandOf))];
      pillHost.innerHTML =
        brands
          .map(
            (b) =>
              `<span class="cmp-pill"><span>${escape(b)}</span><button class="cmp-pill__x" data-cmp-rm-brand="${escape(b)}" aria-label="Remove">×</button></span>`,
          )
          .join('') + `<button class="cmp-pills__clear" id="cmpClear" type="button">Clear All</button>`;
      pillHost.querySelectorAll('[data-cmp-rm-brand]').forEach((btn) =>
        btn.addEventListener('click', () => {
          const brand = btn.dataset.cmpRmBrand;
          [...selected].forEach((n) => {
            if (brandOf(n) === brand) selected.delete(n);
          });
          syncAll();
        }),
      );
      pillHost.querySelector('#cmpClear').addEventListener('click', () => {
        selected.clear();
        syncAll();
      });
    };

    const renderTable = () => {
      root.querySelector('#cmpHost').innerHTML = comparisonTable(sel.value, selected);
    };

    const renderTrigger = () => {
      /* Count by brand so two SKUs of the same brand read as "1 Selected", not "2". */
      const brandCount = new Set([...selected].map(brandOf)).size;
      label.textContent = brandCount === 0 ? 'All competitors' : `${brandCount} Selected`;
    };

    const syncAll = () => {
      renderTrigger();
      renderPills();
      renderList();
      renderTable();
    };

    sel.addEventListener('change', () => {
      selected.clear(); // Reset filter when primary product changes
      syncAll();
    });

    trigger.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      trigger.classList.toggle('cmp-multi__trigger--open', !panel.hidden);
    });
    document.addEventListener('click', (e) => {
      if (!panel.hidden && !root.querySelector('#cmpMulti').contains(e.target)) {
        panel.hidden = true;
        trigger.classList.remove('cmp-multi__trigger--open');
      }
    });

    syncAll();
  }

  // ---------------------------------------------------------------------------
  // Coming Soon
  // ---------------------------------------------------------------------------
  const comingSoonView = () => {
    const items = D().comingSoon;
    return /* html */ `
    <section class="view-enter cs-view">
      <div class="cs-head">
        <h1 class="cs-head__title">Coming Soon</h1>
        <p class="cs-head__sub">Innovative formulas in development for comprehensive women's health</p>
      </div>

      <div class="cs-carousel-wrap">
        <button class="cs-arrow cs-arrow--prev" id="csArrowPrev" type="button" aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="cs-arrow cs-arrow--next" id="csArrowNext" type="button" aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#25425D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="cs-carousel" id="csCarousel">
          ${(() => {
            /* Cyclic peek: render visual clones of the last slide before slide 1
               and of the first slide after the last so side peeks always show
               adjacent content, even at the edges. Clones are inert — they
               can't be active and don't get scroll-snapped. */
            const renderCard = (p, i, isClone) => `
              <article class="cs-card${i === 0 && !isClone ? ' cs-card--active' : ''}${isClone ? ' cs-card--clone' : ''}" ${isClone ? '' : `data-cs-idx="${i}"`} style="--cs-bg:${p.bg};" aria-hidden="${isClone}">
                <div class="cs-card__media">
                  <span class="cs-card__pill">Coming soon...</span>
                  <div class="cs-card__silhouette" aria-hidden="true"></div>
                </div>
                <div class="cs-card__body">
                  <div class="cs-card__head-row">
                    <h2 class="cs-card__name">${escape(p.name)}</h2>
                    <button class="rec-pill cs-card__details" ${isClone ? 'tabindex="-1"' : ''}>Clinical Details</button>
                  </div>
                  <div class="cs-card__tags">
                    ${p.tags.map((t) => `<span class="cs-tag">${escape(t)}</span>`).join('')}
                  </div>
                  <p class="cs-card__desc">${escape(p.tagline)}</p>
                  <form class="cs-card__form" ${isClone ? '' : 'data-cs-form'}>
                    <input class="cs-input" type="email" placeholder="Your email for early access" ${isClone ? 'tabindex="-1"' : 'required'} />
                    <button class="btn-primary cs-card__cta" type="submit" ${isClone ? 'tabindex="-1"' : ''}>Get notified at launch</button>
                  </form>
                </div>
              </article>`;
            const last = items[items.length - 1];
            const first = items[0];
            return [
              renderCard(last, items.length - 1, true),
              ...items.map((p, i) => renderCard(p, i, false)),
              renderCard(first, 0, true),
            ].join('');
          })()}
        </div>
      </div>

      <div class="cs-pager">
        ${items.map((_, i) => `<button class="cs-dot${i === 0 ? ' cs-dot--on' : ''}" data-cs-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('')}
      </div>
    </section>`;
  };

  function comingSoonInit(root) {
    const carousel = root.querySelector('#csCarousel');
    /* Real cards only — exclude visual clones at the start/end. */
    const cards = Array.from(root.querySelectorAll('.cs-card:not(.cs-card--clone)'));
    const dots = Array.from(root.querySelectorAll('.cs-dot'));
    let idx = 0;
    let scrollLock = false;
    const setActive = (n) => {
      /* Cyclic: wrap on either end. Both arrows are always enabled. */
      idx = ((n % cards.length) + cards.length) % cards.length;
      cards.forEach((c, i) => c.classList.toggle('cs-card--active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('cs-dot--on', i === idx));
      const card = cards[idx];
      if (card && carousel) {
        const left = card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2;
        scrollLock = true;
        carousel.scrollLeft = left;
        setTimeout(() => {
          scrollLock = false;
        }, 200);
      }
    };
    dots.forEach((d, i) => d.addEventListener('click', () => setActive(i)));
    root.querySelector('#csArrowPrev')?.addEventListener('click', () => setActive(idx - 1));
    root.querySelector('#csArrowNext')?.addEventListener('click', () => setActive(idx + 1));
    /* Sync active state when user swipes/scrolls manually. We pick the card
       whose center is closest to the carousel's viewport center — works
       even mid-snap because we wait for the scroll to settle. */
    let csScrollTimer;
    carousel?.addEventListener('scroll', () => {
      if (scrollLock) return;
      clearTimeout(csScrollTimer);
      csScrollTimer = setTimeout(() => {
        const cr = carousel.getBoundingClientRect();
        const center = cr.left + cr.width / 2;
        let nearestIdx = idx;
        let nearestDist = Infinity;
        cards.forEach((c, i) => {
          const r = c.getBoundingClientRect();
          const cardCenter = r.left + r.width / 2;
          const dist = Math.abs(cardCenter - center);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestIdx = i;
          }
        });
        if (nearestIdx !== idx) {
          idx = nearestIdx;
          cards.forEach((c, i) => c.classList.toggle('cs-card--active', i === idx));
          dots.forEach((d, i) => d.classList.toggle('cs-dot--on', i === idx));
        }
      }, 80);
    });
    /* Wire the per-card "Clinical Details" button to the same drawer the live
       products use. We look up the product by its slide index so we don't have
       to plumb IDs through the DOM. */
    cards.forEach((card, i) => {
      const btn = card.querySelector('.cs-card__details');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const item = D().comingSoon[i];
        if (item) openClinicalDetails(item.id);
      });
    });
    /* Initial sync: ensure card 0 is centered after first paint (gives the
       layout a tick to compute offsetLeft accounting for the clones). */
    requestAnimationFrame(() => setActive(0));
    /* Wire the "Get notified at launch" form to Klaviyo. The form lives on
       each real card (clones are tagged 'data-cs-form' is omitted on them).
       On success we replace the form with a confirmation; on failure we
       restore the input + show an inline error. */
    root.querySelectorAll('[data-cs-form]').forEach((f) => {
      const card = f.closest('.cs-card');
      const productName = card?.querySelector('.cs-card__name')?.textContent?.trim() || '';
      f.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = f.querySelector('input');
        const btn = f.querySelector('button[type="submit"]');
        const email = (input.value || '').trim();
        if (!email) return;
        btn.disabled = true;
        const originalLabel = btn.textContent;
        btn.textContent = 'Subscribing\u2026';
        f.querySelectorAll('.cs-card__error').forEach((el) => el.remove());
        const res = await global.HV.submit.subscribeWaitlist({email, productName});
        if (res.ok) {
          /* Replace the form with a success state inside the card */
          const success = document.createElement('div');
          success.className = 'cs-card__success';
          success.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#2EAB7A"/><path d="M7 12.5l3.2 3.2L17 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg><span>You're on the list \u2014 we'll email you at launch.</span>`;
          f.replaceWith(success);
        } else {
          btn.disabled = false;
          btn.textContent = originalLabel;
          const err = document.createElement('p');
          err.className = 'cs-card__error';
          err.textContent =
            res.status === 400 || res.status === 422
              ? "Couldn't subscribe — please check the email and try again."
              : 'Something went wrong subscribing. Please try again in a moment.';
          f.appendChild(err);
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Sample Kits Form
  // ---------------------------------------------------------------------------
  const sampleForm = () => /* html */ `
    <section class="view-enter sf-view">
      <div class="sf-head">
        <h1 class="sf-head__title">Get Sample Kits</h1>
        <p class="sf-head__sub">Request professional samples to share with your patients</p>
      </div>

      <form id="sampleForm" class="sf-form">
        <div class="sf-card">
          <h2 class="sf-card__title">Your Details</h2>
          <label class="sf-label">Full name<span class="sf-req">*</span></label>
          <input class="sf-input" name="fullName" required placeholder="Enter your name" />

          <label class="sf-label">Email address<span class="sf-req">*</span></label>
          <input class="sf-input" name="email" type="email" required placeholder="Enter your email address" />

          <div class="sf-row">
            <div class="sf-row__col sf-row__col--2">
              <label class="sf-label">Practice name<span class="sf-req">*</span></label>
              <input class="sf-input" name="practiceName" required placeholder="Ex: Willow Creek Dental" />
            </div>
            <div class="sf-row__col">
              <label class="sf-label">Patients/month <span class="sf-label__optional">(optional)</span></label>
              <input class="sf-input" name="patientsPerMonth" type="number" inputmode="numeric" placeholder="180" min="0" />
            </div>
          </div>
        </div>

        <div class="sf-card">
          <h2 class="sf-card__title">Best person in your office to follow up with?</h2>
          <label class="sf-checkbox">
            <input type="checkbox" id="sameAsYou" />
            <span>Same person as your details</span>
          </label>

          <label class="sf-label">Name</label>
          <input class="sf-input" name="contactName" placeholder="Enter name" />

          <label class="sf-label">Role</label>
          <input class="sf-input" name="contactRole" placeholder="Enter role" />

          <label class="sf-label">Email /Phone</label>
          <input class="sf-input" name="contactEmailPhone" placeholder="Enter email address" />
        </div>

        <div class="sf-suggest">
          <label class="sf-checkbox sf-checkbox--lg">
            <input type="checkbox" id="suggestKit" checked />
            <span class="sf-suggest__label">Send me sample kits for my practice</span>
          </label>
          <p class="sf-suggest__tags" id="suggestSummary">Based on your selections during the survey.</p>
        </div>

        <div class="sf-cta">
          <button type="submit" class="btn-primary">Get Samples
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </form>
    </section>`;

  function sampleFormInit(root) {
    const summaryEl = root.querySelector('#suggestSummary');
    const conds = (S().get('conditions', []) || [])
      .map((id) => (D().conditions.find((c) => c.id === id) || {}).label)
      .filter(Boolean);
    const stages = (S().get('stages', []) || [])
      .map((id) => (D().lifeStages.find((l) => l.id === id) || {}).label)
      .filter(Boolean);
    const path = S().get('path');
    const pathLabel = path === 'condition' ? 'Condition-first path' : path === 'patient' ? 'Patient-first path' : '';
    /* Sample box additions take priority — they're an explicit user choice from
       the Clinical Details drawer. Show those first, then quiz context. */
    const boxIds = S().get('sampleBox', []) || [];
    const boxLabels = boxIds.map((id) => (D().products[id] || {}).name).filter(Boolean);
    const parts = [...boxLabels, ...conds, ...stages, pathLabel].filter(Boolean);
    if (parts.length) {
      summaryEl.textContent = parts.join(' • ');
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
      btn.disabled = true;
      btn.textContent = 'Submitting…';

      /* Derive the actual product IDs the user would see in their recommendation
         (primaries + complementaries) so the marketing team can pack the right
         sample kit from the spreadsheet without re-running the matching logic. */
      const conds = S().get('conditions', []) || [];
      const stages = S().get('stages', []) || [];
      const primaryByCondition = D().primaryByCondition;
      const complementaryByCondition = D().complementaryByCondition;
      const primarySet = new Set();
      const complementarySet = new Set();
      conds.forEach((id) => {
        if (primaryByCondition[id]) primarySet.add(primaryByCondition[id]);
        (complementaryByCondition[id] || []).forEach((p) => complementarySet.add(p));
      });
      /* 45-55 / 55+ rule: always surface Meno AM+PM as secondary unless primary is meno */
      if (stages.includes('menoTrans') || stages.includes('postMeno')) complementarySet.add('meno');
      /* Don't double-count: anything that's already a primary shouldn't also list as complementary */
      primarySet.forEach((id) => complementarySet.delete(id));

      /* Products explicitly added from the Clinical Details drawer's
         "Add to sample box" CTA. Map IDs to product names so the marketing
         team gets a readable list in the spreadsheet. */
      const sampleBoxIds = S().get('sampleBox', []) || [];
      const sampleBoxNames = sampleBoxIds.map((id) => (D().products[id] || {}).name).filter(Boolean);

      const payload = {
        fullName: f.fullName.value.trim(),
        email: f.email.value.trim(),
        practiceName: f.practiceName.value.trim(),
        patientsPerMonth: f.patientsPerMonth.value.trim(),
        contactName: f.contactName.value.trim(),
        contactRole: f.contactRole.value.trim(),
        contactEmailPhone: f.contactEmailPhone.value.trim(),
        wantsKit: root.querySelector('#suggestKit').checked ? 'yes' : 'no',
        conditions: conds.join('|'),
        stages: stages.join('|'),
        path: S().get('path', '') || '',
        primaryProducts: [...primarySet].join('|'),
        complementaryProducts: [...complementarySet].join('|'),
        sampleBox: sampleBoxNames.join('|'),
        /* Kept for back-compat with the original spreadsheet header. */
        primaryRec: S().get('lastRec.primaryId', '') || '',
      };
      const res = await global.HV.submit.submitSampleForm(payload);
      if (res.ok) {
        S().set('lastSubmit', payload);
        location.hash = '#/thank-you';
      } else {
        btn.disabled = false;
        btn.textContent = 'Get Samples';
        alert('Submission failed — please try again.');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Thank-you
  // ---------------------------------------------------------------------------
  const thankYou = () => {
    const conds = (S().get('conditions', []) || [])
      .map((id) => (D().conditions.find((c) => c.id === id) || {}).label)
      .filter(Boolean);
    const stages = (S().get('stages', []) || [])
      .map((id) => (D().lifeStages.find((l) => l.id === id) || {}).label)
      .filter(Boolean);

    return /* html */ `
    <section class="view-enter ty-view">
      <div class="ty-hero">
        <img class="ty-hero__products" src="assets/img/hero-products.png" alt="Happy V product family"/>
      </div>
      <div class="ty-content">
        <h1 class="ty-title">Your sample kit is on its way</h1>
        <p class="ty-body">
          Here's what happens next: so your inbox is ready.
        </p>
        <a href="#/home" class="btn-primary ty-cta">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Back to start
        </a>
      </div>
    </section>`;
  };

  // ---------------------------------------------------------------------------
  // Registry
  // ---------------------------------------------------------------------------
  global.HV = global.HV || {};
  global.HV.views = {
    home: {render: home, init: homeInit},
    about: {render: about, init: null},
    'condition-first': {render: conditionFirst, init: conditionFirstInit},
    'narrow-stage': {render: narrowStage, init: narrowStageInit},
    'patient-first': {render: patientFirst, init: patientFirstInit},
    'narrow-condition': {render: narrowCondition, init: narrowConditionInit},
    recommendation: {render: recommendation, init: recommendationInit},
    comparison: {render: comparison, init: comparisonInit},
    'coming-soon': {render: comingSoonView, init: comingSoonInit},
    'sample-form': {render: sampleForm, init: sampleFormInit},
    'thank-you': {render: thankYou, init: null},
  };
})(window);
