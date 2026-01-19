export type Category = 'ia' | 'invest' | 'geek' | 'otaku';

export type Subtopic = 'avatar' | 'vikings' | 'games' | 'manhwa' | 'manga' | 'manhua' | 'anime' | 'dublagem' | 'semicondutores' | 'datacenter' | 'ciberseguranca' | 'streaming' | 'assassins-creed' | null;

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
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
