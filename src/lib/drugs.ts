export interface Drug {
  id: string;
  name: string;
  genericName: string;
  category: string;
  halfLife: number;        // hours (median)
  halfLifeRange?: [number, number]; // min-max hours
  typicalDose: string;
  frequency: string;
  tmax: number;            // hours to peak concentration
  bioavailability: number; // 0-1
  description: string;
  color: string;           // hex
}

// ── Pain Relief ────────────────────────────────────────────────────
// Warm amber-orange palette
const PAIN_COLORS = {
  acetaminophen: "#E07B39",
  ibuprofen:     "#E89C42",
  aspirin:       "#D45F2E",
  naproxen:      "#C44A1E",
};

// ── Stimulants / Social ────────────────────────────────────────────
// Muted brown / warm gold palette
const STIMULANT_COLORS = {
  caffeine:  "#8B6914",
  nicotine:  "#A07830",
  alcohol:   "#C4963A",
};

// ── Antibiotics ────────────────────────────────────────────────────
// Cool blue palette
const ANTIBIOTIC_COLORS = {
  amoxicillin:    "#3B82F6",
  azithromycin:   "#1D4ED8",
  ciprofloxacin:  "#6366F1",
};

// ── Heart / Cardiovascular ─────────────────────────────────────────
// Deep red / rose palette
const HEART_COLORS = {
  metoprolol:   "#DC2626",
  losartan:     "#B91C1C",
  amlodipine:   "#E11D48",
  lisinopril:   "#BE123C",
  warfarin:     "#9F1239",
};

// ── Metabolic ──────────────────────────────────────────────────────
// Green palette
const METABOLIC_COLORS = {
  metformin:      "#16A34A",
  atorvastatin:   "#15803D",
  levothyroxine:  "#166534",
};

// ── Mental Health ──────────────────────────────────────────────────
// Purple / violet palette
const MENTAL_COLORS = {
  sertraline:   "#9333EA",
  fluoxetine:   "#7C3AED",
  alprazolam:   "#6D28D9",
  lorazepam:    "#5B21B6",
  diazepam:     "#4C1D95",
  gabapentin:   "#A855F7",
};

// ── Allergy ────────────────────────────────────────────────────────
// Teal / cyan palette
const ALLERGY_COLORS = {
  cetirizine:      "#0891B2",
  diphenhydramine: "#0E7490",
  montelukast:     "#155E75",
};

// ── Stomach / GI ──────────────────────────────────────────────────
// Lime / yellow-green palette
const STOMACH_COLORS = {
  omeprazole: "#65A30D",
};

// ── Other ──────────────────────────────────────────────────────────
const OTHER_COLORS = {
  prednisone:  "#78716C",
  melatonin:   "#475569",
};

