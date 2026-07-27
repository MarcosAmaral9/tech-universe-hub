/**
 * autoPrecacheStatic — pré-cacheamento MÍNIMO na primeira abertura do app
 *
 * Ao instalar/abrir o PWA baixamos apenas o essencial:
 *   - "/" (shell do app)
 *   - "/leitura-offline" (biblioteca offline)
 *   - "/configuracoes/offline" (onde o usuário escolhe o que baixar)
 *
 * NENHUM artigo e NENHUMA imagem de artigo é baixada automaticamente.
 * Os hubs completos (com imagens) continuam disponíveis como download
 * MANUAL em Configurações → Offline.
 */
import { precacheEssentialPages } from "./precachePosts";

const DONE_KEY = "viciocode:essential-precache-done";

export function autoPrecacheStaticPages(): void {
  if (typeof window === "undefined") return;

  // Só roda no PWA instalado (standalone). No navegador web é desnecessário.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as { standalone?: boolean }).standalone === true;

  if (!isStandalone) return;
  if (!navigator.onLine) return;

  // localStorage (não sessionStorage): roda uma única vez por instalação
  try {
    if (localStorage.getItem(DONE_KEY) === "1") return;
  } catch { /* storage indisponível — segue */ }

  const run = async () => {
    try {
      await precacheEssentialPages();
      try { localStorage.setItem(DONE_KEY, "1"); } catch { /* ignore */ }
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
