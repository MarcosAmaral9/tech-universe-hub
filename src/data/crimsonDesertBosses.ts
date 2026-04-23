export type BossTipo = "historia" | "opcional" | "secreto";
export type BossMapa = "pywel" | "abyss";

export interface BossMarker {
  id: string;
  numero: string;
  nome: string;
  tipo: BossTipo;
  mapa: BossMapa;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  dica: string;
  /** Posição X em % (0-100) sobre a imagem do mapa */
  x: number;
  /** Posição Y em % (0-100) sobre a imagem do mapa */
  y: number;
  anchorId: string;
}

/**
 * Coordenadas calibradas a partir das 4 imagens de referência do MapGenie
 * fornecidas pelo usuário (abril 2026):
 *   - Imagem 1: chefes da história no mapa principal
 *   - Imagem 2: chefes da história no mapa do Abismo
 *   - Imagem 3: chefes do mundo/opcionais no mapa principal
 *   - Imagem 4: chefes do mundo/opcionais no mapa do Abismo
 *
 * Nomes e locais verificados em:
 *   powerpyx.com, gamingpromax.com, vulkk.com, gamerant.com, beebom.com
 *
 * Mapa Pywel (1178×1074px, ratio 1.097):
 *   Pailune  (NO, neve):     x 10-48, y  8-50
 *   Hernand  (O, início):    x  5-38, y 48-95
 *   Demeniss (centro):       x 35-65, y 40-80
 *   Delesyia (SE, mecânico): x 55-90, y 60-95
 *   Crimson Desert (NE):     x 50-90, y  8-50
 */
