import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ExchangeData {
  USDBRL?: { bid: string; pctChange: string; high: string; low: string };
  EURBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAUBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAGBRL?: { bid: string; pctChange: string; high: string; low: string };
  _meta?: {
    fallback?: boolean;
    source?: string;
    reason?: string;
    ttlMs?: number;
    updatedAt?: string;
  };
}

const CACHE_KEY = "exchange_rates_cache";
const CACHE_DURATION_SUCCESS = 1000 * 60 * 30; // 30 min
const CACHE_DURATION_FALLBACK = 1000 * 60 * 60; // 60 min

const LOCAL_FALLBACK: ExchangeData = {
  USDBRL: { bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  EURBRL: { bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
  XAUBRL: { bid: "16173.82", pctChange: "0.45", high: "16329.34", low: "16111.61" },
  XAGBRL: { bid: "192.84", pctChange: "-0.30", high: "197.52", low: "189.74" },
  _meta: { fallback: true, source: "local-static", ttlMs: CACHE_DURATION_FALLBACK },
};

let sharedPromise: Promise<ExchangeData | null> | null = null;

export function useExchangeRates() {
  const [data, setData] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchRates = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as {
          data: ExchangeData;
          timestamp: number;
          fallback: boolean;
          expiresAt?: number;
        };

        const isValid = parsed.expiresAt ? Date.now() < parsed.expiresAt : Date.now() - parsed.timestamp < CACHE_DURATION_SUCCESS;
        if (isValid && parsed.data) {
          setData(parsed.data);
          setIsFallback(!!parsed.fallback);
          setLastUpdated(new Date(parsed.timestamp).toLocaleString("pt-BR"));
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache parsing issues
    }

    setLoading(true);

    if (!sharedPromise) {
      sharedPromise = (async () => {
        try {
          const { data, error } = await supabase.functions.invoke("exchange-rates", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: null,
          });

          if (error) throw new Error(error.message);
          return data as ExchangeData;
        } catch (err) {
          console.warn("API câmbio indisponível:", err);
          return null;
        } finally {
          setTimeout(() => {
            sharedPromise = null;
          }, 100);
        }
      })();
    }

    const result = await sharedPromise;
    const now = Date.now();

    if (result && (result.USDBRL || result.EURBRL || result.XAUBRL || result.XAGBRL)) {
      const serverFallback = !!result._meta?.fallback;
      const ttl = serverFallback ? CACHE_DURATION_FALLBACK : CACHE_DURATION_SUCCESS;

      setData(result);
      setIsFallback(serverFallback);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: result,
          timestamp: now,
          fallback: serverFallback,
          expiresAt: now + ttl,
        }),
      );
    } else {
      setData(LOCAL_FALLBACK);
      setIsFallback(true);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: LOCAL_FALLBACK,
          timestamp: now,
          fallback: true,
          expiresAt: now + CACHE_DURATION_FALLBACK,
        }),
      );
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return { data, loading, isFallback, lastUpdated };
}
