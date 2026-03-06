import { useState, useEffect, useCallback } from "react";
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface CurrencyRate {
  code: string;
  name: string;
  bid: string;
  pctChange: string;
  high: string;
  low: string;
}

const CACHE_KEY = "currency_cache";
const CACHE_DURATION = 1000 * 60 * 15; // 15 min
const UPDATE_INTERVAL_LABEL = "15 minutos";

const FALLBACK: CurrencyRate[] = [
  { code: "USD", name: "Dólar Americano", bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  { code: "EUR", name: "Euro", bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
];

const CurrencyWidget = () => {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchRates = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp, fallback } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setRates(data);
          setIsFallback(!!fallback);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
          setLoading(false);
          return;
        }
      }
    } catch { /* ignore */ }

    setLoading(true);

    try {
      const res = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL");
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();

      const parsed: CurrencyRate[] = [
        {
          code: "USD",
          name: "Dólar Americano",
          bid: parseFloat(data.USDBRL.bid).toFixed(2),
          pctChange: data.USDBRL.pctChange,
          high: parseFloat(data.USDBRL.high).toFixed(2),
          low: parseFloat(data.USDBRL.low).toFixed(2),
        },
        {
          code: "EUR",
          name: "Euro",
          bid: parseFloat(data.EURBRL.bid).toFixed(2),
          pctChange: data.EURBRL.pctChange,
          high: parseFloat(data.EURBRL.high).toFixed(2),
          low: parseFloat(data.EURBRL.low).toFixed(2),
        },
      ];

      setRates(parsed);
      setIsFallback(false);
      const now = Date.now();
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: parsed, timestamp: now, fallback: false }));
      setLoading(false);
      return;
    } catch (err) {
      console.warn("API câmbio indisponível:", err);
    }

    setRates(FALLBACK);
    setIsFallback(true);
    const now = Date.now();
    setLastUpdated(new Date(now).toLocaleString("pt-BR"));
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: FALLBACK, timestamp: now, fallback: true }));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  if (loading && rates.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Câmbio</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1].map(i => <div key={i} className="animate-pulse bg-muted rounded-xl h-24" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Câmbio — Dólar e Euro</h3>
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
          <span>Exibindo valores de referência.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rates.map((rate) => {
          const change = parseFloat(rate.pctChange);
          const isUp = change >= 0;
          return (
            <div
              key={rate.code}
              className={`rounded-xl border p-4 transition-all hover:scale-[1.02] ${
                isUp ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-foreground">{rate.code}/BRL</span>
                {isUp ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">R$ {rate.bid}</div>
              <div className={`text-sm font-medium ${isUp ? "text-green-500" : "text-red-500"}`}>
                {isUp ? "+" : ""}{rate.pctChange}%
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                <span>Mín: R$ {rate.low}</span>
                <span>Máx: R$ {rate.high}</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">{rate.name}</div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações do dólar e euro em relação ao real • Atualizado automaticamente a cada {UPDATE_INTERVAL_LABEL} • Fonte: AwesomeAPI
      </p>
    </div>
  );
};

export default CurrencyWidget;
