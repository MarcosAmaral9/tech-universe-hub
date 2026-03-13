import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History, Trash2, Copy, ChevronDown, ChevronUp, Instagram, Music2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface HistoryEntry {
  id: string;
  postTitle: string;
  platform: string;
  caption: string;
  hookLine: string;
  cta: string;
  hashtags: string;
  musicSuggestion?: string;
  image: string | null;
  createdAt: string;
}

const HISTORY_KEY = "viciocode_social_history";

export const loadHistory = (): HistoryEntry[] => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveToHistory = (entry: HistoryEntry) => {
  const history = loadHistory();
  history.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
};

const SocialHistoryPanel = () => {
  const { toast } = useToast();
  const [history, setHistory] = useState<HistoryEntry[]>(loadHistory);
  const [expanded, setExpanded] = useState<string | null>(null);

  const clearHistory = () => {
    localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
    toast({ title: "Histórico limpo" });
  };

  const copyEntry = (entry: HistoryEntry) => {
    let text = `${entry.hookLine}\n\n${entry.caption}\n\n${entry.cta}\n\n${entry.hashtags}`;
    if (entry.musicSuggestion) text += `\n\n🎵 ${entry.musicSuggestion}`;
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado!" });
  };

  if (history.length === 0) {
    return (
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <History className="w-5 h-5" /> Histórico
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Nenhum conteúdo salvo ainda. Gere e salve conteúdo para ver aqui.</p>
        </CardContent>
      </Card>
    );
  }

  const platformIcon = (p: string) =>
    p === "instagram" ? <Instagram className="w-3 h-3" /> : <Music2 className="w-3 h-3" />;

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <span className="flex items-center gap-2">
            <History className="w-5 h-5" /> Histórico ({history.length})
          </span>
          <Button variant="ghost" size="sm" onClick={clearHistory}>
            <Trash2 className="w-4 h-4 mr-1" /> Limpar
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 max-h-[400px] overflow-y-auto">
        {history.map((entry) => (
          <div key={entry.id} className="border border-border rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium truncate max-w-[200px]">{entry.postTitle}</span>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  {platformIcon(entry.platform)} {entry.platform}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">
                  {new Date(entry.createdAt).toLocaleDateString("pt-BR")}
                </span>
                <Button variant="ghost" size="sm" onClick={() => copyEntry(entry)}>
                  <Copy className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}>
                  {expanded === entry.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </Button>
              </div>
            </div>
            {expanded === entry.id && (
              <div className="text-sm text-muted-foreground space-y-1 pt-2 border-t border-border">
                <p><strong>Gancho:</strong> {entry.hookLine}</p>
                <p><strong>Legenda:</strong> {entry.caption}</p>
                <p><strong>CTA:</strong> {entry.cta}</p>
                <p><strong>Hashtags:</strong> {entry.hashtags}</p>
                {entry.musicSuggestion && (
                  <p><strong>🎵 Música:</strong> {entry.musicSuggestion}</p>
                )}
                {entry.image && (
                  <>
                    <img src={entry.image} alt="Imagem gerada" className="rounded-lg max-h-40 object-cover mt-2" />
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-1"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = entry.image!;
                        link.download = `social-${entry.platform}-${Date.now()}.png`;
                        link.click();
                      }}
                    >
                      <Download className="w-3 h-3 mr-1" /> Baixar
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialHistoryPanel;
