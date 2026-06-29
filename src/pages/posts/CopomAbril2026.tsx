import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Lightbulb, DollarSign, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/copom-abril-2026-selic-investimentos.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CopomAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("copom-abril-2026-selic-investimentos", "Copom Abril 2026: Selic Cortada para 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Copom · Selic · Renda Fixa · Estratégia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Copom Abril 2026: Selic Cortada para 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Copom abril 2026 Selic corte investimentos" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Na reunião dos dias 28–29 de abril, o Copom cortou a Selic em <strong>0,25 ponto percentual</strong>, levando a taxa de 14,75% para <strong>14,50%</strong> ao ano — conforme unanimidade nas projeções do Boletim Focus. É o primeiro corte do ciclo atual de afrouxamento monetário, aguardado desde o pico histórico de 15% em 2025. O contexto é delicado: inflação subindo, guerra no Oriente Médio pressionando custos e eleições presidenciais no horizonte.
        </p>

        <p>
          A decisão do Copom de iniciar o ciclo com apenas 0,25 ponto percentual — e não 0,50 pp como esperava parte do mercado — reflete a cautela do Banco Central diante de um cenário macroeconômico mais complexo do que o projetado no início de 2026. O IPCA de março veio em 0,88% no mês, acima do consenso, e o geopolítico do Oriente Médio mantém pressão sobre o petróleo e os custos logísticos globais. A combinação de inflação acima do teto da meta (4,5%) com pressões exógenas deixa pouco espaço para afrouxamento monetário agressivo.
        </p>

        <p>
          Para o investidor, entender o ritmo dos cortes importa tanto quanto o nível final da Selic. A diferença entre chegar a 12% ao final de 2026 (cenário anterior) versus 13,25% (cenário revisado pelo Focus de abril) é enorme para o retorno de títulos prefixados, para a atratividade relativa de ações e para a velocidade de valorização dos FIIs de tijolo. Todo o reposicionamento de carteira feito com a premissa de Selic a 12% precisa ser revisado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Contexto: Por Que o Corte É Menor do Que Esperado
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Selic atual", val: "14,75% a.a.", note: "Maior em quase 20 anos", icon: "📉" },
            { ind: "Selic pós-Copom", val: "14,50% a.a.", note: "Corte de 0,25 pp", icon: "✂️" },
            { ind: "IPCA projetado", val: "4,80% (2026)", note: "Acima do teto da meta (4,5%)", icon: "📈" },
            { ind: "Dólar", val: "R$ 5,01", note: "Menor nível em 2 anos", icon: "💵" },
          ].map(({ ind, val, note, icon }) => (
            <div key={ind} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-lg mb-0.5">{val}</div>
              <div className="text-xs font-medium mb-0.5">{ind}</div>
              <div className="text-xs text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>

        <p>
          O mercado que projetava corte de 0,50 pp recuou para 0,25 pp por dois motivos: o <strong>IPCA de março veio em 0,88%</strong> no mês (acima do esperado), e a guerra Irã-EUA mantém pressão sobre o petróleo e custos de importação. O foco do Focus de 20 de abril aponta que o mercado projeta apenas mais um corte de 0,25 pp em junho, levando a Selic a 14,25% — bem abaixo do cenário anterior de 12,25% ao fim do ano.
        </p>

        <p>
          Esse ritmo mais lento de queda tem impacto direto em como você deve posicionar sua carteira. As receitas calculadas para um cenário de Selic a 12% precisam ser revisadas. A lógica fundamental não muda — juros em queda favorecem renda variável e títulos prefixados — mas o tempo que você terá que esperar para ver esse benefício se materializando é significativamente maior.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Impacto em Cada Classe de Ativos
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">🏛️ Renda Fixa: Ajuste de Expectativas</h3>
        <p>
          Com a Selic desacelerando menos do que esperado, a renda fixa pós-fixada (CDI) continua muito atrativa por mais tempo. O Tesouro Selic ainda rende próximo de 14,75% ao ano — retorno real de aproximadamente 10% acima da inflação projetada. Para quem tinha planejado migrar grande parte do portfólio para renda variável ainda no primeiro semestre, vale reconsiderar o calendário.
        </p>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "Tesouro Selic", cenario: "Ainda é o porto seguro. Com Selic caindo devagar, o CDI permanece alto por mais tempo. Ideal para reserva de emergência e liquidez operacional.", sinal: "🟢 Manter" },
            { tipo: "Tesouro Prefixado", cenario: "Reduz o apelo com inflação acima do esperado. A taxa travada de 13,5% é atrativa se a Selic chegar a 12%, mas com nova projeção de 13,25% ao fim do ano, a margem encolheu consideravelmente.", sinal: "🟡 Cautela" },
            { tipo: "Tesouro IPCA+", cenario: "Voltou ao protagonismo. Com IPCA projetado em 4,80%, o IPCA+6,5% entrega retorno nominal de ~11,3% — proteção total contra a inflação mais alta que o previsto.", sinal: "🟢 Priorize" },
            { tipo: "CDB de banco médio (120%+ CDI)", cenario: "Com garantia FGC até R$ 250k por CPF, CDBs a 120% do CDI com liquidez mensal são excelentes para capital que não precisa de liquidez diária imediata.", sinal: "🟢 Boa opção" },
          ].map(({ tipo, cenario, sinal }) => (
            <div key={tipo} className="bg-card rounded-xl border border-invest/20 p-4 flex items-start gap-3">
              <span className="text-sm shrink-0">{sinal}</span>
              <div>
                <h4 className="font-bold text-sm">{tipo}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{cenario}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">📊 Ações: Otimismo Moderado, Seletividade Alta</h3>
        <p>
          O Ibovespa reagiu positivamente ao início do ciclo de cortes, mas com inflação mais alta o ritmo de alta tende a ser mais lento do que o projetado no início de 2026. Os setores sensíveis a juros continuam favorecidos, mas com menor margem de segurança. A seletividade — escolher os setores certos dentro da bolsa — importa mais do que nunca quando o ciclo de queda de juros é gradual e incerto.
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Tese</th>
              <th className="text-left py-3 px-4">Exemplos</th>
              <th className="text-left py-3 px-4">Cenário</th>
            </tr></thead>
            <tbody>
              {[
                ["Petróleo e commodities", "Guerra Irã mantém petróleo elevado. Margens fortes.", "PETR4, PRIO3", "🟢 Favorável"],
                ["Utilities (energia, saneamento)", "Bond-proxies pagam dividendos estáveis acima da inflação", "EQTL3, SBSP3", "🟢 Favorável"],
                ["Bancos", "Spread alto com Selic elevada. Inadimplência controlada.", "ITUB4, BBAS3, BBDC4", "🟢 Favorável"],
                ["Varejo e consumo", "Crédito ainda caro freia recuperação. Melhora gradual.", "LREN3, MGLU3", "🟡 Neutro"],
                ["Construção civil", "Juro alto encarece financiamento. Espera redução maior da Selic.", "MRVE3, CURY3", "🟡 Aguardar"],
                ["Real estate (FIIs)", "Com IPCA alto, FIIs de tijolo com contratos IPCA+ se beneficiam", "XPLG11, BRCO11", "🟢 Seletivo"],
              ].map(([setor, tese, ex, cen]) => (
                <tr key={setor} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{setor}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{tese}</td>
                  <td className="py-3 px-4 text-invest text-xs">{ex}</td>
                  <td className="py-3 px-4 text-xs font-bold">{cen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Carteira Recomendada para o Ciclo Atual (Abr–Jun 2026)
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { perfil: "🛡️ Conservador", alocacao: [
              { classe: "Tesouro IPCA+ 2035", pct: 50, desc: "Proteção real contra inflação alta" },
              { classe: "Tesouro Selic / CDB pós-fixado", pct: 35, desc: "Liquidez e CDI alto por mais tempo" },
              { classe: "BOVA11 (ETF Ibovespa)", pct: 15, desc: "Exposição mínima à bolsa" },
            ]},
            { perfil: "⚖️ Moderado", alocacao: [
              { classe: "Tesouro IPCA+ 2035", pct: 30, desc: "Âncora inflacionária" },
              { classe: "CDB/LCI/LCA pós-fixado", pct: 25, desc: "CDI + spread, liquidez razoável" },
              { classe: "Ações setoriais (petróleo, utilities, bancos)", pct: 30, desc: "Setores favorecidos no ciclo" },
              { classe: "IVVB11 (S&P 500)", pct: 15, desc: "Diversificação internacional" },
            ]},
            { perfil: "🚀 Arrojado", alocacao: [
              { classe: "Ações BR (seleção setorial)", pct: 45, desc: "Petróleo, utilities, bancos em foco" },
              { classe: "Tesouro IPCA+ longo", pct: 20, desc: "Hedge inflacionário" },
              { classe: "ETFs internacionais (IVVB11/NASD11)", pct: 20, desc: "Big techs americanas" },
              { classe: "FIIs logísticos (contratos IPCA+)", pct: 15, desc: "Renda mensal com proteção real" },
            ]},
          ].map(({ perfil, alocacao }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-3">{perfil}</h3>
              <div className="space-y-2">
                {alocacao.map(({ classe, pct, desc }) => (
                  <div key={classe} className="flex items-center gap-3">
                    <div className="w-10 text-right text-xs font-bold text-invest shrink-0">{pct}%</div>
                    <div className="flex-1 bg-secondary rounded-full h-2">
                      <div className="bg-invest h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="min-w-[160px] text-xs font-medium">{classe}</div>
                    <div className="text-xs text-muted-foreground hidden md:block">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          Os 3 Erros que o Investidor Não Pode Cometer Agora
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { n: "1", erro: "Sair do CDI antes do tempo", desc: "Com Selic desacelerando mais devagar, o CDI ainda rende muito. Migrar tudo para renda variável agora, com IPCA em 4,8%, é precipitado. O CDI real (acima da inflação) segue entre os mais altos do mundo. Faça a transição gradualmente, alocando apenas o excedente da reserva em ativos de maior risco." },
            { n: "2", erro: "Ignorar o risco eleitoral de 2026", desc: "Ano eleitoral costuma trazer volatilidade na curva longa de juros. Títulos prefixados com vencimento acima de 5 anos ficam mais arriscados com incerteza política e propostas fiscais não precificadas pelo mercado. Prefira vencimentos curtos e médios no prefixado, e priorize o IPCA+ para os prazos mais longos." },
            { n: "3", erro: "Concentrar em renda variável apostando em queda rápida da Selic", desc: "O mercado revisou a queda da Selic de 3 pontos para apenas 1,5 ponto ao longo de 2026. Quem entrou pesado em construção civil e varejo esperando esse catalisador terá que ter paciência muito mais longa do que planejado — e suportar a volatilidade de posições que podem demorar a performar." },
          ].map(({ n, erro, desc }) => (
            <div key={n} className="flex gap-3 bg-card rounded-xl border border-destructive/30 p-4">
              <span className="w-7 h-7 rounded-full bg-destructive/15 text-destructive font-bold flex items-center justify-center shrink-0 text-xs">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5 text-destructive">❌ {erro}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Monitorar nos Próximos 60 Dias
        </h2>
        <p>
          O ambiente de investimentos de maio e junho de 2026 será definido por quatro variáveis-chave. Acompanhe cada uma com atenção antes de tomar qualquer decisão de reposicionamento:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            { titulo: "IPCA de abril e maio (divulgação 09/05 e 09/06)", desc: "Se o IPCA confirmar desaceleração para abaixo de 0,50%/mês, o Copom pode acelerar o ritmo de cortes em junho. Se vier acima de 0,70%, a chance de pausa aumenta." },
            { titulo: "Evolução da guerra Irã-EUA e preço do Brent", desc: "Petróleo acima de US$ 100/barril por mais de 60 dias pressiona diretamente o IPCA brasileiro via combustíveis e fretes, reduzindo o espaço do Banco Central para cortar juros." },
            { titulo: "Focus de segunda-feira (projeções de mercado)", desc: "O Boletim Focus do Banco Central, divulgado toda segunda-feira, consolida as expectativas de inflação e Selic do mercado. É o termômetro mais confiável para calibrar posições semanalmente." },
            { titulo: "Resultado das eleições municipais (outubro) e pesquisas presidenciais", desc: "Em ano eleitoral, pesquisas de intenção de voto para 2026 influenciam o prêmio de risco no câmbio e nas taxas longas. Nomes que sinalizam populismo fiscal geram pressão sobre os juros futuros." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-4 mb-2">
              <h4 className="font-bold text-sm mb-1">{titulo}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Como Funciona o Mecanismo de Transmissão da Política Monetária
        </h2>
        <p>
          Para entender por que o Copom age com cautela mesmo diante de pressões
          pontuais, vale compreender o mecanismo de transmissão da política monetária:
          mudanças na Selic não afetam a economia instantaneamente, mas sim com defasagem
          de 6 a 18 meses. Um corte de juros hoje leva tempo para se traduzir em crédito
          mais barato, que leva mais tempo para estimular consumo e investimento, que por
          sua vez leva ainda mais tempo para pressionar (ou aliviar) a inflação. Essa
          cadeia de efeitos defasados é o motivo pelo qual o Banco Central sempre projeta
          cenários futuros, em vez de reagir apenas aos dados do mês corrente.
        </p>
        <p>
          Esse entendimento técnico explica por que decisões do Copom às vezes parecem
          contraintuitivas para o público geral: cortar juros mesmo com inflação corrente
          elevada, ou manter juros altos mesmo com sinais de desaceleração econômica, faz
          sentido quando se considera que o efeito da decisão de hoje só será sentido
          plenamente na economia daqui a mais de um ano. Para o investidor, essa
          característica reforça a importância de acompanhar não apenas a decisão pontual
          de cada reunião, mas principalmente o comunicado e as projeções que acompanham
          cada decisão — eles revelam a trajetória esperada pelo comitê, informação mais
          valiosa para o planejamento de carteira do que o movimento isolado da Selic em
          uma única reunião.
        </p>
        <p>
          Outro aspecto relevante do mecanismo de transmissão é que ele não afeta todos
          os setores da economia na mesma velocidade. Setores que dependem fortemente de
          financiamento de longo prazo, como construção civil e bens duráveis, sentem o
          efeito de mudanças na Selic com maior defasagem do que setores de consumo
          imediato. Essa diferença de velocidade de resposta ajuda a explicar por que
          analistas recomendam paciência adicional ao avaliar a recuperação de ações de
          construtoras após o início de um ciclo de corte — o efeito positivo da queda de
          juros tende a aparecer nos resultados trimestrais dessas empresas com atraso
          de dois a quatro trimestres em relação à decisão do Copom. Investidores que
          buscam capturar esse movimento de recuperação setorial precisam, portanto,
          calibrar suas expectativas de prazo de acordo com essa defasagem natural,
          evitando a frustração de esperar resultados imediatos de uma decisão de
          política monetária que, por desenho, opera com efeito gradual ao longo do
          tempo.
        </p>


        <p className="text-sm text-muted-foreground mt-6 p-4 border-l-4 border-yellow-500 bg-yellow-500/10 rounded">
          ⚠️ <strong>Aviso:</strong> Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado. Rentabilidade passada não garante resultados futuros.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o ciclo de corte exige paciência — não pressa">
        <p>
          O início do ciclo de corte da Selic não significa retorno fácil em renda variável. Em ciclos anteriores (2016, 2020 e 2023), o Ibovespa só destravou de forma consistente quando o juro real projetado caiu abaixo de 5% e o risco fiscal estava ancorado — duas condições que ainda não temos em abril de 2026. Com IPCA projetado em 4,80% e Selic a 14,50%, o juro real ainda está próximo de 9,5% — um dos mais altos do mundo e muito acima do nível que historicamente destranca fluxo de capital para ativos de risco no Brasil.
        </p>
        <p className="mt-3">
          Para o investidor pessoa física, a tese mais robusta no curto prazo continua sendo <strong>prefixado e IPCA+ de médio prazo</strong>, travando marcação a mercado antes que o mercado precifique cortes adicionais. Ações só ganham peso maior na carteira depois que o Focus do Banco Central consolidar Selic terminal abaixo de 12% — o que, com a revisão de abril, parece improvável antes do segundo semestre de 2027. Paciência aqui não é fraqueza: é reconhecer que o timing do ciclo mudou e que a renda fixa ainda remunera muito bem quem espera.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          { title: "Atas do Copom", url: "https://www.bcb.gov.br/publicacoes/atascopom", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Expectativas de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Relatório Trimestral de Inflação", url: "https://www.bcb.gov.br/publicacoes/ri", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Tesouro Direto — Preços e Taxas", url: "https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm", publisher: "Tesouro Nacional", accessedAt: "Maio 2026" },
          { title: "ANBIMA — Estudos de Mercado de Capitais", url: "https://www.anbima.com.br/", publisher: "ANBIMA", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug="copom-abril-2026-selic-investimentos" />
      <CommentSection postId="copom-abril-2026-selic-investimentos" postTitle="Copom Abril 2026: Selic a 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio" category="invest" />
    </article>
  );
};

export default CopomAbril2026;
