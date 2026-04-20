/**
 * OfflineSettingsPage — /configuracoes/offline
 *
 * RESTRITO: apenas no app PWA instalado + usuário logado.
 * No navegador web → redireciona para /instalar.
 * Sem login → redireciona para /entrar.
 *
 * Funcionalidades:
 *  - Status geral: posts salvos / total, espaço usado
 *  - Download por categoria (IA, Finanças, Geek, Otaku) ou todos
 *  - Download individual de posts específicos (por categoria)
 *  - Lista detalhada dos posts cacheados (título, categoria, tamanho)
 *  - Remover post individual do cache
 *  - Limpar todo o cache offline
 */
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterSW } from "virtual:pwa-register/react";
import {
  ArrowLeft, Download, HardDrive, Trash2, WifiOff,
  RefreshCw, CheckCircle2, Smartphone, Filter, X,
  ChevronDown, ChevronUp, Search, RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DynamicSEO from "@/components/DynamicSEO";
import { useAuthContext } from "@/contexts/AuthContext";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";
import {
  precacheAllPosts,
  precacheSlugs,
  precacheStaticPages,
  removePage,
  STATIC_PAGES,
  getPostCountByCategory,
  type PrecacheProgress,
} from "@/utils/precachePosts";
import { blogPosts } from "@/data/posts";
import { toast } from "sonner";

// ── Constantes ────────────────────────────────────────────────────────────────
const CACHE_NAMES = ["pages-cache", "images-cache", "fonts-cache", "php-api-cache", "external-api-cache", "supabase-cache"];
const OFFLINE_DB_NAME = "viciocode-offline";

// Cores das categorias usam tokens semânticos (--ia-color, --invest-color, --geek-color, --otaku-color)
// definidos em src/index.css — mesmas cores dos badges do site.
const CATEGORIES: {
  key: string;
  label: string;
  shortLabel: string;
  emoji: string;
  /** Tailwind classes usando tokens HSL semânticos do design system. */
  cardClass: string;
  /** Classe pré-existente para badges sólidos (mesmas cores do site). */
  badgeClass: string;
}[] = [
  {
    key: "ia",
    label: "Inteligência Artificial",
    shortLabel: "IA",
    emoji: "🤖",
    cardClass:
      "bg-[hsl(var(--ia-color)/0.08)] border-[hsl(var(--ia-color)/0.35)] hover:border-[hsl(var(--ia-color)/0.7)]",
    badgeClass: "category-ia",
  },
  {
    key: "invest",
    label: "Finanças & Investimentos",
    shortLabel: "Finanças",
    emoji: "💰",
    cardClass:
      "bg-[hsl(var(--invest-color)/0.08)] border-[hsl(var(--invest-color)/0.35)] hover:border-[hsl(var(--invest-color)/0.7)]",
    badgeClass: "category-invest",
  },
  {
    key: "geek",
    label: "Geek & Games",
    shortLabel: "Geek",
    emoji: "🎮",
    cardClass:
      "bg-[hsl(var(--geek-color)/0.08)] border-[hsl(var(--geek-color)/0.35)] hover:border-[hsl(var(--geek-color)/0.7)]",
    badgeClass: "category-geek",
  },
  {
    key: "otaku",
    label: "Otaku & Anime",
    shortLabel: "Otaku",
    emoji: "🌸",
    cardClass:
      "bg-[hsl(var(--otaku-color)/0.08)] border-[hsl(var(--otaku-color)/0.35)] hover:border-[hsl(var(--otaku-color)/0.7)]",
    badgeClass: "category-otaku",
  },
];

function formatBytes(bytes: number): string {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

// ── Componente principal ──────────────────────────────────────────────────────
const OfflineSettingsPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuthContext();
  const isStandalone = usePWAStandalone();
  const { cachedPosts, cachedSlugs, downloadedPages, count, totalBytes, loading: cacheLoading, refresh, removePost, clearAll } = useOfflinePosts();

  const totalPosts = blogPosts.length;

  // ── Estado ─────────────────────────────────────────────────────────────────
  const [storage, setStorage] = useState<{ usage: number; quota: number } | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState<PrecacheProgress | null>(null);
  const [clearing, setClearing] = useState(false);
  const [removingSlug, setRemovingSlug] = useState<string | null>(null);
  const [downloadingSlugs, setDownloadingSlugs] = useState<Set<string>>(new Set());

  // Filtros da lista detalhada
  const [listCategory, setListCategory] = useState<string>("all");
  const [listSearch, setListSearch] = useState("");
  const [listExpanded, setListExpanded] = useState(false);
  const [cachedStaticPaths, setCachedStaticPaths] = useState<Set<string>>(new Set());

  // Seleção de categorias para download
  const [selectedCats, setSelectedCats] = useState<Set<string>>(new Set());

  // ── Service Worker: verificação manual de novas versões ────────────────────
  const swRegistrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) { if (r) swRegistrationRef.current = r; },
  });

  const handleCheckForUpdates = useCallback(async () => {
    if (checkingUpdate) return;
    setCheckingUpdate(true);
    try {
      const reg = swRegistrationRef.current
        ?? (await navigator.serviceWorker?.getRegistration());
      if (reg) {
        await reg.update();
        setLastChecked(new Date());
        // Aguarda um pouco para o evento `needRefresh` propagar
        await new Promise((r) => setTimeout(r, 800));
        if (!reg.waiting && !reg.installing) {
          toast.success("Você já está na versão mais recente!", {
            description: "Nenhuma atualização encontrada.",
          });
        } else {
          toast.info("Nova versão encontrada!", {
            description: "Toque em 'Aplicar atualização' para usar.",
          });
        }
      } else {
        toast.error("Service Worker indisponível.", {
          description: "Recarregue a página e tente novamente.",
        });
      }
    } catch {
      toast.error("Erro ao verificar atualizações.");
    } finally {
      setCheckingUpdate(false);
    }
  }, [checkingUpdate]);

  const handleApplyUpdate = useCallback(() => {
    updateServiceWorker(true);
  }, [updateServiceWorker]);

  // ── Guards: só PWA + logado ───────────────────────────────────────────────
  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate("/entrar", { replace: true }); return; }
    if (!isStandalone) { navigate("/instalar", { replace: true }); }
  }, [user, authLoading, isStandalone, navigate]);

  const refreshStorage = useCallback(async () => {
    try {
      if (navigator.storage?.estimate) {
        const est = await navigator.storage.estimate();
        setStorage({ usage: est.usage ?? 0, quota: est.quota ?? 0 });
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { refreshStorage(); }, [refreshStorage]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const toggleCat = (key: string) =>
    setSelectedCats((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const countByCat = useMemo(() => getPostCountByCategory(), []);

  const cachedByCat = useMemo(
    () =>
      Object.fromEntries(
        CATEGORIES.map((c) => [
          c.key,
          cachedPosts.filter((p) => p.category === c.key).length,
        ])
      ),
    [cachedPosts]
  );

  // Lista filtrada de posts para exibição detalhada
  const filteredCached = useMemo(() => {
    let posts = cachedPosts;
    if (listCategory !== "all") posts = posts.filter((p) => p.category === listCategory);
    if (listSearch.trim()) {
      const q = listSearch.toLowerCase();
      posts = posts.filter((p) => p.title.toLowerCase().includes(q));
    }
    return posts;
  }, [cachedPosts, listCategory, listSearch]);

  // Posts não cacheados por categoria (auto-atualiza quando blogPosts cresce)
  const uncachedByCategory = useMemo(() => {
    return Object.fromEntries(
      CATEGORIES.map((c) => [
        c.key,
        blogPosts.filter((p) => p.category === c.key && !cachedSlugs.has(p.slug)),
      ])
    );
  }, [cachedSlugs]);

  // Páginas estáticas baixadas — lê do IndexedDB (fonte canônica, persiste entre sessões)
  const downloadedPaths = new Set(downloadedPages.map((p) => p.key));

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleDownloadSelected = async () => {
    if (downloading || selectedCats.size === 0) return;
    setDownloading(true);
    const cats = [...selectedCats];
    const slugsToFetch = blogPosts
      .filter((p) => cats.includes(p.category) && !cachedSlugs.has(p.slug))
      .map((p) => p.slug);
    if (slugsToFetch.length === 0) {
      toast.info("Todas as categorias selecionadas já estão salvas!");
      setDownloading(false);
      return;
    }
    setProgress({ total: slugsToFetch.length, done: 0 });
    toast.info(`Baixando ${slugsToFetch.length} posts...`, { description: cats.map((k) => CATEGORIES.find((c) => c.key === k)?.label).join(", ") });
    try {
      await precacheSlugs(slugsToFetch, setProgress);
      await refresh(); await refreshStorage();
      toast.success("Posts salvos!", { description: `${slugsToFetch.length} posts disponíveis offline.` });
      setSelectedCats(new Set());
    } catch { toast.error("Erro ao baixar. Tente novamente."); }
    finally { setDownloading(false); setTimeout(() => setProgress(null), 3000); }
  };

  const handleDownloadAll = async () => {
    if (downloading) return;
    setDownloading(true);
    setProgress({ total: totalPosts, done: 0 });
    toast.info("Baixando todos os posts...", { description: "Pode demorar alguns segundos." });
    try {
      await precacheAllPosts(setProgress);
      await refresh(); await refreshStorage();
      toast.success("Conteúdo completo salvo!", { description: `${totalPosts} posts disponíveis offline.` });
    } catch { toast.error("Erro ao baixar. Tente novamente."); }
    finally { setDownloading(false); setTimeout(() => setProgress(null), 3000); }
  };

  const handleDownloadPost = async (slug: string) => {
    setDownloadingSlugs((p) => new Set(p).add(slug));
    try {
      await precacheSlugs([slug]);
      await refresh();
      toast.success("Post salvo para leitura offline!");
    } catch { toast.error("Erro ao salvar post."); }
    finally { setDownloadingSlugs((p) => { const n = new Set(p); n.delete(slug); return n; }); }
  };

  const handleRemovePost = async (slug: string) => {
    setRemovingSlug(slug);
    try {
      await removePost(slug);
      await refreshStorage();
      toast.success("Post removido do cache offline.");
    } catch { toast.error("Erro ao remover post."); }
    finally { setRemovingSlug(null); }
  };

  const handleDownloadStaticPages = async (cats?: string[]) => {
    const toDownload = cats && cats.length > 0
      ? STATIC_PAGES.filter((p) => cats.includes(p.category) && !downloadedPaths.has(p.path))
      : STATIC_PAGES.filter((p) => !downloadedPaths.has(p.path));
    if (toDownload.length === 0) { toast.info("Páginas já salvas!"); return; }
    setDownloading(true);
    setProgress({ total: toDownload.length, done: 0 });
    try {
      await precacheStaticPages(cats, setProgress);
      // Refresh static cache state
      const cache = await caches.open("pages-cache");
      const keys = await cache.keys();
      setCachedStaticPaths(new Set(keys.map((r) => new URL(r.url).pathname)));
      toast.success(`${toDownload.length} páginas salvas!`);
    } catch { toast.error("Erro ao salvar páginas."); }
    finally { setDownloading(false); setTimeout(() => setProgress(null), 2000); }
  };

  const handleClearCache = async () => {
    if (clearing) return;
    if (!confirm("Tem certeza? Todo o conteúdo offline será removido.")) return;
    setClearing(true);
    try {
      await clearAll(); // limpa Cache API + IndexedDB registry
      await refreshStorage();
      toast.success("Cache offline limpo.");
    } catch { toast.error("Erro ao limpar cache."); }
    finally { setClearing(false); }
  };

  // ── Guard render ──────────────────────────────────────────────────────────
  if (authLoading || !user || !isStandalone) return null;

  const percent = totalPosts > 0 ? Math.round((count / totalPosts) * 100) : 0;

  return (
    <div className="min-h-[70vh] py-6 sm:py-10 px-3 sm:px-4 lg:px-6">
      <DynamicSEO />
      <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">

        {/* Voltar */}
        <Link to="/configuracoes">
          <Button variant="ghost" className="gap-2 -ml-3">
            <ArrowLeft className="h-4 w-4" />Voltar para Configurações
          </Button>
        </Link>

        {/* Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
            <WifiOff className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-orbitron">Conteúdo Offline</h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Escolha o que salvar no dispositivo para ler sem internet.
          </p>
        </div>

        {/* ── Atualizar app (verificação manual de SW) ─────────────────── */}
        <section className="rounded-2xl border border-border bg-card p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-3">
            <RotateCw className={`w-5 h-5 text-primary shrink-0 mt-0.5 ${checkingUpdate ? "animate-spin" : ""}`} />
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-base">Atualizar app</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {needRefresh
                  ? "Uma nova versão está pronta para ser aplicada."
                  : lastChecked
                    ? `Última verificação: ${lastChecked.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`
                    : "Verifica se há uma nova versão do app sem esperar a checagem automática."}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {needRefresh ? (
              <Button onClick={handleApplyUpdate} className="gap-2 flex-1" size="sm">
                <Download className="h-3.5 w-3.5" />
                Aplicar atualização
              </Button>
            ) : (
              <Button
                onClick={handleCheckForUpdates}
                disabled={checkingUpdate}
                className="gap-2 flex-1"
                size="sm"
                variant="outline"
              >
                {checkingUpdate ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <RotateCw className="h-3.5 w-3.5" />
                )}
                {checkingUpdate ? "Verificando..." : "Verificar atualizações"}
              </Button>
            )}
          </div>
        </section>

        {/* ── Status geral ─────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-border bg-card p-5 space-y-4">
          <h2 className="font-semibold flex items-center gap-2 text-base">
            <Download className="w-4 h-4 text-primary" />Posts salvos
          </h2>
          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-2xl font-bold">
                {cacheLoading ? "—" : count}
                <span className="text-sm font-normal text-muted-foreground"> / {totalPosts}</span>
              </span>
              <span className="text-sm font-semibold text-primary">{percent}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${percent}%` }} />
            </div>
            {totalBytes > 0 && (
              <p className="text-xs text-muted-foreground mt-1.5">
                ~{formatBytes(totalBytes)} em posts · {count === totalPosts ? "Tudo salvo ✨" : `${totalPosts - count} ainda não baixados`}
              </p>
            )}
          </div>
          {progress && downloading && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground gap-2">
                <span className="truncate">{progress.currentLabel ?? "Baixando..."}</span>
                <span className="shrink-0">{progress.done}/{progress.total}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary transition-all" style={{ width: `${progress.total > 0 ? (progress.done / progress.total) * 100 : 0}%` }} />
              </div>
            </div>
          )}
        </section>

        {/* ── Espaço usado ─────────────────────────────────────────────── */}
        {storage && (
          <section className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <h2 className="font-semibold flex items-center gap-2 text-base">
              <HardDrive className="w-4 h-4 text-primary" />Espaço usado
            </h2>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-xl font-bold">{formatBytes(storage.usage)}</span>
              <span className="text-xs text-muted-foreground">de {formatBytes(storage.quota)}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${Math.min((storage.usage / storage.quota) * 100, 100)}%` }} />
            </div>
            <p className="text-xs text-muted-foreground">Inclui páginas, imagens, fontes e dados em cache.</p>
          </section>
        )}

        {/* ── Download por categoria ────────────────────────────────────── */}
        <section className="rounded-2xl border border-border bg-card p-5 space-y-4">
          <div>
            <h2 className="font-semibold flex items-center gap-2 text-base mb-0.5">
              <Filter className="w-4 h-4 text-primary" />Baixar por categoria
            </h2>
            <p className="text-xs text-muted-foreground">Selecione as categorias que deseja salvar para leitura offline.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => {
              const total = countByCat[cat.key] ?? 0;
              const cached = cachedByCat[cat.key] ?? 0;
              const allSaved = total > 0 && cached >= total;
              const isSelected = selectedCats.has(cat.key);
              return (
                <button
                  key={cat.key}
                  onClick={() => !allSaved && toggleCat(cat.key)}
                  disabled={allSaved}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all
                    ${allSaved
                      ? "opacity-60 cursor-default border-border bg-muted/30"
                      : isSelected
                        ? `${cat.cardClass} ring-2 ring-offset-1 ring-offset-background`
                        : `${cat.cardClass}`}`}
                >
                  <span className="text-xl shrink-0">{cat.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">{cat.label}</div>
                    <div className="text-[10px] text-muted-foreground">
                      {allSaved ? "✅ Tudo salvo" : `${cached}/${total} salvos`}
                    </div>
                  </div>
                  {isSelected && !allSaved && (
                    <span className={`shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full ${cat.badgeClass}`}>
                      <CheckCircle2 className="h-3 w-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <Button
              onClick={handleDownloadSelected}
              disabled={downloading || selectedCats.size === 0}
              className="gap-2 flex-1"
              size="sm"
            >
              {downloading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
              {downloading ? `Baixando... ${progress ? `${progress.done}/${progress.total}` : ""}` : `Baixar selecionadas${selectedCats.size > 0 ? ` (${[...selectedCats].reduce((s, k) => s + (uncachedByCategory[k]?.length ?? 0), 0)} posts)` : ""}`}
            </Button>
            <Button
              onClick={handleDownloadAll}
              disabled={downloading || count >= totalPosts}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              {count >= totalPosts ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
              {count >= totalPosts ? "Tudo salvo" : "Baixar tudo"}
            </Button>
          </div>
        </section>

        {/* ── Páginas estáticas disponíveis para offline ───────────────── */}
        <section className="rounded-2xl border border-border bg-card p-5 space-y-4">
          <div>
            <h2 className="font-semibold flex items-center gap-2 text-base mb-0.5">
              <span>🌐</span>Páginas do site
            </h2>
            <p className="text-xs text-muted-foreground">
              Páginas fixas do VicioCode (hubs, cotações, etc).
              Novas páginas aparecem aqui automaticamente.
            </p>
          </div>
          <ul className="divide-y divide-border">
            {STATIC_PAGES.map((page) => {
              const isSaved = downloadedPaths.has(page.path);
              return (
                <li key={page.path} className="flex items-center gap-3 py-2.5">
                  <span className="text-base shrink-0">{page.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium line-clamp-1">{page.label}</p>
                    <p className="text-[10px] text-muted-foreground">{page.path}</p>
                  </div>
                  {isSaved ? (
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  ) : (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 shrink-0"
                      disabled={downloading}
                      onClick={() => handleDownloadStaticPages([page.category])}
                      title="Salvar offline"
                    >
                      <Download className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
          <Button
            onClick={() => handleDownloadStaticPages()}
            disabled={downloading || STATIC_PAGES.every((p) => downloadedPaths.has(p.path))}
            variant="outline"
            size="sm"
            className="gap-2 w-full"
          >
            <Download className="h-3.5 w-3.5" />
            {STATIC_PAGES.every((p) => downloadedPaths.has(p.path))
              ? "Todas as páginas salvas ✅"
              : "Salvar todas as páginas"}
          </Button>
        </section>

        {/* ── Download posts individuais ────────────────────────────────── */}
        {CATEGORIES.map((cat) => {
          const uncached = uncachedByCategory[cat.key] ?? [];
          if (uncached.length === 0) return null;
          return (
            <section
              key={cat.key}
              className={`rounded-2xl border p-4 sm:p-5 space-y-3 ${cat.cardClass}`}
            >
              <h2 className="font-semibold flex items-center gap-2 text-sm flex-wrap">
                <span className="text-base">{cat.emoji}</span>
                <span className="truncate">{cat.label}</span>
                <span className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${cat.badgeClass}`}>
                  {uncached.length} não salvos
                </span>
              </h2>
              <ul className="divide-y divide-border">
                {uncached.slice(0, 5).map((post) => (
                  <li key={post.slug} className="flex items-center gap-3 py-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium line-clamp-1">{post.title}</p>
                      <p className="text-[10px] text-muted-foreground">{post.readTime}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 shrink-0"
                      disabled={downloadingSlugs.has(post.slug)}
                      onClick={() => handleDownloadPost(post.slug)}
                      title="Salvar offline"
                    >
                      {downloadingSlugs.has(post.slug)
                        ? <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                        : <Download className="h-3.5 w-3.5" />}
                    </Button>
                  </li>
                ))}
                {uncached.length > 5 && (
                  <li className="pt-2">
                    <p className="text-[10px] text-muted-foreground text-center">
                      +{uncached.length - 5} posts · use "Baixar selecionadas" acima para salvar todos
                    </p>
                  </li>
                )}
              </ul>
            </section>
          );
        })}

        {/* ── Posts cacheados (lista detalhada) ─────────────────────────── */}
        {count > 0 && (
          <section className="rounded-2xl border border-border bg-card p-5 space-y-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setListExpanded((v) => !v)}
            >
              <h2 className="font-semibold flex items-center gap-2 text-base">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Posts salvos ({count})
              </h2>
              {listExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </button>

            {listExpanded && (
              <div className="space-y-3">
                {/* Filtros */}
                <div className="flex gap-2 flex-wrap">
                  <div className="relative flex-1 min-w-[160px]">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                      placeholder="Buscar no cache..."
                      value={listSearch}
                      onChange={(e) => setListSearch(e.target.value)}
                      className="pl-8 h-8 text-xs"
                    />
                    {listSearch && (
                      <button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setListSearch("")}>
                        <X className="h-3.5 w-3.5 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    <button
                      onClick={() => setListCategory("all")}
                      className={`text-[10px] px-2 py-1 rounded-md border transition-colors ${listCategory === "all" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"}`}
                    >
                      Todos
                    </button>
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.key}
                        onClick={() => setListCategory(listCategory === c.key ? "all" : c.key)}
                        className={`text-[10px] px-2 py-1 rounded-md border transition-colors ${
                          listCategory === c.key
                            ? `${c.badgeClass} border-transparent`
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {c.emoji} {c.shortLabel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lista */}
                <ul className="divide-y divide-border max-h-96 overflow-y-auto">
                  {filteredCached.length === 0 ? (
                    <li className="py-6 text-center text-xs text-muted-foreground">Nenhum post encontrado com esses filtros.</li>
                  ) : (
                    filteredCached.map((post) => {
                      const cat = CATEGORIES.find((c) => c.key === post.category);
                      return (
                        <li key={post.slug} className="flex items-center gap-3 py-2.5">
                          <span className="text-base shrink-0">{cat?.emoji ?? "📄"}</span>
                          <div className="flex-1 min-w-0">
                            <Link to={`/post/${post.slug}`} className="text-xs font-medium line-clamp-1 hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                              {cat && (
                                <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold ${cat.badgeClass}`}>
                                  {cat.shortLabel}
                                </span>
                              )}
                              {post.sizeBytes && post.sizeBytes > 0 && (
                                <span className="text-[10px] text-muted-foreground">~{formatBytes(post.sizeBytes)}</span>
                              )}
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                            disabled={removingSlug === post.slug}
                            onClick={() => handleRemovePost(post.slug)}
                            title="Remover do cache"
                          >
                            {removingSlug === post.slug
                              ? <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                              : <Trash2 className="h-3.5 w-3.5" />}
                          </Button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* ── Limpar tudo ────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 space-y-3">
          <h2 className="font-semibold flex items-center gap-2 text-base">
            <Trash2 className="w-4 h-4 text-destructive" />Limpar cache offline
          </h2>
          <p className="text-xs text-muted-foreground">
            Remove todas as páginas, imagens e dados offline. Comentários pendentes também serão descartados.
          </p>
          <Button variant="destructive" onClick={handleClearCache} disabled={clearing} className="gap-2" size="sm">
            {clearing ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
            {clearing ? "Limpando..." : "Limpar tudo"}
          </Button>
        </section>

      </div>
    </div>
  );
};

export default OfflineSettingsPage;
