/**
 * SubtopicFilter — filtro de posts por subtópico nas páginas de categoria
 * Usa campo `subtopic` já existente em posts.ts
 */
import { X } from "lucide-react";

interface Props {
  subtopics: { key: string; label: string; count: number }[];
  selected: string | null;
  onChange: (sub: string | null) => void;
}

const SubtopicFilter = ({ subtopics, selected, onChange }: Props) => {
  if (subtopics.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-xs text-muted-foreground font-medium shrink-0">Filtrar:</span>
      <button
        onClick={() => onChange(null)}
        className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
          !selected
            ? "bg-primary text-primary-foreground border-primary"
            : "border-border text-muted-foreground hover:border-primary/50"
        }`}
      >
        Todos
      </button>
      {subtopics.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onChange(selected === key ? null : key)}
          className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-colors ${
            selected === key
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          {label}
          <span className="opacity-70">({count})</span>
          {selected === key && <X className="h-3 w-3 ml-0.5" />}
        </button>
      ))}
    </div>
  );
};

export default SubtopicFilter;
