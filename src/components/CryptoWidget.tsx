import { useState, useEffect, useCallback, forwardRef } from "react";
import { Bitcoin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

const CACHE_KEY = "crypto_cache";
const CACHE_DURATION = 1000 * 60 * 10; // 10 min
const UPDATE_INTERVAL_LABEL = "10 minutos";

const FALLBACK: CryptoData[] = [
  { id: "bitcoin", symbol: "btc", name: "Bitcoin", current_price: 587420, price_change_percentage_24h: 2.3, market_cap: 11500000000000, image: "" },
  { id: "ethereum", symbol: "eth", name: "Ethereum", current_price: 19850, price_change_percentage_24h: 1.8, market_cap: 2400000000000, image: "" },
  { id: "solana", symbol: "sol", name: "Solana", current_price: 1245, price_change_percentage_24h: -0.5, market_cap: 540000000000, image: "" },
  { id: "binancecoin", symbol: "bnb", name: "BNB", current_price: 3890, price_change_percentage_24h: 0.9, market_cap: 580000000000, image: "" },
  { id: "cardano", symbol: "ada", name: "Cardano", current_price: 5.42, price_change_percentage_24h: -1.2, market_cap: 190000000000, image: "" },
  { id: "ripple", symbol: "xrp", name: "XRP", current_price: 14.80, price_change_percentage_24h: 3.1, market_cap: 780000000000, image: "" },
  { id: "chainlink", symbol: "link", name: "Chainlink", current_price: 142, price_change_percentage_24h: 4.1, market_cap: 85000000000, image: "" },
  { id: "polkadot", symbol: "dot", name: "Polkadot", current_price: 48.50, price_change_percentage_24h: -0.8, market_cap: 68000000000, image: "" },
];

const formatBRL = (value: number) => {
  if (value >= 1000) {
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
};

const formatMarketCap = (value: number) => {
  if (value >= 1e12) return `R$ ${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `R$ ${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `R$ ${(value / 1e6).toFixed(1)}M`;
  return `R$ ${value.toLocaleString("pt-BR")}`;
};

interface CryptoWidgetProps {
  compact?: boolean;
}

const CryptoWidget = ({ compact = false }: CryptoWidgetProps) => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchCryptos = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp, fallback } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setCryptos(data);
          setIsFallback(!!fallback);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
          setLoading(false);
          return;
        }
      }
    } catch { /* ignore */ }

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false"
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data: CryptoData[] = await res.json();

      setCryptos(data);
      setIsFallback(false);
      const now = Date.now();
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: now, fallback: false }));
      setLoading(false);
      return;
    } catch (err) {
      console.warn("API Crypto indisponível:", err);
    }

    setCryptos(FALLBACK);
    setIsFallback(true);
    const now = Date.now();
    setLastUpdated(new Date(now).toLocaleString("pt-BR"));
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: FALLBACK, timestamp: now, fallback: true }));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  const displayCryptos = compact ? cryptos.slice(0, 5) : cryptos;

  if (loading && cryptos.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Bitcoin className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Criptomoedas</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: compact ? 5 : 8 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted rounded-xl h-24" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
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
              {crypto.image && (
                <img src={crypto.image} alt={crypto.name} className="w-4 h-4 rounded-full" />
              )}
              <span className="font-bold text-foreground uppercase">{crypto.symbol}</span>
              <span className="text-muted-foreground">R$ {formatBRL(crypto.current_price)}</span>
              <span className={`flex items-center gap-0.5 ${
                crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {crypto.price_change_percentage_24h >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
                {crypto.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid cards */}
      <div className={`grid grid-cols-2 ${compact ? "sm:grid-cols-3 md:grid-cols-5" : "sm:grid-cols-3 md:grid-cols-4"} gap-3`}>
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
                    <img src={crypto.image} alt={crypto.name} className="w-4 h-4 rounded-full" />
                  )}
                  <span className="text-xs font-bold text-foreground uppercase">{crypto.symbol}</span>
                </div>
                {isUp ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
              </div>
              <div className="text-sm font-bold text-foreground">
                R$ {formatBRL(crypto.current_price)}
              </div>
              <div className={`text-xs font-medium ${isUp ? "text-green-500" : "text-red-500"}`}>
                {isUp ? "+" : ""}{crypto.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                Cap: {formatMarketCap(crypto.market_cap)}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações de criptomoedas em reais (BRL) • Atualizado automaticamente a cada {UPDATE_INTERVAL_LABEL} • Fonte: CoinGecko
      </p>
    </div>
  );
};

export default CryptoWidget;
