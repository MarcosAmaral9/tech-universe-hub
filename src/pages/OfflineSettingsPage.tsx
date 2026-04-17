/**
 * OfflineSettingsPage (/configuracoes/offline)
 * Painel de gerenciamento do cache offline:
 *  - Mostra quantos posts (do total) estão salvos.
 *  - Estima o espaço de armazenamento usado pelo navegador.
 *  - Permite baixar manualmente todos os posts agora.
 *  - Permite limpar o cache offline (caches API + IndexedDB de comentários).
 *
 * O recurso offline é exclusivo do app (PWA standalone), mas a página é
 * acessível também no navegador para o usuário inspecionar o estado.
 */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, HardDrive, Trash2, WifiOff, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import { useAuthContext } from "@/contexts/AuthContext";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";
import { precacheAllPosts, type PrecacheProgress } from "@/utils/precachePosts";
import { blogPosts } from "@/data/posts";
import { toast } from "sonner";

const CACHE_NAMES = [
  "pages-cache",
  "images-cache",
  "fonts-cache",
  "php-api-cache",
  "external-api-cache",
  "supabase-cache",
];

const OFFLINE_DB_NAME = "viciocode-offline";

function formatBytes(bytes: number): string {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

const OfflineSettingsPage = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuthContext();
  const isStandalone = usePWAStandalone();
  const { count: cachedCount, refresh } = useOfflinePosts();
  const totalPosts = blogPosts.length;

  const [storage, setStorage] = useState<{ usage: number; quota: number } | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState<PrecacheProgress | null>(null);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate("/entrar", { replace: true });
  }, [user, loading, navigate]);

  const refreshStorage = async () => {
    try {
      if (navigator.storage?.estimate) {
        const est = await navigator.storage.estimate();
        setStorage({ usage: est.usage || 0, quota: est.quota || 0 });
      }
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    refreshStorage();
  }, []);

  const handleDownloadAll = async () => {
    if (downloading) return;
    setDownloading(true);
    setProgress({ done: 0, total: totalPosts });
    toast.info("Baixando todos os posts para offline...", {
      description: "Isso pode demorar alguns segundos.",
    });
    try {
      await precacheAllPosts((p) => setProgress(p));
      await refresh();
      await refreshStorage();
      toast.success("Conteúdo salvo!", {
        description: `${totalPosts} posts disponíveis para leitura offline.`,
      });
    } catch {
      toast.error("Erro ao baixar conteúdo. Tente novamente.");
    } finally {
      setDownloading(false);
      setTimeout(() => setProgress(null), 3000);
    }
  };

  const handleClearCache = async () => {
    if (clearing) return;
    if (!confirm("Tem certeza? Você precisará de internet até baixar novamente os posts.")) return;
    setClearing(true);
    try {
      // Limpa caches HTTP do Service Worker
      if (typeof caches !== "undefined") {
        const names = await caches.keys();
        await Promise.all(
          names
            .filter((n) => CACHE_NAMES.includes(n) || n.startsWith("workbox-"))
            .map((n) => caches.delete(n))
        );
      }
      // Limpa fila de comentários pendentes
      if (typeof indexedDB !== "undefined") {
        await new Promise<void>((resolve) => {
          const req = indexedDB.deleteDatabase(OFFLINE_DB_NAME);
          req.onsuccess = () => resolve();
          req.onerror = () => resolve();
          req.onblocked = () => resolve();
        });
      }
      await refresh();
      await refreshStorage();
      toast.success("Cache offline limpo");
    } catch {
      toast.error("Erro ao limpar cache");
    } finally {
      setClearing(false);
    }
  };

  if (loading || !user) return null;

  const percent = totalPosts > 0 ? Math.round((cachedCount / totalPosts) * 100) : 0;
  const storagePercent = storage && storage.quota > 0
    ? Math.round((storage.usage / storage.quota) * 100)
    : 0;

  return (
    <div className="min-h-[70vh] py-12 px-4">
      <DynamicSEO />
      <div className="max-w-2xl mx-auto space-y-8">
        <Link to="/configuracoes">
          <Button variant="ghost" className="gap-2 -ml-3">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Configurações
          </Button>
        </Link>

        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
            <WifiOff className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground">
            Conteúdo Offline
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Gerencie o que está salvo no seu dispositivo para ler sem internet.
          </p>
        </div>

        {/* Aviso para navegador web */}
        {!isStandalone && (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
            <p>
              <strong>Dica:</strong> O acesso offline ao conteúdo é exclusivo do
              aplicativo instalado. Você pode gerenciar o cache aqui, mas só
              conseguirá ler offline pelo PWA.
              <Link to="/instalar" className="text-primary hover:underline ml-1">
                Saiba como instalar →
              </Link>
            </p>
          </div>
        )}

        {/* Status do cache de posts */}
        <section className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" />
            Posts salvos no dispositivo
          </h2>

          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-3xl font-bold text-foreground">
                {cachedCount}
                <span className="text-base font-normal text-muted-foreground">
                  {" "}/ {totalPosts}
                </span>
              </span>
              <span className="text-sm font-medium text-primary">{percent}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {cachedCount === totalPosts
                ? "Todo o conteúdo está disponível offline. ✨"
                : `${totalPosts - cachedCount} posts ainda não baixados.`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleDownloadAll}
              disabled={downloading}
              className="gap-2 flex-1"
            >
              {downloading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : cachedCount >= totalPosts ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {downloading
                ? progress
                  ? `Baixando ${progress.done}/${progress.total}...`
                  : "Baixando..."
                : cachedCount >= totalPosts
                ? "Atualizar cache"
                : "Baixar todos os posts agora"}
            </Button>
          </div>

          {progress && downloading && (
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${progress.total > 0 ? (progress.done / progress.total) * 100 : 0}%`,
                }}
              />
            </div>
          )}
        </section>

        {/* Espaço usado */}
        {storage && (
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-primary" />
              Espaço usado
            </h2>
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-2xl font-bold text-foreground">
                  {formatBytes(storage.usage)}
                </span>
                <span className="text-sm text-muted-foreground">
                  de {formatBytes(storage.quota)} disponíveis
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.min(storagePercent, 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Inclui páginas HTML, imagens, fontes e dados em cache.
              </p>
            </div>
          </section>
        )}

        {/* Limpar cache */}
        <section className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-destructive" />
            Limpar cache offline
          </h2>
          <p className="text-sm text-muted-foreground">
            Remove todas as páginas, imagens e dados salvos no dispositivo. Você
            precisará de conexão para acessar o conteúdo até baixar novamente.
            Comentários pendentes na fila offline também serão descartados.
          </p>
          <Button
            variant="destructive"
            onClick={handleClearCache}
            disabled={clearing}
            className="gap-2"
          >
            {clearing ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
            {clearing ? "Limpando..." : "Limpar tudo"}
          </Button>
        </section>
      </div>
    </div>
  );
};

export default OfflineSettingsPage;
