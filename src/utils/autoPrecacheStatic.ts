/**
 * autoPrecacheStatic — pré-cacheamento MÍNIMO na abertura do app
 *
 * Ao instalar/abrir o PWA garantimos que o essencial está no cache:
 *   - "/" (shell do app)
 *   - "/leitura-offline" (biblioteca offline)
 *   - "/configuracoes/offline" (onde o usuário escolhe o que baixar)
 *
 * NENHUM artigo e NENHUMA imagem de artigo é baixada automaticamente.
 *
 * A verificação roda a cada abertura com internet: se alguma dessas páginas
 * sumiu do cache (limpeza do navegador, falha anterior, cache expirado),
 * ela é baixada de novo. Sem isso o app pode abrir offline sem ter a tela
 * de leitura offline disponível.
 */
import { precacheEssentialPages, ESSENTIAL_PAGES, isPageCached } from "./precachePosts";

export function autoPrecacheStaticPages(): void {
  if (typeof window === "undefined") return;

  // Só roda no PWA instalado (standalone). No navegador web é desnecessário.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as { standalone?: boolean }).standalone === true;

  if (!isStandalone) return;
  if (!navigator.onLine) return;

  const run = async () => {
    try {
      // Verifica se tudo que é essencial já está realmente no Cache API
      const results = await Promise.all(
        ESSENTIAL_PAGES.map((p) => isPageCached(p.path))
      );
      if (results.every(Boolean)) return;
      await precacheEssentialPages();
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

  // Se o app voltar a ficar online, revalida o shell essencial
  window.addEventListener("online", () => { void run(); });
}
