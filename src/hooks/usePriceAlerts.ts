import { useState, useCallback, useEffect } from "react";
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

function loadLocalAlerts(storageKey: string): PriceAlert[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveLocalAlerts(storageKey: string, alerts: PriceAlert[]) {
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
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-50)));
}

export function usePriceAlerts(storageKey: string, userId?: string | null) {
  const [alerts, setAlerts] = useState<PriceAlert[]>(() => loadLocalAlerts(storageKey));
  const [history, setHistory] = useState<AlertHistoryEntry[]>(() => loadHistory());
  const [synced, setSynced] = useState(false);

  // Sync alerts from server for logged-in users
  useEffect(() => {
    if (!userId) { setSynced(true); return; }
    const fetchAlerts = async () => {
      try {
        const res = await fetch(`/api.php?action=price_alerts&user_id=${encodeURIComponent(userId)}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            const mapped: PriceAlert[] = data.map((a: any) => ({
              id: a.id,
              assetKey: a.asset_key,
              assetLabel: a.asset_label,
              direction: a.direction,
              threshold: parseFloat(a.threshold),
              enabled: a.enabled === 1 || a.enabled === true,
            }));
            setAlerts(mapped);
            saveLocalAlerts(storageKey, mapped);
          }
        }
      } catch { /* offline — use local */ }
      setSynced(true);
    };
    fetchAlerts();
  }, [userId, storageKey]);

  const addAlert = useCallback(async (alert: Omit<PriceAlert, "id">) => {
    if (userId) {
      try {
        const res = await fetch(`/api.php?action=price_alerts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            asset_key: alert.assetKey,
            asset_label: alert.assetLabel,
            direction: alert.direction,
            threshold: alert.threshold,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const newAlert: PriceAlert = { ...alert, id: data.id };
          setAlerts(prev => {
            const updated = [...prev, newAlert];
            saveLocalAlerts(storageKey, updated);
            return updated;
          });
          return;
        }
      } catch { /* fallback to local */ }
    }
    const newAlert: PriceAlert = { ...alert, id: crypto.randomUUID() };
    setAlerts(prev => {
      const updated = [...prev, newAlert];
      saveLocalAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey, userId]);

  const removeAlert = useCallback(async (id: string) => {
    if (userId) {
      try {
        await fetch(`/api.php?action=price_alerts`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, user_id: userId }),
        });
      } catch { /* */ }
    }
    setAlerts(prev => {
      const updated = prev.filter(a => a.id !== id);
      saveLocalAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey, userId]);

  const toggleAlert = useCallback(async (id: string) => {
    const alert = alerts.find(a => a.id === id);
    if (!alert) return;
    const newEnabled = !alert.enabled;
    if (userId) {
      try {
        await fetch(`/api.php?action=price_alerts`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, user_id: userId, enabled: newEnabled }),
        });
      } catch { /* */ }
    }
    setAlerts(prev => {
      const updated = prev.map(a => a.id === id ? { ...a, enabled: newEnabled } : a);
      saveLocalAlerts(storageKey, updated);
      return updated;
    });
  }, [storageKey, userId, alerts]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

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
