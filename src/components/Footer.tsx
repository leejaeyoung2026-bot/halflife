import Link from "next/link";

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
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
          padding: "2.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Top row: brand + links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.125rem",
                color: "var(--ink)",
              }}
            >
              HalfLife
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                fontSize: "0.875rem",
                color: "var(--ink-soft)",
                marginLeft: "0.375rem",
              }}
            >
              by Vibed Lab
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: "flex",
                gap: "0.125rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      display: "inline-block",
                      padding: "0.25rem 0.625rem",
                      fontFamily:
                        "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      textDecoration: "none",
                      borderRadius: "4px",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Ecosystem link */}
        <p
          style={{
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "0.8125rem",
            color: "var(--ink-faint)",
            margin: 0,
          }}
        >
          Part of the{" "}
          <a
            href="https://vibed-lab.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Vibed Lab
          </a>{" "}
          ecosystem.
        </p>

        {/* Disclaimer + copyright */}
        <div
          style={{
            paddingTop: "1rem",
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
            For educational purposes only. Not medical advice.
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
  );
}
