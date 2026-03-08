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
    source: "awesomeapi" | "cache" | "static";
    reason?: string;
    ttlMs: number;
    updatedAt: string;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const AWESOME_API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,XAU-BRL,XAG-BRL";
const SERVER_CACHE_TTL_MS = 1000 * 60 * 30; // 30 min
const RATE_LIMIT_COOLDOWN_MS = 1000 * 60 * 60; // 60 min cooldown after 429

const STATIC_FALLBACK: ExchangePayload = {
  USDBRL: { bid: "5.85", pctChange: "0.32", high: "5.90", low: "5.80" },
  EURBRL: { bid: "6.35", pctChange: "-0.15", high: "6.40", low: "6.30" },
  XAUBRL: { bid: "16173.82", pctChange: "0.45", high: "16329.34", low: "16111.61" },
  XAGBRL: { bid: "192.84", pctChange: "-0.30", high: "197.52", low: "189.74" },
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
      ttlMs: meta.ttlMs,
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

async function fetchFromAwesomeApi(): Promise<ExchangePayload> {
  const response = await fetch(AWESOME_API_URL);

  if (response.status === 429) {
    cooldownUntil = Date.now() + RATE_LIMIT_COOLDOWN_MS;
    return getFallbackPayload("awesomeapi_429");
  }

  if (!response.ok) {
    return getFallbackPayload(`awesomeapi_${response.status}`);
  }

  const data = (await response.json()) as ExchangePayload;
  const hasAnyRate = !!(data.USDBRL || data.EURBRL || data.XAUBRL || data.XAGBRL);

  if (!hasAnyRate) {
    return getFallbackPayload("invalid_payload");
  }

  cacheData = data;
  cacheTimestamp = Date.now();
  cooldownUntil = 0;

  return buildPayload(data, {
    fallback: false,
    source: "awesomeapi",
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
