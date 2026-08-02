import { Link } from "react-router-dom";
import { ArrowRight, Tag as TagIcon } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/posts";
import { subtopicLabel } from "@/lib/subtopics";
import SkeletonImage from "./SkeletonImage";

interface ReadNextProps {
  currentSlug: string;
}

/**
 * ReadNext — navegação contextual "leia a seguir".
 * Percorre TODOS os artigos da MESMA categoria ordenados pelo `id` de
 * posts.ts, de forma circular: todo artigo sempre tem um "anterior" e um
 * "próximo" (mesmo o primeiro e o último da lista).
 */
const ReadNext = ({ currentSlug }: ReadNextProps) => {
  const current = getPostBySlug(currentSlug);
  if (!current) return null;

  const sameCategory = blogPosts
    .filter((p) => p.category === current.category)
    .sort((a, b) => Number(a.id) - Number(b.id));

  // Fallback: categorias com menos de 2 posts usam a lista global,
  // assim todo artigo sempre tem um anterior e um próximo.
  const list =
    sameCategory.length >= 2
      ? sameCategory
      : [...blogPosts].sort((a, b) => Number(a.id) - Number(b.id));

  const idx = list.findIndex((p) => p.slug === currentSlug);
  if (idx === -1 || list.length < 2) return null;

  // Navegação circular garante sempre os dois cards preenchidos.
  const older = list[(idx - 1 + list.length) % list.length];
  const newer = list[(idx + 1) % list.length];



  const topic = current.subtopic ? subtopicLabel(current.subtopic) : null;

  return (
    <nav className="not-prose mt-10 pt-8 border-t border-border" aria-label="Leia a seguir">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="font-display text-lg font-bold">Leia a seguir</h3>
        {current.subtopic && topic && (
          <Link
            to={`/tag/${current.subtopic}`}
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <TagIcon className="h-3 w-3" />
            Todos os artigos sobre {topic}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {older && (
          <Link
            to={`/post/${older.slug}`}
            className="group block rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-3 items-start">
              <SkeletonImage
                src={older.image}
                alt={older.title}
                width={320}
                height={180}
                wrapperClassName="shrink-0 w-24 sm:w-28 aspect-video rounded-lg overflow-hidden"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="min-w-0">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Artigo anterior
                </span>
                <p className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {older.title}
                </p>
                <span className="text-xs text-muted-foreground">{older.readTime} de leitura</span>
              </div>
            </div>
          </Link>
        )}
        {newer && (
          <Link
            to={`/post/${newer.slug}`}
            className="group block rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors md:text-right"
          >
            <div className="flex gap-3 items-start md:flex-row-reverse md:text-right">
              <SkeletonImage
                src={newer.image}
                alt={newer.title}
                width={320}
                height={180}
                wrapperClassName="shrink-0 w-24 sm:w-28 aspect-video rounded-lg overflow-hidden"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="min-w-0">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1 md:flex-row-reverse">
                  Próximo artigo <ArrowRight className="h-3 w-3 md:rotate-180" />
                </span>
                <p className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {newer.title}
                </p>
                <span className="text-xs text-muted-foreground">{newer.readTime} de leitura</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ReadNext;
