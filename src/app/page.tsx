import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "See How Drugs Move Through Your Body",
  description:
    "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Explore 35+ common drugs with clinically accurate pharmacokinetic data. Built by a licensed pharmacist.",
  openGraph: {
    title: "HalfLife — See How Drugs Move Through Your Body",
    description:
      "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Explore 35+ common drugs. Built by a licensed pharmacist.",
    url: "https://halflife.vibed-lab.com",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalfLife — See How Drugs Move Through Your Body",
    description:
      "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Explore 35+ common drugs. Built by a licensed pharmacist.",
  },
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: "Rx",
    title: "35+ Common Drugs",
    description:
      "From caffeine to prescription medications, explore accurate half-life data sourced from clinical pharmacokinetic references.",
  },
  {
    icon: "∿",
    title: "Multi-Dose Simulation",
    description:
      "See how drug levels build up with repeated dosing and reach steady state — the way pharmacists actually think about it.",
  },
  {
    icon: "✓",
    title: "Built by a Pharmacist",
    description:
      "Every calculation is backed by real pharmacokinetic data and clinical knowledge, not guesswork or Wikipedia.",
  },
  {
    icon: "⊕",
    title: "Clinical Accuracy",
    description:
      "Half-life values are drawn from peer-reviewed literature and standard references such as Goodman & Gilman and Clinical Pharmacokinetics.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick a Drug",
    description:
      "Choose from 35+ common medications or enter a custom half-life value.",
  },
  {
    number: "02",
    title: "Set Your Schedule",
    description:
      "Define dose amount, frequency, and number of doses to simulate.",
  },
  {
    number: "03",
    title: "See the Science",
    description:
      "Watch an interactive concentration-time curve render in real time.",
  },
];

const referenceTable = [
  { drug: "Caffeine",        halfLife: "3–7 h",       dosing: "As needed", category: "Stimulant" },
  { drug: "Ibuprofen",       halfLife: "2 h",          dosing: "Q6H",       category: "Pain Relief" },
  { drug: "Acetaminophen",   halfLife: "2–3 h",        dosing: "Q4–6H",     category: "Pain Relief" },
  { drug: "Aspirin",         halfLife: "0.25 h*",      dosing: "Varies",    category: "Pain Relief" },
  { drug: "Fluoxetine",      halfLife: "1–6 days",     dosing: "Daily",     category: "Mental Health" },
  { drug: "Amoxicillin",     halfLife: "1.5 h",        dosing: "Q8H",       category: "Antibiotic" },
  { drug: "Warfarin",        halfLife: "20–60 h",      dosing: "Daily",     category: "Cardiovascular" },
  { drug: "Metformin",       halfLife: "4–9 h",        dosing: "Q12H",      category: "Metabolic" },
];

const popularDrugs = [
  {
    name: "Caffeine",
    halfLife: "5–6 h",
    description: "The world's most used stimulant. Found in coffee, tea, and energy drinks.",
    href: "/simulator",
  },
  {
    name: "Acetaminophen",
    halfLife: "2–3 h",
    description: "Common pain reliever sold as Tylenol. Rapid onset, moderate duration.",
    href: "/simulator",
  },
  {
    name: "Ibuprofen",
    halfLife: "2 h",
    description: "NSAID anti-inflammatory. Short half-life means frequent dosing.",
    href: "/simulator",
  },
  {
    name: "Fluoxetine",
    halfLife: "1–6 days",
    description: "Antidepressant (Prozac). Exceptionally long half-life simplifies dosing.",
    href: "/simulator",
  },
  {
    name: "Melatonin",
    halfLife: "30–60 min",
    description: "Sleep hormone. Clears quickly — timing your dose matters.",
    href: "/simulator",
  },
  {
    name: "Ethanol",
    halfLife: "~4–5 h",
    description: "Alcohol metabolism follows zero-order kinetics at typical doses.",
    href: "/simulator",
  },
  {
    name: "Alprazolam",
    halfLife: "6–27 h",
    description: "Benzodiazepine (Xanax). Intermediate half-life in the benzo class.",
    href: "/simulator",
  },
  {
    name: "Amoxicillin",
    halfLife: "1.5 h",
    description: "Broad-spectrum antibiotic. Short half-life drives the Q8H dosing schedule.",
    href: "/simulator",
  },
  {
    name: "Warfarin",
    halfLife: "20–60 h",
    description: "Anticoagulant with wide half-life variability due to genetic polymorphism.",
    href: "/simulator",
  },
];

