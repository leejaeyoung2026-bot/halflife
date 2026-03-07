import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Pharmacist's Guide to OTC Pain Relievers",
  description:
    "Compare acetaminophen, ibuprofen, aspirin, and naproxen — their half-lives, dosing, mechanisms, and when to choose each one.",
  openGraph: {
    title: "A Pharmacist's Guide to OTC Pain Relievers",
    description:
      "Compare acetaminophen, ibuprofen, aspirin, and naproxen — their half-lives, dosing, mechanisms, and when to choose each one.",
    url: "https://halflife.vibed-lab.com/learn/otc-pain-relievers",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Pharmacist's Guide to OTC Pain Relievers",
    description:
      "Compare acetaminophen, ibuprofen, aspirin, and naproxen — their half-lives, dosing, and when to choose each one.",
  },
};

const comparisonData = [
  {
    drug: "Acetaminophen",
    brand: "Tylenol",
    halfLife: "2–3 h",
    onset: "30–60 min",
    duration: "4–6 h",
    maxDose: "4,000 mg/day",
    warning: "Liver toxicity",
  },
  {
    drug: "Ibuprofen",
    brand: "Advil / Motrin",
    halfLife: "2 h",
    onset: "30–60 min",
    duration: "4–6 h",
    maxDose: "1,200 mg/day (OTC)",
    warning: "GI bleeding, renal",
  },
  {
    drug: "Aspirin",
    brand: "Bayer / Bufferin",
    halfLife: "15–20 min*",
    onset: "30–60 min",
    duration: "4–6 h",
    maxDose: "4,000 mg/day",
    warning: "GI bleed, Reye's syndrome",
  },
  {
    drug: "Naproxen",
    brand: "Aleve",
    halfLife: "12–17 h",
    onset: "60–90 min",
    duration: "8–12 h",
    maxDose: "660 mg/day (OTC)",
    warning: "GI bleeding, renal, CV",
  },
];

const useCases = [
  {
    condition: "Headache",
    firstChoice: "Acetaminophen or Ibuprofen",
    notes:
      "Both are effective. Acetaminophen is gentler on the stomach. Ibuprofen may work better for tension headaches with inflammation.",
  },
  {
    condition: "Muscle pain / soreness",
    firstChoice: "Ibuprofen or Naproxen",
    notes:
      "NSAIDs address the underlying inflammation causing the pain. Naproxen is preferred for sustained soreness over 24+ hours.",
  },
  {
    condition: "Arthritis / joint inflammation",
    firstChoice: "Naproxen",
    notes:
      "Long half-life provides sustained coverage with just two daily doses, minimizing peak-to-trough fluctuations.",
  },
  {
    condition: "Fever",
    firstChoice: "Acetaminophen or Ibuprofen",
    notes:
      "Both are effective antipyretics. Alternating them every 3 hours can provide more consistent fever control.",
  },
  {
    condition: "Menstrual cramps",
    firstChoice: "Ibuprofen",
    notes:
      "Ibuprofen inhibits prostaglandin synthesis, the key driver of dysmenorrhea. Start at the first sign of cramps.",
  },
  {
    condition: "Cardiovascular protection",
    firstChoice: "Low-dose Aspirin",
    notes:
      "Irreversible COX-1 inhibition reduces platelet aggregation. Consult your physician before starting a regimen.",
  },
];

