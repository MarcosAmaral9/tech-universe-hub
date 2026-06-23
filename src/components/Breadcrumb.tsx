/**
 * Breadcrumb — navegação hierárquica visual nos artigos
 * Complementa o JSON-LD que já existe no DynamicSEO
 *
 * Fluxo: Início > Categoria > [Painel] > Post
 *
 * Para adicionar um novo painel basta registrar abaixo em PANELS:
 *   { label, href, category, matchPrefixes: ["slug-prefix-"] }
 */
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { blogPosts } from "@/data/posts";
import type { Category } from "@/types/blog";

const CAT_LABELS: Record<string, string> = {
  ia: "Inteligência Artificial",
  geek: "Geek & Games",
  otaku: "Anime & Otaku",
  invest: "Finanças & Investimentos",
};
const CAT_ROUTES: Record<string, string> = {
  ia: "/ia",
  geek: "/geek",
  otaku: "/otaku",
  invest: "/financas",
};

interface PanelDef {
  label: string;
  href: string;
  category: Category;
  matchPrefixes: string[];
}

// Registro central de painéis. Adicione novos painéis aqui.
const PANELS: PanelDef[] = [
  { label: "Avatar", href: "/geek/avatar", category: "geek", matchPrefixes: ["avatar-"] },
  { label: "Assassin's Creed", href: "/geek/assassins-creed", category: "geek", matchPrefixes: ["ac-"] },
  { label: "Crimson Desert", href: "/geek/crimson-desert", category: "geek", matchPrefixes: ["crimson-desert-"] },
  { label: "Bannerlord", href: "/geek/bannerlord", category: "geek", matchPrefixes: ["bannerlord-"] },
  { label: "TenSura", href: "/otaku/tensura", category: "otaku", matchPrefixes: ["tensura-"] },
  { label: "Overlord", href: "/otaku/overlord", category: "otaku", matchPrefixes: ["overlord-"] },
];

const findPanelBySlug = (slug: string) =>
  PANELS.find(p => p.matchPrefixes.some(prefix => slug.startsWith(prefix)));

const findPanelByPath = (pathname: string) => PANELS.find(p => pathname === p.href);

interface Crumb {
  label: string;
  href?: string;
  category?: Category;
  isHome?: boolean;
}

// Cores das categorias em HSL. Usamos opacidades controladas para manter
// contraste tanto no light quanto no dark.
const CAT_STYLES: Record<
  string,
  {
    text: string;
    bg: string;
    hoverBg: string;
    border: string;
    dot: string;
    chevron: string;
    focusRing: string;
  }
