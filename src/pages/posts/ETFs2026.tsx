import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Globe, AlertTriangle, CheckCircle, ChevronRight, Shield, Zap, DollarSign } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/etfs-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ETF_TABLE = [
  { ticker: "BOVA11",  indice: "Ibovespa",         tipo: "Nacional",       taxa: "0,10%", nota: "O mais negociado do Brasil. Exposição às 80+ maiores empresas da B3." },
  { ticker: "BOVV11",  indice: "Ibovespa",         tipo: "Nacional",       taxa: "0,04%", nota: "Menor taxa de todos os ETFs de Ibovespa — ideal para quem otimiza custos." },
  { ticker: "SMAL11",  indice: "SMLL (Small Caps)",tipo: "Nacional",       taxa: "0,50%", nota: "Empresas menores com maior potencial de valorização — maior volatilidade." },
  { ticker: "DIVO11",  indice: "IDIV",             tipo: "Nacional",       taxa: "0,50%", nota: "Foco em empresas pagadoras de dividendos consistentes." },
  { ticker: "IVVB11",  indice: "S&P 500 (EUA)",    tipo: "Internacional",  taxa: "0,23%", nota: "As 500 maiores empresas dos EUA. Maior ETF internacional do Brasil." },
  { ticker: "NASD11",  indice: "Nasdaq-100 (EUA)", tipo: "Internacional",  taxa: "0,30%", nota: "Foco em gigantes de tecnologia: Apple, Microsoft, Nvidia, Google." },
  { ticker: "EURP11",  indice: "Europa",           tipo: "Internacional",  taxa: "0,40%", nota: "Ações europeias diversificadas: UK, Alemanha, França, Suíça." },
  { ticker: "XINA11",  indice: "China",            tipo: "Internacional",  taxa: "0,45%", nota: "Grandes empresas chinesas listadas em Hong Kong e EUA." },
  { ticker: "IMAB11",  indice: "IMA-B (IPCA+)",    tipo: "Renda Fixa",     taxa: "0,25%", nota: "Títulos públicos atrelados ao IPCA. Proteção contra inflação." },
  { ticker: "IRFM11",  indice: "IRF-M (Prefixado)",tipo: "Renda Fixa",     taxa: "0,25%", nota: "Títulos prefixados do governo. Bom para travar taxa alta antes do corte." },
  { ticker: "B5P211",  indice: "IMA-B 5 (IPCA+)",  tipo: "Renda Fixa",     taxa: "0,20%", nota: "NTN-B com vencimento até 5 anos — menos volatilidade que o IMAB11." },
];

const PORTFOLIOS = [
  { nome: "🟢 Conservador", alocacao: [{ etf: "IMAB11", pct: 50 }, { etf: "BOVA11", pct: 20 }, { etf: "IVVB11", pct: 30 }], desc: "Ideal para prazo de 2–5 anos. Prioriza proteção contra inflação com renda fixa e exposição moderada à bolsa nacional e internacional." },
  { nome: "🟡 Moderado", alocacao: [{ etf: "IMAB11", pct: 30 }, { etf: "BOVA11 / BOVV11", pct: 30 }, { etf: "IVVB11", pct: 25 }, { etf: "NASD11", pct: 15 }], desc: "Para horizonte de 5–10 anos. Equilibra proteção inflacionária com crescimento via bolsa brasileira e americana." },
  { nome: "🔴 Arrojado", alocacao: [{ etf: "IMAB11", pct: 10 }, { etf: "BOVA11", pct: 20 }, { etf: "SMAL11", pct: 15 }, { etf: "IVVB11", pct: 30 }, { etf: "NASD11", pct: 25 }], desc: "Para horizonte de 10+ anos. Máxima exposição a renda variável. Aceita volatilidade em troca de maior potencial de retorno." },
];

