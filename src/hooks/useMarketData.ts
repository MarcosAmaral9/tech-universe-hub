/**
 * useMarketData — hook centralizado de cotações
 *
 * Uma única chamada a /api.php?action=all serve B3 + crypto + rates.
 * Os dados são compartilhados entre TODOS os componentes que usarem este hook
 * via um singleton de módulo — o fetch só acontece uma vez por TTL, não uma
 * vez por componente montado.
 *
 * TTL padrão: 3 min (menor TTL entre as três fontes: rates=3, b3=4, crypto=5)
 */

import { useState, useEffect, useCallback, useRef } from "react";

// ── Tipos exportados ──────────────────────────────────────────────────────────
export interface StockQuote {
  symbol:                     string;
  shortName:                  string;
  regularMarketPrice:         number;
  regularMarketChangePercent: number;
  logourl?:                   string;
}

export interface CryptoQuote {
  id:                          string;
  symbol:                      string;
  name:                        string;
  current_price:               number;
  price_change_percentage_24h: number;
  market_cap?:                 number;
  image?:                      string;
}

export interface RateQuote {
  bid:       string;
  pctChange: string;
  high:      string;
  low:       string;
}

export interface RatesData {
  USDBRL?: RateQuote;
  EURBRL?: RateQuote;
  ARSBRL?: RateQuote;
  PYGBRL?: RateQuote;
  XAUBRL?: RateQuote;
  XAGBRL?: RateQuote;
  _meta?:  { source?: string; updatedAt?: string; from_cache?: boolean };
}

export interface MarketData {
  b3:     StockQuote[];
  crypto: CryptoQuote[];
  rates:  RatesData;
  meta: {
    updatedAt:   string;
    fromCache:   boolean;
    b3Ok:        boolean;
    cryptoOk:    boolean;
    ratesOk:     boolean;
  };
}

export interface UseMarketDataReturn {
  data:       MarketData | null;
  loading:    boolean;
  isFallback: boolean;
  lastUpdated: string;
  refresh:    () => void;
}

// ── Singleton de cache de módulo ─────────────────────────────────────────────
// Compartilhado entre todos os componentes que importam este hook.
// Enquanto os dados estiverem frescos (< TTL_MS), nenhum novo fetch é feito.
const TTL_MS   = 3 * 60 * 1000; // 3 minutos
let _cached:   MarketData | null = null;
let _cachedAt: number            = 0;
let _promise:  Promise<MarketData | null> | null = null;

// Listeners para notificar todos os hooks quando dados chegarem
const _listeners = new Set<() => void>();
const _notify = () => _listeners.forEach(fn => fn());

// ── Fallback estático (usado se o servidor estiver completamente offline) ─────
const FALLBACK: MarketData = {
  b3: [
    { symbol:"PETR4", shortName:"Petrobras PN",      regularMarketPrice:37.50,  regularMarketChangePercent: 1.2  },
    { symbol:"VALE3", shortName:"Vale ON",            regularMarketPrice:58.20,  regularMarketChangePercent:-0.8  },
    { symbol:"ITUB4", shortName:"Itaú Unibanco PN",  regularMarketPrice:35.80,  regularMarketChangePercent: 0.5  },
    { symbol:"BBDC4", shortName:"Bradesco PN",        regularMarketPrice:13.90,  regularMarketChangePercent:-1.1  },
    { symbol:"ABEV3", shortName:"Ambev ON",           regularMarketPrice:11.50,  regularMarketChangePercent: 0.3  },
    { symbol:"WEGE3", shortName:"WEG ON",             regularMarketPrice:48.00,  regularMarketChangePercent: 2.1  },
    { symbol:"BBAS3", shortName:"Banco do Brasil ON", regularMarketPrice:27.40,  regularMarketChangePercent:-0.14 },
    { symbol:"RENT3", shortName:"Localiza ON",        regularMarketPrice:35.60,  regularMarketChangePercent:-0.55 },
    { symbol:"MGLU3", shortName:"Magazine Luiza ON",  regularMarketPrice:9.85,   regularMarketChangePercent: 1.23 },
    { symbol:"SUZB3", shortName:"Suzano ON",          regularMarketPrice:48.30,  regularMarketChangePercent:-0.41 },
  ],
  crypto: [
    { id:"bitcoin",     symbol:"btc",  name:"Bitcoin",    current_price:387818, price_change_percentage_24h: 1.5  },
    { id:"ethereum",    symbol:"eth",  name:"Ethereum",   current_price:14200,  price_change_percentage_24h:-2.0  },
    { id:"solana",      symbol:"sol",  name:"Solana",     current_price:780,    price_change_percentage_24h: 3.2  },
    { id:"binancecoin", symbol:"bnb",  name:"BNB",        current_price:2980,   price_change_percentage_24h: 0.8  },
    { id:"cardano",     symbol:"ada",  name:"Cardano",    current_price:3.90,   price_change_percentage_24h: 1.1  },
    { id:"ripple",      symbol:"xrp",  name:"XRP",        current_price:14.20,  price_change_percentage_24h:-0.5  },
    { id:"chainlink",   symbol:"link", name:"Chainlink",  current_price:90,     price_change_percentage_24h: 2.3  },
    { id:"polkadot",    symbol:"dot",  name:"Polkadot",   current_price:30.50,  price_change_percentage_24h:-1.2  },
  ],
  rates: {
    USDBRL: { bid:"5.85",    pctChange:"0.32",  high:"5.90",    low:"5.80"    },
    EURBRL: { bid:"6.35",    pctChange:"-0.15", high:"6.40",    low:"6.30"    },
    ARSBRL: { bid:"0.0048",  pctChange:"0.10",  high:"0.0049",  low:"0.0047"  },
    PYGBRL: { bid:"0.00076", pctChange:"-0.05", high:"0.00078", low:"0.00074" },
    XAUBRL: { bid:"26655",   pctChange:"0.45",  high:"26900",   low:"26400"   },
    XAGBRL: { bid:"422.39",  pctChange:"-0.30", high:"426.00",  low:"418.00"  },
  },
  meta: { updatedAt:"", fromCache:false, b3Ok:false, cryptoOk:false, ratesOk:false },
};

