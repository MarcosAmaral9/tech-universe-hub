import { Quote } from "lucide-react";
import type { Category } from "@/types/blog";

const CATEGORY_ACCENT: Record<Category, string> = {
  ia: "border-l-ia bg-ia/5",
  invest: "border-l-invest bg-invest/5",
  geek: "border-l-geek bg-geek/5",
  otaku: "border-l-otaku bg-otaku/5",
};

interface EditorialTakeProps {
  category: Category;
  title?: string;
  children: React.ReactNode;
}

/**
 * Bloco de "Opinião do Marcos" / "Análise editorial" — cumpre o critério
 * de perspectiva original do autor exigido pelo Google E-E-A-T e pela
 * política de qualidade do AdSense (conteúdo com valor agregado próprio).
 */
const EditorialTake = ({ category, title = "Análise do Marcos", children }: EditorialTakeProps) => {
  const accent = CATEGORY_ACCENT[category];
  return (
    <aside className={`not-prose my-8 border-l-4 ${accent} rounded-r-xl p-5`}>
      <div className="flex items-center gap-2 mb-2">
        <Quote className="h-4 w-4 text-primary" />
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
          {title}
        </h3>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90">
        {children}
      </div>
      <p className="text-xs text-muted-foreground mt-3 italic">
        — Marcos Amaral, opinião editorial do VICIO&lt;CODE&gt;.
      </p>
    </aside>
  );
};

export default EditorialTake;
