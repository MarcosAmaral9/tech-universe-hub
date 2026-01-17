import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";

import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.jpg";

const DiferenciarManhuasManhwas = () => {
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
          Saiba como diferenciar Manhuas e Manhwas
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            16 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            4 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={manhwaVsManuaImg}
          alt="Manhwa vs Manhua"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introdução */}
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Muitos leitores confundem <strong>Manhuas</strong> (quadrinhos chineses) com 
            <strong> Manhwas</strong> (quadrinhos coreanos). Apesar de terem nomes parecidos, 
            são obras de países diferentes com características bem distintas!
          </p>
        </section>

        {/* O Gancho */}
        <section className="mb-10 p-6 bg-gradient-to-r from-otaku/10 to-accent/10 rounded-xl border-l-4 border-otaku">
          <p className="text-xl font-semibold text-foreground m-0">
            🎯 Depois desse artigo você vai finalmente saber qual você mais curte!
          </p>
        </section>

        {/* Principais Diferenças */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
            Principais Diferenças
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/30">
              <h3 className="font-display text-xl font-bold text-accent mb-4">Manhua (China)</h3>
              <ul className="space-y-2 text-foreground">
                <li>📖 Leitura da esquerda para direita</li>
                <li>🎨 Cores vibrantes e arte digital</li>
                <li>⚔️ Foco em cultivo marcial e fantasia</li>
                <li>📱 Formato vertical (webtoon)</li>
                <li>🏛️ Influência da cultura chinesa tradicional</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/30">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Manhwa (Coreia)</h3>
              <ul className="space-y-2 text-foreground">
                <li>📖 Leitura da esquerda para direita</li>
                <li>🎨 Arte extremamente detalhada e colorida</li>
                <li>🎮 Foco em sistemas de jogo e reencarnação</li>
                <li>📱 Pioneiro do formato webtoon</li>
                <li>🌟 Influência da cultura pop coreana</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exemplo de Manhua */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            Exemplo de Manhua: Martial Peak
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-accent mb-3">Martial Peak</h3>
            
            <p className="text-foreground mb-4">
              <strong>Sinopse:</strong> Yang Kai, um simples servo de uma seita marcial, 
              descobre um misterioso cristal negro que transforma seu destino. 
              Ele começa sua jornada para alcançar o pico do mundo marcial.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Por que ler:</span>
                <p className="text-foreground font-medium">Sistema de cultivo épico, evolução constante, múltiplos arcos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Status:</span>
                <p className="text-foreground font-medium">Finalizado</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Capítulos:</span>
                <p className="text-foreground font-medium">+3000 capítulos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Onde ler:</span>
                <p className="text-foreground font-medium">Bilibili Comics, Webnovel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplo de Manhwa */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            Exemplo de Manhwa: The Beginning After The End
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-primary mb-3">The Beginning After The End</h3>
            
            <p className="text-foreground mb-4">
              <strong>Sinopse:</strong> O Rei Grey tem força, riqueza e prestígio em um mundo 
              governado pela força marcial. Porém, a solidão persegue aqueles com grande poder. 
              Após sua morte, ele reencarna em um mundo de magia como Arthur Leywin.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Por que ler:</span>
                <p className="text-foreground font-medium">Arte espetacular, desenvolvimento profundo, worldbuilding rico</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Status:</span>
                <p className="text-foreground font-medium">Em lançamento</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Capítulos:</span>
                <p className="text-foreground font-medium">+200 capítulos</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Onde ler:</span>
                <p className="text-foreground font-medium">Tapas, Webtoon</p>
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
            Você prefere os Manhuas chineses com suas histórias de cultivo ou os Manhwas 
            coreanos com suas mecânicas de sistema? Comenta aqui embaixo!
          </p>
        </section>
      </div>

      {/* Comments */}
      <CommentSection postId="como-diferenciar-manhuas-manhwas" />
    </article>
  );
};

export default DiferenciarManhuasManhwas;
