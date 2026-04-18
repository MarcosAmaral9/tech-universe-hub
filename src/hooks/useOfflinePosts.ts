/**
 * useOfflinePosts
 * Detecta e gerencia quais posts estão cacheados pelo Service Worker.
 *
 * Funcionalidades:
 *  - Lista posts cacheados com metadados (slug, título, categoria)
 *  - Estima tamanho individual de cada post no cache
 *  - Remove posts individuais do cache
 *  - Conta total de posts cacheados
 *  - Re-executa ao voltar foco na aba e a cada 30s
 */
import { useEffect, useState, useCallback } from "react";
import { blogPosts } from "@/data/posts";

const CACHE_NAME = "pages-cache";

const normalizePath = (value: string) => value.replace(/\/$/, "") || "/";

const normalizeSlugFromPath = (pathname: string) => {
  const match = normalizePath(pathname).match(/^\/post\/([^/?#]+)$/);
  return match?.[1] ?? null;
};

export interface CachedPostInfo {
  slug: string;
  title: string;
  category: string;
  cachedAt?: number;
  sizeBytes?: number;
}

async function estimatePostSize(slug: string): Promise<number> {
  let total = 0;
  try {
    const cache = await caches.open(CACHE_NAME);
    const req = await cache.match(`/post/${slug}`);
    if (req) {
      const blob = await req.blob();
      total += blob.size;
    }
  } catch { /* ignore */ }
  return total;
}

async function readCachedPostDetails(): Promise<CachedPostInfo[]> {
  const results: CachedPostInfo[] = [];
  if (typeof caches === "undefined") return results;
  try {
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    const seen = new Set<string>();
    for (const req of requests) {
      try {
        const url = new URL(req.url);
        const slug = normalizeSlugFromPath(url.pathname);
        if (!slug || seen.has(slug)) continue;
        const post = blogPosts.find((p) => p.slug === slug);
        if (!post) continue;
        seen.add(slug);
        // Estimate size from cached response
        let sizeBytes = 0;
        try {
          const response = await cache.match(req.url) ?? await cache.match(url.pathname);
          if (response) {
            const clone = response.clone();
            const blob = await clone.blob();
            sizeBytes = blob.size;
          }
        } catch { /* ignore */ }
        results.push({
          slug,
          title: post.title,
          category: post.category,
          sizeBytes,
        });
      } catch { /* ignore invalid URLs */ }
    }
  } catch { /* Cache API unavailable */ }
  return results;
}

async function removeCachedPost(slug: string): Promise<void> {
  if (typeof caches === "undefined") return;
  try {
    // Remove a página HTML do pages-cache
    const pageCache = await caches.open(CACHE_NAME);
    const absoluteUrl = new URL(`/post/${slug}`, window.location.origin).toString();
    await Promise.all([
      pageCache.delete(`/post/${slug}`),
      pageCache.delete(`/post/${slug}/`),
      pageCache.delete(absoluteUrl),
      pageCache.delete(`${absoluteUrl}/`),
    ]);
    // Remove a hero image do images-cache se o post tiver uma
    const post = blogPosts.find((p) => p.slug === slug);
    if (post?.image) {
      try {
        const imgCache = await caches.open("images-cache");
        const imgAbsoluteUrl = new URL(post.image, window.location.origin).toString();
        await Promise.all([
          imgCache.delete(post.image),
          imgCache.delete(imgAbsoluteUrl),
        ]);
      } catch { /* ignore — imagem pode não estar cacheada individualmente */ }
    }
  } catch { /* ignore */ }
}

export const useOfflinePosts = () => {
  const [cachedPosts, setCachedPosts] = useState<CachedPostInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const details = await readCachedPostDetails();
    setCachedPosts(details);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const onVis = () => { if (document.visibilityState === "visible") refresh(); };
    const onCacheUpdate = () => { refresh(); };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("viciocode:cache-updated", onCacheUpdate);
    window.addEventListener("online", onCacheUpdate);
    const interval = setInterval(refresh, 15_000);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("viciocode:cache-updated", onCacheUpdate);
      window.removeEventListener("online", onCacheUpdate);
      clearInterval(interval);
    };
  }, [refresh]);

  const removePost = useCallback(async (slug: string) => {
    await removeCachedPost(slug);
    await refresh();
  }, [refresh]);

  const cachedSlugs = new Set(cachedPosts.map((p) => p.slug));
  const isCached = useCallback((slug: string) => cachedSlugs.has(slug), [cachedSlugs]);

  const totalBytes = cachedPosts.reduce((sum, p) => sum + (p.sizeBytes ?? 0), 0);

  return {
    cachedPosts,
    cachedSlugs,
    isCached,
    count: cachedPosts.length,
    totalBytes,
    loading,
    refresh,
    removePost,
  };
};
