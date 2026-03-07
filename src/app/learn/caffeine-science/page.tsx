import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "The Science Behind Caffeine: Pharmacology of the World's Most Popular Drug",
  description:
    "Explore caffeine's pharmacokinetics — absorption, half-life, metabolism, tolerance, and the science behind your daily coffee habit.",
  openGraph: {
    title: "The Science Behind Caffeine: Pharmacology of the World's Most Popular Drug | HalfLife by Vibed Lab",
    description:
      "Explore caffeine's pharmacokinetics — absorption, half-life, metabolism, tolerance, and the science behind your daily coffee habit.",
    url: "https://halflife.vibed-lab.com/learn/caffeine-science",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Science Behind Caffeine: Pharmacology of the World's Most Popular Drug",
    description:
      "Absorption, half-life, CYP1A2 metabolism, tolerance, and why your caffeine half-life differs from mine.",
  },
};

// ── Reusable style objects ──────────────────────────────────────────────────

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--accent)",
  margin: "0 0 1rem",
};

const h1Style: React.CSSProperties = {
  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 400,
  lineHeight: 1.2,
  color: "var(--ink)",
  margin: "0 0 1.25rem",
  letterSpacing: "-0.01em",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
  fontSize: "1.125rem",
  lineHeight: 1.75,
  color: "var(--ink-soft)",
  margin: "0 0 3rem",
};

const ruleStyle: React.CSSProperties = {
  height: "1px",
  backgroundColor: "var(--rule)",
  marginBottom: "3rem",
};

const proseWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2.75rem",
  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "var(--ink-soft)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
  fontSize: "1.5rem",
  fontWeight: 400,
  color: "var(--ink)",
  margin: "0 0 0.875rem",
  letterSpacing: "-0.01em",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
  fontSize: "1.125rem",
  fontWeight: 400,
  color: "var(--ink)",
  margin: "0 0 0.5rem",
};

const calloutBox: React.CSSProperties = {
  border: "1px solid var(--rule)",
  borderRadius: "10px",
  padding: "1.75rem",
  backgroundColor: "var(--cream)",
};

const accentBox: React.CSSProperties = {
  border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
  borderRadius: "10px",
  padding: "1.75rem",
  backgroundColor: "color-mix(in srgb, var(--accent) 5%, transparent)",
};

const leftBorder: React.CSSProperties = {
  borderLeft: "3px solid var(--rule)",
  paddingLeft: "1.25rem",
};

const accentBorder: React.CSSProperties = {
  borderLeft: "3px solid var(--accent)",
  paddingLeft: "1.25rem",
};

const tableWrap: React.CSSProperties = {
  overflowX: "auto",
  borderRadius: "8px",
  border: "1px solid var(--rule)",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
  fontSize: "0.9rem",
};

const thStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--ink-faint)",
  backgroundColor: "var(--cream)",
  padding: "0.75rem 1rem",
  textAlign: "left",
  borderBottom: "1px solid var(--rule)",
};

const tdStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  borderBottom: "1px solid var(--rule)",
  color: "var(--ink-soft)",
  verticalAlign: "top",
};

const tdAccent: React.CSSProperties = {
  ...tdStyle,
  color: "var(--accent)",
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontWeight: 500,
};

const tdStrong: React.CSSProperties = {
  ...tdStyle,
  color: "var(--ink)",
  fontWeight: 500,
};

const inlineCode: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: "0.875em",
  backgroundColor: "var(--cream)",
  border: "1px solid var(--rule)",
  borderRadius: "4px",
  padding: "0.1em 0.35em",
  color: "var(--ink)",
};

const statGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "1rem",
  margin: "1.5rem 0",
};

const statCard: React.CSSProperties = {
  backgroundColor: "var(--cream)",
  border: "1px solid var(--rule)",
  borderRadius: "8px",
  padding: "1rem 1.125rem",
};

const continueSection: React.CSSProperties = {
  borderTop: "1px solid var(--rule)",
  paddingTop: "3rem",
  marginTop: "1rem",
};

const linkStyle: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "none",
  fontWeight: 500,
  borderBottom: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
  paddingBottom: "1px",
};

// ── Component ───────────────────────────────────────────────────────────────

