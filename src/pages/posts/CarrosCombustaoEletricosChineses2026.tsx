import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdInArticle, AdRectangle } from "@/components/AdSense";
import { AlertTriangle, BarChart3, BatteryCharging, Calendar, Car, CheckCircle2, Clock, Fuel, HelpCircle, ShoppingCart, Tag, TrendingDown, User } from "lucide-react";
import heroImg from "@/assets/carros-combustao-queda-precos-eletricos-chineses-2026.webp";

const SLUG = "carros-combustao-queda-precos-eletricos-chineses-2026";
const TITLE = "Carros a Combustão Estão Perdendo Valor? O Efeito dos Elétricos Chineses e Como Comprar ou Vender em 2026";

const QUEDAS = [
  { modelo: "BYD Dolphin Mini (elétrico)", nominal: "−1,0%", real: "−5,3%" },
  { modelo: "BYD Dolphin (elétrico)", nominal: "−1,8%", real: "−6,1%" },
  { modelo: "Média dos carros a combustão", nominal: "−8,5%", real: "−12,5%" },
  { modelo: "Média dos híbridos", nominal: "−9,9%", real: "−13,8%" },
  { modelo: "Jeep Renegade", nominal: "−10,8%", real: "−14,7%" },
  { modelo: "GWM Haval H6", nominal: "−10,9%", real: "−14,8%" },
  { modelo: "Jeep Compass", nominal: "−13,0%", real: "−16,8%" },
];

const ANTIGOS = [
  { modelo: "BYD Dolphin Mini GS 2024", perda: "13,7%" },
  { modelo: "BYD Dolphin GS 2024", perda: "23,2%" },
  { modelo: "BYD Seal 2024", perda: "31,2%" },
  { modelo: "JAC e-JS1 2024", perda: "37,7%" },
  { modelo: "BYD Song Plus DM-i 2023 (híbrido plug-in)", perda: "42,1%" },
];

const FAQ = [
  { q: "Os carros a combustão estão desvalorizando mais rápido em 2026?", a: "Sim, de forma moderada. Os usados de 2016 a 2025 caíram cerca de 5% na Tabela Fipe em 12 meses até outubro de 2026, e os modelos a combustão mais vendidos perderam em média 8,5% em um ano, segundo levantamento com dados da Fipe." },
  { q: "Os elétricos chineses desvalorizam menos?", a: "Depende do modelo e do ano. Elétricos populares recentes, como o BYD Dolphin Mini, perderam menos de 2% em 12 meses. Já elétricos e híbridos da primeira leva, de 2021 a 2023, perderam muito, em parte porque as marcas baixaram o preço do carro zero." },
  { q: "Por que o imposto de importação influencia o preço do usado?", a: "Desde 1º de julho de 2026 os eletrificados importados pagam 35% de imposto de importação. Carro zero mais caro tende a segurar o valor do usado do mesmo tipo." },
  { q: "É hora de vender meu carro a combustão?", a: "Se você já pretende trocar nos próximos meses, adiar costuma significar vender por menos, porque a Fipe dos usados vem caindo. Se o carro está quitado, é econômico e atende bem, mantê-lo também é uma estratégia válida." },
  { q: "Vale comprar um usado a combustão agora?", a: "Para quem roda pouco e paga à vista, os preços mais baixos dos usados criam boas oportunidades. Para quem roda muito, o custo por quilômetro do elétrico costuma ser menor e merece entrar na conta." },
  { q: "Financiar um carro com a Selic alta compensa?", a: "Os juros encarecem muito o carro. Sempre que possível, aumente a entrada, compare o Custo Efetivo Total (CET) de vários bancos e prefira prazos curtos." },
];

