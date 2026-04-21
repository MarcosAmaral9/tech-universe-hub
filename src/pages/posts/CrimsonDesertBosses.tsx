import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Skull, Swords, MapPin, Shield, Star, Zap, Flame, Sword } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CrimsonDesertBossMap from "@/components/CrimsonDesertBossMap";
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
          Crimson Desert: Guia Completo de Bosses — Todos os Chefes, Estratégias e Recompensas
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />29 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />35 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert bosses guia completo — chefes de Pywel" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert conta com <strong>75 bosses registrados na aba Conhecimento</strong> do jogo — além de 2 bosses secretos (Goyen e Master Du) que não aparecem no diário. No total, guias especializados listam ao redor de <strong>76 encontros únicos</strong>, sendo 26 deles parte da campanha principal e o restante opcional, ligado a missões de facção ou exploração livre. Este guia foi atualizado com as informações do <strong>patch de 23 de março de 2026</strong> e cobre todos os bosses da história em ordem cronológica, mais os opcionais mais importantes.
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
          Antes de enfrentar qualquer boss, entenda o sistema de barras de vida: a maioria possui <strong>2 barras de HP</strong> (azul e vermelha). Ao esvaziar a primeira, uma cutscene ativa, a vida reseta para a segunda fase e o boss se torna mais agressivo. Bosses como o Staglord e o Kearush têm <strong>3 barras</strong>. A cor da barra indica a fase: azul (1ª), verde (2ª), vermelho (fase final). Há também bosses com <strong>transformação completa</strong> entre fases — Ludvig, Myurdin e Lucian Bastier mudam de aparência e moveset inteiramente ao entrar na segunda barra.
        </p>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
          {[
            ["🎯 Fraquezas Elementais","Muitos bosses têm fraqueza a elementos específicos. White Horn é vulnerável a fogo. Kearush toma mais dano de ataques nas costas. Teste diferentes habilidades — Nature's Snare, Force Palm e Blinding Flash têm efeitos especiais em bosses específicos."],
            ["💀 Medidor de Stun","Cada ataque acerta o medidor de stagger do boss. Ataques de agarrão drenam o medidor mais rápido. Ao esgotar, o boss fica vulnerável por alguns segundos — use para finalizações devastadoras."],
            ["🗺️ Pilares Quebrados","Se um boss quebrar um pilar durante a luta, use Nature's Grasp para arremessá-lo no chefe — causa dano equivalente a 25–50% da HP total. Válido em arenas de Cassius Morten e outros. Uma das mecânicas de maior dano do jogo."],
            ["🥩 Carne Grelhada","Leve pelo menos 100 carnes grelhadas (Grilled Meat) para cada boss. São a principal fonte de cura durante combates — não há limite de uso. Para bosses de final de jogo (Goyen, T'rukan), leve 200. Compre no vendedor de carnes em Hernand ou cozinhe no caldeirão ao lado dele."],
            ["⚔️ Tipo de Boss Importa","Bosses humanoides aceitam parry (L1/LB). Bosses monstros usam ataques imbloqueáveis (brilho vermelho na arma) — esquive, não bloqueie. Bosses com escudo (Cassius Morten, Fortain) precisam de ataques pesados (R2/RT) para quebrar a guarda."],
            ["🗡️ Guarde as Armas dos Bosses","Sword of the Lord (Kailok) e Tauria Curved Sword (Crowcaller) são as melhores armas do jogo até o final. A Golden Vanguard (Gregor) é essencial para a luta obrigatória como Damiane contra Lucian Bastier. Nunca descarte armas de boss."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card border border-border rounded-xl">
              <p className="font-bold mb-1">{t}</p>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-red-400" />
          Mapa Interativo dos Bosses de Pywel
        </h2>
        <p>
          Use o mapa abaixo para localizar cada boss em Pywel. Filtre por <strong>História</strong>, <strong>Opcionais</strong> ou <strong>Secretos</strong>, dê zoom para explorar regiões específicas e clique em qualquer marcador para abrir os detalhes e pular direto para a seção do guia.
        </p>
        <CrimsonDesertBossMap />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-red-400" />
          Bosses da Campanha Principal — Ordem Cronológica
        </h2>

        {/* MYURDIN PROLOGUE */}
        <h3 id="boss-myurdin-prologo" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">Prólogo.</span> Myurdin — Líder dos Black Bears (1ª aparição)
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Acampamento Greymane — prólogo do jogo"],["⚠️ Dificuldade","★☆☆☆☆ (Boss tutorial — não pode ser vencido)"],["🏆 Recompensa","Progressão da história"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Myurdin é o líder dos Black Bears e o antagonista central da narrativa. Esta luta é <strong>narrativa e não pode ser vencida</strong> na primeira tentativa — serve para introduzir os sistemas de combate e para mostrar que Kliff está em desvantagem absoluta. Kliff é deixado para morrer após o confronto. Myurdin reaparece mais tarde com mecânicas mais complexas.
        </p>
        <p><strong>Estratégia:</strong> Por ser um boss tutorial, siga as instruções do jogo. Curiosamente, é tecnicamente possível "vencer" Myurdin aqui — mas ele reaparece de qualquer jeito por razões narrativas. Não desperdice consumíveis.</p>

        {/* MATTHIAS */}
        <h3 id="boss-matthias" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">01.</span> Matthias — O Cavaleiro de Hernand
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Cidade de Hernand — missão 'For Honor' (Capítulo 1)"],["⚠️ Dificuldade","★★☆☆☆ (Boss introdução)"],["🏆 Recompensa","Skill Pump Kick (aprendida durante a luta) + progressão da história"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Matthias é um capitão dos Wandering Freeswords que Kliff encontra em Hernand enquanto procura seus companheiros. É o <strong>primeiro boss obrigatório real da campanha</strong> — mais fácil do que parece. Possui 2 barras de HP e ataques lentos e previsíveis: estocadas de espada e chutes básicos. A luta serve como tutorial de parry e combos.
        </p>
        <p><strong>Estratégia:</strong> Encadeie 3 ataques rápidos, depois 3 ataques pesados para interrompê-lo. Ataques pesados consomem stamina — cuidado para não ficar sem. Quando ele atacar, recue para regenerar stamina, depois avance e repita. Se tiver dificuldade, saia na tela de game over, compre carne em Hernand e volte com mais cura. Matthias ensina a habilidade <strong>Pump Kick</strong> via mecânica "watch and learn" — observe ele usar e mantenha o botão de interagir pressionado.</p>

        {/* KAILOK */}
        <h3 id="boss-kailok" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">02.</span> Kailok the Hornsplitter — Líder dos Goldleaf Merchants
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Acampamento Goblin — Hernand, missão 'Cheers Echoing From the Edge'"],["⚠️ Dificuldade","★★☆☆☆"],["🏆 Recompensa","Sword of the Lord — melhor espada de uma mão do início ao meio do jogo"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Kailok é líder dos Goldleaf Merchants — um bando de mercadores que se converteu ao banditismo. Kliff encontra o campo e desafia o Hornsplitter para um duelo. Boss com <strong>1 barra de HP</strong>, mas é um salto real de dificuldade em relação a Matthias. Usa ataques físicos pesados e ondas de espada que cobrem área ampla — estas podem ser bloqueadas (consome stamina).
        </p>
        <p><strong>Estratégia:</strong> Foque em parries perfeitos com o escudo para interromper combos. Quando ele entrar em super armadura (brilho azul, invulnerável), pare de atacar e prepare-se para bloquear/esquivar. Kailok é suscetível a grapples — agarrá-lo drena o medidor de stagger rapidamente. <strong>Recompensa essencial:</strong> a Sword of the Lord tem o efeito Abyssal Core Wind Slash e é a melhor arma de uma mão da fase inicial.</p>

        {/* REED DEVIL */}
        <h3 id="boss-reed-devil" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">03.</span> Reed Devil — O Demônio dos Juncos
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Frozen Soul Mountain — Hernand (missão 'Dance with the Devil', Capítulo 3)"],["⚠️ Dificuldade","★★★☆☆"],["🏆 Recompensa","Skill Swift Stab + Artefato Abyss"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          O Reed Devil é um ex-morador de favela que, ao colocar sua máscara, reescreveu seu destino e passou a aterrorizar os cidadãos de Hernand como o Diabo dos Campos de Juncos. Um boss extremamente ágil com <strong>3 barras completas de HP</strong>. Após o patch de 23/03/2026, as emboscadas no caminho até ele foram significativamente facilitadas.
        </p>
        <p><strong>Estratégia (3 fases):</strong></p>
        <ul className="text-sm space-y-2">
          <li><strong>Fase 1:</strong> Interrompa seus ataques com parry de escudo, aplique ataques rápidos, cure constantemente.</li>
          <li><strong>Fase 2:</strong> 5 totens aparecem no campo — destrua todos rapidamente enquanto desvia de ataques. Não corra em linha reta entre os totens; esquive continuamente e cure enquanto avança.</li>
          <li><strong>Fase 3:</strong> Mesma estratégia da fase 1, mas mais agressivo. Quando ele faz dash e arremessa projéteis vermelhos, corra para o extremo oposto esquivando lateralmente. Reserve Palmar Pills para esta fase.</li>
        </ul>

        {/* TENEBRUM */}
        <h3 id="boss-tenebrum" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">04.</span> Tenebrum — O Boss-Puzzle do Abyss
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Scholastone Institute — Hernand (missão 'Gate to the Otherworld', Capítulo 4)"],["⚠️ Dificuldade","★★☆☆☆ (mais puzzle que combate)"],["🏆 Recompensa","Key to the Spire of the Stars — essencial para continuar a história"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Tenebrum é o primeiro boss-puzzle do jogo — um espectro flutuante que não pode ser derrotado com ataques normais. A maioria dos jogadores fica preso aqui por não entender a mecânica. Importante: o pop-up da tela diz "aproxime-se", mas a mecânica real é <strong>voar em direção a ele</strong>. Se você morrer e reiniciar, precisará refazer o segmento de quebra-cabeça anterior.
        </p>
        <p><strong>Estratégia:</strong> (1) Use <strong>Blinding Flash</strong> uma vez para revelar o ponto fraco do espectro — aparece um quadrado no alvo. Não precisa repetir. (2) Posicione-se sobre o buraco central da praça onde o chão está faltando. Dê um salto duplo — o vento te catapultará em direção a Tenebrum. (3) No ar, use <strong>Force Palm</strong> para acertá-lo. Cada Force Palm remove aproximadamente um terço do HP. São necessários 3–4 acertos. (4) Se for atingido pelos projéteis, cairá no chão — cure com comida e tente novamente. (5) Se a barra de Spirit acabar, esconda-se atrás de um pilar e segure L3+R3 para recuperá-la.</p>

        <AdRectangle className="my-8" />

        {/* KEARUSH */}
        <h3 id="boss-kearush" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">05.</span> Kearush the Slayer — O Primeiro Grande Muro
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Hernand Castle — missão 'Demenissian Delegation' (Capítulo 5)"],["⚠️ Dificuldade","★★★★★"],["🏆 Recompensa","Arma exclusiva + Abyss Artifact raro"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Kearush é um monstro colossal semelhante a um gorila — enviado por uma delegação de Demeniss ao castelo de Hernand. Com <strong>3 barras completas de HP</strong>, é o boss que mais faz jogadores desistirem na primeira metade do jogo. Bloquear ou fazer parry não funciona. Os padrões de ataque foram ajustados no patch de 23/03/2026.
        </p>
        <p><strong>Preparação obrigatória:</strong> compre Health Level 4 e Stamina Level 4 na árvore de habilidades — transferem para todos os personagens. Leve <strong>100–200 Grilled Meats</strong>. Refine seu equipamento para pelo menos nível 4.</p>
        <ul className="text-sm space-y-2">
          <li><strong>Fase 1:</strong> Esquive para frente-direita em todos os ataques — isso te coloca atrás do boss. Aguarde o combo terminar, aplique 3 ataques rápidos e recue. Se ele escalar as paredes, corra para a lateral onde ele não consegue pular em cima de você. <strong>Cure enquanto ataca</strong>.</li>
          <li><strong>Fase 2:</strong> Quando entrar em super armadura (brilho azul), ele lançará uma série de ataques pesados. <strong>IMEDIATAMENTE</strong> corra em sprint para o extremo oposto da arena e se esconda nos cantos. Ele geralmente fica preso no canto e não consegue te acertar — mas você precisa ser muito rápido.</li>
          <li><strong>Fase 3:</strong> Mais agressivo, combos mais longos. Mesma estratégia. Se morrer aqui, use Palmar Pills. Se ficar sem cura, saia da luta e caçe mais animais.</li>
        </ul>

        {/* CROWCALLER */}
        <h3 id="boss-crowcaller" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">06.</span> Crowcaller — O Chamador dos Corvos
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Crow's Nest — região do Abyss/Hernand (missões 'Bloodwind' / 'Toward the Nest', Capítulo 5)"],["⚠️ Dificuldade","★★★★☆ (2ª luta)"],["🏆 Recompensa","Tauria Curved Sword — melhor arma para ataques pesados de todo o jogo"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Você enfrenta o Crowcaller <strong>duas vezes</strong>. O primeiro encontro tem 1 barra de HP e é simples. O segundo — ao final do Capítulo 5 — é o boss verdadeiro, com <strong>3 barras completas de HP</strong>. Ele pode se transformar em corvos e se teleportar pela arena. Rápido e difícil de prever, mas seus ataques têm sinais claros para parry. O mergulho aéreo é o ataque mais perigoso.
        </p>
        <p><strong>Estratégia:</strong> Use parry (L1/LB) na maioria dos ataques terrestres. Quando voar para o ar, espere pelo <strong>2º esquive lateral no ar</strong> antes de rolar para fora — este timing garante que você evite o mergulho. Na fase 2 ele faz 2 esquives antes de mergulhar; na fase 3, 3 esquives. Ative o ponto de fast travel direto antes da arena — se ficar sem carne, saia, reabasteça e fast travel de volta. Com 100+ carnes é possível tankar o dano enquanto mantém ataques e curas simultâneas.</p>
        <p><em><strong>Por que esta arma importa:</strong> A Tauria Curved Sword tem os melhores ataques pesados do jogo. Combinada com a skill Nature's Echo (árvore verde), que duplica seus ataques pesados, cria a combinação ofensiva mais forte disponível para Kliff até o final da campanha.</em></p>

        {/* CASSIUS MORTEN */}
        <h3 id="boss-cassius-morten" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">07.</span> Cassius Morten — O Primeiro Boss com Escudo
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Calphade Castle — Hernand (missão 'Traitor', Capítulo 6)"],["⚠️ Dificuldade","★★★☆☆"],["🏆 Recompensa","Shield of Betrayal"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Cassius Morten é um cavaleiro escarlate — o <strong>primeiro boss que bloqueia ativamente seus ataques</strong>. Ataques rápidos simplesmente ricocheteiam na guarda dele sem causar dano. Possui 1 barra de HP e é considerado moderado para o nível do ponto. A arena tem <strong>pilares destruíveis</strong> — use-os a seu favor.
        </p>
        <p><strong>Estratégia:</strong> Equipe a <strong>Tauria Curved Sword</strong> e compre a skill <strong>Nature's Echo</strong> (árvore verde) para duplicar seus ataques pesados. Então spam de ataques pesados (R2/RT) — eles quebram a guarda dele mesmo bloqueando. Após 3 golpes pesados, ele fica stunado e você pode encadear ataques leves. Repita. Quando ele se mover em direção a você, use <strong>Nature's Grasp</strong> para arremessar um dos pilares da arena nele — causa dano massivo.</p>

        {/* WHITE HORN */}
        <h3 id="boss-white-horn" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">08.</span> White Horn — O Espírito da Montanha
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Hernand norte — montanhas (boss opcional 'White Horn, Shepherd of Souls')"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Arma pesada exclusiva + Abyss Artifact"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          White Horn é o espírito da montanha que inspira tanto medo quanto admiração — um híbrido colossal entre yeti e rena com três fases de combate. Foi um dos primeiros bosses revelados pela Pearl Abyss antes do lançamento. É <strong>vulnerável a fogo</strong> — habilidades como Fire Arrow causam dano significativo.
        </p>
        <p><strong>Estratégia:</strong> Use ataques de fogo sempre que disponíveis. O boss tem alcance enorme — não tente enfrentá-lo corpo a corpo sem janelas claras de abertura. Após aparar um ataque pesado, aplique 2–3 ataques rápidos e recue. Na fase final (barra vermelha), ele fica mais rápido — priorize cura e espere aberturas claras.</p>

        {/* SAIGORD STAGLORD */}
        <h3 id="boss-staglord" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">09.</span> Saigord the Staglord — O Rei Caído com 3 Barras
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Icemoor Castle Ruins — Hernand (missão 'Lord Amidst the Ruins')"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Turning Slash Expertise + Staglord's Shield"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          O Staglord é um rei caído que protege as ruínas de um reino esquecido. Único no jogo por possuir <strong>3 barras de HP</strong> em vez de 2. Disponível cedo no jogo mas consideravelmente desafiador para o nível do ponto. Tem muitos ataques vermelhos (imbloqueáveis) — esquive, não bloqueie.
        </p>
        <p><strong>Estratégia:</strong> É um boss humano estilo guerreiro. Esquive para frente-direita em seus ataques, aguarde o combo terminar, aplique 3 ataques e recue. Na fase 2 fica mais agressivo. <strong>Vale muito a pena fazer</strong> — o Turning Slash Expertise desbloqueia melhora de dano permanente para uma das suas habilidades mais fortes.</p>

        {/* HEXE MARIE */}
        <h3 id="boss-hexe-marie" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">10.</span> Hexe Marie — A Bruxa das Trevas
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Floresta de Hernand — boss da história/secundária"],["⚠️ Dificuldade","★★★☆☆"],["🏆 Recompensa","Abyss Artifact + habilidade de necromancia"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Hexe Marie é uma seguidora das trevas que ousou infundir escuridão em seu próprio filho. Possui 2 barras de HP e está entre os bosses com melhor atuação de voz do jogo. Ataca atirando corvos em linha reta (fáceis de esquivar lateralmente) e invoca esbirros que morrem com 1 acerto. A skill <strong>Nature's Snare</strong> trivializa enormemente este encontro.
        </p>
        <p><strong>Estratégia:</strong> Se tiver Nature's Snare, use-a repetidamente para refletir os projéteis de corvos de volta nela — causando dano massivo. Sem Nature's Snare: não tente esquivar cada ataque — isso prolonga demais a luta. Tanque os ataques enquanto cura e ataca. Quando ela para e fica estática, esquive o primeiro ataque, vá para trás dela, aplique 4 ataques pesados e ataques leves até ela teleportar. Na fase 2, elimine os esbirros rapidamente e volte para ela. Periodicamente invoca golems — use Nature's Snare para refletir as pedras deles nela.</p>

        <AdLeaderboard className="my-8" />

        {/* KEARUSH — NOTE: article originally placed this as 07, now 11 in expanded numbering */}
        {/* LUDVIG */}
        <h3 id="boss-ludvig" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">11.</span> Ludvig e Awakened Ludvig — O Raio do Pailune
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Pailune Castle — missão 'Lonely Jackals' (Capítulo 7)"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Abyss Artifact + progressão da história"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Ludvig é um boss de 2 fases com <strong>transformação completa</strong> ao trocar de barra. A segunda fase o transforma em Awakened Ludvig, adicionando dano de raio e teletransporte constante. Esqueça o parry neste boss — foque em esquiva. Há um ponto de exploração fora da sala onde seu moveset se torna limitado caso seja levado para lá.
        </p>
        <p><strong>Estratégia:</strong> Equipe a Tauria Curved Sword e o maior escudo com estatísticas defensivas disponível. Tenha pelo menos resistência elétrica nível 2. Esquive todos os ataques — eles são rápidos e fortes. Ludvig teletransporta bastante; deixe ele falhar um combo ou parar de se mover antes de atacar. No Awakened, foque em esquivar em círculos e encaixe combos leves enquanto cura ao mesmo tempo. <strong>Recomendação de stats:</strong> acima de 800 HP, 200 Stamina, pelo menos 50 Spirit antes desta luta.</p>

        {/* ONE-ARMED LUDVIG */}
        <h3 id="boss-one-armed-ludvig" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">12.</span> One-Armed Ludvig — Como Oongka (Força)
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Kingshield Mountain — missão 'Twisted Fate'"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Progressão da história"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Você enfrenta Ludvig novamente — desta vez forçado a jogar como <strong>Oongka</strong>, o terceiro personagem jogável do jogo. 1 barra de HP. O maior problema é que você já se acostumou com o playstyle de Kliff por dezenas de horas. Oongka não tem escudo, mas pode bloquear e fazer parry com a arma (L1/LB). Ele pode dual-wieldar duas armas de uma mão.
        </p>
        <p><strong>Estratégia:</strong> <strong>Não gaste Abyss Artifacts em Oongka</strong> — você não pode reembolsar os recursos. Equipe duas espadas (não o machado inicial, que é lento demais). Use a <strong>Sword of the Lord</strong> para ataques de onda à distância. Foque em parry com a arma e encadeie combos leves. Como você acabou de ter múltiplas lutas seguidas, provavelmente estará com poucas curas — não se esqueça de re-equipar comida na roda de itens.</p>

        {/* MYURDIN rematch */}
        <h3 id="boss-myurdin-revanche" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">13.</span> Myurdin — Revanche com Fogo
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Hills of No Return — Hernand norte (Capítulo 7, missão principal)"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Progressão da história + cutscene importante"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          A revanche com Myurdin agora é uma luta real — ele tem 2 barras de HP. Na fase 1, canaliza a força do urso com ataques furiosos. Na fase 2, entra em estado de fúria com <strong>ataques infundidos de fogo</strong>. Similar à luta anterior com Ludvig: parry na fase 1, esquiva dominante na fase 2 quando os ataques de magia entrarem.
        </p>
        <p><strong>Estratégia:</strong> Fase 1 — use parry e ataques pesados com Tauria Curved Sword. Fase 2 — não deixe sua stamina zerar completamente, você sempre precisa de uma esquiva disponível. Quando ele entrar em posição agachada e começar a se mover erraticamente, antecipe o ataque de garras e esquive imediatamente.</p>

        {/* GREGOR */}
        <h3 id="boss-gregor" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">14.</span> Gregor the Halberd of Carnage — A Armadilha da Arena
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Fort Ironclad, Demeniss — missão principal (Capítulo 8)"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Golden Vanguard — lança de duas mãos essencial para a luta de Lucian Bastier"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Gregor usa uma alabarda e tem combos de estocada com super armadura que drenam stamina a velocidade assustadora. O que torna esta arena particularmente traiçoeira: as paredes têm <strong>armadilhas de flechas</strong> que disparam independentemente do boss. Você precisa gerenciar a posição em relação tanto às flechas quanto às estocadas de Gregor.
        </p>
        <p><strong>Estratégia:</strong> Quando ele iniciar uma cadeia de estocadas com brilho azul (super armor), esquive imediatamente e não tente bloquear — esses ataques passam pelo escudo. Posicione-se nas laterais da arena para evitar as flechas das paredes entre janelas de ataque. Após o combo terminar, aplique ataques pesados encadeados. <strong>Não venda/descarte a Golden Vanguard</strong> — você precisará dela como Damiane contra Lucian Bastier.</p>

        {/* FORTAIN */}
        <h3 id="boss-fortain" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">15.</span> Fortain the Cursed Knight — O Cavaleiro com Fantasma
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Thornbriar Fortress — Demeniss (missão 'The Cursed Knight', Capítulo 8)"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Armor set completo do Fallen Kingdom"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Fortain possui escudo e <strong>invoca constantemente um cavaleiro fantasma</strong> que atira flechas e ataca independentemente enquanto ele luta. Isso cria uma situação de dois inimigos simultâneos — o fantasma limita suas janelas de ataque. O fantasma <strong>não pode ser morto</strong>; esquive seus projéteis azuis em vez de tentar eliminá-lo. A arena tem pilares que podem ser usados como cover.
        </p>
        <p><strong>Estratégia:</strong> Use ataques pesados com Tauria Curved Sword + Nature's Echo para quebrar a guarda de Fortain — ataques leves ricocheteiam. Quando o fantasma aparecer, afaste-se imediatamente. Quando Fortain voa para fora da arena e mergulha do alto, esconda-se atrás dos pilares e avance para punir o pouso. Empurrar Fortain em direção à entrada da arena com Forward Slash e Turning Slash pode fazer com que ele não consiga invocar o fantasma corretamente — explore este posicionamento.</p>

        {/* LUCIAN BASTIER */}
        <h3 id="boss-lucian-bastier" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">16.</span> Lucian Bastier e Awakened — Obrigatório como Damiane
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Elemore Estate / Spire of Clockwork, Demeniss — Capítulo 8 final"],["⚠️ Dificuldade","★★★★★ (boss mais frustrante da campanha)"],["🏆 Recompensa","Spire of Clockwork Key + Storm Veil elemental ability (acessível pós-luta)"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Lucian Bastier lidera os Righteous Inquisitors e é a luta que mais frustra a comunidade — você é <strong>forçado a jogar como Damiane</strong>, com quem provavelmente não investiu gear ou Abyss Artifacts. Possui 2 barras de HP com transformação completa. Fase 1: usa escudo + maça com explosões de fogo no chão. Fase 2: teleporta constantemente para seu ponto cego e invoca demônios-sombra.
        </p>
        <p><strong>Preparação:</strong> Melhore a armadura de Damiane 1–2 níveis. Equipe a <strong>Golden Vanguard</strong> (lança obtida de Gregor) — mais rápida, maior alcance e quebra a guarda melhor que a rapier. Leve 100+ Grilled Meat.</p>
        <p><strong>Estratégia:</strong> Fase 1 — esquive em círculos laterais (nunca para trás ou bloqueando frontalmente). Lucian bloqueia ataques frontais; vá pela lateral, ataque com a lança, recue antes que ele contraataque. Atenção: as manchas de fogo no chão persistem — continue se movendo. Fase 2 — ele teletransporta para trás de você repetidamente. Use <strong>Blinding Flash</strong> preventivamente quando souber que ele vai teletransportar — cega ele e cancela a maioria dos combos. Use <strong>Shield Watcher</strong> para manter dano passivo enquanto gerencia espírito. É uma batalha de paciência longa — mantenha disciplina.</p>

        <AdRectangle className="my-8" />

        {/* GOYEN */}
        <h3 id="boss-goyen" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">17.</span> Goyen — O Boss Espelho (Secreto)
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Nest of Valor, topo do Spire of the Sun — missão 'Unwavering Steps' (Capítulo 9)"],["⚠️ Dificuldade","★★★★★ (pode matar em 1 golpe)"],["🏆 Recompensa","Meteor Kick skill + itens raros. Não aparece na aba Conhecimento"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Goyen é um boss secreto — <strong>não aparece na aba Conhecimento</strong> do jogo mesmo após derrotá-lo. É essencialmente um combate espelho: Goyen usa o mesmo moveset de Kliff (Stab, Forward Slash, Turning Slash, Shield Bash, Meteor Kick) e é extremamente perigoso. Seu salto-slam que cria onda de choque pode <strong>matar em 1 golpe</strong> dependendo do seu equipamento. Aprenda o Meteor Kick via mecânica "watch and learn" durante a luta.
        </p>
        <p><strong>Estratégia:</strong> Como você conhece o moveset de Kliff, use isso ao seu favor — antecipe cada ataque. O Meteor Kick (salto + slam) é o mais mortal: quando ele sair do chão, observe o raio de impacto e spam de esquiva para se afastar antes do impacto. Ele encadeia sempre um kick aéreo em seguida — continue esquivando. Use Focus para desacelerar o tempo ao esquivar. Ataques pesados com esquiva para frente-direita após combos é a base. Ative o ponto de fast travel direto antes da arena para facilitar reabastecer.</p>

        {/* T'RUKAN */}
        <h3 id="boss-trukan" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">18.</span> T'rukan the Ascended — O Boss Mais Rápido do Jogo
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Serpent Marsh — Demeniss (missão principal, Capítulo 9)"],["⚠️ Dificuldade","★★★★★"],["🏆 Recompensa","Abyss Artifact + itens raros"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          T'rukan usa máscara de leopardo e ataca com os punhos — o boss com animações mais rápidas do jogo inteiro. <strong>1 barra de HP</strong>, mas golpes extremamente fortes. Mínimo recomendado: Health Level 6 (750 HP), gear nível 6, equipamento reforçado no Anvil + Grindstone.
        </p>
        <p><strong>Estratégia:</strong> Spam de counter de escudo (L1/LB) para quebrar a guarda dele. Se errar o counter e for atingido, esquive imediatamente. Quando o counter funcionar, aplique 1–2 combos antes de sair. Ataques pesados com Tauria Curved Sword após um counter bem-sucedido. Se tiver dificuldade com o timing do counter, esquive para trás dele após um combo e ataque pelas costas. Use Focus (desaceleração do tempo) para ajudar a ler os ataques. Alternativamente, Focused Shot (ataque à distância) funciona surpreendentemente bem — marque T'rukan múltiplas vezes em câmera lenta antes de soltar as flechas.</p>

        {/* MASTER DU */}
        <h3 id="boss-master-du" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">19.</span> Master Du — O Sábio com Lasers (Secreto)
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Cloister of Enlightenment — Hernand (acessado após derrotar Hexe Marie, T'rukan e Goyen)"],["⚠️ Dificuldade","★★★★★ (lasers matam instantaneamente)"],["🏆 Recompensa","Habilidades de escalada de parede + combos especiais. Não aparece na aba Conhecimento"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Master Du é o segundo boss secreto — também <strong>não aparece na aba Conhecimento</strong>. É um sábio miniatura que se teletransporta e salta entre os pilares de pedra da arena antes de mergulhar sobre você. Seus projéteis de laser têm dano de instakill dependendo do seu HP. A arena é significativamente menor que a maioria.
        </p>
        <p><strong>Estratégia:</strong> Use Focus ao máximo para ler os ataques em câmera lenta. Quando ele teletransportar e começar a saltar pelos pilares, use Focus para detectar de onde ele vai mergulhar — esquive imediatamente. Os lasers saem rápido demais para reagir sem Focus. Para evitar o instakill dos lasers, invista ao máximo em Health Level antes desta luta (mínimo Level 8). Se tiver sido cuidadoso com Abyss Artifacts, você terá HP suficiente para sobreviver a 1 acerto de laser e curar imediatamente.</p>

        {/* ANTUMBRA'S SWORD */}
        <h3 id="boss-antumbra-sword" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">20.</span> Antumbra's Sword — A Lâmina das Ilusões
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Sanctum of Absolution — Hernand (região do Abyss)"],["⚠️ Dificuldade","★★★★☆"],["🏆 Recompensa","Abyss Artifact + Vessel of Dark Pursuit"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Este boss luta em um espaço muito pequeno — seus ataques são amplos e ele cria ilusões que também atacam. Use Blinding Flash para stuná-lo e atacar. A arena pequena torna a movimentação crítica. Parte da série Antumbra que inclui também Antumbra's Staff, Antumbra's Spear, e finalmente Ator, Archon of Antumbra.
        </p>
        <p><strong>Estratégia:</strong> Use Blinding Flash repetidamente para criar aberturas. Utilize as paredes e pilares para redirecionar seus ataques. As ilusões morrem rapidamente — não perca tempo com elas. Foque sempre no boss real.</p>

        {/* PRISCUS */}
        <h3 id="boss-priscus" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">21.</span> Priscus the Ancient — Boss de Mundo Aberto
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Spire of Ringing Truth — Pailune (exploração livre)"],["⚠️ Dificuldade","★★☆☆☆"],["🏆 Recompensa","Blessing of the Immortal + Ancient's Necklace + Ancient Retribution"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Apesar do nome imponente, Priscus é um dos mais fáceis do jogo. Ataca com projéteis. Use Nature's Snare para bloquear e refletir os projéteis de volta — causa dano massivo. Explore o Spire of Ringing Truth em Pailune para encontrá-lo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-red-400" />
          Sequência Final do Jogo — 3 Bosses Consecutivos
        </h2>
        <p>
          O final de Crimson Desert é uma <strong>maratona de 3 bosses consecutivos</strong> sem possibilidade de reabastecer entre eles. É a sequência mais exigente do jogo — o primeiro boss tem 3 fases. Leve o <strong>máximo possível de Palmar Pills e 100+ Grilled Meat</strong>. Equipe tudo no seu melhor nível.
        </p>

        {/* CORRUPTED CALIBURN */}
        <h3 id="boss-corrupted-caliburn" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">Final #1.</span> Corrupted Caliburn (Gabriel Caliburn) — 3 Fases
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","The Abyss — Hernand (missão 'A Shadow in the Void')"],["⚠️ Dificuldade","★★★★★"],["🏆 Recompensa","Espada +28 ataque (Abyssal Rays, Attack 1 e Attack 2 Gears) — uma das melhores do jogo"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Gabriel Caliburn em forma corrompida abre a sequência final do jogo com <strong>3 fases distintas</strong>. A cada fase ele fica mais imprevisível. <strong>Gerencie os consumíveis com extrema cautela</strong> — você tem mais 2 bosses depois deste sem possibilidade de reabastecer.
        </p>
        <p><strong>Estratégia:</strong> Priorize sobrevivência sobre dano nos primeiros dois bosses. Use parry quando possível, esquiva quando não. Reserve Palmar Pills para o terceiro boss (Umbra). A espada que Caliburn dropa — com +28 de ataque, crítico nível 1 e refinamento nível 5 — é uma das melhores do jogo.</p>

        {/* MYURDIN AVATAR OF UMBRA */}
        <h3 id="boss-myurdin-umbra" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">Final #2.</span> Myurdin, Avatar de Umbra — O Boss Mais Difícil do Jogo
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Ashclaw Keep — Pailune (Lava Myurdin, Capítulo 7) → confronto final no Abyss"],["⚠️ Dificuldade","★★★★★ (objetivamente o boss mais difícil)"],["🏆 Recompensa","Progressão para o boss final"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Myurdin corrompido pelo poder de Umbra com <strong>2 barras de HP e cobertura de lava</strong>. Considerado objetivamente o boss mais difícil do jogo pela comunidade. Usa uma combinação de ataques de todos os bosses enfrentados anteriormente — garras de urso, lava, rajadas de energia. Muitos ataques matam em 1–2 golpes dependendo de stats.
        </p>
        <p><strong>Estratégia:</strong> Não faça parry — muito arriscado e inconsistente por causa dos ataques mágicos que não podem ser parados. Foque 100% em esquiva. Sempre esquive para trás dele e aplique um combo. Seu ataque mais perigoso: lasers vermelhos do céu — use <strong>Nature's Snare (nível 2 — Nature's Retribution)</strong> para refleti-los. Se não tiver essa skill, afaste-se o máximo possível e cure imediatamente após ser atingido. Mantenha Health Level 10 para absorver golpes com cura imediata. Stamina nunca pode zerar — você precisa de sempre 1 esquiva disponível.</p>

        {/* UMBRA */}
        <h3 id="boss-umbra" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">Final #3.</span> Umbra — O Anjo Final (Boss no Dragão)
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","The Abyss — missão 'Blinding Darkness' (boss final do jogo)"],["⚠️ Dificuldade","★★★★☆ (mecânica nova)"],["🏆 Recompensa","Créditos + epilogo"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          Umbra é um anjo enorme — e o <strong>verdadeiro boss final de Crimson Desert</strong>. A luta acontece enquanto <strong>você está montado no seu dragão</strong>. Tem 2 movimentos: arremessar pedras e disparar lasers. Se você morrer, a vida de Umbra <strong>não regenera</strong> — você pode continuar de onde parou. A mecânica é idêntica à luta de Tenebrum no Scholarship Institute.
        </p>
        <p><strong>Estratégia:</strong> Fique perto o suficiente para acertar projéteis do dragão, mas não próximo demais — ele cria onda de choque quando está perto. Voe para os lados continuamente para evitar os lasers. Atire bolas de fogo no olho central até o <strong>medidor de stun amarelo</strong> ficar cheio. Quando cheio: pule do dragão, planeie em direção ao olho de Umbra, use air dash para alcançar o olho e use <strong>Force Palm</strong> — cada acerto remove metade de uma barra de HP. Repita 2–3 vezes. Após derrota, epilogo com 8 missões de diálogo.</p>

        <h2 id="boss-opcionais" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 scroll-mt-24">
          <Star className="h-7 w-7 text-red-400" />
          Bosses Opcionais — Guia Completo
        </h2>

        {/* QUEEN STONEBACK CRAB — Detailed */}
        <h3 id="boss-queen-stoneback" className="text-xl font-bold mt-8 mb-3 flex items-center gap-2 scroll-mt-24">
          <span className="text-red-400">★</span> Queen Stoneback Crab — Boss Icônico de Escalada
        </h3>
        <div className="not-prose grid sm:grid-cols-3 gap-3 my-3 text-sm">
          {[["📍 Localização","Stoneback Crab Wetlands, Delesyia — missão 'The Wolf's Ballad' (Redfox Merchants) ou 'The Queen's Lake' com Diederik"],["⚠️ Dificuldade","★★★★☆ (mecânica de escalada exige stamina alta)"],["🏆 Recompensa","Diederik se junta como vendor no camp + equipamento exclusivo. Desbloqueado após progressão suficiente nas missões de facção de Delesyia"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs">{k}</p><p className="text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <p>
          A Queen Stoneback Crab foi um dos bosses mais icônicos mostrados nos trailers do jogo antes do lançamento — e viver o momento em que a "colina coberta de minerais" começa a se mover é um dos highlights do jogo. <strong>Ataques normais causam quase zero dano</strong> na carapaça dela. A única forma de vencê-la é subir nas costas. Invista em Stamina (Abyss Artifacts) antes desta luta — você vai precisar muito para se agarrar às costas dela.
        </p>
        <p><strong>Como iniciar:</strong> Fale com Diederik (leste da Cidade de Demeniss, perto de Bardtree Gorge, Delesyia). Ele levará você até uma área de minerais. Quando você se aproximar do que parece ser uma formação rochosa central — a batalha começa automaticamente via cutscene.</p>
        <div className="not-prose my-4 space-y-2">
          {[
            ["Fase 1 — Suba e esfaqueie os pontos fracos", "Use Jump + Triple Force Jump para subir na carapaça. Segure Cling (R3) para se agarrar enquanto ela se move. Localize as 3 fissuras vermelhas brilhantes na carapaça: direita inferior, centro (escondida sob minerais — quebre-os com Force Palm primeiro), esquerda superior (escondida sob mais minerais). Esfaqueie cada ponto fraco. Ela dispara jatos de vapor aleatoriamente — pode te arremessar no ar sem aviso, cure imediatamente ao cair."],
            ["Ataques no chão (entre tentativas de escalada)", "Ground Slam: ela ergue as garras e bate no chão — cria onda de choque. Recue ao ver as garras subir. Boulder Throw: arremessa pedras numa ampla frente — mova-se para o lado ou suba na carapaça para evitar. Fique fora do chão tanto quanto possível — a luta é ganhou nas costas dela, não embaixo."],
            ["Fase 2 — Destrua o pote mágico", "Ao esvaziar a barra azul de HP, a fase muda: uma jarra mágica fica exposta na cabeça dela. O carro de costas se torna mais caótico com geysers de vapor mais frequentes. Navegue lateralmente na carapaça evitando os geysers, alcance a jarra na cabeça e destrua-a com ataques normais. Quando quebrar — boss vencido."],
          ].map(([titulo, desc]) => (
            <div key={titulo} className="bg-card border border-red-500/20 rounded-xl p-4">
              <p className="font-bold text-sm mb-1">{titulo}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-3">Tabela de Bosses Opcionais</h3>
        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Boss</TableHead><TableHead>Localização / Missão</TableHead><TableHead>Recompensa Principal</TableHead><TableHead>Dificuldade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Queen Stoneback Crab","Stoneback Crab Wetlands, Delesyia / The Queen's Lake (Diederik)","Diederik vendor + itens raros","★★★★☆"],
                ["Queen Bismuth Oreback Crab","Delesyia (variante mineral da Stoneback Crab)","Itens raros + materiais únicos","★★★★☆"],
                ["Ator, Archon of Antumbra","The Abyss — último da série Antumbra (Sword, Staff, Spear, Ator)","Abyss Artifact + itens do set Antumbra (HP 11.000)","★★★★★"],
                ["Beloth, the Darksworn","The Abyss — World Boss (HP 13.000, Halberd)","Halberd raro + magia das trevas","★★★★★"],
                ["The Forgotten General","The Abyss — World Boss (HP 13.000)","Armor set completo do general","★★★★★"],
                ["Master Du","Cloister of Enlightenment, Hernand (secr.) — após Hexe Marie + T'rukan + Goyen","Wall climb + combos aéreos","★★★★★"],
                ["White Bear of the High Mountains","Fort Askelund, Pailune (quest 'Unending Threat')","Two-Hand Axe lendário","★★★★☆"],
                ["Tarandus the Ashen","Região oeste do Crimson Desert (próximo a Urdavah)","Tarandus Ashen War Hammer","★★★★☆"],
                ["Muskan — Emperor of the Bonepit","The Bonepit, Crimson Desert","Itens raros + título","★★★★☆"],
                ["Moren, the Mistwood Huntmaster","Mistwood — Hernand","Sword & Tower Shield exclusivos","★★★☆☆"],
                ["Marni's Excavatron","Karin Quarry, Hernand (sidequest 'Estate in Dismay')","Blueprints mecânicos","★★★☆☆"],
                ["Crimson Nightmare","Fort Perwin, Hernand (sidequest 'Continuing Concern')","Itens raros + recompensas únicas","★★★☆☆"],
                ["Queen Spider","Arboria Castle, Hernand (Queen of the Silkspun Citadel)","Materiais de aranha raros","★★★☆☆"],
                ["Walter Lanford","Fort Warspike, Hernand (sidequest 'Name Written in Blood')","Shotgun único + Equipamento de mercenário","★★★★☆"],
                ["Hemon Beindel","Hernand — facção","Two-Hand Sword + Abyss Artifact","★★★☆☆"],
                ["One-Eyed Jackal Captain","Crimson Desert — facção dos Jackals","Equipamento do clã + armas","★★★☆☆"],
                ["Black Fang","Forest of Wolves, Hernand (lobo lendário)","Possibilidade de domar como montaria","★★★☆☆"],
              ].map(([b,l,r,d]) => (
                <TableRow key={b}>
                  <TableCell className="font-medium">{b}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{l}</TableCell>
                  <TableCell className="text-sm">{r}</TableCell>
                  <TableCell className="text-sm font-bold">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Ranking dos Bosses Mais Difíceis (Comunidade)
        </h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
          {[
            ["🥇 1º — Myurdin Avatar de Umbra","Combinação de todos os ataques do jogo, dano de instakill, e você chega a ele após 2 bosses sem reabastecer. Unanimamente citado como o boss mais difícil."],
            ["🥈 2º — Goyen","Pode matar em 1 golpe. Arena no topo de uma torre. Não aparece no Conhecimento. Muitos jogadores não sabem que existe até pesquisar."],
            ["🥉 3º — Lucian Bastier","Forçado a jogar Damiane sem gear. Bloqueio constante + teletransporte na fase 2 + fogo no chão. O boss mais 'frustrante' segundo a maioria dos reviews."],
            ["4º — T'rukan the Ascended","O boss mais rápido do jogo. Timings de parry muito apertados. Letal para quem chega sem gear adequado."],
            ["5º — Kearush the Slayer","A primeira 'grande parede' do jogo. O maior número de desistências na primeira metade da campanha. 3 barras de HP."],
            ["6º — Ator, Archon of Antumbra","Boss final da série Antumbra. Opcional, mas considerado por muitos mais difícil que vários obrigatórios."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card border border-border rounded-xl">
              <p className="font-bold mb-1">{t}</p>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-red-400" />
          Dicas Universais para Todos os Bosses
        </h2>
        <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
          {[
            ["🥩 100–200 Carnes Grelhadas","Compre no vendedor em Hernand (marcado como '?' no mapa) ou abata animais na floresta. Cada animal dá 3-4 carnes. Cozinhe no caldeirão — Grilled Meat restaura 140 HP e usa 1 carne apenas. Para bosses de final de jogo, leve 200. Você pode comer enquanto ataca — spam de quick attacks + cura simultânea é a estratégia universal."],
            ["💊 Palmar Pills","Craftáveis com ingredientes básicos de alquimia. Permitem auto-revive com 30% de HP. Reserve para os bosses mais difíceis — especialmente a sequência final de 3 bosses (Caliburn → Avatar de Umbra → Umbra)."],
            ["⚔️ As 3 Armas Indispensáveis","Sword of the Lord (Kailok, Boss #2): melhor para quick attacks e ondas de longo alcance. Tauria Curved Sword (Crowcaller, Boss #6): melhor para heavy attacks e crowd control — par com Nature's Echo. Golden Vanguard (Gregor, Boss #14): essencial para Damiane contra Lucian Bastier."],
            ["🛡️ Armadura Pesada Sem Penalidade","Não há penalidade de peso em Crimson Desert. Use sempre a armadura de maior defesa disponível — plate armor comprada em Hernand e refinada. A diferença de refinamento nível 1–4 vs nível 6–7 é significativa em bosses de final de jogo."],
            ["🧠 Leia os Objetivos na Tela","Durante lutas com mecânicas especiais (Tenebrum, Queen Stoneback Crab, Umbra), os objetivos no canto inferior da tela mostram dicas sobre o que fazer. Muitos jogadores ignoram isso e ficam travados."],
            ["⚡ Nature's Echo é Essencial","Compre na árvore verde de Kliff (requer 3 Forward Slash + 3 Keen Senses). Duplica seus ataques pesados. Combinada com Tauria Curved Sword, é a combinação ofensiva mais forte do jogo — facilita Cassius Morten, Fortain e todos os bosses com escudo."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card border border-border rounded-xl">
              <p className="font-bold mb-1">{t}</p>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual boss te deu mais trabalho? ⚔️</h3>
          <p className="text-muted-foreground">Conta nos comentários — e se encontrou algum boss que não está aqui! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-bosses-guia-chefes" />
      <CommentSection postId="crimson-desert-bosses-guia-chefes" postTitle="Crimson Desert: Guia de Bosses — Onde Encontrar, Como Derrotar e Recompensas" />
      <AdLeaderboard className="my-8" />
    </article>
  );
};

export default CrimsonDesertBosses;
