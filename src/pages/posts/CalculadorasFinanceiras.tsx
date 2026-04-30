import { useState, useEffect, useMemo } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { useMarketData } from "@/hooks/useMarketData";
import { Calculator, DollarSign, TrendingUp, Bitcoin, Gem, AlertTriangle } from "lucide-react";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import calculadorasImg from "@/assets/calculadoras-financeiras.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";

interface AssetOption {
  id: string; name: string; symbol: string;
  price: number; category: "b3" | "crypto" | "currency" | "metal";
  icon: string; unit: string;
}

const fmtBRL = (v: number) => {
  if (v === 0) return "0,00";
  if (v < 0.0001) return v.toLocaleString("pt-BR", { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  if (v < 0.01)   return v.toLocaleString("pt-BR", { minimumFractionDigits: 4, maximumFractionDigits: 5 });
  if (v < 1)      return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const fmtQty = (qty: number, unit: string) => {
  if (unit === "g") return qty >= 1 ? `${fmtBRL(qty)} g` : `${qty.toFixed(4)} g`;
  if (qty < 0.001)  return `${qty.toFixed(8)} ${unit}`;
  if (qty < 1)      return `${qty.toFixed(6)} ${unit}`;
  if (qty >= 1000)  return `${qty.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} ${unit}`;
  return `${qty.toFixed(qty >= 10 ? 2 : 4)} ${unit}`;
};

const TROY = 31.1035;
const CRYPTO_ICONS: Record<string, string> = {
  bitcoin:"₿", ethereum:"⟠", solana:"◎", binancecoin:"🟡",
  cardano:"🔵", ripple:"💧", chainlink:"🔗", polkadot:"⬤",
};
const B3_ICONS: Record<string, string> = {
  PETR4:"🛢️", VALE3:"⛏️", ITUB4:"🏦", BBDC4:"🏦", ABEV3:"🍺",
  WEGE3:"⚙️", BBAS3:"🏦", RENT3:"🚗", MGLU3:"🛒", SUZB3:"🌲",
};

const catColors: Record<string, string> = {
  b3:"border-blue-500/30 bg-blue-500/5", crypto:"border-orange-500/30 bg-orange-500/5",
  currency:"border-green-500/30 bg-green-500/5", metal:"border-yellow-500/30 bg-yellow-500/5",
};
const catLabels: Record<string, string> = {
  b3:"Ação B3", crypto:"Cripto", currency:"Câmbio", metal:"Metal",
};

const CalculadorasFinanceiras = () => {
  const [amount, setAmount]                 = useState("1000");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data, loading, isFallback, lastUpdated } = useMarketData();

  useEffect(() => {
    trackArticleRead("calculadoras-financeiras-ativos", "Calculadoras Financeiras: Simule Seus Investimentos", "invest");
  }, []);

  // Deriva a lista de ativos do hook centralizado — sem fetch próprio
  const assets = useMemo<AssetOption[]>(() => {
    if (!data) return [];
    const result: AssetOption[] = [];

    // B3
    data.b3.forEach(s => {
      if (s.regularMarketPrice > 0) {
        result.push({
          id: `b3-${s.symbol}`, name: s.shortName || s.symbol, symbol: s.symbol,
          price: s.regularMarketPrice, category: "b3",
          icon: B3_ICONS[s.symbol] ?? "📊", unit: "ação",
        });
      }
    });

    // Cripto
    data.crypto.forEach(c => {
      if (c.current_price > 0) {
        result.push({
          id: `crypto-${c.id}`, name: c.name, symbol: c.symbol.toUpperCase(),
          price: c.current_price, category: "crypto",
          icon: CRYPTO_ICONS[c.id] ?? "🪙", unit: "un.",
        });
      }
    });

    // Câmbio
    const currencies = [
      { key:"USDBRL", id:"currency-USD", name:"Dólar Americano",   symbol:"USD", icon:"🇺🇸" },
      { key:"EURBRL", id:"currency-EUR", name:"Euro",              symbol:"EUR", icon:"🇪🇺" },
      { key:"ARSBRL", id:"currency-ARS", name:"Peso Argentino",    symbol:"ARS", icon:"🇦🇷" },
      { key:"PYGBRL", id:"currency-PYG", name:"Guarani Paraguaio", symbol:"PYG", icon:"🇵🇾" },
    ];
    currencies.forEach(({ key, id, name, symbol, icon }) => {
      const r = data.rates[key as keyof typeof data.rates] as { bid: string } | undefined;
      const price = r ? parseFloat(r.bid) : 0;
      if (price > 0) result.push({ id, name, symbol, price, category:"currency", icon, unit:"un." });
    });

    // Metais
    const metals = [
      { key:"XAUBRL", id:"metal-XAU", name:"Ouro (grama)",  symbol:"XAU", icon:"🥇" },
      { key:"XAGBRL", id:"metal-XAG", name:"Prata (grama)", symbol:"XAG", icon:"🥈" },
    ];
    metals.forEach(({ key, id, name, symbol, icon }) => {
      const r = data.rates[key as keyof typeof data.rates] as { bid: string } | undefined;
      const priceOz = r ? parseFloat(r.bid) : 0;
      // Aplica pureza: ouro 18k (×0.75) e prata 925 (×0.925) — igual ao PreciousMetalsWidget
      const purity = symbol === "XAU" ? 0.75 : 0.925;
      if (priceOz > 0) result.push({ id, name, symbol, price: (priceOz / TROY) * purity, category:"metal", icon, unit:"g" });
    });

    return result;
  }, [data]);

  const parsedAmount   = parseFloat(amount.replace(/\D/g, "")) || 0;
  const filteredAssets = selectedCategory === "all"
    ? assets : assets.filter(a => a.category === selectedCategory);

  const categories = [
    { key:"all",      label:"Todos",  icon:Calculator },
    { key:"crypto",   label:"Cripto", icon:Bitcoin    },
    { key:"currency", label:"Câmbio", icon:DollarSign },
    { key:"metal",    label:"Metais", icon:Gem        },
    { key:"b3",       label:"B3",     icon:TrendingUp },
  ];

  return (
    <div className="container py-8 max-w-5xl">
      <BackNavigation category="invest" />
      <ShareWhatsApp />

      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={calculadorasImg} alt="Calculadoras Financeiras"
          loading="eager" decoding="async" className="w-full h-64 md:h-80 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
          <div>
            <span className="text-invest font-bold text-sm uppercase tracking-wider">Finanças • Ferramentas</span>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-white mt-2">
              Calculadoras Financeiras: Simule Seus Investimentos
            </h1>
            <p className="text-white/70 mt-2 max-w-2xl">
              Digite um valor em reais e veja quanto de cada ativo você conseguiria comprar com cotações em tempo real.
            </p>
          </div>
        </div>
      </div>

      <AdLeaderboard className="my-8" />

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-invest" />
            <h2 className="font-display text-xl md:text-2xl font-bold">Simulador de Compra de Ativos</h2>
          </div>
          <div className="flex items-center gap-2">
            {lastUpdated && !isFallback && (
              <span className="text-xs text-muted-foreground">Atualizado às {lastUpdated}</span>
            )}
          </div>
        </div>

        {isFallback && !loading && (
          <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Usando cotações de referência (servidor indisponível). Clique em <strong>Atualizar</strong> para tentar novamente.</span>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Quanto você quer investir? (R$)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">R$</span>
            <input
              type="text" inputMode="numeric" value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
              className="w-full pl-14 pr-4 py-4 text-2xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-invest/50 text-foreground"
              placeholder="1000"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["500","1000","5000","10000","50000","100000"].map(v => (
              <button key={v} onClick={() => setAmount(v)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${amount === v ? "bg-invest text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                R$ {parseInt(v).toLocaleString("pt-BR")}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            const count = cat.key === "all" ? assets.length : assets.filter(a => a.category === cat.key).length;
            return (
              <button key={cat.key} onClick={() => setSelectedCategory(cat.key)}
      <AdInArticle />
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.key ? "bg-invest text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                <Icon className="h-4 w-4" />{cat.label}
                <span className={`text-xs ${selectedCategory === cat.key ? "text-white/70" : "text-muted-foreground"}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {loading && assets.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => <div key={i} className="animate-pulse bg-muted rounded-xl h-36" />)}
          </div>
        ) : filteredAssets.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Nenhum ativo nesta categoria disponível.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAssets.map(asset => {
              const qty = asset.price > 0 ? parsedAmount / asset.price : 0;
              return (
                <div key={asset.id} className={`rounded-xl border p-4 transition-all hover:scale-[1.02] hover:shadow-md ${catColors[asset.category]}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{asset.icon}</span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground px-2 py-0.5 bg-muted rounded-full">{catLabels[asset.category]}</span>
                  </div>
                  <div className="font-bold text-foreground text-sm mb-0.5">{asset.symbol}</div>
                  <div className="text-xs text-muted-foreground mb-3 truncate">{asset.name}</div>
                  <div className="text-[11px] text-muted-foreground mb-2">
                    Preço: <span className="text-foreground font-semibold">R$ {fmtBRL(asset.price)}</span>
                    {asset.category === "metal" && <span className="ml-1">/ grama</span>}
                  </div>
                  <div className="border-t border-border/60 pt-2">
                    <div className="text-[11px] text-muted-foreground mb-0.5">
                      Com R$ {parsedAmount.toLocaleString("pt-BR")}:
                    </div>
                    <div className="text-xl font-bold text-invest">{qty > 0 ? fmtQty(qty, asset.unit) : "—"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-[10px] text-muted-foreground mt-5 text-center">
          Cotações via API unificada VicioCode (brapi.dev · CoinGecko · AwesomeAPI) •
          {isFallback ? " Dados de referência estática" : ` Última atualização: ${lastUpdated}`} •
          Simulação educacional — não considera taxas, spread ou IR.
        </p>
      </div>

      <AdRectangle className="my-8" />

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <h2>Como usar as calculadoras</h2>
        <p>As calculadoras usam a <strong>API unificada do VicioCode</strong> — uma única requisição retorna B3, cripto, câmbio e metais em tempo real, economizando banda e garantindo consistência nos dados.</p>
        <h3>📊 Ações da B3</h3>
        <p>Veja quanto custaria comprar ações de PETR4, VALE3, ITUB4 e outras. O valor mostrado é o preço de mercado por ação — sem considerar lote mínimo ou fracionamento.</p>
        <h3>₿ Criptomoedas</h3>
        <p>Criptomoedas podem ser compradas em frações. A calculadora mostra até 8 casas decimais para ativos de alto valor como Bitcoin.</p>
        <h3>💵 Câmbio (Dólar, Euro, Peso, Guarani)</h3>
        <p>Cotações comerciais atualizadas. Útil para planejar viagens, compras internacionais ou diversificação cambial.</p>
        <h3>🥇 Ouro e Prata</h3>
        <p>Os metais são cotados em <strong>gramas</strong> (convertidos de troy oz). Veja quanto conseguiria com o valor que quer investir.</p>
        <div className="bg-muted/50 rounded-xl p-6 border border-border not-prose mt-6">
          <p className="text-sm text-muted-foreground">
            <strong>⚠️ Aviso importante:</strong> Esta calculadora é uma ferramenta educacional e de simulação. Os valores não consideram taxas de corretagem, impostos (IR, IOF), spread ou custos operacionais. Consulte sempre um assessor de investimentos.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="calculadoras-financeiras-ativos" />
      <CommentSection postId="34" />
    </div>
  );
};

export default CalculadorasFinanceiras;