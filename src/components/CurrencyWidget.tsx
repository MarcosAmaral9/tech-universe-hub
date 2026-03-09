import { DollarSign, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig from "@/components/PriceAlertConfig";

interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  bid: string;
  pctChange: string;
  high: string;
  low: string;
  sparkline?: number[];
}

const FALLBACK: CurrencyRate[] = [
  { code: "USD", name: "Dólar Americano", flag: "🇺🇸", bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
  { code: "ARS", name: "Peso Argentino", flag: "🇦🇷", bid: "0.0048", pctChange: "0.10", high: "0.0049", low: "0.0047" },
  { code: "PYG", name: "Guarani Paraguaio", flag: "🇵🇾", bid: "0.00076", pctChange: "-0.05", high: "0.00078", low: "0.00074" },
];

// Simple SVG sparkline component
const Sparkline = ({ data, isUp }: { data: number[]; isUp: boolean }) => {
  if (data.length < 2) return null;
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const height = 24;
  const width = 60;
  const padding = 2;
  
  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(" ");
  
  return (
    <svg width={width} height={height} className="shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={isUp ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CurrencyWidget = () => {
  const { data, loading, isFallback, lastUpdated, cacheExpiresAt, source } = useExchangeRates();

  const rates: CurrencyRate[] = [];
  
  const currencyMap = [
    { key: "USDBRL" as const, code: "USD", name: "Dólar Americano", flag: "🇺🇸" },
    { key: "EURBRL" as const, code: "EUR", name: "Euro", flag: "🇪🇺" },
    { key: "ARSBRL" as const, code: "ARS", name: "Peso Argentino", flag: "🇦🇷" },
    { key: "PYGBRL" as const, code: "PYG", name: "Guarani Paraguaio", flag: "🇵🇾" },
  ];

  for (const c of currencyMap) {
    const d = data?.[c.key];
    if (d) {
      rates.push({
        code: c.code,
        name: c.name,
        flag: c.flag,
        bid: d.bid,
        pctChange: d.pctChange,
        high: d.high,
        low: d.low,
        sparkline: data?.sparklines?.[c.key as keyof NonNullable<typeof data.sparklines>],
      });
    }
  }

  const displayRates = rates.length > 0 ? rates : (isFallback ? FALLBACK : []);

  if (loading && displayRates.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Câmbio</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[0, 1, 2, 3].map(i => <div key={i} className="animate-pulse bg-muted rounded-xl h-28" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Câmbio — Moedas em Real</h3>
        </div>
        {lastUpdated && (
          <span className="text-xs text-muted-foreground hidden sm:inline">
            Atualizado: {lastUpdated}
          </span>
        )}
      </div>

      {isFallback && displayRates === FALLBACK && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 bg-muted/50 rounded-lg px-3 py-2">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span>Exibindo valores de referência.</span>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {displayRates.map((rate) => {
          const change = parseFloat(rate.pctChange);
          const isUp = change >= 0;
          const bidNum = parseFloat(rate.bid);
          const formattedBid = bidNum >= 1 ? `R$ ${bidNum.toFixed(2)}` : `R$ ${rate.bid}`;
          const formattedHigh = parseFloat(rate.high) >= 1 ? `R$ ${parseFloat(rate.high).toFixed(2)}` : `R$ ${rate.high}`;
          const formattedLow = parseFloat(rate.low) >= 1 ? `R$ ${parseFloat(rate.low).toFixed(2)}` : `R$ ${rate.low}`;
          
          return (
            <div
              key={rate.code}
              className={`rounded-xl border p-4 transition-all hover:scale-[1.02] ${
                isUp ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <span className="text-base">{rate.flag}</span>
                  {rate.code}/BRL
                </span>
                {isUp ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
              
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="text-xl sm:text-2xl font-bold text-foreground">{formattedBid}</div>
                {rate.sparkline && rate.sparkline.length >= 2 && (
                  <Sparkline data={rate.sparkline} isUp={isUp} />
                )}
              </div>
              
              <div className={`text-sm font-medium ${isUp ? "text-green-500" : "text-red-500"}`}>
                {isUp ? "+" : ""}{rate.pctChange}%
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                <span>Mín: {formattedLow}</span>
                <span>Máx: {formattedHigh}</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">{rate.name}</div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações em relação ao real • Fontes: Frankfurter (ECB) &amp; AwesomeAPI
      </p>
      <CacheStatusBar source={source} isFallback={isFallback} cacheExpiresAt={cacheExpiresAt} />
    </div>
  );
};

export default CurrencyWidget;
