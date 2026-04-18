/**
 * useOfflinePosts — hook de estado do cache offline
 *
 * Lê o IndexedDB (offlineRegistry) como fonte canônica do que o usuário baixou.
 * O IndexedDB não expira automaticamente e persiste entre sessões/reloads/fechamentos.
 *
 * Atualiza imediatamente via evento "viciocode:cache-updated" emitido pelo
 * precachePosts após cada download.
 */
import { useEffect, useState, useCallback } from "react";
import { blogPosts } from "@/data/posts";
import {
  listDownloaded,
  unregisterDownloaded,
  clearRegistry,
  type DownloadedPage,
} from "@/utils/offlineRegistry";
import { removePage } from "@/utils/precachePosts";

export type { DownloadedPage as CachedPostInfo };

export const useOfflinePosts = () => {
  const [downloadedPages, setDownloadedPages] = useState<DownloadedPage[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const pages = await listDownloaded();
    setDownloadedPages(pages);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();

    // Atualiza quando precachePosts emite evento de cache atualizado
    const onUpdate = () => { void refresh(); };
    window.addEventListener("viciocode:cache-updated", onUpdate);
    // Atualiza quando aba volta a ficar visível (pode ter mudado em outra aba)
    const onVis = () => { if (document.visibilityState === "visible") void refresh(); };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("viciocode:cache-updated", onUpdate);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [refresh]);

  // Posts cacheados (subset de downloadedPages onde type === "post")
  const cachedPosts = downloadedPages.filter((p) => p.type === "post");
  const cachedSlugs = new Set(cachedPosts.map((p) => p.slug).filter(Boolean) as string[]);
  const isCached = useCallback((slug: string) => cachedSlugs.has(slug), [cachedSlugs]);

  const totalBytes = downloadedPages.reduce((sum, p) => sum + p.sizeBytes, 0);
  const count = cachedPosts.length;

  /** Remove um post do cache e do registro */
  const removePost = useCallback(async (slug: string) => {
    const post = blogPosts.find((p) => p.slug === slug);
    const imageUrls = post?.image ? [post.image] : [];
    await removePage(`/post/${slug}`, imageUrls);
    await refresh();
  }, [refresh]);

  /** Limpa TODO o registro e cache offline */
  const clearAll = useCallback(async () => {
    // Limpa IndexedDB
    await clearRegistry();
    // Limpa Cache API
    if (typeof caches !== "undefined") {
      try {
        const names = await caches.keys();
        await Promise.all(
          names
            .filter((n) => ["pages-cache", "images-cache"].includes(n) || n.startsWith("workbox-"))
            .map((n) => caches.delete(n))
        );
      } catch { /* ignore */ }
    }
    await refresh();
  }, [refresh]);

  return {
    downloadedPages,   // Todas as páginas baixadas (posts + estáticas)
    cachedPosts,       // Apenas os posts (artigos /post/<slug>)
    cachedSlugs,       // Set de slugs para lookup rápido
    isCached,          // (slug: string) => boolean
    count,             // Número de posts baixados
    totalBytes,        // Tamanho total estimado
    loading,
    refresh,
    removePost,
    clearAll,
  };
};
