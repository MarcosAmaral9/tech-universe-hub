import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Monitor } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/lancamentos-games-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const LancamentosGamesAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("lancamentos-games-abril-2026", "Lançamentos de Games em Abril de 2026: Os 15 Jogos Mais Aguardados", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Games · Lançamentos</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Lançamentos de Games em Abril de 2026: Os 15 Jogos Mais Aguardados do Mês
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Lançamentos de Games Abril 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Abril de 2026 é um dos meses mais carregados do ano para quem joga. Com títulos AAA em todas as plataformas e algumas surpresas indie, montamos o guia definitivo para você saber o que vale a pena comprar — e o que vale esperar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Os Destaques AAA do Mês
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">1. Returnal 2 — 3 de abril (PS5/PC)</h3>
        <p>
          A Housemarque retorna com a sequência do roguelike que redefiniu o gênero em 2021. <strong>Returnal 2</strong> expande o universo de Atropos com novos biomas procedurais, co-op online aprimorado e uma narrativa que promete responder aos mistérios deixados pelo primeiro jogo. A engine proprietária da Housemarque agora suporta ray-tracing global em tempo real, e os efeitos de partículas continuam sendo referência na indústria.
        </p>
        <p>
          O preço sugerido é de <strong>R$ 349,90</strong> na PS Store e R$ 249,90 no Steam. Reviews prévias apontam para um Metacritic na faixa dos 88-92.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">2. Pokémon Pokopia — 4 de abril (Switch 2)</h3>
        <p>
          Após os remakes de FireRed & LeafGreen, a Game Freak aposta em algo completamente diferente. <strong>Pokémon Pokopia</strong> é descrito como um "simulador de vida Pokémon" onde o jogador não é um treinador — é um habitante de uma cidade construída para humanos e Pokémon conviverem. O jogo recebeu comparações com Animal Crossing e Stardew Valley, mas com a profundidade do universo Pokémon.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">3. Death Stranding 2: On the Beach — 10 de abril (PS5)</h3>
        <p>
          Hideo Kojima traz a sequência do controverso mas premiado Death Stranding. Com novos mecanismos de conexão social, um mundo mais vivo e uma história que promete ser ainda mais ambiciosa, <strong>Death Stranding 2</strong> é um dos exclusivos mais comentados do ano. O elenco inclui novamente Norman Reedus, Léa Seydoux e Troy Baker.
        </p>

        <AdLeaderboard className="my-8" />

        <h3 className="text-xl font-bold mt-6 mb-3">4. Elden Ring: Nightreign — 11 de abril (PS5/Xbox/PC)</h3>
        <p>
          O spin-off cooperativo de <strong>Elden Ring</strong> pela FromSoftware traz uma experiência roguelike para até 3 jogadores. Diferente do jogo base, Nightreign foca em sessões de 40-60 minutos com bosses aleatórios e builds que se reiniciam a cada run. Hidetaka Miyazaki confirmou que o jogo "respeita o DNA de Elden Ring mas oferece uma experiência completamente nova".
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">5. Doom: The Dark Ages — 15 de abril (PS5/Xbox/PC)</h3>
        <p>
          id Software muda o cenário para uma era medieval sombria. O Doom Slayer agora enfrenta demônios com armaduras, escudos e armas corpo a corpo além do arsenal tradicional. O jogo promete ser mais lento e tático que Doom Eternal, com maior foco em combate melee e uma escala de cenários muito maior.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Tabela de Lançamentos Completa
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3">Jogo</th>
                <th className="text-left p-3">Data</th>
                <th className="text-left p-3">Plataformas</th>
                <th className="text-left p-3">Gênero</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Returnal 2</td><td className="p-3">03/04</td><td className="p-3">PS5, PC</td><td className="p-3">Roguelike / Ação</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Pokémon Pokopia</td><td className="p-3">04/04</td><td className="p-3">Switch 2</td><td className="p-3">Simulação / RPG</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Death Stranding 2</td><td className="p-3">10/04</td><td className="p-3">PS5</td><td className="p-3">Ação / Aventura</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Elden Ring: Nightreign</td><td className="p-3">11/04</td><td className="p-3">PS5, Xbox, PC</td><td className="p-3">Roguelike / Co-op</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Doom: The Dark Ages</td><td className="p-3">15/04</td><td className="p-3">PS5, Xbox, PC</td><td className="p-3">FPS / Ação</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Wanderstop</td><td className="p-3">11/04</td><td className="p-3">PS5, PC</td><td className="p-3">Narrativo / Indie</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Hyper Light Breaker</td><td className="p-3">18/04</td><td className="p-3">PC</td><td className="p-3">Roguelike / Ação</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Killing Floor 3</td><td className="p-3">25/04</td><td className="p-3">PS5, Xbox, PC</td><td className="p-3">FPS / Co-op</td></tr>
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Destaques Indie que Merecem Atenção
        </h2>
        <p>
          <strong>Wanderstop</strong>, da Annapurna Interactive, é uma experiência narrativa de uma ex-guerreira que abre uma casa de chá. Parece simples, mas reviews prévias descrevem como "uma das experiências mais emocionantes do ano". O jogo explora temas de propósito, identidade e o que acontece depois que a aventura termina.
        </p>
        <p>
          <strong>Hyper Light Breaker</strong> expande o universo de Hyper Light Drifter para 3D com mecânicas roguelike cooperativas. A Heart Machine construiu um mundo aberto procedural com a mesma identidade visual deslumbrante do original.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Monitor className="h-7 w-7 text-geek" />
          O que Esperar para Maio
        </h2>
        <p>
          Com Doom: The Dark Ages e Elden Ring: Nightreign dominando abril, maio promete trazer <strong>Fable</strong> (Playground Games) e <strong>Judas</strong> (2K/Ghost Story Games, do criador de BioShock). O segundo trimestre de 2026 pode ser o mais forte da geração.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual jogo de abril você mais espera?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 🎮👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="lancamentos-games-abril-2026" />
      <CommentSection postId="lancamentos-games-abril-2026" postTitle="Lançamentos de Games em Abril de 2026" />
    </article>
  );
};

export default LancamentosGamesAbril2026;
