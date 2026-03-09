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

export const blogPosts: BlogPost[] = [
  // IA Posts
  {
    id: "4",
    slug: "ia-transformando-dublagem-animes",
    title: "Como as IAs estão transformando a dublagem de animes: O fim das barreiras de idioma?",
    excerpt: "Descubra como a clonagem de voz e tradução em tempo real estão revolucionando o mercado de animes.",
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
    title: "IA e Remasterização: Como a Inteligência Artificial está dando vida nova aos jogos clássicos",
    excerpt: "Entenda como a IA de Upscaling e o Deep Learning estão salvando a história dos games.",
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
    title: "ChatGPT vs. Gemini vs. Claude em 2026: Qual IA Realmente Vale a Pena Assinar?",
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
    title: "Como Usar IA para Ganhar Dinheiro em 2026: 15 Formas Reais e Comprovadas",
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
    title: "Inteligência Artificial no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?",
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
    title: "Os 10 Melhores Aplicativos de IA para Produtividade em 2026 (Testados e Aprovados)",
    excerpt: "Testamos mais de 80 ferramentas e separamos as 10 que sobreviveram ao teste do uso real.",
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
    title: "IA Generativa para Iniciantes em 2026: O Guia Completo do Zero ao Avançado",
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
    title: "Deepfakes e IA em 2026: Como Identificar Conteúdo Falso e Proteger Sua Imagem",
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
    title: "IA na Educação em 2026: Como Estudar de Forma mais Inteligente (Sem Fazer Batota)",
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
    title: "Agentes de IA em 2026: O Que São, Como Funcionam e Por Que Mudam Tudo",
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
    title: "IA para Saúde em 2026: Diagnósticos, Monitoramento e o Futuro da Medicina",
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
    title: "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda Para Você",
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
    title: "Tesouro Direto em 2026: Ainda Vale a Pena? O Guia Completo Atualizado",
    excerpt: "Descubra se o Tesouro Direto ainda é o melhor investimento para iniciantes em 2026. Comparamos taxas, rendimentos e estratégias.",
    content: "",
    category: "invest",
    subtopic: "renda-fixa",
    image: tesouroDiretoImg,
    author: "VICIO<CODE>",
    date: "2026-02-15",
    readTime: "12 min"
  },
  {
    id: "25",
    slug: "renda-passiva-2026-formas-comprovadas",
    title: "Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo",
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
    title: "Carteira de Investimentos para Iniciantes 2026: Monte a Sua do Zero em 5 Passos",
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
    title: "Bitcoin e Criptomoedas em 2026: Ainda Dá Para Lucrar ou Já Passou da Hora?",
    excerpt: "O mercado cripto mudou muito. Entenda o cenário das criptomoedas em 2026, quais ainda têm potencial e como investir sem perder o que você tem.",
    content: "",
    category: "invest",
    subtopic: "cripto",
    image: cryptoInvest2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-18",
    readTime: "14 min"
  },
  // INVEST Posts - IRPF
  {
    id: "28",
    slug: "irpf-2026-guia-declarar-pagar-menos",
    title: "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto Legalmente",
    excerpt: "Tudo que você precisa saber para declarar o Imposto de Renda 2026 corretamente, evitar a malha fina e usar deduções legais para pagar menos IR.",
    content: "",
    category: "invest",
    subtopic: "impostos",
    image: irpf2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-19",
    readTime: "16 min"
  },
  // INVEST + IA Posts - IA no Mercado Financeiro
  {
    id: "29",
    slug: "ia-mercado-financeiro-2026-investimentos",
    title: "Inteligência Artificial no Mercado Financeiro 2026: Como a IA Está Transformando Seus Investimentos",
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
    title: "Educação Financeira Para Quem Sempre Gastou Tudo: O Método dos 3 Baldes",
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
    title: "Fundos Imobiliários (FIIs) em 2026: Os Melhores, Como Analisar e Erros Que Te Custam Dinheiro",
    excerpt: "Guia completo de FIIs para 2026. Saiba como escolher os melhores fundos imobiliários e construir uma carteira que paga dividendos mensais.",
    content: "",
    category: "invest",
    subtopic: "fiis",
    image: fiis2026Img,
    author: "VICIO<CODE>",
    date: "2026-02-22",
    readTime: "14 min"
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
    title: "Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las",
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
    title: "Calculadoras Financeiras: Simule Quanto Custa Comprar Ações, Cripto, Ouro, Dólar e Mais",
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
    title: "Investir em Tecnologia em 2026: Como montar uma carteira focada no Futuro",
    excerpt: "Semicondutores, Data Centers, IA e Cibersegurança: os setores mais promissores para investir.",
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
    title: "Vikings: O Legado de Ragnar Lothbrok e o Fascínio pela Mitologia Nórdica",
    excerpt: "A saga épica que capturou a brutalidade e a espiritualidade da Era Viking como nenhuma outra série.",
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
    title: "Hell Let Loose: Por que este é o simulador de guerra mais realista (e difícil) da atualidade?",
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
    title: "Avatar 1 de (2009): O Filme que Revolucionou a Tecnologia no cinema",
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
    title: "Avatar 2: O Caminho da Água – A Física dos Fluidos Levada ao Limite",
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
    title: "Avatar: Frontiers of Pandora – Vale a pena jogar o 'Far Cry' de Luxo da Ubisoft?",
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
    title: "Assassin's Creed Valhalla: A Jornada Épica de Eivor no Coração da Inglaterra",
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
    title: "Assassin's Creed Shadows: O Japão Feudal que os Fãs Sempre Sonharam",
    excerpt: "Após anos de espera, a Ubisoft finalmente nos leva ao Japão do século XVI com Naoe e Yasuke.",
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
    title: "Assassin's Creed Odyssey: Uma Odisseia Épica pela Grécia de Sócrates e Leônidas",
    excerpt: "Se existe um jogo que define a grandeza dos RPGs de mundo aberto modernos, esse jogo é Odyssey.",
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
    title: "Assassin's Creed IV: Black Flag – Por que ele ainda é o melhor jogo de piratas já feito?",
    excerpt: "Descubra por que Black Flag continua sendo a experiência definitiva de pirataria nos games.",
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
    title: "Assassin's Creed Origins: O Renascimento da Franquia no Egito dos Faraós",
    excerpt: "Conheça a origem da irmandade em uma das recriações mais impressionantes do Egito Antigo.",
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
    title: "Assassin's Creed Mirage: O Retorno às Raízes e a Arte da Furtividade em Bagdá",
    excerpt: "Uma carta de amor ao primeiro jogo da franquia, focando na furtividade e parkour.",
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
    title: "Assassin's Creed III Remastered: A Revolução Americana em 4K e a Dualidade de Connor Kenway",
    excerpt: "Vale a pena jogar a versão remasterizada? Analisamos as melhorias gráficas e a história de Connor.",
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
    title: "Assassin's Creed Syndicate: A Revolução Industrial e o Charme Vitoriano de Londres",
    excerpt: "Explore a Londres do século XIX com os irmãos Frye em uma das cidades mais vivas da franquia.",
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
    title: "Assassin's Creed Unity: O Jogo que Estava à Frente do seu Tempo (e da Tecnologia)",
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
    excerpt: "Analisamos todos os jogos da franquia e criamos o ranking definitivo para 2026.",
    content: "",
    category: "geek",
    subtopic: "assassins-creed",
    image: acPortalImg,
    author: "VICIO<CODE>",
    date: "2026-02-10",
    readTime: "10 min"
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
    excerpt: "Aprenda a identificar de qual país vem suas histórias favoritas e descubra novas obras incríveis!",
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
    excerpt: "Depois do sucesso de Solo Leveling, confira as melhores obras do gênero que você precisa conhecer!",
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
    title: "Os 10 Animes Mais Aguardados de 2026: O Que Vai Dominar as Telas Este Ano",
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
    title: "Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção",
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
    title: "Mangá vs. Anime: Quando a Adaptação Supera o Original (e Quando Decepciona)",
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
    title: "Cultura Otaku no Brasil 2026: Como Virou uma das Maiores Comunidades do Mundo",
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
    excerpt: "Análise completa dos lançamentos mais esperados e como a indústria de games otaku evoluiu.",
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
    title: "Como Aprender Japonês Assistindo Anime: O Método que Funciona em 2026",
    excerpt: "Técnicas comprovadas, aplicativos e recursos para transformar seu hobby em fluência real.",
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
    title: "Isekai em 2026: Por Que o Gênero Mais Criticado do Anime Continua Dominando",
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
    title: "Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento",
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
    title: "Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível de Experiência",
    excerpt: "De iniciantes a veteranos — curadoria completa dos títulos essenciais e lançamentos do ano.",
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
    title: "Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Ele Isola",
    excerpt: "Uma análise honesta e cuidadosa sobre a relação entre o consumo de anime e o bem-estar emocional.",
    content: "",
    category: "otaku",
    subtopic: "saude-mental",
    image: saudeMentalOtakuImg,
    author: "VICIO<CODE>",
    date: "2026-03-13",
    readTime: "13 min"
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
