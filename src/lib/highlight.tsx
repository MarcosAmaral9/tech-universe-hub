/**
 * highlight.tsx — destaca o termo pesquisado dentro de um texto.
 * Compara de forma acento-insensível, mas preserva o texto original.
 */
import type { ReactNode } from "react";

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function highlight(text: string, query: string): ReactNode {
  const q = norm(query.trim());
  if (!q) return text;

  const haystack = norm(text);
  const parts: ReactNode[] = [];
  let pos = 0;
  let idx = haystack.indexOf(q);
  let key = 0;

  while (idx !== -1) {
    if (idx > pos) parts.push(text.slice(pos, idx));
    parts.push(
      <mark key={key++} className="bg-primary/25 text-foreground rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </mark>
    );
    pos = idx + q.length;
    idx = haystack.indexOf(q, pos);
  }
  if (pos < text.length) parts.push(text.slice(pos));
  return parts;
}
