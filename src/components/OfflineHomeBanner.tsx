/**
 * OfflineHomeBanner
 * Mostra um aviso na home da aplicação (apenas dentro do PWA instalado)
 * informando que o conteúdo está disponível offline para usuários logados.
 *
 * Regras de exibição:
 *  - Só aparece se está rodando em modo standalone (app instalado).
 *  - Texto muda conforme login: logado = "leia offline", deslogado = "faça login para ler offline".
 *  - Pode ser fechado e fica oculto por 7 dias (localStorage).
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, LogIn, X, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";

const DISMISS_KEY = "viciocode_offline_banner_dismissed_at";
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias

const OfflineHomeBanner = () => {
  const isStandalone = usePWAStandalone();
  const { user } = useAuthContext();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DISMISS_KEY);
      if (!raw) {
        setDismissed(false);
        return;
      }
      const ts = Number(raw);
      if (!Number.isFinite(ts) || Date.now() - ts > DISMISS_TTL_MS) {
        setDismissed(false);
      }
    } catch {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setDismissed(true);
  };

  // Só mostra dentro do app instalado
  if (!isStandalone || dismissed) return null;

  return (
    <div className="container pt-4">
      <div className="relative rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
          {user ? (
            <Download className="h-5 w-5 text-primary" />
          ) : (
            <WifiOff className="h-5 w-5 text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0 pr-6">
          {user ? (
            <>
              <p className="font-semibold text-foreground text-sm sm:text-base">
                Todo o conteúdo está disponível offline
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                A cada atualização do app, todas as páginas são baixadas automaticamente
                para você ler sem internet. Procure o badge verde "Offline" nos posts.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-foreground text-sm sm:text-base">
                Faça login para ler offline
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                Apenas usuários logados conseguem acessar a versão offline do conteúdo
                no aplicativo.
              </p>
              <Button asChild size="sm" className="mt-3 gap-2">
                <Link to="/entrar">
                  <LogIn className="h-4 w-4" />
                  Entrar / Criar conta
                </Link>
              </Button>
            </>
          )}
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Fechar aviso"
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OfflineHomeBanner;
