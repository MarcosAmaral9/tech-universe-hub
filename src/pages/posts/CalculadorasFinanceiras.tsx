import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { Calculator, DollarSign, TrendingUp, Bitcoin, Gem, RefreshCw, AlertTriangle } from "lucide-react";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import calculadorasImg from "@/assets/calculadoras-financeiras.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

// ── Types ─────────────────────────────────────────────────────────────────────
interface AssetOption {
  id: string;
  name: string;
  symbol: string;
  price: number;        // preço em BRL
  category: "b3" | "crypto" | "currency" | "metal";
  icon: string;
  unit: string;         // "ação" | "un." | "g"
}

// ── Formatação ────────────────────────────────────────────────────────────────
const fmtBRL = (v: number) => {
  if (v === 0) return "0,00";
  if (v < 0.0001) return v.toLocaleString("pt-BR", { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  if (v < 0.01)   return v.toLocaleString("pt-BR", { minimumFractionDigits: 4, maximumFractionDigits: 5 });
  if (v < 1)      return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const fmtQty = (qty: number, unit: string) => {
  if (unit === "g") {
    return qty >= 1 ? `${fmtBRL(qty)} g` : `${qty.toFixed(4)} g`;
  }
  if (qty < 0.001) return `${qty.toFixed(8)} ${unit}`;
  if (qty < 1)     return `${qty.toFixed(6)} ${unit}`;
  if (qty >= 1000) return `${qty.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} ${unit}`;
  return `${qty.toFixed(qty >= 10 ? 2 : 4)} ${unit}`;
};

// TROY_OZ → GRAMS
const TROY = 31.1035;

// ── Fallback estático (usado caso a API falhe) ────────────────────────────────
const STATIC_FALLBACK: AssetOption[] = [
  { id: "b3-PETR4",  name: "Petrobras PN",       symbol: "PETR4", price: 37.50,   category: "b3",       icon: "🛢️", unit: "ação" },
  { id: "b3-VALE3",  name: "Vale ON",             symbol: "VALE3", price: 58.20,   category: "b3",       icon: "⛏️", unit: "ação" },
  { id: "b3-ITUB4",  name: "Itaú Unibanco PN",   symbol: "ITUB4", price: 35.80,   category: "b3",       icon: "🏦", unit: "ação" },
  { id: "b3-BBDC4",  name: "Bradesco PN",         symbol: "BBDC4", price: 13.90,   category: "b3",       icon: "🏦", unit: "ação" },
  { id: "b3-ABEV3",  name: "Ambev ON",            symbol: "ABEV3", price: 11.50,   category: "b3",       icon: "🍺", unit: "ação" },
  { id: "b3-WEGE3",  name: "WEG ON",              symbol: "WEGE3", price: 48.00,   category: "b3",       icon: "⚙️", unit: "ação" },
  { id: "crypto-btc",  name: "Bitcoin",           symbol: "BTC",   price: 387818,  category: "crypto",   icon: "₿",  unit: "un." },
  { id: "crypto-eth",  name: "Ethereum",          symbol: "ETH",   price: 14200,   category: "crypto",   icon: "⟠",  unit: "un." },
  { id: "crypto-sol",  name: "Solana",            symbol: "SOL",   price: 780,     category: "crypto",   icon: "◎",  unit: "un." },
  { id: "crypto-bnb",  name: "BNB",               symbol: "BNB",   price: 2980,    category: "crypto",   icon: "🟡", unit: "un." },
  { id: "currency-USD", name: "Dólar Americano",  symbol: "USD",   price: 5.85,    category: "currency", icon: "🇺🇸", unit: "un." },
  { id: "currency-EUR", name: "Euro",             symbol: "EUR",   price: 6.35,    category: "currency", icon: "🇪🇺", unit: "un." },
  { id: "currency-ARS", name: "Peso Argentino",   symbol: "ARS",   price: 0.0048,  category: "currency", icon: "🇦🇷", unit: "un." },
  { id: "currency-PYG", name: "Guarani Paraguaio",symbol: "PYG",   price: 0.00076, category: "currency", icon: "🇵🇾", unit: "un." },
  { id: "metal-XAU",    name: "Ouro (grama)",     symbol: "XAU",   price: 856.9,   category: "metal",    icon: "🥇", unit: "g"   },
  { id: "metal-XAG",    name: "Prata (grama)",    symbol: "XAG",   price: 13.58,   category: "metal",    icon: "🥈", unit: "g"   },
];

// ── Componente principal ──────────────────────────────────────────────────────
const CalculadorasFinanceiras = () => {
  const [assets, setAssets]               = useState<AssetOption[]>([]);
  const [loading, setLoading]             = useState(true);
  const [isFallback, setIsFallback]       = useState(false);
  const [lastUpdated, setLastUpdated]     = useState("");
  const [amount, setAmount]               = useState("1000");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    trackArticleRead("calculadoras-financeiras-ativos", "Calculadoras Financeiras: Simule Seus Investimentos", "invest");
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    const result: AssetOption[] = [];

    // ── B3 ──────────────────────────────────────────────────────────────────
    try {
      const res = await fetch("/api.php?action=b3", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const stocks = json.stocks ?? json.data ?? json;
        if (Array.isArray(stocks)) {
          stocks.forEach((s: { symbol: string; shortName?: string; regularMarketPrice: number }) => {
            if (s.regularMarketPrice > 0) {
              result.push({
                id: `b3-${s.symbol}`,
                name: s.shortName || s.symbol,
                symbol: s.symbol,
                price: s.regularMarketPrice,
                category: "b3",
                icon: "📊",
                unit: "ação",
              });
            }
          });
        }
      }
    } catch { /* usa fallback */ }

    // ── Crypto ───────────────────────────────────────────────────────────────
    try {
      const res = await fetch("/api.php?action=crypto", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const coins = json.coins ?? json.data ?? json;
        if (Array.isArray(coins)) {
          const icons: Record<string, string> = { bitcoin: "₿", ethereum: "⟠", solana: "◎", binancecoin: "🟡", cardano: "🔵", ripple: "💧", chainlink: "🔗", polkadot: "⬤" };
          coins.forEach((c: { id: string; symbol: string; name: string; current_price: number }) => {
            if (c.current_price > 0) {
              result.push({
                id: `crypto-${c.id}`,
                name: c.name,
                symbol: c.symbol.toUpperCase(),
                price: c.current_price,
                category: "crypto",
                icon: icons[c.id] ?? "🪙",
                unit: "un.",
              });
            }
          });
        }
      }
    } catch { /* usa fallback */ }

    // ── Câmbio + Metais ───────────────────────────────────────────────────────
    try {
      const res = await fetch("/api.php?action=rates", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const currencies = [
          { key: "USDBRL", id: "currency-USD", name: "Dólar Americano", symbol: "USD", icon: "🇺🇸" },
          { key: "EURBRL", id: "currency-EUR", name: "Euro",             symbol: "EUR", icon: "🇪🇺" },
          { key: "ARSBRL", id: "currency-ARS", name: "Peso Argentino",  symbol: "ARS", icon: "🇦🇷" },
          { key: "PYGBRL", id: "currency-PYG", name: "Guarani Paraguaio", symbol: "PYG", icon: "🇵🇾" },
        ];
        currencies.forEach(({ key, id, name, symbol, icon }) => {
          const r = data[key];
          const price = r ? parseFloat(r.bid) : 0;
          if (price > 0) result.push({ id, name, symbol, price, category: "currency", icon, unit: "un." });
        });

        // Metais (cotados em troy oz → convertemos para grama)
        const metals = [
          { key: "XAUBRL", id: "metal-XAU", name: "Ouro (grama)",  symbol: "XAU", icon: "🥇" },
          { key: "XAGBRL", id: "metal-XAG", name: "Prata (grama)", symbol: "XAG", icon: "🥈" },
        ];
        metals.forEach(({ key, id, name, symbol, icon }) => {
          const r = data[key];
          const priceOz = r ? parseFloat(r.bid) : 0;
          if (priceOz > 0) result.push({ id, name, symbol, price: priceOz / TROY, category: "metal", icon, unit: "g" });
        });
      }
    } catch { /* usa fallback */ }

    // Se não conseguiu dados reais, usa o fallback estático
    if (result.length === 0) {
      setAssets(STATIC_FALLBACK);
      setIsFallback(true);
    } else {
      setAssets(result);
      setIsFallback(false);
      setLastUpdated(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    }
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const parsedAmount = parseFloat(amount.replace(/\D/g, "")) || 0;
  const categories = [
    { key: "all",      label: "Todos",   icon: Calculator },
    { key: "b3",       label: "B3",      icon: TrendingUp },
    { key: "crypto",   label: "Cripto",  icon: Bitcoin    },
    { key: "currency", label: "Câmbio",  icon: DollarSign },
    { key: "metal",    label: "Metais",  icon: Gem        },
  ];
  const filteredAssets = selectedCategory === "all"
    ? assets
    : assets.filter(a => a.category === selectedCategory);

  const catColors: Record<string, string> = {
    b3:       "border-blue-500/30 bg-blue-500/5",
    crypto:   "border-orange-500/30 bg-orange-500/5",
    currency: "border-green-500/30 bg-green-500/5",
    metal:    "border-yellow-500/30 bg-yellow-500/5",
  };
  const catLabels: Record<string, string> = {
    b3: "Ação B3", crypto: "Cripto", currency: "Câmbio", metal: "Metal",
  };

  return (
    <div className="container py-8 max-w-5xl">
      <BackNavigation category="invest" />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          fetchpriority="high"
          src={calculadorasImg}
          alt="Calculadoras Financeiras"
          loading="eager"
          decoding="async"
          className="w-full h-64 md:h-80 object-cover"
        />
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

      {/* Calculadora */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">

        {/* Header da calculadora */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-invest" />
            <h2 className="font-display text-xl md:text-2xl font-bold">Simulador de Compra de Ativos</h2>
          </div>
          <div className="flex items-center gap-2">
            {lastUpdated && !isFallback && (
              <span className="text-xs text-muted-foreground">Atualizado às {lastUpdated}</span>
            )}
            <button
              onClick={loadData}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-xs font-medium text-muted-foreground transition-colors disabled:opacity-50"
              aria-label="Atualizar cotações"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Carregando..." : "Atualizar"}
            </button>
          </div>
        </div>

        {/* Aviso de fallback */}
        {isFallback && !loading && (
          <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Usando cotações de referência (servidor indisponível). Clique em <strong>Atualizar</strong> para tentar buscar os dados em tempo real.</span>
          </div>
        )}

        {/* Input de valor */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Quanto você quer investir? (R$)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">R$</span>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
              className="w-full pl-14 pr-4 py-4 text-2xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-invest/50 text-foreground"
              placeholder="1000"
            />
          </div>
          {/* Atalhos de valor */}
          <div className="flex flex-wrap gap-2 mt-3">
            {["500", "1000", "5000", "10000", "50000", "100000"].map(v => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  amount === v ? "bg-invest text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                R$ {parseInt(v).toLocaleString("pt-BR")}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            const count = cat.key === "all" ? assets.length : assets.filter(a => a.category === cat.key).length;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.key
                    ? "bg-invest text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
                <span className={`text-xs ${selectedCategory === cat.key ? "text-white/70" : "text-muted-foreground"}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Resultados */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-muted rounded-xl h-36" />
            ))}
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
                <div
                  key={asset.id}
                  className={`rounded-xl border p-4 transition-all hover:scale-[1.02] hover:shadow-md ${catColors[asset.category]}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{asset.icon}</span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                      {catLabels[asset.category]}
                    </span>
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
                    <div className="text-xl font-bold text-invest">
                      {qty > 0 ? fmtQty(qty, asset.unit) : "—"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-[10px] text-muted-foreground mt-5 text-center">
          Cotações via API do servidor VicioCode (brapi.dev · CoinGecko · AwesomeAPI) •
          {isFallback ? " Dados de referência estática" : ` Última atualização: ${lastUpdated}`} •
          Simulação educacional — não considera taxas, spread ou IR.
        </p>
      </div>

      <AdRectangle className="my-8" />

      {/* Seção informativa */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <h2>Como usar as calculadoras</h2>
        <p>
          As calculadoras buscam <strong>cotações em tempo real</strong> diretamente da API do VicioCode,
          que agrega dados de brapi.dev (B3), CoinGecko (cripto) e AwesomeAPI (câmbio e metais).
          Basta digitar o valor que você quer simular e filtrar pela categoria desejada.
        </p>

        <h3>📊 Ações da B3</h3>
        <p>
          Veja quanto custaria comprar ações de empresas como Petrobras (PETR4), Vale (VALE3),
          Itaú (ITUB4) e outras. O valor mostrado é o preço de mercado por ação — sem considerar
          lote mínimo ou fracionamento.
        </p>

        <h3>₿ Criptomoedas</h3>
        <p>
          Criptomoedas podem ser compradas em frações — você não precisa comprar 1 Bitcoin inteiro.
          A calculadora mostra exatamente qual fração de cada criptomoeda você receberia, com
          até 8 casas decimais para ativos de alto valor.
        </p>

        <h3>💵 Câmbio (Dólar, Euro, Peso Argentino, Guarani Paraguaio)</h3>
        <p>
          Cotações comerciais atualizadas para as principais moedas de interesse do investidor brasileiro.
          Útil para planejar viagens, compras internacionais ou diversificação cambial.
        </p>

        <h3>🥇 Ouro e Prata</h3>
        <p>
          Os metais preciosos são cotados em <strong>gramas</strong> (convertidos de troy oz).
          O ouro é um ativo de proteção clássico contra inflação — veja quanto você conseguiria
          com o valor que quer investir.
        </p>

        <div className="bg-muted/50 rounded-xl p-6 border border-border not-prose mt-6">
          <p className="text-sm text-muted-foreground">
            <strong>⚠️ Aviso importante:</strong> Esta calculadora é uma ferramenta educacional e de simulação.
            Os valores não consideram taxas de corretagem, impostos (IR, IOF), spread, custos operacionais
            ou lote mínimo de negociação. Consulte sempre um assessor de investimentos antes de tomar decisões financeiras.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="calculadoras-financeiras-ativos" />
      <CommentSection postId="34" />
    </div>
  );
};

export default CalculadorasFinanceiras;
