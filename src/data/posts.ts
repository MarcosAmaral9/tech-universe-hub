import { BlogPost, Category } from "@/types/blog";

import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.webp";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.webp";
import systemManhwaImg from "@/assets/system-manhwa-hero.webp";
import aiAnimeDubbingImg from "@/assets/ai-anime-dubbing.jpg";
import aiRemasteringImg from "@/assets/ai-remastering.webp";
import techInvesting2026Img from "@/assets/tech-investing-2026.webp";
import vikingsRagnarImg from "@/assets/vikings-ragnar.webp";
import hellLetLooseImg from "@/assets/hell-let-loose.jpg";
import avatarPandoraImg from "@/assets/avatar-pandora.webp";
import avatarWaterImg from "@/assets/avatar-water-swimming.webp";
import avatarFireImg from "@/assets/avatar-fire.webp";
import avatarGameImg from "@/assets/avatar-game-female.webp";
import acValhallaImg from "@/assets/ac-valhalla.webp";
import acShadowsImg from "@/assets/ac-shadows.webp";
import acOdysseyImg from "@/assets/ac-odyssey.webp";
import acBlackFlagImg from "@/assets/ac-black-flag.webp";
import acOriginsImg from "@/assets/ac-origins.webp";
import acMirageImg from "@/assets/ac-mirage.webp";
import ac3Img from "@/assets/ac-3.webp";
import acSyndicateImg from "@/assets/ac-syndicate.webp";
import acUnityImg from "@/assets/ac-unity.webp";
import acRogueImg from "@/assets/ac-rogue.webp";
import acPortalImg from "@/assets/assassins-creed-portal.webp";
import tesouroDiretoImg from "@/assets/tesouro-direto-2026.webp";
import rendaPassivaImg from "@/assets/renda-passiva-2026.webp";
import carteiraInvestimentosImg from "@/assets/carteira-investimentos-2026.webp";
import cryptoInvest2026Img from "@/assets/crypto-invest-2026.webp";
import irpf2026Img from "@/assets/irpf-2026.webp";
import iaFinancas2026Img from "@/assets/ia-financas-2026.webp";
import metodo3BaldesImg from "@/assets/metodo-3-baldes.webp";
import fiis2026Img from "@/assets/fiis-2026.webp";
import sairDividas2026Img from "@/assets/sair-dividas-2026.webp";
import planejamentoFinanceiro2026Img from "@/assets/planejamento-financeiro-2026.webp";
import calculadorasFinanceirasImg from "@/assets/calculadoras-financeiras.webp";
// New IA articles images
import chatgptVsGeminiImg from "@/assets/chatgpt-vs-gemini-vs-claude-2026.webp";
import iaGanharDinheiroImg from "@/assets/ia-ganhar-dinheiro-2026.webp";
import iaTrabalhoImg from "@/assets/ia-trabalho-2026.webp";
import appsIaProdutividadeImg from "@/assets/apps-ia-produtividade-2026.webp";
import iaGenerativaIniciantesImg from "@/assets/ia-generativa-iniciantes-2026.webp";
import deepfakesIaImg from "@/assets/deepfakes-ia-2026.webp";
import iaEducacaoImg from "@/assets/ia-educacao-2026.webp";
import agentesIaImg from "@/assets/agentes-ia-2026.webp";
import iaSaudeImg from "@/assets/ia-saude-2026.webp";
import regulamentacaoIaImg from "@/assets/regulamentacao-ia-2026.webp";
// New Otaku articles images
import animesAguardadosImg from "@/assets/animes-aguardados-2026.webp";
import guiaCosplayImg from "@/assets/guia-cosplay-2026.webp";
import mangaVsAnimeImg from "@/assets/manga-vs-anime-2026.webp";
import culturaOtakuBrasilImg from "@/assets/cultura-otaku-brasil-2026.webp";
import jogosAnimeImg from "@/assets/jogos-anime-2026.webp";
import aprenderJaponesImg from "@/assets/aprender-japones-anime-2026.webp";
import isekaiImg from "@/assets/isekai-2026.webp";
import merchandisingOtakuImg from "@/assets/merchandising-otaku-2026.webp";
import melhoresMangasImg from "@/assets/melhores-mangas-2026.webp";
import saudeMentalOtakuImg from "@/assets/saude-mental-otaku-2026.webp";
import iaCriatividadeImg from "@/assets/ia-criatividade-2026.webp";
import iaPrivacidadeImg from "@/assets/ia-privacidade-dados-2026.webp";
import etfs2026Img from "@/assets/etfs-2026.webp";
import economiaDomesticaImg from "@/assets/economia-domestica-2026.webp";
import crimsonDesertGuiaImg from "@/assets/crimson-desert-guia.webp";
import crimsonDesertCombateImg from "@/assets/crimson-desert-combate.webp";

