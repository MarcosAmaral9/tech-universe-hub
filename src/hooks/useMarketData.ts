/**
 * useMarketData — hook centralizado de cotações
 *
 * ARQUITETURA:
 * - Dados são buscados das APIs externas pelo cron job (action=cron_refresh, a cada 30 min)
 * - action=all faz auto-bootstrap se BD estiver vazio (primeiro acesso sem cron)
 * - Frontend lê /api.php?action=all → MySQL → dados reais
 * - TTL sincronizado com expiresAt do servidor
 * - Singleton: todos os componentes compartilham o mesmo dado
 */

import { useState, useEffect, useCallback } from "react";

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
    updatedAt:  string;
    expiresAt:  string;
    fromCache:  boolean;
    b3Ok:       boolean;
    cryptoOk:   boolean;
    ratesOk:    boolean;
  };
}

export interface UseMarketDataReturn {
  data:        MarketData | null;
  loading:     boolean;
  isFallback:  boolean;
  lastUpdated: string;
  expiresAt:   number;
  refresh:     () => void;
}

// ── Singleton ─────────────────────────────────────────────────────────────────
// Poll a cada 10 min: lê o cache do servidor.
// O cron roda a cada 30 min → verificamos 3× por ciclo = dados sempre frescos.
const POLL_INTERVAL_MS = 10 * 60 * 1000; // 10 min

let _cached:    MarketData | null = null;
let _cachedAt:  number = 0;
let _expiresAt: number = 0;
let _promise:   Promise<MarketData | null> | null = null;
let _pollTimer: ReturnType<typeof setInterval> | null = null;

const _listeners = new Set<() => void>();
const _notify = () => _listeners.forEach(fn => fn());

// ── Fallback estático ─────────────────────────────────────────────────────────
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
    { id:"bitcoin",     symbol:"btc",  name:"Bitcoin",   current_price:387818, price_change_percentage_24h: 1.5  },
    { id:"ethereum",    symbol:"eth",  name:"Ethereum",  current_price:14200,  price_change_percentage_24h:-2.0  },
    { id:"solana",      symbol:"sol",  name:"Solana",    current_price:780,    price_change_percentage_24h: 3.2  },
    { id:"binancecoin", symbol:"bnb",  name:"BNB",       current_price:2980,   price_change_percentage_24h: 0.8  },
    { id:"cardano",     symbol:"ada",  name:"Cardano",   current_price:3.90,   price_change_percentage_24h: 1.1  },
    { id:"ripple",      symbol:"xrp",  name:"XRP",       current_price:14.20,  price_change_percentage_24h:-0.5  },
    { id:"chainlink",   symbol:"link", name:"Chainlink", current_price:90,     price_change_percentage_24h: 2.3  },
    { id:"polkadot",    symbol:"dot",  name:"Polkadot",  current_price:30.50,  price_change_percentage_24h:-1.2  },
  ],
  rates: {
    USDBRL: { bid:"5.85",    pctChange:"0.32",  high:"5.90",    low:"5.80"    },
    EURBRL: { bid:"6.35",    pctChange:"-0.15", high:"6.40",    low:"6.30"    },
    ARSBRL: { bid:"0.0048",  pctChange:"0.10",  high:"0.0049",  low:"0.0047"  },
    PYGBRL: { bid:"0.00076", pctChange:"-0.05", high:"0.00078", low:"0.00074" },
    XAUBRL: { bid:"26655",   pctChange:"0.45",  high:"26900",   low:"26400"   },
    XAGBRL: { bid:"422.39",  pctChange:"-0.30", high:"426.00",  low:"418.00"  },
  },
  meta: { updatedAt:"", expiresAt:"", fromCache:true, b3Ok:false, cryptoOk:false, ratesOk:false },
};

// ── Lê cache do servidor ──────────────────────────────────────────────────────
async function readServerCache(force = false): Promise<MarketData | null> {
  const now = Date.now();
  const cacheValid = _expiresAt > 0 ? now < _expiresAt : (_cached && now - _cachedAt < POLL_INTERVAL_MS);
  if (!force && cacheValid && _cached) return _cached;
  if (_promise) return _promise;

  _promise = (async () => {
    try {
      const res = await fetch("/api.php?action=all", {
        cache: "no-store",
        signal: AbortSignal.timeout(15000), // 15s — auto-bootstrap pode demorar mais
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      const serverExpiresAt = json._meta?.expiresAt
        ? new Date(json._meta.expiresAt).getTime()
        : Date.now() + POLL_INTERVAL_MS;

      const data: MarketData = {
        b3:     json.b3?.results  ?? [],
        crypto: json.crypto?.coins ?? [],
        rates:  json.rates         ?? {},
        meta: {
          updatedAt: json._meta?.updatedAt ?? new Date().toISOString(),
          expiresAt: json._meta?.expiresAt ?? new Date(serverExpiresAt).toISOString(),
          fromCache: json._meta?.from_cache ?? true,
          b3Ok:      json._meta?.b3_ok     ?? false,
          cryptoOk:  json._meta?.crypto_ok ?? false,
          ratesOk:   json._meta?.rates_ok  ?? false,
        },
      };

      _cached    = data;
      _cachedAt  = Date.now();
      _expiresAt = serverExpiresAt;
      _promise   = null;
      _notify();
      return data;
    } catch {
      _promise = null;
      return null;
    }
  })();

  return _promise;
}

// Poll global — lê o cache a cada 10 min (cron roda a cada 30 min)
function ensurePollStarted() {
  if (_pollTimer) return;
  _pollTimer = setInterval(() => {
    readServerCache(true);
  }, POLL_INTERVAL_MS);
}

// Re-lê quando aba volta ao foco
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) readServerCache(false);
  });
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useMarketData(): UseMarketDataReturn {
  const [tick, setTick]       = useState(0);
  const [loading, setLoading] = useState(() => !_cached);

  useEffect(() => {
    const listener = () => setTick(t => t + 1);
    _listeners.add(listener);

    if (_cached) {
      setLoading(false);
    } else {
      readServerCache().then(() => setLoading(false));
    }

    ensurePollStarted();
    return () => { _listeners.delete(listener); };
  }, []);

  // refresh manual — força releitura do servidor (não chama APIs externas diretamente)
  const refresh = useCallback(() => {
    setLoading(true);
    _expiresAt = 0; // invalida cache local para forçar re-fetch
    readServerCache(true).then(() => setLoading(false));
  }, []);

  const hasAnyData = _cached && (_cached.meta.b3Ok || _cached.meta.cryptoOk || _cached.meta.ratesOk);
  const isFallback = !hasAnyData;

  const lastUpdated = _cached?.meta.updatedAt
    ? new Date(_cached.meta.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    : "";

  void tick;

  return {
    data:        _cached ?? (isFallback ? FALLBACK : null),
    loading:     loading && !_cached,
    isFallback,
    lastUpdated,
    expiresAt:   _expiresAt || Date.now() + POLL_INTERVAL_MS,
    refresh,
  };
}

export function getMarketDataOrFallback(): MarketData {
  return _cached ?? FALLBACK;
}
