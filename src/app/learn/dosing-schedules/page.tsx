import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Why Dosing Schedules Exist: The Science of Medication Timing",
  description:
    "Understand why some medications are taken once daily while others require every 4-6 hours. Learn about therapeutic windows, half-life, and optimal timing.",
  openGraph: {
    title: "Why Dosing Schedules Exist: The Science of Medication Timing",
    description:
      "Understand why some medications are taken once daily while others require every 4-6 hours. Learn about therapeutic windows, half-life, and optimal timing.",
    url: "https://halflife.vibed-lab.com/learn/dosing-schedules",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Dosing Schedules Exist: The Science of Medication Timing",
    description:
      "The science of therapeutic windows and half-life — why some drugs are taken once daily while others need every 4-6 hours.",
  },
};

const dosingIntervals = [
  {
    interval: "Every 4 hours (Q4H)",
    halfLifeRange: "< 2 hours",
    examples: "Immediate-release oxycodone, some antibiotics (ampicillin), short-acting bronchodilators",
    rationale: "Very short half-lives cause drug levels to drop out of the therapeutic window within 4 hours. Frequent dosing maintains efficacy around the clock — though this schedule is difficult to sustain.",
  },
  {
    interval: "Every 6 hours (Q6H)",
    halfLifeRange: "2–4 hours",
    examples: "Immediate-release ibuprofen, amoxicillin, codeine",
    rationale: "After 4 doses (24 hours), the drug has reached near-steady-state. Plasma levels trough to the lower boundary of the therapeutic window but remain above the minimum effective concentration.",
  },
  {
    interval: "Every 8 hours (Q8H)",
    halfLifeRange: "4–8 hours",
    examples: "Metformin IR, gabapentin, vancomycin (some regimens)",
    rationale: "Three-times-daily dosing provides a balance between coverage and adherence burden. The 8-hour interval keeps plasma concentrations within the therapeutic range for most drugs in this half-life category.",
  },
  {
    interval: "Every 12 hours (Q12H / BID)",
    halfLifeRange: "8–16 hours",
    examples: "Metoprolol ER, doxycycline, naproxen, quetiapine XR",
    rationale: "Twice daily is a major adherence sweet spot. Patients typically take doses morning and evening, aligning with daily routines. Most ER formulations that extend a 3–4 hour drug are designed to achieve twice-daily coverage.",
  },
  {
    interval: "Every 24 hours (Q24H / QD)",
    halfLifeRange: "16–40+ hours",
    examples: "Levothyroxine (t½ 7 days), amlodipine (t½ 30–50 h), atorvastatin, lisinopril, sertraline",
    rationale: "Once-daily dosing maximizes adherence. A drug with a 24-hour half-life will drop to 50% of its peak by the time the next dose is due — but if the therapeutic window is wide enough, even 50% of peak is still well above the minimum effective concentration.",
  },
  {
    interval: "Weekly",
    halfLifeRange: "Several days to weeks",
    examples: "Methotrexate (RA), alendronate (bisphosphonates), fluoxetine weekly formulation",
    rationale: "Drugs with extremely long half-lives or drugs that bind irreversibly to their targets (bisphosphonates bind permanently to bone matrix) are dosed weekly. Methotrexate&apos;s weekly dosing also reflects its toxicity — daily dosing produces cumulative toxicity even when individual doses are small.",
  },
];

