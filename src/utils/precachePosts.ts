/**
 * precachePosts
 * Utilitários para pré-cache seletivo de posts no Service Worker.
 *
 * DISPONÍVEL APENAS NO APP (PWA standalone) E SOMENTE PARA USUÁRIO LOGADO.
 * Verificação feita pela OfflineSettingsPage antes de chamar qualquer função.
 *
 * Estratégia: fetch() para /post/<slug>. O SW intercepta e salva em "pages-cache".
 * Concorrência limitada para não sobrecarregar a rede do dispositivo.
 */
import { blogPosts } from "@/data/posts";

const CONCURRENCY = 3;

export interface PrecacheProgress {
  total: number;
  done: number;
  currentSlug?: string;
}

async function fetchSilent(url: string): Promise<void> {
  try {
    await fetch(url, { credentials: "same-origin", cache: "reload" });
  } catch {
    // ignore — rede instável
  }
}

async function runWithConcurrency(
  urls: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<void> {
  const total = urls.length;
  let done = 0;
  const queue = [...urls];

  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift();
      if (!url) break;
      const slug = url.replace("/post/", "");
      onProgress?.({ total, done, currentSlug: slug });
      await fetchSilent(url);
      done++;
      onProgress?.({ total, done, currentSlug: slug });
    }
  });

  await Promise.all(workers);
}

/** Baixa TODOS os posts (todas as categorias). */
export async function precacheAllPosts(
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const urls = blogPosts.map((p) => `/post/${p.slug}`);
  await runWithConcurrency(urls, onProgress);
  return { total: urls.length, done: urls.length };
}

/** Baixa posts de uma ou mais categorias específicas. */
export async function precacheByCategories(
  categories: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const catSet = new Set(categories);
  const urls = blogPosts
    .filter((p) => catSet.has(p.category))
    .map((p) => `/post/${p.slug}`);
  await runWithConcurrency(urls, onProgress);
  return { total: urls.length, done: urls.length };
}

/** Baixa slugs específicos (download individual). */
export async function precacheSlugs(
  slugs: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const urls = slugs.map((s) => `/post/${s}`);
  await runWithConcurrency(urls, onProgress);
  return { total: urls.length, done: urls.length };
}
