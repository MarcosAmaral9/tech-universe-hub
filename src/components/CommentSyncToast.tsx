/**
 * CommentSyncToast
 * Listener global que escuta o evento 'comment-queue-synced' (disparado por
 * offlineCommentQueue.ts quando comentários da fila offline são enviados
 * com sucesso) e mostra um toast amigável ao usuário.
 *
 * Renderizado uma vez no App.tsx, fora de qualquer rota.
 */
import { useEffect } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const CommentSyncToast = () => {
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ success: number; failed: number }>).detail;
      if (!detail || detail.success <= 0) return;
      const n = detail.success;
      toast.success(
        n === 1
          ? "Comentário enviado!"
          : `${n} comentários enviados!`,
        {
          description: "Sua mensagem offline foi sincronizada com o servidor.",
          icon: <CheckCircle2 className="h-4 w-4" />,
        }
      );
    };
    window.addEventListener("comment-queue-synced", handler);
    return () => window.removeEventListener("comment-queue-synced", handler);
  }, []);

  return null;
};

export default CommentSyncToast;
