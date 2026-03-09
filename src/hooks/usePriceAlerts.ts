import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

const NOTIFIED_PREFIX = "price_alerts_notified_";
const HISTORY_KEY = "price_alerts_history";

export interface PriceAlert {
  id: string;
  assetKey: string;
  assetLabel: string;
  direction: "above" | "below";
  threshold: number;
  enabled: boolean;
}

export interface AlertHistoryEntry {
  id: string;
  alertId: string;
  assetLabel: string;
  direction: "above" | "below";
  threshold: number;
  actualPrice: number;
  triggeredAt: number;
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

function loadHistory(): AlertHistoryEntry[] {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: AlertHistoryEntry[]) {
  // Keep last 50 entries
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-50)));
}

export function usePriceAlerts(storageKey: string) {
  const [alerts, setAlerts] = useState<PriceAlert[]>(() => loadAlerts(storageKey));
  const [history, setHistory] = useState<AlertHistoryEntry[]>(() => loadHistory());

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

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  const checkAlerts = useCallback((prices: Record<string, number>) => {
    const notified = getNotifiedSet(storageKey);
    const enabledAlerts = alerts.filter(a => a.enabled);
    let historyUpdated = false;

    for (const alert of enabledAlerts) {
      const price = prices[alert.assetKey];
      if (price == null) continue;

      const triggered =
        (alert.direction === "above" && price >= alert.threshold) ||
        (alert.direction === "below" && price <= alert.threshold);

      if (triggered && !notified.has(alert.id)) {
        notified.add(alert.id);
        const dirLabel = alert.direction === "above" ? "acima de" : "abaixo de";

        // Save to history
        const entry: AlertHistoryEntry = {
          id: crypto.randomUUID(),
          alertId: alert.id,
          assetLabel: alert.assetLabel,
          direction: alert.direction,
          threshold: alert.threshold,
          actualPrice: price,
          triggeredAt: Date.now(),
        };
        const currentHistory = loadHistory();
        currentHistory.push(entry);
        saveHistory(currentHistory);
        setHistory([...currentHistory].slice(-50));
        historyUpdated = true;

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

  return { alerts, history, addAlert, removeAlert, toggleAlert, checkAlerts, clearHistory, requestNotificationPermission };
}
