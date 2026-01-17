import { BlogPost } from "@/types/blog";

import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.jpg";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.jpg";
import systemManhwaImg from "@/assets/system-manhwa-hero.jpg";
import aiTechImg from "@/assets/ai-tech.jpg";
import cryptoInvestImg from "@/assets/crypto-invest.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "diferenca-mangas-manhuas-manhwas",
    title: "Sabe a diferença entre Mangas, Manhuas e Manhwas?",
    excerpt: "Descubra as principais diferenças entre os três gêneros de quadrinhos asiáticos e encontre seu favorito!",
    content: "",
    category: "otaku",
    image: mangaManhwaManhuaImg,
    author: "MVTECH",
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
    author: "MVTECH",
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
    author: "MVTECH",
    date: "2026-01-15",
    readTime: "8 min"
  },
  {
    id: "4",
    slug: "chatgpt-5-o-que-esperar",
    title: "ChatGPT-5: O que esperar da próxima revolução da OpenAI",
    excerpt: "Rumores e especulações sobre a próxima versão do modelo de linguagem mais famoso do mundo.",
    content: "",
    category: "ia",
    image: aiTechImg,
    author: "MVTECH",
    date: "2026-01-14",
    readTime: "6 min"
  },
  {
    id: "5",
    slug: "investir-em-cripto-2026",
    title: "Vale a pena investir em criptomoedas em 2026?",
    excerpt: "Análise completa do mercado cripto e as melhores estratégias para o novo ano.",
    content: "",
    category: "invest",
    image: cryptoInvestImg,
    author: "MVTECH",
    date: "2026-01-13",
    readTime: "7 min"
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
