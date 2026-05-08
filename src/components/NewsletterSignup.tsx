/**
 * NewsletterSignup — Newsletter VicioCode
 * Backend: Hostinger MySQL via api.php
 * Variantes: inline (artigos), compact (footer), modal (60s delay)
 */
import { useState, useEffect, useRef } from "react";
import { Mail, CheckCircle2, AlertCircle, X, Sparkles } from "lucide-react";

type Variant = "inline" | "compact" | "modal";

interface Props {
  variant?: Variant;
  categories?: string[];
  showAfterMs?: number;
}

const CATEGORIES: Record<string, string> = {
  ia:     "🤖 IA",
  geek:   "🎮 Geek",
  otaku:  "🌸 Otaku",
  invest: "💰 Finanças",
};

const API = "/api.php";

export const NewsletterSignup = ({ variant = "inline", categories = [], showAfterMs = 60_000 }: Props) => {
  const [email, setEmail]     = useState("");
  const [cats, setCats]       = useState<Set<string>>(new Set(categories));
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errMsg, setErrMsg]   = useState("");
  const [visible, setVisible] = useState(variant !== "modal");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (variant !== "modal") return;
    if (sessionStorage.getItem("vc_nl_shown")) return;
    timer.current = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("vc_nl_shown", "1");
    }, showAfterMs);
    return () => clearTimeout(timer.current);
  }, [variant, showAfterMs]);

  if (!visible) return null;

  const toggle = (k: string) => setCats(prev => {
    const n = new Set(prev);
    n.has(k) ? n.delete(k) : n.add(k);
    return n;
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrMsg("Digite um email válido."); setStatus("error"); return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`${API}?action=newsletter_subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), categories: [...cats] }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao inscrever");
      setStatus("success");
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : "Erro. Tente novamente.");
      setStatus("error");
    }
  };

  if (variant === "compact") {
    return status === "success" ? (
      <p className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
        <CheckCircle2 className="h-4 w-4" /> Inscrito! Obrigado 🎉
      </p>
    ) : (
      <form onSubmit={submit} className="flex gap-2 w-full max-w-md">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-input border border-border focus:outline-none focus:ring-1 focus:ring-primary" />
        <button type="submit" disabled={status === "loading"}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap">
          {status === "loading" ? "..." : "Inscrever"}
        </button>
      </form>
    );
  }

  const card = (
    <div className={`relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-7 ${variant === "inline" ? "my-10" : ""}`}>
      {variant === "modal" && (
        <button onClick={() => setVisible(false)} aria-label="Fechar"
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted text-muted-foreground">
          <X className="h-4 w-4" />
        </button>
      )}
      {status === "success" ? (
        <div className="text-center py-4 space-y-3">
          <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold">Você está dentro! 🎉</h3>
          <p className="text-muted-foreground text-sm">Melhores artigos toda semana direto no seu email.</p>
        </div>
      ) : (
        <>
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/15 shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-1.5">
                Newsletter VicioCode <Sparkles className="h-4 w-4 text-yellow-400" />
              </h3>
              <p className="text-sm text-muted-foreground">Os melhores artigos da semana, sem spam.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {Object.entries(CATEGORIES).map(([k, label]) => (
              <button key={k} type="button" onClick={() => toggle(k)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  cats.has(k)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}>
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-3">
            <div className="flex gap-2">
              <input type="email" value={email}
                onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="seu@email.com" autoComplete="email"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <button type="submit" disabled={status === "loading"}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap">
                {status === "loading" ? "Enviando..." : "Inscrever grátis"}
              </button>
            </div>
            {status === "error" && (
              <p className="flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="h-3.5 w-3.5" /> {errMsg}
              </p>
            )}
            <p className="text-[11px] text-muted-foreground">Sem spam. Cancelamento com 1 clique.</p>
          </form>
        </>
      )}
    </div>
  );

  if (variant === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={e => { if (e.target === e.currentTarget) setVisible(false); }}>
        <div className="w-full max-w-md">{card}</div>
      </div>
    );
  }
  return card;
};

export default NewsletterSignup;
