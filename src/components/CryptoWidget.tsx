import { forwardRef } from "react";
import { useMarketData } from "@/hooks/useMarketData";
import { Bitcoin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig from "@/components/PriceAlertConfig";
import { useAuthContext } from "@/contexts/AuthContext";
import { useFavoriteAssets } from "@/hooks/useFavoriteAssets";
import FavoriteButton from "@/components/FavoriteButton";

const CRYPTO_ICONS: Record<string, string> = {
  btc:"₿", eth:"⟠", sol:"◎", bnb:"🟡",
  ada:"🔵", xrp:"💧", link:"🔗", dot:"⬤",
};

const formatBRL = (value: number) => {
  if (value >= 1000)
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
};

const formatMarketCap = (value: number) => {
  if (value >= 1e12) return `R$ ${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9)  return `R$ ${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6)  return `R$ ${(value / 1e6).toFixed(1)}M`;
  return `R$ ${value.toLocaleString("pt-BR")}`;
};

interface CryptoWidgetProps { compact?: boolean }

const CryptoWidget = forwardRef<HTMLDivElement, CryptoWidgetProps>(({ compact = false }, ref) => {
  const { data, loading, isFallback, lastUpdated, expiresAt } = useMarketData();
  const { user } = useAuthContext();
  const { isFavorite, toggleFavorite } = useFavoriteAssets(user?.id ?? null);
  const cryptos = data?.crypto ?? [];
  const displayCryptos = compact ? cryptos.slice(0, 5) : cryptos;

  if (loading && cryptos.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Bitcoin className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Criptomoedas</h3>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: compact ? 5 : 8 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted rounded-xl h-24" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Criptomoedas — Cotações em BRL</h3>
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
        <div className="flex animate-[scroll_25s_linear_infinite] gap-6 whitespace-nowrap">
          {[...displayCryptos, ...displayCryptos].map((crypto, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              {crypto.image ? (
                <img src={crypto.image} width="24" height="24" alt={crypto.name} className="w-5 h-5 rounded-full flex-shrink-0" />
              ) : (
                <span className="text-sm">{CRYPTO_ICONS[crypto.symbol] ?? "🪙"}</span>
              )}
              <span className="font-bold text-foreground uppercase">{crypto.symbol}</span>
              <span className="text-muted-foreground">R$ {formatBRL(crypto.current_price)}</span>
              <span className={`flex items-center gap-0.5 ${
                crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {crypto.price_change_percentage_24h >= 0
                  ? <TrendingUp className="h-3 w-3" />
                  : <TrendingDown className="h-3 w-3" />}
                {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
                {crypto.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid cards */}
      <div className={`grid grid-cols-2 ${compact ? "sm:grid-cols-3 md:grid-cols-5" : "sm:grid-cols-2 md:grid-cols-4"} gap-3`}>
        {displayCryptos.map((crypto) => {
          const isUp = crypto.price_change_percentage_24h >= 0;
          return (
            <div
              key={crypto.id}
              className={`rounded-xl border p-3 transition-all hover:scale-[1.02] ${
                isUp ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  {crypto.image && (
                    <img src={crypto.image} width="24" height="24" alt={crypto.name} className="w-5 h-5 rounded-full flex-shrink-0" />
                  )}
                  <span className="text-xs font-bold text-foreground uppercase">{CRYPTO_ICONS[crypto.symbol] ?? "🪙"} {crypto.symbol}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <FavoriteButton assetKey={crypto.symbol} assetLabel={`${crypto.name} (${crypto.symbol.toUpperCase()})`} assetCategory="cripto" assetIcon={CRYPTO_ICONS[crypto.symbol] ?? "🪙"} isFavorite={isFavorite(crypto.symbol)} onToggle={toggleFavorite} />
                  {isUp ? <TrendingUp className="h-3 w-3 text-green-500" /> : <TrendingDown className="h-3 w-3 text-red-500" />}
                </div>
              </div>
              <div className="text-sm font-bold text-foreground">R$ {formatBRL(crypto.current_price)}</div>
              <div className={`text-xs font-medium ${isUp ? "text-green-500" : "text-red-500"}`}>
                {isUp ? "+" : ""}{crypto.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                Cap: {formatMarketCap(crypto.market_cap ?? 0)}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações de criptomoedas em reais (BRL) • Atualizado automaticamente a cada 3 minutos • Fonte: CoinGecko
      </p>
      <CacheStatusBar
        source={isFallback ? "local-static" : "live"}
        isFallback={isFallback}
        cacheExpiresAt={expiresAt}
      />
      <PriceAlertConfig
        storageKey="crypto_price_alerts"
        assets={displayCryptos.map(c => ({
          key: c.symbol, label: c.name, icon: "",
          currentPrice: c.current_price, unit: "R$",
        }))}
      />
    </div>
  );
});

CryptoWidget.displayName = "CryptoWidget";
export default CryptoWidget;
