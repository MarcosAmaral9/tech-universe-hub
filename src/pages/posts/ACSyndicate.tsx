import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Factory, Train, Swords, Cog, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acSyndicateImg from "@/assets/ac-syndicate.jpg";

const ACSyndicate = () => {
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
          Assassin's Creed Syndicate: A Revolução Industrial e o Charme Vitoriano de Londres
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            13 de Janeiro, 2026
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
          src={acSyndicateImg}
          alt="Assassin's Creed Syndicate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você é fascinado pela estética steampunk, por gangues de rua e pela atmosfera esfumaçada da 
          <strong> Londres do século XIX</strong>, Assassin's Creed Syndicate é a sua viagem definitiva no tempo. 
          Lançado como o último jogo antes da "virada RPG" da franquia, ele entrega uma das cidades mais vivas e 
          dinâmicas já criadas pela Ubisoft.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-gray-500/10 to-background rounded-xl border border-gray-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Quebec</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">23/10/2015</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 100</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-gray-400" />
          1. Jacob e Evie Frye: A Dualidade Perfeita
        </h2>

        <p>
          Pela primeira vez na série, o jogador alterna entre dois protagonistas irmãos com estilos de jogo distintos:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Swords className="h-8 w-8 text-red-400 mb-3" />
            <h4 className="font-bold mb-2">Jacob Frye</h4>
            <p className="text-sm text-muted-foreground">
              O mestre do combate e da força bruta. Ele foca em criar sua própria gangue, os <strong>Rooks</strong>, 
              para retomar o controle das ruas de Londres.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Cog className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Evie Frye</h4>
            <p className="text-sm text-muted-foreground">
              A mestre da furtividade e da estratégia. Ela personifica o espírito clássico dos Assassinos, 
              focando na busca por fragmentos do Éden.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-gray-400" />
          2. Londres: Uma Metrópole em Transformação
        </h2>

        <p>
          A tecnologia por trás da recriação de Londres é o grande destaque deste título:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🚂</span>
            <span><strong>Veículos em Movimento:</strong> Pela primeira vez, temos ruas largas para carruagens com física de destruição.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🚃</span>
            <span><strong>Trens em Tempo Real:</strong> O trem não é apenas cenário, mas um quartel-general móvel que circula pela cidade.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🪝</span>
            <span><strong>Gancho de Corda:</strong> Uma verticalidade ao parkour que lembra Batman: Arkham.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Train className="h-7 w-7 text-gray-400" />
          3. Personagens Históricos e Ciência
        </h2>

        <p>
          Vale destacar as interações com mentes brilhantes da época. Você realizará missões ao lado de 
          <strong> Charles Darwin</strong>, <strong>Alexander Graham Bell</strong> (o inventor do telefone, que 
          cria seus gadgets) e até <strong>Florence Nightingale</strong>. É uma aula de história sobre como a 
          ciência e a tecnologia começaram a moldar o mundo moderno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-gray-400" />
          4. O Sistema de Gangues e Conquista de Território
        </h2>

        <p>
          O gameplay foca na libertação dos distritos de Londres das mãos dos Templários. Ao libertar fábricas de 
          trabalho infantil e vencer guerras de gangues, você vê a cidade mudar visualmente.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Sente falta da furtividade urbana? Veja como Bagdá em{" "}
            <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-primary hover:underline">
              Mirage
            </Link>{" "}
            se compara à Londres de Syndicate.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (720p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (versões 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6350 – 3,9 GHz, Intel Core i5 2400s – 2,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 270 (2 GB), NVIDIA GeForce GTX 660 (2 GB)</td>
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
                <td className="py-3 px-4 text-muted-foreground">AMD FX-8350 – 4,0 GHz, Intel Core i7-3770 – 3,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 280X (3 GB), NVIDIA GeForce GTX 760 (4 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-gray-500/20 to-background rounded-xl border border-gray-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 100 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Jacob ou Evie: qual irmão você prefere jogar?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-syndicate-revolucao-industrial-londres" />

      {/* Comments */}
      <CommentSection postId="ac-syndicate-revolucao-industrial-londres" />
    </article>
  );
};

export default ACSyndicate;