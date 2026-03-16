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
import { Sparkles, Instagram, Music2, Loader2, Image as ImageIcon, Copy, RefreshCw, Music, Save, Download, Zap } from "lucide-react";
import SocialHistoryPanel, { saveToHistory, loadHistory } from "@/components/social/SocialHistoryPanel";

const COUNTER_KEY = "viciocode_social_gen_count";

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
  image: string | null;
  musicSuggestion?: string;
}

interface PlatformContent {
  instagram?: GeneratedContent;
  tiktok?: GeneratedContent;
}

const ADMIN_EMAIL = "viciocode01@gmail.com";

const SocialPanelPage = () => {
  const { user, loading: authLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPost, setSelectedPost] = useState("");
  const [platformIG, setPlatformIG] = useState(true);
  const [platformTT, setPlatformTT] = useState(false);
  const [generateImage, setGenerateImage] = useState(false);
  const [suggestMusic, setSuggestMusic] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [retryIn, setRetryIn] = useState(0);
  const [content, setContent] = useState<PlatformContent>({});
  const [editedIG, setEditedIG] = useState({ caption: "", hashtags: "", cta: "", hookLine: "", musicSuggestion: "" });
  const [editedTT, setEditedTT] = useState({ caption: "", hashtags: "", cta: "", hookLine: "", musicSuggestion: "" });
  const [todayCount, setTodayCount] = useState(getTodayCount);
  const [historyKey, setHistoryKey] = useState(0);

  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) {
      navigate("/");
    }
  }, [user, authLoading, navigate]);

  const generateForPlatform = async (post: any, platform: "instagram" | "tiktok"): Promise<GeneratedContent> => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout
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
          generateImage,
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

  const handleGenerate = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) { toast({ title: "Selecione um artigo", variant: "destructive" }); return; }
    if (!platformIG && !platformTT) { toast({ title: "Selecione ao menos uma plataforma", variant: "destructive" }); return; }

    setGenerating(true);
    setContent({});
    try {
      const results: PlatformContent = {};

      // Sequencial quando imagem está ativada (evita quota burst no Gemini)
      // Paralelo quando só texto (mais rápido, sem risco de quota)
      if (generateImage) {
        if (platformIG) {
          try { results.instagram = await generateForPlatform(post, "instagram"); }
          catch (e: any) { toast({ title: "Erro no Instagram", description: e.message, variant: "destructive" }); }
        }
        if (platformTT) {
          try { results.tiktok = await generateForPlatform(post, "tiktok"); }
          catch (e: any) { toast({ title: "Erro no TikTok", description: e.message, variant: "destructive" }); }
        }
      } else {
        // Paralelo para texto — mais rápido
        const settled = await Promise.allSettled([
          platformIG ? generateForPlatform(post, "instagram") : Promise.resolve(null),
          platformTT ? generateForPlatform(post, "tiktok")    : Promise.resolve(null),
        ]);
        if (platformIG && settled[0].status === "fulfilled" && settled[0].value) results.instagram = settled[0].value;
        if (platformIG && settled[0].status === "rejected") toast({ title: "Erro no Instagram", description: settled[0].reason?.message, variant: "destructive" });
        if (platformTT && settled[1].status === "fulfilled" && settled[1].value) results.tiktok = settled[1].value;
        if (platformTT && settled[1].status === "rejected") toast({ title: "Erro no TikTok", description: settled[1].reason?.message, variant: "destructive" });
      }

      if (!results.instagram && !results.tiktok) throw new Error("Nenhum conteúdo foi gerado.");
      setContent(results);

      // Build edited values
      const igEdited = results.instagram ? {
        caption: results.instagram.caption || "",
        hashtags: (results.instagram.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
        cta: results.instagram.cta || "",
        hookLine: results.instagram.hookLine || "",
        musicSuggestion: results.instagram.musicSuggestion || "",
      } : null;

      const ttEdited = results.tiktok ? {
        caption: results.tiktok.caption || "",
        hashtags: (results.tiktok.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
        cta: results.tiktok.cta || "",
        hookLine: results.tiktok.hookLine || "",
        musicSuggestion: results.tiktok.musicSuggestion || "",
      } : null;

      if (igEdited) setEditedIG(igEdited);
      if (ttEdited) setEditedTT(ttEdited);

      // Auto-save to history
      if (results.instagram && igEdited) {
        saveToHistory({
          id: `${Date.now()}-instagram`,
          postTitle: post.title,
          platform: "instagram",
          caption: igEdited.caption,
          hookLine: igEdited.hookLine,
          cta: igEdited.cta,
          hashtags: igEdited.hashtags,
          musicSuggestion: igEdited.musicSuggestion || undefined,
          image: results.instagram.image,
          createdAt: new Date().toISOString(),
        });
      }
      if (results.tiktok && ttEdited) {
        saveToHistory({
          id: `${Date.now()}-tiktok`,
          postTitle: post.title,
          platform: "tiktok",
          caption: ttEdited.caption,
          hookLine: ttEdited.hookLine,
          cta: ttEdited.cta,
          hashtags: ttEdited.hashtags,
          musicSuggestion: ttEdited.musicSuggestion || undefined,
          image: results.tiktok.image,
          createdAt: new Date().toISOString(),
        });
      }

      setHistoryKey((k) => k + 1);
      const newCount = incrementTodayCount();
      setTodayCount(newCount);
      toast({ title: "✅ Conteúdo gerado e salvo no histórico!" });
    } catch (e: any) {
      const wait = e?.retryIn || 0;
      toast({ title: "Erro ao gerar conteúdo", description: e.message, variant: "destructive" });
      if (wait > 0) {
        setRetryIn(wait);
        const interval = setInterval(() => {
          setRetryIn((s) => {
            if (s <= 1) { clearInterval(interval); return 0; }
            return s - 1;
          });
        }, 1000);
      }
    } finally {
      setGenerating(false);
    }
  };

  const handleSaveToHistory = () => {
    const post = blogPosts.find((p) => p.id === selectedPost);

    if (content.instagram) {
      saveToHistory({
        id: `${Date.now()}-instagram`,
        postTitle: post?.title || "",
        platform: "instagram",
        caption: editedIG.caption,
        hookLine: editedIG.hookLine,
        cta: editedIG.cta,
        hashtags: editedIG.hashtags,
        musicSuggestion: editedIG.musicSuggestion || undefined,
        image: content.instagram.image,
        createdAt: new Date().toISOString(),
      });
    }

    if (content.tiktok) {
      saveToHistory({
        id: `${Date.now()}-tiktok`,
        postTitle: post?.title || "",
        platform: "tiktok",
        caption: editedTT.caption,
        hookLine: editedTT.hookLine,
        cta: editedTT.cta,
        hashtags: editedTT.hashtags,
        musicSuggestion: editedTT.musicSuggestion || undefined,
        image: content.tiktok.image,
        createdAt: new Date().toISOString(),
      });
    }

    setHistoryKey((k) => k + 1);
    toast({ title: "✅ Salvo no histórico!" });
  };

  const copyAll = (edited: typeof editedIG) => {
    let fullText = `${edited.hookLine}\n\n${edited.caption}\n\n${edited.cta}\n\n${edited.hashtags}`;
    if (edited.musicSuggestion) fullText += `\n\n🎵 ${edited.musicSuggestion}`;
    navigator.clipboard.writeText(fullText);
    toast({ title: "Copiado!" });
  };

  if (authLoading) return null;
  if (!user || user.email !== ADMIN_EMAIL) return null;

  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const hasContent = content.instagram || content.tiktok;

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto">
      <DynamicSEO />

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Painel Social Media</h1>
        </div>
        <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">{todayCount}</span>
          <span className="text-muted-foreground">{todayCount === 1 ? "geração" : "gerações"} hoje</span>
        </Badge>
      </div>

      {/* Step 1: Select Article & Platforms */}
      <Card className="mb-6 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Badge variant="secondary">1</Badge> Selecionar Artigo e Plataformas
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
                    {post.title.length > 60 ? post.title.slice(0, 60) + "..." : post.title}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-4 items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={platformIG} onCheckedChange={(v) => setPlatformIG(!!v)} />
              <Instagram className="w-4 h-4" /> Instagram
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={platformTT} onCheckedChange={(v) => setPlatformTT(!!v)} />
              <Music2 className="w-4 h-4" /> TikTok
            </label>
            <Button
              variant={generateImage ? "default" : "outline"}
              size="sm"
              onClick={() => setGenerateImage(!generateImage)}
            >
              <ImageIcon className="w-4 h-4 mr-1" /> {generateImage ? "Imagem IA ✓" : "Gerar Imagem IA"}
            </Button>
            <Button
              variant={suggestMusic ? "default" : "outline"}
              size="sm"
              onClick={() => setSuggestMusic(!suggestMusic)}
            >
              <Music className="w-4 h-4 mr-1" /> {suggestMusic ? "Música ✓" : "Sugerir Música"}
            </Button>
          </div>

          <Button onClick={handleGenerate} disabled={!selectedPost || generating || (!platformIG && !platformTT)} className="w-full">
            {generating ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gerando com IA...</>
            ) : (
              <><Sparkles className="w-4 h-4 mr-2" /> Gerar Conteúdo</>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 2: Review & Edit per platform */}
      {hasContent && (
        <div className="space-y-6 mb-6">
          {content.instagram && (
            <ContentEditor
              label="Instagram"
              icon={<Instagram className="w-4 h-4" />}
              edited={editedIG}
              setEdited={setEditedIG}
              image={content.instagram.image}
              onRegenerate={handleGenerate}
              onCopy={() => copyAll(editedIG)}
              generating={generating}
            />
          )}
          {content.tiktok && (
            <ContentEditor
              label="TikTok"
              icon={<Music2 className="w-4 h-4" />}
              edited={editedTT}
              setEdited={setEditedTT}
              image={content.tiktok.image}
              onRegenerate={handleGenerate}
              onCopy={() => copyAll(editedTT)}
              generating={generating}
            />
          )}

          {/* Save to History */}
          <Button onClick={handleSaveToHistory} className="w-full" size="lg">
            <Save className="w-4 h-4 mr-2" /> Salvar no Histórico
          </Button>
        </div>
      )}

      {/* History */}
      <SocialHistoryPanel key={historyKey} />
    </div>
  );
};

