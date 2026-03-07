import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacology Glossary",
  description:
    "A comprehensive pharmacology glossary covering 40+ terms: half-life, bioavailability, clearance, steady state, volume of distribution, and more. Plain-language definitions for patients and students.",
  openGraph: {
    title: "Pharmacology Glossary — HalfLife by Vibed Lab",
    description:
      "40+ pharmacokinetics and pharmacology terms explained clearly. From absorption to zero-order kinetics.",
    url: "https://halflife.vibed-lab.com/glossary",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pharmacology Glossary — HalfLife by Vibed Lab",
    description:
      "40+ pharmacokinetics terms explained clearly. Bioavailability, clearance, half-life, steady state, and more.",
  },
};

type GlossaryTerm = {
  term: string;
  abbr?: string;
  definition: string;
};

type GlossarySection = {
  letter: string;
  terms: GlossaryTerm[];
};

const glossarySections: GlossarySection[] = [
  {
    letter: "A",
    terms: [
      {
        term: "Absorption",
        definition:
          "The process by which a drug moves from its site of administration into the bloodstream. For oral drugs, absorption occurs primarily in the small intestine, where the drug crosses the gut wall and enters the portal circulation. The rate and extent of absorption determine how quickly a drug reaches therapeutic levels and are influenced by the drug's chemical properties, formulation, and physiological factors such as gut motility and pH.",
      },
      {
        term: "Active Metabolite",
        definition:
          "A pharmacologically active compound produced when the body chemically transforms a parent drug. Active metabolites can contribute to, or even be responsible for, the therapeutic effect and the side effects of a drug. For example, diazepam is metabolized to desmethyldiazepam, which itself has sedative activity and a longer half-life than the parent compound, prolonging the drug's clinical effect.",
      },
      {
        term: "ADME",
        definition:
          "An acronym summarizing the four main pharmacokinetic processes: Absorption, Distribution, Metabolism, and Elimination. ADME describes the complete journey of a drug through the body from the moment it is administered to the moment it is fully removed. Understanding ADME for a given drug is essential for predicting its onset of action, duration of effect, dosing requirements, and potential for drug interactions.",
      },
      {
        term: "Agonist",
        definition:
          "A drug or substance that binds to a receptor and activates it, producing a biological response similar to the endogenous ligand. Full agonists produce the maximum possible response when they occupy the receptor. Partial agonists bind to the same receptor but produce a submaximal response even at full receptor occupancy. Opioids like morphine are agonists at mu-opioid receptors.",
      },
      {
        term: "Antagonist",
        definition:
          "A drug that binds to a receptor but does not activate it, instead blocking the receptor and preventing other substances (agonists) from producing their effect. Antagonists have affinity for the receptor but no intrinsic efficacy. Naloxone, for example, is an opioid receptor antagonist used to reverse opioid overdose — it displaces opioids from their receptors without itself producing opioid effects.",
      },
      {
        term: "Area Under the Curve",
        abbr: "AUC",
        definition:
          "The integral of the concentration-time curve from time zero to infinity, representing the total drug exposure the body receives after a given dose. AUC is expressed in units such as ng·h/mL and is a primary measure of bioavailability. Two formulations of the same drug are considered bioequivalent when their AUC values fall within 80–125% of each other. AUC also reflects total drug clearance: AUC = Dose / Clearance.",
      },
    ],
  },
  {
    letter: "B",
    terms: [
      {
        term: "Bioavailability",
        definition:
          "The fraction of an administered dose that reaches the systemic circulation in an unchanged, pharmacologically active form. Intravenous administration yields 100% bioavailability by definition. Oral bioavailability is reduced by incomplete absorption from the gut and first-pass metabolism in the liver. For instance, oral nitroglycerin has near-zero bioavailability due to extensive first-pass metabolism, which is why it must be given sublingually or transdermally.",
      },
      {
        term: "Bioequivalence",
        definition:
          "The condition in which two formulations of the same drug — typically a brand-name product and a generic — produce statistically equivalent pharmacokinetic profiles (AUC and Cmax within 80–125% of each other) under the same conditions. Bioequivalence is the regulatory standard used to approve generic drugs, ensuring that switching between formulations will not produce clinically meaningful differences in drug exposure.",
      },
      {
        term: "Blood-Brain Barrier",
        abbr: "BBB",
        definition:
          "A highly selective semipermeable interface formed by specialized endothelial cells lining the capillaries of the brain. The BBB restricts the passage of most substances from the bloodstream into brain tissue, protecting the central nervous system from toxins and pathogens. Drugs that act on the brain must be able to cross the BBB, typically by being lipophilic (fat-soluble), small, and not rapidly pumped back out by efflux transporters like P-glycoprotein.",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        term: "Clearance",
        abbr: "CL",
        definition:
          "The volume of plasma from which a drug is completely removed per unit time, expressed in units such as L/h or mL/min. Clearance is the primary pharmacokinetic determinant of steady-state drug concentration and average exposure. Total body clearance is the sum of hepatic clearance (metabolism), renal clearance (urinary excretion), and any other elimination pathways. A drug with high clearance is eliminated rapidly; impaired organ function reduces clearance and can lead to drug accumulation.",
      },
      {
        term: "Cmax",
        definition:
          "The maximum (peak) concentration of a drug in the plasma after a dose is administered. Cmax depends on the dose, the rate of absorption, and the rate of distribution and elimination. It typically occurs at time Tmax and represents the highest drug exposure following a single dose. Excessively high Cmax values may indicate a risk of dose-dependent toxicity, while a Cmax below the minimum effective concentration means the dose may be subtherapeutic.",
      },
      {
        term: "Compartment Model",
        definition:
          "A mathematical representation that divides the body into one or more theoretical compartments to describe drug distribution and elimination. In a one-compartment model, the drug is assumed to distribute instantaneously and uniformly throughout the body. A two-compartment model adds a peripheral compartment (such as deep tissues) that equilibrates more slowly with the central compartment. More compartments increase model accuracy but also complexity.",
      },
      {
        term: "CYP450 Enzymes",
        definition:
          "A superfamily of heme-containing oxidative enzymes primarily located in the liver and small intestine that are responsible for metabolizing the majority of clinically used drugs. The CYP450 family includes isoforms such as CYP3A4 (responsible for ~50% of drug metabolism), CYP2D6, CYP2C9, and CYP2C19. Genetic polymorphisms in these enzymes create distinct metabolizer phenotypes (poor, intermediate, normal, ultrarapid), and drug-drug interactions frequently occur when one drug inhibits or induces another's CYP450 pathway.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Distribution",
        definition:
          "The reversible transfer of a drug from the systemic circulation into various body tissues and compartments after it enters the bloodstream. Distribution is governed by the drug's lipophilicity, molecular size, protein binding, and tissue binding affinity. Highly lipophilic drugs distribute widely into tissues (large volume of distribution), while hydrophilic drugs remain largely in the plasma. Distribution patterns influence the onset of action, duration of effect, and site of action of a drug.",
      },
      {
        term: "Dose-Response",
        definition:
          "The relationship between the amount of drug administered (or the concentration at the site of action) and the magnitude of the pharmacological effect it produces. Dose-response curves typically follow a sigmoidal shape, characterized by a threshold dose below which no effect is observed, an ascending linear phase, and a plateau at maximum effect (Emax). Understanding the dose-response relationship helps establish the therapeutic dose range and the margin of safety.",
      },
      {
        term: "Drug Interaction",
        definition:
          "A situation in which the pharmacokinetics or pharmacodynamics of one drug are altered by the concurrent presence of another drug, food, herb, or supplement. Pharmacokinetic interactions affect how much of a drug reaches its site of action (e.g., CYP450 inhibition increasing plasma levels). Pharmacodynamic interactions alter the drug's effect at its site of action (e.g., additive CNS depression from alcohol and benzodiazepines). Drug interactions can lead to toxicity or therapeutic failure.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "Elimination",
        definition:
          "The irreversible removal of a drug from the body through all pathways, including renal excretion (urinary elimination), hepatic metabolism, biliary excretion, exhalation, and minor routes such as sweat and saliva. Elimination is the terminal phase of the drug's time-concentration profile and is characterized by the elimination rate constant (ke) and half-life. The rate of elimination directly determines how frequently a drug must be dosed to maintain therapeutic concentrations.",
      },
      {
        term: "Elimination Rate Constant",
        abbr: "ke",
        definition:
          "A first-order rate constant representing the fraction of drug eliminated from the body per unit time, expressed in units of 1/time (e.g., h⁻¹). The elimination rate constant is mathematically related to half-life by the equation ke = 0.693 / t½. A larger ke indicates faster elimination. It is used to calculate the slope of the log-linear decline phase of the plasma concentration-time curve and is a key parameter in pharmacokinetic modeling.",
      },
      {
        term: "Enterohepatic Recirculation",
        definition:
          "A cycle in which a drug or its metabolites excreted into bile are subsequently reabsorbed from the intestine back into the portal circulation, re-entering systemic circulation. This process can significantly prolong a drug's residence time in the body, extend its half-life, and create secondary peaks on the concentration-time curve. Drugs such as estrogens, digoxin, and some NSAIDs undergo notable enterohepatic recirculation.",
      },
      {
        term: "Enzyme Induction",
        definition:
          "An increase in the expression or activity of drug-metabolizing enzymes, typically CYP450 isoforms, in response to exposure to certain drugs or chemicals. Enzyme inducers (such as rifampicin, carbamazepine, and St. John's Wort) increase the metabolic clearance of co-administered drugs, often reducing their plasma concentrations and therapeutic effect. Induction takes days to weeks to develop and resolve, since it depends on new enzyme protein synthesis.",
      },
      {
        term: "Enzyme Inhibition",
        definition:
          "A reduction in the activity of drug-metabolizing enzymes caused by a co-administered drug or substance. Enzyme inhibition reduces the clearance of affected drugs, increasing their plasma concentrations and the risk of toxicity. Unlike enzyme induction, competitive inhibition can occur rapidly (within hours of dosing). Fluoxetine, for example, is a potent inhibitor of CYP2D6, and co-administration with drugs metabolized by this pathway can lead to dangerous drug accumulation.",
      },
      {
        term: "Extended Release",
        abbr: "ER / XR",
        definition:
          "A pharmaceutical formulation designed to release a drug slowly over an extended period, typically 8–24 hours, as opposed to an immediate-release formulation. Extended-release forms flatten the concentration-time curve — reducing peak-to-trough fluctuations, decreasing the frequency of dosing, improving patient adherence, and minimizing adverse effects associated with high peak concentrations. Examples include extended-release metformin, venlafaxine XR, and long-acting opioid formulations.",
      },
    ],
  },
  {
    letter: "F",
    terms: [
      {
        term: "First-Order Kinetics",
        definition:
          "A pattern of drug elimination in which the rate of elimination is proportional to the current drug concentration — a constant fraction of the drug is eliminated per unit time. Most drugs follow first-order kinetics throughout the therapeutic concentration range, producing a straight line when log(concentration) is plotted against time. Because the rate of elimination accelerates as concentration rises and slows as concentration falls, the half-life remains constant regardless of dose.",
      },
      {
        term: "First-Pass Effect",
        definition:
          "The reduction in drug bioavailability that occurs when an orally administered drug is absorbed from the gut, transported via the portal vein to the liver, and substantially metabolized before ever reaching systemic circulation. The first-pass effect can dramatically reduce the effective dose of a drug; oral morphine, for example, undergoes ~60–70% first-pass extraction, meaning only 20–40% of the administered dose reaches the bloodstream. First-pass metabolism can be bypassed by sublingual, transdermal, intravenous, or rectal routes of administration.",
      },
    ],
  },
  {
    letter: "G",
    terms: [
      {
        term: "Generic Drug",
        definition:
          "A pharmaceutical product that contains the same active ingredient, in the same dose, dosage form, and route of administration, as a brand-name drug whose patent has expired. Generics are approved on the basis of demonstrated bioequivalence to the reference product and must meet the same quality, safety, and manufacturing standards. Generic drugs are typically 80–85% cheaper than brand-name equivalents and are therapeutically interchangeable for the vast majority of patients.",
      },
      {
        term: "Half-Life",
        abbr: "t½",
        definition:
          "The time required for the concentration of a drug in the plasma to decrease by 50%. For drugs following first-order kinetics, the half-life is constant regardless of starting concentration and is related to the elimination rate constant by t½ = 0.693 / ke. Half-life determines the dosing interval (typically drugs are dosed every 1–2 half-lives to maintain therapeutic concentrations), the time to steady state (approximately 4–5 half-lives with regular dosing), and the time for a drug to be effectively cleared from the body (also approximately 4–5 half-lives after the last dose).",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "Immediate Release",
        abbr: "IR",
        definition:
          "A conventional drug formulation designed to dissolve rapidly after administration, releasing the entire dose quickly for rapid absorption. Immediate-release formulations typically produce higher peak concentrations and more pronounced troughs between doses compared to extended-release versions of the same drug. They are often preferred when a rapid onset of action is needed, or when titrating doses carefully in new patients.",
      },
      {
        term: "Loading Dose",
        definition:
          "An initial dose given at the start of therapy that is larger than the maintenance dose, intended to rapidly achieve therapeutic drug concentrations without waiting 4–5 half-lives for steady state to accumulate. Loading doses are used for drugs with long half-lives where delay would be clinically unacceptable — for example, digoxin, amiodarone, and certain antibiotics. The loading dose is calculated from the target concentration multiplied by the volume of distribution.",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "Maintenance Dose",
        definition:
          "The regular ongoing dose of a drug administered to maintain steady-state plasma concentrations within the therapeutic window. The maintenance dose replaces the amount of drug eliminated during each dosing interval and equals the target steady-state concentration multiplied by clearance multiplied by the dosing interval. Dose adjustments are required in patients with impaired clearance (e.g., renal or hepatic failure) to prevent drug accumulation and toxicity.",
      },
      {
        term: "Metabolism",
        definition:
          "The biochemical transformation of drugs by enzymes in the body, primarily in the liver. Phase I metabolism involves oxidation, reduction, or hydrolysis reactions that typically introduce or expose functional groups on the drug molecule. Phase II metabolism involves conjugation reactions (glucuronidation, sulfation, acetylation) that attach polar groups to the drug, increasing its water solubility and facilitating renal or biliary excretion. Metabolism can inactivate drugs, activate prodrugs, or convert drugs into toxic metabolites.",
      },
      {
        term: "Minimum Effective Concentration",
        abbr: "MEC",
        definition:
          "The lowest plasma concentration of a drug that produces the desired therapeutic effect. Drug concentrations below the MEC are considered subtherapeutic — the drug is present in the body but at insufficient levels to exert a meaningful clinical effect. Maintaining plasma concentrations above the MEC at all times (or during appropriate parts of the dosing interval) is a key goal of dosing regimen design.",
      },
      {
        term: "Minimum Toxic Concentration",
        abbr: "MTC",
        definition:
          "The plasma concentration at which a drug begins to produce significant adverse or toxic effects. The range between the MEC and the MTC defines the therapeutic window. Drugs with a narrow therapeutic window (where MTC is close to MEC) require careful dose management and, in some cases, therapeutic drug monitoring. Examples include digoxin, lithium, vancomycin, and warfarin.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        term: "One-Compartment Model",
        definition:
          "The simplest pharmacokinetic model, which assumes that the body behaves as a single, homogeneous compartment in which the drug distributes instantaneously and uniformly. After an IV bolus dose, the concentration declines in a simple monoexponential fashion. While rarely perfectly accurate, the one-compartment model is useful for many drugs and provides a straightforward framework for calculating pharmacokinetic parameters. Drugs that do not distribute extensively into peripheral tissues most closely approximate this model.",
      },
      {
        term: "Peak Concentration",
        definition:
          "The highest plasma concentration reached after a dose, synonymous with Cmax. After oral administration, peak concentration occurs at Tmax — the time required for absorption to overcome elimination and reach the maximum. The peak concentration is clinically significant for drugs where toxicity correlates with high plasma levels (e.g., aminoglycoside antibiotics in once-daily dosing regimens) and for understanding the magnitude of concentration fluctuations between doses.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Pharmacodynamics",
        abbr: "PD",
        definition:
          "The study of the biochemical and physiological effects of drugs on the body, and the mechanisms through which those effects occur — essentially, what the drug does to the body. Pharmacodynamics encompasses receptor binding, signal transduction, dose-response relationships, and the time course of drug effect relative to drug concentration. Understanding PD is essential for selecting the optimal drug and dosing strategy for a clinical situation.",
      },
      {
        term: "Pharmacokinetics",
        abbr: "PK",
        definition:
          "The study of how the body processes a drug over time — absorption, distribution, metabolism, and elimination (ADME). Pharmacokinetics uses mathematical models to describe and predict drug concentration profiles in the plasma and tissues. It answers the question: what does the body do to the drug? Together with pharmacodynamics (what the drug does to the body), pharmacokinetics forms the quantitative foundation for rational drug dosing.",
      },
      {
        term: "Plasma Protein Binding",
        abbr: "PPB",
        definition:
          "The reversible association between a drug and proteins in the blood plasma, particularly albumin and alpha-1-acid glycoprotein. Only the free (unbound) fraction of a drug is pharmacologically active, able to cross membranes, interact with receptors, undergo metabolism, and be renally filtered. Highly protein-bound drugs (>90%) have limited free fractions; changes in protein levels (e.g., hypoalbuminemia in liver disease or malnutrition) can alter the free fraction significantly and affect drug efficacy and toxicity.",
      },
      {
        term: "Prodrug",
        definition:
          "A pharmacologically inactive compound that is converted to an active drug in the body through metabolic transformation. Prodrugs are designed to improve oral bioavailability, enhance tissue targeting, reduce toxicity of the parent compound, or mask unfavorable taste or stability. Examples include enalapril (converted to enalaprilat), codeine (converted by CYP2D6 to morphine), and oseltamivir (Tamiflu, converted to oseltamivir carboxylate). Poor metabolizer genotypes can result in reduced prodrug activation.",
      },
    ],
  },
  {
    letter: "R",
    terms: [
      {
        term: "Renal Clearance",
        definition:
          "The volume of plasma cleared of a drug by the kidneys per unit time, resulting from glomerular filtration, active tubular secretion, and passive tubular reabsorption. Renal clearance is a major elimination route for water-soluble drugs and drug metabolites. It is directly related to creatinine clearance (a measure of kidney function) and declines with age and renal disease. Dose adjustment is required for renally eliminated drugs in patients with impaired kidney function to prevent accumulation.",
      },
      {
        term: "Steady State",
        definition:
          "The condition during multiple-dose therapy in which the rate of drug input (dosing) equals the rate of drug elimination, resulting in stable average plasma concentrations that fluctuate predictably between doses but do not accumulate further. Steady state is reached after approximately 4–5 half-lives of regular dosing. At steady state, peak and trough concentrations repeat identically from one dosing interval to the next, and the clinical effect of the drug is at its most predictable and consistent.",
      },
    ],
  },
  {
    letter: "T",
    terms: [
      {
        term: "Therapeutic Index",
        abbr: "TI",
        definition:
          "A ratio that compares the dose producing toxicity to the dose producing a therapeutic effect, often expressed as LD50/ED50 (lethal dose in 50% of animals / effective dose in 50). In clinical practice, the therapeutic index describes how safely a drug can be used: drugs with a wide therapeutic index (e.g., penicillin) allow large dosing latitude, while drugs with a narrow therapeutic index (e.g., lithium, digoxin, warfarin) require careful dosing and monitoring because small changes in dose can produce toxicity.",
      },
      {
        term: "Therapeutic Window",
        definition:
          "The range of plasma drug concentrations between the minimum effective concentration (MEC) and the minimum toxic concentration (MTC) in which the drug produces the desired clinical effect without causing significant adverse effects. Maintaining drug concentrations within the therapeutic window is the practical goal of pharmacokinetic-based dosing. Drugs with narrow therapeutic windows require therapeutic drug monitoring (measuring plasma drug levels) to ensure safe and effective dosing.",
      },
      {
        term: "Tmax",
        definition:
          "The time after drug administration at which the maximum plasma concentration (Cmax) is reached. Tmax reflects the balance between absorption rate and elimination rate: it occurs when the rate of absorption equals the rate of elimination. A shorter Tmax indicates faster absorption, which is associated with a more rapid onset of effect. Extended-release formulations are specifically designed to delay and flatten the Tmax, reducing peak concentration while maintaining prolonged therapeutic coverage.",
      },
      {
        term: "Trough Concentration",
        definition:
          "The minimum (lowest) plasma drug concentration reached during a dosing interval, occurring just before the next dose is administered. Trough concentrations are the primary pharmacokinetic parameter monitored for drugs where the therapeutic effect correlates with minimum exposure — particularly antibiotics like vancomycin and aminoglycosides, where troughs predict efficacy against target organisms. Maintaining adequate trough levels ensures continuous coverage, while excessively high troughs increase the risk of toxicity.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "Volume of Distribution",
        abbr: "Vd",
        definition:
          "A theoretical volume that relates the total amount of drug in the body to the measured plasma concentration: Vd = Dose / Cp. Volume of distribution does not correspond to a real anatomical space; it is an apparent volume that reflects the degree of drug distribution into tissues. A small Vd (e.g., 5–10 L) indicates the drug stays mostly in plasma; a large Vd (e.g., 500–1000 L) indicates extensive tissue distribution, often due to high lipophilicity or tissue protein binding. Vd is used to calculate the loading dose required to achieve a target plasma concentration.",
      },
      {
        term: "Washout Period",
        definition:
          "The time interval after stopping a drug during which its concentration in the body falls to negligible or undetectable levels. Washout periods are clinically important when switching between drugs that may interact (e.g., an MAOI washout of 14 days before starting an SSRI), in clinical trials where carryover effects must be eliminated between treatment phases, and in doping control. The washout period is typically considered complete after 4–5 half-lives, by which time approximately 97% of the drug has been eliminated.",
      },
      {
        term: "Zero-Order Kinetics",
        definition:
          "A pattern of drug elimination in which the rate of elimination is constant and independent of drug concentration — a fixed amount of drug is eliminated per unit time, rather than a fixed fraction. Zero-order kinetics occur when elimination pathways are saturated, as happens with alcohol and high-dose aspirin. Because the elimination rate is constant regardless of concentration, the half-life is not constant and increases as concentration increases. This makes drugs following zero-order kinetics particularly dangerous at high doses, as small dose increases can produce disproportionately large rises in plasma concentration.",
      },
    ],
  },
];

