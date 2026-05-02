/**
 * NewsletterSignup — Captura de email para newsletter do VicioCode
 *
 * Estratégia: armazena emails no Supabase (tabela newsletter_subscribers)
 * e exibe em 3 variantes:
 *   - inline: bloco entre seções de artigos (padrão)
 *   - compact: linha única para footer
 *   - modal: popup após 60s de leitura (ativado nos artigos)
 *
 * Para ativar o backend:
 *   1. Crie a tabela no Supabase SQL Editor:
 *      CREATE TABLE newsletter_subscribers (
 *        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *        email text UNIQUE NOT NULL,
 *        categories text[] DEFAULT '{}',
 *        created_at timestamptz DEFAULT now()
 *      );
 *   2. A inserção usa o supabase client já configurado no projeto.
 */
import { useState, useEffect, useRef } from "react";
import { Mail, CheckCircle2, AlertCircle, X, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Variant = "inline" | "compact" | "modal";

interface Props {
  variant?: Variant;
  categories?: string[];   // pré-seleciona categorias de interesse
  showAfterMs?: number;    // para variant="modal", delay antes de mostrar
}

const CATEGORY_LABELS: Record<string, string> = {
  ia:     "🤖 Inteligência Artificial",
  geek:   "🎮 Geek & Games",
  otaku:  "🌸 Anime & Otaku",
  invest: "💰 Finanças",
};

const NewsletterSignup = ({ variant = "inline", categories = [], showAfterMs = 60_000 }: Props) => {
  const [email, setEmail]           = useState("");
  const [selectedCats, setSelected] = useState<Set<string>>(new Set(categories));
  const [status, setStatus]         = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg]     = useState("");
  const [visible, setVisible]       = useState(variant !== "modal");
  const timerRef                    = useRef<ReturnType<typeof setTimeout>>();

  // Modal: aparece após showAfterMs de leitura, uma vez por sessão
  useEffect(() => {
    if (variant !== "modal") return;
    const already = sessionStorage.getItem("vc_newsletter_shown");
    if (already) return;
    timerRef.current = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("vc_newsletter_shown", "1");
    }, showAfterMs);
    return () => clearTimeout(timerRef.current);
  }, [variant, showAfterMs]);

  if (!visible) return null;

  const toggleCat = (key: string) =>
    setSelected(prev => {
      const n = new Set(prev);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Digite um email válido.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .upsert({ email: email.toLowerCase().trim(), categories: [...selectedCats] }, { onConflict: "email" });
      if (error) throw error;
      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("duplicate") || msg.includes("unique")) {
        setStatus("success"); // already subscribed → treat as success
      } else {
        setErrorMsg("Erro ao salvar. Tente novamente.");
        setStatus("error");
      }
    }
  };

  // ── Compact (footer) ──────────────────────────────────────────────────────
  if (variant === "compact") {
    return (
      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" /> Inscrito! Obrigado 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 w-full">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Inscrever"}
            </button>
          </form>
        )}
      </div>
    );
  }

  // ── Inline content ────────────────────────────────────────────────────────
  const card = (
    <div className={`relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-7 ${variant === "modal" ? "" : "my-10"}`}>
      {variant === "modal" && (
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted text-muted-foreground"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {status === "success" ? (
        <div className="text-center py-4 space-y-3">
          <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold">Você está dentro! 🎉</h3>
          <p className="text-muted-foreground text-sm">
            Toda semana os melhores artigos de IA, Games, Finanças e Anime direto no seu email.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/15 shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-1.5">
                Newsletter VicioCode
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                Os melhores artigos da semana, sem spam. Cancele quando quiser.
              </p>
            </div>
          </div>

          {/* Category picker */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleCat(key)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  selectedCats.has(key)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="seu@email.com"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                autoComplete="email"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap transition-colors"
              >
                {status === "loading" ? "Enviando..." : "Inscrever grátis"}
              </button>
            </div>
            {status === "error" && (
              <p className="flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="h-3.5 w-3.5" /> {errorMsg}
              </p>
            )}
            <p className="text-[11px] text-muted-foreground">
              Sem spam. Cancelamento com 1 clique. Política de privacidade respeitada.
            </p>
          </form>
        </>
      )}
    </div>
  );

  // Modal overlay
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
