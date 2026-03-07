import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Pharmacokinetics — Drug Half-Life Education",
  description:
    "Free pharmacokinetics education by a licensed pharmacist. Learn how drug half-life works, understand ADME, steady state, drug interactions, and more.",
  openGraph: {
    title: "Learn Pharmacokinetics — HalfLife by Vibed Lab",
    description:
      "Free pharmacokinetics education by a licensed pharmacist. Learn how drug half-life works, understand ADME, steady state, drug interactions, and more.",
    url: "https://halflife.vibed-lab.com/learn",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Pharmacokinetics — HalfLife by Vibed Lab",
    description:
      "Free pharmacokinetics education by a licensed pharmacist.",
  },
};

const articles = [
  {
    slug: "what-is-drug-half-life",
    title: "What is Drug Half-Life?",
    description:
      "The foundational concept in pharmacokinetics. Learn what t½ means, how it's calculated, and why it governs every dosing schedule.",
    readTime: "10 min read",
    tag: "Fundamentals",
    tagColor: "#0D9488",
  },
  {
    slug: "pharmacokinetics-101",
    title: "Pharmacokinetics 101: How Drugs Work in Your Body",
    description:
      "A complete guide to ADME — absorption, distribution, metabolism, and elimination. Understand the full journey of a drug from pill to elimination.",
    readTime: "12 min read",
    tag: "Fundamentals",
    tagColor: "#0D9488",
  },
  {
    slug: "steady-state",
    title: "Understanding Steady State",
    description:
      "Why does your doctor say 'give it 4–6 weeks'? Steady state explains why repeated dosing builds up over time and why patience is pharmacologically justified.",
    readTime: "8 min read",
    tag: "Concepts",
    tagColor: "#7C3AED",
  },
  {
    slug: "caffeine-science",
    title: "The Science Behind Caffeine",
    description:
      "The world's most consumed psychoactive substance. Explore caffeine's pharmacokinetics, CYP1A2 metabolism, tolerance, withdrawal, and interaction profile.",
    readTime: "11 min read",
    tag: "Drug Deep Dives",
    tagColor: "#B45309",
  },
  {
    slug: "otc-pain-relievers",
    title: "A Pharmacist's Guide to OTC Pain Relievers",
    description:
      "Acetaminophen vs ibuprofen vs naproxen vs aspirin. Compare half-lives, mechanisms, dosing limits, and when to choose which — from a pharmacist.",
    readTime: "9 min read",
    tag: "Drug Deep Dives",
    tagColor: "#B45309",
  },
  {
    slug: "drug-interactions",
    title: "Drug Interactions: When Medications Collide",
    description:
      "How CYP enzyme inhibition and induction can double or halve a drug's effective half-life. Includes 5 clinically significant interactions to know.",
    readTime: "10 min read",
    tag: "Safety",
    tagColor: "#DC2626",
  },
  {
    slug: "bioavailability",
    title: "Bioavailability: Why How You Take a Drug Matters",
    description:
      "Why IV gives 100% of the drug but oral gives far less. First-pass metabolism, routes of administration, and what bioequivalence means for generic drugs.",
    readTime: "7 min read",
    tag: "Concepts",
    tagColor: "#7C3AED",
  },
  {
    slug: "dosing-schedules",
    title: "Why Dosing Schedules Exist",
    description:
      "The science behind 'every 4 hours' vs 'once daily.' Therapeutic windows, missed doses, extended release formulations, and chronopharmacology.",
    readTime: "8 min read",
    tag: "Clinical",
    tagColor: "#2563EB",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Fundamentals", color: "#0D9488" },
  { label: "Concepts", color: "#7C3AED" },
  { label: "Drug Deep Dives", color: "#B45309" },
  { label: "Safety", color: "#DC2626" },
  { label: "Clinical", color: "#2563EB" },
];

export default function LearnIndexPage() {
  return (
    <>
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
          min-height: 44px;
          line-height: 1.4;
        }
        .hl-btn-primary:hover { background-color: var(--accent-hover); }
        .learn-card {
          border: 1px solid var(--rule);
          border-radius: 12px;
          padding: 1.75rem;
          background-color: var(--paper);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
          cursor: pointer;
        }
        .learn-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 20px color-mix(in srgb, var(--accent) 12%, transparent);
          transform: translateY(-2px);
        }
        .learn-tag {
          display: inline-block;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .learn-read-more {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: gap 0.15s ease;
        }
        .learn-card:hover .learn-read-more { gap: 0.5rem; }
        .stat-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.5rem;
          background-color: var(--paper);
          text-align: center;
        }
        .quick-link {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.875rem 1.125rem;
          border: 1px solid var(--rule);
          border-radius: 8px;
          background-color: var(--paper);
          text-decoration: none;
          transition: border-color 0.15s ease, background-color 0.15s ease;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          color: var(--ink-soft);
        }
        .quick-link:hover {
          border-color: var(--accent);
          background-color: color-mix(in srgb, var(--accent) 5%, var(--paper));
          color: var(--ink);
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{ padding: "8rem 2rem 4rem", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "0.375rem", listStyle: "none", margin: 0, padding: 0 }}>
              <li>
                <Link href="/" style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-faint)", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--ink-faint)" }}>›</li>
              <li>
                <span style={{ fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.8125rem", color: "var(--ink-soft)" }}>Learn</span>
              </li>
            </ol>
          </nav>

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
            PHARMACOKINETICS EDUCATION
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Learn How Drugs<br />Work in the Body
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              maxWidth: "600px",
              margin: "0 0 2rem",
            }}
          >
            Pharmacokinetics made accessible. Free, pharmacist-written guides on
            half-life, drug absorption, interactions, dosing, and more — no biochemistry
            degree required.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "0" }}>
            {[
              { value: "8", label: "Articles" },
              { value: "30+", label: "Drugs Covered" },
              { value: "Free", label: "Always" },
              { value: "Pharmacist", label: "Written" },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.125rem",
                  padding: "0.625rem 1rem",
                  border: "1px solid var(--rule)",
                  borderRadius: "8px",
                  backgroundColor: "var(--cream)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.375rem",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}`}
                className="learn-card"
                style={{ position: "relative" }}
              >
                {/* Article number */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <span
                    className="learn-tag"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${article.tagColor} 12%, transparent)`,
                      color: article.tagColor,
                    }}
                  >
                    {article.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--rule)",
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--ink-soft)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {article.description}
                </p>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.6875rem",
                      color: "var(--ink-faint)",
                    }}
                  >
                    {article.readTime}
                  </span>
                  <span className="learn-read-more">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto 0", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "var(--rule)" }} />
      </div>

      {/* ── Quick Links ── */}
      <section style={{ padding: "3rem 2rem 2rem", backgroundColor: "var(--cream)", borderTop: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              margin: "0 0 1.25rem",
            }}
          >
            MORE RESOURCES
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            <Link href="/simulator" className="quick-link">
              <span style={{ fontSize: "1rem" }}>⚗</span>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)" }}>Drug Simulator</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>Interactive PK curves</div>
              </div>
            </Link>
            <Link href="/glossary" className="quick-link">
              <span style={{ fontSize: "1rem" }}>📖</span>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)" }}>Glossary</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>40+ pharmacology terms</div>
              </div>
            </Link>
            <Link href="/faq" className="quick-link">
              <span style={{ fontSize: "1rem" }}>❓</span>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)" }}>FAQ</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>Common questions answered</div>
              </div>
            </Link>
            <Link href="/about" className="quick-link">
              <span style={{ fontSize: "1rem" }}>👤</span>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)" }}>About</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>Who built HalfLife</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "4rem 2rem 5rem",
          borderTop: "1px solid var(--rule)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 400,
              color: "var(--ink)",
              margin: "0 0 0.875rem",
            }}
          >
            Ready to see it in action?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              margin: "0 0 1.75rem",
            }}
          >
            After reading about pharmacokinetics, try the interactive simulator to see
            exactly how the curves change for any drug and dosing schedule.
          </p>
          <Link
            href="/simulator"
            className="hl-btn-primary"
          >
            Open the Simulator →
          </Link>
        </div>
      </section>
    </>
  );
}