export default function CaffeineSciencePage() {
  return (
    <section style={{ padding: "10rem 2rem 6rem" }}>
      <ArticleJsonLd
        title="The Science Behind Caffeine"
        description="A pharmacist's deep dive into how caffeine works, individual variation, and optimal consumption."
        url="https://halflife.vibed-lab.com/learn/caffeine-science"
        datePublished="2026-03-08"
      />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Mono label */}
        <p style={monoLabel}>LEARN / PHARMACOKINETICS</p>

        {/* Title */}
        <h1 style={h1Style}>
          The Science Behind Caffeine — The World&apos;s Most Popular Drug
        </h1>

        {/* Lead paragraph */}
        <p style={leadStyle}>
          Every morning, billions of people perform the same chemical experiment on themselves.
          They consume a psychoactive xanthine alkaloid, wait 30 to 60 minutes for it to cross
          the blood-brain barrier, and then describe the result as &ldquo;finally feeling human.&rdquo;
          Caffeine is so woven into daily life that most people never think of it as a drug at all.
          But from a pharmacological standpoint, it is a remarkably well-studied, potent, and
          pharmacokinetically interesting compound — one whose effects on your brain depend heavily
          on factors most coffee drinkers have never considered.
        </p>

        {/* Rule */}
        <div style={ruleStyle} />

        <AuthorByline />

        {/* Prose content */}
        <div style={proseWrap}>

          {/* ── Section 1: Caffeine by the Numbers ── */}
          <div>
            <h2 style={h2Style}>Caffeine by the Numbers</h2>
            <p style={{ margin: "0 0 1rem" }}>
              Before diving into mechanism and metabolism, it helps to know the basic
              pharmacokinetic profile of caffeine. These are the numbers that govern everything
              from how quickly your morning espresso kicks in to how much sleep disruption
              you get from an afternoon cup.
            </p>

            {/* Stat cards */}
            <div style={statGrid}>
              {[
                { label: "Chemical Name", value: "1,3,7-trimethylxanthine" },
                { label: "Molecular Weight", value: "194.19 g/mol" },
                { label: "Half-life", value: "3–7 hours" },
                { label: "Bioavailability", value: "~99%" },
                { label: "Tmax", value: "30–120 min" },
                { label: "Vd", value: "0.6–0.7 L/kg" },
              ].map(({ label, value }) => (
                <div key={label} style={statCard}>
                  <p style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    margin: "0 0 0.375rem",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ margin: "0 0 1rem" }}>
              The nearly complete oral bioavailability of caffeine (~99%) is pharmacologically
              unusual. Most drugs lose a significant fraction to first-pass metabolism in the
              liver before reaching systemic circulation. Caffeine is absorbed rapidly and
              completely from the GI tract, making the dose you consume essentially equivalent
              to the dose that reaches your blood.
            </p>
            <p style={{ margin: 0 }}>
              The volume of distribution (0.6–0.7 L/kg) tells us caffeine distributes well
              beyond the blood — it enters tissues throughout the body, including the brain,
              at concentrations proportional to plasma levels. This is consistent with its
              lipophilic nature and its ability to freely cross the blood-brain barrier.
            </p>
          </div>

          {/* ── Section 2: How Caffeine Works (Pharmacodynamics) ── */}
          <div>
            <h2 style={h2Style}>How Caffeine Works: The Pharmacodynamics</h2>
            <p style={{ margin: "0 0 1rem" }}>
              Caffeine&apos;s mechanism of action is often mischaracterized as &ldquo;giving you energy.&rdquo;
              This is backwards. Caffeine doesn&apos;t generate energy — it blocks the signal that
              tells your brain you&apos;re running low.
            </p>

            <div style={{ ...accentBox, marginBottom: "1.25rem" }}>
              <h3 style={{ ...h3Style, marginBottom: "0.75rem" }}>Adenosine Receptor Antagonism</h3>
              <p style={{ margin: "0 0 0.875rem" }}>
                During waking hours, your neurons continuously produce <strong style={{ color: "var(--ink)", fontWeight: 600 }}>adenosine</strong>,
                a byproduct of ATP metabolism. Adenosine accumulates progressively in the brain,
                binding to A1 and A2A receptors. As receptor occupancy increases, you feel
                progressively drowsier — this is the normal biological mechanism of sleep drive,
                or <em>sleep pressure</em>.
              </p>
              <p style={{ margin: 0 }}>
                Caffeine is a <strong style={{ color: "var(--ink)", fontWeight: 600 }}>competitive adenosine receptor antagonist</strong>.
                It fits into adenosine receptors but doesn&apos;t activate them — it simply blocks
                adenosine from binding. The adenosine is still present; the sleep pressure is
                still accumulating; but the brain can no longer register it. When the caffeine
                clears, adenosine floods back to its receptors, which is why the post-caffeine
                crash can feel sharper than natural sleepiness — you&apos;re experiencing several
                hours&apos; worth of accumulated sleep pressure all at once.
              </p>
            </div>

            <h3 style={{ ...h3Style, marginTop: "1rem" }}>Downstream Effects: Dopamine and Norepinephrine</h3>
            <p style={{ margin: "0 0 1rem" }}>
              Adenosine receptor blockade has cascading effects on other neurotransmitter systems.
              In the striatum, A2A receptors are co-localized with dopamine D2 receptors, and
              adenosine normally inhibits dopamine signaling. When caffeine blocks A2A receptors,
              this inhibition is removed — dopamine activity increases. This is why caffeine
              produces mild euphoria and improved motivation, and why it shares (distantly) some
              pharmacological territory with dopaminergic drugs.
            </p>
            <p style={{ margin: "0 0 1rem" }}>
              Caffeine also indirectly increases norepinephrine (noradrenaline) release, which
              contributes to the increased alertness, heart rate elevation, and slightly elevated
              blood pressure seen at typical doses. The sympathomimetic effects of caffeine are
              relevant in clinical settings — high doses of caffeine significantly elevate heart
              rate and can trigger arrhythmias in susceptible individuals.
            </p>

            <h3 style={{ ...h3Style, marginTop: "1rem" }}>Dose-Response Relationship</h3>
            <p style={{ margin: 0 }}>
              Caffeine follows a classic dose-response curve with a clear optimal range.
              At 40–300mg (roughly half a cup to 2–3 cups of coffee), most adults experience
              improved alertness, mood, reaction time, and cognitive performance. Above 400mg,
              adverse effects predominate: anxiety, jitteriness, tremor, tachycardia, and
              insomnia become increasingly likely. Above 1,000mg, frank toxicity is possible.
              The lethal dose for an average adult is estimated at approximately 10 grams
              (roughly 100 cups of coffee) — practically unreachable through normal consumption,
              though concentrated caffeine powder supplements have caused fatalities.
            </p>
          </div>

          {/* ── Section 3: Journey Through the Body ── */}
          <div>
            <h2 style={h2Style}>Caffeine&apos;s Journey Through Your Body</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={accentBorder}>
                <h3 style={h3Style}>Absorption — Nearly Instant and Complete</h3>
                <p style={{ margin: 0 }}>
                  Caffeine is absorbed throughout the GI tract, beginning in the stomach and
                  continuing in the small intestine. Absorption is so complete (~99%) that the
                  form of consumption — coffee, tea, capsule, energy drink — has minimal impact
                  on total systemic exposure. Food slows absorption slightly, extending{" "}
                  <code style={inlineCode}>Tmax</code> from ~45 minutes to ~90 minutes, but
                  does not meaningfully reduce the total amount absorbed. Time to peak plasma
                  concentration typically ranges from 30 to 120 minutes depending on formulation
                  and whether the stomach is empty.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Distribution — Brain Penetration Is Rapid and Efficient</h3>
                <p style={{ margin: 0 }}>
                  Caffeine&apos;s lipophilicity allows it to passively diffuse across the blood-brain
                  barrier with minimal resistance. Brain concentrations closely track plasma
                  concentrations, which is why the psychoactive effects are felt within minutes
                  of peak plasma levels being reached. Caffeine also distributes into saliva,
                  breast milk, and crosses the placenta — all relevant clinical considerations.
                  Protein binding is low (~36%), meaning most circulating caffeine is in free,
                  pharmacologically active form.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Metabolism — The CYP1A2 Bottleneck</h3>
                <p style={{ margin: "0 0 0.875rem" }}>
                  Approximately 95–98% of caffeine is metabolized in the liver by the cytochrome
                  P450 enzyme <strong style={{ color: "var(--ink)", fontWeight: 600 }}>CYP1A2</strong>.
                  This enzyme N-demethylates caffeine into three primary metabolites:
                </p>
                <ul style={{ margin: "0", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <li>
                    <strong style={{ color: "var(--ink)" }}>Paraxanthine (1,7-dimethylxanthine)</strong> — ~84% of caffeine metabolism.
                    Also pharmacologically active; contributes to lipolysis and some cardiovascular effects.
                  </li>
                  <li>
                    <strong style={{ color: "var(--ink)" }}>Theobromine (3,7-dimethylxanthine)</strong> — ~12%.
                    Milder stimulant; also the primary xanthine in chocolate. Has vasodilatory properties.
                  </li>
                  <li>
                    <strong style={{ color: "var(--ink)" }}>Theophylline (1,3-dimethylxanthine)</strong> — ~4%.
                    Used therapeutically as a bronchodilator; pharmacologically potent, has a narrower
                    therapeutic index than caffeine.
                  </li>
                </ul>
                <p style={{ margin: "0.75rem 0 0" }}>
                  All three metabolites undergo further metabolism before eventual renal excretion.
                  Only 1–2% of caffeine is excreted unchanged in the urine — meaning urine caffeine
                  levels are a poor measure of consumption; metabolite profiling is used instead.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Elimination — First-Order Kinetics</h3>
                <p style={{ margin: 0 }}>
                  Caffeine follows first-order elimination: a constant <em>fraction</em> of the
                  remaining drug is eliminated per unit time. This means doubling the dose doubles
                  the time to clear, but the half-life remains constant (at typical doses). Only
                  at very high concentrations does CYP1A2 become saturated and elimination shift
                  toward zero-order kinetics. The median half-life in healthy, non-pregnant, non-smoking
                  adults is approximately 5 hours, with a clinically significant range of 3 to 7 hours.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 4: Why Your Half-Life Isn't Mine ── */}
          <div>
            <h2 style={h2Style}>Why Your Half-Life Isn&apos;t My Half-Life</h2>
            <p style={{ margin: "0 0 1.5rem" }}>
              The 3–7 hour range for caffeine half-life isn&apos;t measurement noise — it reflects
              genuine, pharmacologically significant variation between individuals. The key variable
              is CYP1A2 activity, which is influenced by genetics, environment, hormones, and physiology.
            </p>

            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Factor</th>
                    <th style={thStyle}>Effect on Half-Life</th>
                    <th style={thStyle}>Mechanism</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "CYP1A2 fast metabolizer genotype",
                      "Shorter (~3 hours)",
                      "Genetic polymorphisms increase CYP1A2 expression/activity",
                    ],
                    [
                      "CYP1A2 slow metabolizer genotype",
                      "Longer (~7+ hours)",
                      "Reduced CYP1A2 activity; slower hepatic clearance",
                    ],
                    [
                      "Cigarette smoking",
                      "Significantly shorter",
                      "Polycyclic aromatic hydrocarbons strongly induce CYP1A2",
                    ],
                    [
                      "Combined oral contraceptives",
                      "Extended (~2× longer)",
                      "Estrogen component inhibits CYP1A2",
                    ],
                    [
                      "Pregnancy (1st trimester)",
                      "Slightly extended",
                      "Altered hepatic blood flow and enzyme activity",
                    ],
                    [
                      "Pregnancy (3rd trimester)",
                      "Up to 15 hours",
                      "Progesterone competes for CYP1A2; reduced hepatic blood flow",
                    ],
                    [
                      "Liver cirrhosis",
                      "Dramatically extended",
                      "Reduced functional hepatic mass and blood flow",
                    ],
                    [
                      "Age (newborns)",
                      "80–100+ hours",
                      "CYP1A2 not yet expressed; neonates rely on alternate pathways",
                    ],
                    [
                      "Age (elderly)",
                      "Slightly extended",
                      "Progressive decline in hepatic metabolic capacity",
                    ],
                  ].map(([factor, effect, mechanism], i) => (
                    <tr key={i} style={i % 2 === 0 ? {} : { backgroundColor: "var(--cream)" }}>
                      <td style={tdStrong}>{factor}</td>
                      <td style={tdAccent}>{effect}</td>
                      <td style={tdStyle}>{mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ margin: "1rem 0 0" }}>
              These variations have profound practical implications. A pregnant woman in her third
              trimester may have caffeine still active in her system 15 hours after her morning cup —
              affecting fetal caffeine exposure throughout the day and night. A heavy smoker
              metabolizes caffeine twice as fast as a non-smoker and may need twice as much caffeine
              to achieve the same effect (which partially explains why many smokers are heavy coffee
              drinkers). When a smoker quits, CYP1A2 activity declines within weeks, and caffeine
              sensitivity suddenly increases — a pharmacokinetic basis for the commonly reported
              post-quitting coffee intolerance.
            </p>
          </div>

          {/* AdSense — mid-article */}
          <div className="ad-container" style={{ margin: "2rem 0" }}>
            <AdUnit slot="2345678901" format="auto" />
          </div>

          {/* ── Section 5: Caffeine Content Comparison ── */}
          <div>
            <h2 style={h2Style}>Caffeine Content: A Practical Reference</h2>
            <p style={{ margin: "0 0 1.25rem" }}>
              Understanding pharmacokinetics requires knowing what you&apos;re actually consuming.
              Caffeine content varies enormously between products — sometimes by a factor of 10
              or more within the same category.
            </p>

            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Source</th>
                    <th style={thStyle}>Serving Size</th>
                    <th style={thStyle}>Caffeine (mg)</th>
                    <th style={thStyle}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Drip coffee", "240 mL (8 oz)", "80–200 mg", "Highly variable; light roasts often higher"],
                    ["Espresso", "30 mL (1 shot)", "60–75 mg", "Lower per volume; higher per oz than drip"],
                    ["Cold brew", "240 mL (8 oz)", "150–200 mg", "Long steep extracts more caffeine"],
                    ["Green tea", "240 mL (8 oz)", "25–45 mg", "Also contains L-theanine (modulates effects)"],
                    ["Black tea", "240 mL (8 oz)", "40–70 mg", "Varies by steep time and leaf grade"],
                    ["Matcha", "240 mL (8 oz)", "60–80 mg", "Whole leaf powder; suspended in water"],
                    ["Monster Energy", "473 mL (16 oz)", "160 mg", "Standard energy drink"],
                    ["Red Bull", "250 mL (8.4 oz)", "80 mg", "Moderate concentration"],
                    ["Celsius", "355 mL (12 oz)", "200 mg", "High-caffeine fitness drink"],
                    ["Coca-Cola", "355 mL (12 oz)", "34 mg", "Modest compared to coffee"],
                    ["Diet Coke", "355 mL (12 oz)", "46 mg", "Slightly more than regular Coke"],
                    ["Dark chocolate", "28 g (1 oz)", "12–60 mg", "Highly variable by cocoa content"],
                    ["Milk chocolate", "28 g (1 oz)", "3–10 mg", "Low caffeine, higher theobromine"],
                    ["Excedrin (2 tablets)", "2 tablets", "130 mg", "OTC analgesic; significant caffeine"],
                    ["NoDoz tablet", "1 tablet", "200 mg", "Pure caffeine supplement"],
                  ].map(([source, serving, caffeine, notes], i) => (
                    <tr key={i} style={i % 2 === 0 ? {} : { backgroundColor: "var(--cream)" }}>
                      <td style={tdStrong}>{source}</td>
                      <td style={tdStyle}>{serving}</td>
                      <td style={tdAccent}>{caffeine}</td>
                      <td style={{ ...tdStyle, fontSize: "0.8125rem", color: "var(--ink-faint)" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Section 6: Tolerance and Dependence ── */}
          <div>
            <h2 style={h2Style}>Tolerance, Dependence, and the Adenosine Reset</h2>
            <p style={{ margin: "0 0 1rem" }}>
              One of the most clinically interesting aspects of caffeine is the speed and
              predictability with which tolerance develops. Unlike many psychoactive drugs,
              the mechanism of caffeine tolerance is well-characterized and directly linked
              to its primary mechanism of action.
            </p>

            <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
              <h3 style={{ ...h3Style, marginBottom: "0.75rem" }}>How Tolerance Develops</h3>
              <p style={{ margin: "0 0 0.875rem" }}>
                When caffeine chronically occupies adenosine receptors, the brain responds by
                upregulating adenosine receptor density — creating more receptors to compensate
                for their persistent blockade. After 1–4 days of regular caffeine consumption,
                the brain&apos;s adenosine receptor population has increased sufficiently that the
                same caffeine dose blocks a smaller proportion of total receptors, producing a
                weaker effect.
              </p>
              <p style={{ margin: 0 }}>
                In fully tolerant individuals, caffeine may produce no perceived alerting effect
                at their usual dose — they need it simply to feel &ldquo;normal,&rdquo; because their
                baseline adenosine receptor density has been permanently elevated relative to
                non-users. This is the pharmacological substrate of physical dependence.
              </p>
            </div>

            <h3 style={{ ...h3Style, marginTop: "1rem" }}>Caffeine Withdrawal Syndrome</h3>
            <p style={{ margin: "0 0 0.875rem" }}>
              Caffeine withdrawal is recognized in DSM-5 as a clinically significant syndrome
              characterized by headache, fatigue, irritability, difficulty concentrating, and
              flu-like symptoms. The mechanism is straightforward: when caffeine is removed,
              the upregulated adenosine receptors are suddenly fully accessible to accumulated
              adenosine, causing a profound and rapid increase in perceived sleep pressure and
              vascular dilation (explaining the headache — caffeine normally causes cerebral
              vasoconstriction).
            </p>
            <p style={{ margin: "0 0 0.875rem" }}>
              Withdrawal symptoms typically begin 12–24 hours after the last caffeine dose,
              peak at 24–48 hours, and resolve over 3–9 days:
            </p>
            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Time Since Last Dose</th>
                    <th style={thStyle}>Typical Symptoms</th>
                    <th style={thStyle}>Underlying Mechanism</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["12–24 hours", "Headache onset, fatigue, irritability", "Adenosine floods upregulated receptors; cerebral vasodilation begins"],
                    ["24–48 hours", "Peak symptoms; possible nausea, difficulty concentrating", "Maximum adenosine receptor occupancy; maximal vasodilation"],
                    ["2–5 days", "Symptoms diminish", "Adenosine receptor density begins downregulating"],
                    ["7–9 days", "Symptoms resolve", "Receptor density approaches pre-caffeine baseline"],
                  ].map(([time, symptoms, mechanism], i) => (
                    <tr key={i} style={i % 2 === 0 ? {} : { backgroundColor: "var(--cream)" }}>
                      <td style={{ ...tdStyle, fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: "0.85rem" }}>{time}</td>
                      <td style={tdStyle}>{symptoms}</td>
                      <td style={{ ...tdStyle, fontSize: "0.8125rem", color: "var(--ink-faint)" }}>{mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ margin: "1rem 0 0" }}>
              An important distinction: caffeine produces{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>physical dependence</strong> (withdrawal
              on cessation) but not addiction in the clinical sense. Addiction involves compulsive
              use despite significant harm and loss of control. While caffeine users adjust their
              behavior to maintain caffeine intake, this rarely meets the threshold of addiction —
              most users can stop with mild, time-limited discomfort. The most effective
              &ldquo;tolerance reset&rdquo; is complete abstinence for at least 7–10 days, after which
              the original caffeine sensitivity is substantially restored.
            </p>
          </div>

          {/* ── Section 7: Clinical Interactions ── */}
          <div>
            <h2 style={h2Style}>Clinically Significant Drug Interactions</h2>
            <p style={{ margin: "0 0 1.5rem" }}>
              Because caffeine is metabolized almost exclusively by CYP1A2, any drug that inhibits
              or induces this enzyme has the potential to dramatically alter caffeine pharmacokinetics.
              These interactions are not merely theoretical — they have real clinical consequences.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <div style={calloutBox}>
                <h3 style={h3Style}>Fluvoxamine (Luvox) — Potent CYP1A2 Inhibitor</h3>
                <p style={{ margin: 0 }}>
                  Fluvoxamine, an SSRI used for OCD and anxiety disorders, is one of the most potent
                  CYP1A2 inhibitors in clinical use. Co-administration with caffeine can increase
                  caffeine plasma concentrations by up to <strong style={{ color: "var(--ink)", fontWeight: 600 }}>5-fold</strong> and
                  extend its half-life from ~5 hours to ~30+ hours. Patients starting fluvoxamine
                  who continue their normal caffeine intake frequently experience severe caffeine
                  toxicity — anxiety, palpitations, insomnia — at doses they had previously tolerated
                  without issue. This interaction should be discussed at every fluvoxamine initiation.
                </p>
              </div>

              <div style={calloutBox}>
                <h3 style={h3Style}>Oral Contraceptives — Moderate CYP1A2 Inhibition</h3>
                <p style={{ margin: 0 }}>
                  Combined oral contraceptives (estrogen + progestin) moderately inhibit CYP1A2,
                  extending caffeine half-life by approximately 1.5 to 2-fold. A woman who starts
                  oral contraceptives while maintaining the same coffee intake may notice she feels
                  more caffeinated or experiences more trouble sleeping — a direct pharmacokinetic
                  consequence. This effect is clinically relevant but rarely discussed during
                  contraceptive counseling.
                </p>
              </div>

              <div style={calloutBox}>
                <h3 style={h3Style}>Pregnancy — Progressive CYP1A2 Inhibition</h3>
                <p style={{ margin: 0 }}>
                  Caffeine clearance decreases progressively throughout pregnancy. In the first
                  trimester, half-life is slightly extended. By the third trimester, half-life
                  may reach 15 hours — three times the non-pregnant baseline. Critically, fetal
                  CYP1A2 is virtually absent throughout gestation. The fetus cannot metabolize
                  caffeine and depends entirely on maternal clearance. This prolonged fetal caffeine
                  exposure is the pharmacokinetic basis for current obstetric guidelines limiting
                  caffeine intake to &lt;200mg/day during pregnancy.
                </p>
              </div>

              <div style={calloutBox}>
                <h3 style={h3Style}>Ciprofloxacin and Certain Quinolone Antibiotics — CYP1A2 Inhibition</h3>
                <p style={{ margin: 0 }}>
                  Fluoroquinolone antibiotics, particularly ciprofloxacin and enoxacin, are significant
                  CYP1A2 inhibitors. A patient taking ciprofloxacin for a urinary tract infection who
                  also consumes their usual 3 cups of coffee per day may develop troubling caffeine
                  accumulation — insomnia, tachycardia, and anxiety — that appears to be an antibiotic
                  side effect but is actually a drug-caffeine interaction. Enoxacin is the most potent
                  inhibitor in this class, capable of increasing caffeine AUC by more than 4-fold.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 8: Optimal Use ── */}
          <div>
            <h2 style={h2Style}>The Evidence-Based Approach to Caffeine Consumption</h2>

            <div style={{ ...accentBox, marginBottom: "1.25rem" }}>
              <h3 style={{ ...h3Style, marginBottom: "0.75rem" }}>Safe Daily Intake</h3>
              <p style={{ margin: 0 }}>
                Health Canada, the European Food Safety Authority, and the FDA generally consider
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}> 200–400mg per day</strong> to be safe for
                healthy, non-pregnant adults. This corresponds to roughly 2–4 cups of standard drip
                coffee. Above 400mg/day, adverse effects (anxiety, insomnia, tachycardia) become
                increasingly common. The upper safe limit during pregnancy is 200mg/day; some
                conservative guidelines recommend &lt;100mg/day.
              </p>
            </div>

            <h3 style={{ ...h3Style, marginTop: "1rem" }}>Timing for Maximum Benefit</h3>
            <p style={{ margin: "0 0 1rem" }}>
              A frequently discussed strategy is delaying morning caffeine intake until 90–120 minutes
              after waking. The rationale: cortisol peaks sharply upon waking (the cortisol awakening
              response), and consuming caffeine during peak cortisol may blunt its effects and accelerate
              tolerance development. Waiting for cortisol to decline allows caffeine to act on a
              neurochemically receptive brain. The research here is less definitive than the popular
              framing suggests, but the general principle — avoiding caffeine when you&apos;re already
              physiologically maximally alert — has logical grounding.
            </p>

            <h3 style={{ ...h3Style, marginTop: "1rem" }}>The Afternoon Cutoff Problem</h3>
            <p style={{ margin: "0 0 1rem" }}>
              The most pharmacokinetically important piece of caffeine advice: understand your personal
              half-life when deciding when to stop. With a median half-life of 5 hours:
            </p>
            <ul style={{ margin: "0 0 1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>A 200mg dose consumed at 2 PM leaves ~100mg active at 7 PM</li>
              <li>At 10 PM (8 hours later, 1.6 half-lives), approximately 65mg remains — equivalent to nearly a full cup of tea</li>
              <li>At midnight, ~47mg may still be circulating in your system</li>
            </ul>
            <p style={{ margin: "0 0 1rem" }}>
              This is why many sleep researchers recommend a caffeine cutoff of{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>8–10 hours before bedtime</strong>{" "}
              for sensitive individuals. Even if you &ldquo;fall asleep fine,&rdquo; residual caffeine
              measurably reduces slow-wave sleep quality — the most physically restorative sleep stage —
              even at concentrations below those that delay sleep onset.
            </p>
            <p style={{ margin: 0 }}>
              For slow metabolizers (half-life ~7 hours), oral contraceptive users (~10 hours), or
              pregnant women (&gt;12 hours in third trimester), the cutoff should be correspondingly
              earlier. Pharmacokinetics, not willpower or perception of tiredness, should govern
              this decision.
            </p>
          </div>

          {/* ── Medical Disclaimer ── */}
          <div style={leftBorder}>
            <h2 style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--ink)",
              margin: "0 0 0.5rem",
            }}>
              Medical Disclaimer
            </h2>
            <p style={{
              margin: 0,
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "var(--ink-faint)",
            }}>
              This article is for educational purposes only. The pharmacokinetic parameters and
              drug interactions described are based on published clinical pharmacology literature
              and represent population-average data. Individual caffeine metabolism varies substantially
              based on genetics, medication use, age, and physiological state. The information provided
              here does not constitute medical advice. If you take prescription medications, are pregnant,
              or have a cardiovascular condition, consult your healthcare provider about appropriate
              caffeine intake before making changes to your consumption.
            </p>
          </div>

          {/* ── Continue Learning ── */}
          <div style={continueSection}>
            <p style={monoLabel}>CONTINUE LEARNING</p>
            <h2 style={h2Style}>Explore More</h2>
            <p style={{ margin: "0 0 1.75rem" }}>
              Curious how caffeine builds up in your system with daily consumption? The simulator
              lets you model exactly that — or explore the theory behind drug accumulation in the
              steady-state article.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.25rem",
                backgroundColor: "var(--cream)",
                borderRadius: "8px",
                border: "1px solid var(--rule)",
              }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>&#9652;</span>
                <div>
                  <Link href="/simulator" style={{ ...linkStyle, fontSize: "1rem" }}>
                    Try the Half-Life Simulator
                  </Link>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                    Model caffeine accumulation over a week of daily coffee consumption — and see when it finally clears your system.
                  </p>
                </div>
              </div>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.25rem",
                backgroundColor: "var(--cream)",
                borderRadius: "8px",
                border: "1px solid var(--rule)",
              }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>&#9632;</span>
                <div>
                  <Link href="/learn/steady-state" style={{ ...linkStyle, fontSize: "1rem" }}>
                    Understanding Steady State
                  </Link>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                    Why caffeine reaches a stable plateau after a few days of regular use — and why stopping causes such a sharp crash.
                  </p>
                </div>
              </div>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.25rem",
                backgroundColor: "var(--cream)",
                borderRadius: "8px",
                border: "1px solid var(--rule)",
              }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>&#9670;</span>
                <div>
                  <Link href="/learn" style={{ ...linkStyle, fontSize: "1rem" }}>
                    Back to Learn Hub
                  </Link>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                    Browse all pharmacokinetics articles — from drug half-life basics to clinical applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
