/**
 * AppErrorBoundary
 * Captura erros não tratados na árvore React e exibe feedback amigável.
 *
 * Caso especial: erros de "removeChild" / "NotFoundError" indicam
 * dessincronização entre o Service Worker cacheado e o bundle JS novo.
 * Nesses casos, exibe um botão "Limpar cache e recarregar" que force-reloads
 * a página após limpar os caches do SW, resolvendo o problema definitivamente.
 */
import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props { children: ReactNode; }
interface State { error: Error | null; info: string; isSWConflict: boolean; }

/** Detecta se o erro é um conflito de Service Worker / cache desatualizado */
function isSWCacheConflict(error: Error): boolean {
  const msg = error.message ?? "";
  const stack = error.stack ?? "";
  // removeChild + NotFoundError = DOM node mismatch (SW served stale HTML)
  if (msg.includes("removeChild") || msg.includes("NotFoundError")) return true;
  // Chunk load failure = new build deployed, old SW serving stale assets
  if (msg.includes("Failed to fetch dynamically imported module")) return true;
  if (msg.includes("Loading chunk") || msg.includes("ChunkLoadError")) return true;
  if (stack.includes("vendor-ui") && msg.includes("removeChild")) return true;
  return false;
}

async function clearSWCachesAndReload(): Promise<void> {
  try {
    // Remove todos os caches do Service Worker
    if (typeof caches !== "undefined") {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    // Desregistra o SW para garantir fresh start
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch {
    // Ignora erros na limpeza — o reload vai acontecer de qualquer forma
  }
  // Hard reload ignorando cache
  window.location.href = window.location.href;
}

export class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, info: "", isSWConflict: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error, isSWConflict: isSWCacheConflict(error) };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ info: info.componentStack || "" });
    console.error("[VicioCode] App crashed:", error);
    console.error("[VicioCode] Component stack:", info.componentStack);
    // Auto-resolve SW conflicts silently (sem prompt ao usuário)
    if (isSWCacheConflict(error)) {
      console.warn("[VicioCode] SW cache conflict detected — clearing caches...");
      clearSWCachesAndReload();
    }
  }

  render() {
    const { error, isSWConflict } = this.state;

    if (!error) return this.props.children;

    // ── Erro de SW/cache desatualizado ────────────────────────────────────
    if (isSWConflict) {
      return (
        <div style={{
          fontFamily: "system-ui, sans-serif", padding: "2rem",
          background: "#0a0a0a", color: "#fff", minHeight: "100vh",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", textAlign: "center", gap: "1rem",
        }}>
          <div style={{ fontSize: "3rem" }}>🔄</div>
          <h1 style={{ color: "#fff", fontSize: "1.5rem", margin: 0 }}>
            Atualização disponível
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: "360px", lineHeight: 1.6 }}>
            Uma nova versão do site está disponível. Clique abaixo para
            atualizar — isso limpará o cache antigo automaticamente.
          </p>
          <button
            onClick={clearSWCachesAndReload}
            style={{
              padding: "0.75rem 1.5rem", background: "#3b82f6", color: "#fff",
              border: "none", borderRadius: "8px", cursor: "pointer",
              fontSize: "1rem", fontWeight: "600",
            }}
          >
            Atualizar agora
          </button>
          <p style={{ color: "#475569", fontSize: "0.75rem" }}>
            Se o problema persistir, tente abrir em aba anônima.
          </p>
        </div>
      );
    }

    // ── Erro genérico ─────────────────────────────────────────────────────
    return (
      <div style={{
        fontFamily: "monospace", padding: "2rem", background: "#0a0a0a",
        color: "#fff", minHeight: "100vh", whiteSpace: "pre-wrap",
      }}>
        <h1 style={{ color: "#ef4444", marginBottom: "1rem" }}>
          ⚠️ Erro ao carregar o site
        </h1>
        <p style={{ color: "#f97316", marginBottom: "0.5rem" }}>
          <strong>Mensagem:</strong> {error.message}
        </p>
        {process.env.NODE_ENV === "development" && (
          <>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "1rem" }}>
              <strong>Stack:</strong>{"\n"}{error.stack}
            </p>
            {this.state.info && (
              <p style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                <strong>Componente:</strong>{"\n"}{this.state.info}
              </p>
            )}
          </>
        )}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1rem", padding: "0.5rem 1rem",
              background: "#3b82f6", color: "#fff", border: "none",
              borderRadius: "4px", cursor: "pointer",
            }}
          >
            Recarregar página
          </button>
          <button
            onClick={clearSWCachesAndReload}
            style={{
              marginTop: "1rem", padding: "0.5rem 1rem",
              background: "#6b7280", color: "#fff", border: "none",
              borderRadius: "4px", cursor: "pointer",
            }}
          >
            Limpar cache e recarregar
          </button>
        </div>
      </div>
    );
  }
}
