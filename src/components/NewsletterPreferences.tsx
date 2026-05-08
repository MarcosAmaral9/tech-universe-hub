/**
 * NewsletterPreferences — Gerenciar inscrição, categorias e ver histórico de envios.
 * Backend: Hostinger MySQL via api.php (newsletter_get / newsletter_update).
 */
import { useEffect, useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2, History, PauseCircle, XCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

const CATEGORY_LABELS: Record<string, string> = {
  ia: "🤖 Inteligência Artificial",
  geek: "🎮 Geek & Games",
  otaku: "🌸 Anime & Otaku",
  invest: "💰 Finanças",
};

const API = "/api.php";

interface Subscriber {
  email: string;
  categories: string; // CSV
  is_active: number | boolean;
  created_at: string;
  updated_at: string;
}
interface SendItem {
  id: number;
  subject: string;
  categories: string;
  status: string;
  sent_at: string;
}

interface Props { email: string }

const fmtDate = (s: string | null) =>
  s ? new Date(s.replace(" ", "T") + (s.includes("T") ? "" : "Z"))
        .toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }) : "—";
const fmtDateTime = (s: string | null) =>
  s ? new Date(s.replace(" ", "T") + (s.includes("T") ? "" : "Z"))
        .toLocaleString("pt-BR", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—";

const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, { label: string; cls: string }> = {
    sent:    { label: "✓ Entregue", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
    failed:  { label: "✗ Falhou",   cls: "bg-red-500/15 text-red-400 border-red-500/30" },
    pending: { label: "⏳ Pendente", cls: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  };
  const m = map[status] || { label: status, cls: "bg-muted text-muted-foreground border-border" };
  return <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${m.cls}`}>{m.label}</span>;
};

const NewsletterPreferences = ({ email }: Props) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [sub, setSub]         = useState<Subscriber | null>(null);
  const [history, setHistory] = useState<SendItem[]>([]);
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [unavailable, setUnavailable] = useState(false);

  const subscribed = !!(sub && (sub.is_active === 1 || sub.is_active === true));

  const load = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const res  = await fetch(`${API}?action=newsletter_get&email=${encodeURIComponent(email)}`);
      const ct   = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) throw new Error("offline");
      const data = await res.json();
      setSub(data.subscriber);
      setHistory(Array.isArray(data.history) ? data.history : []);
      setCategories(new Set(
        ((data.subscriber?.categories ?? "") as string)
          .split(",").map(s => s.trim()).filter(Boolean)
      ));
      setUnavailable(false);
    } catch {
      setUnavailable(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [email]);

  const toggleCat = (k: string) => setCategories(prev => {
    const n = new Set(prev); n.has(k) ? n.delete(k) : n.add(k); return n;
  });

  const updateRemote = async (payload: { is_active?: number; categories?: string[] }) => {
    setSaving(true);
    try {
      const res = await fetch(`${API}?action=newsletter_update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), ...payload }),
      });
      if (!res.ok) throw new Error("err");
      // Otimista: refletir no estado imediatamente
      setSub(prev => prev ? {
        ...prev,
        is_active: payload.is_active ?? prev.is_active,
        categories: payload.categories ? payload.categories.join(",") : prev.categories,
        updated_at: new Date().toISOString().replace("T", " ").slice(0, 19),
      } : prev);
      if (payload.categories) setCategories(new Set(payload.categories));
      return true;
    } catch {
      toast({ title: "Erro ao salvar", description: "Tente novamente em instantes.", variant: "destructive" });
      return false;
    } finally { setSaving(false); }
  };

  const save   = async () => {
    const ok = await updateRemote({ is_active: 1, categories: [...categories] });
    if (ok) toast({ title: "Preferências salvas!", description: "Suas categorias foram atualizadas." });
    if (ok && !sub) load();
  };
  const pause  = async () => {
    const ok = await updateRemote({ is_active: 0 });
    if (ok) toast({ title: "Inscrição pausada", description: "Você não receberá emails até reativar." });
  };
  const resume = async () => {
    const ok = await updateRemote({ is_active: 1 });
    if (ok) toast({ title: "Inscrição reativada!", description: "Você voltará a receber a newsletter." });
  };
  const cancel = async () => {
    const ok = await updateRemote({ is_active: 0, categories: [] });
    if (ok) toast({ title: "Inscrição cancelada", description: "Suas categorias foram limpas." });
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/15"><Mail className="w-5 h-5 text-primary" /></div>
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <p className="text-xs text-muted-foreground">Escolha quais categorias deseja receber por email.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
          <Loader2 className="w-4 h-4 animate-spin" /> Carregando preferências...
        </div>
      ) : unavailable ? (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-400 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>Preferências da newsletter ficam disponíveis na versão publicada do site (Hostinger). No preview estático elas não podem ser carregadas.</span>
        </div>
      ) : (
        <>
          {/* Status atual */}
          <div className="rounded-xl bg-muted/40 border border-border p-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status atual</span>
              <span className={`inline-flex items-center gap-1 font-semibold ${sub && subscribed ? "text-emerald-500" : sub ? "text-amber-500" : "text-muted-foreground"}`}>
                <span className={`w-2 h-2 rounded-full ${sub && subscribed ? "bg-emerald-500" : sub ? "bg-amber-500" : "bg-muted-foreground/40"}`} />
                {!sub ? "Não inscrito" : subscribed ? "Inscrição ativa" : "Pausada"}
              </span>
            </div>
            {sub?.created_at && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Inscrito em</span>
                <span className="text-foreground">{fmtDate(sub.created_at)}</span>
              </div>
            )}
            {sub?.updated_at && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Atualizado em</span>
                <span className="text-foreground">{fmtDateTime(sub.updated_at)}</span>
              </div>
            )}
          </div>

          {/* Categorias */}
          <div className={`space-y-2 ${!subscribed && sub ? "opacity-60" : ""}`}>
            <p className="text-sm font-medium">Categorias de interesse</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <button key={key} type="button" onClick={() => toggleCat(key)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    categories.has(key)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}>
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

          {/* Ações */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border">
            <Button size="sm" onClick={save} disabled={saving} className="flex-1 sm:flex-none">
              {saving ? "Salvando..." : sub ? "Salvar preferências" : "Inscrever-me"}
            </Button>

            {sub && subscribed && (
              <Button size="sm" variant="outline" onClick={pause} disabled={saving}>
                <PauseCircle className="w-4 h-4 mr-1.5" /> Pausar
              </Button>
            )}
            {sub && !subscribed && (
              <Button size="sm" variant="outline" onClick={resume} disabled={saving}>
                <PlayCircle className="w-4 h-4 mr-1.5" /> Reativar
              </Button>
            )}
            {sub && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                    <XCircle className="w-4 h-4 mr-1.5" /> Cancelar inscrição
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancelar sua inscrição?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Você não receberá mais a newsletter VicioCode. Suas categorias serão removidas.
                      Você pode se inscrever novamente quando quiser.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                    <AlertDialogAction onClick={cancel} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Sim, cancelar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>

          <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Email: {email}
          </p>

          {/* Histórico de envios */}
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold">Histórico de envios</h3>
              <span className="text-[10px] text-muted-foreground">({history.length})</span>
            </div>
            {history.length === 0 ? (
              <p className="text-xs text-muted-foreground">Nenhuma newsletter foi enviada para você ainda.</p>
            ) : (
              <ul className="divide-y divide-border rounded-lg border border-border bg-muted/20">
                {history.map(h => (
                  <li key={h.id} className="p-3 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground line-clamp-2">{h.subject}</p>
                      <StatusBadge status={h.status} />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                      <span>{fmtDateTime(h.sent_at)}</span>
                      {h.categories && (
                        <span className="flex flex-wrap gap-1">
                          {h.categories.split(",").filter(Boolean).map(c => (
                            <span key={c} className="px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                              {CATEGORY_LABELS[c.trim()]?.replace(/^[^a-zA-Z]+/, "") || c.trim()}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default NewsletterPreferences;
