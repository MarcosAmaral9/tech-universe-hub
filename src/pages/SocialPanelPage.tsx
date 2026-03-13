import { useState, useEffect } from "react";
import { blogPosts } from "@/data/posts";
import { supabase } from "@/integrations/supabase/client";
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

const ADMIN_USER_ID = "c866a1ef-c4f7-4f7d-b39d-3761fd2567da";

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
  const [content, setContent] = useState<PlatformContent>({});
  const [editedIG, setEditedIG] = useState({ caption: "", hashtags: "", cta: "", hookLine: "", musicSuggestion: "" });
  const [editedTT, setEditedTT] = useState({ caption: "", hashtags: "", cta: "", hookLine: "", musicSuggestion: "" });
  const [todayCount, setTodayCount] = useState(getTodayCount);

  useEffect(() => {
    if (!authLoading && (!user || user.id !== ADMIN_USER_ID)) {
      navigate("/");
    }
  }, [user, authLoading, navigate]);

  const generateForPlatform = async (post: any, platform: "instagram" | "tiktok"): Promise<GeneratedContent> => {
    const { data, error } = await supabase.functions.invoke("generate-social-content", {
      body: { title: post.title, excerpt: post.excerpt, category: post.category, platform, generateImage, suggestMusic },
    });
    if (error) throw error;
    if (data.error) throw new Error(data.error);
    return data;
  };

  const handleGenerate = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) { toast({ title: "Selecione um artigo", variant: "destructive" }); return; }
    if (!platformIG && !platformTT) { toast({ title: "Selecione ao menos uma plataforma", variant: "destructive" }); return; }

    setGenerating(true);
    setContent({});
    try {
      const results: PlatformContent = {};
      const promises: Promise<void>[] = [];

      if (platformIG) {
        promises.push(generateForPlatform(post, "instagram").then((d) => { results.instagram = d; }));
      }
      if (platformTT) {
        promises.push(generateForPlatform(post, "tiktok").then((d) => { results.tiktok = d; }));
      }

      await Promise.all(promises);
      setContent(results);

      if (results.instagram) {
        const d = results.instagram;
        setEditedIG({
          caption: d.caption || "",
          hashtags: (d.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
          cta: d.cta || "",
          hookLine: d.hookLine || "",
          musicSuggestion: d.musicSuggestion || "",
        });
      }
      if (results.tiktok) {
        const d = results.tiktok;
        setEditedTT({
          caption: d.caption || "",
          hashtags: (d.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
          cta: d.cta || "",
          hookLine: d.hookLine || "",
          musicSuggestion: d.musicSuggestion || "",
        });
      }
    } catch (e: any) {
      toast({ title: "Erro ao gerar conteúdo", description: e.message, variant: "destructive" });
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
  if (!user || user.id !== ADMIN_USER_ID) return null;

  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const hasContent = content.instagram || content.tiktok;

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto">
      <DynamicSEO />

      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Painel Social Media</h1>
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
