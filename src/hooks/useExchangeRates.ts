import { useState, useEffect, useCallback, useRef } from "react";

interface ExchangeData {
  USDBRL?: { bid: string; pctChange: string; high: string; low: string };
  EURBRL?: { bid: string; pctChange: string; high: string; low: string };
  ARSBRL?: { bid: string; pctChange: string; high: string; low: string };
  PYGBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAUBRL?: { bid: string; pctChange: string; high: string; low: string };
  XAGBRL?: { bid: string; pctChange: string; high: string; low: string };
  _meta?: { fallback?: boolean; source?: string; from_cache?: boolean; updatedAt?: string };
}

// Cache centralizado no servidor MySQL — sem localStorage
// O servidor faz 1 req/3min e todos os usuários recebem os mesmos dados
const REFRESH_MS = 1000 * 60 * 3; // 3 min (igual ao TTL do servidor)

const LOCAL_FALLBACK: ExchangeData = {
  USDBRL: { bid: "5.27",     pctChange: "0.00", high: "5.30",     low: "5.24"    },
  EURBRL: { bid: "6.05",     pctChange: "0.00", high: "6.08",     low: "6.02"    },
  ARSBRL: { bid: "0.0038",   pctChange: "0.00", high: "0.0039",   low: "0.0037"  },
  PYGBRL: { bid: "0.00072",  pctChange: "0.00", high: "0.00073",  low: "0.00071" },
  XAUBRL: { bid: "26655.00", pctChange: "0.00", high: "26900.00", low: "26400.00"},
  XAGBRL: { bid: "422.39",   pctChange: "0.00", high: "426.00",   low: "418.00"  },
  _meta: { fallback: true, source: "local-static" },
};

let sharedPromise: Promise<ExchangeData | null> | null = null;

export function useExchangeRates() {
  const [data, setData]             = useState<ExchangeData | null>(null);
  const [loading, setLoading]       = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [updatedAt, setUpdatedAt]   = useState("");
  const [expiresAt, setExpiresAt]   = useState<number>(0);
  const [source, setSource]         = useState("");
  const fetchingRef                 = useRef(false);

  const fetchRates = useCallback(async (silent = false) => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    if (!sharedPromise) {
      sharedPromise = (async (): Promise<ExchangeData | null> => {
        try {
          const res = await fetch("/api.php?action=rates", {
            headers: { "Cache-Control": "no-store" },
            signal: AbortSignal.timeout(10000),
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          const result = await res.json() as ExchangeData;
          if ((result as any).error) throw new Error(String((result as any).error));
          return result;
        } catch {
          return null;
        } finally {
          setTimeout(() => { sharedPromise = null; }, 200);
        }
      })();
    }

    const result = await sharedPromise;
    fetchingRef.current = false;

    if (result && (result.USDBRL || result.EURBRL)) {
      setData(result);
      setIsFallback(false);
      const serverTime = result._meta?.updatedAt
        ? new Date(result._meta.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
        : new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      setLastUpdated(serverTime);
      setUpdatedAt(result._meta?.updatedAt || new Date().toISOString());
      if (result._meta?.expiresAt) {
        setExpiresAt(new Date(result._meta.expiresAt).getTime());
      } else {
        setExpiresAt(Date.now() + REFRESH_MS);
      }
      setSource(result._meta?.from_cache ? "cache" : (result._meta?.source || "live"));
    } else if (!silent || !data) {
      setData(LOCAL_FALLBACK);
      setIsFallback(true);
      setSource("local-static");
    }

    setLoading(false);
  }, [data]);

  // Carga inicial
  useEffect(() => {
    fetchRates(false);
  }, []); // eslint-disable-line

  // Re-busca a cada 3 min + ao voltar à aba
  useEffect(() => {
    const iv = setInterval(() => {
      if (!document.hidden) { fetchingRef.current = false; fetchRates(true); }
    }, REFRESH_MS);
    const onVisible = () => {
      if (!document.hidden) { fetchingRef.current = false; fetchRates(true); }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => { clearInterval(iv); document.removeEventListener("visibilitychange", onVisible); };
  }, [fetchRates]);

  return { data, loading, isFallback, lastUpdated, cacheExpiresAt: expiresAt || Date.now() + REFRESH_MS, source };
}
