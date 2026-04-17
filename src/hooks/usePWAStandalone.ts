/**
 * usePWAStandalone
 * Detecta se o site está rodando como PWA instalado (modo standalone)
 * em vez de ser acessado por um navegador normal.
 *
 * Funcionalidades restritas ao app (como o filtro "Apenas offline" e o
 * pré-cache automático) usam esse hook para garantir que rodam apenas
 * dentro do aplicativo instalado, e não no navegador web.
 */
import { useEffect, useState } from "react";

function detectStandalone(): boolean {
  if (typeof window === "undefined") return false;
  // iOS Safari
  // @ts-expect-error - non-standard property
  if (window.navigator.standalone === true) return true;
  // Outros navegadores (Android, desktop)
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  if (window.matchMedia?.("(display-mode: minimal-ui)").matches) return true;
  if (window.matchMedia?.("(display-mode: fullscreen)").matches) return true;
  return false;
}

export const usePWAStandalone = () => {
  const [isStandalone, setIsStandalone] = useState<boolean>(detectStandalone);

  useEffect(() => {
    const mql = window.matchMedia?.("(display-mode: standalone)");
    if (!mql) return;
    const listener = () => setIsStandalone(detectStandalone());
    mql.addEventListener?.("change", listener);
    return () => mql.removeEventListener?.("change", listener);
  }, []);

  return isStandalone;
};
