import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { AppErrorBoundary } from "./components/AppErrorBoundary.tsx";
import { initOfflineCommentSync } from "./utils/offlineCommentQueue.ts";
import "./index.css";

// ── Guard: chunk load failure (SW servindo HTML/asset antigo após deploy) ────
// Se um import dinâmico falhar (chunk do build novo não existe mais no servidor,
// ou o HTML veio do cache antigo), limpa caches + desregistra o SW e recarrega
// UMA única vez (flag em sessionStorage evita loop de reload).
const RECOVERY_FLAG = "vc:sw-recovery";

async function recoverFromStaleCache() {
  try {
    if (sessionStorage.getItem(RECOVERY_FLAG)) return; // já tentamos nesta sessão
    sessionStorage.setItem(RECOVERY_FLAG, "1");
  } catch { /* storage indisponível — segue com o reload */ }
  try {
    if (typeof caches !== "undefined") {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch { /* ignora falhas de limpeza */ }
  window.location.reload();
}

window.addEventListener("vite:preloadError", () => { void recoverFromStaleCache(); });

window.addEventListener("unhandledrejection", (event) => {
  const msg = String((event.reason as Error)?.message ?? event.reason ?? "");
  if (
    msg.includes("Failed to fetch dynamically imported module") ||
    msg.includes("Importing a module script failed") ||
    msg.includes("ChunkLoadError") ||
    msg.includes("Loading chunk")
  ) {
    void recoverFromStaleCache();
  }
});

// Limpa a flag quando o app monta com sucesso (permite nova recuperação futura)
window.addEventListener("load", () => {
  setTimeout(() => { try { sessionStorage.removeItem(RECOVERY_FLAG); } catch { /* noop */ } }, 5000);
});


// ── Inicia sistema de fila offline para comentários (background sync) ─────────
initOfflineCommentSync();

// ── Pré-cache automático das páginas estáticas (PWA standalone, idle time) ────
import("./utils/autoPrecacheStatic").then(({ autoPrecacheStaticPages }) => {
  autoPrecacheStaticPages();
}).catch(() => { /* ignore */ });

// ── Monta o app React ─────────────────────────────────────────────────────────
const container = document.getElementById("root")!;

createRoot(container, {
  // onRecoverableError: chamado quando React recupera automaticamente de um erro
  // (ex: hidratação falha mas a renderização funciona). Silencia no prod para
  // não poluir o console do usuário com avisos técnicos de reconciliação.
  onRecoverableError: (error) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("[VicioCode] Recoverable error:", error);
    }
  },
}).render(
  <AppErrorBoundary>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </AppErrorBoundary>
);
