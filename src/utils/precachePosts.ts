/**
 * precachePosts — motor de pré-cache seletivo do VicioCode PWA
 *
 * ═══════════════════════════════════════════════════════════════
 * COMO ADICIONAR NOVAS PÁGINAS AO SISTEMA OFFLINE
 * ═══════════════════════════════════════════════════════════════
 *
 * POSTS (artigos em /post/<slug>):
 *   → Adicione apenas em src/data/posts.ts.
 *   → O sistema descobre automaticamente via blogPosts[].
 *   → Nenhuma alteração necessária neste arquivo.
 *
 * PÁGINAS ESTÁTICAS (hubs, cotações, etc.):
 *   → Adicione um item ao array STATIC_PAGES abaixo.
 *   → O restante do sistema descobre automaticamente.
 *
 * ═══════════════════════════════════════════════════════════════
 * ARQUITETURA DE PERSISTÊNCIA
 * ═══════════════════════════════════════════════════════════════
 *
 * Dupla fonte da verdade:
 *
 * 1. Cache API (pages-cache / images-cache)
 *    → Serve as páginas offline quando o usuário navega sem internet
 *    → Gerenciado pelo Service Worker (NetworkFirst para HTML)
 *    → TTL: 365 dias, maxEntries: 300 páginas + 500 imagens
 *
 * 2. IndexedDB (offlineRegistry)
 *    → Registro canônico do que o USUÁRIO escolheu baixar
 *    → Nunca expira automaticamente
 *    → Persiste entre sessões, reloads, fechamentos
 *    → Fonte de verdade para a UI (/configuracoes/offline)
 *
 * Fluxo de download:
 *   1. fetch(url) → SW intercepta → armazena em pages-cache
 *   2. Mede o tamanho da entrada no cache
 *   3. Registra em IndexedDB (persistência garantida)
 *   4. Emite evento → UI atualiza contagem/tamanho instantaneamente
 *
 * ═══════════════════════════════════════════════════════════════
 */
import heroCotacoes from "@/assets/cotacoes-tempo-real.webp";
import heroHistorico from "@/assets/historico-cotacoes.webp";
import crimsonDesertHeroImg from "@/assets/crimson-desert-hero.webp";
import avatarPortalBannerImg from "@/assets/avatar-portal-banner.webp";
import acPortalImg from "@/assets/assassins-creed-portal.webp";
import tensuraPortalImg from "@/assets/tensura-portal-banner.webp";
import overlordPortalImg from "@/assets/overlord-portal-banner.webp";
import { blogPosts } from "@/data/posts";
import {
  registerDownloaded,
  unregisterDownloaded,
  type DownloadedPage,
} from "./offlineRegistry";

const CONCURRENCY = 3;
const PAGE_CACHE  = "pages-cache";
const IMAGE_CACHE = "images-cache";

// ── Páginas estáticas ─────────────────────────────────────────────────────────
export interface StaticPage {
  path: string;
  label: string;
  category: string;
  emoji: string;
  assetUrls?: string[];
}

const imagesByCategory = {
  ia:      blogPosts.filter((p) => p.category === "ia").map((p) => p.image).filter(Boolean) as string[],
  finance: [heroCotacoes, heroHistorico, ...blogPosts.filter((p) => p.category === "invest").map((p) => p.image).filter(Boolean) as string[]],
  geek:    [crimsonDesertHeroImg, avatarPortalBannerImg, acPortalImg, ...blogPosts.filter((p) => p.category === "geek").map((p) => p.image).filter(Boolean) as string[]],
  otaku:   [tensuraPortalImg, overlordPortalImg, ...blogPosts.filter((p) => p.category === "otaku").map((p) => p.image).filter(Boolean) as string[]],
};