const learnArticles = [
  {
    number: "01",
    title: "What is Drug Half-Life?",
    description:
      "The foundational concept explained simply: what the t½ number means, why it matters for dosing, and how your body eliminates drugs.",
    href: "/learn/what-is-drug-half-life",
    tag: "Basics",
  },
  {
    number: "02",
    title: "Pharmacokinetics 101",
    description:
      "Absorption, distribution, metabolism, excretion — the four pillars of pharmacokinetics and how they shape the concentration-time curve.",
    href: "/learn/pharmacokinetics-101",
    tag: "Concepts",
  },
  {
    number: "03",
    title: "Understanding Steady State",
    description:
      "Why drugs need several doses to reach stable blood levels, and how half-life predicts exactly when that happens.",
    href: "/learn/steady-state",
    tag: "Dosing",
  },
  {
    number: "04",
    title: "The Science Behind Caffeine",
    description:
      "A deep dive into caffeine pharmacokinetics: why your afternoon coffee disrupts sleep, and what a 5-hour half-life really means in practice.",
    href: "/learn/caffeine-science",
    tag: "Deep Dive",
  },
];

/* ─── Decay steps for the CSS-only visualisation ──────────────────────── */
const decaySteps = [
  { label: "0 h",  mg: "200 mg", pct: 100 },
  { label: "5 h",  mg: "100 mg", pct: 50  },
  { label: "10 h", mg: "50 mg",  pct: 25  },
  { label: "15 h", mg: "25 mg",  pct: 12.5},
  { label: "20 h", mg: "12.5 mg",pct: 6.25},
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── Shared hover / utility styles ── */}
      <style>{`
        /* Buttons */
        .hl-btn-primary {
          display: inline-block;
          padding: 0.875rem 2rem;
          background-color: var(--accent);
          color: #ffffff;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: background-color 0.15s ease;
          min-height: 44px;
          line-height: 1.4;
        }
        .hl-btn-primary:hover { background-color: var(--accent-hover); }

        .hl-btn-primary-lg {
          display: inline-block;
          padding: 0.875rem 2.25rem;
          background-color: var(--accent);
          color: #ffffff;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: background-color 0.15s ease;
          min-height: 44px;
          line-height: 1.4;
        }
        .hl-btn-primary-lg:hover { background-color: var(--accent-hover); }

        .hl-btn-outline {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--rule);
          background-color: transparent;
          color: var(--ink-soft);
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: border-color 0.15s ease, color 0.15s ease;
          min-height: 44px;
          line-height: 1.4;
        }
        .hl-btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Cards */
        .hl-feature-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.75rem 1.5rem;
          background-color: var(--cream);
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .hl-feature-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 12%, transparent);
        }

        .hl-drug-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          background-color: var(--paper);
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
          height: 100%;
        }
        .hl-drug-card:hover {
          border-color: var(--accent);
          box-shadow: 0 2px 12px color-mix(in srgb, var(--accent) 10%, transparent);
        }

        .hl-learn-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.75rem 1.5rem;
          background-color: var(--paper);
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
          text-decoration: none;
        }
        .hl-learn-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 10%, transparent);
          transform: translateY(-2px);
        }

        /* Links */
        .hl-explore-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease;
        }
        .hl-explore-link:hover { border-bottom-color: var(--accent); }

        /* Reference table */
        .hl-ref-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
        }
        .hl-ref-table thead th {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 2px solid var(--rule);
          white-space: nowrap;
        }
        .hl-ref-table tbody td {
          padding: 0.875rem 1rem;
          border-bottom: 1px solid var(--rule);
          color: var(--ink-soft);
          vertical-align: middle;
        }
        .hl-ref-table tbody tr:last-child td { border-bottom: none; }
        .hl-ref-table tbody tr:hover td { background-color: var(--cream); }
        .hl-ref-table tbody td:first-child {
          color: var(--ink);
          font-weight: 500;
        }
        .hl-ref-table tbody td:nth-child(2) {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.8125rem;
          color: var(--accent);
        }

        /* Category badge */
        .hl-badge {
          display: inline-block;
          padding: 0.175rem 0.625rem;
          border-radius: 999px;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background-color: color-mix(in srgb, var(--accent) 10%, transparent);
          color: var(--accent);
          white-space: nowrap;
        }

        /* Decay visualisation */
        .hl-decay-bar {
          height: 20px;
          border-radius: 3px;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }

        /* Stats strip */
        .hl-stats-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hl-stat-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--ink-faint);
        }
        .hl-stat-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--rule);
        }

        /* Trust badge */
        .hl-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border: 1px solid var(--rule);
          border-radius: 999px;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--ink-soft);
          background-color: var(--cream);
          margin-bottom: 1.75rem;
        }
        .hl-trust-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent);
          flex-shrink: 0;
        }

        /* Section label */
        .hl-section-label {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin: 0 0 0.75rem;
        }

        /* Responsive helpers */
        @media (max-width: 600px) {
          .hl-hero-btns {
            flex-direction: column;
            align-items: center;
          }
          .hl-decay-label {
            font-size: 0.6875rem !important;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          01. HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "9rem 2rem 5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Trust badge */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="hl-trust-badge">
              <span className="hl-trust-dot" aria-hidden="true" />
              Built by a licensed pharmacist
            </span>
          </div>

          {/* Mono label */}
          <p
            className="hl-section-label"
            style={{ color: "var(--accent)", textAlign: "center", marginBottom: "1.25rem" }}
          >
            PHARMACOKINETICS FOR EVERYONE
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            See How Drugs Move<br />Through Your Body
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              maxWidth: "560px",
              margin: "0 auto 2rem",
            }}
          >
            Visualize drug absorption, half-life, and elimination with
            beautiful, interactive simulations. Explore 35+ common drugs with
            clinically accurate data.
          </p>

          {/* CTA cluster */}
          <div
            className="hl-hero-btns"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <Link href="/simulator" className="hl-btn-primary">
              Try the Simulator
            </Link>
            <Link href="/learn" className="hl-btn-outline">
              Learn the Basics
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hl-stats-strip">
            <span className="hl-stat-item">35+ drugs</span>
            <span className="hl-stat-dot" aria-hidden="true" />
            <span className="hl-stat-item">Free forever</span>
            <span className="hl-stat-dot" aria-hidden="true" />
            <span className="hl-stat-item">No account needed</span>
            <span className="hl-stat-dot" aria-hidden="true" />
            <span className="hl-stat-item">Clinically accurate</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          02. DECAY VISUALISATION (CSS-only, caffeine example)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "0 2rem 6rem",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            border: "1px solid var(--rule)",
            borderRadius: "12px",
            padding: "2rem 2.5rem",
            backgroundColor: "var(--cream)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "0.375rem",
            }}
          >
            <p
              className="hl-section-label"
              style={{ margin: 0 }}
            >
              HALF-LIFE IN ACTION
            </p>
            <span
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.75rem",
                color: "var(--ink-faint)",
              }}
            >
              t½ ≈ 5 h
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "1.0625rem",
              fontWeight: 400,
              color: "var(--ink)",
              margin: "0 0 1.75rem",
            }}
          >
            Caffeine 200 mg — elimination over 20 hours
          </p>

          {/* Bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {decaySteps.map((step) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                {/* Time label */}
                <span
                  className="hl-decay-label"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.75rem",
                    color: "var(--ink-faint)",
                    width: "2.75rem",
                    flexShrink: 0,
                    textAlign: "right",
                  }}
                >
                  {step.label}
                </span>

                {/* Bar track */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "var(--paper)",
                    borderRadius: "3px",
                    overflow: "hidden",
                    height: "20px",
                  }}
                >
                  <div
                    className="hl-decay-bar"
                    style={{ width: `${step.pct}%` }}
                    role="img"
                    aria-label={`${step.mg} remaining`}
                  />
                </div>

                {/* Amount label */}
                <span
                  className="hl-decay-label"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    width: "4.5rem",
                    flexShrink: 0,
                    textAlign: "left",
                  }}
                >
                  {step.mg}
                </span>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--ink-faint)",
              margin: "1.5rem 0 0",
              lineHeight: 1.6,
            }}
          >
            Each half-life removes 50% of the remaining drug. After five half-lives
            (&asymp;25 h for caffeine), &lt;3% remains — considered clinically
            eliminated.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          03. FEATURE CARDS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "0 2rem 6rem",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="hl-section-label"
            style={{ textAlign: "center", marginBottom: "0.75rem" }}
          >
            WHY HALFLIFE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 400,
              color: "var(--ink)",
              textAlign: "center",
              margin: "0 0 2.5rem",
            }}
          >
            Pharmacokinetics made visible
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {features.map((feature) => (
              <div key={feature.title} className="hl-feature-card">
                {/* Icon glyph */}
                <div
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "1.25rem",
                    color: "var(--accent)",
                    marginBottom: "0.875rem",
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--ink-soft)",
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          04. HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "5rem 2rem",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          backgroundColor: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="hl-section-label"
            style={{ textAlign: "center" }}
          >
            HOW IT WORKS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              textAlign: "center",
              margin: "0 0 3.5rem",
            }}
          >
            Three steps to understanding
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "var(--accent)",
                      lineHeight: 1,
                      opacity: 0.7,
                    }}
                  >
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        backgroundColor: "var(--rule)",
                      }}
                    />
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--ink-soft)",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          05. AD UNIT — between How It Works and Reference Table
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "3rem 2rem 0",
        }}
      >
        <AdUnit slot="1234567890" format="auto" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          06. QUICK REFERENCE TABLE
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="hl-section-label"
            style={{ textAlign: "center" }}
          >
            QUICK REFERENCE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              textAlign: "center",
              margin: "0 0 0.75rem",
            }}
          >
            Common drug half-lives at a glance
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.9375rem",
              color: "var(--ink-soft)",
              textAlign: "center",
              margin: "0 0 2.5rem",
              lineHeight: 1.65,
            }}
          >
            Half-life values from peer-reviewed pharmacokinetic literature.
            Click any drug to simulate it.
          </p>

          {/* Scrollable table wrapper for mobile */}
          <div
            style={{
              overflowX: "auto",
              border: "1px solid var(--rule)",
              borderRadius: "10px",
            }}
          >
            <table className="hl-ref-table">
              <thead>
                <tr>
                  <th>Drug</th>
                  <th>Half-Life</th>
                  <th>Dosing Frequency</th>
                  <th>Category</th>
                  <th style={{ textAlign: "right" }}>Simulate</th>
                </tr>
              </thead>
              <tbody>
                {referenceTable.map((row) => (
                  <tr key={row.drug}>
                    <td>{row.drug}</td>
                    <td>{row.halfLife}</td>
                    <td>{row.dosing}</td>
                    <td>
                      <span className="hl-badge">{row.category}</span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Link
                        href="/simulator"
                        className="hl-explore-link"
                        style={{ fontSize: "0.8125rem" }}
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Aspirin footnote */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--ink-faint)",
              margin: "1rem 0 0",
              lineHeight: 1.6,
            }}
          >
            * Aspirin&apos;s pharmacological effect lasts far longer than its 15-minute plasma half-life because it
            irreversibly inhibits COX enzymes. Platelet effects persist for the platelet&apos;s entire 7–10 day
            lifespan.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          07. POPULAR DRUGS GRID
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "5rem 2rem 6rem",
          borderTop: "1px solid var(--rule)",
          backgroundColor: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="hl-section-label"
            style={{ textAlign: "center" }}
          >
            POPULAR DRUGS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              textAlign: "center",
              margin: "0 0 3rem",
            }}
          >
            Start with something familiar
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {popularDrugs.map((drug) => (
              <Link
                key={drug.name}
                href={drug.href}
                style={{ textDecoration: "none" }}
              >
                <div className="hl-drug-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "0.75rem",
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
                      {drug.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.75rem",
                        color: "var(--accent)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      t&#189; {drug.halfLife}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.8125rem",
                      lineHeight: 1.55,
                      color: "var(--ink-soft)",
                      margin: 0,
                    }}
                  >
                    {drug.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/simulator" className="hl-explore-link">
              Explore All 35+ Drugs in the Simulator
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          08. LEARN SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            className="hl-section-label"
            style={{ textAlign: "center" }}
          >
            LEARN
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              textAlign: "center",
              margin: "0 0 0.75rem",
            }}
          >
            Understand the science
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.9375rem",
              color: "var(--ink-soft)",
              textAlign: "center",
              margin: "0 0 3rem",
              lineHeight: 1.65,
            }}
          >
            Pharmacist-written guides that explain the concepts behind the
            simulator, without the textbook jargon.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            {learnArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="hl-learn-card"
              >
                {/* Number + tag row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.75rem",
                      color: "var(--ink-faint)",
                      fontWeight: 300,
                    }}
                  >
                    {article.number}
                  </span>
                  <span className="hl-badge">{article.tag}</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "var(--ink-soft)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {article.description}
                </p>

                {/* Read link */}
                <span
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--accent)",
                    marginTop: "0.25rem",
                  }}
                >
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/learn" className="hl-explore-link">
              View all 8 articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          09. FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "5rem 2rem 7rem",
          borderTop: "1px solid var(--rule)",
          textAlign: "center",
          backgroundColor: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Small accent line */}
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "var(--accent)",
              margin: "0 auto 1.75rem",
              borderRadius: "1px",
              opacity: 0.7,
            }}
            aria-hidden="true"
          />

          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              margin: "0 0 1rem",
            }}
          >
            Ready to see the science?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              margin: "0 0 2rem",
            }}
          >
            No account required. No download. Open the simulator and start
            exploring exactly how medications behave inside the body.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link href="/simulator" className="hl-btn-primary-lg">
              Start Exploring
            </Link>
            <Link href="/learn" className="hl-btn-outline">
              Read the Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
