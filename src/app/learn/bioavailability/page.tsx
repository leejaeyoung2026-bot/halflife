import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Bioavailability: Why How You Take a Drug Matters",
  description:
    "Learn what bioavailability means, how different routes of administration affect drug levels, and why the same drug can work differently depending on how you take it.",
  openGraph: {
    title: "Bioavailability: Why How You Take a Drug Matters",
    description:
      "Learn what bioavailability means, how different routes of administration affect drug levels, and why the same drug can work differently depending on how you take it.",
    url: "https://halflife.vibed-lab.com/learn/bioavailability",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioavailability: Why How You Take a Drug Matters",
    description:
      "What bioavailability means, how different routes of administration affect drug levels, and why the same drug can work differently depending on how you take it.",
  },
};

const routeData = [
  {
    route: "Intravenous (IV)",
    abbreviation: "IV",
    bioavailability: "100%",
    onset: "Immediate",
    notes: "Reference standard. Drug enters systemic circulation directly — no absorption barriers.",
  },
  {
    route: "Sublingual",
    abbreviation: "SL",
    bioavailability: "75–100%",
    onset: "1–5 min",
    notes: "Absorbed through oral mucosa directly into bloodstream, bypassing hepatic first-pass metabolism.",
  },
  {
    route: "Intramuscular (IM)",
    abbreviation: "IM",
    bioavailability: "75–100%",
    onset: "10–30 min",
    notes: "Highly vascular muscle tissue enables rapid, nearly complete absorption.",
  },
  {
    route: "Rectal",
    abbreviation: "PR",
    bioavailability: "30–100%",
    onset: "10–45 min",
    notes: "Variable due to inconsistent placement. Lower rectal absorption partially bypasses first-pass. Useful when oral route unavailable.",
  },
  {
    route: "Inhalation",
    abbreviation: "INH",
    bioavailability: "10–90%",
    onset: "1–5 min",
    notes: "Large surface area and thin alveolar membrane enable rapid absorption. Variable depending on particle size and technique.",
  },
  {
    route: "Oral",
    abbreviation: "PO",
    bioavailability: "5–100%",
    onset: "30–90 min",
    notes: "Most convenient but subject to first-pass metabolism. Bioavailability highly variable by drug and patient factors.",
  },
  {
    route: "Transdermal",
    abbreviation: "TD",
    bioavailability: "Varies (10–80%)",
    onset: "1–4 hours",
    notes: "Slow, sustained absorption through skin. Avoids first-pass. Requires lipophilic drugs with low molecular weight.",
  },
  {
    route: "Subcutaneous (SC)",
    abbreviation: "SC",
    bioavailability: "75–100%",
    onset: "15–45 min",
    notes: "Depot formation possible for sustained release. Slower than IM due to less vascularity in fatty tissue.",
  },
];

