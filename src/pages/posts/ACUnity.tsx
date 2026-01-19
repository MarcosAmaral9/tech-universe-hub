import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Landmark, Users, Wind, Heart, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acUnityImg from "@/assets/ac-unity.jpg";

const ACUnity = () => {
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
          Assassin's Creed Unity: O Jogo que Estava à Frente do seu Tempo (e da Tecnologia)
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            12 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            8 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acUnityImg}
          alt="Assassin's Creed Unity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se existe um jogo que divide opiniões, mas une todos quando o assunto é <strong>beleza gráfica</strong>, 
          esse jogo é Assassin's Creed Unity. Ambientado na turbulenta <strong>Revolução Francesa</strong>, o título 
          foi duramente criticado no lançamento devido aos bugs, mas hoje é reconhecido como a 
          <strong> obra-prima técnica</strong> da Ubisoft.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Montreal</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">11/11/2014</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 90</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-blue-400" />
          1. Paris: A Maior e Melhor Recriação da Franquia
        </h2>

        <p>
          A Paris de Unity não é apenas um mapa; é um <strong>organismo vivo</strong>. A escala de 1:1 de monumentos 
          como a <strong>Catedral de Notre-Dame</strong> (que foi usada como referência real para a sua reconstrução 
          após o incêndio de 2019) mostra o nível de detalhamento que a tecnologia de fotogrametria e modelagem alcançou.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-blue-400" />
          2. A Tecnologia das Multidões (Crowd System)
        </h2>

        <p>
          O que o seu blog de tecnologia deve destacar aqui é o <strong>sistema de IA para multidões</strong>. Unity 
          consegue renderizar até <strong>5.000 NPCs simultâneos</strong> na tela, cada um reagindo ao caos da revolução.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            ⚠️ Isso exige um processamento de CPU imenso, algo que só as máquinas potentes de hoje conseguem rodar 
            com total fluidez em 4K.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wind className="h-7 w-7 text-blue-400" />
          3. O Ápice do Parkour e da Iluminação
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Movimentação</h4>
            <p className="text-sm text-muted-foreground">
              Muitos fãs consideram o parkour de <strong>Arno Victor Dorian</strong> o melhor de toda a série. 
              As animações são fluidas, pesadas e realistas.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Landmark className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Iluminação Global</h4>
            <p className="text-sm text-muted-foreground">
              O sistema de iluminação (baked lighting) cria sombras e reflexos em ambientes internos que ainda 
              hoje parecem "Next-Gen".
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-blue-400" />
          4. Arno e Elise: Uma História de Amor e Tragédia
        </h2>

        <p>
          No centro do caos político, temos a história de <strong>Arno</strong> (um Assassino) e <strong>Elise</strong> 
          (uma Templária). Essa dinâmica de "Romeu e Julieta" no meio da queda da monarquia francesa traz uma camada 
          emocional que guia o jogador por missões de infiltração complexas.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Se você gosta de parkour urbano, veja como a Bagdá de{" "}
            <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-primary hover:underline">
              Assassin's Creed Mirage
            </Link>{" "}
            tentou resgatar o espírito de Unity.
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
                <td className="py-3 px-4 text-muted-foreground">AMD FX 8350 a 4,0 GHz, Intel Core i5-2500K a 3,3 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon HD 7970 (2 GB), NVIDIA GeForce GTX 680 (2 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">50 GB de espaço disponível</td>
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
                <td className="py-3 px-4 text-muted-foreground">AMD FX-8350 a 4,0 GHz, Intel Core i7-3770 a 3,4 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 290X (3 GB), NVIDIA GeForce GTX 780 (3 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/20 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 90 (frequentemente gratuito em promoções)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Unity é realmente o jogo mais bonito da franquia?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-unity-jogo-frente-tempo-paris" />

      {/* Comments */}
      <CommentSection postId="ac-unity-jogo-frente-tempo-paris" />
    </article>
  );
};

export default ACUnity;