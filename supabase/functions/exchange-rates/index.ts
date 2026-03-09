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

// Primary source for currencies
const AWESOME_API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL";
// Alternative source for metals via Stooq (free, stable)
const STOOQ_GOLD_URL = "https://stooq.com/q/l/?s=xauusd&f=sd2t2ohlc&h&e=csv";
const STOOQ_SILVER_URL = "https://stooq.com/q/l/?s=xagusd&f=sd2t2ohlc&h&e=csv";

const SERVER_CACHE_TTL_MS = 1000 * 60 * 30; // 30 min
const RATE_LIMIT_COOLDOWN_MS = 1000 * 60 * 60; // 60 min cooldown after 429

// Updated fallback values based on current market prices (March 2026)
// Gold 18k ~R$655/g → per troy oz (31.1035g) at 100% purity: ~R$27,177
// Silver 925 ~R$7/g → per troy oz at 100% purity: ~R$235
const STATIC_FALLBACK: ExchangePayload = {
  USDBRL: { bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  EURBRL: { bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
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
    
    // Format: Symbol,Date,Time,Open,High,Low,Close
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
    
    // Convert USD to BRL
    const bidBrl = (parsed.price * usdBrl).toFixed(2);
    const highBrl = (parsed.high * usdBrl).toFixed(2);
    const lowBrl = (parsed.low * usdBrl).toFixed(2);
    
    // Calculate approximate pct change (using high/low spread as proxy)
    const pctChange = (((parsed.price - parsed.low) / parsed.low) * 100).toFixed(2);
    
    return { bid: bidBrl, pctChange, high: highBrl, low: lowBrl };
  } catch {
    return null;
  }
}

async function fetchFromAwesomeApi(): Promise<ExchangePayload> {
  const result: ExchangePayload = {};
  let usdBrl = 5.85; // Default USD/BRL rate
  
  // Step 1: Fetch currency rates from AwesomeAPI
  try {
    const response = await fetch(AWESOME_API_URL);
    
    if (response.status === 429) {
      cooldownUntil = Date.now() + RATE_LIMIT_COOLDOWN_MS;
      return getFallbackPayload("awesomeapi_429");
    }
    
    if (response.ok) {
      const data = await response.json();
      
      if (data.USDBRL) {
        result.USDBRL = {
          bid: data.USDBRL.bid,
          pctChange: data.USDBRL.pctChange,
          high: data.USDBRL.high,
          low: data.USDBRL.low,
        };
        usdBrl = parseFloat(data.USDBRL.bid);
      }
      
      if (data.EURBRL) {
        result.EURBRL = {
          bid: data.EURBRL.bid,
          pctChange: data.EURBRL.pctChange,
          high: data.EURBRL.high,
          low: data.EURBRL.low,
        };
      }
    }
  } catch (err) {
    console.error("AwesomeAPI error:", err);
  }
  
  // Use fallback currency rates if needed
  if (!result.USDBRL) {
    result.USDBRL = STATIC_FALLBACK.USDBRL;
    usdBrl = parseFloat(STATIC_FALLBACK.USDBRL!.bid);
  }
  if (!result.EURBRL) {
    result.EURBRL = STATIC_FALLBACK.EURBRL;
  }
  
  // Step 2: Fetch metal prices from Stooq
  const [goldQuote, silverQuote] = await Promise.all([
    fetchMetalFromStooq(STOOQ_GOLD_URL, usdBrl),
    fetchMetalFromStooq(STOOQ_SILVER_URL, usdBrl),
  ]);
  
  // Apply metal quotes or use fallback
  result.XAUBRL = goldQuote || STATIC_FALLBACK.XAUBRL;
  result.XAGBRL = silverQuote || STATIC_FALLBACK.XAGBRL;
  
  const hasLiveData = !!(goldQuote || silverQuote);
  
  // Cache the result
  cacheData = result;
  cacheTimestamp = Date.now();
  cooldownUntil = 0;
  
  return buildPayload(result, {
    fallback: !hasLiveData,
    source: hasLiveData ? "stooq+awesomeapi" : "static+awesomeapi",
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
      inFlight = fetchFromAwesomeApi().finally(() => {
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
