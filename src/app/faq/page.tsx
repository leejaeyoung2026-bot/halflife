import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about HalfLife — the drug half-life simulator. Learn how to use the simulator, understand pharmacokinetics, and find answers about data sources and accuracy.",
  openGraph: {
    title: "FAQ — HalfLife by Vibed Lab",
    description:
      "Frequently asked questions about HalfLife — the drug half-life simulator. Understand pharmacokinetics, how simulations work, and what the data represents.",
    url: "https://halflife.vibed-lab.com/faq",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FAQ — HalfLife by Vibed Lab",
    description:
      "Answers to common questions about HalfLife, drug half-life, and pharmacokinetics.",
  },
};

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type FAQCategory = {
  label: string;
  slug: string;
  items: FAQItem[];
};

const categories: FAQCategory[] = [
  {
    label: "About HalfLife",
    slug: "about",
    items: [
      {
        q: "What is HalfLife?",
        a: (
          <>
            HalfLife is an interactive pharmacokinetics visualization tool that
            shows how drug concentration changes in the body over time. Using
            established mathematical models of drug absorption, distribution,
            and elimination, it generates real-time concentration-time curves
            for over 30 common medications. HalfLife is designed to make one of
            pharmacy&apos;s core concepts — drug half-life — intuitive and
            accessible to patients, students, and curious minds alike.
          </>
        ),
      },
      {
        q: "Is HalfLife a medical tool? Can I use it for medical decisions?",
        a: (
          <>
            No. HalfLife is strictly an educational tool. The simulations use
            population-average pharmacokinetic parameters drawn from clinical
            literature, which means they represent a statistical average — not
            your individual biology. Factors like your age, kidney function,
            liver health, genetic makeup, body weight, and other medications you
            take can significantly alter how a drug behaves in your body. Never
            use HalfLife to decide whether to take, skip, or stop a medication.
            Always consult your pharmacist or physician.
          </>
        ),
      },
      {
        q: "Who built HalfLife?",
        a: (
          <>
            HalfLife was built by Jay, a licensed pharmacist and researcher. Jay
            also develops{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              PK&middot;Swift
            </strong>
            , a professional pharmacokinetics calculation tool used by
            pharmacists and clinical researchers. HalfLife is his attempt to
            bring that same pharmacokinetic rigor to a general audience — making
            the science visual, accessible, and genuinely educational. It is
            published under{" "}
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
            </a>
            , a small independent studio building precise and useful digital
            tools.
          </>
        ),
      },
      {
        q: "Where does the drug data come from?",
        a: (
          <>
            Every pharmacokinetic parameter in HalfLife — half-life, volume of
            distribution, bioavailability, absorption rate — is sourced from
            peer-reviewed clinical literature, including reference pharmacology
            textbooks and published drug package inserts. Where ranges are
            reported in the literature (which is common), the simulator uses
            the midpoint of the clinically accepted range as its default value.
            Sources are curated and verified by a licensed pharmacist.
          </>
        ),
      },
      {
        q: "Is HalfLife free to use?",
        a: (
          <>
            Yes, HalfLife is completely free to use. There are no accounts, no
            subscriptions, and no paywalls. The site is supported by
            non-intrusive display advertising. We believe pharmacokinetics
            education should be accessible to everyone.
          </>
        ),
      },
    ],
  },
  {
    label: "Using the Simulator",
    slug: "simulator",
    items: [
      {
        q: "How do I use the drug simulator?",
        a: (
          <>
            Navigate to the{" "}
            <a
              href="/simulator"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Simulator
            </a>{" "}
            page and select a drug from the dropdown menu. The simulator will
            immediately display a concentration-time curve using default
            clinical values for that drug. You can then adjust the dose, dosing
            interval, number of doses, and route of administration using the
            controls provided. The chart updates in real time as you make
            changes.
          </>
        ),
      },
      {
        q: "Can I simulate multiple drugs at once?",
        a: (
          <>
            The current version of HalfLife simulates one drug at a time. Each
            drug profile includes its own set of pharmacokinetic parameters, and
            the chart reflects only the selected drug&apos;s concentration
            curve. Multi-drug overlay simulation — useful for studying drug
            interactions and timing — is a feature being considered for a future
            release.
          </>
        ),
      },
      {
        q: "What does the concentration-time curve show?",
        a: (
          <>
            The curve plots the estimated concentration of a drug in your
            bloodstream (vertical axis, in ng/mL or equivalent units) against
            time elapsed since the first dose (horizontal axis, in hours or
            days). Peaks represent moments of maximum concentration after each
            dose (C<sub>max</sub>), troughs represent the lowest concentration
            before the next dose, and the gradual decline between doses
            illustrates first-order elimination — the mathematical process
            governed by the drug&apos;s half-life.
          </>
        ),
      },
      {
        q: "How accurate are the simulations?",
        a: (
          <>
            The simulations are mathematically accurate representations of
            population-average pharmacokinetic models. They correctly apply
            first-order elimination kinetics and one-compartment pharmacokinetic
            principles. However, the accuracy of the output depends entirely on
            the accuracy of the input parameters — and those parameters are
            averages, not individual measurements. Real-world drug levels in any
            given person can differ substantially from what the simulator
            predicts. The simulations are best understood as illustrative models,
            not personal forecasts.
          </>
        ),
      },
      {
        q: 'What is "steady state" in the simulator?',
        a: (
          <>
            Steady state is the condition reached after multiple doses of a drug
            where the amount of drug entering the body with each dose equals the
            amount being eliminated between doses. At steady state, peak and
            trough concentrations stabilize and repeat predictably with each
            dosing cycle. For most drugs, steady state is achieved after
            approximately 4–5 half-lives of regular dosing. The simulator
            visualizes this accumulation process over multiple doses and shows
            the plateau that defines steady state.
          </>
        ),
      },
    ],
  },
  {
    label: "Understanding Pharmacokinetics",
    slug: "pharmacokinetics",
    items: [
      {
        q: "What is drug half-life?",
        a: (
          <>
            Drug half-life (t&frac12;) is the time required for the
            concentration of a drug in the bloodstream to decrease by 50%. It
            is one of the most fundamental concepts in pharmacokinetics because
            it governs how frequently a drug must be taken to maintain
            therapeutic levels, how long it takes for the drug to reach steady
            state, and how long it takes the drug to clear the body after the
            last dose. A drug with a short half-life (like ibuprofen at ~2
            hours) requires more frequent dosing than a drug with a long
            half-life (like fluoxetine at ~2–6 days).
          </>
        ),
      },
      {
        q: "Why do some drugs have a range for half-life instead of a single number?",
        a: (
          <>
            Biological variability is the short answer. Drug half-life is
            influenced by individual differences in liver enzyme activity, renal
            function, body composition, age, sex, genetic polymorphisms (such
            as CYP2D6 metabolizer status), and co-administered medications that
            inhibit or induce metabolic enzymes. Clinical studies measure
            half-life in populations of volunteers or patients, and the results
            naturally span a range. For example, the antidepressant fluoxetine
            has a reported half-life of 1–4 days for the parent compound, and
            4–16 days for its active metabolite norfluoxetine.
          </>
        ),
      },
      {
        q: "What affects how fast a drug is eliminated?",
        a: (
          <>
            Drug elimination rate is determined by several factors. Hepatic
            (liver) clearance depends on the activity of metabolizing enzymes,
            particularly the cytochrome P450 family; genetic variation and
            enzyme-inhibiting drugs can dramatically slow this process. Renal
            (kidney) clearance depends on glomerular filtration rate, which
            declines with age and kidney disease. Body composition affects
            volume of distribution — highly lipophilic drugs distribute widely
            and eliminate more slowly. Protein binding also matters: only the
            unbound fraction of a drug is pharmacologically active and available
            for elimination.
          </>
        ),
      },
      {
        q: "What does bioavailability mean?",
        a: (
          <>
            Bioavailability is the fraction of an administered dose that reaches
            the systemic circulation in an active form. An intravenous dose has
            100% bioavailability by definition, since it is delivered directly
            into the bloodstream. Oral bioavailability is typically lower
            because drugs must survive the gastrointestinal environment and
            first-pass metabolism in the liver before reaching systemic
            circulation. For example, oral morphine has roughly 20–40%
            bioavailability because the liver heavily metabolizes it before it
            reaches the blood. Bioavailability directly affects how large an
            oral dose must be to achieve the same effect as an IV dose.
          </>
        ),
      },
      {
        q: "Why do I need to take some drugs with food?",
        a: (
          <>
            Food affects drug absorption in several ways. For some drugs, food
            slows gastric emptying, which delays absorption and reduces peak
            concentration — a beneficial effect that can prevent gastrointestinal
            irritation (e.g., ibuprofen, metformin). For other drugs, food
            increases bioavailability by stimulating bile production or altering
            gut pH (e.g., griseofulvin, certain antifungals). Conversely, food
            can reduce absorption for some drugs by binding to them in the gut
            or changing the absorption environment — which is why some
            antibiotics and thyroid medications are taken on an empty stomach.
            Your pharmacist can explain which scenario applies to your specific
            medications.
          </>
        ),
      },
    ],
  },
  {
    label: "Technical",
    slug: "technical",
    items: [
      {
        q: "Does HalfLife collect personal data?",
        a: (
          <>
            No. HalfLife does not collect, store, or transmit any personally
            identifiable information. There are no accounts, no login, and no
            cookies set by our application. All simulator inputs exist only in
            your browser session and are never sent to our servers. Standard
            server access logs (IP address, browser type, pages visited) are
            maintained by our hosting provider, Vercel, for infrastructure
            purposes. See our{" "}
            <a
              href="/privacy"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Privacy Policy
            </a>{" "}
            for full details.
          </>
        ),
      },
      {
        q: "Can I suggest a drug to be added?",
        a: (
          <>
            Yes, and we encourage it. If there is a medication you would like to
            see in the simulator, you can submit a suggestion via the{" "}
            <a
              href="/contact"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Contact page
            </a>{" "}
            or by opening a GitHub issue. Please include the drug name (generic
            preferred), the indication if known, and any published
            pharmacokinetic reference you can find. All additions are vetted
            against peer-reviewed clinical literature before being included.
          </>
        ),
      },
      {
        q: "Is HalfLife available as a mobile app?",
        a: (
          <>
            HalfLife is a progressive web application (PWA) built with Next.js.
            It is fully optimized for mobile browsers and works well on
            smartphones and tablets without any installation. You can add it to
            your home screen from your mobile browser&apos;s share menu for an
            app-like experience. A dedicated native app for iOS and Android is
            not currently planned, as the web version provides equivalent
            functionality.
          </>
        ),
      },
    ],
  },
];

// FAQ JSON-LD data for rich results (plain text answers for schema.org)
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HalfLife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HalfLife is a free, interactive pharmacokinetics visualization tool that shows how drug concentration changes over time. It uses established mathematical models of drug absorption, distribution, metabolism, and elimination to simulate how medications behave in the human body.",
      },
    },
    {
      "@type": "Question",
      name: "Is HalfLife a medical tool? Can I use it for medical decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HalfLife is strictly an educational tool designed to help you understand pharmacokinetics concepts. It is not intended to be used for clinical decision-making, dose calculations, or any medical purpose. Always consult a licensed pharmacist or physician before making any decisions about medications.",
      },
    },
    {
      "@type": "Question",
      name: "What is drug half-life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drug half-life (t½) is the time required for the concentration of a drug in the body to decrease by 50%. It determines how frequently a medication needs to be taken and how long it stays active in the body. A drug with a short half-life (like ibuprofen at 2 hours) needs to be taken more frequently than one with a long half-life (like fluoxetine at 1-4 days).",
      },
    },
    {
      "@type": "Question",
      name: "Where does the drug data come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All pharmacokinetic parameters (half-lives, volumes of distribution, bioavailability) used in HalfLife are sourced from peer-reviewed clinical literature, FDA-approved prescribing information (package inserts), and authoritative pharmacology references including Goodman & Gilman's The Pharmacological Basis of Therapeutics.",
      },
    },
    {
      "@type": "Question",
      name: "What does bioavailability mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bioavailability is the fraction of an administered dose that reaches the systemic circulation in its active form. An IV injection has 100% bioavailability. Oral medications have lower bioavailability due to incomplete absorption and first-pass metabolism in the liver. For example, oral morphine has about 25-35% bioavailability compared to IV administration.",
      },
    },
    {
      "@type": "Question",
      name: "Is HalfLife free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HalfLife is completely free to use. There is no account required, no subscription, and no in-app purchases. It is funded by non-intrusive advertising.",
      },
    },
    {
      "@type": "Question",
      name: "Does HalfLife collect personal data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HalfLife itself does not collect personal data. However, third-party services including Google Analytics and Google AdSense may collect usage data and set cookies. See our Privacy Policy for details.",
      },
    },
  ],
};


