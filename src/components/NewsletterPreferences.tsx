/**
 * NewsletterPreferences — Permite ao usuário gerenciar inscrição e categorias da newsletter
 * Aparece na página de configurações/perfil.
 */
import { useEffect, useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const CATEGORY_LABELS: Record<string, string> = {
  ia: "🤖 Inteligência Artificial",
  geek: "🎮 Geek & Games",
  otaku: "🌸 Anime & Otaku",
  invest: "💰 Finanças",
};

interface Props {
  email: string;
}

const NewsletterPreferences = ({ email }: Props) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (!email) return;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("newsletter_subscribers")
        .select("categories, is_active")
        .eq("email", email.toLowerCase().trim())
        .maybeSingle();
      if (!error && data) {
        setExists(true);
        setSubscribed(!!data.is_active);
        setCategories(new Set(data.categories || []));
      }
      setLoading(false);
    })();
  }, [email]);

  const toggleCat = (key: string) => {
    setCategories((prev) => {
      const n = new Set(prev);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });
  };

  const save = async () => {
    if (!email) return;
    setSaving(true);
    try {
      const payload = {
        email: email.toLowerCase().trim(),
        categories: [...categories],
        is_active: subscribed,
      };
      if (exists) {
        const { error } = await (supabase as any)
          .from("newsletter_subscribers")
          .update({ categories: payload.categories, is_active: payload.is_active })
          .eq("email", payload.email);
        if (error) throw error;
      } else {
        const { error } = await (supabase as any)
          .from("newsletter_subscribers")
          .insert(payload);
        if (error && (error as any).code !== "23505") throw error;
        setExists(true);
      }
      toast({ title: "Preferências salvas!", description: "Suas categorias da newsletter foram atualizadas." });
    } catch (err) {
      toast({ title: "Erro ao salvar", description: "Tente novamente em instantes.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/15">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <p className="text-xs text-muted-foreground">Escolha quais categorias deseja receber por email.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
          <Loader2 className="w-4 h-4 animate-spin" /> Carregando preferências...
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between py-2 border-t border-border">
            <div>
              <p className="font-medium text-foreground text-sm">Inscrição ativa</p>
              <p className="text-xs text-muted-foreground">
                {subscribed ? "Você recebe a newsletter." : "Você não receberá mais emails."}
              </p>
            </div>
            <Switch checked={subscribed} onCheckedChange={setSubscribed} aria-label="Inscrição newsletter" />
          </div>

          <div className={`space-y-2 ${!subscribed ? "opacity-50 pointer-events-none" : ""}`}>
            <p className="text-sm font-medium">Categorias de interesse</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleCat(key)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    categories.has(key)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {subscribed && categories.size === 0 && (
              <p className="flex items-center gap-1.5 text-xs text-amber-500">
                <AlertCircle className="w-3.5 h-3.5" /> Selecione ao menos uma categoria.
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Email: {email}
            </span>
            <Button size="sm" onClick={save} disabled={saving}>
              {saving ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default NewsletterPreferences;