export default function BioavailabilityPage() {
  return (
    <>
      <ArticleJsonLd
        title="Bioavailability: Why How You Take a Drug Matters"
        description="How route of administration, first-pass metabolism, and formulation affect drug absorption."
        url="https://halflife.vibed-lab.com/learn/bioavailability"
        datePublished="2026-03-08"
      />
      <style>{`
        .article-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease;
        }
        .article-link:hover { border-bottom-color: var(--accent); }

        .continue-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.5rem;
          background-color: var(--cream);
          text-decoration: none;
          display: block;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .continue-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 12%, transparent);
        }

        .route-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
        }
        .route-table th {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          padding: 0.625rem 0.875rem;
          text-align: left;
          border-bottom: 1px solid var(--rule);
          background-color: var(--cream);
        }
        .route-table td {
          padding: 0.75rem 0.875rem;
          border-bottom: 1px solid var(--rule);
          color: var(--ink-soft);
          vertical-align: top;
          line-height: 1.55;
        }
        .route-table tr:last-child td { border-bottom: none; }
        .route-table tr:hover td { background-color: color-mix(in srgb, var(--accent) 4%, transparent); }
        .f-value {
          font-family: var(--font-mono), ui-monospace, monospace;
          color: var(--accent);
          font-size: 0.8125rem;
          font-weight: 500;
        }
      `}</style>

      <article style={{ padding: "10rem 2rem 6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Breadcrumb */}
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              margin: "0 0 1.5rem",
            }}
          >
            <Link href="/learn" className="article-link">Learn</Link>
            {" / "}Bioavailability
          </p>

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
            PHARMACOKINETICS — ARTICLE 7
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Bioavailability — Why How You Take a Drug Matters
          </h1>

          {/* Lead */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: "0 0 3rem",
            }}
          >
            Two patients receive the same drug. One gets an injection; one swallows a tablet. Although the molecule is identical, the patient who swallowed the pill may only absorb 30% of it into their bloodstream — while the injected patient gets 100%. This difference is bioavailability, and it governs everything from the dose on your prescription label to why insulin cannot be taken as a pill.
          </p>

          {/* Rule */}
          <div style={{ height: "1px", backgroundColor: "var(--rule)", marginBottom: "3rem" }} />

          <div
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >

            <AuthorByline />

            {/* Definition */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                What Is Bioavailability?
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Bioavailability (abbreviated as <strong style={{ color: "var(--ink)", fontWeight: 600 }}>F</strong>) is the fraction of an administered dose that reaches the systemic circulation in an unchanged, active form. It is expressed as a proportion from 0 to 1 (or 0% to 100%) and represents the efficiency of the delivery route.
              </p>
              <div
                style={{
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "1.125rem",
                    color: "var(--accent)",
                    margin: "0 0 0.75rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  F = AUC<sub style={{ fontSize: "0.75rem" }}>route</sub> / AUC<sub style={{ fontSize: "0.75rem" }}>IV</sub>
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-faint)" }}>
                  Bioavailability is calculated by comparing the area under the plasma concentration-time curve (AUC) after a given route of administration to the AUC after IV administration (the 100% reference). For a drug that is 30% bioavailable orally, only 30% of the swallowed dose ever enters the bloodstream — the other 70% is destroyed or never absorbed.
                </p>
              </div>
              <p style={{ margin: 0 }}>
                Intravenous administration always yields 100% bioavailability by definition. The drug is injected directly into the bloodstream, bypassing every absorption barrier. Every other route of administration must work against one or more obstacles that reduce the fraction reaching systemic circulation.
              </p>
            </div>

            {/* First-pass metabolism */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Oral Bioavailability and the First-Pass Effect
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                When you swallow a tablet, the drug must survive the gastrointestinal environment, dissolve, penetrate the intestinal wall, and then pass through the portal circulation — directly to the liver — before ever reaching systemic blood. The liver sees the drug as a foreign molecule and metabolizes a significant fraction of it before it has had a chance to work. This is called the <strong style={{ color: "var(--ink)", fontWeight: 600 }}>first-pass effect</strong> or hepatic first-pass metabolism.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The first-pass effect is the reason oral doses are often substantially higher than IV doses of the same drug. Morphine has approximately 25–35% oral bioavailability. When given intravenously, 10 mg of morphine has a predictable analgesic effect; oral morphine requires 30–40 mg to achieve the same blood level because two-thirds is destroyed by first-pass metabolism before it even reaches the brain.
              </p>
              <p style={{ margin: 0 }}>
                Nitroglycerin is the most extreme example: its oral bioavailability is less than 1% due to near-complete first-pass metabolism. This is why nitroglycerin for angina is given sublingually (under the tongue), where it absorbs directly into the bloodstream through the oral mucosa, entirely bypassing the liver&apos;s first pass. A sublingual nitroglycerin tablet relieves chest pain within 1–5 minutes; an oral tablet would do essentially nothing.
              </p>
            </div>

            {/* Routes comparison */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Routes of Administration Compared
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Each route of administration has a characteristic bioavailability range, onset time, and clinical use case. The following table summarizes the major routes:
              </p>
              <div style={{ overflowX: "auto", borderRadius: "10px", border: "1px solid var(--rule)" }}>
                <table className="route-table">
                  <thead>
                    <tr>
                      <th>Route</th>
                      <th>Abbreviation</th>
                      <th>Bioavailability (F)</th>
                      <th>Onset</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routeData.map((row) => (
                      <tr key={row.abbreviation}>
                        <td style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", color: "var(--ink)", fontSize: "0.9375rem" }}>{row.route}</td>
                        <td style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "var(--ink-faint)", fontSize: "0.8125rem" }}>{row.abbreviation}</td>
                        <td className="f-value">{row.bioavailability}</td>
                        <td style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.8125rem", color: "var(--ink-soft)" }}>{row.onset}</td>
                        <td style={{ fontSize: "0.8125rem" }}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Drugs that can't be taken orally */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Why Some Drugs Cannot Be Taken Orally
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                The GI tract&apos;s digestive environment destroys certain drug classes before they can be absorbed. Proteins and peptides — large, complex molecules — are broken down by stomach acid and digestive enzymes into their amino acid components. From the GI tract&apos;s perspective, there is no difference between a therapeutic protein and a piece of food.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1rem" }}>
                {[
                  {
                    drug: "Insulin",
                    problem: "A protein hormone. Stomach acid and proteases would digest it into inactive amino acids before absorption. Given by subcutaneous injection, or via inhaled powder (Afrezza) which is absorbed through alveoli.",
                  },
                  {
                    drug: "Heparin (unfractionated)",
                    problem: "A large polysaccharide chain that is not absorbed through the GI mucosa. Given intravenously or subcutaneously for anticoagulation.",
                  },
                  {
                    drug: "Glucagon",
                    problem: "A peptide hormone used for severe hypoglycemia. Destroyed by GI digestion. Given IM, IV, or as a nasal powder (absorbed nasally).",
                  },
                  {
                    drug: "Vancomycin (systemic use)",
                    problem: "Very poorly absorbed orally (~1% oral bioavailability). For systemic infections, IV administration is required. Oral vancomycin is intentionally used for C. difficile colitis precisely because it stays in the GI tract.",
                  },
                ].map((item) => (
                  <div
                    key={item.drug}
                    style={{
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p style={{ margin: "0 0 0.375rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontWeight: 600, color: "var(--ink)", fontSize: "0.9375rem" }}>
                      {item.drug}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>{item.problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Factors affecting oral bioavailability */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Factors That Affect Oral Bioavailability
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Even for drugs that can be taken orally, bioavailability is not a fixed number — it is a function of multiple interacting variables:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    factor: "Food effects",
                    detail: "Food slows gastric emptying, which can increase or decrease absorption depending on the drug. High-fat meals dramatically increase absorption of certain drugs (ritonavir, tacrolimus) by increasing intestinal lymphatic transport. Other drugs (tetracyclines, bisphosphonates) bind to calcium in food, reducing absorption. Package inserts specify \"take with food\" or \"take on empty stomach\" based on bioavailability studies.",
                  },
                  {
                    factor: "Gastric pH",
                    detail: "Weakly acidic drugs (aspirin, ibuprofen) are better absorbed in acidic stomach pH. Weakly basic drugs are better absorbed in the alkaline small intestine. Proton pump inhibitors raise gastric pH, which can reduce absorption of drugs requiring acidic conditions (itraconazole, atazanavir).",
                  },
                  {
                    factor: "Drug formulation",
                    detail: "Immediate release, modified release, enteric-coated, and nano-formulations all produce different dissolution profiles. Particle size, excipients, and coating technologies alter the rate and extent of dissolution — all without changing the active molecule.",
                  },
                  {
                    factor: "GI motility",
                    detail: "Conditions that accelerate GI transit (diarrhea, IBD flares, short bowel syndrome) reduce contact time with the absorptive mucosa, lowering bioavailability. Conditions that slow transit (diabetic gastroparesis, constipation, anticholinergic drugs) may increase it.",
                  },
                  {
                    factor: "P-glycoprotein (P-gp)",
                    detail: "An efflux transporter in the gut wall that pumps certain drugs back into the GI lumen after absorption. Drugs that are P-gp substrates (digoxin, cyclosporine, many HIV drugs) have low oral bioavailability unless P-gp is inhibited. This is another mechanism by which grapefruit and certain drug combinations dramatically alter bioavailability.",
                  },
                  {
                    factor: "Intestinal CYP3A4",
                    detail: "About 70% of CYP3A4 in the body is located in the small intestinal wall. Drugs metabolized by CYP3A4 are partly destroyed before they even reach portal blood — an &quot;intestinal first pass&quot; that adds to the hepatic first pass. Together, these account for the low oral bioavailability of many drugs.",
                  },
                ].map((item) => (
                  <div
                    key={item.factor}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "10px",
                      padding: "1.25rem 1.5rem",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "var(--ink)",
                        margin: "0 0 0.625rem",
                      }}
                    >
                      {item.factor}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.65 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AdSense — mid-article */}
            <div className="ad-container" style={{ margin: "2rem 0" }}>
              <AdUnit slot="2345678901" format="auto" />
            </div>

            {/* Immediate release vs extended release */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Extended Release vs Immediate Release Formulations
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Formulation technology can dramatically alter the pharmacokinetic profile of an identical drug without changing its molecule. Immediate release (IR) formulations dissolve rapidly, producing a sharp peak in plasma concentration followed by a decline. Extended release (ER, XR, XL, SR) formulations use polymer matrices, osmotic pumps, or coating technologies to release the drug slowly over 8–24 hours.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The clinical consequences are significant. Metoprolol immediate release has a half-life of 3–7 hours and must be taken 2–4 times daily. Metoprolol succinate extended release maintains therapeutic plasma levels with once-daily dosing — improving adherence and avoiding the peak plasma concentrations that can cause side effects like bradycardia.
              </p>
              <p style={{ margin: 0 }}>
                Critical caution: extended release formulations must never be crushed, chewed, or split. Doing so destroys the controlled-release mechanism, rapidly releasing an entire extended dose — producing dangerously high plasma concentrations. This is particularly important for opioids and antihypertensives in ER formulations.
              </p>
            </div>

            {/* Generic vs brand name */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Generic vs Brand Name: Bioequivalence
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                When a generic drug is approved by the FDA, it must demonstrate <strong style={{ color: "var(--ink)", fontWeight: 600 }}>bioequivalence</strong> to the brand-name original: the generic&apos;s AUC and peak plasma concentration (C<sub>max</sub>) must fall within 80–125% of the brand-name product in pharmacokinetic studies. This range is intentionally conservative and means that, for most drugs, generics and brand-name products are clinically interchangeable.
              </p>
              <p style={{ margin: 0 }}>
                However, for narrow therapeutic index drugs — where small differences in plasma concentration produce large differences in effect or toxicity — even this 20% variation can matter. Drugs like levothyroxine, warfarin, cyclosporine, tacrolimus, phenytoin, and lithium are sometimes managed with brand-name products specifically, or with consistent use of the same generic manufacturer, to avoid inter-product variation. Always consult your pharmacist before switching formulations of narrow therapeutic index medications.
              </p>
            </div>

            {/* Practical examples */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Practical Examples
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  {
                    title: "Nitroglycerin: Sublingual vs Oral",
                    content: "Oral nitroglycerin has less than 1% bioavailability — nearly all is destroyed in the liver before reaching systemic circulation. Sublingual nitroglycerin (dissolved under the tongue) achieves 40–80% bioavailability within minutes, directly entering the bloodstream through the oral mucosa. For a drug treating acute angina, speed and efficacy are paramount. This is why emergency nitroglycerin is never given as a swallowed tablet.",
                  },
                  {
                    title: "Morphine: Oral vs IV — A 3-fold difference",
                    content: "Oral morphine has 25–35% bioavailability due to extensive first-pass hepatic metabolism. An IV dose of 10 mg produces equivalent analgesia to approximately 30 mg oral morphine. This 3:1 ratio (oral to IV) is a standard conversion used in pain management. When a patient transitions from IV to oral morphine after surgery, the dose is tripled — not because oral morphine is weaker, but because only one-third of it survives to reach systemic circulation.",
                  },
                  {
                    title: "Transdermal Fentanyl: Bypassing the GI Tract Entirely",
                    content: "Fentanyl, a potent opioid, is highly lipophilic and has a molecular weight small enough to penetrate skin. A fentanyl patch provides continuous absorption over 72 hours, maintaining stable plasma levels without the peaks and troughs of oral or IV dosing. Oral fentanyl has 50% bioavailability due to first-pass metabolism. Transdermal delivery achieves 90% bioavailability by bypassing the gut and liver entirely — while providing far more convenient sustained delivery for chronic pain patients.",
                  },
                  {
                    title: "Salbutamol (Albuterol): Inhalation vs Oral",
                    content: "Inhaled salbutamol deposits drug directly at bronchial smooth muscle receptors, producing bronchodilation within minutes at doses measured in micrograms. Oral salbutamol requires milligram-level doses for equivalent bronchodilation — with far more systemic side effects (tremor, tachycardia) because the drug reaches cardiac and skeletal muscle receptors. The inhaled route exemplifies site-targeted delivery: high local bioavailability at the target tissue, low systemic bioavailability and side effects.",
                  },
                ].map((example) => (
                  <div
                    key={example.title}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "10px",
                      padding: "1.5rem 1.75rem",
                      backgroundColor: "var(--paper)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1.0625rem",
                        fontWeight: 400,
                        color: "var(--ink)",
                        margin: "0 0 0.75rem",
                      }}
                    >
                      {example.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.7 }}>{example.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                padding: "1.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Key Takeaways
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  fontSize: "0.9375rem",
                }}
              >
                <li>Bioavailability (F) is the fraction of a dose that reaches systemic circulation unchanged. IV = 100% by definition.</li>
                <li>Oral bioavailability is reduced by gastric acid, gut enzymes, intestinal CYP3A4, and hepatic first-pass metabolism.</li>
                <li>Some drugs (insulin, heparin, many peptides) cannot be taken orally because GI digestion destroys them before absorption.</li>
                <li>Route selection is a clinical decision: sublingual for speed, transdermal for sustained delivery, IV for immediate and complete effect.</li>
                <li>Food, GI pH, P-glycoprotein, and drug formulation all alter oral bioavailability — even for the same drug in the same patient at different times.</li>
                <li>Generic drugs must demonstrate bioequivalence (within 80–125% of AUC and C<sub>max</sub>), making them clinically interchangeable for most patients.</li>
                <li>Never crush or chew extended release formulations — doing so defeats the controlled-release mechanism and can cause dangerously high drug levels.</li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div style={{ borderLeft: "3px solid var(--rule)", paddingLeft: "1.25rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                Medical Disclaimer
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  color: "var(--ink-faint)",
                  lineHeight: 1.65,
                }}
              >
                This article is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Bioavailability values cited are population averages from pharmacokinetic literature and may vary significantly between individuals due to genetics, disease states, and concurrent medications. Never alter your medication route or formulation without consulting a licensed pharmacist or physician.
              </p>
            </div>

            {/* Continue Learning */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  margin: "0 0 1rem",
                }}
              >
                CONTINUE LEARNING
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                <Link href="/learn/drug-interactions" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>PREVIOUS ARTICLE</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Drug Interactions</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    When medications collide — CYP enzymes and beyond
                  </p>
                </Link>
                <Link href="/learn/dosing-schedules" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>NEXT ARTICLE</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Dosing Schedules</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    The science behind &quot;every 4 hours&quot; and &quot;once daily&quot;
                  </p>
                </Link>
                <Link href="/simulator" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>INTERACTIVE TOOL</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Try the Simulator</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Model how IV vs oral dosing changes concentration-time curves
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