export const DRUGS: Drug[] = [
  // ── Stimulants ──────────────────────────────────────────────────
  {
    id: "caffeine",
    name: "Caffeine",
    genericName: "Caffeine",
    category: "Stimulant",
    halfLife: 5,
    halfLifeRange: [3, 7],
    typicalDose: "100mg",
    frequency: "As needed",
    tmax: 0.75,
    bioavailability: 1.0,
    description: "The world's most consumed psychoactive stimulant, found in coffee, tea, and energy drinks.",
    color: STIMULANT_COLORS.caffeine,
  },
  {
    id: "nicotine",
    name: "Nicotine",
    genericName: "Nicotine",
    category: "Stimulant",
    halfLife: 2,
    halfLifeRange: [1, 3],
    typicalDose: "2mg",
    frequency: "As needed",
    tmax: 0.17,
    bioavailability: 0.3,
    description: "Stimulant found in tobacco products; rapidly absorbed and eliminated.",
    color: STIMULANT_COLORS.nicotine,
  },
  {
    id: "alcohol",
    name: "Alcohol (Ethanol)",
    genericName: "Ethanol",
    category: "Stimulant",
    halfLife: 4.5,
    halfLifeRange: [3, 6],
    typicalDose: "14g (1 standard drink)",
    frequency: "As needed",
    tmax: 0.75,
    bioavailability: 0.8,
    description: "Metabolized primarily via zero-order kinetics; equivalent t½ ~4.5h for modeling.",
    color: STIMULANT_COLORS.alcohol,
  },

  // ── Pain Relief ──────────────────────────────────────────────────
  {
    id: "acetaminophen",
    name: "Acetaminophen (Tylenol)",
    genericName: "Acetaminophen / Paracetamol",
    category: "Pain Relief",
    halfLife: 2.5,
    halfLifeRange: [2, 3],
    typicalDose: "500mg",
    frequency: "Every 6 hours",
    tmax: 0.75,
    bioavailability: 0.85,
    description: "Common OTC analgesic and antipyretic; metabolized primarily in the liver.",
    color: PAIN_COLORS.acetaminophen,
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen (Advil)",
    genericName: "Ibuprofen",
    category: "Pain Relief",
    halfLife: 2,
    halfLifeRange: [1.5, 2.5],
    typicalDose: "400mg",
    frequency: "Every 6-8 hours",
    tmax: 1.5,
    bioavailability: 0.87,
    description: "NSAID used for pain, fever, and inflammation; short half-life requires frequent dosing.",
    color: PAIN_COLORS.ibuprofen,
  },
  {
    id: "aspirin",
    name: "Aspirin",
    genericName: "Acetylsalicylic acid",
    category: "Pain Relief",
    halfLife: 3.5,
    halfLifeRange: [2, 4.5],
    typicalDose: "325mg",
    frequency: "Every 4-6 hours",
    tmax: 1.0,
    bioavailability: 0.68,
    description: "Classic NSAID; the active metabolite salicylic acid has a 3–4h half-life at low doses.",
    color: PAIN_COLORS.aspirin,
  },
  {
    id: "naproxen",
    name: "Naproxen (Aleve)",
    genericName: "Naproxen sodium",
    category: "Pain Relief",
    halfLife: 14,
    halfLifeRange: [12, 17],
    typicalDose: "220mg",
    frequency: "Every 8-12 hours",
    tmax: 2.0,
    bioavailability: 0.95,
    description: "Long-acting NSAID; twice-daily dosing possible due to extended half-life.",
    color: PAIN_COLORS.naproxen,
  },

  // ── Antibiotics ──────────────────────────────────────────────────
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    genericName: "Amoxicillin",
    category: "Antibiotic",
    halfLife: 1,
    halfLifeRange: [0.75, 1.5],
    typicalDose: "500mg",
    frequency: "Every 8 hours",
    tmax: 1.5,
    bioavailability: 0.9,
    description: "Broad-spectrum penicillin antibiotic; short half-life requires 3× daily dosing.",
    color: ANTIBIOTIC_COLORS.amoxicillin,
  },
  {
    id: "azithromycin",
    name: "Azithromycin (Z-Pack)",
    genericName: "Azithromycin",
    category: "Antibiotic",
    halfLife: 68,
    halfLifeRange: [40, 96],
    typicalDose: "500mg",
    frequency: "Once daily (5-day course)",
    tmax: 2.5,
    bioavailability: 0.38,
    description: "Macrolide antibiotic with extremely long tissue half-life; enables once-daily 5-day dosing.",
    color: ANTIBIOTIC_COLORS.azithromycin,
  },
  {
    id: "ciprofloxacin",
    name: "Ciprofloxacin",
    genericName: "Ciprofloxacin HCl",
    category: "Antibiotic",
    halfLife: 4,
    halfLifeRange: [3.5, 5],
    typicalDose: "500mg",
    frequency: "Every 12 hours",
    tmax: 1.5,
    bioavailability: 0.7,
    description: "Fluoroquinolone antibiotic with broad-spectrum activity; used for UTIs and respiratory infections.",
    color: ANTIBIOTIC_COLORS.ciprofloxacin,
  },

  // ── Heart / Cardiovascular ────────────────────────────────────────
  {
    id: "metoprolol",
    name: "Metoprolol",
    genericName: "Metoprolol tartrate",
    category: "Heart",
    halfLife: 3.5,
    halfLifeRange: [3, 4],
    typicalDose: "50mg",
    frequency: "Every 12 hours",
    tmax: 1.5,
    bioavailability: 0.4,
    description: "Beta-1 selective blocker for hypertension and heart rate control; hepatically metabolized.",
    color: HEART_COLORS.metoprolol,
  },
  {
    id: "losartan",
    name: "Losartan",
    genericName: "Losartan potassium",
    category: "Heart",
    halfLife: 2,
    halfLifeRange: [1.5, 2.5],
    typicalDose: "50mg",
    frequency: "Once daily",
    tmax: 1.0,
    bioavailability: 0.33,
    description: "ARB for hypertension; active metabolite E-3174 has a longer half-life of ~6–9 hours.",
    color: HEART_COLORS.losartan,
  },
  {
    id: "amlodipine",
    name: "Amlodipine",
    genericName: "Amlodipine besylate",
    category: "Heart",
    halfLife: 35,
    halfLifeRange: [30, 50],
    typicalDose: "5mg",
    frequency: "Once daily",
    tmax: 6,
    bioavailability: 0.64,
    description: "Calcium channel blocker with very long half-life; once-daily dosing maintains stable levels.",
    color: HEART_COLORS.amlodipine,
  },
  {
    id: "lisinopril",
    name: "Lisinopril",
    genericName: "Lisinopril",
    category: "Heart",
    halfLife: 12,
    halfLifeRange: [11, 13],
    typicalDose: "10mg",
    frequency: "Once daily",
    tmax: 7,
    bioavailability: 0.25,
    description: "ACE inhibitor for hypertension and heart failure; renally excreted, once-daily dosing.",
    color: HEART_COLORS.lisinopril,
  },
  {
    id: "warfarin",
    name: "Warfarin",
    genericName: "Warfarin sodium",
    category: "Heart",
    halfLife: 40,
    halfLifeRange: [20, 60],
    typicalDose: "5mg",
    frequency: "Once daily",
    tmax: 4,
    bioavailability: 0.97,
    description: "Vitamin K antagonist anticoagulant with highly variable half-life; requires close INR monitoring.",
    color: HEART_COLORS.warfarin,
  },

  // ── Metabolic ────────────────────────────────────────────────────
  {
    id: "metformin",
    name: "Metformin",
    genericName: "Metformin HCl",
    category: "Metabolic",
    halfLife: 6,
    halfLifeRange: [4, 9],
    typicalDose: "500mg",
    frequency: "Twice daily with meals",
    tmax: 2.5,
    bioavailability: 0.5,
    description: "First-line oral antidiabetic; reduces hepatic glucose production with renal elimination.",
    color: METABOLIC_COLORS.metformin,
  },
  {
    id: "atorvastatin",
    name: "Atorvastatin (Lipitor)",
    genericName: "Atorvastatin calcium",
    category: "Metabolic",
    halfLife: 14,
    halfLifeRange: [10, 20],
    typicalDose: "20mg",
    frequency: "Once daily",
    tmax: 1.5,
    bioavailability: 0.14,
    description: "HMG-CoA reductase inhibitor for LDL cholesterol; the inhibitory effect outlasts its plasma half-life.",
    color: METABOLIC_COLORS.atorvastatin,
  },
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    genericName: "Levothyroxine sodium (T4)",
    category: "Metabolic",
    halfLife: 168,
    halfLifeRange: [144, 192],
    typicalDose: "100mcg",
    frequency: "Once daily (fasting)",
    tmax: 4,
    bioavailability: 0.7,
    description: "Synthetic thyroid hormone with a 7-day half-life; once-daily dosing maintains highly stable levels.",
    color: METABOLIC_COLORS.levothyroxine,
  },

  // ── Mental Health ────────────────────────────────────────────────
  {
    id: "sertraline",
    name: "Sertraline (Zoloft)",
    genericName: "Sertraline HCl",
    category: "Mental Health",
    halfLife: 26,
    halfLifeRange: [22, 36],
    typicalDose: "100mg",
    frequency: "Once daily",
    tmax: 6,
    bioavailability: 0.44,
    description: "SSRI antidepressant; requires ~5 days to reach steady state.",
    color: MENTAL_COLORS.sertraline,
  },
  {
    id: "fluoxetine",
    name: "Fluoxetine (Prozac)",
    genericName: "Fluoxetine HCl",
    category: "Mental Health",
    halfLife: 72,
    halfLifeRange: [48, 96],
    typicalDose: "20mg",
    frequency: "Once daily",
    tmax: 6,
    bioavailability: 0.72,
    description: "SSRI with an extremely long half-life; active metabolite norfluoxetine persists for weeks after stopping.",
    color: MENTAL_COLORS.fluoxetine,
  },
  {
    id: "alprazolam",
    name: "Alprazolam (Xanax)",
    genericName: "Alprazolam",
    category: "Mental Health",
    halfLife: 11,
    halfLifeRange: [6, 27],
    typicalDose: "0.5mg",
    frequency: "Three times daily",
    tmax: 1.5,
    bioavailability: 0.9,
    description: "Short-acting benzodiazepine for anxiety and panic disorder; moderate half-life, high dependence risk.",
    color: MENTAL_COLORS.alprazolam,
  },
  {
    id: "lorazepam",
    name: "Lorazepam (Ativan)",
    genericName: "Lorazepam",
    category: "Mental Health",
    halfLife: 12,
    halfLifeRange: [10, 20],
    typicalDose: "1mg",
    frequency: "Two to three times daily",
    tmax: 2,
    bioavailability: 0.93,
    description: "Intermediate-acting benzodiazepine for anxiety; no active metabolites, predictable elimination.",
    color: MENTAL_COLORS.lorazepam,
  },
  {
    id: "diazepam",
    name: "Diazepam (Valium)",
    genericName: "Diazepam",
    category: "Mental Health",
    halfLife: 43,
    halfLifeRange: [20, 100],
    typicalDose: "5mg",
    frequency: "Two to four times daily",
    tmax: 1.25,
    bioavailability: 0.97,
    description: "Long-acting benzodiazepine; accumulates significantly with repeat dosing due to very long half-life.",
    color: MENTAL_COLORS.diazepam,
  },
  {
    id: "gabapentin",
    name: "Gabapentin",
    genericName: "Gabapentin",
    category: "Mental Health",
    halfLife: 6,
    halfLifeRange: [5, 7],
    typicalDose: "300mg",
    frequency: "Three times daily",
    tmax: 3,
    bioavailability: 0.6,
    description: "Anticonvulsant and nerve pain agent; renal excretion, non-linear bioavailability at higher doses.",
    color: MENTAL_COLORS.gabapentin,
  },

  // ── Allergy ──────────────────────────────────────────────────────
  {
    id: "cetirizine",
    name: "Cetirizine (Zyrtec)",
    genericName: "Cetirizine HCl",
    category: "Allergy",
    halfLife: 8,
    halfLifeRange: [7, 10],
    typicalDose: "10mg",
    frequency: "Once daily",
    tmax: 1,
    bioavailability: 0.7,
    description: "Second-generation antihistamine; minimal sedation and once-daily dosing due to moderate half-life.",
    color: ALLERGY_COLORS.cetirizine,
  },
  {
    id: "diphenhydramine",
    name: "Diphenhydramine (Benadryl)",
    genericName: "Diphenhydramine HCl",
    category: "Allergy",
    halfLife: 4,
    halfLifeRange: [2.4, 9.3],
    typicalDose: "25mg",
    frequency: "Every 4-6 hours",
    tmax: 2,
    bioavailability: 0.72,
    description: "First-generation antihistamine; crosses blood-brain barrier causing sedation, used as sleep aid.",
    color: ALLERGY_COLORS.diphenhydramine,
  },
  {
    id: "montelukast",
    name: "Montelukast (Singulair)",
    genericName: "Montelukast sodium",
    category: "Allergy",
    halfLife: 5,
    halfLifeRange: [2.7, 5.5],
    typicalDose: "10mg",
    frequency: "Once daily (evening)",
    tmax: 3.5,
    bioavailability: 0.64,
    description: "Leukotriene receptor antagonist for asthma and allergic rhinitis; hepatically metabolized.",
    color: ALLERGY_COLORS.montelukast,
  },

  // ── Stomach / GI ────────────────────────────────────────────────
  {
    id: "omeprazole",
    name: "Omeprazole (Prilosec)",
    genericName: "Omeprazole",
    category: "Stomach",
    halfLife: 1,
    halfLifeRange: [0.5, 1.5],
    typicalDose: "20mg",
    frequency: "Once daily before meals",
    tmax: 2,
    bioavailability: 0.5,
    description: "Proton pump inhibitor; very short plasma half-life but pharmacological effect lasts 24–48h.",
    color: STOMACH_COLORS.omeprazole,
  },

  // ── Other ────────────────────────────────────────────────────────
  {
    id: "prednisone",
    name: "Prednisone",
    genericName: "Prednisone",
    category: "Other",
    halfLife: 3.5,
    halfLifeRange: [2, 4],
    typicalDose: "20mg",
    frequency: "Once daily (morning)",
    tmax: 2,
    bioavailability: 0.82,
    description: "Corticosteroid for inflammation and immune suppression; converted to prednisolone in the liver.",
    color: OTHER_COLORS.prednisone,
  },
  {
    id: "melatonin",
    name: "Melatonin",
    genericName: "Melatonin",
    category: "Other",
    halfLife: 0.5,
    halfLifeRange: [0.5, 1],
    typicalDose: "3mg",
    frequency: "30 minutes before sleep",
    tmax: 0.75,
    bioavailability: 0.3,
    description: "Endogenous sleep hormone; extremely short half-life, use smallest effective dose.",
    color: OTHER_COLORS.melatonin,
  },
];

export type CategoryKey =
  | "All"
  | "Stimulant"
  | "Pain Relief"
  | "Antibiotic"
  | "Heart"
  | "Metabolic"
  | "Mental Health"
  | "Allergy"
  | "Stomach"
  | "Other";

export const CATEGORIES: CategoryKey[] = [
  "All",
  "Stimulant",
  "Pain Relief",
  "Antibiotic",
  "Heart",
  "Metabolic",
  "Mental Health",
  "Allergy",
  "Stomach",
  "Other",
];
