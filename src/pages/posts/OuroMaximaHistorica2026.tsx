import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, DollarSign, Lightbulb, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ouro-maxima-historica-2026-como-investir.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const OuroMaximaHistorica2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "ouro-maxima-historica-2026-como-investir",
      "Ouro em Máxima Histórica: Por Que o Metal Subiu +30% e Como Investir Agora",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Ouro · Commodities · Hedge · Carteira
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ouro em Máxima Histórica: Por Que o Metal Subiu +30% em 12 Meses e Como Investir Agora
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Ouro máxima histórica 2026 como investir ETF gold11" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O ouro cruzou a marca de <strong>US$ 3.300 por onça troy</strong> na semana passada — nova máxima histórica e alta de mais de <strong>30% nos últimos 12 meses</strong>. Em reais, o preço do metal está acima de <strong>R$ 23.700 por grama</strong>. Para o investidor brasileiro que nunca considerou ouro seriamente, esta pode ser a hora de entender por que bancos centrais, investidores institucionais e bilionários estão acumulando o metal — e como você pode fazer o mesmo sem precisar guardar barra de ouro em casa.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Números: A Escalada do Ouro em 2025–2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Período</th>
              <th className="text-left py-3 px-4">Preço (USD/oz)</th>
              <th className="text-left py-3 px-4">Preço (BRL/g aprox.)</th>
              <th className="text-left py-3 px-4">Variação</th>
            </tr></thead>
            <tbody>
              {[
                ["Abr/2024", "~US$ 2.300", "~R$ 13.800", "—"],
                ["Jan/2025", "~US$ 2.630", "~R$ 16.400", "+14,3%"],
                ["Jul/2025", "~US$ 2.800", "~R$ 18.200", "+21,7%"],
                ["Jan/2026", "~US$ 3.000", "~R$ 20.100", "+30,4%"],
                ["Abr/2026 (atual)", "~US$ 3.300", "~R$ 23.700", "+43,5%"],
              ].map(([per, usd, brl, var_]) => (
                <tr key={per} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{per}</td>
                  <td className="py-3 px-4 font-bold text-invest">{usd}</td>
                  <td className="py-3 px-4">{brl}</td>
                  <td className="py-3 px-4 text-xs text-green-400 font-bold">{var_}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Preços aproximados. Cotações reais variam por spread e câmbio do momento. Fontes: Bloomberg, B3, Banco Central.</p>
        </div>
        <p>
          O ouro subiu <strong>+43,5% nos últimos 12 meses</strong> em dólares — o melhor desempenho anual desde 1979. Em reais, o retorno foi ainda maior porque o dólar também estava mais alto no início do período. Para quem tinha 10% da carteira em GOLD11 (ETF de ouro na B3) há 12 meses, esse componente mais do que compensou qualquer perda em renda fixa.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-invest" />
          Por Que o Ouro Está Subindo? As 5 Causas Reais
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { causa: "🌍 1. Compras recordes de bancos centrais", desc: "Em 2025 e 2026, bancos centrais de China, Índia, Turquia, Polônia e outros países emergentes compraram ouro em volumes recordes — reduzindo dependência do dólar nas reservas internacionais. O Banco Central da China aumentou suas reservas em ouro por mais de 20 meses consecutivos. Essa demanda estrutural é o fator mais relevante e persistente." },
            { causa: "⚔️ 2. Guerra Irã-EUA e instabilidade geopolítica", desc: "Em contextos de conflito armado e ameaça de escalada, o ouro funciona como 'dinheiro de último recurso'. A tensão no Oriente Médio elevou o prêmio geopolítico do metal. Mesmo com o cessar-fogo frágil de março de 2026, o mercado mantém precaução — e o ouro não cedeu." },
            { causa: "📉 3. Queda do dólar globalmente (DXY em baixa)", desc: "O ouro é cotado em dólares — quando o dólar cai globalmente, o ouro sobe em termos relativos. O índice DXY (dólar vs cesta de moedas) caiu ~8% no primeiro trimestre de 2026, impulsionando o ouro." },
            { causa: "🏛️ 4. Expectativa de cortes de juros globais", desc: "Com o Fed americano sinalizando cortes de juros em 2026, o custo de oportunidade de manter ouro (que não paga dividendos nem juros) cai. Historicamente, o ouro tem forte correlação inversa com as taxas de juros reais americanas." },
            { causa: "🛡️ 5. Hedge contra dívida pública insustentável", desc: "A dívida pública dos EUA ultrapassou US$ 37 trilhões. Investidores institucionais estão preocupados com a sustentabilidade fiscal de longo prazo das principais economias — e o ouro é o único ativo sem risco de contraparte." },
          ].map(({ causa, desc }) => (
            <div key={causa} className="flex gap-3 bg-card rounded-xl border border-invest/20 p-4">
              <span className="text-xl shrink-0">{causa.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{causa.split(" ").slice(1).join(" ")}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como Investir em Ouro no Brasil: Todas as Opções
        </h2>
      <AdInArticle />
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Instrumento</th>
              <th className="text-left py-3 px-4">Mínimo</th>
              <th className="text-left py-3 px-4">Liquidez</th>
              <th className="text-left py-3 px-4">Tributação</th>
              <th className="text-left py-3 px-4">Vantagem</th>
            </tr></thead>
            <tbody>
              {[
                ["GOLD11 (ETF B3)", "~R$ 100 (1 cota)", "Alta (mercado)", "15% ganho capital", "Mais fácil, sem custódia física"],
                ["OZ1D / contratos futuros BM&F", "R$ 1.000–R$ 5.000", "Alta (horário pregão)", "15–20% ganho capital", "Preciso e alavancável"],
                ["Fundos de ouro (ex: Trend Ouro)", "R$ 500+", "D+0 a D+1", "IR come-cotas semestral", "Gestão profissional"],
                ["Ouro físico (lingotes/moedas)", "R$ 5.000+", "Baixa (dealer)", "15% ganho capital", "Posse física real"],
                ["ETFs de ouro EUA (via IVVB ou BDR)", "Qualquer", "Alta (mercado EUA)", "15% + declaração DARF", "IAU, GLD — exposição direta USD"],
              ].map(([inst, min, liq, trib, vant]) => (
                <tr key={inst} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest text-xs">{inst}</td>
                  <td className="py-3 px-4 text-xs">{min}</td>
                  <td className="py-3 px-4 text-xs">{liq}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{trib}</td>
                  <td className="py-3 px-4 text-xs">{vant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Ainda Vale Comprar Ouro Agora? A Análise dos Especialistas
        </h2>
        <p>
          A pergunta mais difícil: com ouro em máxima histórica de US$ 3.300, ainda faz sentido comprar? As projeções da comunidade de análise estão divididas:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { cenario: "🐂 Alta para US$ 3.800–4.000", base: "Bancos centrais continuam comprando. Fed corta juros. Guerra no Oriente Médio piora. Dólar continua fraco.", prob: "Moderada", prazo: "12–18 meses" },
            { cenario: "📊 Consolidação US$ 3.000–3.400", base: "Cessar-fogo se mantém. Fed pausa cortes. Fluxos de bancos centrais desaceleram. Dólar se estabiliza.", prob: "Alta", prazo: "6–12 meses" },
            { cenario: "🐻 Correção para US$ 2.700–2.900", base: "Acordo de paz firme no Oriente Médio. Dados econômicos americanos fortes. Fed mantém juros altos.", prob: "Baixa", prazo: "Se ocorrer: rápido" },
          ].map(({ cenario, base, prob, prazo }) => (
            <div key={cenario} className="bg-card rounded-xl border border-invest/20 p-4">
              <h3 className="font-bold text-sm mb-2">{cenario}</h3>
              <p className="text-xs text-muted-foreground mb-2">{base}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-invest/15 text-invest px-2 py-0.5 rounded-full">{prob}</span>
                <span className="text-xs text-muted-foreground">{prazo}</span>
              </div>
            </div>
          ))}
        </div>
        <p>
          O consenso de analistas do JPMorgan, Goldman Sachs e do BTG Pactual Brasil é que o ouro <strong>não está em bolha</strong> — a demanda estrutural de bancos centrais justifica o patamar atual. A recomendação comum é alocar <strong>5–10% da carteira em ouro</strong> como hedge (proteção), não como apostha em alta maior. Se o ouro subir mais, você ganha. Se corrigir, é só uma fração da carteira.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Quanto Alocar e Por Quê 5–10% É o Consenso
        </h2>
        <ul>
          <li><strong>Abaixo de 5%:</strong> impacto pequeno demais para fazer diferença como hedge em momentos de crise. O ouro não compensa o suficiente quando as ações caem se a posição for muito pequena.</li>
          <li><strong>5–10% (recomendação padrão):</strong> proteção significativa contra crises geopolíticas e inflacionárias sem comprometer o crescimento da carteira. Ray Dalio, gestor do maior hedge fund do mundo, mantém ~7,5% em ouro no portfólio All Weather.</li>
          <li><strong>Acima de 15%:</strong> arrasta o retorno de longo prazo, pois ouro não gera dividendos ou juros. Apenas faz sentido para quem tem perfil muito conservador ou cenário de crise iminente.</li>
          <li><strong>Para o investidor brasileiro em particular:</strong> o ouro tem dupla proteção — sobe quando há crises globais (em dólares) e o dólar geralmente sobe em relação ao real nessas crises, amplificando o ganho em reais.</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você tem ouro na carteira? Qual percentual? 🥇</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>

      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="ouro-maxima-historica-2026-como-investir" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="ouro-maxima-historica-2026-como-investir" postTitle="Ouro em Máxima Histórica: Por Que o Metal Subiu +30% e Como Investir Agora" />
    </article>
  );
};

export default OuroMaximaHistorica2026;