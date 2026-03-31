const HISTORY_KEY = "viciocode_social_history";

export interface HistoryEntry {
  id: string;
  postTitle: string;
  platform: string;
  caption: string;
  hookLine: string;
  cta: string;
  hashtags: string;
  musicSuggestion?: string;
  imagePrompt?: string;
  image?: string | null;
  createdAt: string;
}

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
