/**
 * OfflineGuard — detecta quando o app abre sem internet e redireciona
 * para a tela de leitura offline automaticamente.
 * Colocado no topo da árvore de rotas em App.tsx.
 */
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OFFLINE_PATH = "/leitura-offline";

// Páginas que NÃO devem redirecionar para offline
const EXEMPT = [OFFLINE_PATH, "/entrar", "/cadastro", "/auth", "/configuracoes"];

const isExempt = (pathname: string) => EXEMPT.some((p) => pathname.startsWith(p));

export const OfflineGuard = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const checked   = useRef(false);

  // 1. Abertura do app sem internet → vai direto para a biblioteca offline
  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    if (!navigator.onLine && !isExempt(location.pathname)) {
      navigate(OFFLINE_PATH, { replace: true });
    }
  }, [navigate, location.pathname]);

  // 2. Perdeu a conexão durante o uso → também leva para a biblioteca offline
  useEffect(() => {
    const onOffline = () => {
      if (!isExempt(window.location.pathname)) {
        navigate(OFFLINE_PATH, { replace: true });
      }
    };
    window.addEventListener("offline", onOffline);
    return () => window.removeEventListener("offline", onOffline);
  }, [navigate]);

  // Quando volta para online e está na tela offline, não redireciona automaticamente
  // (usuário decide quando voltar)

  return null;
};

export default OfflineGuard;
