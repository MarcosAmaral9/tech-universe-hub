import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, DollarSign, Lightbulb, Zap, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ouro-maxima-historica-2026-como-investir.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

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
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Ouro máxima histórica 2026 como investir ETF gold11" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O ouro cruzou a marca de <strong>US$ 3.300 por onça troy</strong> na semana passada — nova máxima histórica e alta de mais de <strong>30% nos últimos 12 meses</strong>. Em reais, o preço do metal está acima de <strong>R$ 23.700 por grama</strong>. Para o investidor brasileiro que nunca considerou ouro seriamente, esta pode ser a hora de entender por que bancos centrais, investidores institucionais e bilionários estão acumulando o metal — e como você pode fazer o mesmo sem precisar guardar barra de ouro em casa.
        </p>

        <p>
          O movimento atual do ouro não é um fenômeno isolado de curto prazo — é a continuação de uma tendência que começou a ganhar força a partir de 2022, quando o congelamento das reservas russas em dólares e euros após a invasão da Ucrânia mostrou a bancos centrais de países emergentes que ativos denominados em moeda estrangeira carregam risco geopolítico que o ouro físico simplesmente não tem. Desde então, a demanda de bancos centrais por ouro mudou de patamar de forma estrutural, e 2025–2026 está sendo o ápice dessa reorganização das reservas internacionais.
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
        <p>
          Para colocar 1979 em perspectiva: aquele foi o ano da segunda crise do petróleo, com a Revolução Iraniana derrubando o Xá e disparando os preços da energia globalmente — um pano de fundo geopolítico que, guardadas as proporções, tem ecos no cenário atual de 2026. Naquela época, o ouro também funcionou como refúgio diante de inflação descontrolada e incerteza nos mercados de energia. A diferença é que, em 2026, a demanda institucional e de bancos centrais é muito mais estruturada e monitorada do que era há quase 50 anos — o que torna o movimento atual mais "visível" para analistas, mas não necessariamente mais previsível em sua duração.
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
        <p>
          Vale destacar que essas cinco causas não são independentes — elas se reforçam mutuamente. A queda do dólar (causa 3) é parcialmente resultado das compras de bancos centrais (causa 1), que por sua vez são motivadas pelo mesmo receio fiscal descrito na causa 5. Quando múltiplos fatores estruturais empurram na mesma direção simultaneamente, o movimento tende a ser mais persistente do que quando apenas um fator isolado está em jogo — o que ajuda a explicar por que, mesmo após uma alta de mais de 40% em 12 meses, analistas ainda hesitam em chamar o ouro de "sobrecomprado" no sentido tradicional.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como Investir em Ouro no Brasil: Todas as Opções
        </h2>
        <p>
          O investidor brasileiro tem hoje cinco caminhos principais para ganhar exposição ao ouro, cada um com diferentes níveis de praticidade, custo e tributação. A escolha certa depende do tamanho do investimento e da preferência por simplicidade versus controle direto sobre o ativo físico:
        </p>
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
        <p>
          Para a grande maioria dos investidores pessoa física, o <strong>GOLD11</strong> é o ponto de entrada mais prático: negociado na B3 como qualquer ação, sem necessidade de armazenamento, seguro ou preocupação com autenticidade — problemas reais de quem opta por ouro físico. A taxa de administração do fundo é descontada automaticamente do valor da cota, e a tributação de 15% sobre o ganho de capital segue o mesmo regime de ETFs de renda variável, sem a isenção de R$ 20.000/mês que vale para ações individuais.
        </p>

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
          O consenso de analistas do JPMorgan, Goldman Sachs e do BTG Pactual Brasil é que o ouro <strong>não está em bolha</strong> — a demanda estrutural de bancos centrais justifica o patamar atual. A recomendação comum é alocar <strong>5–10% da carteira em ouro</strong> como hedge (proteção), não como aposta em alta maior. Se o ouro subir mais, você ganha. Se corrigir, é só uma fração da carteira.
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

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          Ouro vs Outros Hedges: Como Ele se Compara
        </h2>
        <p>
          O ouro não é o único ativo usado como proteção contra crises, mas tem características que o diferenciam de alternativas como dólar, Bitcoin e Tesouro IPCA+. Comparar essas opções ajuda a entender por que muitos gestores combinam mais de um hedge na carteira em vez de escolher apenas um:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { ativo: "Ouro vs Dólar", desc: "Ambos sobem em crises geopolíticas, mas o ouro não depende da política monetária de nenhum país específico — é literalmente sem risco de contraparte. O dólar, por outro lado, tem liquidez instantânea e é mais previsível no curto prazo, mas está sujeito à política do Federal Reserve e à saúde fiscal americana." },
            { ativo: "Ouro vs Bitcoin", desc: "Ambos são chamados de 'reserva de valor digital/física', mas a volatilidade do Bitcoin é várias vezes maior que a do ouro. Em crises agudas de curto prazo, o ouro tende a se comportar de forma mais estável, enquanto o Bitcoin pode amplificar tanto quedas quanto altas de forma mais abrupta." },
            { ativo: "Ouro vs Tesouro IPCA+", desc: "O IPCA+ protege contra inflação doméstica brasileira especificamente, com rendimento garantido pelo governo. O ouro protege contra inflação global e risco sistêmico do sistema financeiro como um todo — são proteções complementares, não substitutas." },
          ].map(({ ativo, desc }) => (
            <div key={ativo} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{ativo}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          O Risco de Comprar Ouro no Pico: Lições de Ciclos Anteriores
        </h2>
        <p>
          A história do ouro tem exemplos de ciclos de alta seguidos por longos períodos
          de estagnação ou correção. Em 1980, o ouro atingiu então recorde histórico em
          meio à crise do petróleo e à alta inflação americana — para depois passar mais
          de duas décadas sem retornar àquele patamar em termos reais (ajustado pela
          inflação). Investidores que compraram no pico de 1980 só viram o investimento
          "valer a pena" novamente após um período extremamente longo de espera.
        </p>
        <p>
          Essa lição histórica não significa que o ciclo atual vá necessariamente se
          repetir da mesma forma — o contexto de 2026, com demanda estrutural de bancos
          centrais e um cenário fiscal global mais desafiador, tem características
          distintas do início dos anos 1980. Mas serve como lembrete importante de que
          mesmo ativos considerados "seguros" como o ouro podem passar por longos
          períodos de baixo retorno após picos de alta acentuada — reforçando por que a
          recomendação de alocação moderada (5-10% da carteira) faz mais sentido do que
          apostas concentradas tentando capturar o topo exato do movimento. Diversificar
          o momento de entrada, comprando aos poucos ao longo de vários meses em vez de
          uma única alocação concentrada, é uma forma adicional de mitigar o risco de
          comprar justamente no pico de um ciclo de alta prolongado.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: ouro não é investimento, é seguro">
        <p>Ouro a US$ 3.000+/oz não significa que você deveria comprar agora — significa que muita gente já comprou. Historicamente, o ouro é uma proteção contra <strong>colapso monetário</strong> e perda de confiança em moedas fiat, não um instrumento de geração de renda (não paga dividendo, não rende juro). No Brasil, a forma mais eficiente de exposição é via <strong>ETFs (GOLD11)</strong> ou fundos como o OURO11, evitando o custo de armazenamento e o IOF de operações físicas. Para quem tem mais de 5% da carteira em ouro com o ativo nessa máxima, é hora de rebalancear — não vender tudo, mas voltar à alocação tática. Como disse Buffett: ouro "olha você de volta". É hedge, não tese.</p>
        <p className="mt-3">
          Um aspecto técnico que costuma passar despercebido: o ouro tende a ter correlação baixa ou até negativa com ações em momentos de estresse extremo de mercado — exatamente quando essa descorrelação é mais valiosa. Em correções "normais" da bolsa, o ouro pode cair junto com tudo o resto (correlação positiva no curto prazo por liquidação geral de posições). Mas em crises sistêmicas mais profundas, historicamente o ouro se descola e se valoriza enquanto ações despencam — é esse comportamento assimétrico em momentos de cauda extrema que justifica seu papel de seguro de carteira, mesmo que ele "fique parado" na maior parte do tempo.
        </p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: "LBMA Gold Price", url: "https://www.lbma.org.uk/prices-and-data/precious-metal-prices", publisher: "London Bullion Market Association", accessedAt: "Maio 2026" },
          { title: "World Gold Council — Research", url: "https://www.gold.org/goldhub/research", publisher: "World Gold Council", accessedAt: "Maio 2026" },
          { title: "Boletim Focus", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "B3 — ETFs disponíveis", url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/etf/renda-variavel/", publisher: "B3 — Bolsa do Brasil", accessedAt: "Maio 2026" },
          { title: "Receita Federal — Tributação de Ativos no Exterior e ETFs", url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras", publisher: "Receita Federal do Brasil", accessedAt: "Maio 2026" },
          { title: "International Monetary Fund — World Economic Outlook", url: "https://www.imf.org/en/Publications/WEO", publisher: "Fundo Monetário Internacional (FMI)", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug="ouro-maxima-historica-2026-como-investir" />
      <CommentSection postId="ouro-maxima-historica-2026-como-investir" postTitle="Ouro em Máxima Histórica: Por Que o Metal Subiu +30% e Como Investir Agora" category="invest" />
    </article>
  );
};

export default OuroMaximaHistorica2026;
