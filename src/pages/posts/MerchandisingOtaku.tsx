import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-merchandising-colecionismo.webp";

const MerchandisingOtaku = () => {
  const slug = "merchandising-otaku-colecionar-inteligencia";

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/otaku"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />

        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento
        </h1>

        <p className="text-muted-foreground text-lg">
          Onde comprar, como evitar falsificações, o que valoriza e como organizar sua coleção com calma (e estratégia).
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            11 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Prateleira com itens colecionáveis e mangás representando merchandising otaku"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Colecionismo</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Colecionar é uma das partes mais prazerosas — e perigosas — da cultura otaku. Este guia é um mapa para montar uma
          coleção bonita sem cair em armadilhas do mercado.
        </p>

        <h2>Entendendo o mercado de collectibles</h2>
        <p>
          Existe uma diferença enorme entre linhas (prize figures, escalas, articuladas) e isso afeta preço, durabilidade e
          valor de revenda. Antes de comprar, defina: você quer <em>exposição</em> ou <em>investimento</em>?
        </p>

        <h2>Onde comprar: Brasil vs importação</h2>
        <p>
          Comprar no Brasil tende a ser mais caro, mas reduz risco e tempo de espera. Importar pode valer a pena com
          planejamento — mas sempre considere taxas e prazos.
        </p>

        <h2>Como identificar falsificações</h2>
        <ul>
          <li>Preço muito abaixo do mercado</li>
          <li>Acabamento irregular e encaixes frouxos</li>
          <li>Ausência de selos/hologramas quando esperados</li>
          <li>Caixa com impressão de baixa qualidade</li>
        </ul>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Regra de ouro</h3>
          <p className="mb-0 text-muted-foreground">
            Se parece bom demais para ser verdade, provavelmente é falso. Prefira vendedores com histórico verificável.
          </p>
        </div>

        <h2>O que valoriza e o que desvaloriza</h2>
        <p>
          Edições limitadas e itens descontinuados costumam valorizar; falta de caixa e exposição ao sol desvalorizam. Se você
          pensa em revenda, conserve embalagem e registre a procedência.
        </p>

        <h2>Organizando e exibindo sua coleção</h2>
        <p>
          Uma vitrine com iluminação LED e proteção contra poeira muda tudo. Para mangás, organização por série e capas
          protetoras ajudam a manter o estado.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default MerchandisingOtaku;
