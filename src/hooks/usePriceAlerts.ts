import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

const NOTIFIED_PREFIX = "price_alerts_notified_";

export interface PriceAlert {
  id: string;
  assetKey: string;
  assetLabel: string;
  direction: "above" | "below";
  threshold: number;
  enabled: boolean;
}

function loadAlerts(storageKey: string): PriceAlert[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveAlerts(storageKey: string, alerts: PriceAlert[]) {
  localStorage.setItem(storageKey, JSON.stringify(alerts));
}

function getNotifiedSet(storageKey: string): Set<string> {
  try {
    const saved = localStorage.getItem(NOTIFIED_PREFIX + storageKey);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch {
    return new Set();
  }
}

function saveNotifiedSet(storageKey: string, set: Set<string>) {
  localStorage.setItem(NOTIFIED_PREFIX + storageKey, JSON.stringify([...set]));
}

export function usePriceAlerts(storageKey: string) {
  const [alerts, setAlerts] = useState<PriceAlert[]>(() => loadAlerts(storageKey));

  const addAlert = useCallback((alert: Omit<PriceAlert, "id">) => {
    const newAlert: PriceAlert = { ...alert, id: crypto.randomUUID() };
    setAlerts(prev => {
      const updated = [...prev, newAlert];
      saveAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey]);

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => {
      const updated = prev.filter(a => a.id !== id);
      saveAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey]);

  const toggleAlert = useCallback((id: string) => {
    setAlerts(prev => {
      const updated = prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a);
      saveAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey]);

  const checkAlerts = useCallback((prices: Record<string, number>) => {
    const notified = getNotifiedSet(storageKey);
    const enabledAlerts = alerts.filter(a => a.enabled);

    for (const alert of enabledAlerts) {
      const price = prices[alert.assetKey];
      if (price == null) continue;

      const triggered =
        (alert.direction === "above" && price >= alert.threshold) ||
        (alert.direction === "below" && price <= alert.threshold);

      if (triggered && !notified.has(alert.id)) {
        notified.add(alert.id);
        const dirLabel = alert.direction === "above" ? "acima de" : "abaixo de";
        toast({
          title: `🔔 Alerta: ${alert.assetLabel}`,
          description: `${alert.assetLabel} está ${dirLabel} R$ ${alert.threshold.toFixed(2)} — Atual: R$ ${price.toFixed(2)}`,
        });

        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(`🔔 ${alert.assetLabel}`, {
            body: `${alert.assetLabel} está ${dirLabel} R$ ${alert.threshold.toFixed(2)} (R$ ${price.toFixed(2)})`,
          });
        }
      } else if (!triggered && notified.has(alert.id)) {
        notified.delete(alert.id);
      }
    }

    saveNotifiedSet(storageKey, notified);
  }, [alerts, storageKey]);

  const requestNotificationPermission = useCallback(async () => {
    if ("Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }
  }, []);

  return { alerts, addAlert, removeAlert, toggleAlert, checkAlerts, requestNotificationPermission };
}
