import { useState } from "react";
import { Bell, BellOff, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMetalAlerts, MetalAlert } from "@/hooks/useMetalAlerts";

interface MetalAlertConfigProps {
  goldPrice: number;
  silverPrice: number;
}

const MetalAlertConfig = ({ goldPrice, silverPrice }: MetalAlertConfigProps) => {
  const { alerts, addAlert, removeAlert, toggleAlert, checkAlerts, requestNotificationPermission } = useMetalAlerts();
  const [isOpen, setIsOpen] = useState(false);
  const [metal, setMetal] = useState<"XAU" | "XAG">("XAU");
  const [direction, setDirection] = useState<"above" | "below">("above");
  const [threshold, setThreshold] = useState("");

  // Check alerts whenever prices change
  if (goldPrice > 0 && silverPrice > 0) {
    checkAlerts(goldPrice, silverPrice);
  }

  const handleAdd = () => {
    const val = parseFloat(threshold);
    if (isNaN(val) || val <= 0) return;
    requestNotificationPermission();
    addAlert({ metal, direction, threshold: val, enabled: true });
    setThreshold("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors mt-2"
      >
        <Bell className="h-3 w-3" />
        {alerts.length > 0 ? `${alerts.filter(a => a.enabled).length} alerta(s) ativo(s)` : "Configurar alertas de preço"}
      </button>
    );
  }

  return (
    <div className="mt-3 border border-border rounded-xl p-4 bg-background/50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Bell className="h-4 w-4 text-invest" />
          Alertas de Preço
        </div>
        <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Add new alert */}
      <div className="flex flex-wrap gap-2 mb-3">
        <select
          value={metal}
          onChange={e => setMetal(e.target.value as "XAU" | "XAG")}
          className="text-xs bg-muted border border-border rounded-lg px-2 py-1.5 text-foreground"
        >
          <option value="XAU">🥇 Ouro 18k</option>
          <option value="XAG">🥈 Prata 925</option>
        </select>
        <select
          value={direction}
          onChange={e => setDirection(e.target.value as "above" | "below")}
          className="text-xs bg-muted border border-border rounded-lg px-2 py-1.5 text-foreground"
        >
          <option value="above">Acima de</option>
          <option value="below">Abaixo de</option>
        </select>
        <div className="relative">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">R$/g</span>
          <input
            type="number"
            step="0.01"
            value={threshold}
            onChange={e => setThreshold(e.target.value)}
            placeholder={metal === "XAU" ? goldPrice.toFixed(0) : silverPrice.toFixed(0)}
            className="text-xs bg-muted border border-border rounded-lg pl-10 pr-2 py-1.5 w-24 text-foreground"
          />
        </div>
        <Button size="sm" variant="outline" onClick={handleAdd} className="h-7 text-xs gap-1">
          <Plus className="h-3 w-3" />
          Criar
        </Button>
      </div>

      {/* Current alerts */}
      {alerts.length === 0 ? (
        <p className="text-[10px] text-muted-foreground">Nenhum alerta configurado. Crie um acima.</p>
      ) : (
        <div className="space-y-1.5">
          {alerts.map(alert => {
            const metalLabel = alert.metal === "XAU" ? "🥇 Ouro" : "🥈 Prata";
            const dirLabel = alert.direction === "above" ? "acima" : "abaixo";
            const currentPrice = alert.metal === "XAU" ? goldPrice : silverPrice;
            const triggered =
              (alert.direction === "above" && currentPrice >= alert.threshold) ||
              (alert.direction === "below" && currentPrice <= alert.threshold);

            return (
              <div
                key={alert.id}
                className={`flex items-center justify-between text-xs rounded-lg px-3 py-2 border ${
                  triggered
                    ? "border-yellow-500/30 bg-yellow-500/5"
                    : "border-border bg-muted/30"
                }`}
              >
                <span className={`${!alert.enabled ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {metalLabel} {dirLabel} de R$ {alert.threshold.toFixed(2)}/g
                  {triggered && " ✅"}
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => toggleAlert(alert.id)} className="p-1 hover:bg-muted rounded">
                    {alert.enabled ? <Bell className="h-3 w-3 text-invest" /> : <BellOff className="h-3 w-3 text-muted-foreground" />}
                  </button>
                  <button onClick={() => removeAlert(alert.id)} className="p-1 hover:bg-muted rounded text-red-500">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MetalAlertConfig;
