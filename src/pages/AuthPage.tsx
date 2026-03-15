import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const AuthPage = () => {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!loading && user) navigate("/configuracoes", { replace: true });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitting(true);

    try {
      if (isLogin) {
        const parsed = loginSchema.parse({ email, password });

        const res = await fetch(`${API_BASE}?action=login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: parsed.email, password: parsed.password }),
        });
        const data = await res.json();

        if (!res.ok || data.error) {
          toast({ title: "Erro no login", description: data.error || "Email ou senha incorretos.", variant: "destructive" });
        } else {
          localStorage.setItem(SESSION_KEY, JSON.stringify({ user: data.user, profile: data.profile }));
          window.location.href = "/configuracoes";
        }
      } else {
        const parsed = signupSchema.parse({ name, nickname, email, password });

        const res = await fetch(`${API_BASE}?action=register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: parsed.name,
            nickname: parsed.nickname,
            email: parsed.email,
            password: parsed.password,
          }),
        });
        const data = await res.json();

        if (!res.ok || data.error) {
          toast({ title: "Erro no cadastro", description: data.error || "Não foi possível criar a conta.", variant: "destructive" });
        } else {
          localStorage.setItem(SESSION_KEY, JSON.stringify({ user: data.user, profile: data.profile }));
          toast({ title: "Conta criada com sucesso! 🎉", description: "Você já pode usar o VICIO<CODE>." });
          window.location.href = "/configuracoes";
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

          {/* Form */}
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

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={submitting}>
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
