import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Snowflake, Ship, Target, Crosshair, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acRogueImg from "@/assets/ac-rogue.jpg";

const ACRogue = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek/assassins-creed"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Assassin's Creed
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Assassin's Creed
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Rogue: E se o Herói se Tornasse o Vilão?
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            11 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            7 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acRogueImg}
          alt="Assassin's Creed Rogue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Na maioria dos jogos da franquia, a linha entre o bem e o mal é clara: os Assassinos lutam pela 
          liberdade e os Templários pela ordem. No entanto, <strong>Assassin's Creed Rogue</strong> chegou 
          para bagunçar essa lógica, nos colocando na pele de <strong>Shay Patrick Cormac</strong>, um 
          Assassino que decide caçar seus antigos irmãos.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/10 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Sofia</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">11/11/2014</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 70</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-cyan-400" />
          1. O Ponto de Vista do Traidor
        </h2>

        <p>
          <strong>Shay</strong> é um dos protagonistas mais complexos da saga. Após uma missão em Lisboa 
          que resulta em uma catástrofe natural (recriada de forma impressionante no jogo), ele questiona 
          os métodos da Irmandade.
        </p>

        <p>
          A transição de Shay para a Ordem dos Templários não é apenas uma mudança de uniforme, mas uma 
          <strong> mudança de filosofia</strong> que faz o jogador questionar: quem são os verdadeiros vilões?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Snowflake className="h-7 w-7 text-cyan-400" />
          2. A Tecnologia do Ártico (O Lado Tech)
        </h2>

        <p>
          Embora use a mesma engine de Black Flag, Rogue trouxe inovações técnicas focadas no cenário 
          gelado do <strong>Atlântico Norte</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Navegação em Águas Geladas</h4>
            <p className="text-sm text-muted-foreground">
              O seu navio, o <strong>Morrigan</strong>, é equipado com um quebra-gelo, permitindo 
              acessar áreas bloqueadas por icebergs.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Snowflake className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Icebergs Dinâmicos</h4>
            <p className="text-sm text-muted-foreground">
              Destruir um iceberg com canhões pode gerar uma onda de choque que afunda barcos 
              menores próximos.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">Perigo na Água</h3>

        <p>
          Diferente do Caribe, nadar nas <strong>águas geladas do Ártico drena sua vida rapidamente</strong>, 
          adicionando uma camada de sobrevivência ao gameplay que aumenta a tensão durante as missões.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-cyan-400" />
          3. O "Anti-Assassino"
        </h2>

        <p>
          Como Shay conhece todos os truques dos Assassinos, a jogabilidade muda. Agora, <strong>você 
          é quem pode ser emboscado</strong> por inimigos escondidos em fardos de feno ou telhados.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-4">🔫 O Rifle de Ar</h4>
          <p className="text-muted-foreground mb-0">
            Uma das melhores armas do jogo, permitindo disparar dardos silenciosos ou granadas, 
            ideal para quem prefere uma abordagem tecnológica e furtiva para eliminar alvos.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. O Elo Perdido da Saga Kenway</h2>

        <p>
          Para os fãs da história, Rogue é o <strong>tecido que une tudo</strong>. Ele mostra como a 
          Irmandade Colonial foi destruída (preparando o terreno para AC III) e tem uma cena final 
          que se conecta diretamente com o início de <strong>Assassin's Creed Unity</strong>.
        </p>

        <p>
          É o jogo essencial para entender o panorama global da guerra secreta entre Assassinos e Templários.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Gostou da jogabilidade naval? Confira nosso artigo sobre{" "}
            <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-primary hover:underline">
              Black Flag
            </Link>, o sucessor espiritual de Rogue.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (1080p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Athlon II X4 620 a 2,6 GHz, Intel Core 2 Quad Q6600 a 2,4 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">2 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon HD 5670 (1 GB), NVIDIA GeForce GTS 450 (1 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">11,4 GB de espaço disponível</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados (1080p a 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX-6100 a 3,3 GHz, Intel Core i5-2400s a 2,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">4 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon HD 6870 (1 GB), NVIDIA GeForce GTX 560 Ti (1 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/20 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 3, PlayStation 4</strong></li>
            <li>✓ <strong>Xbox 360, Xbox One e Xbox Series X|S</strong></li>
            <li>✓ <strong>Nintendo Switch</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 70 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você acha que Shay estava certo em abandonar os Assassinos?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-rogue-assassino-templario" />

      {/* Comments */}
      <CommentSection postId="ac-rogue-assassino-templario" />
    </article>
  );
};

export default ACRogue;
