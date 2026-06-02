import type { Category } from "@/types/blog";
import EditorialTake from "./EditorialTake";
import ArticleSources, { type ArticleSource } from "./ArticleSources";
import RelatedPosts from "./RelatedPosts";
import CommentSection from "./CommentSection";

interface ArticleFooterProps {
  category: Category;
  slug: string;
  postTitle: string;
  editorialTitle?: string;
  sources: ArticleSource[];
  /** Conteúdo da opinião editorial (parágrafos JSX). */
  children: React.ReactNode;
}

/**
 * Wrapper de conveniência para o rodapé padronizado de qualquer post.
 * Renderiza, na ordem fixa exigida pelo padrão editorial:
 *   1. Análise do Marcos (EditorialTake)
 *   2. Fontes e referências (ArticleSources)
 *   3. Posts relacionados (RelatedPosts)
 *   4. Comentários (CommentSection)
 *
 * Usar em posts novos para garantir o padrão sem depender de ordenação manual.
 */
const ArticleFooter = ({
  category,
  slug,
  postTitle,
  editorialTitle,
  sources,
  children,
}: ArticleFooterProps) => (
  <>
    <EditorialTake category={category} title={editorialTitle}>
      {children}
    </EditorialTake>
    <ArticleSources category={category} sources={sources} />
    <RelatedPosts currentSlug={slug} />
    <CommentSection postId={slug} postTitle={postTitle} category={category} />
  </>

);

export default ArticleFooter;
