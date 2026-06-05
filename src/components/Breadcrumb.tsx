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
  ia: "Inteligência Artificial", geek: "Geek & Games",
  otaku: "Anime & Otaku", invest: "Finanças & Investimentos",
};
const CAT_ROUTES: Record<string, string> = {
  ia: "/ia", geek: "/geek", otaku: "/otaku", invest: "/financas",
};

interface PanelDef {
  label: string;
  href: string;
  category: Category;
  matchPrefixes: string[];
}

// Registro central de painéis. Adicione novos painéis aqui.
const PANELS: PanelDef[] = [
  { label: "Avatar",           href: "/geek/avatar",           category: "geek",  matchPrefixes: ["avatar-"] },
  { label: "Assassin's Creed", href: "/geek/assassins-creed",  category: "geek",  matchPrefixes: ["ac-"] },
  { label: "Crimson Desert",   href: "/geek/crimson-desert",   category: "geek",  matchPrefixes: ["crimson-desert-"] },
  { label: "Bannerlord",       href: "/geek/bannerlord",       category: "geek",  matchPrefixes: ["bannerlord-"] },
  { label: "TenSura",          href: "/otaku/tensura",         category: "otaku", matchPrefixes: ["tensura-"] },
  { label: "Overlord",         href: "/otaku/overlord",        category: "otaku", matchPrefixes: ["overlord-"] },
];

const findPanelBySlug = (slug: string) =>
  PANELS.find(p => p.matchPrefixes.some(prefix => slug.startsWith(prefix)));

const findPanelByPath = (pathname: string) =>
  PANELS.find(p => pathname === p.href);

interface Crumb { label: string; href?: string }

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const crumbs: Crumb[] = [{ label: "Início", href: "/" }];

  if (pathname.startsWith("/post/")) {
    const slug = pathname.replace("/post/", "");
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      crumbs.push({
        label: CAT_LABELS[post.category] ?? post.category,
        href: CAT_ROUTES[post.category],
      });
      const panel = findPanelBySlug(slug);
      if (panel) crumbs.push({ label: panel.label, href: panel.href });
      crumbs.push({ label: post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title });
    }
  } else if (pathname.startsWith("/regiao/")) {
    // Regiões pertencem ao painel Crimson Desert
    crumbs.push({ label: CAT_LABELS.geek, href: CAT_ROUTES.geek });
    crumbs.push({ label: "Crimson Desert", href: "/geek/crimson-desert" });
    const region = pathname.split("/").pop() ?? "";
    crumbs.push({ label: region.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) });
  } else {
    // Página de painel? Ex.: /geek/crimson-desert, /otaku/tensura
    const panel = findPanelByPath(pathname);
    if (panel) {
      crumbs.push({ label: CAT_LABELS[panel.category] ?? panel.category, href: CAT_ROUTES[panel.category] });
      crumbs.push({ label: panel.label });
    } else if (pathname.startsWith("/ia"))          crumbs.push({ label: CAT_LABELS.ia });
    else if (pathname.startsWith("/geek"))          crumbs.push({ label: CAT_LABELS.geek });
    else if (pathname.startsWith("/otaku"))         crumbs.push({ label: CAT_LABELS.otaku });
    else if (pathname.startsWith("/financas") || pathname.startsWith("/investimentos")) crumbs.push({ label: CAT_LABELS.invest });
  }

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-xs text-muted-foreground mb-4">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />}
          {crumb.href ? (
            <Link to={crumb.href}
              className="flex items-center gap-1 hover:text-primary transition-colors">
              {i === 0 && <Home className="h-3 w-3" />}
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground/70 font-medium line-clamp-1">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
