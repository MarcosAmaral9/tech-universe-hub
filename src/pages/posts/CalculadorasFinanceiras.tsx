import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { ArrowLeft, Calculator, DollarSign, TrendingUp, Bitcoin, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import calculadorasImg from "@/assets/calculadoras-financeiras.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
interface AssetOption {
  id: string;
  name: string;
  symbol: string;
  price: number;
  category: "b3" | "crypto" | "currency" | "metal";
  icon: string;
}

const formatBRL = (value: number) => {
  if (value === 0) return "0,00";
  if (value < 0.01) return value.toLocaleString("pt-BR", { minimumFractionDigits: 4, maximumFractionDigits: 5 });
  if (value < 1) return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const CalculadorasFinanceiras = () => {
  const [assets, setAssets] = useState<AssetOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<string>("1000");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const loadAllData = useCallback(async () => {
    const allAssets: AssetOption[] = [];

    // B3
    try {
      const cached = localStorage.getItem("b3_stock_cache");
      if (cached) {
        const { data } = JSON.parse(cached);
        data?.forEach((s: any) => {
          allAssets.push({
            id: `b3-${s.symbol}`,
            name: s.shortName || s.symbol,
            symbol: s.symbol,
            price: s.regularMarketPrice,
            category: "b3",
            icon: "📊",
          });
        });
      }
    } catch {}

    // Crypto
    try {
      const cached = localStorage.getItem("crypto_cache");
      if (cached) {
        const { data } = JSON.parse(cached);
        data?.forEach((c: any) => {
          allAssets.push({
            id: `crypto-${c.id}`,
            name: c.name,
            symbol: c.symbol.toUpperCase(),
            price: c.current_price,
            category: "crypto",
            icon: "₿",
          });
        });
      }
    } catch {}

    // Currency & Metals — both come from exchange_rates_cache
    try {
      const cached = localStorage.getItem("exchange_rates_cache");
      if (cached) {
        const { data } = JSON.parse(cached);
        if (data?.USDBRL) {
          allAssets.push({
            id: "currency-USD",
            name: "Dólar Americano",
            symbol: "USD",
            price: parseFloat(data.USDBRL.bid),
            category: "currency",
            icon: "🇺🇸",
          });
        }
        if (data?.EURBRL) {
          allAssets.push({
            id: "currency-EUR",
            name: "Euro",
            symbol: "EUR",
            price: parseFloat(data.EURBRL.bid),
            category: "currency",
            icon: "🇪🇺",
          });
        }
        if (data?.ARSBRL) {
          allAssets.push({
            id: "currency-ARS",
            name: "Peso Argentino",
            symbol: "ARS",
            price: parseFloat(data.ARSBRL.bid),
            category: "currency",
            icon: "🇦🇷",
          });
        }
        if (data?.PYGBRL) {
          allAssets.push({
            id: "currency-PYG",
            name: "Guarani Paraguaio",
            symbol: "PYG",
            price: parseFloat(data.PYGBRL.bid),
            category: "currency",
            icon: "🇵🇾",
          });
        }
        const TROY_OZ_TO_GRAMS = 31.1035;
        if (data?.XAUBRL) {
          allAssets.push({
            id: "metal-XAU",
            name: "Ouro (grama)",
            symbol: "XAU",
            price: parseFloat(data.XAUBRL.bid) / TROY_OZ_TO_GRAMS,
            category: "metal",
            icon: "🥇",
          });
        }
        if (data?.XAGBRL) {
          allAssets.push({
            id: "metal-XAG",
            name: "Prata (grama)",
            symbol: "XAG",
            price: parseFloat(data.XAGBRL.bid) / TROY_OZ_TO_GRAMS,
            category: "metal",
            icon: "🥈",
          });
        }
      }
    } catch {}

    setAssets(allAssets);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Small delay to let widget caches populate
    const timer = setTimeout(loadAllData, 1000);
    return () => clearTimeout(timer);
  }, [loadAllData]);

  const parsedAmount = parseFloat(amount.replace(/\D/g, "")) || 0;

  const filteredAssets = selectedCategory === "all"
    ? assets
    : assets.filter(a => a.category === selectedCategory);

  const categories = [
    { key: "all", label: "Todos", icon: Calculator },
    { key: "b3", label: "B3", icon: TrendingUp },
    { key: "crypto", label: "Cripto", icon: Bitcoin },
    { key: "currency", label: "Câmbio", icon: DollarSign },
    { key: "metal", label: "Metais", icon: Gem },
  ];

  return (
    <div className="container py-8 max-w-5xl">
      <BackNavigation category="invest" />
      <Link to="/financas">
        <Button variant="ghost" className="mb-4 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Finanças
        </Button>
      </Link>

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={calculadorasImg} alt="Calculadoras Financeiras" className="w-full h-64 md:h-80 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
          <div>
            <span className="text-invest font-bold text-sm uppercase tracking-wider">Finanças • Ferramentas</span>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-white mt-2">
              Calculadoras Financeiras: Simule Seus Investimentos
            </h1>
            <p className="text-white/70 mt-2 max-w-2xl">
              Digite um valor em reais e descubra quanto de cada ativo você conseguiria comprar com as cotações em tempo real.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-invest" />
          <AdLeaderboard className="my-8" />

          <h2 className="font-display text-xl md:text-2xl font-bold">Simulador de Compra de Ativos</h2>
        </div>

        {/* Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Quanto você quer investir? (R$)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">R$</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => {
                const val = e.target.value.replace(/[^\d]/g, "");
                setAmount(val);
              }}
              className="w-full pl-12 pr-4 py-4 text-2xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-invest/50 text-foreground"
              placeholder="1000"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.key
                    ? "bg-invest text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-muted rounded-xl h-32" />
            ))}
          </div>
        ) : filteredAssets.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum dado disponível. Visite a <Link to="/financas" className="text-invest underline">página de Finanças</Link> primeiro para carregar as cotações.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAssets.map(asset => {
              const qty = asset.price > 0 ? parsedAmount / asset.price : 0;
              const categoryColors: Record<string, string> = {
                b3: "border-blue-500/20 bg-blue-500/5",
                crypto: "border-orange-500/20 bg-orange-500/5",
                currency: "border-green-500/20 bg-green-500/5",
                metal: "border-yellow-500/20 bg-yellow-500/5",
              };
              return (
                <div
                  key={asset.id}
                  className={`rounded-xl border p-4 transition-all hover:scale-[1.02] ${categoryColors[asset.category]}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{asset.icon}</span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                      {asset.category === "b3" ? "Ação" : asset.category === "crypto" ? "Cripto" : asset.category === "currency" ? "Câmbio" : "Metal"}
                    </span>
                  </div>
                  <div className="font-bold text-foreground mb-1">{asset.symbol}</div>
                  <div className="text-xs text-muted-foreground mb-3 truncate">{asset.name}</div>
                  <div className="text-[10px] text-muted-foreground mb-1">
                    Preço unitário: R$ {formatBRL(asset.price)}
                  </div>
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="text-xs text-muted-foreground">Com R$ {formatBRL(parsedAmount)}:</div>
                    <div className="text-xl font-bold text-invest">
                      {qty >= 1 ? qty.toFixed(qty >= 100 ? 0 : 2) : qty.toFixed(6)} {asset.category === "metal" ? "g" : "un."}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-[10px] text-muted-foreground mt-4 text-center">
          Os valores são baseados nas cotações em cache dos widgets da página de Finanças. Para dados mais atualizados, visite a página de Finanças primeiro.
        </p>
      </div>

      {/* Info Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <h2>Como usar as calculadoras</h2>
        <p>
          As nossas calculadoras utilizam <strong>cotações em tempo real</strong> de diversas fontes para mostrar
          quanto de cada ativo financeiro você conseguiria comprar com o valor que informar.
        </p>

        <h3>📊 Ações da B3</h3>
        <p>
          Veja quanto custaria comprar ações das principais empresas listadas na Bolsa de Valores brasileira,
          como Petrobras (PETR4), Vale (VALE3), Itaú (ITUB4) e outras. O preço mostrado é o valor de mercado
          por ação — o número de ações que você poderia comprar depende do valor que deseja investir.
        </p>

        <h3>₿ Criptomoedas</h3>
        <p>
          Não é necessário comprar uma moeda inteira! Tanto Bitcoin quanto Ethereum e outras criptos podem ser
          compradas em frações. A calculadora mostra exatamente quanto de cada criptomoeda você receberia.
        </p>

        <h3>💵 Câmbio (Dólar, Euro, Peso e Guarani)</h3>
        <p>
          Quer saber quantos dólares, euros, pesos argentinos ou guaranis paraguaios conseguiria com seus reais? 
          A calculadora usa as cotações comerciais atualizadas para mostrar o valor convertido — ideal para quem 
          viaja para países vizinhos ou faz compras internacionais.
        </p>

        <h3>🥇 Ouro e Prata</h3>
        <p>
          Os metais preciosos são cotados por grama. Descubra quantas gramas de ouro ou prata você compraria
          com o valor informado — uma ótima forma de entender se vale a pena diversificar com metais.
        </p>

        <div className="bg-muted/50 rounded-xl p-6 border border-border not-prose mt-6">
          <p className="text-sm text-muted-foreground">
            <strong>⚠️ Aviso:</strong> As calculadoras são ferramentas educacionais e de simulação. Os valores apresentados
            não consideram taxas de corretagem, impostos, spread ou custos operacionais. Consulte sempre seu corretor
            ou assessor de investimentos antes de tomar decisões.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="calculadoras-financeiras-ativos" />
      <CommentSection postId="34" />
    </div>
  );
};

export default CalculadorasFinanceiras;
