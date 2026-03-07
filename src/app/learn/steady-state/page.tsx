import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Understanding Steady State in Pharmacokinetics",
  description:
    "Learn what steady state means, why it takes 4-5 half-lives to reach, and why your doctor tells you to wait before judging a new medication.",
  openGraph: {
    title: "Understanding Steady State in Pharmacokinetics | HalfLife by Vibed Lab",
    description:
      "Learn what steady state means, why it takes 4-5 half-lives to reach, and why your doctor tells you to wait before judging a new medication.",
    url: "https://halflife.vibed-lab.com/learn/steady-state",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Steady State in Pharmacokinetics",
    description:
      "Why does your doctor say 'give it 4-6 weeks'? The mathematics of drug accumulation, explained.",
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

const inlineCode: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: "0.875em",
  backgroundColor: "var(--cream)",
  border: "1px solid var(--rule)",
  borderRadius: "4px",
  padding: "0.1em 0.35em",
  color: "var(--ink)",
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

export default function SteadyStatePage() {
  return (
    <section style={{ padding: "10rem 2rem 6rem" }}>
      <ArticleJsonLd
        title="Understanding Steady State in Pharmacokinetics"
        description="Learn what steady state means, why it takes 4-5 half-lives to reach, and why your doctor tells you to wait."
        url="https://halflife.vibed-lab.com/learn/steady-state"
        datePublished="2026-03-08"
      />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Mono label */}
        <p style={monoLabel}>LEARN / PHARMACOKINETICS</p>

        {/* Title */}
        <h1 style={h1Style}>
          Understanding Steady State — Why Your Doctor Says &ldquo;Give It Time&rdquo;
        </h1>

        {/* Lead paragraph */}
        <p style={leadStyle}>
          Your doctor prescribes a new antidepressant. &ldquo;Give it 4 to 6 weeks to work,&rdquo; they say.
          But why? The drug is in your body within hours of the first dose. You can measure it in your
          blood the same afternoon. So why do you have to wait a month to know if it&apos;s helping?
          The answer lies in one of the most important — and most misunderstood — concepts in
          pharmacokinetics: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>steady state</strong>.
        </p>

        {/* Rule */}
        <div style={ruleStyle} />

        <AuthorByline />

        {/* Prose content */}
        <div style={proseWrap}>

          {/* ── Section 1: What is Steady State ── */}
          <div>
            <h2 style={h2Style}>What Is Steady State?</h2>
            <p style={{ margin: "0 0 1rem" }}>
              Steady state is the condition in which the amount of drug being administered equals
              the amount being eliminated over the same time period. More precisely: the{" "}
              <em>rate of drug input</em> equals the <em>rate of drug elimination</em>. When this
              balance is achieved, the average drug concentration in your blood no longer rises
              with each new dose — it fluctuates within a stable range, cycling between a predictable
              peak and trough with every dosing interval.
            </p>
            <p style={{ margin: "0 0 1rem" }}>
              Before steady state is reached, your body hasn&apos;t yet established this equilibrium.
              Each dose adds drug on top of what&apos;s already remaining from the last dose.
              Concentrations climb higher and higher with successive doses until the elimination
              rate finally catches up to match the input rate.
            </p>

            {/* Bathtub analogy */}
            <div style={{ ...accentBox, marginTop: "1.5rem" }}>
              <h3 style={{ ...h3Style, marginBottom: "0.75rem" }}>The Bathtub Analogy</h3>
              <p style={{ margin: "0 0 0.875rem" }}>
                Imagine a bathtub with the drain open. You turn on the tap. At first, water enters
                faster than it drains — the water level rises. But as the level rises, pressure on
                the drain increases and water flows out faster. Eventually the inflow and outflow
                rates become equal: the water level stabilizes. That stable level is your
                &ldquo;steady state.&rdquo;
              </p>
              <p style={{ margin: 0 }}>
                Drug dosing works the same way. Each dose is like a burst from the tap. Between
                doses, the drain continues running. After enough doses, the amount added per dose
                equals the amount eliminated per dosing interval, and the drug concentration
                stabilizes around a consistent average. Stop dosing, and the drug level falls just
                as water drains when you turn off the tap.
              </p>
            </div>
          </div>

          {/* ── Section 2: Mathematics of Accumulation ── */}
          <div>
            <h2 style={h2Style}>The Mathematics of Accumulation</h2>
            <p style={{ margin: "0 0 1rem" }}>
              To understand why accumulation happens, start with a single dose. After one dose,
              the drug concentration peaks — then declines exponentially as elimination proceeds.
              If you take a second dose before the first is fully eliminated, you&apos;re adding to
              a non-zero starting concentration. The second dose peaks higher than the first.
              The third dose starts from an even higher baseline. This pattern continues,
              dose by dose, until the rate of elimination matches the rate of input.
            </p>
            <p style={{ margin: "0 0 1.5rem" }}>
              The mathematics is elegantly governed by the concept of half-life (<code style={inlineCode}>t½</code>).
              For any drug taken at regular intervals, the{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>fraction of steady state reached</strong>{" "}
              after <em>n</em> half-lives is:
            </p>

            {/* Equation display */}
            <div
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--rule)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "1rem",
                color: "var(--ink)",
                textAlign: "center",
                letterSpacing: "0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Fraction of SS = 1 − (0.5)^n
            </div>

            <p style={{ margin: "0 0 1rem" }}>
              Where <em>n</em> is the number of half-lives elapsed since dosing began.
              This simple equation generates the 4-5 half-life rule that governs clinical
              pharmacology across every drug class.
            </p>

            {/* Accumulation table */}
            <h3 style={{ ...h3Style, margin: "1.5rem 0 0.75rem" }}>
              Drug Accumulation Over Successive Doses (simplified, regular dosing at t½ intervals)
            </h3>
            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Dose Number</th>
                    <th style={thStyle}>Half-Lives Elapsed</th>
                    <th style={thStyle}>% of Steady State Reached</th>
                    <th style={thStyle}>Trough Level (relative)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1st dose", "1", "50%", "0.50"],
                    ["2nd dose", "2", "75%", "0.75"],
                    ["3rd dose", "3", "87.5%", "0.875"],
                    ["4th dose", "4", "93.75%", "0.938"],
                    ["5th dose", "5", "96.875%", "0.969"],
                    ["6th dose", "6", "98.4%", "0.984"],
                    ["7th dose", "7", "99.2%", "0.992"],
                  ].map(([dose, hl, pct, trough], i) => (
                    <tr key={i} style={i % 2 === 0 ? {} : { backgroundColor: "var(--cream)" }}>
                      <td style={{ ...tdStyle, color: "var(--ink)", fontWeight: 500 }}>{dose}</td>
                      <td style={tdStyle}>{hl}</td>
                      <td style={tdAccent}>{pct}</td>
                      <td style={tdStyle}>{trough}× max</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ margin: "0.875rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
              Note: This assumes dosing exactly at each half-life interval with 100% relative bioavailability.
              Clinical scenarios vary based on actual dosing intervals, but the underlying accumulation
              mathematics is identical.
            </p>
          </div>

          {/* ── Section 3: The 4-5 Half-Life Rule ── */}
          <div>
            <h2 style={h2Style}>The 4–5 Half-Life Rule: Why This Number?</h2>
            <p style={{ margin: "0 0 1rem" }}>
              Pharmacologists and clinicians universally use the 4–5 half-life rule as the practical
              definition of steady state. Here&apos;s why: after 4 half-lives, you&apos;ve reached 93.75%
              of the theoretical maximum steady-state concentration. After 5 half-lives, you&apos;re at
              96.875%. For clinical purposes — where biological variability, analytical measurement error,
              and patient-specific factors already introduce uncertainty — achieving &gt;94% of steady state
              is functionally indistinguishable from true equilibrium.
            </p>
            <p style={{ margin: "0 0 1.5rem" }}>
              Going further yields diminishing returns: the 6th half-life adds only 1.6% more; the
              7th adds less than 1%. The 4–5 half-life rule isn&apos;t a rough approximation — it&apos;s a
              precise, mathematically sound threshold chosen because the remaining deviation from true
              steady state is clinically negligible.
            </p>

            {/* Progress bars visualization */}
            <div style={{ ...calloutBox, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <p style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                margin: "0 0 0.5rem",
              }}>
                ACCUMULATION TO STEADY STATE
              </p>
              {[
                { n: 1, pct: 50 },
                { n: 2, pct: 75 },
                { n: 3, pct: 87.5 },
                { n: 4, pct: 93.75 },
                { n: 5, pct: 96.875 },
              ].map(({ n, pct }) => (
                <div key={n}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <span style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.8rem",
                      color: "var(--ink-soft)",
                    }}>
                      After {n} t½
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}>
                      {pct}%
                    </span>
                  </div>
                  <div style={{
                    height: "8px",
                    backgroundColor: "var(--rule)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      height: "100%",
                      width: `${pct}%`,
                      backgroundColor: "var(--accent)",
                      borderRadius: "4px",
                      transition: "width 0.3s ease",
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 4: Clinical Examples ── */}
          <div>
            <h2 style={h2Style}>Clinical Examples: When Half-Life Matters Most</h2>
            <p style={{ margin: "0 0 1.5rem" }}>
              The practical implications of the 4–5 half-life rule become vivid when you apply
              it to real medications. The variation between drugs is extraordinary — spanning from
              hours to weeks — and has profound consequences for how they&apos;re prescribed and monitored.
            </p>

            {/* Fluoxetine */}
            <div style={{ ...calloutBox, marginBottom: "1rem" }}>
              <h3 style={h3Style}>Fluoxetine (Prozac) — t½: 1–6 days (active metabolite: up to 16 days)</h3>
              <p style={{ margin: "0 0 0.75rem" }}>
                Fluoxetine is the textbook case for why antidepressants require patience. Its half-life
                varies substantially between individuals (1 to 6 days), but its active metabolite —
                norfluoxetine — has a half-life of 4 to 16 days. Using a conservative estimate of
                4 days for fluoxetine itself:
              </p>
              <ul style={{ margin: "0", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li>5 × 4 days = <strong style={{ color: "var(--ink)" }}>20 days minimum</strong> to reach steady state for the parent drug</li>
                <li>5 × 16 days = <strong style={{ color: "var(--ink)" }}>80 days</strong> to reach steady state for the active metabolite</li>
                <li>This is why the 4–6 week trial period isn&apos;t conservative — it&apos;s pharmacologically mandatory</li>
              </ul>
              <p style={{ margin: "0.75rem 0 0", fontSize: "0.9rem", color: "var(--ink-faint)" }}>
                The long half-life also explains why fluoxetine has a gentler discontinuation syndrome
                than shorter-acting SSRIs — the slow elimination provides a natural taper.
              </p>
            </div>

            {/* Caffeine */}
            <div style={{ ...calloutBox, marginBottom: "1rem" }}>
              <h3 style={h3Style}>Caffeine — t½: ~5 hours</h3>
              <p style={{ margin: "0 0 0.75rem" }}>
                With a half-life of approximately 5 hours, caffeine reaches steady state quickly for
                regular daily users:
              </p>
              <ul style={{ margin: "0", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li>5 × 5 hours = <strong style={{ color: "var(--ink)" }}>~25 hours</strong> to approach steady state</li>
                <li>Regular coffee drinkers who consume caffeine at the same times each day reach
                a stable plateau within 1–2 days</li>
                <li>This rapid steady state is why tolerance develops quickly in regular users</li>
              </ul>
            </div>

            {/* Warfarin */}
            <div style={{ ...calloutBox, marginBottom: "1rem" }}>
              <h3 style={h3Style}>Warfarin — t½: ~40 hours (but pharmacodynamically complex)</h3>
              <p style={{ margin: "0 0 0.75rem" }}>
                Warfarin illustrates why pharmacokinetic steady state isn&apos;t the whole story.
                The drug itself reaches steady-state concentration in about 5–8 days (5 × 40h = 200h),
                but its anticoagulant <em>effect</em> depends on depletion of vitamin K-dependent
                clotting factors — a separate process with its own kinetics (factor half-lives range
                from 6 to 60 hours).
              </p>
              <p style={{ margin: 0 }}>
                This is why warfarin therapy begins with close monitoring: the first few doses may
                not reflect the eventual anticoagulant response. Monitoring INR (International
                Normalized Ratio) daily or every few days in initiation is not excessive caution —
                it reflects the complex interplay between drug accumulation and pharmacodynamic
                response.
              </p>
            </div>

            {/* Metformin */}
            <div style={calloutBox}>
              <h3 style={h3Style}>Metformin — t½: ~5 hours</h3>
              <p style={{ margin: 0 }}>
                Metformin, the first-line drug for type 2 diabetes, reaches steady state within
                24–48 hours of initiating therapy — but it&apos;s usually started at a low dose and
                titrated upward over weeks. Why? Not because of pharmacokinetics, but to allow
                GI tolerance to develop. This is an important distinction: sometimes the
                &ldquo;wait before judging&rdquo; instruction is about tolerability and dose titration,
                not about reaching steady state. Understanding which reason applies to your medication
                requires knowing its half-life.
              </p>
            </div>
          </div>

          {/* AdSense — mid-article */}
          <div className="ad-container" style={{ margin: "2rem 0" }}>
            <AdUnit slot="2345678901" format="auto" />
          </div>

          {/* ── Section 5: Loading Doses ── */}
          <div>
            <h2 style={h2Style}>Loading Doses: Bypassing the Accumulation Phase</h2>
            <p style={{ margin: "0 0 1rem" }}>
              Sometimes waiting 4–5 half-lives is clinically unacceptable. A patient with a serious
              infection cannot wait days for an antibiotic to reach therapeutic concentrations.
              A patient with an acute arrhythmia needs therapeutic amiodarone levels now, not in
              three months. This is where the <strong style={{ color: "var(--ink)", fontWeight: 600 }}>loading dose</strong> strategy
              comes in.
            </p>
            <p style={{ margin: "0 0 1rem" }}>
              A loading dose is a single large initial dose — or a series of doses given rapidly —
              designed to immediately achieve the target steady-state concentration. The mathematics
              are straightforward:
            </p>

            <div style={{
              backgroundColor: "var(--cream)",
              border: "1px solid var(--rule)",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1rem",
            }}>
              <p style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.875rem",
                color: "var(--ink)",
                margin: "0 0 0.5rem",
              }}>
                Loading Dose = Vd × Target Concentration
              </p>
              <p style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.875rem",
                color: "var(--ink)",
                margin: 0,
              }}>
                Maintenance Dose = CL × Target Concentration × Dosing Interval
              </p>
              <p style={{ margin: "0.75rem 0 0", fontSize: "0.8125rem", color: "var(--ink-faint)" }}>
                Where Vd = volume of distribution and CL = clearance
              </p>
            </div>

            <p style={{ margin: "0 0 1rem" }}>
              Classic examples of drugs given with loading doses include:
            </p>
            <ul style={{ margin: "0 0 1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <strong style={{ color: "var(--ink)" }}>Amiodarone</strong> — Half-life of 40–55 days.
                Without a loading dose, therapeutic concentrations would take months to accumulate.
                IV loading doses of up to 1000mg are given over 24 hours in acute settings.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Digoxin</strong> — Half-life of 36–48 hours.
                Loading (digitalizing) doses are used in heart failure and atrial fibrillation to
                rapidly achieve therapeutic plasma levels.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Certain antibiotics</strong> — Loading doses
                are used for drugs like vancomycin and some macrolides to rapidly achieve bactericidal
                concentrations at the site of infection.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Phenytoin</strong> — Used in status epilepticus,
                where a loading dose quickly achieves therapeutic anticonvulsant levels.
              </li>
            </ul>
            <p style={{ margin: 0 }}>
              The trade-off is predictable: higher doses carry higher risks. Loading doses must be
              calibrated carefully against toxicity thresholds, especially for drugs with narrow
              therapeutic indices like digoxin and phenytoin.
            </p>
          </div>

          {/* ── Section 6: What Happens When You Stop ── */}
          <div>
            <h2 style={h2Style}>What Happens When You Stop: The Washout Period</h2>
            <p style={{ margin: "0 0 1rem" }}>
              The same mathematics that governs accumulation also governs elimination. Once you stop
              taking a drug that had reached steady state, the concentration declines by 50% with
              each successive half-life:
            </p>

            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Time After Last Dose</th>
                    <th style={thStyle}>Drug Remaining</th>
                    <th style={thStyle}>Drug Eliminated</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1 t½", "50%", "50%"],
                    ["2 t½", "25%", "75%"],
                    ["3 t½", "12.5%", "87.5%"],
                    ["4 t½", "6.25%", "93.75%"],
                    ["5 t½", "3.125%", "96.875%"],
                    ["7 t½", "0.78%", "99.2%"],
                  ].map(([time, remaining, eliminated], i) => (
                    <tr key={i} style={i % 2 === 0 ? {} : { backgroundColor: "var(--cream)" }}>
                      <td style={{ ...tdStyle, fontFamily: "var(--font-mono), ui-monospace, monospace" }}>{time}</td>
                      <td style={tdAccent}>{remaining}</td>
                      <td style={tdStyle}>{eliminated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ margin: "1rem 0 1rem" }}>
              The clinical implications of washout kinetics are substantial and often misunderstood:
            </p>
            <ul style={{ margin: "0", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <strong style={{ color: "var(--ink)" }}>Why SSRI discontinuation symptoms persist:</strong>{" "}
                Abruptly stopping a short-acting SSRI like paroxetine (t½ ~21h) means plasma levels
                drop by 75% within 42 hours — a rapid withdrawal that triggers the well-known
                discontinuation syndrome. Longer-acting agents like fluoxetine taper themselves naturally.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Drug interaction timing:</strong>{" "}
                Some drug interactions persist after stopping one agent because of residual drug in
                the body. MAO inhibitor interactions can persist for 2 weeks after stopping the MAOI
                due to enzyme turnover, not drug washout.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Pre-surgery medication management:</strong>{" "}
                Surgeons and anesthesiologists calculate washout periods to ensure certain medications
                are at safe levels before procedures. The guidance to stop warfarin 5 days before
                surgery is derived directly from its ~40-hour half-life (5 × 40h ≈ 200h = ~8 days,
                adjusted for the practical target of INR normalization).
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Drug testing windows:</strong>{" "}
                Forensic and workplace drug testing windows are calculated from pharmacokinetic
                washout data, adjusted for metabolite persistence.
              </li>
            </ul>
          </div>

          {/* ── Section 7: Practical Takeaways ── */}
          <div>
            <h2 style={h2Style}>Practical Takeaways for Patients and Clinicians</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              <div style={accentBorder}>
                <h3 style={h3Style}>Don&apos;t judge a new medication too early</h3>
                <p style={{ margin: 0 }}>
                  For any medication with a half-life longer than 12 hours, you should not expect
                  full therapeutic effect until at least 4–5 half-lives have elapsed. Evaluating
                  an antidepressant at week 1 tells you almost nothing about its eventual efficacy —
                  you&apos;re seeing a fraction of the steady-state exposure. The corollary is equally
                  important: side effects that appear early may diminish as your body adapts during
                  the accumulation phase.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Missed doses matter more for short-acting drugs</h3>
                <p style={{ margin: 0 }}>
                  Missing one dose of fluoxetine (t½ ~4 days) is unlikely to meaningfully affect
                  your steady-state concentration — the half-life is so long that one missed dose
                  causes only a minimal dip. Missing one dose of paroxetine (t½ ~21h) or
                  levothyroxine (t½ ~7 days) has a proportionally larger but still manageable impact.
                  Missing one dose of a short-acting drug like immediate-release venlafaxine (t½ ~5h),
                  however, can cause symptomatic withdrawal within hours. The pharmacokinetics directly
                  determine the clinical consequences of adherence lapses.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Consistent timing maintains stable concentrations</h3>
                <p style={{ margin: 0 }}>
                  For drugs with narrow therapeutic indices — where the difference between an
                  ineffective and toxic dose is small — consistent timing is critical. Irregular
                  dosing creates wider fluctuations between peak and trough. For most drugs with
                  longer half-lives, the practical impact of timing variability is small, but for
                  immunosuppressants like tacrolimus or anticoagulants, even small concentration
                  swings can have serious clinical consequences.
                </p>
              </div>

              <div style={accentBorder}>
                <h3 style={h3Style}>Understanding half-life helps you ask better questions</h3>
                <p style={{ margin: 0 }}>
                  When a prescriber recommends a new medication, asking &ldquo;What is the half-life,
                  and when should I expect to feel the full effect?&rdquo; is one of the most useful
                  questions you can ask. The answer tells you how long to wait before evaluating
                  efficacy, what to expect if you miss a dose, and how quickly the drug will clear
                  if you need to stop.
                </p>
              </div>
            </div>
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
              This article is for educational purposes only. The pharmacokinetic concepts and clinical
              examples described here are based on population-average data from peer-reviewed literature.
              Individual drug behavior varies based on genetics, age, organ function, co-medications,
              and numerous other factors. Nothing in this article constitutes medical advice. Always
              consult your pharmacist or physician regarding your specific medications, dosing schedule,
              and any concerns about drug efficacy or side effects.
            </p>
          </div>

            {/* References */}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "2rem", marginTop: "1rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif), ui-serif, Georgia, serif", fontSize: "1.125rem", fontWeight: 400, color: "var(--ink)", margin: "0 0 0.875rem" }}>
                References &amp; Further Reading
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-sans), ui-sans-serif, sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--ink-soft)" }}>
                <li>Brunton LL, Knollmann BC, eds. <em>Goodman &amp; Gilman&apos;s The Pharmacological Basis of Therapeutics</em>. 14th ed. McGraw-Hill; 2023.</li>
                <li>Winter ME. <em>Basic Clinical Pharmacokinetics</em>. 5th ed. Lippincott Williams &amp; Wilkins; 2010.</li>
                <li>Holford NHG. Pharmacokinetics &amp; pharmacodynamics: rational dosing &amp; the time course of drug action. In: Katzung BG, ed. <em>Basic &amp; Clinical Pharmacology</em>. 14th ed. 2018.</li>
                <li>Tozer TN, Rowland M. <em>Introduction to Pharmacokinetics and Pharmacodynamics</em>. Lippincott Williams &amp; Wilkins; 2006.</li>
              </ol>
            </div>
          {/* ── Continue Learning ── */}
          <div style={continueSection}>
            <p style={monoLabel}>CONTINUE LEARNING</p>
            <h2 style={h2Style}>Explore More</h2>
            <p style={{ margin: "0 0 1.75rem" }}>
              Now that you understand steady state, see it in action with the interactive simulator
              — or deepen your knowledge with more pharmacokinetics fundamentals.
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
                    Visualize steady-state accumulation for fluoxetine, caffeine, warfarin, and 30+ other drugs interactively.
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
                  <Link href="/learn" style={{ ...linkStyle, fontSize: "1rem" }}>
                    Back to Learn Hub
                  </Link>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                    Browse all pharmacokinetics articles — from drug half-life basics to clinical applications.
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
                  <Link href="/learn/caffeine-science" style={{ ...linkStyle, fontSize: "1rem" }}>
                    The Science Behind Caffeine
                  </Link>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--ink-faint)" }}>
                    See steady-state principles in the context of the world&apos;s most popular drug — complete with genetic variation and tolerance.
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
