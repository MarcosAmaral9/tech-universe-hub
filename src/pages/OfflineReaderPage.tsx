/**
 * OfflineReaderPage — Tela de leitura offline do PWA
 * Exibida automaticamente quando o app é aberto sem internet.
 * Mostra artigos baixados (IndexedDB) + verificação real no Cache API.
 * Atualiza em tempo real via hook useOfflinePosts.
 */
import { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  WifiOff, BookOpen, Search, RefreshCw, Clock, ChevronRight, Tag, AlertTriangle, Trash2,
} from "lucide-react";
import { blogPosts } from "@/data/posts";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";
import { isPageCached } from "@/utils/precachePosts";

interface DownloadedPost {
  slug: string;
  title: string;
  category: string;
  downloadedAt: number;
}

const CAT_LABELS: Record<string, string> = {
  ia: "🤖 IA", geek: "🎮 Geek", otaku: "🌸 Otaku", invest: "💰 Finanças",
};

const OfflineReaderPage = () => {
  const navigate = useNavigate();
  const { cachedPosts, loading, refresh, removePost } = useOfflinePosts();
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [readySlugs, setReadySlugs] = useState<Set<string> | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);

  // Re-check connectivity
  useEffect(() => {
    const on  = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online",  on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);

  // Enriquecimento com os metadados dos posts
  const downloaded = useMemo<DownloadedPost[]>(() => {
    return cachedPosts
      .map((r) => {
        if (!r.slug) return null;
        const post = blogPosts.find((p) => p.slug === r.slug);
        if (!post) return null;
        return {
          slug: r.slug,
          title: post.title,
          category: post.category,
          downloadedAt: r.downloadedAt ?? Date.now(),
        };
      })
      .filter(Boolean)
      .sort((a, b) => b!.downloadedAt - a!.downloadedAt) as DownloadedPost[];
  }, [cachedPosts]);

  // Confere no Cache API quais artigos realmente abrem offline
  const verify = useCallback(async () => {
    const entries = await Promise.all(
      downloaded.map(async (p) => [p.slug, await isPageCached(`/post/${p.slug}`)] as const)
    );
    setReadySlugs(new Set(entries.filter(([, ok]) => ok).map(([slug]) => slug)));
  }, [downloaded]);

  useEffect(() => { void verify(); }, [verify]);

  const isReady = (slug: string) => readySlugs === null || readySlugs.has(slug);

  const categories = useMemo(
    () => [...new Set(downloaded.map(p => p.category))],
    [downloaded]
  );

  const filtered = useMemo(() => {
    let list = downloaded;
    if (category) list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }
    return list;
  }, [downloaded, category, search]);

  const timeAgo = (ts: number) => {
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 60)  return `${mins}min atrás`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)   return `${hrs}h atrás`;
    return `${Math.floor(hrs / 24)}d atrás`;
  };

  const handleRemove = async (slug: string) => {
    setRemoving(slug);
    try { await removePost(slug); await verify(); }
    finally { setRemoving(null); }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WifiOff className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-sm">Leitura Offline</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isOnline ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
            {isOnline ? "Online" : "Sem internet"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => { void refresh(); void verify(); }}
            className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
            title="Atualizar lista">
            <RefreshCw className="h-3 w-3" /> Atualizar
          </button>
          {isOnline && (
            <button onClick={() => navigate(-1)}
              className="text-xs text-primary hover:underline">
              Voltar ao site
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 container max-w-2xl mx-auto px-4 py-6">

        {/* Search */}
        {downloaded.length > 3 && (
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Buscar artigos baixados..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        {/* Category filter */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-5">
            <button onClick={() => setCategory(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${!category ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}`}>
              Todos ({downloaded.length})
            </button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat === category ? null : cat)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${category === cat ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}`}>
                <Tag className="h-3 w-3" />
                {CAT_LABELS[cat] ?? cat}
                <span className="opacity-60">({downloaded.filter(p => p.category === cat).length})</span>
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
            <RefreshCw className="h-8 w-8 animate-spin opacity-40" />
            <p className="text-sm">Carregando artigos...</p>
          </div>

        ) : downloaded.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-muted">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Nenhum artigo baixado</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                O app instala apenas o essencial. Quando estiver online, escolha
                em <strong>Configurações → Offline</strong> quais artigos quer
                baixar para ler sem internet.
              </p>
            </div>
            {isOnline ? (
              <>
                <Link to="/configuracoes/offline"
                  className="mt-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90">
                  Baixar artigos agora
                </Link>
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                  {Object.entries(CAT_LABELS).map(([key, label]) => (
                    <Link key={key} to={`/configuracoes/offline?categoria=${key}`}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-xs text-muted-foreground">
                Conecte-se à internet para baixar artigos.
              </p>
            )}
          </div>


        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">Nenhum resultado para "<strong>{search}</strong>"</p>
            <button onClick={() => { setSearch(""); setCategory(null); }}
              className="mt-3 text-xs text-primary hover:underline">Limpar filtros</button>
          </div>

        ) : (
          <>
            <p className="text-xs text-muted-foreground mb-3">
              {filtered.length} artigo{filtered.length !== 1 ? "s" : ""} disponível{filtered.length !== 1 ? "is" : ""} offline
            </p>
            <div className="space-y-2">
              {filtered.map(post => {
                const ready = isReady(post.slug);
                return (
                  <div key={post.slug}
                    className="flex items-center gap-2 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group">
                    <Link to={`/post/${post.slug}`} className="flex-1 min-w-0 flex items-center gap-3 p-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-primary mb-1">
                          {CAT_LABELS[post.category] ?? post.category}
                        </p>
                        <p className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </p>
                        {ready ? (
                          <p className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
                            <Clock className="h-3 w-3" /> Baixado {timeAgo(post.downloadedAt)}
                          </p>
                        ) : (
                          <p className="flex items-center gap-1 text-xs text-amber-500 mt-1.5">
                            <AlertTriangle className="h-3 w-3" /> Download incompleto — baixe novamente quando estiver online
                          </p>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                    </Link>
                    <button
                      onClick={() => void handleRemove(post.slug)}
                      disabled={removing === post.slug}
                      title="Remover do offline"
                      className="p-3 text-muted-foreground hover:text-destructive transition-colors">
                      {removing === post.slug
                        ? <RefreshCw className="h-4 w-4 animate-spin" />
                        : <Trash2 className="h-4 w-4" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OfflineReaderPage;