export default function DosingSchedulesPage() {
  return (
    <>
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

        .interval-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          background-color: var(--paper);
          transition: border-color 0.15s ease;
        }
        .interval-card:hover {
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
            {" / "}Dosing Schedules
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
            PHARMACOKINETICS — ARTICLE 8
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
            Why Dosing Schedules Exist — The Science of &ldquo;Every 6 Hours&rdquo;
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
            You have probably been told to take a medication &ldquo;every six hours&rdquo; or &ldquo;once daily,&rdquo; but why? Why not take all your antibiotic doses at once on Monday morning? Why does the package insert insist on a specific interval? The answer lies in pharmacokinetics — specifically in the relationship between a drug&apos;s half-life, the therapeutic window, and the mathematics of drug accumulation. This article explains the science that pharmacists use to design every dosing regimen.
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

            {/* Opening */}
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
                Why Not Take It All at Once?
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                The intuitive answer is &ldquo;it would be too much.&rdquo; But the pharmacokinetic answer is more precise: taking the entire weekly dose at once would create plasma concentrations far above the maximum tolerated concentration, producing toxicity. Then the drug would be completely eliminated within days, leaving you unprotected for the rest of the week.
              </p>
              <p style={{ margin: 0 }}>
                Drug concentration in the blood needs to stay within a specific range — not too high (causing toxicity), not too low (causing therapeutic failure). This range is called the <strong style={{ color: "var(--ink)", fontWeight: 600 }}>therapeutic window</strong>, and every dosing schedule is specifically designed to keep the drug&apos;s plasma concentration inside this window continuously.
              </p>
            </div>

            {/* Therapeutic Window */}
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
                The Therapeutic Window: MEC to MTC
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                The therapeutic window is bounded by two critical thresholds:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    border: "1px solid var(--rule)",
                    borderRadius: "8px",
                    padding: "1rem 1.25rem",
                    backgroundColor: "var(--cream)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    MEC
                  </span>
                  <div>
                    <p style={{ margin: "0 0 0.25rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontWeight: 600, color: "var(--ink)", fontSize: "0.9375rem" }}>
                      Minimum Effective Concentration
                    </p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                      The lowest plasma concentration at which the drug produces a measurable therapeutic effect. Below this, the drug is essentially inactive regardless of how much was administered. For an antibiotic, falling below the MEC means bacteria can regrow freely.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid var(--rule)",
                    borderRadius: "8px",
                    padding: "1rem 1.25rem",
                    backgroundColor: "var(--cream)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.75rem",
                      color: "#B45309",
                      fontWeight: 500,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    MTC
                  </span>
                  <div>
                    <p style={{ margin: "0 0 0.25rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontWeight: 600, color: "var(--ink)", fontSize: "0.9375rem" }}>
                      Minimum Toxic Concentration
                    </p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                      The lowest concentration at which adverse effects reliably appear. Above this threshold, the drug begins to cause harm — and the higher the concentration climbs above the MTC, the more severe the toxicity. For some drugs (digoxin, lithium, aminoglycoside antibiotics), the gap between MEC and MTC is dangerously narrow.
                    </p>
                  </div>
                </div>
              </div>
              <p style={{ margin: "0 0 1rem" }}>
                The ratio of MTC to MEC — called the <strong style={{ color: "var(--ink)", fontWeight: 600 }}>therapeutic index</strong> — varies enormously between drugs. Amoxicillin has a very wide therapeutic index: you could triple the usual dose and produce no serious toxicity. Digoxin has a narrow index: the effective dose and the toxic dose are barely distinguishable. This is why digoxin levels must be monitored with blood tests — small deviations from the target concentration have major clinical consequences.
              </p>
              <p style={{ margin: 0 }}>
                The goal of any dosing schedule is to keep plasma concentrations oscillating within the therapeutic window: high enough to work, low enough to be safe, consistently, around the clock.
              </p>
            </div>

            {/* How half-life determines dosing frequency */}
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
                How Half-Life Determines Dosing Frequency
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Half-life is the single most important pharmacokinetic parameter for dosing schedule design. The fundamental principle is this: to keep plasma concentrations within the therapeutic window, the next dose must be given before the previous dose falls below the MEC. How long that takes is governed by the half-life.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                A useful rule of thumb: for most drugs, the dosing interval is approximately 1 to 2 half-lives. A drug with a 4-hour half-life given every 8 hours will, by the time the second dose is due, have fallen to 25% of its initial concentration — which for many drugs is still above the MEC. A drug with a 2-hour half-life given every 8 hours would fall to just 1.5% of its initial level — almost certainly subtherapeutic.
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
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  ACCUMULATION RULE
                </p>
                <p style={{ margin: "0 0 0.625rem", fontSize: "0.9375rem" }}>
                  When doses are given at regular intervals, drug accumulates in the body until a <strong style={{ color: "var(--ink)", fontWeight: 600 }}>steady state</strong> is reached — where the amount eliminated between doses exactly equals the amount given. This takes approximately <strong style={{ color: "var(--accent)", fontWeight: 600 }}>4 to 5 half-lives</strong> to achieve, regardless of dosing frequency.
                </p>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                  Example: A drug with a 6-hour half-life given every 6 hours reaches steady state after 24–30 hours (4–5 half-lives). At steady state, the average plasma concentration is approximately 1.44 times the single-dose concentration.
                </p>
              </div>
              <p style={{ margin: 0 }}>
                This is why some drugs take days or weeks before you feel their full effect: antidepressants (SSRIs) with half-lives of 24+ hours need 5–7 days to reach steady state; amiodarone with a half-life of 40–55 days requires months to fully accumulate. The patient is not failing to respond — the drug is still climbing to its therapeutic plateau.
              </p>
            </div>

            {/* Common dosing intervals */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1.25rem",
                }}
              >
                Common Dosing Intervals and Their Logic
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {dosingIntervals.map((item) => (
                  <div key={item.interval} className="interval-card">
                    <div
                      style={{
                        display: "flex",
                        gap: "1.25rem",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        marginBottom: "0.625rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                          fontSize: "1.0625rem",
                          fontWeight: 400,
                          color: "var(--ink)",
                        }}
                      >
                        {item.interval}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "0.75rem",
                          color: "var(--accent)",
                          fontWeight: 500,
                        }}
                      >
                        t½ {item.halfLifeRange}
                      </span>
                    </div>
                    <p style={{ margin: "0 0 0.5rem", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {item.rationale}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.8125rem",
                        color: "var(--ink-faint)",
                        fontStyle: "italic",
                      }}
                    >
                      Examples: {item.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AdSense — mid-article */}
            <div className="ad-container" style={{ margin: "2rem 0" }}>
              <AdUnit slot="2345678901" format="auto" />
            </div>

            {/* Missed doses */}
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
                What Happens When You Miss a Dose?
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                The clinical consequence of a missed dose depends entirely on the drug&apos;s half-life and therapeutic window:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1rem" }}>
                {[
                  {
                    title: "Short half-life, narrow therapeutic window (e.g., antiepileptics, immunosuppressants)",
                    impact: "High risk. A single missed dose can drop plasma levels below the MEC within hours. For antiepileptics, this can precipitate seizures. For organ transplant immunosuppressants, rejection can begin within days of subtherapeutic levels.",
                  },
                  {
                    title: "Short half-life, wide therapeutic window (e.g., most antibiotics)",
                    impact: "Moderate risk. Missing a dose creates a gap in antibiotic coverage, allowing bacteria to regrow. For bacterial infections, especially time-sensitive ones like severe cellulitis or pneumonia, this extends illness duration and risks treatment failure.",
                  },
                  {
                    title: "Long half-life, wide therapeutic window (e.g., levothyroxine, statins, most antihypertensives)",
                    impact: "Lower acute risk. The drug&apos;s long half-life means plasma concentrations decline slowly — a single missed dose rarely causes a detectable drop in effect. The standard advice is to take the missed dose as soon as you remember, unless it is nearly time for the next dose (in which case skip it). Never double up.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p style={{ margin: "0 0 0.375rem", fontWeight: 600, color: "var(--ink)", fontSize: "0.9rem" }}>{item.title}</p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.65 }}>{item.impact}</p>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0 }}>
                The general FDA-recommended guidance is: if you remember within half the dosing interval, take the missed dose. If more than half the interval has passed, skip it and resume your regular schedule. Never take two doses at once to compensate for a missed one.
              </p>
            </div>

            {/* Double dose consequences */}
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
                What Happens When You Double Up?
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Taking two doses at once is pharmacokinetically equivalent to taking double the prescribed dose. For drugs with wide therapeutic indices, this typically causes exaggerated side effects at worst. For narrow therapeutic index drugs, it can be dangerous:
              </p>
              <div
                style={{
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  backgroundColor: "var(--cream)",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#B45309",
                    margin: "0 0 0.75rem",
                    fontWeight: 500,
                  }}
                >
                  HIGH-RISK DOUBLE-DOSING SCENARIOS
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <li><strong style={{ color: "var(--ink)" }}>Warfarin:</strong> A double dose raises INR significantly, potentially causing dangerous bleeding for 2–3 days.</li>
                  <li><strong style={{ color: "var(--ink)" }}>Metformin:</strong> Doubled doses increase lactic acidosis risk, especially in patients with renal impairment.</li>
                  <li><strong style={{ color: "var(--ink)" }}>Digoxin:</strong> Double dosing can rapidly push levels into the toxic range, causing life-threatening arrhythmias.</li>
                  <li><strong style={{ color: "var(--ink)" }}>Insulin:</strong> Accidental double dosing causes hypoglycemia — a medical emergency requiring immediate sugar intake or IV dextrose.</li>
                  <li><strong style={{ color: "var(--ink)" }}>Antihypertensives:</strong> Double-dosing can cause acute hypotension, dizziness, and falls — particularly dangerous in elderly patients.</li>
                </ul>
              </div>
            </div>

            {/* Extended release mechanics */}
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
                Extended Release Formulations: Engineering the Half-Life
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Extended release technology does not change the drug&apos;s true half-life — it changes the rate of absorption, which functionally mimics a longer half-life. By releasing drug slowly over 8–24 hours, the formulation keeps plasma concentrations within the therapeutic window without the sharp peaks and troughs of immediate-release dosing.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The most common ER mechanisms include:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem" }}>
                {[
                  {
                    tech: "Matrix tablet",
                    description: "Drug embedded in a hydrophilic polymer matrix. As the matrix hydrates, it forms a gel layer through which drug slowly diffuses. Common for metformin ER, nifedipine GITS.",
                  },
                  {
                    tech: "Osmotic pump (OROS)",
                    description: "Drug core surrounded by a semipermeable membrane with a laser-drilled hole. Water enters osmotically, building pressure that pushes drug out at a constant rate for 24 hours. Used for methylphenidate OROS (Concerta), nifedipine OROS.",
                  },
                  {
                    tech: "Multi-particulate (beads/pellets)",
                    description: "Drug coated in layers of release-controlling polymers. Different coating thicknesses release drug at different times throughout GI transit. Common for some ER capsules — the beads can be opened and sprinkled on food, unlike matrix tablets.",
                  },
                  {
                    tech: "Ion exchange resin complex",
                    description: "Drug bound to ion exchange resin; drug releases as pH changes along the GI tract. Used for some cough suppressant and stimulant ER products.",
                  },
                ].map((item) => (
                  <div
                    key={item.tech}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <div>
                      <p style={{ margin: "0 0 0.3rem", fontWeight: 600, color: "var(--ink)", fontSize: "0.9rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif" }}>{item.tech}</p>
                      <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chronopharmacology */}
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
                Chronopharmacology — Why the Time of Day Matters
              </h2>
              <p style={{ margin: "0 0 1rem" }}>
                Chronopharmacology is the study of how the body&apos;s circadian rhythms affect drug pharmacokinetics and pharmacodynamics. Both how the body processes drugs (absorption, metabolism, excretion) and how organs respond to drugs fluctuate in predictable 24-hour cycles. This means the timing of your dose — not just the dose itself — can significantly affect efficacy and side effects.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  {
                    drug: "Statins at bedtime",
                    explanation: "The liver produces most of its cholesterol during the night. HMG-CoA reductase (the enzyme statins block) is most active between midnight and 2 AM. Short-acting statins like simvastatin and lovastatin are significantly more effective when taken at bedtime than in the morning. Long-acting statins (rosuvastatin, atorvastatin) are less time-sensitive due to their long half-lives.",
                  },
                  {
                    drug: "Antihypertensives and morning blood pressure surge",
                    explanation: "Blood pressure rises sharply in the hours after waking — the circadian morning surge — which is associated with elevated risk of myocardial infarction and stroke. Some guidelines recommend bedtime dosing of certain antihypertensives (particularly ACE inhibitors and ARBs) to ensure peak drug levels coincide with the morning surge rather than trailing off overnight.",
                  },
                  {
                    drug: "Aspirin for cardiovascular protection",
                    explanation: "Platelets are most aggregable in the morning. There is evidence that evening aspirin dosing may provide more effective antiplatelet coverage during the high-risk morning period. Clinical evidence is mixed, but the biological rationale is sound.",
                  },
                  {
                    drug: "Corticosteroids and adrenal suppression",
                    explanation: "Cortisol is normally produced in a pulsatile pattern peaking in the early morning. Taking oral corticosteroids (prednisone) in the morning mirrors this natural cortisol peak and minimizes suppression of the hypothalamic-pituitary-adrenal axis. Evening corticosteroid dosing disrupts the natural trough and causes more adrenal suppression.",
                  },
                  {
                    drug: "Iron supplements and acid secretion",
                    explanation: "Iron absorption is enhanced by gastric acid. Gastric acid secretion peaks in the early afternoon, making iron supplements most bioavailable when taken around that time. Iron also absorbs better on an empty stomach, but this must be balanced against GI tolerability.",
                  },
                ].map((item) => (
                  <div
                    key={item.drug}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 0.5rem",
                        fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1rem",
                        color: "var(--ink)",
                      }}
                    >
                      {item.drug}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.65 }}>{item.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical adherence tips */}
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
                Practical Tips for Medication Adherence
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                Non-adherence is the leading cause of preventable medication-related hospital admissions. Research shows that adherence drops dramatically as dosing frequency increases: patients take about 80% of once-daily medications as prescribed, but only about 50% of four-times-daily medications. Here is what the evidence supports:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  { tip: "Anchor doses to existing habits", detail: "Pair your medication with something you already do every day — morning coffee, brushing teeth, a specific meal. Habit-stacking dramatically improves adherence for once-daily and twice-daily medications." },
                  { tip: "Use a pill organizer for complex regimens", detail: "If you take multiple medications on different schedules, a weekly pill organizer makes it visually clear whether you have taken today&apos;s doses. This eliminates the most common cause of missed doses: uncertainty about whether you already took it." },
                  { tip: "Set phone alarms for short-interval drugs", detail: "For medications that must be taken every 4–8 hours (antibiotics, short-acting pain medications), setting alarms is the most reliable adherence tool. The inconvenient truth is that human memory is not designed to maintain 4-hour medication intervals." },
                  { tip: "Never adjust doses without consulting your pharmacist", detail: "When side effects are bothersome, patients often halve doses or reduce frequency on their own. For many drugs, even small dose reductions drop plasma levels below the MEC, producing therapeutic failure while only partially reducing side effects. Consult your pharmacist — there are often better alternatives." },
                  { tip: "Understand why the schedule exists", detail: "Patients who understand the pharmacokinetic rationale for their dosing schedule are consistently more adherent. Now that you know that your antibiotic&apos;s Q8H schedule is designed to keep bacteria-killing concentrations above the MEC around the clock, skipping a dose becomes a decision you make with full awareness of its consequences." },
                ].map((item) => (
                  <div
                    key={item.tip}
                    style={{
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p style={{ margin: "0 0 0.375rem", fontWeight: 600, color: "var(--ink)", fontSize: "0.9375rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif" }}>{item.tip}</p>
                    <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.65 }}>{item.detail}</p>
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
                <li>Dosing schedules exist to keep plasma concentrations within the therapeutic window — above the MEC and below the MTC — at all times.</li>
                <li>Half-life is the primary determinant of dosing frequency: the longer the half-life, the less frequently a drug needs to be taken.</li>
                <li>Steady state is reached after 4–5 half-lives of regular dosing; this is why some drugs take days or weeks to produce their full effect.</li>
                <li>Missing a dose of a short-half-life, narrow-therapeutic-index drug (antiepileptics, immunosuppressants) can have serious clinical consequences within hours.</li>
                <li>Extended release formulations mimic long-half-life behavior by controlling absorption rate, enabling once-daily dosing for otherwise short-acting drugs.</li>
                <li>Chronopharmacology shows that when you take certain drugs matters: statins at night, morning corticosteroids, and timed antihypertensives all exploit circadian biology.</li>
                <li>Non-adherence is the leading cause of preventable medication-related hospitalizations — understanding why your schedule exists is the first step to following it.</li>
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
                This article is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Dosing guidance described in this article is general pharmacological information and may not apply to your specific situation, medications, or health conditions. Never alter a dosing schedule prescribed by your physician or pharmacist without professional consultation. If you are unsure about a missed dose or drug interaction, contact your pharmacist or healthcare provider immediately.
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
                <Link href="/learn/bioavailability" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>PREVIOUS ARTICLE</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Bioavailability</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Why how you take a drug changes how much works
                  </p>
                </Link>
                <Link href="/learn" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>ALL ARTICLES</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Back to Learn</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Explore all pharmacokinetics articles
                  </p>
                </Link>
                <Link href="/simulator" className="continue-card">
                  <p style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>INTERACTIVE TOOL</p>
                  <p style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1rem", color: "var(--ink)", margin: "0 0 0.375rem" }}>Try the Simulator</p>
                  <p style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    Watch steady-state accumulation and dosing intervals in real time
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
