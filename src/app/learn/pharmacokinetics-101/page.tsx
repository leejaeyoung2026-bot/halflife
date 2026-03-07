import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Pharmacokinetics 101: How Drugs Work in Your Body",
  description:
    "A beginner-friendly guide to ADME — absorption, distribution, metabolism, and elimination. Understand how your body processes medications.",
  openGraph: {
    title: "Pharmacokinetics 101: How Drugs Work in Your Body",
    description:
      "A beginner-friendly guide to ADME — absorption, distribution, metabolism, and elimination. Understand how your body processes medications.",
    url: "https://halflife.vibed-lab.com/learn/pharmacokinetics-101",
    siteName: "HalfLife by Vibed Lab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacokinetics 101: How Drugs Work in Your Body",
    description:
      "A beginner-friendly guide to ADME — absorption, distribution, metabolism, and elimination.",
  },
};

export default function Pharmacokinetics101Page() {
  return (
    <>
      <style>{`
        .learn-nav-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding-bottom: 1px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .learn-nav-link:hover {
          color: var(--accent-hover);
          border-bottom-color: var(--accent-hover);
        }
        .learn-back-link {
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--ink-faint);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.15s ease;
        }
        .learn-back-link:hover {
          color: var(--ink-soft);
        }
      `}</style>

      <section style={{ padding: "8rem 2rem 6rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Back breadcrumb */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link href="/" className="learn-back-link">
              ← Back to HalfLife
            </Link>
          </div>

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
            LEARN — PHARMACOKINETICS BASICS
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--ink)",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Pharmacokinetics 101: How Drugs Work in Your Body
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              margin: "0 0 2.5rem",
            }}
          >
            A pharmacist-written introduction to ADME — the four-stage journey every
            drug takes through your body, from the moment you swallow a tablet to the
            moment the last molecule exits in your urine.
          </p>

          {/* Rule */}
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--rule)",
              marginBottom: "3rem",
            }}
          />

          {/* Article body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.75rem",
              fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--ink-soft)",
            }}
          >

            {/* Section 1: Hook */}
            <div>
              <p style={{ margin: 0 }}>
                You swallow a pill. Then what?
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                For most people, the pill disappears into a black box. You take it,
                something happens, and eventually it wears off. But there is an
                extraordinarily precise biological process unfolding behind the scenes —
                one that determines when the drug starts working, how strong the effect
                is, how long it lasts, and why two people taking the same dose of the
                same drug can have completely different experiences.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                That process is <strong style={{ color: "var(--ink)", fontWeight: 600 }}>pharmacokinetics</strong> —
                the study of what the body does to a drug. It is usefully contrasted
                with pharmacodynamics, which studies what the drug does to the body.
                You can think of it this way: pharmacokinetics governs the drug&apos;s
                journey, pharmacodynamics governs the drug&apos;s mechanism. Both together
                determine the clinical outcome you experience.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Pharmacokinetics is organized around four sequential processes,
                collectively abbreviated as <strong style={{ color: "var(--ink)", fontWeight: 600 }}>ADME</strong>:
                Absorption, Distribution, Metabolism, and Elimination. Each stage
                has its own biology, its own variables, and its own clinical
                implications. Let us walk through them one by one.
              </p>
            </div>

            {/* ADME overview pill */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1px",
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "var(--rule)",
              }}
            >
              {[
                { letter: "A", word: "Absorption", desc: "Getting in" },
                { letter: "D", word: "Distribution", desc: "Getting around" },
                { letter: "M", word: "Metabolism", desc: "Getting processed" },
                { letter: "E", word: "Elimination", desc: "Getting out" },
              ].map((item) => (
                <div
                  key={item.letter}
                  style={{
                    backgroundColor: "var(--cream)",
                    padding: "1.25rem 1rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.letter}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.word}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.7rem",
                      color: "var(--ink-faint)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 3a: Absorption */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                A — Absorption: getting the drug into the bloodstream
              </h2>
              <p style={{ margin: 0 }}>
                Absorption is the process by which drug molecules move from the site
                of administration into systemic circulation. For an oral tablet, this
                means traversing the gastrointestinal (GI) tract and entering the blood.
                For an intravenous injection, there is no absorption phase — the drug
                enters the bloodstream directly, which is why IV drugs have immediate
                onset and their bioavailability is defined as exactly 100%.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                The oral absorption pathway
              </h3>
              <p style={{ margin: 0 }}>
                When you swallow a tablet, it disintegrates in the stomach and the
                drug dissolves into solution. Drug molecules then cross the epithelial
                lining of the small intestine — primarily by passive diffusion down a
                concentration gradient, though some drugs use active transport
                mechanisms. From the intestinal wall, the drug enters the portal
                venous system and travels to the liver before reaching systemic
                circulation.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Several factors determine how quickly and completely this happens:
              </p>

              <ul
                style={{
                  margin: "1rem 0 0",
                  paddingLeft: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                <li>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>GI pH:</strong>{" "}
                  Weakly acidic drugs (like aspirin) are better absorbed in the acidic
                  stomach environment, while weakly basic drugs (like many antibiotics)
                  absorb better in the alkaline small intestine. Proton pump inhibitors
                  raise gastric pH and can reduce the absorption of drugs that need
                  an acid environment to dissolve.
                </li>
                <li>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Food and gastric emptying:</strong>{" "}
                  Food slows gastric emptying, which delays absorption and lowers the
                  peak concentration (C<sub>max</sub>). For some drugs, food reduces absorption
                  significantly (tetracycline, bisphosphonates). For others, food
                  actually increases absorption by promoting dissolution or reducing
                  first-pass metabolism (e.g., griseofulvin, lopinavir).
                </li>
                <li>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Drug formulation:</strong>{" "}
                  Immediate-release formulations deliver the drug quickly. Extended-release
                  or controlled-release formulations use polymer matrices or coatings to
                  slow drug release, smoothing out the concentration-time curve and
                  allowing less frequent dosing.
                </li>
                <li>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Drug solubility and permeability:</strong>{" "}
                  A drug must dissolve (solubility) and then cross biological membranes
                  (permeability). The Biopharmaceutics Classification System (BCS)
                  classifies drugs across these two axes, which directly predicts
                  absorption behavior and helps design formulations.
                </li>
              </ul>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Bioavailability (F) and why some drugs cannot be taken orally
              </h3>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Bioavailability</strong> (F)
                is the fraction of the administered dose that reaches systemic
                circulation unchanged. Oral bioavailability is almost always less than
                100% because some drug is lost during absorption and some is metabolized
                by the liver before reaching the bloodstream (the first-pass effect,
                discussed under Metabolism).
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Insulin is the canonical example of a drug that cannot be administered
                orally. As a peptide hormone, insulin is broken down by digestive
                proteases (stomach and intestinal enzymes) before it can be absorbed
                intact. Even if some survived digestion, the large molecular size
                would prevent absorption across the intestinal wall. This is why
                insulin must be injected subcutaneously or given intravenously.
                The same limitation applies to other protein-based drugs: monoclonal
                antibodies, GLP-1 agonists like semaglutide (though oral formulations
                using absorption enhancers are now FDA-approved), and many other
                biologics.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                T<sub>max</sub>: time to peak concentration
              </h3>
              <p style={{ margin: 0 }}>
                T<sub>max</sub> is the time after administration at which plasma
                concentration reaches its highest point. For most oral tablets in
                fasted adults, T<sub>max</sub> is 30 minutes to 2 hours. This matters
                clinically: if you take a painkiller 30 minutes before an expected
                headache becomes severe, the drug is likely near its peak when you
                need it most. Taking it too late means you are waiting for absorption
                while the pain escalates.
              </p>
            </div>

            {/* Section 3b: Distribution */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                D — Distribution: the drug spreads through the body
              </h2>
              <p style={{ margin: 0 }}>
                Once a drug reaches the bloodstream, it does not stay there. The
                circulatory system acts as a highway, transporting the drug throughout
                every organ and tissue. Distribution describes how the drug partitions
                itself between blood and the various tissues and compartments of
                the body.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Volume of distribution (V<sub>d</sub>)
              </h3>
              <p style={{ margin: 0 }}>
                Volume of distribution (V<sub>d</sub>) is a theoretical parameter that
                describes how extensively a drug distributes outside the plasma.
                It is calculated as the total amount of drug in the body divided by
                the plasma concentration. A small V<sub>d</sub> (close to plasma volume,
                roughly 3–5 L) suggests a drug stays mostly in blood — typical of
                large molecules like heparin and warfarin that are highly protein-bound.
                A large V<sub>d</sub> (tens or hundreds of liters, far exceeding total
                body water at 42 L) indicates extensive tissue distribution —
                chloroquine, for example, has a V<sub>d</sub> exceeding 200 L/kg,
                meaning it concentrates massively in tissues relative to plasma.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                V<sub>d</sub> has direct clinical consequences: drugs with very large
                volumes of distribution are extremely difficult to remove by dialysis,
                because only a tiny fraction is in the plasma at any time. If you try
                to dialyze a patient who has overdosed on amitriptyline (V<sub>d</sub>
                approximately 15 L/kg), dialysis removes only a minuscule portion of
                the drug burden.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Plasma protein binding
              </h3>
              <p style={{ margin: 0 }}>
                In the bloodstream, many drugs bind reversibly to plasma proteins —
                primarily albumin, but also alpha-1 acid glycoprotein and
                lipoproteins. Only the <em>free</em> (unbound) fraction of drug is
                pharmacologically active and available for distribution into tissues,
                metabolism by the liver, and elimination by the kidneys. A drug
                that is 99% protein-bound has only 1% free; if another drug
                displaces it, freeing it to 2%, the active drug concentration
                has doubled — a clinically significant interaction.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Hypoalbuminemia (low albumin levels, common in malnutrition, liver
                disease, and critical illness) can significantly increase the free
                fraction of highly protein-bound drugs like phenytoin, creating
                toxicity at doses that would be therapeutic in a healthy patient.
                This is one reason pharmacists routinely check albumin levels when
                interpreting drug concentrations.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                The blood-brain barrier
              </h3>
              <p style={{ margin: 0 }}>
                The blood-brain barrier (BBB) is a selective physiological barrier
                formed by tight junctions between specialized endothelial cells in
                brain capillaries. It is designed to protect the central nervous system
                from pathogens and many toxic substances — and it does its job very
                well, which creates a problem for drug delivery. Only small,
                lipophilic (fat-soluble) molecules that are not substrates for
                efflux pumps can readily cross the BBB. This is why treating
                brain infections is so challenging: most antibiotics have poor
                CNS penetration. It is also why lipid-soluble drugs like
                diazepam act quickly on the brain while water-soluble ones like
                penicillin do not. Drug designers working on CNS conditions spend
                enormous effort engineering molecules that can cross this barrier.
              </p>
            </div>

            {/* Section 3c: Metabolism */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                M — Metabolism: the liver transforms the drug
              </h2>
              <p style={{ margin: 0 }}>
                Metabolism (also called biotransformation) is the process by which
                the body chemically modifies drug molecules, typically to make them
                more water-soluble and therefore easier to excrete via the kidneys.
                The liver is the primary site, though the gut wall, lungs, kidneys,
                and skin also perform metabolic transformations to varying degrees.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Phase I reactions: functionalization
              </h3>
              <p style={{ margin: 0 }}>
                Phase I reactions introduce or unmask a reactive chemical group
                on the drug molecule — typically through oxidation, reduction, or
                hydrolysis. The cytochrome P450 (CYP) enzyme superfamily carries
                out the majority of Phase I oxidations. The most clinically important
                CYP isoforms are CYP3A4 (responsible for metabolizing roughly
                30–50% of all marketed drugs), CYP2D6, CYP2C9, CYP2C19, and
                CYP1A2.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Phase I metabolites are often less pharmacologically active than the
                parent drug, but this is not always the case. Some metabolites are
                more active (codeine is converted to morphine by CYP2D6 — its
                active metabolite provides the analgesia), and some are toxic
                (acetaminophen is partially converted to NAPQI, a reactive
                intermediate that causes liver damage in overdose).
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Phase II reactions: conjugation
              </h3>
              <p style={{ margin: 0 }}>
                Phase II reactions conjugate (attach) a large polar molecule to the
                drug or its Phase I metabolite: glucuronic acid (glucuronidation),
                sulfate (sulfation), acetyl groups (acetylation), amino acids, or
                glutathione. These bulky additions dramatically increase water
                solubility and facilitate renal or biliary excretion. Phase II
                products are almost always pharmacologically inactive — the body
                has rendered the drug inert and ready for elimination.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                The first-pass effect
              </h3>
              <p style={{ margin: 0 }}>
                The <strong style={{ color: "var(--ink)", fontWeight: 600 }}>first-pass effect</strong> (or
                presystemic metabolism) is a critical concept for oral drugs.
                After absorption from the gut, drug molecules enter the portal vein
                and pass through the liver before reaching systemic circulation.
                The liver, being the metabolic powerhouse that it is, may extract
                and metabolize a significant fraction of the drug before it ever
                reaches its target tissue.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Nitroglycerin is a dramatic example: nearly 100% of an oral dose
                is destroyed by first-pass metabolism, rendering oral administration
                useless for acute chest pain. This is why nitroglycerin is given
                sublingually (under the tongue), where it absorbs directly into
                systemic circulation, bypassing the portal system entirely. The
                same drug, the same molecule, works or does not work depending
                solely on how it enters the body.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Propranolol has approximately 25% oral bioavailability due to
                first-pass metabolism; morphine has about 30%. Oral dosing must
                account for this loss, which is why oral doses are often substantially
                larger than equivalent intravenous doses.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Prodrugs
              </h3>
              <p style={{ margin: 0 }}>
                A prodrug is a pharmacologically inactive compound that is
                converted into the active drug after administration — the opposite
                of what we typically think of as metabolism. Prodrugs are designed
                intentionally, often to improve oral bioavailability, increase
                stability, or target drug release to specific tissues. Enalapril
                (an ACE inhibitor for hypertension) is inactive as swallowed; liver
                esterases convert it to enalaprilat, the active form. Codeine
                relies on CYP2D6 conversion to morphine for its analgesic effect —
                which means poor CYP2D6 metabolizers receive no pain relief from
                codeine, while ultrarapid metabolizers may receive dangerous
                morphine concentrations from standard doses.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Why grapefruit juice matters
              </h3>
              <div
                style={{
                  marginTop: "0.5rem",
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--cream)",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                  Grapefruit and grapefruit juice contain furanocoumarins — compounds
                  that irreversibly inhibit CYP3A4 in the intestinal wall. Since CYP3A4
                  is responsible for metabolizing a large fraction of orally administered
                  drugs, inhibiting it means more drug survives to reach systemic
                  circulation. For drugs with narrow therapeutic windows (statins,
                  calcium channel blockers, certain immunosuppressants), this interaction
                  can increase drug levels by 2 to 5-fold, raising toxicity risk
                  substantially. A single glass of grapefruit juice can suppress
                  intestinal CYP3A4 activity for up to 24 hours because the furanocoumarins
                  destroy the enzyme, and new enzyme must be synthesized to replace it.
                  This is not an interaction to dismiss as trivial.
                </p>
              </div>
            </div>

            {/* Section 3d: Elimination */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                E — Elimination: the final exit
              </h2>
              <p style={{ margin: 0 }}>
                Elimination is the irreversible removal of drug from the body.
                The kidneys handle the majority of drug elimination for water-soluble
                compounds and metabolites, but the biliary system (via the liver
                and intestines), the lungs, sweat, and breast milk also contribute
                in drug- and context-specific ways.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Renal excretion
              </h3>
              <p style={{ margin: 0 }}>
                The kidneys filter blood through the glomerulus and excrete water-soluble
                substances in urine. Renal drug elimination involves three processes:
                glomerular filtration (passive, based on molecular size and protein
                binding), active tubular secretion (a carrier-mediated process
                that can clear drugs faster than filtration alone), and passive tubular
                reabsorption (lipophilic molecules can diffuse back into the
                bloodstream from tubular fluid, reducing excretion).
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                Urinary pH affects reabsorption: a basic environment ionizes acidic
                drugs, preventing reabsorption and increasing excretion. This principle
                is exploited clinically in aspirin overdose treatment — alkalinizing
                the urine with sodium bicarbonate traps ionized salicylate in the
                tubular fluid and accelerates its excretion.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Biliary excretion and enterohepatic recirculation
              </h3>
              <p style={{ margin: 0 }}>
                Some drugs and metabolites are excreted by the liver into bile, which
                enters the small intestine. If intestinal bacteria then hydrolyze the
                conjugated metabolite back to active drug, it can be reabsorbed into
                the portal circulation — a loop called enterohepatic recirculation.
                This effectively extends a drug&apos;s half-life and duration of action.
                Interrupting this cycle (for example, with certain antibiotics that
                kill the relevant gut flora) can sometimes reduce drug efficacy.
                Estrogens in combined oral contraceptives undergo significant
                enterohepatic recirculation, which is part of why concurrent
                antibiotic use historically raised concern about contraceptive
                failure (though current evidence suggests the interaction is minimal
                for most antibiotics).
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                First-order vs. zero-order elimination kinetics
              </h3>
              <p style={{ margin: 0 }}>
                Most drugs follow <strong style={{ color: "var(--ink)", fontWeight: 600 }}>first-order kinetics</strong>:
                a constant <em>fraction</em> of the drug is eliminated per unit time.
                As the concentration falls, the absolute rate of elimination falls
                proportionally. This is the basis of drug half-life — and it means
                the half-life remains constant regardless of concentration.
              </p>
              <p style={{ margin: "1rem 0 0" }}>
                A small number of drugs follow <strong style={{ color: "var(--ink)", fontWeight: 600 }}>zero-order kinetics</strong>:
                a constant <em>amount</em> is eliminated per unit time, regardless of
                concentration. This happens when the elimination pathway is saturated
                — the metabolic enzyme or transport protein is working at maximum
                capacity. Ethanol (alcohol) is the most familiar example: the
                liver&apos;s alcohol dehydrogenase is saturated at typical drinking
                concentrations, so the body eliminates roughly 7–10 g of alcohol
                per hour regardless of the blood alcohol level. There is no true
                half-life for ethanol in the pharmacokinetic sense. Aspirin at
                high doses and phenytoin at therapeutic doses also show zero-order
                (saturable) kinetics — making them significantly harder to dose
                safely, since small dose increases can produce disproportionately
                large concentration increases.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "1.5rem 0 0.5rem",
                }}
              >
                Half-life as the measure of elimination rate
              </h3>
              <p style={{ margin: 0 }}>
                For first-order drugs, half-life elegantly summarizes the entire
                elimination process into a single number. It incorporates both
                metabolic clearance (how fast the liver transforms the drug) and
                renal clearance (how fast the kidneys excrete it). The overall
                clearance (CL) of a drug is related to half-life and volume of
                distribution by:
              </p>
              <div
                style={{
                  margin: "1rem 0",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--rule)",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "1.0625rem",
                    color: "var(--ink)",
                    margin: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  t½ = (0.693 × V<sub>d</sub>) / CL
                </p>
              </div>
              <p style={{ margin: 0 }}>
                A drug can have a long half-life because it distributes extensively
                into tissues (high V<sub>d</sub>), even if its metabolic clearance is
                actually quite fast. Conversely, a drug with very high clearance
                and low volume of distribution will have a short half-life. This
                relationship is why organ impairment affects half-life differently
                depending on whether the drug is primarily cleared renally,
                hepatically, or both.
              </p>
            </div>

            {/* AdSense — mid-article */}
            <div className="ad-container" style={{ margin: "2rem 0" }}>
              <AdUnit slot="2345678901" format="auto" />
            </div>

            {/* Section 4: Concentration-time curve */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                The concentration-time curve: reading the story of a dose
              </h2>
              <p style={{ margin: "0 0 1.25rem" }}>
                If you were to take blood samples every 30 minutes after swallowing a
                tablet and plot plasma drug concentration over time, you would get a
                characteristic curve: a rising phase as absorption exceeds elimination,
                a peak, and then a falling phase as elimination dominates. This is the
                concentration-time curve — the fundamental read-out of a drug&apos;s
                pharmacokinetic behavior.
              </p>

              {/* Key parameters */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                {[
                  {
                    term: "C\u2098\u2090\u2093 (Peak concentration)",
                    def: "The highest plasma concentration achieved after a dose. Determined by dose size, bioavailability, and the rate of absorption relative to elimination. C\u2098\u2090\u2093 must stay below the minimum toxic concentration to avoid adverse effects.",
                  },
                  {
                    term: "T\u2098\u2090\u2093 (Time to peak)",
                    def: "The time after dosing at which C\u2098\u2090\u2093 is reached. Longer with food, extended-release formulations, or slow absorbers. Faster with empty stomach or IV administration.",
                  },
                  {
                    term: "AUC (Area Under the Curve)",
                    def: "The total drug exposure over time, representing the integral of the concentration-time curve. AUC is the most reliable measure of total drug absorbed and is the basis for bioequivalence studies comparing generic drugs to brand-name originals.",
                  },
                  {
                    term: "Therapeutic window",
                    def: "The concentration range between the minimum effective concentration (MEC) — below which the drug does not work — and the minimum toxic concentration (MTC) — above which side effects and toxicity occur. Drugs with a narrow therapeutic window (digoxin, lithium, warfarin, aminoglycosides, phenytoin) require careful monitoring and individualized dosing.",
                  },
                ].map((item) => (
                  <div
                    key={item.term}
                    style={{
                      border: "1px solid var(--rule)",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      backgroundColor: "var(--cream)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "var(--ink)",
                        margin: "0 0 0.375rem",
                      }}
                    >
                      {item.term}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {item.def}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ margin: 0 }}>
                The therapeutic window concept explains why dosing precision matters.
                For drugs with narrow windows, even small deviations in absorption,
                metabolism, or renal function can push concentrations out of the
                safe zone — either into ineffectiveness below or toxicity above.
                Regular therapeutic drug monitoring (TDM) with blood tests is used
                for these drugs in clinical practice.
              </p>
            </div>

            {/* Section 5: Why this matters for you */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Why pharmacokinetics matters for you personally
              </h2>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Understanding your medication schedule
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                Every instruction on a medication label — take with food, take on an
                empty stomach, do not crush, take at the same time each day, allow
                12 hours between doses — has a pharmacokinetic reason. Once you
                understand ADME, these instructions stop being arbitrary rules and
                become logical consequences of the drug&apos;s chemistry and the body&apos;s
                biology. Missing doses at irregular times is not merely inconvenient;
                for drugs with narrow therapeutic windows or short half-lives, it
                can mean spending hours outside the therapeutic range with real
                clinical consequences.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Food-drug interactions
              </h3>
              <p style={{ margin: "0 0 1.25rem" }}>
                Food interactions are not trivial considerations — they are direct
                pharmacokinetic interventions. High-fat meals can increase absorption
                of some drugs by 50% or more. Dairy products chelate (bind) fluoroquinolone
                antibiotics and tetracyclines in the gut, preventing absorption.
                Vitamin K-rich foods reduce the anticoagulant effect of warfarin by
                promoting clotting factor synthesis. Tyramine in aged cheeses causes
                dangerous blood pressure crises in patients taking MAO inhibitors.
                These are not theoretical warnings — they represent well-documented
                pharmacokinetic and pharmacodynamic mechanisms.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Why you cannot simply double the dose
              </h3>
              <p style={{ margin: 0 }}>
                A common misconception is that if one tablet is good, two tablets
                are twice as good and work twice as fast. For most drugs this is
                incorrect and potentially dangerous. Doubling the dose raises C<sub>max</sub>
                proportionally, which may push concentrations above the MTC and into
                toxicity. It does not halve the time to effect — onset depends on
                T<sub>max</sub>, which is primarily determined by absorption rate, not
                dose size. And it does not double the duration of effect in any
                linear way — because elimination is exponential, doubling the dose
                only extends duration by roughly one additional half-life. The correct
                response to inadequate drug effect is almost never to simply take more
                — it is to discuss dosing adjustment with a healthcare provider who
                can consider the full pharmacokinetic picture.
              </p>
            </div>

            {/* CTA: Try simulator */}
            <div
              style={{
                border: "1px solid var(--rule)",
                borderRadius: "10px",
                padding: "1.75rem 1.75rem",
                backgroundColor: "var(--cream)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.625rem",
                }}
              >
                Visualize the concentration-time curve yourself
              </h3>
              <p style={{ margin: "0 0 1.25rem", fontSize: "0.9375rem" }}>
                The HalfLife simulator renders concentration-time curves in real time
                for 30+ common medications. See absorption peaks, exponential decline,
                accumulation with multiple doses, and steady state — all the concepts
                from this article, made visual and interactive.
              </p>
              <Link
                href="/simulator"
                style={{
                  display: "inline-block",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "8px",
                  letterSpacing: "0.01em",
                }}
              >
                Open the Simulator →
              </Link>
            </div>

            {/* Navigation to other articles */}
            <div>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "var(--rule)",
                  marginBottom: "1.5rem",
                }}
              />
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                <Link href="/learn/what-is-drug-half-life" className="learn-nav-link">
                  What is Drug Half-Life? A Complete Guide →
                </Link>
              </div>
            </div>

            {/* Medical disclaimer */}
            <div
              style={{
                borderLeft: "3px solid var(--rule)",
                paddingLeft: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem",
                }}
              >
                Medical disclaimer
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  color: "var(--ink-faint)",
                  lineHeight: 1.65,
                }}
              >
                This article is intended for educational purposes only and does not
                constitute medical advice. The pharmacokinetic principles described
                are general in nature; actual drug behavior in any individual patient
                depends on numerous clinical variables including comorbidities, organ
                function, concurrent medications, and genetic factors. Do not use this
                information to self-diagnose, self-treat, or adjust medications without
                consulting a qualified healthcare professional. Always follow the guidance
                of your pharmacist or physician.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
