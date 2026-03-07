import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — HalfLife by Vibed Lab",
  description:
    "Terms of service for HalfLife. This tool is for educational purposes only and is not a substitute for professional medical advice.",
  openGraph: {
    title: "Terms of Service — HalfLife by Vibed Lab",
    description:
      "Terms of service for HalfLife. Educational purposes only — not medical advice.",
    url: "https://halflife.vibed-lab.com/terms",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — HalfLife by Vibed Lab",
    description: "Educational purposes only — not medical advice.",
  },
};

export default function TermsPage() {
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
          Terms of Service
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

        {/* Medical disclaimer — prominent banner */}
        <div
          style={{
            border: "2px solid color-mix(in srgb, var(--accent) 30%, transparent)",
            borderLeft: "4px solid var(--accent)",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
            backgroundColor: "color-mix(in srgb, var(--accent) 6%, var(--paper))",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--ink)",
              margin: "0 0 0.375rem",
              letterSpacing: "0.01em",
            }}
          >
            NOT MEDICAL ADVICE
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
            This tool is for educational purposes only. The information and
            simulations provided by HalfLife do not constitute medical advice,
            diagnosis, or treatment. Always consult your pharmacist, physician,
            or other qualified healthcare provider with any questions regarding
            your medications or medical conditions.
          </p>
        </div>

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
          {/* Agreement */}
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
              Agreement to terms
            </h2>
            <p style={{ margin: 0 }}>
              By accessing or using HalfLife at halflife.vibed-lab.com (the
              &quot;Site&quot;), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use the Site.
            </p>
          </div>

          {/* Educational purpose */}
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
              Educational purpose only
            </h2>
            <p style={{ margin: 0 }}>
              HalfLife is an educational resource designed to help users
              understand the general principles of drug pharmacokinetics. All
              simulations use population-average parameters from clinical
              literature. Individual drug behavior varies based on factors
              including age, body weight, kidney function, liver function,
              genetic makeup, and concurrent medications. The figures presented
              in HalfLife are approximations and should not be used to guide
              any personal medical decisions.
            </p>
          </div>

          {/* Not a substitute */}
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
              Not a substitute for professional advice
            </h2>
            <p style={{ margin: 0 }}>
              The content on this Site does not replace the expertise of
              healthcare professionals who are familiar with your complete
              medical history. Never disregard, delay, or discontinue
              professional medical advice based on anything you read or simulate
              on this Site. If you believe you are experiencing a medical
              emergency, call your local emergency services immediately.
            </p>
          </div>

          {/* Accuracy */}
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
              Accuracy of information
            </h2>
            <p style={{ margin: 0 }}>
              We strive to ensure that all pharmacokinetic data presented in
              HalfLife is derived from peer-reviewed clinical sources. However,
              we make no guarantees of absolute accuracy or completeness. Drug
              parameters in published literature may vary, and new research may
              supersede older values. We welcome corrections and can be reached
              at the contact address below.
            </p>
          </div>

          {/* Limitation of liability */}
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
              Limitation of liability
            </h2>
            <p style={{ margin: 0 }}>
              To the fullest extent permitted by applicable law, Vibed Lab and
              its contributors shall not be liable for any direct, indirect,
              incidental, consequential, or special damages arising from your
              use of, or inability to use, this Site or its content. You use
              HalfLife entirely at your own risk.
            </p>
          </div>

          {/* Intellectual property */}
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
              Intellectual property
            </h2>
            <p style={{ margin: 0 }}>
              All original content, design, and code on this Site is the
              property of Vibed Lab and is protected under applicable copyright
              law. You may use HalfLife for personal, non-commercial,
              educational purposes. Reproduction, redistribution, or commercial
              use of any part of this Site without prior written permission is
              not permitted.
            </p>
          </div>

          {/* External links */}
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
              External links
            </h2>
            <p style={{ margin: 0 }}>
              This Site may contain links to external websites. These links are
              provided for informational purposes only. Vibed Lab has no control
              over, and assumes no responsibility for, the content or practices
              of any third-party websites.
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
              Changes to these terms
            </h2>
            <p style={{ margin: 0 }}>
              We reserve the right to modify these terms at any time. When
              changes are made, we will update the &quot;Last updated&quot; date
              at the top of this page. Continued use of the Site after any
              changes constitutes your acceptance of the new terms.
            </p>
          </div>

          {/* Governing law */}
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
              Governing law
            </h2>
            <p style={{ margin: 0 }}>
              These Terms shall be governed by and interpreted in accordance
              with applicable law. Any disputes arising from the use of this
              Site shall be resolved in a manner consistent with these terms.
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
              Questions about these Terms of Service? Contact us at{" "}
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
