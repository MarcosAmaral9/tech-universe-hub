export type BossTipo = "historia" | "opcional" | "secreto";
export type BossMapa = "pywel" | "abyss";

export interface BossMarker {
  id: string;
  nome: string;
  tipo: BossTipo;
  mapa: BossMapa;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  dica: string;
  x: number;   // % sobre a imagem do mapa
  y: number;
  anchorId: string;
}

/**
 * Coordenadas calibradas pixel-a-pixel das 3 imagens de referência
 * fornecidas pelo usuário (MapGenie, abril 2026):
 *   img1 1843×1036 — todos os bosses, norte de Pywel
 *   img2 1849×973  — todos os bosses, sul de Pywel
 *   img3 1040×994  — bosses do Abismo
 *
 * img1: cobre y=0–87% do mapa, img2: cobre y=42–100%. Overlap=img2 prioritário.
 * Total: 49 pins em Pywel + 5 pins no Abismo.
 *
 * Nomes e dados verificados: gamingpromax.com (75 bosses), powerpyx.com,
 * gamerant.com, vulkk.com (abril 2026).
 *
 * Regiões no mapa 1178×1074px:
 *   Pailune (NO, neve):      x 10-50, y  2-42
 *   Hernand (O, início):     x  5-38, y 42-95
 *   Demeniss (centro):       x 35-70, y 38-82
 *   Delesyia (SE, industrial):x 62-95, y 60-95
 *   Crimson Desert (NE):     x 50-95, y  2-46
 */
