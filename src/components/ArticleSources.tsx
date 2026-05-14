import { ExternalLink, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

export interface ArticleSource {
  title: string;
  url: string;
  publisher?: string;
  accessedAt?: string; // ex.: "Maio 2026"
}

interface ArticleSourcesProps {
  sources: ArticleSource[];
  /** Se true, injeta `citation` no JSON-LD do artigo via Helmet. */
  injectSchema?: boolean;
}

/**
 * Bloco "Fontes e referências" exibido no fim de cada artigo.
 * Fortalece E-E-A-T (sinaliza ao Google que o conteúdo é verificável)
 * e é critério de aprovação no AdSense.
 */
const ArticleSources = ({ sources, injectSchema = true }: ArticleSourcesProps) => {
  if (!sources?.length) return null;

  const schema = injectSchema
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: sources.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: s.title,
            url: s.url,
            ...(s.publisher && { publisher: { "@type": "Organization", name: s.publisher } }),
          },
        })),
      }
    : null;

  return (
    <section className="not-prose mt-10 rounded-xl border border-border bg-card/50 p-6" aria-labelledby="article-sources">
      {schema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <h2 id="article-sources" className="flex items-center gap-2 font-display text-lg font-bold mb-4">
        <BookOpen className="h-5 w-5 text-primary" />
        Fontes e referências
      </h2>
      <p className="text-xs text-muted-foreground mb-4">
        As informações deste artigo foram apuradas a partir das fontes oficiais e veículos especializados listados abaixo.
        Todos os links foram verificados na data indicada.
      </p>
      <ol className="space-y-3 list-decimal list-inside">
        {sources.map((s) => (
          <li key={s.url} className="text-sm leading-relaxed">
            <a
              href={s.url}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              {s.title}
              <ExternalLink className="h-3 w-3" />
            </a>
            {s.publisher && <span className="text-muted-foreground"> — {s.publisher}</span>}
            {s.accessedAt && <span className="text-xs text-muted-foreground"> (acesso: {s.accessedAt})</span>}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ArticleSources;
