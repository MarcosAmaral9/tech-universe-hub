import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Ship, Crown, Shield, Axe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import vikingsImg from "@/assets/vikings-ragnar.jpg";

const VikingsLegadoRagnar = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Geek
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="geek" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Vikings: O Legado de Ragnar Lothbrok e o Fascínio pela Mitologia Nórdica
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            18 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            6 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={vikingsImg}
          alt="Vikings Ragnar Lothbrok"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Poucas séries conseguiram capturar a brutalidade e a espiritualidade da Era Viking como a obra do 
          History Channel. O que começou como a história de um simples fazendeiro chamado <strong>Ragnar Lothbrok</strong>, 
          tornou-se uma saga épica sobre ambição, choque de culturas e a transição entre deuses antigos e o cristianismo.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Sword className="h-6 w-6 text-geek" />
            O que tornou Vikings especial?
          </h3>
          <p className="text-muted-foreground mb-0">
            Diferente de outras produções, Vikings focou no <strong>desenvolvimento dos personagens</strong>. 
            Acompanhamos a evolução de <strong>Lagertha</strong>, a maior escudeira da televisão, e a ascensão 
            dos filhos de Ragnar, como o estrategista <strong>Ivar, o Desossado</strong> e o explorador 
            <strong> Bjorn Ironside</strong>. Cada personagem carrega uma história complexa que nos prende 
            episódio após episódio.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-geek" />
          Realidade vs. Ficção
        </h2>

        <p>
          Embora a série tome liberdades criativas (como o tempo de vida dos personagens), ela acertou 
          em cheio ao mostrar o <strong>modo de vida nórdico</strong>. A produção investiu pesadamente 
          em consultores históricos para garantir a autenticidade visual e cultural.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Os Longships</h4>
            <p className="text-sm text-muted-foreground">
              A importância dos navios para a exploração e as táticas de invasão que mudaram a Europa.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">As Escudeiras</h4>
            <p className="text-sm text-muted-foreground">
              O papel das mulheres na sociedade viking, lutando lado a lado com os homens.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Axe className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">A Política Viking</h4>
            <p className="text-sm text-muted-foreground">
              A política complexa entre os condados (Earls) e reis, disputas de poder e alianças.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">A Mitologia Nórdica</h2>

        <p>
          Um dos maiores acertos da série foi a forma como apresentou a <strong>mitologia nórdica</strong> 
          ao grande público. Os deuses como Odin, Thor e Freya não eram apenas mencionados – eles eram 
          parte integral da narrativa, influenciando as decisões dos personagens e seus destinos.
        </p>

        <blockquote className="border-l-4 border-geek pl-6 my-8 italic text-muted-foreground">
          "Os deuses não determinam o destino dos homens – eles apenas assistem enquanto os homens 
          fazem suas próprias escolhas."
          <footer className="mt-2 not-italic font-semibold">— Ragnar Lothbrok</footer>
        </blockquote>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Legado Continua</h2>

        <p>
          Mesmo com o fim da série original e a sequência <strong>Vikings: Valhalla</strong>, o impacto 
          cultural de Ragnar permanece. A série inspirou uma nova geração de fãs a pesquisar sobre a 
          história viking, mitologia nórdica e cultura escandinava.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-geek/20 to-background rounded-xl border border-geek/30">
          <h3 className="text-xl font-bold mb-4">📺 Vikings: Valhalla</h3>
          <p className="text-muted-foreground mb-4">
            A série da Netflix continua a saga, agora focando em personagens históricos como 
            <strong> Leif Eriksson</strong>, <strong>Harald Sigurdsson</strong> e <strong>Olaf Haraldsson</strong>, 
            explorando a cristianização da Escandinávia.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ 3 temporadas disponíveis</li>
            <li>✓ Mesma qualidade de produção</li>
            <li>✓ Foco em eventos históricos reais</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão</h2>

        <p>
          Se você busca uma série que une <strong>ação visceral</strong> com <strong>filosofia sobre destino 
          e deuses</strong>, Vikings continua sendo obrigatória em 2026. A produção conseguiu o raro feito 
          de entreter enquanto educa, deixando um legado que transcende o entretenimento.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual foi sua cena favorita de Vikings?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="vikings-legado-ragnar-lothbrok" />

      {/* Comments */}
      <CommentSection postId="vikings-legado-ragnar-lothbrok" />
    </article>
  );
};

export default VikingsLegadoRagnar;
