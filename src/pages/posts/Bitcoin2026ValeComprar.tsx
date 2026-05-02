import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, TrendingUp, AlertTriangle, CheckCircle2, Shield, Zap, Globe, BarChart3, Scale } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/bitcoin-2026-vale-comprar.webp";
import { useMarketData } from "@/hooks/useMarketData";

const CICLOS_BTC = [
  { ciclo: "2013-2015", topo: "R$ 6.700",   fundo: "R$ 1.000",    queda: "-85%", recuperacao: "~2 anos" },
  { ciclo: "2017-2018", topo: "R$ 115.800", fundo: "R$ 18.700",   queda: "-84%", recuperacao: "~3 anos" },
  { ciclo: "2021-2022", topo: "R$ 403.600", fundo: "R$ 90.600",   queda: "-77%", recuperacao: "~2 anos" },
  { ciclo: "2025-2026", topo: "R$ 731.000", fundo: "R$ 409.000*", queda: "-44%*", recuperacao: "Em andamento" },
];

const Bitcoin2026ValeComprar = () => {
  const [aporte, setAporte] = useState(5000);
  const { data: marketData, isFallback } = useMarketData();

  useEffect(() => {
    trackArticleRead("bitcoin-2026-vale-comprar", "Bitcoin em 2026: vale comprar agora ou esperar?", "invest");
  }, []);

  // Preço real do Bitcoin em BRL vindo do cache centralizado
  const btcPrecoBRL = useMemo(() => {
    const btc = marketData?.crypto?.find(c => c.id === "bitcoin");
    return btc?.current_price ?? 387818;
  }, [marketData]);

  const fracao = aporte / btcPrecoBRL;
  const cenarioAlta = aporte * 1.8;
  const cenarioLateral = aporte * 1.1;
  const cenarioQueda = aporte * 0.6;

  const fmtBRL = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Bitcoin 2026</span>
      </nav>

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Bitcoin em 2026: vale comprar agora ou esperar?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          O Bitcoin corrigiu forte após o recorde de R$ 731 mil em 2025 e agora ronda os R$ 409–427 mil. Entenda o cenário e se faz sentido investir agora.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="Bitcoin 2026 - gráfico de volatilidade" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      {/* Live price banner */}
      <div className="bg-card border border-border rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">₿</span>
          <div>
            <p className="text-xs text-muted-foreground">Preço atual do Bitcoin</p>
            <p className="text-2xl font-bold text-foreground">{fmtBRL(btcPrecoBRL)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isFallback && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">✓ Cotação em tempo real</span>}
          {isFallback && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-medium">~ Valor de referência</span>}
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Se você acompanha o mercado cripto, já sabe que 2026 não está sendo aquele rali explosivo que alguns analistas prometiam. Mas também está longe de ser um "inverno cripto". O Bitcoin está hoje cotado em torno de <strong>{fmtBRL(btcPrecoBRL)}</strong>, após ter batido o recorde histórico de R$ 731 mil em 2025 — e depois corrigido forte.
        </p>

        <AdLeaderboard />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que rolou com o Bitcoin em 2025 e 2026</h2>
        <p className="text-muted-foreground leading-relaxed">
          Em 2025, o Bitcoin fez história ao atingir <strong>R$ 731 mil</strong>, impulsionado pelo enorme fluxo de capital institucional via ETFs americanos, pelo halving de abril de 2024 e pelo ambiente político favorável nos EUA. Mas a euforia não durou para sempre. Com incertezas geopolíticas e um ambiente macroeconômico mais tenso no início de 2026, o BTC sofreu uma correção significativa, chegando a rondar os R$ 468 mil no pico da crise das tarifas, antes de se estabilizar na faixa atual de R$ 409 mil.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Mesmo com a correção, o valor continua expressivo. Mas lembre-se: você não precisa comprar um Bitcoin inteiro. Pode comprar frações a partir de poucos reais.
        </p>

        {/* Tabela de ciclos históricos */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Ciclos históricos do Bitcoin</h2>
        <p className="text-muted-foreground leading-relaxed">
          Entender os ciclos passados ajuda a colocar a correção atual em perspectiva. O Bitcoin sempre operou em ciclos de boom e bust — mas a magnitude das quedas tem diminuído ao longo do tempo:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">Ciclo</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Topo</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Fundo</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Queda</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Recuperação</th>
              </tr>
            </thead>
            <tbody>
              {CICLOS_BTC.map((c, i) => (
                <tr key={i} className={`border-b border-border ${i === CICLOS_BTC.length - 1 ? "bg-[hsl(var(--invest-color))]/5" : ""}`}>
                  <td className="p-3 font-mono text-xs">{c.ciclo}</td>
                  <td className="p-3 font-bold text-green-500">{c.topo}</td>
                  <td className="p-3 text-destructive">{c.fundo}</td>
                  <td className="p-3 text-destructive font-medium">{c.queda}</td>
                  <td className="p-3 text-muted-foreground">{c.recuperacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">* Valores de 2025-2026 baseados em dados até março de 2026. O ciclo pode não ter atingido seu fundo definitivo. Valores históricos convertidos para BRL pela cotação média da época.</p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O mercado institucional segue comprando</h2>
        <p className="text-muted-foreground leading-relaxed">
          Uma das mudanças mais importantes dos últimos dois anos é que o Bitcoin deixou de ser só um ativo especulativo para virar pauta de grandes fundos e empresas. A demanda institucional por Bitcoin permaneceu robusta em 2026, com ETFs de Bitcoin nos EUA registrando entradas líquidas constantes mesmo durante as quedas.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Shield className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
            <h3 className="font-bold mb-1">ETFs Regulados</h3>
            <p className="text-xs text-muted-foreground">11 ETFs de Bitcoin spot nos EUA movimentam bilhões diariamente desde a aprovação em jan/2024</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Globe className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
            <h3 className="font-bold mb-1">Adoção Global</h3>
            <p className="text-xs text-muted-foreground">El Salvador, Brasil, Emirados e outros países avançam em regulamentação favorável a cripto</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Zap className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
            <h3 className="font-bold mb-1">Lightning Network</h3>
            <p className="text-xs text-muted-foreground">Pagamentos instantâneos via Bitcoin crescem 300% em volume desde 2024</p>
          </div>
        </div>

        <AdRectangle />
        <p className="text-muted-foreground leading-relaxed">
          Isso reduz (mas não elimina) a volatilidade extrema que marcou os ciclos anteriores. Analistas da área comparam os movimentos atuais com ciclos passados: em 2018, o Bitcoin caiu 80%. Uma queda de 30-44% hoje, como a que aconteceu, <em>"não pode nem ser considerada o início de um movimento acentuado"</em>, como resumiu Alexandre Vasarhelyi, fundador da B2V Crypto.
        </p>

        {/* Simulador de cenários */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><BarChart3 className="h-6 w-6" /> Simulador de cenários</span>
        </h2>
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm text-muted-foreground mb-2">Se eu investir hoje:</label>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {[1000, 5000, 10000, 50000].map(v => (
              <button key={v} onClick={() => setAporte(v)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${aporte === v ? "bg-[hsl(var(--invest-color))] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {fmtBRL(v)}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-4">Compraria <strong>{fracao.toFixed(6)} BTC</strong> ao preço atual (~{fmtBRL(btcPrecoBRL)})</p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
              <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Cenário otimista (+80%)</p>
              <p className="text-lg font-bold text-green-500">{fmtBRL(cenarioAlta)}</p>
              <p className="text-xs text-muted-foreground">BTC a ~{fmtBRL(btcPrecoBRL * 1.8)}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <Scale className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Cenário lateral (+10%)</p>
              <p className="text-lg font-bold">{fmtBRL(cenarioLateral)}</p>
              <p className="text-xs text-muted-foreground">BTC a ~{fmtBRL(btcPrecoBRL * 1.1)}</p>
            </div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-center">
              <AlertTriangle className="h-5 w-5 text-destructive mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Cenário pessimista (-40%)</p>
              <p className="text-lg font-bold text-destructive">{fmtBRL(cenarioQueda)}</p>
              <p className="text-xs text-muted-foreground">BTC a ~{fmtBRL(btcPrecoBRL * 0.6)}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Simulação ilustrativa. Cenários baseados em análises de mercado, não garantem resultado futuro.</p>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Vale comprar agora?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A resposta honesta é: <strong>depende do seu perfil e do tamanho da posição</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Para quem ainda não tem exposição a cripto, uma alocação pequena — entre 1% e 5% da carteira — é uma forma de participar do potencial de valorização sem se expor demais ao risco. Para quem já tem posição, o momento de correção pode ser visto como acumulação.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O que especialistas alertam é contra a estratégia de apostar tudo esperando um rali até R$ 1,2 milhão. O mercado cripto continua sendo o mais volátil do mundo.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como comprar Bitcoin no Brasil em 2026</h2>
        <div className="space-y-3">
          {[
            { titulo: "Via ETF na B3", desc: "BITH11, HASH11, QBTC11 — compre como qualquer ação, sem precisar de wallet. Opção mais segura para iniciantes." },
            { titulo: "Via exchange (corretora cripto)", desc: "Mercado Bitcoin, Binance, Coinbase — compra direta de BTC. Mais flexível, mas exige cuidado com custódia." },
            { titulo: "Via fundos de investimento", desc: "Fundos cripto da Hashdex, QR Asset, Bitwise — gestão profissional, mínimo de aplicação variável." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-1">{item.titulo}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Pontos de atenção</h2>
        <div className="space-y-3">
          {[
            "Regulação avançando: vários países estão finalizando regulamentações para ativos digitais em 2026, o que pode trazer mais estabilidade — mas também mais controle",
            "ETFs de Bitcoin: continuam sendo o caminho mais prático para investidores brasileiros acessarem o ativo com segurança (via corretoras como a B3)",
            "Correlação com o mercado: em momentos de crise, o Bitcoin ainda cai junto com ações de risco",
            "Declaração de IR: desde 2025, a Receita Federal exige declaração detalhada de criptoativos. Mantenha controle de preço médio.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Bitcoin vs. Altcoins: onde alocar?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ethereum, Solana e outras altcoins também corrigiram forte em 2026. Mas o consenso entre analistas é claro: <strong>para quem está começando, o Bitcoin deve ser a maior parte da alocação cripto</strong>. Ele tem o maior histórico, maior liquidez, menor risco regulatório e é o único com ETFs aprovados nos EUA.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Altcoins podem ser complementares para quem já entende o mercado e aceita volatilidade ainda maior. Mas nunca devem ser a base da carteira cripto de um investidor iniciante.
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>O Bitcoin não morreu. Mas também não é milagre. Entenda o risco antes de entrar. Conteúdo informativo — não constitui recomendação de investimento.</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["Bitcoin", "criptomoedas", "BTC", "ETF Bitcoin", "investimentos 2026", "halving", "cripto", "blockchain", "altcoins", "Ethereum"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="bitcoin-2026-vale-comprar" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="bitcoin-2026-vale-comprar" />
    </article>
  );
};

export default Bitcoin2026ValeComprar;