export const STATIC_PAGES: StaticPage[] = [
  { path: "/cotacoes",           label: "Cotações em Tempo Real",   category: "finance", emoji: "📈", assetUrls: [heroCotacoes] },
  { path: "/historico-cotacoes", label: "Histórico de Cotações",    category: "finance", emoji: "📊", assetUrls: [heroHistorico] },
  { path: "/financas",           label: "Hub de Finanças",          category: "finance", emoji: "💰", assetUrls: imagesByCategory.finance },
  { path: "/ia",                 label: "Hub de IA",                category: "ia",      emoji: "🤖", assetUrls: imagesByCategory.ia },
  { path: "/geek",               label: "Hub Geek",                 category: "geek",    emoji: "🎮", assetUrls: imagesByCategory.geek },
  { path: "/otaku",              label: "Hub Otaku",                category: "otaku",   emoji: "🌸", assetUrls: imagesByCategory.otaku },
  { path: "/",                   label: "Página Inicial",           category: "site",    emoji: "🏠" },
  { path: "/arquivo",            label: "Arquivo do Blog",          category: "site",    emoji: "🗂️" },
  { path: "/sobre",              label: "Sobre o VicioCode",        category: "site",    emoji: "ℹ️"  },
  { path: "/instalar",           label: "Instalar App",             category: "site",    emoji: "📲" },
];

export interface PrecacheProgress {
  total: number;
  done: number;
  currentLabel?: string;
}

// ── Helpers internos ──────────────────────────────────────────────────────────

function notify() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("viciocode:cache-updated"));
}

function toAbsolute(url: string): string {
  try { return new URL(url, window.location.origin).toString(); }
  catch { return url; }
}

/**
 * Baixa uma URL garantindo que entre no Cache API E no IndexedDB.
 * Retorna o tamanho em bytes da resposta cacheada.
 */
async function downloadAndCache(
  cacheName: string,
  url: string
): Promise<number> {
  const absUrl = toAbsolute(url);

  // 1. Faz o fetch — o SW intercede e armazena em pages-cache via NetworkFirst
  //    Usamos "reload" para forçar re-download da rede (não servir do cache SW)
  //    porque queremos garantir que a versão mais recente foi salva
  const response = await fetch(absUrl, {
    credentials: "same-origin",
    cache: "reload", // força download da rede
  });

  if (!response.ok && response.status !== 0) {
    throw new Error(`HTTP ${response.status} ao baixar ${url}`);
  }

  // 2. Armazena manualmente no cache correto com a chave canônica
  //    Isso garante que a entrada existe independente do SW ter interceptado
  try {
    const cache = await caches.open(cacheName);
    // Guarda tanto a URL absoluta quanto o path relativo para compatibilidade
    const responseToStore = response.clone();
    await cache.put(absUrl, responseToStore);
    // Mede tamanho
    const sizeResponse = await cache.match(absUrl);
    if (sizeResponse) {
      const blob = await sizeResponse.clone().blob();
      return blob.size;
    }
  } catch { /* Cache API pode estar indisponível em alguns contextos */ }

  return 0;
}

async function downloadPage(url: string, assetUrls: string[] = []): Promise<number> {
  let totalBytes = 0;
  // Baixa o HTML
  totalBytes += await downloadAndCache(PAGE_CACHE, url);
  // Baixa assets (imagens hero)
  await Promise.all(
    assetUrls.map(async (asset) => {
      try { totalBytes += await downloadAndCache(IMAGE_CACHE, asset); }
      catch { /* asset não crítico */ }
    })
  );
  return totalBytes;
}

async function runQueue(
  items: { url: string; label: string; type: "post" | "static"; category: string; slug?: string; assetUrls?: string[] }[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<void> {
  const total = items.length;
  let done = 0;
  const queue = [...items];

  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;

      onProgress?.({ total, done, currentLabel: item.label });

      try {
        const sizeBytes = await downloadPage(item.url, item.assetUrls ?? []);

        // Registra no IndexedDB — fonte de verdade persistente
        const record: DownloadedPage = {
          key: item.url,
          label: item.label,
          type: item.type,
          category: item.category,
          slug: item.slug,
          sizeBytes,
          downloadedAt: Date.now(),
        };
        await registerDownloaded(record);
      } catch {
        // Falha silenciosa — usuário pode estar offline ou rede instável
      }

      done++;
      onProgress?.({ total, done, currentLabel: item.label });
      notify(); // UI atualiza imediatamente após cada página
    }
  });

  await Promise.all(workers);
  notify();
}

