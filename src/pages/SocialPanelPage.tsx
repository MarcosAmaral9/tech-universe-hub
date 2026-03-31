import { useState, useEffect } from "react";
import { blogPosts } from "@/data/posts";
import { useAuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DynamicSEO from "@/components/DynamicSEO";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles, Instagram, Music2, Loader2, Copy, RefreshCw,
  Music, Zap, Image as ImageIcon, ClipboardCopy,
  Hash, MessageSquare, Megaphone, Anchor, Download,
} from "lucide-react";
import SocialHistoryPanel, { saveToHistory } from "@/components/social/SocialHistoryPanel";

const COUNTER_KEY = "viciocode_social_gen_count";
const ADMIN_EMAIL = "viciocode01@gmail.com";

// In sandbox/preview (lovable.app), allow access without login
const isSandbox = typeof window !== "undefined" && window.location.hostname.includes("lovable.app");

const getTodayCount = (): number => {
  try {
    const stored = JSON.parse(localStorage.getItem(COUNTER_KEY) || "{}");
    const today = new Date().toISOString().slice(0, 10);
    return stored.date === today ? stored.count : 0;
  } catch { return 0; }
};

const incrementTodayCount = (): number => {
  const today = new Date().toISOString().slice(0, 10);
  const count = getTodayCount() + 1;
  localStorage.setItem(COUNTER_KEY, JSON.stringify({ date: today, count }));
  return count;
};

interface GeneratedContent {
  caption: string;
  hashtags: string[];
  cta: string;
  hookLine: string;
  imagePrompt?: string;
  musicSuggestion?: string;
  image?: string | null;
}

interface EditedContent {
  caption: string;
  hashtags: string;
  cta: string;
  hookLine: string;
  musicSuggestion: string;
  image: string | null;
}

interface PlatformContent {
  instagram?: GeneratedContent;
  tiktok?: GeneratedContent;
}

const emptyEdited = (): EditedContent => ({
  caption: "", hashtags: "", cta: "", hookLine: "", musicSuggestion: "", image: null,
});

/* ─── SocialPanelPage ─────────────────────────────────────────────────────── */