export default function GlossaryPage() {
  const letters = glossarySections.map((s) => s.letter);

  return (
    <section style={{ padding: "10rem 2rem 6rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Mono label */}
        <p
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 1rem",
          }}
        >
          GLOSSARY
        </p>

        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            margin: "0 0 1rem",
            letterSpacing: "-0.01em",
          }}
        >
          Pharmacology Glossary
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            margin: "0 0 3rem",
            maxWidth: "640px",
          }}
        >
          40+ essential pharmacokinetics and pharmacology terms, explained in
          plain language for patients, students, and curious minds.
        </p>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            marginBottom: "2.5rem",
          }}
        />

        {/* Alphabet navigation */}
        <nav
          aria-label="Glossary alphabet navigation"
          style={{ marginBottom: "3.5rem" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.375rem",
            }}
          >
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
              const active = letters.includes(letter);
              return (
                <a
                  key={letter}
                  href={active ? `#letter-${letter}` : undefined}
                  aria-disabled={!active}
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: active ? "1px solid var(--rule)" : "none",
                    backgroundColor: active ? "var(--cream)" : "transparent",
                    color: active ? "var(--ink)" : "var(--ink-faint)",
                    textDecoration: "none",
                    cursor: active ? "pointer" : "default",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  {letter}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Glossary content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3.5rem",
          }}
        >
          {glossarySections.map((section) => (
            <div key={section.letter} id={`letter-${section.letter}`}>
              {/* Letter heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "var(--accent)",
                    lineHeight: 1,
                    minWidth: "1.5rem",
                  }}
                >
                  {section.letter}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "var(--rule)",
                  }}
                />
              </div>

              {/* Terms grid: two-column on desktop, one on mobile */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
                  gap: "1rem",
                }}
              >
                {section.terms.map((term) => (
                  <div
                    key={term.term}
                    style={{
                      padding: "1.5rem 1.75rem",
                      backgroundColor: "var(--cream)",
                      border: "1px solid var(--rule)",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.625rem",
                        marginBottom: "0.625rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:
                            "var(--font-serif), ui-serif, Georgia, serif",
                          fontSize: "1.0625rem",
                          fontWeight: 400,
                          color: "var(--ink)",
                          lineHeight: 1.25,
                        }}
                      >
                        {term.term}
                      </span>
                      {term.abbr && (
                        <span
                          style={{
                            fontFamily:
                              "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.6875rem",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            color: "var(--accent)",
                            backgroundColor:
                              "color-mix(in srgb, var(--accent) 10%, transparent)",
                            padding: "0.15rem 0.45rem",
                            borderRadius: "3px",
                          }}
                        >
                          {term.abbr}
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-sans), ui-sans-serif, sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.72,
                        color: "var(--ink-soft)",
                        margin: 0,
                      }}
                    >
                      {term.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--ink-faint)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Definitions are intended for educational purposes and reflect
            general clinical usage. Individual drugs and clinical scenarios may
            vary. For medical decisions, always consult a licensed pharmacist or
            physician.{" "}
            <a
              href="/contact"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontStyle: "normal",
              }}
            >
              Suggest a term
            </a>{" "}
            you would like to see added.
          </p>
        </div>
      </div>
    </section>
  );
}
