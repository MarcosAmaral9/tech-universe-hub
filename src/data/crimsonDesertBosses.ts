export type BossTipo = "historia" | "opcional" | "secreto";

export interface BossMarker {
  id: string;
  numero: string;
  nome: string;
  tipo: BossTipo;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  /** Posição X em % (0-100) sobre a imagem do mapa (1178×1074px, ratio ~1.1:1) */
  x: number;
  /** Posição Y em % (0-100) sobre a imagem do mapa */
  y: number;
  anchorId: string;
}

/**
 * Dados verificados — fontes (abril 2026):
 *   gamingpromax.com, powerpyx.com, gamerant.com, beebom.com, vulkk.com
 *
 * MAPA 1178×1074px (quasi-quadrado, ratio 1.097):
 *   Hernand      (início, SO):       x 08-38, y 52-88
 *   Pailune      (norte, neve):      x 22-48, y 12-52
 *   Demeniss     (centro, arcano):   x 38-65, y 40-72
 *   Delesyia     (SE, tech):         x 55-82, y 62-88
 *   Crimson Desert (NE, árido):      x 52-90, y 10-44
 *   The Abyss    (portais):          espalhado
 */
export const crimsonDesertBosses: BossMarker[] = [
  // HERNAND (16 bosses) — região inicial sudoeste
  { id:"myurdin-prologo",   numero:"P",    nome:"Myurdin (Prólogo)",               tipo:"historia", regiao:"Pailune village area — Prólogo",                      dificuldade:1, recompensa:"Tutorial de combate (luta roteirizada para derrota)",        x:30, y:30, anchorId:"boss-myurdin-prologo" },
  { id:"matthias",          numero:"1",    nome:"Matthias",                        tipo:"historia", regiao:"Hernand Town Square — Capítulo 1",                    dificuldade:2, recompensa:"Skill Pump Kick",                                           x:22, y:68, anchorId:"boss-matthias" },
  { id:"kailok",            numero:"2",    nome:"Kailok the Hornsplitter",         tipo:"historia", regiao:"Goldleaf Guildhouse — Hernand, Capítulo 2",           dificuldade:2, recompensa:"Sword of the Lord + Seal of Greed",                        x:26, y:64, anchorId:"boss-kailok" },
  { id:"reed-devil",        numero:"3",    nome:"Reed Devil",                      tipo:"historia", regiao:"Frozen Soul Mountain — Hernand, Capítulo 3",          dificuldade:3, recompensa:"Skill Swift Stab + Abyss Artifact",                       x:20, y:60, anchorId:"boss-reed-devil" },
  { id:"tenebrum",          numero:"4",    nome:"Tenebrum",                        tipo:"historia", regiao:"Scholastone Institute — Hernand",                     dificuldade:2, recompensa:"Key to the Spire of the Stars",                           x:18, y:72, anchorId:"boss-tenebrum" },
  { id:"kearush",           numero:"5",    nome:"Kearush the Slayer",              tipo:"historia", regiao:"Hernand Castle — Uninvited Guest",                    dificuldade:4, recompensa:"Arma exclusiva + Abyss Artifact raro",                    x:24, y:66, anchorId:"boss-kearush" },
  { id:"crowcaller",        numero:"6",    nome:"Draven the Crowcaller",           tipo:"historia", regiao:"Crow's Nest — The Abyss, Capítulo 6",                 dificuldade:4, recompensa:"Tauria Curved Sword",                                    x:42, y:54, anchorId:"boss-crowcaller" },
  { id:"cassius-morten",    numero:"7",    nome:"Cassius Morten",                  tipo:"historia", regiao:"City of Calphade — Hernand",                          dificuldade:3, recompensa:"Shield of Betrayal",                                     x:28, y:70, anchorId:"boss-cassius-morten" },
  { id:"marni-excavatron",  numero:"8",    nome:"Marni's Excavatron",              tipo:"opcional", regiao:"Karin Quarry — Hernand (faction quest)",              dificuldade:3, recompensa:"Blueprints mecânicos (Estate in Dismay)",                 x:16, y:62, anchorId:"boss-marni-excavatron" },
  { id:"queen-spider",      numero:"9",    nome:"Queen Spider",                    tipo:"opcional", regiao:"Arboria Castle — Hernand (Queen's Nest quest)",        dificuldade:3, recompensa:"Materiais de aranha raros",                              x:12, y:70, anchorId:"boss-queen-spider" },
  { id:"walter-lanford",    numero:"10",   nome:"Walter Lanford",                  tipo:"opcional", regiao:"Hernand — faction quest",                             dificuldade:4, recompensa:"Shotgun único + Name Written in Blood",                   x:20, y:78, anchorId:"boss-walter-lanford" },
  { id:"hemon-beindel",     numero:"11",   nome:"Hemon Beindel",                   tipo:"opcional", regiao:"Fort Hellwood — Hernand (faction quest)",              dificuldade:3, recompensa:"Two-Hand Sword + Abyss Artifact",                        x:30, y:76, anchorId:"boss-hemon-beindel" },
  { id:"queen-stoneback",   numero:"12",   nome:"Queen Stoneback Crab",            tipo:"opcional", regiao:"Hernand Plains — side/faction quest",                 dificuldade:4, recompensa:"Diederik vendor + itens raros",                          x:34, y:80, anchorId:"boss-queen-stoneback" },
  { id:"staglord",          numero:"13",   nome:"Saigord the Staglord",            tipo:"opcional", regiao:"Icemoor Castle Ruins — Hernand",                      dificuldade:4, recompensa:"Turning Slash Expertise + Staglord's Shield",            x:14, y:76, anchorId:"boss-staglord" },
  { id:"giath",             numero:"14",   nome:"Giath",                           tipo:"opcional", regiao:"Hernand — opcional",                                  dificuldade:3, recompensa:"Abyss Artifact + itens raros",                           x:32, y:72, anchorId:"boss-giath" },
  { id:"split-horn",        numero:"15",   nome:"Split Horn",                      tipo:"opcional", regiao:"Near Unicorn Cliffs — Hernand (Rakkash faction)",      dificuldade:3, recompensa:"Equipamento do clã Rakkash",                            x:36, y:60, anchorId:"boss-split-horn" },

  // PAILUNE (13 bosses) — norte nevado
  { id:"myurdin-lava",      numero:"16",   nome:"Myurdin (Lava Myurdin)",          tipo:"historia", regiao:"Pailune — Capítulo 7 (rematch com fogo)",             dificuldade:4, recompensa:"Progressão da história + cutscene",                      x:32, y:36, anchorId:"boss-myurdin-lava" },
  { id:"ludvig",            numero:"17",   nome:"Ludvig",                          tipo:"historia", regiao:"Demeniss Mountains — faction quest",                  dificuldade:4, recompensa:"Abyss Artifact + Lariat skill",                          x:48, y:44, anchorId:"boss-ludvig" },
  { id:"one-armed-ludvig",  numero:"18",   nome:"One-Armed Ludvig",                tipo:"historia", regiao:"Pailune — Capítulo 8 (joga como Oongka)",             dificuldade:4, recompensa:"Progressão da história",                                x:28, y:26, anchorId:"boss-one-armed-ludvig" },
  { id:"white-bearclaw",    numero:"19",   nome:"White Bearclaw",                  tipo:"opcional", regiao:"Pailune — faction/opcional",                          dificuldade:3, recompensa:"Materiais raros de urso branco",                         x:24, y:34, anchorId:"boss-white-bearclaw" },
  { id:"white-bear",        numero:"20",   nome:"White Bear of the High Mountains",tipo:"opcional", regiao:"Snowhaven Hearth — Pailune (Skoghorn faction)",        dificuldade:4, recompensa:"Two-Hand Axe lendário + montura urso",                 x:26, y:20, anchorId:"boss-white-bear" },
  { id:"black-fang",        numero:"21",   nome:"Black Fang",                      tipo:"opcional", regiao:"Hernand North Gate → Howling Hollow",                 dificuldade:3, recompensa:"Shadow Claw + Abyss Artifact + Leebur's Soul",          x:22, y:56, anchorId:"boss-black-fang" },
  { id:"praevus",           numero:"22",   nome:"Praevus the Ancient",             tipo:"opcional", regiao:"Pailune — opcional/faction (Ancient-class)",           dificuldade:4, recompensa:"Blessing of the Immortal",                             x:36, y:22, anchorId:"boss-praevus" },
  { id:"primus",            numero:"23",   nome:"Primus the Ancient",              tipo:"opcional", regiao:"Pailune — opcional/faction (Ancient-class)",           dificuldade:4, recompensa:"Itens raros de Ancient",                               x:40, y:28, anchorId:"boss-primus" },
  { id:"white-horn",        numero:"24",   nome:"White Horn, Shepherd of Souls",   tipo:"opcional", regiao:"Pailune — perto de Snowhaven Hearth",                 dificuldade:4, recompensa:"Eye of the Sky + Pillar of Wind + Infinite Arrows II", x:30, y:44, anchorId:"boss-white-horn" },
  { id:"muskan-pailune",    numero:"25",   nome:"Muskan",                          tipo:"opcional", regiao:"Pailune — opcional",                                  dificuldade:4, recompensa:"Itens raros + título",                                  x:44, y:36, anchorId:"boss-muskan-pailune" },
  { id:"ator-antumbra",     numero:"26",   nome:"Ator, Archon of Antumbra",        tipo:"opcional", regiao:"Cloister of Ruination — Pailune (Antumbra Order)",    dificuldade:5, recompensa:"Abyss Artifact poderoso (requer Sword+Spear+Staff)",    x:46, y:32, anchorId:"boss-ator-antumbra" },
  { id:"antumbra-sword",    numero:"27",   nome:"Antumbra's Sword",                tipo:"opcional", regiao:"Pailune/Abyss Sanctum — Darkness Over the Sanctum",   dificuldade:4, recompensa:"Vessel of Dark Pursuit",                              x:38, y:40, anchorId:"boss-antumbra-sword" },
  { id:"antumbra-spear",    numero:"28",   nome:"Antumbra's Spear",                tipo:"opcional", regiao:"Pailune/Abyss Sanctum — Darkness Over the Sanctum",   dificuldade:4, recompensa:"Lança das trevas + fragmento de Abyss",               x:42, y:46, anchorId:"boss-antumbra-spear" },

  // DEMENISS (16 bosses) — centro arcano
  { id:"gregor",            numero:"29",   nome:"Gregor the Halberd of Carnage",   tipo:"historia", regiao:"Fort Ironclad — Demeniss, Capítulo 8",                dificuldade:4, recompensa:"Golden Vanguard",                                       x:50, y:54, anchorId:"boss-gregor" },
  { id:"fortain",           numero:"30",   nome:"Fortain the Cursed Knight",       tipo:"historia", regiao:"Demeniss — Capítulo 8 (invoca aliado fantasma)",      dificuldade:4, recompensa:"Armor set Fallen Kingdom",                              x:54, y:60, anchorId:"boss-fortain" },
  { id:"lucian-bastier",    numero:"31",   nome:"Lucian Bastier",                  tipo:"historia", regiao:"City of Caliburn — Demeniss",                         dificuldade:4, recompensa:"Spire of Clockwork Key",                               x:48, y:58, anchorId:"boss-lucian-bastier" },
  { id:"lucian-awakened",   numero:"32",   nome:"Awakened Lucian Bastier",         tipo:"historia", regiao:"Demeniss — segue diretamente após Lucian",            dificuldade:5, recompensa:"Abyss Artifact + progressão",                           x:50, y:62, anchorId:"boss-lucian-awakened" },
  { id:"trukan",            numero:"33",   nome:"T'rukan the Ascended",            tipo:"historia", regiao:"Demeniss — missão principal",                         dificuldade:5, recompensa:"Abyss Artifact + itens raros",                          x:58, y:52, anchorId:"boss-trukan" },
  { id:"gabriel-caliburn",  numero:"34",   nome:"Gabriel Caliburn",                tipo:"historia", regiao:"Demeniss — missão principal",                         dificuldade:4, recompensa:"Progressão da história",                                x:56, y:58, anchorId:"boss-gabriel-caliburn" },
  { id:"stonewalker",       numero:"35",   nome:"Stonewalker Antiquum",            tipo:"opcional", regiao:"Gate of Truth — Demeniss (Pillar of Light)",           dificuldade:4, recompensa:"Artefato arcano + Abyss Artifact",                     x:60, y:64, anchorId:"boss-stonewalker" },
  { id:"kutum",             numero:"36",   nome:"Kutum",                           tipo:"opcional", regiao:"Kingshield Dig Site — Demeniss",                       dificuldade:4, recompensa:"Artefato de escavação raro",                           x:44, y:66, anchorId:"boss-kutum" },
  { id:"cubewalker",        numero:"37",   nome:"Cubewalker Lithus",               tipo:"opcional", regiao:"Southern Quarry — Demeniss",                          dificuldade:3, recompensa:"Materiais de construção raros",                         x:52, y:68, anchorId:"boss-cubewalker" },

  // DELESYIA (representantes) — sudeste
  { id:"delesyia-golem",    numero:"★",    nome:"Iron Sentinel",                   tipo:"opcional", regiao:"Delesyia — fortaleza tecnológica",                    dificuldade:4, recompensa:"Armadura de ferro avançada",                            x:70, y:72, anchorId:"boss-delesyia-b2" },
  { id:"delesyia-colossus", numero:"★",    nome:"Steam Colossus",                  tipo:"opcional", regiao:"Delesyia — refinaria a vapor",                        dificuldade:4, recompensa:"Blueprints de máquina a vapor",                        x:74, y:80, anchorId:"boss-delesyia-b3" },

  // CRIMSON DESERT REGION — nordeste árido
  { id:"tarandus",          numero:"★",    nome:"Tarandus the Ashen",              tipo:"opcional", regiao:"Crimson Desert — Urdavah (oeste da região árida)",    dificuldade:4, recompensa:"Tarandus Ashen War Hammer",                            x:60, y:28, anchorId:"boss-tarandus" },
  { id:"muskan-bonepit",    numero:"★",    nome:"Muskan — Emperor of the Bonepit", tipo:"opcional", regiao:"The Bonepit — Crimson Desert region",                 dificuldade:4, recompensa:"Itens raros + título Emperor",                         x:76, y:24, anchorId:"boss-muskan-bonepit" },
  { id:"jackal-captain",    numero:"★",    nome:"One-Eyed Jackal Captain",         tipo:"opcional", regiao:"Crimson Desert — facção Jackals",                     dificuldade:3, recompensa:"Equipamento do clã Jackal",                            x:68, y:36, anchorId:"boss-jackal-captain" },
  { id:"crookrock",         numero:"★",    nome:"Crookrock Walker",                tipo:"opcional", regiao:"Crimson Desert — perto do Spire of the Sun",          dificuldade:4, recompensa:"Abyss Artifact + materiais raros",                     x:80, y:32, anchorId:"boss-crookrock" },

  // SECRETOS (não aparecem no Knowledge Tab)
  { id:"goyen",             numero:"S1",   nome:"Goyen (Secreto)",                 tipo:"secreto",  regiao:"Nest of Valor — Hernand (Spire of the Sun area)",    dificuldade:5, recompensa:"Meteor Kick + itens raros únicos",                     x:36, y:56, anchorId:"boss-goyen" },
  { id:"master-du",         numero:"S2",   nome:"Master Du (Secreto)",             tipo:"secreto",  regiao:"Cloister of Enlightenment — Hernand",                 dificuldade:5, recompensa:"Wall Climb habilidade + combos especiais",             x:28, y:62, anchorId:"boss-master-du" },

  // OVERWHELMING BEINGS — os 3 mais difíceis
  { id:"corrupted-caliburn",numero:"OB1",  nome:"Corrupted Caliburn",              tipo:"historia", regiao:"The Abyss — clímax da campanha",                      dificuldade:5, recompensa:"Espada lendária +28 ataque",                           x:48, y:84, anchorId:"boss-corrupted-caliburn" },
  { id:"myurdin-umbra",     numero:"OB2",  nome:"Lava Myurdin (Avatar de Umbra)",  tipo:"historia", regiao:"Ashclaw Keep — Pailune (sequência final)",             dificuldade:5, recompensa:"Progressão para boss final",                           x:34, y:38, anchorId:"boss-myurdin-umbra" },
  { id:"umbra",             numero:"OB3",  nome:"Umbra (Boss Final)",              tipo:"historia", regiao:"The Abyss — clímax montado no dragão",                dificuldade:5, recompensa:"Créditos + epílogo + conquista final",                  x:52, y:88, anchorId:"boss-umbra" },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História", cor: "text-destructive-foreground", bg: "bg-destructive", border: "border-destructive" },
  opcional: { label: "Opcional", cor: "text-background",             bg: "bg-geek",        border: "border-geek"       },
  secreto:  { label: "Secreto",  cor: "text-primary-foreground",     bg: "bg-primary",     border: "border-primary"    },
};
