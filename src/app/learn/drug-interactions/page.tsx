import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Drug Interactions: When Medications Collide",
  description:
    "Understand how drug interactions work — CYP enzyme inhibition, induction, and how one medication can dramatically change another's half-life.",
  openGraph: {
    title: "Drug Interactions: When Medications Collide",
    description:
      "Understand how drug interactions work — CYP enzyme inhibition, induction, and how one medication can dramatically change another's half-life.",
    url: "https://halflife.vibed-lab.com/learn/drug-interactions",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drug Interactions: When Medications Collide",
    description:
      "CYP enzyme inhibition, induction, and how one medication can dramatically change another's half-life.",
  },
};

const dangerousInteractions = [
  {
    index: "01",
    pair: "Warfarin + NSAIDs",
    risk: "Serious bleeding",
    mechanism: "NSAIDs displace warfarin from plasma proteins, raising free (active) warfarin levels. NSAIDs also inhibit platelet aggregation and irritate the GI mucosa — a triple threat when combined with anticoagulation.",
    consequence: "Internal bleeding, gastrointestinal hemorrhage, intracranial hemorrhage.",
    management: "Avoid NSAIDs in patients on warfarin. Use acetaminophen (with caution) for pain relief. If an NSAID must be used, add a proton pump inhibitor and monitor INR closely.",
  },
  {
    index: "02",
    pair: "SSRIs + MAOIs",
    risk: "Serotonin syndrome",
    mechanism: "SSRIs block serotonin reuptake; MAOIs block serotonin breakdown. Together they produce massive serotonin accumulation in the CNS — a pharmacodynamic synergistic interaction.",
    consequence: "Agitation, tremor, hyperthermia, seizures, and potentially fatal autonomic instability.",
    management: "Mandatory washout period (2 weeks for most SSRIs; 5 weeks for fluoxetine due to its long half-life) before starting an MAOI. Never overlap.",
  },
  {
    index: "03",
    pair: "Statins + CYP3A4 inhibitors",
    risk: "Rhabdomyolysis",
    mechanism: "Many statins (simvastatin, lovastatin, atorvastatin) are metabolized by CYP3A4. CYP3A4 inhibitors like ketoconazole, erythromycin, clarithromycin, and grapefruit juice dramatically increase statin plasma levels.",
    consequence: "Myopathy progressing to rhabdomyolysis — severe muscle breakdown that can cause acute kidney failure.",
    management: "Switch to rosuvastatin or pravastatin (not CYP3A4 substrates) when a potent CYP3A4 inhibitor is needed. Avoid grapefruit during high-dose statin therapy.",
  },
  {
    index: "04",
    pair: "Methotrexate + NSAIDs",
    risk: "Methotrexate toxicity",
    mechanism: "NSAIDs reduce renal blood flow by inhibiting prostaglandin synthesis, decreasing methotrexate excretion. NSAIDs may also compete for organic acid transporters, further reducing elimination. Methotrexate&apos;s half-life is prolonged and levels accumulate.",
    consequence: "Bone marrow suppression, mucositis, hepatotoxicity, pulmonary toxicity.",
    management: "Avoid NSAIDs with methotrexate whenever possible. If needed, use the lowest possible NSAID dose briefly, with methotrexate level monitoring.",
  },
  {
    index: "05",
    pair: "ACE inhibitors + Potassium-sparing diuretics",
    risk: "Hyperkalemia",
    mechanism: "ACE inhibitors reduce aldosterone, causing potassium retention. Potassium-sparing diuretics (spironolactone, amiloride, triamterene) independently block renal potassium excretion. The pharmacodynamic combination is additive.",
    consequence: "Dangerous hyperkalemia causing cardiac arrhythmias, including ventricular fibrillation.",
    management: "Use with caution if combined. Frequent monitoring of serum potassium, especially in elderly patients and those with renal impairment.",
  },
];

