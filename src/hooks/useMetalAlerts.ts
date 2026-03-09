import { useState, useEffect, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

const ALERTS_KEY = "metal_price_alerts";
const NOTIFIED_KEY = "metal_alerts_notified";

export interface MetalAlert {
  id: string;
  metal: "XAU" | "XAG";
  direction: "above" | "below";
  threshold: number;
  enabled: boolean;
}

function loadAlerts(): MetalAlert[] {
  try {
    const saved = localStorage.getItem(ALERTS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveAlerts(alerts: MetalAlert[]) {
  localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
}

function getNotifiedSet(): Set<string> {
  try {
    const saved = localStorage.getItem(NOTIFIED_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch {
    return new Set();
  }
}

function saveNotifiedSet(set: Set<string>) {
  localStorage.setItem(NOTIFIED_KEY, JSON.stringify([...set]));
}

export function useMetalAlerts() {
  const [alerts, setAlerts] = useState<MetalAlert[]>(loadAlerts);

  const addAlert = useCallback((alert: Omit<MetalAlert, "id">) => {
    const newAlert: MetalAlert = { ...alert, id: crypto.randomUUID() };
    setAlerts(prev => {
      const updated = [...prev, newAlert];
      saveAlerts(updated);
      return updated;
    });
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => {
      const updated = prev.filter(a => a.id !== id);
      saveAlerts(updated);
      return updated;
    });
  }, []);

  const toggleAlert = useCallback((id: string) => {
    setAlerts(prev => {
      const updated = prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a);
      saveAlerts(updated);
      return updated;
    });
  }, []);

  const checkAlerts = useCallback((goldPerGram: number, silverPerGram: number) => {
    const notified = getNotifiedSet();
    const enabledAlerts = alerts.filter(a => a.enabled);

    for (const alert of enabledAlerts) {
      const price = alert.metal === "XAU" ? goldPerGram : silverPerGram;
      const metalName = alert.metal === "XAU" ? "Ouro 18k" : "Prata 925";
      const triggered =
        (alert.direction === "above" && price >= alert.threshold) ||
        (alert.direction === "below" && price <= alert.threshold);

      if (triggered && !notified.has(alert.id)) {
        notified.add(alert.id);
        const dirLabel = alert.direction === "above" ? "acima de" : "abaixo de";
        toast({
          title: `🔔 Alerta: ${metalName}`,
          description: `${metalName} está ${dirLabel} R$ ${alert.threshold.toFixed(2)}/g — Atual: R$ ${price.toFixed(2)}/g`,
        });

        // Browser notification
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(`🔔 ${metalName}`, {
            body: `${metalName} está ${dirLabel} R$ ${alert.threshold.toFixed(2)}/g (R$ ${price.toFixed(2)}/g)`,
            icon: alert.metal === "XAU" ? "🥇" : "🥈",
          });
        }
      } else if (!triggered && notified.has(alert.id)) {
        // Reset notification when condition no longer met
        notified.delete(alert.id);
      }
    }

    saveNotifiedSet(notified);
  }, [alerts]);

  const requestNotificationPermission = useCallback(async () => {
    if ("Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }
  }, []);

  return { alerts, addAlert, removeAlert, toggleAlert, checkAlerts, requestNotificationPermission };
}
