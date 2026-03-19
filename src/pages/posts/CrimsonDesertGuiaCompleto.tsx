import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Target, Star, Map, Sword, Shield, Cpu, Castle, Mountain } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";

const CrimsonDesertGuiaCompleto = () => {

  useEffect(() => {
    trackArticleRead("crimson-desert-guia-completo", "Crimson Desert: Guia Completo do RPG Mais Esperado de 2026", "geek");
  }, []);
  const goBack = useSmartBack("/geek/crimson-desert");
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Crimson Desert
      </button>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Crimson Desert
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia Completo do RPG Mais Esperado de 2026
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss
        </p>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            16 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonGuiaImg}
          alt="Crimson Desert - Guia Completo RPG 2026 Pearl Abyss"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Pearl Abyss está prestes a redefinir o que entendemos por RPG de mundo aberto. <strong>Crimson Desert</strong> — lançado em 19 de março de 2026 para PC, PS5 e Xbox Series X/S — é o resultado de anos de desenvolvimento ambicioso, refinamento técnico e uma visão clara de narrativa cinematográfica combinada com liberdade de exploração.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div><strong>Desenvolvedor:</strong> Pearl Abyss</div>
            <div><strong>Engine:</strong> BlackSpace Engine</div>
            <div><strong>Gênero:</strong> RPG de Ação / Mundo Aberto</div>
            <div><strong>Plataformas:</strong> PC, PS5, Xbox Series X|S, macOS</div>
            <div><strong>Lançamento:</strong> 19 de março de 2026</div>
            <div><strong>Mapa:</strong> Múltiplos biomas (tamanho oficial não divulgado)</div>
            <div><strong>Modo:</strong> Single-player exclusivo</div>
            <div><strong>Tempo para Zerar:</strong> ~35h (história)</div>
            <div><strong>Preço:</strong> ~R$ 349 (Standard) · ~R$ 399 (Deluxe)</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-red-400" />
          O Que é Crimson Desert?
        </h2>

        <p>
          Crimson Desert é um RPG de ação em mundo aberto desenvolvido pela Pearl Abyss, o estúdio sul-coreano conhecido pelo MMORPG Black Desert Online. Inicialmente concebido como um prequel dentro do universo de Black Desert, o projeto evoluiu durante o desenvolvimento e se tornou uma experiência completamente independente — uma IP própria e separada, com lore e universo únicos.
        </p>
        <p>
          O jogo é totalmente single-player, sem nenhuma integração multiplayer planejada. A Pearl Abyss decidiu focar 100% na narrativa e na experiência solo, algo que diferencia Crimson Desert de praticamente todo o restante do portfólio do estúdio.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          "A batalha por Pywel começa em 19 de março de 2026." — Pearl Abyss
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          A História: Kliff e os Greymanes
        </h2>

        <p>
          O jogador controla Kliff, líder do grupo mercenário conhecido como Greymanes. No início da jornada, Kliff busca libertar sua terra natal de opressores e forças que ameaçam seu povo — uma missão pessoal que rapidamente evolui para algo muito maior, envolvendo o destino de todo o continente de Pywel.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Sword className="h-6 w-6 text-red-400" />
            Facções Principais
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Greymanes</strong>
              <p className="text-muted-foreground mb-0 mt-1 text-sm">Grupo mercenário liderado por Kliff. Buscam liberdade e justiça para seu povo em um continente hostil.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Black Bears</strong>
              <p className="text-muted-foreground mb-0 mt-1 text-sm">Inimigos juramentados dos Greymanes. Responsáveis pela emboscada devastadora que muda o rumo da história.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Facções de Pailune</strong>
              <p className="text-muted-foreground mb-0 mt-1 text-sm">Diversos reinos e cidades-estado que mantinham um equilíbrio tenso antes dos eventos do jogo.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Forças do Abismo</strong>
              <p className="text-muted-foreground mb-0 mt-1 text-sm">Entidades sobrenaturais que emergem de uma dimensão etérea, ameaçando a existência do mundo conhecido.</p>
            </div>
          </div>
        </div>

        <p>
          O ponto de virada narrativo acontece quando os Greymanes sofrem uma emboscada devastadora pelos Black Bears. Essa tragédia nocturna força Kliff a reconstruir o grupo e enfrentar não apenas rivais mortais, mas também as forças sobrenaturais que começam a emergir do misterioso Abismo — uma dimensão etérea onde um desequilíbrio místico ameaça o mundo inteiro.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-red-400" />
          O Mundo: O Continente de Pywel
        </h2>

        <p>
          Pywel é um continente de mundo aberto de grande escala. A Pearl Abyss não divulgou o tamanho exato do mapa em números. O mundo apresenta múltiplos biomas distintos — florestas, desertos, montanhas e costas — cada um com sua própria geografia, fauna e desafios.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Mountain className="h-5 w-5 text-green-400" />
              <h4 className="font-bold text-green-400 mb-0">Planícies e Florestas</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Repletas de segredos naturais, acampamentos inimigos e fauna selvagem. O ponto de partida da aventura.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Map className="h-5 w-5 text-yellow-400" />
              <h4 className="font-bold text-yellow-400 mb-0">Desertos Áridos</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Ruínas de civilizações extintas e criaturas ancestrais escondem-se sob as areias escaldantes.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Castle className="h-5 w-5 text-blue-400" />
              <h4 className="font-bold text-blue-400 mb-0">Cidades Movimentadas</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              NPCs com rotinas próprias, mercados dinâmicos e política medieval que reage às ações do jogador.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-purple-400" />
              <h4 className="font-bold text-purple-400 mb-0">O Abismo</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Um reino etéreo e misterioso no céu, onde leis físicas se curvam e criaturas sobrenaturais habitam.
            </p>
          </div>
        </div>

        <p>
          A interação com o ambiente é um ponto forte de Pywel. Kliff pode escalar paredes e penhascos, nadar em rios e lagos, planar de alturas elevadas, montar cavalos e até dragões mecanizados em determinados momentos. O mapa é repleto de marcos históricos, ruínas antigas, tesouros escondidos e pontos de interesse que recompensam a exploração.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Sistema de Combate: Brutal, Fluido e Estratégico
        </h2>

        <p>
          O sistema de combate foi desenvolvido com a <strong>BlackSpace Engine</strong>, uma tecnologia proprietária criada pela Pearl Abyss projetada especificamente para mundos abertos complexos com simulações físicas realistas.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Combos Extensos</h4>
            <p className="text-sm text-muted-foreground">
              Sequências de melee executáveis com janelas de timing precisas que recompensam a habilidade do jogador.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Defesas Ativas</h4>
            <p className="text-sm text-muted-foreground">
              Bloqueio, esquivas e contra-ataques criam um sistema defensivo tão profundo quanto o ofensivo.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Castle className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Fortalezas</h4>
            <p className="text-sm text-muted-foreground">
              Construa bases, recrute tropas e expanda território. Uma camada estratégica além do combate direto.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-red-400" />
          Plataformas e Data de Lançamento
        </h2>

        <p>
          Crimson Desert está disponível desde 19 de março de 2026 para Windows PC (via Steam), macOS, PlayStation 5 e Xbox Series X/S. Compradores antecipados receberam o exclusivo <strong>Khaled Shield</strong> como bônus de pré-venda.
        </p>
        <p>
          Antes do lançamento, o jogo havia ultrapassado a marca de <strong>3 milhões de listas de desejo</strong> somando todas as plataformas globais, posicionando-o como um dos lançamentos mais aguardados de 2026. A recepção da comunidade brasileira foi especialmente intensa, com discussões calorosas sobre customização de personagem e impacto narrativo.
        </p>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            Crimson Desert representa a aposta mais ambiciosa da Pearl Abyss até hoje. Com seu mundo aberto de grande escala, uma narrativa cinematográfica protagonizada por Kliff e os Greymanes, um sistema de combate visceral e uma engine tecnicamente impressionante, o jogo tem tudo para se tornar um marco do RPG na geração atual. Já está com o HD preparado para explorar Pywel?
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-guia-completo" />
      <CommentSection postId="crimson-desert-guia-completo" />
    </article>
  );
};

export default CrimsonDesertGuiaCompleto;
