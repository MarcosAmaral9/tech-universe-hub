/**
 * BackNavigation — renderiza apenas o Breadcrumb.
 * Botão "← Voltar" removido: o breadcrumb já fornece navegação
 * hierárquica clara e o browser tem botão nativo de voltar.
 * Mantido como wrapper para não precisar editar 159 arquivos.
 */
import Breadcrumb from "./Breadcrumb";

interface BackNavigationProps {
  category?: "geek" | "ia" | "invest" | "otaku";
  portalPath?: string;
  portalLabel?: string;
  fallbackPath?: string;
}

const BackNavigation = (_props: BackNavigationProps) => <Breadcrumb />;

export default BackNavigation;
