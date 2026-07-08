import { ReactNode } from "react";
import { LucideIcon, Sparkles } from "lucide-react";

/**
 * Kit visual dos artigos GTA VI (estética neon Vice City).
 * Todos os componentes são puramente apresentacionais (Tailwind + SVG),
 * sem dependência de libs de gráfico, para preservar performance.
 */

/* -------------------------------------------------------------------------- */
/*  Bar chart horizontal — comparação numérica (preços, tempo, memória etc.)  */
/* -------------------------------------------------------------------------- */
export interface GtaBar {
  label: string;
  value: number;
  display?: string;
  highlight?: boolean;
  sub?: string;
}
export interface GtaBarChartProps {
  title?: string;
  subtitle?: string;
  bars: GtaBar[];
  unit?: string;
  accent?: "pink" | "cyan" | "amber" | "violet";
}
const ACCENT: Record<NonNullable<GtaBarChartProps["accent"]>, { from: string; to: string; text: string; ring: string }> = {
  pink:   { from: "from-pink-500",   to: "to-fuchsia-500", text: "text-pink-300",   ring: "ring-pink-500/30" },
  cyan:   { from: "from-cyan-400",   to: "to-sky-500",     text: "text-cyan-300",   ring: "ring-cyan-500/30" },
  amber:  { from: "from-amber-400",  to: "to-orange-500",  text: "text-amber-300",  ring: "ring-amber-500/30" },
  violet: { from: "from-violet-500", to: "to-purple-500",  text: "text-violet-300", ring: "ring-violet-500/30" },
};
export const GtaBarChart = ({ title, subtitle, bars, unit, accent = "pink" }: GtaBarChartProps) => {
  const max = Math.max(...bars.map(b => b.value), 1);
  const s = ACCENT[accent];
  return (
    <figure className={`not-prose my-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black p-5 md:p-6 ring-1 ${s.ring}`}>
      {(title || subtitle) && (
        <figcaption className="mb-4">
          {title && <div className={`font-display text-sm md:text-base font-bold uppercase tracking-[0.12em] ${s.text}`}>{title}</div>}
          {subtitle && <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>}
        </figcaption>
      )}
      <div className="space-y-3">
        {bars.map((b) => {
          const pct = Math.max(4, (b.value / max) * 100);
          return (
            <div key={b.label} className="text-sm">
              <div className="flex justify-between items-baseline mb-1 gap-2">
                <span className={`font-semibold ${b.highlight ? s.text : "text-foreground/90"} truncate`}>{b.label}</span>
                <span className={`font-mono text-xs ${b.highlight ? s.text : "text-muted-foreground"}`}>
                  {b.display ?? `${b.value}${unit ?? ""}`}
                </span>
              </div>
              <div className="relative h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.from} ${s.to} ${b.highlight ? "shadow-[0_0_16px_currentColor]" : "opacity-80"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {b.sub && <div className="text-[11px] text-muted-foreground mt-1">{b.sub}</div>}
            </div>
          );
        })}
      </div>
    </figure>
  );
};