const SocialPanelPage = () => {
  const { user, loading: authLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPost, setSelectedPost]   = useState("");
  const [generating, setGenerating]       = useState(false);
  const [retryIn, setRetryIn]             = useState(0);
  const [content, setContent]             = useState<PlatformContent>({});
  const [editedIG, setEditedIG]           = useState<EditedContent>(emptyEdited());
  const [editedTT, setEditedTT]           = useState<EditedContent>(emptyEdited());
  const [todayCount, setTodayCount]       = useState(getTodayCount);
  const [historyKey, setHistoryKey]       = useState(0);

  useEffect(() => {
    if (isSandbox) return; // skip auth check in sandbox
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) navigate("/");
  }, [user, authLoading, navigate]);

  /* ── Geração via Edge Function (Lovable AI credits) ── */
  const generateBothPlatforms = async (post: any): Promise<{ instagram: GeneratedContent; tiktok: GeneratedContent }> => {
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-social-content`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        platform: "both",
      }),
    });

    const data = await res.json();
    if (!res.ok || data?.error) {
      const err: any = new Error(data?.error || "Erro ao gerar conteúdo");
      if (res.status === 429) err.retryIn = 30;
      throw err;
    }
    if (!data?.instagram || !data?.tiktok) throw new Error("Resposta incompleta. Tente novamente.");
    return data;
  };

  const toEdited = (d: GeneratedContent): EditedContent => ({
    caption:         d.caption || "",
    hashtags:        (d.hashtags || []).map((h) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
    cta:             d.cta || "",
    hookLine:        d.hookLine || "",
    musicSuggestion: d.musicSuggestion || "",
    image:           d.image || null,
  });

  const handleGenerate = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) { toast({ title: "Selecione um artigo", variant: "destructive" }); return; }

    setGenerating(true);
    setContent({});
    setEditedIG(emptyEdited());
    setEditedTT(emptyEdited());

    try {
      const both = await generateBothPlatforms(post);

      const results: PlatformContent = {
        instagram: both.instagram,
        tiktok: both.tiktok,
      };

      setEditedIG(toEdited(both.instagram));
      setEditedTT(toEdited(both.tiktok));
      const igEdited = toEdited(both.instagram);
      const ttEdited = toEdited(both.tiktok);
      saveToHistory({ id: `${Date.now()}-ig`, postTitle: post.title, platform: "instagram", caption: igEdited.caption, hookLine: igEdited.hookLine, cta: igEdited.cta, hashtags: igEdited.hashtags, musicSuggestion: igEdited.musicSuggestion, image: igEdited.image, createdAt: new Date().toISOString() });
      saveToHistory({ id: `${Date.now()}-tt`, postTitle: post.title, platform: "tiktok", caption: ttEdited.caption, hookLine: ttEdited.hookLine, cta: ttEdited.cta, hashtags: ttEdited.hashtags, musicSuggestion: ttEdited.musicSuggestion, image: ttEdited.image, createdAt: new Date().toISOString() });

      setContent(results);
      setHistoryKey((k) => k + 1);
      setTodayCount(incrementTodayCount());
      toast({ title: "✅ Conteúdo gerado para Instagram e TikTok!" });
    } catch (e: any) {
      toast({ title: "Erro ao gerar conteúdo", description: e.message, variant: "destructive" });
      if (e?.retryIn) {
        setRetryIn(e.retryIn);
        const iv = setInterval(() => setRetryIn((s) => { if (s <= 1) { clearInterval(iv); return 0; } return s - 1; }), 1000);
      }
    } finally {
      setGenerating(false);
    }
  };

  const copyAll = (ed: EditedContent, label: string) => {
    const lines = [ed.hookLine, "", ed.caption, "", ed.cta, "", ed.hashtags];
    if (ed.musicSuggestion) lines.push("", `🎵 Música: ${ed.musicSuggestion}`);
    navigator.clipboard.writeText(lines.join("\n"));
    toast({ title: `${label} — texto copiado!` });
  };

  const copyField = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} copiado!` });
  };

  // In production require admin; in sandbox allow everyone
  if (!isSandbox && (authLoading || !user || user.email !== ADMIN_EMAIL)) return null;

  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const hasContent  = !!(content.instagram || content.tiktok);

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto space-y-6">
      <DynamicSEO />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-primary" />
          <h1 className="text-2xl font-bold font-orbitron">Painel Social Media</h1>
        </div>
        <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="font-semibold">{todayCount}</span>
          <span className="text-muted-foreground">{todayCount === 1 ? "geração" : "gerações"} hoje</span>
        </Badge>
      </div>

      {isSandbox && (
        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 text-sm text-yellow-200">
          ⚠️ Modo sandbox — acesso liberado sem login. No site publicado, apenas o administrador tem acesso.
        </div>
      )}

      {/* ── Seleção de artigo ── */}
      <Card className="border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">1</Badge>
            Selecionar artigo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedPost} onValueChange={setSelectedPost}>
            <SelectTrigger>
              <SelectValue placeholder="Escolha um artigo do blog..." />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {sortedPosts.map((post) => (
                <SelectItem key={post.id} value={post.id}>
                  <span className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs uppercase shrink-0">{post.category}</Badge>
                    {post.title.length > 55 ? post.title.slice(0, 55) + "…" : post.title}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Info do que será gerado */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-secondary/30">
              <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
              <span className="text-muted-foreground">Instagram — legenda + hashtags + imagem</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-secondary/30">
              <Music2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-muted-foreground">TikTok — legenda curta + imagem</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-secondary/30">
              <Music className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-muted-foreground">Sugestão de música para ambas</span>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!selectedPost || generating || retryIn > 0}
            className="w-full h-11 text-base font-semibold"
          >
            {generating ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gerando conteúdo e imagens...</>
            ) : retryIn > 0 ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Aguarde {retryIn}s...</>
            ) : (
              <><Sparkles className="w-4 h-4 mr-2" /> Gerar para Instagram e TikTok</>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* ── Resultados em abas ── */}
      {hasContent && (
        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">2</Badge>
                Conteúdo gerado — edite e copie
              </span>
              <Button variant="outline" size="sm" onClick={handleGenerate} disabled={generating}>
                <RefreshCw className="w-4 h-4 mr-1" /> Regerar tudo
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={content.instagram ? "instagram" : "tiktok"}>
              <TabsList className="w-full mb-4">
                {content.instagram && (
                  <TabsTrigger value="instagram" className="flex-1 gap-2">
                    <Instagram className="w-4 h-4 text-pink-500" /> Instagram
                  </TabsTrigger>
                )}
                {content.tiktok && (
                  <TabsTrigger value="tiktok" className="flex-1 gap-2">
                    <Music2 className="w-4 h-4 text-cyan-400" /> TikTok
                  </TabsTrigger>
                )}
              </TabsList>

              {content.instagram && (
                <TabsContent value="instagram">
                  <PlatformEditor
                    platform="instagram"
                    edited={editedIG}
                    setEdited={setEditedIG}
                    onCopyAll={() => copyAll(editedIG, "Instagram")}
                    onCopyField={copyField}
                    generating={generating}
                  />
                </TabsContent>
              )}
              {content.tiktok && (
                <TabsContent value="tiktok">
                  <PlatformEditor
                    platform="tiktok"
                    edited={editedTT}
                    setEdited={setEditedTT}
                    onCopyAll={() => copyAll(editedTT, "TikTok")}
                    onCopyField={copyField}
                    generating={generating}
                  />
                </TabsContent>
              )}
            </Tabs>
          </CardContent>
        </Card>
      )}

      <SocialHistoryPanel key={historyKey} />
    </div>
  );
};

