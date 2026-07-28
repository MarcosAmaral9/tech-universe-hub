import { AlertTriangle, Info } from "lucide-react";
import type { Category } from "@/types/blog";

/**
 * ContentDisclaimer — aviso editorial exigido pelas políticas do Google AdSense
 * e pelos critérios YMYL do Google Search.
 *
 * Renderizado automaticamente no rodapé do bloco de fontes (ArticleSources),
 * portanto aparece em TODOS os artigos sem precisar editar post a post.
 * O texto varia por categoria:
 *   - invest → aviso de que não é recomendação de investimento
 *   - ia     → aviso de que informações sobre IA mudam rápido
 *   - geek/otaku → aviso de conteúdo informativo/opinativo
 */
const COPY: Record<Category, { title: string; body: string; tone: "warn" | "info" }> = {
  invest: {
    title: "Aviso importante — este conteúdo não é recomendação de investimento",
    body:
      "O VICIO<CODE> produz conteúdo educativo e informativo. Nada aqui constitui recomendação, consultoria ou oferta de compra e venda de ativos. Investimentos envolvem risco de perda de capital e rentabilidade passada não garante rentabilidade futura. Avalie seu perfil e, se necessário, procure um profissional certificado (CVM/ANBIMA) antes de decidir.",
    tone: "warn",
  },
  ia: {
    title: "Aviso — o cenário de IA muda rápido",
    body:
      "Preços, limites de uso e recursos de ferramentas de inteligência artificial mudam com frequência. As informações deste artigo refletem o que estava publicado nas fontes oficiais na data de apuração indicada acima. Confirme sempre na documentação do fornecedor antes de contratar ou tomar decisões técnicas.",
    tone: "info",
  },
  geek: {
    title: "Aviso — conteúdo informativo e opinativo",
    body:
      "Datas de lançamento, preços e conteúdos de jogos, filmes e séries podem mudar sem aviso das produtoras. As análises assinadas refletem a opinião do autor. Não temos vínculo com as empresas citadas, e nenhuma marca patrocinou este artigo.",
    tone: "info",
  },
  otaku: {
    title: "Aviso — conteúdo informativo e opinativo",
    body:
      "Cronogramas de exibição, plataformas de streaming e datas de publicação de mangás podem mudar sem aviso dos estúdios e editoras. As análises assinadas refletem a opinião do autor. Não temos vínculo com as empresas citadas, e nenhuma marca patrocinou este artigo.",
    tone: "info",
  },
};

interface ContentDisclaimerProps {
  category?: Category;
  className?: string;
}

const ContentDisclaimer = ({ category, className = "" }: ContentDisclaimerProps) => {
  const copy = COPY[category ?? "geek"];
  const warn = copy.tone === "warn";
  const Icon = warn ? AlertTriangle : Info;

  return (
    <aside
      className={`not-prose rounded-lg border p-4 md:p-5 ${
        warn ? "border-destructive/30 bg-destructive/5" : "border-border bg-muted/40"
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`h-5 w-5 shrink-0 mt-0.5 ${warn ? "text-destructive" : "text-muted-foreground"}`}
          aria-hidden="true"
        />
        <div>
          <p
            className={`font-display text-xs md:text-sm font-bold uppercase tracking-wide mb-1 ${
              warn ? "text-destructive" : "text-foreground"
            }`}
          >
            {copy.title}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{copy.body}</p>
        </div>
      </div>
    </aside>
  );
};

export default ContentDisclaimer;