export const crimsonDesertBosses: BossMarker[] = [

  // ──────────────────────────────────────────────────────────────────────
  //  CHEFES DA HISTÓRIA — MAPA PRINCIPAL (Pywel)
  //  Ordem cronológica da campanha principal
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "myurdin-prologo", numero: "P", tipo: "historia", mapa: "pywel",
    nome: "Myurdin (Prólogo)",
    regiao: "Vila de Pailune — Prólogo",
    dificuldade: 1,
    recompensa: "Tutorial de combate (luta roteirizada para derrota)",
    dica: "Esta luta é roteirizada para você perder. Serve de tutorial de combate e apresenta Myurdin como antagonista.",
    x: 35.1, y: 10.3, anchorId: "boss-myurdin-prologo",
  },
  {
    id: "matthias", numero: "1", tipo: "historia", mapa: "pywel",
    nome: "Matthias",
    regiao: "Praça Central de Hernand — Capítulo 1",
    dificuldade: 2,
    recompensa: "Skill Pump Kick",
    dica: "Cavaleiro com 2 barras de vida. Fácil: combo leve (3× ataque rápido) → combo pesado. Cure com Grilled Meat enquanto ataca.",
    x: 22.9, y: 71.2, anchorId: "boss-matthias",
  },
  {
    id: "kailok", numero: "2", tipo: "historia", mapa: "pywel",
    nome: "Kailok, the Hornsplitter",
    regiao: "Goldleaf Guildhouse — Hernand, Capítulo 2",
    dificuldade: 2,
    recompensa: "Sword of the Lord + Seal of Greed",
    dica: "Goblin com 1 barra de vida. Foque em contra-ataques perfeitos com o escudo (L1). Bloqueie suas ondas de longo alcance mantendo stamina cheia.",
    x: 25.0, y: 61.9, anchorId: "boss-kailok",
  },
  {
    id: "reed-devil", numero: "3", tipo: "historia", mapa: "pywel",
    nome: "Reed Devil",
    regiao: "Frozen Soul Mountain — Hernand, Capítulo 3",
    dificuldade: 3,
    recompensa: "Skill Swift Stab + Abyss Artifact",
    dica: "3 barras de vida. Fase 2: destrua os 5 totens — use Focused Shot e Charged Shot. Leve 40+ Grilled Meat.",
    x: 14.5, y: 51.4, anchorId: "boss-reed-devil",
  },
  {
    id: "tenebrum", numero: "4", tipo: "historia", mapa: "pywel",
    nome: "Tenebrum",
    regiao: "Scholastone Institute — Hernand",
    dificuldade: 2,
    recompensa: "Chave para a Spire of the Stars",
    dica: "Boss-puzzle. Use Blinding Flash para revelar o ponto fraco, depois Force Palm no ar (double press Quadrado). Recarregue Spirit atrás dos pilares.",
    x: 28.8, y: 54.8, anchorId: "boss-tenebrum",
  },
  {
    id: "kearush", numero: "5", tipo: "historia", mapa: "pywel",
    nome: "Kearush, the Slayer",
    regiao: "Castelo de Hernand — Uninvited Guest",
    dificuldade: 4,
    recompensa: "Arma exclusiva + Abyss Artifact raro",
    dica: "DIFÍCIL — gorila gigante com 3 barras. Não tente bloquear. Esquive forward-right, 3 ataques rápidos, recue. Leve 100–200 Grilled Meat obrigatoriamente.",
    x: 11.7, y: 63.0, anchorId: "boss-kearush",
  },
  {
    id: "cassius-morten", numero: "6", tipo: "historia", mapa: "pywel",
    nome: "Cassius Morten",
    regiao: "Cidade de Calphade — Hernand",
    dificuldade: 3,
    recompensa: "Shield of Betrayal",
    dica: "Cavaleiro com escudo e 1 barra de vida. Equipe a Tauria Curved Sword e use Nature's Echo (habilidade verde) para duplicar ataques pesados.",
    x: 12.4, y: 85.5, anchorId: "boss-cassius-morten",
  },
  {
    id: "ludvig", numero: "7", tipo: "historia", mapa: "pywel",
    nome: "Ludvig",
    regiao: "Montanhas de Demeniss",
    dificuldade: 3,
    recompensa: "Abyss Artifact + Lariat Skill",
    dica: "Depois que a primeira barra de vida acaba, Ludvig engole um prisioneiro e se transforma. Conserve Palmer Pills para a segunda fase.",
    x: 24.1, y: 32.4, anchorId: "boss-ludvig",
  },
  {
    id: "awakened-ludvig", numero: "8", tipo: "historia", mapa: "pywel",
    nome: "Ludvig Desperto",
    regiao: "Montanhas de Demeniss — sequência de Ludvig",
    dificuldade: 4,
    recompensa: "Progressão da história",
    dica: "Transformação de Ludvig após consumir um prisioneiro. Muito mais agressivo. Mesma estratégia: esquive → combo rápido → cure.",
    x: 34.0, y: 43.0, anchorId: "boss-awakened-ludvig",
  },
  {
    id: "one-armed-ludvig", numero: "9", tipo: "historia", mapa: "pywel",
    nome: "One-Armed Ludvig",
    regiao: "Pailune — Capítulo 8",
    dificuldade: 4,
    recompensa: "Progressão da história",
    dica: "Única luta em que você controla Oongka. Mecânicas diferentes de Kliff — aproveite as habilidades únicas dela.",
    x: 22.0, y: 19.3, anchorId: "boss-one-armed-ludvig",
  },
  {
    id: "myurdin-lava", numero: "10", tipo: "historia", mapa: "pywel",
    nome: "Myurdin (Lava)",
    regiao: "Pailune — Capítulo 7",
    dificuldade: 4,
    recompensa: "Cutscene importante + progressão da história",
    dica: "Revancha com Myurdin, agora com ataques de fogo. Muito mais perigoso que o Prólogo. Priorize esquiva sobre bloqueio.",
    x: 31.6, y: 22.7, anchorId: "boss-myurdin-lava",
  },
  {
    id: "gregor", numero: "11", tipo: "historia", mapa: "pywel",
    nome: "Gregor, the Halberd of Carnage",
    regiao: "Fort Ironclad — Demeniss, Capítulo 8",
    dificuldade: 4,
    recompensa: "Golden Vanguard",
    dica: "Cuidado com as armadilhas de flechas na arena. Relativamente mais fácil que os bosses anteriores do capítulo.",
    x: 40.0, y: 57.8, anchorId: "boss-gregor",
  },
  {
    id: "fortain", numero: "12", tipo: "historia", mapa: "pywel",
    nome: "Fortain, the Cursed Knight",
    regiao: "Demeniss — Capítulo 8",
    dificuldade: 4,
    recompensa: "Armor Set Fallen Kingdom",
    dica: "Invoca um aliado fantasma-cavaleiro. Você gerencia 2 oponentes ao mesmo tempo — foque em Fortain e esquive do fantasma.",
    x: 56.5, y: 61.9, anchorId: "boss-fortain",
  },
  {
    id: "lucian-bastier", numero: "13", tipo: "historia", mapa: "pywel",
    nome: "Lucian Bastier",
    regiao: "Cidade de Caliburn — Demeniss",
    dificuldade: 4,
    recompensa: "Chave da Spire of Clockwork",
    dica: "Lidera um exército de Righteous Inquisitors. Elimine os soldados ao redor antes de focar no líder.",
    x: 46.9, y: 42.9, anchorId: "boss-lucian-bastier",
  },
  {
    id: "awakened-lucian", numero: "14", tipo: "historia", mapa: "pywel",
    nome: "Lucian Bastier Desperto",
    regiao: "Demeniss — segue diretamente após Lucian",
    dificuldade: 5,
    recompensa: "Abyss Artifact + progressão da história",
    dica: "Lucian consome um Abyss Artifact e se transforma. Muito mais perigoso — use Palmer Pills se necessário.",
    x: 52.1, y: 38.9, anchorId: "boss-awakened-lucian",
  },
  {
    id: "trukan", numero: "15", tipo: "historia", mapa: "pywel",
    nome: "T'rukan, the Ascended",
    regiao: "Demeniss — missão principal",
    dificuldade: 5,
    recompensa: "Abyss Artifact + itens raros",
    dica: "Um dos mais difíceis da campanha. Ataques rápidos e poderosos. Use Ground Surge para acumular o medidor de stun rapidamente.",
    x: 59.0, y: 55.7, anchorId: "boss-trukan",
  },
  {
    id: "gabriel-caliburn", numero: "16", tipo: "historia", mapa: "pywel",
    nome: "Gabriel Caliburn",
    regiao: "Demeniss — missão principal",
    dificuldade: 4,
    recompensa: "Progressão da história",
    dica: "Duque desonrado transformado em revolucionário violento. Padrões de ataque telegrafados — pratique as parries para facilitar.",
    x: 40.4, y: 68.9, anchorId: "boss-gabriel-caliburn",
  },
  {
    id: "golden-star", numero: "17", tipo: "historia", mapa: "pywel",
    nome: "Golden Star",
    regiao: "Sky Fortress — Delesyia",
    dificuldade: 5,
    recompensa: "Abyss Artifact + arma exclusiva",
    dica: "Dragão mecânico colossal. Luta montado em Wyvern. Use as javelinas nas laterais da arena para encher a barra de stagger.",
    x: 87.7, y: 79.2, anchorId: "boss-golden-star",
  },
  {
    id: "myurdin-final", numero: "18", tipo: "historia", mapa: "pywel",
    nome: "Myurdin (Forma Final)",
    regiao: "Delesyia — capítulos finais",
    dificuldade: 5,
    recompensa: "Progressão para confronto final",
    dica: "Forma mais poderosa do antagonista principal. Combina todos os ataques das formas anteriores. Leve o máximo de cura possível.",
    x: 74.4, y: 90.0, anchorId: "boss-myurdin-final",
  },
  {
    id: "umbra", numero: "F", tipo: "historia", mapa: "pywel",
    nome: "Umbra (Boss Final)",
    regiao: "Área Final — confronto definitivo",
    dificuldade: 5,
    recompensa: "Créditos + Epílogo + Conquista do jogo completo",
    dica: "Entidade alada tipo anjo. Atire bolas de fogo no olho central para encher o medidor de stagger, depois plane e use Force Palm no olho.",
    x: 52.0, y: 91.0, anchorId: "boss-umbra",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  CHEFE DA HISTÓRIA — ABISMO (The Abyss)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "crowcaller", numero: "A1", tipo: "historia", mapa: "abyss",
    nome: "Draven, the Crowcaller",
    regiao: "Crow's Nest — The Abyss, Capítulo 5–6",
    dificuldade: 4,
    recompensa: "Tauria Curved Sword",
    dica: "Pode se teletransportar e se transformar em corvos. Use movimentos de agarrar para acumular stagger. Lute no Crow's Nest depois de resolver os puzzles da Spire of Soaring e Crescent Skybridge.",
    x: 45.6, y: 39.2, anchorId: "boss-crowcaller",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  CHEFES OPCIONAIS / MUNDO — MAPA PRINCIPAL (Pywel)
  //  Posições calibradas a partir da Imagem 3 de referência
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "white-bear", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "White Bear of the High Mountains",
    regiao: "Snowhaven Hearth — Pailune (Skoghorn Tribe faction)",
    dificuldade: 4,
    recompensa: "Two-Hand Axe lendário + montura urso branco",
    dica: "Vulnerável a ataques de fogo. Cria avalanches e ondas de gelo. 3 barras de vida — na última, um aliado conhecido reaparece para ajudar.",
    x: 18.0, y: 27.4, anchorId: "boss-white-bear",
  },
  {
    id: "tarandus", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Tarandus the Ashen",
    regiao: "Crimson Desert — região de Urdavah",
    dificuldade: 4,
    recompensa: "Tarandus Ashen War Hammer",
    dica: "World boss do deserto árido. Fique nas flancos — defesas lateral e traseira são muito mais fracas.",
    x: 68.8, y: 29.5, anchorId: "boss-tarandus",
  },
  {
    id: "praevus", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Praevus the Ancient",
    regiao: "Pailune — missão opcional/faction (Ancient-class)",
    dificuldade: 4,
    recompensa: "Blessing of the Immortal",
    dica: "Boss da classe Ancient. Ataques poderosos mas lentos e telegrafados. Parry perfeito abre grandes janelas de combo.",
    x: 18.0, y: 36.4, anchorId: "boss-praevus",
  },
  {
    id: "ator-antumbra", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Ator, Archon of Antumbra",
    regiao: "Cloister of Ruination — Pailune (Antumbra Order)",
    dificuldade: 5,
    recompensa: "Abyss Artifact poderoso",
    dica: "Requer derrotar Antumbra's Sword, Spear e Staff + completar os 12 sub-quests de Darkness Over the Sanctum primeiro.",
    x: 35.6, y: 34.9, anchorId: "boss-ator-antumbra",
  },
  {
    id: "muskan-bonepit", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Muskan, Emperor of the Bonepit",
    regiao: "The Bonepit — região do Crimson Desert",
    dificuldade: 4,
    recompensa: "Itens raros + título Emperor",
    dica: "World boss do deserto. Ataques de área vasta — fique em movimento constante e aproveite suas invencibilidades de esquiva.",
    x: 71.2, y: 36.8, anchorId: "boss-muskan-bonepit",
  },
  {
    id: "black-fang", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Black Fang",
    regiao: "Portão Norte de Hernand → Howling Hollow",
    dificuldade: 3,
    recompensa: "Shadow Claw + Abyss Artifact + Leebur's Soul",
    dica: "Luta como humano — bloqueie e contra-ataque os golpes melee. Foge ao esvaziar a barra azul de vida; persiga até Howling Hollow para finalizar.",
    x: 9.4, y: 40.4, anchorId: "boss-black-fang",
  },
  {
    id: "antumbra-sword", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Antumbra's Sword",
    regiao: "Pailune / Abyss Sanctum — Darkness Over the Sanctum",
    dificuldade: 4,
    recompensa: "Vessel of Dark Pursuit",
    dica: "Primeiro da cadeia de 3 bosses Antumbra. Necessário para desbloquear Ator, Archon of Antumbra.",
    x: 44.3, y: 40.1, anchorId: "boss-antumbra-sword",
  },
  {
    id: "crookrock", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Crookrock Walker",
    regiao: "Forebearer's Barrens — Crimson Desert",
    dificuldade: 4,
    recompensa: "Abyss Artifact + materiais raros",
    dica: "Fique nos flancos — defesas lateral e traseira são muito mais fracas. Cuidado com o ataque de carga frontal.",
    x: 55.2, y: 42.6, anchorId: "boss-crookrock",
  },
  {
    id: "jackal-captain", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "One-Eyed Jackal Captain",
    regiao: "Crimson Desert — facção Jackals",
    dificuldade: 3,
    recompensa: "Equipamento do clã Jackal",
    dica: "Boss de facção. Progrida nas missões dos Jackals para desbloqueá-lo. Luta relativamente direta.",
    x: 65.0, y: 43.5, anchorId: "boss-jackal-captain",
  },
  {
    id: "kutum", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Kutum",
    regiao: "Kingshield Dig Site — Demeniss",
    dificuldade: 4,
    recompensa: "Artefato de escavação raro",
    dica: "Usa o mesmo mecanismo de Stonewalker Antiquum — puxe o olho brilhante com Axiom Force para interromper os ataques.",
    x: 55.3, y: 47.6, anchorId: "boss-kutum",
  },
  {
    id: "stonewalker", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Stonewalker Antiquum",
    regiao: "Gate of Truth — Demeniss (Pilar de Luz)",
    dificuldade: 4,
    recompensa: "Artefato arcano + Abyss Artifact",
    dica: "Duas fases. Puxe o olho brilhante com Axiom Force para abrir janela de dano. Missão: Guardian of the Ancient Ruins.",
    x: 59.5, y: 51.7, anchorId: "boss-stonewalker",
  },
  {
    id: "staglord", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Saigord, the Staglord",
    regiao: "Icemoor Castle Ruins — Hernand",
    dificuldade: 4,
    recompensa: "Turning Slash Expertise + Staglord's Shield",
    dica: "3 barras de vida. Use Force Palm para acumular stagger e interromper o Turning Slash quando ele começa a animação.",
    x: 6.9, y: 58.1, anchorId: "boss-staglord",
  },
  {
    id: "hemon-beindel", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Hemon Beindel",
    regiao: "Fort Hellwood — Hernand (missão de facção)",
    dificuldade: 3,
    recompensa: "Two-Hand Sword + Abyss Artifact",
    dica: "Não aparece se você entrar no forte sem progredir na missão de facção associada. Complete a questline antes de ir.",
    x: 31.6, y: 57.3, anchorId: "boss-hemon-beindel",
  },
  {
    id: "queen-spider", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Queen Spider",
    regiao: "Arboria Castle — Hernand (Queen's Nest)",
    dificuldade: 3,
    recompensa: "Materiais de aranha raros",
    dica: "Use Nature's Retribution para deflectir os projéteis de veneno de volta para ela. Os aracnídeos menores não precisam ser eliminados.",
    x: 5.7, y: 67.7, anchorId: "boss-queen-spider",
  },
  {
    id: "marni-excavatron", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Marni's Excavatron",
    regiao: "Karin Quarry — Hernand (Estate in Dismay)",
    dificuldade: 3,
    recompensa: "Blueprints mecânicos",
    dica: "Sem marcador no mapa — explore a seção mais funda da pedreira para ativar o encontro. Máquina reprogramada como arma de guerra.",
    x: 10.4, y: 74.5, anchorId: "boss-marni-excavatron",
  },
  {
    id: "cubewalker", numero: "★", tipo: "opcional", mapa: "pywel",
    nome: "Cubewalker Lithus",
    regiao: "Southern Quarry — Demeniss",
    dificuldade: 3,
    recompensa: "Materiais de construção raros",
    dica: "Use Axiom Force para puxar o cubo da cabeça do boss — isso interrompe seus ataques. Missão: Liberate the Southern Quarry.",
    x: 49.2, y: 75.8, anchorId: "boss-cubewalker",
  },

  // ──────────────────────────────────────────────────────────────────────
  //  SECRETOS (não aparecem no Knowledge Tab do jogo)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "goyen", numero: "S1", tipo: "secreto", mapa: "pywel",
    nome: "Goyen (Secreto)",
    regiao: "Nest of Valor — Hernand",
    dificuldade: 5,
    recompensa: "Meteor Kick + itens únicos raros",
    dica: "Boss secreto que NÃO aparece no Knowledge Tab. Localizado em uma área escondida no Nest of Valor. Descubra o caminho explorando paredes aparentemente sem saída.",
    x: 36.6, y: 56.3, anchorId: "boss-goyen",
  },
  {
    id: "master-du", numero: "S2", tipo: "secreto", mapa: "pywel",
    nome: "Master Du (Secreto)",
    regiao: "Cloister of Enlightenment — Hernand, Capítulo 9",
    dificuldade: 5,
    recompensa: "Habilidade Wall Climb + combos especiais",
    dica: "Sage que guiou você durante todo o capítulo. Pressione 3 portas até ficarem douradas para abrir a câmara interna. Ataques muito telegrafados — relativamente fácil.",
    x: 13.3, y: 84.9, anchorId: "boss-master-du",
  },

  {
    id: "golden-star-abyss", numero: "A2", tipo: "historia", mapa: "abyss",
    nome: "Golden Star",
    regiao: "Sky Fortress — Delesyia / The Abyss (Capítulo 11–12)",
    dificuldade: 5,
    recompensa: "Abyss Artifact + arma exclusiva",
    dica: "Dragão mecânico colossal — luta montado em Wyvern. Use as javelinas nas laterais da arena para encher a barra de stagger. Um dos encounters mais espetaculares do jogo.",
    x: 56.2, y: 51.1, anchorId: "boss-golden-star-abyss",
  },
  {
    id: "myurdin-avatar", numero: "A3", tipo: "historia", mapa: "abyss",
    nome: "Myurdin — Avatar de Umbra (Forma Final)",
    regiao: "The Abyss — sequência final (Capítulo 12)",
    dificuldade: 5,
    recompensa: "Progressão para confronto final com Umbra",
    dica: "Myurdin com o poder de Umbra — combina ataques de fogo, lava e trevas. Última forma antes do boss final. Leve Palmer Pills.",
    x: 33.5, y: 58.6, anchorId: "boss-myurdin-avatar",
  },
  {
    id: "umbra-abyss", numero: "A4", tipo: "historia", mapa: "abyss",
    nome: "Umbra (Boss Final)",
    regiao: "The Abyss — confronto final (Capítulo 12 — Journey's End)",
    dificuldade: 5,
    recompensa: "Créditos + epílogo + conquista de jogo completo",
    dica: "Entidade alada — atire bolas de fogo no olho central para encher o medidor de stagger. Ao esgotar, plane e use Force Palm no olho para causar burst de dano. Repita 3 fases.",
    x: 52.6, y: 69.0, anchorId: "boss-umbra-abyss",
  },
  {
    id: "antumbra-staff-abyss", numero: "★", tipo: "opcional", mapa: "abyss",
    nome: "Antumbra's Staff",
    regiao: "The Abyss — Sanctum / Darkness Over the Sanctum",
    dificuldade: 4,
    recompensa: "Fragmento das trevas + Abyss Artifact",
    dica: "Terceiro da cadeia Antumbra (Sword → Spear → Staff → Ator). Completa os 12 sub-quests de Darkness Over the Sanctum para acessar o boss final Ator.",
    x: 24.5, y: 49.8, anchorId: "boss-antumbra-staff-abyss",
  },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História",  cor: "text-white",  bg: "bg-red-600",    border: "border-red-500"    },
  opcional: { label: "Opcional",  cor: "text-white",  bg: "bg-blue-600",   border: "border-blue-500"   },
  secreto:  { label: "Secreto",   cor: "text-white",  bg: "bg-yellow-500", border: "border-yellow-400" },
};

export const bossTipoCorHex: Record<BossTipo, string> = {
  historia: "#dc2626",
  opcional: "#2563eb",
  secreto:  "#eab308",
};
