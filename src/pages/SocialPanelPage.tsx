import { useState, useEffect } from "react";
import { blogPosts } from "@/data/posts";
import { useAuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DynamicSEO from "@/components/DynamicSEO";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sparkles, Instagram, Music2, Loader2, Copy, RefreshCw,
  Music, Save, Zap, Image as ImageIcon, ClipboardCopy,
} from "lucide-react";
import SocialHistoryPanel, { saveToHistory } from "@/components/social/SocialHistoryPanel";

const COUNTER_KEY = "viciocode_social_gen_count";
const ADMIN_EMAIL = "viciocode01@gmail.com";

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
  imagePrompt: string;
  musicSuggestion?: string;
}

interface EditedContent {
  caption: string;
  hashtags: string;
  cta: string;
  hookLine: string;
  imagePrompt: string;
  musicSuggestion: string;
}

interface PlatformContent {
  instagram?: GeneratedContent;
  tiktok?: GeneratedContent;
}

const emptyEdited = (): EditedContent => ({
  caption: "", hashtags: "", cta: "", hookLine: "", imagePrompt: "", musicSuggestion: "",
});

const SocialPanelPage = () => {
  const { user, loading: authLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPost, setSelectedPost] = useState("");
  const [platformIG, setPlatformIG] = useState(true);
  const [platformTT, setPlatformTT] = useState(false);
  const [suggestMusic, setSuggestMusic] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [retryIn, setRetryIn] = useState(0);
  const [content, setContent] = useState<PlatformContent>({});
  const [editedIG, setEditedIG] = useState<EditedContent>(emptyEdited());
  const [editedTT, setEditedTT] = useState<EditedContent>(emptyEdited());
  const [todayCount, setTodayCount] = useState(getTodayCount);
  const [historyKey, setHistoryKey] = useState(0);

  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) navigate("/");
  }, [user, authLoading, navigate]);

  const generateForPlatform = async (post: any, platform: "instagram" | "tiktok"): Promise<GeneratedContent> => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);
    try {
      const res = await fetch("/api.php?action=generate_social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          platform,
          suggestMusic,
        }),
      });
      const data = await res.json();
      if (res.status === 429 && data.retryIn) {
        const err: any = new Error(data.error || "Limite atingido");
        err.retryIn = data.retryIn;
        throw err;
      }
      if (!res.ok || data.error) throw new Error(data.error || "Erro ao gerar conteúdo");
      return data;
    } finally {
      clearTimeout(timeout);
    }
  };

  const toEdited = (d: GeneratedContent): EditedContent => ({
    caption: d.caption || "",
    hashtags: (d.hashtags || []).map((h) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
    cta: d.cta || "",
    hookLine: d.hookLine || "",
    imagePrompt: d.imagePrompt || "",
    musicSuggestion: d.musicSuggestion || "",
  });

  const handleGenerate = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) { toast({ title: "Selecione um artigo", variant: "destructive" }); return; }
    if (!platformIG && !platformTT) { toast({ title: "Selecione ao menos uma plataforma", variant: "destructive" }); return; }

    setGenerating(true);
    setContent({});
    try {
      const results: PlatformContent = {};
      const settled = await Promise.allSettled([
        platformIG ? generateForPlatform(post, "instagram") : Promise.resolve(null),
        platformTT ? generateForPlatform(post, "tiktok")    : Promise.resolve(null),
      ]);

      if (platformIG && settled[0].status === "fulfilled" && settled[0].value) results.instagram = settled[0].value;
      if (platformIG && settled[0].status === "rejected") toast({ title: "Erro no Instagram", description: (settled[0] as any).reason?.message, variant: "destructive" });
      if (platformTT && settled[1].status === "fulfilled" && settled[1].value) results.tiktok = settled[1].value;
      if (platformTT && settled[1].status === "rejected") toast({ title: "Erro no TikTok", description: (settled[1] as any).reason?.message, variant: "destructive" });

      if (!results.instagram && !results.tiktok) throw new Error("Nenhum conteúdo foi gerado.");
      setContent(results);
      if (results.instagram) setEditedIG(toEdited(results.instagram));
      if (results.tiktok)    setEditedTT(toEdited(results.tiktok));

      // Auto-save
      if (results.instagram) saveToHistory({ id: `${Date.now()}-ig`, postTitle: post.title, platform: "instagram", ...toEdited(results.instagram), createdAt: new Date().toISOString() });
      if (results.tiktok)    saveToHistory({ id: `${Date.now()}-tt`, postTitle: post.title, platform: "tiktok",    ...toEdited(results.tiktok),    createdAt: new Date().toISOString() });

      setHistoryKey((k) => k + 1);
      setTodayCount(incrementTodayCount());
      toast({ title: "✅ Conteúdo gerado!" });
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
    let txt = `${ed.hookLine}\n\n${ed.caption}\n\n${ed.cta}\n\n${ed.hashtags}`;
    if (ed.musicSuggestion) txt += `\n\n🎵 Música: ${ed.musicSuggestion}`;
    navigator.clipboard.writeText(txt);
    toast({ title: `${label} copiado!` });
  };

  const copyImagePrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast({ title: "Prompt de imagem copiado!" });
  };

  if (authLoading || !user || user.email !== ADMIN_EMAIL) return null;

  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const hasContent = content.instagram || content.tiktok;

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto">
      <DynamicSEO />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold font-orbitron text-foreground">Painel Social Media</h1>
        </div>
        <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">{todayCount}</span>
          <span className="text-muted-foreground">{todayCount === 1 ? "geração" : "gerações"} hoje</span>
        </Badge>
      </div>

      {/* Step 1 */}
      <Card className="mb-6 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Badge variant="secondary">1</Badge> Selecionar Artigo e Opções
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
                    <Badge variant="outline" className="text-xs uppercase">{post.category}</Badge>
                    {post.title.length > 55 ? post.title.slice(0, 55) + "…" : post.title}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Platforms */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <Checkbox checked={platformIG} onCheckedChange={(v) => setPlatformIG(!!v)} />
              <Instagram className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium">Instagram</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <Checkbox checked={platformTT} onCheckedChange={(v) => setPlatformTT(!!v)} />
              <Music2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">TikTok</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <Checkbox checked={suggestMusic} onCheckedChange={(v) => setSuggestMusic(!!v)} />
              <Music className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Sugerir música</span>
            </label>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 flex items-start gap-2 text-sm text-muted-foreground">
            <ImageIcon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <span>O Gemini irá gerar um <strong className="text-foreground">prompt de imagem</strong> pronto para usar no Midjourney, DALL-E, Stable Diffusion ou Leonardo.ai.</span>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!selectedPost || generating || (!platformIG && !platformTT) || retryIn > 0}
            className="w-full h-11 text-base font-semibold"
          >
            {generating ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gerando com IA...</>
            ) : retryIn > 0 ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Aguarde {retryIn}s...</>
            ) : (
              <><Sparkles className="w-4 h-4 mr-2" /> Gerar Conteúdo</>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 2: Results */}
      {hasContent && (
        <div className="space-y-6 mb-6">
          {content.instagram && (
            <ContentEditor
              label="Instagram"
              icon={<Instagram className="w-4 h-4 text-pink-500" />}
              edited={editedIG}
              setEdited={setEditedIG}
              onRegenerate={handleGenerate}
              onCopy={() => copyAll(editedIG, "Instagram")}
              onCopyImagePrompt={() => copyImagePrompt(editedIG.imagePrompt)}
              generating={generating}
            />
          )}
          {content.tiktok && (
            <ContentEditor
              label="TikTok"
              icon={<Music2 className="w-4 h-4 text-cyan-400" />}
              edited={editedTT}
              setEdited={setEditedTT}
              onRegenerate={handleGenerate}
              onCopy={() => copyAll(editedTT, "TikTok")}
              onCopyImagePrompt={() => copyImagePrompt(editedTT.imagePrompt)}
              generating={generating}
            />
          )}
        </div>
      )}

      {/* History */}
      <SocialHistoryPanel key={historyKey} />
    </div>
  );
};

