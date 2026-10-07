/**
 * useTopPosts — busca posts mais lidos via api.php?action=top_posts
 * Resultado em cache de sessão para evitar refetch.
 */
import { useEffect, useState } from "react";

export interface TopPost {
  slug: string;
  title: string;
  category: string;
  views: number;
}

const cache: Record<string, { ts: number; data: TopPost[] }> = {};
const TTL = 5 * 60 * 1000; // 5 min

function savedRanking(key: string) {
  try {
    const value = JSON.parse(localStorage.getItem(`vc_top_posts_${key}`) || "null");
    if (value && Number.isFinite(value.ts) && Array.isArray(value.data)
      && value.data.every((p: TopPost) => typeof p.slug === "string" && typeof p.title === "string"
        && typeof p.category === "string" && Number.isFinite(p.views) && p.views >= 0)) return value;
  } catch { /* stockage optionnel */ }
  return undefined;
}

export function useTopPosts(period: "week" | "month" | "all" = "week", limit = 5) {
  const key = `${period}:${limit}`;
  const initial = (cache[key] ?? savedRanking(key))?.data ?? [];
  const [posts, setPosts] = useState<TopPost[]>(initial);
  const [loading, setLoading] = useState(initial.length === 0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const c = cache[key] ?? savedRanking(key);
    setPosts(c?.data ?? []);
    setError(false);
    if (c && Date.now() - c.ts < TTL) {
      setPosts(c.data); setLoading(false); return;
    }
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10_000);
    (async () => {
      try {
        const res = await fetch(`/api.php?action=top_posts&period=${period}&limit=${limit}`, { signal: controller.signal });
        const ct  = res.headers.get("content-type") || "";
        if (!res.ok || !ct.includes("application/json")) throw new Error("offline");
        const json = await res.json();
        if (!Array.isArray(json.posts)) throw new Error("invalid ranking");
        const data: TopPost[] = json.posts.map((p: TopPost) => ({ ...p, views: Number(p.views) }));
        if (!data.every(p => typeof p.slug === "string" && typeof p.title === "string"
          && typeof p.category === "string" && Number.isFinite(p.views) && p.views >= 0)) throw new Error("invalid ranking");
        if (!cancelled) {
          cache[key] = { ts: Date.now(), data };
          try { localStorage.setItem(`vc_top_posts_${key}`, JSON.stringify(cache[key])); } catch { /* storage opcional */ }
          setPosts(data);
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        window.clearTimeout(timeout);
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; window.clearTimeout(timeout); controller.abort(); };
  }, [key, period, limit]);

  return { posts, loading, error, isTop: (slug: string) => posts.some(p => p.slug === slug) };
}
