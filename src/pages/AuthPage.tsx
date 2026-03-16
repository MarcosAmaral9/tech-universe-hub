import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, UserPlus, Mail, Lock, User, AtSign } from "lucide-react";
import { z } from "zod";
import DynamicSEO from "@/components/DynamicSEO";

const API_BASE = "/api.php";
const SESSION_KEY = "viciocode_session";

const signupSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  nickname: z.string().trim().min(2, "Apelido deve ter pelo menos 2 caracteres").max(30),
  email: z.string().trim().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const loginSchema = z.object({
  email: z.string().trim().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// Faz fetch e garante que a resposta é JSON — nunca explode silenciosamente
async function apiFetch(url: string, options?: RequestInit): Promise<{ ok: boolean; data: any }> {
  try {
    const res = await fetch(url, options);
    const text = await res.text();
    let data: any = {};
    try {
      data = JSON.parse(text);
    } catch {
      // PHP retornou HTML (erro fatal, credenciais erradas etc.)
      data = { error: `Erro no servidor (${res.status}). Verifique as configurações do api.php.` };
    }
    return { ok: res.ok, data };
  } catch (e: any) {
    // Erro de rede (sem conexão, timeout etc.)
    return { ok: false, data: { error: "Sem conexão com o servidor. Verifique se o api.php está publicado na Hostinger." } };
  }
}

const AuthPage = () => {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!loading && user) navigate("/configuracoes", { replace: true });
  }, [user, loading, navigate]);

  // Handle Google OAuth callback
  useEffect(() => {
    const googleSession = searchParams.get("google_session");
    const googleError   = searchParams.get("google_error");

    if (googleSession) {
      try {
        const parsed = JSON.parse(atob(googleSession));
        if (parsed.user && parsed.profile) {
          localStorage.setItem(SESSION_KEY, JSON.stringify(parsed));
          toast({ title: "Bem-vindo! 🎉", description: `Olá, ${parsed.profile.nickname || parsed.profile.name}!` });
          window.location.href = "/configuracoes";
        }
      } catch {
        toast({ title: "Erro ao processar login com Google.", variant: "destructive" });
      }
    }

    if (googleError) {
      const msgs: Record<string, string> = {
        cancelled:       "Login com Google cancelado.",
        token_failed:    "Falha ao obter token do Google.",
        userinfo_failed: "Não foi possível obter dados do Google.",
        db_error:        "Erro ao salvar conta. Verifique as credenciais do banco de dados no api.php.",
        not_configured:  "Login com Google não configurado. Adicione GOOGLE_CLIENT_ID e GOOGLE_SECRET no .env.php.",
        exchange_failed: searchParams.get("msg") ? decodeURIComponent(searchParams.get("msg")!) : "Falha na autenticação com Google.",
      };
      toast({ title: msgs[googleError] || "Erro no login com Google.", variant: "destructive" });
    }
  }, [searchParams]);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    const { ok, data } = await apiFetch(`${API_BASE}?action=google_auth_url`);
    if (ok && data.url) {
      window.location.href = data.url;
    } else {
      toast({ title: "Erro", description: data.error || "Não foi possível iniciar login com Google.", variant: "destructive" });
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitting(true);

    try {
      if (isLogin) {
        const parsed = loginSchema.parse({ email, password });
        const { ok, data } = await apiFetch(`${API_BASE}?action=login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: parsed.email, password: parsed.password }),
        });
        if (!ok || data.error) {
          toast({ title: "Erro no login", description: data.error || "Email ou senha incorretos.", variant: "destructive" });
        } else {
          localStorage.setItem(SESSION_KEY, JSON.stringify({ user: data.user, profile: data.profile }));
          window.location.href = "/configuracoes";
        }
      } else {
        const parsed = signupSchema.parse({ name, nickname, email, password });
        const { ok, data } = await apiFetch(`${API_BASE}?action=register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: parsed.name, nickname: parsed.nickname, email: parsed.email, password: parsed.password }),
        });
        if (!ok || data.error) {
          toast({ title: "Erro no cadastro", description: data.error || "Não foi possível criar a conta.", variant: "destructive" });
        } else {
          localStorage.setItem(SESSION_KEY, JSON.stringify({ user: data.user, profile: data.profile }));
          toast({ title: "Conta criada com sucesso! 🎉" });
          window.location.href = "/configuracoes";
        }
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((e) => { if (e.path[0]) fieldErrors[String(e.path[0])] = e.message; });
        setErrors(fieldErrors);
      } else {
        toast({ title: "Erro inesperado", description: "Tente novamente.", variant: "destructive" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return null;
  if (user) return null;

  return (
    <>
      <DynamicSEO />
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
              {isLogin ? <LogIn className="w-8 h-8 text-primary" /> : <UserPlus className="w-8 h-8 text-primary" />}
            </div>
            <h1 className="text-3xl font-bold font-orbitron text-foreground">
              {isLogin ? "Entrar" : "Criar Conta"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Acesse sua conta no VICIO<CODE>" : "Junte-se à comunidade VICIO<CODE>"}
            </p>
          </div>

          {/* Google Login */}
          <Button
            variant="outline"
            className="w-full h-12 gap-3 text-base border-border hover:bg-secondary"
            onClick={handleGoogleLogin}
            disabled={googleLoading || submitting}
          >
            {googleLoading ? (
              <div className="w-5 h-5 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            {googleLoading ? "Redirecionando..." : "Continuar com Google"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">ou</span>
            </div>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2"><User className="w-4 h-4" /> Nome completo</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname" className="flex items-center gap-2"><AtSign className="w-4 h-4" /> Apelido</Label>
                  <Input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Como quer ser chamado" />
                  {errors.nickname && <p className="text-sm text-destructive">{errors.nickname}</p>}
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2"><Lock className="w-4 h-4" /> Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={submitting || googleLoading}>
              {submitting ? (
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : isLogin ? "Entrar" : "Criar conta"}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Não tem conta? " : "Já tem conta? "}
            <button
              onClick={() => { setIsLogin(!isLogin); setErrors({}); }}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? "Criar conta" : "Entrar"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
