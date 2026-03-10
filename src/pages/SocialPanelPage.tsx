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
import { Sparkles, Send, Instagram, Music2, Loader2, Image as ImageIcon, Copy, RefreshCw } from "lucide-react";

interface BufferProfile {
  id: string;
  service: string;
  formatted_username: string;
  avatar: string;
}

interface GeneratedContent {
  caption: string;
  hashtags: string[];
  cta: string;
  hookLine: string;
  image: string | null;
}

const SocialPanelPage = () => {
  const { user, loading: authLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPost, setSelectedPost] = useState("");
  const [platform, setPlatform] = useState<"instagram" | "tiktok">("instagram");
  const [generateImage, setGenerateImage] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [editedCaption, setEditedCaption] = useState("");
  const [editedHashtags, setEditedHashtags] = useState("");
  const [editedCta, setEditedCta] = useState("");
  const [editedHookLine, setEditedHookLine] = useState("");
  const [bufferProfiles, setBufferProfiles] = useState<BufferProfile[]>([]);
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/entrar");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) fetchBufferProfiles();
  }, [user]);

  const fetchBufferProfiles = async () => {
    setLoadingProfiles(true);
    try {
      const { data, error } = await supabase.functions.invoke("buffer-publish", {
        body: { action: "profiles" },
      });
      if (error) throw error;
      setBufferProfiles(data.profiles || []);
    } catch (e) {
      console.error("Error fetching Buffer profiles:", e);
      toast({ title: "Erro", description: "Não foi possível carregar perfis do Buffer.", variant: "destructive" });
    } finally {
      setLoadingProfiles(false);
    }
  };

  const handleGenerate = async () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (!post) {
      toast({ title: "Selecione um artigo", variant: "destructive" });
      return;
    }

    setGenerating(true);
    setContent(null);
    try {
      const { data, error } = await supabase.functions.invoke("generate-social-content", {
        body: {
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          platform,
          generateImage,
        },
      });
      if (error) throw error;
      if (data.error) throw new Error(data.error);

      setContent(data);
      setEditedCaption(data.caption || "");
      setEditedHashtags((data.hashtags || []).map((h: string) => (h.startsWith("#") ? h : `#${h}`)).join(" "));
      setEditedCta(data.cta || "");
      setEditedHookLine(data.hookLine || "");
    } catch (e: any) {
      toast({ title: "Erro ao gerar conteúdo", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const handlePublish = async () => {
    if (selectedProfiles.length === 0) {
      toast({ title: "Selecione pelo menos um perfil do Buffer", variant: "destructive" });
      return;
    }

    const fullText = `${editedHookLine}\n\n${editedCaption}\n\n${editedCta}\n\n${editedHashtags}`;

    setPublishing(true);
    try {
      const { data, error } = await supabase.functions.invoke("buffer-publish", {
        body: {
          action: "create",
          text: fullText,
          profileIds: selectedProfiles,
          mediaUrl: content?.image || undefined,
        },
      });
      if (error) throw error;
      if (data.error) throw new Error(data.error);

      toast({ title: "✅ Post enviado ao Buffer!", description: "O post foi adicionado à fila de publicação." });
    } catch (e: any) {
      toast({ title: "Erro ao publicar", description: e.message, variant: "destructive" });
    } finally {
      setPublishing(false);
    }
  };

  const copyToClipboard = () => {
    const fullText = `${editedHookLine}\n\n${editedCaption}\n\n${editedCta}\n\n${editedHashtags}`;
    navigator.clipboard.writeText(fullText);
    toast({ title: "Copiado!", description: "Texto copiado para a área de transferência." });
  };

  const toggleProfile = (id: string) => {
    setSelectedProfiles((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  if (authLoading) return null;

  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto">
      <DynamicSEO />

      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Painel Social Media</h1>
      </div>

      {/* Step 1: Select Article */}
      <Card className="mb-6 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Badge variant="secondary">1</Badge> Selecionar Artigo
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

          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2">
              <Button
                variant={platform === "instagram" ? "default" : "outline"}
                size="sm"
                onClick={() => setPlatform("instagram")}
              >
                <Instagram className="w-4 h-4 mr-1" /> Instagram
              </Button>
              <Button
                variant={platform === "tiktok" ? "default" : "outline"}
                size="sm"
                onClick={() => setPlatform("tiktok")}
              >
                <Music2 className="w-4 h-4 mr-1" /> TikTok
              </Button>
            </div>

            <Button
              variant={generateImage ? "default" : "outline"}
              size="sm"
              onClick={() => setGenerateImage(!generateImage)}
            >
              <ImageIcon className="w-4 h-4 mr-1" /> {generateImage ? "Imagem IA ✓" : "Gerar Imagem IA"}
            </Button>
          </div>

          <Button onClick={handleGenerate} disabled={!selectedPost || generating} className="w-full">
            {generating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gerando com IA...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" /> Gerar Conteúdo
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 2: Review & Edit */}
      {content && (
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Badge variant="secondary">2</Badge> Revisar e Editar
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleGenerate} disabled={generating}>
                  <RefreshCw className="w-4 h-4 mr-1" /> Regerar
                </Button>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-1" /> Copiar
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">🎣 Gancho</label>
              <Textarea value={editedHookLine} onChange={(e) => setEditedHookLine(e.target.value)} rows={2} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">📝 Legenda</label>
              <Textarea value={editedCaption} onChange={(e) => setEditedCaption(e.target.value)} rows={4} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">📢 CTA</label>
              <Textarea value={editedCta} onChange={(e) => setEditedCta(e.target.value)} rows={2} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block"># Hashtags</label>
              <Textarea value={editedHashtags} onChange={(e) => setEditedHashtags(e.target.value)} rows={2} />
            </div>

            {content.image && (
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">🖼️ Imagem Gerada</label>
                <img src={content.image} alt="Generated" className="rounded-lg max-h-64 object-cover border border-border" />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Publish via Buffer */}
      {content && (
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge variant="secondary">3</Badge> Enviar ao Buffer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {loadingProfiles ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" /> Carregando perfis...
              </div>
            ) : bufferProfiles.length === 0 ? (
              <p className="text-muted-foreground text-sm">
                Nenhum perfil encontrado no Buffer. Verifique seu token de acesso.
              </p>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Selecione os perfis:</label>
                <div className="flex flex-wrap gap-2">
                  {bufferProfiles.map((profile) => (
                    <Button
                      key={profile.id}
                      variant={selectedProfiles.includes(profile.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleProfile(profile.id)}
                      className="flex items-center gap-2"
                    >
                      {profile.avatar && (
                        <img src={profile.avatar} alt="" className="w-5 h-5 rounded-full" />
                      )}
                      <span className="capitalize">{profile.service}</span>
                      <span className="text-xs opacity-70">@{profile.formatted_username}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handlePublish}
              disabled={publishing || selectedProfiles.length === 0}
              className="w-full"
              variant="default"
            >
              {publishing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Enviar para Buffer
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SocialPanelPage;
