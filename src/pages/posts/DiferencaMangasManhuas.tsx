import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";

// Import images
import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.jpg";

const DiferencaMangasManhuas = () => {
  return (
    <article className="container max-w-4xl py-8">
      {/* Back button */}
      <Link to="/otaku">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Otaku
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Sabe a diferença entre Mangas, Manhuas e Manhwas?
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            MVTECH
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            17 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            5 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={mangaManhwaManhuaImg}
          alt="Manga, Manhwa e Manhua"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introdução */}
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Se você é fã de histórias em quadrinhos asiáticas, provavelmente já se deparou com os termos 
            <strong> Manga</strong>, <strong>Manhua</strong> e <strong>Manhwa</strong>. 
            Apesar de todos serem quadrinhos, cada um tem suas características únicas que refletem 
            a cultura de seu país de origem.
          </p>
          
          <div className="bg-secondary rounded-xl p-6 my-6">
            <p className="text-lg font-medium text-foreground m-0">
              <strong>Manga</strong> vem do Japão, <strong>Manhua</strong> vem da China e 
              <strong> Manhwa</strong> vem da Coreia do Sul. Cada formato possui estilos de arte, 
              narrativas e convenções de leitura distintas.
            </p>
          </div>
        </section>

        {/* O Gancho */}
        <section className="mb-10 p-6 bg-gradient-to-r from-otaku/10 to-accent/10 rounded-xl border-l-4 border-otaku">
          <p className="text-xl font-semibold text-foreground m-0">
            🎯 Depois desse artigo você vai finalmente saber qual é o seu gênero favorito!
          </p>
        </section>

        {/* Exemplo de Manga */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            Manga: One Piece
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-primary mb-3">One Piece</h3>
            
            <p className="text-foreground mb-4">
              <strong>Sinopse:</strong> Monkey D. Luffy sonha em se tornar o Rei dos Piratas. 
              Com sua tripulação, os Chapéus de Palha, ele embarca em uma jornada épica pelo 
              Grand Line em busca do lendário tesouro One Piece.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Por que ler:</span>
                <p className="text-foreground font-medium">Construção de mundo incrível, personagens memoráveis, humor e emoção</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Status:</span>
                <p className="text-foreground font-medium">Em lançamento (Fase final)</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Capítulos:</span>
                <p className="text-foreground font-medium">+1100 capítulos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Onde ler:</span>
                <p className="text-foreground font-medium">MangaPlus, Shonen Jump</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplo de Manhua */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            Manhua: Tales of Demons and Gods
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-accent mb-3">Tales of Demons and Gods</h3>
            
            <p className="text-foreground mb-4">
              <strong>Sinopse:</strong> Nie Li, o mais forte Espiritualista Demoníaco, 
              volta no tempo para sua juventude após morrer em batalha. Com todo o conhecimento 
              do futuro, ele planeja proteger sua cidade e salvar seus entes queridos.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Por que ler:</span>
                <p className="text-foreground font-medium">Protagonista inteligente, sistema de poder interessante, romance sutil</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Status:</span>
                <p className="text-foreground font-medium">Em lançamento</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Capítulos:</span>
                <p className="text-foreground font-medium">+450 capítulos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Onde ler:</span>
                <p className="text-foreground font-medium">Webnovel, Tapas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplo de Manhwa */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-ia"></span>
            Manhwa: Solo Leveling
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-ia mb-3">Solo Leveling</h3>
            
            <p className="text-foreground mb-4">
              <strong>Sinopse:</strong> Sung Jin-Woo é conhecido como o caçador mais fraco da humanidade. 
              Após quase morrer em uma dungeon, ele recebe um sistema misterioso que lhe permite 
              subir de nível indefinidamente, transformando-o no caçador mais poderoso.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Por que ler:</span>
                <p className="text-foreground font-medium">Arte incrível, ação intensa, evolução épica do protagonista</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Status:</span>
                <p className="text-foreground font-medium">Finalizado</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Capítulos:</span>
                <p className="text-foreground font-medium">179 capítulos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Onde ler:</span>
                <p className="text-foreground font-medium">Webtoon, Tapas</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-8 bg-gradient-to-r from-otaku/20 via-accent/20 to-primary/20 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            🗣️ Qual desses é o seu favorito?
          </h3>
          <p className="text-lg text-muted-foreground">
            Você prefere os Mangas japoneses, os Manhuas chineses ou os Manhwas coreanos? 
            Comenta aqui embaixo!
          </p>
        </section>
      </div>

      {/* Comments */}
      <CommentSection postId="diferenca-mangas-manhuas-manhwas" />
    </article>
  );
};

export default DiferencaMangasManhuas;
