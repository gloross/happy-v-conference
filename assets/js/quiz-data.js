/* Happy V — quiz data: products, conditions, life stages, recommendation map, competitor matrix */
(function (global) {
  'use strict';

  // --- 5 product catalogue ----------------------------------------------------
  const products = {
    prepro: {
      id: 'prepro',
      name: 'Prebiotic + Probiotic',
      shortName: 'Pre + Pro',
      tagline: 'Maintains vaginal pH and restores gut health',
      rating: 4.8,
      reviews: 3603,
      strains: '7 probiotic strains + PreforPro® bacteriophage prebiotic',
      dosage: '2 capsules/day with food',
      mechanism: 'PreforPro® destroys harmful bacteria via bacteriophage action → probiotic strains repopulate → produce lactic acid + H₂O₂ → restore acidic vaginal pH → inhibit pathogens.',
      proof: '7 strain-specific clinical studies showing efficacy in reducing BV recurrence by 73%.',
      detail: 'L. crispatus CCFM1110™, L. reuteri HR7™, L. gasseri HLG13™, L. acidophilus LA-14®, L. rhamnosus HN001™, B. lactis HN019™, +1 additional. 10 billion CFU per capsule.',
      img: 'assets/img/prepro.png',
      bg: '#E3EDF6',
    },
    cranberry: {
      id: 'cranberry',
      name: 'Cranberry Pills',
      shortName: 'Cranberry',
      tagline: 'Supports urinary tract health and prevents UTIs',
      rating: 4.7,
      reviews: 1820,
      strains: 'UClear® D-Mannose 500mg · Pacran® Cranberry 500mg · Vitamin C 90mg',
      dosage: '2 capsules daily with water',
      mechanism: 'Pacran® prevents E. coli adhesion to bladder wall · D-Mannose binds E. coli pili so the body flushes bound bacteria · Vitamin C acidifies urine to limit bacterial growth.',
      proof: 'Patented and clinically studied actives at full clinical dose.',
      detail: 'Only formula pairing patented UClear® D-Mannose + Pacran® cranberry in one capsule — dual-mechanism vs. single-mechanism competitors.',
      img: 'assets/img/cranberry.png',
      bg: '#FBE6E6',
    },
    debloat: {
      id: 'debloat',
      name: 'Debloat + Digest',
      shortName: 'Debloat',
      tagline: 'Reduces bloating and supports digestion',
      rating: 4.6,
      reviews: 1102,
      strains: '23 clinically supported enzymes · Ginger · Peppermint · Sodium Bicarbonate',
      dosage: '1–2 capsules before largest/most challenging meals',
      mechanism: 'Enzymes break down proteins, fats, carbs, fiber, dairy, starches · Ginger and peppermint soothe gut inflammation and cramping · Sodium bicarbonate neutralizes acid and heartburn.',
      proof: 'Enzyme-level clinical studies. Anti-inflammatory and anti-spasmodic.',
      detail: 'Only women\'s digestive formula with 23 enzymes plus a botanical soothing layer and acid relief — vs. competitors with 6–16 enzymes and no botanicals.',
      img: 'assets/img/debloat.png',
      bg: '#DEF1EA',
    },
    chlorophyll: {
      id: 'chlorophyll',
      name: 'Liquid Chlorophyll',
      shortName: 'Chlorophyll',
      tagline: 'Detoxifies the body and eliminates unwanted body odors',
      rating: 4.5,
      reviews: 612,
      strains: 'Sodium Copper Chlorophyllin 100mg',
      dosage: '2 droppers (2ml) daily in water',
      mechanism: 'Sodium Copper Chlorophyllin binds toxins in intestines, blocking absorption · acts as antioxidant against reactive oxygen species · neutralizes odor-causing compounds internally.',
      proof: 'Ingredient-level mechanism explanation, batch-specific COA. Physician + RD + Gynecologist endorsed.',
      detail: '2× the dose of the closest same-format competitor. Spearmint flavor.',
      img: 'assets/img/chlorophyll.png',
      bg: '#DEF1EA',
    },
    meno: {
      id: 'meno',
      name: 'Menopause Relief AM + PM',
      shortName: 'Meno AM+PM',
      tagline: 'Hormone-free relief for hot flashes and night sweats',
      rating: 4.7,
      reviews: 942,
      strains: '5 patented branded ingredients (Graminex®, HMRlignan™, Sensoril®, Lifenol™, 5-HTP)',
      dosage: '1 AM capsule with breakfast + 1 PM capsule 30 min before bed',
      mechanism: 'AM: estrogen metabolism (DIM/Genistein), cortisol reduction (Sensoril®), hot flash suppression (HMRlignan™/Lifenol™), detox (BroccoRaphanin®). PM: serotonin/melatonin precursor (5-HTP), sleep/relaxation (Magnesium/Zinc), night sweat reduction (Graminex®/Red Clover).',
      proof: '5 patented ingredient forms with cited clinical studies.',
      detail: 'Only AM/PM circadian-aligned dual-capsule menopause system. Addresses 5 symptom domains simultaneously.',
      img: 'assets/img/meno.png',
      bg: '#F6DDE2',
    },
  };

  // --- Conditions / life stages ----------------------------------------------
  const conditions = [
    { id: 'bv',         label: 'Recurrent BV / Vaginal Imbalance', icon: '🌸' },
    { id: 'uti',        label: 'UTI Prevention',                   icon: '💧' },
    { id: 'menopause',  label: 'Menopause',                        icon: '🌙' },
    { id: 'perimenopause', label: 'Perimenopause Symptoms',        icon: '🌗' },
    { id: 'cycle',      label: 'Cycle Irregularity / PMS',         icon: '🔄' },
    { id: 'bloating',   label: 'Bloating / Digestive Discomfort',  icon: '🍵' },
    { id: 'odor',       label: 'Body Odor Concerns',               icon: '🍃' },
    { id: 'dryness',    label: 'Vaginal Dryness',                  icon: '💎' },
    { id: 'postmeno',   label: 'Post-menopause Maintenance',       icon: '🌿' },
    { id: 'prenatal',   label: 'Prenatal Gut Health',              icon: '🤰' },
  ];

  const lifeStages = [
    { id: 'repro',      label: 'Reproductive age',          range: '(18-35)' },
    { id: 'periRepro',  label: 'Reproductive / perimenopause', range: '(35-45)' },
    { id: 'menoTrans',  label: 'Menopause transition',      range: '(45-55)' },
    { id: 'postMeno',   label: 'Post-menopause',            range: '(55+)' },
    { id: 'pregnancy',  label: 'Pregnant / postpartum',     range: '' },
  ];

  // --- Primary product recommendation by "what are we solving for" -----------
  // (See ACOG event presentation.xlsx -> 'logic' sheet)
  const primaryByCondition = {
    bv:            'prepro',
    odor:          'prepro',     // vaginal odor / dysbiosis -> pre pro
    dryness:       'meno',       // (also pre-pro complementary, see below)
    uti:           'cranberry',
    menopause:     'meno',
    perimenopause: 'meno',
    postmeno:      'meno',
    cycle:         null,         // 'ovarian' product not in current line — fall back to debloat
    bloating:      'debloat',
    prenatal:      'debloat',
  };

  // --- Complementary mapping --------------------------------------------------
  const complementaryByCondition = {
    uti:        ['cranberry'],
    cycle:      ['debloat'],     // 'ovarian' not in line — substitute with debloat
    bloating:   ['debloat'],
    odor:       ['chlorophyll'],
    prenatal:   ['debloat'],
    postmeno:   ['meno'],
    dryness:    ['meno', 'prepro'],
    bv:         ['prepro'],
    menopause:  ['meno'],
    perimenopause: ['meno'],
  };

  // --- Recommend ---------------------------------------------------------------
  // Returns { primary, complementary[], supportive[], context }
  function recommend({ conditions: condIds = [], stages: stageIds = [], primaryConditionId = null } = {}) {
    // Figure out the primary product:
    // 1. If user explicitly chose a single solving-for condition, use that.
    // 2. Else, take the first condition in their selection.
    // 3. If only stages are selected (no conditions), pick a reasonable default for that stage.
    let primary = null;
    let primaryConditionLabel = null;

    const primaryId = primaryConditionId || condIds[0];
    if (primaryId && primaryByCondition[primaryId]) {
      primary = primaryByCondition[primaryId];
      primaryConditionLabel = (conditions.find(c => c.id === primaryId) || {}).label;
    }

    const isMenoStage = stageIds.includes('menoTrans') || stageIds.includes('postMeno');
    const stageImpliesMeno = isMenoStage;

    // Stage-only fallback
    if (!primary) {
      if (stageImpliesMeno) primary = 'meno';
      else primary = 'prepro'; // sensible default, vaginal+gut foundation
    }

    // Build complementary: union of mapped products across selected conditions,
    // minus primary itself.
    const compSet = new Set();
    condIds.forEach(c => {
      (complementaryByCondition[c] || []).forEach(p => compSet.add(p));
    });

    // Always add Meno AM+PM as secondary if stage 45+ AND primary is not menopause-related
    if (stageImpliesMeno && primary !== 'meno') compSet.add('meno');

    compSet.delete(primary); // primary is shown separately

    const complementary = [...compSet].slice(0, 3).map(id => products[id]).filter(Boolean);

    // Supportive bucket = "everything else worth showing"
    const shown = new Set([primary, ...complementary.map(p => p.id)]);
    const supportive = Object.values(products).filter(p => !shown.has(p.id));

    // Build context tag: "Recurrent BV + Age 18-35" style
    const stageLabel = stageIds.length
      ? stageIds.map(s => (lifeStages.find(l => l.id === s) || {}).range).filter(Boolean).join(', ').replace(/[()]/g, '')
      : '';
    const contextParts = [primaryConditionLabel, stageLabel ? 'Age ' + stageLabel : null].filter(Boolean);

    return {
      primary: products[primary],
      complementary,
      supportive,
      context: contextParts.join(' + '),
      primaryConditionId: primaryId,
      stageIds,
    };
  }

  // --- Live counter for "X matching products" ---------------------------------
  // Intentionally rough — the real product line is small, so this just rewards
  // adding filters with a believable number derived from condition×stage matches.
  function matchCount({ conditions: c = [], stages: s = [] } = {}) {
    const base = 5;
    const bonus = (c.length || 0) * 2 + (s.length ? 1 : 0);
    return Math.max(1, base + bonus);
  }

  // --- Competitor data per product (for Compare screen) -----------------------
  // Each product has a list of competitor entries with the same row schema.
  const competitorMatrix = {
    prepro: {
      product: products.prepro,
      rows: [
        ['Strain Specificity',  '7 strains',                     '9 strains, lower per-strain dosing', '4 strains',   '4 strains'],
        ['Clinical evidence',   'Strain-level studies',          'Consumer perception only',           'Blend-level only', 'Consumer-facing claims only'],
        ['Prebiotic',           'PreforPro® (phage)',            'Fiber-based',                        'Fiber-based', 'Fiber-based'],
        ['Label transparency',  'Full disclosure',               '"Complexes" — no per-strain CFU',    'Strain IDs but no per-strain CFU', 'No per-strain CFU'],
        ['Price per day',       '~$1.20',                        '~$0.83',                             '~$1.06',      '~$1.07'],
        ['Compliance',          'Shelf-stable · 2 caps',         '1 cap/day, shelf-stable',            '1 cap/day, shelf-stable', '2 caps/day, shelf-stable'],
      ],
      competitors: ['Love Wellness — Good Girl Probiotics', 'AZO — Complete Feminine Balance', 'O Positiv — URO Vaginal Probiotic'],
    },
    debloat: {
      product: products.debloat,
      rows: [
        ['Enzyme specificity',  '23 clinically supported enzymes', '6 digestive enzymes',             '14 enzymes',  '16 enzymes'],
        ['Clinical evidence',   'Enzyme-level studies',          'Consumer perception only',           'Mechanism-based, no RCTs', 'Third-party tested'],
        ['Anti-inflam / soothing', 'Yes',                        'Targets water retention',            'None — enzymes only', 'Yes'],
        ['Label transparency',  'Full disclosure',               'CA Prop 65 warning',                 'Full disclosure', 'Full disclosure'],
        ['Price per day',       '~$1.33',                        '~$0.82',                             '~$0.43/cap',  '~$0.28/cap'],
        ['Compliance',          'Before largest meals',          '1–2 caps after meal',                '1 cap/meal',  '1 cap/meal'],
      ],
      competitors: ['Love Wellness — Bye Bye Bloat', 'Enzymedica — Digest Gold®', 'Physician\'s Choice — Digestive Enzymes'],
    },
    cranberry: {
      product: products.cranberry,
      rows: [
        ['Mechanism',           'Anti-adhesion + flush + acidify', 'Biofilm cleansing only',           'No D-Mannose mechanism', 'PAC-only anti-adhesion'],
        ['Clinical evidence',   'Patented and clinically studied', 'Mechanism-based',                  'Patented and clinical', 'DMAC/A2 validated'],
        ['Active ingredients',  '3 actives at clinical dose',     '5 actives',                          '4 actives',   '1 active'],
        ['Label transparency',  'Full disclosure',                'Full disclosure',                    'Full disclosure', 'Full disclosure'],
        ['Price per day',       '~$0.83',                         '~$1.17',                             '~$0.61',      '~$1.50'],
        ['Compliance',          '2 caps/day with water',          '2 caps/day with water',              '2 caps/day with water', '1 cap/day'],
      ],
      competitors: ['Uquora — Defend', 'AZO — Cranberry Caplets', 'Ellura — Urinary Tract Health'],
    },
    chlorophyll: {
      product: products.chlorophyll,
      rows: [
        ['Clinical evidence',   'Mechanism + batch-specific COA', 'Research-validated',                 'Third-party verified', 'No'],
        ['Active ingredients',  'Sodium Copper Chlorophyllin 100mg', '132mg Chlorophyllin + 5.6mg Cu',  '50mg Sodium Copper Chl', '50mg Sodium Copper Chl'],
        ['Label transparency',  'Full disclosure',                'Full disclosure',                    'Full disclosure', 'Full disclosure'],
        ['Price per day',       '~$0.83',                         '~$0.81',                             '~$0.57',      '~$0.39'],
        ['Compliance',          'Once daily in water',            '2 tbsp daily, refrigerated',         '2ml in water',  '2ml in 8oz water'],
      ],
      competitors: ['Nature\'s Way — Chlorofresh®', 'MaryRuth Organics — Vegan Chlorophyll', 'Double Wood — Liquid Chlorophyll'],
    },
    meno: {
      product: products.meno,
      rows: [
        ['Format',              'AM/PM dual-capsule system',     'Single formula',                     'Single formula', '2 tabs/day, no AM/PM'],
        ['Key actives',         '5 patented branded ingredients', '1 (ERr 731® Rhubarb)',              '1 (Cytoplasmic Blend)', '1 (RemiSure® Black Cohosh)'],
        ['Clinical evidence',   '5 patents w/ cited studies',     '2-year safety study',                '3 placebo-controlled trials', '35+ studies, 13k+ women'],
        ['Hormone-free',        'Yes',                            'Yes',                                'Yes',          'Yes'],
        ['Price per day',       '~$1.70',                         '~$1.30',                             '~$1.27',      '~$0.57'],
        ['Compliance',          '2 caps/day (AM + PM)',           '1 caplet/day',                       '2 tabs once daily', '2 tabs/day'],
      ],
      competitors: ['Estroven — Multi-Symptom Relief', 'Relizen — Hot Flash & Night Sweat', 'Remifemin'],
    },
  };

  // --- Coming-soon products ---------------------------------------------------
  const comingSoon = [
    {
      id: 'menopause-probiotic',
      name: 'Menopause Probiotic',
      tagline: 'Strain-specific probiotic formulated for the menopausal microbiome shift',
      tags: ['Floradapt/KABP', 'ME-3', 'DR7 candidates'],
      bg: '#F6DDE2',
    },
    {
      id: 'pregnancy-probiotic',
      name: 'Pregnancy Probiotic',
      tagline: 'Targeted strains for prenatal vaginal and gut health',
      tags: ['L. rhamnosus GR-1®', 'L. reuteri RC-14®'],
      bg: '#E3EDF6',
    },
    {
      id: 'libido-support',
      name: 'Libido Support',
      tagline: 'Hormone-free formula for desire, mood and energy',
      tags: ['Maca', 'Shatavari', 'KSM-66®'],
      bg: '#DEF1EA',
    },
  ];

  global.HV = global.HV || {};
  global.HV.data = {
    products,
    conditions,
    lifeStages,
    primaryByCondition,
    complementaryByCondition,
    competitorMatrix,
    comingSoon,
    recommend,
    matchCount,
  };
})(window);