export default function DrugInteractionsPage() {
  return (
    <>
      <ArticleJsonLd
        title="Drug Interactions: When Medications Collide"
        description="Understand CYP enzyme inhibition, induction, and how medications change each other's half-life."
        url="https://halflife.vibed-lab.com/learn/drug-interactions"
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

        .interaction-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.5rem 1.75rem;
          background-color: var(--paper);
          transition: border-color 0.15s ease;
        }
        .interaction-card:hover {
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
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
            {" / "}Drug Interactions
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
            PHARMACOKINETICS — ARTICLE 6
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
            Drug Interactions — When Medications Collide
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
            A patient taking a statin for cholesterol starts a course of antibiotics for an infection — and ends up in the hospital with kidney failure. A person on an antidepressant tries an herbal remedy and begins experiencing alarming heart irregularities. Drug interactions are not rare edge cases found only in textbooks. They are one of the most common causes of preventable hospitalizations. Understanding the mechanisms behind them — especially how one drug can hijack another drug&apos;s half-life — gives you the knowledge to protect yourself.
          </p>

          {/* Rule */}
          <div style={{ height: "1px", backgroundColor: "var(--rule)", marginBottom: "3rem" }} />

          {/* Prose */}
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

            {/* What are drug interactions */}
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
                What Are Drug Interactions?
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                A drug interaction occurs when the presence of one substance — a drug, food, or supplement — alters the pharmacological activity of another drug. Interactions can increase or decrease a drug&apos;s efficacy, alter its toxicity profile, or produce entirely new effects not seen with either agent alone.
              </p>
              <p style={{ margin: 0 }}>
                Drug interactions fall into two broad categories: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>pharmacokinetic</strong> interactions, which affect how a drug moves through the body (absorption, distribution, metabolism, excretion — collectively ADME), and <strong style={{ color: "var(--ink)", fontWeight: 600 }}>pharmacodynamic</strong> interactions, which affect what a drug does to the body at the receptor or tissue level. Both can be clinically dangerous, but pharmacokinetic interactions are particularly insidious because they can cause a drug&apos;s effective half-life to double, triple, or collapse entirely — without any obvious sign to the patient.
              </p>
            </div>

            {/* Pharmacokinetic interactions header */}
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
                Pharmacokinetic Interactions: Hijacking ADME
              </h2>
              <p style={{ margin: 0 }}>
                The most mechanistically rich pharmacokinetic interactions involve the cytochrome P450 (CYP) enzyme system — the liver&apos;s principal drug-metabolizing machinery. Understanding CYP enzymes is essential to understanding why half-lives are not fixed properties of a drug, but rather context-dependent values that can be profoundly altered by co-medications.
              </p>
            </div>

            {/* CYP inhibition */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.875rem",
                }}
              >
                CYP Enzyme Inhibition — Dangerous Accumulation
              </h3>
              <p style={{ margin: "0 0 1rem" }}>
                CYP enzyme inhibition occurs when one drug blocks a CYP isoform&apos;s ability to metabolize another drug. The inhibited drug cannot be broken down at its normal rate, so its plasma concentration rises and its half-life effectively extends. This is not a theoretical risk — it is the cause of numerous serious adverse events and drug recalls.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                Consider simvastatin, which is metabolized by CYP3A4 with a half-life of roughly 2 hours under normal conditions. Ketoconazole (an antifungal) is a potent CYP3A4 inhibitor. When taken together, ketoconazole can raise simvastatin plasma concentrations 10- to 20-fold. What was a safe statin dose suddenly becomes a toxic one — causing myopathy or potentially fatal rhabdomyolysis.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                Classic CYP inhibitors include:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                {[
                  { enzyme: "CYP3A4", inhibitors: "Ketoconazole, erythromycin, clarithromycin, grapefruit juice, ritonavir", affected: "Statins, cyclosporine, many benzodiazepines, calcium channel blockers" },
                  { enzyme: "CYP2D6", inhibitors: "Fluoxetine, paroxetine, bupropion, quinidine", affected: "Codeine, tamoxifen, tricyclic antidepressants, metoprolol" },
                  { enzyme: "CYP2C9", inhibitors: "Fluconazole, amiodarone, metronidazole", affected: "Warfarin (S-isomer), phenytoin, NSAIDs" },
                  { enzyme: "CYP2C19", inhibitors: "Omeprazole, esomeprazole, fluvoxamine", affected: "Clopidogrel (reduced activation), diazepam, some antidepressants" },
                ].map((row) => (
                  <div
                    key={row.enzyme}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "8px",
                      padding: "0.875rem 1rem",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.8125rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {row.enzyme}
                    </div>
                    <div style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Inhibited by: </strong>
                      {row.inhibitors}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                      <strong style={{ fontWeight: 500 }}>Affects: </strong>
                      {row.affected}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0 }}>
                One of the most surprising CYP inhibitors is grapefruit juice. Furanocoumarins in grapefruit irreversibly inhibit intestinal CYP3A4, meaning a single glass can increase the bioavailability of certain drugs for up to 24 hours. Patients on certain statins, calcium channel blockers, or immunosuppressants are often instructed to avoid grapefruit entirely.
              </p>
            </div>

            {/* CYP induction */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.875rem",
                }}
              >
                CYP Enzyme Induction — Therapeutic Failure
              </h3>
              <p style={{ margin: "0 0 1rem" }}>
                CYP induction is the opposite problem: one drug stimulates increased production of CYP enzymes, accelerating the metabolism of another drug. The co-administered drug is metabolized faster than usual — its half-life shortens, its plasma levels drop, and it may fall below the minimum effective concentration entirely.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                Rifampin (rifampicin), an antibiotic used for tuberculosis, is perhaps the most dramatic CYP inducer known. It strongly induces CYP3A4, CYP2C9, CYP2C19, and multiple glucuronosyl transferases. Oral contraceptives fail. Warfarin stops working. Immunosuppressants like cyclosporine drop to subtherapeutic levels, precipitating organ rejection. The mechanism takes 7–14 days to fully develop as the liver manufactures new enzyme protein — and it takes just as long to reverse when rifampin is stopped.
              </p>
              <p style={{ margin: 0 }}>
                St. John&apos;s Wort, a popular herbal supplement used for depression, is a significant CYP3A4 inducer and P-glycoprotein inducer. It has reduced plasma levels of HIV antiretrovirals, cyclosporine, warfarin, and oral contraceptives in clinical studies — with serious consequences. The interaction is particularly dangerous because patients often do not mention herbal supplements to their healthcare providers, and pharmacists cannot screen for interactions they do not know about.
              </p>
            </div>

            {/* Protein binding */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.875rem",
                }}
              >
                Protein Binding Displacement
              </h3>
              <p style={{ margin: "0 0 1rem" }}>
                Many drugs travel through the bloodstream bound to plasma proteins — primarily albumin. Only the unbound (free) fraction is pharmacologically active and available for metabolism and elimination. When a second drug displaces the first from its protein binding sites, the free fraction suddenly increases, raising the drug&apos;s effective concentration without any change in dose.
              </p>
              <p style={{ margin: 0 }}>
                Warfarin is over 99% protein-bound. Even a small percentage displacement produces a large proportional increase in free warfarin. Drugs like naproxen and aspirin can displace warfarin from albumin, transiently raising anticoagulation intensity and bleeding risk. This effect is usually short-lived because the displaced drug is also more available for elimination, but the transient peak can be clinically significant for narrow therapeutic index drugs like warfarin, phenytoin, and methotrexate.
              </p>
            </div>

            {/* Renal competition */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.875rem",
                }}
              >
                Renal Excretion Competition
              </h3>
              <p style={{ margin: 0 }}>
                The kidneys excrete many drugs via active transport using organic acid transporters (OAT) and organic cation transporters (OCT). When two drugs compete for the same transporter, whichever drug &quot;wins&quot; the transporter access gets excreted, while the other accumulates. Probenecid, historically used to treat gout, was discovered because it competes with penicillin for renal secretion — prolonging penicillin&apos;s half-life intentionally. In less desirable interactions, methotrexate&apos;s renal excretion is reduced by NSAIDs and probenecid, causing dangerous methotrexate accumulation.
              </p>
            </div>

            {/* Pharmacodynamic interactions */}
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
                Pharmacodynamic Interactions: Effects at the Target
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Pharmacodynamic interactions occur at the level of drug targets — receptors, enzymes, ion channels — rather than in pharmacokinetic processes. They can be classified by their directionality:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  {
                    type: "Additive",
                    definition: "Two drugs produce effects on the same system, and their combined effect equals the sum of their individual effects.",
                    example: "Alcohol + benzodiazepines both enhance GABA activity. Combined CNS depression equals the sum of each drug's effect.",
                  },
                  {
                    type: "Synergistic",
                    definition: "The combined effect is greater than the sum of the individual effects — a superadditive result.",
                    example: "Certain antibiotics work synergistically: beta-lactams weaken the cell wall while aminoglycosides exploit that weakness to enter bacteria. The combination is far more effective than either alone.",
                  },
                  {
                    type: "Antagonistic",
                    definition: "One drug reduces or blocks the effect of another, either at the same receptor or through opposing physiological mechanisms.",
                    example: "Naloxone reverses opioid overdose by competitively binding to opioid receptors with higher affinity than the opioid itself. Beta-blockers antagonize the bronchodilatory effect of beta-agonist inhalers in asthma patients.",
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    style={{
                      padding: "1.25rem 1.5rem",
                      border: "1px solid var(--rule)",
                      borderRadius: "10px",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1.0625rem",
                        color: "var(--ink)",
                        margin: "0 0 0.5rem",
                        fontWeight: 400,
                      }}
                    >
                      {item.type}
                    </p>
                    <p style={{ margin: "0 0 0.5rem", fontSize: "0.9375rem" }}>{item.definition}</p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        color: "var(--ink-faint)",
                        fontStyle: "italic",
                      }}
                    >
                      Example: {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AdSense — mid-article */}
            <div className="ad-container" style={{ margin: "2rem 0" }}>
              <AdUnit slot="2345678901" format="auto" />
            </div>

            {/* 5 Dangerous Interactions */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                5 Common Dangerous Interactions
              </h2>
              <p style={{ margin: "0 0 1.5rem" }}>
                The following interactions represent some of the most clinically significant and frequently encountered drug-drug interactions in outpatient and hospital settings. Each one has caused preventable patient harm.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {dangerousInteractions.map((item) => (
                  <div key={item.index} className="interaction-card">
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        marginBottom: "0.875rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "1.5rem",
                          fontWeight: 300,
                          color: "var(--accent)",
                          lineHeight: 1,
                          opacity: 0.6,
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        {item.index}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                            fontSize: "1.125rem",
                            fontWeight: 400,
                            color: "var(--ink)",
                            margin: "0 0 0.25rem",
                          }}
                        >
                          {item.pair}
                        </p>
                        <span
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#B45309",
                            fontWeight: 500,
                          }}
                        >
                          {item.risk}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", paddingLeft: "3rem" }}>
                      <div style={{ fontSize: "0.9rem" }}>
                        <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Mechanism: </strong>
                        {item.mechanism}
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "#B45309" }}>
                        <strong style={{ fontWeight: 500 }}>Consequence: </strong>
                        {item.consequence}
                      </div>
                      <div style={{ fontSize: "0.9rem" }}>
                        <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Management: </strong>
                        {item.management}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to protect yourself */}
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
                How to Protect Yourself
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Drug interaction management is one of the core competencies of a clinical pharmacist. Here is what the evidence supports for reducing your interaction risk:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  {
                    title: "Maintain a single pharmacy",
                    detail: "When all your prescriptions are filled at one pharmacy, the pharmacist&apos;s computer system can screen for interactions across all your medications simultaneously. Using multiple pharmacies or online pharmacies fragments this safety net.",
                  },
                  {
                    title: "Disclose supplements and OTC medications",
                    detail: "Herbal supplements (St. John&apos;s Wort, ginkgo, garlic, echinacea), vitamins, and OTC drugs all have interaction potential. Pharmacists and physicians cannot screen for interactions they do not know about.",
                  },
                  {
                    title: "Use a drug interaction checker",
                    detail: "Free, validated interaction checkers from Drugs.com, Medscape, or Clinical Pharmacology allow patients to enter their full medication list and screen for interactions. Note severity levels — not all interactions require action.",
                  },
                  {
                    title: "Ask about high-risk drugs specifically",
                    detail: "If you are taking warfarin, lithium, methotrexate, digoxin, cyclosporine, phenytoin, or theophylline — narrow therapeutic index drugs — ask your pharmacist to review any new medication before you start it.",
                  },
                  {
                    title: "Know your grapefruit situation",
                    detail: "If you take a statin, certain antihypertensives, or immunosuppressants, ask your pharmacist explicitly whether grapefruit is a concern. The list of affected drugs is longer than most people expect.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 0.375rem",
                        fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                        fontWeight: 600,
                        color: "var(--ink)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>{item.detail}</p>
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
                <li>CYP enzyme inhibitors can extend a drug&apos;s effective half-life dramatically, causing toxic accumulation at otherwise safe doses.</li>
                <li>CYP enzyme inducers accelerate metabolism, potentially reducing a drug to subtherapeutic levels — causing therapeutic failure rather than toxicity.</li>
                <li>Pharmacodynamic interactions can produce additive, synergistic, or antagonistic effects at drug targets, independent of blood levels.</li>
                <li>The five most dangerous common interactions — warfarin+NSAIDs, SSRIs+MAOIs, statins+CYP3A4 inhibitors, methotrexate+NSAIDs, and ACE inhibitors+potassium-sparing diuretics — have all caused preventable patient deaths.</li>
                <li>Supplements and OTC drugs interact just as seriously as prescription medications; always disclose them to your pharmacist.</li>
                <li>A single pharmacy with a complete medication list is your best structural protection against undetected interactions.</li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div
              style={{
                borderLeft: "3px solid var(--rule)",
                paddingLeft: "1.25rem",
              }}
            >
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
                This article is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Drug interaction information is general in nature and does not account for individual patient factors such as genetics, organ function, or specific medication doses. Never discontinue, add, or change any medication based solely on this content. Always consult a licensed pharmacist or physician before making any medication decisions.
              </p>
            </div>

            {/* References */}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "2rem", marginTop: "1rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1.125rem", fontWeight: 400, color: "var(--ink)", margin: "0 0 0.875rem" }}>
                References &amp; Further Reading
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--ink-soft)" }}>
                <li>Brunton LL, Knollmann BC, eds. <em>Goodman &amp; Gilman&apos;s The Pharmacological Basis of Therapeutics</em>. 14th ed. McGraw-Hill; 2023. Chapter 6 (Drug Metabolism).</li>
                <li>Lynch T, Price A. The effect of cytochrome P450 metabolism on drug response, interactions, and adverse effects. <em>Am Fam Physician</em>. 2007;76(3):391-396.</li>
                <li>Palleria C, et al. Pharmacokinetic drug-drug interaction and their implication in clinical management. <em>J Res Med Sci</em>. 2013;18(7):601-610.</li>
                <li>Flockhart DA. Drug Interactions: Cytochrome P450 Drug Interaction Table. Indiana University School of Medicine; 2007.</li>
              </ol>
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
                <Link href="/learn/otc-pain-relievers" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>
                    PREVIOUS ARTICLE
                  </p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>
                    OTC Pain Relievers
                  </p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Compare acetaminophen, ibuprofen, aspirin, naproxen
                  </p>
                </Link>
                <Link href="/learn/bioavailability" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>
                    NEXT ARTICLE
                  </p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>
                    Bioavailability
                  </p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Why the route of administration changes everything
                  </p>
                </Link>
                <Link href="/simulator" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>
                    INTERACTIVE TOOL
                  </p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>
                    Try the Simulator
                  </p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    See how changing half-life alters drug accumulation
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