export const blogPosts: BlogPost[] = [
  // IA Posts
  {
    id: "4",
    slug: "ia-transformando-dublagem-animes",
    title: "IA está Transformando a Dublagem de Animes em 2026",
    excerpt: "Descubra como a clonagem de voz e tradução em tempo real estão revolucionando o mercado de animes e quebrando barreiras de idioma ao redor do mundo.",
    content: "",
    category: "ia",
    subtopic: "dublagem",
    image: aiAnimeDubbingImg,
    author: "VICIO<CODE>",
    date: "2026-02-05",
    readTime: "10 min"
  },
  {
    id: "20",
    slug: "ia-remasterizacao-jogos-classicos",
    title: "IA Remaster: Como a Tech Está Salvando Jogos Clássicos",
    excerpt: "Entenda como a IA de Upscaling e o Deep Learning estão restaurando e salvando a história dos games, dando nova vida a títulos que definiram gerações.",
    content: "",
    category: "ia",
    subtopic: "games",
    image: aiRemasteringImg,
    author: "VICIO<CODE>",
    date: "2026-02-01",
    readTime: "6 min"
  },
  {
    id: "35",
    slug: "chatgpt-vs-gemini-vs-claude-2026",
    title: "ChatGPT vs Gemini vs Claude 2026: Qual Vale Assinar?",
    excerpt: "Comparamos ChatGPT, Gemini e Claude em 20 cenários do dia a dia. Descubra qual IA realmente entrega o que promete em 2026.",
    content: "",
    category: "ia",
    subtopic: "comparativos",
    image: chatgptVsGeminiImg,
    author: "VICIO<CODE>",
    date: "2026-02-11",
    readTime: "12 min"
  },
  {
    id: "36",
    slug: "como-usar-ia-ganhar-dinheiro-2026",
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas",
    excerpt: "A IA não substitui o esforço, ela multiplica. Conheça 15 formas reais de monetizar com inteligência artificial em 2026.",
    content: "",
    category: "ia",
    subtopic: "renda",
    image: iaGanharDinheiroImg,
    author: "VICIO<CODE>",
    date: "2026-02-12",
    readTime: "15 min"
  },
  {
    id: "37",
    slug: "ia-no-trabalho-2026-profissoes",
    title: "IA no Trabalho 2026: Sua Profissão Vai Desaparecer?",
    excerpt: "Analisamos 30 profissões e dizemos claramente: risco alto, médio ou oportunidade. Descubra onde você se encaixa.",
    content: "",
    category: "ia",
    subtopic: "trabalho",
    image: iaTrabalhoImg,
    author: "VICIO<CODE>",
    date: "2026-02-13",
    readTime: "13 min"
  },
  {
    id: "38",
    slug: "melhores-apps-ia-produtividade-2026",
    title: "10 Melhores Apps de IA para Produtividade em 2026",
    excerpt: "Selecionamos os 10 aplicativos de inteligência artificial mais úteis para aumentar sua produtividade no trabalho, nos estudos e na vida pessoal em 2026.",
    content: "",
    category: "ia",
    subtopic: "apps",
    image: appsIaProdutividadeImg,
    author: "VICIO<CODE>",
    date: "2026-02-14",
    readTime: "11 min"
  },
  {
    id: "39",
    slug: "ia-generativa-iniciantes-2026-guia",
    title: "IA Generativa para Iniciantes 2026: Guia Completo",
    excerpt: "Sem jargão técnico, sem promessas irrealistas. Um caminho claro do zero ao uso avançado de IA generativa.",
    content: "",
    category: "ia",
    subtopic: "tutorial",
    image: iaGenerativaIniciantesImg,
    author: "VICIO<CODE>",
    date: "2026-02-26",
    readTime: "16 min"
  },
  {
    id: "40",
    slug: "deepfakes-ia-2026-como-identificar",
    title: "Deepfakes e IA 2026: Como Identificar Conteúdo Falso",
    excerpt: "Deepfakes deixaram de ser ficção científica. Aprenda a identificar conteúdo falso e proteger sua imagem online.",
    content: "",
    category: "ia",
    subtopic: "seguranca",
    image: deepfakesIaImg,
    author: "VICIO<CODE>",
    date: "2026-02-27",
    readTime: "12 min"
  },
  {
    id: "41",
    slug: "ia-educacao-2026-estudar-inteligente",
    title: "IA na Educação 2026: Como Estudar de Forma Inteligente",
    excerpt: "Explore o lado produtivo da IA na educação: como aprender mais rápido e reter melhor sem terceirizar o pensamento.",
    content: "",
    category: "ia",
    subtopic: "educacao",
    image: iaEducacaoImg,
    author: "VICIO<CODE>",
    date: "2026-02-28",
    readTime: "13 min"
  },
  {
    id: "42",
    slug: "agentes-ia-2026-como-funcionam",
    title: "Agentes de IA 2026: O Que São e Como Funcionam",
    excerpt: "Da era do chatbot à era dos agentes autônomos. Entenda a diferença e como isso muda absolutamente tudo.",
    content: "",
    category: "ia",
    subtopic: "agentes",
    image: agentesIaImg,
    author: "VICIO<CODE>",
    date: "2026-03-01",
    readTime: "14 min"
  },
  {
    id: "43",
    slug: "ia-saude-2026-diagnosticos-futuro",
    title: "IA para Saúde 2026: Diagnósticos e o Futuro da Medicina",
    excerpt: "A IA está transformando a medicina em velocidade que poucos percebem. Dos diagnósticos por imagem à saúde mental.",
    content: "",
    category: "ia",
    subtopic: "saude",
    image: iaSaudeImg,
    author: "VICIO<CODE>",
    date: "2026-03-02",
    readTime: "14 min"
  },
  {
    id: "44",
    slug: "regulamentacao-ia-brasil-mundo-2026",
    title: "Regulamentação de IA no Brasil e no Mundo em 2026",
    excerpt: "O AI Act europeu, o marco brasileiro de IA e as novas regras globais. O que muda na prática para você e para as empresas.",
    content: "",
    category: "ia",
    subtopic: "regulacao",
    image: regulamentacaoIaImg,
    author: "VICIO<CODE>",
    date: "2026-03-03",
    readTime: "12 min"
  },
  // INVEST Posts - Finance Series
  {
    id: "24",
    slug: "tesouro-direto-2026-guia-completo",
    title: "Tesouro Direto 2026: Ainda Vale a Pena? Guia Completo",
    excerpt: "Descubra se o Tesouro Direto ainda é o melhor investimento para iniciantes em 2026. Comparamos taxas, rendimentos e estratégias.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: tesouroDiretoImg,
    author: "VICIO<CODE>",
    date: "2026-02-15",
    updatedAt: "2026-03-15",
    readTime: "12 min",
    faq: [
      { q: "É seguro vender o Tesouro Direto antes do vencimento?", a: "Sim, mas há risco de perda no Prefixado e IPCA+ por conta da marcação a mercado. O Tesouro Selic é o único que não sofre esse efeito e pode ser resgatado a qualquer momento sem perdas." },
      { q: "Posso usar o Tesouro Direto como reserva de emergência?", a: "Apenas o Tesouro Selic. Nunca coloque reserva de emergência em Prefixado ou IPCA+, pois você pode perder dinheiro se precisar resgatar antes do vencimento." },
      { q: "Qual é a taxa de custódia do Tesouro Direto?", a: "A B3 cobra 0,20% ao ano sobre o valor investido. É cobrada semestralmente em janeiro e julho. Para o Tesouro Selic, investidores com menos de R$ 10.000 são isentos." },
      { q: "Os juros semestrais do IPCA+ são automáticos?", a: "Os juros são pagos automaticamente na sua conta, mas você precisa reinvesti-los manualmente se quiser manter os juros compostos. Caso contrário, o dinheiro fica parado na conta sem render." },
      { q: "Qual a diferença entre Tesouro Selic, IPCA+ e Prefixado?", a: "Tesouro Selic acompanha a taxa básica de juros (ideal para reserva de emergência). IPCA+ garante rentabilidade acima da inflação (ideal para longo prazo). Prefixado tem taxa travada na compra (bom quando a Selic está alta e vai cair)." },
    ],
  },
  {
    id: "25",
    slug: "renda-passiva-2026-formas-comprovadas",
    title: "Renda Passiva Real 2026: 7 Formas Comprovadas",
    excerpt: "Renda passiva não é mito. Conheça 7 estratégias validadas para 2026 que geram dinheiro enquanto você dorme.",
    content: "",
    category: "invest",
    subtopic: "renda-passiva",
    image: rendaPassivaImg,
    author: "VICIO<CODE>",
    date: "2026-02-16",
    readTime: "15 min"
  },
  {
    id: "26",
    slug: "carteira-investimentos-iniciantes-2026",
    title: "Carteira de Investimentos para Iniciantes 2026",
    excerpt: "Não sabe por onde começar a investir? Este guia passo a passo mostra como montar uma carteira do zero em 2026.",
    content: "",
    category: "invest",
    subtopic: "carteira",
    image: carteiraInvestimentosImg,
    author: "VICIO<CODE>",
    date: "2026-02-17",
    readTime: "13 min"
  },
  // INVEST Posts - Crypto
  {
    id: "27",
    slug: "bitcoin-criptomoedas-2026-investir",
    title: "Bitcoin e Criptomoedas 2026: Ainda Dá Para Lucrar?",
    excerpt: "O mercado cripto mudou muito. Entenda o cenário das criptomoedas em 2026, quais ainda têm potencial e como investir sem perder o que você tem.",
    content: "",
    category: "invest",
    subtopic: "cripto",
    image: cryptoInvest2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-18",
    updatedAt: "2026-03-15",
    readTime: "14 min",
    faq: [
      { q: "O que é DeFi (Finanças Descentralizadas)?", a: "Ecossistema de serviços financeiros construídos sobre blockchain, sem intermediários como bancos. Inclui empréstimos, exchanges e seguros descentralizados." },
      { q: "O que é NFT (Token Não-Fungível)?", a: "Um ativo digital único registrado em blockchain. Usado para arte, colecionáveis, ingressos e propriedade intelectual." },
      { q: "O que é Halving do Bitcoin?", a: "Evento que reduz pela metade a recompensa dos mineradores de Bitcoin a cada aproximadamente 4 anos. Historicamente associado a ciclos de alta no preço." },
      { q: "O que é Seed Phrase?", a: "Conjunto de 12 a 24 palavras que serve como backup da sua carteira de criptomoedas. Nunca compartilhe com ninguém — quem tem a seed phrase controla os fundos." },
      { q: "O que é Staking de criptomoedas?", a: "Processo de travar suas criptomoedas na rede para validar transações e receber recompensas, similar a juros. Disponível em redes como Ethereum, Solana e Cardano." },
      { q: "O que é Cold Wallet?", a: "Carteira offline (hardware) para armazenar criptomoedas com máxima segurança, desconectada da internet. Exemplos: Ledger e Trezor." },
      { q: "O que é ETF de Criptomoedas?", a: "Fundo negociado em bolsa que acompanha o preço de criptomoedas, permitindo investir sem precisar comprar ou custodiar os ativos diretamente." },
    ],
  },
  // INVEST Posts - IRPF
  {
    id: "28",
    slug: "irpf-2026-guia-declarar-pagar-menos",
    title: "IRPF 2026: Guia Para Declarar e Pagar Menos Imposto",
    excerpt: "Tudo que você precisa saber para declarar o Imposto de Renda 2026 corretamente, evitar a malha fina e usar deduções legais para pagar menos IR.",
    content: "",
    category: "invest",
    subtopic: "impostos",
    image: irpf2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-19",
    updatedAt: "2026-03-15",
    readTime: "16 min",
    faq: [
      { q: "Posso declarar despesas com saúde do meu dependente?", a: "Sim, desde que o dependente esteja incluído na sua declaração. As despesas médicas são totalmente dedutíveis, sem limite de valor." },
      { q: "Preciso declarar minha conta de criptomoedas?", a: "Sim. Mesmo que não tenha vendido, criptomoedas devem ser declaradas na ficha 'Bens e Direitos' pelo valor de aquisição." },
      { q: "O que acontece se atrasar a declaração?", a: "Multa mínima de R$ 165,74, podendo chegar a 20% do imposto devido. Além disso, seu CPF pode ficar irregular." },
      { q: "Gastos com cursinho e inglês são dedutíveis?", a: "Não. Apenas ensino fundamental, médio, técnico, graduação e pós-graduação são dedutíveis em educação." },
      { q: "Vendi ações com lucro abaixo de R$ 20.000/mês. Preciso pagar IR?", a: "Não. Vendas de ações (operações comuns) até R$ 20.000/mês são isentas. Mas day trade não tem essa isenção." },
      { q: "MEI precisa declarar como pessoa física?", a: "Sim, se você se enquadrar nos critérios de obrigatoriedade. O rendimento do MEI deve ser declarado." },
      { q: "Posso incluir meus pais como dependentes?", a: "Sim, desde que eles sejam economicamente dependentes de você e tenham rendimentos dentro do limite permitido." },
      { q: "FIIs pagam IR sobre dividendos?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física. Porém, o ganho de capital na venda das cotas é tributado em 20%." },
      { q: "Como declarar aluguel recebido?", a: "Aluguel recebido é rendimento tributável. Deve ser informado mês a mês e, se acima da faixa de isenção, gera carnê-leão." },
      { q: "Qual a diferença entre PGBL e VGBL no IR?", a: "PGBL permite deduzir até 12% da renda bruta no IR. VGBL não tem dedução, mas o IR incide apenas sobre os rendimentos no resgate." }
    ]
  },
  // INVEST + IA Posts - IA no Mercado Financeiro
  {
    id: "29",
    slug: "ia-mercado-financeiro-2026-investimentos",
    title: "IA no Mercado Financeiro 2026: Guia para Investidores",
    excerpt: "A IA já está gerenciando bilhões em investimentos. Descubra como a inteligência artificial está mudando as finanças em 2026.",
    content: "",
    category: "invest",
    secondaryCategory: "ia",
    subtopic: "ia-financas",
    image: iaFinancas2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-20",
    readTime: "12 min"
  },
  // INVEST Posts - Education & FIIs & Debt & Planning
  {
    id: "30",
    slug: "educacao-financeira-metodo-3-baldes",
    title: "Método 3 Baldes: Educação Financeira Para Iniciantes",
    excerpt: "Se você chega no fim do mês sem dinheiro, este artigo é para você. O Método dos 3 Baldes é simples e funciona para qualquer salário.",
    content: "",
    category: "invest",
    subtopic: "educacao-financeira",
    image: metodo3BaldesImg,
    author: "VICIO<CODE>",
    date: "2026-02-21",
    readTime: "11 min"
  },
  {
    id: "31",
    slug: "fiis-2026-melhores-fundos-imobiliarios",
    title: "FIIs 2026: Os Melhores Fundos Imobiliários para Invest.",
    excerpt: "Guia completo de FIIs para 2026. Saiba como escolher os melhores fundos imobiliários e construir uma carteira que paga dividendos mensais.",
    content: "",
    category: "invest",
    subtopic: "fiis",
    image: fiis2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-22",
    updatedAt: "2026-03-15",
    readTime: "14 min",
    faq: [
      { q: "Devo escolher FIIs só pelo Dividend Yield (DY)?", a: "Não. Um DY de 15% pode significar que a cota despencou, não que o fundo paga mais. Analise sempre o histórico de distribuições, qualidade dos imóveis e contratos antes de investir." },
      { q: "A qualidade dos imóveis dentro do FII importa?", a: "Sim, é um dos critérios mais importantes. Galpões logísticos de primeira linha têm vacância menor e contratos mais longos do que imóveis de terceira categoria." },
      { q: "Contratos típicos ou atípicos são melhores nos FIIs?", a: "Atípicos geralmente são mais seguros pois possuem multas pesadas em caso de rescisão antecipada, oferecendo previsibilidade maior de renda para o FII." },
      { q: "O que fazer quando a cota do FII cai bastante?", a: "Não venda por pânico. Se os fundamentos continuam bons (imóveis ocupados, contratos sólidos, gestão competente), a queda pode ser oportunidade de compra com yield ainda maior." },
      { q: "FIIs pagam Imposto de Renda sobre os dividendos?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física, desde que o fundo tenha mais de 50 cotistas e suas cotas sejam negociadas em bolsa. O ganho de capital na venda das cotas é tributado a 20%." },
    ],
  },
  {
    id: "32",
    slug: "sair-das-dividas-2026-plano-acao",
    title: "Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona",
    excerpt: "Endividado e sem ver saída? Este plano passo a passo foi criado para a realidade brasileira de 2026, com estratégias para quitar dívidas.",
    content: "",
    category: "invest",
    subtopic: "dividas",
    image: sairDividas2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-23",
    readTime: "13 min"
  },
  {
    id: "33",
    slug: "planejamento-financeiro-2026-metas",
    title: "Planejamento Financeiro 2026: Como Definir suas Metas",
    excerpt: "Aprenda o método científico para definir e alcançar objetivos financeiros em 2026. Chega de metas que não saem do papel.",
    content: "",
    category: "invest",
    subtopic: "planejamento",
    image: planejamentoFinanceiro2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-24",
    readTime: "11 min"
  },
  // INVEST Posts - Calculadoras
  {
    id: "34",
    slug: "calculadoras-financeiras-ativos",
    title: "Calculadoras Financeiras: Simule seus Investimentos",
    excerpt: "Use nossas calculadoras com cotações em tempo real para simular quanto custaria comprar diferentes ativos financeiros.",
    content: "",
    category: "invest",
    subtopic: "calculadoras",
    image: calculadorasFinanceirasImg,
    author: "VICIO<CODE>",
    date: "2026-02-25",
    readTime: "5 min"
  },
  // INVEST Posts
  {
    id: "5",
    slug: "investir-em-tecnologia-2026",
    title: "Investir em Tecnologia 2026: Como Montar sua Carteira",
    excerpt: "Descubra como investir em empresas de tecnologia em 2026, quais setores têm mais potencial de crescimento e como montar uma carteira tech diversificada.",
    content: "",
    category: "invest",
    subtopic: "semicondutores",
    image: techInvesting2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-06",
    readTime: "12 min"
  },
  // GEEK Posts - Vikings
  {
    id: "6",
    slug: "vikings-legado-ragnar-lothbrok",
    title: "Vikings: O Legado de Ragnar Lothbrok e Cultura Nórdica",
    excerpt: "Explore o fascinante legado de Ragnar Lothbrok, a cultura viking e como a série Vikings retratou com precisão os guerreiros nórdicos que moldaram a Europa.",
    content: "",
    category: "geek",
    subtopic: "vikings",
    image: vikingsRagnarImg,
    author: "VICIO<CODE>",
    date: "2026-02-07",
    readTime: "18 min"
  },
  // GEEK Posts - Hell Let Loose
  {
    id: "7",
    slug: "hell-let-loose-simulador-guerra",
    title: "Hell Let Loose: O Melhor Simulador de Guerra da Atual.",
    excerpt: "Este FPS tático de Segunda Guerra Mundial coloca 100 jogadores em um mapa imenso onde um único tiro pode ser fatal.",
    content: "",
    category: "geek",
    subtopic: "games",
    image: hellLetLooseImg,
    author: "VICIO<CODE>",
    date: "2026-02-03",
    readTime: "18 min"
  },
  // GEEK Posts - Avatar Series
  {
    id: "8",
    slug: "avatar-2009-filme-revolucionou-tecnologia",
    title: "Avatar (2009): O Filme que Revolucionou a Tecnologia",
    excerpt: "Relembre como James Cameron esperou mais de uma década para que a tecnologia de captura de movimento fosse capaz de criar Pandora.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarPandoraImg,
    author: "VICIO<CODE>",
    date: "2026-01-29",
    readTime: "12 min"
  },
  {
    id: "9",
    slug: "avatar-caminho-da-agua-fisica-fluidos",
    title: "Avatar 2: A Física dos Fluidos e a Revolução do CGI",
    excerpt: "Treze anos depois, a sequência focou na família de Jake Sully e na impressionante captura de performance subaquática.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarWaterImg,
    author: "VICIO<CODE>",
    date: "2026-01-26",
    readTime: "14 min"
  },
  {
    id: "10",
    slug: "avatar-3-fogo-cinzas-lado-sombrio-pandora",
    title: "Avatar 3: Fogo e Cinzas – O Lado Sombrio de Pandora",
    excerpt: "Prepare-se para conhecer o 'Povo das Cinzas', uma tribo Na'vi mais agressiva ligada ao fogo e vulcões.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarFireImg,
    author: "VICIO<CODE>",
    date: "2026-01-24",
    readTime: "10 min"
  },
  {
    id: "11",
    slug: "avatar-frontiers-pandora-ubisoft-review",
    title: "Avatar: Frontiers of Pandora – Vale a Pena Jogar?",
    excerpt: "Analise o jogo que coloca o jogador na pele de um Na'vi com uma das florestas mais bonitas já vistas em videogames.",
    content: "",
    category: "geek",
    subtopic: "avatar",
    image: avatarGameImg,
    author: "VICIO<CODE>",
    date: "2026-01-22",
    readTime: "18 min"
  },
  // GEEK Posts - Assassin's Creed
  {
    id: "12",
    slug: "ac-valhalla-jornada-epica-eivor",
    title: "AC Valhalla: A Jornada Épica de Eivor pelos Vikings",
    excerpt: "Se você é fã de Vikings e adora explorar mundos abertos massivos, Valhalla é o ápice da fórmula moderna da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acValhallaImg,
    author: "VICIO<CODE>",
    date: "2026-02-08",
    readTime: "18 min"
  },
  {
    id: "13",
    slug: "ac-shadows-japao-feudal",
    title: "AC Shadows: O Japão Feudal que os Fãs Esperavam",
    excerpt: "Assassin's Creed Shadows finalmente leva a franquia ao Japão Feudal. Conheça a história, mecânicas, personagens e por que esse é um dos jogos mais aguardados.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acShadowsImg,
    author: "VICIO<CODE>",
    date: "2026-02-09",
    readTime: "18 min"
  },
  {
    id: "14",
    slug: "ac-odyssey-odisseia-grecia",
    title: "AC Odyssey: Uma Odisseia Épica pela Grécia Antiga",
    excerpt: "Explore a Grécia Antiga em Assassin's Creed Odyssey — batalhas épicas, escolhas morais, o misterioso Culto de Kosmos e um dos maiores mapas da franquia.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acOdysseyImg,
    author: "VICIO<CODE>",
    date: "2026-02-04",
    readTime: "18 min"
  },
  {
    id: "15",
    slug: "ac-black-flag-melhor-jogo-piratas",
    title: "AC Black Flag: Por que Ainda É o Melhor Jogo de Piratas",
    excerpt: "Assassin's Creed Black Flag combina pirataria, exploração naval e a história fascinante de Edward Kenway num dos jogos mais amados da franquia da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acBlackFlagImg,
    author: "VICIO<CODE>",
    date: "2026-01-31",
    readTime: "18 min"
  },
  {
    id: "16",
    slug: "ac-origins-renascimento-franquia-egito",
    title: "AC Origins: O Renascimento da Franquia no Egito Antigo",
    excerpt: "Assassin's Creed Origins redefiniu a franquia ao trazer combate renovado, o Egito Antigo esplêndido e a origem da Irmandade dos Assassinos com Bayek de Siwa.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acOriginsImg,
    author: "VICIO<CODE>",
    date: "2026-01-28",
    readTime: "18 min"
  },
  {
    id: "17",
    slug: "ac-mirage-retorno-raizes-bagda",
    title: "AC Mirage: O Retorno às Raízes da Franquia em Bagdá",
    excerpt: "Assassin's Creed Mirage leva Basim a Bagdá do século IX, apostando em parkour, stealth e sigilo para resgatar a essência clássica da série da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acMirageImg,
    author: "VICIO<CODE>",
    date: "2026-01-25",
    readTime: "18 min"
  },
  {
    id: "18",
    slug: "ac-3-remastered-revolucao-americana",
    title: "AC III Remastered: A Revolução Americana Revisitada",
    excerpt: "Assassin's Creed 3 Remastered revisita a Revolução Americana com gráficos atualizados. Conheça a história de Connor, os melhoramentos e o que mudou na versão remasterizada.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: ac3Img,
    author: "VICIO<CODE>",
    date: "2026-01-23",
    readTime: "18 min"
  },
  {
    id: "19",
    slug: "ac-syndicate-revolucao-industrial-londres",
    title: "AC Syndicate: A Revolução Industrial no Coração de Londres",
    excerpt: "Assassin's Creed Syndicate mergulha no Londres vitoriano da Revolução Industrial com os gêmeos Frye. Conheça mecânicas, história e por que ele merece mais reconhecimento.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acSyndicateImg,
    author: "VICIO<CODE>",
    date: "2026-01-21",
    readTime: "18 min"
  },
  {
    id: "21",
    slug: "ac-unity-jogo-frente-tempo-paris",
    title: "AC Unity: O Jogo que Estava à Frente do Seu Tempo",
    excerpt: "Descubra por que Unity é considerado a obra-prima técnica da Ubisoft e como ele impressiona até hoje.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acUnityImg,
    author: "VICIO<CODE>",
    date: "2026-01-20",
    readTime: "18 min"
  },
  {
    id: "22",
    slug: "ac-rogue-assassino-templario",
    title: "Assassin's Creed Rogue: E se o Herói se Tornasse o Vilão?",
    excerpt: "Descubra a história de Shay Cormac, o Assassino que se tornou Templário, e as inovações navais no Ártico.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acRogueImg,
    author: "VICIO<CODE>",
    date: "2026-01-19",
    readTime: "18 min"
  },
  {
    id: "23",
    slug: "ranking-melhor-assassins-creed-2026",
    title: "Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026?",
    excerpt: "Ranking completo de todos os jogos Assassin's Creed em 2026 — do melhor ao pior. Análise de gameplay, história, inovação e impacto de cada título na franquia da Ubisoft.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acPortalImg,
    author: "VICIO<CODE>",
    date: "2026-02-10",
    readTime: "10 min"
  },
  // CRIMSON DESERT Posts
  {
    id: "70",
    slug: "crimson-desert-guia-completo",
    title: "Crimson Desert: Guia Completo do RPG Mais Esperado de 2026",
    excerpt: "Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss. Descubra o continente de Pywel e a jornada de Kliff.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertGuiaImg,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "12 min"
  },
  {
    id: "71",
    slug: "crimson-desert-combate-blackspace-engine",
    title: "Crimson Desert: Como o Sistema de Combate e a BlackSpace Engine Mudam Tudo",
    excerpt: "Análise aprofundada das mecânicas de combate, chefes épicos, montarias e a tecnologia por trás do visual impressionante do RPG da Pearl Abyss.",
    content: "",
    category: "geek",
    subtopic: "crimson-desert",
    image: crimsonDesertCombateImg,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "9 min"
  },
  // OTAKU Posts
  {
    id: "1",
    slug: "diferenca-mangas-manhuas-manhwas",
    title: "Sabe a diferença entre Mangas, Manhuas e Manhwas?",
    excerpt: "Descubra as principais diferenças entre os três gêneros de quadrinhos asiáticos e encontre seu favorito!",
    content: "",
    category: "otaku",
    subtopic: "manga",
    image: mangaManhwaManhuaImg,
    author: "VICIO<CODE>",
    date: "2026-02-02",
    readTime: "5 min"
  },
  {
    id: "2",
    slug: "como-diferenciar-manhuas-manhwas",
    title: "Saiba como diferenciar Manhuas e Manhwas",
    excerpt: "Aprenda a diferenciar Manhuas (chineses) de Manhwas (coreanos) de vez. Guia completo com características visuais, temas, sentido de leitura e exemplos populares de cada tipo.",
    content: "",
    category: "otaku",
    subtopic: "manhwa",
    image: manhwaVsManuaImg,
    author: "VICIO<CODE>",
    date: "2026-01-30",
    readTime: "4 min"
  },
  {
    id: "3",
    slug: "10-melhores-manhwas-sistema-2026",
    title: "Os 10 melhores Manhwas de 'Sistema' para ler em 2026",
    excerpt: "Os 10 melhores manhwas com sistema de 2026 — aqueles que você não consegue parar de ler. Seleção com sinopse, número de capítulos e onde ler online gratuitamente.",
    content: "",
    category: "otaku",
    subtopic: "manhwa",
    image: systemManhwaImg,
    author: "VICIO<CODE>",
    date: "2026-01-27",
    readTime: "8 min"
  },
  {
    id: "45",
    slug: "animes-mais-aguardados-2026",
    title: "Os 10 Animes Mais Aguardados de 2026",
    excerpt: "Do retorno de clássicos às novas apostas dos grandes estúdios — guia completo para não perder nenhum lançamento.",
    content: "",
    category: "otaku",
    subtopic: "anime",
    image: animesAguardadosImg,
    author: "VICIO<CODE>",
    date: "2026-03-04",
    readTime: "12 min"
  },
  {
    id: "46",
    slug: "guia-cosplay-2026-iniciantes",
    title: "Guia Definitivo para Começar no Cosplay em 2026",
    excerpt: "Materiais, técnicas, orçamentos e tudo o que você precisa saber para criar seu primeiro cosplay profissional.",
    content: "",
    category: "otaku",
    subtopic: "cosplay",
    image: guiaCosplayImg,
    author: "VICIO<CODE>",
    date: "2026-03-05",
    readTime: "14 min"
  },
  {
    id: "47",
    slug: "manga-vs-anime-adaptacao-2026",
    title: "Mangá vs. Anime: Quando a Adaptação Supera o Original",
    excerpt: "Uma análise honesta das maiores adaptações da história e o que faz um anime ser fiel à sua obra de origem.",
    content: "",
    category: "otaku",
    subtopic: "anime",
    image: mangaVsAnimeImg,
    author: "VICIO<CODE>",
    date: "2026-03-06",
    readTime: "13 min"
  },
  {
    id: "48",
    slug: "cultura-otaku-brasil-2026",
    title: "Cultura Otaku no Brasil 2026: Uma das Maiores do Mundo",
    excerpt: "Da década de 90 até hoje — a trajetória do otakuismo brasileiro e seu impacto cultural, econômico e social.",
    content: "",
    category: "otaku",
    subtopic: "cultura",
    image: culturaOtakuBrasilImg,
    author: "VICIO<CODE>",
    date: "2026-03-07",
    readTime: "14 min"
  },
  {
    id: "49",
    slug: "melhores-jogos-anime-2026",
    title: "Os Melhores Jogos de Anime de 2026: Do RPG ao Fighting Game",
    excerpt: "Os melhores jogos baseados em animes para jogar em 2026 — Dragon Ball, Naruto, One Piece e muito mais. Ranking com plataformas, preços e qual vale mais a pena comprar.",
    content: "",
    category: "otaku",
    subtopic: "games",
    image: jogosAnimeImg,
    author: "VICIO<CODE>",
    date: "2026-03-08",
    readTime: "13 min"
  },
  {
    id: "50",
    slug: "aprender-japones-anime-2026",
    title: "Como Aprender Japonês Assistindo Anime em 2026",
    excerpt: "O método definitivo para aprender japonês assistindo anime em 2026. Dicas práticas, aplicativos, técnicas de shadowing e como evoluir do zero ao conversacional.",
    content: "",
    category: "otaku",
    subtopic: "idiomas",
    image: aprenderJaponesImg,
    author: "VICIO<CODE>",
    date: "2026-03-09",
    readTime: "15 min"
  },
  {
    id: "51",
    slug: "isekai-2026-genero-domina",
    title: "Isekai 2026: Por Que o Gênero Mais Criticado Domina",
    excerpt: "Uma análise profunda do fenômeno isekai, seus clichês, suas obras-primas e por que você provavelmente já está assistindo um.",
    content: "",
    category: "otaku",
    subtopic: "generos",
    image: isekaiImg,
    author: "VICIO<CODE>",
    date: "2026-03-10",
    readTime: "14 min"
  },
  {
    id: "52",
    slug: "merchandising-otaku-colecionar-2026",
    title: "Merchandising Otaku: Como Colecionar com Inteligência",
    excerpt: "Guia completo de action figures, mangás, cards e itens exclusivos — onde comprar, o que valoriza e como organizar.",
    content: "",
    category: "otaku",
    subtopic: "collectibles",
    image: merchandisingOtakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-11",
    readTime: "14 min"
  },
  {
    id: "53",
    slug: "melhores-mangas-ler-2026",
    title: "Os Melhores Mangás Para Ler em 2026: Guia por Gênero",
    excerpt: "Seleção dos melhores mangás para ler em 2026 organizados por gênero — ação, romance, suspense, slice of life. Recomendações para iniciantes e veteranos do mundo otaku.",
    content: "",
    category: "otaku",
    subtopic: "manga",
    image: melhoresMangasImg,
    author: "VICIO<CODE>",
    date: "2026-03-12",
    readTime: "15 min"
  },
  {
    id: "54",
    slug: "saude-mental-cultura-otaku-2026",
    title: "Saúde Mental e Cultura Otaku: Quando Anime Ajuda",
    excerpt: "Como a cultura otaku e os animes podem impactar positivamente a saúde mental — empatia, escape saudável, comunidade e quando buscar apoio profissional além das telas.",
    content: "",
    category: "otaku",
    subtopic: "saude-mental",
    image: saudeMentalOtakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-13",
    readTime: "13 min"
  },
  // New IA articles - March 2026
  {
    id: "55",
    slug: "ia-criatividade-arte-musica-2026",
    title: "IA e Criatividade 2026: Arte e Música Feitas por IA",
    excerpt: "Da geração de imagens com Midjourney à criação musical com Suno AI. Descubra como a IA está transformando as artes criativas.",
    content: "",
    category: "ia",
    subtopic: "criatividade",
    image: iaCriatividadeImg,
    author: "VICIO<CODE>",
    date: "2026-03-14",
    readTime: "14 min"
  },
  {
    id: "56",
    slug: "ia-privacidade-dados-2026",
    title: "IA e Privacidade de Dados 2026: Seus Dados Estão Seguros?",
    excerpt: "Seus dados pessoais alimentam modelos de IA todos os dias. Entenda os riscos reais e como se proteger em 2026.",
    content: "",
    category: "ia",
    subtopic: "privacidade",
    image: iaPrivacidadeImg,
    author: "VICIO<CODE>",
    date: "2026-03-15",
    readTime: "13 min"
  },
  // New Finance articles - March 2026
  {
    id: "57",
    slug: "etfs-2026-guia-completo-investir",
    title: "ETFs 2026: Guia Completo Para Investir com Diversificação",
    excerpt: "Tudo sobre ETFs no Brasil: os melhores fundos, estratégias de investimento e erros que você deve evitar.",
    content: "",
    category: "invest",
    subtopic: "etfs",
    image: etfs2026Img,
    author: "VICIO<CODE>",
    date: "2026-03-16",
    readTime: "15 min"
  },
  {
    id: "58",
    slug: "economia-domestica-2026-cortar-gastos",
    title: "Economia Doméstica 2026: 30 Dicas Para Cortar Gastos",
    excerpt: "Energia, supermercado, assinaturas e transporte: corte até R$ 1.500/mês do seu orçamento com estas estratégias.",
    content: "",
    category: "invest",
    subtopic: "economia-domestica",
    image: economiaDomesticaImg,
    author: "VICIO<CODE>",
    date: "2026-03-17",
    readTime: "14 min"
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === category || post.secondaryCategory === category)
    .sort((a, b) => new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime());
};

