import { BlogPost, Category } from "@/types/blog";

import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.jpg";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.jpg";
import systemManhwaImg from "@/assets/system-manhwa-hero.jpg";
import aiAnimeDubbingImg from "@/assets/ai-anime-dubbing.jpg";
import aiRemasteringImg from "@/assets/ai-remastering.jpg";
import techInvesting2026Img from "@/assets/tech-investing-2026.jpg";
import vikingsRagnarImg from "@/assets/vikings-ragnar.jpg";
import hellLetLooseImg from "@/assets/hell-let-loose.jpg";
import avatarPandoraImg from "@/assets/avatar-pandora.jpg";
import avatarWaterImg from "@/assets/avatar-water-swimming.jpg";
import avatarFireImg from "@/assets/avatar-fire.jpg";
import avatarGameImg from "@/assets/avatar-game-female.jpg";
import acValhallaImg from "@/assets/ac-valhalla.jpg";
import acShadowsImg from "@/assets/ac-shadows.jpg";
import acOdysseyImg from "@/assets/ac-odyssey.jpg";
import acBlackFlagImg from "@/assets/ac-black-flag.jpg";
import acOriginsImg from "@/assets/ac-origins.jpg";
import acMirageImg from "@/assets/ac-mirage.jpg";
import ac3Img from "@/assets/ac-3.jpg";
import acSyndicateImg from "@/assets/ac-syndicate.jpg";
import acUnityImg from "@/assets/ac-unity.jpg";
import acRogueImg from "@/assets/ac-rogue.jpg";
import acPortalImg from "@/assets/assassins-creed-portal.jpg";
import tesouroDiretoImg from "@/assets/tesouro-direto-2026.jpg";
import rendaPassivaImg from "@/assets/renda-passiva-2026.jpg";
import carteiraInvestimentosImg from "@/assets/carteira-investimentos-2026.jpg";
import cryptoInvest2026Img from "@/assets/crypto-invest-2026.jpg";
import irpf2026Img from "@/assets/irpf-2026.jpg";
import iaFinancas2026Img from "@/assets/ia-financas-2026.jpg";

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
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category || post.secondaryCategory === category);
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

// Get related posts based on category and subtopic, excluding current post
export const getRelatedPosts = (currentSlug: string, count: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return getLatestPosts(count);
  
  const otherPosts = blogPosts.filter(post => post.slug !== currentSlug);
  
  // First, try to find posts with the same subtopic
  if (currentPost.subtopic) {
    const sameSubtopic = otherPosts.filter(post => post.subtopic === currentPost.subtopic);
    if (sameSubtopic.length >= count) {
      return sameSubtopic.slice(0, count);
    }
  }
  
  // Then, try posts from the same category
  const sameCategory = otherPosts.filter(post => post.category === currentPost.category);
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }
  
  // Finally, return latest posts if not enough related posts
  const combined = [...sameCategory, ...otherPosts.filter(post => post.category !== currentPost.category)];
  return combined.slice(0, count);
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