// ── API pública ────────────────────────────────────────────────────────────────

export async function precacheAllPosts(onProgress?: (p: PrecacheProgress) => void): Promise<PrecacheProgress> {
  const items = blogPosts.map((p) => ({
    url: `/post/${p.slug}`, label: p.title,
    type: "post" as const, category: p.category, slug: p.slug,
    assetUrls: p.image ? [p.image] : [],
  }));
  await runQueue(items, onProgress);
  return { total: items.length, done: items.length };
}

export async function precacheByCategories(categories: string[], onProgress?: (p: PrecacheProgress) => void): Promise<PrecacheProgress> {
  const catSet = new Set(categories);
  const items = blogPosts
    .filter((p) => catSet.has(p.category))
    .map((p) => ({
      url: `/post/${p.slug}`, label: p.title,
      type: "post" as const, category: p.category, slug: p.slug,
      assetUrls: p.image ? [p.image] : [],
    }));
  await runQueue(items, onProgress);
  return { total: items.length, done: items.length };
}

export async function precacheSlugs(slugs: string[], onProgress?: (p: PrecacheProgress) => void): Promise<PrecacheProgress> {
  const slugSet = new Set(slugs);
  const items = blogPosts
    .filter((p) => slugSet.has(p.slug))
    .map((p) => ({
      url: `/post/${p.slug}`, label: p.title,
      type: "post" as const, category: p.category, slug: p.slug,
      assetUrls: p.image ? [p.image] : [],
    }));
  // Slugs desconhecidos (não estão em blogPosts)
  const unknown = slugs
    .filter((s) => !blogPosts.find((p) => p.slug === s))
    .map((s) => ({ url: `/post/${s}`, label: s, type: "post" as const, category: "unknown", slug: s }));
  await runQueue([...items, ...unknown], onProgress);
  return { total: items.length + unknown.length, done: items.length + unknown.length };
}

export async function precacheStaticPages(categories?: string[], onProgress?: (p: PrecacheProgress) => void): Promise<PrecacheProgress> {
  const pages = categories?.length ? STATIC_PAGES.filter((p) => categories.includes(p.category)) : STATIC_PAGES;
  const items = pages.map((p) => ({
    url: p.path, label: p.label,
    type: "static" as const, category: p.category,
    assetUrls: p.assetUrls ?? [],
  }));
  await runQueue(items, onProgress);
  return { total: items.length, done: items.length };
}

/** Remove uma página do Cache API e do IndexedDB */
export async function removePage(key: string, imageUrls?: string[]): Promise<void> {
  // Remove do Cache API
  if (typeof caches !== "undefined") {
    try {
      const absUrl = toAbsolute(key);
      const pageCache = await caches.open(PAGE_CACHE);
      await Promise.all([
        pageCache.delete(key),
        pageCache.delete(`${key}/`),
        pageCache.delete(absUrl),
        pageCache.delete(`${absUrl}/`),
      ]);
    } catch { /* ignore */ }
    // Remove imagens associadas
    if (imageUrls?.length) {
      try {
        const imgCache = await caches.open(IMAGE_CACHE);
        await Promise.all(imageUrls.flatMap((img) => [
          imgCache.delete(img),
          imgCache.delete(toAbsolute(img)),
        ]));
      } catch { /* ignore */ }
    }
  }
  // Remove do IndexedDB
  await unregisterDownloaded(key);
  notify();
}

export function getPostCountByCategory(): Record<string, number> {
  const result: Record<string, number> = {};
  for (const p of blogPosts) result[p.category] = (result[p.category] ?? 0) + 1;
  return result;
}

export function getPostsByCategory(): Record<string, typeof blogPosts> {
  const result: Record<string, typeof blogPosts> = {};
  for (const p of blogPosts) {
    if (!result[p.category]) result[p.category] = [];
    result[p.category].push(p);
  }
  return result;
}
