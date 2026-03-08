import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ExchangeData {
  USDBRL?: { bid: string; pctChange: string; high: string; low: string };
  EURBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAUBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAGBRL?: { bid: string; pctChange: string; high: string; low: string };
}

const CACHE_KEY = "exchange_rates_cache";
const CACHE_DURATION = 1000 * 60 * 30; // 30 min

let sharedPromise: Promise<ExchangeData | null> | null = null;

export function useExchangeRates() {
  const [data, setData] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchRates = useCallback(async () => {
    // Check cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data: cachedData, timestamp, fallback } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setData(cachedData);
          setIsFallback(!!fallback);
          setLastUpdated(new Date(timestamp).toLocaleString("pt-BR"));
          setLoading(false);
          return;
        }
      }
    } catch { /* ignore */ }

    setLoading(true);

    // Deduplicate concurrent requests
    if (!sharedPromise) {
      sharedPromise = (async () => {
        try {
          const { data, error } = await supabase.functions.invoke('exchange-rates', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: null,
          });
          if (error) throw new Error(error.message);
          return data as ExchangeData;
        } catch (err) {
          console.warn("API câmbio indisponível:", err);
          return null;
        } finally {
          setTimeout(() => { sharedPromise = null; }, 100);
        }
      })();
    }

    const result = await sharedPromise;
    const now = Date.now();

    if (result && (result.USDBRL || result.EURBRL || result.XAUBRL || result.XAGBRL)) {
      setData(result);
      setIsFallback(false);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: result, timestamp: now, fallback: false }));
    } else {
      setIsFallback(true);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return { data, loading, isFallback, lastUpdated };
}
