/**
 * Guarda de administrador para edge functions sensíveis.
 *
 * Valida o JWT enviado pelo cliente contra o Auth do backend e confirma que o
 * e-mail do usuário é o do administrador do site. Sem isso, qualquer pessoa na
 * internet poderia chamar as funções de geração de conteúdo (gastando créditos
 * de IA) ou publicar nas redes sociais via Buffer.
 */
const ADMIN_EMAIL = (Deno.env.get("ADMIN_EMAIL") ?? "viciocode01@gmail.com").toLowerCase();

export async function requireAdmin(req: Request): Promise<{ email: string } | Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };

  const deny = (status: number, error: string) =>
    new Response(JSON.stringify({ error }), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  const authHeader = req.headers.get("Authorization") ?? "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) return deny(401, "Autenticação obrigatória");

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!supabaseUrl || !anonKey) return deny(500, "Backend não configurado");

  const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: anonKey },
  });

  if (!res.ok) {
    console.error(`Auth check failed [${res.status}]: ${await res.text()}`);
    return deny(401, "Sessão inválida ou expirada");
  }

  const user = await res.json();
  const email = String(user?.email ?? "").toLowerCase();
  if (!email || email !== ADMIN_EMAIL) return deny(403, "Acesso restrito ao administrador");

  return { email };
}
