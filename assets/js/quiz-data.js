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
        'PreforPro® bacteriophage prebiotic first destroys harmful bacteria from the inside out, clearing the way for 7 clinically studied probiotic strains to repopulate the vaginal microbiome. The probiotics then feed on glucose-rich prebiotics in the vaginal epithelial cells, producing Lactic Acid and Hydrogen Peroxide to create an acidic environment where good bacteria thrive and pathogens cannot.',
      proof: '7 strain-specific clinical studies showing efficacy in reducing BV recurrence by 73%.',
      detail:
        '7 probiotic strains: LA-14® (L. acidophilus, 8B CFU) · HN001™ (L. rhamnosus, 2B CFU) · CCFM1110™ (L. crispatus, 2B CFU) · HLG13™ (L. gasseri, 2B CFU) · HR7™ (L. reuteri, 2B CFU) · HN019™ (B. lactis, 3B CFU) · DE111® (B. subtilis, 1B CFU). PreforPro® bacteriophage prebiotic 15mg',
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

  /* --- Clinical Details drawer copy --------------------------------------------
     Per-product accordion sections + ingredient table for the right-side
     "Clinical Details" drawer. Copy is taken VERBATIM from the client's
     spreadsheet (Untitled spreadsheet (10).xlsx) — do not rewrite. */
  const clinicalByProduct = {
    prepro: {
      sections: [
        {
          label: 'Mechanism action',
          body: 'PreforPro® bacteriophage prebiotic first destroys harmful bacteria from the inside out, clearing the way for 7 clinically studied probiotic strains to repopulate the vaginal microbiome. The probiotics then feed on glucose-rich prebiotics in the vaginal epithelial cells, producing Lactic Acid and Hydrogen Peroxide to create an acidic environment where good bacteria thrive and pathogens cannot.',
        },
        {
          label: 'Strains',
          body: '7 probiotic strains: LA-14® (L. acidophilus, 8B CFU) · HN001™ (L. rhamnosus, 2B CFU) · CCFM1110™ (L. crispatus, 2B CFU) · HLG13™ (L. gasseri, 2B CFU) · HR7™ (L. reuteri, 2B CFU) · HN019™ (B. lactis, 3B CFU) · DE111® (B. subtilis, 1B CFU)\nPreforPro® bacteriophage prebiotic 15mg',
        },
      ],
      ingredients: {
        items: [
          'Biotin Lactobacillus acidophilus(as LA-14®)',
          'Bifidobacterium lactis(HN019™)',
          'Lactobacillus rhamnosus(as HN001™)',
          'Lactobacillus crispatus(as CCFM1110™)',
          'Lactobacillus gasseri(as HLG13™)',
          'Lactobacillus reuteri(as HR7™)',
          'Bacillus subtilis(as DE111®)',
          'PreforPro® (LH01, T4D, LL12 - Myoviridae, LL5 - Siphoviridae)',
        ],
        dosage: '2 capsules/day with food',
        substantiation: 'Strain-level studies',
      },
    },
    debloat: {
      sections: [
        {
          label: 'Mechanism action',
          body: '23 enzymes replenish what the body can no longer produce efficiently, reaching the stomach and small intestine before food to break down proteins, fats, carbs, fiber, and dairy at the source. This complete breakdown allows nutrients to absorb directly into the bloodstream, eliminating the gut discomfort caused by undigested food. The result is better nutrient absorption, less bloating, and more energy, with the digestive system working efficiently rather than struggling.',
        },
        {
          label: 'Enzymes',
          body: '23 digestive enzymes (Protease, Papain, Amylase, Lipase, Lactase + 18 more)\nGinger Extract\nPeppermint Extract\nSodium Bicarbonate',
        },
      ],
      ingredients: {
        items: ['Sodium', 'Ginger Extract (Zingiber officinale) (root)', 'Peppermint', 'Digestive & Debloat Enzymes'],
        dosage: '2 capsules/day with food',
        substantiation: 'Enzyme-level studies',
      },
    },
    cranberry: {
      sections: [
        {
          label: 'Mechanism action',
          body: "Pacran® cranberry first prevents E. coli from latching onto the urinary tract wall, stopping biofilm formation at the source. UClear® D-Mannose then attracts and binds to the detached bacteria's pili, trapping them onto the sugar molecule so the body can flush them out. Consistent daily use maintains this dual-action defense to prevent future infections from taking hold.",
        },
      ],
      ingredients: {
        items: ['Vitamin C', 'Cranberry Whole Fruit Powder (Pacran®)', 'D-Mannose', '(Uclear®)'],
        dosage: '2 capsules/day with food',
        substantiation: 'Patented and clinically studied',
      },
    },
    meno: {
      sections: [
        {
          label: 'Mechanism action',
          body: 'The AM capsule resets hormone metabolism and cortisol levels at the start of the day, while its effects carry through the afternoon to stabilize mood and manage heat and stress responses. As evening arrives, the PM capsule activates serotonin and melatonin precursors to ease the body into relaxation, while keeping cortisol spikes in check. Overnight, HMRlignan™ and Graminex® work during sleep to reduce night sweats, support vaginal health, and recalibrate estrogen levels, so the body fully recovers before the cycle repeats.',
        },
        {
          label: 'Key Actives',
          body: 'Graminex® G63® Flower Pollen Extract · HMRlignan™ Norway Spruce Lignans · Sensoril® Ashwagandha · Lifenol™ Hop Extract (AM) · 5-HTP (PM)',
        },
      ],
      ingredients: {
        items: [
          'AM: Supports estrogen metabolism (DIM/Genistein), reduces cortisol (Sensoril®), hot flash suppression (HMRlignan™/Lifenol™), detox (BroccoRaphanin®)',
          'PM: Serotonin/melatonin precursor (5-HTP), sleep/relaxation (Magnesium/Zinc), night sweat reduction (Graminex®/Red Clover), cortisol modulation (Sensoril®)',
        ],
        dosage: '1 AM capsule with breakfast + 1 PM capsule 30 min before bed',
        substantiation: '5 patented branded ingredients with published citations',
      },
    },
    chlorophyll: {
      sections: [
        {
          label: 'Mechanism action',
          body: 'Sodium Copper Chlorophyllin acts as an antioxidant in the intestines, neutralizing harmful free radicals (ROS). It then binds strongly to toxins before they can be absorbed into the body, blocking them at the intestinal level. The result is full-body detoxification, reduced internal odor at the source, and overall immune support.',
        },
      ],
      ingredients: {
        items: ['Sodium Copper Chlorophyllin (Mulberry Leaf Extract)', 'Water', 'Glycerin', 'Spearmint Oil'],
        dosage: '2 droppers (2ml) daily in water',
        substantiation: 'Ingredient-level mechanism explanation, batch-specific COA',
      },
    },
    ovarian: {
      sections: [
        {
          label: 'Mechanism action',
          body: 'DIM, BroccoRaphanin®, and Folate support estrogen metabolism and liver detox pathways, while the clinically studied 40:1 Myo/D-Chiro Inositol ratio restores ovarian function, cycle regularity, and insulin sensitivity. CoQ10, Selenium, and ALA then provide antioxidant protection at the cellular level - safeguarding egg quality and supporting long-term reproductive wellness from the inside out.',
        },
        {
          label: 'Key Actives',
          body: 'Myo-Inositol + D-Chiro-Inositol (40:1 ratio), DIM, BroccoRaphanin®, CoQ10, Folate, ALA, Selenium, Chromium, Vitamin D3, Zinc',
        },
      ],
      ingredients: {
        items: [
          'Vitamin D (as Cholecalciferol)',
          'Folate (as L-5-Methyltetrahydrofolate Calcium)',
          'Zinc (as Zinc Citrate)',
          'Selenium (as Selenium Amino Acid Chelate)',
          'Chromium (as Chromium Picolinate)',
          'Myo-Inositol',
          'Alpha Lipoic Acid',
          'DI-Indolylmethane Powder',
          'Coenzyme Q-10',
          'D-Chiro-Inositol',
          'BroccoRaphanin® (Basic Broccoli Raffinate Seed Extract)',
        ],
        dosage: '1 scoop twice daily in water · powder format',
        substantiation: 'Third-party tested',
      },
    },
  };
  /* Attach clinical block to each product so the drawer can pull from p.clinical */
  Object.entries(clinicalByProduct).forEach(([id, c]) => {
    if (products[id]) products[id].clinical = c;
  });

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
    {id: 'perimenopause', label: 'Perimenopause Symptoms', icon: single('perimenopause.svg')},
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
      icon: single('condition-bloating.svg'),
    },
    /* Vaginal odor (treat as Body Odor in our data) — fish illustration */
    {
      id: 'odor',
      label: 'Body Odor Concerns',
      icon: single('condition-body-odor.svg') /* TODO: wire vaginal odor stack */,
    },
    /* Conditions not present in Figma chip frame — clean line approximations */
    {id: 'dryness', label: 'Vaginal Dryness', icon: single('condition-dryness.svg')},
    {id: 'postmeno', label: 'Post-menopause Maintenance', icon: single('condition-pm.svg')},
    {id: 'prenatal', label: 'Prenatal Gut Health', icon: single('condition-bv.svg')},
  ];

  const lifeStages = [
    {id: 'repro', label: 'Reproductive age', range: '(18-35)'},
    {id: 'periRepro', label: 'Reproductive / perimenopause', range: '(35-45)'},
    {id: 'menoTrans', label: 'Menopause transition', range: '(45-55)'},
    {id: 'postMeno', label: 'Post-menopause', range: '(55+)'},
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
    if (!pages.length && stageIds.length) {
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

    /* Skip path — neither conditions nor stages selected. Show every product
       as its own slide so the user can browse the full catalogue. */
    if (!pages.length) {
      pages = Object.values(products).map((p) => ({
        conditionId: null,
        conditionLabel: '',
        primary: p,
        complementary: [],
        context: '',
      }));
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
      /* Row format: [label, Happy V, comp1, comp2, ..., comp9].
         Copy is verbatim from the client's competitors.xlsx (2026-05-01) —
         do not rewrite. Inline artifacts ("Happy V", "CVS Pharmacy", etc.) are
         preserved 1:1 per the client's instruction. */
      rows: [
        [
          'Mechanism',
          'PreforPro® destroys harmful bacteria via bacteriophage action → probiotic strains repopulate → produce lactic acid + H₂O₂ → restore acidic vaginal pH → inhibit pathogens',
          '4 probiotic strains with independent RCT data: L. rhamnosus HN001 + L. acidophilus LA-14 restore vaginal pH and inhibit pathogens (100% inhibition in studies); SYNBIO® blend (L. rhamnosus IMC 501 + L. paracasei IMC 502) supports digestive regularity; L-theanine increases alpha brain wave activity for fast-acting calm within 1 hour. Triple-mechanism: vaginal + gut + stress in one capsule',
          '15 strains at 10B CFU produced using patented Biomsify® Technology (US Patent #10,119,116B2); includes cranberry and pomegranate fiber prebiotics for antioxidant and urinary tract support; Lactobacillus and Bifidobacterium strains optimize gut and vaginal health simultaneously CVS Pharmacy. "More is more" broad-spectrum approach : no per-strain CFU disclosed, cannot verify individual doses',
          '4 strains individually matching Happy V strains (LA-14, DE111, HN001, HN019) + PreforPro® bacteriophage prebiotic (15mg) : bacteriophage destroys harmful bacteria, then strains repopulate vaginal and gut microbiome. Delayed-release capsule format. Pelvic triangle positioning (gut + vagina + urinary). Same core mechanism as Happy V but missing crispatus, gasseri, reuteri strains',
          'Patented Clairvee Capsule™ Technology: probiotics suspended in liquid folate, sealed in a second outer capsule for delayed-release and optimal colonization. L. acidophilus BLA-14 (4B CFU) + L. rhamnosus BHN001 (1B CFU) maintain vaginal pH; Lactoferrin creates a protective biofilm working synergistically with lactobacilli; Folate supports healthy vaginal flora growth. 15-day cycling protocol delivers month-long protection Buena Vista Drug. ',
          'Intelliflora™ blend: 4 LBV-coded strains (L. crispatus LBV 88, rhamnosus LBV 96, gasseri LBV 150N, jensenii LBV 116) : the only blend with the 4 vaginal lactobacilli species most commonly found in healthy women; restores and maintains balance of good bacteria and yeast; clinically proven to optimize vaginal pH ',
          '3 strains (GR-1™, RC-14™, LBV 88) : GR-1 + RC-14 are the most published vaginal strains globally (30+ RCTs). 6B CFU total. Organic cranberry extract + DGL licorice root added for urinary + gut support. PreforPro® bacteriophage prebiotic at 15mg. However: total blend only disclosed at 6B CFU, no per-strain CFU split, proprietary blend label. Also includes cranberry without standardized PAC amounts',
          "5 strains at 15B CFU (4 LBV + 1 LGG). LGG has 1,000+ publications and strongest combined vaginal colonization data. LBV series (LBV 88, 96, 150N, 116) mirrors AZO's Intelliflora blend. Targets vaginal, digestive, urinary + immune health simultaneously ",
          '16 species identified at genus level only : zero strain IDs disclosed anywhere on label. 50B CFU "Women\'s Daily Probiotic Blend 248mg." Only Lacto (40B) + Bifido (10B) subtotals disclosed. Cannot link any species to published clinical data : worst label transparency in the set. Organic prebiotic fiber blend 317mg (potato resistant starch + gum arabic). NSF Certified, B Corp',
          '4 species only (L. acidophilus, L. rhamnosus, L. reuteri, L. fermentum) : no strain IDs disclosed; V-Positiv Probiotic Blend® 50mg (5B CFU) proprietary blend. XOS prebiotic 400mg. Consumer-facing claims only : zero strain IDs means zero linkable clinical evidence ',
        ],
        [
          'Strain Specificity',
          '7 strains, all with trademarked strain IDs: LA-14®, HN019™, HN001™, CCFM1110™, HLG13™, HR7™, DE111®',
          '4 strains with IDs: L. rhamnosus HN001, L. acidophilus LA-14®, plus SYNBIO® blend (L. rhamnosus IMC 501, L. paracasei IMC 502). Shares 2 strains with Happy V.',
          "15 strains with proprietary 'Bi' codes (Bi14, Bi19, Bi16, Bi17, Bi4, Bi13, Bi21, Bi29, Bi72, Bi76, Bi54, Bi81, Bi82, Bi32, Bi27). No trademarked/published strain designations.",
          '4 strains with IDs (LA-14, DE111®, HN001, HN019) : same Deerland strains as Happy V but missing crispatus, gasseri, reuteri',
          '2 strains only (BLA-14, BHN001) : very narrow spectrum, no crispatus, gasseri, or reuteri',
          '4 strains with LBV IDs (LBV 88, 96, 150N, 116) : all Morinaga series. Intelliflora™ blend.',
          '3 strains with IDs: GR-1™, RC-14™, LBV 88™ : narrow but the most published vaginal strains globally',
          "5 strains (4 LBV + LGG) : good strains but labeled 'Proprietary Probiotic Blend'",
          '16 species at genus + species ONLY : zero strain IDs anywhere on label',
          "4 species only : no strain IDs (just 'L. acidophilus, L. rhamnosus, L. reuteri, L. fermentum')",
        ],
        [
          'Clinical Evidence',
          'Each strain individually published in RCTs (LA-14, HN019, HN001, DE111 all have independent clinical data). PreforPro® has own RCT.',
          'HN001 + LA-14 have independent RCT data. SYNBIO® (IMC 501/502) has published vaginal colonization studies. Florastor brand has strong legacy clinical trust.',
          'Bi-series strain codes are proprietary to VagiBiom : cannot be cross-referenced to published literature. No linkable clinical evidence.',
          'Same individually published strains as Happy V (LA-14, DE111, HN001, HN019) : each has independent RCT data. PreforPro® also has own RCT.',
          "Proprietary trials only (4 studies, 170 women). BLA-14/BHN001 are Bonafide's own designations : limited independent replication.",
          "Blend-level studies on LBV combo (Intelliflora). Not individual strain-level evidence. 'Starts working within 24 hours' based on internal research.",
          'GR-1 + RC-14 = most published vaginal strains globally (30+ RCTs, Gregor Reid). LBV 88 has Morinaga vaginal data.',
          'LGG has 1000+ publications. LBV series has vaginal colonization data. Strongest combined published evidence base.',
          'Cannot assess : without strain IDs, impossible to link any species to published clinical data',
          'Consumer-facing claims only : no strain IDs = zero linkable clinical evidence',
        ],
        [
          'Label transparency',
          'Full disclosure : every strain ID + individual CFU on label. No proprietary blends. PreforPro® dosed at 15mg. Biotin at 30mcg.',
          'Strain IDs disclosed but dosed by weight (mg), not CFU. SYNBIO® is a branded proprietary blend with no per-strain breakdown. L-theanine 200mg also included (stress, not vaginal).',
          "Species + proprietary codes only. No CFU per strain. No total CFU. No trademarked extracts. Messy 'more-is-more' formula that collapses under clinical scrutiny.",
          'Strain IDs present but proprietary blend format : no per-strain CFU. Essentially a stripped-down Happy V formula. Less transparent, fewer strains, higher price.',
          'Per-strain CFU is good, but strain IDs are Bonafide-proprietary and not independently cross-referenceable. 15-day cycling adds complexity.',
          'Strain IDs disclosed (LBV codes) but wrapped in branded blend. No per-strain CFU. PreforPro® at 15mg. Consumer-functional, not ecosystem-oriented.',
          'Strain IDs disclosed : good. But no per-strain CFU. Also includes cranberry + DGL licorice without standardized amounts.',
          "Explicitly 'PROPRIETARY' blend on label. Strain names present but no per-strain dosing. Prebiotic also proprietary.",
          "Worst in set : species only, no strain IDs, no per-strain CFU. Despite 'Dr. Formulated' branding.",
          'No strain IDs, no per-strain CFU, proprietary blend name. Lowest info density in set. 100K+ monthly sales.',
        ],
        [
          'Price per day',
          '~$1.20',
          '~$0.97/day',
          '~$0.73/day',
          '~$0.91/day',
          '~$1.17/day',
          '~$0.97/day',
          '~$0.98/day',
          '~$0.91/day',
          '~$0.99/day',
          '~$1.07/day',
        ],
        [
          'Compliance',
          'Shelf-stable · 2 caps',
          '1 cap/day',
          '1 cap/day',
          '1 cap/day',
          '1 cap/day for 15 days on',
          '1 cap/day',
          '1 cap/day',
          '1 cap/day (vegetarian)',
          '1 cap/day.',
          '2 caps/day. ',
        ],
      ],
      competitors: [
        'Her Florastor — Balanced Benefits',
        'VagiBiom — Complete Feminine Balance',
        "Māge — Women's Probiotic",
        'Bonafide — Clairvee',
        'AZO — Dual Protection',
        "Physician's Choice — Vaginal Probiotic",
        "Culturelle — Women's 4-in-1",
        "Garden of Life — Dr. Formulated Women's",
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
          'Consumer perception only',
        ],
        [
          `Digestive Comfort & Gut Health Support*`,
          'Yes - supports digestive comfort, gut balance, and a healthy inflammatory response*',
          'Primarily focused on occasional bloating support',
          'Enzyme-focused; limited support beyond digestion',
          'Basic digestive support',
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
          'UClear® D-Mannose, Pacran® Cranberry Extract, Vitamin C',
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
      /* Verbatim from competitors.xlsx (2026-05-01). 8 competitors. */
      rows: [
        [
          'Mechanism',
          'AM capsule supports estrogen metabolism (DIM, BroccoRaphanin®, Genistein), reduces morning cortisol (Sensoril®), and suppresses vasomotor symptoms (HMRlignan™, Lifenol™). PM capsule activates serotonin/melatonin precursors (5-HTP, Magnesium, Zinc) for sleep, while Graminex® and Red Clover reduce night sweats and support vaginal health overnight. Circadian-aligned dual-system addressing 5 symptom domains simultaneously',
          'ERr 731® rhapontic rhubarb extract acts as a selective ERβ agonist - binds selectively to estrogen receptor beta in tissues regulating vasomotor symptoms, reducing hot flash frequency and severity without elevating circulating estrogen levels. Single-mechanism, single-active formula',
          'Same ERr 731® selective ERβ mechanism as above. Generic ashwagandha (not Sensoril® or KSM-66) added for stress/cortisol support - however at 125mg, it is below the clinical dose range (300–600mg) used in published studies. Magnesium oxide used, which is the lowest bioavailability form',
          'Purified cytoplasmic pollen extract (Sérélys®/PI-82 + GC-FEM) acts via non-hormonal thermoregulation - modulates the hypothalamic temperature regulation center without any estrogenic receptor activity whatsoever. No phytoestrogens. Mechanism is distinct from all other competitors - safe for women avoiding all estrogen-pathway activity including breast cancer survivors',
          'Succinate complex (ammonium succinate, calcium disuccinate, magnesium disuccinate) influences mitochondrial energy production and improves enzyme synthesis in hormone-producing glands like the ovaries CVS Pharmacy, supporting natural estradiol production. Also rounds up free radicals via antioxidant amino acids (glycine, glutamate). Proprietary compound - unusual mechanism with no direct botanical or phytoestrogenic activity',
          'Multi-botanical synergy: Black cohosh reduces hot flashes/night sweats via serotonin receptor modulation; Evening Primrose oil and Chaste Tree provide phytoestrogenic hormone balance; Schisandra regulates energy, stress levels, and increases disease resistance opositiv; Ginger and Rosemary provide antioxidant and anti-inflammatory support. Traditional herb-first approach, no standardized extracts, no patented ingredients',
          'Chaste tree stimulates the ovaries; Wild Yam and Black Cohosh moderate the natural decrease in female hormone production; Pycnogenol® (French maritime pine bark) supports a wide range of menopausal issues from hot flashes to skin elasticity to libido Happy V. Multi-botanical approach targeting both estrogen and progesterone pathways. Pycnogenol® is the only patented, trademarked ingredient',
          'ERr 731® rhapontic rhubarb extract acts as a selective estrogen receptor modulator, enabling symptom relief without elevating estrogen levels Happy V. Identical ERr 731® mechanism to Estroven Complete, but at practitioner-grade quality and manufacturing standards. Single active ingredient : addresses vasomotor symptoms only',
          "Multi-mechanism 5-capsule daily packet: DIM + rhubarb extract promote healthy estrogen metabolism to ease hot flashes and irritability; Sensoril® Ashwagandha reduces cortisol for stress and sleep support; Omega EPA+DHA supports brain, heart, and inflammatory response; L-Carnitine + Green Tea support metabolic health and inflammation; Berberine supports healthy blood glucose regulation Happy V. Most comprehensive multi-mechanism competitor : closest structural parallel to Happy V's multi-domain approach, but delivered as a multi-product packet rather than a purpose-built AM/PM system",
        ],
        [
          'Key ingredients',
          'AM: Graminex® G63® 160mg, DIM 100mg, LIFENOL™ Hop Extract 85mg, Sensoril® Ashwagandha 75mg, Genistein (Sophora japonica) 40mg, BroccoRaphanin® Plus 25mg, HMRlignan™ Norway Spruce Lignans 18mg, B6 (Pyridoxine) 1.7mg, B12 (Methylcobalamin) 2.4mcg. PM: Graminex® G63® 160mg, Red Clover Extract 75mg, 5-HTP 75mg, Sensoril® Ashwagandha 75mg, HMRlignan™ 25mg, B6 (P5P) 20mg, Magnesium (amino acid chelate) 25mg, Zinc (bisglycinate chelate) 18mg.',
          'Rhapontic Rhubarb Root Extract (Rheum rhaponticum L.) 4mg - providing 2.2mg rhaponticin + 1mg desoxyrhaponticin.',
          'Rhapontic Rhubarb Root Extract 4mg, Magnesium (as magnesium oxide) 50mg, Ashwagandha Root & Leaf Extract 125mg (generic : no KSM-66/Sensoril).',
          'Purified Cytoplasmic Blend 624mg: Pollen + Pistil Extract PI-82 (Sérélys®), Pollen Extract GC-FEM (Sérélys®). Chromium (Cr picolinate) 1000mcg, Royal Jelly 24mg (std. 5.8% 10-HDA).',
          'Amberen Proprietary Compound ~395mg (2 capsules): Ammonium Succinate, Calcium Disuccinate, Monosodium L-Glutamate, Glycine, Magnesium Disuccinate, Zinc Difumarate. Vitamin E 5mg.',
          'Evening Primrose Oil 200mg, Schizandra berry 160mg, Ginger rhizome 50mg, Black Cohosh root 40mg, Chaste Tree berry 40mg, Rosemary leaf 10mg.',
          'Chaste Tree extract (fruit) 200mg, Wild Yam (root) 200mg, Black Cohosh extract (root) 200mg, Pycnogenol® Pine Bark extract 60mg.',
          'Rhapontic Rhubarb Root Extract (ERr 731®) 4mg : providing 2.2mg rhaponticin + 1mg desoxy-rhaponticin.',
          '4-product daily packet (5 caps): Peri Multivitamin (31 vitamins/minerals + Sensoril® ashwagandha 125mg, L-Theanine 100mg, CoQ10 25mg), Omega DHA+EPA 375mg, Perimenopause Complex (Sensoril® 125mg, DIM 80mg, Rhubarb 4mg), Metabolic Support (L-Carnitine 100mg, Green Tea 50mg, Berberine 50mg).',
        ],
        [
          'Clinical evidence',
          'Graminex G63 has 2 RCTs for VMS. LIFENOL has published dose-finding data for hot flashes. Sensoril has 10+ RCTs. Genistein has bone + VMS data. 5-HTP has serotonin/sleep evidence. Each branded ingredient individually studied. No single product-level combo RCT.',
          'ERr 731 has multiple RCTs - up to 90% hot flash reduction in 12-week trials. Selective ERβ mechanism published.',
          'ERr 731 has RCT data. But generic ashwagandha at 125mg = sub-clinical. Mag oxide poorly absorbed. Two of three ingredients are underdosed or poor form.',
          '3 placebo-controlled trials (373+ women). 6,400+ practitioner recommendations. European safety history. But studies are Bonafide-funded.',
          'Amberen-funded studies only. Unusual mechanism. No independent replication. Contains MSG (monosodium L-glutamate).',
          'Traditional herbs with individual traditional-use data. Formula not clinically studied as a combo. Black cohosh + chasteberry at 40mg each = below many clinical doses.',
          'Pycnogenol has menopause-specific RCTs. Black cohosh + chasteberry well-studied individually. Wild yam = traditional use, limited clinical.',
          'Same ERr 731 evidence base as Estroven. Multiple RCTs. Selective ERβ mechanism.',
          'Own RCT (389 women, double-blind placebo-controlled, 6 weeks). Individual ingredients also independently studied.',
        ],
        [
          'Price per day',
          '~$1.70/day',
          '$0.71/day',
          '~$0.63/day',
          '$1.40/day',
          '~$0.83/day',
          '~$0.80/day',
          '~$1.60/day',
          '~$1.59/day',
          '~$2.31/day',
        ],
        [
          'Compliance',
          '2 caps/day (1 AM + 1 PM)',
          '1 caplet/day',
          '1 caplet/day',
          '2 tablets/day',
          '2 caps/day (1 orange + 1 white) after meal',
          '1 cap/day',
          '2 caps/day. Gluten-free',
          '1 tablet/day',
          '5 caps/day (1 daily packet)',
        ],
      ],
      competitors: [
        'Estroven — Complete Menopause Relief',
        'Estroven — Complete + Ashwagandha',
        'Bonafide — Relizen',
        'Amberen — Menopause Relief',
        "New Chapter — Every Woman's One Daily 40+",
        'Thorne — Meta-Balance',
        'Metagenics — Estrovera',
        'Perelel — Peri Support Pack',
      ],
    },
    ovarian: {
      product: products.ovarian,
      /* Verbatim from competitors.xlsx (2026-05-01). 7 competitors. */
      rows: [
        [
          'Mechanism',
          'Inositols restore hormonal signaling + insulin sensitivity · DIM/BroccoRaphanin®/Folate support estrogen metabolism · CoQ10/Selenium/ALA protect egg quality from oxidative stress',
          'Inositol 40:1 ratio for insulin + ovarian function + cycle regularity · DIM supports estrogen metabolism · Folate supports reproductive health. No antioxidant layer (no CoQ10, ALA, Selenium)',
          'Inositol 40:1 ratio restores cellular insulin signaling + supports ovarian function + menstrual regularity + healthy lipid levels. Inositol-only formula  no estrogen metabolism or antioxidant support',
          '40:1 inositol ratio for insulin/ovarian function + CoQ10 Phytosome (phospholipid-bound for superior absorption) supports mitochondrial egg quality + L-5-MTHF active methylated folate for reproductive health + Wild Blueberry/Green Tea/Pomegranate antioxidant stack targets oxidative stress on eggs',
          '40:1 inositol ratio for ovarian/insulin support + Alpha-Lactalbumin increases myo-inositol bioavailability + basic ubiquinone CoQ10 (lower absorption than phytosome) + Turmeric at sub-therapeutic dose (no piperine enhancer) + PQQ for mitochondrial support + Inulin prebiotic fiber',
          '40:1 inositol blend (individual MI/DCI split undisclosed) for ovarian/hormone support + effera™ precision-fermented human lactoferrin (Helaina) for immune and microbiome support + Quatrefolic® gold-standard methylfolate for reproductive health. Premium DTC positioning',
          '7:3.6 Myo/D-Chiro Inositol ratio (patent-protected by Biosearch SAU : diverges from the clinical 40:1 standard) for ovarian function + no additional active ingredients. Cleanest excipient profile (capsule + water only) but ratio question is a significant clinical concern',
          'Pure 40:1 inositol ratio (2,000mg MI + 50mg DCI) for ovarian health, cycle regularity, and insulin sensitivity. No additional ingredients : clean baseline formula competing on simplicity and price',
        ],
        [
          'Key ingredients',
          'Myo-Inositol + D-Chiro-Inositol (40:1 clinically validated ratio) · DIM (Diindolylmethane) · BroccoRaphanin® Broccoli Seed Extract · CoQ10 · Alpha Lipoic Acid (ALA) · Folate · Selenium · Chromium · Vitamin D3 · Zinc',
          'Myo-Inositol 2,000mg · D-Chiro-Inositol 50mg (40:1 ratio) · DIM 100mg · Folate (as Folic Acid) 680mcg DFE ',
          'Myo-Inositol 2,000mg + D-Chiro-Inositol 50mg ',
          'Myo-Inositol 2,000mg + D-Chiro-Inositol 50mg (40:1 ratio)\nFolate (L-5-MTHF) 667mcg DFE, CoQ10 Phytosome® (phospholipid complex) 150mg, Wild Blueberry Complex 50mg, Green Tea extract (decaf) 50mg, Pomegranate extract 25mg',
          '40:1 Inositol Blend 2,050mg (Myo 2,000mg + DCI 50mg)\nAlpha-10 Lactalbumin Absorption Complex 50mg, R-Lipoic Acid 50mg, CoQ10 (Ubiquinone) 100mg, Turmeric Extract (95% curcuminoids) 75mg, Inulin (chicory root) 1g, PQQ 10mg',
          '40:1 Inositol Blend 2,050mg (Myo + DCI : individual split not disclosed)\neffera™ Human Lactoferrin (Helaina Inc., precision-fermented) 100mg, Quatrefolic® Folate 400mcg DFE',
          'Myo-Inositol 550mg + D-Chiro-Inositol 150mg per capsule (7:3.6 ratio : NOT 40:1)\nNone : inositol only.',
          'Myo-Inositol 2,000mg + D-Chiro-Inositol 50mg (40:1 ratio)\nNone : pure inositol only.',
        ],
        [
          'Label Transparency',
          'Every ingredient individually dosed with bioavailable form specified (L-5-MTHF, zinc citrate, selenium chelate, chromium picolinate). No proprietary blends. BroccoRaphanin® trademarked.',
          'Every ingredient individually dosed. No proprietary blends. Transparent. But simpler formula with less premium ingredient forms.',
          'Two ingredients only. Fully dosed. No blends. Maximum transparency.',
          'Every ingredient individually dosed with form specified. Extraction methods noted. No proprietary blends. Clean label.',
          "Every ingredient individually dosed. No proprietary blends. Transparent. But 'more-is-more' formulation strategy.",
          "Grouped under branded 'Arrae IN401™ Blend' : inositol + lactoferrin bundled. MI/DCI individual split NOT broken out. Blend name obscures dosing.",
          'Two ingredients, individually dosed, trademarked source. No blends. Cleanest excipient profile (capsule + water only).',
          'Two ingredients, fully dosed. Methylcellulose capsule + rice flour. No blends, no branding.',
        ],
        [
          'Price per day',
          '$1.56/day',
          '~$1.17',
          '~$0.78/day',
          '$1.03/day',
          '~$1.78/day',
          '~$2.00/day',
          '~$0.86/day',
          '$0.73/day',
        ],
        [
          'Compliance',
          '1 scoop twice daily in water · powder format',
          '3 capsules once daily',
          '3 capsules once daily',
          '1 scoop (3.57g) powder',
          '1 stick pack (6.7g)/day',
          '1 stick pack/day. Powder.',
          '1 cap/serving',
          '4 capsules/serving (1-2 servings as needed)',
        ],
      ],
      competitors: [
        'O Positiv — FLO Ovarian Support',
        'Theralogix — Ovasitol',
        'Thorne — Ovary Good',
        'Fullwell — Inositol Stick Pack',
        'Arrae — IN401™ Inositol',
        'Pure Encapsulations — Inositol (Caronositol-Fertility™)',
        'Wholesome Story - Myo & D-Chiro Inositol',
      ],
    },
  };

  // --- Coming-soon products ---------------------------------------------------
  /* Final preorder copy from the client (2026-04-30).
     Each entry carries its own `clinical` block — same shape as the live
     products — so the Clinical Details drawer can render mechanism, strains,
     and the ingredients/dosage/substantiation table verbatim from the
     coming-soon-products.xlsx sheet the client supplied (2026-04-30). */
  const comingSoon = [
    {
      id: 'menopause-probiotic',
      name: 'Menopause Probiotic',
      tagline:
        'Strain-specific probiotic for the menopausal microbiome shift. Targets estrobolome and vaginal atrophy. Not another supplement - microbiome-first.',
      tags: ['Floradapt/KABP', 'ME-3', 'DR7 candidates'],
      bg: '#F6DDE2',
      preorder: true,
      clinical: {
        sections: [
          {
            label: 'Mechanism action',
            body: 'The Floradapt® core blend supports normal estrogen metabolism and recirculation via the gut-estrogen axis, while companion strains broaden microbiome support across GI resilience, oxidative balance, gut-vaginal ecology, and immune modulation. PreforPro® bacteriophage prebiotic selectively clears harmful bacteria to optimize the microbiome environment.',
          },
          {
            label: 'Strains',
            body: 'Limosilactobacillus fermentum ME-3 · Floradapt® Menopause Blend (L. brevis KABP-052, L. plantarum KABP-051, P. acidilactici KABP-021) · Saccharomyces boulardii CNCM I-745 · L. plantarum DR7 · L. acidophilus La-14 · L. rhamnosus HN001 · B. animalis subsp. lactis HN019 · L. crispatus CCFM1110 + PreforPro® bacteriophage blend',
          },
        ],
        ingredients: {
          items: [
            'Limosilactobacillus fermentum ME-3 (DSM 14241)',
            'Floradapt® Menopause blend (Levilactobacillus brevis KABP-052, Lactiplantibacillus plantarum KABP-051, Pediococcus acidilactici KABP-021)',
            'Saccharomyces boulardii CNCM I-745',
            'Lactiplantibacillus plantarum DR7',
            'Lactobacillus acidophilus La-14',
            'Lacticaseibacillus rhamnosus HN001',
            'Bifidobacterium animalis subsp. lactis HN019',
            'Lactobacillus crispatus CCFM1110',
            'PreforPro® bacteriophage blend (LH01, T4D, LL12 \u2013 Myoviridae; LL5 \u2013 Siphoviridae)',
          ],
          dosage: '2 capsules daily with food, 30 servings per container, shelf-stable',
          substantiation:
            'Floradapt® 3-strain blend studied in a 12-week RCT in healthy peri- and postmenopausal women - associated with higher circulating estrone and estradiol vs. placebo. Full HCP evidence dossier available on request.',
        },
      },
    },
    {
      id: 'prenatal-probiotic',
      name: 'Prenatal Probiotic',
      tagline:
        'Multi-strain prenatal probiotic for gut, vaginal, and maternal well-being. Supports healthy vaginal pH, digestive comfort, and immune resilience throughout pregnancy. Microbiome-first prenatal support.',
      tags: ['HN001', 'BB536', 'CCFM1110'],
      bg: '#F6DDE2',
      preorder: true,
      clinical: {
        sections: [
          {
            label: 'Mechanism action',
            body: 'Oral lactobacilli support gut-to-vaginal microbiome relevance, maintaining acidic vaginal pH and Lactobacillus dominance throughout pregnancy. Multi-species and interkingdom strains add bowel function, immune signaling, and gut-X axes support, while PreforPro® bacteriophage blend selectively shapes the microbiome through targeted pathogen clearing.',
          },
          {
            label: 'Strains',
            body: 'Bifidobacterium longum subsp. longum BB536 · Saccharomyces boulardii CNCM I-745 · L. plantarum DR7 · L. gasseri HLG13 · L. acidophilus LA-14 · B. animalis subsp. lactis Bi-07 · L. rhamnosus HN001 · B. subtilis DE111 · L. crispatus CCFM1110 · L. reuteri HR7 + PreforPro® bacteriophage blend',
          },
        ],
        ingredients: {
          items: [
            'Bifidobacterium longum subsp. longum BB536',
            'Saccharomyces boulardii CNCM I-745',
            'Lactiplantibacillus plantarum DR7',
            'Lactobacillus gasseri HLG13',
            'Lactobacillus acidophilus LA-14',
            'Bifidobacterium animalis subsp. lactis Bi-07',
            'Lacticaseibacillus rhamnosus HN001',
            'Bacillus subtilis DE111',
            'Lactobacillus crispatus CCFM1110',
            'Limosilactobacillus reuteri HR7',
            'PreforPro® bacteriophage blend (LH01, T4D, LL12 \u2013 Myoviridae; LL5 \u2013 Siphoviridae)',
          ],
          dosage: '2 capsules daily with food, 30 servings per container, shelf-stable',
          substantiation:
            'L. rhamnosus HN001 studied in pregnancy RCTs supporting maternal glucose, postpartum mood, and vaginal outcomes. L. acidophilus LA-14 + B. lactis Bi-07 found in late-pregnancy multistrain oral studies supporting digestive comfort. Full HCP evidence dossier available on request.',
        },
      },
    },
    {
      id: 'prenatal-seeding-booster',
      name: 'Prenatal Seeding Booster',
      tagline:
        'Maternal probiotic + HMO formulation for late pregnancy and early postpartum. Targets the colonization window to support early-life microbial exposure and infant microbiome development.',
      tags: ['LGG', 'B. infantis ISTILOS\u2122', "2'-FL HMO"],
      bg: '#F6DDE2',
      preorder: true,
      clinical: {
        sections: [
          {
            label: 'Mechanism action',
            body: "2'-Fucosyllactose (2'-FL HMO) pairs synbiotically with B. infantis ISTILOS\u2122 \u2014 a strain specialized for HMO utilization \u2014 to produce acetate, lactate, and short-chain fatty acids supporting infant gut ecosystem development. Maternal supplementation during the late third trimester supports early-life microbial exposure during the critical colonization window, with strain-specific transfer detectable in infant stool.",
          },
          {
            label: 'Strains',
            body: "Lacticaseibacillus rhamnosus GG · L. acidophilus LA-5® · B. animalis subsp. lactis BB-12® · B. longum subsp. infantis Bifin02 (ISTILOS\u2122) + Prebiotic: 2'-Fucosyllactose (2'-FL HMO) 1000mg",
          },
        ],
        ingredients: {
          items: [
            'Lacticaseibacillus rhamnosus GG (10B CFU)',
            'Lactobacillus acidophilus LA-5® (2B CFU)',
            'Bifidobacterium animalis subsp. lactis BB-12® (2B CFU)',
            'Bifidobacterium longum subsp. infantis Bifin02 ISTILOS\u2122 (0.1B CFU)',
            "2'-Fucosyllactose (2'-FL HMO) 1000mg",
          ],
          dosage: '1 sachet daily, 30 servings per container, 14.1B CFU guaranteed at end of shelf life, shelf-stable',
          substantiation:
            'B. infantis ISTILOS\u2122 detected in ~20\u201330% of infants in maternal seeding studies. L. rhamnosus GG detectable early in some studies. Strains have demonstrated favorable safety profiles in pregnancy RCTs. Designed for initiation in third trimester through at least 4 weeks postpartum. Full HCP evidence dossier available on request.',
        },
      },
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

  /* Patient-first flow step 2: the conditions shown are filtered by the
     life stage selected in step 1. Per client spec, each age band has a
     curated list of clinically relevant concerns. */
  const PATIENT_FIRST_LABELS = {
    bv: 'Recurrent BV / Vaginal Imbalance',
    uti: 'UTI',
    menopause: 'Menopause',
    perimenopause: 'Perimenopause Symptoms',
    cycle: 'Cycle Irregularity / PMS',
    bloating: 'Bloating / Digestive Discomfort',
    odor: 'Body Odor Concerns',
    dryness: 'Vaginal Dryness',
    postmeno: 'Post-menopause Maintenance',
    prenatal: 'Prenatal Gut Health',
  };
  const conditionsByStage = {
    repro: ['bv', 'uti', 'cycle', 'bloating', 'odor'],
    periRepro: ['bv', 'uti', 'cycle', 'perimenopause', 'bloating', 'odor'],
    menoTrans: ['menopause', 'uti', 'bloating', 'dryness'],
    postMeno: ['postmeno', 'uti', 'dryness'],
  };
  const patientConditionsForStage = (stageId) => {
    const ids = conditionsByStage[stageId] || primaryConditionIds;
    return ids.map((id) => withLabel(id, PATIENT_FIRST_LABELS[id])).filter(Boolean);
  };

  global.HV.data = {
    products,
    conditions,
    primaryConditions,
    complementaryConditions,
    patientConditionsForStage,
    lifeStages,
    primaryByCondition,
    complementaryByCondition,
    competitorMatrix,
    comingSoon,
    recommend,
    matchCount,
  };
})(window);
