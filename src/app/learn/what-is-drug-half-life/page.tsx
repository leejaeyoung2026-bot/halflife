import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "What is Drug Half-Life? A Complete Guide",
  description:
    "Learn what drug half-life means, how it's calculated, and why it matters for medication dosing. A pharmacist-written guide to understanding t½.",
  openGraph: {
    title: "What is Drug Half-Life? A Complete Guide",
    description:
      "Learn what drug half-life means, how it's calculated, and why it matters for medication dosing. A pharmacist-written guide to understanding t½.",
    url: "https://halflife.vibed-lab.com/learn/what-is-drug-half-life",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Drug Half-Life? A Complete Guide",
    description:
      "Learn what drug half-life means, how it's calculated, and why it matters for medication dosing. A pharmacist-written guide.",
  },
};

const commonDrugHalfLives = [
  { drug: "Aspirin (low dose)", halfLife: "2–3 hours", category: "Analgesic / Antiplatelet" },
  { drug: "Ibuprofen", halfLife: "2 hours", category: "NSAID" },
  { drug: "Acetaminophen", halfLife: "2–3 hours", category: "Analgesic" },
  { drug: "Caffeine", halfLife: "5–6 hours", category: "Stimulant" },
  { drug: "Amoxicillin", halfLife: "1–1.5 hours", category: "Antibiotic" },
  { drug: "Metformin", halfLife: "4–8 hours", category: "Antidiabetic" },
  { drug: "Atorvastatin", halfLife: "14 hours", category: "Statin" },
  { drug: "Amlodipine", halfLife: "30–50 hours", category: "Calcium channel blocker" },
  { drug: "Sertraline", halfLife: "26 hours", category: "Antidepressant (SSRI)" },
  { drug: "Fluoxetine", halfLife: "1–6 days", category: "Antidepressant (SSRI)" },
  { drug: "Diazepam", halfLife: "20–70 hours", category: "Benzodiazepine" },
  { drug: "Warfarin", halfLife: "20–60 hours", category: "Anticoagulant" },
  { drug: "Levothyroxine", halfLife: "6–7 days", category: "Thyroid hormone" },
  { drug: "Amiodarone", halfLife: "40–55 days", category: "Antiarrhythmic" },
];