const ETFs2026 = () => {
  useEffect(() => {
    trackArticleRead("etfs-2026-guia-completo-investir", "ETFs em 2026: Guia Completo Para Investir com Diversificação", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">ETFs · Fundos de Índice · Diversificação</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          ETFs em 2026: Guia Completo Para Investir com Diversificação e Baixo Custo
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Os <strong>ETFs em 2026</strong> são a forma mais inteligente de diversificar investimentos pagando quase nada de taxa — com mais de 120 opções disponíveis na B3, de BOVA11 a IVVB11. Este guia explica o que são, quais os melhores, como montar portfólios por perfil e os erros que destroem retorno.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async" src={heroImg} alt="ETFs em 2026 — guia completo fundos de índice BOVA11 IVVB11 B3" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <p className="lead text-xl text-muted-foreground">
          <strong>ETFs em 2026</strong> são a estratégia favorita de quem quer diversificação real sem pagar caro por isso. Um único ETF pode dar exposição a 500 empresas americanas ou ao Ibovespa inteiro com taxa de administração de apenas 0,04% ao ano — menos que a taxa de administração de qualquer fundo de ações ativo do mercado. E o mercado brasileiro de ETFs nunca foi tão rico em opções.
        </p>

        <p>
          Para entender o tamanho da virada, vale lembrar o ponto de partida: em 2010, o investidor brasileiro tinha acesso a menos de 10 ETFs na B3, quase todos replicando o Ibovespa. Hoje, com mais de 120 opções, é possível montar uma carteira global completa — ações americanas, europeias, chinesas, renda fixa indexada à inflação, small caps brasileiras — tudo via home broker, com liquidez diária e sem necessidade de conta no exterior. Essa democratização de acesso é, sem exagero, uma das maiores transformações da década para o investidor de varejo brasileiro.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Que São ETFs e Por Que Investir Neles em 2026
        </h2>
        <p>
          Um <strong>ETF (Exchange Traded Fund)</strong> é um fundo de investimento negociado em bolsa que replica automaticamente o desempenho de um índice, setor ou classe de ativos. Em vez de comprar 80 ações individualmente para montar uma carteira diversificada, você compra uma única cota de BOVA11 e já tem exposição a todas as empresas do Ibovespa, nas proporções exatas do índice.
        </p>
        <p>
          O modelo nasceu nos EUA em 1993 com o SPY (que replica o S&P 500) e chegou ao Brasil em 2004. Em 2026, o mercado brasileiro conta com mais de 120 ETFs listados, cobrindo renda variável nacional, internacional e renda fixa. A gestão é passiva — não há equipe de analistas tentando "bater o mercado" — e essa simplicidade é justamente o que torna o produto tão poderoso no longo prazo. As vantagens são difíceis de ignorar:
        </p>

        <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { icon: <Globe className="h-5 w-5 text-invest" />, titulo: "Diversificação instantânea", desc: "Uma cota = dezenas ou centenas de ativos simultâneos." },
            { icon: <DollarSign className="h-5 w-5 text-invest" />, titulo: "Taxas baixíssimas", desc: "De 0,04% a 0,50% ao ano — até 20× mais barato que fundos ativos." },
            { icon: <Zap className="h-5 w-5 text-invest" />, titulo: "Liquidez diária", desc: "Compra e venda durante o pregão como qualquer ação da B3." },
            { icon: <Shield className="h-5 w-5 text-invest" />, titulo: "Transparência total", desc: "Composição do fundo pública e atualizada diariamente." },
            { icon: <BarChart3 className="h-5 w-5 text-invest" />, titulo: "Acessibilidade", desc: "Cotas a partir de R$ 10. Sem aplicação mínima elevada." },
            { icon: <TrendingUp className="h-5 w-5 text-invest" />, titulo: "Retorno consistente", desc: "90% dos fundos ativos perdem para o índice em 15+ anos." },
          ].map(({ icon, titulo, desc }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">{icon}<span className="font-bold text-sm">{titulo}</span></div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Melhores ETFs da B3 em 2026: Tabela Completa
        </h2>
        <p>
          Abaixo estão os principais ETFs disponíveis para o investidor brasileiro em 2026, organizados por tipo. As taxas de administração são anuais e incidem diariamente sobre o patrimônio do fundo — sem cobrança separada pelo investidor. Note como a diferença entre o BOVV11 (0,04%) e ETFs temáticos (0,40–0,50%) pode parecer pequena no papel, mas em horizontes de 20+ anos representa diferença de milhares de reais no patrimônio final:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Ticker</th>
                <th className="text-left py-3 px-4 font-bold">Índice/Referência</th>
                <th className="text-left py-3 px-4 font-bold">Tipo</th>
                <th className="text-left py-3 px-4 font-bold">Taxa a.a.</th>
                <th className="text-left py-3 px-4 font-bold">Observação</th>
              </tr>
            </thead>
            <tbody>
              {ETF_TABLE.map((etf, i) => (
                <tr key={etf.ticker} className={`border-t border-border ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                  <td className="py-3 px-4 font-bold text-invest font-mono">{etf.ticker}</td>
                  <td className="py-3 px-4 text-xs">{etf.indice}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      etf.tipo === "Nacional" ? "bg-emerald-500/15 text-emerald-400" :
                      etf.tipo === "Internacional" ? "bg-blue-500/15 text-blue-400" :
                      "bg-amber-500/15 text-amber-400"
                    }`}>{etf.tipo}</span>
                  </td>
                  <td className="py-3 px-4 font-medium text-xs">{etf.taxa}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{etf.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Taxas vigentes em março/2026. Verifique no site da B3 ou na sua corretora antes de investir.</p>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Tributação de ETFs em 2026: O Que Mudou
        </h2>
        <p>
          A tributação de ETFs no Brasil tem duas regras distintas dependendo do tipo, e entender isso evita surpresas no IR. Uma confusão muito comum é o investidor assumir que ETFs de ações têm a mesma isenção de R$ 20.000/mês das ações individuais — não têm. Essa diferença, sutil, mas importante, já gerou autuações para muitos investidores que venderam BOVA11 abaixo de R$ 20.000 achando que estavam isentos:
        </p>

        <div className="not-prose space-y-3 my-6">
          {[
            { titulo: "ETFs de Renda Variável (BOVA11, IVVB11, SMAL11…)", descricao: "Alíquota de 15% sobre o lucro na venda. Não existe a isenção de R$ 20.000/mês que vale para ações. O IR é recolhido via DARF até o último dia útil do mês seguinte à venda. Não há come-cotas.", cor: "border-blue-500/30 bg-blue-500/5" },
            { titulo: "ETFs de Renda Fixa (IMAB11, IRFM11, B5P211…)", descricao: "Sujeitos à tabela regressiva de IR: 25% (até 180 dias), 20% (181–360 dias), 15% (361–720 dias) e 15% (acima de 720 dias). Incide come-cotas semestral (maio e novembro) como os fundos de renda fixa tradicionais.", cor: "border-amber-500/30 bg-amber-500/5" },
          ].map(({ titulo, descricao, cor }) => (
            <div key={titulo} className={`rounded-xl border p-5 ${cor}`}>
              <h3 className="font-bold text-sm mb-2">{titulo}</h3>
              <p className="text-xs text-muted-foreground">{descricao}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          Portfólios Modelo com ETFs por Perfil
        </h2>
        <p>
          A estratégia mais comprovada é o <strong>investimento passivo com aportes regulares</strong> (Dollar Cost Averaging — DCA): comprar parcelas fixas mensalmente independentemente do preço. Estudos da S&P Dow Jones mostram que fundos passivos superam entre 85% e 92% dos gestores ativos em períodos de 15 anos. A razão é estatística, não circunstancial: para um gestor ativo bater o índice consistentemente, ele precisa acertar mais do que erra em centenas de decisões ao longo de décadas — e os custos extras de gestão (1,5–2% ao ano) consomem boa parte de qualquer vantagem que ele eventualmente consiga gerar. Veja três portfólios completos, organizados por horizonte de tempo e tolerância a oscilações:
        </p>

        <div className="not-prose space-y-4 my-6">
          {PORTFOLIOS.map(({ nome, alocacao, desc }) => (
            <div key={nome} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold mb-3">{nome}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {alocacao.map(({ etf, pct }) => (
                  <span key={etf} className="px-3 py-1 bg-invest/10 text-invest rounded-full text-xs font-mono font-bold">{pct}% {etf}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          5 Erros Comuns ao Investir em ETFs em 2026
        </h2>

        <div className="not-prose space-y-3 my-6">
          {[
            { n: "1", titulo: "Ignorar a liquidez do ETF", desc: "ETFs com volume financeiro diário abaixo de R$ 500.000 podem ter spread alto entre compra e venda, elevando o custo real da operação. Prefira os mais negociados como BOVA11, IVVB11 e BOVV11." },
            { n: "2", titulo: "Não declarar no IR", desc: "Vendas de ETFs de renda variável com lucro exigem DARF até o último dia útil do mês seguinte. O não pagamento gera multa e juros — não existe isenção de R$ 20.000 como nas ações individuais." },
            { n: "3", titulo: "Concentrar em um único ETF", desc: "IVVB11 sozinho expõe 100% do portfólio ao S&P 500 e à variação cambial. Diversifique entre classes: renda fixa (IMAB11) + nacional (BOVA11) + internacional (IVVB11)." },
            { n: "4", titulo: "Tentar acertar o momento certo", desc: "Market timing destrói retorno. Aportes mensais fixos independente do preço reduzem o custo médio e eliminam o estresse de tentar prever altas e quedas." },
            { n: "5", titulo: "Esquecer do câmbio nos ETFs internacionais", desc: "IVVB11 e NASD11 são cotados em reais mas replicam índices em dólar. Alta do dólar aumenta o valor da cota em reais — queda do dólar reduz. Isso pode ser vantagem ou desvantagem dependendo do momento." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 bg-muted/30 rounded-xl p-4 border border-border">
              <span className="text-2xl font-black text-destructive/40 shrink-0 w-6 text-center">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Como Começar a Investir em ETFs Hoje: Passo a Passo
        </h2>

        <div className="not-prose space-y-3 my-6">
          {[
            { n: "1", titulo: "Abra conta em uma corretora sem taxa de corretagem para ETFs", desc: "Nu Invest, XP, BTG Pactual e Banco Inter oferecem corretagem zero para ETFs. Evite pagar corretagem por operação — isso corrói o retorno de aportes pequenos." },
            { n: "2", titulo: "Defina seu perfil e horizonte de tempo", desc: "Para menos de 3 anos: concentre em IMAB11 e renda fixa. Para 5+ anos: pode aumentar exposição a BOVA11 e IVVB11. Para 10+ anos: portfólio arrojado faz sentido." },
            { n: "3", titulo: "Escolha 2 a 4 ETFs para compor o portfólio", desc: "Menos é mais. Um portfólio de IMAB11 + BOVA11 + IVVB11 já oferece diversificação entre renda fixa, Brasil e EUA — simples e eficiente." },
            { n: "4", titulo: "Configure aporte automático mensal", desc: "Automatize a contribuição mensal — mesmo R$ 200/mês investidos consistentemente constroem patrimônio relevante em 10–20 anos via juros compostos." },
            { n: "5", titulo: "Rebalanceie a carteira a cada 6 meses", desc: "Verifique se os percentuais ainda estão próximos da alocação-alvo. Se o IVVB11 subiu muito e saiu da meta, realoque parte para os demais ETFs." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 bg-card border border-border rounded-xl p-4">
              <span className="text-3xl font-black text-invest/40 shrink-0">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Rebalanceamento na Prática: Um Exemplo Real
        </h2>
        <p>
          Para entender por que o rebalanceamento periódico importa, considere um portfólio moderado que começou com 30% em IMAB11, 30% em BOVA11, 25% em IVVB11 e 15% em NASD11. Se ao longo de seis meses o NASD11 subir 40% enquanto o IMAB11 ficar estável, sua alocação real pode passar para 18% em NASD11 — acima da meta de 15%. Rebalancear significa vender parte do NASD11 (realizando lucro) e redirecionar para o IMAB11, voltando à proporção original. Esse processo, feito mecanicamente a cada seis meses, tem um efeito sutil mas poderoso: força você a vender na alta e comprar na baixa relativa, sem precisar prever nada — é disciplina embutida no próprio sistema.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          ETFs de Acumulação vs. Distribuição: Qual Escolher
        </h2>
        <p>
          Outro detalhe técnico relevante na escolha de ETFs é entender se o fundo
          distribui dividendos periodicamente aos cotistas ou se reinveste
          automaticamente os proventos recebidos das empresas que compõem a carteira,
          aumentando o valor da cota sem gerar distribuição em dinheiro. ETFs de
          distribuição, como o DIVO11, pagam dividendos diretamente na conta do
          investidor, o que pode ser interessante para quem busca renda periódica. Já
          ETFs de acumulação reinvestem automaticamente, o que tende a ser mais
          eficiente do ponto de vista tributário para quem está em fase de acumulação de
          patrimônio, já que evita a necessidade de decidir o que fazer com pequenos
          valores de dividendos recebidos mês a mês.
        </p>
        <p>
          Para o investidor brasileiro que está construindo patrimônio de longo prazo
          sem necessidade imediata de renda, ETFs com política de reinvestimento
          automático de dividendos tendem a ser mais práticos, eliminando a fricção de
          decidir frequentemente sobre pequenos valores recebidos. Já para quem já está
          na fase de usufruir do patrimônio acumulado — tipicamente na aposentadoria —
          ETFs de distribuição como o DIVO11 oferecem fluxo de caixa mais previsível,
          similar ao que FIIs oferecem no mercado imobiliário, mas com a diversificação
          adicional de estar exposto a múltiplos setores da economia simultaneamente.
          Avalie qual perfil de fluxo de caixa se alinha melhor ao seu momento de vida
          financeira antes de definir a composição final da sua carteira de ETFs.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este conteúdo é educacional e não constitui recomendação de investimento. Consulte um assessor certificado antes de investir.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: ETFs são a vacina contra a preguiça de diversificar">
        <p>
          Depois de anos acompanhando investidores pessoa física, o padrão que mais me impressiona é o seguinte: quem usa ETFs dorme melhor. Não porque não haja risco — BOVA11 caiu 30% em 2020 — mas porque a estratégia passiva remove a tentação de ficar pulando de ativo em ativo tentando "pegar a próxima alta". E estudos do SPIVA confirmam repetidamente: no Brasil, mais de 80% dos fundos ativos de ações perdem para o Ibovespa em 10 anos.
        </p>
        <p className="mt-2">
          Minha combinação favorita para a maioria dos investidores brasileiros com horizonte de 10+ anos: <strong>40% IVVB11 + 30% BOVA11 + 20% IMAB11 + 10% SMAL11</strong>. Exposição a EUA, Brasil, inflação e small caps — quatro mercados distintos, uma única revisão semestral, custo total abaixo de 0,25% ao ano. Simples, barato e historicamente eficiente.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          { title: "ETFs listados na B3 — Fundos de Índice de Renda Variável e Renda Fixa", url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/etf/renda-variavel/etfs-listados.htm", publisher: "B3 — Bolsa do Brasil", accessedAt: "Maio 2026" },
          { title: "SPIVA Brazil Scorecard — Fundos Ativos vs Índices", url: "https://www.spglobal.com/spdji/en/research-insights/spiva/spiva-brazil-scorecard/", publisher: "S&P Dow Jones Indices", accessedAt: "Maio 2026" },
          { title: "Tributação de Fundos de Índice (ETF) no Brasil", url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras", publisher: "Receita Federal do Brasil", accessedAt: "Maio 2026" },
          { title: "Instrução CVM nº 359/2002 — Fundos de Índice", url: "https://www.gov.br/cvm/pt-br/legislacao/instrucoes/inst359consolid.pdf", publisher: "Comissão de Valores Mobiliários (CVM)", accessedAt: "Maio 2026" },
          { title: "Tesouro Direto — IMA-B e Indexadores de Renda Fixa", url: "https://www.tesourodireto.com.br/conheca/rentabilidade-dos-titulos.htm", publisher: "Tesouro Nacional", accessedAt: "Maio 2026" },
          { title: "iShares — Introdução aos ETFs (Educação de Investidores)", url: "https://www.blackrock.com/br/investidores/education/etf-education", publisher: "BlackRock iShares Brasil", accessedAt: "Maio 2026" },
        ]}
      />

      <RelatedPosts currentSlug="etfs-2026-guia-completo-investir" />
      <CommentSection postId="etfs-2026-guia-completo-investir" postTitle="ETFs em 2026: Guia Completo Para Investir com Diversificação" category="invest" />
    </article>
  );
};

export default ETFs2026;
