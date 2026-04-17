/**
 * RequireOnlineForOffline (gate)
 * No app instalado (standalone), bloqueia o acesso ao conteúdo offline
 * quando o usuário NÃO está logado e está sem conexão. Mostra mensagem
 * pedindo para entrar (quando online) ou avisando que precisa logar.
 *
 * No navegador web NUNCA bloqueia — funcionalidade offline é restrita ao app.
 */
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";

const OfflineAuthGate = ({ children }: { children: ReactNode }) => {
  const isStandalone = usePWAStandalone();
  const { user, loading } = useAuthContext();
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  // Só bloqueia: app instalado + offline + não logado (e auth carregada)
  if (isStandalone && !isOnline && !loading && !user) {
    return (
      <div className="container py-16 flex flex-col items-center text-center gap-4 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <WifiOff className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="font-display text-2xl font-bold">Conteúdo offline indisponível</h1>
        <p className="text-muted-foreground">
          Você está offline e não está logado. O acesso offline ao conteúdo do
          aplicativo é exclusivo para usuários logados. Conecte-se à internet e
          faça login para liberar a leitura sem conexão.
        </p>
        <Button asChild className="gap-2">
          <Link to="/entrar">
            <LogIn className="h-4 w-4" />
            Fazer login
          </Link>
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default OfflineAuthGate;
