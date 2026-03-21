import { useState, useEffect, useCallback, useRef } from "react";
import { TrendingUp, TrendingDown, AlertTriangle, RefreshCw } from "lucide-react";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig from "@/components/PriceAlertConfig";

interface StockQuote {
  symbol: string;
  shortName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  logourl?: string;
}

const FALLBACK_STOCKS: StockQuote[] = [
  { symbol: "PETR4", shortName: "Petrobras PN",       regularMarketPrice: 45.74, regularMarketChangePercent: 0.50  },
  { symbol: "VALE3", shortName: "Vale ON",             regularMarketPrice: 56.20, regularMarketChangePercent: -0.30 },
  { symbol: "ITUB4", shortName: "Itaú Unibanco PN",   regularMarketPrice: 38.50, regularMarketChangePercent: 0.25  },
  { symbol: "BBDC4", shortName: "Bradesco PN",         regularMarketPrice: 16.90, regularMarketChangePercent: -0.60 },
  { symbol: "ABEV3", shortName: "Ambev ON",            regularMarketPrice: 11.80, regularMarketChangePercent: 0.17  },
  { symbol: "WEGE3", shortName: "WEG ON",              regularMarketPrice: 48.10, regularMarketChangePercent: 0.85  },
  { symbol: "BBAS3", shortName: "Banco do Brasil ON",  regularMarketPrice: 27.40, regularMarketChangePercent: -0.14 },
  { symbol: "RENT3", shortName: "Localiza ON",         regularMarketPrice: 35.60, regularMarketChangePercent: -0.55 },
  { symbol: "MGLU3", shortName: "Magazine Luiza ON",   regularMarketPrice: 9.85,  regularMarketChangePercent: 1.23  },
  { symbol: "SUZB3", shortName: "Suzano ON",           regularMarketPrice: 48.30, regularMarketChangePercent: -0.41 },
];

// Sem localStorage — o banco MySQL é a única fonte de verdade
// O PHP gerencia o TTL e serve os mesmos dados para todos os usuários
const REFRESH_MS = 1000 * 60 * 15; // re-busca a cada 15 min (igual ao TTL do servidor)

const B3StockTicker = () => {
  const [stocks, setStocks]           = useState<StockQuote[]>([]);
  const [loading, setLoading]         = useState(true);
  const [refreshing, setRefreshing]   = useState(false);
  const [isFallback, setIsFallback]   = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [updatedAt, setUpdatedAt]     = useState<string>("");
  const [expiresAt, setExpiresAt]     = useState<number>(0);
  const fetchingRef                   = useRef(false);

  const fetchStocks = useCallback(async (silent = false) => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    if (silent) setRefreshing(true);

    try {
      const res = await fetch("/api.php?action=b3", {
        headers: { "Cache-Control": "no-store" },
        signal: AbortSignal.timeout(12000),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();

      if (data?.results?.length > 0) {
        const quotes: StockQuote[] = data.results.map((r: any) => ({
          symbol:                    r.symbol,
          shortName:                 r.shortName || r.longName || r.symbol,
          regularMarketPrice:        r.regularMarketPrice,
          regularMarketChangePercent: r.regularMarketChangePercent,
          logourl:                   r.logourl,
        }));

        setStocks(quotes);
        setIsFallback(false);
        setLoading(false);

        // Mostra o horário em que o servidor buscou os dados (não o horário local)
        const serverTime = data._meta?.updatedAt
          ? new Date(data._meta.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
          : new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        setLastUpdated(serverTime);
        setUpdatedAt(data._meta?.updatedAt || new Date().toISOString());
        // expiresAt do servidor — mesmo valor para todos os usuários
        if (data._meta?.expiresAt) {
          setExpiresAt(new Date(data._meta.expiresAt).getTime());
        } else {
          setExpiresAt(Date.now() + REFRESH_MS);
        }
        return;
      }
    } catch { /* continua para fallback */ }

    // Só usa fallback na carga inicial sem dados
    if (!silent && stocks.length === 0) {
      setStocks(FALLBACK_STOCKS);
      setIsFallback(true);
      setLastUpdated("—");
    }
    if (!silent) setLoading(false);
  }, [stocks.length]);

  // Carga inicial — mantém skeleton até ter dados ou confirmação de erro
  useEffect(() => {
    fetchStocks(false).finally(() => {
      fetchingRef.current = false;
      setRefreshing(false);
      // setLoading(false) já é chamado dentro de fetchStocks
    });
  }, []); // eslint-disable-line

  // Re-busca automática a cada 15 min + ao voltar à aba
  useEffect(() => {
    const iv = setInterval(() => {
      if (!document.hidden) {
        fetchingRef.current = false;
        fetchStocks(true).finally(() => {
          fetchingRef.current = false;
          setRefreshing(false);
        });
      }
    }, REFRESH_MS);

    const onVisible = () => {
      if (!document.hidden) {
        fetchingRef.current = false;
        fetchStocks(true).finally(() => {
          fetchingRef.current = false;
          setRefreshing(false);
        });
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => { clearInterval(iv); document.removeEventListener("visibilitychange", onVisible); };
  }, [fetchStocks]);

  // Skeleton
  if (loading && stocks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Bolsa de Valores B3</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted rounded-xl h-20" />
          ))}
        </div>
      </div>
    );
  }

  // expiresAt vem do servidor — igual para todos os usuários

  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Bolsa de Valores B3 — Cotações</h3>
        </div>
        <div className="flex items-center gap-3">
          {refreshing && <RefreshCw className="h-3.5 w-3.5 text-muted-foreground animate-spin" />}
          {lastUpdated && lastUpdated !== "—" && (
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Dados de: {lastUpdated}
            </span>
          )}
        </div>
      </div>

      {isFallback && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 bg-muted/50 rounded-lg px-3 py-2">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span>Exibindo valores de referência. Tentando reconectar...</span>
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
                {stock.regularMarketChangePercent >= 0
                  ? <TrendingUp className="h-3 w-3" />
                  : <TrendingDown className="h-3 w-3" />}
                {stock.regularMarketChangePercent >= 0 ? "+" : ""}
                {stock.regularMarketChangePercent?.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
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
              {stock.regularMarketChangePercent >= 0
                ? <TrendingUp className="h-3 w-3 text-green-500" />
                : <TrendingDown className="h-3 w-3 text-red-500" />}
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
        PETR4 • VALE3 • ITUB4 • BBDC4 • ABEV3 • WEGE3 • BBAS3 • RENT3 • MGLU3 • SUZB3 — atualiza a cada 15 min • Fonte: brapi.dev
      </p>
      <CacheStatusBar
        source={isFallback ? "local-static" : "live"}
        isFallback={isFallback}
        cacheExpiresAt={expiresAt || Date.now() + REFRESH_MS}
      />
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