> = {
  ia: {
    text: "text-[hsl(var(--ia-color))]",
    bg: "bg-[hsl(var(--ia-color)/0.12)]",
    hoverBg: "hover:bg-[hsl(var(--ia-color)/0.24)]",
    border: "border-[hsl(var(--ia-color)/0.45)]",
    dot: "bg-[hsl(var(--ia-color))]",
    chevron: "text-[hsl(var(--ia-color)/0.7)]",
    focusRing: "focus-visible:outline-[hsl(var(--ia-color))]",
  },
  geek: {
    text: "text-[hsl(var(--geek-color))]",
    bg: "bg-[hsl(var(--geek-color)/0.12)]",
    hoverBg: "hover:bg-[hsl(var(--geek-color)/0.24)]",
    border: "border-[hsl(var(--geek-color)/0.45)]",
    dot: "bg-[hsl(var(--geek-color))]",
    chevron: "text-[hsl(var(--geek-color)/0.7)]",
    focusRing: "focus-visible:outline-[hsl(var(--geek-color))]",
  },
  otaku: {
    text: "text-[hsl(var(--otaku-color))]",
    bg: "bg-[hsl(var(--otaku-color)/0.12)]",
    hoverBg: "hover:bg-[hsl(var(--otaku-color)/0.24)]",
    border: "border-[hsl(var(--otaku-color)/0.45)]",
    dot: "bg-[hsl(var(--otaku-color))]",
    chevron: "text-[hsl(var(--otaku-color)/0.7)]",
    focusRing: "focus-visible:outline-[hsl(var(--otaku-color))]",
  },
  invest: {
    text: "text-[hsl(var(--invest-color))]",
    bg: "bg-[hsl(var(--invest-color)/0.12)]",
    hoverBg: "hover:bg-[hsl(var(--invest-color)/0.24)]",
    border: "border-[hsl(var(--invest-color)/0.45)]",
    dot: "bg-[hsl(var(--invest-color))]",
    chevron: "text-[hsl(var(--invest-color)/0.7)]",
    focusRing: "focus-visible:outline-[hsl(var(--invest-color))]",
  },
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const crumbs: Crumb[] = [{ label: "Início", href: "/", isHome: true }];

  if (pathname.startsWith("/post/")) {
    const slug = pathname.replace("/post/", "");
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      crumbs.push({
        label: CAT_LABELS[post.category] ?? post.category,
        href: CAT_ROUTES[post.category],
        category: post.category,
      });
      const panel = findPanelBySlug(slug);
      if (panel) crumbs.push({ label: panel.label, href: panel.href, category: panel.category });
      crumbs.push({
        label: post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title,
        category: post.category,
      });
    }
  } else if (pathname.startsWith("/regiao/")) {
    crumbs.push({ label: CAT_LABELS.geek, href: CAT_ROUTES.geek, category: "geek" });
    crumbs.push({ label: "Crimson Desert", href: "/geek/crimson-desert", category: "geek" });
    const region = pathname.split("/").pop() ?? "";
    crumbs.push({
      label: region.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      category: "geek",
    });
  } else {
    const panel = findPanelByPath(pathname);
    if (panel) {
      crumbs.push({
        label: CAT_LABELS[panel.category] ?? panel.category,
        href: CAT_ROUTES[panel.category],
        category: panel.category,
      });
      crumbs.push({ label: panel.label, category: panel.category });
    } else if (pathname.startsWith("/ia")) crumbs.push({ label: CAT_LABELS.ia, category: "ia" });
    else if (pathname.startsWith("/geek")) crumbs.push({ label: CAT_LABELS.geek, category: "geek" });
    else if (pathname.startsWith("/otaku")) crumbs.push({ label: CAT_LABELS.otaku, category: "otaku" });
    else if (pathname.startsWith("/financas") || pathname.startsWith("/investimentos"))
      crumbs.push({ label: CAT_LABELS.invest, category: "invest" });
  }

  if (crumbs.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm mb-5"
    >
      {crumbs.map((crumb, i) => {
        const style = crumb.category ? CAT_STYLES[crumb.category] : null;
        const isLast = i === crumbs.length - 1;
        const isHome = crumb.isHome;

        return (
          <span key={i} className="flex items-center gap-2 min-w-0">
            {i > 0 && (
              <ChevronRight
                className={`h-4 w-4 shrink-0 ${style?.chevron ?? "text-muted-foreground/40"}`}
                aria-hidden="true"
              />
            )}
            {crumb.href ? (
              <Link
                to={crumb.href}
                className={[
                  "inline-flex items-center gap-1.5 rounded-lg border transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  isHome
                    ? "px-3 py-1.5 text-base font-bold text-foreground border-transparent hover:bg-muted/60 focus-visible:outline-primary"
                    : [
                        "px-2.5 py-1.5 font-medium",
                        style
                          ? `${style.text} ${style.bg} ${style.hoverBg} ${style.border} ${style.focusRing}`
                          : "text-muted-foreground border-transparent hover:bg-muted/40 hover:text-foreground focus-visible:outline-primary",
                      ].join(" "),
                ].join(" ")}
              >
                {isHome && <Home className="h-4 w-4" aria-hidden="true" />}
                {!isHome && style && (
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 ${style.dot}`}
                    aria-hidden="true"
                  />
                )}
                <span className="truncate">{crumb.label}</span>
              </Link>
            ) : (
              <span
                className={[
                  "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-semibold truncate",
                  style
                    ? `${style.text} ${style.bg} border ${style.border}`
                    : "text-foreground/80 border border-transparent",
                  isLast ? "max-w-[260px] sm:max-w-md" : "",
                ].join(" ")}
                aria-current={isLast ? "page" : undefined}
              >
                {style && (
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 ${style.dot}`}
                    aria-hidden="true"
                  />
                )}
                <span className="truncate">{crumb.label}</span>
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
