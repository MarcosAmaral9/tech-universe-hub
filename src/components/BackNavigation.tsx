/**
 * BackNavigation
 * Renders consistent back buttons for all articles.
 * - "← Voltar" goes to the previous page (browser history)
 * - "⬡ Portal X" goes to the parent portal (for portal articles)
 * - "← Categoria" goes to the category page (for non-portal articles)
 */
import { Link } from "react-router-dom";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import { useSmartBack } from "@/hooks/useSmartBack";

interface BackNavigationProps {
  /** Category fallback path if no browser history (/ia, /financas, /geek, /otaku) */
  categoryPath: string;
  /** Human-readable category label */
  categoryLabel: string;
  /** Portal path — only for articles that belong to a portal */
  portalPath?: string;
  /** Human-readable portal label */
  portalLabel?: string;
}

const BackNavigation = ({
  categoryPath,
  categoryLabel,
  portalPath,
  portalLabel,
}: BackNavigationProps) => {
  const goBack = useSmartBack(portalPath ?? categoryPath);

  return (
    <nav className="flex flex-wrap items-center gap-3 mb-6">
      {/* Smart back — always goes to the actual last page visited */}
      <button
        onClick={goBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Voltar à página anterior"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      {/* Separator */}
      <span className="text-border">|</span>

      {/* Portal link — shown only for portal articles */}
      {portalPath && portalLabel && (
        <>
          <Link
            to={portalPath}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Ir para ${portalLabel}`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            {portalLabel}
          </Link>
          <span className="text-border">|</span>
        </>
      )}

      {/* Category link — always shown */}
      <Link
        to={categoryPath}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-label={`Ver todos os artigos de ${categoryLabel}`}
      >
        {categoryLabel}
      </Link>
    </nav>
  );
};

export default BackNavigation;
