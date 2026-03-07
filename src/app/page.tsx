import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HalfLife — See How Drugs Move Through Your Body",
  description:
    "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Explore 30+ common drugs. Built by a pharmacist.",
  openGraph: {
    title: "HalfLife — See How Drugs Move Through Your Body",
    description:
      "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Built by a pharmacist.",
    url: "https://halflife.vibed-lab.com",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalfLife — See How Drugs Move Through Your Body",
    description:
      "Visualize drug absorption, half-life, and elimination with beautiful, interactive simulations. Built by a pharmacist.",
  },
};

const features = [
  {
    title: "30+ Common Drugs",
    description:
      "From caffeine to prescription medications, explore accurate half-life data sourced from clinical pharmacokinetic references.",
  },
  {
    title: "Multi-Dose Simulation",
    description:
      "See how drug levels build up with repeated dosing and reach steady state — the way pharmacists actually think about it.",
  },
  {
    title: "Built by a Pharmacist",
    description:
      "Every calculation is backed by real pharmacokinetic data and clinical knowledge, not guesswork or Wikipedia.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick a Drug",
    description:
      "Choose from 30+ common medications or enter a custom half-life value.",
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

const popularDrugs = [
  {
    name: "Caffeine",
    halfLife: "5–6 hours",
    description: "The world's most used stimulant. Found in coffee, tea, and energy drinks.",
  },
  {
    name: "Acetaminophen",
    halfLife: "2–3 hours",
    description: "Common pain reliever sold as Tylenol. Rapid onset, moderate duration.",
  },
  {
    name: "Ibuprofen",
    halfLife: "2 hours",
    description: "NSAID anti-inflammatory. Short half-life means frequent dosing.",
  },
  {
    name: "Fluoxetine",
    halfLife: "1–6 days",
    description: "Antidepressant (Prozac). Exceptionally long half-life simplifies dosing.",
  },
  {
    name: "Melatonin",
    halfLife: "30–60 min",
    description: "Sleep hormone. Clears quickly — timing your dose matters.",
  },
  {
    name: "Ethanol",
    halfLife: "~4–5 hours",
    description: "Alcohol metabolism follows zero-order kinetics at typical doses.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── CSS hover styles (server-safe, no JS) ── */}
      <style>{`
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
        }
        .hl-btn-primary-lg:hover { background-color: var(--accent-hover); }

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
        }
        .hl-drug-card:hover {
          border-color: var(--accent);
          box-shadow: 0 2px 12px color-mix(in srgb, var(--accent) 10%, transparent);
        }

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
        .hl-explore-link:hover {
          border-bottom-color: var(--accent);
        }
      `}</style>

      {/* ── Hero ── */}
      <section
        style={{
          padding: "10rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Mono label */}
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.5rem",
              margin: "0 0 1.5rem",
            }}
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
              margin: "0 0 1.5rem",
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
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
            }}
          >
            Visualize drug absorption, half-life, and elimination with beautiful,
            interactive simulations. Built by a pharmacist.
          </p>

          {/* CTA */}
          <Link href="/simulator" className="hl-btn-primary">
            Try the Simulator →
          </Link>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section
        style={{
          padding: "0 2rem 6rem",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="hl-feature-card">
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                  fontSize: "0.9rem",
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
      </section>

      {/* ── How It Works ── */}
      <section
        style={{
          padding: "5rem 2rem",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          backgroundColor: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
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
                {/* Step connector line (decorative) */}
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

      {/* ── Popular Drugs Preview ── */}
      <section style={{ padding: "5rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
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

          {/* Drug grid */}
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
                href="/simulator"
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
                        fontFamily:
                          "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1.0625rem",
                        fontWeight: 400,
                        color: "var(--ink)",
                      }}
                    >
                      {drug.name}
                    </span>
                    <span
                      style={{
                        fontFamily:
                          "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.75rem",
                        color: "var(--accent)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      t½ {drug.halfLife}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-sans), ui-sans-serif, sans-serif",
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

          {/* Explore link */}
          <div style={{ textAlign: "center" }}>
            <Link href="/simulator" className="hl-explore-link">
              Explore All Drugs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{
          padding: "5rem 2rem 7rem",
          borderTop: "1px solid var(--rule)",
          textAlign: "center",
          backgroundColor: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
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
            No account required. No download. Just open the simulator and start
            exploring how medications behave in the body.
          </p>
          <Link href="/simulator" className="hl-btn-primary-lg">
            Start Exploring
          </Link>
        </div>
      </section>
    </>
  );
}