const CarrosCombustaoEletricosChineses2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Carros · Patrimônio · Estratégia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">Carros a Combustão Estão Perdendo Valor? O Efeito dos Elétricos Chineses e Como Comprar ou Vender em 2026</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Os usados a combustão ficaram mais baratos na Tabela Fipe, enquanto os elétricos chineses ganham espaço e alguns seguram preço melhor que os carros tradicionais. Veja os números reais, o que está por trás deles e como usar esse momento a seu favor na hora de vender ou comprar.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />27 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" loading="eager" decoding="async" width={1536} height={864} src={heroImg} alt="Pátio de seminovos com carros a combustão com preços reduzidos no para-brisa e, ao fundo, carros elétricos em pontos de recarga" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-invest" />Resumo rápido</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Usados (Fipe, 12 meses até out/2026)", "−5,0% na mediana"],
              ["Combustão mais vendidos (12 meses)", "−8,5% em média"],
              ["Elétricos populares da BYD", "menos de −2%"],
              ["Imposto de importação de eletrificados", "35% desde 1º/07/2026"],
              ["Eletrificados vendidos jan–jul/2026", "271.091 unidades"],
              ["Participação em julho/2026", "21% dos leves"],
            ].map(([rotulo, valor]) => <div key={rotulo} className="border-b border-border/40 pb-2"><p className="text-xs text-muted-foreground">{rotulo}</p><p className="font-bold text-invest">{valor}</p></div>)}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Dados da Tabela Fipe compilados por CarTrends e AutoPapo, ABVE e Camex. Fontes completas no fim do artigo.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><TrendingDown className="h-7 w-7 text-invest" />O que está acontecendo com o preço dos carros</h2>
        <p>Para a maioria das famílias brasileiras, o carro é o segundo maior bem depois da casa. E o dinheiro da revenda costuma virar a entrada do próximo. Por isso, uma queda de alguns pontos na Tabela Fipe pesa no bolso de verdade: num carro de R$ 100 mil, cada 5% representa R$ 5 mil a menos na troca.</p>
        <p>Em 2026, essa queda apareceu. Segundo o relatório mensal da CarTrends, que acompanha mais de 7.500 versões de carros usados (anos-modelo 2016 a 2025), os preços caíram 1,1% só em outubro e acumularam <strong>queda de 5,0% em 12 meses</strong>. No mês, 81% das versões ficaram mais baratas.</p>
        <p>Entre os carros mais vendidos, a diferença ficou mais clara. Um levantamento do AutoPapo comparou 105 versões dos 15 modelos líderes de vendas da Fenabrave, todos entre R$ 100 mil e R$ 210 mil, de novembro de 2025 a novembro de 2026. Os carros a combustão caíram em média <strong>8,5%</strong>. Os dois elétricos da lista, ambos da chinesa BYD, perderam menos de 2%.</p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-sm">
            <thead className="bg-invest/10"><tr><th className="p-3 text-left">Modelo ou grupo</th><th className="p-3 text-left text-invest">Queda em 12 meses</th><th className="p-3 text-left text-invest">Descontada a inflação</th></tr></thead>
            <tbody>
              {QUEDAS.map((l) => <tr key={l.modelo} className="border-t border-border/40"><td className="p-3">{l.modelo}</td><td className="p-3 font-semibold">{l.nominal}</td><td className="p-3 font-semibold">{l.real}</td></tr>)}
            </tbody>
          </table>
          <p className="p-3 text-xs text-muted-foreground">Fonte: AutoPapo, com dados da Tabela Fipe (nov/2025 a nov/2026) e IPCA de 4,58% no período.</p>
        </div>
        <p>Repare na última coluna. Com a inflação de 4,58% no período, a perda real de poder de compra de quem tem um carro a combustão foi de cerca de 12,5% em um ano. Isso não significa que o carro a combustão "acabou". Significa que o mercado está se reorganizando e que quem entende o movimento negocia melhor.</p>

        <h2 className="flex items-center gap-3"><BatteryCharging className="h-7 w-7 text-invest" />Por que os chineses mudaram o jogo</h2>
        <p>Há quatro anos, elétrico era raridade nas ruas. Em 2022, o Brasil emplacou 8.460 carros 100% elétricos. Entre janeiro e setembro de 2026, foram 165.820, quase 20 vezes mais, segundo o Estadão. Em setembro, a BYD respondeu sozinha por 64,4% dos elétricos emplacados, seguida por Geely (14%) e GAC (cerca de 8%).</p>
        <p>Somando elétricos e híbridos, a ABVE contou <strong>271.091 eletrificados vendidos de janeiro a julho de 2026</strong>, já 21% acima de todo o ano de 2025 (223.896). Em julho, eles chegaram a 21% das vendas de veículos leves: um em cada cinco carros novos. A Anfavea, que reúne as montadoras instaladas há mais tempo no país, registrou 23,5% de participação dos eletrificados no total de autoveículos, a maior parte importada, e uma alta de 105,4% nos envios de veículos da China ao Brasil nos sete primeiros meses do ano.</p>
        <p>Três fatores explicam esse avanço:</p>
        <ul>
          <li><strong>Preço e equipamentos:</strong> os chineses chegaram com muita tecnologia de série por valores próximos aos de carros a combustão bem equipados, o que obrigou as marcas tradicionais a dar descontos.</li>
          <li><strong>Fábricas no Brasil:</strong> BYD (Camaçari, BA), GWM, Omoda e Geely instalaram unidades ou montagem no país, o que, segundo a ABVE, aumenta a confiança em peças e pós-venda.</li>
          <li><strong>Rede de recarga:</strong> o país já soma pelo menos 25.429 pontos de recarga, segundo a ABVE e a Tupi Mobilidade.</li>
        </ul>

        <AdInArticle />

        <h2>O papel do imposto de importação</h2>
        <p>Em janeiro de 2024, o governo começou a recompor o imposto de importação dos eletrificados, que estava zerado. Para os elétricos, a alíquota começou em 10% e subiu em etapas até o teto de <strong>35%, em vigor desde 1º de julho de 2026</strong>, por decisão do Gecex-Camex.</p>
        <p>Isso tem dois efeitos. O primeiro é que o carro elétrico importado novo ficou mais caro de trazer, e um zero mais caro segura o preço do usado do mesmo tipo. O segundo é que as marcas anteciparam importações antes de julho e ampliaram a produção local para fugir do imposto. A Abeifa, associação dos importadores, afirmou que não espera repasse integral da alta ao consumidor por causa da concorrência.</p>
        <p>Para quem tem um carro a combustão, o recado é indireto: a pressão dos elétricos e híbridos sobre os preços dos zero quilômetro tradicionais continua, e descontos nos carros novos derrubam o valor dos usados de mesma faixa.</p>

        <h2 className="flex items-center gap-3"><Car className="h-7 w-7 text-invest" />Cuidado: elétrico também desvaloriza</h2>
        <p>Seria um erro concluir que todo elétrico segura valor. A fotografia de 12 meses favorece os modelos populares recentes, mas, quando se olha desde o lançamento, o quadro muda. O site Eletrificado comparou o preço do zero na época do lançamento com a Fipe de novembro de 2026:</p>
        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2">
          {ANTIGOS.map((a) => (
            <div key={a.modelo} className="rounded-xl border border-yellow-400/30 bg-yellow-400/5 p-4">
              <p className="text-sm text-muted-foreground">{a.modelo}</p>
              <p className="text-2xl font-bold text-yellow-400">−{a.perda}</p>
              <p className="text-xs text-muted-foreground">desde o preço de lançamento</p>
            </div>
          ))}
        </div>
        <p>O índice IBV Auto, do Banco BV, vai na mesma direção: os elétricos ano 2023 perderam quase 47% do valor até setembro de 2026, contra 27,89% dos híbridos e 22,20% dos carros a combustão. Boa parte dessa perda veio dos cortes de preço que as próprias marcas fizeram nos carros zero, o que derrubou na hora o valor de quem tinha comprado antes.</p>
        <p>O Guia Carros chegou a uma conclusão parecida: o problema não é ser chinês, e sim ser um elétrico caro ou comprar logo antes de a fabricante baixar o preço. Os chineses a combustão e híbridos mais vendidos seguram preço de forma semelhante aos tradicionais, e uma análise do SUV Car encontrou queda mediana de 7,5% nos chineses contra 6,3% nos demais em 12 meses.</p>

        <h2 className="flex items-center gap-3"><Fuel className="h-7 w-7 text-invest" />Quais carros a combustão sofrem mais</h2>
        <p>Pelos levantamentos, as maiores quedas se concentram em alguns grupos:</p>
        <ul>
          <li><strong>SUVs médios a combustão</strong> que hoje competem diretamente com elétricos e híbridos chineses de preço parecido, como mostram as quedas de Compass e Renegade.</li>
          <li><strong>Modelos fora de linha</strong> ou com troca de geração próxima.</li>
          <li><strong>Versões caras e pouco procuradas</strong>, em que um desconto no zero puxa o usado para baixo.</li>
          <li><strong>Carros com mais idade e quilometragem alta</strong>, que já perdem valor naturalmente.</li>
        </ul>
        <p>Já os compactos econômicos e as picapes, com mercado de revenda grande, tendem a ter liquidez melhor. Ainda assim, cada versão e ano se comportam de um jeito: consulte sempre a Fipe do seu carro específico.</p>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><Tag className="h-7 w-7 text-invest" />Estratégia para quem quer vender</h2>
        <div className="not-prose my-6 rounded-xl border border-invest/40 bg-invest/5 p-6">
          <p className="font-bold text-invest mb-3">Se você já decidiu trocar, venda antes e venda bem</p>
          <ul className="space-y-2 text-sm text-foreground/90 list-disc pl-5">
            <li><strong>Não espere a "recuperação":</strong> a tendência dos usados a combustão em 2026 é de queda mês a mês. Segurar o carro à espera de preço melhor costuma custar dinheiro.</li>
            <li><strong>Venda antes da virada do ano-modelo:</strong> quando o carro fica um ano mais "velho" na Fipe, o valor de referência cai.</li>
            <li><strong>Prefira vender por conta própria:</strong> lojas e concessionárias pagam abaixo da Fipe para ter margem; a venda direta costuma render mais.</li>
            <li><strong>Separe venda e compra:</strong> na troca na concessionária, o desconto do novo e a avaliação do usado se misturam. Peça os dois valores separados.</li>
            <li><strong>Capriche na documentação:</strong> revisões em dia, manual, chave reserva e laudo cautelar aprovado aumentam o preço e aceleram a venda.</li>
          </ul>
        </div>
        <p><strong>Por que essa estratégia:</strong> o seu carro é um ativo que perde valor todos os meses. Quando o mercado está em queda, cada mês de espera é dinheiro perdido. Vender antes e negociar separado é a forma de reduzir a perda que você não controla.</p>
        <p>Se o carro está quitado, é econômico e você roda pouco, a melhor estratégia pode ser não vender. A desvalorização só vira prejuízo real na hora da venda, e manter um carro barato enquanto se junta dinheiro para a próxima compra à vista evita os juros.</p>

        <h2 className="flex items-center gap-3"><ShoppingCart className="h-7 w-7 text-invest" />Estratégia para quem quer comprar</h2>
        <div className="not-prose my-6 rounded-xl border border-yellow-400/40 bg-yellow-400/5 p-6">
          <p className="font-bold text-yellow-400 mb-3">O momento favorece quem compra com calma e com dinheiro na mão</p>
          <ul className="space-y-2 text-sm text-foreground/90 list-disc pl-5">
            <li><strong>Usado a combustão está mais barato:</strong> quem roda pouco e paga à vista encontra boas oportunidades, principalmente em SUVs médios que caíram mais.</li>
            <li><strong>Faça a conta por quilômetro:</strong> quem roda muito deve comparar combustível, manutenção, seguro e IPVA com os de um elétrico. Em vários estados, o elétrico tem IPVA reduzido ou isento; confira a regra do seu.</li>
            <li><strong>Elétrico usado só com bateria comprovada:</strong> peça o relatório de saúde da bateria e confira a garantia restante.</li>
            <li><strong>Atenção a cortes de preço:</strong> comprar um elétrico zero logo antes de a marca baixar o preço foi o que mais causou perdas; acompanhe lançamentos e promoções.</li>
            <li><strong>Negocie com a Fipe na mão:</strong> com os preços caindo, o vendedor sabe que segurar o carro custa caro, o que abre espaço para desconto.</li>
          </ul>
        </div>
        <p><strong>Por que essa estratégia:</strong> em um mercado em queda, o poder de negociação está com o comprador. Pagar à vista ou com entrada grande evita juros e transforma a queda de preço em vantagem real.</p>

        <h2>Financiar com juros altos: cuidado redobrado</h2>
        <p>Com a Selic na casa dos 14% ao ano em 2026, o crédito para veículos está caro. Num financiamento longo, os juros podem somar uma parte grande do valor do carro, que ao mesmo tempo perde valor todo mês. É a combinação mais cara possível: dívida que cresce e bem que diminui.</p>
        <ul>
          <li>Compare sempre o <strong>CET</strong> (Custo Efetivo Total), que inclui juros, tarifas e seguros, em pelo menos três bancos.</li>
          <li>Dê a maior entrada possível e prefira prazos de até 36 meses.</li>
          <li>Desconfie de "taxa zero" que vem com preço do carro inflado.</li>
          <li>Mantenha a reserva de emergência intacta: carro não é investimento.</li>
        </ul>

        <h2 className="flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-invest" />Riscos que você precisa considerar</h2>
        <ul>
          <li><strong>Novos cortes de preço:</strong> a guerra de preços entre marcas pode derrubar o valor de qualquer carro, elétrico ou não.</li>
          <li><strong>Bateria e tecnologia:</strong> gerações novas, com mais autonomia, podem deixar modelos antigos menos atraentes.</li>
          <li><strong>Recarga:</strong> quem não tem onde carregar em casa ou no trabalho perde boa parte da vantagem do elétrico.</li>
          <li><strong>Regras de imposto:</strong> IPVA e incentivos de cada estado podem mudar.</li>
          <li><strong>Seguro e reparo:</strong> peças e funilaria de modelos novos podem ser mais caras; faça cotação antes de fechar negócio.</li>
        </ul>

        <h2 className="flex items-center gap-3"><CheckCircle2 className="h-7 w-7 text-invest" />Checklist antes de fechar negócio</h2>
        <ol>
          <li>Consulte a Tabela Fipe da versão e do ano exatos do carro;</li>
          <li>Compare anúncios reais da mesma versão na sua cidade;</li>
          <li>Calcule o custo por quilômetro (combustível ou energia, seguro, IPVA, revisões);</li>
          <li>Faça cotação de seguro antes de comprar;</li>
          <li>Em elétricos, peça o relatório de saúde da bateria e a garantia restante;</li>
          <li>Se for financiar, compare o CET em três bancos;</li>
          <li>Faça vistoria cautelar em qualquer usado.</li>
        </ol>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Perguntas frequentes</h2>
        <div className="not-prose grid gap-4 my-6">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-card/60 p-5">
              <p className="font-bold text-invest mb-2">{f.q}</p>
              <p className="text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-sm text-muted-foreground flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-invest shrink-0 mt-0.5" /><span><strong>Aviso:</strong> conteúdo educativo, não recomendação individual. Os valores da Tabela Fipe mudam todo mês; confirme os números do seu carro antes de decidir.</span></div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o carro é um gasto, trate a troca como decisão financeira">
        <p>O que mais me chamou atenção nesses números é que a narrativa "elétrico desvaloriza, combustão é seguro" se inverteu em 2026 para os modelos populares. Mas eu não trocaria de carro só por causa disso. A primeira leva de elétricos mostrou que um corte de preço da fabricante apaga em um dia o que a Fipe levou anos para construir.</p>
        <p>Minha regra é simples: se a troca já estava nos planos, venda o carro a combustão sem esperar, negocie separado e compre com a maior entrada possível. Se não estava, rode com o carro que você tem, junte o dinheiro e deixe o mercado se acomodar. Quem compra sem pressa e sem juros ganha nesse momento.</p>
      </EditorialTake>
      <ArticleSources category="invest" sources={[
        { title: "Usados caíram 1,1% na Fipe em outubro e acumulam queda de 5,0% em 12 meses", url: "https://cartrends.com.br/relatorio-fipe", publisher: "CarTrends", accessedAt: "Novembro 2026" },
        { title: "Carros elétricos desvalorizam mais? Entre os mais vendidos, a Fipe mostra o contrário", url: "https://autopapo.com.br/noticia/carros-eletricos-desvalorizam-mais-entre-os-mais-vendidos-a-fipe-mostra-o-contrario/", publisher: "AutoPapo", accessedAt: "Novembro 2026" },
        { title: "Desvalorização de carro elétrico usado: o que diz a Fipe", url: "https://eletrificado.com/desvalorizacao-carro-eletrico-usado/", publisher: "Eletrificado", accessedAt: "Novembro 2026" },
        { title: "Eletrificados conquistam 21% de participação de mercado", url: "https://abve.org.br/eletrificados-conquistam-21-de-participacao-de-mercado-em-julho-e-devem-passar-de-450-mil-este-ano/", publisher: "ABVE", accessedAt: "Novembro 2026" },
        { title: "Com chinesas, venda de elétricos cresce 20 vezes em 4 anos", url: "https://www.estadao.com.br/jornal-do-carro/com-chinesas-venda-de-eletricos-cresce-20-vezes-em-4-anos-o-que-fica-para-o-brasil/", publisher: "Estadão", accessedAt: "Novembro 2026" },
        { title: "Balanço de julho de 2026", url: "https://anfavea.com.br/site/wp-content/uploads/2026/09/release-agosto26.pdf", publisher: "Anfavea", accessedAt: "Novembro 2026" },
        { title: "ABEIFA vê impacto limitado do imposto de 35% nos preços", url: "https://insideevs.uol.com.br/news/801621/abeifa-precos-importados-imposto/", publisher: "InsideEVs Brasil", accessedAt: "Novembro 2026" },
        { title: "Carro chinês desvaloriza mais? O que a FIPE mostra", url: "https://guiacarros.com.br/materias/escolher/carro-chines-desvaloriza-vale-a-pena", publisher: "Guia Carros", accessedAt: "Novembro 2026" },
        { title: "Tabela Fipe — preço médio de veículos", url: "https://veiculos.fipe.org.br/", publisher: "Fipe", accessedAt: "Novembro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default CarrosCombustaoEletricosChineses2026;
