import { BlogPost } from "@/types/blog";

import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.jpg";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.jpg";
import systemManhwaImg from "@/assets/system-manhwa-hero.jpg";
import aiAnimeDubbingImg from "@/assets/ai-anime-dubbing.jpg";
import techInvesting2026Img from "@/assets/tech-investing-2026.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "diferenca-mangas-manhuas-manhwas",
    title: "Sabe a diferença entre Mangas, Manhuas e Manhwas?",
    excerpt: "Descubra as principais diferenças entre os três gêneros de quadrinhos asiáticos e encontre seu favorito!",
    content: "",
    category: "otaku",
    image: mangaManhwaManhuaImg,
    author: "VICIO<CODE>",
    date: "2026-01-17",
    readTime: "5 min"
  },
  {
    id: "2",
    slug: "como-diferenciar-manhuas-manhwas",
    title: "Saiba como diferenciar Manhuas e Manhwas",
    excerpt: "Aprenda a identificar de qual país vem suas histórias favoritas e descubra novas obras incríveis!",
    content: "",
    category: "otaku",
    image: manhwaVsManuaImg,
    author: "VICIO<CODE>",
    date: "2026-01-16",
    readTime: "4 min"
  },
  {
    id: "3",
    slug: "10-melhores-manhwas-sistema-2026",
    title: "Os 10 melhores Manhwas de 'Sistema' para ler em 2026",
    excerpt: "Depois do sucesso de Solo Leveling, confira as melhores obras do gênero que você precisa conhecer!",
    content: "",
    category: "otaku",
    image: systemManhwaImg,
    author: "VICIO<CODE>",
    date: "2026-01-15",
    readTime: "8 min"
  },
  {
    id: "4",
    slug: "ia-transformando-dublagem-animes",
    title: "Como as IAs estão transformando a dublagem de animes: O fim das barreiras de idioma?",
    excerpt: "Descubra como a clonagem de voz e tradução em tempo real estão revolucionando o mercado de animes.",
    content: "",
    category: "ia",
    image: aiAnimeDubbingImg,
    author: "VICIO<CODE>",
    date: "2026-01-18",
    readTime: "7 min"
  },
  {
    id: "5",
    slug: "investir-em-tecnologia-2026",
    title: "Investir em Tecnologia em 2026: Como montar uma carteira focada no Futuro",
    excerpt: "Semicondutores, Data Centers, IA e Cibersegurança: os setores mais promissores para investir.",
    content: "",
    category: "invest",
    image: techInvesting2026Img,
    author: "VICIO<CODE>",
    date: "2026-01-18",
    readTime: "8 min"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};