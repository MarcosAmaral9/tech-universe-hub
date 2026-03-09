import { useState, useEffect } from "react";
import { Wifi, WifiOff, Clock } from "lucide-react";

interface CacheStatusBarProps {
  source: string;
  isFallback: boolean;
  cacheExpiresAt: number;
}

const CacheStatusBar = ({ source, isFallback, cacheExpiresAt }: CacheStatusBarProps) => {
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    const update = () => {
      const diff = cacheExpiresAt - Date.now();
      if (diff <= 0) {
        setRemaining("atualizando...");
        return;
      }
      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setRemaining(mins > 0 ? `${mins}m ${secs}s` : `${secs}s`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [cacheExpiresAt]);

  if (!cacheExpiresAt) return null;

  const sourceLabel = isFallback
    ? "📌 Referência"
    : source?.includes("cache")
      ? "📦 Cache"
      : "🟢 Ao vivo";

  const sourceDetail = source && !isFallback && !source.includes("cache")
    ? ` (${source})`
    : "";

  return (
    <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-2 justify-center flex-wrap">
      <span className="flex items-center gap-1">
        {isFallback ? (
          <WifiOff className="h-3 w-3" />
        ) : (
          <Wifi className="h-3 w-3" />
        )}
        {sourceLabel}{sourceDetail}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        Próx. atualização: {remaining}
      </span>
    </div>
  );
};

export default CacheStatusBar;