/* ─── PlatformEditor ─────────────────────────────────────────────────────── */

interface PlatformEditorProps {
  platform: "instagram" | "tiktok";
  edited: EditedContent;
  setEdited: React.Dispatch<React.SetStateAction<EditedContent>>;
  onCopyAll: () => void;
  onCopyField: (text: string, label: string) => void;
  generating: boolean;
}

const PlatformEditor = ({ platform, edited, setEdited, onCopyAll, onCopyField, generating }: PlatformEditorProps) => {
  const isIG = platform === "instagram";

  const downloadImage = () => {
    if (!edited.image) return;
    const link = document.createElement("a");
    link.href = edited.image;
    link.download = `social-${platform}-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="space-y-5">

      {/* Botão copiar tudo */}
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={onCopyAll} disabled={generating}>
          <Copy className="w-4 h-4 mr-1.5" /> Copiar tudo
        </Button>
      </div>

      {/* Imagem gerada */}
      {edited.image && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Imagem gerada — {isIG ? "Instagram (1:1)" : "TikTok (9:16)"}
              </span>
            </div>
            <Button variant="secondary" size="sm" onClick={downloadImage}>
              <Download className="w-3.5 h-3.5 mr-1.5" /> Baixar
            </Button>
          </div>
          <img
            src={edited.image}
            alt={`Imagem gerada para ${platform}`}
            className={`rounded-lg mx-auto object-cover ${isIG ? "max-h-80 aspect-square" : "max-h-96 aspect-[9/16]"}`}
          />
        </div>
      )}

      {/* Gancho */}
      <FieldWithCopy
        icon={<Anchor className="w-4 h-4" />}
        label="Gancho (primeira linha)"
        hint="Frase que prende a atenção logo no início"
        value={edited.hookLine}
        rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, hookLine: v }))}
        onCopy={() => onCopyField(edited.hookLine, "Gancho")}
      />

      {/* Legenda */}
      <FieldWithCopy
        icon={<MessageSquare className="w-4 h-4" />}
        label={isIG ? "Legenda (150–300 caracteres)" : "Legenda (80–150 caracteres)"}
        hint={isIG ? "Tom inspirador e visual, emojis moderados" : "Tom jovem e direto, emojis expressivos"}
        value={edited.caption}
        rows={4}
        onChange={(v) => setEdited((p) => ({ ...p, caption: v }))}
        onCopy={() => onCopyField(edited.caption, "Legenda")}
        counter={edited.caption.length}
        counterLimit={isIG ? 300 : 150}
      />

      {/* CTA */}
      <FieldWithCopy
        icon={<Megaphone className="w-4 h-4" />}
        label="Chamada para ação (CTA)"
        value={edited.cta}
        rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, cta: v }))}
        onCopy={() => onCopyField(edited.cta, "CTA")}
      />

      {/* Hashtags */}
      <FieldWithCopy
        icon={<Hash className="w-4 h-4" />}
        label={isIG ? "Hashtags (até 15)" : "Hashtags (até 10)"}
        value={edited.hashtags}
        rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, hashtags: v }))}
        onCopy={() => onCopyField(edited.hashtags, "Hashtags")}
      />

      {/* Música */}
      {edited.musicSuggestion && (
        <FieldWithCopy
          icon={<Music className="w-4 h-4 text-purple-400" />}
          label="Sugestão de música"
          hint="Para usar como trilha sonora no vídeo/reels"
          value={edited.musicSuggestion}
          rows={1}
          onChange={(v) => setEdited((p) => ({ ...p, musicSuggestion: v }))}
          onCopy={() => onCopyField(edited.musicSuggestion, "Sugestão de música")}
        />
      )}
    </div>
  );
};

/* ─── FieldWithCopy ─────────────────────────────────────────────────────── */

interface FieldWithCopyProps {
  icon: React.ReactNode;
  label: string;
  hint?: string;
  value: string;
  rows: number;
  onChange: (v: string) => void;
  onCopy: () => void;
  counter?: number;
  counterLimit?: number;
}

const FieldWithCopy = ({ icon, label, hint, value, rows, onChange, onCopy, counter, counterLimit }: FieldWithCopyProps) => {
  const overLimit = counterLimit !== undefined && counter !== undefined && counter > counterLimit;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          {icon} {label}
        </label>
        <div className="flex items-center gap-2">
          {counterLimit !== undefined && counter !== undefined && (
            <span className={`text-xs tabular-nums ${overLimit ? "text-destructive font-semibold" : "text-muted-foreground"}`}>
              {counter}/{counterLimit}
            </span>
          )}
          <button
            onClick={onCopy}
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            title="Copiar"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`resize-none ${overLimit ? "border-destructive/50 focus-visible:ring-destructive/50" : ""}`}
      />
    </div>
  );
};

export default SocialPanelPage;
