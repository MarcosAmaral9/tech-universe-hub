export type Category = 'ia' | 'invest' | 'geek' | 'otaku';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
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
