import { useState, useEffect, useMemo } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { useMarketData } from "@/hooks/useMarketData";
import { Calculator, DollarSign, TrendingUp, Bitcoin, Gem, AlertTriangle, BarChart3, Clock, Shield, CheckCircle2, } from "lucide-react";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import calculadorasImg from "@/assets/calculadoras-financeiras.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import CategoryBadge from "@/components/CategoryBadge";

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
  b3:"border-blue-500/30 bg-blue-500/5",
  crypto:"border-orange-500/30 bg-orange-500/5",
  currency:"border-green-500/30 bg-green-500/5",
  metal:"border-yellow-500/30 bg-yellow-500/5",
};
const catLabels: Record<string, string> = {
  b3:"Ação B3", crypto:"Cripto", currency:"Câmbio", metal:"Metal",
};

const CalculadorasFinanceiras = () => {
  const [amount, setAmount]             = useState("1000");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data, loading, isFallback, lastUpdated } = useMarketData();

  useEffect(() => {
    trackArticleRead(
      "calculadoras-financeiras-ativos",
      "Calculadoras Financeiras: Simule Seus Investimentos em Tempo Real",
      "invest"
    );
  }, []);

  const assets = useMemo<AssetOption[]>(() => {
    if (!data) return [];
    const result: AssetOption[] = [];

    data.b3.forEach(s => {
      if (s.regularMarketPrice > 0) {
        result.push({
          id: `b3-${s.symbol}`, name: s.shortName || s.symbol, symbol: s.symbol,
          price: s.regularMarketPrice, category: "b3",
          icon: B3_ICONS[s.symbol] ?? "📊", unit: "ação",
        });
      }
    });

    data.crypto.forEach(c => {
      if (c.current_price > 0) {
        result.push({
          id: `crypto-${c.id}`, name: c.name, symbol: c.symbol.toUpperCase(),
          price: c.current_price, category: "crypto",
          icon: CRYPTO_ICONS[c.id] ?? "🪙", unit: "un.",
        });
      }
    });

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

    const metals = [
      { key:"XAUBRL", id:"metal-XAU", name:"Ouro (grama)",  symbol:"XAU", icon:"🥇" },
      { key:"XAGBRL", id:"metal-XAG", name:"Prata (grama)", symbol:"XAG", icon:"🥈" },
    ];
    metals.forEach(({ key, id, name, symbol, icon }) => {
      const r = data.rates[key as keyof typeof data.rates] as { bid: string } | undefined;
      const priceOz = r ? parseFloat(r.bid) : 0;
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

      {/* Header padronizado */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Ferramentas · Calculadoras · Cotações em Tempo Real
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
          Calculadoras Financeiras: Simule Seus Investimentos em Tempo Real — B3, Cripto, Câmbio e Metais
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Nossas <strong>calculadoras financeiras interativas</strong> usam cotações em tempo
          real para mostrar exatamente quanto de cada ativo você conseguiria comprar com qualquer
          valor em reais — de ações da B3 a frações de Bitcoin, passando por câmbio e metais preciosos.
        </p>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          fetchpriority="high"
          src={calculadorasImg}
          alt="Calculadoras Financeiras — simule investimentos em tempo real B3 cripto câmbio metais"
          loading="eager"
          decoding="async"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:p-8">
          <div>
            <span className="text-invest font-bold text-sm uppercase tracking-wider">
              Finanças • Ferramentas
            </span>
            <p className="text-white/80 mt-1 max-w-2xl text-sm">
              Cotações em tempo real · B3 · Cripto · Câmbio · Metais · Atualizado a cada 5 minutos
            </p>
          </div>
        </div>
      </div>

      <AdLeaderboard className="my-8" />

      {/* Calculadora principal */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-invest" />
            <h2 className="font-display text-xl md:text-2xl font-bold">
              Simulador de Compra de Ativos
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {lastUpdated && !isFallback && (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> Atualizado às {lastUpdated}
              </span>
            )}
          </div>
        </div>

        {isFallback && !loading && (
          <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Usando cotações de referência (servidor indisponível). Clique em{" "}
              <strong>Atualizar</strong> para tentar novamente.
            </span>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Quanto você quer investir? (R$)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">
              R$
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={e => setAmount(e.target.value.replace(/[^\d]/g, ""))}
              className="w-full pl-14 pr-4 py-4 text-2xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-invest/50 text-foreground"
              placeholder="1000"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["500","1000","5000","10000","50000","100000"].map(v => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  amount === v
                    ? "bg-invest text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                R$ {parseInt(v).toLocaleString("pt-BR")}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            const count = cat.key === "all"
              ? assets.length
              : assets.filter(a => a.category === cat.key).length;
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
                <span className={`text-xs ${selectedCategory === cat.key ? "text-white/70" : "text-muted-foreground"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {loading && assets.length === 0 ? (
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
                    Preço:{" "}
                    <span className="text-foreground font-semibold">R$ {fmtBRL(asset.price)}</span>
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
          Cotações via API unificada VicioCode (brapi.dev · CoinGecko · AwesomeAPI) •{" "}
          {isFallback ? " Dados de referência estática" : ` Última atualização: ${lastUpdated}`} •
          Simulação educacional — não considera taxas, spread ou IR.
        </p>
      </div>

      <AdRectangle className="my-8" />

      {/* Guia completo de uso */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">

        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <BarChart3 className="h-7 w-7 text-invest" />
          Como Usar as Calculadoras Financeiras
        </h2>
        <p>
          As <strong>calculadoras financeiras do VicioCode</strong> são uma ferramenta educacional
          para ajudar o investidor brasileiro a entender o poder de compra do seu dinheiro em
          diferentes ativos — sem precisar abrir várias abas ou calcular manualmente. Veja como
          usar cada categoria:
        </p>

        <h3 className="flex items-center gap-2">
          <span>📊</span> Ações da B3 — Fracionamento e Poder de Compra
        </h3>
        <p>
          O mercado de ações brasileiro é acessível a partir de R$ 10 graças ao{" "}
          <strong>mercado fracionário</strong>, onde você pode comprar frações de ações sem precisar
          de um lote inteiro (geralmente 100 ações). As calculadoras mostram exatamente quantas ações
          de PETR4, VALE3, ITUB4 ou qualquer outro papel você conseguiria comprar com o valor
          digitado.
        </p>
        <p>
          Por exemplo: com R$ 1.000 e PETR4 a R$ 38, você compraria aproximadamente{" "}
          <strong>26 ações</strong> — o que, com dividend yield de 10%, geraria cerca de{" "}
          <strong>R$ 100/ano</strong> em dividendos. Simular antes de investir evita surpresas e
          ajuda a definir metas realistas de renda passiva.
        </p>

        <h3 className="flex items-center gap-2">
          <span>₿</span> Criptomoedas — Frações e Acessibilidade
        </h3>
        <p>
          Uma das maiores dúvidas de quem está começando em cripto é: "preciso ter R$ 400.000 para
          comprar um Bitcoin?" A resposta é não. Criptomoedas são divisíveis em até{" "}
          <strong>8 casas decimais</strong> (0,00000001 BTC = 1 satoshi). Com R$ 100, você já
          consegue ter uma fração de Bitcoin — em março de 2026, isso equivale a cerca de 0,00025 BTC.
        </p>
        <p>
          A calculadora mostra essa fração exata, ajudando a desmistificar o "preciso de muito dinheiro
          para investir em cripto". O importante é começar com o que tem e aportar regularmente via
          <strong> DCA (Dollar Cost Averaging)</strong> — comprando todo mês independente do preço.
        </p>

        <AdInArticle />

        <h3 className="flex items-center gap-2">
          <span>💵</span> Câmbio — Dólar, Euro e Moedas do Mercosul
        </h3>
        <p>
          As cotações de câmbio são úteis para quem planeja viagens internacionais, compras no
          exterior, diversificação cambial via ETFs ou simplesmente quer entender o poder de compra
          do real em outras moedas. Em 2026, com o dólar em torno de R$ 5,70, R$ 10.000 equivalem
          a aproximadamente <strong>US$ 1.754</strong>.
        </p>
        <p>
          Para quem quiser se proteger da variação cambial sem abrir conta no exterior, existem
          alternativas acessíveis na B3: ETFs como <strong>IVVB11</strong> (exposição ao S&P 500 em
          dólar) e <strong>BDRs</strong> (Brazilian Depositary Receipts de empresas americanas) são
          instrumentos regulados pela CVM com liquidação em reais.
        </p>

        <h3 className="flex items-center gap-2">
          <span>🥇</span> Ouro e Prata — Reserva de Valor em Gramas
        </h3>
        <p>
          Ouro é a reserva de valor mais antiga da humanidade e, em 2026, atingiu máximas históricas
          acima de US$ 3.000/oz — impulsionado pela demanda de bancos centrais de países emergentes
          e pela incerteza geopolítica. As calculadoras mostram quanto <strong>ouro em gramas</strong>{" "}
          você conseguiria comprar com qualquer valor.
        </p>
        <p>
          Para brasileiros que querem exposição a ouro sem comprar lingotes físicos, as alternativas
          reguladas incluem: <strong>OZ1D</strong> (Tesouro Ouro da B3), ETFs de ouro disponíveis
          via BDRs e fundos multimercado com posição em metais. Lembre-se que o preço mostrado é o
          grama de ouro 18k (75% de pureza) — o mais comum no mercado nacional.
        </p>

        {/* Por que simular antes de investir */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Shield className="h-7 w-7 text-invest" />
          Por Que Simular Antes de Investir É Essencial
        </h2>
        <p>
          O investidor iniciante frequentemente comete o erro de entrar em um ativo sem entender
          realmente o que está comprando — quantas ações, qual fração de Bitcoin ou quantos gramas
          de ouro. Essa falta de concretude dificulta o planejamento de longo prazo e muitas vezes
          leva a expectativas irreais.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              titulo: "Defina metas realistas",
              desc: "Saber que R$ 500/mês compra ~0,00125 BTC ou ~13 ações de VALE3 ajuda a construir um plano de aportes com prazo e objetivo concretos.",
              icon: <CheckCircle2 className="h-5 w-5 text-invest" />,
            },
            {
              titulo: "Compare classes de ativos",
              desc: "Com o mesmo valor, você pode ver simultaneamente quanto ouro, dólar, ações e cripto compraria — facilitando a decisão de diversificação.",
              icon: <BarChart3 className="h-5 w-5 text-invest" />,
            },
            {
              titulo: "Entenda o fracionamento",
              desc: "A maioria das pessoas não sabe que pode comprar 0,3 ação de PETR4 ou 0,0001 Bitcoin. O fracionamento democratizou o acesso aos investimentos.",
              icon: <TrendingUp className="h-5 w-5 text-invest" />,
            },
            {
              titulo: "Planeje aportes mensais",
              desc: "Simule aportes de R$ 200, R$ 500 ou R$ 1.000/mês para ver como o patrimônio em cada ativo cresceria ao longo do tempo.",
              icon: <DollarSign className="h-5 w-5 text-invest" />,
            },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">{icon}<h3 className="font-bold text-sm">{titulo}</h3></div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          Como as Cotações Chegam Até Você
        </h2>
        <p>
          A confiabilidade de uma calculadora financeira depende inteiramente da
          qualidade e atualidade das cotações usadas como base de cálculo. As
          calculadoras do VicioCode consolidam dados de múltiplas fontes especializadas:
          a brapi.dev fornece cotações de ações e fundos negociados na B3 com atualização
          a cada poucos minutos durante o pregão; a CoinGecko agrega preços de
          criptomoedas de dezenas de exchanges globais, oferecendo uma média ponderada
          mais resistente a manipulação de preço em uma única corretora; e a AwesomeAPI
          fornece cotações de câmbio e metais preciosos com base em mercados
          internacionais de referência.
        </p>
        <p>
          Esse modelo de agregação de múltiplas fontes, em vez de depender de um único
          provedor de dados, reduz o risco de exibir uma cotação defasada ou
          incorreta caso uma das fontes tenha instabilidade temporária. Quando uma fonte
          específica está indisponível, o sistema automaticamente recorre a uma cotação
          de referência mais recente disponível em cache, sinalizando claramente ao
          usuário que os dados podem não refletir o preço exato do momento — transparência
          que é importante para qualquer ferramenta financeira que pretenda ser usada
          para decisões reais de investimento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          Perguntas Frequentes Sobre as Calculadoras
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { q: "Com que frequência as cotações são atualizadas?", a: "Durante o horário de pregão da B3 (10h às 17h em dias úteis), as cotações de ações são atualizadas a cada poucos minutos. Criptomoedas, que operam 24 horas por dia, têm atualização contínua. Câmbio e metais seguem o horário de funcionamento dos principais mercados internacionais de referência." },
            { q: "Os valores calculados incluem taxas e impostos?", a: "Não. As calculadoras mostram o valor bruto de compra com base na cotação de mercado, sem descontar corretagem, spread de compra/venda, IOF (no caso de câmbio) ou Imposto de Renda sobre eventual ganho futuro. Use os valores como ponto de partida para planejamento, não como valor final exato de uma operação." },
            { q: "Por que o valor de gramas de ouro parece diferente do que vejo em outros sites?", a: "O preço exibido considera ouro 18 quilates (75% de pureza), o padrão mais comum em joalherias brasileiras. Sites que mostram ouro puro (24 quilates) ou outras purezas terão valores proporcionalmente diferentes — sempre confirme a pureza ao comparar cotações entre fontes diferentes." },
            { q: "Posso confiar nessas calculadoras para decisões reais de investimento?", a: "As calculadoras são excelentes para planejamento e dimensionamento de posições, mas a cotação exata no momento da execução de uma ordem de compra real pode variar, especialmente em ativos mais voláteis. Sempre confirme o preço final na plataforma da sua corretora antes de finalizar qualquer operação." },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          Usando as Calculadoras Para Planejar Metas Financeiras
        </h2>
        <p>
          Além de simular compras pontuais, as calculadoras financeiras podem ser usadas
          de forma mais estratégica para planejar metas de médio e longo prazo. Por
          exemplo, ao simular quanto um determinado valor mensal compraria em diferentes
          ativos ao longo de vários meses consecutivos, é possível visualizar de forma
          mais concreta o que significa "investir R$ 500 por mês" — em vez de um número
          abstrato, você vê exatamente quantas frações de Bitcoin, quantas ações ou
          quantos gramas de ouro esse valor representa mês a mês, o que ajuda a manter a
          motivação e a disciplina de aportes regulares.
        </p>
        <p>
          Outra aplicação prática é comparar o "custo de oportunidade" entre diferentes
          ativos para o mesmo valor disponível. Se você está decidindo entre alocar uma
          quantia em ações brasileiras, dólar ou ouro, ver lado a lado quanto cada opção
          representaria em termos concretos — não apenas em percentual — facilita a
          tomada de decisão, especialmente para investidores que estão começando e ainda
          desenvolvendo intuição sobre ordens de grandeza no mercado financeiro.
        </p>


        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          Limitações Importantes das Simulações
        </h2>
        <p>
          As calculadoras são ferramentas educacionais. O valor real de uma operação de compra sempre
          difere da simulação pelos seguintes fatores que o simulador não considera:
        </p>

        <div className="not-prose space-y-3 my-4">
          {[
            { titulo: "Taxas de corretagem e spread", desc: "Cada operação tem custo de corretagem (0 a R$ 10 dependendo da corretora) e um spread entre o preço de compra e venda. Para ativos de menor liquidez, esse spread pode ser significativo." },
            { titulo: "Imposto de Renda (IR)", desc: "Ações têm isenção até R$ 20.000/mês em vendas; acima disso, 15% sobre o lucro. Criptomoedas: isenção até R$ 35.000/mês. ETFs e FIIs: 15% sobre o lucro sem isenção." },
            { titulo: "IOF em câmbio", desc: "Operações de câmbio físico têm IOF de 0,38% a 1,1% dependendo do tipo (cartão, espécie, transferência)." },
            { titulo: "Lote mínimo em ações", desc: "No mercado à vista, ações são negociadas em lotes de 100. No fracionário (ticker com F no final), você pode comprar quantidades menores, mas com menor liquidez." },
            { titulo: "Preço de abertura vs. fechamento", desc: "O preço mostrado é a última cotação disponível. No momento da compra, o preço pode variar — especialmente em ativos voláteis como criptomoedas." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="flex gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3">
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm mb-0.5">{titulo}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="not-prose bg-muted/50 rounded-xl p-6 border border-border mt-6">
          <p className="text-sm text-muted-foreground">
            <strong>⚠️ Aviso importante:</strong> Esta calculadora é uma ferramenta educacional e de
            simulação. Os valores não consideram taxas de corretagem, impostos (IR, IOF), spread ou
            custos operacionais. Consulte sempre um assessor de investimentos certificado (AAI ou CFP)
            antes de tomar decisões financeiras.
          </p>
        </div>
      </div>

      <EditorialTake
        category="invest"
        title="Análise do Marcos: simular antes de comprar é o hábito que separa o investidor consciente do impulsivo"
      >
        <p>
          Calculadoras financeiras parecem simples, mas têm um impacto comportamental importante:
          tornam concreto o que era abstrato. "Investir R$ 500 em Bitcoin" se transforma em "comprar
          0,00125 BTC ao preço atual" — um número específico que ajuda a raciocinar sobre custo médio,
          metas e horizonte de investimento. Dados do Raio-X do Investidor ANBIMA 2024 mostram que
          investidores que usam ferramentas de simulação regularmente fazem aportes 2x mais consistentes
          do que os que operam por impulso.
        </p>
        <p className="mt-2">
          Uma ressalva importante: simulação não substitui análise fundamentalista. Saber{" "}
          <em>quanto</em> você pode comprar não diz nada sobre <em>se</em> você deve comprar. Para
          ações, analise valuation (P/L, P/VP), dividend yield e saúde financeira da empresa. Para
          cripto, o ciclo do halving e a liquidez do ativo. Para câmbio e metais, o cenário macro.
          Use as calculadoras para planejar o tamanho da posição, não como único critério de decisão.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "B3 — Mercado Fracionário de Ações: Como Funciona",
            url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/acoes/como-comprar-acoes-fracionadas.htm",
            publisher: "B3 — Bolsa do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "CVM — Guia do Investidor: Ações e Renda Variável",
            url: "https://www.investidor.gov.br/menu/Menu_Investidor/produtos/Produto_RendaVariavel.html",
            publisher: "CVM — Portal do Investidor",
            accessedAt: "Maio 2026",
          },
          {
            title: "Banco Central — Taxa de Câmbio: Conceitos e Mercado",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/txcambio",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Raio-X do Investidor Brasileiro 2024",
            url: "https://www.anbima.com.br/pt_br/especial/raio-x-do-investidor.htm",
            publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
            accessedAt: "Maio 2026",
          },
          {
            title: "Receita Federal — Tributação de Renda Variável: Ações, ETFs e Cripto",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "World Gold Council — Ouro: Preço, Demanda e Dados de Mercado",
            url: "https://www.gold.org/goldhub/data/gold-prices",
            publisher: "World Gold Council",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="calculadoras-financeiras-ativos" />
      <CommentSection
        postId="calculadoras-financeiras-ativos"
        postTitle="Calculadoras Financeiras: Simule Seus Investimentos em Tempo Real"
       category="invest" />
    </div>
  );
};

export default CalculadorasFinanceiras;
