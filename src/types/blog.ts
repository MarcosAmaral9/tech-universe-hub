export type Category = 'ia' | 'invest' | 'geek' | 'otaku';

export type Subtopic = 'avatar' | 'vikings' | 'games' | 'manhwa' | 'manga' | 'manhua' | 'anime' | 'dublagem' | 'semicondutores' | 'datacenter' | 'ciberseguranca' | 'streaming' | 'assassins-creed' | 'renda-fixa' | 'renda-passiva' | 'carteira' | 'cripto' | 'impostos' | 'ia-financas' | 'educacao-financeira' | 'fiis' | 'dividas' | 'planejamento' | 'calculadoras' | 'comparativos' | 'renda' | 'trabalho' | 'apps' | 'tutorial' | 'seguranca' | 'educacao' | 'agentes' | 'saude' | 'regulacao' | 'cosplay' | 'cultura' | 'idiomas' | 'generos' | 'collectibles' | 'saude-mental' | null;

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  secondaryCategory?: Category;
  subtopic?: Subtopic;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}
