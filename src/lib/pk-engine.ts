/**
 * Pharmacokinetic (PK) Engine — First-Order Elimination
 *
 * Core model: One-compartment model with first-order absorption and elimination
 * using the Bateman function:
 *
 *   C(t) = F * D / Vd * (ka / (ka - ke)) * (e^(-ke*t) - e^(-ka*t))
 *
 * All concentrations are normalized to percentage of Cmax (0–100%).
 */

// ── Private helpers ──────────────────────────────────────────────────────────

/**
 * Derive the elimination rate constant from half-life.
 *   ke = ln(2) / t½
 */
function eliminationRateConstant(halfLifeHours: number): number {
  return Math.LN2 / halfLifeHours;
}

/**
 * Derive the absorption rate constant from Tmax and ke.
 * At Tmax, dC/dt = 0, which gives:
 *   tmax = ln(ka / ke) / (ka - ke)
 * We solve numerically with Newton-Raphson if tmax > 0,
 * otherwise fallback to ka = ke * 5 (fast absorption).
 */
function absorptionRateConstant(
  tmaxHours: number,
  ke: number
): number {
  // If Tmax is very short relative to ke, use a conservative multiple
  if (tmaxHours <= 0) return ke * 10;

  // Bisection on f(ka) = ln(ka/ke)/(ka-ke) - tmax = 0
  // Search range: just above ke (ka > ke required for Bateman to work) up to ke*200
  const target = tmaxHours;
  let lo = ke * 1.001;
  let hi = ke * 500;

  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    const val = Math.log(mid / ke) / (mid - ke);
    if (Math.abs(val - target) < 1e-9) return mid;
    if (val > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Bateman function — normalized so that Cmax = 100.
 * Returns the raw (un-normalized) concentration value at time t.
 */
function batemanRaw(
  timeHours: number,
  ke: number,
  ka: number
): number {
  if (timeHours < 0) return 0;
  // Guard against ka ≈ ke (numerical singularity) — use L'Hôpital's limit
  if (Math.abs(ka - ke) < 1e-9) {
    return ke * timeHours * Math.exp(-ke * timeHours);
  }
  return (ka / (ka - ke)) * (Math.exp(-ke * timeHours) - Math.exp(-ka * timeHours));
}

/**
 * Find the theoretical Cmax of the Bateman function.
 * Achieved at t = tmax = ln(ka/ke) / (ka - ke).
 */
function batemanCmax(ke: number, ka: number): number {
  if (Math.abs(ka - ke) < 1e-9) {
    // L'Hôpital: Cmax at t = 1/ke, value = 1/e
    return (1 / Math.E);
  }
  const tmax = Math.log(ka / ke) / (ka - ke);
  return batemanRaw(tmax, ke, ka);
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Calculate normalized concentration (0–100%) at `timeHours` after a single dose.
 *
 * @param timeHours       - Time after first dose, in hours
 * @param halfLifeHours   - Elimination half-life, in hours
 * @param tmaxHours       - Time to peak concentration, in hours
 * @param bioavailability - Fraction absorbed (0–1); shapes the curve amplitude
 * @returns Normalized concentration percentage (0–100)
 */
export function calculateConcentration(
  timeHours: number,
  halfLifeHours: number,
  tmaxHours: number,
  bioavailability: number
): number {
  if (timeHours < 0 || halfLifeHours <= 0) return 0;

  const ke = eliminationRateConstant(halfLifeHours);
  const ka = absorptionRateConstant(tmaxHours, ke);
  const cmax = batemanCmax(ke, ka);

  if (cmax <= 0) return 0;

  // Scale by bioavailability (relative; since we normalize to 100, F only
  // affects relative shape when comparing across doses — keep amplitude consistent)
  const raw = batemanRaw(timeHours, ke, ka);
  const normalized = (raw / cmax) * 100 * bioavailability;

  // Clamp to [0, 100]
  return Math.max(0, Math.min(100, normalized));
}

/**
 * Data point for a concentration-time curve.
 */
export interface PKDataPoint {
  time: number;          // hours
  concentration: number; // percentage of single-dose Cmax (0–100)
}

/**
 * Simulate a multiple-dose regimen using superposition.
 * Each successive dose is added on top of the residual from previous doses.
 *
 * @param totalHours          - Duration of simulation, in hours
 * @param halfLifeHours       - Elimination half-life, in hours
 * @param tmaxHours           - Time to peak concentration after each dose
 * @param bioavailability     - Fraction absorbed (0–1)
 * @param dosingIntervalHours - Interval between doses, in hours (0 = single dose)
 * @param stepMinutes         - Sampling resolution in minutes (default 15)
 * @returns Array of {time, concentration} data points
 */
export function calculateMultipleDose(
  totalHours: number,
  halfLifeHours: number,
  tmaxHours: number,
  bioavailability: number,
  dosingIntervalHours: number,
  stepMinutes: number = 15
): PKDataPoint[] {
  const ke = eliminationRateConstant(halfLifeHours);
  const ka = absorptionRateConstant(tmaxHours, ke);
  const cmaxSingle = batemanCmax(ke, ka);

  // Build list of dose times
  const doseTimes: number[] = [0];
  if (dosingIntervalHours > 0) {
    let t = dosingIntervalHours;
    while (t < totalHours) {
      doseTimes.push(t);
      t += dosingIntervalHours;
    }
  }

  const stepHours = stepMinutes / 60;
  const steps = Math.ceil(totalHours / stepHours);
  const points: PKDataPoint[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i * stepHours;
    let totalConc = 0;

    for (const doseTime of doseTimes) {
      const elapsed = t - doseTime;
      if (elapsed < 0) continue;
      totalConc += batemanRaw(elapsed, ke, ka);
    }

    // Normalize: express as % of single-dose Cmax, scaled by bioavailability
    const normalized = cmaxSingle > 0
      ? (totalConc / cmaxSingle) * 100 * bioavailability
      : 0;

    points.push({ time: t, concentration: Math.max(0, normalized) });
  }

  return points;
}

/**
 * Estimate the time required to reach steady state.
 * By convention, steady state is ~94% achieved after 4 half-lives
 * and ~97% after 5 half-lives. We return the 5× value.
 *
 * @param halfLifeHours - Elimination half-life in hours
 * @returns Approximate hours to steady state
 */
export function timeToSteadyState(halfLifeHours: number): number {
  return halfLifeHours * 5;
}

/**
 * Calculate the percentage of drug remaining at a given time
 * during pure elimination phase (i.e., after absorption is complete).
 *
 * @param timeHours     - Hours elapsed since drug was fully absorbed
 * @param halfLifeHours - Elimination half-life in hours
 * @returns Percentage remaining (0–100)
 */
export function percentRemaining(
  timeHours: number,
  halfLifeHours: number
): number {
  if (timeHours < 0 || halfLifeHours <= 0) return 100;
  const ke = eliminationRateConstant(halfLifeHours);
  return Math.max(0, Math.min(100, Math.exp(-ke * timeHours) * 100));
}

/**
 * Calculate the time at which the drug level first drops below a given
 * percentage threshold (useful for "90% eliminated" display).
 *
 * @param thresholdPercent - e.g. 10 means "time until <10% remains"
 * @param halfLifeHours    - Elimination half-life in hours
 * @returns Hours to reach threshold; returns Infinity if not reached
 */
export function timeToThreshold(
  thresholdPercent: number,
  halfLifeHours: number
): number {
  if (thresholdPercent <= 0 || halfLifeHours <= 0) return Infinity;
  // Solve: e^(-ke*t) = threshold/100  →  t = -ln(threshold/100) / ke
  const ke = eliminationRateConstant(halfLifeHours);
  return -Math.log(thresholdPercent / 100) / ke;
}

/**
 * Calculate the steady-state peak and trough concentrations
 * (normalized, as multiples of single-dose Cmax percent).
 *
 * @param halfLifeHours       - Elimination half-life in hours
 * @param tmaxHours           - Time to peak
 * @param bioavailability     - Fraction absorbed
 * @param dosingIntervalHours - Dosing interval in hours
 * @returns { peak: number; trough: number } as percentages of single-dose Cmax
 */
export function steadyStateMetrics(
  halfLifeHours: number,
  tmaxHours: number,
  bioavailability: number,
  dosingIntervalHours: number
): { peak: number; trough: number } {
  if (dosingIntervalHours <= 0) return { peak: 100, trough: 0 };

  // Simulate enough time to reach SS (8 half-lives should be more than sufficient)
  const duration = Math.max(dosingIntervalHours * 10, halfLifeHours * 8);
  const points = calculateMultipleDose(
    duration,
    halfLifeHours,
    tmaxHours,
    bioavailability,
    dosingIntervalHours,
    5 // 5-minute resolution for accuracy
  );

  // Take the last two dosing intervals as steady state
  const ssStart = duration - dosingIntervalHours * 2;
  const ssPoints = points.filter((p) => p.time >= ssStart);

  if (ssPoints.length === 0) return { peak: 100, trough: 0 };

  const peak = Math.max(...ssPoints.map((p) => p.concentration));
  const trough = Math.min(...ssPoints.map((p) => p.concentration));
  return { peak, trough };
}
