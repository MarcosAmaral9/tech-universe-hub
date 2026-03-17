import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Target, Sword, Shield, Flame, Snowflake, Zap, Crosshair, Swords } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";

const CrimsonDesertBuilds = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/geek/crimson-desert"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Crimson Desert
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Guia de Builds
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia Completo de Builds — As Melhores Combinações Para Kliff
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Descubra as builds mais poderosas, árvores de habilidades e combinações elementais para dominar Pywel
        </p>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            17 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            14 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonBuildsImg}
          alt="Crimson Desert - Guia de Builds e Classes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert não possui classes fixas — o sistema de progressão de Kliff é totalmente fluido, permitindo que o jogador customize seu estilo de combate através de <strong>árvores de habilidades, elementos e equipamentos</strong>. Neste guia, analisamos as builds mais eficientes para cada situação.
        </p>

        {/* Quick Reference */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-400" />
            Visão Geral do Sistema
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div><strong>Árvores de Habilidades:</strong> 5 ramos distintos</div>
            <div><strong>Elementos:</strong> Fogo, Gelo, Relâmpago, Sombra</div>
            <div><strong>Armas:</strong> Espada, Machado, Lança, Adaga dupla</div>
            <div><strong>Máx. Pontos:</strong> ~75% de uma árvore completa</div>
            <div><strong>Respec:</strong> Disponível via NPC em Shapur</div>
            <div><strong>Sinergia:</strong> Combinar 2 árvores é ideal</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-red-400" />
          As 5 Árvores de Habilidades
        </h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Sword className="h-5 w-5 text-red-400" />
              <h4 className="font-bold text-red-400 mb-0">Guerreiro</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Foco em dano corpo a corpo bruto, combos longos e ataques pesados devastadores. Ideal para quem gosta de enfrentar inimigos de frente sem recuar.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <h4 className="font-bold text-blue-400 mb-0">Sentinela</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Defensivo e estratégico. Contra-ataques perfeitos, bloqueio avançado e auras protetoras. A melhor opção para chefes difíceis.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Crosshair className="h-5 w-5 text-green-400" />
              <h4 className="font-bold text-green-400 mb-0">Predador</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Agilidade extrema, esquivas i-frame, backstabs e dano crítico multiplicado. Arriscado mas devastador quando dominado.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-5 w-5 text-orange-400" />
              <h4 className="font-bold text-orange-400 mb-0">Elementalista</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Imbui armas com elementos e desbloqueia habilidades mágicas de área. Excelente para combate contra grupos e controle de campo.
            </p>
          </div>
        </div>

        <div className="p-4 bg-card rounded-xl border border-border my-6">
          <div className="flex items-center gap-2 mb-2">
            <Swords className="h-5 w-5 text-purple-400" />
            <h4 className="font-bold text-purple-400 mb-0">Comandante</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-0">
            Focado em fortalezas e tropas. Melhora recrutamento, moral das tropas e habilidades de cerco. Essencial para quem quer maximizar a construção de fortalezas.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-red-400" />
          Build 1: Berserker de Fogo (Guerreiro + Elementalista)
        </h2>

        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-bold mb-0">Berserker de Fogo</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            A build mais popular da comunidade. Combina o dano bruto do Guerreiro com os ataques de fogo do Elementalista para criar combos devastadores com DoT (damage over time).
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">Distribuição de Pontos</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Guerreiro: 60% (foco em combos e ataques pesados)</li>
                <li>• Elementalista: 40% (foco em imbui de fogo e explosões)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Equipamento Ideal</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Espada Longa de Forja Ígnea</li>
                <li>• Armadura Média do Vulcão</li>
                <li>• Amuleto de Intensificar Chamas</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 mb-0">
            <strong>Dificuldade:</strong> ⭐⭐ Intermediário | <strong>Ideal para:</strong> História principal, exploração, combate geral
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Snowflake className="h-7 w-7 text-blue-400" />
          Build 2: Cavaleiro de Gelo (Sentinela + Elementalista)
        </h2>

        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Snowflake className="h-6 w-6 text-blue-400" />
            <h3 className="text-xl font-bold mb-0">Cavaleiro de Gelo</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            A build mais segura para chefes difíceis. Combina a defesa impecável do Sentinela com o controle de campo do gelo, congelando inimigos e criando janelas seguras de contra-ataque.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">Distribuição de Pontos</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Sentinela: 55% (contra-ataques perfeitos e bloqueio)</li>
                <li>• Elementalista: 45% (congelamento e aura gélida)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Equipamento Ideal</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Escudo e Espada do Inverno Eterno</li>
                <li>• Armadura Pesada Glacial</li>
                <li>• Anel do Permafrost</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 mb-0">
            <strong>Dificuldade:</strong> ⭐⭐⭐ Avançado | <strong>Ideal para:</strong> Chefes difíceis, Modo Desafio
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-yellow-400" />
          Build 3: Assassino Relâmpago (Predador + Elementalista)
        </h2>

        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-6 w-6 text-yellow-400" />
            <h3 className="text-xl font-bold mb-0">Assassino Relâmpago</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            A build mais arriscada mas com o maior potencial de dano. Esquivas perfeitas carregam energia elétrica que é liberada em explosões de dano crítico devastadoras. Um erro pode ser fatal.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">Distribuição de Pontos</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Predador: 65% (backstabs, críticos e esquivas)</li>
                <li>• Elementalista: 35% (imbui de relâmpago e stun)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Equipamento Ideal</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Adagas Duplas Raio de Tempestade</li>
                <li>• Armadura Leve do Trovão</li>
                <li>• Brincos de Velocidade Sônica</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 mb-0">
            <strong>Dificuldade:</strong> ⭐⭐⭐⭐ Expert | <strong>Ideal para:</strong> Speedruns, jogadores experientes
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Build 4: Senhor da Guerra (Guerreiro + Comandante)
        </h2>

        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Sword className="h-6 w-6 text-red-400" />
            <h3 className="text-xl font-bold mb-0">Senhor da Guerra</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            A build perfeita para quem quer maximizar a experiência de construção de fortalezas. Kliff se torna um líder militar temido, com tropas poderosas e habilidades de cerco devastadoras, sem perder eficiência no combate pessoal.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">Distribuição de Pontos</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Guerreiro: 50% (dano base e sustain)</li>
                <li>• Comandante: 50% (tropas, moral e cerco)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Equipamento Ideal</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li>• Machado do Conquistador</li>
                <li>• Armadura do General Greymane</li>
                <li>• Estandarte de Comando</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 mb-0">
            <strong>Dificuldade:</strong> ⭐⭐ Intermediário | <strong>Ideal para:</strong> Gestão de fortalezas, conquista territorial
          </p>
        </div>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          Dica: Você pode redistribuir seus pontos de habilidade a qualquer momento visitando o NPC "Forjador de Destinos" na cidade de Shapur. O custo aumenta a cada respec, mas os primeiros três são gratuitos.
        </blockquote>

        <h2 className="text-2xl font-bold mt-10 mb-4">Qual Build Escolher?</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Build</th>
                <th className="text-left py-3 px-4 font-bold">Dano</th>
                <th className="text-left py-3 px-4 font-bold">Defesa</th>
                <th className="text-left py-3 px-4 font-bold">Dificuldade</th>
                <th className="text-left py-3 px-4 font-bold">Melhor Para</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="py-3 px-4 font-medium text-orange-400">Berserker de Fogo</td>
                <td className="py-3 px-4">⭐⭐⭐⭐</td>
                <td className="py-3 px-4">⭐⭐</td>
                <td className="py-3 px-4">Intermediário</td>
                <td className="py-3 px-4 text-muted-foreground">Geral</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-3 px-4 font-medium text-blue-400">Cavaleiro de Gelo</td>
                <td className="py-3 px-4">⭐⭐⭐</td>
                <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                <td className="py-3 px-4">Avançado</td>
                <td className="py-3 px-4 text-muted-foreground">Chefes</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-3 px-4 font-medium text-yellow-400">Assassino Relâmpago</td>
                <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                <td className="py-3 px-4">⭐</td>
                <td className="py-3 px-4">Expert</td>
                <td className="py-3 px-4 text-muted-foreground">Speedrun</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-3 px-4 font-medium text-red-400">Senhor da Guerra</td>
                <td className="py-3 px-4">⭐⭐⭐</td>
                <td className="py-3 px-4">⭐⭐⭐</td>
                <td className="py-3 px-4">Intermediário</td>
                <td className="py-3 px-4 text-muted-foreground">Fortalezas</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            A beleza do sistema de builds de Crimson Desert está na liberdade. Não existe uma build "errada" — cada combinação oferece uma experiência distinta que muda fundamentalmente como você interage com Pywel. Recomendamos começar com o <strong>Berserker de Fogo</strong> para a primeira playthrough e experimentar builds mais especializadas nas seguintes. Boas batalhas, Greymane!
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-builds-guia-2026" />
      <CommentSection postId="crimson-desert-builds-guia-2026" />
    </article>
  );
};

export default CrimsonDesertBuilds;
