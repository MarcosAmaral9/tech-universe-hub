/**
 * MostReadWidget — Top posts mais lidos da semana (via Hostinger MySQL).
 * Esconde-se silenciosamente quando o endpoint não responde (preview estático).
 */
import { Link } from "react-router-dom";
import { Flame, Eye } from "lucide-react";
import { useTopPosts } from "@/hooks/useTopPosts";

const CAT_COLORS: Record<string, string> = {
   ia:     "text-ia",
   geek:   "text-geek",
   otaku:  "text-otaku",
   invest: "text-invest",
};

interface Props {
  limit?: number;
  className?: string;
  variant?: "card" | "compact";
}

const MostReadWidget = ({ limit = 5, className = "", variant = "card" }: Props) => {
  const { posts, loading, error } = useTopPosts("week", limit);

  if (loading && !posts.length) return null;
  if (!posts.length && !error) return null;

  return (
    <aside className={`rounded-2xl border border-border bg-card p-4 sm:p-5 ${className}`}>
      <header className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-primary/15">
          <Flame className="w-4 h-4 text-primary" />
        </div>
        <h2 className="font-display text-base font-bold">Mais Lidos da Semana</h2>
      </header>
      {error && <p role="status" className="mb-3 text-xs text-muted-foreground">{posts.length ? "Atualização indisponível; exibindo o último ranking salvo, que pode estar desatualizado." : "O ranking está temporariamente indisponível."}</p>}
      <ol className="space-y-2.5">
        {posts.map((p, i) => (
          <li key={p.slug}>
            <Link
              to={`/post/${p.slug}`}
              className="flex items-start gap-3 group rounded-lg p-2 -mx-2 hover:bg-muted/50 transition-colors"
            >
              <span className={`text-2xl font-display font-bold ${i === 0 ? "text-primary" : "text-muted-foreground/60"} leading-none w-6 shrink-0`}>
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {p.title || p.slug}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground">
                  {p.category && (
                    <span className={`uppercase font-bold tracking-wider ${CAT_COLORS[p.category] || ""}`}>
                      {p.category}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {p.views.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default MostReadWidget;
