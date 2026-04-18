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
import { blogPosts } from "@/data/posts";

const CONCURRENCY = 3;

// ── Páginas estáticas disponíveis para download offline ───────────────────────
// Adicione aqui qualquer nova página estática que queira tornar disponível.
// Posts de /post/<slug> são gerenciados AUTOMATICAMENTE via blogPosts[].
export interface StaticPage {
  path: string;       // URL da rota (ex: "/cotacoes")
  label: string;      // Exibição na UI
  category: string;   // Grupo: "finance" | "ia" | "geek" | "otaku" | "site"
  emoji: string;
}

export const STATIC_PAGES: StaticPage[] = [
  // Finanças
  { path: "/cotacoes",          label: "Cotações em Tempo Real",    category: "finance", emoji: "📈" },
  { path: "/historico-cotacoes",label: "Histórico de Cotações",     category: "finance", emoji: "📊" },
  { path: "/financas",          label: "Hub de Finanças",           category: "finance", emoji: "💰" },
  // Categorias principais
  { path: "/ia",                label: "Hub de IA",                 category: "ia",      emoji: "🤖" },
  { path: "/geek",              label: "Hub Geek",                  category: "geek",    emoji: "🎮" },
  { path: "/otaku",             label: "Hub Otaku",                 category: "otaku",   emoji: "🌸" },
  // Site
  { path: "/",                  label: "Página Inicial",            category: "site",    emoji: "🏠" },
  { path: "/sobre",             label: "Sobre o VicioCode",         category: "site",    emoji: "ℹ️"  },
  { path: "/instalar",          label: "Instalar App",              category: "site",    emoji: "📲" },
];

// ── Tipos ─────────────────────────────────────────────────────────────────────
export interface PrecacheProgress {
  total: number;
  done: number;
  currentLabel?: string;
}

// ── Internos ─────────────────────────────────────────────────────────────────

/** Dispara um evento global notificando que o cache de páginas mudou. */
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

async function runWithConcurrency(
  items: { url: string; label: string }[],
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
      await fetchSilent(item.url);
      done++;
      onProgress?.({ total, done, currentLabel: item.label });
      // Notifica UI a cada 3 itens (ou no último) para refrescar contadores em tempo real
      if (done - lastEmit >= 3 || done === total) {
        lastEmit = done;
        emitCacheUpdated();
      }
    }
  });

  await Promise.all(workers);
  emitCacheUpdated();
}

// ── API pública ────────────────────────────────────────────────────────────────

/**
 * Baixa TODOS os posts de todas as categorias.
 * Não inclui páginas estáticas (use precacheStaticPages para isso).
 */
export async function precacheAllPosts(
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const items = blogPosts.map((p) => ({ url: `/post/${p.slug}`, label: p.title }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

/**
 * Baixa posts de categorias específicas.
 * Descobre automaticamente todos os posts da categoria via blogPosts[].
 */
export async function precacheByCategories(
  categories: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const catSet = new Set(categories);
  const items = blogPosts
    .filter((p) => catSet.has(p.category))
    .map((p) => ({ url: `/post/${p.slug}`, label: p.title }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

/**
 * Baixa slugs específicos de posts individuais.
 */
export async function precacheSlugs(
  slugs: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const slugSet = new Set(slugs);
  const items = blogPosts
    .filter((p) => slugSet.has(p.slug))
    .map((p) => ({ url: `/post/${p.slug}`, label: p.title }));
  // Posts não encontrados em blogPosts (slugs diretos)
  const unknownItems = slugs
    .filter((s) => !blogPosts.find((p) => p.slug === s))
    .map((s) => ({ url: `/post/${s}`, label: s }));
  await runWithConcurrency([...items, ...unknownItems], onProgress);
  return { total: items.length + unknownItems.length, done: items.length + unknownItems.length };
}

/**
 * Baixa páginas estáticas selecionadas (de STATIC_PAGES).
 * Filtra por categoria se fornecida.
 */
export async function precacheStaticPages(
  categories?: string[],
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const pages = categories && categories.length > 0
    ? STATIC_PAGES.filter((p) => categories.includes(p.category))
    : STATIC_PAGES;
  const items = pages.map((p) => ({ url: p.path, label: p.label }));
  await runWithConcurrency(items, onProgress);
  return { total: items.length, done: items.length };
}

/**
 * Retorna todos os slugs de posts agrupados por categoria.
 * Usado pela OfflineSettingsPage para contagens sem precisar reimportar blogPosts.
 */
export function getPostsByCategory(): Record<string, typeof blogPosts> {
  const result: Record<string, typeof blogPosts> = {};
  for (const post of blogPosts) {
    if (!result[post.category]) result[post.category] = [];
    result[post.category].push(post);
  }
  return result;
}

/** Contagem total de posts por categoria. */
export function getPostCountByCategory(): Record<string, number> {
  const result: Record<string, number> = {};
  for (const post of blogPosts) {
    result[post.category] = (result[post.category] ?? 0) + 1;
  }
  return result;
}
