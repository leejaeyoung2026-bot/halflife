import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HalfLife by Vibed Lab",
  description:
    "HalfLife collects no personal data. No accounts, no cookies, no tracking. Read our full privacy policy.",
  openGraph: {
    title: "Privacy Policy — HalfLife by Vibed Lab",
    description:
      "HalfLife collects no personal data. No accounts, no cookies, no tracking.",
    url: "https://halflife.vibed-lab.com/privacy",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — HalfLife by Vibed Lab",
    description: "HalfLife collects no personal data. No accounts, no cookies, no tracking.",
  },
};

export default function PrivacyPage() {
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
            color: "var(--ink-faint)",
            margin: "0 0 1rem",
          }}
        >
          LEGAL
        </p>

        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            margin: "0 0 0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Privacy Policy
        </h1>

        {/* Last updated */}
        <p
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "0.75rem",
            color: "var(--ink-faint)",
            margin: "0 0 3rem",
          }}
        >
          Last updated: March 8, 2026
        </p>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            marginBottom: "3rem",
          }}
        />

        {/* Prose */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.25rem",
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-soft)",
          }}
        >
          {/* Overview */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Overview
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
              committed to your privacy. This policy explains what data we
              collect — which, in the current version of HalfLife, is
              essentially nothing. We have designed this tool to run entirely
              in your browser without requiring any personal information from
              you.
            </p>
          </div>

          {/* No personal data */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              No personal data collected
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife does not collect, store, or transmit any personally
              identifiable information. Specifically:
            </p>
            <ul
              style={{
                margin: "0.75rem 0 0",
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No accounts.
                </strong>{" "}
                You are never asked to register, sign in, or provide an email
                address.
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No cookies.
                </strong>{" "}
                We do not set any cookies on your device in the current release.
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No tracking.
                </strong>{" "}
                We do not use third-party advertising networks or behavioral
                tracking scripts.
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No form submissions.
                </strong>{" "}
                All simulator inputs exist locally in your browser session and
                are never sent to our servers.
              </li>
            </ul>
          </div>

          {/* Server logs */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Server logs
            </h2>
            <p style={{ margin: 0 }}>
              Like all web servers, our hosting infrastructure (Vercel) may
              automatically record standard server access logs. These logs
              typically include your IP address, browser type, and the pages
              requested. This data is not linked to any personal identity and is
              used solely for diagnosing technical issues. Vercel&apos;s data
              retention policies govern how long these logs are stored.
            </p>
          </div>

          {/* Future analytics */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Analytics — future plans
            </h2>
            <p style={{ margin: 0 }}>
              We may add privacy-respecting, cookieless analytics in the future
              (such as Plausible Analytics or similar tools) to understand which
              features are most useful. If and when this is introduced, this
              policy will be updated and you will see a notice on the site. Any
              analytics tool we adopt will not collect personally identifiable
              information and will not share data with third-party advertisers.
            </p>
          </div>

          {/* Third-party services */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Third-party services
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife is hosted on{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Vercel
              </a>
              . Web fonts are loaded from Google Fonts. Both services have their
              own privacy policies which govern any data they may process in the
              course of delivering this website to you.
            </p>
          </div>

          {/* Children */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Children&apos;s privacy
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife does not knowingly collect personal information from
              anyone under the age of 13. Because we collect no personal data at
              all, there is no special risk; however, the educational content on
              this site is intended for adult audiences and those seeking to
              understand their own medications.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Changes to this policy
            </h2>
            <p style={{ margin: 0 }}>
              We may update this privacy policy from time to time. When we do,
              we will revise the &quot;Last updated&quot; date at the top of
              this page. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "0 0 0.625rem",
              }}
            >
              Contact
            </h2>
            <p style={{ margin: 0 }}>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:contact@vibed-lab.com"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                contact@vibed-lab.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
