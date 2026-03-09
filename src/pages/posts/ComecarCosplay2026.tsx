import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-cosplay-2026.webp";

const ComecarCosplay2026 = () => {
  const slug = "comecar-cosplay-2026";

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
          Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção
        </h1>

        <p className="text-muted-foreground text-lg">
          Materiais, técnicas, orçamentos e o que você precisa saber para criar seu primeiro cosplay com segurança e diversão.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            05 de Março, 2026
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
          alt="Mesa de criação com materiais de cosplay"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Cosplay</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          O cosplay deixou de ser nicho e virou fenômeno cultural. Se você sempre quis entrar nesse universo, mas travava por
          não saber por onde começar, este guia é um caminho prático do primeiro personagem até a sua primeira convenção.
        </p>

        <h2>Escolhendo seu primeiro personagem</h2>
        <p>
          A regra de ouro: escolha um personagem que você ama de verdade — e com um visual viável para o seu nível atual.
          Começar com algo simples e icônico é a melhor forma de aprender sem frustração.
        </p>

        <h2>Materiais essenciais e onde comprar</h2>
        <p>
          O <strong>EVA</strong> é a base para armaduras, props e adereços: leve, barato e fácil de moldar com pistola de calor.
          Para roupas, tecidos como Oxford e Suplex cobrem boa parte dos estilos. Ferramentas indispensáveis incluem pistola de
          calor, cola quente, lixas e primer para pintura.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Kit iniciante (bem honesto)</h3>
          <ul className="mb-0">
            <li>EVA + estilete + régua metálica</li>
            <li>Pistola de calor</li>
            <li>Cola de contato + cola quente</li>
            <li>Primer + tinta acrílica + verniz</li>
            <li>Agulha/linha (ou ajustes simples com costureira)</li>
          </ul>
        </div>

        <h2>Técnicas básicas que você precisa dominar</h2>
        <p>
          <strong>Heatforming</strong> (moldar EVA aquecido), uso de moldes em papel antes de cortar e pintura em camadas finas são
          as três habilidades que mais aceleram sua evolução.
        </p>

        <h2>Orçamentos realistas por nível</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4">Nível</th>
                <th className="text-left py-3 px-4">Faixa de custo</th>
                <th className="text-left py-3 px-4">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Iniciante</td>
                <td className="py-3 px-4 text-muted-foreground">R$ 100–300</td>
                <td className="py-3 px-4 text-muted-foreground">Roupas simples, props básicos, peruca de entrada.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Intermediário</td>
                <td className="py-3 px-4 text-muted-foreground">R$ 500–1500</td>
                <td className="py-3 px-4 text-muted-foreground">Tecidos melhores, armadura mais elaborada, LEDs.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Competição</td>
                <td className="py-3 px-4 text-muted-foreground">R$ 2000+</td>
                <td className="py-3 px-4 text-muted-foreground">Materiais premium, meses de trabalho, acabamento fino.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Sua primeira convenção: o que esperar</h2>
        <p>
          Faça um “teste de uso” por 2 horas antes do evento para descobrir pontos de desconforto. Leve um kit de emergência
          (fita dupla-face, cola, linha/agulha) e respeite a etiqueta: sempre peça permissão antes de fotografar.
        </p>

        <h2>Conclusão</h2>
        <p>
          Comece simples, documente o processo e evolua projeto por projeto — cosplay é habilidade acumulada, não talento
          instantâneo.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default ComecarCosplay2026;