// ── Fetch único com singleton ────────────────────────────────────────────────
async function fetchMarketData(force = false): Promise<MarketData | null> {
  const now = Date.now();

  // Cache ainda fresco e não forçado
  if (!force && _cached && (now - _cachedAt) < TTL_MS) return _cached;

  // Se já há uma promise em voo, aguarda ela (deduplicação)
  if (_promise) return _promise;

  _promise = (async () => {
    try {
      const res = await fetch("/api.php?action=all", {
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      const data: MarketData = {
        b3:     json.b3?.results  ?? [],
        crypto: json.crypto?.coins ?? [],
        rates:  json.rates         ?? {},
        meta: {
          updatedAt: json._meta?.updatedAt ?? new Date().toISOString(),
          fromCache: json._meta?.from_cache ?? false,
          b3Ok:      json._meta?.b3_ok     ?? false,
          cryptoOk:  json._meta?.crypto_ok ?? false,
          ratesOk:   json._meta?.rates_ok  ?? false,
        },
      };

      _cached   = data;
      _cachedAt = Date.now();
      _promise  = null;
      _notify();
      return data;
    } catch {
      _promise = null;
      return null; // chamador usa fallback
    }
  })();

  return _promise;
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useMarketData(): UseMarketDataReturn {
  const [tick, setTick]     = useState(0);
  const [loading, setLoading] = useState(() => !_cached);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Registra listener para receber notificação quando dados chegarem
  useEffect(() => {
    const listener = () => setTick(t => t + 1);
    _listeners.add(listener);
    return () => { _listeners.delete(listener); };
  }, []);

  // Carrega dados na montagem
  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchMarketData().then(() => { if (alive) setLoading(false); });

    // Auto-refresh a cada TTL_MS (igual ao TTL do servidor)
    timerRef.current = setInterval(() => {
      fetchMarketData(true);
    }, TTL_MS);

    return () => {
      alive = false;
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const refresh = useCallback(() => {
    setLoading(true);
    fetchMarketData(true).then(() => setLoading(false));
  }, []);

  const isFallback = !_cached || (!_cached.meta.b3Ok && !_cached.meta.cryptoOk && !_cached.meta.ratesOk);
  const lastUpdated = _cached?.meta.updatedAt
    ? new Date(_cached.meta.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    : "";

  // `tick` força re-render quando _notify() é chamado
  void tick;

  return {
    data:        _cached,
    loading:     loading && !_cached,
    isFallback,
    lastUpdated,
    refresh,
  };
}

// ── Helper: dados de fallback com dados reais quando disponíveis ──────────────
export function getMarketDataOrFallback(): MarketData {
  return _cached ?? FALLBACK;
}
