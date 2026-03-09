import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, UserPlus, Mail, Lock, User, AtSign } from "lucide-react";
import { z } from "zod";
import DynamicSEO from "@/components/DynamicSEO";

const TURNSTILE_SITE_KEY = "0x4AAAAAACoJGOSSf4mIgNUY";

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

const AuthPage = () => {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!loading && user) navigate("/configuracoes", { replace: true });
  }, [user, loading, navigate]);

  // Load Turnstile script
  useEffect(() => {
    if (isLogin) return;

    const existingScript = document.querySelector('script[src*="turnstile"]');
    if (existingScript) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
    script.async = true;

    (window as any).onTurnstileLoad = () => renderTurnstile();
    document.head.appendChild(script);

    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        (window as any).turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, [isLogin]);

  const renderTurnstile = () => {
    if (!turnstileRef.current || !(window as any).turnstile) return;
    if (turnstileWidgetId.current) {
      (window as any).turnstile.remove(turnstileWidgetId.current);
    }
    turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token: string) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(null),
      theme: "dark",
    });
  };

  const handleGoogleLogin = async () => {
    setSubmitting(true);
    const { error } = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (error) {
      toast({ title: "Erro", description: "Falha ao conectar com Google.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitting(true);

    try {
      if (isLogin) {
        const parsed = loginSchema.parse({ email, password });
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.email,
          password: parsed.password,
        });
        if (error) {
          toast({ title: "Erro no login", description: error.message === "Invalid login credentials" ? "Email ou senha incorretos." : error.message, variant: "destructive" });
        } else {
          toast({ title: "Bem-vindo de volta! 🎉" });
          navigate("/configuracoes", { replace: true });
        }
      } else {
        if (!turnstileToken) {
          toast({ title: "Captcha", description: "Complete o captcha antes de continuar.", variant: "destructive" });
          setSubmitting(false);
          return;
        }

        const parsed = signupSchema.parse({ name, nickname, email, password });

        // Verify turnstile via edge function
        const { data: verification, error: verifyError } = await supabase.functions.invoke("verify-turnstile", {
          body: { token: turnstileToken },
        });

        if (verifyError || !verification?.success) {
          toast({ title: "Captcha inválido", description: "Tente novamente.", variant: "destructive" });
          setTurnstileToken(null);
          if ((window as any).turnstile && turnstileWidgetId.current) {
            (window as any).turnstile.reset(turnstileWidgetId.current);
          }
          setSubmitting(false);
          return;
        }

        const { error } = await supabase.auth.signUp({
          email: parsed.email,
          password: parsed.password,
          options: {
            data: { name: parsed.name, nickname: parsed.nickname },
          },
        });

        if (error) {
          toast({ title: "Erro no cadastro", description: error.message, variant: "destructive" });
        } else {
          toast({ title: "Conta criada com sucesso! 🎉", description: "Você já pode usar o VICIO<CODE>." });
          navigate("/configuracoes", { replace: true });
        }
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((e) => { if (e.path[0]) fieldErrors[String(e.path[0])] = e.message; });
        setErrors(fieldErrors);
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
        <div className="w-full max-w-md space-y-8">
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
            disabled={submitting}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continuar com Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">ou</span>
            </div>
          </div>

          {/* Email Form */}
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
                <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" className="pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
              {isLogin && (
                <button
                  type="button"
                  onClick={async () => {
                    if (!email.trim()) {
                      toast({ title: "Informe seu email", description: "Digite seu email acima para receber o link de recuperação.", variant: "destructive" });
                      return;
                    }
                    const { error } = await supabase.auth.resetPasswordForEmail(email, {
                      redirectTo: `${window.location.origin}/redefinir-senha`,
                    });
                    if (error) {
                      toast({ title: "Erro", description: error.message, variant: "destructive" });
                    } else {
                      toast({ title: "Email enviado! 📧", description: "Verifique sua caixa de entrada para redefinir sua senha." });
                    }
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Esqueci minha senha
                </button>
              )}
            </div>

            {/* Turnstile captcha for signup */}
            {!isLogin && (
              <div className="flex justify-center">
                <div ref={turnstileRef} />
              </div>
            )}

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={submitting}>
              {submitting ? (
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : isLogin ? "Entrar" : "Criar conta"}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Não tem conta? " : "Já tem conta? "}
            <button onClick={() => { setIsLogin(!isLogin); setErrors({}); setTurnstileToken(null); }} className="text-primary font-medium hover:underline">
              {isLogin ? "Criar conta" : "Entrar"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
