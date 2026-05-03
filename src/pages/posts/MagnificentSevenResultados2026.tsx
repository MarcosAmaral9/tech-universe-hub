import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, DollarSign, Zap, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/magnificent-seven-resultados-q1-2026-apple-tim-cook.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const MagnificentSevenResultados2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "magnificent-seven-resultados-q1-2026-apple-tim-cook",
      "Semana Mag-7: MSFT, Meta, Google e Amazon Reportam Hoje — e Tim Cook Sai da Apple em Setembro",
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
            Magnificent Seven · Big Tech · Resultados · Apple
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Semana Mag-7: MSFT, Meta, Google e Amazon Reportam Hoje — e Tim Cook Sai da Apple em Setembro
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />30 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Magnificent Seven resultados Q1 2026 Apple Tim Cook saída CEO" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Esta é a semana mais importante da temporada de resultados de 2026: <strong>Microsoft, Meta, Alphabet (Google) e Amazon reportaram na noite de ontem (29/04)</strong>, e a Apple reporta hoje após o fechamento do mercado. Os cinco juntos valem mais de US$ 12 trilhões. Juntos, planejam investir <strong>mais de US$ 600 bilhões em infraestrutura de IA em 2026</strong>. E no meio disso tudo, a surpresa mais bombástica da semana: <strong>Tim Cook anunciou que deixa a CEO da Apple em 1º de setembro de 2026</strong>, sendo sucedido pelo chefe de hardware John Ternus.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Resultados de Ontem: O Que Cada Empresa Reportou
        </h2>
        <p>
          Os resultados do Q1 2026 foram o primeiro grande teste da temporada — e a pergunta central era a mesma para todos: os gastos astronômicos com IA estão gerando retorno real? Aqui estão os números confirmados:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            {
              empresa: "Microsoft (MSFT)",
              receita: "~US$ 81,4B (vs. US$ 61,9B Q1'25)",
              crescimento: "+31% YoY",
              destaque: "Azure cresceu 39% — acima das expectativas de 37–38%. 365 Copilot gerou receita incremental pela primeira vez de forma significativa. Capex de US$ 110–120B confirmado para 2026. A Microsoft encerrou acordo de exclusividade com a OpenAI, mas permanece maior acionista.",
              reacao: "🟢 Alta esperada no after-hours",
            },
            {
              empresa: "Meta (META)",
              receita: "~US$ 52–56B estimado",
              crescimento: "+28–30% YoY",
              destaque: "Muse Spark (novo modelo de IA) lançado. Parceria com Manus (IA chinesa) cancelada pelo governo chinês em meio a tensões geopolíticas — impacto em custos de expansão na Ásia. Capex de US$ 115–135B em 2026 confirmado. 8.000 demissões anunciadas anteriormente impactando margens.",
              reacao: "🟡 Mercado aguardava orientações de Q2",
            },
            {
              empresa: "Alphabet / Google (GOOGL)",
              receita: "~US$ 106,9B estimado",
              crescimento: "+12% YoY",
              destaque: "Google Cloud crescimento esperado em 28%. Publicidade ainda é o motor principal, mas pockets de fraqueza em segmentos de viagens e automóveis (guerra no Oriente Médio). Capex de US$ 175–185B confirmado — quase o dobro de 2025. Gemini 2.5 Pro gerando receita real no Cloud.",
              reacao: "🟢 Um dos destaques positivos do setor em 2026",
            },
            {
              empresa: "Amazon (AMZN)",
              receita: "~US$ 177B estimado",
              crescimento: "+14% YoY",
              destaque: "AWS crescimento esperado acima de 20% — o mais importante indicador. Capex de US$ 200B em 2026 (maior de todos os hyperscalers). Custos de frete elevados por combustível da guerra no Oriente Médio pressionando e-commerce. Projeto Amazon Leo (satélites) com US$ 1B em custos extras no trimestre.",
              reacao: "🟡 Dependia muito do crescimento do AWS",
            },
          ].map(({ empresa, receita, crescimento, destaque, reacao }) => (
            <div key={empresa} className="bg-card rounded-xl border border-invest/20 p-5">
              <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-sm text-invest">{empresa}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-invest/15 text-invest px-2 py-0.5 rounded-full font-bold">{receita}</span>
                  <span className="text-xs bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-bold">{crescimento}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{destaque}</p>
              <p className="text-xs font-medium">{reacao}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Número que Define 2026: US$ 600 Bilhões em Capex de IA
        </h2>
        <p>
          O dado mais impressionante desta semana não é o lucro de nenhuma empresa individual — é o capex combinado das quatro:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Empresa</th>
              <th className="text-left py-3 px-4">Capex 2026 (estimado)</th>
              <th className="text-left py-3 px-4">Capex 2025</th>
              <th className="text-left py-3 px-4">Crescimento</th>
              <th className="text-left py-3 px-4">Foco principal</th>
            </tr></thead>
            <tbody>
              {[
                ["Amazon (AWS)", "US$ ~200B", "US$ 131,8B", "+52%", "Data centers, chips proprietários, satélites Leo"],
                ["Alphabet (Google)", "US$ 175–185B", "US$ 91,4B", "+99%", "TPUs v5, data centers Gemini, Google Cloud"],
                ["Meta", "US$ 115–135B", "US$ 72,2B", "+63%", "Clusters GPU para Llama 4+, servidores de inferência"],
                ["Microsoft (Azure)", "~US$ 130B", "~US$ 90B", "+44%", "Azure AI, OpenAI infraestrutura, Copilot Stack"],
              ].map(([emp, cap26, cap25, cres, foco]) => (
                <tr key={emp} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest text-xs">{emp}</td>
                  <td className="py-3 px-4 font-bold text-xs">{cap26}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{cap25}</td>
                  <td className="py-3 px-4 text-green-400 font-bold text-xs">{cres}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{foco}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Total combinado: ~US$ 620–650B. Para contexto: todo o PIB da Suécia é cerca de US$ 600B.</p>
        </div>
        <p>
          Esse número tem implicações diretas para o investidor brasileiro. Toda essa infraestrutura exige <strong>chips da Nvidia, servidores da Dell e HPE, energia elétrica, resfriamento, fibra óptica</strong>. As empresas que fornecem a "picareta na corrida do ouro" da IA — a infraestrutura — estão entre as mais beneficiadas. No Brasil, investidores com exposição a NVDC34 (Nvidia) e aos ETFs de tech (QQQM, MAGS) são diretamente impactados por esse ciclo de capex.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-invest" />
          A Grande Surpresa: Tim Cook Deixa a Apple em Setembro de 2026
        </h2>
        <p>
          No meio da avalanche de resultados, o anúncio mais bombástico da semana veio da Apple: <strong>Tim Cook, CEO desde 2011, anunciou que deixará o cargo em 1º de setembro de 2026</strong>. Seu sucessor será <strong>John Ternus</strong>, atual chefe de hardware da Apple — responsável pelos chips M-series que revolucionaram os Macs e pelos designs dos iPhones mais recentes.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-3 text-sm">📋 O Legado de Tim Cook (2011–2026)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Apple Market Cap: US$ 350B → US$ 3,5 trilhões</li>
              <li>• Lançamento do Apple Watch, AirPods, Apple Silicon</li>
              <li>• Expansão da receita de serviços de 0 a US$ 100B+/ano</li>
              <li>• Expansão massiva na China — e recuo subsequente</li>
              <li>• Apple Vision Pro: ambicioso mas vendas abaixo do esperado</li>
              <li>• iPhone dominando o mercado premium global</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-invest/20 p-5">
            <h3 className="font-bold mb-3 text-sm text-invest">🔮 O Que Esperar de John Ternus</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Engenheiro de hardware — cultura diferente de Cook (operacional) e Jobs (design/marketing)</li>
              <li>• Responsável pelos chips M1, M2, M3 e A-series</li>
              <li>• Deve acelerar integração de IA nos produtos Apple (Apple Intelligence)</li>
              <li>• Postura mais técnica — menos foco em relações diplomáticas</li>
              <li>• Transição considerada "suave" por analistas — processo planejado</li>
            </ul>
          </div>
        </div>
        <p>
          O anúncio foi descrito como uma transição planejada — Cook continuará como Chairman do Conselho. Os analistas foram unânimes ao chamar de "a saída mais bem-gerenciada desde Steve Jobs nomeou Cook". A ação da Apple deve reagir na sessão de hoje (30/04) após reportar resultados do Q1.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Que os Resultados Significam para o Investidor Brasileiro
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "📊 Quem tem IVVB11 (ETF S&P 500)", impacto: "Os Mag-7 representam ~35% do S&P 500. Resultados fortes desta semana podem elevar o índice e valorizar o IVVB11 em reais — especialmente combinado com o dólar em R$ 5,01 (historicamente baixo). Se os resultados superarem expectativas, espere IVVB11 acima de R$ 350 nos próximos dias.", sinal: "🟢 Positivo" },
            { perfil: "📱 Quem tem AAPL34 (BDR da Apple)", impacto: "A saída de Tim Cook é um choque gerenciado. A ação pode cair no curto prazo por incerteza, mas o mercado tende a precificar transições planejadas com desconto temporário. O ponto de atenção real é o crescimento do iPhone na China e o progresso do Apple Intelligence.", sinal: "🟡 Neutro-negativo no curto prazo" },
            { perfil: "💻 Quem tem NVDC34 (Nvidia)", impacto: "O capex combinado de US$ 620B+ desta semana é o sinal mais bullish possível para a Nvidia. Cada US$ 1 de capex dos hyperscalers é, em grande parte, gasto em GPUs H100/H200/B200 da Nvidia. Se os guias de capex forem mantidos ou elevados, NVDC34 deve reagir positivamente.", sinal: "🟢 Muito positivo" },
            { perfil: "🌎 Impacto no Ibovespa", impacto: "Resultados fortes dos Mag-7 melhoram o apetite a risco global — capital volta a mercados emergentes como o Brasil. Combinado com dólar fraco e Selic em queda, isso cria ambiente favorável para fluxo estrangeiro para a B3.", sinal: "🟢 Positivo para bolsa BR" },
          ].map(({ perfil, impacto, sinal }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{perfil}</h3>
                <span className="text-xs font-bold">{sinal}</span>
              </div>
              <p className="text-sm text-muted-foreground">{impacto}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          A Questão Central: Os US$ 600B em Capex Vão se Pagar?
        </h2>
        <p>
          Esta é a pergunta de US$ 600 bilhões. Quando o capital investido em IA começa a gerar receita proporcional? Os sinais são mistos — mas com tendência positiva:
        </p>
        <ul>
          <li><strong>Positivos:</strong> Azure cresceu 39% puxado pelo AI; Google Cloud acelerou; AWS segue como líder de mercado. As empresas estão convertendo capex em receita mais rápido do que o esperado.</li>
          <li><strong>Preocupantes:</strong> O crescimento do capex (+52–99%) supera o crescimento da receita de cloud (+14–39%). A lucratividade do segmento de IA ainda não justifica os gastos em múltiplos casos.</li>
          <li><strong>O ciclo de depreciação:</strong> Com data centers depreciando em 20–25 anos, os custos de hoje serão amortizados por décadas — o que dá às empresas conforto para manter os investimentos mesmo com ROI de curto prazo não ideal.</li>
          <li><strong>O JPMorgan estima:</strong> que o capex de 2026 gera retorno mensuravelmente positivo para os hyperscalers a partir de 2027–2028 — quando a adoção enterprise de IA atingir escala crítica.</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você investe em alguma empresa do Mag-7? 📱</h3>
          <p className="text-muted-foreground">O que achou dos resultados e da saída do Tim Cook? Conta nos comentários! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional baseado em informações disponíveis em 30/04/2026. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>

      <RelatedPosts currentSlug="magnificent-seven-resultados-q1-2026-apple-tim-cook" />
      <CommentSection postId="magnificent-seven-resultados-q1-2026-apple-tim-cook" postTitle="Semana Mag-7: MSFT, Meta, Google e Amazon Reportam — e Tim Cook Sai da Apple" />
    </article>
  );
};

export default MagnificentSevenResultados2026;