/* -------------------------------------------------------------------------- */
/*  Stat grid — números-chave em cards com gradiente                          */
/* -------------------------------------------------------------------------- */
export interface GtaStat {
  label: string;
  value: string;
  hint?: string;
  icon?: LucideIcon;
  accent?: "pink" | "cyan" | "amber" | "violet" | "emerald";
}
const STAT_ACCENT: Record<NonNullable<GtaStat["accent"]>, string> = {
  pink:    "from-pink-500/20 to-fuchsia-500/5 border-pink-500/30 text-pink-200",
  cyan:    "from-cyan-500/20 to-sky-500/5 border-cyan-500/30 text-cyan-200",
  amber:   "from-amber-500/20 to-orange-500/5 border-amber-500/30 text-amber-200",
  violet:  "from-violet-500/20 to-purple-500/5 border-violet-500/30 text-violet-200",
  emerald: "from-emerald-500/20 to-teal-500/5 border-emerald-500/30 text-emerald-200",
};
export const GtaStatGrid = ({ stats }: { stats: GtaStat[] }) => (
  <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-3">
    {stats.map((s) => {
      const Icon = s.icon;
      const cls = STAT_ACCENT[s.accent ?? "pink"];
      return (
        <div key={s.label} className={`relative rounded-xl border bg-gradient-to-br ${cls} p-4 overflow-hidden`}>
          {Icon && <Icon className="absolute top-2 right-2 h-4 w-4 opacity-40" />}
          <div className="text-[11px] uppercase tracking-wider opacity-80 font-semibold">{s.label}</div>
          <div className="font-display text-2xl md:text-3xl font-bold mt-1 leading-none">{s.value}</div>
          {s.hint && <div className="text-[11px] mt-2 text-foreground/70">{s.hint}</div>}
        </div>
      );
    })}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Timeline vertical — datas / marcos                                        */
/* -------------------------------------------------------------------------- */
export interface GtaEvent {
  date: string;
  title: string;
  desc?: string;
  done?: boolean;
  highlight?: boolean;
}
export const GtaTimeline = ({ events, title }: { events: GtaEvent[]; title?: string }) => (
  <div className="not-prose my-8 rounded-2xl border border-pink-500/20 bg-gradient-to-b from-slate-950 to-black p-5 md:p-6">
    {title && (
      <div className="font-display text-sm font-bold uppercase tracking-[0.12em] text-pink-300 mb-5 flex items-center gap-2">
        <Sparkles className="h-4 w-4" /> {title}
      </div>
    )}
    <ol className="relative border-l-2 border-pink-500/30 ml-3 space-y-6">
      {events.map((e) => (
        <li key={e.date + e.title} className="pl-6 relative">
          <span
            className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
              e.highlight
                ? "bg-pink-500 border-pink-300 shadow-[0_0_12px] shadow-pink-500"
                : e.done
                ? "bg-emerald-500 border-emerald-300"
                : "bg-slate-800 border-pink-500/60"
            }`}
          />
          <div className={`text-xs font-mono uppercase tracking-wider ${e.highlight ? "text-pink-300" : "text-muted-foreground"}`}>{e.date}</div>
          <div className={`font-semibold ${e.highlight ? "text-pink-200" : "text-foreground"}`}>{e.title}</div>
          {e.desc && <div className="text-sm text-muted-foreground mt-1">{e.desc}</div>}
        </li>
      ))}
    </ol>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Feature grid — cards coloridos com ícone                                  */
/* -------------------------------------------------------------------------- */
export interface GtaFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: "pink" | "cyan" | "amber" | "violet" | "emerald";
}
const FEAT_ACCENT: Record<NonNullable<GtaFeature["accent"]>, string> = {
  pink:    "from-pink-600/25 via-fuchsia-700/10 to-transparent border-pink-500/30 text-pink-300",
  cyan:    "from-cyan-600/25 via-sky-700/10 to-transparent border-cyan-500/30 text-cyan-300",
  amber:   "from-amber-600/25 via-orange-700/10 to-transparent border-amber-500/30 text-amber-300",
  violet:  "from-violet-600/25 via-purple-700/10 to-transparent border-violet-500/30 text-violet-300",
  emerald: "from-emerald-600/25 via-teal-700/10 to-transparent border-emerald-500/30 text-emerald-300",
};
export const GtaFeatureGrid = ({ features }: { features: GtaFeature[] }) => (
  <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    {features.map((f) => {
      const Icon = f.icon;
      const cls = FEAT_ACCENT[f.accent ?? "pink"];
      return (
        <div key={f.title} className={`rounded-xl border bg-gradient-to-br ${cls} p-5 backdrop-blur-sm`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-base md:text-lg m-0 text-foreground">{f.title}</h3>
          </div>
          <p className="text-sm text-foreground/80 m-0 leading-relaxed">{f.desc}</p>
        </div>
      );
    })}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Hype meter — velocímetro semicircular                                     */
/* -------------------------------------------------------------------------- */
export const GtaHypeMeter = ({ value, label, caption }: { value: number; label: string; caption?: string }) => {
  const clamped = Math.min(100, Math.max(0, value));
  const angle = -90 + (clamped / 100) * 180; // -90 → 90
  return (
    <div className="not-prose my-8 rounded-2xl border border-pink-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 flex flex-col items-center">
      <div className="text-xs font-display font-bold uppercase tracking-[0.18em] text-pink-300">{label}</div>
      <svg viewBox="0 0 200 120" className="w-full max-w-sm mt-3">
        <defs>
          <linearGradient id="hypegrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#hypegrad)" strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${(clamped / 100) * 251} 251`} />
        <g transform={`rotate(${angle} 100 100)`}>
          <line x1="100" y1="100" x2="100" y2="30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6" fill="#ec4899" />
        </g>
      </svg>
      <div className="font-display text-5xl font-bold text-pink-300 -mt-2">{clamped}<span className="text-lg text-muted-foreground">/100</span></div>
      {caption && <div className="text-xs text-muted-foreground text-center mt-2 max-w-xs">{caption}</div>}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Callout — box colorido de destaque (variantes)                            */
/* -------------------------------------------------------------------------- */
export interface GtaCalloutProps {
  variant?: "info" | "warn" | "success" | "tip" | "neon";
  icon?: LucideIcon;
  title?: string;
  children: ReactNode;
}
const CALL_STYLES: Record<NonNullable<GtaCalloutProps["variant"]>, string> = {
  info:    "border-cyan-500/40 bg-cyan-500/10 text-cyan-200",
  warn:    "border-amber-500/40 bg-amber-500/10 text-amber-200",
  success: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  tip:     "border-violet-500/40 bg-violet-500/10 text-violet-200",
  neon:    "border-pink-500/40 bg-gradient-to-br from-pink-500/15 via-fuchsia-500/10 to-cyan-500/10 text-pink-200",
};
export const GtaCallout = ({ variant = "neon", icon: Icon, title, children }: GtaCalloutProps) => (
  <aside className={`not-prose my-6 rounded-xl border p-5 ${CALL_STYLES[variant]}`}>
    {(Icon || title) && (
      <div className="flex items-center gap-2 mb-2 font-bold">
        {Icon && <Icon className="h-5 w-5" />}
        {title && <span className="font-display uppercase tracking-wider text-sm">{title}</span>}
      </div>
    )}
    <div className="text-sm leading-relaxed text-foreground/90">{children}</div>
  </aside>
);

/* -------------------------------------------------------------------------- */
/*  Divider neon — separador visual                                            */
/* -------------------------------------------------------------------------- */
export const GtaNeonDivider = () => (
  <div className="not-prose my-10 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_12px] shadow-pink-500/60" />
);
