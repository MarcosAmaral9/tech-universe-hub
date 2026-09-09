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
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import {
  Clock, User, Calendar, LineChart, BookOpen, HelpCircle,
  Coins, History, Users, Globe, ArrowLeftRight, Shield, Zap,
} from "lucide-react";
import heroImg from "@/assets/cotacoes-criptomoedas-historia-fundadores.webp";

const SLUG = "cotacoes-criptomoedas-como-funcionam-historia-2026";
const TITLE = "Cotações de Criptomoedas: O Que São, Como Funcionam e a História das 5 Maiores";

const CINCO_MAIORES = [
  {
    emoji: "₿",
    nome: "Bitcoin (BTC)",
    fundador: "Satoshi Nakamoto (pseudônimo)",
    criacao: "Whitepaper em 31/10/2008 · rede no ar em 03/01/2009",
    historia:
      "O Bitcoin nasceu com o whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System', publicado por Satoshi Nakamoto em uma lista de criptografia em outubro de 2008, em plena crise financeira global. Em 3 de janeiro de 2009, Satoshi minerou o bloco gênese, embutindo nele a manchete do jornal The Times sobre o resgate dos bancos — um recado político sobre o porquê da moeda existir. Satoshi desapareceu do projeto em 2010/2011 e sua identidade nunca foi confirmada. A primeira cotação de referência surgiu em outubro de 2009, na exchange New Liberty Standard: 1 dólar comprava cerca de 1.309 BTC. Em maio de 2010 aconteceu a primeira compra de bem real: 10.000 BTC por duas pizzas — episódio celebrado até hoje como 'Bitcoin Pizza Day'.",
    marco: "Recorde acima de US$ 120 mil em 2025, após a aprovação dos ETFs de Bitcoin à vista nos EUA (janeiro/2024).",
  },
  {
    emoji: "◆",
    nome: "Ethereum (ETH)",
    fundador: "Vitalik Buterin, com Gavin Wood, Charles Hoskinson e outros cofundadores",
    criacao: "Whitepaper no fim de 2013 · rede lançada em 30/07/2015",
    historia:
      "Vitalik Buterin, programador russo-canadense então com 19 anos e cofundador da revista Bitcoin Magazine, publicou o whitepaper do Ethereum no final de 2013 propondo algo que o Bitcoin não fazia: uma blockchain programável, capaz de executar 'contratos inteligentes' (smart contracts). A rede entrou no ar em 30 de julho de 2015, após um crowdfunding que arrecadou cerca de US$ 18 milhões em 2014. O projeto teve oito cofundadores reconhecidos, entre eles Gavin Wood (que criou a linguagem Solidity e depois fundou a Polkadot) e Charles Hoskinson (que sairia para criar a Cardano). Em 15 de setembro de 2022, no evento chamado 'The Merge', o Ethereum trocou a mineração (proof of work) pelo proof of stake, cortando seu consumo de energia em mais de 99%.",
    marco: "Maior plataforma de aplicações descentralizadas do mundo: DeFi, NFTs e stablecoins rodam majoritariamente nela.",
  },
  {
    emoji: "✕",
    nome: "XRP (XRP Ledger)",
    fundador: "David Schwartz, Jed McCaleb e Arthur Britto; empresa Ripple (Chris Larsen)",
    criacao: "Ledger lançado em junho de 2012",
    historia:
      "O XRP Ledger começou a ser desenvolvido em 2011 pelos engenheiros David Schwartz, Jed McCaleb e Arthur Britto, buscando uma alternativa ao Bitcoin que não dependesse de mineração. O ledger entrou no ar em junho de 2012 com 100 bilhões de XRP já criados, e os fundadores fundaram a empresa que viria a se chamar Ripple, liderada por Chris Larsen, para construir soluções de pagamentos internacionais sobre a rede. A proposta sempre foi institucional: liquidação de transferências entre bancos em segundos, a custo de fração de centavo. Em dezembro de 2020, a SEC (regulador americano) processou a Ripple alegando venda de valores mobiliários não registrados; em julho de 2023, a Justiça dos EUA decidiu que vendas de XRP em exchanges a investidores comuns não configuravam valores mobiliários — decisão histórica para todo o setor, com o caso sendo encerrado em 2025.",
    marco: "Um dos casos regulatórios mais importantes da história cripto, encerrado com a Ripple em 2025.",
  },
  {
    emoji: "◎",
    nome: "Solana (SOL)",
    fundador: "Anatoly Yakovenko",
    criacao: "Whitepaper em novembro de 2017 · mainnet em março de 2020",
    historia:
      "Anatoly Yakovenko, engenheiro ucraniano-americano com passagens pela Qualcomm e Dropbox, publicou em novembro de 2017 o whitepaper descrevendo o 'Proof of History' — uma técnica de relógio criptográfico que permite ordenar transações sem que os validadores precisem conversar entre si, destravando altíssima velocidade. Ele fundou a Solana Labs em 2018 com ex-colegas da Qualcomm, e a rede principal foi lançada em março de 2020. A Solana ficou conhecida por processar dezenas de milhares de transações por segundo com taxas de centavos, tornando-se a principal blockchain para memecoins, negociação de alta frequência e aplicativos de consumo. Enfrentou críticas por quedas de rede em 2021-2022 e pelo colapso da exchange FTX (grande apoiadora do ecossistema) em novembro de 2022, do qual se recuperou fortemente nos anos seguintes.",
    marco: "Referência em velocidade e baixo custo; centro do ecossistema de aplicativos cripto de varejo.",
  },
  {
    emoji: "₳",
    nome: "Cardano (ADA)",
    fundador: "Charles Hoskinson",
    criacao: "Projeto iniciado em 2015 · rede lançada em 29/09/2017",
    historia:
      "Charles Hoskinson, matemático americano e cofundador do Ethereum, deixou o projeto após divergências sobre o modelo de negócio e fundou a IOHK (hoje Input Output Global) em 2015 com Jeremy Wood para construir uma blockchain 'baseada em ciência revisada por pares'. A Cardano foi lançada em 29 de setembro de 2017, com o token ADA — nome em homenagem a Ada Lovelace, matemática do século XIX considerada a primeira programadora da história. O projeto se desenvolveu em fases nomeadas em homenagem a figuras históricas (Byron, Shelley, Goguen, Basho, Voltaire): a era Shelley (2020) trouxe a descentralização da validação, e a era Goguen (2021) ativou os contratos inteligentes. A governança comunitária foi entregue aos detentores de ADA na era Voltaire, em 2024-2025. É a blockchain com maior volume de pesquisa acadêmica formal por trás do protocolo.",
    marco: "Única grande blockchain construída sobre protocolos com verificação acadêmica formal e revisão por pares.",
  },
];

