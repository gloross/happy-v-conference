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
      mechanism:
        'PreforPro® destroys harmful bacteria via bacteriophage action → probiotic strains repopulate → produce lactic acid + H₂O₂ → restore acidic vaginal pH → inhibit pathogens.',
      proof: '7 strain-specific clinical studies showing efficacy in reducing BV recurrence by 73%.',
      detail:
        '7 probiotic strains: LA-14® (L. acidophilus, 8B CFU), HN001™ (L. rhamnosus, 2B CFU), CCFM1110™ (L. crispatus, 2B CFU), HLG13™ (L. gasseri, 2B CFU), HR7™ (L. reuteri, 2B CFU), HN019™ (B. lactis, 3B CFU), DE111® (B. subtilis, 1B CFU), PreforPro® bacteriophage prebiotic 15mg',
      differentiation:
        'Only formula combining phage-based prebiotic (no bloating) + 7 vaginal-specific strains with individual subspecies IDs + Biotin for vaginal mucosa - no proprietary blend masking',
      studies: 'Yes',
      img: 'assets/img/products/happyv-prebiotic-probiotic.jpg',
      bg: '#A6CDEC',
      bgGradient: 'linear-gradient(180deg, #A6CDEC 0%, #D4E5F5 100%)',
    },
    cranberry: {
      id: 'cranberry',
      name: 'Cranberry Pills',
      shortName: 'Cranberry',
      tagline: 'Supports urinary tract health and promotes long-term wellness',
      rating: 4.7,
      reviews: 1820,
      strains: 'UClear® D-Mannose 500mg · Pacran® Cranberry 500mg · Vitamin C 90mg',
      dosage: '2 capsules daily with water',
      mechanism:
        'Pacran® prevents E. coli adhesion to bladder wall → D-Mannose binds E. coli pili → body flushes bound bacteria out · Vitamin C acidifies urine to limit bacterial growth.',
      proof: 'Patented and clinically studied actives at full clinical dose.',
      detail: 'UClear® D-Mannose 500mg. Pacran® Cranberry Extract 500mg. Vitamin C 90mg',
      differentiation:
        'Only formula pairing patented UClear® D-Mannose + Pacran® cranberry in one capsule - dual-mechanism vs. single-mechanism competitors; 500mg of each at full clinical dose',
      studies: 'Yes',
      img: 'assets/img/products/happyv-cranberry.jpg',
      bg: '#F186B1',
      bgGradient: 'linear-gradient(180deg, #F4B6D2 0%, #FCD7E7 100%)',
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
      mechanism:
        'Enzymes break down proteins, fats, carbs, fiber, dairy, starches · Ginger and peppermint soothe gut inflammation and cramping · Sodium bicarbonate neutralizes acid and heartburn.',
      proof: 'Enzyme-level clinical studies. Anti-inflammatory and anti-spasmodic.',
      detail:
        '23 digestive enzymes (Protease, Papain, Amylase, Lipase, Lactase + 18 more). Ginger Extract. Peppermint Extract. Sodium Bicarbonate',
      differentiation:
        "Only women's digestive formula with 23 enzymes + botanical soothing layer (Ginger + Peppermint) + acid relief (Sodium Bicarbonate) - vs. competitors with 6–16 enzymes, no botanicals, no acid support",
      studies: 'Yes',
      img: 'assets/img/products/happyv-debloat.jpg',
      bg: '#DEF1EA',
      bgGradient: 'linear-gradient(180deg, #BFE3D7 0%, #E6F5EE 100%)',
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
      mechanism:
        'Sodium Copper Chlorophyllin binds toxins in intestines → blocks absorption → excreted · Acts as antioxidant against Reactive Oxygen Species · Neutralizes odor-causing compounds internally.',
      proof: 'Ingredient-level mechanism explanation, batch-specific COA. Physician + RD + Gynecologist endorsed.',
      detail: 'Sodium Copper Chlorophyllin 100mg',
      differentiation:
        '2x the dose of closest same-format competitor. Spearmint flavor. Physician + RD + Gynecologist endorsed',
      studies: 'Yes',
      img: 'assets/img/products/happyv-chlorophyll.jpg',
      bg: '#ABD7D4',
      bgGradient: 'linear-gradient(180deg, #ABD7D4 0%, #E5F6F5 100%)',
    },
    ovarian: {
      id: 'ovarian',
      name: 'Ovarian Support',
      shortName: 'Ovarian',
      tagline: 'Hormone balance for cycle regularity & PMS',
      rating: 4.6,
      reviews: 540,
      strains: 'Myo-Inositol · D-Chiro-Inositol · Vitex · Vitamin D3',
      dosage: '1 scoop twice daily in water · powder format',
      mechanism:
        'Inositols restore hormonal signaling + insulin sensitivity · DIM/BroccoRaphanin®/Folate support estrogen metabolism · CoQ10/Selenium/ALA protect egg quality from oxidative stress',
      proof: 'Inositol-level studies for PCOS / cycle regularity. Clinically dosed actives.',
      detail:
        'Myo-Inositol + D-Chiro-Inositol (40:1 ratio) · DIM · BroccoRaphanin® · CoQ10 · ALA · Folate · Selenium · Chromium · Vitamin D3 · Zinc',
      differentiation:
        '40:1 inositol ratio: 88% of PCOS women resumed ovulation within 35 days · improved IVF egg quality + pregnancy rates · reduced OHSS risk · BroccoRaphanin® patented with published sulforaphane research',
      studies: 'No',
      img: 'assets/img/products/happyv-ovarian.jpg',
      bg: '#919ADC',
      bgGradient: 'linear-gradient(180deg, #919ADC 0%, #D0D4F4 100%)',
    },
    meno: {
      id: 'meno',
      name: 'Menopause Relief AM + PM',
      shortName: 'Meno AM+PM',
      tagline: 'Hormone balance, hot flash & night sweat support',
      rating: 4.7,
      reviews: 942,
      strains: '5 patented branded ingredients (Graminex®, HMRlignan™, Sensoril®, Lifenol™, 5-HTP)',
      dosage: '1 AM capsule with breakfast + 1 PM capsule 30 min before bed',
      mechanism:
        'AM: estrogen metabolism (DIM/Genistein), cortisol reduction (Sensoril®), hot flash suppression (HMRlignan™/Lifenol™), detox (BroccoRaphanin®). PM: serotonin/melatonin precursor (5-HTP), sleep/relaxation (Magnesium/Zinc), night sweat reduction (Graminex®/Red Clover).',
      proof: '5 patented ingredient forms with cited clinical studies.',
      detail: `AM:
Graminex® G63® 160mg
DIM 100mg
Lifenol™ 85mg
Sensoril® Ashwagandha 75mg
Genistein 40mg
BroccoRaphanin® 25mg
HMRlignan™ 18mg
B6
B12\n
PM:
Graminex® G63® 160mg
Red Clover 75mg
5-HTP 75mg
Sensoril® Ashwagandha 75mg
HMRlignan™ 18mg
Magnesium
Zinc
B6`,
      differentiation:
        'Only AM/PM circadian-aligned dual-capsule menopause system. 5 patented ingredient forms with cited clinical studies. Addresses 5 symptom domains simultaneously (vasomotor, sleep, cortisol/mood, estrogen metabolism, urinary/vaginal)',
      studies: 'Yes',
      img: 'assets/img/products/happyv-meno.jpg',
      bg: '#F4B6D2',
      bgGradient: 'linear-gradient(180deg, #919ADC 0%, #D0D4F4 100%)',
    },
  };

  // --- Conditions / life stages ----------------------------------------------
  /* Icon stacks reproduce Figma's exact composition: each chip icon is a 56×56
     container with absolutely-positioned <img>s using Figma's inset percentages.
     Sub-SVGs were exported from the Figma desktop MCP server. */
  const ICONBASE = 'assets/img/icons/';
  const stack = (parts) =>
    `<span class="iconstack" style="position:relative;display:block;width:56px;height:56px;overflow:hidden;">` +
    parts
      .map(
        (p) =>
          `<span style="position:absolute;inset:${p.inset};${p.wrap || ''}"><img src="${ICONBASE}${p.f}" style="position:absolute;inset:0;width:100%;height:100%;display:block;${p.imgT || ''}" alt=""/></span>`,
      )
      .join('') +
    `</span>`;
  const single = (file) => `<img src="${ICONBASE}${file}" width="56" height="56" alt="" style="display:block;"/>`;

  /* Catalogue of every condition we render anywhere. Page 1 of the quiz uses
     `primaryConditionIds`, page 2 uses `complementaryConditionIds` — both
     subsets of `conditions`. (Per ACOG event presentation.xlsx, logic tab.) */
  const primaryConditionIds = ['bv', 'uti', 'menopause', 'perimenopause', 'cycle', 'bloating', 'odor'];
  const complementaryConditionIds = ['uti', 'cycle', 'bloating', 'odor', 'prenatal', 'postmeno', 'dryness', 'bv'];
  const conditions = [
    {id: 'bv', label: 'Recurrent BV / Vaginal Imbalance', icon: single('condition-bv.svg')},
    {id: 'uti', label: 'UTI Prevention', icon: single('condition-uti.svg')},
    {id: 'menopause', label: 'Menopause', icon: single('condition-menopause.svg')},
    {id: 'perimenopause', label: 'Perimenopause Symptoms', icon: single('condition-menopause.svg')},
    /* Cycle Irregularity / PMS — Layer_1 in Figma (12 strokes from cycle-1..11) */
    {
      id: 'cycle',
      label: 'Cycle Irregularity / PMS',
      icon: stack([
        {f: 'cycle-1.svg', inset: '0 2.25% 43.36% 41.11%'},
        {f: 'cycle-2.svg', inset: '30.09% 27.14% 66.39% 66.01%'},
        {f: 'cycle-3.svg', inset: '11.93% 35.22% 83.95% 53.93%'},
        {f: 'cycle-4.svg', inset: '11.93% 14.8% 83.95% 74.35%'},
        {f: 'cycle-5.svg', inset: '18.37% 15.34% 71.87% 74.9%'},
        {f: 'cycle-5.svg', inset: '18.37% 35.77% 71.87% 54.48%'},
        {f: 'cycle-6.svg', inset: '41.08% 20.44% 53.85% 59.3%'},
        {f: 'cycle-7.svg', inset: '28.27% 42.41% 61.54% 49.46%'},
        {f: 'cycle-8.svg', inset: '81.75% 60.46% 14.41% 29.74%'},
        {f: 'cycle-9.svg', inset: '53.64% 27.14% 17.83% 61.4%'},
        {f: 'cycle-10.svg', inset: '9.67% 35.67% 0 2.24%'},
        {f: 'cycle-11.svg', inset: '21.88% 38.54% 17.19% 22.99%'},
      ]),
    },
    /* Bloating / GI motility — Capa_1 in Figma (8 strokes + 1 rotated piece) */
    {
      id: 'bloating',
      label: 'Bloating / Digestive Discomfort',
      icon: stack([
        {f: 'gi-1.svg', inset: '35.31% 6.32% 0 81.07%'},
        {f: 'gi-2.svg', inset: '0 12.24% 68.21% 78.12%'},
        {f: 'gi-3.svg', inset: '45.77% 48.54% 48.53% 48.54%'},
        {f: 'gi-4.svg', inset: '41.56% 81.07% 0 6.31%'},
        {f: 'gi-5.svg', inset: '0 78.12% 61.93% 12.23%'},
        {f: 'gi-6.svg', inset: '72.76% 11.05% 0 23.7%'},
        {f: 'gi-7.svg', inset: '72.76% 79.16% 20.02% 11.05%'},
        {f: 'gi-8.svg', inset: '62.11% 16% 20.58% 16%'},
        {f: 'gi-9.svg', inset: '25.23% 18.42% 15.59% 6.03%', wrap: 'transform: rotate(-67.13deg);'},
      ]),
    },
    /* Vaginal odor (treat as Body Odor in our data) — fish illustration */
    {id: 'odor', label: 'Body Odor Concerns', icon: single('condition-uti.svg') /* TODO: wire vaginal odor stack */},
    /* Conditions not present in Figma chip frame — clean line approximations */
    {id: 'dryness', label: 'Vaginal Dryness', icon: single('condition-menopause.svg')},
    {id: 'postmeno', label: 'Post-menopause Maintenance', icon: single('condition-menopause.svg')},
    {id: 'prenatal', label: 'Prenatal Gut Health', icon: single('condition-bv.svg')},
  ];

  const lifeStages = [
    {id: 'repro', label: 'Reproductive age', range: '(18-35)'},
    {id: 'periRepro', label: 'Reproductive / perimenopause', range: '(35-45)'},
    {id: 'menoTrans', label: 'Menopause transition', range: '(45-55)'},
    {id: 'postMeno', label: 'Post-menopause', range: '(55+)'},
    {id: 'pregnancy', label: 'Pregnant / postpartum', range: ''},
  ];

  // --- Primary product recommendation by "what are we solving for" -----------
  // (See ACOG event presentation.xlsx -> 'logic' sheet)
  /* PAGE 1 (primary): "What are you solving for?" → main product per ACOG.xlsx logic tab */
  const primaryByCondition = {
    bv: 'prepro',
    uti: 'cranberry',
    menopause: 'meno',
    perimenopause: 'meno',
    cycle: 'ovarian',
    bloating: 'debloat',
    odor: 'prepro',
  };

  /* PAGE 2 (complementary): "Narrow by condition" → complementary product(s) per ACOG.xlsx */
  const complementaryByCondition = {
    uti: ['cranberry'],
    cycle: ['ovarian'],
    bloating: ['debloat'],
    odor: ['chlorophyll'],
    prenatal: ['debloat'],
    postmeno: ['meno'],
    dryness: ['meno', 'prepro'],
    bv: ['prepro'],
  };

  // --- Recommend ---------------------------------------------------------------
  // Page 1 selections (`conditions`) drive each slide's primary product.
  // Page 2 selections (`complementary`) populate the secondary panel on every slide.
  // Each page-1 condition becomes one swiper slide; secondary panel is the same
  // pool on every slide minus that slide's primary.
  function recommend({conditions: condIds = [], stages: stageIds = []} = {}) {
    const isMenoStage = stageIds.includes('menoTrans') || stageIds.includes('postMeno');

    const stageLabel = stageIds.length
      ? 'Age ' +
        stageIds
          .map((s) => (lifeStages.find((l) => l.id === s) || {}).range)
          .filter(Boolean)
          .join(', ')
          .replace(/[()]/g, '')
      : '';

    /* Secondary pool: union of every selected condition's complementary mapping
       PLUS Meno AM+PM when 45-55 / 55+ stage (per ACOG.xlsx logic-tab).
       Each slide subtracts its own primary so we don't show duplicates. */
    const secondaryPool = new Set();
    condIds.forEach((id) => (complementaryByCondition[id] || []).forEach((p) => secondaryPool.add(p)));
    if (isMenoStage) secondaryPool.add('meno');

    const pageFor = (conditionId) => {
      const cond = conditions.find((c) => c.id === conditionId);
      const primaryId = primaryByCondition[conditionId];
      const primary = products[primaryId];
      if (!primary) return null;

      const slideSet = new Set(secondaryPool);
      slideSet.delete(primaryId); // never duplicate the main product
      const complementary = [...slideSet].map((id) => products[id]).filter(Boolean);

      const contextParts = [cond?.label, stageLabel].filter(Boolean);
      return {
        conditionId,
        conditionLabel: cond?.label || '',
        primary,
        complementary,
        context: contextParts.join(' • '),
      };
    };

    let pages = condIds.map(pageFor).filter(Boolean);

    // Stage-only fallback: no conditions but stages selected → single page
    if (!pages.length) {
      const fallbackPrimaryId = isMenoStage ? 'meno' : 'prepro';
      pages = [
        {
          conditionId: null,
          conditionLabel: '',
          primary: products[fallbackPrimaryId],
          complementary: isMenoStage ? [] : [products.cranberry, products.debloat].filter(Boolean),
          context: stageLabel || 'Recommended for your patient',
        },
      ];
    }

    return {
      pages,
      stageLabel,
      primary: pages[0]?.primary,
      complementary: pages[0]?.complementary || [],
      context: pages[0]?.context || '',
    };
  }

  // --- Live counter for "X matching products" ---------------------------------
  // Real catalog count: products from the Happy V line that map to the user's
  // page 1 (primary) + page 2 (complementary) selections per ACOG.xlsx logic tab.
  function matchCount({conditions: condIds = [], stages: stageIds = []} = {}) {
    if (!condIds.length && !stageIds.length) return 0;
    const set = new Set();
    condIds.forEach((id) => {
      if (primaryByCondition[id]) set.add(primaryByCondition[id]);
      (complementaryByCondition[id] || []).forEach((p) => set.add(p));
    });
    if (stageIds.includes('menoTrans') || stageIds.includes('postMeno')) set.add('meno');
    if (!condIds.length && !set.size && stageIds.length) set.add('prepro');
    return set.size;
  }

  // --- Competitor data per product (for Compare screen) -----------------------
  // Each product has a list of competitor entries with the same row schema.
  const competitorMatrix = {
    prepro: {
      product: products.prepro,
      rows: [
        /* Row format: [label, Happy V, Love Wellness, AZO, O Positiv] (per ACOG event presentation.xlsx) */
        ['Strain Specificity', '7 strains', '9 strains but lower per strain dosing (1/day)', '4 strains', '4 strains'],
        [
          'Clinical evidence',
          'Strain-level studies',
          'Consumer perception only, not strain-level clinical studies',
          'Blend-level clinical studies, not individual strain-level studies',
          'Consumer-facing claims only',
        ],
        ['Prebiotic', 'PreforPro® (phage)', 'Fiber-based prebiotic', 'Fiber-based prebiotic', 'Fiber-based prebiotic'],
        [
          'Label transparency',
          'Full disclosure',
          'Strains listed as "complexes" - no subspecies strain IDs, no per-strain CFU disclosure; total CFU listed as 1B',
          'Strain IDs disclosed (LBV codes) but no per-strain CFU breakdown',
          'No per-strain CFU disclosure, no strain ID codes',
        ],
        ['Price per day', '~$1.20', '~$0.83', '~$1.06', '~$1.07'],
        [
          'Compliance',
          'Shelf-stable · 2 caps',
          '1 cap/day, shelf-stable',
          '1 cap/day, shelf-stable',
          '2 caps/day, shelf-stable',
        ],
      ],
      competitors: [
        'Love Wellness — Good Girl Probiotics',
        'AZO — Complete Feminine Balance',
        'O Positiv — URO Vaginal Probiotic',
      ],
    },
    debloat: {
      product: products.debloat,
      rows: [
        ['Enzyme specificity', '23 clinically supported enzymes', '6 digestive enzymes', '14 enzymes', '16 enzymes'],
        [
          'Clinical evidence',
          'Enzyme-level studies',
          'Consumer perception only',
          'Mechanism-based differentiation, no RCTs',
          'Third-party tested for purity and potency',
        ],
        [
          `
          Anti-inflammatory
Anti-spasmodic
Soothing effects for cramping, nausea, IBS symptoms, acid/heartburn relief`,
          'Yes',
          'Primarily targets water retention and hormonal bloating',
          'None — enzymes-only formula',
          'Yes',
        ],
        [
          'Label transparency',
          'Full disclosure',
          'Carries a California Prop 65 warning for cancer and reproductive harm',
          'Full disclosure',
          'Full disclosure',
        ],
        ['Price per day', '~$1.33/day', '~$0.82/day', '~$0.43/cap', '~$0.28/cap'],
        [
          'Compliance',
          '1–2 capsules before largest or most challenging meals; shelf-stable',
          '1–2 capsules after a meal or before bedtime; shelf-stable',
          '1 capsule with each meal; more may be taken as needed; shelf-stable',
          '1 capsule before, during, or after a meal; shelf-stable;',
        ],
      ],
      competitors: [
        'Love Wellness — Bye Bye Bloat',
        'Enzymedica — Digest Gold®',
        "Physician's Choice — Digestive Enzymes",
      ],
    },
    cranberry: {
      product: products.cranberry,
      rows: [
        [
          'Mechanism',
          'Prevents biofilm formation and bacterial adhesion, flushes the bacteria out, creates an acidic urinary environment',
          'Biofilm cleansing and bladder wall integrity, no mechanism to flush out E. coli or prevent bacterial adhesion',
          'No D-Mannose binding and flushing mechanism',
          'PAC-only anti-adhesion',
        ],
        [
          'Clinical evidence',
          'Patented and clinically studied',
          'Evidence cited is mechanism-based',
          'Patented and clinically studied',
          'Scientifically validated DMAC/A2 method',
        ],
        [
          'Active ingredients',
          '3 clinically dosed actives: UClear® D-Mannose, Pacran® Cranberry Extract, Vitamin C',
          '5 active ingredients: D-Mannose, Vitamin D3, Turmeric Root Extract, Green Tea Leaf Extract, Black Pepper Fruit Powder',
          '4 active ingredients: Pacran® Cranberry, Vitamin C, Calcium, Bacillus Coagulans',
          '1 active ingredient: Gikacran® concentrated cranberry fruit juice extract ',
        ],
        ['Label transparency', 'Full disclosure', 'Full disclosure', 'Full disclosure', 'Full disclosure'],
        ['Price per day', '~$0.83', '~$1.17', '~$0.61', '~$1.50'],
        [
          'Compliance',
          '2 caps/day with water; shelf-stable',
          '2 caps/day with water; shelf-stable',
          '2 caps/day with water; shelf-stable',
          '1 cap/day; shelf-stable',
        ],
      ],
      competitors: ['Uquora — Defend', 'AZO — Cranberry Caplets', 'Ellura — Urinary Tract Health'],
    },
    chlorophyll: {
      product: products.chlorophyll,
      rows: [
        [
          'Clinical evidence',
          'Ingredient-level mechanism explanation, batch-specific COA',
          'Research-validated',
          'Third-party verified purity',
          'No',
        ],
        [
          'Active ingredients',
          'Sodium Copper Chlorophyllin 100mg',
          '132mg Chlorophyllin + 5.6mg Cu',
          '50mg Sodium Copper Chlorophyllin',
          '50mg Sodium Copper Chlorophyllin',
        ],
        ['Label transparency', 'Full disclosure', 'Full disclosure', 'Full disclosure', 'Full disclosure'],
        ['Price per day', '~$0.83', '~$0.81', '~$0.57', '~$0.39'],
        [
          'Compliance',
          'Once daily, mixed into water or taken directly',
          '2 tablespoons daily, in refrigerator',
          '2ml into water or directly by mouth',
          '2ml daily in 8oz water',
        ],
      ],
      competitors: [
        "Nature's Way — Chlorofresh®",
        'MaryRuth Organics — Vegan Chlorophyll',
        'Double Wood — Liquid Chlorophyll',
      ],
    },
    meno: {
      product: products.meno,
      rows: [
        [
          'Format',
          'AM/PM dual-capsule system',
          'Single formula',
          'Single formula',
          '2 tablets daily but no AM-PM difference in formulas',
        ],
        [
          'Key ingredients',
          `Graminex® G63® Flower Pollen Extract (160mg AM+PM). HMRlignan™ Norway Spruce Lignans (18mg AM+PM). Sensoril® Ashwagandha (75mg AM+PM). Lifenol™ Hop Extract (85mg AM). 5-HTP (75mg PM)`,
          'Single active: ERr 731® Rhapontic Rhubarb Root Extract',
          'Single active: Purified Cytoplasmic Blend 320mg',
          'Single active: RemiSure® Black Cohosh Extract 20 mg',
        ],
        [
          'Clinical evidence',
          '5 patented branded ingredients with published citations',
          '2-year safety study',
          'Three separate placebo-controlled clinical trials',
          '35+ clinical studies, 13,000+ women, 60+ years',
        ],
        ['Hormone-free', 'Yes', 'Yes', 'Yes', 'Yes'],
        ['Price per day', '~$1.70', '~$1.30', '~$1.27', '~$0.57'],
        [
          'Compliance',
          '2 capsules daily (AM + PM), shelf stable',
          '1 caplet daily; shelf-stable',
          '2 tablets once daily, shelf-stable',
          '2 tablets daily, shelf-stable',
        ],
      ],
      competitors: ['Estroven — Multi-Symptom Relief', 'Relizen — Hot Flash & Night Sweat', 'Remifemin'],
    },
    ovarian: {
      product: products.ovarian,
      rows: [
        [
          'Mechanism',
          `Inositols restore hormonal signaling + insulin sensitivity. DIM/BroccoRaphanin®/Folate support estrogen metabolism. CoQ10/Selenium/ALA protect egg quality from oxidative stress`,
          'Inositol 40:1 ratio for insulin + ovarian function + cycle regularity. DIM supports estrogen metabolism. Folate supports reproductive health. No antioxidant layer (no CoQ10, ALA, Selenium)',
          'Inositol 40:1 ratio restores cellular insulin signaling + supports ovarian function + menstrual regularity + healthy lipid levels. Inositol-only formula  no estrogen metabolism or antioxidant support',
          'Inositol 40:1 ratio for insulin sensitivity + hormonal balance + ovarian health. Pure inositol formula only - no DIM, no estrogen detox, no antioxidant support',
        ],
        [
          'Key ingredients',
          'Myo-Inositol + D-Chiro-Inositol (40:1 clinically validated ratio). DIM (Diindolylmethane). BroccoRaphanin® Broccoli Seed Extract. CoQ10. Alpha Lipoic Acid (ALA). Folate. Selenium. Chromium. Vitamin D3. Zinc',
          'Myo-Inositol 2,000mg. D-Chiro-Inositol 50mg (40:1 ratio). DIM 100mg. Folate (as Folic Acid) 680mcg DFE ',
          'Myo-Inositol 2,000mg + D-Chiro-Inositol 50mg ',
          'Myo-Inositol 2,000mg + D-Chiro-Inositol 50mg (40:1 ratio) - 2 ingredients only; also available with MTHF Folate + Vitamin D3 in premium version ',
        ],
        ['Clinical evidence', 'Third-party tested', 'Third-party tested', 'No', 'Clean Label Project Certified'],
        ['Price per day', '', '~$1.17', '~$0.82', '~$0.57'],
        [
          'Compliance',
          '1 scoop twice daily in water. Powder format',
          '3 capsules once daily',
          '3 capsules once daily',
          '4 capsules daily ',
        ],
      ],
      competitors: [
        'O Positiv — FLO Ovarian Support',
        'Theralogix — Ovasitol',
        'Wholesome Story - Myo & D-Chiro Inositol',
      ],
    },
  };

  // --- Coming-soon products ---------------------------------------------------
  /* Only the Menopause Probiotic entry is from Figma. The other two slots are
     intentionally identical placeholders — the client will replace name,
     tagline, tags, and bg color when they have the real upcoming products. */
  const comingSoon = [
    {
      id: 'menopause-probiotic',
      name: 'Menopause Probiotic',
      tagline:
        'Strain-specific probiotic for the menopausal microbiome shift. Targets estrobolome and vaginal atrophy. Not another supplement — microbiome-first.',
      tags: ['Floradapt/KABP', 'ME-3', 'DR7 candidates'],
      bg: '#F6DDE2',
    },
    {
      id: 'placeholder-2',
      name: 'Menopause Probiotic',
      tagline:
        'Strain-specific probiotic for the menopausal microbiome shift. Targets estrobolome and vaginal atrophy. Not another supplement — microbiome-first.',
      tags: ['Floradapt/KABP', 'ME-3', 'DR7 candidates'],
      bg: '#F6DDE2',
    },
    {
      id: 'placeholder-3',
      name: 'Menopause Probiotic',
      tagline:
        'Strain-specific probiotic for the menopausal microbiome shift. Targets estrobolome and vaginal atrophy. Not another supplement — microbiome-first.',
      tags: ['Floradapt/KABP', 'ME-3', 'DR7 candidates'],
      bg: '#F6DDE2',
    },
  ];

  global.HV = global.HV || {};
  /* Page-specific labels per ACOG.xlsx logic-tab: same condition can appear with
     a different label depending on whether it's the "What are you solving for?"
     question (page 1) or the "Narrow by condition" question (page 2). */
  const PRIMARY_LABELS = {
    bv: 'Recurrent BV / Vaginal Imbalance',
    uti: 'UTI Prevention',
    menopause: 'Menopause',
    perimenopause: 'Perimenopause symptoms',
    cycle: 'Cycle irregularity',
    bloating: 'GI motility / Dysbiosis',
    odor: 'Vaginal odor / Dysbiosis',
  };
  const COMPLEMENTARY_LABELS = {
    uti: 'UTI',
    cycle: 'Cycle Irregularity',
    bloating: 'Bloating / Digestive discomfort',
    odor: 'Body Odor Concerns',
    prenatal: 'Prenatal Gut Health',
    postmeno: 'Post-menopause Maintenance',
    dryness: 'Vaginal Dryness',
    bv: 'Recurrent BV / Vaginal Imbalance',
  };
  const withLabel = (id, label) => {
    const base = conditions.find((c) => c.id === id);
    return base ? {...base, label} : null;
  };
  const primaryConditions = primaryConditionIds.map((id) => withLabel(id, PRIMARY_LABELS[id])).filter(Boolean);
  const complementaryConditions = complementaryConditionIds
    .map((id) => withLabel(id, COMPLEMENTARY_LABELS[id]))
    .filter(Boolean);

  global.HV.data = {
    products,
    conditions,
    primaryConditions,
    complementaryConditions,
    lifeStages,
    primaryByCondition,
    complementaryByCondition,
    competitorMatrix,
    comingSoon,
    recommend,
    matchCount,
  };
})(window);
