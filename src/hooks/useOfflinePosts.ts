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
const IMAGES_CACHE = "images-cache";

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
    for (const req of requests) {
      try {
        const url = new URL(req.url);
        const m = url.pathname.match(/^\/post\/([^\/?#]+)\/?$/);
        if (!m) continue;
        const slug = m[1];
        const post = blogPosts.find((p) => p.slug === slug);
        if (!post) continue;
        // Estimate size from cached response
        let sizeBytes = 0;
        try {
          const response = await cache.match(req);
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
    const cache = await caches.open(CACHE_NAME);
    await cache.delete(`/post/${slug}`);
    await cache.delete(`/post/${slug}/`);
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
    document.addEventListener("visibilitychange", onVis);
    const interval = setInterval(refresh, 30_000);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
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