export default function OtcPainRelieversPage() {
  return (
    <>
      <style>{`
        .article-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease;
        }
        .article-link:hover { border-bottom-color: var(--accent); }

        .continue-card {
          border: 1px solid var(--rule);
          border-radius: 10px;
          padding: 1.5rem;
          background-color: var(--cream);
          text-decoration: none;
          display: block;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .continue-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 12%, transparent);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
        }
        .comparison-table th {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          padding: 0.625rem 0.875rem;
          text-align: left;
          border-bottom: 1px solid var(--rule);
          background-color: var(--cream);
        }
        .comparison-table td {
          padding: 0.75rem 0.875rem;
          border-bottom: 1px solid var(--rule);
          color: var(--ink-soft);
          vertical-align: top;
        }
        .comparison-table tr:last-child td { border-bottom: none; }
        .comparison-table tr:hover td { background-color: color-mix(in srgb, var(--accent) 4%, transparent); }
        .comparison-table .drug-name {
          font-family: var(--font-serif), ui-serif, Georgia, serif;
          color: var(--ink);
          font-size: 0.9375rem;
        }
        .comparison-table .half-life-cell {
          font-family: var(--font-mono), ui-monospace, monospace;
          color: var(--accent);
          font-size: 0.8125rem;
        }
        .comparison-table .warning-cell {
          color: #B45309;
          font-size: 0.8125rem;
        }
      `}</style>

      <article style={{ padding: "10rem 2rem 6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Breadcrumb */}
          <p
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              margin: "0 0 1.5rem",
            }}
          >
            <Link href="/learn" className="article-link">Learn</Link>
            {" / "}OTC Pain Relievers
          </p>

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
            PHARMACIST&apos;S GUIDE — ARTICLE 5
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            A Pharmacist&apos;s Guide to Common OTC Pain Relievers
          </h1>

          {/* Lead */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              margin: "0 0 3rem",
            }}
          >
            Walk into any pharmacy and the pain relief aisle looks overwhelming. Tylenol, Advil, Aleve, Bayer — dozens of products, each claiming to be the best. But behind the marketing, only four active ingredients account for the vast majority of over-the-counter pain relief in the United States. Understanding how each one works — and how its half-life shapes your dosing schedule — transforms you from a confused consumer into an informed patient.
          </p>

          {/* Rule */}
          <div style={{ height: "1px", backgroundColor: "var(--rule)", marginBottom: "3rem" }} />

          {/* Prose sections */}
          <div
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-soft)",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >

            {/* Section 1 - Acetaminophen */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Acetaminophen (Tylenol) — The Gentle Giant
              </h2>

              <div
                style={{
                  display: "inline-flex",
                  gap: "1.5rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "8px",
                  padding: "0.875rem 1.25rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "HALF-LIFE", value: "2–3 hours" },
                  { label: "MAX OTC DOSE", value: "4,000 mg/day" },
                  { label: "DOSING", value: "Every 4–6 hours" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-faint)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.875rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ margin: "0 0 1rem" }}>
                Acetaminophen — sold globally as paracetamol — is the world&apos;s most widely used analgesic and antipyretic. Despite decades of use, its mechanism of action is not fully understood. Unlike the NSAIDs below, acetaminophen has minimal anti-inflammatory activity at standard doses. It is believed to work primarily in the central nervous system through inhibition of a COX variant (sometimes called COX-3) and modulation of the endocannabinoid system, which explains its effectiveness for pain without the peripheral GI side effects of NSAIDs.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                With a half-life of 2–3 hours, acetaminophen needs to be taken every 4–6 hours to maintain analgesic effect. After 5 half-lives (10–15 hours), it is effectively eliminated from the body. This is why a single evening dose won&apos;t carry you through to morning.
              </p>
              <p style={{ margin: 0 }}>
                The most important caveat: acetaminophen is metabolized in the liver, producing a small amount of a toxic intermediate called NAPQI. At normal doses, your liver detoxifies NAPQI rapidly using glutathione. But exceed 4,000 mg/day (or 2,000 mg/day if you drink alcohol regularly or have liver disease), and glutathione stores are depleted, leading to potentially fatal hepatotoxicity. Always check multi-symptom cold and flu products — many contain acetaminophen, making accidental overdose easier than you think.
              </p>
            </div>

            {/* Section 2 - Ibuprofen */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Ibuprofen (Advil / Motrin) — The Versatile NSAID
              </h2>

              <div
                style={{
                  display: "inline-flex",
                  gap: "1.5rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "8px",
                  padding: "0.875rem 1.25rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "HALF-LIFE", value: "2 hours" },
                  { label: "MAX OTC DOSE", value: "1,200 mg/day" },
                  { label: "DOSING", value: "Every 4–6 hours" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-faint)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.875rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ margin: "0 0 1rem" }}>
                Ibuprofen belongs to a class called NSAIDs — Non-Steroidal Anti-Inflammatory Drugs. Its mechanism is well-defined: it reversibly inhibits both COX-1 and COX-2 enzymes. COX enzymes are responsible for producing prostaglandins, the chemical messengers that drive inflammation, sensitize pain receptors, and raise body temperature. By blocking both isoforms, ibuprofen delivers analgesia, anti-inflammatory action, and antipyretic effects in a single molecule.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The COX-1 inhibition, while therapeutically useful, also explains ibuprofen&apos;s main side effects. COX-1 produces prostaglandins that protect the stomach lining and regulate renal blood flow. Inhibit COX-1 for extended periods, and you risk gastric irritation, ulcers, or impaired kidney function — particularly in elderly patients or those already taking medications like ACE inhibitors or diuretics.
              </p>
              <p style={{ margin: 0 }}>
                At the OTC maximum of 1,200 mg/day (400 mg three times daily), ibuprofen is safe for short-term use in healthy adults. The prescription maximum of 3,200 mg/day is for supervised use only. Always take ibuprofen with food or a full glass of water, and never take it on an empty stomach if you are prone to acid reflux.
              </p>
            </div>

            {/* Section 3 - Aspirin */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Aspirin — The Irreversible Inhibitor
              </h2>

              <div
                style={{
                  display: "inline-flex",
                  gap: "1.5rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "8px",
                  padding: "0.875rem 1.25rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "PLASMA t½", value: "15–20 min" },
                  { label: "PLATELET EFFECT", value: "7–10 days" },
                  { label: "DOSING (pain)", value: "Every 4–6 hours" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-faint)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.875rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ margin: "0 0 1rem" }}>
                Aspirin (acetylsalicylic acid) has one of the most fascinating half-life stories in pharmacology, because its plasma half-life and its clinical duration of action are completely different. Aspirin&apos;s half-life in the bloodstream is remarkably short — just 15 to 20 minutes. It is rapidly converted to salicylate, which has a half-life of 2–4 hours at standard analgesic doses. Yet aspirin taken once daily provides 24-hour cardiovascular protection. How?
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The answer is irreversible COX-1 inhibition. Unlike ibuprofen, which reversibly binds to COX enzymes (allowing them to recover when the drug washes out), aspirin permanently acetylates a serine residue deep within the COX-1 active site. Platelets — the tiny cell fragments responsible for blood clotting — cannot synthesize new COX enzymes because they have no nucleus. Once aspirin inactivates a platelet&apos;s COX-1, that platelet is inhibited for its entire lifespan of 7–10 days, regardless of how quickly aspirin leaves the plasma.
              </p>
              <p style={{ margin: 0 }}>
                This is why low-dose aspirin (81 mg/day) is so effective for antiplatelet therapy: you only need enough aspirin to inhibit every new platelet entering circulation. For pain relief, higher doses (325–650 mg every 4–6 hours) are needed. Aspirin should be avoided in children and teenagers with viral illnesses due to the risk of Reye&apos;s syndrome — a rare but life-threatening condition.
              </p>
            </div>

            {/* Section 4 - Naproxen */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Naproxen (Aleve) — The Long-Acting NSAID
              </h2>

              <div
                style={{
                  display: "inline-flex",
                  gap: "1.5rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "8px",
                  padding: "0.875rem 1.25rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "HALF-LIFE", value: "12–17 hours" },
                  { label: "MAX OTC DOSE", value: "660 mg/day" },
                  { label: "DOSING", value: "Every 8–12 hours" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-faint)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.875rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ margin: "0 0 1rem" }}>
                Naproxen shares ibuprofen&apos;s mechanism — reversible COX-1/COX-2 inhibition — but its dramatically longer half-life of 12–17 hours makes it a fundamentally different clinical tool. Where ibuprofen needs to be taken every 4–6 hours to maintain therapeutic levels, naproxen needs only twice-daily dosing. This is a direct pharmacokinetic consequence: with a 12-hour half-life, plasma concentrations drop by roughly half every 12 hours, so dosing twice a day keeps levels within the therapeutic window continuously.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                This makes naproxen particularly well-suited for conditions requiring sustained anti-inflammatory coverage: arthritis flares, tendinitis, bursitis, dental procedures, and post-surgical pain. The longer dosing interval also improves adherence — patients are less likely to miss doses when they only have to remember twice daily rather than every 4–6 hours.
              </p>
              <p style={{ margin: 0 }}>
                The downside of a long half-life: naproxen accumulates more with repeated dosing, and its side effect burden — particularly GI and cardiovascular risk — is extended proportionally. The OTC dose cap of 660 mg/day (two 220 mg tablets) is deliberately conservative; prescription naproxen can reach 1,500 mg/day under physician supervision. Naproxen is not recommended for prolonged use in patients with kidney disease, heart failure, or a history of peptic ulcer disease.
              </p>
            </div>

            {/* Comparison Table */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1.25rem",
                }}
              >
                Side-by-Side Comparison
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                The following table summarizes the key pharmacokinetic and clinical parameters for all four OTC analgesics. The asterisk on aspirin&apos;s half-life reflects its unusual pharmacology: the plasma half-life is very short, but the clinical effect on platelets lasts for the platelet lifespan.
              </p>
              <div style={{ overflowX: "auto", borderRadius: "10px", border: "1px solid var(--rule)" }}>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Drug</th>
                      <th>Brand</th>
                      <th>Half-Life</th>
                      <th>Onset</th>
                      <th>Duration</th>
                      <th>Max OTC Dose</th>
                      <th>Key Warning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.drug}>
                        <td className="drug-name">{row.drug}</td>
                        <td style={{ color: "var(--ink-faint)", fontSize: "0.8125rem" }}>{row.brand}</td>
                        <td className="half-life-cell">{row.halfLife}</td>
                        <td>{row.onset}</td>
                        <td>{row.duration}</td>
                        <td style={{ fontWeight: 500, color: "var(--ink)" }}>{row.maxDose}</td>
                        <td className="warning-cell">{row.warning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  margin: "0.75rem 0 0",
                  fontSize: "0.8125rem",
                  color: "var(--ink-faint)",
                  fontStyle: "italic",
                }}
              >
                * Aspirin&apos;s plasma half-life is 15–20 min, but its COX-1 inhibition on platelets is irreversible and lasts 7–10 days.
              </p>
            </div>

            {/* When to Choose Which */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1.25rem",
                }}
              >
                When to Choose Which
              </h2>
              <p style={{ margin: "0 0 1.5rem" }}>
                The choice between these four agents is not just about efficacy — it&apos;s about matching the drug&apos;s pharmacokinetic profile and mechanism to your specific clinical situation. Here is how pharmacists think about it:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {useCases.map((item) => (
                  <div
                    key={item.condition}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        marginBottom: "0.375rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                          fontSize: "1rem",
                          color: "var(--ink)",
                          fontWeight: 400,
                          minWidth: "180px",
                        }}
                      >
                        {item.condition}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: "0.75rem",
                          color: "var(--accent)",
                          fontWeight: 500,
                        }}
                      >
                        {item.firstChoice}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: "var(--ink-soft)",
                      }}
                    >
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drug Interactions */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Important Drug Interactions
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                All four OTC analgesics interact with other medications in clinically significant ways. Knowing these interactions can prevent serious harm:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    heading: "Acetaminophen + Alcohol or hepatotoxic drugs",
                    body: "Chronic alcohol use dramatically depletes glutathione, making even therapeutic doses of acetaminophen potentially dangerous. Warfarin users should also use acetaminophen cautiously — doses above 2 g/day can unexpectedly potentiate anticoagulation.",
                  },
                  {
                    heading: "NSAIDs (ibuprofen, aspirin, naproxen) + Warfarin",
                    body: "All NSAIDs inhibit platelet aggregation and can irritate the GI tract. Combined with warfarin anticoagulation, this creates a dramatically elevated risk of serious bleeding events, including gastrointestinal hemorrhage.",
                  },
                  {
                    heading: "NSAIDs + ACE inhibitors or ARBs",
                    body: "NSAIDs reduce renal prostaglandin production, counteracting the blood-pressure lowering effect of ACE inhibitors and ARBs. In patients with chronic kidney disease, concurrent use can precipitate acute kidney injury.",
                  },
                  {
                    heading: "Aspirin + Other NSAIDs",
                    body: "Ibuprofen taken before low-dose aspirin can block aspirin&apos;s access to the COX-1 active site, preventing its antiplatelet effect. If you take daily low-dose aspirin for cardiovascular protection, take it at least 30 minutes before ibuprofen.",
                  },
                  {
                    heading: "NSAIDs + Lithium or Methotrexate",
                    body: "NSAIDs reduce renal clearance of both lithium and methotrexate, causing these drugs to accumulate to toxic levels. This combination should only occur under close physician supervision.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    style={{
                      borderLeft: "3px solid var(--rule)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 0.375rem",
                        fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                        fontWeight: 600,
                        color: "var(--ink)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      {item.heading}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                padding: "1.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                Key Takeaways
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  fontSize: "0.9375rem",
                }}
              >
                <li>Half-life determines dosing frequency: 2-hour drugs need every-4-to-6-hour dosing; 12-hour drugs need twice-daily dosing.</li>
                <li>Acetaminophen has no anti-inflammatory action but is the safest for GI-sensitive patients and those on anticoagulants (at normal doses).</li>
                <li>NSAIDs (ibuprofen, aspirin, naproxen) address inflammation directly but carry GI and renal risks with prolonged use.</li>
                <li>Aspirin&apos;s irreversible platelet inhibition makes it uniquely suited for cardiovascular protection at low doses.</li>
                <li>Naproxen&apos;s long half-life provides sustained coverage but also extends side effect exposure — less is more for short courses.</li>
                <li>Always check for hidden acetaminophen in combination cold/flu products to avoid accidental overdose.</li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div
              style={{
                borderLeft: "3px solid var(--rule)",
                paddingLeft: "1.25rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                Medical Disclaimer
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  color: "var(--ink-faint)",
                  lineHeight: 1.65,
                }}
              >
                This article is for educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Dosing information reflects standard adult guidelines and may not apply to individuals with kidney disease, liver disease, pregnancy, or other medical conditions. Always consult a licensed pharmacist or physician before starting, stopping, or changing any medication, including over-the-counter products.
              </p>
            </div>

            {/* Continue Learning */}
            <div>
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
                CONTINUE LEARNING
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                <Link href="/learn" className="continue-card">
                  <p
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    ALL ARTICLES
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Back to Learn
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Explore all pharmacokinetics articles
                  </p>
                </Link>
                <Link href="/learn/drug-interactions" className="continue-card">
                  <p
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    NEXT ARTICLE
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Drug Interactions
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    When medications collide — CYP enzymes and beyond
                  </p>
                </Link>
                <Link href="/simulator" className="continue-card">
                  <p
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    INTERACTIVE TOOL
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    Try the Simulator
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Visualize acetaminophen and ibuprofen half-life curves
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
