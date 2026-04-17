/**
 * offlineCommentQueue
 * Fila persistente em IndexedDB para comentários enviados offline.
 *
 * Fluxo:
 *  1. Usuário envia comentário sem conexão → enqueue() salva no IndexedDB.
 *  2. Quando o navegador volta online (evento 'online') ou ao carregar a app,
 *     flushQueue() tenta reenviar cada item para /api.php.
 *  3. Itens enviados com sucesso são removidos. Falhas mantêm na fila para
 *     próxima tentativa (backoff exponencial simples controlado por attempts).
 *
 * Esta abordagem JS-only funciona em qualquer navegador e não depende da API
 * Background Sync (que tem suporte limitado em iOS). O Service Worker continua
 * cuidando do cache de páginas/imagens; aqui tratamos apenas POSTs de comentários.
 */

const DB_NAME = "viciocode-offline";
const DB_VERSION = 1;
const STORE = "pending-comments";
const API_BASE = "/api.php";

export interface PendingComment {
  id: string;
  post_id: string;
  user_id: string;
  author_name: string;
  content: string;
  created_at: number;
  attempts: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB indisponível"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore<T>(
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T> | void
): Promise<T | void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const store = tx.objectStore(STORE);
    const req = fn(store);
    tx.oncomplete = () => resolve(req && "result" in req ? (req.result as T) : undefined);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

export async function enqueueComment(
  data: Omit<PendingComment, "id" | "created_at" | "attempts">
): Promise<PendingComment> {
  const item: PendingComment = {
    ...data,
    id: `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    created_at: Date.now(),
    attempts: 0,
  };
  await withStore("readwrite", (store) => store.add(item));
  // Notifica listeners (CommentSection) para refresh imediato com o item local
  window.dispatchEvent(new CustomEvent("comment-queue-updated"));
  return item;
}

export async function getPendingComments(postId?: string): Promise<PendingComment[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const items: PendingComment[] = [];
      const tx = db.transaction(STORE, "readonly");
      const store = tx.objectStore(STORE);
      const req = store.openCursor();
      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) {
          const item = cursor.value as PendingComment;
          if (!postId || item.post_id === postId) items.push(item);
          cursor.continue();
        } else {
          resolve(items);
        }
      };
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

async function deleteItem(id: string) {
  await withStore("readwrite", (store) => store.delete(id));
}

async function updateItem(item: PendingComment) {
  await withStore("readwrite", (store) => store.put(item));
}

let flushing = false;

export async function flushQueue(): Promise<{ success: number; failed: number }> {
  if (flushing) return { success: 0, failed: 0 };
  flushing = true;
  let success = 0;
  let failed = 0;
  try {
    const items = await getPendingComments();
    for (const item of items) {
      try {
        const res = await fetch(`${API_BASE}?action=comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            post_id: item.post_id,
            user_id: item.user_id,
            author_name: item.author_name,
            content: item.content,
          }),
        });
        if (res.ok) {
          await deleteItem(item.id);
          success++;
        } else {
          await updateItem({ ...item, attempts: item.attempts + 1 });
          failed++;
        }
      } catch {
        await updateItem({ ...item, attempts: item.attempts + 1 });
        failed++;
      }
    }
    if (success > 0) {
      // Evento usado pelo CommentSection (refresh) e por um listener global
      // que dispara o toast "Comentário enviado!" via sonner.
      window.dispatchEvent(
        new CustomEvent("comment-queue-synced", { detail: { success, failed } })
      );
      window.dispatchEvent(new CustomEvent("comment-queue-updated"));
    }
  } finally {
    flushing = false;
  }
  return { success, failed };
}

/** Inicia o listener global. Chamado uma vez no boot da app. */
export function initOfflineCommentSync() {
  if (typeof window === "undefined") return;
  // Tenta enviar fila pendente ao carregar
  if (navigator.onLine) {
    void flushQueue();
  }
  window.addEventListener("online", () => {
    void flushQueue();
  });
}
