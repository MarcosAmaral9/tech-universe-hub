import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Gamepad2, Zap, Target } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/absolute-batman-game-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const AbsoluteBatmanGame2026 = () => {
  useEffect(() => {
    trackArticleRead("absolute-batman-game-2026", "Absolute Batman: Do HQ ao Game — Tudo Sobre o Jogo Confirmado para 2026", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Games · DC Comics</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Absolute Batman: Do HQ ao Game — Tudo Sobre o Jogo Confirmado para 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Absolute Batman Game 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Absolute Batman, a HQ de Scott Snyder e Nick Dragotta que reinventou o Cavaleiro das Trevas, vai ganhar um jogo. Confirmado oficialmente através do board game Batman: Gotham City Chronicles Season 4 — Absolute U, a franquia está se expandindo para o universo digital. Aqui está tudo que sabemos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          O que é Absolute Batman?
        </h2>
        <p>
          Lançada em outubro de 2024, <strong>Absolute Batman</strong> reimagina Bruce Wayne como um homem da classe trabalhadora — sem a fortuna Wayne, sem a mansão, sem Alfred. Este Batman é um engenheiro de construção civil que se torna um vigilante brutal usando ferramentas improvisadas e inteligência pura.
        </p>
        <p>
          A série de Scott Snyder (Batman: Court of Owls, Dark Nights: Metal) e Nick Dragotta (East of West) vendeu mais de <strong>1 milhão de cópias</strong> nos primeiros 6 meses, tornando-se o maior lançamento de HQ da DC desde 2016. A reimaginação radical do personagem capturou tanto fãs antigos quanto uma nova geração de leitores.
        </p>
        <p>
          Diferente do Batman tradicional, o Absolute Batman é <strong>enorme</strong> — um homem de mais de 1,90m e 130kg que não depende de gadgets sofisticados. Seu "Bat-Suit" é improvisado, feito de materiais industriais. A capa? Tem um machado escondido dentro dela.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          O Jogo: O que Sabemos
        </h2>
        <p>
          O anúncio oficial veio através de <strong>Batman: Gotham City Chronicles Season 4 — Absolute U</strong>, um jogo de tabuleiro que inclui miniaturas detalhadas dos personagens da linha Absolute. A Monolith Board Games, criadora da franquia Gotham City Chronicles, confirmou que a Season 4 será ambientada inteiramente no Absolute Universe.
        </p>
        <p>
          No lado digital, rumores fortes vindos de fontes da indústria indicam que a <strong>Warner Bros. Games</strong> está desenvolvendo um jogo baseado no Absolute Universe. O projeto estaria em pré-produção desde meados de 2025, aproveitando o sucesso massivo das HQs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-geek/30">
            <h4 className="font-bold text-lg mb-2">✅ Confirmado</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Board game Gotham City Chronicles S4: Absolute U</li>
              <li>• Miniaturas oficiais de Absolute Batman</li>
              <li>• Ambientação no Absolute Universe</li>
              <li>• Personagens: Batman, Wonder Woman, Superman</li>
            </ul>
          </div>
          <div className="p-4 bg-card rounded-xl border border-yellow-500/30">
            <h4 className="font-bold text-lg mb-2">🔶 Rumores Fortes</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Jogo digital AAA em pré-produção</li>
              <li>• Warner Bros. Games como publisher</li>
              <li>• Gênero: ação/aventura mundo aberto</li>
              <li>• Possível reveal no The Game Awards 2026</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Absolute Universe na DC
        </h2>
        <p>
          Absolute Batman não está sozinho. A DC lançou uma linha completa de reimaginações: <strong>Absolute Superman</strong> (Jason Aaron e Rafa Sandoval), <strong>Absolute Wonder Woman</strong> (Kelly Thompson e Hayden Sherman) e <strong>Absolute Flash</strong>. Cada personagem foi reimaginado do zero, sem as origens tradicionais.
        </p>
        <p>
          O Absolute Superman, por exemplo, é um imigrante Kryptoniano que chegou à Terra sem os Kents — cresceu sozinho e descobriu seus poderes por conta própria. A Wonder Woman Absolute é uma guerreira amazona em uma Terra onde os deuses abandonaram a humanidade.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-geek" />
          Por que Absolute Batman Funciona
        </h2>
        <p>
          O sucesso de Absolute Batman não é acidente. Scott Snyder entendeu que o Batman tradicional — bilionário filantropo com gadgets infinitos — se tornou difícil de se identificar para uma geração que enfrenta crise habitacional e desigualdade crescente.
        </p>
        <p>
          Um Batman operário, que constrói suas próprias ferramentas com materiais de construção e que luta contra sistemas corruptos que protegem os ricos, ressoa de forma visceral. É a mesma essência do personagem — justiça, determinação, inteligência — mas em uma embalagem que fala diretamente ao público de 2026.
        </p>
        <p>
          Se o jogo digital se concretizar, teremos o potencial de uma experiência como nenhum outro jogo do Batman ofereceu: <strong>combate brutal e visceral</strong> (sem gadgets sofisticados), <strong>construção/crafting</strong> de equipamentos improvisados, e uma Gotham City que reflete desigualdade social real.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você leu Absolute Batman?</h3>
          <p className="text-muted-foreground">Conta pra gente o que achou nos comentários! 🦇👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="absolute-batman-game-2026" />
      <CommentSection postId="absolute-batman-game-2026" postTitle="Absolute Batman: Do HQ ao Game" />
    </article>
  );
};

export default AbsoluteBatmanGame2026;
