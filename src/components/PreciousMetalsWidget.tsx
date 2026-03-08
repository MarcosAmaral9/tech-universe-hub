import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { TrendingUp, TrendingDown, AlertTriangle, Gem } from "lucide-react";

interface MetalRate {
  code: string;
  name: string;
  bidPerGram: number;
  pctChange: string;
  highPerGram: number;
  lowPerGram: number;
}

const TROY_OZ_TO_GRAMS = 31.1035;

const CACHE_KEY = "metals_cache";
const CACHE_DURATION = 1000 * 60 * 15; // 15 min
const UPDATE_INTERVAL_LABEL = "15 minutos";

const FALLBACK: MetalRate[] = [
  { code: "XAU", name: "Ouro", bidPerGram: 520.00, pctChange: "0.45", highPerGram: 525.00, lowPerGram: 518.00 },
  { code: "XAG", name: "Prata", bidPerGram: 6.20, pctChange: "-0.30", highPerGram: 6.35, lowPerGram: 6.10 },
];

const PreciousMetalsWidget = () => {
  const [metals, setMetals] = useState<MetalRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchMetals = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp, fallback } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setMetals(data);
          setIsFallback(!!fallback);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
          setLoading(false);
          return;
        }
      }
    } catch { /* ignore */ }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('exchange-rates', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: null,
      });
      if (error) throw new Error(error.message);

      const parsed: MetalRate[] = [];

      if (data.XAUBRL) {
        const bid = parseFloat(data.XAUBRL.bid);
        const high = parseFloat(data.XAUBRL.high);
        const low = parseFloat(data.XAUBRL.low);
        parsed.push({
          code: "XAU",
          name: "Ouro",
          bidPerGram: bid / TROY_OZ_TO_GRAMS,
          pctChange: data.XAUBRL.pctChange,
          highPerGram: high / TROY_OZ_TO_GRAMS,
          lowPerGram: low / TROY_OZ_TO_GRAMS,
        });
      }

      if (data.XAGBRL) {
        const bid = parseFloat(data.XAGBRL.bid);
        const high = parseFloat(data.XAGBRL.high);
        const low = parseFloat(data.XAGBRL.low);
        parsed.push({
          code: "XAG",
          name: "Prata",
          bidPerGram: bid / TROY_OZ_TO_GRAMS,
          pctChange: data.XAGBRL.pctChange,
          highPerGram: high / TROY_OZ_TO_GRAMS,
          lowPerGram: low / TROY_OZ_TO_GRAMS,
        });
      }

      if (parsed.length > 0) {
        setMetals(parsed);
        setIsFallback(false);
        const now = Date.now();
        setLastUpdated(new Date(now).toLocaleString("pt-BR"));
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: parsed, timestamp: now, fallback: false }));
        setLoading(false);
        return;
      }
    } catch (err) {
      console.warn("API metais indisponível:", err);
    }

    setMetals(FALLBACK);
    setIsFallback(true);
    const now = Date.now();
    setLastUpdated(new Date(now).toLocaleString("pt-BR"));
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: FALLBACK, timestamp: now, fallback: true }));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMetals();
  }, [fetchMetals]);

  if (loading && metals.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Gem className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Metais Preciosos</h3>
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
          <Gem className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Metais Preciosos — Preço por Grama</h3>
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
        {metals.map((metal) => {
          const change = parseFloat(metal.pctChange);
          const isUp = change >= 0;
          const icon = metal.code === "XAU" ? "🥇" : "🥈";
          return (
            <div
              key={metal.code}
              className={`rounded-xl border p-4 transition-all hover:scale-[1.02] ${
                isUp ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-foreground">
                  {icon} {metal.name} (grama)
                </span>
                {isUp ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                R$ {metal.bidPerGram.toFixed(2)}
              </div>
              <div className={`text-sm font-medium ${isUp ? "text-green-500" : "text-red-500"}`}>
                {isUp ? "+" : ""}{metal.pctChange}%
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                <span>Mín: R$ {metal.lowPerGram.toFixed(2)}</span>
                <span>Máx: R$ {metal.highPerGram.toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Cotações convertidas de onça troy para grama (1 oz = 31.1035g) • Atualizado a cada {UPDATE_INTERVAL_LABEL} • Fonte: AwesomeAPI
      </p>
    </div>
  );
};

export default PreciousMetalsWidget;
