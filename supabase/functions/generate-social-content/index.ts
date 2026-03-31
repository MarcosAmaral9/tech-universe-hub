import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const categoryMap: Record<string, string> = {
  ia: "Inteligência Artificial e Tecnologia",
  invest: "Finanças e Investimentos",
  geek: "Cultura Geek, Games e Séries",
  otaku: "Anime, Manga e Cultura Otaku",
};

async function generateForPlatform(
  apiKey: string,
  title: string,
  excerpt: string,
  category: string,
  platform: "instagram" | "tiktok",
) {
  const isIG = platform === "instagram";
  const platformInstructions = isIG
    ? "Use linguagem envolvente e profissional. Máximo 2200 caracteres. Inclua emojis estratégicos e hashtags relevantes do Instagram (máximo 30)."
    : "Use linguagem jovem e dinâmica. Inclua emojis. Máximo 150 caracteres na legenda principal. Adicione hashtags virais do TikTok.";

  const systemPrompt = `Você é um social media manager especialista em criar conteúdo viral para ${isIG ? "Instagram" : "TikTok"}.
O blog VÍCIO<CODE> cobre: IA, Finanças, Geek e Otaku.
Categoria deste artigo: ${categoryMap[category] || category}.

${platformInstructions}
Sugira uma música trending que combine com o conteúdo para usar como áudio de fundo no ${isIG ? "Instagram Reels" : "TikTok"}. Considere a categoria "${categoryMap[category] || category}" e o tom do artigo. Forneça artista e nome da música.

Responda SEMPRE em JSON válido com esta estrutura:
{
  "caption": "legenda principal com emojis",
  "hashtags": ["hashtag1", "hashtag2", ...],
  "cta": "resumo curto do artigo com call-to-action para o site (máx 100 chars)",
  "hookLine": "frase de impacto para abrir o post (gancho)",
  "musicSuggestion": "Artista - Nome da Música"
}`;

  const toolProperties: Record<string, unknown> = {
    caption: { type: "string", description: "Legenda principal do post com emojis" },
    hashtags: { type: "array", items: { type: "string" }, description: "Lista de hashtags" },
    cta: { type: "string", description: "Resumo curto com call-to-action" },
    hookLine: { type: "string", description: "Frase de impacto / gancho" },
    musicSuggestion: { type: "string", description: "Sugestão de música trending (Artista - Nome)" },
  };

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Crie um post para o artigo:\nTítulo: ${title}\nResumo: ${excerpt}` },
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "create_social_post",
            description: "Cria um post para rede social baseado em artigo do blog",
            parameters: {
              type: "object",
              properties: toolProperties,
              required: ["caption", "hashtags", "cta", "hookLine", "musicSuggestion"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "create_social_post" } },
    }),
  });

  if (!res.ok) {
    const status = res.status;
    const errorText = await res.text();
    console.error(`AI text error (${platform}):`, status, errorText);
    if (status === 429) throw Object.assign(new Error("Rate limit exceeded"), { status: 429 });
    if (status === 402) throw Object.assign(new Error("Créditos insuficientes"), { status: 402 });
    throw new Error("AI gateway error");
  }

  const aiData = await res.json();
  const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
  let content;
  if (toolCall) {
    content = JSON.parse(toolCall.function.arguments);
  } else {
    content = JSON.parse(aiData.choices?.[0]?.message?.content || "{}");
  }
  return content;
}

async function generateImage(apiKey: string, title: string, category: string, platform: "instagram" | "tiktok") {
  const isIG = platform === "instagram";
  const imagePrompt = isIG
    ? `Crie uma imagem quadrada profissional para Instagram sobre: "${title}". Design limpo e moderno com fundo gradiente escuro com tons de roxo e azul. Categoria: ${categoryMap[category] || category}. Toda escrita e texto na imagem devem estar em português brasileiro. Proporção 1:1 quadrada. Não inclua texto na imagem.`
    : `Crie uma imagem vertical vibrante e chamativa para TikTok sobre: "${title}". Estilo moderno, cores neon, fundo escuro. Categoria: ${categoryMap[category] || category}. Toda escrita e texto na imagem devem estar em português brasileiro. Proporção 9:16 vertical. Não inclua texto na imagem.`;

  try {
    const imgRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.1-flash-image-preview",
        messages: [{ role: "user", content: imagePrompt }],
        modalities: ["image", "text"],
      }),
    });

    if (imgRes.ok) {
      const imgData = await imgRes.json();
      const imageUrl = imgData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (imageUrl) return imageUrl;
    }
  } catch (e) {
    console.error(`Image generation error (${platform}):`, e);
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const { title, excerpt, category, platform } = await req.json();

    if (!title || !excerpt) {
      return new Response(JSON.stringify({ error: "title and excerpt are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Support "both" platform for generating IG + TT in parallel
    if (platform === "both") {
      const [igText, ttText] = await Promise.all([
        generateForPlatform(LOVABLE_API_KEY, title, excerpt, category, "instagram"),
        generateForPlatform(LOVABLE_API_KEY, title, excerpt, category, "tiktok"),
      ]);

      // Generate images in parallel
      const [igImage, ttImage] = await Promise.all([
        generateImage(LOVABLE_API_KEY, title, category, "instagram"),
        generateImage(LOVABLE_API_KEY, title, category, "tiktok"),
      ]);

      return new Response(JSON.stringify({
        instagram: { ...igText, image: igImage },
        tiktok: { ...ttText, image: ttImage },
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Single platform
    const p = platform === "tiktok" ? "tiktok" : "instagram";
    const content = await generateForPlatform(LOVABLE_API_KEY, title, excerpt, category, p);
    const image = await generateImage(LOVABLE_API_KEY, title, category, p);

    return new Response(JSON.stringify({ ...content, image }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error("generate-social-content error:", e);
    const status = e?.status || 500;
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
