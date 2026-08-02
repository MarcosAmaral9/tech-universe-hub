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
 * Mostra o artigo anterior e o próximo dentro do MESMO subtópico (ou, na
 * falta dele, da mesma categoria), ordenados por data. Aumenta páginas por
 * sessão sem depender do algoritmo de relacionados.
 */
const ReadNext = ({ currentSlug }: ReadNextProps) => {
  const current = getPostBySlug(currentSlug);
  if (!current) return null;

  const byDate = (a: { date: string }, b: { date: string }) =>
    new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime();

  const sameTopic = blogPosts
    .filter((p) =>
      current.subtopic ? p.subtopic === current.subtopic : p.category === current.category
    )
    .sort(byDate);

  const list = sameTopic.length > 1 ? sameTopic : blogPosts.filter((p) => p.category === current.category).sort(byDate);
  const idx = list.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return null;

  const newer = idx > 0 ? list[idx - 1] : undefined;
  const older = idx < list.length - 1 ? list[idx + 1] : undefined;
  if (!newer && !older) return null;

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