/* ─── ContentEditor ─────────────────────────────────────────────────────────── */

interface ContentEditorProps {
  label: string;
  icon: React.ReactNode;
  edited: EditedContent;
  setEdited: React.Dispatch<React.SetStateAction<EditedContent>>;
  onRegenerate: () => void;
  onCopy: () => void;
  onCopyImagePrompt: () => void;
  generating: boolean;
}

const ContentEditor = ({ label, icon, edited, setEdited, onRegenerate, onCopy, onCopyImagePrompt, generating }: ContentEditorProps) => (
  <Card className="border-primary/20">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Badge variant="secondary">2</Badge> {icon} {label}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onRegenerate} disabled={generating}>
            <RefreshCw className="w-4 h-4 mr-1" /> Regerar
          </Button>
          <Button variant="outline" size="sm" onClick={onCopy}>
            <Copy className="w-4 h-4 mr-1" /> Copiar tudo
          </Button>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">

      <Field label="🎣 Gancho" value={edited.hookLine} rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, hookLine: v }))} />

      <Field label="📝 Legenda" value={edited.caption} rows={4}
        onChange={(v) => setEdited((p) => ({ ...p, caption: v }))} />

      <Field label="📢 CTA" value={edited.cta} rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, cta: v }))} />

      <Field label="# Hashtags" value={edited.hashtags} rows={2}
        onChange={(v) => setEdited((p) => ({ ...p, hashtags: v }))} />

      {edited.musicSuggestion && (
        <Field label="🎵 Sugestão de Música" value={edited.musicSuggestion} rows={1}
          onChange={(v) => setEdited((p) => ({ ...p, musicSuggestion: v }))} />
      )}

      {/* Image Prompt */}
      {edited.imagePrompt && (
        <div className="rounded-lg border border-dashed border-primary/40 bg-primary/5 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-primary flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" /> Prompt de Imagem
            </label>
            <Button variant="secondary" size="sm" onClick={onCopyImagePrompt}>
              <ClipboardCopy className="w-3.5 h-3.5 mr-1" /> Copiar Prompt
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Use esse prompt no Midjourney, DALL-E, Stable Diffusion ou Leonardo.ai:</p>
          <Textarea
            value={edited.imagePrompt}
            onChange={(e) => setEdited((p) => ({ ...p, imagePrompt: e.target.value }))}
            rows={4}
            className="text-sm font-mono bg-background/50"
          />
          <div className="flex flex-wrap gap-2 pt-1">
            {["Midjourney", "DALL-E", "Stable Diffusion", "Leonardo.ai", "Ideogram"].map((tool) => (
              <a
                key={tool}
                href={
                  tool === "Midjourney"        ? "https://www.midjourney.com" :
                  tool === "DALL-E"            ? "https://labs.openai.com" :
                  tool === "Stable Diffusion"  ? "https://stability.ai" :
                  tool === "Leonardo.ai"       ? "https://app.leonardo.ai" :
                                                 "https://ideogram.ai"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {tool}
              </a>
            ))}
          </div>
        </div>
      )}

    </CardContent>
  </Card>
);

const Field = ({ label, value, rows, onChange }: { label: string; value: string; rows: number; onChange: (v: string) => void }) => (
  <div>
    <label className="text-sm font-medium text-muted-foreground mb-1 block">{label}</label>
    <Textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} />
  </div>
);

export default SocialPanelPage;
