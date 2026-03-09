import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

type RateQuote = {
  bid: string;
  pctChange: string;
  high: string;
  low: string;
};

type ExchangePayload = {
  USDBRL?: RateQuote;
  EURBRL?: RateQuote;
  ARSBRL?: RateQuote;
  PYGBRL?: RateQuote;
  XAUBRL?: RateQuote;
  XAGBRL?: RateQuote;
  _meta?: {
    fallback: boolean;
    source: string;
    reason?: string;
    ttlMs: number;
    updatedAt: string;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Frankfurter API - free, stable, no rate limits, ECB data
const FRANKFURTER_LATEST_URL = "https://api.frankfurter.dev/v1/latest?base=BRL&symbols=USD,EUR";
// We'll build the timeseries URL dynamically with yesterday's date
// AwesomeAPI for ARS and PYG (South American currencies)
const AWESOME_API_URL = "https://economia.awesomeapi.com.br/last/ARS-BRL,PYG-BRL";
// Stooq for metals
const STOOQ_GOLD_URL = "https://stooq.com/q/l/?s=xauusd&f=sd2t2ohlc&h&e=csv";
const STOOQ_SILVER_URL = "https://stooq.com/q/l/?s=xagusd&f=sd2t2ohlc&h&e=csv";

const SERVER_CACHE_TTL_MS = 1000 * 60 * 30; // 30 min
const RATE_LIMIT_COOLDOWN_MS = 1000 * 60 * 60; // 60 min cooldown

// Updated fallback values (March 2026)
// USD ~5.85 | EUR ~6.35 | ARS ~0.0048 (1 ARS = 0.0048 BRL) | PYG ~0.00076 (1 PYG = 0.00076 BRL)
// Gold 18k ~R$655/g → per troy oz ~R$27,177 | Silver 925 ~R$7/g → per troy oz ~R$235
const STATIC_FALLBACK: ExchangePayload = {
  USDBRL: { bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  EURBRL: { bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
  ARSBRL: { bid: "0.0048", pctChange: "0.10", high: "0.0049", low: "0.0047" },
  PYGBRL: { bid: "0.00076", pctChange: "-0.05", high: "0.00078", low: "0.00074" },
  XAUBRL: { bid: "27177.00", pctChange: "0.45", high: "27450.00", low: "26900.00" },
  XAGBRL: { bid: "235.41", pctChange: "-0.30", high: "240.00", low: "230.00" },
};

let cacheData: ExchangePayload | null = null;
let cacheTimestamp = 0;
let cooldownUntil = 0;
let inFlight: Promise<ExchangePayload> | null = null;

function buildPayload(base: ExchangePayload, meta: ExchangePayload["_meta"]): ExchangePayload {
  return {
    ...base,
    _meta: {
      ...meta,
      ttlMs: meta!.ttlMs,
      updatedAt: new Date().toISOString(),
    },
  };
}

function getCachedPayload(): ExchangePayload | null {
  if (!cacheData) return null;
  const isFresh = Date.now() - cacheTimestamp < SERVER_CACHE_TTL_MS;
  if (!isFresh) return null;

  return buildPayload(cacheData, {
    fallback: false,
    source: "cache",
    ttlMs: SERVER_CACHE_TTL_MS,
  });
}

function getFallbackPayload(reason: string): ExchangePayload {
  if (cacheData) {
    return buildPayload(cacheData, {
      fallback: true,
      source: "cache",
      reason,
      ttlMs: SERVER_CACHE_TTL_MS,
    });
  }

  return buildPayload(STATIC_FALLBACK, {
    fallback: true,
    source: "static",
    reason,
    ttlMs: RATE_LIMIT_COOLDOWN_MS,
  });
}

// Parse Stooq CSV response
function parseStooqCsv(csv: string): { price: number; high: number; low: number } | null {
  try {
    const lines = csv.trim().split("\n");
    if (lines.length < 2) return null;
    
    const values = lines[1].split(",");
    if (values.length < 7) return null;
    
    const high = parseFloat(values[4]);
    const low = parseFloat(values[5]);
    const close = parseFloat(values[6]);
    
    if (isNaN(close) || close <= 0) return null;
    
    return { price: close, high: high || close, low: low || close };
  } catch {
    return null;
  }
}

// Fetch metal prices from Stooq and convert to BRL
async function fetchMetalFromStooq(metalUrl: string, usdBrl: number): Promise<RateQuote | null> {
  try {
    const response = await fetch(metalUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    
    if (!response.ok) return null;
    
    const csv = await response.text();
    const parsed = parseStooqCsv(csv);
    
    if (!parsed) return null;
    
    const bidBrl = (parsed.price * usdBrl).toFixed(2);
    const highBrl = (parsed.high * usdBrl).toFixed(2);
    const lowBrl = (parsed.low * usdBrl).toFixed(2);
    const pctChange = (((parsed.price - parsed.low) / parsed.low) * 100).toFixed(2);
    
    return { bid: bidBrl, pctChange, high: highBrl, low: lowBrl };
  } catch {
    return null;
  }
}

// Fetch USD and EUR from Frankfurter (more stable, ECB data)
async function fetchFromFrankfurter(): Promise<{ USDBRL?: RateQuote; EURBRL?: RateQuote; usdBrl: number }> {
  const result: { USDBRL?: RateQuote; EURBRL?: RateQuote; usdBrl: number } = { usdBrl: 5.85 };
  
  try {
    const response = await fetch(FRANKFURTER_URL, {
      headers: { "Accept": "application/json" },
    });
    
    if (!response.ok) {
      console.warn("Frankfurter API error:", response.status);
      return result;
    }
    
    const data = await response.json();
    
    // Frankfurter returns rates with BRL as base, so we need to invert
    // e.g., BRL -> USD = 0.17 means 1 BRL = 0.17 USD, so 1 USD = 1/0.17 = 5.88 BRL
    if (data.rates?.USD) {
      const usdRate = 1 / data.rates.USD;
      result.usdBrl = usdRate;
      result.USDBRL = {
        bid: usdRate.toFixed(4),
        pctChange: "0.00", // Frankfurter doesn't provide change %
        high: (usdRate * 1.005).toFixed(4),
        low: (usdRate * 0.995).toFixed(4),
      };
    }
    
    if (data.rates?.EUR) {
      const eurRate = 1 / data.rates.EUR;
      result.EURBRL = {
        bid: eurRate.toFixed(4),
        pctChange: "0.00",
        high: (eurRate * 1.005).toFixed(4),
        low: (eurRate * 0.995).toFixed(4),
      };
    }
  } catch (err) {
    console.error("Frankfurter fetch error:", err);
  }
  
  return result;
}

// Fetch ARS and PYG from AwesomeAPI (good for South American currencies)
async function fetchSouthAmericanCurrencies(): Promise<{ ARSBRL?: RateQuote; PYGBRL?: RateQuote }> {
  const result: { ARSBRL?: RateQuote; PYGBRL?: RateQuote } = {};
  
  try {
    const response = await fetch(AWESOME_API_URL);
    
    if (response.status === 429) {
      cooldownUntil = Date.now() + RATE_LIMIT_COOLDOWN_MS;
      console.warn("AwesomeAPI rate limited");
      return result;
    }
    
    if (!response.ok) {
      console.warn("AwesomeAPI error:", response.status);
      return result;
    }
    
    const data = await response.json();
    
    if (data.ARSBRL) {
      result.ARSBRL = {
        bid: parseFloat(data.ARSBRL.bid).toFixed(4),
        pctChange: data.ARSBRL.pctChange || "0.00",
        high: parseFloat(data.ARSBRL.high).toFixed(4),
        low: parseFloat(data.ARSBRL.low).toFixed(4),
      };
    }
    
    if (data.PYGBRL) {
      result.PYGBRL = {
        bid: parseFloat(data.PYGBRL.bid).toFixed(5),
        pctChange: data.PYGBRL.pctChange || "0.00",
        high: parseFloat(data.PYGBRL.high).toFixed(5),
        low: parseFloat(data.PYGBRL.low).toFixed(5),
      };
    }
  } catch (err) {
    console.error("AwesomeAPI fetch error:", err);
  }
  
  return result;
}

async function fetchAllRates(): Promise<ExchangePayload> {
  const result: ExchangePayload = {};
  
  // Fetch all sources in parallel
  const [frankfurterData, southAmericanData, goldQuote, silverQuote] = await Promise.all([
    fetchFromFrankfurter(),
    fetchSouthAmericanCurrencies(),
    fetchMetalFromStooq(STOOQ_GOLD_URL, 5.85),
    fetchMetalFromStooq(STOOQ_SILVER_URL, 5.85),
  ]);
  
  // Apply currency rates with fallbacks
  result.USDBRL = frankfurterData.USDBRL || STATIC_FALLBACK.USDBRL;
  result.EURBRL = frankfurterData.EURBRL || STATIC_FALLBACK.EURBRL;
  result.ARSBRL = southAmericanData.ARSBRL || STATIC_FALLBACK.ARSBRL;
  result.PYGBRL = southAmericanData.PYGBRL || STATIC_FALLBACK.PYGBRL;
  
  // Refetch metals with actual USD rate if available
  const actualUsdBrl = frankfurterData.usdBrl;
  if (actualUsdBrl !== 5.85) {
    const [actualGold, actualSilver] = await Promise.all([
      fetchMetalFromStooq(STOOQ_GOLD_URL, actualUsdBrl),
      fetchMetalFromStooq(STOOQ_SILVER_URL, actualUsdBrl),
    ]);
    result.XAUBRL = actualGold || goldQuote || STATIC_FALLBACK.XAUBRL;
    result.XAGBRL = actualSilver || silverQuote || STATIC_FALLBACK.XAGBRL;
  } else {
    result.XAUBRL = goldQuote || STATIC_FALLBACK.XAUBRL;
    result.XAGBRL = silverQuote || STATIC_FALLBACK.XAGBRL;
  }
  
  // Determine if we have live data
  const hasLiveCurrency = !!(frankfurterData.USDBRL || southAmericanData.ARSBRL);
  const hasLiveMetals = !!(goldQuote || silverQuote);
  
  // Cache the result
  cacheData = result;
  cacheTimestamp = Date.now();
  
  const source = [
    frankfurterData.USDBRL ? "frankfurter" : null,
    southAmericanData.ARSBRL ? "awesomeapi" : null,
    hasLiveMetals ? "stooq" : null,
  ].filter(Boolean).join("+") || "static";
  
  return buildPayload(result, {
    fallback: !hasLiveCurrency && !hasLiveMetals,
    source,
    ttlMs: SERVER_CACHE_TTL_MS,
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const cached = getCachedPayload();
    if (cached) {
      return new Response(JSON.stringify(cached), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    }

    if (Date.now() < cooldownUntil) {
      return new Response(JSON.stringify(getFallbackPayload("rate_limit_cooldown")), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    }

    if (!inFlight) {
      inFlight = fetchAllRates().finally(() => {
        inFlight = null;
      });
    }

    const payload = await inFlight;

    return new Response(JSON.stringify(payload), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    const payload = getFallbackPayload("edge_exception");
    return new Response(JSON.stringify(payload), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  }
});
