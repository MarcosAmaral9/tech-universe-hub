import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/etfs-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ETFsB3Guia2026 = () => {
  useEffect(() => {
    trackArticleRead("etfs-b3-guia-completo-2026", "ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">ETFs · B3 · Renda Variável</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="ETFs na B3 guia completo 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Os ETFs (Exchange Traded Funds) se tornaram o veículo de investimento mais popular do mundo — e finalmente ganham tração no Brasil. Com mais de <strong>80 ETFs listados na B3 em 2026</strong>, é possível investir no Ibovespa, no S&P 500, em ouro, em empresas de dividendos e até em títulos públicos com uma única ordem de compra e taxa de administração a partir de 0,03% ao ano.
        </p>

        <p>
          O crescimento dos ETFs no Brasil é impressionante. Segundo dados da B3, o número de CPFs investindo em ETFs cresceu de 400 mil em 2021 para mais de 2,1 milhões em 2025 — um aumento de mais de 400% em quatro anos. Esse movimento acompanha uma tendência global consolidada: nos Estados Unidos, os ETFs já superam os fundos ativos tradicionais em volume de ativos sob gestão. O motivo é simples e documentado: mais de 85% dos gestores ativos de fundos de ações não conseguem superar o índice de referência em períodos de 15 anos, segundo o SPIVA Scorecard da S&P Dow Jones Indices.
        </p>

        <p>
          Para o investidor brasileiro de 2026, o ETF resolve um problema histórico: o custo absurdo dos fundos ativos nacionais. Enquanto um fundo de ações brasileiro cobra em média 2% ao ano de taxa de administração mais 20% de taxa de performance sobre o que superar o Ibovespa, um ETF como o BOVA11 cobra apenas 0,10% ao ano — e nem precisa superar nada, porque simplesmente replica o índice. Em 20 anos, essa diferença de custo compõe a ponto de representar 30 a 40% do patrimônio final.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O que é um ETF e como ele funciona na prática
        </h2>
        <p>
          Um ETF é um fundo de investimento negociado em bolsa como se fosse uma ação. Ao comprar uma cota de um ETF, você automaticamente investe em uma <strong>cesta de ativos</strong> que replica um índice de referência. O BOVA11, por exemplo, compra automaticamente ações das 87 empresas que compõem o Ibovespa, nas proporções exatas do índice. Quando o Ibovespa sobe 1%, o BOVA11 sobe aproximadamente 1% também — descontada apenas a taxa de administração.
        </p>
        <p>
          A gestão é passiva: não há analistas tentando escolher as melhores ações. O fundo simplesmente segue o índice. Isso reduz drasticamente os custos e elimina o risco de gestão — o risco de o gestor tomar decisões ruins que prejudicam o retorno. É por isso que academicamente, desde os estudos de John Bogle nos anos 1970, o consenso entre economistas é que o investimento passivo via índices supera a gestão ativa no longo prazo para a maioria dos investidores.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Vantagens dos ETFs</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Diversificação automática com uma única ordem de compra</li>
              <li>• Taxa de administração baixíssima (0,03%–0,85% ao ano)</li>
              <li>• Liquidez: compra e venda a qualquer momento no pregão</li>
              <li>• Transparência: carteira divulgada diariamente pela gestora</li>
              <li>• ETFs de ações BR: isenção de IR para venda até R$ 20.000/mês</li>
              <li>• Acesso a mercados internacionais sem conta no exterior</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-yellow-500/20 p-5">
            <h3 className="font-bold text-yellow-400 mb-3">⚠️ Pontos de Atenção</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Não supera o índice — apenas replica (e perde a taxa)</li>
              <li>• ETFs internacionais têm IR de 15% sem isenção</li>
              <li>• Sem controle sobre ativos individuais da carteira</li>
              <li>• Liquidez pode ser baixa em ETFs menos populares</li>
              <li>• Variação cambial afeta diretamente ETFs de ativos no exterior</li>
            </ul>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Os Melhores ETFs da B3 em 2026
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-4">📊 ETFs de Ações Brasileiras</h3>
        <p>
          Os ETFs de ações nacionais são os mais indicados para quem está começando, pois têm a tributação mais favorável — isenção de IR para vendas mensais totais abaixo de R$ 20.000 — e replicam índices que o investidor brasileiro já conhece. O BOVA11 é o mais negociado e o ponto de partida natural:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Ticker</th>
              <th className="text-left py-3 px-4">Nome</th>
              <th className="text-left py-3 px-4">Índice</th>
              <th className="text-left py-3 px-4">Taxa (a.a.)</th>
            </tr></thead>
            <tbody>
              {[
                ["BOVA11", "iShares Ibovespa", "Ibovespa (87 ações)", "0,10%"],
                ["SMAL11", "iShares Small Cap", "SMLL (small caps BR)", "0,50%"],
                ["DIVO11", "iShares Dividendos", "IDIV (maiores pagadoras)", "0,20%"],
                ["HASH11", "Hashdex Nasdaq Crypto", "Criptomoedas (regulado)", "0,85%"],
                ["AGRI11", "BTG Pactual Agro", "Setor agronegócio BR", "0,50%"],
              ].map(([tick, nome, indice, taxa]) => (
                <tr key={tick} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{tick}</td>
                  <td className="py-3 px-4">{nome}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{indice}</td>
                  <td className="py-3 px-4">{taxa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">🌐 ETFs Internacionais (acesso via B3)</h3>
        <p>
          ETFs internacionais são a forma mais prática de o investidor brasileiro ter exposição ao mercado americano e global sem precisar abrir conta em corretora estrangeira. Atenção: esses ETFs não têm a isenção de R$ 20.000/mês — qualquer ganho é tributado a 15%, independente do valor:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Ticker</th>
              <th className="text-left py-3 px-4">Nome</th>
              <th className="text-left py-3 px-4">Índice</th>
              <th className="text-left py-3 px-4">Taxa (a.a.)</th>
              <th className="text-left py-3 px-4">IR sobre ganho</th>
            </tr></thead>
            <tbody>
              {[
                ["IVVB11", "iShares S&P 500", "S&P 500 (500 maiores EUA)", "0,23%", "15%"],
                ["SPY11", "SPDR S&P 500 (BDR)", "S&P 500 via BDR", "0,09%", "15%"],
                ["NASD11", "Invesco Nasdaq-100", "Nasdaq-100 (big techs)", "0,20%", "15%"],
                ["EURP11", "iShares MSCI Europe", "Empresas da Europa", "0,20%", "15%"],
                ["GOLD11", "Trend ETF Ouro", "Ouro (via BDR do GLD)", "0,20%", "15%"],
              ].map(([tick, nome, indice, taxa, ir]) => (
                <tr key={tick} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{tick}</td>
                  <td className="py-3 px-4">{nome}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{indice}</td>
                  <td className="py-3 px-4">{taxa}</td>
                  <td className="py-3 px-4 text-red-400 text-xs font-medium">{ir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Como Escolher um ETF: os 4 Critérios que Importam
        </h2>

        <p>
          Com mais de 80 ETFs disponíveis na B3, a escolha pode parecer complexa. Na prática, quatro critérios respondem por 95% da decisão:
        </p>

        <div className="not-prose my-6 space-y-4">
          {[
            { titulo: "1. Taxa de administração", desc: "É o custo anual cobrado sobre o patrimônio do fundo. Em ETFs, busque sempre abaixo de 0,50% ao ano. Para ETFs de índices amplos como BOVA11 (0,10%) e IVVB11 (0,23%), as taxas já são competitivas. Evite ETFs temáticos com taxas acima de 1% — a vantagem do investimento passivo começa a desaparecer com custos elevados." },
            { titulo: "2. Liquidez (volume diário)", desc: "Um ETF com baixo volume diário pode ter um spread elevado entre o preço de compra e venda, elevando o custo efetivo da operação. Prefira ETFs com volume médio diário acima de R$ 5 milhões. BOVA11, IVVB11 e SMAL11 estão bem acima disso. ETFs temáticos de nicho podem ter liquidez insuficiente." },
            { titulo: "3. Tracking error", desc: "Mede o quanto o ETF se afasta do índice que deveria replicar. Quanto menor, melhor. Um tracking error alto indica que o fundo está performando de forma diferente do índice — pode ser por custos, rebalanceamento ou dividendos não distribuídos. Consulte o relatório mensal do ETF para ver esse dado." },
            { titulo: "4. Tributação aplicável", desc: "ETFs de ações brasileiras têm isenção de IR para vendas até R$ 20.000/mês. ETFs de renda fixa seguem a tabela regressiva com come-cotas semestral. ETFs internacionais pagam 15% sobre qualquer lucro, sem isenção. Conhecer a regra tributária antes de comprar é fundamental para o planejamento de longo prazo." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="bg-card rounded-xl border border-invest/20 p-5">
              <h4 className="font-bold text-sm mb-2">{titulo}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como Declarar ETFs no Imposto de Renda 2026
        </h2>
        <p>
          A tributação dos ETFs no Brasil varia conforme o tipo. Conhecer as regras evita surpresas na declaração e permite planejar vendas de forma mais eficiente:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "ETFs de ações brasileiras (ex: BOVA11, SMAL11)", regra: "Isenção de IR para vendas totais no mês até R$ 20.000. Acima disso, alíquota de 15% sobre o lucro. DARF deve ser pago até o último dia útil do mês seguinte à venda." },
            { titulo: "ETFs de renda fixa (ex: IMAB11)", regra: "Sem isenção de R$ 20.000. Sujeito ao come-cotas semestral (maio e novembro) com alíquota de 15%. Tabela regressiva aplica-se sobre o rendimento no resgate." },
            { titulo: "ETFs internacionais (ex: IVVB11, NASD11)", regra: "IR de 15% sobre qualquer ganho de capital, sem isenção de R$ 20.000. Ganho cambial também é tributado. Declare em 'Rendimentos sujeitos à tributação exclusiva'." },
            { titulo: "ETFs de criptomoedas (ex: HASH11)", regra: "Tributação como ações: 15% sobre ganhos com isenção até R$ 20.000/mês em vendas totais, pois são classificados como fundos de investimento em ativos digitais regulados pela CVM." },
          ].map(({ titulo, regra }) => (
            <div key={titulo} className="bg-card rounded-xl border border-invest/20 p-4">
              <h4 className="font-bold text-sm mb-1">{titulo}</h4>
              <p className="text-sm text-muted-foreground">{regra}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Como Montar uma Carteira de ETFs em 2026
        </h2>
        <p>
          A alocação ideal depende do perfil de risco, do horizonte de investimento e dos objetivos financeiros. Abaixo estão três modelos de carteira baseados em pesquisas de portfólio moderno, adaptados ao mercado brasileiro de 2026:
        </p>
        <div className="not-prose my-6 space-y-4">
          {[
            { perfil: "🛡️ Conservador", desc: "Para quem tem horizonte de 2–5 anos e não tolera volatilidade elevada.", alocacao: [
              { etf: "IMAB11 (IMA-B)", pct: "60%", desc: "Renda fixa indexada ao IPCA" },
              { etf: "BOVA11", pct: "20%", desc: "Ações brasileiras (Ibovespa)" },
              { etf: "IVVB11", pct: "15%", desc: "S&P 500 (diversificação EUA)" },
              { etf: "GOLD11", pct: "5%", desc: "Ouro (proteção geopolítica)" },
            ]},
            { perfil: "⚖️ Moderado", desc: "Para horizonte de 5–10 anos, aceita oscilação moderada em troca de retorno maior.", alocacao: [
              { etf: "BOVA11", pct: "30%", desc: "Ações brasileiras" },
              { etf: "IVVB11", pct: "30%", desc: "S&P 500" },
              { etf: "NASD11", pct: "15%", desc: "Big techs americanas" },
              { etf: "DIVO11", pct: "15%", desc: "Dividendos BR" },
              { etf: "GOLD11", pct: "10%", desc: "Ouro" },
            ]},
            { perfil: "🚀 Arrojado", desc: "Para horizonte de 10+ anos, máxima exposição a renda variável global.", alocacao: [
              { etf: "IVVB11", pct: "35%", desc: "S&P 500" },
              { etf: "NASD11", pct: "25%", desc: "Nasdaq-100 (tech)" },
              { etf: "SMAL11", pct: "20%", desc: "Small caps brasileiras" },
              { etf: "BOVA11", pct: "10%", desc: "Ibovespa" },
              { etf: "HASH11", pct: "10%", desc: "Criptomoedas reguladas" },
            ]},
          ].map(({ perfil, desc, alocacao }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-1">{perfil}</h3>
              <p className="text-xs text-muted-foreground mb-3">{desc}</p>
              <div className="space-y-2">
                {alocacao.map(({ etf, pct, desc: d }) => (
                  <div key={etf} className="flex items-center gap-3">
                    <div className="w-10 text-right text-xs font-bold text-invest shrink-0">{pct}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2">
                      <div className="bg-invest h-2 rounded-full" style={{ width: pct }} />
                    </div>
                    <div className="text-xs min-w-[80px] font-medium">{etf}</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          5 Erros Comuns ao Investir em ETFs
        </h2>

        <div className="not-prose space-y-3 my-6">
          {[
            { titulo: "1. Tentar fazer market timing com ETFs", desc: "ETF foi criado para investimento regular e de longo prazo. Tentar comprar na baixa e vender na alta elimina a principal vantagem da estratégia e costuma resultar em retorno pior que simplesmente aportar mensalmente independente do preço (DCA)." },
            { titulo: "2. Concentrar em apenas um ETF de um único mercado", desc: "Um portfólio 100% em BOVA11 está totalmente exposto à economia brasileira — câmbio, política fiscal, commodities. Diversificar com IVVB11 e IMAB11 reduz a correlação e suaviza a volatilidade total da carteira." },
            { titulo: "3. Ignorar o impacto cambial nos ETFs internacionais", desc: "IVVB11 e NASD11 são cotados em reais mas replicam índices em dólar. Quando o real se valoriza, mesmo que o S&P 500 suba em dólar, a cota em reais pode cair. Esse risco cambial é inerente e deve ser considerado na alocação." },
            { titulo: "4. Não reinvestir os dividendos distribuídos", desc: "Alguns ETFs distribuem dividendos (como o DIVO11). Se você não reinvestir esse valor, o poder dos juros compostos é reduzido. Configure reinvestimento automático ou faça aportes adicionais com os proventos recebidos." },
            { titulo: "5. Comparar ETF com fundo ativo sem ajustar pelo risco", desc: "Um fundo ativo pode ter retornado 25% num ano e o BOVA11 apenas 15% — e o gestor ativo parece melhor. Mas qual foi o risco assumido? Drawdown máximo? Volatilidade? A comparação correta usa métricas como índice Sharpe, não apenas retorno absoluto." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="flex gap-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Tracking Difference: O Indicador Que Poucos Verificam
        </h2>
        <p>
          Além do tracking error (que mede a volatilidade da diferença entre o ETF e o
          índice), existe outro indicador menos conhecido mas igualmente importante: a
          tracking difference, que mede a diferença acumulada de retorno entre o ETF e
          seu índice de referência ao longo de um período específico, geralmente um ano.
          Enquanto o tracking error captura a consistência da replicação, a tracking
          difference revela diretamente o custo real que o investidor está pagando pela
          gestão do fundo — incluindo taxa de administração, custos de rebalanceamento e
          eventuais ineficiências operacionais da gestora.
        </p>
        <p>
          Para encontrar esse dado, consulte o relatório periódico do ETF disponibilizado
          pela gestora ou compare diretamente o retorno acumulado do fundo com o retorno
          do índice no mesmo período, disponível em plataformas como a própria B3 ou
          sites especializados em acompanhamento de fundos. ETFs com tracking difference
          consistentemente próxima de zero (ou até negativa, em casos raros de eficiência
          fiscal favorável) indicam gestão de alta qualidade, enquanto diferenças
          recorrentemente acima de 0,5 ponto percentual ao ano, mesmo com taxa de
          administração baixa, podem sinalizar ineficiências na execução da estratégia
          passiva que vale a pena considerar antes de investir. Para o investidor de
          longo prazo, acompanhar esse indicador anualmente, junto com a taxa de
          administração nominal, oferece uma visão mais completa do custo real de cada
          ETF do que olhar apenas para a taxa anunciada publicamente pela gestora.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este conteúdo é educacional e não constitui recomendação de investimento. Consulte um assessor certificado antes de investir.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: ETF é simples — mas a taxa e o timing importam mais do que parecem">
        <p>
          ETF é o veículo mais democrático que a B3 já entregou ao investidor pessoa física brasileiro, mas o entusiasmo recente esconde uma armadilha: <strong>taxa de administração</strong>. A diferença entre um ETF de 0,10% ao ano (BOVA11) e um ETF temático de 0,80% ao ano parece pequena no papel — mas em 20 anos com juros compostos, essa diferença consome 12 a 15% do patrimônio final. Outro detalhe que poucos comentam: ETFs internacionais como IVVB11 não têm a isenção de R$ 20.000/mês que as ações brasileiras têm — qualquer ganho no IVVB11 é tributado a 15%, enquanto uma venda de BOVA11 abaixo de R$ 20.000/mês é isenta.
        </p>
        <p className="mt-3">
          Para quem está montando uma carteira de longo prazo com ETFs, minha visão prática para 2026: o trio <strong>BOVA11 + IVVB11 + IMAB11</strong> cobre 90% dos cenários para perfil moderado — bolsa brasileira, bolsa americana e renda fixa inflacionária em partes iguais. Todo o resto é especialização que exige mais conhecimento para justificar o custo e a complexidade adicionais. Comece simples, seja consistente nos aportes mensais e revise a alocação a cada 12 meses, não a cada semana.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          { title: "ETFs listados — B3", url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/etf-renda-variavel.htm", publisher: "B3", accessedAt: "Maio 2026" },
          { title: "SPIVA Brazil Scorecard — Fundos Ativos vs Índices", url: "https://www.spglobal.com/spdji/en/research-insights/spiva/spiva-brazil-scorecard/", publisher: "S&P Dow Jones Indices", accessedAt: "Maio 2026" },
          { title: "Tributação de ETFs — Receita Federal", url: "https://www.gov.br/receitafederal/pt-br", publisher: "Receita Federal", accessedAt: "Maio 2026" },
          { title: "CVM — Guia do Investidor: Fundos de Índice", url: "https://www.investidor.gov.br/", publisher: "CVM", accessedAt: "Maio 2026" },
          { title: "ANBIMA — Dados de Fundos e ETFs no Brasil", url: "https://www.anbima.com.br/", publisher: "ANBIMA", accessedAt: "Maio 2026" },
          { title: "Instrução CVM 359/2002 — Fundos de Índice (ETFs)", url: "https://www.gov.br/cvm/pt-br/legislacao/instrucoes/inst359consolid.pdf", publisher: "CVM", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug="etfs-b3-guia-completo-2026" />
      <CommentSection postId="etfs-b3-guia-completo-2026" postTitle="ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice" category="invest" />
    </article>
  );
};

export default ETFsB3Guia2026;
