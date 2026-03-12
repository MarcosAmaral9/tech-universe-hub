import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const { title, excerpt, category, platform, generateImage } = await req.json();

    if (!title || !excerpt) {
      return new Response(JSON.stringify({ error: "title and excerpt are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const platformInstructions = platform === "tiktok"
      ? "Use linguagem jovem e dinâmica. Inclua emojis. Máximo 150 caracteres na legenda principal. Adicione hashtags virais do TikTok."
      : "Use linguagem envolvente e profissional. Máximo 2200 caracteres. Inclua emojis estratégicos e hashtags relevantes do Instagram (máximo 30).";

    const categoryMap: Record<string, string> = {
      ia: "Inteligência Artificial e Tecnologia",
      invest: "Finanças e Investimentos",
      geek: "Cultura Geek, Games e Séries",
      otaku: "Anime, Manga e Cultura Otaku",
    };

    const systemPrompt = `Você é um social media manager especialista em criar conteúdo viral para ${platform === "tiktok" ? "TikTok" : "Instagram"}.
O blog VÍCIO<CODE> cobre: IA, Finanças, Geek e Otaku.
Categoria deste artigo: ${categoryMap[category] || category}.

${platformInstructions}

Responda SEMPRE em JSON válido com esta estrutura:
{
  "caption": "legenda principal com emojis",
  "hashtags": ["hashtag1", "hashtag2", ...],
  "cta": "resumo curto do artigo com call-to-action para o site (máx 100 chars)",
  "hookLine": "frase de impacto para abrir o post (gancho)"
}`;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Crie um post para o artigo:\nTítulo: ${title}\nResumo: ${excerpt}` },
    ];

    const body: Record<string, unknown> = {
      model: "google/gemini-3-flash-preview",
      messages,
      tools: [
        {
          type: "function",
          function: {
            name: "create_social_post",
            description: "Cria um post para rede social baseado em artigo do blog",
            parameters: {
              type: "object",
              properties: {
                caption: { type: "string", description: "Legenda principal do post com emojis" },
                hashtags: { type: "array", items: { type: "string" }, description: "Lista de hashtags" },
                cta: { type: "string", description: "Resumo curto com call-to-action" },
                hookLine: { type: "string", description: "Frase de impacto / gancho" },
              },
              required: ["caption", "hashtags", "cta", "hookLine"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "create_social_post" } },
    };

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Tente novamente em alguns segundos." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes. Adicione créditos ao workspace." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await aiResponse.text();
      console.error("AI gateway error:", aiResponse.status, errorText);
      throw new Error("AI gateway error");
    }

    const aiData = await aiResponse.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    let content;
    if (toolCall) {
      content = JSON.parse(toolCall.function.arguments);
    } else {
      const raw = aiData.choices?.[0]?.message?.content || "{}";
      content = JSON.parse(raw);
    }

    // Generate image if requested — always in PT-BR with platform-optimized dimensions
    let imageBase64 = null;
    if (generateImage) {
      // Instagram: 1080x1080 (1:1) — best for feed posts
      // TikTok: 1080x1920 (9:16) — best for vertical content
      const imagePrompt = platform === "tiktok"
        ? `Crie uma imagem vertical vibrante e chamativa para TikTok sobre: "${title}". Estilo moderno, cores neon, fundo escuro. Categoria: ${categoryMap[category] || category}. Toda escrita e texto na imagem devem estar em português brasileiro. Proporção 9:16 vertical.`
        : `Crie uma imagem quadrada profissional para Instagram sobre: "${title}". Design limpo e moderno com fundo gradiente. Categoria: ${categoryMap[category] || category}. Toda escrita e texto na imagem devem estar em português brasileiro. Proporção 1:1 quadrada.`;

      const imgResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3.1-flash-image-preview",
          messages: [{ role: "user", content: imagePrompt }],
          modalities: ["image", "text"],
        }),
      });

      if (imgResponse.ok) {
        const imgData = await imgResponse.json();
        const imageUrl = imgData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
        if (imageUrl) {
          imageBase64 = imageUrl;
        }
      }
    }

    return new Response(JSON.stringify({ ...content, image: imageBase64 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-social-content error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
