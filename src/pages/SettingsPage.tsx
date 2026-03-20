import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import { Settings, Sun, Moon, Type, Palette, Bell, BellOff, RotateCcw, Smartphone, Globe, User, AtSign, Camera, BookOpen, MessageSquare, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { getReadHistory, getCommentHistory } from "@/hooks/useReadingHistory";
import type { HistoryArticle, HistoryComment } from "@/hooks/useReadingHistory";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const NOTIFICATION_SOUND_KEY = "pwa_update_sound_enabled";
const FONT_SIZE_KEY = "viciocode_font_size";
const ACCENT_COLOR_KEY = "viciocode_accent_color";

type FontSize = "small" | "normal" | "large";
type AccentColor = "cyan" | "purple" | "green" | "orange" | "pink" | "blue";

const accentColors: { id: AccentColor; label: string; hsl: string; preview: string }[] = [
  { id: "cyan", label: "Ciano", hsl: "187 85% 43%", preview: "bg-[hsl(187,85%,43%)]" },
  { id: "purple", label: "Roxo", hsl: "270 70% 55%", preview: "bg-[hsl(270,70%,55%)]" },
  { id: "green", label: "Verde", hsl: "142 70% 45%", preview: "bg-[hsl(142,70%,45%)]" },
  { id: "orange", label: "Laranja", hsl: "25 95% 55%", preview: "bg-[hsl(25,95%,55%)]" },
  { id: "pink", label: "Rosa", hsl: "330 80% 60%", preview: "bg-[hsl(330,80%,60%)]" },
  { id: "blue", label: "Azul", hsl: "220 90% 55%", preview: "bg-[hsl(220,90%,55%)]" },
];

const DEFAULT_PRIMARY_HSL = "187 85% 43%";

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, profile, updateProfile, signOut, fetchProfile, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/entrar", { replace: true });
  }, [user, loading, navigate]);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const stored = localStorage.getItem(NOTIFICATION_SOUND_KEY);
    return stored === null ? true : stored === "true";
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem(FONT_SIZE_KEY) as FontSize) || "normal";
  });
  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    return (localStorage.getItem(ACCENT_COLOR_KEY) as AccentColor) || "cyan";
  });

  // Profile editing
  const [editName, setEditName] = useState("");
  const [editNickname, setEditNickname] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [activeTab, setActiveTab] = useState<"settings" | "history">("settings");
  const [readHistory, setReadHistory] = useState<HistoryArticle[]>([]);
  const [commentHistory, setCommentHistory] = useState<HistoryComment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (profile) {
      setEditName(profile.name);
      setEditNickname(profile.nickname);
    }
  }, [profile]);

  useEffect(() => {
    setReadHistory(getReadHistory());
    setCommentHistory(getCommentHistory());
  }, [activeTab]);

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem(NOTIFICATION_SOUND_KEY, String(newValue));
  };

  const changeFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem(FONT_SIZE_KEY, size);
    document.documentElement.classList.remove("font-small", "font-normal", "font-large");
    document.documentElement.classList.add(`font-${size}`);
  };

  const changeAccentColor = (color: AccentColor) => {
    setAccentColor(color);
    localStorage.setItem(ACCENT_COLOR_KEY, color);
    const colorData = accentColors.find(c => c.id === color);
    if (colorData) {
      document.documentElement.style.setProperty("--primary", colorData.hsl);
      document.documentElement.style.setProperty("--ring", colorData.hsl);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    setSavingProfile(true);
    const error = await updateProfile({ name: editName.trim(), nickname: editNickname.trim() });
    if (error) {
      toast({ title: "Erro", description: "Não foi possível salvar.", variant: "destructive" });
    } else {
      toast({ title: "Perfil atualizado! ✅" });
    }
    setSavingProfile(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith("image/")) {
      toast({ title: "Erro", description: "Selecione uma imagem válida.", variant: "destructive" });
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast({ title: "Erro", description: "A imagem deve ter no máximo 2MB.", variant: "destructive" });
      return;
    }

    setUploadingAvatar(true);
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("user_id", user.id);

      const res = await fetch(`/api.php?action=upload_avatar`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        toast({ title: "Erro no upload", description: data.error || "Não foi possível enviar a imagem.", variant: "destructive" });
      } else {
        await fetchProfile(user.id);
        toast({ title: "Avatar atualizado! 📸" });
      }
    } catch {
      toast({ title: "Erro", description: "Falha ao enviar imagem.", variant: "destructive" });
    }
    setUploadingAvatar(false);
  };

  const handleToggleNotification = async (key: "notifications_site" | "notifications_app", value: boolean) => {
    if (!user) return;

    // If enabling app notifications, request browser permission
    if (key === "notifications_app" && value) {
      if (!("Notification" in window)) {
        toast({ title: "Não suportado", description: "Seu navegador não suporta notificações push.", variant: "destructive" });
        return;
      }
      if (Notification.permission === "denied") {
        toast({ title: "Permissão bloqueada", description: "As notificações estão bloqueadas. Clique no cadeado na barra de endereços do navegador e altere para 'Permitir'.", variant: "destructive" });
        return;
      }
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        toast({ title: "Permissão negada", description: "Para ativar, clique no cadeado (🔒) na barra de endereços e permita notificações para viciocode.com.", variant: "destructive" });
        return;
      }
    }

    const error = await updateProfile({ [key]: value });
    if (error) {
      toast({ title: "Erro", description: "Não foi possível atualizar.", variant: "destructive" });
    } else {
      toast({ title: value ? "Notificações ativadas ✅" : "Notificações desativadas" });
    }
  };

  const resetAll = () => {
    if (theme !== "dark") toggleTheme();
    changeFontSize("normal");
    changeAccentColor("cyan");
    document.documentElement.style.setProperty("--primary", DEFAULT_PRIMARY_HSL);
    document.documentElement.style.setProperty("--ring", DEFAULT_PRIMARY_HSL);
    setSoundEnabled(true);
    localStorage.setItem(NOTIFICATION_SOUND_KEY, "true");
    toast({ title: "Configurações restauradas", description: "Todas as preferências voltaram ao padrão." });
  };

  return (
    <div className="min-h-[70vh] py-12 px-4">
      <DynamicSEO />
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-2">
            <Settings className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground">
            Configurações
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Personalize sua experiência no VICIO&lt;CODE&gt;
          </p>
        </div>

        {/* Tab Switcher */}
        {user && (
          <div className="flex rounded-xl border border-border overflow-hidden bg-card">
            {([
              { id: "settings", label: "Configurações", icon: <Settings className="h-4 w-4" /> },
              { id: "history",  label: "Histórico",      icon: <Clock className="h-4 w-4" /> },
            ] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.icon}{tab.label}
              </button>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && user && (
          <div className="space-y-6">
            {/* Last read articles */}
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" /> Últimos artigos lidos
              </h2>
              {readHistory.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  Nenhum artigo lido ainda. Comece a explorar o site!
                </p>
              ) : (
                <div className="space-y-3">
                  {readHistory.map((a, i) => (
                    <Link
                      key={i}
                      to={`/post/${a.slug}`}
                      className="flex items-start justify-between gap-3 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{a.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {new Date(a.readAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
                    </Link>
                  ))}
                </div>
              )}
            </section>

            {/* Last comments */}
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" /> Últimos comentários
              </h2>
              {commentHistory.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  Você ainda não comentou em nenhum artigo.
                </p>
              ) : (
                <div className="space-y-3">
                  {commentHistory.map((cm, i) => (
                    <Link
                      key={i}
                      to={`/post/${cm.postId}`}
                      className="block p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <p className="text-xs text-primary font-medium mb-1 line-clamp-1 group-hover:underline">
                        {cm.postTitle}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">"{cm.text}{cm.text.length >= 100 ? "…" : ""}"</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(cm.commentedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* Wrap all settings sections in a conditional div */}
        {activeTab === "settings" && (
        <div className="space-y-10 pb-1">

        {/* User Profile Section */}
        {user && profile && (
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Meu Perfil
            </h2>

            {/* Avatar Upload */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex items-center justify-center ring-2 ring-primary/20">
                  {profile.avatar_url ? (
                    <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingAvatar}
                  className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  {uploadingAvatar ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Camera className="w-5 h-5 text-white" />
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{profile.nickname || profile.name || "Usuário"}</p>
                <p className="text-xs text-muted-foreground">Clique na foto para alterar (máx. 2MB)</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="profile-name" className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Nome</Label>
                <Input id="profile-name" value={editName} onChange={(e) => setEditName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-nickname" className="flex items-center gap-1"><AtSign className="w-3.5 h-3.5" /> Apelido</Label>
                <Input id="profile-nickname" value={editNickname} onChange={(e) => setEditNickname(e.target.value)} />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>📧 {user.email}</span>
              <Button size="sm" onClick={handleSaveProfile} disabled={savingProfile}>
                {savingProfile ? "Salvando..." : "Salvar perfil"}
              </Button>
            </div>

            {/* Notification Preferences */}
            <div className="border-t border-border pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Notificações</h3>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Notificações do site</p>
                    <p className="text-xs text-muted-foreground">Alertas e atualizações no navegador</p>
                  </div>
                </div>
                <Switch
                  checked={profile.notifications_site}
                  onCheckedChange={(v) => handleToggleNotification("notifications_site", v)}
                  aria-label="Notificações do site"
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Notificações do app</p>
                    <p className="text-xs text-muted-foreground">Push notifications no dispositivo</p>
                  </div>
                </div>
                <Switch
                  checked={profile.notifications_app}
                  onCheckedChange={(v) => handleToggleNotification("notifications_app", v)}
                  aria-label="Notificações do app"
                />
              </div>
            </div>
          </section>
        )}

        {/* Settings Card */}
        <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
          {/* Theme */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
              <div>
                <p className="font-medium text-foreground">Tema</p>
                <p className="text-sm text-muted-foreground">{theme === "dark" ? "Modo escuro ativado" : "Modo claro ativado"}</p>
              </div>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Alternar tema" />
          </div>

          {/* Font Size */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Tamanho da fonte</p>
                <p className="text-sm text-muted-foreground">Ajuste o tamanho do texto</p>
              </div>
            </div>
            <div className="flex gap-1">
              {(["small", "normal", "large"] as FontSize[]).map((size) => (
                <Button
                  key={size}
                  variant={fontSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeFontSize(size)}
                  className={size === "small" ? "text-xs px-2" : size === "normal" ? "text-sm px-2" : "text-base px-2"}
                >
                  A
                </Button>
              ))}
            </div>
          </div>

          {/* Accent Color */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Cor de destaque</p>
                <p className="text-sm text-muted-foreground">Personalize a cor principal</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              {accentColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => changeAccentColor(color.id)}
                  className={`w-7 h-7 rounded-full ${color.preview} transition-all ${
                    accentColor === color.id
                      ? "ring-2 ring-offset-2 ring-offset-background ring-foreground scale-110"
                      : "hover:scale-105"
                  }`}
                  aria-label={color.label}
                  title={color.label}
                />
              ))}
            </div>
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {soundEnabled ? <Bell className="w-5 h-5 text-primary" /> : <BellOff className="w-5 h-5 text-muted-foreground" />}
              <div>
                <p className="font-medium text-foreground">Som e vibração</p>
                <p className="text-sm text-muted-foreground">Notificar quando uma nova versão estiver disponível</p>
              </div>
            </div>
            <Switch checked={soundEnabled} onCheckedChange={toggleSound} aria-label="Ativar som e vibração" />
          </div>
        </section>

        {/* Reset & Logout */}
        <div className="text-center space-y-3">
          <Button variant="outline" onClick={resetAll} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Restaurar padrão
          </Button>
          {user && (
            <div>
              <Button
                variant="ghost"
                onClick={async () => { await signOut(); navigate("/", { replace: true }); }}
                className="gap-2 text-destructive hover:text-destructive"
              >
                Sair da conta
              </Button>
            </div>
          )}
        </div>
        </div>
        )}{/* end activeTab === settings */}
      </div>
    </div>
  );
};

export default SettingsPage;
