import Link from "next/link";

const learnLinks = [
  { href: "/learn/what-is-drug-half-life", label: "What is Drug Half-Life?" },
  { href: "/learn/pharmacokinetics-101", label: "Pharmacokinetics 101" },
  { href: "/learn/steady-state", label: "Understanding Steady State" },
  { href: "/learn/caffeine-science", label: "The Science of Caffeine" },
  { href: "/learn/otc-pain-relievers", label: "OTC Pain Relievers Guide" },
  { href: "/learn/drug-interactions", label: "Drug Interactions" },
  { href: "/learn/bioavailability", label: "Bioavailability" },
  { href: "/learn/dosing-schedules", label: "Dosing Schedules" },
];

const toolLinks = [
  { href: "/simulator", label: "Drug Simulator" },
  { href: "/glossary", label: "Glossary" },
];

const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--ink-soft);
          text-decoration: none;
          transition: color 0.15s ease;
          display: block;
          line-height: 1.4;
        }
        .footer-link:hover { color: var(--accent); }
        .footer-eco-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
        }
        .footer-eco-link:hover { text-decoration: underline; }
      `}</style>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          backgroundColor: "var(--cream)",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "3rem 1.5rem 2rem",
          }}
        >
          {/* Top grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            {/* Brand column */}
            <div>
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.125rem",
                    color: "var(--ink)",
                    display: "block",
                  }}
                >
                  HalfLife
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--ink-soft)",
                  }}
                >
                  by Vibed Lab
                </span>
              </Link>
              <p
                style={{
                  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                  fontSize: "0.8125rem",
                  lineHeight: 1.6,
                  color: "var(--ink-faint)",
                  marginTop: "0.75rem",
                  marginBottom: 0,
                  maxWidth: "190px",
                }}
              >
                Pharmacokinetics made visual. Built by a pharmacist.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                <a
                  href="https://vibed-lab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-eco-link"
                >
                  Vibed Lab ↗
                </a>
              </p>
            </div>

            {/* Learn column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  margin: "0 0 0.75rem",
                }}
              >
                Learn
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {learnLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  margin: "0 0 0.75rem",
                }}
              >
                Tools
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {toolLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  margin: "0 0 0.75rem",
                }}
              >
                Info
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {infoLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--rule)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                fontSize: "0.75rem",
                color: "var(--ink-faint)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              For educational purposes only. Not medical advice. Always consult your pharmacist or physician.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                fontSize: "0.75rem",
                color: "var(--ink-faint)",
                margin: 0,
              }}
            >
              &copy; 2026 Vibed Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
