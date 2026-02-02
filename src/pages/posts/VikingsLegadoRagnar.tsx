import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Ship, Crown, Shield, Axe, Target, Tv, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import vikingsImg from "@/assets/vikings-ragnar.jpg";

const VikingsLegadoRagnar = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/geek"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Geek
      </Link>

      <header className="mb-8">
        <CategoryBadge category="geek" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Vikings: Vale a Pena Assistir em 2026? Review Completa, Análise e Onde Assistir
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
            10 min de leitura
          </span>
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={vikingsImg}
          alt="Vikings série - Ragnar Lothbrok e mitologia nórdica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Poucas séries conseguiram capturar a <strong>brutalidade e a espiritualidade da Era Viking</strong> 
          como a produção do History Channel. O que começou como a história de um simples fazendeiro 
          chamado <strong>Ragnar Lothbrok</strong> tornou-se uma saga épica sobre ambição, choque de 
          culturas e a transição entre deuses antigos e o cristianismo.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Temporadas:</strong> 6 temporadas completas</div>
            <div><strong>Episódios:</strong> 89 episódios</div>
            <div><strong>Gênero:</strong> Drama histórico, Ação</div>
            <div><strong>Período:</strong> Era Viking (793 d.C. – 1066 d.C.)</div>
            <div><strong>Onde assistir:</strong> Netflix, Prime Video, History Channel</div>
            <div><strong>Spin-off:</strong> Vikings: Valhalla (Netflix)</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-purple-400" />
          Por Que Vikings É Tão Especial?
        </h2>

        <p>
          Diferente de outras produções sobre o período, Vikings focou no <strong>desenvolvimento 
          profundo dos personagens</strong>. A série não apresenta heróis unidimensionais – cada 
          personagem possui motivações complexas, falhas morais e arcos de desenvolvimento que 
          se estendem por múltiplas temporadas.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Sword className="h-6 w-6 text-geek" />
            Personagens Memoráveis
          </h3>
          <p className="text-muted-foreground mb-0">
            A série apresenta <strong>Lagertha</strong>, uma das maiores escudeiras da televisão, 
            e a ascensão dos filhos de Ragnar: o estrategista <strong>Ivar, o Desossado</strong>, 
            o explorador <strong>Bjorn Ironside</strong> e o devoto <strong>Ubbe</strong>. Cada 
            personagem carrega uma história complexa que prende o espectador episódio após episódio.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-purple-400" />
          Realidade vs. Ficção: O Que É Histórico?
        </h2>

        <p>
          Embora a série tome liberdades criativas (como comprimir eventos e estender vidas de 
          personagens), ela acertou em cheio ao mostrar o <strong>modo de vida nórdico</strong>. 
          A produção investiu pesadamente em consultores históricos para garantir autenticidade 
          visual, cultural e religiosa.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Os Longships</h4>
            <p className="text-sm text-muted-foreground">
              A importância dos navios para exploração e as táticas de invasão que 
              transformaram a Europa medieval são retratadas com precisão.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">As Escudeiras</h4>
            <p className="text-sm text-muted-foreground">
              O papel das mulheres na sociedade viking, incluindo guerreiras que 
              lutavam lado a lado com os homens, é explorado de forma respeitosa.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Axe className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Política Viking</h4>
            <p className="text-sm text-muted-foreground">
              A complexa política entre condados (Earls), reis, disputas de poder 
              e alianças temporárias é retratada com nuance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Mitologia Nórdica: Odin, Thor e o Destino</h2>

        <p>
          Um dos maiores acertos da série foi a forma como apresentou a <strong>mitologia nórdica</strong> 
          ao grande público. Os deuses como Odin, Thor e Freya não são apenas mencionados – eles 
          são parte integral da narrativa, influenciando as decisões dos personagens e seus destinos.
        </p>

        <blockquote className="border-l-4 border-geek pl-6 my-8 italic text-muted-foreground">
          "Os deuses não determinam o destino dos homens – eles apenas assistem enquanto os homens 
          fazem suas próprias escolhas."
          <footer className="mt-2 not-italic font-semibold">— Ragnar Lothbrok</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-purple-400" />
          Vikings: Valhalla – O Spin-off na Netflix
        </h2>

        <p>
          O legado continua com <strong>Vikings: Valhalla</strong> na Netflix, que se passa 
          aproximadamente 100 anos após os eventos da série original. A produção foca em 
          personagens históricos como <strong>Leif Eriksson</strong>, <strong>Harald Sigurdsson</strong> 
          e <strong>Olaf Haraldsson</strong>, explorando a cristianização da Escandinávia.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-geek/20 to-background rounded-xl border border-geek/30">
          <h3 className="text-xl font-bold mb-4">📺 Vikings: Valhalla</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div><strong>Temporadas:</strong> 3 temporadas completas</div>
            <div><strong>Plataforma:</strong> Netflix</div>
            <div><strong>Período:</strong> Início do século XI</div>
            <div><strong>Qualidade:</strong> Mesma produção da série original</div>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Foco em eventos históricos documentados</li>
            <li>✓ Novos personagens com arcos complexos</li>
            <li>✓ Produção visual de alta qualidade</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Vikings Vale a Pena em 2026?</h2>

        <p>
          <strong>Absolutamente sim.</strong> Se você busca uma série que une <strong>ação visceral</strong> 
          com <strong>filosofia sobre destino e deuses</strong>, Vikings continua sendo obrigatória. 
          A produção conseguiu o raro feito de entreter enquanto educa, deixando um legado que 
          transcende o entretenimento.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Pontos Positivos</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Personagens com desenvolvimento profundo</li>
              <li>• Mitologia nórdica bem representada</li>
              <li>• Batalhas épicas e cinematográficas</li>
              <li>• 89 episódios de conteúdo</li>
              <li>• Spin-off disponível na Netflix</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Considerações</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Algumas liberdades históricas</li>
              <li>• Violência gráfica (não é para todos)</li>
              <li>• Ritmo desacelera em algumas temporadas</li>
              <li>• Mudança de protagonista após T4</li>
            </ul>
          </div>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Dica para fãs de Vikings:</strong> Confira também nosso post sobre{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla
            </Link>, que captura a mesma atmosfera viking em formato de jogo interativo.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão: Uma Saga Épica Atemporal</h2>

        <p>
          Vikings permanece como uma das <strong>melhores séries históricas já produzidas</strong>. 
          A combinação de personagens complexos, batalhas épicas e exploração autêntica da cultura 
          nórdica criou uma obra que transcende seu gênero. Seja você um fã de história, mitologia 
          ou simplesmente boas narrativas, Vikings entrega uma experiência completa.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual foi sua cena favorita de Vikings?
          </h3>
          <p className="text-muted-foreground">
            O ataque a Lindisfarne? A morte de Ragnar? A batalha de Kattegat? 
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="vikings-legado-ragnar-lothbrok" />
      <CommentSection postId="vikings-legado-ragnar-lothbrok" />
    </article>
  );
};

export default VikingsLegadoRagnar;
