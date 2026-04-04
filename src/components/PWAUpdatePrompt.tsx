/**
 * PWAUpdatePrompt
 * Shows a toast-style notification when a new version of the app is available.
 * Uses the virtual module provided by vite-plugin-pwa (useRegisterSW).
 *
 * Flow:
 *  1. Service Worker detects an update in the background.
 *  2. needRefresh becomes true  →  this banner appears.
 *  3. User clicks "Atualizar"  →  updateServiceWorker(true) activates the
 *     new SW and reloads the page.
 *  4. User clicks "✕"          →  banner hides (they'll see it again next visit).
 */
import { useRegisterSW } from "virtual:pwa-register/react";
import { useState, useEffect } from "react";
import { RefreshCw, X, Wifi, WifiOff } from "lucide-react";

const PWAUpdatePrompt = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Track online/offline status for the offline indicator
  useEffect(() => {
    const goOnline  = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online",  goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online",  goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // Poll every 60 minutes for new SW versions when the tab is open
      if (r) {
        setInterval(() => r.update(), 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.warn("[PWA] SW registration error:", error);
    },
  });

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  const handleDismiss = () => {
    setNeedRefresh(false);
  };

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
          <span className="flex-1 text-foreground">
            Nova versão disponível!
          </span>
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

      {/* ── Back online indicator (briefly shown) ── */}
      {isOnline && typeof window !== "undefined" && (
        <OnlineRestored />
      )}
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