/* ---------- Sub-component ---------- */

interface ContentEditorProps {
  label: string;
  icon: React.ReactNode;
  edited: { caption: string; hashtags: string; cta: string; hookLine: string; musicSuggestion: string };
  setEdited: React.Dispatch<React.SetStateAction<{ caption: string; hashtags: string; cta: string; hookLine: string; musicSuggestion: string }>>;
  image: string | null;
  onRegenerate: () => void;
  onCopy: () => void;
  generating: boolean;
}

const ContentEditor = ({ label, icon, edited, setEdited, image, onRegenerate, onCopy, generating }: ContentEditorProps) => (
  <Card className="border-primary/20">
    <CardHeader>
      <CardTitle className="text-lg flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Badge variant="secondary">2</Badge> {icon} {label}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onRegenerate} disabled={generating}>
            <RefreshCw className="w-4 h-4 mr-1" /> Regerar
          </Button>
          <Button variant="outline" size="sm" onClick={onCopy}>
            <Copy className="w-4 h-4 mr-1" /> Copiar
          </Button>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-1 block">🎣 Gancho</label>
        <Textarea value={edited.hookLine} onChange={(e) => setEdited((p) => ({ ...p, hookLine: e.target.value }))} rows={2} />
      </div>
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-1 block">📝 Legenda</label>
        <Textarea value={edited.caption} onChange={(e) => setEdited((p) => ({ ...p, caption: e.target.value }))} rows={4} />
      </div>
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-1 block">📢 CTA</label>
        <Textarea value={edited.cta} onChange={(e) => setEdited((p) => ({ ...p, cta: e.target.value }))} rows={2} />
      </div>
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-1 block"># Hashtags</label>
        <Textarea value={edited.hashtags} onChange={(e) => setEdited((p) => ({ ...p, hashtags: e.target.value }))} rows={2} />
      </div>
      {edited.musicSuggestion && (
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">🎵 Sugestão de Música</label>
          <Textarea value={edited.musicSuggestion} onChange={(e) => setEdited((p) => ({ ...p, musicSuggestion: e.target.value }))} rows={2} />
        </div>
      )}
      {image && (
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">🖼️ Imagem Gerada</label>
          <img src={image} alt="Imagem gerada" className="rounded-lg max-h-64 object-cover border border-border" />
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => {
              const link = document.createElement("a");
              link.href = image;
              link.download = `social-${label.toLowerCase()}-${Date.now()}.png`;
              link.click();
            }}
          >
            <Download className="w-4 h-4 mr-1" /> Baixar Imagem
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

export default SocialPanelPage;