const LINHA_DO_TEMPO = [
  { ano: "2008", evento: "Satoshi Nakamoto publica o whitepaper do Bitcoin (31 de outubro)" },
  { ano: "2009", evento: "Rede Bitcoin entra no ar (3 de janeiro); primeira cotação de referência: US$ 1 ≈ 1.309 BTC (outubro)" },
  { ano: "2010", evento: "Primeira compra real: 10.000 BTC por duas pizzas (22 de maio); nasce a Mt. Gox, primeira grande exchange" },
  { ano: "2012", evento: "Lançamento do XRP Ledger, com foco em pagamentos entre instituições" },
  { ano: "2013", evento: "Vitalik Buterin publica o whitepaper do Ethereum; BTC supera US$ 1.000 pela primeira vez" },
  { ano: "2015", evento: "Ethereum entra no ar (30 de julho); Charles Hoskinson inicia o desenvolvimento da Cardano" },
  { ano: "2017", evento: "Boom das ICOs; Cardano lançada (setembro); whitepaper da Solana (novembro); BTC bate quase US$ 20 mil" },
  { ano: "2020", evento: "Mainnet da Solana (março); SEC processa a Ripple (dezembro)" },
  { ano: "2022", evento: "Ethereum migra para proof of stake no 'The Merge' (setembro); colapso da FTX abala o mercado" },
  { ano: "2024", evento: "SEC aprova ETFs de Bitcoin à vista (janeiro) e depois de Ethereum; halving do BTC em abril" },
  { ano: "2025", evento: "Bitcoin supera US$ 120 mil; caso SEC x Ripple é encerrado; ETF de Solana aprovado nos EUA" },
];

