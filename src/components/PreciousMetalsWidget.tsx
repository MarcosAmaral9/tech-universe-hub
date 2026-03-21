import { forwardRef } from "react";
import { TrendingUp, TrendingDown, AlertTriangle, Gem } from "lucide-react";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import CacheStatusBar from "@/components/CacheStatusBar";
import PriceAlertConfig from "@/components/PriceAlertConfig";

const TROY_OZ_TO_GRAMS = 31.1035;
const GOLD_18K_PURITY = 0.75;
const SILVER_925_PURITY = 0.925;

interface MetalRate {
  code: string;
  name: string;
  purity: string;
  bidPerGram: number;
  pctChange: string;
  highPerGram: number;
  lowPerGram: number;
}

const FALLBACK: MetalRate[] = [
  { code: "XAU", name: "Ouro",  purity: "18k", bidPerGram: 642.75, pctChange: "0.00", highPerGram: 646.00, lowPerGram: 639.00 },
  { code: "XAG", name: "Prata", purity: "925", bidPerGram: 12.56,  pctChange: "0.00", highPerGram: 12.70,  lowPerGram: 12.42 },
];

const PreciousMetalsWidget = forwardRef<HTMLDivElement>((_, ref) => {
  const { data, loading, isFallback, lastUpdated, cacheExpiresAt, source } = useExchangeRates();

  const metals: MetalRate[] = [];
  if (data?.XAUBRL) {
    const bid = parseFloat(data.XAUBRL.bid);
    const high = parseFloat(data.XAUBRL.high);
    const low = parseFloat(data.XAUBRL.low);
    metals.push({
      code: "XAU", name: "Ouro", purity: "18k",
      bidPerGram: (bid / TROY_OZ_TO_GRAMS) * GOLD_18K_PURITY,
      pctChange: data.XAUBRL.pctChange,
      highPerGram: (high / TROY_OZ_TO_GRAMS) * GOLD_18K_PURITY,
      lowPerGram: (low / TROY_OZ_TO_GRAMS) * GOLD_18K_PURITY,
    });
  }
  if (data?.XAGBRL) {
    const bid = parseFloat(data.XAGBRL.bid);
    const high = parseFloat(data.XAGBRL.high);
    const low = parseFloat(data.XAGBRL.low);
    metals.push({
      code: "XAG", name: "Prata", purity: "925",
      bidPerGram: (bid / TROY_OZ_TO_GRAMS) * SILVER_925_PURITY,
      pctChange: data.XAGBRL.pctChange,
      highPerGram: (high / TROY_OZ_TO_GRAMS) * SILVER_925_PURITY,
      lowPerGram: (low / TROY_OZ_TO_GRAMS) * SILVER_925_PURITY,
    });
  }

  const displayMetals = metals.length > 0 ? metals : (isFallback ? FALLBACK : []);

  if (loading && displayMetals.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Gem className="h-5 w-5 text-invest" />
          <h3 className="font-bold">Metais Preciosos</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[0, 1].map(i => <div key={i} className="animate-pulse bg-muted rounded-xl h-24" />)}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="bg-card border border-border rounded-2xl p-4 sm:p-6 mb-8">
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

      {isFallback && displayMetals === FALLBACK && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 bg-muted/50 rounded-lg px-3 py-2">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span>Exibindo valores de referência.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayMetals.map((metal) => {
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
                  {icon} {metal.name} {metal.purity}
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
        Ouro 18k (75% pureza) • Prata 925 (92.5% pureza) • Fonte: Stooq
      </p>
      <CacheStatusBar source={source} isFallback={isFallback} cacheExpiresAt={cacheExpiresAt} />
      <PriceAlertConfig
        storageKey="metal_price_alerts"
        assets={displayMetals.map(m => ({
          key: m.code,
          label: `${m.code === "XAU" ? "🥇" : "🥈"} ${m.name} ${m.purity}`,
          currentPrice: m.bidPerGram,
          unit: "R$/g",
        }))}
      />
    </div>
  );
});

PreciousMetalsWidget.displayName = "PreciousMetalsWidget";

export default PreciousMetalsWidget;
