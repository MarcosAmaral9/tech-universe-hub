/**
 * PushNotificationButton — botão opt-in para push notifications
 * Exibido nas Configurações do usuário (SettingsPage)
 * Visível apenas em browsers que suportam Push API
 */
import { Bell, BellOff, BellRing, Loader2 } from "lucide-react";
import { usePushNotifications } from "@/hooks/usePushNotifications";

const PushNotificationButton = () => {
  const { status, loading, supported, subscribe, unsubscribe } = usePushNotifications();

  if (!supported || status === "unsupported") return null;

  if (status === "denied") {
    return (
      <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
        <BellOff className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-destructive">Notificações bloqueadas</p>
          <p className="text-xs text-muted-foreground mt-1">
            Para ativar, acesse as configurações do seu navegador e permita notificações para viciocode.com.
          </p>
        </div>
      </div>
    );
  }

  if (status === "granted") {
    return (
      <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-center gap-3">
          <BellRing className="h-5 w-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Notificações ativas</p>
            <p className="text-xs text-muted-foreground">Você receberá alertas de novos artigos.</p>
          </div>
        </div>
        <button
          onClick={unsubscribe}
          className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground"
        >
          Desativar
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
      <div className="flex items-center gap-3">
        <Bell className="h-5 w-5 text-primary shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">Notificações push</p>
          <p className="text-xs text-muted-foreground">Seja avisado quando novos artigos forem publicados.</p>
        </div>
      </div>
      <button
        onClick={subscribe}
        disabled={loading}
        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors font-semibold"
      >
        {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Bell className="h-3.5 w-3.5" />}
        Ativar
      </button>
    </div>
  );
};

export default PushNotificationButton;
