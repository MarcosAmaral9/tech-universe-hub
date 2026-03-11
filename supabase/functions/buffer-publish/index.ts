import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const BUFFER_ACCESS_TOKEN = Deno.env.get("BUFFER_ACCESS_TOKEN");
    if (!BUFFER_ACCESS_TOKEN) throw new Error("BUFFER_ACCESS_TOKEN is not configured");

    const { action, text, profileIds, mediaUrl, scheduledAt } = await req.json();

    const authHeaders = {
      "Authorization": `Bearer ${BUFFER_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    };

    // Get Buffer profiles (channels) - try v1 with query param first, fallback to header auth
    if (action === "profiles") {
      // Try with Bearer header (newer tokens)
      let res = await fetch("https://api.bufferapp.com/1/profiles.json", {
        headers: { "Authorization": `Bearer ${BUFFER_ACCESS_TOKEN}` },
      });

      // If that fails, try query param approach (legacy tokens)
      if (!res.ok) {
        const errText1 = await res.text();
        console.log("Bearer auth failed, trying query param:", res.status, errText1);
        
        res = await fetch(`https://api.bufferapp.com/1/profiles.json?access_token=${BUFFER_ACCESS_TOKEN}`);
      }

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Buffer API profiles error [${res.status}]: ${errText}`);
      }
      const profiles = await res.json();
      return new Response(JSON.stringify({ profiles }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create a post
    if (action === "create") {
      if (!text || !profileIds || profileIds.length === 0) {
        return new Response(JSON.stringify({ error: "text and profileIds are required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const formData = new URLSearchParams();
      formData.append("text", text);
      formData.append("access_token", BUFFER_ACCESS_TOKEN);

      for (const pid of profileIds) {
        formData.append("profile_ids[]", pid);
      }

      if (mediaUrl) {
        formData.append("media[photo]", mediaUrl);
      }

      if (scheduledAt) {
        formData.append("scheduled_at", scheduledAt);
      }

      const res = await fetch("https://api.bufferapp.com/1/updates/create.json", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Buffer API create error [${res.status}]: ${errText}`);
      }

      const result = await res.json();
      return new Response(JSON.stringify({ success: true, update: result }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action. Use 'profiles' or 'create'" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("buffer-publish error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
