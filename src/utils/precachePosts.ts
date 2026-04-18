/**
 * precachePosts — motor de pré-cache seletivo do VicioCode PWA
 *
 * ═══════════════════════════════════════════════════════════════
 * COMO ADICIONAR NOVAS PÁGINAS AO SISTEMA OFFLINE
 * ═══════════════════════════════════════════════════════════════
 *
 * POSTS (artigos em /post/<slug>):
 *   → Adicione apenas em src/data/posts.ts com os campos obrigatórios.
 *   → O sistema de cache descobre automaticamente via blogPosts[].
 *   → Nenhuma alteração necessária neste arquivo.
 *
 * PÁGINAS ESTÁTICAS (rotas fixas como /cotacoes, /financas, etc.):
 *   → Adicione a rota no array STATIC_PAGES abaixo.
 *   → Use o campo label para exibição amigável na UI.
 *   → Use category para agrupar nas configurações offline.
 *   → O restante do sistema descobre automaticamente.
 *
 * ═══════════════════════════════════════════════════════════════
 * ACESSO: exclusivo para PWA instalado + usuário logado.
 * Verificação feita pela OfflineSettingsPage.
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

const CONCURRENCY = 3;
const PAGE_CACHE = "pages-cache";
const IMAGE_CACHE = "images-cache";

const imagesByCategory = {
  ia: blogPosts.filter((post) => post.category === "ia").map((post) => post.image),
  finance: [
    heroCotacoes,
    heroHistorico,
    ...blogPosts.filter((post) => post.category === "invest").map((post) => post.image),
  ],
  geek: [
    crimsonDesertHeroImg,
    avatarPortalBannerImg,
    acPortalImg,
    ...blogPosts.filter((post) => post.category === "geek").map((post) => post.image),
  ],
  otaku: [
    tensuraPortalImg,
    overlordPortalImg,
    ...blogPosts.filter((post) => post.category === "otaku").map((post) => post.image),
  ],
};

// ── Páginas estáticas disponíveis para download offline ───────────────────────
// Adicione aqui qualquer nova página estática que queira tornar disponível.
// Posts de /post/<slug> são gerenciados AUTOMATICAMENTE via blogPosts[].
export interface StaticPage {
  path: string;
  label: string;
  category: string;
  emoji: string;
  assetUrls?: string[];
}

export const STATIC_PAGES: StaticPage[] = [
  { path: "/cotacoes", label: "Cotações em Tempo Real", category: "finance", emoji: "📈", assetUrls: [heroCotacoes] },
  { path: "/historico-cotacoes", label: "Histórico de Cotações", category: "finance", emoji: "📊", assetUrls: [heroHistorico] },
  { path: "/financas", label: "Hub de Finanças", category: "finance", emoji: "💰", assetUrls: imagesByCategory.finance },
  { path: "/ia", label: "Hub de IA", category: "ia", emoji: "🤖", assetUrls: imagesByCategory.ia },
  { path: "/geek", label: "Hub Geek", category: "geek", emoji: "🎮", assetUrls: imagesByCategory.geek },
  { path: "/otaku", label: "Hub Otaku", category: "otaku", emoji: "🌸", assetUrls: imagesByCategory.otaku },
  { path: "/", label: "Página Inicial", category: "site", emoji: "🏠" },
  { path: "/sobre", label: "Sobre o VicioCode", category: "site", emoji: "ℹ️" },
  { path: "/instalar", label: "Instalar App", category: "site", emoji: "📲" },
];

export interface PrecacheProgress {
  total: number;
  done: number;
  currentLabel?: string;
}

function emitCacheUpdated() {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent("viciocode:cache-updated"));
  } catch {
    /* ignore */
  }
}

async function fetchSilent(url: string): Promise<void> {
  try {
    await fetch(url, { credentials: "same-origin", cache: "reload" });
  } catch {
    /* rede instável — silencioso */
  }
}

function toAbsoluteUrl(url: string): string {
  return new URL(url, window.location.origin).toString();
}

async function cacheResponse(cacheName: string, url: string): Promise<void> {
  const requestUrl = toAbsoluteUrl(url);
  const response = await fetch(requestUrl, {
    credentials: "same-origin",
    cache: "reload",
  });

  if (!response.ok) {
    throw new Error(`Erro ao cachear ${url}`);
  }

  const cache = await caches.open(cacheName);
  await cache.put(requestUrl, response.clone());
}

async function cachePageWithAssets(url: string, assetUrls: string[] = []): Promise<void> {
  await cacheResponse(PAGE_CACHE, url);

  if (assetUrls.length === 0) return;

  await Promise.all(
    assetUrls.map(async (assetUrl) => {
      try {
        await cacheResponse(IMAGE_CACHE, assetUrl);
      } catch {
        await fetchSilent(assetUrl);
      }
    })
  );
}

async function runWithConcurrency(
  items: { url: string; label: string; assetUrls?: string[] }[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<void> {
  const total = items.length;
  let done = 0;
  const queue = [...items];
  let lastEmit = 0;

  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;

      onProgress?.({ total, done, currentLabel: item.label });

      try {
        await cachePageWithAssets(item.url, item.assetUrls);
      } catch {
        await fetchSilent(item.url);
      }

      done++;
      onProgress?.({ total, done, currentLabel: item.label });

      if (done - lastEmit >= 3 || done === total) {
        lastEmit = done;
        emitCacheUpdated();
      }
    }
  });

  await Promise.all(workers);
  emitCacheUpdated();
}

export async function precacheAllPosts(
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const items = blogPosts.map((post) => ({
    url: `/post/${post.slug}`,
    label: post.title,
    assetUrls: post.image ? [post.image] : [],
  }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

export async function precacheByCategories(
  categories: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const catSet = new Set(categories);
  const items = blogPosts
    .filter((post) => catSet.has(post.category))
    .map((post) => ({
      url: `/post/${post.slug}`,
      label: post.title,
      assetUrls: post.image ? [post.image] : [],
    }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

export async function precacheSlugs(
  slugs: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const slugSet = new Set(slugs);
  const items = blogPosts
    .filter((post) => slugSet.has(post.slug))
    .map((post) => ({
      url: `/post/${post.slug}`,
      label: post.title,
      assetUrls: post.image ? [post.image] : [],
    }));
  const unknownItems = slugs
    .filter((slug) => !blogPosts.find((post) => post.slug === slug))
    .map((slug) => ({ url: `/post/${slug}`, label: slug }));
  await runWithConcurrency([...items, ...unknownItems], onProgress);
  return { total: items.length + unknownItems.length, done: items.length + unknownItems.length };
}

export async function precacheStaticPages(
  categories?: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const pages = categories && categories.length > 0
    ? STATIC_PAGES.filter((page) => categories.includes(page.category))
    : STATIC_PAGES;
  const items = pages.map((page) => ({
    url: page.path,
    label: page.label,
    assetUrls: page.assetUrls ?? [],
  }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

export function getPostsByCategory(): Record<string, typeof blogPosts> {
  const result: Record<string, typeof blogPosts> = {};
  for (const post of blogPosts) {
    if (!result[post.category]) result[post.category] = [];
    result[post.category].push(post);
  }
  return result;
}

export function getPostCountByCategory(): Record<string, number> {
  const result: Record<string, number> = {};
  for (const post of blogPosts) {
    result[post.category] = (result[post.category] ?? 0) + 1;
  }
  return result;
}
