/**
 * OfflineGuard — detecta quando o app abre sem internet e redireciona
 * para a tela de leitura offline automaticamente.
 * Colocado no topo da árvore de rotas em App.tsx.
 */
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { isPageCached } from "@/utils/precachePosts";

const OFFLINE_PATH = "/leitura-offline";

// Páginas que NÃO devem redirecionar para offline
const EXEMPT = [OFFLINE_PATH, "/entrar", "/cadastro", "/auth", "/configuracoes"];

const isExempt = (pathname: string) => EXEMPT.some((p) => pathname.startsWith(p));

export const OfflineGuard = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const checked   = useRef(false);

  // 1. Abertura do app sem internet → vai direto para a biblioteca offline.
  //    Exceção: artigo que o usuário baixou continua abrindo normalmente.
  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    if (navigator.onLine) return;

    const path = location.pathname;
    if (isExempt(path)) return;

    if (path.startsWith("/post/")) {
      void isPageCached(path).then((cached) => {
        if (cached) return;
        toast.info("Este artigo não foi baixado para leitura offline.");
        navigate(OFFLINE_PATH, { replace: true });
      });
      return;
    }

    navigate(OFFLINE_PATH, { replace: true });
  }, [navigate, location.pathname]);

  // 2. Perdeu a conexão durante o uso → leva para a biblioteca offline,
  //    exceto se o usuário estiver lendo um artigo (não interrompe a leitura).
  useEffect(() => {
    const onOffline = () => {
      const path = window.location.pathname;
      if (!isExempt(path) && !path.startsWith("/post/")) {
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
