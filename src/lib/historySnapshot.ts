export const HISTORY_ASSETS = {
  b3: ["PETR4", "VALE3", "ITUB4", "BBDC4", "ABEV3", "WEGE3", "BBAS3", "RENT3", "MGLU3", "SUZB3"],
  crypto: ["BTC", "ETH", "SOL", "BNB", "ADA", "XRP", "LINK", "DOT"],
  currency: ["USD", "EUR", "ARS", "PYG"],
  metal: ["XAU", "XAG"],
} as const;

export interface HistorySnapshot {
  generatedAt: string;
  assets: Record<keyof typeof HISTORY_ASSETS, Record<string, { date: string; price: number }[]>>;
}

export function isHistorySnapshot(value: unknown): value is HistorySnapshot {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<HistorySnapshot>;
  if (typeof candidate.generatedAt !== "string" || !Number.isFinite(Date.parse(candidate.generatedAt))) return false;
  return Object.entries(HISTORY_ASSETS).every(([type, codes]) => codes.every(code => {
    const points = candidate.assets?.[type as keyof typeof HISTORY_ASSETS]?.[code];
    if (!Array.isArray(points) || points.length < (type === "b3" ? 180 : 300)) return false;
    return points.every((point, index) => point && typeof point.date === "string"
      && /^\d{4}-\d{2}-\d{2}$/.test(point.date) && Number.isFinite(Date.parse(point.date + "T12:00:00"))
      && Number.isFinite(point.price) && point.price > 0
      && (index === 0 || point.date > points[index - 1].date));
  }));
}