import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Anchor, Ship, Music, Waves, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acBlackFlagImg from "@/assets/ac-black-flag.jpg";

const ACBlackFlag = () => {
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
          Assassin's Creed IV: Black Flag – Por que ele ainda é o melhor jogo de piratas já feito?
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            17 de Janeiro, 2026
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
          src={acBlackFlagImg}
          alt="Assassin's Creed IV Black Flag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Muitos anos se passaram desde que <strong>Edward Kenway</strong> içou as velas do Jackdaw pela primeira 
          vez, mas a pergunta continua ecoando: por que, mesmo com o lançamento de títulos como Skull and Bones 
          ou Sea of Thieves, <strong>Black Flag ainda detém a coroa</strong> como a experiência definitiva de pirataria?
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏴‍☠️ Informações do Jogo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Montreal</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">29/10/2013</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 80</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Anchor className="h-7 w-7 text-amber-400" />
          1. O Equilíbrio Perfeito: Assassino vs. Pirata
        </h2>

        <p>
          A Ubisoft conseguiu algo raro em Black Flag: unir a mística da <strong>Ordem dos Assassinos</strong> com 
          a <strong>liberdade selvagem dos mares</strong>. Edward Kenway não começa como um herói honrado; ele é 
          um homem egoísta e ambicioso que busca ouro e glória.
        </p>

        <p>
          Essa jornada de redenção, vivida em um <strong>Caribe vibrante</strong>, cria uma conexão emocional que 
          poucos jogos do gênero conseguem replicar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-amber-400" />
          2. A Tecnologia Naval que Envelheceu como Vinho
        </h2>

        <p>
          Para um jogo lançado originalmente em 2013, a <strong>física naval de Black Flag ainda é impressionante</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Waves className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">O Mar como Protagonista</h4>
            <p className="text-sm text-muted-foreground">
              A tecnologia de simulação de ondas e clima dinâmico foi revolucionária. Sentir o navio ranger durante 
              uma tempestade enquanto você tenta alinhar os canhões é imersão total.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Exploração Sem Barreiras</h4>
            <p className="text-sm text-muted-foreground">
              A transição fluida entre navegar no oceano e desembarcar em uma ilha tropical sem telas de 
              carregamento foi um feito técnico que deu ao mundo um senso de escala real.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. O "Vazio" dos Concorrentes Modernos</h2>

        <p>
          Recentemente, vimos o lançamento de <strong>Skull and Bones</strong>, que prometia ser o sucessor 
          espiritual de Black Flag. No entanto, a ausência de combate corpo a corpo, a impossibilidade de 
          explorar ilhas a pé livremente e a falta de uma narrativa forte apenas reforçaram a superioridade 
          do título de 2013.
        </p>

        <p>
          Black Flag não é apenas sobre navios; é sobre a <strong>vida de um pirata</strong> — das tavernas 
          em Nassau aos mergulhos em naufrágios repletos de tubarões.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-amber-400" />
          4. O Fator Cultural: Shanties e Atmosfera
        </h2>

        <p>
          Não se pode falar de Black Flag sem mencionar as <strong>Sea Shanties</strong>. A tecnologia de áudio 
          e a trilha sonora foram cruciais para a imersão. Ouvir sua tripulação cantar enquanto você navega em 
          direção ao pôr do sol é o toque final que transforma um simples jogo em uma <strong>memória inesquecível</strong>.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Entenda como a história da família Kenway começou antes de Edward em nosso post sobre{" "}
            <Link to="/post/ac-odyssey-odisseia-grecia" className="text-primary hover:underline">
              Assassin's Creed Odyssey
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
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Athlon II X4 620 – 2,6 GHz, Intel Core 2 Quad Q8400 – 2,6 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">2 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon HD 4870 (512 MB), NVIDIA GeForce GTX 260</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">30 GB de espaço disponível</td>
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
                <td className="py-3 px-4 text-muted-foreground">AMD Phenom II x4 940 – 3,0 GHz, Intel Core i5 2400S – 2,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">4 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon HD 5850 (1 GB), NVIDIA GeForce GTX 470 (1 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 3, PlayStation 4</strong></li>
            <li>✓ <strong>Xbox 360, Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 80 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual é sua shanty favorita de Black Flag?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-black-flag-melhor-jogo-piratas" />

      {/* Comments */}
      <CommentSection postId="ac-black-flag-melhor-jogo-piratas" />
    </article>
  );
};

export default ACBlackFlag;