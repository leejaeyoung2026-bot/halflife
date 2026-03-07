import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "HalfLife is built by Jay, a licensed pharmacist with specialized expertise in pharmacokinetics. Learn about the tool, its mission, and the pharmacist behind it.",
  openGraph: {
    title: "About",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay",
  jobTitle: "Licensed Pharmacist",
  description: "Licensed pharmacist and developer specializing in pharmacokinetics and clinical pharmacy. Creator of HalfLife and PK·Swift.",
  url: "https://halflife.vibed-lab.com/about",
  knowsAbout: [
    "Pharmacokinetics",
    "Drug Half-Life",
    "ADME",
    "Clinical Pharmacy",
    "Pharmacodynamics",
    "Steady-State Pharmacokinetics",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Vibed Lab",
    url: "https://vibed-lab.com",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Licensed Pharmacist",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
            {/* Author byline */}
            <p
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                margin: "0 0 0.75rem",
              }}
            >
              AUTHOR
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.25rem",
              }}
            >
              Jay
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                fontSize: "0.875rem",
                color: "var(--accent)",
                margin: "0 0 1rem",
                fontWeight: 500,
              }}
            >
              Licensed Pharmacist · Pharmacokinetics Specialist · Developer
            </p>
            <p style={{ margin: 0 }}>
              Jay is a licensed pharmacist with specialized expertise in
              pharmacokinetics and clinical pharmacy. He has spent years working
              at the intersection of clinical practice and software development,
              translating complex pharmacokinetic principles into tools that
              clinicians and patients can actually use.
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              His professional pharmacokinetics calculation tool,{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                PK&middot;Swift
              </strong>
              , is used by pharmacists and clinical researchers for advanced
              dose individualization and PK modeling. HalfLife is Jay&apos;s
              effort to bring that same clinical rigor to a general audience —
              stripping away the complexity while preserving the accuracy.
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              Every drug half-life value, every pharmacokinetic parameter, and
              every default value in HalfLife is sourced from peer-reviewed
              clinical literature, including{" "}
              <em>Goodman &amp; Gilman&apos;s The Pharmacological Basis of
              Therapeutics</em>
              , FDA drug labels, and published pharmacokinetic studies.
            </p>
            {/* Credential tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
              {["Licensed Pharmacist", "Pharmacokinetics", "Clinical Pharmacy", "Drug Dosing", "ADME"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "var(--ink-soft)",
                    backgroundColor: "var(--paper)",
                    border: "1px solid var(--rule)",
                    borderRadius: "4px",
                    padding: "0.25rem 0.625rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
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
    </>
  );
}
