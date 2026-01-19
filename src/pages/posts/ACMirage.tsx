import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Moon, Target, Wind, Bomb, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acMirageImg from "@/assets/ac-mirage.jpg";

const ACMirage = () => {
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
          Assassin's Creed Mirage: O Retorno às Raízes e a Arte da Furtividade em Bagdá
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            15 de Janeiro, 2026
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
          src={acMirageImg}
          alt="Assassin's Creed Mirage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos explorando mapas colossais na Grécia e na Inglaterra, a Ubisoft decidiu atender ao clamor dos 
          fãs mais antigos. <strong>Assassin's Creed Mirage</strong> é uma carta de amor ao primeiro jogo da franquia, 
          trocando o combate em campo aberto pela agilidade das sombras e o parkour frenético nas ruas de 
          <strong> Bagdá do século IX</strong>.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Bordeaux</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">05/10/2023</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 200</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Moon className="h-7 w-7 text-amber-400" />
          1. Basim: De Ladrão de Rua a Mestre Assassino
        </h2>

        <p>
          Em Mirage, acompanhamos a origem de <strong>Basim Ibn Ishaq</strong> (personagem que conhecemos em Valhalla). 
          O jogo foca na sua evolução dentro dos "Ocultos" na <strong>Fortaleza de Alamut</strong>. A narrativa é 
          mais curta, linear e focada, lembrando muito a jornada de Altaïr, o protagonista original da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wind className="h-7 w-7 text-amber-400" />
          2. Bagdá: O Cenário Perfeito para o Parkour
        </h2>

        <p>
          A tecnologia de construção de mundo aqui foi voltada para a <strong>densidade vertical</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Target className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Design de Nível</h4>
            <p className="text-sm text-muted-foreground">
              Bagdá foi desenhada como um "playground" para assassinos. Cada telhado, corda esticada e fardo de 
              feno foi posicionado estrategicamente para que o jogador nunca precise tocar o chão.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Moon className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">IA de Multidão</h4>
            <p className="text-sm text-muted-foreground">
              A simulação de NPCs foi aprimorada para que Basim possa se misturar aos grupos de pessoas, usando 
              o social stealth (furtividade social) para escapar da guarda califal.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bomb className="h-7 w-7 text-amber-400" />
          3. Ferramentas, não Apenas Espadas
        </h2>

        <p>
          Diferente dos últimos jogos, onde o foco era o nível da sua arma, em Mirage o foco está nas suas 
          <strong> ferramentas</strong>.
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">💨</span>
            <span><strong>Bombas de fumaça:</strong> Essenciais para fugas rápidas e confundir inimigos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🗡️</span>
            <span><strong>Facas de arremesso:</strong> Silenciosas e letais para eliminar guardas à distância.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">💤</span>
            <span><strong>Dardos soníferos:</strong> Perfeitos para neutralizar sem matar.</span>
          </li>
        </ul>

        <p>
          O sistema de combate é mais <strong>punitivo</strong>: Basim não é um guerreiro viking; se você for 
          cercado por muitos guardas, as chances de sobrevivência são baixas, incentivando o jogador a planejar 
          cada assassinato com cuidado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-amber-400" />
          4. O "Assassin's Focus": Tecnologia a Serviço do Estilo
        </h2>

        <p>
          Uma nova mecânica introduzida é o <strong>Assassin's Focus</strong>, que permite a Basim marcar e 
          eliminar múltiplos alvos em uma sequência ultra-rápida. É uma representação da velocidade e agilidade 
          lendária dos mestres assassinos.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Se você prefere o estilo de mundo aberto massivo, confira nossa análise de{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (1080p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10, Windows 11 (versões 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 1600 – 3,2 GHz, Intel Core i7-4790K – 4,4 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB (modo de canal duplo)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon RX 570 (4 GB), NVIDIA GeForce GTX 1060 (6 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">40 GB (requer SSD)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados 4K (2160p a 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 5600X – 3,7 GHz ou Intel Core i5-11600K – 3,9 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB (modo de canal duplo)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon RX 6900 XT (16 GB), NVIDIA GeForce RTX 3080 (10 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 200
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O retorno às raízes te agradou?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-mirage-retorno-raizes-bagda" />

      {/* Comments */}
      <CommentSection postId="ac-mirage-retorno-raizes-bagda" />
    </article>
  );
};

export default ACMirage;