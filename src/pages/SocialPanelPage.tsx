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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Send, Instagram, Music2, Loader2, Image as ImageIcon, Copy, RefreshCw, Link2 } from "lucide-react";
import SocialHistoryPanel, { saveToHistory } from "@/components/social/SocialHistoryPanel";

interface GeneratedContent {
  caption: string;
  hashtags: string[];
  cta: string;
  hookLine: string;
  image: string | null;
}

interface PlatformContent {
  instagram?: GeneratedContent;
  tiktok?: GeneratedContent;
}

const ADMIN_USER_ID = "c866a1ef-c4f7-4f7d-b39d-3761fd2567da";
const WEBHOOK_IG_KEY = "viciocode_zapier_webhook_instagram";
const WEBHOOK_TT_KEY = "viciocode_zapier_webhook_tiktok";

const SocialPanelPage = () => {
  const { user, loading: authLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPost, setSelectedPost] = useState("");
  const [platformIG, setPlatformIG] = useState(true);
  const [platformTT, setPlatformTT] = useState(false);
  const [generateImage, setGenerateImage] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [content, setContent] = useState<PlatformContent>({});
  const [editedIG, setEditedIG] = useState({ caption: "", hashtags: "", cta: "", hookLine: "" });
  const [editedTT, setEditedTT] = useState({ caption: "", hashtags: "", cta: "", hookLine: "" });
  const [webhookIG, setWebhookIG] = useState(() => localStorage.getItem(WEBHOOK_IG_KEY) || "");
  const [webhookTT, setWebhookTT] = useState(() => localStorage.getItem(WEBHOOK_TT_KEY) || "");
  const [historyKey, setHistoryKey] = useState(0);

  useEffect(() => {
    if (!authLoading && (!user || user.id !== ADMIN_USER_ID)) {
      navigate("/");
    }
  }, [user, authLoading, navigate]);

  const saveWebhook = (platform: "instagram" | "tiktok", url: string) => {
    if (platform === "instagram") {
      setWebhookIG(url);
      localStorage.setItem(WEBHOOK_IG_KEY, url);
    } else {
      setWebhookTT(url);
      localStorage.setItem(WEBHOOK_TT_KEY, url);
    }
  };

  const generateForPlatform = async (post: any, platform: "instagram" | "tiktok"): Promise<GeneratedContent> => {
    const { data, error } = await supabase.functions.invoke("generate-social-content", {
      body: { title: post.title, excerpt: post.excerpt, category: post.category, platform, generateImage },
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
        });
      }
      if (results.tiktok) {
        const d = results.tiktok;
        setEditedTT({
          caption: d.caption || "",
          hashtags: (d.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "),
          cta: d.cta || "",
          hookLine: d.hookLine || "",
        });
      }
    } catch (e: any) {
      toast({ title: "Erro ao gerar conteúdo", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const handlePublish = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    setPublishing(true);
    const errors: string[] = [];

    try {
      const sendTo = async (platform: "instagram" | "tiktok", webhook: string, edited: typeof editedIG, image: string | null) => {
        const fullText = `${edited.hookLine}\n\n${edited.caption}\n\n${edited.cta}\n\n${edited.hashtags}`;
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify({
            caption: fullText, hookLine: edited.hookLine, cta: edited.cta,
            hashtags: edited.hashtags, platform, postTitle: post?.title || "",
            postCategory: post?.category || "", imageBase64: image,
            timestamp: new Date().toISOString(),
          }),
        });

        // Save to local history
        saveToHistory({
          id: `${Date.now()}-${platform}`,
          postTitle: post?.title || "",
          platforms: [platform],
          caption: edited.caption,
          hookLine: edited.hookLine,
          cta: edited.cta,
          hashtags: edited.hashtags,
          image,
          createdAt: new Date().toISOString(),
        });
      };

      if (content.instagram && webhookIG) {
        await sendTo("instagram", webhookIG, editedIG, content.instagram.image);
      } else if (content.instagram && !webhookIG) {
        errors.push("Webhook do Instagram não configurado");
      }

      if (content.tiktok && webhookTT) {
        await sendTo("tiktok", webhookTT, editedTT, content.tiktok.image);
      } else if (content.tiktok && !webhookTT) {
        errors.push("Webhook do TikTok não configurado");
      }

      setHistoryKey((k) => k + 1);

      if (errors.length) {
        toast({ title: "Enviado com avisos", description: errors.join(". "), variant: "destructive" });
      } else {
        toast({ title: "✅ Enviado ao Zapier!", description: "Verifique o histórico dos seus Zaps." });
      }
    } catch (e: any) {
      toast({ title: "Erro ao enviar", description: e.message, variant: "destructive" });
    } finally {
      setPublishing(false);
    }
  };

  const copyAll = (edited: typeof editedIG) => {
    const fullText = `${edited.hookLine}\n\n${edited.caption}\n\n${edited.cta}\n\n${edited.hashtags}`;
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
        </div>
      )}

      {/* Step 3: Webhooks & Publish */}
      {hasContent && (
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge variant="secondary">3</Badge> Enviar via Zapier
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.instagram && (
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1">
                  <Instagram className="w-4 h-4" /> Webhook Instagram
                </label>
                <Input
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/... (Instagram)"
                  value={webhookIG}
                  onChange={(e) => saveWebhook("instagram", e.target.value)}
                />
              </div>
            )}
            {content.tiktok && (
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1">
                  <Music2 className="w-4 h-4" /> Webhook TikTok
                </label>
                <Input
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/... (TikTok)"
                  value={webhookTT}
                  onChange={(e) => saveWebhook("tiktok", e.target.value)}
                />
              </div>
            )}

            <Button onClick={handlePublish} disabled={publishing} className="w-full" variant="default">
              {publishing ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...</>
              ) : (
                <><Send className="w-4 h-4 mr-2" /> Enviar para Zapier</>
              )}
            </Button>
          </CardContent>
        </Card>
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
  edited: { caption: string; hashtags: string; cta: string; hookLine: string };
  setEdited: React.Dispatch<React.SetStateAction<{ caption: string; hashtags: string; cta: string; hookLine: string }>>;
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
      {image && (
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">🖼️ Imagem Gerada</label>
          <img src={image} alt="Imagem gerada" className="rounded-lg max-h-64 object-cover border border-border" />
        </div>
      )}
    </CardContent>
  </Card>
);

export default SocialPanelPage;
