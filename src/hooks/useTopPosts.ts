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

export function useTopPosts(period: "week" | "month" | "all" = "week", limit = 5) {
  const key = `${period}:${limit}`;
  const initial = cache[key]?.data ?? [];
  const [posts, setPosts] = useState<TopPost[]>(initial);
  const [loading, setLoading] = useState(initial.length === 0);

  useEffect(() => {
    const c = cache[key];
    if (c && Date.now() - c.ts < TTL) {
      setPosts(c.data); setLoading(false); return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api.php?action=top_posts&period=${period}&limit=${limit}`);
        const ct  = res.headers.get("content-type") || "";
        if (!ct.includes("application/json")) throw new Error("offline");
        const json = await res.json();
        const data: TopPost[] = Array.isArray(json.posts) ? json.posts : [];
        if (!cancelled) {
          cache[key] = { ts: Date.now(), data };
          setPosts(data);
        }
      } catch {
        if (!cancelled) setPosts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [key, period, limit]);

  return { posts, loading, isTop: (slug: string) => posts.some(p => p.slug === slug) };
}