export default function WhatIsDrugHalfLifePage() {
  return (
    <>
      <style>{`
        .learn-nav-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .learn-nav-link:hover {
          color: var(--accent-hover);
          border-bottom-color: var(--accent-hover);
        }
        .learn-back-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--ink-faint);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.15s ease;
        }
        .learn-back-link:hover {
          color: var(--ink-soft);
        }
      `}</style>

      <section style={{ padding: "8rem 2rem 6rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Back breadcrumb */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link href="/" className="learn-back-link">
              ← Back to HalfLife
            </Link>
          </div>

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
            LEARN — PHARMACOKINETICS BASICS
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--ink)",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is Drug Half-Life? A Complete Guide
          </h1>

          {/* Subtitle / intro meta */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              margin: "0 0 2.5rem",
            }}
          >
            A pharmacist-written explanation of t½ — from the basic definition to
            clinical significance, with real-world examples and a reference table
            of common medications.
          </p>

          {/* Rule */}
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--rule)",
              marginBottom: "3rem",
            }}
          />

          {/* Article body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.75rem",
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--ink-soft)",
            }}
          >

            {/* Section 1: Hook */}
            <div>
              <p style={{ margin: 0 }}>
                When your doctor says &quot;take this every 6 hours,&quot; have you ever
                wondered why it&apos;s not every 5 hours, or every 12? When a pharmacist
                tells you that you need to wait two weeks after stopping one antidepressant
                before starting another, why exactly two weeks? And why does a single cup
                of coffee keep some people wired until midnight while others can sleep
                perfectly after an espresso at 9pm?
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                The answer to all of these questions comes back to the same concept:
                drug half-life. It is one of the most important ideas in pharmacology,
                and once you understand it, a surprising amount of how medications
                work — and why they are prescribed the way they are — will suddenly
                make intuitive sense.
              </p>
            </div>

            {/* Section 2: Definition */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                What is drug half-life (t½)?
              </h2>
              <p style={{ margin: 0 }}>
                The <strong style={{ color: "var(--ink)", fontWeight: 600 }}>elimination half-life</strong> of a drug,
                written as t½, is the time it takes for the concentration of that drug
                in your bloodstream to fall by exactly 50%. Put simply: if you have
                200 mg of a drug with a 4-hour half-life in your system right now,
                you will have 100 mg remaining in 4 hours, 50 mg in 8 hours,
                25 mg in 12 hours, and so on.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                The word &quot;elimination&quot; is key. Half-life describes how quickly the
                body removes a drug — not how quickly it works. A drug can start
                working within minutes while taking days to fully clear your system,
                or it can take hours to reach peak effect but clear relatively quickly.
                Half-life and onset of action are independent properties.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                It is also worth noting that half-life specifically refers to the
                concentration in <em>plasma</em> (the liquid component of blood), which
                is used as a proxy for drug concentration throughout the body.
                Measuring plasma concentration is practical and reproducible, making it
                the standard reference point in pharmacokinetics.
              </p>
            </div>

            {/* Section 3: Mathematics */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                The mathematics behind it
              </h2>
              <p style={{ margin: 0 }}>
                Most drugs follow what pharmacologists call <strong style={{ color: "var(--ink)", fontWeight: 600 }}>first-order elimination kinetics</strong>.
                This means the rate at which the drug is removed from your body is
                directly proportional to the current concentration — the more drug
                present, the faster it is eliminated. As the concentration falls,
                elimination slows proportionally. This relationship produces a smooth
                exponential decay curve.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                The mathematical relationship is expressed using the elimination rate
                constant (k<sub>e</sub>):
              </p>

              {/* Math box */}
              <div
                style={{
                  margin: "1.5rem 0",
                  padding: "1.5rem 1.75rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "1.0625rem",
                    color: "var(--ink)",
                    margin: "0 0 0.75rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  k<sub>e</sub> = ln(2) / t½ ≈ 0.693 / t½
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "1.0625rem",
                    color: "var(--ink)",
                    margin: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  C(t) = C₀ × e<sup>−k<sub>e</sub>t</sup>
                </p>
              </div>

              <p style={{ margin: 0 }}>
                Where C₀ is the initial drug concentration and C(t) is the
                concentration at time t. The natural logarithm of 2 (ln 2 ≈ 0.693)
                appears because you are solving for the point at which exactly half
                the drug remains.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                You do not need to memorize these equations to understand half-life.
                The key insight is that elimination is <em>always a fixed fraction</em> of
                whatever is left, not a fixed amount. This is what makes it exponential:
                each half-life removes exactly 50% of the remaining drug, regardless of
                whether that is 1,000 mg or 1 mg.
              </p>
            </div>

            {/* Section 4: Caffeine example */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                A real-world walkthrough: caffeine
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Caffeine has an average half-life of about 5 hours in healthy adults,
                though it can range from 3 to 7 hours depending on individual factors
                (more on those below). Let us trace a typical morning coffee scenario
                step by step. You drink a large coffee at 8:00 AM, delivering
                approximately 200 mg of caffeine.
              </p>

              {/* Caffeine table */}
              <div
                style={{
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "var(--cream)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      <th
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--ink-faint)",
                          padding: "0.875rem 1.25rem",
                          textAlign: "left",
                        }}
                      >
                        Time
                      </th>
                      <th
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--ink-faint)",
                          padding: "0.875rem 1.25rem",
                          textAlign: "right",
                        }}
                      >
                        Caffeine remaining
                      </th>
                      <th
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--ink-faint)",
                          padding: "0.875rem 1.25rem",
                          textAlign: "right",
                        }}
                      >
                        Half-lives elapsed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: "8:00 AM", amount: "200 mg", halves: "0" },
                      { time: "1:00 PM", amount: "100 mg", halves: "1" },
                      { time: "6:00 PM", amount: "50 mg", halves: "2" },
                      { time: "11:00 PM", amount: "25 mg", halves: "3" },
                      { time: "4:00 AM", amount: "12.5 mg", halves: "4" },
                      { time: "9:00 AM (next day)", amount: "6.25 mg", halves: "5" },
                    ].map((row, i) => (
                      <tr
                        key={row.time}
                        style={{
                          borderBottom: i < 5 ? "1px solid var(--rule)" : "none",
                          backgroundColor: i % 2 === 0 ? "transparent" : "var(--cream)",
                        }}
                      >
                        <td
                          style={{
                            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                            fontSize: "0.9rem",
                            color: "var(--ink-soft)",
                            padding: "0.75rem 1.25rem",
                          }}
                        >
                          {row.time}
                        </td>
                        <td
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.9rem",
                            color: "var(--ink)",
                            padding: "0.75rem 1.25rem",
                            textAlign: "right",
                          }}
                        >
                          {row.amount}
                        </td>
                        <td
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.9rem",
                            color: "var(--accent)",
                            padding: "0.75rem 1.25rem",
                            textAlign: "right",
                          }}
                        >
                          {row.halves}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ margin: 0 }}>
                Notice that even at 11:00 PM — 15 hours after your morning coffee —
                there is still 25 mg of caffeine in your system. That is roughly
                equivalent to a quarter cup of coffee. For someone who is sensitive to
                caffeine&apos;s stimulant effects, this residual amount can meaningfully
                disrupt sleep quality. This is not hypothetical; multiple studies have
                confirmed that caffeine consumed 6 hours before bedtime reduces total
                sleep time by an average of one hour.
              </p>
            </div>

            {/* AdSense — mid-article */}
            <div className="ad-container" style={{ margin: "2rem 0" }}>
              <AdUnit slot="2345678901" format="auto" />
            </div>

            {/* Section 5: Why it matters */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Why half-life matters in practice
              </h2>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Dosing frequency
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                Half-life is the primary driver behind how often a drug needs to be
                taken. As a general rule, a drug is dosed at intervals of one to two
                half-lives to maintain plasma concentrations within the therapeutic
                window — the range where the drug is effective without being toxic.
                Ibuprofen, with its 2-hour half-life, must be taken every 4–6 hours to
                sustain anti-inflammatory effects. Fluoxetine (Prozac), with a half-life
                of 1 to 6 days, can maintain adequate plasma levels with a single daily
                dose — and actually remains detectable in the body for weeks after the
                last tablet.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Time to full elimination
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                A drug is considered essentially eliminated after 5 to 7 half-lives.
                At that point, less than 1–3% of the original dose remains — a
                pharmacologically insignificant amount for most drugs. This means a
                drug with a 6-hour half-life clears your system in roughly 30–42 hours.
                A drug with a 5-day half-life takes 25 to 35 days. This rule of thumb
                has enormous clinical relevance: it determines washout periods before
                switching medications, guides drug testing timelines, and informs how
                long a drug&apos;s effects (and side effects) will persist after stopping.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Drug interactions involving half-life
              </h3>
              <p style={{ margin: 0 }}>
                Many drug interactions work by changing a drug&apos;s half-life. When one
                drug inhibits the liver enzymes that metabolize another, clearance slows
                and the half-life effectively lengthens — causing the drug to accumulate
                to higher-than-intended concentrations. Conversely, enzyme inducers
                speed up metabolism, shorten effective half-life, and may reduce a
                drug&apos;s efficacy. Fluconazole, for instance, inhibits CYP2C9 and can
                more than double the half-life of warfarin, dramatically increasing
                bleeding risk.
              </p>
            </div>

            {/* Section 6: Factors */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Factors that alter drug half-life
              </h2>
              <p style={{ margin: "0 0 1.5rem" }}>
                The half-life values quoted in drug references are population averages.
                In real patients, they can vary substantially — sometimes by a factor
                of 5 to 10 — due to the following variables.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                <div
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Age
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                    Neonates (newborns) have immature liver enzyme systems and
                    underdeveloped renal function, dramatically prolonging the half-life
                    of many drugs. Chloramphenicol, for example, has a half-life of
                    about 4 hours in adults but can exceed 24 hours in newborns —
                    a difference that historically caused &quot;grey baby syndrome&quot; before
                    neonatal dosing guidelines existed. At the other extreme, elderly
                    patients typically show reduced hepatic blood flow, decreased enzyme
                    activity, and lower glomerular filtration rates, all of which slow
                    drug elimination and extend half-lives.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Liver function and CYP enzymes
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                    The liver is the primary site of drug metabolism, and the
                    cytochrome P450 (CYP) enzyme family does most of the heavy
                    lifting. Liver disease — including cirrhosis, hepatitis, and
                    liver failure — reduces both the quantity and activity of these
                    enzymes. A drug that normally has a 4-hour half-life in a
                    healthy liver might have a 12-hour or longer half-life in
                    someone with severe hepatic impairment. This is why dose
                    reductions are frequently required for liver-metabolized drugs in
                    patients with hepatic disease.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Kidney function (renal clearance)
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                    Many drugs — or their active metabolites — are excreted via the
                    kidneys. Renal impairment slows this excretion and prolongs
                    effective half-life. Drugs like digoxin, metformin, and most
                    antibiotics require dose adjustment based on kidney function,
                    typically measured as glomerular filtration rate (eGFR) or
                    creatinine clearance (CrCl). Failure to adjust dosing in patients
                    with renal disease is one of the most common causes of preventable
                    drug toxicity.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Genetic polymorphisms (fast and slow metabolizers)
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                    Genetic variation in CYP enzymes means that the same drug,
                    at the same dose, can produce wildly different plasma concentrations
                    in different people. CYP2D6 is a well-studied example: approximately
                    7–10% of Caucasians carry two loss-of-function alleles and are
                    &quot;poor metabolizers,&quot; meaning drugs metabolized by this enzyme
                    accumulate to much higher levels. At the other end, &quot;ultrarapid
                    metabolizers&quot; clear certain drugs so quickly that standard doses
                    produce no therapeutic effect at all. Pharmacogenomic testing can
                    now identify a patient&apos;s metabolizer status before prescribing,
                    though this remains underutilized in routine clinical practice.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Drug interactions
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                    Co-administered drugs can either inhibit or induce the enzymes
                    responsible for clearing a particular drug. CYP inhibitors
                    (fluconazole, ketoconazole, clarithromycin, grapefruit furanocoumarins)
                    reduce metabolic clearance, extending half-life and raising drug
                    levels. CYP inducers (rifampicin, carbamazepine, St John&apos;s Wort)
                    do the opposite, accelerating clearance and potentially rendering
                    a drug ineffective. The practical magnitude of these interactions
                    ranges from trivial to life-threatening depending on the drug
                    involved and the therapeutic index.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Clinical significance */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Clinical significance: beyond the basics
              </h2>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Drug accumulation with repeat dosing
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                When a drug is taken repeatedly before the previous dose has fully
                eliminated, drug concentrations build up — a phenomenon called
                accumulation. This is not dangerous by design; most dosing schedules
                intentionally cause accumulation up to a predictable plateau called
                steady state. The degree of accumulation depends directly on the ratio
                of dosing interval to half-life. A drug given every half-life accumulates
                to roughly double the single-dose concentration. Drugs given more
                frequently accumulate more.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Steady state
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                Steady state is reached when the amount of drug entering the body
                with each dose equals the amount being eliminated between doses. At
                steady state, plasma concentrations fluctuate predictably between a
                peak (C<sub>max</sub>) and trough (C<sub>min</sub>), but the average
                level remains constant. Steady state is reached after approximately
                4 to 5 half-lives of continuous dosing, regardless of the dose size.
                This is why antidepressants — which have half-lives measured in days —
                take weeks to reach their therapeutic plateau, and why the full clinical
                effect of a new medication may not be apparent for some time after
                starting it.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Loading doses
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                For drugs with long half-lives where waiting 4–5 half-lives to reach
                therapeutic steady state is clinically unacceptable, a loading dose
                (or bolus) is used. By giving a larger initial dose, the prescriber
                rapidly achieves therapeutic plasma concentrations, then switches to
                a lower maintenance dose to sustain them. Digoxin, amiodarone,
                and vancomycin are classic examples where loading doses are
                routinely employed.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Washout periods
              </h3>
              <p style={{ margin: 0 }}>
                Before switching between certain medications, a washout period is
                required to allow the first drug to clear sufficiently. The most
                clinically critical example is the transition between MAO inhibitors
                (MAOIs) and SSRIs: combining them can cause a life-threatening
                serotonin syndrome. Fluoxetine, with its 1 to 6-day half-life plus
                an active metabolite (norfluoxetine) with a 4 to 16-day half-life,
                requires a 5-week washout before starting an MAOI. Understanding
                half-life makes these requirements logical rather than arbitrary.
              </p>
            </div>

            {/* Section 8: Reference table */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Common drug half-lives at a glance
              </h2>
              <p style={{ margin: "0 0 1.5rem" }}>
                The following table lists typical half-lives for frequently
                encountered medications, based on values in healthy adults with
                normal organ function. Individual variation is expected.
              </p>

              <div
                style={{
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "var(--cream)",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {["Drug", "Half-Life (t½)", "Drug Class"].map((h) => (
                        <th
                          key={h}
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.6875rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--ink-faint)",
                            padding: "0.875rem 1.25rem",
                            textAlign: "left",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {commonDrugHalfLives.map((row, i) => (
                      <tr
                        key={row.drug}
                        style={{
                          borderBottom:
                            i < commonDrugHalfLives.length - 1
                              ? "1px solid var(--rule)"
                              : "none",
                          backgroundColor: i % 2 === 0 ? "transparent" : "var(--cream)",
                        }}
                      >
                        <td
                          style={{
                            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            color: "var(--ink)",
                            padding: "0.75rem 1.25rem",
                          }}
                        >
                          {row.drug}
                        </td>
                        <td
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: "0.875rem",
                            color: "var(--accent)",
                            padding: "0.75rem 1.25rem",
                          }}
                        >
                          {row.halfLife}
                        </td>
                        <td
                          style={{
                            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                            fontSize: "0.8375rem",
                            color: "var(--ink-soft)",
                            padding: "0.75rem 1.25rem",
                          }}
                        >
                          {row.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p
                style={{
                  margin: "0.875rem 0 0",
                  fontSize: "0.8125rem",
                  color: "var(--ink-faint)",
                  fontStyle: "italic",
                }}
              >
                Values represent typical ranges in healthy adults. Significant variation
                occurs with age, organ impairment, genetic polymorphisms, and
                drug interactions.
              </p>
            </div>

            {/* CTA: Try simulator */}
            <div
              style={{
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                padding: "1.75rem 1.75rem",
                backgroundColor: "var(--cream)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                See half-life in action
              </h3>
              <p style={{ margin: "0 0 1.25rem", fontSize: "0.9375rem" }}>
                The HalfLife simulator lets you choose any drug, set a dose and schedule,
                and watch the concentration-time curve build in real time. It is the
                fastest way to develop an intuitive feel for how half-life shapes drug
                behavior — especially with repeat dosing and steady state.
              </p>
              <Link
                href="/simulator"
                style={{
                  display: "inline-block",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "8px",
                  letterSpacing: "0.01em",
                }}
              >
                Open the Simulator →
              </Link>
            </div>

            {/* Navigation to other articles */}
            <div>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "var(--rule)",
                  marginBottom: "1.5rem",
                }}
              />
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                <Link href="/learn/pharmacokinetics-101" className="learn-nav-link">
                  Pharmacokinetics 101: How Drugs Work in Your Body →
                </Link>
              </div>
            </div>

            {/* Medical disclaimer */}
            <div
              style={{
                borderLeft: "3px solid var(--rule)",
                paddingLeft: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                Medical disclaimer
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  color: "var(--ink-faint)",
                  lineHeight: 1.65,
                }}
              >
                This article is intended for educational purposes only and does not
                constitute medical advice. Drug half-life values are population averages
                and may differ significantly in individual patients due to age, organ
                function, genetics, and concurrent medications. Do not adjust your
                medication regimen based on information from this article. Always
                consult your pharmacist or physician for guidance specific to your
                clinical situation.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
