/**
 * OfflineDownloadButton — botão "Baixar para offline" dentro de um post
 *
 * Visível somente no PWA standalone (no navegador web fica oculto, pois o
 * recurso é exclusivo do app instalado).
 *
 * 3 estados:
 *  - Não baixado  → "Baixar offline"     (clica → precacheSlugs)
 *  - Baixando     → spinner + "Baixando…" (disabled)
 *  - Baixado      → "Salvo ✓" + botão removerlado a lado
 *
 * O hook useOfflinePosts atualiza em tempo real via evento
 * "viciocode:cache-updated", então qualquer outro lugar da UI que leia
 * o mesmo hook reflete a mudança imediatamente.
 */
import { useState } from "react";
import { Download, CheckCircle2, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";
import { precacheSlugs } from "@/utils/precachePosts";

interface OfflineDownloadButtonProps {
  slug: string;
  title?: string;
}

const OfflineDownloadButton = ({ slug, title }: OfflineDownloadButtonProps) => {
  const isStandalone = usePWAStandalone();
  const { isCached, removePost } = useOfflinePosts();
  const [busy, setBusy] = useState<"download" | "remove" | null>(null);

  // Só aparece no app instalado
  if (!isStandalone) return null;

  const cached = isCached(slug);

  const handleDownload = async () => {
    if (busy) return;
    setBusy("download");
    try {
      await precacheSlugs([slug]);
      toast.success("Post salvo para leitura offline!", {
        description: title ?? "Disponível mesmo sem internet.",
      });
    } catch {
      toast.error("Não foi possível baixar o post. Tente novamente.");
    } finally {
      setBusy(null);
    }
  };

  const handleRemove = async () => {
    if (busy) return;
    setBusy("remove");
    try {
      await removePost(slug);
      toast.success("Post removido do cache offline.");
    } catch {
      toast.error("Erro ao remover do cache.");
    } finally {
      setBusy(null);
    }
  };

  if (cached) {
    return (
      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="sm"
          disabled
          className="gap-2 text-primary border-primary/40 bg-primary/5"
          title="Disponível offline"
        >
          <CheckCircle2 className="w-4 h-4" />
          Salvo offline
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
          onClick={handleRemove}
          disabled={busy === "remove"}
          title="Remover do cache offline"
        >
          {busy === "remove"
            ? <RefreshCw className="w-4 h-4 animate-spin" />
            : <Trash2 className="w-4 h-4" />}
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDownload}
      disabled={busy === "download"}
      className="gap-2 border-primary/40 hover:bg-primary/10 hover:text-primary"
      title="Baixar este post para leitura offline"
    >
      {busy === "download" ? (
        <>
          <RefreshCw className="w-4 h-4 animate-spin" />
          Baixando…
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Baixar offline
        </>
      )}
    </Button>
  );
};

export default OfflineDownloadButton;
