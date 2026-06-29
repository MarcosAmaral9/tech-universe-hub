import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/dolar-queda-2026-investir-exterior.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DolarQueda2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "dolar-queda-2026-investir-exterior",
      "Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior",
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
            Câmbio · Investimentos Externos · BDR · ETF
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Dólar queda 2026 como investir no exterior" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O dólar fechou a semana passada cotado a <strong>R$ 5,01</strong> — a menor cotação em dois anos. No acumulado de 2026, a moeda americana caiu <strong>9,21%</strong> frente ao real. Para o investidor que quer diversificar em ativos internacionais, esse momento é uma janela rara: comprar dólares baratos para investir em empresas americanas que, em dólares, estão em máximas históricas. O paradoxo é real — e exige estratégia para não errar.
        </p>

        <p>
          Esse tipo de movimento cambial costuma gerar reação emocional equivocada no investidor brasileiro: quando o dólar cai, muita gente interpreta como "sinal de que não vale mais investir fora" — exatamente o oposto da lógica correta. Câmbio favorável significa que cada real compra mais dólares hoje do que comprava há seis meses. Para quem está construindo posição internacional gradualmente, isso é uma vantagem temporária, não um sinal de alerta.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Por Que o Dólar Está Tão Barato?
        </h2>
        <p>
          A queda do dólar em 2026 é estrutural — não é acidente ou intervenção do Banco Central. São quatro fatores simultâneos:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { fator: "1. Fluxo estrangeiro record no Brasil", desc: "Investidores globais estão comprando ativos brasileiros (bolsa, títulos, imóveis) por conta da Selic real entre os mais altos do mundo e da percepção de que o Brasil é 'emergente com fundamentos'. Essa compra exige vender dólares para comprar reais — apreciando o real.", icon: "🌊" },
            { fator: "2. Petróleo mais barato recentemente", desc: "A reabertura do Estreito de Ormuz pelo Irã derrubou o petróleo ~10% em uma semana. Como o Brasil é exportador líquido de petróleo, menos receita de exportação significa menos dólares entrando — mas o efeito ainda foi dominado pelo fluxo financeiro.", icon: "🛢️" },
            { fator: "3. Dólar fraco globalmente (DXY)", desc: "O índice DXY, que mede o dólar contra uma cesta de moedas globais, está em queda desde o pico de 2025. A desaceleração econômica americana e as expectativas de corte de juros pelo Fed enfraquecem o dólar em todas as moedas.", icon: "📉" },
            { fator: "4. Ceasefire Irã-EUA", desc: "O cessar-fogo frágil na guerra entre EUA e Irã reduziu a aversão ao risco globalmente. Isso beneficia moedas emergentes como o real, que tendem a cair quando há crise geopolítica e subir quando os mercados se acalmam.", icon: "🕊️" },
          ].map(({ fator, desc, icon }) => (
            <div key={fator} className="flex gap-3 bg-card rounded-xl border border-invest/20 p-4">
              <span className="text-xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{fator}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          O ponto importante é que esses quatro fatores têm durações muito diferentes. O fluxo estrangeiro recorde pode persistir enquanto a Selic se mantiver alta — meses, possivelmente um ano. Já o efeito do cessar-fogo Irã-EUA é frágil por natureza, podendo se reverter em dias caso o conflito volte a escalar. Entender essa diferença de horizontes ajuda a calibrar a velocidade com que você deve aproveitar a janela: para o fluxo estrutural, há tempo; para o componente geopolítico, a janela pode se fechar rapidamente.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          A Janela de Oportunidade: Comprar Dólar Barato para Investir Caro
        </h2>
        <p>
          O raciocínio é simples: se você acredita que o dólar vai voltar a R$ 5,40–R$ 5,50 (projeção Focus para fim de 2026) e que os ativos americanos continuarão valorizando, <strong>comprar dólares hoje a R$ 5,01 é um duplo benefício</strong>: ganho cambial quando o real se depreciar + ganho dos ativos americanos.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-invest/20 p-6">
          <h3 className="font-bold mb-4 text-sm">📊 Simulação: R$ 10.000 investidos em IVVB11 agora</h3>
          <div className="space-y-3">
            {[
              { cen: "Cenário base (dólar volta a R$ 5,40, S&P sobe 8%)", resultado: "+22% total (8% do S&P + 7,8% cambial + ganho composto)", cor: "text-invest" },
              { cen: "Cenário otimista (dólar vai a R$ 5,60, S&P sobe 15%)", resultado: "+34% total", cor: "text-invest" },
              { cen: "Cenário neutro (dólar fica em R$ 5,10, S&P sobe 8%)", resultado: "+10% apenas do S&P + 1,8% cambial", cor: "text-geek" },
              { cen: "Cenário adverso (dólar cai para R$ 4,80, guerra volta)", resultado: "+8% S&P - 4% cambial = +4% total (ainda positivo em reais)", cor: "text-geek" },
            ].map(({ cen, resultado, cor }) => (
              <div key={cen} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="text-xs text-muted-foreground">{cen}</p>
                <p className={`text-sm font-bold ${cor}`}>{resultado}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">*Simulações aproximadas. Não considera IR (15% sobre ganho em 24+ meses) nem come-cotas de fundos.</p>
        </div>
        <p>
          O cenário "adverso" da tabela merece atenção especial: mesmo no pior caso simulado — dólar caindo ainda mais e ativos americanos performando bem — o resultado final ainda é positivo em reais. Isso ilustra por que diversificação cambial funciona como seguro: mesmo quando a "aposta" cambial específica não se confirma, o crescimento dos ativos subjacentes tende a compensar. O risco real está em cenários onde tanto o câmbio quanto os ativos americanos performam mal simultaneamente — historicamente raro, mas não impossível.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          As Melhores Formas de Investir no Exterior Pelo Brasil
        </h2>
        <p>
          O investidor brasileiro tem hoje mais opções do que nunca para ganhar exposição internacional, com diferentes níveis de complexidade, custo e tributação. A tabela abaixo resume as principais alternativas disponíveis em 2026:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Instrumento</th>
              <th className="text-left py-3 px-4">O Que É</th>
              <th className="text-left py-3 px-4">Min. Investimento</th>
              <th className="text-left py-3 px-4">Tributação</th>
            </tr></thead>
            <tbody>
              {[
                ["IVVB11 (ETF S&P 500)", "Replica o S&P 500 em reais. Melhor para exposição ampla a EUA", "R$ 20–50 (1 cota)", "15% sobre ganho (ETF)"],
                ["NASD11 (ETF Nasdaq 100)", "Replica o Nasdaq 100 — foco em big techs", "R$ 20–50 (1 cota)", "15% sobre ganho (ETF)"],
                ["BDRs de empresas individuais", "Recibos de ações estrangeiras (Apple, Google, Nvidia) negociados na B3", "R$ 50–200 (por código)", "15% sobre dividendos, 15% sobre ganho"],
                ["Fundos internacionais (ex: MSCI World)", "Fundos que investem em índices globais — gestão profissional", "R$ 500–R$ 1.000", "Come-cotas semestral (15%)"],
                ["Conta na corretora americana (Interactive Brokers)", "Investir diretamente em dólares em EUA", "US$ 0 (depósito via câmbio)", "DARF mensal acima de R$ 35k ganho"],
                ["Transferência via Wise / câmbio turismo", "Enviar reais e comprar ETFs diretamente nos EUA", "Qualquer valor", "DARF conforme legislação cambial"],
              ].map(([inst, oq, min, trib]) => (
                <tr key={inst} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest text-xs">{inst}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{oq}</td>
                  <td className="py-3 px-4 text-xs">{min}</td>
                  <td className="py-3 px-4 text-xs">{trib}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Para a maioria dos investidores que está começando a diversificar internacionalmente, ETFs listados na B3 (IVVB11, NASD11) representam o caminho de menor fricção: a compra é feita em reais pelo mesmo home broker usado para ações brasileiras, não exige abertura de conta no exterior, não envolve declaração complexa de bens no exterior no IRPF, e a liquidez é diária. A conta em corretora americana só costuma fazer sentido para patrimônios maiores, onde a diferença de taxas de administração ao longo de décadas justifica a complexidade adicional de declarar bens no exterior.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Quais ETFs Internacionais Estão em Alta Agora
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { etf: "IVVB11 — iShares S&P 500", perf: "+18% em 12 meses (em BRL)", tese: "Exposição a 500 maiores empresas dos EUA. Diversificação instantânea. O mais líquido da categoria na B3.", perfil: "Todos os perfis" },
            { etf: "NASD11 — Nasdaq 100", perf: "+24% em 12 meses (em BRL)", tese: "Concentrado em big techs (Apple, Microsoft, Nvidia, Meta, Alphabet). Alta volatilidade, alto potencial.", perfil: "Moderado a arrojado" },
            { etf: "ACWI11 — MSCI All Country", perf: "+14% em 12 meses (em BRL)", tese: "EUA + Europa + Ásia + Emergentes. Diversificação global máxima. Menor volatilidade.", perfil: "Conservador" },
            { etf: "GOLD11 / Ouro", perf: "+31% em 12 meses (em BRL)", tese: "Ouro disparou com a guerra no Oriente Médio. Hedge contra inflação e geopolítica. Não é exatamente 'exterior' mas é dolarizado.", perfil: "Hedge conservador" },
          ].map(({ etf, perf, tese, perfil }) => (
            <div key={etf} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{etf}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-invest/15 text-invest px-2 py-0.5 rounded-full font-bold">{perf}</span>
                  <span className="text-xs text-muted-foreground">{perfil}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{tese}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Cuidados: O Que Pode Fazer o Dólar Subir de Volta
        </h2>
        <ul>
          <li><strong>Reescalada da guerra Irã-EUA:</strong> O cessar-fogo é frágil. Se os conflitos voltarem, dólar e petróleo disparam e o real deprecia rapidamente. Isso seria ruim para quem ainda não comprou dólares, mas ótimo para quem já está comprado.</li>
          <li><strong>Incerteza eleitoral:</strong> Com o calendário eleitoral de 2026, qualquer pesquisa que mostre disputa acirrada pode pressionar o câmbio. O mercado precifica risco fiscal do candidato e volatilidade eleitoral nas moedas emergentes.</li>
          <li><strong>Saída de capital estrangeiro:</strong> Se o Fed aumentar juros nos EUA inesperadamente, parte do capital que está no Brasil sai para aproveitar o juro americano mais alto — e o dólar sobe.</li>
          <li><strong>Dados fiscais piores:</strong> O déficit público brasileiro está no radar. Qualquer surpresa negativa nas contas do governo pode derrubar o real.</li>
        </ul>
        <p>
          A conclusão prática: <strong>o momento é bom para começar ou ampliar a posição internacional</strong>, mas com sizing adequado ao perfil de risco (10–25% da carteira para perfis moderados) e sem tentar market timing perfeito. O real pode cair mais antes de voltar — e isso seria ainda melhor para quem já está posicionado em dólar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Como Estruturar Aportes Internacionais de Forma Disciplinada
        </h2>
        <p>
          Em vez de tentar decidir "o momento perfeito" para converter um valor grande de uma vez, a abordagem mais robusta é dividir o aporte planejado em parcelas mensais ao longo de 6 a 12 meses — uma estratégia de DCA (Dollar Cost Averaging) aplicada ao câmbio. Se o dólar continuar caindo, você captura preços ainda melhores nos meses seguintes. Se ele subir, sua primeira parcela já estava bem posicionada. Essa abordagem elimina a ansiedade de "vou perder a janela" e transforma uma decisão pontual de timing em um processo contínuo — exatamente o tipo de automação que costuma gerar melhores resultados de longo prazo do que decisões pontuais baseadas em previsões de câmbio, historicamente um dos exercícios mais difíceis em finanças.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          O Impacto do Dólar Fraco na Inflação Brasileira
        </h2>
        <p>
          Vale destacar um efeito colateral positivo do dólar em queda que vai além da
          oportunidade de diversificação internacional: produtos importados, insumos
          industriais e componentes eletrônicos ficam mais baratos quando o real se
          aprecia, contribuindo para desacelerar a inflação doméstica. Esse efeito é
          particularmente relevante para setores que dependem de insumos importados,
          como eletrônicos, automóveis e produtos farmacêuticos, onde a variação cambial
          se traduz relativamente rápido em mudança de preço ao consumidor final.
        </p>
        <p>
          Para o Banco Central, um real mais forte reduz parte da pressão inflacionária
          importada, criando espaço adicional — ainda que modesto diante de outros
          fatores como o choque do petróleo — para a continuidade do ciclo de corte de
          juros. Esse círculo é interessante de acompanhar: fluxo estrangeiro positivo
          aprecia o real, que por sua vez ajuda a conter a inflação, que por sua vez
          sustenta a trajetória de queda da Selic, que por sua vez tende a manter o
          fluxo de capital positivo enquanto o diferencial de juros real brasileiro
          continuar atrativo frente a outras economias emergentes comparáveis.
        </p>
        <p>
          Esse tipo de dinâmica reforça por que acompanhar o câmbio não é relevante
          apenas para quem investe diretamente em ativos internacionais, mas para
          qualquer investidor que queira entender o contexto macroeconômico mais amplo
          que influencia decisões de política monetária e, por consequência, o
          desempenho de praticamente todas as classes de ativos domésticos.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: dólar barato não é convite para abandonar o exterior">
        <p>Toda vez que o real se aprecia, o brasileiro médio cancela o aporte em ativos internacionais — e historicamente é exatamente esse o pior momento para fazê-lo. <strong>Diversificação cambial é seguro, não aposta direcional</strong>. A regra que sigo: entre 15% e 30% do patrimônio em ativos dolarizados (BDRs, ETFs como IVVB11 ou conta no exterior), com aportes mensais constantes independente da cotação. Quem zera exposição quando o dólar cai costuma comprar de volta quando o real desvaloriza — destruindo retorno. O câmbio do dia importa menos que a disciplina de aportes ao longo de uma década.</p>
        <p className="mt-3">
          Um ponto que reforço sempre: o objetivo da fatia internacional da carteira não é "ganhar do Ibovespa" — é descorrelacionar o patrimônio da economia brasileira. Em crises domésticas (fiscal, política, cambial), os ativos dolarizados tendem a se valorizar em reais justamente quando os ativos brasileiros sofrem, suavizando o impacto total na carteira. Esse efeito de proteção só funciona se a posição já estiver montada antes da crise — construir esse hedge durante o pânico custa muito mais caro. Por isso, momentos de dólar "barato" como este de abril de 2026 são, paradoxalmente, os melhores momentos para montar ou reforçar essa proteção.
        </p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: 'Boletim Focus', url: 'https://www.bcb.gov.br/publicacoes/focus', publisher: 'Banco Central do Brasil', accessedAt: "Maio 2026" },
          { title: 'Cotação PTAX', url: 'https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes', publisher: 'Banco Central do Brasil', accessedAt: "Maio 2026" },
          { title: 'Estatísticas do Setor Externo', url: 'https://www.bcb.gov.br/estatisticas/estatisticasetorexterno', publisher: 'Banco Central do Brasil', accessedAt: "Maio 2026" },
          { title: 'BDRs e ETFs Internacionais', url: 'https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/bdrs.htm', publisher: 'B3', accessedAt: "Maio 2026" },
          { title: 'Receita Federal — Bens no Exterior', url: 'https://www.gov.br/receitafederal/pt-br', publisher: 'Receita Federal do Brasil', accessedAt: "Maio 2026" }
        ]}
      />
      <RelatedPosts currentSlug="dolar-queda-2026-investir-exterior" />
      <CommentSection postId="dolar-queda-2026-investir-exterior" postTitle="Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior" category="invest" />
    </article>
  );
};

export default DolarQueda2026;
