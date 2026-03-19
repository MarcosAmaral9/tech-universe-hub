import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Sword, Shield, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";

const CrimsonDesertBuilds = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-builds-guia-2026", "Crimson Desert: Sistema de Progressão de Kliff — O Que Sabemos", "geek");
  }, []);
  const goBack = useSmartBack("/geek/crimson-desert");
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Portal Crimson Desert
      </button>
      <Link to="/geek/crimson-desert" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-6 ml-4 transition-colors">
        ⬡ Ir ao portal
      </Link>

    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="geek" size="lg" />
        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Crimson Desert: Sistema de Progressão de Kliff — O Que Sabemos Antes do Lançamento
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>

    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={crimsonBuildsImg} alt="Crimson Desert — sistema de progressão de Kliff" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </div>

    <div className="prose prose-lg dark:prose-invert max-w-none">

      <div className="not-prose mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Nota de transparência:</strong> As informações deste artigo são baseadas
          em trailers oficiais da Pearl Abyss, previews publicados por IGN e GameSpot, e nas descrições
          da própria Pearl Abyss em entrevistas. Detalhes completos do sistema de progressão serão conhecidos
          apenas com o lançamento.
        </p>
      </div>

      <p className="lead text-xl text-muted-foreground">
        Crimson Desert tem Kliff como protagonista fixo, mas isso não significa progressão linear.
        A Pearl Abyss confirmou em entrevistas e em previews que o jogador tem liberdade para
        moldar o estilo de combate de Kliff ao longo da campanha. Veja o que foi oficialmente confirmado.
      </p>

      <h2>O Que a Pearl Abyss Confirmou</h2>
      <p>
        Em entrevistas antes do lançamento, os desenvolvedores confirmaram que Crimson Desert tem
        um sistema de progressão sem classes fixas. Kliff não é um guerreiro, mago ou arqueiro —
        o jogador escolhe como evoluir o personagem de acordo com seu estilo de jogo.
      </p>
      <p>
        A Pearl Abyss descreveu o sistema como "evolução orgânica baseada em uso", similar ao
        que outros RPGs de mundo aberto adotaram, mas integrado às mecânicas físicas da BlackSpace Engine.
        Por exemplo, quanto mais você usa combate a cavalo, mais habilidades nessa área ficam disponíveis.
      </p>

      <h2>Armas Confirmadas em Trailers</h2>
      <p>
        Com base nos trailers oficiais publicados pela Pearl Abyss no YouTube e nas sessões de preview,
        as seguintes armas foram mostradas em uso por Kliff:
      </p>

      <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
        {[
          { icon: <Sword className="h-5 w-5 text-red-400"/>, name: "Espada e Escudo", desc: "Arma principal mostrada na maioria dos trailers. Combate equilibrado entre ataque e defesa.", confirmed: true },
          { icon: <Sword className="h-5 w-5 text-orange-400"/>, name: "Espada de Duas Mãos", desc: "Mostrada em combates contra inimigos maiores. Golpes mais lentos e mais poderosos.", confirmed: true },
          { icon: <Shield className="h-5 w-5 text-blue-400"/>, name: "Combate a Cavalo", desc: "Ataques montado confirmados por previews. Inclui golpes laterais e descendentes.", confirmed: true },
          { icon: <Sword className="h-5 w-5 text-purple-400"/>, name: "Outros Estilos", desc: "Trailers mostram outros movimentos não categorizados. Detalhes completos após lançamento.", confirmed: false },
        ].map((w) => (
          <div key={w.name} className={`bg-card rounded-xl border p-4 ${w.confirmed ? "border-border" : "border-dashed border-muted"}`}>
            <div className="flex items-center gap-2 mb-2">
              {w.icon}
              <span className="font-bold text-sm">{w.name}</span>
              {w.confirmed
                ? <span className="ml-auto text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Confirmado</span>
                : <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">A confirmar</span>}
            </div>
            <p className="text-xs text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>

      <h2>O Abismo e Habilidades Especiais</h2>
      <p>
        A dimensão do Abismo, confirmada pela Pearl Abyss, desbloqueia habilidades especiais para Kliff
        que não estão disponíveis no mundo principal. Em entrevistas, os desenvolvedores descreveram
        essas habilidades como "poderes ligados à natureza do Abismo" que complementam o combate físico
        do mundo de Pywel.
      </p>
      <p>
        Os trailers mostraram Kliff usando habilidades que parecem envolver manipulação de energia —
        mas a Pearl Abyss manteve os detalhes específicos em segredo antes do lançamento para preservar
        a surpresa da descoberta pelo jogador.
      </p>

      <h2>Equipamentos e Progressão de Nível</h2>
      <p>
        Previews confirmaram que Crimson Desert tem um sistema de equipamentos com diferentes raridades,
        e que os bosses dropam equipamentos únicos. O GameSpot mencionou que completar a primeira
        área do jogo já proporcionava upgrades visíveis no personagem.
      </p>
      <p>
        A Pearl Abyss confirmou que não há compras de itens de gameplay — todos os upgrades são
        conquistados jogando, sem pay-to-win ou microtransações de poder. Cosméticos adicionais
        podem ser comercializados separadamente, mas apenas itens visuais.
      </p>

      <h2>Recomendações para Dificuldade</h2>
      <p>
        Com base nas descrições dos previews, o jogo oferece múltiplos níveis de dificuldade.
        Para jogadores que querem explorar os sistemas de progressão com liberdade, a dificuldade
        padrão é a recomendada. Para quem quer um desafio maior nos bosses, a dificuldade elevada
        foi descrita como "punitiva mas justa" por previews do IGN.
      </p>

      <div className="not-prose my-8 p-5 bg-red-500/10 rounded-xl border border-red-500/20">
        <h3 className="font-bold text-lg mb-2">📋 Este Artigo Será Atualizado</h3>
        <p className="text-muted-foreground text-sm">
          Após o lançamento em 19/03/2026, este artigo será atualizado com informações completas e
          verificadas sobre o sistema de progressão, builds otimizadas e estratégias de combate
          baseadas na experiência real com o jogo.
        </p>
      </div>
    </div>

    <RelatedPosts currentSlug="crimson-desert-builds-guia-2026" category="geek" />
    <CommentSection postId="crimson-desert-builds-guia-2026" postTitle="Crimson Desert — Sistema de Progressão" />
  </article>
);
};

export default CrimsonDesertBuilds;
