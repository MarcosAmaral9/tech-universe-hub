/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/acoes-crescimento-vs-dividendos-2026": {
 *   title: "Ações de Crescimento vs Dividendos em 2026: Qual Estratégia Escolher?",
 *   description: "Growth vs dividendos em 2026: IGC acumulou +180% vs IDIV +110% (+150% com reinvestimento) em 10 anos. Com Selic a 14,25%, dividendos competem com CDI bruto de 14,25%. Análise completa com exemplos na B3, simulações e quando combinar as duas estratégias.",
 *   keywords: "ações crescimento vs dividendos 2026, growth investing Brasil, value investing dividendos, IGC vs IDIV, growth stocks B3, dividendos vs renda fixa 2026, estratégia investimento ações, Magazine Luiza growth, WEGE3, RDOR3 crescimento B3",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, TrendingUp, AlertTriangle,
  BarChart3, Shield, Lightbulb, DollarSign, Target
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/acoes-crescimento-vs-dividendos-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AcoesCrescimentoVsDividendos2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "acoes-crescimento-vs-dividendos-2026",
      "Ações de Crescimento vs Dividendos em 2026: Qual Estratégia Escolher?",
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
            Ações · Growth · Dividendos · Estratégia · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ações de Crescimento vs Dividendos em 2026: Qual Estratégia Realmente Funciona?
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Entre 2016 e 2026, o índice de crescimento (IGC) subiu <strong>180%</strong>, mas o índice de dividendos (IDIV) subiu <strong>110% + ~40% em dividendos reinvestidos = ~150% no total</strong>. Com Selic a 14,25%, dividendos de BBAS3 (9,2%) e TAEE11 (8,5%) perdem para o CDI bruto — mas ganham depois do IR. Este guia explica as diferenças reais, exemplos na B3 e quando combinar as duas estratégias.
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
          alt="Ações de crescimento vs dividendos 2026 — qual estratégia escolher"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Comparativo de retorno histórico */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            Crescimento vs Dividendos — Retornos Históricos na B3
          </h2>
          <div className="space-y-3">
            {[
              { periodo: "2016–2026 (10 anos)", growth: "IGC: +180%", divy: "IDIV: +110% (+~40% divid. reinvestidos = ~150%)", obs: "Growth puro venceu, mas com volatilidade maior" },
              { periodo: "2020 (crise COVID)", growth: "IGC: −40%", divy: "IDIV: −20%", obs: "Dividendos mais resilientes em crise" },
              { periodo: "2021–2022 (juros subindo)", growth: "Growth sofreu forte", divy: "Dividendos relativamente estáveis", obs: "Juros altos prejudicam crescimento" },
              { periodo: "2023–2025 (recuperação)", growth: "Growth recuperou mais rápido", divy: "Dividendos consistentes", obs: "Crescimento se beneficia da queda de juros" },
              { periodo: "2026 (cenário atual)", growth: "Pressionado pela Selic 14,25%", divy: "DY 8%–12% vs CDI bruto 14,25%", obs: "Comparação pós-IR favorece dividendos" },
            ].map(({ periodo, growth, divy, obs }) => (
              <div key={periodo} className="grid grid-cols-1 md:grid-cols-4 gap-2 py-2 border-b border-border/30 text-xs">
                <span className="font-medium">{periodo}</span>
                <span className="text-blue-400">{growth}</span>
                <span className="text-invest">{divy}</span>
                <span className="text-muted-foreground italic">{obs}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Fonte: SpaceMoney (jun/26), B3 IGC e IDIV. Retorno total inclui dividendos reinvestidos. Rentabilidade passada não garante resultados futuros.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-invest" />
          A Diferença Filosófica: O Que Cada Estratégia Realmente Busca
        </h2>
        <p>
          Antes de entrar nos números, é preciso entender que <strong>crescimento (growth) e dividendos</strong> não são apenas estilos de carteira — são filosofias diferentes de construção de riqueza que refletem prioridades distintas sobre quando e como o retorno do investimento deve ser realizado.
        </p>
        <p>
          A <strong>estratégia de dividendos</strong> parte de uma premissa simples: o investidor quer ser pago enquanto espera. As empresas pagadoras de dividendos são tipicamente negócios maduros, dominantes em seus setores, com geração de caixa previsível e relativamente estável — bancos, utilities, empresas de energia, telecom. Como não precisam reinvestir grande parte dos lucros em crescimento acelerado, distribuem uma parcela alta do lucro líquido diretamente aos acionistas. O investidor recebe um fluxo de renda periódico (mensal, trimestral ou anual) que pode usar como renda complementar ou reinvestir para ampliar a posição.
        </p>
        <p>
          A <strong>estratégia de crescimento</strong> parte de uma premissa diferente: o investidor está disposto a esperar, sem receber dividendos relevantes agora, porque acredita que a empresa vai crescer de forma acelerada e o preço da ação refletirá esse crescimento no futuro. Empresas de crescimento tipicamente reinvestem praticamente todo o lucro — e muitas vezes operam com prejuízo nos primeiros anos — porque a prioridade é conquistar mercado, desenvolver tecnologia ou expandir para novos segmentos antes dos concorrentes. No Brasil, exemplos incluem empresas de tecnologia, saúde, varejo digital e agronegócio em expansão. O retorno vem principalmente pela <strong>valorização do preço da ação</strong>, não por dividendos — o que significa que o investidor só "realiza" o retorno quando vende.
        </p>
        <p>
          A síntese mais precisa da diferença filosófica, observada em diversas análises de mercado, é esta: o investidor de dividendos <em>quer ser pago enquanto espera</em>, enquanto o investidor de crescimento <em>está disposto a esperar para ser pago</em>. Nenhuma das duas é superior em todos os cenários — cada uma responde melhor a diferentes ambientes econômicos e a diferentes perfis de investidor.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Exemplos Reais na B3: Growth e Dividendos em 2026
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="font-bold text-sm text-blue-400 mb-3">📈 Ações de Crescimento (Growth) na B3</h3>
            <div className="space-y-3">
              {[
                { ticker: "WEGE3", empresa: "WEG", desc: "Motor elétrico, energia renovável e automação industrial. Crescimento consistente de lucros por mais de 20 anos, presença em 135 países. P/L alto mas justificado por ROE acima de 30%." },
                { ticker: "RDOR3", empresa: "Rede D'Or", desc: "Maior rede de hospitais privados do Brasil. Crescimento via aquisições e expansão de leitos. Lucro crescendo rapidamente, poucos dividendos — reinvestimento total no negócio." },
                { ticker: "TOTS3", empresa: "Totvs", desc: "Líder em softwares de gestão (ERP) no Brasil. Receita recorrente crescente, margens em expansão, modelo SaaS com alta previsibilidade." },
                { ticker: "LWSA3", empresa: "Locaweb", desc: "Plataforma de e-commerce e infraestrutura digital. Múltiplos ainda comprimidos pós-ajuste de 2022, mas crescimento de receita voltando a acelerar." },
              ].map(({ ticker, empresa, desc }) => (
                <div key={ticker} className="text-xs">
                  <p className="font-bold"><span className="font-mono text-blue-400">{ticker}</span> — {empresa}</p>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-invest/30 bg-invest/5 p-5">
            <h3 className="font-bold text-sm text-invest mb-3">💰 Ações de Dividendos na B3</h3>
            <div className="space-y-3">
              {[
                { ticker: "BBAS3", empresa: "Banco do Brasil", desc: "Banco público com payout elevado e DY histórico de 8% a 11%. Lucro previsível, carteira de crédito diversificada, menor alavancagem relativa." },
                { ticker: "TAEE11", empresa: "Taesa", desc: "Transmissão de energia com contratos de longo prazo indexados ao IPCA. DY estimado próximo de 9,5%. Receita protegida da inflação, baixa necessidade de capex." },
                { ticker: "BBSE3", empresa: "BB Seguridade", desc: "Seguradora foco-pure com modelo capital-light, ROE acima de 20% e DY histórico entre 8% e 12%. Dividend aristocrat brasileiro por excelência." },
                { ticker: "VIVT3", empresa: "Vivo (Telefônica)", desc: "Telecom com receitas recorrentes de assinaturas. DY estimado ~7,2%, histórico regular de pagamentos semestrais e anuais sem cortes relevantes." },
              ].map(({ ticker, empresa, desc }) => (
                <div key={ticker} className="text-xs">
                  <p className="font-bold"><span className="font-mono text-invest">{ticker}</span> — {empresa}</p>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          O Impacto da Selic Alta em Cada Estratégia
        </h2>
        <p>
          O ambiente de Selic elevada — 14,25% em meados de 2026 — afeta as duas estratégias de forma diferente, e entender esse impacto é crucial para calibrar expectativas.
        </p>
        <p>
          Para as <strong>ações de dividendos</strong>, o principal impacto é a competição com a renda fixa. Um CDB de banco médio pagando 110% do CDI entrega aproximadamente 15,7% bruto ao ano — bem acima do DY de 9% de BBAS3 ou 8,5% de TAEE11. Para justificar o risco de renda variável (volatilidade, risco setorial, risco de corte de dividendos), os dividendos de ações precisam ser avaliados em termos líquidos. Aqui a conta muda: os dividendos de ações brasileiras são isentos de IR para pessoa física, enquanto o CDB paga 20% de IR em 12 meses. Comparando: BBAS3 com DY de 9% isento equivale a um CDB pagando 11,25% bruto (= 9% ÷ 0,80). Ainda abaixo do CDB 110% CDI, mas a diferença é menor do que parece na comparação bruta.
        </p>
        <p>
          Para as <strong>ações de crescimento</strong>, o impacto é ainda mais direto: empresas que precisam de crédito para crescer veem seu custo de capital subir, o que comprime as margens e reduz o ritmo de expansão. O efeito mais sutil — mas igualmente relevante — é o impacto no valuation via taxa de desconto. Quando se calcula o valor presente dos lucros futuros de uma empresa de crescimento, a taxa de desconto usada (que reflete o custo de oportunidade) sobe junto com a Selic. Isso faz o valor presente dos lucros futuros cair, mesmo que os lucros projetados não se alterem. É por isso que múltiplos como P/L tendem a ser menores em ambientes de juros altos — o mercado desconta os lucros futuros com uma taxa mais exigente.
        </p>
        <p>
          O histórico desde 2021 confirma esse padrão na B3: o ciclo de alta da Selic de 2021 a 2023 penalizou desproporcionalmente as ações de crescimento — MGLU3, LREN3, NTCO3 — enquanto as ações de dividendos de utilities e bancos mostraram muito mais resiliência. Quando a Selic começa a cair, o movimento histórico é o inverso: as ações de crescimento tendem a recuperar mais rápido e com mais intensidade. Para 2026 e 2027, o timing da eventual queda da Selic é, portanto, um fator mais relevante para as ações de crescimento do que para as de dividendos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Quando Combinar as Duas: A Carteira Híbrida
        </h2>
        <p>
          A dicotomia entre crescimento e dividendos é, na prática, muito menos rígida do que os rótulos sugerem. As melhores carteiras de longo prazo raramente são puramente uma coisa ou outra. Há empresas na B3 que combinam crescimento consistente de lucros com pagamento regular de dividendos crescentes ao longo dos anos — WEG (WEGE3) é o exemplo mais citado, com décadas de crescimento de lucros e dividendos simultâneos, embora o DY seja baixo (2% a 3%) porque o preço da ação reflete o prêmio pelo crescimento.
        </p>
        <p>
          Para a maioria dos investidores pessoas físicas com horizonte de 10 a 20 anos, a estratégia mais robusta é uma carteira híbrida que equilibra as duas fontes de retorno: uma base de ações pagadoras de dividendos consistentes (40% a 60% da parcela de ações) para criar fluxo de caixa que pode ser reinvestido sistematicamente, combinada com uma parcela de empresas de crescimento de qualidade (40% a 60%) para capturar a valorização de negócios que vão se expandir significativamente ao longo das próximas décadas. O reinvestimento sistemático dos dividendos nas ações de crescimento cria um efeito de juros compostos que, no longo prazo, tende a produzir resultados superiores a qualquer uma das duas estratégias isoladas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Qual Escolher Conforme o Seu Perfil e Objetivo
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              perfil: "Aposentado ou pré-aposentado que precisa de renda agora",
              recomendacao: "Dividendos (60%) + renda fixa (30%) + crescimento (10%)",
              motivo: "Fluxo de caixa isento de IR complementa renda sem precisar vender ativos.",
            },
            {
              perfil: "Investidor de longo prazo (20+ anos) construindo patrimônio",
              recomendacao: "Crescimento (50%) + dividendos (30%) + ETFs (20%)",
              motivo: "Maximiza retorno total com reinvestimento sistemático dos dividendos nas posições de crescimento.",
            },
            {
              perfil: "Perfil conservador que quer renda variável mas com menos volatilidade",
              recomendacao: "Dividendos (70%) + FIIs (20%) + crescimento defensivo (10%)",
              motivo: "Empresas pagadoras de dividendos oscilam menos e oferecem renda recorrente que compensa psicologicamente as quedas.",
            },
            {
              perfil: "Investidor jovem (menos de 35 anos) com alta tolerância ao risco",
              recomendacao: "Crescimento (60%) + ETF internacional (20%) + dividendos (20%)",
              motivo: "Tempo é o principal ativo: maximizar exposição ao crescimento de longo prazo, com dividendos para reinvestir.",
            },
          ].map(({ perfil, recomendacao, motivo }) => (
            <div key={perfil} className="p-4 rounded-xl border border-border/50 bg-card/30">
              <p className="font-bold text-sm">{perfil}</p>
              <p className="text-xs text-invest mt-1 font-medium">{recomendacao}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{motivo}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Papel do Reinvestimento: Por Que a Disciplina Vale Mais do que o Estilo
        </h2>
        <p>
          O estudo mais frequentemente citado sobre retorno de longo prazo em bolsa de valores — o trabalho de Robert Shiller sobre o S&P 500 ao longo de mais de 100 anos — mostra que cerca de 40% a 50% do retorno total de uma carteira de ações ao longo de décadas vem do reinvestimento de dividendos, não da valorização do preço das ações em si. No Brasil, esse efeito é igualmente poderoso: o IBOVESPA Total Return (que considera o reinvestimento automático de todos os proventos) supera consistentemente o IBOVESPA de preços puros em qualquer janela de 5 anos ou mais. A diferença acumulada em 20 anos pode superar 60 a 80 pontos percentuais — uma distinção enorme que raramente aparece em comparações superficiais entre os dois índices.
        </p>
        <p>
          Isso significa que a pergunta certa não é "crescimento ou dividendos?" — é "como vou garantir que os proventos recebidos sejam sempre reinvestidos e não consumidos?" O investidor que recebe R$ 800 em dividendos de BBAS3 em dezembro e usa para pagar o cartão de crédito está efetivamente convertendo seu ativo de longo prazo em consumo de curto prazo, desfazendo o efeito composto que justifica investir em ações por décadas. O investidor que configura o reinvestimento automático dos dividendos na mesma corretora — seja nas mesmas ações, seja em ETFs — mantém o capital trabalhando ininterruptamente, capturando o retorno integral da posição ao longo do tempo.
        </p>
        <p>
          Para quem ainda está na fase de acumulação de patrimônio (sem necessidade do fluxo de dividendos como renda), a sugestão prática é tratar os proventos recebidos exatamente como um aporte mensal adicional — definir de antemão em qual ativo eles serão reinvestidos e executar a compra assim que o valor cair na conta da corretora, sem deixar o dinheiro parado. Essa disciplina operacional simples, repetida ao longo de anos, é o que separa uma carteira de R$ 200.000 em 15 anos de uma carteira de R$ 350.000 nos mesmos 15 anos, com os mesmos aportes mensais de base.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de compra ou venda de ações. Rentabilidade passada não garante resultados futuros. Consulte um assessor de investimentos certificado pela CVM antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a guerra entre crescimento e dividendos é falsa — o reinvestimento é o que realmente importa">
        <p>
          A polarização entre "investidor de dividendos" e "investidor de crescimento" é um dos debates mais improdutivos do mercado financeiro. Na prática, o que separa carteiras bem-sucedidas de carteiras mediocres não é o estilo escolhido — é a disciplina de reinvestir os proventos sistematicamente, independentemente de onde eles vêm.
        </p>
        <p className="mt-2">
          Um investidor que recebe dividendos de BBAS3 e os reinveste automaticamente em WEGE3 está simultaneamente capturando o fluxo de caixa de uma estratégia de dividendos e o crescimento composto de uma empresa de qualidade. Isso não é crescimento nem dividendos — é o único jeito de construir patrimônio real de longo prazo. <strong>O debate certo não é "qual estilo é melhor" — é "você realmente reinveste tudo ou vai gastando no caminho?"</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Ações de Crescimento vs Dividendos: Qual Escolher Agora? — SpaceMoney",
            url: "https://www.spacemoney.com.br/educacao-financeira/acoes-de-crescimento-vs-dividendos-qual-escolher-agora/",
            publisher: "SpaceMoney",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ações de Crescimento vs Ações de Dividendos em 2016–2026: IGC vs IDIV",
            url: "https://www.spacemoney.com.br/educacao-financeira/acoes-de-crescimento-vs-acoes-de-dividendos/",
            publisher: "SpaceMoney",
            accessedAt: "Julho 2026",
          },
          {
            title: "Growth vs Value: Qual a Melhor Estratégia na B3 em 2026?",
            url: "https://brapi.dev/blog/acoes-growth-vs-value-brasil",
            publisher: "Brapi.dev",
            accessedAt: "Julho 2026",
          },
          {
            title: "Crescimento vs Dividendos: A Diferença Filosófica Central",
            url: "https://lucianorocha.substack.com/p/dzcm-90-crescimento-vs-dividendos",
            publisher: "DZCM Newsletter — Luciano Rocha",
            accessedAt: "Julho 2026",
          },
          {
            title: "B3 — Índice de Dividendos (IDIV) e Índice de Governança Corporativa (IGC)",
            url: "https://www.b3.com.br/pt_br/market-data-e-indices/indices/indices-de-governanca/",
            publisher: "B3 — Brasil, Bolsa, Balcão",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ações de Dividendos, Valor e Crescimento: Entenda Diferenças e Como Investir",
            url: "https://blog.terrainvestimentos.com.br/acoes-de-crescimento-valor-ou-dividendos-o-que-e-melhor/",
            publisher: "Terra Investimentos",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="acoes-crescimento-vs-dividendos-2026" />
      <CommentSection
        postId="acoes-crescimento-vs-dividendos-2026"
        postTitle="Ações de Crescimento vs Dividendos em 2026: Qual Estratégia Escolher?"
        category="invest"
      />
    </article>
  );
};

export default AcoesCrescimentoVsDividendos2026;
