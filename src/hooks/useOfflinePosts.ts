/**
 * useOfflinePosts
 * Detecta quais posts já estão cacheados pelo Service Worker (cache "pages-cache")
 * e estão portanto disponíveis para leitura offline.
 *
 * Estratégia:
 *  - Lê o Cache Storage do navegador (apenas em produção, onde o SW está ativo).
 *  - Extrai os slugs das URLs cacheadas no padrão /post/<slug>.
 *  - Re-executa quando o usuário volta para a aba (visibilitychange) e a cada 30s.
 */
import { useEffect, useState, useCallback } from "react";

const CACHE_NAME = "pages-cache";

async function readCachedPostSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();
  if (typeof caches === "undefined") return slugs;
  try {
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    for (const req of requests) {
      try {
        const url = new URL(req.url);
        // Match /post/<slug> (com ou sem trailing slash / query)
        const m = url.pathname.match(/^\/post\/([^\/?#]+)\/?$/);
        if (m) slugs.add(m[1]);
      } catch {
        // ignore invalid URLs
      }
    }
  } catch {
    // Cache API indisponível (preview / privado) — silencioso
  }
  return slugs;
}

export const useOfflinePosts = () => {
  const [cachedSlugs, setCachedSlugs] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const slugs = await readCachedPostSlugs();
    setCachedSlugs(slugs);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();

    // Reavalia quando a aba volta a ficar visível
    const onVis = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVis);

    // Reavalia periodicamente (novo post pode ter sido cacheado em background)
    const interval = setInterval(refresh, 30_000);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      clearInterval(interval);
    };
  }, [refresh]);

  const isCached = useCallback((slug: string) => cachedSlugs.has(slug), [cachedSlugs]);

  return { cachedSlugs, isCached, count: cachedSlugs.size, loading, refresh };
};
