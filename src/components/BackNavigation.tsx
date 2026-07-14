/**
 * BackNavigation — DEPRECADO como renderizador.
 *
 * O breadcrumb agora é renderizado UMA ÚNICA vez, globalmente, no topo
 * do <main> em `Layout.tsx`, garantindo padrão consistente em todas as
 * páginas (sempre no início, acima do título).
 *
 * Mantido como no-op para não precisar remover manualmente das 180+
 * páginas/posts que ainda importam o componente. Não renderiza nada.
 */
interface BackNavigationProps {
  category?: "geek" | "ia" | "invest" | "otaku";
  portalPath?: string;
  portalLabel?: string;
  fallbackPath?: string;
}

const BackNavigation = (_props: BackNavigationProps) => null;

export default BackNavigation;
