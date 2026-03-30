import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Skull, Swords, MapPin, Shield, Star, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/crimson-desert-bosses.webp";

const CrimsonDesertBosses = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-bosses-guia-chefes", "Crimson Desert: Guia de Bosses — Onde Encontrar, Como Derrotar e Recompensas", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert · Bosses</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia Completo de Bosses — Onde Encontrar, Como Derrotar e Recompensas
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />29 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />22 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert bosses guia completo — chefes de Pywel" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert conta com <strong>76 bosses</strong> espalhados pelo continente de Pywel — 28 deles fazem parte da história principal e os demais são opcionais, ligados a missões de facção ou exploração livre. Cada chefe possui fraquezas únicas, mecânicas próprias e recompensas exclusivas que podem mudar drasticamente seu poder de combate. Este guia foi atualizado com as informações do <strong>patch de 23 de março de 2026</strong>, que ajustou a vida e o ataque de vários bosses.
        </p>

        <div className="not-prose my-6 p-5 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h3 className="font-bold mb-2 flex items-center gap-2"><Skull className="h-5 w-5 text-red-400" /> Patch 23/03/2026 — Mudanças nos Bosses</h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Reduzidos HP e dano de ataque de bosses e inimigos específicos</li>
            <li>• Reduzido consumo de stamina ao bloquear ataques</li>
            <li>• Dificuldade de emboscadas no caminho para o Reed Devil diminuída</li>
            <li>• Padrões de ataque de Kearush the Slayer ajustados</li>
            <li>• Aumentada acumulação do medidor de stun ao aparar com sucesso</li>
            <li>• Fraquezas de bosses agora exibidas mesmo sem o conhecimento específico</li>
            <li>• Corrigido bug do Blinding Flash não sendo aplicado corretamente</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Mecânicas Gerais de Boss — Leia Antes de Combater
        </h2>
        <p>
          Antes de enfrentar qualquer boss, entenda o sistema de barras de vida: a maioria possui <strong>2 barras de HP</strong> (azul e vermelha). Ao esvaziar a primeira, uma cutscene ativa, a vida reseta para a segunda fase e o boss se torna mais agressivo. Bosses como o Staglord têm <strong>3 barras</strong>. A cor da barra indica a fase: azul (1ª), verde (2ª), vermelho (fase final).
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
          {[
            ["🎯 Fraquezas Elementais","Muitos bosses têm fraqueza a elementos específicos. White Horn é vulnerável a fogo. Teste diferentes habilidades — Nature's Snare, Force Palm e Blinding Flash têm efeitos especiais em bosses específicos."],
            ["💀 Medidor de Stun","Cada ataque acerta o medidor de stagger do boss. Ataques de agarrão drenam o medidor mais rápido. Ao esgotar, o boss fica vulnerável por alguns segundos — use para finalizações devastadoras."],
            ["🗺️ Pilares Quebrados","Se um boss quebrar um pilar durante a luta, use Nature's Grasp para arremessá-lo no chefe — causa dano equivalente a 25–50% da HP total. Uma das mecânicas de maior dano do jogo."],
            ["🥩 Carne Grelhada","Leve pelo menos 100 carnes grelhadas (Grilled Meat) para cada boss. São a principal fonte de cura durante combates — não há limite de uso. Compre no vendedor de carnes em Hernand ou cozinhe no caldeirão."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card border border-border rounded-xl">
              <p className="font-bold mb-1">{t}</p>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-red-400" />
          Bosses da História Principal — Ordem Cronológica
        </h2>

        {/* MYURDIN */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">01.</span> Myurdin — Líder dos Black Bears
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Acampamento Greymane — prólogo do jogo"],["⚠️ Dificuldade","★★☆☆☆ (Boss tutorial)"],["🏆 Recompensa","Progressão da história + equipamento inicial"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Myurdin é o primeiro boss "real" da narrativa — líder dos Black Bears que destrói o acampamento dos Greymanes no prólogo. Esta luta é narrativa e não pode ser vencida na primeira tentativa; serve para introduzir os sistemas de combate. Kliff é deixado para morrer após o confronto. Myurdin reaparece mais tarde com mecânicas mais complexas.
        </p>
        <p><strong>Estratégia:</strong> Por ser um boss tutorial, siga as instruções do jogo. Foque em aparar (parry) seus ataques para aprender o timing. Não desperdice consumíveis — você não pode vencer este confronto inicial.</p>

        {/* KAILOK */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">02.</span> Kailok the Hornsplitter — Rei Goblin
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Acampamento Goblin — Hernand, início do jogo"],["⚠️ Dificuldade","★★☆☆☆"],["🏆 Recompensa","Sword of the Lord — melhor espada de uma mão do início ao meio do jogo"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Kailok é o líder de um acampamento goblin. Kliff encontra o campo e desafia o Hornsplitter para um duelo. O boss usa ataques físicos pesados mas previsíveis — perfect para aprender o sistema de counter/parry.
        </p>
        <p><strong>Estratégia:</strong> Kailok é suscetível a grapples — agarrá-lo drena o medidor de stagger rapidamente. Esquive para frente-direita quando atacar, aguarde o combo terminar, aplique 3 ataques rápidos e recue. <strong>Recompensa essencial:</strong> a Sword of the Lord tem Abyssal Core Wind Slash e é a melhor arma de uma mão da fase inicial.</p>

        {/* REED DEVIL */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">03.</span> Reed Devil — O Demônio dos Juncos
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Campo de Juncos — leste de Hernand"],["⚠️ Dificuldade","★★★☆☆"],["🏆 Recompensa","Habilidade de área exclusiva + artefato Abyss"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Um boss extremamente ágil que ataca com velocidade absurda. Após o patch de 23/03/2026, as emboscadas no caminho até ele foram significativamente facilitadas.
        </p>
        <p><strong>Estratégia (3 fases):</strong></p>
        <ul className="text-sm space-y-2">
          <li><strong>Fase 1:</strong> Boss direto — interrompa seus ataques com counter de escudo, aplique ataques rápidos, cure constantemente.</li>
          <li><strong>Fase 2:</strong> 5 totens aparecem no campo. Destrua todos rapidamente enquanto desvia de ataques à distância. Não corra em linha reta — esquive continuamente entre os totens.</li>
          <li><strong>Fase 3:</strong> Mesma estratégia da fase 1, mas mais agressivo. Quando ele dash e atira projéteis vermelhos, fuja para o extremo oposto do campo esquivando lateralmente.</li>
        </ul>

        {/* WHITE HORN */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">04.</span> White Horn — O Yeti-Rena
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Regiões nevadas — norte de Pywel"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Arma pesada exclusiva + Abyss Artifact"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          White Horn é uma criatura colossal — um híbrido entre yeti e rena com três fases de combate. Foi um dos primeiros bosses revelados pela Pearl Abyss. É <strong>vulnerável a fogo</strong> — habilidades como Fire Arrow causam dano significativo.
        </p>
        <p><strong>Estratégia:</strong> Use ataques de fogo sempre que disponíveis. O boss tem alcance enorme — não tente enfrentá-lo corpo a corpo sem janelas claras de abertura. Após aparar um ataque pesado, aplique 2–3 ataques rápidos e recue. Na fase final (barra vermelha), ele fica mais rápido — priorize cura e espere aberturas claras.</p>

        {/* STAGLORD */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">05.</span> Saigord the Staglord — 3 Barras de HP
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Hernand Farmhouse — fale com os guardas"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Turning Slash Expertise — aumenta dano de uma das habilidades mais fortes"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          O Staglord é único: possui <strong>3 barras de HP</strong> em vez de 2. Disponível cedo no jogo mas considerado desafiador para o nível do ponto. Tem muitos ataques vermelhos (imbloqueáveis) — esquive, não bloqueie.
        </p>
        <p><strong>Estratégia:</strong> É um boss humano estilo guerreiro. Esquive para frente-direita em seus ataques, aguarde o combo terminar, aplique 3 ataques e recue. Na fase 2 ele fica mais agressivo. <strong>Vale muito a pena fazer</strong> — o Turning Slash Expertise desbloqueia melhora de dano permanente.</p>

        {/* HEXE MARIE */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">06.</span> Hexe Marie — A Bruxa
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Floresta de Hernand — missão secundária de facção"],["⚠️ Dificuldade","★★★☆☆"],["🏆 Recompensa","Abyss Artifact + Habilidade de necromancia"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Hexe Marie possui 2 barras de HP e é uma das mais bem voice-acted do jogo. Ataca atirando corvos em linha reta (fáceis de esquivar lateralmente) e invoca esbirros. Os esbirros morrem com 1 acerto.
        </p>
        <p><strong>Estratégia:</strong> Não tente esquivar cada ataque — isso prolonga demais a luta. Tanque os ataques enquanto cura e ataca. Quando ela para e fica estática, esquive o primeiro ataque, vá para trás dela, aplique 4 ataques pesados e ataques leves até ela teleportar. Na fase 2, elimine os esbirros rapidamente e volte para ela.</p>

        {/* KEARUSH */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">07.</span> Kearush the Slayer
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Missão principal — capítulo avançado"],["⚠️ Dificuldade","★★★★★"],["🏆 Recompensa","Arma exclusiva + Abyss Artifact raro"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Kearush é um dos bosses mais difíceis do jogo — seus padrões de ataque foram ajustados no patch de 23/03/2026. É vulnerável a <strong>fogo</strong>. A mecânica de Back Hang (pendurar nas suas costas) é essencial para certos ataques.
        </p>
        <p><strong>Estratégia:</strong> Fase 1 — esquive todos os ataques vermelhos (não podem ser bloqueados). Aplique ataques quando ele recupera. Fase 2 — ele entra em super armor (brilho azul) periodicamente. Quando isso acontecer, corra IMEDIATAMENTE para o extremo oposto da arena e se esconda nos cantos das paredes — ele geralmente fica preso lá e não consegue acertar você. Seja muito rápido. Use Palmar Pills para auto-revive nas etapas finais.</p>

        {/* ANTUMBRA'S SWORD */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">08.</span> Antumbra's Sword — A Lâmina das Ilusões
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Sanctum of Absolution — missão Cloister of Ruination"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Abyss Artifact + Vessel of Dark Pursuit"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Este boss luta em um espaço muito pequeno — seus ataques são amplos e ele cria ilusões que também atacam. Use Blinding Flash para stuná-lo e atacar. A arena pequena torna a movimentação crítica.
        </p>
        <p><strong>Estratégia:</strong> Use Blinding Flash repetidamente para criar aberturas. Utilize as paredes e pilares para redirecionar seus ataques. As ilusões morrem rapidamente — não perca tempo com elas. Foque sempre no boss real.</p>

        {/* PRISCUS */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">09.</span> Priscus the Ancient — Boss de Mundo Aberto
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Spire of Ringing Truth — Pailune (exploração livre)"],["⚠️ Dificuldade","★★☆☆☆"],["🏆 Recompensa","Blessing of the Immortal + Ancient's Necklace + Ancient Retribution"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Apesar do nome imponente, Priscus é um dos mais fáceis do jogo. Ataca com projéteis. Use Nature's Snare para bloquear e refletir os projéteis de volta — causa dano massivo. Explore o Spire of Ringing Truth em Pailune para encontrá-lo.
        </p>

        {/* GABRIEL CALIBURN */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">10.</span> Gabriel Caliburn — Boss Final
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","The Abyss — missão A Shadow in the Void (final do jogo)"],["⚠️ Dificuldade","★★★★★ (3 bosses consecutivos)"],["🏆 Recompensa","Espada +28 ataque com Abyssal Rays, Attack 1 e Attack 2 Gears"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          O boss final de Crimson Desert. Localizado no Abyss após Kliff perseguir Caliburn por um portal. O confronto final é uma <strong>maratona de 3 bosses consecutivos</strong>, sendo o primeiro uma luta de 3 fases. Leve o máximo de Palmar Pills e comida possível.
        </p>
        <p><strong>Estratégia:</strong> Gerencie os consumíveis com cuidado — você não pode reabastecer entre os combates. Priorize cura sobre dano nos dois primeiros bosses. No terceiro, use tudo que tiver. A espada que Caliburn dropa (+28 ataque, nível 1 taxa crítica, nível 5 refinamento) é uma das melhores do jogo.</p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-red-400" />
          Bosses Opcionais Imperdíveis
        </h2>
        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Boss</TableHead><TableHead>Localização</TableHead><TableHead>Recompensa Principal</TableHead><TableHead>Dificuldade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Queen Stoneback Crab","Exploração — missão secundária","Arma exclusiva + habilidade de quebrar carapaças","★★★☆☆"],
                ["Draven the Crowcaller","Floresta — missão de facção","Tauria's Curved Sword (melhor espada curva inicial)","★★★☆☆"],
                ["Master Du","Localização secreta","Habilidades de escalada de parede + combos","★★★★☆"],
                ["Crimson Nightmare","Abyss — voo com Crow's Wings necessário","Focused Repulsion (repele tudo no estado Focus)","★★★☆☆"],
                ["Fortain the Cursed Knight","Dungeon de facção","Armor set completo do Fallen Kingdom","★★★★☆"],
                ["Lucian Bastier / Awakened","Missão de facção avançada","Equipamento exclusivo de cavaleiro","★★★★★"],
              ].map(([b,l,r,d]) => (
                <TableRow key={b}>
                  <TableCell className="font-medium">{b}</TableCell>
                  <TableCell className="text-sm">{l}</TableCell>
                  <TableCell className="text-sm">{r}</TableCell>
                  <TableCell className="text-sm">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-red-400" />
          Dicas Universais para Todos os Bosses
        </h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
          {[
            ["🥩 100+ Carnes Grelhadas","Compre no vendedor em Hernand (marcado como '?' no mapa) ou abata animais na floresta. Cada animal dá 3-4 carnes. Cozinhe no caldeirão ao lado do vendedor — Grilled Meat restaura 140 HP. Não há limite de uso durante combate."],
            ["💊 Palmar Pills","Craftáveis com ingredientes básicos de alquimia (água + insetos/plantas). Permitem auto-revive com 30% de HP. Reserve para os bosses mais difíceis — especialmente o confronto final de Caliburn."],
            ["🧲 Concentrados de Palma","Receita na Caverna Shadow Whispers (próxima à ponte de Hernand). 3 águas + 15 recursos naturais (chifres de cabra ou plantas) em uma caldeirão de bruxa. Produz cura em área — essenciais antes de bosses difíceis."],
            ["⚔️ Refine seu Equipamento","A diferença entre equipamento refinado e não refinado é enorme. Ferreiros e NPCs especializados em assentamentos oferecem upgrades. Cobre e minério de ferro são abundantes — use-os cedo e com frequência."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card border border-border rounded-xl">
              <p className="font-bold mb-1">{t}</p>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual boss te deu mais trabalho? ⚔️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-bosses-guia-chefes" />
      <CommentSection postId="crimson-desert-bosses-guia-chefes" postTitle="Crimson Desert: Guia de Bosses — Onde Encontrar, Como Derrotar e Recompensas" />
    </article>
  );
};

export default CrimsonDesertBosses;
