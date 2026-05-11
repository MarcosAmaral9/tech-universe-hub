/**
 * OfflineGuard — detecta quando o app abre sem internet e redireciona
 * para a tela de leitura offline automaticamente.
 * Colocado no topo da árvore de rotas em App.tsx.
 */
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OFFLINE_PATH = "/leitura-offline";

// Páginas que NÃO devem redirecionar para offline
const EXEMPT = [OFFLINE_PATH, "/entrar", "/cadastro", "/auth"];

export const OfflineGuard = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const checked   = useRef(false);

  useEffect(() => {
    // Só redireciona uma vez por abertura do app
    if (checked.current) return;
    checked.current = true;

    const exempt = EXEMPT.some(p => location.pathname.startsWith(p));
    if (!navigator.onLine && !exempt) {
      navigate(OFFLINE_PATH, { replace: true });
    }
  }, [navigate, location.pathname]);

  // Quando volta para online e está na tela offline, não redireciona automaticamente
  // (usuário decide quando voltar)

  return null;
};

export default OfflineGuard;
