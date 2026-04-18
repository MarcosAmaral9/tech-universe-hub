/**
 * offlineRegistry — Registro persistente de páginas baixadas pelo usuário
 *
 * Por que IndexedDB e não só o Cache API (pages-cache)?
 *
 * O Service Worker armazena páginas no pages-cache automaticamente quando o
 * usuário navega (NetworkFirst). Isso significa que o pages-cache contém páginas
 * que o usuário VISITOU + páginas que ele ESCOLHEU baixar. Não dá para distinguir
 * os dois casos só lendo o cache.
 *
 * Além disso, o Workbox pode limpar entradas do cache por TTL ou maxEntries.
 *
 * Solução: IndexedDB como registro canônico do que o usuário escolheu.
 *  - Nunca expira automaticamente
 *  - Persiste entre sessões, reloads e fechamentos do app
 *  - Separado do cache de navegação automática
 *  - Atualizado imediatamente quando o usuário baixa/remove
 */

const DB_NAME = "viciocode-offline-registry";
const DB_VERSION = 1;
const STORE = "downloaded-pages";

export interface DownloadedPage {
  key: string;       // URL path, ex: "/post/meu-slug" ou "/cotacoes"
  label: string;     // Título legível
  type: "post" | "static";
  category: string;
  slug?: string;     // Para posts
  sizeBytes: number;
  downloadedAt: number; // timestamp
}

// ── DB ─────────────────────────────────────────────────────────────────────
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB não disponível"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "key" });
        store.createIndex("type", "type");
        store.createIndex("category", "category");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// ── API pública ────────────────────────────────────────────────────────────

/** Registra uma página como baixada */
export async function registerDownloaded(page: DownloadedPage): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(page);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/** Remove uma página do registro */
export async function unregisterDownloaded(key: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/** Lista todas as páginas registradas como baixadas */
export async function listDownloaded(): Promise<DownloadedPage[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const items: DownloadedPage[] = [];
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).openCursor();
      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) { items.push(cursor.value); cursor.continue(); }
        else resolve(items);
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    return [];
  }
}

/** Verifica se uma página específica está registrada */
export async function isDownloaded(key: string): Promise<boolean> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result !== undefined);
      req.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

/** Limpa todo o registro (chamado quando o usuário limpa o cache) */
export async function clearRegistry(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch { /* ignore */ }
}

/** Tamanho total em bytes de tudo que foi baixado */
export async function getTotalSize(): Promise<number> {
  const items = await listDownloaded();
  return items.reduce((sum, item) => sum + item.sizeBytes, 0);
}
