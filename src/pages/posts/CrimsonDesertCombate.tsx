import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";

const CrimsonDesertCombate = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek/crimson-desert"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Crimson Desert
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            Análise
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Como o Sistema de Combate e a BlackSpace Engine Mudam Tudo
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Uma análise aprofundada das mecânicas de combate, chefes épicos, montarias e a tecnologia por trás do visual impressionante
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
            9 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonCombateImg}
          alt="Crimson Desert - Sistema de Combate BlackSpace Engine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-red-600 pl-4">
          Desde os primeiros trailers, Crimson Desert chamou atenção não só pelo visual estonteante, mas pela promessa de um combate que vai além do RPG convencional. Com a chegada do lançamento em 19 de março de 2026, vamos analisar em detalhe o que faz o sistema de batalha da Pearl Abyss ser um dos mais discutidos da geração — e como a BlackSpace Engine torna tudo isso possível.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Núcleo do Combate: Habilidade, Timing e Posição</h2>
        <p>
          O combate de Crimson Desert foi construído sobre três pilares: habilidade de execução, timing preciso e posicionamento estratégico. Diferente de RPGs que permitem apertar botões repetidamente com sucesso garantido, aqui cada encontro exige que o jogador leia os padrões inimigos, identifique janelas de ataque e tome decisões táticas em frações de segundo.
        </p>
        <p>
          Kliff possui acesso a um sistema de combos extenso que combina ataques rápidos, ataques pesados, defesas ativas e contra-ataques. As sequências podem ser adaptadas dependendo da arma equipada, e a progressão de personagem permite especializar o estilo de luta de acordo com a preferência do jogador — seja um guerreiro brutal corpo a corpo, um lutador ágil com movimentos evasivos, ou um híbrido que mistura magia elemental com força física.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          A BlackSpace Engine foi projetada especificamente para lidar com mundos abertos complexos, cenários altamente detalhados e simulações físicas que desafiam o hardware atual.
        </blockquote>

        <h2 className="text-2xl font-bold mt-10 mb-4">Ataques Elementais e Personalização de Armas</h2>
        <p>
          Uma das mecânicas mais espetaculares de Crimson Desert é o sistema de ataques elementais. Armas podem ser imbuídas com diferentes elementos — fogo, gelo, relâmpago e mais — alterando não apenas o dano causado, mas também os efeitos visuais e as reações dos inimigos ao serem atingidos. Um inimigo congelado se torna mais vulnerável a ataques físicos; um coberto em chamas pode se tornar mais agressivo e imprevisível.
        </p>
        <p>
          O sistema de progressão profundo permite que o jogador personalize cada aspecto do conjunto de habilidades de Kliff, escolhendo entre diferentes ramos de evolução que afetam tanto a eficiência em combate quanto a interação com o mundo aberto. Certas habilidades desbloqueiam novos caminhos de exploração, enquanto outras melhoram capacidades de craft e construção.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Chefes Colossais: Os Momentos Mais Épicos do Jogo</h2>
        <p>
          As batalhas contra chefes de Crimson Desert são, segundo todos os previews, o ápice da experiência. A Pearl Abyss mostrou confrontos de escala monumental — dragões mecânicos que exigem estratégias complexas para serem derrotados, cavaleiros amaldiçoados com padrões de ataque elaborados (como a famosa batalha contra o cavaleiro de uma fortaleza inimiga, demonstrada em gameplay exclusivo da IGN), e a bruxa Maria, revelada no The Game Awards 2024.
        </p>
        <p>
          Cada boss possui uma identidade visual e mecânica própria, exigindo que o jogador adapte o loadout e a abordagem estratégica. Alguns chefes só podem ser danificados por determinados elementos; outros possuem fases múltiplas que mudam completamente a dinâmica da batalha à medida que sua saúde diminui.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Montarias: Cavalos, Dragões e Muito Mais</h2>
        <p>
          A exploração de Pywel é enriquecida por um sistema de montarias diversificado. Cavalos são o meio de transporte principal e possuem mecânicas de combate específicas — Kliff pode atacar, esquivar e usar habilidades especiais enquanto está montado, tornando as perseguições e batalhas campais dinamicamente diferentes dos confrontos a pé.
        </p>
        <p>
          Em momentos específicos da narrativa e do mundo aberto, o jogador também terá acesso a dragões e mechas — criaturas e máquinas de guerra que transformam completamente a escala da exploração e do combate. Voar sobre Pywel em um dragão não é apenas uma fantasia estética; é uma mecânica integrada que revela novos pontos de interesse acessíveis apenas por via aérea.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Construção de Fortalezas: A Camada Estratégica</h2>
        <p>
          Uma mecânica que diferencia Crimson Desert de outros RPGs de ação é a possibilidade de construir e gerenciar fortalezas próprias. O jogador pode recrutar tropas, gerenciar recursos, expandir o território controlado pelos Greymanes e usar a fortaleza como base de operações para missões mais complexas. Essa camada estratégica acrescenta profundidade além do combate direto.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">A BlackSpace Engine: A Tecnologia por Trás do Visual</h2>
        <p>
          A BlackSpace Engine é a evolução direta do motor gráfico usado em Black Desert Online, totalmente reconstruído para lidar com os desafios de um RPG solo de mundo aberto em escala colossal. A engine suporta simulações físicas avançadas, iluminação dinâmica em tempo real, vegetação procedural e sistemas de clima que afetam tanto o visual quanto o gameplay.
        </p>
        <p>
          No PS5 e Xbox Series X/S, o jogo roda com suporte a ray tracing, altas taxas de frame e tempo de carregamento praticamente nulo. No PC, a engine tira proveito de tecnologias de upscaling modernas para garantir performance excelente mesmo em configurações medianas. O resultado visível é um dos jogos mais impressionantes tecnicamente da geração.
        </p>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            Crimson Desert não é apenas visualmente impressionante — é um sistema de combate complexo, montarias diversificadas, chefes memoráveis e uma camada estratégica de construção de fortalezas que trabalham juntos para criar uma experiência RPG completa. A BlackSpace Engine garante que tudo isso seja apresentado com uma fidelidade visual que redefine o padrão da geração. Para quem ama RPGs de ação, esse é o título de 2026.
          </p>
        </div>
      </div>

      {/* Related Posts & Comments */}
      <RelatedPosts currentPostId="71" />
      <CommentSection postId="crimson-desert-combate-blackspace-engine" />
    </article>
  );
};

export default CrimsonDesertCombate;
