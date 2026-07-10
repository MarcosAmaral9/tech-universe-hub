/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/acoes-dividendos-2026-melhores-pagadoras-b3": {
 *   title: "Ações de Dividendos 2026: As Melhores Pagadoras da B3 e Como Escolher",
 *   description: "As melhores ações de dividendos da B3 em 2026: ITUB4, BBAS3, TAEE11, PETR4, ALOS3 e mais. DY real, diferença entre dividendos e JCP (17,5% IR), e como montar uma carteira de renda.",
 *   keywords: "ações dividendos 2026, dividend yield B3, melhores pagadoras dividendos, ITUB4 dividendos, PETR4 dividendos, TAEE11, BBAS3 dividendos, JCP 2026, carteira dividendos Brasil, renda passiva ações",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, DollarSign, AlertTriangle, BarChart3, Shield, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/acoes-dividendos-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AcoesDividendos2026 = () => {
  useEffect(() => {
    trackArticleRead("acoes-dividendos-2026-melhores-pagadoras-b3", "Ações de Dividendos 2026: As Melhores Pagadoras da B3", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Ações · Dividendos · Renda Passiva · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ações de Dividendos em 2026: As Melhores Pagadoras da B3 e Como Montar uma Carteira de Renda
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Com dividend yields acima de 9% ao ano em diversas empresas e a nova tributação de <strong>JCP elevada para 17,5%</strong> a partir de 2026, escolher boas pagadoras de dividendos na B3 ficou mais técnico. Este guia apresenta as ações mais consistentes, explica a diferença entre dividendos isentos e JCP tributado, e mostra como construir uma carteira de renda passiva que aguenta juros altos e incerteza política.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="Ações de dividendos 2026 — melhores pagadoras da B3"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Destaque das melhores */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-invest" />
            Maiores Pagadoras de Dividendos — 1º Semestre 2026 (Ibovespa)
          </h2>
          <div className="space-y-3">
            {[
              { ticker: "RECV3", empresa: "PetroRecôncavo", setor: "Petróleo e Gás", dy: "12,06%", obs: "Líder do semestre" },
              { ticker: "CPLE3", empresa: "Copel", setor: "Energia Elétrica", dy: "8,67%", obs: "Corporatização recente" },
              { ticker: "ITSA4", empresa: "Itaúsa", setor: "Holding Financeira", dy: "12,19% (12m)", obs: "Maior DY 12m do ranking" },
              { ticker: "ALOS3", empresa: "Allos", setor: "Shopping Centers", dy: "12,10% (12m)", obs: "7 das 10 carteiras recomendam" },
              { ticker: "PETR4", empresa: "Petrobras", setor: "Petróleo e Gás", dy: "9,46% (12m)", obs: "6 recomendações no período" },
              { ticker: "VALE3", empresa: "Vale", setor: "Mineração", dy: "10,40% (12m)", obs: "Cobre e níquel impulsionam" },
            ].map(({ ticker, empresa, setor, dy, obs }) => (
              <div key={ticker} className="flex items-center justify-between py-2 border-b border-border/40 gap-2 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-invest text-sm w-12">{ticker}</span>
                  <div>
                    <p className="font-medium text-sm">{empresa}</p>
                    <p className="text-xs text-muted-foreground">{setor} · {obs}</p>
                  </div>
                </div>
                <span className="font-bold text-invest">{dy}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Fonte: InfoMoney/Elos Ayta · Dados do 1º semestre de 2026 · DY passado não garante pagamento futuro</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Dividendos vs JCP: A Diferença Que Impacta Quanto Você Recebe de Verdade
        </h2>
        <p>
          Antes de olhar para qualquer ação como fonte de renda, é preciso entender a distinção fundamental entre os dois mecanismos pelos quais as empresas brasileiras distribuem resultados aos acionistas: os <strong>dividendos</strong> e os <strong>Juros sobre Capital Próprio (JCP)</strong>. A confusão entre os dois é a principal causa de surpresas negativas para quem investe em carteiras de renda passiva.
        </p>
        <p>
          Os <strong>dividendos</strong> são a parcela do lucro líquido distribuída diretamente aos acionistas. Para a pessoa física residente no Brasil, os dividendos recebidos de empresas brasileiras continuam isentos de Imposto de Renda na fonte — o dinheiro cai na conta da corretora no valor bruto anunciado pela empresa, sem desconto automático. Esse benefício, que existe no Brasil desde 1996, foi parcialmente alterado pela Lei 15.270/2025 apenas para casos em que um único pagador distribui mais de R$ 50.000 por mês a um mesmo CPF — um limite irrelevante para a esmagadora maioria dos investidores de varejo.
        </p>
        <p>
          O <strong>JCP</strong> funciona de forma diferente. Previsto no artigo 9º da Lei 9.249/1995, é um mecanismo pelo qual a empresa remunera seus acionistas deduzindo o valor pago como despesa financeira de seu próprio lucro tributável — o que reduz o IRPJ e a CSLL que a empresa paga. Em troca, quem recebe o JCP paga Imposto de Renda retido na fonte. A alíquota era de 15% até dezembro de 2025. A partir de 1º de janeiro de 2026, por força da <strong>Lei Complementar 224/2025</strong>, a alíquota do IRRF sobre JCP foi elevada para <strong>17,5%</strong>. Isso significa que, para cada R$ 100,00 anunciados pela empresa em JCP, o acionista pessoa física recebe R$ 82,50 líquidos na conta da corretora — os R$ 17,50 restantes são retidos e recolhidos pela própria empresa à Receita Federal.
        </p>
        <p>
          Na prática, muitos comunicados de empresas da B3 anunciam proventos mistos — parte como dividendos isentos, parte como JCP tributado. Para calcular o rendimento líquido real de qualquer pagamento de proventos, é preciso identificar qual parcela é dividendo (sem IR) e qual é JCP (17,5% de IR na fonte), e somar apenas os valores líquidos. O informe de rendimentos da corretora discrimina essa separação anualmente, e ambas precisam ser declaradas de formas diferentes no IRPF: dividendos em "Rendimentos Isentos e Não Tributáveis" e JCP em "Rendimentos Sujeitos à Tributação Exclusiva/Definitiva".
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          As Ações Mais Consistentes Para Renda em 2026: Setor por Setor
        </h2>
        <p>
          A consistência de pagamento de dividendos ao longo do tempo vale mais do que o maior dividend yield em um único ano. Um DY altíssimo pode ser resultado de uma queda no preço da ação (o que piora o patrimônio do investidor), de um pagamento extraordinário não recorrente (que não se repete no ano seguinte), ou de uma política de payout insustentável que consome caixa que deveria ir para investimentos. As ações mais atrativas para carteiras de renda em 2026 são aquelas que combinam dividend yield competitivo, histórico de pagamentos consistentes, geração de caixa previsível e baixo endividamento relativo.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              setor: "🏦 Setor Financeiro",
              acoes: ["ITUB4 — Itaú Unibanco: DY projetado ~8,5%, maior banco privado do Brasil, carteira de crédito estável", "BBAS3 — Banco do Brasil: DY historicamente entre 8% e 11%, banco público com payout elevado", "BBSE3 — BB Seguridade: seguradora focada, modelo capital-light, DY acima de 9%", "ITSA4 — Itaúsa: holding do Itaú com desconto sobre NAV, DY de 12,19% em 12 meses"],
              cor: "border-blue-500/30 bg-blue-500/5",
            },
            {
              setor: "⚡ Energia Elétrica e Transmissão",
              acoes: ["TAEE11 — Taesa: contratos longos de transmissão indexados ao IPCA, DY estimado ~9,5%", "TRPL4 — Transmissão Paulista: perfil similar à Taesa, DY de 7%–10%", "CMIG4 — Cemig: geração e distribuição em MG, DY variável entre 6% e 12%", "CPLE3 — Copel: após corporatização, DY de 8,67% no 1º semestre de 2026"],
              cor: "border-yellow-500/30 bg-yellow-500/5",
            },
            {
              setor: "🛢️ Petróleo, Gás e Mineração",
              acoes: ["PETR4 — Petrobras: DY de 9,46% em 12 meses, 2,2M barris/dia no pré-sal, custo baixo", "RECV3 — PetroRecôncavo: liderou pagamentos no 1º sem. 2026 com 12,06% de DY", "VALE3 — Vale: DY de 10,40% em 12 meses, cobre e níquel diversificam receita", "AXIA3 — Axia Energia: em fase inicial, mais de R$ 8B pagos desde 2025, DY ~9%"],
              cor: "border-orange-500/30 bg-orange-500/5",
            },
            {
              setor: "📞 Telecom e Shoppings",
              acoes: ["VIVT3 — Vivo (Telefônica): receitas recorrentes, DY estimado ~7,2%, histórico regular", "ALOS3 — Allos: 55 shoppings no Brasil, DY de 12,10% em 12m, guidance para 2026", "DIRR3 — Direcional: foco em habitação popular (MCMV), menor sensibilidade ao ciclo"],
              cor: "border-purple-500/30 bg-purple-500/5",
            },
          ].map(({ setor, acoes, cor }) => (
            <div key={setor} className={`rounded-xl border p-5 ${cor}`}>
              <h3 className="font-bold text-sm mb-3">{setor}</h3>
              <ul className="space-y-2">
                {acoes.map(a => (
                  <li key={a} className="text-xs text-muted-foreground leading-relaxed">{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          As Armadilhas do Dividend Yield Alto: Quando o DY Elevado É Sinal de Risco
        </h2>
        <p>
          O <strong>dividend yield</strong> é calculado dividindo os proventos pagos nos últimos 12 meses pelo preço atual da ação. Esse cálculo cria uma distorção importante que todo investidor de dividendos precisa conhecer: quando o preço da ação cai significativamente, o DY sobe — mesmo que o pagamento de dividendos não tenha aumentado. Um DY de 15% ou 20% pode parecer extremamente atrativo, mas muitas vezes indica que o mercado está precificando algum problema estrutural ou risco elevado naquela empresa — queda de lucros futuros, alto endividamento, mudança regulatória desfavorável, ou simplesmente uma venda forçada por grandes investidores.
        </p>
        <p>
          Esse fenômeno é chamado de <strong>armadilha de valor</strong> (value trap) no jargão do mercado. O investidor entra atraído pelo DY alto, mas descobrirá pouco depois que os dividendos futuros foram cortados — porque a empresa não tem caixa suficiente para manter aquele payout — enquanto o preço da ação segue caindo. Para evitar essa armadilha, é fundamental analisar o DY em conjunto com outros indicadores: o <strong>payout ratio</strong> (percentual do lucro líquido distribuído como dividendos — acima de 90% por vários anos consecutivos é insustentável para a maioria das empresas), a <strong>geração de caixa livre</strong> (o dividendo deve ser pago com caixa operacional, não com endividamento adicional), e o <strong>histórico de pagamentos</strong> dos últimos cinco a dez anos sem cortes significativos. Empresas que cortaram dividendos em crises passadas tendem a fazer o mesmo em crises futuras.
        </p>
        <p>
          Em 2026, o ambiente de juros elevados criou outro fator de risco específico para ações de dividendos: a competição com a renda fixa. Com Tesouro Selic e CDBs pagando acima de 13% bruto ao ano, uma ação com DY de 8% ao ano enfrenta uma concorrência muito mais dura do que enfrentaria em um ambiente de Selic a 3%, como em 2020. Isso pressiona o preço das ações de dividendos, já que muitos investidores racionais migram parte de seus recursos para renda fixa quando ela paga bem. O resultado é que empresas pagadoras de dividendos tendem a apresentar valorização mais modesta em ambientes de juros altos — o que não as torna investimentos ruins, mas exige que o investidor dimensione corretamente a expectativa de retorno total (DY + valorização da ação), e não apenas do DY isolado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Como Montar uma Carteira de Dividendos Defensiva em 2026
        </h2>
        <p>
          Uma carteira de dividendos bem construída para 2026 deve equilibrar quatro características: <strong>diversificação setorial</strong> (nunca concentrar mais de 30% a 40% em um único setor, para reduzir o risco de um evento específico destruir a renda da carteira inteira), <strong>consistência histórica de pagamentos</strong> (preferir empresas com pelo menos cinco anos de dividendos sem cortes significativos), <strong>baixa sensibilidade ao ciclo econômico</strong> (utilities, bancos grandes e empresas de consumo básico tendem a manter dividendos mesmo em recessões) e <strong>valuation razoável</strong> (evitar pagar caro por uma empresa apenas pelo DY alto, já que o preço de entrada determina o DY efetivo da posição).
        </p>
        <p>
          Uma estrutura razoável para uma carteira de dividendos diversificada em 2026 envolve exposição a pelo menos quatro setores diferentes: setor financeiro (bancos grandes como ITUB4 e BBAS3 e holdings como ITSA4, pelo histórico de pagamentos e geração de caixa previsível), transmissão de energia (TAEE11 e TRPL4, pelos contratos longos de receita regulada com correção anual pelo IPCA), petróleo e mineração (PETR4 e VALE3, pelo volume de caixa gerado e pela política de dividendos extraordinários em anos de lucros elevados) e shoppings ou telecomunicações (ALOS3 e VIVT3, pela previsibilidade da receita de aluguel e assinaturas). Dentro de cada setor, manter no máximo duas ou três posições por vez reduz o risco sem aumentar excessivamente a complexidade de acompanhamento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Dividendos de Ações vs Rendimentos de FIIs: Qual Faz Mais Sentido na Carteira?
        </h2>
        <p>
          Uma dúvida frequente de quem está construindo uma carteira de renda passiva é como dividir a alocação entre <strong>ações pagadoras de dividendos</strong> e <strong>Fundos de Investimento Imobiliário (FIIs)</strong>. Os dois instrumentos são complementares, não substitutos. Os FIIs oferecem pagamentos mensais e isenção total de IR sobre os rendimentos distribuídos (dentro das regras da Lei 11.196/2005), o que os torna mais previsíveis para quem precisa de fluxo de caixa regular. As ações pagadoras de dividendos, por outro lado, oferecem potencial adicional de valorização do preço da ação ao longo do tempo — algo que os FIIs entregam de forma mais limitada — e maior participação na criação de valor de empresas que crescem.
        </p>
        <p>
          Uma divisão comum sugerida por planejadores financeiros para carteiras de renda passiva no Brasil é entre 40% e 60% em FIIs (para a previsibilidade do fluxo mensal isento) e entre 40% e 60% em ações pagadoras de dividendos (para o crescimento do patrimônio e potencial de aumento dos proventos ao longo dos anos). Dentro das ações, preferir empresas com histórico de crescimento do dividendo por ação ao longo do tempo — não apenas um DY alto estático — tende a produzir melhores resultados de longo prazo, pois os dividendos crescentes protegem o poder de compra da renda passiva contra a inflação ao longo das décadas.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de compra ou venda de ativos. Dividend yield passado não garante pagamentos futuros. Consulte um assessor de investimentos credenciado pela CVM antes de tomar decisões de investimento.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: DY alto sem análise de payout é o erro clássico do investidor iniciante">
        <p>
          O erro que mais vejo em carteiras de dividendos enviadas para revisão é a concentração em dois ou três setores com os maiores DYs do momento — geralmente petróleo e bancos — sem qualquer diversificação. Em 2022, muita gente ficou concentrada em PETR4 com DY aparentemente enorme, sem entender que aquele pagamento incluía dividendos extraordinários que não se repetem todo ano. O investidor que entrou pelo DY alto e saiu pelo preço baixo foi duas vezes prejudicado.
        </p>
        <p className="mt-2">
          A chave para uma carteira de dividendos que realmente funciona é simples na teoria, difícil na prática: <strong>priorizar consistência sobre magnitude</strong>. Uma empresa que paga 7% ao ano por 10 anos seguidos, sem cortes, vale muito mais para uma carteira de renda do que uma que paga 15% em um ano e zero nos dois seguintes. ITUB4, BBSE3 e TAEE11 estão na maioria das carteiras de renda por uma razão — não porque pagam o mais, mas porque pagam sempre.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Maiores Pagadoras de Dividendos do 1º Semestre de 2026 — Ibovespa",
            url: "https://www.infomoney.com.br/onde-investir/maiores-pagadoras-dividendos-1o-semestre-mais-recomendadas-julho-2026/",
            publisher: "InfoMoney / Elos Ayta",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei Complementar nº 224/2025 — Alíquota IRRF sobre JCP elevada para 17,5%",
            url: "https://blog.econeteditora.com.br/novas-regras-jcp-base-calculo-irrf-2026/",
            publisher: "Econet Editora",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 9.249/1995 — Juros sobre Capital Próprio (JCP): Base Legal",
            url: "https://www.planalto.gov.br/ccivil_03/leis/l9249.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "Dividendos 2026: ITUB4, BBSE3, PETR4 e TAEE11 lideram lista defensiva",
            url: "https://melhorinvestimento.net/noticias/dividendos-2026-acoes-itub4-bbse3-petr4-taee11-vivt3",
            publisher: "Melhor Investimento / E-Investidor",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ranking de Maiores Dividend Yields da B3 — Julho 2026",
            url: "https://www.redentia.com.br/ranking/maiores-dividend-yield",
            publisher: "Redentia",
            accessedAt: "Julho 2026",
          },
          {
            title: "CVM — Guia do Investidor: Ações e Proventos",
            url: "https://www.investidor.gov.br/menu/Menu_Investidor/produtos/Produto_RendaVariavel.html",
            publisher: "Comissão de Valores Mobiliários (CVM)",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="acoes-dividendos-2026-melhores-pagadoras-b3" />
      <CommentSection
        postId="acoes-dividendos-2026-melhores-pagadoras-b3"
        postTitle="Ações de Dividendos em 2026: As Melhores Pagadoras da B3"
        category="invest"
      />
    </article>
  );
};

export default AcoesDividendos2026;
