import RegionPageTemplate from "./RegionPageTemplate";
const CrimsonDesertRegionPage = () => (
  <RegionPageTemplate
    slug="crimson-desert" name="Crimson Desert" label="Deserto Sem Lei" iconKey="skull"
    accentClass="border-red-500/30 bg-red-500/5" badgeClass="bg-red-500/20 text-red-400"
    position="Nordeste de Pywel, além das Forebearer's Barrens — região mais perigosa do continente"
    biome="Deserto árido, dunas de areia vermelha, formações rochosas esculpidas pelo vento, oásis escassos e ruínas de civilizações extintas"
    climate="Extremamente árido. Temperatura diurna letal sem proteção solar adequada. Noites com queda brusca para sub-zero. Tempestades de areia sem aviso reduzem visibilidade a zero por horas."
    overview={[
      "O Crimson Desert dá nome ao jogo inteiro — e não é à toa. É a região mais perigosa, mais bela e mais misteriosa de Pywel. As areias vermelhas que cobrem o nordeste do continente escondem ruínas de uma civilização que precedeu todos os reinos atuais e que tinha acesso direto ao poder do Abyss.",
      "A região é praticamente sem lei: sem cidades estáveis, sem facções organizadas com poder real — apenas clãs nômades, caçadores de recompensas e criaturas que evoluíram para sobreviver em um dos ambientes mais hostis do mundo. Qualquer jogador que chegar ao Crimson Desert no estado médio será eliminado rapidamente.",
      "Narrativamente, o Crimson Desert é onde as maiores perguntas do lore são respondidas: quem construiu as Spires of Ringing Truth? O que são os Overwhelming Beings? Por que o Abyss sangra através das rochas vermelhas? A exploração completa da região leva 15-20 horas.",
    ]}
    lore={[
      "As areias vermelhas não são naturais — são a manifestação física de energia do Abyss cristalizada ao longo de milênios. Os estudiosos do Scholastone Institute estimam que o Crimson Desert foi o local de um experimento catastrófico de uma civilização extinta que tentou abrir uma porta permanente para o Abyss.",
      "Os Overwhelming Beings — os bosses mais poderosos do jogo — são guardiões dessa energia cristalizada. Beloth, Praevus e Ator não são monstros aleatórios: são construtos criados pela civilização extinta para proteger os segredos das Forebearer's Barrens de intrusos.",
      "O nome 'Crimson Desert' foi dado pelos primeiros colonizadores de Pywel que chegaram pelo norte e avistaram as areias avermelhadas brilhando ao sol — acreditando erroneamente que era sangue de batalhas antigas. A verdade, descoberta no final da campanha, é muito mais complexa.",
    ]}
    locations={[
      { name: "Forebearer's Barrens", desc: "Zona de transição entre Demeniss e o deserto propriamente dito. Ruínas de postos avançados dos colonizadores. Múltiplos encontros com Crookrock Walker e bandidos de elite." },
      { name: "Urdavah", desc: "Oásis central — o único ponto de abastecimento estável do Crimson Desert. Mercadores nômades trocam itens raros do deserto por suprimentos básicos. Missões de escolta partem daqui." },
      { name: "Tashkalp", desc: "Ruínas de uma cidade antiga no leste do deserto. Lar das melhores relíquias da civilização extinta. Altamente perigoso — inimigos de elite patrulham cada rua." },
      { name: "Spire of Ringing Truth", desc: "Uma das Spires que serve como ponto de fast travel. Também o local do boss Priscus the Ancient — um dos guardiões ancestrais. Ativar a Spire antes de enfrentá-lo é obrigatório." },
      { name: "The Bonepit", desc: "Depressão geológica no centro do deserto coberta de ossos de criaturas colossais. Muskan, Emperor of the Bonepit, domina este território." },
      { name: "Desolate Megalith Altar", desc: "Altar de pedra colossal usado em rituais da civilização extinta. O Ogre que o guarda é em si um construto de proteção ao altar." },
      { name: "Sandwalker Ruins", desc: "Sistema de túneis subterrâneos que cruzam o deserto — a única forma segura de cruzar durante tempestades de areia. Habitados por Sandwalkers, criaturas escorpião de 4 metros." },
    ]}
    bosses={[
      {
        name: "Tarandus",
        difficulty: 4,
        desc: "World boss da missão Red Smoke na base dos Black Bears do deserto. 3 barras de vida com ataques de areia e investidas que levantam nuvens que bloqueiam visão.",
        reward: "Tarandus Ashen War Hammer (arma única)",
        tip: "Fique sempre nos flancos — as defesas lateral e traseira são 40% mais fracas que a frontal. Quando ele levanta areia, corra para fora da nuvem imediatamente.",
      },
      {
        name: "Muskan, Emperor of the Bonepit",
        difficulty: 4,
        desc: "Colosso humanoide com armadura feita de ossos de criaturas do deserto. Usa os ossos ao redor da arena como projéteis e invoca criaturas menores durante a luta.",
        reward: "Itens raros + título exclusivo Emperor of the Bonepit",
        tip: "As criaturas invocadas explodem ao morrer — use isso a seu favor, atirando-as contra Muskan com Force Palm. Mantenha-se em movimento constante.",
      },
      {
        name: "Crookrock Walker",
        difficulty: 4,
        desc: "Construto de rocha das Forebearer's Barrens. 2 barras de vida. Usa ataques de carga frontal devastadores e arremessa fragmentos de rocha em arco.",
        reward: "Abyss Artifact + materiais de Forebearer",
        tip: "Nunca fique na frente — sempre posicione lateralmente. Quando ele levanta o braço para carga, role diagonal para trás-direita.",
      },
      {
        name: "Priscus the Ancient",
        difficulty: 4,
        desc: "Guardião ancestral do topo da Spire of Ringing Truth. Similar a outros Ancients mas com ataques de areia que drenam stamina. 2 fases com transição dramática.",
        reward: "Materiais de Ancient class raros",
        tip: "Mesmo padrão dos outros Ancients: ataques lentos e telegrafados. Parry perfeito abre 4 segundos de janela. Ative a Spire abaixo antes de subir — serve como checkpoint.",
      },
      {
        name: "Ogre (Desolate Megalith Altar)",
        difficulty: 4,
        desc: "Golem-Ogre construto de 3 barras. Guarda o altar com fanatismo — não recua nem hesita. Arena pequena com pouco espaço para manobra.",
        reward: "Materiais de altar ancestral únicos",
        tip: "Use os pilares da arena para bloquear linha de visão e recuperar stamina. Force Palm acumula stagger mais rápido que ataques normais aqui.",
      },
      {
        name: "Sizlek the Insatiable",
        difficulty: 4,
        desc: "Criatura do deserto com 2 barras de vida. Velocidade alta e ataques encadeados que não dão espaço de cura. Uma das lutas mais frenéticas do jogo.",
        reward: "Materiais raros de criatura do deserto",
        tip: "Esquiva para frente (em direção ao boss) durante os ataques — esquiva para trás é perseguida. Aproveite os 2 segundos de pausa que ele faz após cada combo de 5 golpes.",
      },
    ]}
    factions={[
      { name: "Jackals (Clã do Deserto)", desc: "Clã nômade semi-hostil. Missões de facção incluem caçadas, saques de ruínas e transporte. Aliança oferece mapas de locais secretos com materiais raros." },
      { name: "Nômades de Urdavah", desc: "Mercadores independentes no oásis. Únicos vendedores de itens exclusivos do deserto. Preços altos mas itens impossíveis de encontrar em outro lugar." },
      { name: "Guardiões das Spires", desc: "Ordem monástica que mantém as Spires de Ringing Truth. Missões de proteção das estruturas desbloqueiam fast travel prioritário." },
    ]}
    tips={[
      "Equipe armadura com desert resistance antes de entrar — sem ela, a temperatura diurna drena a barra de vida gradualmente.",
      "Carregue sempre 10+ Water Flasks — cada tempestade de areia dura 5-15 minutos e você perde resistência gradualmente sem hidratação.",
      "Ative TODAS as Spires de Ringing Truth encontradas imediatamente — atravessar o deserto a pé entre pontos distantes demora 20+ minutos.",
      "Os Sandwalker Ruins são a rota mais segura durante tempestades — aprenda os túneis cedo para não ficar preso na superfície.",
      "Tashkalp tem os drops mais raros do jogo — mas os inimigos de elite lá dentro exigem equipamento endgame. Não tente antes dos capítulos finais.",
      "Os Jackals têm missões de escolta que revelam localizações de cache secretos — complete pelo menos 5 delas para acessar o inventário completo do nômade Urdavah.",
      "A luta contra Muskan no Bonepit tem uma mecânica oculta: se você matar 10 criaturas menores com Force Palm antes de derrotá-lo, ganha o título exclusivo.",
    ]}
    seo={{
      title: "Crimson Desert (Região) — Guia Completo do Deserto de Pywel",
      description: "Guia completo da região Crimson Desert em Crimson Desert o jogo: Forebearer's Barrens, Urdavah, Tashkalp, bosses Tarandus, Muskan, Priscus e Crookrock Walker, lore das civilizações extintas.",
      keywords: "Crimson Desert região, Crimson Desert mapa, Forebearer's Barrens, Urdavah oásis, Tashkalp ruínas, Tarandus boss, Muskan boss, Priscus Ancient, Crookrock Walker, Spire of Ringing Truth, Pywel nordeste, deserto Pywel",
    }}
  />
);
export default CrimsonDesertRegionPage;