export const crimsonDesertBosses: BossMarker[] = [

  // ── PAILUNE — 8 bosses ────────────────────────────────────────────────
  // Norte nevado (x 10-50, y 2-42). Pins 1,3,4,6,7,8,10 + pin9 na borda

  { id:"myurdin-prologo",    nome:"Myurdin (Prólogo)",               tipo:"historia", mapa:"pywel",
    regiao:"Vila de Pailune — Prólogo",                    dificuldade:1,
    recompensa:"Tutorial (luta roteirizada para derrota)",
    dica:"Luta roteirizada. É tecnicamente possível vencer, mas a derrota faz parte da narrativa. Serve para aprender bloqueio e esquiva.",
    x:41.0, y:4.9,  anchorId:"boss-myurdin-prologo" },

  { id:"one-armed-ludvig",   nome:"Ludvig com Um Braço",             tipo:"historia", mapa:"pywel",
    regiao:"Pailune — Capítulo 8 (jogando como Oongka)",   dificuldade:4,
    recompensa:"Progressão da história",
    dica:"Única luta em que você controla Oongka em vez de Kliff. Aproveite as habilidades únicas dela — são diferentes das de Kliff.",
    x:21.1, y:21.0, anchorId:"boss-one-armed-ludvig" },

  { id:"myurdin-lava",       nome:"Myurdin (Lava — Capítulo 7)",     tipo:"historia", mapa:"pywel",
    regiao:"Pailune — revancha com fogo",                  dificuldade:4,
    recompensa:"Cutscene importante + progressão",
    dica:"Revancha com Myurdin. Agora usa ataques de fogo e lava — muito mais perigoso. Prioritize esquiva sobre bloqueio.",
    x:37.5, y:18.8, anchorId:"boss-myurdin-lava" },

  { id:"praevus",            nome:"Praevus the Ancient",             tipo:"opcional", mapa:"pywel",
    regiao:"Pailune — missão opcional/faction (Ancient-class)", dificuldade:4,
    recompensa:"Blessing of the Immortal",
    dica:"Boss da classe Ancient. Ataques poderosos mas lentos e bem telegrafados. Parry perfeito abre grandes janelas de dano.",
    x:21.2, y:25.9, anchorId:"boss-praevus" },

  { id:"primus",             nome:"Primus the Ancient",              tipo:"opcional", mapa:"pywel",
    regiao:"Pailune — missão opcional/faction (Ancient-class)", dificuldade:4,
    recompensa:"Itens raros de Ancient",
    dica:"Semelhante a Praevus. Cuidado com os ataques de área — role para os lados, não para trás.",
    x:25.0, y:22.8, anchorId:"boss-primus" },

  { id:"white-horn",         nome:"White Horn, Shepherd of Souls",   tipo:"opcional", mapa:"pywel",
    regiao:"Pailune — perto de Snowhaven Hearth",          dificuldade:4,
    recompensa:"Eye of the Sky + Pillar of Wind + Infinite Arrows II",
    dica:"Vulnerável a fogo. Cria avalanches e ondas de gelo. Na última barra de vida, um aliado reaparece para ajudar.",
    x:29.9, y:30.0, anchorId:"boss-white-horn" },

  { id:"ator-antumbra",      nome:"Ator, Archon of Antumbra",        tipo:"opcional", mapa:"pywel",
    regiao:"Cloister of Ruination — Pailune (Antumbra Order)", dificuldade:5,
    recompensa:"Abyss Artifact poderoso (Overwhelming Being)",
    dica:"Um dos 3 bosses mais difíceis. Requer derrotar Sword+Spear+Staff e completar os 12 sub-quests de Darkness Over the Sanctum primeiro.",
    x:51.8, y:30.6, anchorId:"boss-ator-antumbra" },

  { id:"beloth",             nome:"Beloth the Darksworn",            tipo:"opcional", mapa:"pywel",
    regiao:"Hoenmark Ruins, extremo NO de Hernand — após Capítulo 6", dificuldade:5,
    recompensa:"Equipamento exclusivo (Overwhelming Being)",
    dica:"Overwhelming Being. Disponível após libertar Pailune. Exige armadura específica para sobreviver. Não inicie sem estar totalmente preparado.",
    x:15.2, y:34.4, anchorId:"boss-beloth" },

  // ── CRIMSON DESERT REGION — 7 bosses ─────────────────────────────────
  // NE árido (x 50-95, y 2-46). Pins 2,5,11,12,13,14 + Priscus na borda

  { id:"crimson-nightmare",  nome:"Crimson Nightmare",               tipo:"opcional", mapa:"pywel",
    regiao:"Região Crimson Desert — opcional",             dificuldade:4,
    recompensa:"Abyss Artifact + itens raros",
    dica:"Um dos encontros opcionais mais difíceis da região. Prepare-se com gear de alto nível antes de tentar.",
    x:78.5, y:9.0,  anchorId:"boss-crimson-nightmare" },

  { id:"priscus",            nome:"Priscus the Ancient",             tipo:"opcional", mapa:"pywel",
    regiao:"Spire of Ringing Truth — Crimson Desert",      dificuldade:4,
    recompensa:"Itens de Ancient class raros",
    dica:"Encontrado no topo da Spire of Ringing Truth. Mesmo padrão dos outros Ancients — ataques lentos e poderosos.",
    x:81.5, y:18.9, anchorId:"boss-priscus" },

  { id:"crookrock",          nome:"Crookrock Walker",                tipo:"opcional", mapa:"pywel",
    regiao:"Forebearer's Barrens — Crimson Desert",        dificuldade:4,
    recompensa:"Abyss Artifact + materiais raros",
    dica:"Fique sempre nos flancos — defesas lateral e traseira são muito mais fracas. Evite o ataque de carga frontal.",
    x:58.6, y:36.9, anchorId:"boss-crookrock" },

  { id:"desert-marauder",    nome:"Desert Marauder Rusten",          tipo:"opcional", mapa:"pywel",
    regiao:"Forebearer's Barrens — Crimson Desert",        dificuldade:3,
    recompensa:"Equipamento do deserto",
    dica:"Use Nature's Snare Retribution para destruir as rodas dele. Muito mais fácil imóvel.",
    x:63.6, y:36.3, anchorId:"boss-desert-marauder" },

  { id:"ogre-altar",         nome:"Ogre",                            tipo:"opcional", mapa:"pywel",
    regiao:"Desolate Megalith Altar — Crimson Desert",     dificuldade:4,
    recompensa:"Materiais raros de altar",
    dica:"Ogre colossal no altar megalítico. Stagger com Force Palm para interromper os golpes de área mais pesados.",
    x:73.1, y:33.8, anchorId:"boss-ogre-altar" },

  { id:"sizlek",             nome:"Sizlek the Insatiable",           tipo:"opcional", mapa:"pywel",
    regiao:"Região Crimson Desert — opcional",             dificuldade:4,
    recompensa:"Itens raros da região",
    dica:"Boss opcional do deserto. Abordagem padrão: fique nos flancos, stagger com Force Palm e cure ativamente.",
    x:77.7, y:38.1, anchorId:"boss-sizlek" },

  // ── HERNAND + DEMENISS NORTE — borda (pin 15, 16) ─────────────────────

  { id:"ludvig",             nome:"Ludvig",                          tipo:"historia", mapa:"pywel",
    regiao:"Montanhas de Demeniss — missão de facção",     dificuldade:3,
    recompensa:"Abyss Artifact + Lariat Skill",
    dica:"Após esvaziar a primeira barra, Ludvig engole um prisioneiro e se transforma. Conserve Palmer Pills para a segunda fase.",
    x:38.2, y:44.5, anchorId:"boss-ludvig" },

  { id:"tarandus",           nome:"Tarandus",                        tipo:"opcional", mapa:"pywel",
    regiao:"Red Smoke — base dos Black Bears",             dificuldade:4,
    recompensa:"Arma exclusiva",
    dica:"Boss da missão Red Smoke. Fique nos flancos — as defesas lateral e traseira são bem mais fracas que a frontal.",
    x:51.4, y:44.4, anchorId:"boss-tarandus" },

  // ── HERNAND — 15 bosses ───────────────────────────────────────────────
  // Região inicial (x 5-38, y 42-95). Pins 17,18,21,23,24,25,30,35,36,39,40,43,48,49 + Saigord

  { id:"matthias",           nome:"Matthias",                        tipo:"historia", mapa:"pywel",
    regiao:"Praça Central de Hernand — Capítulo 1",        dificuldade:2,
    recompensa:"Skill Pump Kick",
    dica:"Cavaleiro com 2 barras de vida. Combo leve 3× → combo pesado. Cure com Grilled Meat enquanto ataca.",
    x:18.5, y:51.3, anchorId:"boss-matthias" },

  { id:"kailok",             nome:"Kailok, the Hornsplitter",        tipo:"historia", mapa:"pywel",
    regiao:"Goldleaf Guildhouse — Hernand, Capítulo 2",    dificuldade:2,
    recompensa:"Sword of the Lord + Seal of Greed",
    dica:"Goblin com 1 barra. Contra-ataques com escudo (L1) são muito eficientes. Bloqueie as ondas mantendo stamina.",
    x:28.0, y:50.7, anchorId:"boss-kailok" },

  { id:"split-horn",         nome:"Split Horn",                      tipo:"opcional", mapa:"pywel",
    regiao:"Near Unicorn Cliffs — Hernand (Rakkash faction)", dificuldade:3,
    recompensa:"Equipamento do clã Rakkash",
    dica:"Goblin líder Branchmaster. Progrida na questline Rakkash para desbloqueá-lo.",
    x:33.1, y:54.0, anchorId:"boss-split-horn" },

  { id:"saigord",            nome:"Saigord, the Staglord",           tipo:"opcional", mapa:"pywel",
    regiao:"Icemoor Castle Ruins — Hernand",                dificuldade:4,
    recompensa:"Turning Slash Expertise + Staglord's Shield",
    dica:"3 barras de vida. Stagger com Force Palm e interrompa o Turning Slash quando ele iniciar a animação.",
    x: 9.5, y:58.0, anchorId:"boss-saigord" },

  { id:"giath",              nome:"Giath",                           tipo:"opcional", mapa:"pywel",
    regiao:"Hernand — opcional",                           dificuldade:3,
    recompensa:"Abyss Artifact + itens raros",
    dica:"Encontro opcional em Hernand. Abordagem padrão: esquive os ataques pesados e use Force Palm para stagger.",
    x:15.6, y:60.7, anchorId:"boss-giath" },

  { id:"reed-devil",         nome:"Reed Devil",                      tipo:"historia", mapa:"pywel",
    regiao:"Frozen Soul Mountain — Hernand, Capítulo 3",   dificuldade:3,
    recompensa:"Skill Swift Stab + Abyss Artifact",
    dica:"Luta de 3 fases. Fase 2: destrua os 5 totens usando Focused Shot e Charged Shot. Leve 40+ Grilled Meat.",
    x:29.1, y:59.7, anchorId:"boss-reed-devil" },

  { id:"hemon-beindel",      nome:"Hemon Beindel",                   tipo:"opcional", mapa:"pywel",
    regiao:"Fort Hellwood — Hernand (missão de facção)",   dificuldade:3,
    recompensa:"Two-Hand Sword + Abyss Artifact",
    dica:"Não aparece se você entrar no forte sem antes progredir na questline de facção. Complete-a primeiro.",
    x:27.1, y:67.3, anchorId:"boss-hemon-beindel" },

  { id:"walter-lanford",     nome:"Walter Lanford",                  tipo:"opcional", mapa:"pywel",
    regiao:"Hernand — missão de facção",                   dificuldade:4,
    recompensa:"Shotgun único + Name Written in Blood",
    dica:"Cuidado com a queda de estilhaços como perigo ambiental na arena. Use o terreno a seu favor.",
    x:32.6, y:75.6, anchorId:"boss-walter-lanford" },

  { id:"queen-stoneback",    nome:"Queen Stoneback Crab",            tipo:"opcional", mapa:"pywel",
    regiao:"Hernand Plains — missão de facção/side quest", dificuldade:4,
    recompensa:"Vendor Diederik desbloqueado + itens raros",
    dica:"Acumule stagger atacando os pontos fracos nas juntas do ventre dela. Desbloqueará o vendedor Diederik.",
    x:36.8, y:75.2, anchorId:"boss-queen-stoneback" },

  { id:"marni-excavatron",   nome:"Marni's Excavatron",              tipo:"opcional", mapa:"pywel",
    regiao:"Karin Quarry — Hernand (Estate in Dismay)",    dificuldade:3,
    recompensa:"Blueprints mecânicos",
    dica:"Sem marcador no mapa. Explore a seção mais funda da pedreira para ativar o encontro.",
    x:12.3, y:78.9, anchorId:"boss-marni-excavatron" },

  { id:"tenebrum",           nome:"Tenebrum",                        tipo:"historia", mapa:"pywel",
    regiao:"Scholastone Institute — Hernand",              dificuldade:2,
    recompensa:"Chave para a Spire of the Stars",
    dica:"Use Force Palm no ar (duplo Quadrado) para atacar o ponto fraco. Recarregue Spirit atrás dos pilares.",
    x:19.1, y:81.2, anchorId:"boss-tenebrum" },

  { id:"kearush",            nome:"Kearush, the Slayer",             tipo:"historia", mapa:"pywel",
    regiao:"Castelo de Hernand — Uninvited Guest",         dificuldade:4,
    recompensa:"Arma exclusiva + Abyss Artifact raro",
    dica:"DIFÍCIL — gorila gigante com 3 barras. Use Back Hang para se segurar e dar dano seguro. Leve 100-200 Grilled Meat.",
    x:17.4, y:87.2, anchorId:"boss-kearush" },

  { id:"queen-spider",       nome:"Queen Spider",                    tipo:"opcional", mapa:"pywel",
    regiao:"Arboria Castle — Hernand (Queen of the Silkspun Citadel)", dificuldade:3,
    recompensa:"Materiais de aranha raros",
    dica:"Use Nature's Retribution para defletir os projéteis de veneno de volta para ela. Arácnides menores podem ser ignorados.",
    x:22.7, y:90.1, anchorId:"boss-queen-spider" },

  { id:"cassius-morten",     nome:"Cassius Morten",                  tipo:"historia", mapa:"pywel",
    regiao:"Cidade de Calphade — Hernand (The Unyielding Shields)", dificuldade:3,
    recompensa:"Shield of Betrayal",
    dica:"Cavaleiro crimson com escudo. Use Nature's Grasp nos pilares da arena para dano massivo.",
    x:28.5, y:88.2, anchorId:"boss-cassius-morten" },

  // ── DEMENISS — 13 bosses ──────────────────────────────────────────────
  // Centro arcano (x 35-70, y 38-82). Pins 19,22,26,27,28,31,32,33,34,37 + Keglord, Reapers, Tristan

  { id:"gregor",             nome:"Gregor, the Halberd of Carnage",  tipo:"historia", mapa:"pywel",
    regiao:"Fort Ironclad — Demeniss, Capítulo 8",         dificuldade:4,
    recompensa:"Golden Vanguard",
    dica:"Cuidado com as armadilhas de flechas na parede da arena. Fique no centro para evitá-las.",
    x:61.4, y:49.1, anchorId:"boss-gregor" },

  { id:"trukan",             nome:"T'rukan, the Ascended",           tipo:"historia", mapa:"pywel",
    regiao:"Demeniss — missão principal",                  dificuldade:5,
    recompensa:"Abyss Artifact + itens raros",
    dica:"Um dos mais difíceis da campanha. Ataques rápidos e poderosos. Use Ground Surge para acumular stagger rapidamente.",
    x:63.8, y:54.1, anchorId:"boss-trukan" },

  { id:"antumbra-sword",     nome:"Antumbra's Sword",                tipo:"opcional", mapa:"pywel",
    regiao:"Área de Pailune/Abyss Sanctum — Darkness Over the Sanctum", dificuldade:4,
    recompensa:"Vessel of Dark Pursuit",
    dica:"Primeiro dos 3 bosses Antumbra. Derrote este, Spear e Staff para desbloquear Ator.",
    x:41.3, y:58.8, anchorId:"boss-antumbra-sword" },

  { id:"antumbra-spear",     nome:"Antumbra's Spear",                tipo:"opcional", mapa:"pywel",
    regiao:"Área de Pailune/Abyss Sanctum — Darkness Over the Sanctum", dificuldade:4,
    recompensa:"Lança das trevas + fragmento de Abyss",
    dica:"Segundo dos 3 bosses Antumbra. Mesma região do Sword — complete os sub-quests de Darkness Over the Sanctum.",
    x:45.9, y:59.5, anchorId:"boss-antumbra-spear" },

  { id:"fortain",            nome:"Fortain, the Cursed Knight",      tipo:"historia", mapa:"pywel",
    regiao:"Demeniss — Capítulo 8",                        dificuldade:4,
    recompensa:"Armor Set Fallen Kingdom",
    dica:"Invoca um aliado fantasma-cavaleiro. Você gerencia 2 oponentes — foque em Fortain e esquive do fantasma.",
    x:61.1, y:59.7, anchorId:"boss-fortain" },

  { id:"keglord-garnier",    nome:"Keglord Garnier Mk. XXIII",       tipo:"opcional", mapa:"pywel",
    regiao:"Demeniss — missão de facção",                  dificuldade:4,
    recompensa:"Peças mecânicas raras",
    dica:"Boss mecânico com múltiplas fases. Ataque os pontos de ventilação expostos durante os ataques de sobrecarga.",
    x:45.0, y:65.2, anchorId:"boss-keglord-garnier" },

  { id:"lucian-bastier",     nome:"Lucian Bastier",                  tipo:"historia", mapa:"pywel",
    regiao:"Cidade de Caliburn — Demeniss",                dificuldade:4,
    recompensa:"Chave da Spire of Clockwork",
    dica:"Lidera um exército de Righteous Inquisitors. Elimine os soldados ao redor antes de focar no líder.",
    x:49.1, y:66.2, anchorId:"boss-lucian-bastier" },

  { id:"skull-knight",       nome:"Skull Knight",                    tipo:"opcional", mapa:"pywel",
    regiao:"Demeniss — missão de facção",                  dificuldade:4,
    recompensa:"Armadura de cavaleiro rara",
    dica:"Cavaleiro não-morto com armadura pesada. Ataques de baixo e laterais causam mais dano — evite o confronto frontal.",
    x:69.8, y:64.8, anchorId:"boss-skull-knight" },

  { id:"awakened-lucian",    nome:"Lucian Bastier Desperto",         tipo:"historia", mapa:"pywel",
    regiao:"Demeniss — diretamente após Lucian Bastier",   dificuldade:5,
    recompensa:"Abyss Artifact + progressão",
    dica:"Lucian consome um Abyss Artifact e se transforma. Muito mais agressivo — use Palmer Pills se necessário.",
    x:56.8, y:72.3, anchorId:"boss-awakened-lucian" },

  { id:"stonewalker",        nome:"Stonewalker Antiquum",            tipo:"opcional", mapa:"pywel",
    regiao:"Gate of Truth — Demeniss (Guardian of the Ancient Ruins)", dificuldade:4,
    recompensa:"Earthsplitter + Abyss Artifact",
    dica:"Duas fases. Puxe o olho brilhante com Axiom Force para abrir janela de dano. Drops: Earthsplitter.",
    x:49.0, y:74.8, anchorId:"boss-stonewalker" },

  { id:"kutum",              nome:"Kutum",                           tipo:"opcional", mapa:"pywel",
    regiao:"Kingshield Dig Site — Demeniss (Beneath the Dig Site)", dificuldade:4,
    recompensa:"Artefato de escavação raro",
    dica:"Mesmo mecanismo de Stonewalker: puxe o olho com Axiom Force para interromper ataques e causar dano.",
    x:36.8, y:75.2, anchorId:"boss-kutum" },

  { id:"cubewalker",         nome:"Cubewalker Lithus",               tipo:"opcional", mapa:"pywel",
    regiao:"Southern Quarry — Demeniss (Liberate the Southern Quarry)", dificuldade:3,
    recompensa:"Materiais de construção raros",
    dica:"Use Axiom Force para puxar o cubo da cabeça. Enquanto ele está sem o cubo, é muito mais vulnerável.",
    x:41.7, y:87.1, anchorId:"boss-cubewalker" },

  { id:"gabriel-caliburn",   nome:"Gabriel Caliburn",                tipo:"historia", mapa:"pywel",
    regiao:"Demeniss — missão principal",                  dificuldade:4,
    recompensa:"Progressão da história",
    dica:"Duque desonrado transformado em revolucionário. Padrões telegrafados — pratique parries para facilitar.",
    x:46.9, y:86.9, anchorId:"boss-gabriel-caliburn" },

  // ── DELESYIA — 9 bosses ───────────────────────────────────────────────
  // SE industrial (x 62-95, y 60-95). Pins 20,29,33,38,41,42,46,47 + Thunder Tank

  { id:"hexe-marie",         nome:"Hexe Marie",                      tipo:"opcional", mapa:"pywel",
    regiao:"Floresta de Delesyia — opcional",              dificuldade:4,
    recompensa:"Abyss Artifact + itens de bruxa",
    dica:"Bruxa antiga com magia escura da natureza. Invoca vinhas e familiares espectrais. Destrua os totens da arena para enfraquecer seus escudos.",
    x:74.9, y:48.0, anchorId:"boss-hexe-marie" },

  { id:"runewalker-vordis",  nome:"Runewalker Vordis",               tipo:"opcional", mapa:"pywel",
    regiao:"Delesyia — opcional/faction (construto Abyss)", dificuldade:4,
    recompensa:"Runas raras + Abyss Artifact",
    dica:"Construto alimentado por Abyss. Use ataques pesados para quebrar o escudo de runas antes de atacar o núcleo.",
    x:78.0, y:58.2, anchorId:"boss-runewalker-vordis" },

  { id:"grave-walker",       nome:"Grave Walker",                    tipo:"opcional", mapa:"pywel",
    regiao:"Silent Falls Hideout — perto de Hook Rapids",  dificuldade:4,
    recompensa:"Pedra de golem rara",
    dica:"Golem de pedra. Encontrado em Silent Falls Hideout. Ataque os pontos brilhantes visíveis no corpo durante as pausas.",
    x:92.7, y:73.8, anchorId:"boss-grave-walker" },

  { id:"myurdin-final",      nome:"Myurdin (Forma Final)",           tipo:"historia", mapa:"pywel",
    regiao:"Delesyia — capítulos finais",                  dificuldade:5,
    recompensa:"Progressão para confronto final",
    dica:"Última forma de Myurdin. Combina todos os ataques das formas anteriores. Leve o máximo de comida possível.",
    x:57.5, y:81.6, anchorId:"boss-myurdin-final" },

  { id:"golden-star",        nome:"Golden Star",                     tipo:"historia", mapa:"pywel",
    regiao:"Sky Fortress — Delesyia",                      dificuldade:5,
    recompensa:"Abyss Artifact + arma exclusiva",
    dica:"Dragão mecânico dourado colossal. Luta montado em Wyvern. Use as javelinas nas laterais da arena para encher a barra de stagger.",
    x:78.7, y:82.3, anchorId:"boss-golden-star" },

  { id:"thunder-tank",       nome:"Thunder Tank",                    tipo:"opcional", mapa:"pywel",
    regiao:"Delesyia — missão de facção",                  dificuldade:4,
    recompensa:"Componentes de tanque raros",
    dica:"Máquina de guerra mais temida de Delesyia. Ataque as juntas das pernas para desacelerar e destrua os canhões laterais primeiro.",
    x:82.8, y:86.0, anchorId:"boss-thunder-tank" },

  { id:"mazul",              nome:"Mazul, the Dark Justiciar",       tipo:"opcional", mapa:"pywel",
    regiao:"Delesyia — missão de facção",                  dificuldade:4,
    recompensa:"Armadura de justiça sombria",
    dica:"Justiciar com poderes das trevas. Cuidado com os ataques de teleporte — ele reaparece sempre a 2-3m de distância.",
    x:89.1, y:86.5, anchorId:"boss-mazul" },

  { id:"umbra",              nome:"Umbra (Boss Final)",              tipo:"historia", mapa:"pywel",
    regiao:"Área Final — confronto definitivo",            dificuldade:5,
    recompensa:"Créditos + Epílogo + Conquista de jogo completo",
    dica:"Entidade alada tipo anjo. Atire bolas de fogo no olho central para encher o medidor de stagger, depois voe e use Force Palm no olho para burst de dano. Repita por 3 fases.",
    x:44.4, y:80.4, anchorId:"boss-umbra" },

  // ── SECRETOS (fora do Knowledge Tab) ─────────────────────────────────

  { id:"goyen",              nome:"Goyen (Secreto)",                 tipo:"secreto",  mapa:"pywel",
    regiao:"Nest of Valor — Hernand",                      dificuldade:5,
    recompensa:"Meteor Kick + itens únicos raros",
    dica:"NÃO aparece no Knowledge Tab. Localizado em área escondida no Nest of Valor. Explore paredes aparentemente sem saída.",
    x:35.0, y:70.0, anchorId:"boss-goyen" },

  { id:"master-du",          nome:"Master Du (Secreto)",             tipo:"secreto",  mapa:"pywel",
    regiao:"Cloister of Enlightenment — Hernand, Capítulo 9", dificuldade:5,
    recompensa:"Habilidade Wall Climb + combos especiais",
    dica:"NÃO aparece no Knowledge Tab. Pressione as 3 portas até ficarem douradas para abrir a câmara interna.",
    x:48.3, y:77.4, anchorId:"boss-master-du" },

  // ── THE ABYSS — 5 bosses ──────────────────────────────────────────────
  // Pins calibrados da img3 (1040×994px), abyss proprio sistema de coordenadas

  { id:"crowcaller",         nome:"Draven, the Crowcaller",          tipo:"historia", mapa:"abyss",
    regiao:"Crow's Nest — The Abyss (Black and White, Cap. 6)", dificuldade:4,
    recompensa:"Tauria Curved Sword",
    dica:"Pode se teletransportar e transformar em corvos. Use movimentos de agarrar para acumular stagger. Complete os puzzles da Spire of Soaring e Crescent Skybridge primeiro.",
    x:45.0, y:37.3, anchorId:"boss-crowcaller" },

  { id:"abyss-boss-2",       nome:"Chefe do Abismo",                 tipo:"historia", mapa:"abyss",
    regiao:"Sleet Isles — The Abyss",                      dificuldade:4,
    recompensa:"Abyss Artifact + progressão",
    dica:"Boss encontrado nas Sleet Isles do Abismo. Explore os caminhos aéreos da região para chegar até ele.",
    x:23.1, y:47.5, anchorId:"boss-abyss-2" },

  { id:"abyss-boss-3",       nome:"Chefe do Abismo",                 tipo:"historia", mapa:"abyss",
    regiao:"The Wanderer's Way — The Abyss",               dificuldade:4,
    recompensa:"Abyss Artifact + progressão",
    dica:"Boss do Wanderer's Way no Abismo. Use os portais flutuantes da região para se reposicionar durante a luta.",
    x:55.6, y:49.8, anchorId:"boss-abyss-3" },

  { id:"abyss-boss-4",       nome:"Chefe do Abismo",                 tipo:"historia", mapa:"abyss",
    regiao:"Triangle Ring — The Abyss",                    dificuldade:4,
    recompensa:"Abyss Artifact + progressão",
    dica:"Boss no Triangle Ring. A arena circular favorece táticas de kiting — mantenha distância e ataque após esquivas.",
    x:32.7, y:57.7, anchorId:"boss-abyss-4" },

  { id:"antumbra-staff",     nome:"Antumbra's Staff",                tipo:"opcional", mapa:"abyss",
    regiao:"The Abyss — Darkness Over the Sanctum",        dificuldade:4,
    recompensa:"Fragmento das trevas + Abyss Artifact",
    dica:"Terceiro da cadeia Antumbra (Sword→Spear→Staff→Ator). Complete todos os 12 sub-quests de Darkness Over the Sanctum para desbloquear.",
    x:52.2, y:68.5, anchorId:"boss-antumbra-staff" },
];

export const bossTipoMeta: Record<BossTipo, { label: string; bg: string; border: string }> = {
  historia: { label: "História",  bg: "bg-red-600",    border: "border-red-500"    },
  opcional: { label: "Opcional",  bg: "bg-blue-600",   border: "border-blue-500"   },
  secreto:  { label: "Secreto",   bg: "bg-yellow-500", border: "border-yellow-400" },
};
