import { Quote } from "lucide-react";
import type { Category } from "@/types/blog";

const CATEGORY_STYLES: Record<Category, { border: string; bg: string; text: string }> = {
  ia: { border: "border-l-ia", bg: "bg-ia/5", text: "text-ia" },
  invest: { border: "border-l-invest", bg: "bg-invest/5", text: "text-invest" },
  geek: { border: "border-l-geek", bg: "bg-geek/5", text: "text-geek" },
  otaku: { border: "border-l-otaku", bg: "bg-otaku/5", text: "text-otaku" },
};

interface EditorialTakeProps {
  category: Category;
  title?: string;
  children: React.ReactNode;
}

/**
 * Bloco "Análise do Marcos" — opinião editorial do autor.
 * Layout padronizado em todos os posts; cor de destaque vem da categoria.
 * Cumpre critério E-E-A-T do Google e política de qualidade do AdSense.
 */
const EditorialTake = ({ category, title = "Análise do Marcos", children }: EditorialTakeProps) => {
  const s = CATEGORY_STYLES[category];
  return (
    <aside className={`not-prose my-10 border-l-4 ${s.border} ${s.bg} rounded-r-xl p-6 md:p-7`}>
      <div className="flex items-center gap-2 mb-3">
        <Quote className={`h-4 w-4 ${s.text}`} />
        <h3 className={`font-display text-xs md:text-sm font-bold uppercase tracking-[0.12em] ${s.text}`}>
          {title}
        </h3>
      </div>
      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/90 leading-relaxed">
        {children}
      </div>
      <p className="text-xs text-muted-foreground mt-4 italic">
        — Marcos Amaral, opinião editorial do VICIO&lt;CODE&gt;.
      </p>
    </aside>
  );
};

export default EditorialTake;
