import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

/**
 * TableOfContents — índice flutuante do artigo (apenas desktop ≥ xl).
 * Lê os <h2>/<h3> do artigo já renderizado, injeta ids quando faltam e
 * destaca a seção ativa durante o scroll. Melhora tempo de permanência e
 * favorece a geração de sitelinks no Google.
 */
const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const t = setTimeout(() => {
      const article = document.querySelector("article") ?? document.querySelector("main");
      if (!article) return;

      const nodes = Array.from(article.querySelectorAll("h2, h3")).filter((el) => {
        const text = el.textContent?.trim() ?? "";
        if (text.length < 3) return false;
        // Ignora blocos utilitários (fontes, comentários, relacionados)
        return !el.closest("[aria-labelledby='article-sources'], nav, footer, aside");
      }) as HTMLElement[];

      const used = new Set<string>();
      const list: Heading[] = nodes.map((el) => {
        let id = el.id || slugify(el.textContent ?? "");
        while (used.has(id)) id = `${id}-1`;
        used.add(id);
        if (!el.id) el.id = id;
        return { id, text: el.textContent?.trim() ?? "", level: el.tagName === "H2" ? 2 : 3 };
      });

      if (list.length < 4) return; // artigo curto: não vale a pena
      setHeadings(list);

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (visible) setActive(visible.target.id);
        },
        { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
      );
      nodes.forEach((n) => observer.observe(n));
      return () => observer.disconnect();
    }, 300);

    return () => clearTimeout(t);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Índice do artigo"
      className="hidden xl:block fixed right-6 top-28 w-64 max-h-[65vh] overflow-y-auto z-20 rounded-xl border border-border bg-card/90 backdrop-blur p-4"
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
        <List className="h-3.5 w-3.5" /> Neste artigo
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-3" : undefined}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                setActive(h.id);
              }}
              className={`block text-xs leading-snug transition-colors line-clamp-2 ${
                active === h.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
