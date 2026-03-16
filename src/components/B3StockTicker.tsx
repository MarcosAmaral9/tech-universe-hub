import { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig, { AlertAssetOption } from "@/components/PriceAlertConfig";

interface StockQuote {
  symbol: string;
  shortName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  logourl?: string;
}


const FALLBACK_STOCKS: StockQuote[] = [
  { symbol: "PETR4", shortName: "Petrobras PN",        regularMarketPrice: 38.42, regularMarketChangePercent: 1.23 },
  { symbol: "VALE3", shortName: "Vale ON",             regularMarketPrice: 58.91, regularMarketChangePercent: -0.87 },
  { symbol: "ITUB4", shortName: "Itaú Unibanco PN",   regularMarketPrice: 34.15, regularMarketChangePercent: 0.45 },
  { symbol: "BBDC4", shortName: "Bradesco PN",         regularMarketPrice: 14.78, regularMarketChangePercent: -1.12 },
  { symbol: "ABEV3", shortName: "Ambev ON",            regularMarketPrice: 13.25, regularMarketChangePercent: 0.68 },
  { symbol: "WEGE3", shortName: "WEG ON",              regularMarketPrice: 52.30, regularMarketChangePercent: 2.15 },
  { symbol: "BBAS3", shortName: "Banco do Brasil ON",  regularMarketPrice: 28.90, regularMarketChangePercent: 0.33 },
  { symbol: "RENT3", shortName: "Localiza ON",         regularMarketPrice: 41.55, regularMarketChangePercent: -0.56 },
  { symbol: "MGLU3", shortName: "Magazine Luiza ON",   regularMarketPrice: 11.20, regularMarketChangePercent: 3.45 },
  { symbol: "SUZB3", shortName: "Suzano ON",           regularMarketPrice: 55.80, regularMarketChangePercent: -0.22 },
];

const CACHE_KEY = "b3_stock_cache";
// brapi.dev free: 15.000 req/mês. Proxy PHP cacheia 3min = 14.400 req/mês (96% do limite).
const CACHE_DURATION = 1000 * 60 * 3; // 3 min
const UPDATE_INTERVAL_LABEL = "3 minutos";

const B3StockTicker = () => {
  const [stocks, setStocks] = useState<StockQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [cacheExpiresAt, setCacheExpiresAt] = useState<number>(0);
  const [source, setSource] = useState<string>("");

  const fetchStocks = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp, fallback } = JSON.parse(cached);
        const expiresAt = timestamp + CACHE_DURATION;
        // Nunca serve fallback cacheado
        if (!fallback && Date.now() < expiresAt) {
          setStocks(data);
          setIsFallback(!!fallback);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
          setCacheExpiresAt(expiresAt);
          setSource(fallback ? "referência" : "cache");
          setLoading(false);
          return;
        }
      }
    } catch { /* ignore */ }

    setLoading(true);

    try {
      const res = await fetch("/api.php?action=b3", {
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();

      if (data?.results && data.results.length > 0) {
        const quotes: StockQuote[] = data.results.map((r: any) => ({
          symbol: r.symbol,
          shortName: r.shortName || r.longName || r.symbol,
          regularMarketPrice: r.regularMarketPrice,
          regularMarketChangePercent: r.regularMarketChangePercent,
          logourl: r.logourl,
        }));

        setStocks(quotes);
        setIsFallback(false);
        const now = Date.now();
        setLastUpdated(new Date(now).toLocaleString("pt-BR"));
        setCacheExpiresAt(now + CACHE_DURATION);
        setSource("live");
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: quotes, timestamp: now, fallback: false }));
        setLoading(false);
        return;
      }
    } catch (err) {
      console.warn("API B3 indisponível, usando dados de referência:", err);
    }

    setStocks(FALLBACK_STOCKS);
    setIsFallback(true);
    const now = Date.now();
    setLastUpdated(new Date(now).toLocaleString("pt-BR"));
    setCacheExpiresAt(now + CACHE_DURATION);
    setSource("local-static");
    // Não cacheia fallback — próxima visita sempre tentará a API
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  if (loading && stocks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Bolsa de Valores B3</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted rounded-xl h-20" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Bolsa de Valores B3 — Cotações</h3>
        </div>
        {lastUpdated && (
          <span className="text-xs text-muted-foreground hidden sm:inline">
            Atualizado: {lastUpdated}
          </span>
        )}
      </div>

      {isFallback && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 bg-muted/50 rounded-lg px-3 py-2">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span>Exibindo valores de referência. Os preços podem não refletir as cotações em tempo real.</span>
        </div>
      )}

      {/* Scrolling ticker */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-6 whitespace-nowrap">
          {[...stocks, ...stocks].map((stock, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="font-bold text-foreground">{stock.symbol}</span>
              <span className="text-muted-foreground">
                R$ {stock.regularMarketPrice?.toFixed(2)}
              </span>
              <span className={`flex items-center gap-0.5 ${
                stock.regularMarketChangePercent >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {stock.regularMarketChangePercent >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stock.regularMarketChangePercent >= 0 ? "+" : ""}
                {stock.regularMarketChangePercent?.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {stocks.slice(0, 10).map((stock) => (
          <div
            key={stock.symbol}
            className={`rounded-xl border p-3 transition-all hover:scale-[1.02] ${
              stock.regularMarketChangePercent >= 0
                ? "border-green-500/20 bg-green-500/5"
                : "border-red-500/20 bg-red-500/5"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-foreground">{stock.symbol}</span>
              {stock.regularMarketChangePercent >= 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
            </div>
            <div className="text-sm font-bold text-foreground">
              R$ {stock.regularMarketPrice?.toFixed(2)}
            </div>
            <div className={`text-xs font-medium ${
              stock.regularMarketChangePercent >= 0 ? "text-green-500" : "text-red-500"
            }`}>
              {stock.regularMarketChangePercent >= 0 ? "+" : ""}
              {stock.regularMarketChangePercent?.toFixed(2)}%
            </div>
            <div className="text-[10px] text-muted-foreground truncate mt-1">
              {stock.shortName}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações B3 em tempo real (PETR4, VALE3, ITUB4, BBDC4, ABEV3, WEG, BBAS3, RENT3, MGLU3, SUZB3) • Atualizado a cada {UPDATE_INTERVAL_LABEL} • Fonte: brapi.dev
      </p>
      <CacheStatusBar source={source} isFallback={isFallback} cacheExpiresAt={cacheExpiresAt} />
      <PriceAlertConfig
        storageKey="b3_price_alerts"
        assets={stocks.slice(0, 10).map(s => ({
          key: s.symbol,
          label: s.shortName || s.symbol,
          icon: "",
          currentPrice: s.regularMarketPrice,
          unit: "R$",
        }))}
      />
    </div>
  );
};

export default B3StockTicker;
