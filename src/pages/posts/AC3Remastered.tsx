import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Trees, Sword, Ship, Flame, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ac3Img from "@/assets/ac-3.jpg";

const AC3Remastered = () => {
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
          Assassin's Creed III Remastered: A Revolução Americana em 4K e a Dualidade de Connor Kenway
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            14 de Janeiro, 2026
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
          src={ac3Img}
          alt="Assassin's Creed III Remastered"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você busca um jogo que une uma narrativa densa, conflitos morais e uma ambientação histórica épica, 
          <strong> Assassin's Creed III Remastered</strong> é uma parada obrigatória. Situado no turbulento 
          século XVIII, o jogo nos coloca no meio da <strong>Revolução Americana</strong>, mas sob uma perspectiva 
          única: a de um nativo americano.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
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
              <div className="font-bold">29/03/2019</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 120</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          1. Connor Kenway: O Guerreiro Entre Dois Mundos
        </h2>

        <p>
          Diferente do carismático Ezio Auditore, <strong>Ratonhnhaké:ton (Connor)</strong> é um protagonista sério, 
          brutal e movido por um senso de justiça implacável. O jogo brilha ao mostrar que, na guerra entre ingleses 
          e americanos, nem tudo é "preto no branco".
        </p>

        <p>
          Connor descobre que a liberdade prometida pelos revolucionários nem sempre incluía o seu povo, criando 
          uma das <strong>histórias mais maduras</strong> da franquia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-red-400" />
          2. O Que Mudou na Versão Remastered? (O Lado Tech)
        </h2>

        <p>
          Para o nosso blog de tecnologia, o destaque aqui é o trabalho de revitalização da engine AnvilNext:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Flame className="h-8 w-8 text-red-400 mb-3" />
            <h4 className="font-bold mb-2">Iluminação e PBR</h4>
            <p className="text-sm text-muted-foreground">
              A remasterização introduziu o Physically Based Rendering (PBR), que faz com que a luz interaja 
              de forma realista com diferentes superfícies.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Gamepad2 className="h-8 w-8 text-red-400 mb-3" />
            <h4 className="font-bold mb-2">Melhorias na Interface</h4>
            <p className="text-sm text-muted-foreground">
              A Ubisoft ouviu os fãs e simplificou o HUD e o sistema de crafting, tornando a experiência 
              muito menos travada que a original de 2012.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trees className="h-7 w-7 text-red-400" />
          3. A Fronteira e as Batalhas Navais
        </h2>

        <p>
          AC III foi o jogo que introduziu as <strong>batalhas navais</strong> que mais tarde seriam aperfeiçoadas 
          em Black Flag. Além disso, a exploração da "Fronteira" trouxe o sistema de parkour em árvores e a caça 
          de animais selvagens.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-red-400" />
          4. O Legado dos Kenway
        </h2>

        <p>
          Este jogo é o <strong>pilar central da Saga Kenway</strong>. Ele conecta os eventos de AC IV: Black Flag 
          (seu avô Edward) e AC Rogue (onde vemos a queda dos Assassinos na América). Para quem gosta de cronologias 
          complexas, este título é o fechamento emocional de uma era.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Entenda como a história da família Kenway começou antes de Edward em nosso post sobre{" "}
            <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-primary hover:underline">
              Black Flag
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
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (somente versões 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6300 – 3,8 GHz ou Ryzen 3 1200, Intel Core i5 2400s – 3,1 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 285 (2 GB), NVIDIA GeForce GTX 660 (2 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">45 GB de espaço disponível</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados 4K (2160p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 1500X – 3,5 GHz ou Intel Core i7 4790 – 3,6 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD RX Vega 56 CFX (8 GB), NVIDIA GeForce GTX 1070 (8 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/20 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
            <li>✓ <strong>Nintendo Switch</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 120 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O que você achou da jornada de Connor?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-3-remastered-revolucao-americana" />

      {/* Comments */}
      <CommentSection postId="ac-3-remastered-revolucao-americana" />
    </article>
  );
};

export default AC3Remastered;