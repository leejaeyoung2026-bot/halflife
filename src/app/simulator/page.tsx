"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { DRUGS, CATEGORIES, type Drug, type CategoryKey } from "@/lib/drugs";
import {
  calculateMultipleDose,
  timeToSteadyState,
  timeToThreshold,
  percentRemaining,
  type PKDataPoint,
} from "@/lib/pk-engine";

// ── Types ─────────────────────────────────────────────────────────────────────

type DosingOption = {
  label: string;
  hours: number; // 0 = single dose
};

const DOSING_OPTIONS: DosingOption[] = [
  { label: "Single dose", hours: 0 },
  { label: "Every 4 hours", hours: 4 },
  { label: "Every 6 hours", hours: 6 },
  { label: "Every 8 hours", hours: 8 },
  { label: "Every 12 hours", hours: 12 },
  { label: "Every 24 hours", hours: 24 },
];

// ── Chart component ───────────────────────────────────────────────────────────

interface ChartProps {
  points: PKDataPoint[];
  drug: Drug;
  dosingInterval: number; // 0 = single dose
  totalHours: number;
  showSteadyState: boolean;
}

function ConcentrationChart({
  points,
  drug,
  dosingInterval,
  totalHours,
  showSteadyState,
}: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || points.length === 0) return;

    const dpr = window.devicePixelRatio ?? 1;
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Resolve CSS variables for theming
    const style = getComputedStyle(document.documentElement);
    const paper = style.getPropertyValue("--paper").trim() || "#FAF8F3";
    const ink = style.getPropertyValue("--ink").trim() || "#2C2825";
    const inkSoft = style.getPropertyValue("--ink-soft").trim() || "#5C5550";
    const inkFaint = style.getPropertyValue("--ink-faint").trim() || "#9C9490";
    const rule = style.getPropertyValue("--rule").trim() || "#E2DDD8";

    // Padding
    const pad = { top: 20, right: 24, bottom: 48, left: 52 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;

    // Data extents
    const maxConc = Math.max(...points.map((p) => p.concentration), 100);
    const yMax = Math.min(maxConc * 1.08, maxConc + 10);

    // Coordinate helpers
    const xOf = (t: number) => pad.left + (t / totalHours) * chartW;
    const yOf = (c: number) => pad.top + chartH - (c / yMax) * chartH;

    // ── Background ──
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, W, H);

    // ── Grid lines ──
    const yTicks = [0, 25, 50, 75, 100];
    ctx.strokeStyle = rule;
    ctx.lineWidth = 1;
    ctx.setLineDash([]);

    yTicks.forEach((v) => {
      const y = yOf(v);
      if (y < pad.top || y > pad.top + chartH) return;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + chartW, y);
      ctx.stroke();

      ctx.fillStyle = inkFaint;
      ctx.font = `10px var(--font-mono, monospace)`;
      ctx.textAlign = "right";
      ctx.fillText(`${v}%`, pad.left - 6, y + 3.5);
    });

    // X-axis ticks
    const xTickCount = Math.min(8, Math.floor(totalHours / 6));
    const xTickInterval = totalHours / xTickCount;
    for (let i = 0; i <= xTickCount; i++) {
      const t = i * xTickInterval;
      const x = xOf(t);
      ctx.beginPath();
      ctx.moveTo(x, pad.top);
      ctx.lineTo(x, pad.top + chartH);
      ctx.strokeStyle = rule;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      const label = t >= 24 ? `${(t / 24).toFixed(t % 24 === 0 ? 0 : 1)}d` : `${t}h`;
      ctx.fillStyle = inkFaint;
      ctx.textAlign = "center";
      ctx.font = `10px var(--font-mono, monospace)`;
      ctx.fillText(label, x, pad.top + chartH + 14);
    }

    // ── Dose markers ──
    if (dosingInterval > 0) {
      ctx.strokeStyle = inkFaint;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      let doseT = dosingInterval;
      while (doseT < totalHours) {
        const x = xOf(doseT);
        ctx.beginPath();
        ctx.moveTo(x, pad.top);
        ctx.lineTo(x, pad.top + chartH);
        ctx.stroke();
        doseT += dosingInterval;
      }
      ctx.setLineDash([]);
    }

    // ── Steady-state line ──
    if (showSteadyState && dosingInterval > 0) {
      const ssTime = timeToSteadyState(drug.halfLife);
      if (ssTime < totalHours) {
        const x = xOf(ssTime);
        ctx.save();
        ctx.strokeStyle = drug.color;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 3]);
        ctx.beginPath();
        ctx.moveTo(x, pad.top);
        ctx.lineTo(x, pad.top + chartH);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = drug.color;
        ctx.font = `10px var(--font-sans, sans-serif)`;
        ctx.textAlign = "left";
        ctx.fillText("SS", x + 4, pad.top + 14);
        ctx.restore();
      }
    }

    // ── 50% half-life reference line ──
    {
      const y50 = yOf(50);
      if (y50 >= pad.top && y50 <= pad.top + chartH) {
        ctx.save();
        ctx.strokeStyle = inkFaint;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(pad.left, y50);
        ctx.lineTo(pad.left + chartW, y50);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = inkFaint;
        ctx.font = `9px var(--font-mono, monospace)`;
        ctx.textAlign = "left";
        ctx.fillText("50%", pad.left + 3, y50 - 3);
        ctx.restore();
      }
    }

    // ── Gradient fill under curve ──
    if (points.length > 1) {
      const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
      grad.addColorStop(0, `${drug.color}55`);
      grad.addColorStop(1, `${drug.color}08`);

      ctx.beginPath();
      ctx.moveTo(xOf(points[0].time), yOf(points[0].concentration));
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(xOf(points[i].time), yOf(points[i].concentration));
      }
      // Close back along the bottom
      ctx.lineTo(xOf(points[points.length - 1].time), pad.top + chartH);
      ctx.lineTo(xOf(points[0].time), pad.top + chartH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // ── Main concentration curve ──
    if (points.length > 1) {
      ctx.beginPath();
      ctx.moveTo(xOf(points[0].time), yOf(points[0].concentration));
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(xOf(points[i].time), yOf(points[i].concentration));
      }
      ctx.strokeStyle = drug.color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.setLineDash([]);
      ctx.stroke();
    }

    // ── Axes ──
    ctx.strokeStyle = rule;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    // Y axis
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top);
    ctx.lineTo(pad.left, pad.top + chartH);
    ctx.stroke();
    // X axis
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top + chartH);
    ctx.lineTo(pad.left + chartW, pad.top + chartH);
    ctx.stroke();

    // ── Axis labels ──
    ctx.fillStyle = inkSoft;
    ctx.font = `11px var(--font-sans, sans-serif)`;
    ctx.textAlign = "center";
    ctx.fillText("Time", pad.left + chartW / 2, H - 4);

    ctx.save();
    ctx.translate(12, pad.top + chartH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("% of Peak (Cmax)", 0, 0);
    ctx.restore();

    // ── Ink label: drug name ──
    ctx.fillStyle = ink;
    ctx.font = `bold 12px var(--font-sans, sans-serif)`;
    ctx.textAlign = "right";
    ctx.fillText(drug.name.split(" ")[0], pad.left + chartW - 4, pad.top + 16);
  }, [points, drug, dosingInterval, totalHours, showSteadyState]);

  // Redraw when any dependency changes
  useEffect(() => {
    draw();
  }, [draw]);

  // Redraw on container resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => draw());
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

