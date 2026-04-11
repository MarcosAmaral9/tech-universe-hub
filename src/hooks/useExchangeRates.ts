/**
 * useExchangeRates — thin wrapper sobre useMarketData.
 * Mantém interface pública idêntica para CurrencyWidget e PreciousMetalsWidget.
 */
import { useMemo } from "react";
import { useMarketData, RatesData } from "@/hooks/useMarketData";

export interface ExchangeData extends RatesData {
  _meta?: { fallback?: boolean; source?: string; from_cache?: boolean; updatedAt?: string; expiresAt?: string };
}

const LOCAL_FALLBACK: ExchangeData = {
  USDBRL: { bid:"5.85",    pctChange:"0.32",  high:"5.90",    low:"5.80"    },
  EURBRL: { bid:"6.35",    pctChange:"-0.15", high:"6.40",    low:"6.30"    },
  ARSBRL: { bid:"0.0048",  pctChange:"0.10",  high:"0.0049",  low:"0.0047"  },
  PYGBRL: { bid:"0.00076", pctChange:"-0.05", high:"0.00078", low:"0.00074" },
  XAUBRL: { bid:"26655",   pctChange:"0.45",  high:"26900",   low:"26400"   },
  XAGBRL: { bid:"422.39",  pctChange:"-0.30", high:"426.00",  low:"418.00"  },
  _meta: { fallback: true, source: "local-static" },
};

export function useExchangeRates() {
  const { data, loading, isFallback, lastUpdated, expiresAt } = useMarketData();

  const rates = useMemo<ExchangeData>(() => {
    if (!data?.rates || isFallback) return LOCAL_FALLBACK;
    return data.rates as ExchangeData;
  }, [data, isFallback]);

  return {
    data:           rates,
    loading,
    isFallback,
    lastUpdated,
    cacheExpiresAt: expiresAt,   // real do servidor
    source:         isFallback ? "local-static" : (data?.meta.fromCache ? "cache" : "live"),
  };
}
