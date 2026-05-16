import { Link, useLocation } from "react-router-dom";
import { User, Calendar, RefreshCw, ArrowRight } from "lucide-react";
import type { Category } from "@/types/blog";

const CATEGORY_TAGLINE: Record<Category, string> = {
  ia: "entusiasta de inteligência artificial",
  invest: "entusiasta de finanças e investimentos",
  geek: "entusiasta do universo geek e dos games",
  otaku: "entusiasta do mundo otaku e da cultura japonesa",
};

// Texto curto e relevante por categoria (variant "full" e fallback)
const CATEGORY_COPY: Record<Category, string> = {
  ia: "Acompanho lançamentos da OpenAI, Anthropic e Google de perto e testo modelos de IA no dia a dia. Aqui no VICIO<CODE> traduzo o hype em utilidade prática para o leitor brasileiro.",
  invest: "Estudo o mercado brasileiro (B3, Selic, Tesouro, FIIs) e escrevo sobre finanças com foco em quem está construindo patrimônio do zero — sem fórmula mágica e sem propaganda disfarçada.",
  geek: "Jogo, acompanho lançamentos e revisito clássicos. Cada análise aqui passa pelo meu filtro pessoal de jogador — incluindo o que vale ou não comprar com o real fraco.",
  otaku: "Acompanho animes, mangás e manhwas em simultâneo com o Japão. Escrevo com perspectiva de fã que cresceu vendo a cultura otaku virar mainstream no Brasil.",
};

const CATEGORY_COLOR: Record<Category, string> = {
  ia: "border-ia/40 bg-ia/5",
  invest: "border-invest/40 bg-invest/5",
  geek: "border-geek/40 bg-geek/5",
  otaku: "border-otaku/40 bg-otaku/5",
};

interface AuthorBioProps {
  category: Category;
  publishedAt?: string;
  updatedAt?: string;
  variant?: "compact" | "full";
  /** Slug do artigo atual — usado no tracking e botão de retorno em /sobre */
  articleSlug?: string;
  /** Título do artigo atual — usado no botão de retorno em /sobre */
  articleTitle?: string;
}

const trackAuthorClick = (category: Category, slug?: string, title?: string) => {
  try {
    // dataLayer / GA4 custom event
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const payload = {
      event: "author_link_click",
      author: "marcos-amaral",
      from_category: category,
      from_slug: slug || null,
      from_title: title || null,
    };
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
    if (typeof w.gtag === "function") {
      w.gtag("event", "author_link_click", payload);
    }
    // Persistência local — a /sobre lê para mostrar "Voltar para o artigo"
    if (slug) {
      sessionStorage.setItem(
        "viciocode:lastArticle",
        JSON.stringify({ slug, title: title || "", category, ts: Date.now() })
      );
    }
  } catch {
    /* no-op */
  }
};

const buildAboutHref = (category: Category, slug?: string, title?: string) => {
  const params = new URLSearchParams({ from: "author-bio", category });
  if (slug) params.set("slug", slug);
  if (title) params.set("title", title);
  return `/sobre?${params.toString()}`;
};

const AuthorBio = ({
  category,
  publishedAt,
  updatedAt,
  variant = "compact",
  articleSlug,
  articleTitle,
}: AuthorBioProps) => {
  const tagline = CATEGORY_TAGLINE[category];
  const copy = CATEGORY_COPY[category];
  const colorClasses = CATEGORY_COLOR[category];
  const location = useLocation();

  // Auto-detecta slug/título a partir da URL atual quando não informado
  const slug = articleSlug ?? location.pathname.split("/").filter(Boolean).pop();
  const aboutHref = buildAboutHref(category, slug, articleTitle);
  const onClick = () => trackAuthorClick(category, slug, articleTitle);

  if (variant === "compact") {
    return (
      <div
        className={`not-prose flex flex-wrap items-center gap-3 text-sm rounded-lg border ${colorClasses} px-4 py-3 my-4`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
            MA
          </div>
          <div className="leading-tight">
            <Link to={aboutHref} onClick={onClick} className="font-semibold hover:underline">
              Por Marcos Amaral
            </Link>
            <p className="text-xs text-muted-foreground">{tagline}</p>
          </div>
        </div>
        {publishedAt && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground sm:ml-auto">
            <Calendar className="h-3 w-3" /> {publishedAt}
          </span>
        )}
        {updatedAt && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <RefreshCw className="h-3 w-3" /> Atualizado em {updatedAt}
          </span>
        )}
        <Link
          to={aboutHref}
          onClick={onClick}
          className="text-xs text-primary hover:underline inline-flex items-center gap-1 ml-auto"
        >
          Conhecer o autor <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    );
  }

  return (
    <aside className={`not-prose mt-12 rounded-xl border ${colorClasses} p-6`}>
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg shrink-0">
          MA
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
            <User className="h-3 w-3" /> Sobre o autor
          </p>
          <Link
            to={aboutHref}
            onClick={onClick}
            className="font-display text-lg font-bold hover:underline"
          >
            Marcos Amaral
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Marcos Vinícius Cavalcante Amaral, formado em Sistemas de Informação e {tagline}. {copy}
          </p>
          <Link
            to={aboutHref}
            onClick={onClick}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
          >
            Conhecer o autor <ArrowRight className="h-3 w-3" />
          </Link>
          {(publishedAt || updatedAt) && (
            <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
              {publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Publicado em {publishedAt}
                </span>
              )}
              {updatedAt && (
                <span className="flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" /> Atualizado em {updatedAt}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AuthorBio;
