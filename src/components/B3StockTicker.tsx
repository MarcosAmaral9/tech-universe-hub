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

const CACHE_KEY       = "b3_stock_cache_v3";
const CACHE_DURATION  = 1000 * 60 * 3;   // 3 min — TTL do cache PHP no servidor
const REFRESH_INTERVAL = 1000 * 60 * 3;  // re-busca a cada 3 min enquanto na página

const B3StockTicker = () => {
  const [stocks, setStocks]           = useState<StockQuote[]>([]);
  const [loading, setLoading]         = useState(true);
  const [refreshing, setRefreshing]   = useState(false); // atualização silenciosa
  const [isFallback, setIsFallback]   = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [cacheExpiresAt, setCacheExpiresAt] = useState(0);
  const [source, setSource]           = useState("");
  const fetchingRef                   = useRef(false);

  // Busca dados da API — sempre vai à rede, sem early-return por cache
  const fetchFromAPI = useCallback(async (): Promise<StockQuote[] | null> => {
    try {
      const res = await fetch("/api.php?action=b3", {
        signal: AbortSignal.timeout(10000),
        // Cache-Control: no-store garante que o browser não serve resposta cacheada
        headers: { "Cache-Control": "no-store" },
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (!data?.results?.length) throw new Error("sem dados");

      return data.results.map((r: any) => ({
        symbol:                    r.symbol,
        shortName:                 r.shortName || r.longName || r.symbol,
        regularMarketPrice:        r.regularMarketPrice,
        regularMarketChangePercent: r.regularMarketChangePercent,
        logourl:                   r.logourl,
      }));
    } catch {
      return null;
    }
  }, []);

  // Aplica os dados frescos na UI e salva no cache
  const applyFresh = useCallback((quotes: StockQuote[]) => {
    const now      = Date.now();
    const expiresAt = now + CACHE_DURATION;
    setStocks(quotes);
    setIsFallback(false);
    setLastUpdated(new Date(now).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    setCacheExpiresAt(expiresAt);
    setSource("live");
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: quotes, timestamp: now, fallback: false, expiresAt }));
  }, []);

  // Carregamento inicial: mostra cache imediatamente + busca em background sempre
  const initialLoad = useCallback(async () => {
    // 1. Tenta carregar cache para exibição imediata (evita tela em branco)
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const { data, timestamp, fallback, expiresAt } = JSON.parse(raw);
        if (!fallback && data?.length) {
          setStocks(data);
          setIsFallback(false);
          setLastUpdated(new Date(timestamp).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
          setCacheExpiresAt(expiresAt || timestamp + CACHE_DURATION);
          setSource("cache");
          setLoading(false);
          // Não retorna aqui — continua para buscar dados frescos em background
        }
      }
    } catch { /* ignore */ }

    // 2. Busca dados frescos SEMPRE — independente do cache
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    setRefreshing(true);

    const quotes = await fetchFromAPI();
    fetchingRef.current = false;
    setRefreshing(false);

    if (quotes) {
      applyFresh(quotes);
    } else if (stocks.length === 0) {
      // Só usa fallback se não tiver nenhum dado para mostrar
      setStocks(FALLBACK_STOCKS);
      setIsFallback(true);
      setLastUpdated("—");
      setCacheExpiresAt(Date.now() + CACHE_DURATION);
      setSource("local-static");
    }

    setLoading(false);
  }, [fetchFromAPI, applyFresh, stocks.length]);

  // Atualização periódica enquanto o usuário está na página
  const silentRefresh = useCallback(async () => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    setRefreshing(true);
    const quotes = await fetchFromAPI();
    fetchingRef.current = false;
    setRefreshing(false);
    if (quotes) applyFresh(quotes);
  }, [fetchFromAPI, applyFresh]);

  useEffect(() => {
    initialLoad();
  }, []);// eslint-disable-line

  // Re-busca a cada 3 minutos enquanto a aba está ativa
  useEffect(() => {
    const iv = setInterval(() => {
      if (!document.hidden) silentRefresh();
    }, REFRESH_INTERVAL);
    // Também re-busca quando o usuário volta para a aba
    const onVisible = () => { if (!document.hidden) silentRefresh(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => { clearInterval(iv); document.removeEventListener("visibilitychange", onVisible); };
  }, [silentRefresh]);

  // ── Skeleton enquanto não tem dados ainda ──────────────────────────────────
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
          {refreshing && (
            <RefreshCw className="h-3.5 w-3.5 text-muted-foreground animate-spin" />
          )}
          {lastUpdated && lastUpdated !== "—" && (
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Atualizado: {lastUpdated}
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
        PETR4 • VALE3 • ITUB4 • BBDC4 • ABEV3 • WEGE3 • BBAS3 • RENT3 • MGLU3 • SUZB3 — atualiza a cada 3 min • Fonte: brapi.dev
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
