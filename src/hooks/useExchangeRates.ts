import { useState, useEffect, useCallback } from "react";

interface ExchangeData {
  USDBRL?: { bid: string; pctChange: string; high: string; low: string };
  EURBRL?: { bid: string; pctChange: string; high: string; low: string };
  ARSBRL?: { bid: string; pctChange: string; high: string; low: string };
  PYGBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAUBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAGBRL?: { bid: string; pctChange: string; high: string; low: string };
  sparklines?: {
    USDBRL?: number[];
    EURBRL?: number[];
    ARSBRL?: number[];
    PYGBRL?: number[];
  };
  _meta?: {
    fallback?: boolean;
    source?: string;
    reason?: string;
    ttlMs?: number;
    updatedAt?: string;
  };
}

const CACHE_KEY = "exchange_rates_cache_v3";
// awesomeapi via proxy PHP: sem limite documentado.
// Cache servidor 5min = 8.640 req/mês no servidor, independente de usuários.
const CACHE_DURATION_SUCCESS = 1000 * 60 * 5;  // 5 min
const CACHE_DURATION_FALLBACK = 1000 * 60 * 30; // 30 min no fallback

const LOCAL_FALLBACK: ExchangeData = {
  USDBRL: { bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  EURBRL: { bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
  ARSBRL: { bid: "0.0048", pctChange: "0.10", high: "0.0049", low: "0.0047" },
  PYGBRL: { bid: "0.00076", pctChange: "-0.05", high: "0.00078", low: "0.00074" },
  XAUBRL: { bid: "27177.00", pctChange: "0.45", high: "27450.00", low: "26900.00" },
  XAGBRL: { bid: "235.41", pctChange: "-0.30", high: "240.00", low: "230.00" },
  _meta: { fallback: true, source: "local-static", ttlMs: CACHE_DURATION_FALLBACK },
};

let sharedPromise: Promise<ExchangeData | null> | null = null;

export function useExchangeRates() {
  const [data, setData] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [cacheExpiresAt, setCacheExpiresAt] = useState<number>(0);
  const [source, setSource] = useState<string>("");

  const fetchRates = useCallback(async () => {
    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as {
          data: ExchangeData;
          timestamp: number;
          fallback: boolean;
          expiresAt?: number;
        };
        // Nunca serve fallback cacheado — sempre tenta buscar dados reais
        const isValid = !parsed.fallback && (parsed.expiresAt
          ? Date.now() < parsed.expiresAt
          : Date.now() - parsed.timestamp < CACHE_DURATION_SUCCESS);
        if (isValid && parsed.data) {
          setData(parsed.data);
          setIsFallback(!!parsed.fallback);
          setLastUpdated(new Date(parsed.timestamp).toLocaleString("pt-BR"));
          setCacheExpiresAt(parsed.expiresAt || parsed.timestamp + CACHE_DURATION_SUCCESS);
          setSource(parsed.data._meta?.source || (parsed.fallback ? "referência" : "cache"));
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache errors
    }

    setLoading(true);

    if (!sharedPromise) {
      sharedPromise = (async (): Promise<ExchangeData | null> => {
        try {
          // Use PHP proxy — fetches câmbio + metais server-side (sem CORS, com cache de 30min)
          const res = await fetch("/api.php?action=rates", {
            signal: AbortSignal.timeout(10000),
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          const result = await res.json() as ExchangeData;
          if (result.error) throw new Error(String((result as any).error));
          return result;
        } catch (err) {
          console.warn("Proxy de câmbio indisponível:", err);
          return null;
        } finally {
          setTimeout(() => { sharedPromise = null; }, 100);
        }
      })();
    }

    const result = await sharedPromise;
    const now = Date.now();

    if (result && (result.USDBRL || result.EURBRL)) {
      const expiresAt = now + CACHE_DURATION_SUCCESS;
      setData(result);
      setIsFallback(false);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
      setCacheExpiresAt(expiresAt);
      setSource(result._meta?.source || "live");
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data: result, timestamp: now, fallback: false, expiresAt })
      );
    } else {
      setData(LOCAL_FALLBACK);
      setIsFallback(true);
      setLastUpdated(new Date(now).toLocaleString("pt-BR"));
      const expiresAt = now + CACHE_DURATION_FALLBACK;
      setCacheExpiresAt(expiresAt);
      setSource("local-static");
      // Não cacheia fallback no localStorage — próxima visita sempre tentará a API
      // localStorage.setItem(CACHE_KEY, ...);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return { data, loading, isFallback, lastUpdated, cacheExpiresAt, source };
}
