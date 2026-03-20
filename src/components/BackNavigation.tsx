/**
 * BackNavigation
 * Renders a consistent set of navigation buttons for every article:
 * - "← Voltar" — goes to the previous page in browser history (or fallbackPath)
 * - "⬡ Painel X" — shown only for portal articles (AC, Avatar, Crimson Desert)
 * - "◈ Categoria" — links to the article's category page
 *
 * Usage:
 *   <BackNavigation
 *     category="geek"
 *     portalPath="/geek/crimson-desert"
 *     portalLabel="Painel Crimson Desert"
 *   />
 */
import { Link } from "react-router-dom";
import { ArrowLeft, LayoutGrid, Layers } from "lucide-react";
import { useSmartBack } from "@/hooks/useSmartBack";

interface BackNavigationProps {
  /** Category slug: "geek" | "ia" | "invest" | "otaku" */
  category: "geek" | "ia" | "invest" | "otaku";
  /** If this article belongs to a portal, pass the portal path */
  portalPath?: string;
  /** Label for the portal button — e.g. "Painel Crimson Desert" */
  portalLabel?: string;
  /** Override the default fallback path (derived from category if omitted) */
  fallbackPath?: string;
}

const categoryMeta: Record<string, { path: string; label: string }> = {
  geek:   { path: "/geek",     label: "Geek" },
  ia:     { path: "/ia",       label: "Inteligência Artificial" },
  invest: { path: "/financas", label: "Finanças" },
  otaku:  { path: "/otaku",    label: "Otaku" },
};

const BackNavigation = ({
  category,
  portalPath,
  portalLabel,
  fallbackPath,
}: BackNavigationProps) => {
  const cat = categoryMeta[category] ?? { path: "/", label: "Início" };
  const goBack = useSmartBack(fallbackPath ?? cat.path);

  return (
    <nav
      aria-label="Navegação do artigo"
      className="flex flex-wrap items-center gap-2 mb-6"
    >
      {/* ← Voltar à página anterior */}
      <button
        onClick={goBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                   text-muted-foreground hover:text-foreground hover:bg-muted
                   border border-transparent hover:border-border transition-all"
        aria-label="Voltar à página anterior"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Voltar
      </button>

      {/* ⬡ Painel (portal posts only) */}
      {portalPath && portalLabel && (
        <Link
          to={portalPath}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                     text-muted-foreground hover:text-foreground hover:bg-muted
                     border border-transparent hover:border-border transition-all"
          aria-label={portalLabel}
        >
          <Layers className="h-3.5 w-3.5" />
          {portalLabel}
        </Link>
      )}

      {/* ◈ Categoria */}
      <Link
        to={cat.path}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                   text-muted-foreground hover:text-foreground hover:bg-muted
                   border border-transparent hover:border-border transition-all"
        aria-label={`Ver todos os artigos de ${cat.label}`}
      >
        <LayoutGrid className="h-3.5 w-3.5" />
        {cat.label}
      </Link>
    </nav>
  );
};

export default BackNavigation;
