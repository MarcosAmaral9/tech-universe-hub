/**
 * usePushNotifications — Push Notifications via Service Worker (PWA)
 * Usa VAPID keys para notificações nativas no device.
 * Funciona apenas no PWA instalado (standalone) ou em browsers compatíveis.
 *
 * Para ativar:
 *  1. Gere VAPID keys: npx web-push generate-vapid-keys
 *  2. Coloque a VAPID_PUBLIC_KEY abaixo
 *  3. Salve a VAPID_PRIVATE_KEY no Hostinger (variável de ambiente ou api.php)
 */
import { useState, useEffect, useCallback } from "react";

// Substitua pela sua VAPID public key (gerada com: npx web-push generate-vapid-keys)
const VAPID_PUBLIC_KEY = "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U";

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
}

export type PushStatus = "unsupported" | "denied" | "granted" | "default";

export function usePushNotifications() {
  const [status, setStatus] = useState<PushStatus>("default");
  const [loading, setLoading] = useState(false);

  const supported = typeof window !== "undefined"
    && "serviceWorker" in navigator
    && "PushManager" in window
    && "Notification" in window;

  useEffect(() => {
    if (!supported) { setStatus("unsupported"); return; }
    setStatus(Notification.permission as PushStatus);
  }, [supported]);

  const subscribe = useCallback(async () => {
    if (!supported) return false;
    setLoading(true);
    try {
      const perm = await Notification.requestPermission();
      setStatus(perm as PushStatus);
      if (perm !== "granted") return false;

      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });

      // Envia subscription ao backend
      await fetch("/api.php?action=push_subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub.toJSON()),
      }).catch(() => {});

      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, [supported]);

  const unsubscribe = useCallback(async () => {
    if (!supported) return;
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await fetch("/api.php?action=push_unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: sub.endpoint }),
      }).catch(() => {});
      await sub.unsubscribe();
      setStatus("default");
    }
  }, [supported]);

  return { status, loading, supported, subscribe, unsubscribe };
}
