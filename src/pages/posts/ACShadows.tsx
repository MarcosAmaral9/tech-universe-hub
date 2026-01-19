import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Moon, Sun, Leaf, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acShadowsImg from "@/assets/ac-shadows.jpg";

const ACShadows = () => {
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
          Assassin's Creed Shadows: O Japão Feudal que os Fãs Sempre Sonharam
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            19 de Janeiro, 2026
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
          src={acShadowsImg}
          alt="Assassin's Creed Shadows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos de espera e muitos pedidos da comunidade, a Ubisoft finalmente nos leva ao <strong>Japão do 
          século XVI</strong>. <strong>Assassin's Creed Shadows</strong> não é apenas mais um jogo da franquia; 
          é uma evolução técnica que promete redefinir como interagimos com o mundo aberto.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
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
              <div className="font-bold">20/03/2025</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 300</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">RPG de Ação</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-purple-400" />
          1. Dois Protagonistas, Dois Estilos de Jogo
        </h2>

        <p>
          A grande inovação de Shadows está na escolha entre dois personagens com mecânicas completamente distintas:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Moon className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Naoe (Shinobi)</h4>
            <p className="text-sm text-muted-foreground">
              Uma ninja focada em <strong>furtividade clássica</strong>, parkour ágil e uso de sombras. É a escolha 
              perfeita para quem sente falta das raízes de Assassin's Creed.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Yasuke (Samurai)</h4>
            <p className="text-sm text-muted-foreground">
              Baseado no <strong>lendário samurai africano real</strong>, ele traz um combate pesado, direto e 
              focado em força bruta e armaduras.
            </p>
          </div>
        </div>

        <p>
          Essa dualidade permite que o jogador escolha como abordar cada missão: nas sombras ou no confronto direto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Leaf className="h-7 w-7 text-purple-400" />
          2. Tecnologia de Estações Dinâmicas
        </h2>

        <p>
          Um dos pontos altos para o nosso blog de tecnologia é o novo sistema de <strong>estações do ano dinâmicas</strong>.
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">❄️</span>
            <span><strong>Inverno:</strong> A neve abafa seus passos, mas os inimigos podem ver suas pegadas.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🌿</span>
            <span><strong>Verão:</strong> A vegetação alta oferece esconderijos que desaparecem no outono.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🍂</span>
            <span><strong>Outono:</strong> Folhas caindo revelam sua posição; paisagens douradas deslumbrantes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🌸</span>
            <span><strong>Primavera:</strong> Cerejeiras em flor e visibilidade equilibrada.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sun className="h-7 w-7 text-purple-400" />
          3. A Arte da Furtividade e a Iluminação
        </h2>

        <p>
          Diferente dos jogos anteriores onde você estava "escondido ou visível", Shadows introduz um sistema de 
          <strong> iluminação global</strong> onde você pode criar suas próprias sombras. Apagar tochas e destruir 
          fontes de luz agora são mecânicas essenciais para Naoe se manter invisível.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Por que este é o jogo mais "Otaku" da franquia?</h2>

        <p>
          Para quem consome animes como <strong>Rurouni Kenshin (Samurai X)</strong> ou <strong>Basilisk</strong>, 
          o jogo é um prato cheio. A fidelidade histórica das vilas, os castelos imponentes e a filosofia das 
          katanas e kunais trazem toda a estética que amamos nos mangás diretamente para o controle.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Se você gosta da temática de guerreiros históricos, não deixe de ler nosso artigo completo sobre a{" "}
            <Link to="/post/vikings-legado-ragnar-lothbrok" className="text-primary hover:underline">
              série Vikings
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (1080p a 30 FPS, Configuração Baixa)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 3600 @ 3.6 GHz, Intel Core i7-8700k @ 3.7 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB (modo dual-channel)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon RX 5700 (8 GB), Intel Arc A580 (8 GB), NVIDIA GeForce GTX 1070 (8 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">SSD necessário</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados 4K (2160p a 60 FPS, Configuração Alta)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 7 5800x3D @ 3.4 GHz, Intel Core i7-12700k @ 3.6 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon RX 7900 XT (20 GB), NVIDIA GeForce RTX 4070 Ti Super (16 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">SSD necessário</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/20 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 5</strong></li>
            <li>✓ <strong>Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 300
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual protagonista você vai escolher: Naoe ou Yasuke?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-shadows-japao-feudal" />

      {/* Comments */}
      <CommentSection postId="ac-shadows-japao-feudal" />
    </article>
  );
};

export default ACShadows;