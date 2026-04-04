import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Shield, Zap, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/absolute-batman-game-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const AbsoluteBatmanGame2026 = () => {
  useEffect(() => {
    trackArticleRead("absolute-batman-game-2026", "LEGO Batman: Legacy of the Dark Knight — Tudo Sobre o Jogo de Maio de 2026", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Games · DC · LEGO</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          LEGO Batman: Legacy of the Dark Knight — Guia Completo do Jogo de Maio de 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="LEGO Batman Legacy of the Dark Knight 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anunciado na Gamescom 2025 e com data confirmada para <strong>22 de maio de 2026</strong>, <strong>LEGO Batman: Legacy of the Dark Knight</strong> é o quarto jogo da série LEGO Batman e o mais ambicioso até hoje — trazendo um Gotham City em mundo aberto, múltiplos personagens jogáveis e décadas de história do Homem-Morcego em um só título. Desenvolvido pela <strong>Traveller's Tales</strong> e publicado pela <strong>Warner Bros. Games</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Ficha Técnica
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <tbody>
              {[
                ["Desenvolvedor", "Traveller's Tales (TT Games)"],
                ["Publicador", "Warner Bros. Games"],
                ["Plataformas", "PS5, Xbox Series X|S, PC (Steam/Epic) — Switch 2 posteriormente"],
                ["Data de Lançamento", "22 de maio de 2026"],
                ["Acesso Antecipado (Deluxe)", "26 de maio de 2026 (72h antes)"],
                ["DLC — Mayhem Collection", "Setembro de 2026 (incluso na Deluxe Edition)"],
                ["Gênero", "Ação / Aventura / Mundo Aberto"],
                ["Classificação Indicativa", "Teens (13+)"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek w-1/3">{k}</td>
                  <td className="py-3 px-4 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Grande Novidade: Gotham em Mundo Aberto
        </h2>
        <p>
          O maior salto em relação aos jogos anteriores da série é o <strong>Gotham City em mundo aberto</strong>. Diferente dos hubs lineares de LEGO Batman 2 e 3, Legacy of the Dark Knight apresenta uma cidade completamente explorável, mais extensa que o que a franquia já fez. A TT Games descreve o mapa como inspirado por décadas de Batman — com localizações como o <strong>Asilo Arkham</strong>, o <strong>Wayne Manor</strong>, os museus e bancos de Gotham, e outras áreas icônicas da lore do personagem.
        </p>
        <p>
          O jogo também abandona o modelo linear de fases para focar na <strong>jornada de Batman se tornando o Cavaleiro das Trevas</strong>, com momentos de diferentes eras do personagem — do Batman clássico ao moderno.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-geek" />
          Personagens Jogáveis e Vilões
        </h2>
        <p>
          O trailer do The Game Awards 2025 revelou os personagens jogáveis e os vilões confirmados:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-blue-500/20 p-5">
            <h3 className="font-bold text-blue-400 mb-3">🦇 Heróis Jogáveis</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Batman</strong> — protagonista principal</li>
              <li>• <strong>Robin</strong> — lançador de cordas</li>
              <li>• <strong>Nightwing</strong> — cajado de batalha</li>
              <li>• <strong>Batgirl</strong> — hackarang versátil</li>
              <li>• <strong>Catwoman</strong> — chicote e companheiro gatinho</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">🃏 Galeria de Vilões</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Coringa</strong> — vilão principal</li>
              <li>• <strong>Duas-Caras</strong></li>
              <li>• <strong>Hera Venenosa</strong></li>
              <li>• <strong>Firefly</strong></li>
              <li>• <strong>Pinguim, Ra's al Ghul, Bane, Mr. Freeze</strong></li>
            </ul>
          </div>
        </div>
        <p>
          A DLC <strong>Mayhem Collection</strong> (setembro de 2026, inclusa na Deluxe Edition) adiciona <strong>Coringa e Harley Quinn como personagens jogáveis</strong>, com um novo modo Mayhem e missão de história focada nos dois fugindo do Asilo Arkham.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Veículos e Conteúdo de Colecionador
        </h2>
        <p>
          Um destaque do trailer foi a variedade de <strong>Batmóveis</strong> — incluindo o icônico Batmóvel da série animada <em>Batman: The Animated Series</em> e o Batpod dos filmes <em>The Dark Knight</em> e <em>The Dark Knight Rises</em>. Ambos são utilizáveis para explorar o mapa aberto de Gotham.
        </p>
        <p>
          Jogadores que comprarem sets físicos de LEGO Batman já disponíveis em lojas receberão conteúdo digital exclusivo: o Batsuit Dourado (Golden Age Batsuit) inspirado na estreia do personagem na <em>Detective Comics #27</em> de 1939, e variantes douradas dos Batmóveis de cada set.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Edições Disponíveis
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { edicao: "Standard Edition", preco: "~US$ 59,99", inclui: "Jogo base. Bônus de pré-venda: Golden Age Batsuit (disponível no lançamento para contas Warner Bros. elegíveis)." },
            { edicao: "Deluxe Edition", preco: "~US$ 89,99", inclui: "Jogo base + Deluxe Pack (Balgran Shield, Kairos Plate Set, Exclaire Horse Tack Set) + Mayhem Collection (setembro de 2026) + acesso antecipado de 72h." },
          ].map((e) => (
            <div key={e.edicao} className="bg-card rounded-xl border border-geek/20 p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-geek">{e.edicao}</h4>
                <span className="text-sm font-bold text-muted-foreground">{e.preco}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{e.inclui}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Absolute Batman: O Jogo de Tabuleiro</h2>
        <p>
          Vale mencionar que o <strong>Absolute Batman</strong> — o aclamado redesign do personagem nos quadrinhos pela DC Comics — também chegará aos jogos, mas em formato de <strong>jogo de tabuleiro</strong>. A <strong>Batman: Gotham City Chronicles</strong> da Monolith Board Games anunciou a <strong>Season 4: Absolute Universe</strong> com campanha no Gamefound prevista para o <strong>Q4 de 2026</strong>, trazendo os personagens e lore do Absolute Universe ao jogo de tabuleiro cooperativo que já tem mais de 100.000 jogadores.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          LEGO Batman: Legacy of the Dark Knight chega como o jogo mais ambicioso da TT Games em anos — mundo aberto, décadas de história do Batman, co-op local e uma galeria de vilões e heróis robusta. Com lançamento em 22 de maio de 2026 para PS5, Xbox Series X|S e PC, e Switch 2 posteriormente, é um dos títulos mais aguardados do primeiro semestre.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você vai pegar LEGO Batman no lançamento? 🦇</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="absolute-batman-game-2026" />
      <CommentSection postId="absolute-batman-game-2026" postTitle="LEGO Batman: Legacy of the Dark Knight — Guia Completo" />
    </article>
  );
};

export default AbsoluteBatmanGame2026;
