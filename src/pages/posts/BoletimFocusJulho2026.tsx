import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, AlertTriangle, TrendingUp,
  BarChart3, Shield, Lightbulb, DollarSign, Target
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/boletim-focus-julho-2026-selic-ipca.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const BoletimFocusJulho2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "boletim-focus-julho-2026-selic-ipca",
      "Boletim Focus de Julho 2026: Selic 14%, IPCA 5,12% e Onde Investir",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Macroeconomia · Boletim Focus · Selic
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Boletim Focus de Julho 2026: Selic em 14%, IPCA a 5,12% e o Que Isso Muda na Sua Carteira
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O relatório Focus divulgado em <strong>27 de julho de 2026</strong> trouxe uma leve melhora na inflação
          esperada — IPCA de 2026 caiu de 5,15% para <strong>5,12%</strong> —, mas manteve a Selic projetada em
          <strong> 14% ao fim do ano</strong> e o dólar em R$ 5,20. Este é o retrato de uma economia com juro real
          historicamente alto: entenda o que cada número significa e como montar a carteira no segundo semestre.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />27 de Julho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Boletim Focus de julho de 2026 com projeções de Selic, IPCA, PIB e câmbio"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Painel de projeções */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            Medianas do Focus — coleta até 24/07, divulgação em 27/07/2026
          </h2>
          <p className="text-xs text-muted-foreground mb-4">Projeções do mercado para 2026, 2027 e 2028. Fonte: Banco Central / Valor Econômico.</p>
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2 pb-2 text-xs font-bold text-muted-foreground border-b border-border/40">
              <span>Indicador</span><span className="text-center">2026</span><span className="text-center">2027</span><span className="text-center">2028</span>
            </div>
            {[
              { ind: "IPCA", a: "5,12%", b: "4,22%", c: "3,80%" },
              { ind: "Selic (fim de ano)", a: "14,00%", b: "12,00%", c: "10,50%" },
              { ind: "PIB", a: "1,99%", b: "1,60%", c: "2,00%" },
              { ind: "Dólar (fim de ano)", a: "R$ 5,20", b: "R$ 5,29", c: "R$ 5,30" },
            ].map(({ ind, a, b, c }) => (
              <div key={ind} className="grid grid-cols-4 gap-2 py-2 border-b border-border/30 text-xs">
                <span className="text-muted-foreground">{ind}</span>
                <span className="text-center text-invest font-bold">{a}</span>
                <span className="text-center">{b}</span>
                <span className="text-center">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-medium">
            IPCA suavizado de 12 meses avançou de 4,18% para 4,19%. A projeção de PIB de 2028 segue em 2,00% pela 124ª semana consecutiva.
          </p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Que o Boletim Focus É — e Por Que Ele Move o Mercado
        </h2>
        <p>
          O relatório Focus é uma pesquisa semanal do Banco Central que consolida as projeções de mais de uma centena de
          instituições financeiras para as principais variáveis macroeconômicas brasileiras. Ele é divulgado toda
          segunda-feira, com dados coletados até a sexta anterior, e o número que o mercado observa é a <strong>mediana</strong>
          das estimativas — não a média, justamente para reduzir o peso de previsões extremas.
        </p>
        <p>
          Sua importância vai além da curiosidade estatística. As expectativas de inflação capturadas pelo Focus entram
          diretamente no modelo de decisão do Copom: quando as projeções para o horizonte relevante estão acima da meta,
          o comitê tende a manter ou elevar juros; quando convergem, abre espaço para cortes. Por isso, cada décimo de
          revisão no IPCA esperado é lido como sinal — e o recuo de 5,15% para 5,12% na edição de 27 de julho de 2026,
          embora modesto, veio na direção que o Banco Central quer ver.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Selic a 14% com IPCA a 5,12%: o Juro Real que Define Tudo
        </h2>
        <p>
          A combinação divulgada nesta edição do Focus produz um juro real ex-ante de aproximadamente
          <strong> 8,4% ao ano</strong> — resultado de (1,14 ÷ 1,0512) − 1. Esse é o número que realmente importa para o
          investidor, porque mede o ganho de poder de compra acima da inflação antes de impostos. Poucos países do mundo
          oferecem retorno real dessa magnitude em títulos soberanos, e é isso que sustenta o atual apetite por renda fixa
          no Brasil.
        </p>
        <p>
          Para 2027, o mercado projeta Selic de 12% e IPCA de 4,22%, o que comprimiria o juro real para cerca de 7,5%.
          Em 2028, com Selic de 10,50% e IPCA de 3,80%, o juro real cairia para aproximadamente 6,5%. A leitura prática é
          direta: <strong>as taxas disponíveis hoje tendem a ser melhores do que as de amanhã</strong>. Quem tem objetivos
          de médio e longo prazo e ainda não travou parte da carteira em prefixados ou IPCA+ está, na prática, apostando
          que o ciclo de queda demorará mais do que o consenso projeta.
        </p>
        <p>
          Há, contudo, o outro lado da moeda. A projeção de PIB de 1,99% para 2026 e de apenas 1,60% para 2027 mostra uma
          economia que cresce pouco justamente porque o juro está alto. Crescimento fraco pressiona receita de empresas,
          emprego e arrecadação — e é por isso que o debate fiscal continua sendo o principal fator de risco doméstico
          para a curva de juros longa.
        </p>

        {/* Cenários */}
        <div className="not-prose my-6 space-y-4">
          {[
            {
              titulo: "Se a inflação continuar cedendo (cenário base do Focus)",
              itens: [
                "O Copom ganha espaço para iniciar cortes, e a Selic converge para 12% em 2027",
                "Prefixados travados em 2026 passam a render acima do CDI futuro — ganho de marcação a mercado",
                "Ações de consumo, varejo e construção tendem a ser as primeiras beneficiadas pela queda de juros",
                "O CDI perde atratividade relativa e a reserva ociosa em pós-fixado começa a custar retorno",
              ],
              cor: "border-green-500/30 bg-green-500/5",
            },
            {
              titulo: "Se a inflação surpreender para cima",
              itens: [
                "A Selic permanece em 14% por mais tempo, e o pós-fixado segue como o melhor risco-retorno",
                "Prefixados longos sofrem marcação negativa — quem precisar vender antes do vencimento realiza perda",
                "Títulos IPCA+ protegem o poder de compra e ganham vantagem relativa sobre o prefixado equivalente",
                "O câmbio tende a pressionar acima de R$ 5,20, elevando o custo de bens importados e combustíveis",
              ],
              cor: "border-yellow-500/30 bg-yellow-500/5",
            },
          ].map(({ titulo, itens, cor }) => (
            <div key={titulo} className={`rounded-xl border p-5 ${cor}`}>
              <p className="font-bold text-sm mb-3">{titulo}</p>
              <ul className="space-y-1.5">
                {itens.map(item => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-invest" />
          Câmbio em R$ 5,20 e o Componente Externo
        </h2>
        <p>
          A mediana para o dólar ao fim de 2026 permaneceu em R$ 5,20, com R$ 5,29 para 2027 e R$ 5,30 para 2028 — ou seja,
          o mercado projeta estabilidade cambial em termos nominais, com desvalorização anual bem abaixo do diferencial de
          inflação entre Brasil e Estados Unidos. Essa projeção é sustentada pelo próprio juro alto, que atrai fluxo
          estrangeiro para a renda fixa doméstica.
        </p>
        <p>
          O risco dessa hipótese é externo. O ambiente global em julho de 2026 segue sensível: dirigentes de bancos
          centrais desenvolvidos sinalizam necessidade de aperto adicional e o mercado de commodities reage a tensões
          geopolíticas no Oriente Médio, com o ouro oscilando conforme o noticiário de alívio ou escalada. Para o
          investidor brasileiro, isso reforça o argumento estrutural de manter de 10% a 20% da carteira em ativos
          dolarizados — não como aposta direcional, mas como seguro contra o cenário em que a projeção de estabilidade
          cambial falha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Como Traduzir o Focus em Alocação Prática
        </h2>
        <p>
          O erro mais comum é tratar o Focus como previsão do futuro. Ele não é: é a fotografia do consenso, e o consenso
          erra com frequência — inclusive nas revisões semanais do próprio relatório. O uso correto é outro: usar as
          medianas como <strong>cenário-base para testar a robustez da carteira</strong>, perguntando o que aconteceria com
          seus investimentos se os números se confirmassem e, principalmente, se não se confirmassem.
        </p>
        <p>
          Com Selic a 14%, a reserva de emergência em Tesouro Selic ou CDB de liquidez diária a 100% do CDI está sendo
          excepcionalmente bem remunerada — não há motivo para deixá-la em poupança. Para objetivos de dois a quatro anos,
          prefixados capturam o ciclo de queda projetado. Para prazos acima de cinco anos, títulos IPCA+ garantem o retorno
          real que protege o patrimônio mesmo se as projeções de desinflação falharem. E a parcela em bolsa se beneficia
          antecipadamente do início do ciclo de cortes, historicamente precificado pelo mercado antes de acontecer.
        </p>
        <p>
          A regra de ouro para os próximos meses é o escalonamento. Em vez de decidir tudo de uma vez com base em uma
          única edição do Focus, distribua os aportes ao longo do semestre e entre vencimentos diferentes. Isso captura
          naturalmente as revisões de cenário sem exigir que você acerte o timing — algo que, como o próprio histórico do
          Focus demonstra, nem o consenso de mercado consegue fazer de forma consistente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Acompanhar nas Próximas Semanas
        </h2>
        <p>
          Três indicadores merecem atenção especial até o fim do trimestre. O primeiro é a sequência de leituras mensais
          do IPCA: revisões consistentes para baixo no Focus só ocorrem quando os dados efetivos vêm abaixo do esperado.
          O segundo é a confiança do consumidor, que registrou a terceira queda seguida em julho, chegando a 88,3 pontos
          segundo a FGV — sinal de que a atividade doméstica sente o custo do dinheiro caro. O terceiro é o comunicado do
          Copom, cujo tom costuma antecipar mudanças de rumo antes que apareçam nas medianas do Focus.
        </p>
        <p>
          Vale entender também como o Focus é construído, porque isso ajuda a calibrar o peso que cada número merece. O
          relatório é uma compilação semanal feita pelo Banco Central com as projeções enviadas por mais de uma centena
          de instituições — bancos, gestoras, consultorias e casas de análise. O que é publicado é a mediana dessas
          respostas, ou seja, o valor central da amostra, e não uma previsão oficial da autoridade monetária. Por isso a
          leitura correta não é "o Banco Central espera Selic a 14%", e sim "o consenso do mercado, hoje, trabalha com
          Selic a 14%". A distinção parece sutil, mas muda tudo na hora de tomar decisão: o Focus mede expectativa, e
          expectativa muda toda semana conforme novos dados chegam.
        </p>
        <p>
          Outro ponto que costuma passar despercebido é a diferença entre o topo e a base da amostra. Quando as
          projeções dos participantes estão muito dispersas — alguns vendo IPCA em 4,6% e outros em 5,8%, por exemplo —,
          isso indica que o próprio mercado está dividido sobre o rumo da economia. Nesses momentos, apostar pesado em um
          único cenário é especialmente arriscado. Já quando a dispersão é baixa, o consenso tende a ser mais confiável,
          embora nunca infalível. O histórico mostra erros relevantes em anos de choque, como os de câmbio e de energia,
          justamente porque nenhum modelo antecipa bem eventos fora da curva.
        </p>
        <p>
          Do ponto de vista prático, o investidor pessoa física deve usar o Focus como pano de fundo, não como gatilho de
          compra e venda. Ele serve para responder perguntas amplas: o juro está alto ou baixo em termos reais? A
          inflação esperada está acima ou abaixo da meta? O câmbio projetado justifica manter parte do patrimônio
          dolarizado? Essas respostas mudam a alocação estrutural da carteira uma ou duas vezes por ano — não a cada
          segunda-feira. Quem tenta operar cada revisão de mediana acaba pagando corretagem, imposto e ansiedade sem
          capturar retorno adicional.
        </p>
        <p>
          Por fim, um lembrete sobre horizonte. As projeções para 2027 e 2028 têm valor informativo limitado porque
          incorporam premissas fiscais e políticas que ainda nem se materializaram. Elas são úteis para dar noção de
          direção — se o mercado enxerga convergência da inflação à meta no médio prazo, por exemplo —, mas não devem
          ancorar decisões de curto prazo. O que realmente importa na carteira de hoje é o juro real disponível agora e a
          adequação dos vencimentos aos seus objetivos de vida.
        </p>



        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. As projeções citadas são medianas de mercado divulgadas em 27/07/2026 e mudam semanalmente. Rentabilidade passada não garante resultados futuros. Consulte um assessor certificado pela CVM antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o Focus não é bola de cristal — é termômetro, e está marcando juro real de 8%">
        <p>
          Acompanho o Focus há muitos anos e a lição que mais se repete é esta: as medianas de 2028 valem quase nada, as
          de 2027 valem alguma coisa, e as do ano corrente valem bastante. Discutir se o PIB de 2028 será 2,00% ou 1,95%
          é ruído. Reconhecer que o juro real ex-ante de hoje está perto de 8,4% ao ano é informação acionável.
        </p>
        <p className="mt-2">
          Minha leitura desta edição é de estabilidade com viés levemente construtivo: inflação cedendo devagar, Selic
          parada, crescimento fraco. É exatamente o ambiente em que a renda fixa brasileira paga demais para o risco que
          oferece. <strong>Se você ainda tem dinheiro relevante parado em poupança ou em conta corrente com Selic a 14%,
          esse é o problema a resolver esta semana</strong> — não a escolha do melhor prefixado.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Mercado reduz projeção do IPCA de 2026 para 5,12% e eleva a de 2027 para 4,22%, aponta Focus",
            url: "https://valor.globo.com/brasil/noticia/2026/07/27/mercado-reduz-projecao-do-ipca-de-2026-para-512percent-e-eleva-de-2027-para-422percent-aponta-focus.ghtml",
            publisher: "Valor Econômico",
            accessedAt: "Julho 2026",
          },
          {
            title: "Relatório de Mercado — Focus",
            url: "https://www.bcb.gov.br/publicacoes/focus",
            publisher: "Banco Central do Brasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "Confiança do consumidor tem terceira queda seguida em julho, para 88,3 pontos",
            url: "https://valor.globo.com/brasil/noticia/2026/07/27/confianca-do-consumidor-tem-terceira-queda-seguida-em-julho-para-883-pontos-diz-fgv.ghtml",
            publisher: "Valor Econômico / FGV",
            accessedAt: "Julho 2026",
          },
          {
            title: "Taxa Selic — Histórico e Decisões do Copom",
            url: "https://www.bcb.gov.br/controleinflacao/taxaselic",
            publisher: "Banco Central do Brasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "IPCA — Índice Nacional de Preços ao Consumidor Amplo",
            url: "https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html",
            publisher: "IBGE",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tesouro Direto — Tipos de Títulos e Características",
            url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro.htm",
            publisher: "Tesouro Nacional",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="boletim-focus-julho-2026-selic-ipca" />
      <CommentSection
        postId="boletim-focus-julho-2026-selic-ipca"
        postTitle="Boletim Focus de Julho 2026: Selic 14%, IPCA 5,12% e Onde Investir"
        category="invest"
      />
    </article>
  );
};

export default BoletimFocusJulho2026;
