import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const VALID_TICKER = /^[A-Z0-9]{4,6}\d{1,2}$/;
const VALID_RANGES = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', 'max'];
const VALID_INTERVALS = ['1d', '1wk', '1mo'];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { searchParams } = new URL(req.url);
    const ticker = (searchParams.get('ticker') || '').trim().toUpperCase();
    const range = searchParams.get('range') || '1mo';
    const interval = searchParams.get('interval') || '1d';

    if (!ticker || !VALID_TICKER.test(ticker)) {
      return new Response(JSON.stringify({ error: 'Ticker inválido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!VALID_RANGES.includes(range)) {
      return new Response(JSON.stringify({ error: 'Range inválido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!VALID_INTERVALS.includes(interval)) {
      return new Response(JSON.stringify({ error: 'Interval inválido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = Deno.env.get('BRAPI_TOKEN') || '';
    const tokenParam = token ? `&token=${token}` : '';
    const url = `https://brapi.dev/api/quote/${ticker}?range=${range}&interval=${interval}&fundamental=false${tokenParam}`;

    const response = await fetch(url);
    if (!response.ok) {
      const text = await response.text();
      console.error(`brapi error ${response.status}: ${text}`);
      return new Response(JSON.stringify({ error: 'Erro ao buscar dados' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const result = data.results?.[0];
    if (!result) {
      return new Response(JSON.stringify({ error: 'Ativo não encontrado' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Return only what the frontend needs
    const history = (result.historicalDataPrice || []).map((p: any) => ({
      date: p.date,
      close: p.close,
      volume: p.volume,
    }));

    return new Response(JSON.stringify({
      symbol: result.symbol,
      shortName: result.shortName,
      currentPrice: result.regularMarketPrice,
      change24h: result.regularMarketChangePercent,
      history,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
