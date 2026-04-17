/**
 * PWAUpdatePrompt
 * Mostra notificações de status do PWA:
 *  1. Indicador "Você está offline" no topo quando sem rede.
 *  2. Toast "Nova versão disponível" quando o SW detecta atualização.
 *  3. Após o usuário aplicar a atualização, dispara o pré-cache de TODAS
 *     as páginas de posts em background, exibindo um indicador discreto
 *     de progresso. Garante que o app instalado já fique pronto para
 *     leitura offline imediatamente após cada update.
 *  4. Toast "Conexão restabelecida" ao voltar online.
 */
import { useRegisterSW } from "virtual:pwa-register/react";
import { useState, useEffect, useRef } from "react";
import { RefreshCw, X, Wifi, WifiOff, Download } from "lucide-react";
import { precacheAllPosts } from "@/utils/precachePosts";

const PRECACHE_FLAG_KEY = "viciocode_pending_precache_after_update";

const PWAUpdatePrompt = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [precacheProgress, setPrecacheProgress] = useState<{
    done: number;
    total: number;
  } | null>(null);
  const startedPrecacheRef = useRef(false);

  // Track online/offline status for the offline indicator
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // Poll a cada 60 minutos por novas versões enquanto a aba está aberta
      if (r) {
        setInterval(() => r.update(), 60 * 60 * 1000);
      }
      // Auto-precache removido: o usuário escolhe o que baixar em /configuracoes/offline
      try { sessionStorage.removeItem(PRECACHE_FLAG_KEY); } catch { /* ignore */ }
    },
    onRegisterError(error) {
      console.warn("[PWA] SW registration error:", error);
    },
  });

  const startPrecache = () => {
    if (startedPrecacheRef.current) return;
    startedPrecacheRef.current = true;
    setPrecacheProgress({ done: 0, total: 0 });
    void precacheAllPosts((p) => setPrecacheProgress(p)).then(() => {
      // Mantém visível por 4s ao concluir, depois esconde
      setTimeout(() => setPrecacheProgress(null), 4000);
    });
  };

  const handleUpdate = () => {
    // Não inicia pré-cache automático — usuário escolhe em /configuracoes/offline
    try {
      sessionStorage.setItem(PRECACHE_FLAG_KEY, "1");
    } catch {
      /* ignore */
    }
    updateServiceWorker(true);
  };

  const handleDismiss = () => {
    setNeedRefresh(false);
  };

  const isComplete =
    precacheProgress && precacheProgress.total > 0 && precacheProgress.done >= precacheProgress.total;

  return (
    <>
      {/* ── Offline indicator (subtle bar at the top) ── */}
      {!isOnline && (
        <div
          className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-2 py-1.5 text-xs font-medium bg-amber-500/90 text-amber-950 backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <WifiOff className="h-3.5 w-3.5 shrink-0" />
          Você está offline — conteúdo salvo disponível
        </div>
      )}

      {/* ── Update available toast ── */}
      {needRefresh && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border border-primary/30 bg-card/95 backdrop-blur-md text-sm max-w-[92vw] sm:max-w-sm animate-fade-in"
          role="alert"
          aria-live="assertive"
        >
          <RefreshCw className="h-4 w-4 text-primary shrink-0 animate-spin [animation-duration:2s]" />
          <span className="flex-1 text-foreground">Nova versão disponível!</span>
          <button
            onClick={handleUpdate}
            className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shrink-0"
          >
            Atualizar
          </button>
          <button
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* ── Pré-cache em progresso (após update) ── */}
      {precacheProgress && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border border-primary/30 bg-card/95 backdrop-blur-md text-sm max-w-[92vw] sm:max-w-sm animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <Download
            className={`h-4 w-4 text-primary shrink-0 ${isComplete ? "" : "animate-pulse"}`}
          />
          <span className="flex-1 text-foreground">
            {isComplete
              ? "Tudo pronto! Conteúdo disponível offline."
              : `Salvando posts para offline${
                  precacheProgress.total
                    ? ` (${precacheProgress.done}/${precacheProgress.total})`
                    : "..."
                }`}
          </span>
        </div>
      )}

      {/* ── Back online indicator (briefly shown) ── */}
      {isOnline && typeof window !== "undefined" && <OnlineRestored />}
    </>
  );
};

// Briefly shows a "back online" toast after reconnection
const OnlineRestored = () => {
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleOnline = () => {
      setJustReconnected(true);
      timeout = setTimeout(() => setJustReconnected(false), 3000);
    };
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
      clearTimeout(timeout);
    };
  }, []);

  if (!justReconnected) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg border border-emerald-500/30 bg-card/95 backdrop-blur-md text-sm animate-fade-in"
      role="status"
    >
      <Wifi className="h-4 w-4 text-emerald-400 shrink-0" />
      <span className="text-foreground">Conexão restabelecida</span>
    </div>
  );
};

export default PWAUpdatePrompt;
