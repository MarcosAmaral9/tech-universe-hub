import { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface StockQuote {
  symbol: string;
  shortName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  logourl?: string;
}

const POPULAR_B3_STOCKS = [
  "PETR4", "VALE3", "ITUB4", "BBDC4", "ABEV3",
  "WEGE3", "BBAS3", "RENT3", "MGLU3", "SUZB3",
  "GGBR4", "HAPV3", "RADL3", "RAIL3", "JBSS3"
];

const CACHE_KEY = "b3_stock_cache";
const CACHE_DURATION = 1000 * 60 * 30; // 30 min cache

const B3StockTicker = () => {
  const [stocks, setStocks] = useState<StockQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchStocks = useCallback(async (force = false) => {
    // Check cache first
    if (!force) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setStocks(data);
            setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
            setLoading(false);
            return;
          }
        }
      } catch { /* ignore cache errors */ }
    }

    setLoading(true);
    setError(null);

    try {
      const tickers = POPULAR_B3_STOCKS.join(",");
      const response = await fetch(
        `https://brapi.dev/api/quote/${tickers}?fundamental=false`
      );

      if (!response.ok) {
        throw new Error(`API retornou status ${response.status}`);
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const quotes: StockQuote[] = data.results.map((r: any) => ({
          symbol: r.symbol,
          shortName: r.shortName || r.longName || r.symbol,
          regularMarketPrice: r.regularMarketPrice,
          regularMarketChangePercent: r.regularMarketChangePercent,
          logourl: r.logourl,
        }));

        setStocks(quotes);
        const now = Date.now();
        setLastUpdated(new Date(now).toLocaleString("pt-BR"));

        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: quotes,
          timestamp: now,
        }));
      }
    } catch (err) {
      console.error("Erro ao buscar cotações B3:", err);
      setError("Não foi possível carregar as cotações. Tente novamente.");
      // Try to use cached data even if expired
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          setStocks(data);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR") + " (cache)");
        }
      } catch { /* ignore */ }
    } finally {
      setLoading(false);
    }
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
        <div className="flex items-center gap-3">
          {lastUpdated && (
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Atualizado: {lastUpdated}
            </span>
          )}
          <button
            onClick={() => fetchStocks(true)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            title="Atualizar cotações"
          >
            <RefreshCw className={`h-4 w-4 text-muted-foreground ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {error && (
        <p className="text-xs text-destructive mb-3">{error}</p>
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
        Dados fornecidos pela brapi.dev • Apenas ações da B3 (Bolsa de Valores Brasileira)
      </p>
    </div>
  );
};

export default B3StockTicker;
