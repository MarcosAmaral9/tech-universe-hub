import { useState, useEffect } from "react";
import { Download, Smartphone, Monitor, Share, MoreVertical, PlusSquare, CheckCircle2, Bell, BellOff, Settings, Sun, Moon, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const NOTIFICATION_SOUND_KEY = "pwa_update_sound_enabled";
const FONT_SIZE_KEY = "viciocode_font_size";

type FontSize = "small" | "normal" | "large";

const InstallPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const stored = localStorage.getItem(NOTIFICATION_SOUND_KEY);
    return stored === null ? true : stored === "true";
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const stored = localStorage.getItem(FONT_SIZE_KEY) as FontSize;
    return stored || "normal";
  });

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setIsInstalled(true);
    setDeferredPrompt(null);
  };

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

  useEffect(() => {
    const savedSize = localStorage.getItem(FONT_SIZE_KEY) as FontSize;
    if (savedSize) {
      document.documentElement.classList.add(`font-${savedSize}`);
    }
  }, []);

  return (
    <div className="min-h-[70vh] py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-2">
            <Download className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground">
            Instale o VICIO&lt;CODE&gt;
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Acesse todo o conteúdo direto da tela inicial do seu celular — rápido, offline e sem precisar de app store.
          </p>
        </div>

        {/* Status */}
        {isInstalled && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <p className="font-medium">App já instalado! Abra pela tela inicial do seu dispositivo.</p>
          </div>
        )}

        {/* Install button (Android/Desktop Chrome) */}
        {!isInstalled && !isIOS && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleInstall}
              disabled={!deferredPrompt}
              className="text-lg px-8 py-6 rounded-xl font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              {deferredPrompt ? "Instalar agora" : "Abrindo no navegador…"}
            </Button>
            {!deferredPrompt && !isInstalled && (
              <p className="text-sm text-muted-foreground mt-3">
                Se o botão não aparecer, siga as instruções abaixo para o seu dispositivo.
              </p>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="space-y-8">
          {/* Android */}
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Android (Chrome)</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">1</span>
                <span>Abra este site no <strong className="text-foreground">Google Chrome</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">2</span>
                <span className="flex items-center gap-1">
                  Toque no menu <MoreVertical className="w-4 h-4 inline text-foreground" /> (três pontos) no canto superior direito
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">3</span>
                <span>Selecione <strong className="text-foreground">"Instalar aplicativo"</strong> ou <strong className="text-foreground">"Adicionar à tela inicial"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">4</span>
                <span>Confirme e pronto! O ícone aparecerá na sua tela inicial.</span>
              </li>
            </ol>
          </section>

          {/* iOS */}
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">iPhone / iPad (Safari)</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">1</span>
                <span>Abra este site no <strong className="text-foreground">Safari</strong> (obrigatório no iOS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">2</span>
                <span className="flex items-center gap-1">
                  Toque no botão <Share className="w-4 h-4 inline text-foreground" /> Compartilhar na barra inferior
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">3</span>
                <span className="flex items-center gap-1">
                  Role e selecione <PlusSquare className="w-4 h-4 inline text-foreground" /> <strong className="text-foreground">"Adicionar à Tela de Início"</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">4</span>
                <span>Toque em <strong className="text-foreground">"Adicionar"</strong> e o app aparecerá na sua tela.</span>
              </li>
            </ol>
          </section>

          {/* Desktop */}
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Monitor className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Desktop (Chrome / Edge)</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">1</span>
                <span>Abra o site no <strong className="text-foreground">Chrome</strong> ou <strong className="text-foreground">Edge</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">2</span>
                <span>Clique no ícone de <strong className="text-foreground">instalar</strong> (⊕) na barra de endereço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">3</span>
                <span>Confirme a instalação. O app abrirá em janela própria!</span>
              </li>
            </ol>
          </section>
        </div>

        {/* Settings */}
        <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Configurações do App</h2>
          </div>
          
          {/* Theme Toggle */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
              <div>
                <p className="font-medium text-foreground">Tema</p>
                <p className="text-sm text-muted-foreground">
                  {theme === "dark" ? "Modo escuro ativado" : "Modo claro ativado"}
                </p>
              </div>
            </div>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              aria-label="Alternar tema"
            />
          </div>

          {/* Font Size */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Tamanho da fonte</p>
                <p className="text-sm text-muted-foreground">
                  Ajuste o tamanho do texto
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant={fontSize === "small" ? "default" : "outline"}
                size="sm"
                onClick={() => changeFontSize("small")}
                className="text-xs px-2"
              >
                A
              </Button>
              <Button
                variant={fontSize === "normal" ? "default" : "outline"}
                size="sm"
                onClick={() => changeFontSize("normal")}
                className="text-sm px-2"
              >
                A
              </Button>
              <Button
                variant={fontSize === "large" ? "default" : "outline"}
                size="sm"
                onClick={() => changeFontSize("large")}
                className="text-base px-2"
              >
                A
              </Button>
            </div>
          </div>

          {/* Sound Toggle */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {soundEnabled ? (
                <Bell className="w-5 h-5 text-primary" />
              ) : (
                <BellOff className="w-5 h-5 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium text-foreground">Som e vibração</p>
                <p className="text-sm text-muted-foreground">
                  Notificar quando uma nova versão estiver disponível
                </p>
              </div>
            </div>
            <Switch
              checked={soundEnabled}
              onCheckedChange={toggleSound}
              aria-label="Ativar som e vibração"
            />
          </div>
        </section>

        {/* Benefits */}
        <div className="text-center space-y-3 pt-4">
          <h3 className="text-lg font-semibold text-foreground">Por que instalar?</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">⚡ Carregamento instantâneo</span>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">📴 Funciona offline</span>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">🚫 Sem app store</span>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">💾 Ocupa pouco espaço</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPage;
