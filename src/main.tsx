import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppErrorBoundary } from "./components/AppErrorBoundary.tsx";
import { initOfflineCommentSync } from "./utils/offlineCommentQueue.ts";
import "./index.css";

// ── Guard: chunk load failure (SW serving stale assets after deploy) ──────────
// Se um import dinâmico falhar (chunk do build novo não encontrado no cache antigo),
// limpa todos os caches do SW e recarrega a página automaticamente.
window.addEventListener("vite:preloadError", () => {
  if (typeof caches !== "undefined") {
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))).finally(() => {
      window.location.reload();
    });
  } else {
    window.location.reload();
  }
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
    <App />
  </AppErrorBoundary>
);