const CotacoesCriptoHistoria2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Cripto · Educação Financeira · História
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Cotações de Criptomoedas: o que são, como funcionam e a história das 5 maiores
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Entenda de onde vem o preço de uma criptomoeda, como as <strong>cotações de criptomoedas</strong> são formadas 24 horas por dia, e conheça a história, os fundadores e as datas de criação de Bitcoin, Ethereum, XRP, Solana e Cardano.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 09 Set 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Moedas de Bitcoin, Ethereum, XRP, Solana e Cardano sobre gráfico de cotações em alta"
          className="w-full aspect-video object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Todo mundo já viu aquele número piscando em algum lugar: "Bitcoin hoje: R$ 600 mil", "Ethereum sobe 4%". Mas pouca gente para para pensar no que esse número realmente é. Diferente do dólar, que tem cotação oficial calculada pelo Banco Central, ou de uma ação, que tem um preço de fechamento definido por uma bolsa única, o preço de uma criptomoeda não é definido por ninguém — ele emerge de milhares de negociações acontecendo ao mesmo tempo no mundo inteiro, sem feriado, sem fim de semana e sem botão de pausa. Neste guia, você vai entender o que é a cotação de uma cripto, como esse preço nasce, como tudo começou e a história das cinco maiores criptomoedas do mundo, com seus fundadores e datas de criação.
        </p>

        <AdLeaderboard />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><LineChart className="h-6 w-6" /> O que é a cotação de uma criptomoeda?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A cotação de uma criptomoeda é simplesmente o <strong>preço da última negociação</strong> feita com ela em uma exchange (corretora cripto) — ou uma média dos preços praticados nas principais exchanges do mundo. Quando você vê "BTC/USDT a US$ 115.000", aquilo significa que, naquele instante, compradores e vendedores estavam fechando negócios em torno desse valor.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O mecanismo é o mesmo de qualquer mercado livre: <strong>oferta e demanda</strong>. Cada exchange mantém um "livro de ofertas" (order book) com ordens de compra (quanto cada comprador aceita pagar) e ordens de venda (quanto cada vendedor aceita receber). Quando uma ordem de compra encontra uma de venda no mesmo preço, o negócio acontece — e esse preço vira a nova cotação daquele momento.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Por isso a mesma criptomoeda pode ter preços ligeiramente diferentes em corretoras diferentes no mesmo segundo. Sites de cotação, como os agregadores de mercado, calculam uma média ponderada pelo volume negociado em cada exchange para apresentar um "preço global". São esses dados que alimentam painéis como o nosso <a href="/cotacoes" className="text-invest hover:underline">monitor de cotações</a>, que mostra preços de cripto, moedas, metais e ações atualizados continuamente.
        </p>
        <div className="not-prose bg-card border border-invest/30 rounded-xl p-5 my-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-invest">📌 Três diferenças fundamentais para a bolsa de valores:</strong> o mercado cripto funciona <strong>24 horas por dia, 7 dias por semana</strong> (não existe "fechamento do pregão"); não há uma bolsa central — o preço é uma média entre dezenas de corretoras; e não existem "circuit breakers" automáticos que suspendem as negociações em quedas bruscas, como acontece na B3 e em Wall Street.
          </p>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><History className="h-6 w-6" /> Como surgiram as cotações de cripto</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          No começo, o Bitcoin não valia nada — literalmente. Minerado por hobby entre entusiastas de criptografia, ele só ganhou um preço de referência em <strong>outubro de 2009</strong>, quando a exchange New Liberty Standard publicou a primeira cotação conhecida: cerca de <strong>1.309 BTC por dólar</strong>, valor calculado com base no custo da eletricidade gasta para minerar. A primeira negociação de um bem físico veio em 22 de maio de 2010, quando o programador Laszlo Hanyecz pagou 10.000 BTC por duas pizzas — moedas que, no pico histórico de 2025, valeriam mais de US$ 1 bilhão.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Com o nascimento de exchanges como a Mt. Gox (2010), que chegou a concentrar mais de 70% das negociações de Bitcoin do mundo antes de entrar em colapso em 2014, a cotação passou a ser formada por negociação real. A partir daí, o mercado viveu ciclos cada vez maiores: o rali de 2013 (BTC a US$ 1.000), a bolha das ICOs de 2017, o inverno de 2018, o boom institucional de 2020-2021 e, finalmente, a aprovação dos ETFs de Bitcoin à vista nos EUA em janeiro de 2024 — marco que colocou fundos de pensão e gestoras gigantes como BlackRock e Fidelity comprando cripto e transformou a cotação em manchete de jornal econômico no mundo inteiro.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Ano</th>
                <th className="text-left py-3 px-4">Marco histórico</th>
              </tr>
            </thead>
            <tbody>
              {LINHA_DO_TEMPO.map((t) => (
                <tr key={t.ano} className="border-t border-border">
                  <td className="py-2.5 px-4 font-mono font-bold text-invest text-xs whitespace-nowrap">{t.ano}</td>
                  <td className="py-2.5 px-4 text-muted-foreground text-xs md:text-sm">{t.evento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><Coins className="h-6 w-6" /> As 5 criptomoedas mais famosas: fundadores e histórias</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Existem hoje milhões de tokens listados em plataformas de rastreamento, mas cinco nomes concentram a maior parte da história, do valor de mercado e da atenção do público (fora as stablecoins, que são lastreadas em dólar e não têm "história de preço" própria). Conheça cada uma:
        </p>
        <div className="not-prose space-y-5 my-6">
          {CINCO_MAIORES.map((c) => (
            <div key={c.nome} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-3xl">{c.emoji}</span>
                <h3 className="font-display font-bold text-lg">{c.nome}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-invest uppercase tracking-wide mb-1 flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Fundador(es)</p>
                  <p className="text-xs text-muted-foreground">{c.fundador}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-invest uppercase tracking-wide mb-1 flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Data de criação</p>
                  <p className="text-xs text-muted-foreground">{c.criacao}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.historia}</p>
              <p className="text-xs mt-3 p-3 rounded-lg bg-invest/5 border-l-4 border-invest/50 text-foreground/80">
                <strong>Por que importa:</strong> {c.marco}
              </p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><ArrowLeftRight className="h-6 w-6" /> O que faz a cotação subir ou cair?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Como não existe lucro de empresa ou dividendo por trás da maioria das criptomoedas, o preço é formado por uma mistura de fatores próprios desse mercado:
        </p>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            { icon: <Zap className="h-6 w-6 text-invest" />, t: "Oferta programada", d: "O Bitcoin tem limite de 21 milhões de moedas e o 'halving' corta a emissão pela metade a cada ~4 anos. Escassez programada pressiona o preço quando a demanda cresce." },
            { icon: <Globe className="h-6 w-6 text-invest" />, t: "Adoção e uso real", d: "Quantas pessoas, empresas e governos usam a rede. Aprovação de ETFs, pagamentos internacionais via XRP, aplicativos na Solana — uso real sustenta demanda." },
            { icon: <LineChart className="h-6 w-6 text-invest" />, t: "Cenário macroeconômico", d: "Juros altos nos EUA tendem a drenar dinheiro de ativos de risco, cripto inclusa. Juros em queda e inflação alta em moedas locais empurram investidores para cripto." },
            { icon: <Shield className="h-6 w-6 text-invest" />, t: "Regulação e segurança", d: "Decisões como o fim do caso SEC x Ripple (2025) valorizam; hacks de exchanges e proibições governamentais derrubam cotações em minutos." },
          ].map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="mb-2">{f.icon}</div>
              <h3 className="font-bold text-sm mb-1">{f.t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Soma-se a isso a <strong>volatilidade estrutural</strong>: por ser um mercado jovem, com liquidez menor que a da bolsa e negociação ininterrupta, movimentos de 10% em um dia são comuns — tanto para cima quanto para baixo. Grandes detentores (as chamadas "baleias") conseguem mover o preço com ordens volumosas, e a euforia ou o pânico nas redes sociais amplificam cada movimento.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><Globe className="h-6 w-6" /> Como o preço viaja da exchange até a sua tela</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Quando você abre um painel de cotações, por trás existe uma cadeia técnica interessante. As exchanges disponibilizam APIs públicas que transmitem cada negócio fechado em tempo real (tecnologia chamada WebSocket, que mantém um canal aberto de dados). Os agregadores de mercado coletam esses fluxos de dezenas de corretoras, descartam fontes suspeitas ou com volume artificial e calculam a média ponderada que vira o "preço oficial" exibido em sites e aplicativos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Para o preço em reais, há um passo extra: pega-se a cotação global em dólar (geralmente o par contra stablecoins como USDT, que espelham o dólar) e multiplica-se pela taxa de câmbio USD/BRL do momento. É por isso que, em dias de forte oscilação do câmbio, o Bitcoin pode parecer "mais caro" no Brasil mesmo sem ter se movido no mercado internacional — e por que exchanges brasileiras às vezes mostram um leve prêmio ou desconto em relação à conversão pura, dependendo da demanda local.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Outro conceito importante é o de <strong>market cap</strong> (capitalização de mercado): o preço da moeda multiplicado pela quantidade em circulação. É ele — e não o preço unitário — que mede o tamanho real de uma criptomoeda. Uma moeda que custa R$ 2 pode ter market cap maior que uma que custa R$ 500, simplesmente porque existem muito mais unidades dela. Por isso comparar projetos pelo "preço da moeda" é um erro clássico de iniciante: o Bitcoin vale centenas de milhares de reais por unidade justamente porque sua oferta é minúscula (máximo de 21 milhões), enquanto o XRP tem 100 bilhões de unidades criadas.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><BookOpen className="h-6 w-6" /> Como acompanhar as cotações com inteligência</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Acompanhar o preço em si é fácil — difícil é não tomar decisão ruim por causa dele. Algumas práticas que separam o investidor consciente do torcedor emocionado:
        </p>
        <ul className="not-prose space-y-2 my-4 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-invest font-bold">1.</span> <span><strong>Olhe tendências, não minutos.</strong> Gráficos de 1 minuto medem ruído. Para decisões de investimento, compare semanas e meses — e use o histórico de preços para entender em que ponto do ciclo você está.</span></li>
          <li className="flex gap-2"><span className="text-invest font-bold">2.</span> <span><strong>Compare mais de uma fonte.</strong> Como cada exchange tem seu preço, confira agregadores que fazem a média ponderada global antes de concluir que "o mercado subiu".</span></li>
          <li className="flex gap-2"><span className="text-invest font-bold">3.</span> <span><strong>Cuidado com a conversão para reais.</strong> A cotação em BRL mistura o preço da cripto em dólar com o câmbio USD/BRL — às vezes o Bitcoin está estável em dólar, mas subindo em reais porque o dólar subiu.</span></li>
          <li className="flex gap-2"><span className="text-invest font-bold">4.</span> <span><strong>Considere DCA.</strong> Aportes fixos e periódicos (Dollar Cost Averaging) eliminam a tentação de tentar adivinhar o fundo ou o topo, estratégia que estatisticamente derrota a maioria dos que tentam.</span></li>
          <li className="flex gap-2"><span className="text-invest font-bold">5.</span> <span><strong>Declare no Imposto de Renda.</strong> No Brasil, criptoativos acima de R$ 5 mil precisam constar na declaração, e vendas acima de R$ 35 mil/mês com lucro pagam IR de 15% a 22,5%.</span></li>
        </ul>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><HelpCircle className="h-6 w-6" /> Perguntas frequentes</span>
        </h2>
        <div className="not-prose space-y-3 my-4">
          {[
            { q: "Quem define o preço de uma criptomoeda?", a: "Ninguém — e todos. O preço é formado livremente pelas negociações entre compradores e vendedores em dezenas de exchanges ao redor do mundo. Não existe cotação oficial nem órgão que defina o valor." },
            { q: "Por que o preço varia entre corretoras?", a: "Cada exchange tem seu próprio livro de ofertas. Diferenças de liquidez e demanda local criam pequenas variações, que operadores de arbitragem tratam de diminuir comprando onde está barato e vendendo onde está caro." },
            { q: "Quem criou o Bitcoin e quando?", a: "Satoshi Nakamoto, pseudônimo de identidade nunca confirmada, publicou o whitepaper em 31 de outubro de 2008 e colocou a rede no ar em 3 de janeiro de 2009." },
            { q: "Qual foi a primeira criptomoeda depois do Bitcoin?", a: "Entre as pioneiras estão Namecoin e Litecoin (2011). Do grupo das cinco maiores de hoje, a mais antiga depois do BTC é o XRP, cujo ledger foi lançado em junho de 2012." },
            { q: "A cotação de cripto para de atualizar em algum horário?", a: "Não. O mercado cripto funciona 24 horas por dia, 7 dias por semana, incluindo feriados — uma das maiores diferenças em relação à bolsa de valores." },
          ].map((f, i) => (
            <details key={i} className="bg-card border border-border rounded-xl p-4 group">
              <summary className="font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                {f.q}
                <span className="text-invest group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <EditorialTake category="invest">
        <p>
          Escrevi este guia porque percebo que muita gente acompanha a cotação de cripto como quem assiste a um jogo sem saber as regras: vibra com o gol, mas não entende o que aconteceu. Saber que o preço é apenas a última negociação feita entre milhares de desconhecidos — e não um número "oficial" — muda completamente a forma de interpretar cada subida e queda.
        </p>
        <p>
          Minha recomendação prática: trate cripto como a parcela de maior risco da carteira (no máximo 1% a 5% para a maioria das pessoas), use ferramentas como o nosso painel de cotações para acompanhar tendências de médio prazo em vez do minuto a minuto, e estude a história de cada projeto antes de aportar — Bitcoin, Ethereum, XRP, Solana e Cardano têm propostas radicalmente diferentes entre si, e o preço de cada uma conta uma história diferente.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          { title: "Bitcoin: A Peer-to-Peer Electronic Cash System (whitepaper original)", url: "https://bitcoin.org/bitcoin.pdf", publisher: "Satoshi Nakamoto / bitcoin.org", accessedAt: "Setembro 2026" },
          { title: "Ethereum Whitepaper", url: "https://ethereum.org/en/whitepaper/", publisher: "Ethereum Foundation", accessedAt: "Setembro 2026" },
          { title: "XRP Ledger — History & Documentation", url: "https://xrpl.org/docs/concepts/introduction/what-is-the-xrp-ledger", publisher: "XRPL Foundation", accessedAt: "Setembro 2026" },
          { title: "Solana: A new architecture for a high performance blockchain (whitepaper)", url: "https://solana.com/solana-whitepaper.pdf", publisher: "Solana Labs / Anatoly Yakovenko", accessedAt: "Setembro 2026" },
          { title: "Why Cardano — documentação e história do projeto", url: "https://docs.cardano.org/about-cardano/new-to-cardano/why-cardano/", publisher: "Input Output Global (IOG)", accessedAt: "Setembro 2026" },
          { title: "SEC v. Ripple Labs — desfecho do caso", url: "https://www.sec.gov/newsroom/press-releases/2025-70", publisher: "U.S. Securities and Exchange Commission", accessedAt: "Setembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default CotacoesCriptoHistoria2026;
