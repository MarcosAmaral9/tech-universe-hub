import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import TableOfContents from "@/components/TableOfContents";
import {
  Clock, User, Calendar, AlertTriangle, TrendingUp,
  BarChart3, Rocket, DollarSign, Target, Globe, Landmark,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/elon-musk-primeiro-trilionario-ipo-spacex-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "elon-musk-primeiro-trilionario-ipo-spacex";
const TITLE = "Elon Musk, o Primeiro Trilionário da História: o IPO da SpaceX e o Que Isso Muda no Mercado";

const EMPRESAS = [
  {
    nome: "SpaceX / Starlink",
    situacao: "Capital aberto desde 12/06/2026 (SPCX)",
    peso: "≈ 80% da fortuna",
    nota: "Estreia a US$ 150 por ação, valor de mercado próximo de US$ 2 trilhões",
  },
  {
    nome: "Tesla (TSLA)",
    situacao: "Capital aberto desde 2010",
    peso: "Segunda maior fatia",
    nota: "Participação direta mais o pacote de remuneração por metas aprovado pelos acionistas",
  },
  {
    nome: "xAI / X (ex-Twitter)",
    situacao: "Capital fechado",
    peso: "Fatia relevante, sem preço público",
    nota: "Avaliação depende de rodadas privadas, não de cotação diária",
  },
  {
    nome: "Neuralink",
    situacao: "Capital fechado",
    peso: "Fatia pequena",
    nota: "Estágio clínico; valor concentrado em expectativa de longo prazo",
  },
  {
    nome: "The Boring Company",
    situacao: "Capital fechado",
    peso: "Fatia marginal",
    nota: "Menor contribuição relativa ao patrimônio total",
  },
];

const TIMELINE = [
  { ano: "1999-2002", txt: "Venda da Zip2 e da X.com/PayPal cria o capital inicial que financiaria SpaceX e Tesla." },
  { ano: "2008", txt: "Ano de quase falência simultânea das duas empresas; o quarto voo do Falcon 1 salva a SpaceX." },
  { ano: "2010", txt: "IPO da Tesla na Nasdaq, a primeira grande liquidez pública do império." },
  { ano: "2020-2021", txt: "Disparada da Tesla leva Musk ao topo da lista dos mais ricos do mundo." },
  { ano: "2022", txt: "Compra do Twitter por US$ 44 bilhões; venda de ações da Tesla para financiar o negócio." },
  { ano: "2026", txt: "IPO da SpaceX transforma participação ilíquida em patrimônio marcado a mercado: US$ 1,1 trilhão." },
];

const ElonMuskTrilionario2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Mercado · IPO · Bolsa de Valores
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Elon Musk, o Primeiro Trilionário da História: o IPO da SpaceX e os Impactos na Bolsa
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Em <strong>12 de junho de 2026</strong>, as ações da SpaceX estrearam na Nasdaq a <strong>US$ 150</strong> — cerca
          de 11% acima do preço de oferta — avaliando a companhia perto de <strong>US$ 2 trilhões</strong>. No mesmo dia, a
          fortuna de <strong>Elon Musk</strong> saltou de aproximadamente US$ 982 bilhões para <strong>US$ 1,1 trilhão</strong>,
          fazendo dele o primeiro trilionário registrado. Entenda o que realmente aconteceu, por que uma abertura de capital
          cria riqueza da noite para o dia e o que o investidor brasileiro deve (e não deve) fazer com essa notícia.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />1 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Foguete decolando sobre painel de bolsa de valores marcando US$ 1 trilhão, representando Elon Musk como primeiro trilionário"
          className="w-full h-full object-cover"
        />
      </div>

      <TableOfContents />

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Painel de números */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            Os números do dia 12 de junho de 2026
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Dados apurados por Forbes, Bloomberg Línea, Exame e BBC News Brasil na estreia das ações da SpaceX.
          </p>
          <div className="space-y-2">
            {[
              { k: "Preço de estreia da ação (SPCX)", v: "US$ 150" },
              { k: "Variação sobre o preço de oferta", v: "+11%" },
              { k: "Valor de mercado implícito da SpaceX", v: "≈ US$ 2 trilhões" },
              { k: "Fortuna de Musk na véspera", v: "≈ US$ 982 bilhões" },
              { k: "Fortuna de Musk após a estreia", v: "≈ US$ 1,1 trilhão" },
              { k: "Peso da SpaceX no patrimônio", v: "≈ 80%" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-invest font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-aconteceu" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Rocket className="h-7 w-7 text-invest" />
          O Que Aconteceu no Dia do IPO da SpaceX
        </h2>
        <p>
          Um IPO (<em>Initial Public Offering</em>, ou oferta pública inicial) é o momento em que uma empresa privada passa a
          ter ações negociadas livremente em bolsa. Até 11 de junho de 2026, a SpaceX era uma companhia fechada: seu valor
          existia apenas em rodadas de investimento privadas e em operações pontuais de compra de ações de funcionários. A
          partir do dia 12, passou a ter um preço público, atualizado a cada segundo, formado por milhões de ordens de compra
          e venda.
        </p>
        <p>
          A estreia foi forte. Os papéis abriram a US$ 150, cerca de 11% acima do preço definido na oferta, o que implica uma
          capitalização de mercado próxima de US$ 2 trilhões. Como Elon Musk detém a maior participação individual da empresa,
          a marcação a mercado dessa fatia transformou uma riqueza que era teórica e ilíquida em um número mensurável — e esse
          número levou seu patrimônio total para a casa de US$ 1,1 trilhão, contra os aproximadamente US$ 982 bilhões
          estimados na véspera.
        </p>
        <p>
          É importante entender a mecânica: <strong>Musk não recebeu US$ 118 bilhões em dinheiro naquele dia</strong>. O que
          mudou foi a forma de contar. Antes, a participação na SpaceX era estimada por analogia com rodadas privadas
          anteriores. Depois do IPO, ela passou a ser calculada multiplicando o número de ações pelo preço de tela. É a mesma
          diferença entre ter um imóvel avaliado por um corretor e tê-lo anunciado com preço fechado num mercado com milhares
          de compradores.
        </p>

        <AdInArticle />

        <h2 id="imperio" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          Radiografia do Império: de Onde Vem Cada Pedaço da Fortuna
        </h2>
        <p>
          A imagem popular associa Musk à Tesla, mas depois de junho de 2026 essa associação ficou desatualizada. A SpaceX,
          impulsionada principalmente pela Starlink e pelos contratos de lançamento, responde por cerca de 80% do patrimônio.
          A tabela abaixo resume a composição do império e a natureza de cada ativo.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-invest/10">
              <tr>
                <th className="p-3 text-left font-bold">Empresa</th>
                <th className="p-3 text-left font-bold">Situação</th>
                <th className="p-3 text-left font-bold">Peso na fortuna</th>
                <th className="p-3 text-left font-bold">Observação</th>
              </tr>
            </thead>
            <tbody>
              {EMPRESAS.map((e) => (
                <tr key={e.nome} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-invest break-words">{e.nome}</td>
                  <td className="p-3 text-muted-foreground break-words">{e.situacao}</td>
                  <td className="p-3 break-words">{e.peso}</td>
                  <td className="p-3 text-muted-foreground break-words">{e.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Essa distribuição explica um detalhe que costuma passar despercebido: a fortuna de Musk se tornou, de uma hora para
          outra, <strong>muito mais volátil</strong>. Ativos privados são reavaliados esporadicamente; ativos listados são
          reavaliados a cada pregão. Uma queda de 10% na SpaceX hoje tira mais de US$ 80 bilhões do patrimônio no mesmo dia —
          e é exatamente por isso que o título de "trilionário" pode ser perdido e recuperado várias vezes ao longo de um ano.
        </p>

        <h2 id="trajetoria" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          A Trajetória Até o Trilhão
        </h2>
        <p>
          Nenhuma fortuna dessa escala é construída em linha reta. O caminho de Musk inclui perdas bilionárias, apostas com
          risco de falência e decisões que, isoladas, pareciam irracionais. A linha do tempo ajuda a colocar o marco de 2026
          em perspectiva.
        </p>

        <div className="not-prose my-8 space-y-3">
          {TIMELINE.map(({ ano, txt }) => (
            <div key={ano} className="flex gap-4 items-start rounded-xl border border-invest/20 bg-invest/5 p-4">
              <span className="font-display font-bold text-invest text-sm md:text-base shrink-0 w-24">{ano}</span>
              <span className="text-xs md:text-sm text-muted-foreground break-words">{txt}</span>
            </div>
          ))}
        </div>

        <AdRectangle />

        <h2 id="impacto-mercado" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-invest" />
          Impactos na Bolsa: o Que uma Estreia Desse Tamanho Provoca
        </h2>
        <p>
          Um IPO de quase US$ 2 trilhões não é apenas uma manchete. Ele reorganiza fluxos, índices e expectativas. Os
          principais efeitos observados são estes:
        </p>
        <ul>
          <li>
            <strong>Reorganização de índices e carteiras passivas.</strong> Quando uma empresa desse porte entra no radar dos
            grandes índices americanos, fundos de índice e ETFs precisam comprar o papel para replicar a carteira. Isso cria
            demanda técnica, independente de opinião sobre o negócio.
          </li>
          <li>
            <strong>Drenagem de liquidez de outros papéis.</strong> Para comprar a novidade, gestores vendem outras posições.
            É comum que ações do mesmo setor e de concorrentes sofram pressão nas semanas seguintes a uma estreia gigante.
          </li>
          <li>
            <strong>Reprecificação do setor espacial e de conectividade.</strong> Com um comparável público, empresas de
            satélites, lançadores e telecomunicações passam a ser avaliadas por múltiplos observáveis, e não por estimativas.
          </li>
          <li>
            <strong>Janela para novos IPOs.</strong> Uma estreia bem recebida costuma abrir a fila: outras companhias adiantam
            planos de abertura de capital enquanto o apetite por risco está alto.
          </li>
          <li>
            <strong>Debate público sobre concentração de riqueza.</strong> O marco simbólico do primeiro trilionário
            intensificou discussões sobre tributação de grandes fortunas e sobre o peso político de fortunas privadas.
          </li>
        </ul>

        <div className="not-prose my-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <p className="font-bold text-sm mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" /> Atenção ao período pós-IPO
          </p>
          <ul className="space-y-1.5">
            {[
              "Volatilidade elevada: nos primeiros meses o preço reflete escassez de ações em circulação, não fundamento.",
              "Lock-up: sócios e funcionários costumam ficar impedidos de vender por um período; quando ele vence, a oferta aumenta e pode pressionar o preço.",
              "Histórico curto: não existem balanços trimestrais públicos suficientes para comparar guidance com entrega.",
              "Concentração de controle: estruturas com ações de voto diferenciado reduzem o poder do acionista minoritário.",
            ].map((i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">→</span>{i}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="investidor-brasileiro" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Que Isso Significa para o Investidor Brasileiro
        </h2>
        <p>
          A pergunta prática é sempre a mesma: dá para participar disso daqui do Brasil? Sim, por caminhos diferentes, cada um
          com custo e complexidade próprios.
        </p>
        <ul>
          <li>
            <strong>BDRs.</strong> Recibos negociados na B3 lastreados em ações estrangeiras. Permitem exposição em reais, mas
            dependem de o emissor lançar o programa e costumam ter liquidez menor que o papel original.
          </li>
          <li>
            <strong>Conta em corretora internacional.</strong> Compra direta do papel na bolsa americana. Exige remessa de
            câmbio, controle de custo de aquisição em dólar e atenção às regras de imposto sobre ganho de capital no exterior.
          </li>
          <li>
            <strong>ETFs de índice.</strong> Fundos que acompanham índices americanos amplos passam a carregar o papel
            automaticamente quando ele é incluído. É a forma mais diversificada e barata de ter exposição indireta.
          </li>
          <li>
            <strong>Fundos de investimento no exterior.</strong> Delegam a decisão ao gestor; útil para quem não quer
            administrar câmbio e declaração, ao custo da taxa de administração.
          </li>
        </ul>
        <p>
          Em todos os casos, três pontos merecem atenção: o <strong>câmbio</strong>, que pode dominar o resultado em reais; a
          <strong> tributação</strong>, que segue regras específicas para aplicações no exterior e precisa ser declarada
          anualmente; e o <strong>tamanho da posição</strong>. Comprar uma ação porque o dono virou trilionário é o tipo de
          decisão que confunde notícia com tese de investimento.
        </p>

        <h2 id="licoes" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-invest" />
          Três Lições Que Valem Mais que a Manchete
        </h2>
        <p>
          <strong>1. Patrimônio de bilionário é preço, não caixa.</strong> A maior parte dessas fortunas está em participação
          societária. Vender uma fatia grande derruba a própria cotação, o que torna o número muito menos "gastável" do que
          parece. É por isso que grandes acionistas costumam tomar crédito com ações em garantia em vez de vender.
        </p>
        <p>
          <strong>2. Concentração cria e destrói na mesma velocidade.</strong> A fortuna trilionária existe porque Musk
          concentrou quase tudo em poucas empresas. Essa é a estratégia que constrói fortunas extremas — e também a que produz
          quedas de dezenas de bilhões em um único pregão. Para o investidor comum, que precisa do dinheiro em datas
          específicas, diversificação continua sendo o caminho racional.
        </p>
        <p>
          <strong>3. Liquidez é um evento, não um estado permanente.</strong> O que mudou em 12 de junho não foi a qualidade da
          SpaceX, e sim a existência de um mercado público para suas ações. Vale para empresas gigantes e para o pequeno
          investidor: ativo sem mercado ativo vale o que alguém está disposto a pagar hoje, não o que a planilha diz.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Os valores
            citados referem-se à estreia das ações da SpaceX em 12/06/2026 e a estimativas de patrimônio publicadas na mesma
            data; cotações e fortunas variam diariamente. Rentabilidade passada não garante resultados futuros. Consulte um
            profissional certificado antes de investir.
          </span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o trilhão é um recorde contábil, não um plano de investimento">
        <p>
          A manchete do primeiro trilionário é irresistível, mas ela conta menos sobre a SpaceX do que parece. O patrimônio de
          Musk cresceu US$ 118 bilhões em algumas horas sem que um único foguete a mais tivesse sido lançado. O que mudou foi a
          régua: uma participação que era estimada passou a ser cotada. Confundir esses dois eventos é o erro mais comum de
          quem lê o noticiário financeiro.
        </p>
        <p className="mt-2">
          Minha recomendação prática é sóbria. Se você já tinha um plano de exposição internacional, esse IPO não muda nada
          estrutural — no máximo, o papel entra na sua carteira via ETF, sem que você precise fazer nada. Se você não tinha
          plano nenhum e está pensando em abrir corretora no exterior por causa dessa notícia,{" "}
          <strong>o problema a resolver primeiro é a ausência de estratégia, não a ausência dessa ação</strong>. Ações recém-listadas
          são das piores portas de entrada possíveis: volatilidade alta, histórico curto e lock-up por vencer.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Elon Musk se torna o primeiro trilionário do mundo após IPO da SpaceX",
            url: "https://exame.com/invest/mercados/elon-musk-se-torna-o-primeiro-trilionario-do-mundo-apos-ipo-da-spacex/",
            publisher: "Exame",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Quem é Elon Musk, primeiro trilionário da história",
            url: "https://forbes.com.br/forbes-money/2026/06/quem-e-elon-musk-primeiro-trilionario-da-historia/",
            publisher: "Forbes Brasil",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Elon Musk se torna o primeiro trilionário do mundo após IPO da SpaceX",
            url: "https://www.bloomberglinea.com.br/negocios/elon-musk-se-torna-o-primeiro-trilionario-do-mundo-apos-ipo-da-spacex/",
            publisher: "Bloomberg Línea",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Elon Musk se torna o primeiro trilionário do mundo após disparada das ações da SpaceX na estreia na bolsa",
            url: "https://www.bbc.com/portuguese/articles/c1dy3eq1e57o",
            publisher: "BBC News Brasil",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Como Elon Musk se tornou o primeiro trilionário da história",
            url: "https://exame.com/invest/mercados/como-elon-musk-se-tornou-o-primeiro-trilionario-da-historia/",
            publisher: "Exame",
            accessedAt: "Agosto 2026",
          },
          {
            title: "BDRs — Brazilian Depositary Receipts: o que são e como funcionam",
            url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/bdrs.htm",
            publisher: "B3",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Investimentos no exterior — tributação e declaração",
            url: "https://www.gov.br/receitafederal/pt-br",
            publisher: "Receita Federal",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default ElonMuskTrilionario2026;
