import { ExternalLink, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import type { Category } from "@/types/blog";

export interface ArticleSource {
  title: string;
  url: string;
  publisher?: string;
  accessedAt?: string; // ex.: "Maio 2026"
}

interface ArticleSourcesProps {
  sources: ArticleSource[];
  /** Categoria do post — tematiza ícone, borda e links com a cor da categoria. */
  category?: Category;
  /** Se true, injeta `citation` no JSON-LD do artigo via Helmet. */
  injectSchema?: boolean;
}

const CATEGORY_STYLES: Record<Category, { border: string; bg: string; text: string; link: string }> = {
  ia: { border: "border-ia/30", bg: "bg-gradient-to-br from-ia/5 to-card/50", text: "text-ia", link: "text-ia hover:text-ia/80" },
  invest: { border: "border-invest/30", bg: "bg-gradient-to-br from-invest/5 to-card/50", text: "text-invest", link: "text-invest hover:text-invest/80" },
  geek: { border: "border-geek/30", bg: "bg-gradient-to-br from-geek/5 to-card/50", text: "text-geek", link: "text-geek hover:text-geek/80" },
  otaku: { border: "border-otaku/30", bg: "bg-gradient-to-br from-otaku/5 to-card/50", text: "text-otaku", link: "text-otaku hover:text-otaku/80" },
};

const DEFAULT_STYLE = {
  border: "border-border",
  bg: "bg-card/50",
  text: "text-primary",
  link: "text-primary hover:underline",
};

/**
 * Bloco "Fontes e referências" exibido no fim de cada artigo.
 * Layout padronizado em todos os posts; cor de destaque vem da categoria
 * (quando informada). Fortalece E-E-A-T e é critério do AdSense.
 */
const ArticleSources = ({ sources, category, injectSchema = true }: ArticleSourcesProps) => {
  if (!sources?.length) return null;

  const s = category ? CATEGORY_STYLES[category] : DEFAULT_STYLE;

  const schema = injectSchema
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: sources.map((src, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: src.title,
            url: src.url,
            ...(src.publisher && { publisher: { "@type": "Organization", name: src.publisher } }),
          },
        })),
      }
    : null;

  return (
    <section
      className={`not-prose mt-10 rounded-xl border ${s.border} ${s.bg} p-6 md:p-7`}
      aria-labelledby="article-sources"
    >
      {schema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <h2 id="article-sources" className="flex items-center gap-2 font-display text-base md:text-lg font-bold mb-4">
        <BookOpen className={`h-5 w-5 ${s.text}`} />
        Fontes e referências
      </h2>
      <p className="text-xs md:text-sm text-muted-foreground mb-5 leading-relaxed">
        As informações deste artigo foram apuradas a partir das fontes oficiais e veículos especializados listados abaixo.
        Todos os links foram verificados na data indicada.
      </p>
      <ol className={`space-y-3 list-decimal list-inside marker:font-bold ${s.text}`}>
        {sources.map((src) => (
          <li key={src.url} className="text-sm leading-relaxed text-foreground/90">
            <a
              href={src.url}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={`${s.link} inline-flex items-center gap-1`}
            >
              {src.title}
              <ExternalLink className="h-3 w-3" />
            </a>
            {src.publisher && <span className="text-muted-foreground"> — {src.publisher}</span>}
            {src.accessedAt && <span className="text-xs text-muted-foreground"> (acesso: {src.accessedAt})</span>}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ArticleSources;