// ── Metric card ───────────────────────────────────────────────────────────────

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-[var(--rule)] bg-[var(--cream)] px-4 py-3 min-w-0">
      <span className="text-[11px] uppercase tracking-widest text-[var(--ink-faint)] font-medium leading-none">
        {label}
      </span>
      <span className="text-xl font-semibold text-[var(--ink)] leading-tight font-[var(--font-mono)]">
        {value}
      </span>
      {sub && (
        <span className="text-[11px] text-[var(--ink-faint)] leading-none">{sub}</span>
      )}
    </div>
  );
}

// ── Format helpers ────────────────────────────────────────────────────────────

function formatHours(h: number): string {
  if (h === Infinity) return "—";
  if (h < 1) return `${Math.round(h * 60)}min`;
  if (h < 24) return `${h % 1 === 0 ? h : h.toFixed(1)}h`;
  const days = h / 24;
  return days % 1 === 0 ? `${days}d` : `${days.toFixed(1)}d`;
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function SimulatorPage() {
  const [selectedDrugId, setSelectedDrugId] = useState<string>("caffeine");
  const [category, setCategory] = useState<CategoryKey>("All");
  const [dosingIntervalHours, setDosingIntervalHours] = useState<number>(0);
  const [totalHours, setTotalHours] = useState<number>(48);
  const [showSteadyState, setShowSteadyState] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const drug = useMemo(
    () => DRUGS.find((d) => d.id === selectedDrugId) ?? DRUGS[0],
    [selectedDrugId]
  );

  // Filtered drug list for the selector
  const filteredDrugs = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return DRUGS.filter((d) => {
      const matchCat = category === "All" || d.category === category;
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.genericName.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, searchQuery]);

  // PK simulation
  const points = useMemo<PKDataPoint[]>(
    () =>
      calculateMultipleDose(
        totalHours,
        drug.halfLife,
        drug.tmax,
        drug.bioavailability,
        dosingIntervalHours,
        15
      ),
    [drug, dosingIntervalHours, totalHours]
  );

  // Metrics
  const time90Eliminated = useMemo(
    () => timeToThreshold(10, drug.halfLife) + drug.tmax,
    [drug]
  );
  const ssTime = useMemo(() => timeToSteadyState(drug.halfLife), [drug]);
  const remainingAt24h = useMemo(
    () => percentRemaining(Math.max(0, 24 - drug.tmax), drug.halfLife),
    [drug]
  );

  // Auto-adjust total hours when drug changes to show meaningful range
  useEffect(() => {
    const suggested = Math.min(
      Math.max(drug.halfLife * 6, 24),
      168
    );
    setTotalHours(Math.round(suggested / 6) * 6);
  }, [drug.halfLife]);

  const handleDrugSelect = (id: string) => {
    setSelectedDrugId(id);
    setDropdownOpen(false);
    setSearchQuery("");
  };

  const dosingOption = DOSING_OPTIONS.find(
    (o) => o.hours === dosingIntervalHours
  ) ?? DOSING_OPTIONS[0];

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* ── Page header ── */}
      <div className="border-b border-[var(--rule)] px-4 py-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--ink)] leading-tight">
            Drug Half-Life Simulator
          </h1>
          <p className="mt-1 text-[var(--ink-soft)] text-sm md:text-base max-w-2xl">
            Visualize how drugs are absorbed and eliminated from your body
            using pharmacokinetic modeling. Select a drug, configure your
            dosing schedule, and see the concentration curve in real time.
          </p>
          <p className="mt-2 text-[11px] text-[var(--ink-faint)] leading-snug max-w-xl">
            Educational tool only. Not medical advice. Always follow your
            healthcare provider&apos;s instructions.
          </p>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* ────────────────── LEFT / TOP: Controls ────────────────── */}
          <div className="flex flex-col gap-5 lg:w-80 lg:shrink-0">
            {/* Category filter */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-[var(--ink-faint)] mb-2 font-medium">
                Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={[
                      "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                      category === cat
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--cream)] text-[var(--ink-soft)] hover:bg-[var(--rule)]",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Drug selector dropdown */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-[11px] uppercase tracking-widest text-[var(--ink-faint)] mb-2 font-medium">
                Drug
              </label>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full flex items-center justify-between gap-2 rounded-xl border border-[var(--rule)] bg-[var(--cream)] px-4 py-2.5 text-left text-sm transition-colors hover:border-[var(--accent)]"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: drug.color }}
                  />
                  <span className="truncate font-medium text-[var(--ink)]">
                    {drug.name}
                  </span>
                </span>
                <span className="text-[var(--ink-faint)] text-xs shrink-0">
                  {dropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-xl border border-[var(--rule)] bg-[var(--paper)] shadow-lg overflow-hidden">
                  <div className="p-2 border-b border-[var(--rule)]">
                    <input
                      type="text"
                      placeholder="Search drugs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full rounded-lg border border-[var(--rule)] bg-[var(--cream)] px-3 py-2 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {filteredDrugs.length === 0 && (
                      <div className="px-4 py-3 text-sm text-[var(--ink-faint)]">
                        No drugs found
                      </div>
                    )}
                    {filteredDrugs.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleDrugSelect(d.id)}
                        className={[
                          "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors hover:bg-[var(--cream)]",
                          d.id === selectedDrugId
                            ? "bg-[var(--cream)] font-medium"
                            : "",
                        ].join(" ")}
                      >
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: d.color }}
                        />
                        <span className="flex-1 min-w-0">
                          <span className="block truncate text-[var(--ink)]">
                            {d.name}
                          </span>
                          <span className="block text-[10px] text-[var(--ink-faint)] truncate">
                            {d.category} · t½ {formatHours(d.halfLife)}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dosing interval */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-[var(--ink-faint)] mb-2 font-medium">
                Dosing Schedule
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {DOSING_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setDosingIntervalHours(opt.hours)}
                    className={[
                      "rounded-lg border px-3 py-2 text-xs font-medium transition-colors text-left",
                      dosingIntervalHours === opt.hours
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-[var(--rule)] bg-[var(--cream)] text-[var(--ink-soft)] hover:border-[var(--accent)]",
                    ].join(" ")}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulation duration */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] uppercase tracking-widest text-[var(--ink-faint)] font-medium">
                  Duration
                </label>
                <span className="text-sm font-[var(--font-mono)] text-[var(--ink)]">
                  {formatHours(totalHours)}
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={168}
                step={6}
                value={totalHours}
                onChange={(e) => setTotalHours(Number(e.target.value))}
                className="w-full h-1.5 rounded-full accent-[var(--accent)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--ink-faint)] mt-1">
                <span>6h</span>
                <span>1 week</span>
              </div>
            </div>

            {/* Steady-state toggle */}
            {dosingIntervalHours > 0 && (
              <div className="flex items-center justify-between rounded-xl border border-[var(--rule)] bg-[var(--cream)] px-4 py-3">
                <span className="text-sm text-[var(--ink)]">
                  Show steady-state marker
                </span>
                <button
                  role="switch"
                  aria-checked={showSteadyState}
                  onClick={() => setShowSteadyState((v) => !v)}
                  className={[
                    "relative h-5 w-9 rounded-full transition-colors",
                    showSteadyState
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--rule)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform",
                      showSteadyState ? "translate-x-4" : "translate-x-0.5",
                    ].join(" ")}
                  />
                </button>
              </div>
            )}

            {/* Drug info card */}
            <div
              className="rounded-xl border p-4 flex flex-col gap-2"
              style={{ borderColor: `${drug.color}40` }}
            >
              <div className="flex items-start gap-2">
                <span
                  className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: drug.color }}
                />
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--ink)] text-sm leading-tight">
                    {drug.name}
                  </div>
                  <div className="text-[11px] text-[var(--ink-faint)]">
                    {drug.genericName}
                  </div>
                </div>
                <span
                  className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                  style={{ backgroundColor: drug.color }}
                >
                  {drug.category}
                </span>
              </div>

              <p className="text-[12px] text-[var(--ink-soft)] leading-snug">
                {drug.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] mt-1">
                <div>
                  <span className="text-[var(--ink-faint)]">Half-life: </span>
                  <span className="font-medium text-[var(--ink)]">
                    {formatHours(drug.halfLife)}
                    {drug.halfLifeRange &&
                      ` (${formatHours(drug.halfLifeRange[0])}–${formatHours(drug.halfLifeRange[1])})`}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--ink-faint)]">Peak at: </span>
                  <span className="font-medium text-[var(--ink)]">
                    {formatHours(drug.tmax)}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--ink-faint)]">Typical dose: </span>
                  <span className="font-medium text-[var(--ink)]">
                    {drug.typicalDose}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--ink-faint)]">Frequency: </span>
                  <span className="font-medium text-[var(--ink)]">
                    {drug.frequency}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────── RIGHT / BOTTOM: Chart + Metrics ──────── */}
          <div className="flex flex-1 flex-col gap-5 min-w-0">
            {/* Chart */}
            <div
              className="w-full rounded-2xl border border-[var(--rule)] overflow-hidden"
              style={{ height: "380px" }}
            >
              <ConcentrationChart
                points={points}
                drug={drug}
                dosingInterval={dosingIntervalHours}
                totalHours={totalHours}
                showSteadyState={showSteadyState}
              />
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <MetricCard
                label="Half-life"
                value={formatHours(drug.halfLife)}
                sub={
                  drug.halfLifeRange
                    ? `Range: ${formatHours(drug.halfLifeRange[0])}–${formatHours(drug.halfLifeRange[1])}`
                    : undefined
                }
              />
              <MetricCard
                label="Time to peak"
                value={formatHours(drug.tmax)}
                sub="After single dose"
              />
              <MetricCard
                label="90% eliminated"
                value={formatHours(time90Eliminated)}
                sub="After single dose"
              />
              {dosingIntervalHours > 0 ? (
                <MetricCard
                  label="Steady state"
                  value={formatHours(ssTime)}
                  sub="~5 half-lives"
                />
              ) : (
                <MetricCard
                  label="At 24 hours"
                  value={`${remainingAt24h.toFixed(0)}%`}
                  sub="Remaining in body"
                />
              )}
            </div>

            {/* Insight text */}
            <div className="rounded-xl border border-[var(--rule)] bg-[var(--cream)] px-5 py-4">
              <h3 className="text-sm font-semibold text-[var(--ink)] mb-1">
                What this means
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {dosingIntervalHours === 0 ? (
                  <>
                    After taking a single dose of{" "}
                    <strong className="text-[var(--ink)]">{drug.name}</strong>,
                    the concentration in your body peaks around{" "}
                    <strong className="text-[var(--ink)]">
                      {formatHours(drug.tmax)}
                    </strong>{" "}
                    after ingestion. With a half-life of{" "}
                    <strong className="text-[var(--ink)]">
                      {formatHours(drug.halfLife)}
                    </strong>
                    , half the drug is eliminated every{" "}
                    {formatHours(drug.halfLife)}. By{" "}
                    <strong className="text-[var(--ink)]">
                      {formatHours(time90Elevated(drug))}
                    </strong>
                    , approximately 90% has been cleared. After 24 hours,{" "}
                    <strong className="text-[var(--ink)]">
                      {remainingAt24h.toFixed(0)}%
                    </strong>{" "}
                    of the drug remains in your body.
                  </>
                ) : (
                  <>
                    Taking{" "}
                    <strong className="text-[var(--ink)]">{drug.name}</strong>{" "}
                    {dosingOption.label.toLowerCase()} leads to drug
                    accumulation between doses. With a half-life of{" "}
                    <strong className="text-[var(--ink)]">
                      {formatHours(drug.halfLife)}
                    </strong>
                    , it takes approximately{" "}
                    <strong className="text-[var(--ink)]">
                      {formatHours(ssTime)}
                    </strong>{" "}
                    (about 5 half-lives) to reach steady-state levels — the
                    point at which drug input equals drug elimination and levels
                    remain consistent.
                    {dosingIntervalHours < drug.halfLife && (
                      <span className="block mt-1 text-amber-600 dark:text-amber-400">
                        The dosing interval is shorter than the half-life, so
                        the drug accumulates significantly. Watch the rising
                        trough (minimum) concentration between doses.
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[var(--ink-faint)]">
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2.5 w-5 rounded-sm"
                  style={{ backgroundColor: `${drug.color}55` }}
                />
                Concentration area
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-px w-5 border-t-2 border-dashed border-[var(--ink-faint)]"
                />
                Dose timing
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-px w-5 border-t border-dashed border-[var(--ink-faint)]"
                />
                50% reference
              </span>
              {showSteadyState && dosingIntervalHours > 0 && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-px w-5 border-t-2 border-dashed"
                    style={{ borderColor: drug.color }}
                  />
                  Steady state
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper used in insight text — time until 90% is absorbed+eliminated
function time90Elevated(drug: Drug): number {
  return timeToThreshold(10, drug.halfLife) + drug.tmax;
}
