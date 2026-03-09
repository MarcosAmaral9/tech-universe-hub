import { useState } from "react";
import { Bell, BellOff, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePriceAlerts, PriceAlert } from "@/hooks/usePriceAlerts";

export interface AlertAssetOption {
  key: string;
  label: string;
  icon?: string;
  currentPrice: number;
  unit?: string;
}

interface PriceAlertConfigProps {
  storageKey: string;
  assets: AlertAssetOption[];
}

const PriceAlertConfig = ({ storageKey, assets }: PriceAlertConfigProps) => {
  const { alerts, addAlert, removeAlert, toggleAlert, checkAlerts, requestNotificationPermission } = usePriceAlerts(storageKey);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(assets[0]?.key || "");
  const [direction, setDirection] = useState<"above" | "below">("above");
  const [threshold, setThreshold] = useState("");

  // Check alerts with current prices
  const priceMap: Record<string, number> = {};
  for (const a of assets) {
    if (a.currentPrice > 0) priceMap[a.key] = a.currentPrice;
  }
  if (Object.keys(priceMap).length > 0) {
    checkAlerts(priceMap);
  }

  const handleAdd = () => {
    const val = parseFloat(threshold);
    if (isNaN(val) || val <= 0) return;
    const asset = assets.find(a => a.key === selectedAsset);
    if (!asset) return;
    requestNotificationPermission();
    addAlert({
      assetKey: asset.key,
      assetLabel: asset.label,
      direction,
      threshold: val,
      enabled: true,
    });
    setThreshold("");
  };

  const currentAsset = assets.find(a => a.key === selectedAsset);
  const unit = currentAsset?.unit || "";

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

      <div className="flex flex-wrap gap-2 mb-3">
        <select
          value={selectedAsset}
          onChange={e => setSelectedAsset(e.target.value)}
          className="text-xs bg-muted border border-border rounded-lg px-2 py-1.5 text-foreground max-w-[140px]"
        >
          {assets.map(a => (
            <option key={a.key} value={a.key}>{a.icon ? `${a.icon} ` : ""}{a.label}</option>
          ))}
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
          {unit && (
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">{unit}</span>
          )}
          <input
            type="number"
            step="0.01"
            value={threshold}
            onChange={e => setThreshold(e.target.value)}
            placeholder={currentAsset?.currentPrice?.toFixed(2) || "0"}
            className={`text-xs bg-muted border border-border rounded-lg ${unit ? "pl-10" : "pl-2"} pr-2 py-1.5 w-28 text-foreground`}
          />
        </div>
        <Button size="sm" variant="outline" onClick={handleAdd} className="h-7 text-xs gap-1">
          <Plus className="h-3 w-3" />
          Criar
        </Button>
      </div>

      {alerts.length === 0 ? (
        <p className="text-[10px] text-muted-foreground">Nenhum alerta configurado.</p>
      ) : (
        <div className="space-y-1.5">
          {alerts.map(alert => {
            const price = priceMap[alert.assetKey] || 0;
            const triggered =
              (alert.direction === "above" && price >= alert.threshold) ||
              (alert.direction === "below" && price <= alert.threshold);

            return (
              <div
                key={alert.id}
                className={`flex items-center justify-between text-xs rounded-lg px-3 py-2 border ${
                  triggered ? "border-yellow-500/30 bg-yellow-500/5" : "border-border bg-muted/30"
                }`}
              >
                <span className={`${!alert.enabled ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {alert.assetLabel} {alert.direction === "above" ? "acima" : "abaixo"} de R$ {alert.threshold.toFixed(2)}
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

export default PriceAlertConfig;
