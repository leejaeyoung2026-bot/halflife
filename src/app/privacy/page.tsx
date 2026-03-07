import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HalfLife privacy policy. Learn how we use Google Analytics, Google AdSense, and what data is collected when you visit our site.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "HalfLife privacy policy — Google Analytics, Google AdSense, and data collection explained.",
    url: "https://halflife.vibed-lab.com/privacy",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy",
    description: "HalfLife privacy policy — Google Analytics, Google AdSense, and data collection explained.",
  },
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
  fontSize: "1.25rem",
  fontWeight: 400,
  color: "var(--ink)",
  margin: "0 0 0.625rem",
};

const linkStyle: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "none",
  fontWeight: 500,
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
            <h2 style={h2Style}>Overview</h2>
            <p style={{ margin: 0 }}>
              HalfLife (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
              free educational tool built by Vibed Lab. This policy explains what
              data is collected when you visit halflife.vibed-lab.com, including
              data collected by third-party services we use to operate the site.
            </p>
          </div>

          {/* No personal data */}
          <div>
            <h2 style={h2Style}>Data we collect directly</h2>
            <p style={{ margin: 0 }}>
              HalfLife does not collect, store, or transmit any personally
              identifiable information on its own servers. Specifically:
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
                You are never asked to register, sign in, or provide an email address.
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No form submissions.
                </strong>{" "}
                All simulator inputs exist locally in your browser session and are never sent to our servers.
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  No user accounts or profiles.
                </strong>{" "}
                We do not create or maintain any profile associated with your visits.
              </li>
            </ul>
          </div>

          {/* Google Analytics */}
          <div>
            <h2 style={h2Style}>Google Analytics</h2>
            <p style={{ margin: 0 }}>
              We use{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google Analytics (GA4)
              </a>{" "}
              to understand how visitors use HalfLife. Google Analytics collects
              information such as pages visited, time spent on each page, your
              approximate geographic location (country/city level), device type,
              browser, and referral source. This data is aggregated and used to
              improve the site.
            </p>
            <p style={{ margin: "0.75rem 0 0" }}>
              Google Analytics may set cookies on your device to identify repeat
              visits and track usage patterns. Google&apos;s data processing is
              governed by the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google Privacy Policy
              </a>
              . You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </div>

          {/* Google AdSense / Advertising */}
          <div>
            <h2 style={h2Style}>Advertising — Google AdSense</h2>
            <p style={{ margin: 0 }}>
              HalfLife uses{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google AdSense
              </a>
              , a third-party advertising service operated by Google LLC, to
              display ads on this site. Google AdSense uses cookies — including
              the DoubleClick cookie — to serve ads that may be relevant to you
              based on your prior visits to this and other websites.
            </p>
            <p style={{ margin: "0.75rem 0 0" }}>
              Google AdSense may collect data such as your IP address, browser
              type, device identifiers, and browsing history across sites
              participating in the Google advertising network. This data is used
              to show you interest-based (personalized) advertisements.
            </p>
            <p style={{ margin: "0.75rem 0 0" }}>
              You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                aboutads.info
              </a>
              . For more information about how Google uses data from sites that
              use its services, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                How Google uses information from sites or apps that use our services
              </a>
              .
            </p>
          </div>

          {/* Server logs */}
          <div>
            <h2 style={h2Style}>Server logs</h2>
            <p style={{ margin: 0 }}>
              Like all web servers, our hosting infrastructure (Vercel) may
              automatically record standard server access logs. These logs
              typically include your IP address, browser type, and the pages
              requested. This data is not linked to any personal identity and is
              used solely for diagnosing technical issues. Vercel&apos;s data
              retention policies govern how long these logs are stored.
            </p>
          </div>

          {/* Third-party services */}
          <div>
            <h2 style={h2Style}>Other third-party services</h2>
            <p style={{ margin: 0 }}>
              In addition to Google Analytics and Google AdSense, HalfLife uses
              the following services:
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
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Vercel</strong>{" "}
                — Site hosting. May collect server access logs.{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Vercel Privacy Policy
                </a>
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Google Fonts</strong>{" "}
                — Web fonts (DM Serif Display, DM Sans, DM Mono). Google may log
                font requests.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Google Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 style={h2Style}>Cookies</h2>
            <p style={{ margin: 0 }}>
              HalfLife itself does not set first-party cookies. However,
              third-party services embedded on this site — including Google
              Analytics and Google AdSense — may set cookies on your device.
              These cookies are governed by their respective privacy policies
              (linked above). You can manage or disable cookies through your
              browser settings. Note that disabling cookies may affect the
              functionality of some features.
            </p>
          </div>

          {/* Children */}
          <div>
            <h2 style={h2Style}>Children&apos;s privacy</h2>
            <p style={{ margin: 0 }}>
              HalfLife does not knowingly collect personal information from
              anyone under the age of 13. The educational content on this site
              is intended for adult audiences and those seeking to understand
              their own medications.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 style={h2Style}>Changes to this policy</h2>
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
            <h2 style={h2Style}>Contact</h2>
            <p style={{ margin: 0 }}>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:hello@vibed-lab.com"
                style={linkStyle}
              >
                hello@vibed-lab.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