export const getPostsBySubtopic = (subtopic: string): BlogPost[] => {
  return blogPosts.filter(post => post.subtopic === subtopic);
};

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Get the latest post from each category for the carousel
export const getLatestPostsByCategory = (): BlogPost[] => {
  const categories: Category[] = ['ia', 'invest', 'geek', 'otaku'];
  const latestByCategory: BlogPost[] = [];
  
  categories.forEach(category => {
    const categoryPosts = blogPosts.filter(post => post.category === category);
    if (categoryPosts.length > 0) {
      const latest = categoryPosts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      latestByCategory.push(latest);
    }
  });
  
  return latestByCategory;
};

// Get related posts: random from same category, excluding current post.
// If viewedSlugs is provided, prioritize posts the user hasn't seen yet.
const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const getRelatedPosts = (
  currentSlug: string,
  count: number = 3,
  options?: { viewedSlugs?: string[] }
): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return getLatestPosts(count);

  const viewed = new Set(options?.viewedSlugs ?? []);
  const otherPosts = blogPosts.filter((post) => post.slug !== currentSlug);

  const sameCategoryPool = otherPosts.filter(
    (post) => post.category === currentPost.category || post.secondaryCategory === currentPost.category
  );

  const pool = sameCategoryPool.length > 0 ? sameCategoryPool : otherPosts;

  // Prioritize unseen when we have the signal (typically for logged-in users)
  if (options?.viewedSlugs) {
    const unseen = pool.filter((p) => !viewed.has(p.slug));
    const seen = pool.filter((p) => viewed.has(p.slug));

    const result = [...shuffleArray(unseen), ...shuffleArray(seen)];
    return result.slice(0, count);
  }

  return shuffleArray(pool).slice(0, count);
};

// Get all subtopics for a category
export const getSubtopicsByCategory = (category: Category): string[] => {
  const subtopics = new Set<string>();
  blogPosts
    .filter(post => post.category === category && post.subtopic)
    .forEach(post => {
      if (post.subtopic) subtopics.add(post.subtopic);
    });
  return Array.from(subtopics);
};
