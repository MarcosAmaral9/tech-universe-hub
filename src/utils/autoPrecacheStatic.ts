/**
 * autoPrecacheStatic — pré-cacheamento automático das páginas estáticas
 *
 * Roda uma única vez por sessão do PWA standalone, em idle time.
 * Garante que home, hubs, cotações, /arquivo, etc. fiquem disponíveis offline
 * sem o usuário precisar clicar em nada. POSTS continuam sendo manuais.
 */
import { precacheStaticPages } from "./precachePosts";

const SESSION_KEY = "viciocode:auto-static-done";

export function autoPrecacheStaticPages(): void {
  if (typeof window === "undefined") return;

  // Só roda no PWA instalado (standalone). No navegador web é desnecessário.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as { standalone?: boolean }).standalone === true;

  if (!isStandalone) return;
  if (sessionStorage.getItem(SESSION_KEY) === "1") return;

  const run = async () => {
    try {
      await precacheStaticPages();
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Falha silenciosa — usuário pode tentar manualmente em /configuracoes/offline
    }
  };

  // Aguarda a página ficar idle para não competir com a renderização inicial
  const ric = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
    .requestIdleCallback;
  if (typeof ric === "function") {
    ric(() => { void run(); }, { timeout: 8000 });
  } else {
    setTimeout(() => { void run(); }, 4000);
  }
}
