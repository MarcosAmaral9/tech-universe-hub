import { Link } from "react-router-dom";
import { User, Calendar, RefreshCw } from "lucide-react";
import type { Category } from "@/types/blog";

const CATEGORY_TAGLINE: Record<Category, string> = {
  ia: "entusiasta de inteligência artificial",
  invest: "entusiasta de finanças",
  geek: "entusiasta do universo geek",
  otaku: "entusiasta do mundo otaku",
};

const CATEGORY_COLOR: Record<Category, string> = {
  ia: "border-ia/40 bg-ia/5",
  invest: "border-invest/40 bg-invest/5",
  geek: "border-geek/40 bg-geek/5",
  otaku: "border-otaku/40 bg-otaku/5",
};

interface AuthorBioProps {
  category: Category;
  publishedAt?: string; // formato amigável já em PT-BR (ex.: "04 de Maio, 2026")
  updatedAt?: string;
  variant?: "compact" | "full";
}

/**
 * Assinatura editorial do site. Renderiza o autor (Marcos Amaral),
 * a credencial específica da categoria, datas de publicação/atualização
 * e link para a página /sobre. Reforço de E-E-A-T para SEO e AdSense.
 */
const AuthorBio = ({ category, publishedAt, updatedAt, variant = "compact" }: AuthorBioProps) => {
  const tagline = CATEGORY_TAGLINE[category];
  const colorClasses = CATEGORY_COLOR[category];

  if (variant === "compact") {
    return (
      <div className={`not-prose flex flex-wrap items-center gap-3 text-sm rounded-lg border ${colorClasses} px-4 py-3 my-4`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
            MA
          </div>
          <div className="leading-tight">
            <Link to="/sobre" className="font-semibold hover:underline">
              Por Marcos Amaral
            </Link>
            <p className="text-xs text-muted-foreground">{tagline}</p>
          </div>
        </div>
        {publishedAt && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
            <Calendar className="h-3 w-3" /> {publishedAt}
          </span>
        )}
        {updatedAt && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <RefreshCw className="h-3 w-3" /> Atualizado em {updatedAt}
          </span>
        )}
      </div>
    );
  }

  // variant === "full" — usado no rodapé do artigo
  return (
    <aside className={`not-prose mt-12 rounded-xl border ${colorClasses} p-6`}>
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg shrink-0">
          MA
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
            <User className="h-3 w-3" /> Sobre o autor
          </p>
          <Link to="/sobre" className="font-display text-lg font-bold hover:underline">
            Marcos Amaral
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Marcos Vinícius Cavalcante Amaral, formado em Sistemas de Informação e {tagline}.
            Escreve no VICIO&lt;CODE&gt; analisando como a tecnologia, os mercados e a cultura pop moldam o cotidiano.{" "}
            <Link to="/sobre" className="text-primary hover:underline">
              Conhecer o autor →
            </Link>
          </p>
          {(publishedAt || updatedAt) && (
            <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
              {publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Publicado em {publishedAt}
                </span>
              )}
              {updatedAt && (
                <span className="flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" /> Atualizado em {updatedAt}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AuthorBio;