export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <section style={{ padding: "10rem 2rem 6rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

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
          FAQ
        </p>

        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            margin: "0 0 1rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently Asked Questions
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            margin: "0 0 3rem",
            maxWidth: "640px",
          }}
        >
          Answers to common questions about HalfLife, the drug simulator, and
          pharmacokinetics.
        </p>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--rule)",
            marginBottom: "3rem",
          }}
        />

        {/* Category jump links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                textDecoration: "none",
                border: "1px solid var(--rule)",
                borderRadius: "4px",
                padding: "0.35rem 0.75rem",
                backgroundColor: "var(--cream)",
              }}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* FAQ Categories */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          {categories.map((cat, catIdx) => (
            <div key={cat.slug} id={cat.slug}>
              {/* Category heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {String(catIdx + 1).padStart(2, "0")}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {cat.label}
                </h2>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "var(--rule)",
                  }}
                />
              </div>

              {/* Q&A items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {cat.items.map((item, itemIdx) => {
                  const isEven = itemIdx % 2 === 0;
                  return (
                    <div
                      key={itemIdx}
                      style={{
                        padding: "1.75rem 2rem",
                        backgroundColor: isEven
                          ? "var(--paper)"
                          : "var(--cream)",
                        borderRadius:
                          itemIdx === 0
                            ? "8px 8px 0 0"
                            : itemIdx === cat.items.length - 1
                            ? "0 0 8px 8px"
                            : "0",
                        border: "1px solid var(--rule)",
                        borderTop: itemIdx === 0 ? "1px solid var(--rule)" : "none",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily:
                            "var(--font-serif), ui-serif, Georgia, serif",
                          fontSize: "1.0625rem",
                          fontWeight: 400,
                          color: "var(--ink)",
                          margin: "0 0 0.75rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.q}
                      </h3>
                      <div
                        style={{
                          fontFamily:
                            "var(--font-sans), ui-sans-serif, sans-serif",
                          fontSize: "0.9375rem",
                          lineHeight: 1.75,
                          color: "var(--ink-soft)",
                        }}
                      >
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            backgroundColor: "var(--cream)",
            border: "1px solid var(--rule)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              margin: 0,
            }}
          >
            STILL HAVE QUESTIONS?
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              margin: 0,
            }}
          >
            If your question isn&apos;t answered here, reach out via the{" "}
            <a
              href="/contact"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              contact page
            </a>
            . You may also find useful background reading in the{" "}
            <a
              href="/glossary"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              pharmacology glossary
            </a>
            .
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
