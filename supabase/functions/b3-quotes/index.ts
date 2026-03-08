import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const DEFAULT_TICKERS = 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,RENT3,MGLU3,SUZB3';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get('BRAPI_TOKEN');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Token não configurado' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate and sanitize ticker input to prevent injection
    const VALID_TICKER = /^[A-Z0-9]{4,6}\d{1,2}$/;
    const { searchParams } = new URL(req.url);
    const rawTickers = (searchParams.get('tickers') || DEFAULT_TICKERS).split(',');
    const tickers = rawTickers
      .map(t => t.trim().toUpperCase())
      .filter(t => VALID_TICKER.test(t))
      .slice(0, 15); // Max 15 tickers to prevent abuse

    if (tickers.length === 0) {
      return new Response(JSON.stringify({ error: 'Nenhum ticker válido fornecido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const results = [];

    for (const ticker of tickers) {
      try {
        const response = await fetch(
          `https://brapi.dev/api/quote/${ticker.trim()}?fundamental=false&token=${token}`
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Erro ao buscar ${ticker}: ${response.status}`, errorText);
          continue;
        }

        const data = await response.json();
        if (data.results?.length > 0) {
          results.push(...data.results);
        }

        // Delay entre requisições para evitar rate limit
        if (tickers.indexOf(ticker) < tickers.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } catch (err) {
        console.error(`Erro ao buscar ${ticker}:`, err);
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
