/**
 * push-handler.js — Listeners de Web Push para o Service Worker do PWA.
 * Importado pelo Workbox via `importScripts` (vite-plugin-pwa).
 *
 * Trata:
 *  - `push`              → exibe Notification nativa
 *  - `notificationclick` → abre/foca a aba na URL alvo
 */
self.addEventListener("push", function (event) {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (_) {
    data = { title: "VICIO<CODE>", body: event.data ? event.data.text() : "" };
  }

  const title = data.title || "VICIO<CODE>";
  const options = {
    body: data.body || "",
    icon: data.icon || "/icon-192x192.png",
    badge: data.badge || "/icon-192x192.png",
    image: data.image,
    tag: data.tag || "viciocode-notification",
    renotify: !!data.renotify,
    requireInteraction: !!data.requireInteraction,
    data: { url: data.url || "/", ...(data.data || {}) },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(function (clients) {
        for (const client of clients) {
          try {
            const url = new URL(client.url);
            if (url.pathname === targetUrl || client.url.endsWith(targetUrl)) {
              return client.focus();
            }
          } catch (_) {
            /* ignore */
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(targetUrl);
        }
      })
  );
});
