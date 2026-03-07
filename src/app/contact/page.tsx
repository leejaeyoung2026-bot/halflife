import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the HalfLife team. Suggest a drug to add, report a data error, or ask a question about the pharmacokinetics simulator.",
  openGraph: {
    title: "Contact — HalfLife by Vibed Lab",
    description:
      "Get in touch with the HalfLife team. Suggest a drug, report an error, or ask a question.",
    url: "https://halflife.vibed-lab.com/contact",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — HalfLife by Vibed Lab",
    description:
      "Get in touch with the HalfLife team. Suggest a drug, report an error, or ask a question.",
  },
};

type ContactCard = {
  label: string;
  title: string;
  value: string;
  href: string;
  description: string;
  external: boolean;
};

const contactCards: ContactCard[] = [
  {
    label: "EMAIL",
    title: "hello@vibed-lab.com",
    value: "hello@vibed-lab.com",
    href: "mailto:hello@vibed-lab.com",
    description:
      "For general questions, feedback, and drug suggestions. We aim to respond within 48 hours.",
    external: false,
  },
  {
    label: "GITHUB",
    title: "github.com/leejaeyoung2026-bot/halflife",
    value: "leejaeyoung2026-bot/halflife",
    href: "https://github.com/leejaeyoung2026-bot/halflife",
    description:
      "Open an issue for bug reports, data accuracy corrections, or feature requests. Preferred for technical matters.",
    external: true,
  },
  {
    label: "VIBED LAB",
    title: "vibed-lab.com",
    value: "vibed-lab.com",
    href: "https://vibed-lab.com",
    description:
      "Visit the main Vibed Lab website to explore other tools, including finance dashboards and clinical utilities.",
    external: true,
  },
];

export default function ContactPage() {
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
          CONTACT
        </p>

        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            margin: "0 0 1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          Get in Touch
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            margin: "0 0 3rem",
            maxWidth: "580px",
          }}
        >
          Have a question, suggestion, or found a bug? We&apos;d love to hear
          from you.
        </p>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            marginBottom: "3rem",
          }}
        />

        {/* Contact cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              style={{
                display: "block",
                padding: "1.5rem 1.75rem",
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                backgroundColor: "var(--cream)",
                textDecoration: "none",
                transition: "border-color 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.625rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1.125rem",
                      fontWeight: 400,
                      color: "var(--accent)",
                      margin: "0 0 0.625rem",
                      lineHeight: 1.3,
                      wordBreak: "break-all",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "var(--ink-soft)",
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
                {card.external && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M3 13L13 3M13 3H7M13 3V9"
                      stroke="var(--ink-faint)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Suggest a Drug */}
        <div
          style={{
            marginBottom: "2rem",
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
            Suggest a Drug
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: "0 0 1rem",
            }}
          >
            HalfLife currently covers 30+ medications, but the list is actively
            growing. If there is a drug you would like to see simulated — whether
            it is a medication you take, one you are studying, or one that is
            commonly misunderstood — we want to know about it.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: 0,
            }}
          >
            When suggesting a drug, it helps to include the generic name, the
            typical indication (what it is used for), and any published
            pharmacokinetic reference you may have. All additions are reviewed
            and verified against peer-reviewed clinical literature before going
            live.
          </p>
        </div>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            margin: "2.5rem 0",
          }}
        />

        {/* Report an Error */}
        <div
          style={{
            marginBottom: "2rem",
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
            Report a Data Error
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: "0 0 1rem",
            }}
          >
            We take data accuracy seriously. Every pharmacokinetic parameter in
            HalfLife is sourced from clinical literature, but errors can occur —
            a range may be outdated, a default value may reflect an atypical
            population, or newer published data may supersede what we have.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: 0,
            }}
          >
            If you believe a value in the simulator is incorrect, please report
            it via email or by opening a GitHub issue. Include the drug name, the
            parameter you believe is wrong, the value you think it should be, and
            a reference (journal article, package insert, or pharmacology
            textbook) that supports the correction. We will review and update as
            quickly as possible.
          </p>
        </div>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            margin: "2.5rem 0",
          }}
        />

        {/* Response time note */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "var(--cream)",
            border: "1px solid var(--rule)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                margin: "0 0 0.375rem",
              }}
            >
              RESPONSE TIME
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "var(--ink-soft)",
                margin: 0,
              }}
            >
              We aim to respond within 48 hours. GitHub issues receive priority
              attention for bugs and data corrections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
