import { useMarketData } from "@/hooks/useMarketData";
import { useAuthContext } from "@/contexts/AuthContext";
import { useFavoriteAssets } from "@/hooks/useFavoriteAssets";
import FavoriteButton from "@/components/FavoriteButton";
import { TrendingUp, TrendingDown, AlertTriangle, RefreshCw } from "lucide-react";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig from "@/components/PriceAlertConfig";

const B3_ICONS: Record<string, string> = {
  PETR4:"🛢️", VALE3:"⛏️", ITUB4:"🏦", BBDC4:"🏦", ABEV3:"🍺",
  WEGE3:"⚙️", BBAS3:"🏦", RENT3:"🚗", MGLU3:"🛒", SUZB3:"🌲",
};

const B3StockTicker = () => {
  const { data, loading, isFallback, lastUpdated, refresh } = useMarketData();
  const { user } = useAuthContext();
  const { isFavorite, toggleFavorite } = useFavoriteAssets(user?.id ?? null);
  const stocks = data?.b3 ?? [];
  const TTL_MS = 3 * 60 * 1000;

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

  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Bolsa de Valores B3 — Cotações</h3>
        </div>
        <div className="flex items-center gap-3">
          {loading && <RefreshCw className="h-3.5 w-3.5 text-muted-foreground animate-spin" />}
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
          <span>API indisponível — exibindo última cotação conhecida ou valor de referência.</span>
        </div>
      )}

      {/* Scrolling ticker */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-6 whitespace-nowrap">
          {[...stocks, ...stocks].map((stock, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-sm">{B3_ICONS[stock.symbol] ?? "📊"}</span>
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
              <span className="text-xs font-bold text-foreground">{B3_ICONS[stock.symbol] ?? "📊"} {stock.symbol}</span>
              <div className="flex items-center gap-0.5">
                <FavoriteButton assetKey={stock.symbol} assetLabel={stock.symbol} assetCategory="b3" assetIcon={B3_ICONS[stock.symbol] ?? "📊"} isFavorite={isFavorite(stock.symbol)} onToggle={toggleFavorite} />
                {stock.regularMarketChangePercent >= 0
                  ? <TrendingUp className="h-3 w-3 text-green-500" />
                  : <TrendingDown className="h-3 w-3 text-red-500" />}
              </div>
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
        PETR4 • VALE3 • ITUB4 • BBDC4 • ABEV3 • WEGE3 — atualiza automaticamente • Fonte: brapi.dev / Yahoo Finance
      </p>
      <CacheStatusBar
        source={isFallback ? "local-static" : "live"}
        isFallback={isFallback}
        cacheExpiresAt={Date.now() + TTL_MS}
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
