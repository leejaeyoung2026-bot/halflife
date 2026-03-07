import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — HalfLife by Vibed Lab",
  description:
    "HalfLife is a pharmacokinetics visualization tool built by Jay, a licensed pharmacist and researcher. Learn who built it and why it exists.",
  openGraph: {
    title: "About — HalfLife by Vibed Lab",
    description:
      "HalfLife is a pharmacokinetics visualization tool built by Jay, a licensed pharmacist and researcher. Learn who built it and why it exists.",
    url: "https://halflife.vibed-lab.com/about",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — HalfLife by Vibed Lab",
    description:
      "HalfLife is a pharmacokinetics visualization tool built by Jay, a licensed pharmacist.",
  },
};

export default function AboutPage() {
  return (
    <section style={{ padding: "10rem 2rem 6rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          ABOUT
        </p>

        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            margin: "0 0 3rem",
            letterSpacing: "-0.01em",
          }}
        >
          About HalfLife
        </h1>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            marginBottom: "3rem",
          }}
        />

        {/* Prose content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-soft)",
          }}
        >
          {/* What is HalfLife */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.75rem",
              }}
            >
              What is HalfLife?
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife is an interactive pharmacokinetics visualization tool
              designed to make one of pharmacy&apos;s most important concepts
              accessible to everyone. Drug half-life — the time it takes for the
              concentration of a drug in the body to reduce by half — governs
              how frequently medications must be taken, how long they stay
              active, and when they completely clear the system.
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              Using HalfLife, you can model single doses, repeat-dosing
              schedules, and steady-state accumulation for over 30 common
              medications — all rendered as interactive, real-time graphs.
            </p>
          </div>

          {/* Why it exists */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.75rem",
              }}
            >
              Why it exists
            </h2>
            <p style={{ margin: 0 }}>
              Most people take medications without understanding how they work in
              the body. The standard patient information leaflet gives a dose and
              a schedule, but rarely explains the &quot;why&quot; behind it. Why
              take ibuprofen every 4–6 hours but fluoxetine only once a day?
              Why does caffeine keep some people up all night while others sleep
              through it?
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              HalfLife makes pharmacokinetics visual and accessible — turning
              equations that live in textbooks into something you can see,
              adjust, and intuitively grasp. A better-informed patient is a
              safer patient.
            </p>
          </div>

          {/* Who built it */}
          <div
            style={{
              border: "1px solid var(--rule)",
              borderRadius: "10px",
              padding: "1.75rem 1.75rem",
              backgroundColor: "var(--cream)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.75rem",
              }}
            >
              Built by Jay
            </h2>
            <p style={{ margin: 0 }}>
              Jay is a licensed pharmacist and researcher who has spent years
              working at the intersection of clinical practice and software
              development. His professional tool,{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                PK&middot;Swift
              </strong>
              , is used by pharmacists and clinical researchers for advanced
              pharmacokinetic calculations.
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              HalfLife is Jay&apos;s attempt to bring that same rigor to a
              general audience — stripping away the complexity while preserving
              the accuracy. Every data point, every curve, every default value
              comes from peer-reviewed clinical literature.
            </p>
          </div>

          {/* Vibed Lab */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.75rem",
              }}
            >
              Part of the Vibed Lab ecosystem
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife is one of several tools published under{" "}
              <a
                href="https://vibed-lab.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  borderBottom:
                    "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                  paddingBottom: "1px",
                }}
              >
                Vibed Lab
              </a>
              , a small independent studio focused on building precise,
              beautiful, and genuinely useful digital tools. Other projects in
              the ecosystem include finance dashboards, Bitcoin cycle analysis
              tools, and clinical reference utilities.
            </p>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              borderLeft: "3px solid var(--rule)",
              paddingLeft: "1.25rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.125rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.5rem",
              }}
            >
              Medical disclaimer
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "var(--ink-faint)",
              }}
            >
              HalfLife is an educational tool and is not intended to replace
              professional medical advice, diagnosis, or treatment. The
              simulations are based on population-average pharmacokinetic
              parameters and may not reflect individual variation in drug
              metabolism. Always consult your pharmacist or physician before
              making any decisions about your medications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
