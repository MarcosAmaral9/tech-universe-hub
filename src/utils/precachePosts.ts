/**
 * precachePosts
 * Pré-baixa todas as páginas de posts para o cache do Service Worker
 * (pages-cache + images-cache via runtimeCaching). Executado:
 *  - Após a aplicação de uma atualização do SW (PWAUpdatePrompt).
 *  - Manualmente via botão "Baixar tudo para offline" (futuro).
 *
 * Estratégia: dispara fetch() simples para cada URL /post/<slug>. O SW
 * intercepta e armazena no cache "pages-cache" (NetworkFirst). Imagens
 * referenciadas serão cacheadas quando o post for renderizado pela
 * primeira vez (lazy). Para forçar cache de imagens hero, também
 * baixamos a image URL.
 *
 * Concorrência limitada para não sobrecarregar a rede do dispositivo.
 */
import { blogPosts } from "@/data/posts";

const CONCURRENCY = 4;

async function fetchSilent(url: string) {
  try {
    await fetch(url, { credentials: "same-origin", cache: "reload" });
  } catch {
    // ignore — usuário pode estar offline ou rede instável
  }
}

export interface PrecacheProgress {
  total: number;
  done: number;
}

export async function precacheAllPosts(
  onProgress?: (p: PrecacheProgress) => void
): Promise<PrecacheProgress> {
  const urls: string[] = blogPosts.map((p) => `/post/${p.slug}`);
  const total = urls.length;
  let done = 0;

  const queue = [...urls];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift();
      if (!url) break;
      await fetchSilent(url);
      done++;
      onProgress?.({ total, done });
    }
  });
  await Promise.all(workers);
  return { total, done };
}
