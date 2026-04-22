export type BossTipo = "historia" | "opcional" | "secreto";

export interface BossMarker {
  id: string;
  numero: string;
  nome: string;
  tipo: BossTipo;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  /** Posição X em % (0-100) sobre a imagem do mapa (1178x1074) */
  x: number;
  /** Posição Y em % (0-100) sobre a imagem do mapa (1178x1074) */
  y: number;
  /** ID âncora no artigo (para scroll) */
  anchorId: string;
}

/**
 * Coordenadas TRIANGULADAS a partir das duas imagens oficiais do Map Genie
 * (mapgenie.io/crimson-desert/maps/pywel) — abril 2026:
 *
 *   - Imagem "História" (coroas, ~38 pins) → bosses tipo "historia" e "secreto"
 *   - Imagem "Opcionais" (caveiras, ~26 pins) → bosses tipo "opcional"
 *
 * Âncoras geográficas usadas para calibração (mapa 1178x1074):
 *   PAILUNE          — norte           ~14-32% / 14-32%
 *   SILVER WOLF MTN  — norte centro    ~26-30% / 22-26%
 *   HERNAND (label)  — SW              ~12-22% / 70-78%
 *   DEMENISS         — centro-sul      ~30-50% / 50-65%
 *   GORTHAK          — SW de Delesyia  ~36-44% / 70-74%
 *   DELESYIA (label) — sul             ~50-60% / 72-78%
 *   URDAVAH          — NE              ~62-72% / 24-30%
 *   TASHKALP         — NE              ~56-64% / 30-36%
 *   CRIMSON DESERT   — NE              ~64-86% / 18-46%
 *   THE OCEAN        — SE              ~72-90% / 55-75%
 */
export const crimsonDesertBosses: BossMarker[] = [
  // ============================================================
  // CAMPANHA PRINCIPAL — coroas roxas da imagem "História"
  // Cluster Hernand SW (10 pins entre x:8-22 / y:60-78)
  // ============================================================
  {
    id: "myurdin-prologo", numero: "P", nome: "Myurdin (Tutorial — Prólogo)",
    tipo: "historia", regiao: "Acampamento Greymane — Hernand (extremo oeste)",
    dificuldade: 1, recompensa: "Tutorial de combate básico",
    x: 9, y: 76, anchorId: "boss-myurdin-prologo",
  },
  {
    id: "matthias", numero: "1", nome: "Matthias",
    tipo: "historia", regiao: "Praça da cidade de Hernand (centro de Hernand)",
    dificuldade: 2, recompensa: "Skill Pump Kick",
    x: 14, y: 70, anchorId: "boss-matthias",
  },
  {
    id: "kailok", numero: "2", nome: "Kailok the Hornsplitter",
    tipo: "historia", regiao: "Goldleaf Guildhouse — Hernand (NE da cidade)",
    dificuldade: 2, recompensa: "Sword of the Lord + Seal of Greed",
    x: 19, y: 67, anchorId: "boss-kailok",
  },
  {
    id: "reed-devil", numero: "3", nome: "Reed Devil",
    tipo: "historia", regiao: "Mountain of Frozen Souls — Pailune (norte)",
    dificuldade: 3, recompensa: "Skill Swift Stab + Abyss Artifact",
    x: 25, y: 26, anchorId: "boss-reed-devil",
  },
  {
    id: "tenebrum", numero: "4", nome: "Tenebrum",
    tipo: "historia", regiao: "Scholastone Institute — fronteira Hernand/Pailune",
    dificuldade: 2, recompensa: "Key to the Spire of the Stars",
    x: 21, y: 56, anchorId: "boss-tenebrum",
  },
  {
    id: "kearush", numero: "5", nome: "Kearush the Slayer",
    tipo: "historia", regiao: "Hernand Castle (centro de Hernand)",
    dificuldade: 5, recompensa: "Arma exclusiva + Abyss Artifact raro",
    x: 13, y: 73, anchorId: "boss-kearush",
  },
  {
    id: "crowcaller", numero: "6", nome: "Draven the Crowcaller",
    tipo: "historia", regiao: "Crow's Nest — fronteira norte de Hernand",
    dificuldade: 4, recompensa: "Tauria Curved Sword + skill Aerial Roll",
    x: 28, y: 42, anchorId: "boss-crowcaller",
  },
  {
    id: "cassius-morten", numero: "7", nome: "Cassius Morten",
    tipo: "historia", regiao: "Calphade Castle — Hernand (oeste)",
    dificuldade: 3, recompensa: "Shield of Betrayal",
    x: 18, y: 62, anchorId: "boss-cassius-morten",
  },
  {
    id: "white-horn", numero: "8", nome: "White Horn, Shepherd of Souls",
    tipo: "historia", regiao: "Montanhas de Pailune (sul, fronteira com Hernand)",
    dificuldade: 4, recompensa: "Arma pesada exclusiva",
    x: 24, y: 32, anchorId: "boss-white-horn",
  },
  {
    id: "staglord", numero: "9", nome: "Saigord the Staglord",
    tipo: "historia", regiao: "Icemoor Castle Ruins — Pailune (sul)",
    dificuldade: 4, recompensa: "Turning Slash Expertise + Staglord's Shield",
    x: 30, y: 30, anchorId: "boss-staglord",
  },
  {
    id: "hexe-marie", numero: "10", nome: "Hexe Marie",
    tipo: "historia", regiao: "Floresta de Hernand (sul de Hernand)",
    dificuldade: 3, recompensa: "Abyss Artifact + necromancia",
    x: 16, y: 65, anchorId: "boss-hexe-marie",
  },
  // Pailune cluster norte (imagem História: ~18-32% / 14-30%)
  {
    id: "ludvig", numero: "11", nome: "Ludvig & Awakened Ludvig",
    tipo: "historia", regiao: "Pailune Castle (norte)",
    dificuldade: 4, recompensa: "Abyss Artifact + Lariat skill",
    x: 22, y: 18, anchorId: "boss-ludvig",
  },
  {
    id: "one-armed-ludvig", numero: "12", nome: "One-Armed Ludvig",
    tipo: "historia", regiao: "Kingshield Mountain — Pailune (norte)",
    dificuldade: 4, recompensa: "Progressão da história",
    x: 18, y: 15, anchorId: "boss-one-armed-ludvig",
  },
  {
    id: "myurdin-revanche", numero: "13", nome: "Myurdin (Revanche)",
    tipo: "historia", regiao: "Hills of No Return — fronteira Hernand/Pailune",
    dificuldade: 4, recompensa: "Cutscene importante + progressão",
    x: 32, y: 38, anchorId: "boss-myurdin-revanche",
  },
  // Demeniss centro — cluster denso da imagem História (12 pins entre x:30-50 / y:42-62)
  {
    id: "gregor", numero: "14", nome: "Gregor the Halberd of Carnage",
    tipo: "historia", regiao: "Fort Ironclad — Demeniss (oeste)",
    dificuldade: 4, recompensa: "Golden Vanguard",
    x: 36, y: 50, anchorId: "boss-gregor",
  },
  {
    id: "fortain", numero: "15", nome: "Fortain the Cursed Knight",
    tipo: "historia", regiao: "Thornbriar Fortress — Demeniss (centro)",
    dificuldade: 4, recompensa: "Armor set Fallen Kingdom",
    x: 42, y: 56, anchorId: "boss-fortain",
  },
  {
    id: "lucian-bastier", numero: "16", nome: "Lucian Bastier (Awakened)",
    tipo: "historia", regiao: "Spire of Clockwork — Demeniss (centro-leste)",
    dificuldade: 5, recompensa: "Spire of Clockwork Key",
    x: 47, y: 58, anchorId: "boss-lucian-bastier",
  },
  {
    id: "trukan", numero: "18", nome: "T'rukan the Ascended",
    tipo: "historia", regiao: "Serpent Marsh — Demeniss (leste)",
    dificuldade: 5, recompensa: "Abyss Artifact + raros",
    x: 50, y: 54, anchorId: "boss-trukan",
  },
  {
    id: "antumbra-sword", numero: "19", nome: "Antumbra's Sword",
    tipo: "historia", regiao: "Sanctum of Absolution — The Abyss (Demeniss)",
    dificuldade: 4, recompensa: "Vessel of Dark Pursuit",
    x: 38, y: 46, anchorId: "boss-antumbra-sword",
  },
  {
    id: "priscus", numero: "20", nome: "Priscus the Ancient",
    tipo: "historia", regiao: "Spire of Ringing Truth — Pailune (sul)",
    dificuldade: 4, recompensa: "Blessing of the Immortal",
    x: 34, y: 44, anchorId: "boss-priscus",
  },

  // ============================================================
  // SEQUÊNCIA FINAL — sul de Demeniss / Delesyia (imagem História)
  // ============================================================
  {
    id: "corrupted-caliburn", numero: "F1", nome: "Corrupted Caliburn",
    tipo: "historia", regiao: "The Abyss — sob Demeniss",
    dificuldade: 5, recompensa: "Espada +28 ataque",
    x: 44, y: 64, anchorId: "boss-corrupted-caliburn",
  },
  {
    id: "myurdin-umbra", numero: "F2", nome: "Lava Myurdin (Avatar de Umbra)",
    tipo: "historia", regiao: "Ashclaw Keep — Pailune (oeste)",
    dificuldade: 5, recompensa: "Progressão para boss final",
    x: 22, y: 28, anchorId: "boss-myurdin-umbra",
  },
  {
    id: "umbra", numero: "F3", nome: "Umbra (Boss Final)",
    tipo: "historia", regiao: "Mount Berge — Delesyia (clímax montado no dragão)",
    dificuldade: 5, recompensa: "Créditos + epílogo",
    x: 56, y: 74, anchorId: "boss-umbra",
  },

  // ============================================================
  // SECRETOS — não aparecem no diário Conhecimento
  // ============================================================
  {
    id: "goyen", numero: "S1", nome: "Goyen (Secreto)",
    tipo: "secreto", regiao: "Nest of Valor — Spire of the Sun (norte de Hernand)",
    dificuldade: 5, recompensa: "Meteor Kick + itens raros",
    x: 26, y: 48, anchorId: "boss-goyen",
  },
  {
    id: "master-du", numero: "S2", nome: "Master Du (Secreto)",
    tipo: "secreto", regiao: "Cloister of Enlightenment — Hernand (sul)",
    dificuldade: 5, recompensa: "Wall climb + combos especiais",
    x: 22, y: 76, anchorId: "boss-master-du",
  },

  // ============================================================
  // OPCIONAIS / WORLD BOSSES — caveiras roxas da imagem "Opcionais"
  // ============================================================

  // ---- Cluster Pailune norte (imagem Opcionais: ~14-30% / 18-32%)
  {
    id: "white-bear", numero: "★", nome: "White Bear of the High Mountains",
    tipo: "opcional", regiao: "Fort Askelund — Pailune (norte)",
    dificuldade: 4, recompensa: "Two-Hand Axe lendário",
    x: 16, y: 22, anchorId: "boss-opcionais",
  },
  {
    id: "moren", numero: "★", nome: "Moren, the Mistwood Huntmaster",
    tipo: "opcional", regiao: "Mistwood — fronteira Pailune/Hernand",
    dificuldade: 3, recompensa: "Sword & Tower Shield exclusivos",
    x: 28, y: 26, anchorId: "boss-opcionais",
  },
  {
    id: "pailune-wolf", numero: "★", nome: "Alpha do Silver Wolf Mountain",
    tipo: "opcional", regiao: "Silver Wolf Mountain — Pailune",
    dificuldade: 3, recompensa: "Pelt lendário + materiais raros",
    x: 22, y: 24, anchorId: "boss-opcionais",
  },
  {
    id: "pailune-frost-troll", numero: "★", nome: "Frost Troll de Pailune",
    tipo: "opcional", regiao: "Geleiras de Pailune (norte)",
    dificuldade: 4, recompensa: "Cristal de gelo + Two-Hand Mace",
    x: 14, y: 28, anchorId: "boss-opcionais",
  },

  // ---- Cluster Hernand W (imagem Opcionais: ~3-12% / 56-78%)
  {
    id: "marni-excavatron", numero: "★", nome: "Marni's Excavatron",
    tipo: "opcional", regiao: "Karin Quarry — Hernand (sidequest 'Estate in Dismay')",
    dificuldade: 3, recompensa: "Blueprints mecânicos",
    x: 12, y: 56, anchorId: "boss-opcionais",
  },
  {
    id: "crimson-nightmare", numero: "★", nome: "Crimson Nightmare",
    tipo: "opcional", regiao: "Fort Perwin — Hernand (sidequest 'Continuing Concern')",
    dificuldade: 3, recompensa: "Itens raros + recompensas únicas",
    x: 6, y: 60, anchorId: "boss-opcionais",
  },
  {
    id: "queen-spider", numero: "★", nome: "Queen Spider",
    tipo: "opcional", regiao: "Arboria Castle — Hernand (Queen of the Silkspun Citadel)",
    dificuldade: 3, recompensa: "Materiais de aranha raros",
    x: 4, y: 70, anchorId: "boss-opcionais",
  },
  {
    id: "walter-lanford", numero: "★", nome: "Walter Lanford",
    tipo: "opcional", regiao: "Fort Warspike — Hernand (sidequest 'Name Written in Blood')",
    dificuldade: 4, recompensa: "Shotgun único + Equipamento de mercenário",
    x: 5, y: 76, anchorId: "boss-opcionais",
  },
  {
    id: "black-fang", numero: "★", nome: "Black Fang",
    tipo: "opcional", regiao: "Forest of Wolves — Hernand (lobo lendário)",
    dificuldade: 3, recompensa: "Possibilidade de domar como montaria",
    x: 8, y: 64, anchorId: "boss-opcionais",
  },
  {
    id: "queen-stoneback", numero: "★", nome: "Queen Stoneback Crab",
    tipo: "opcional", regiao: "Redfox Forest — Hernand (Goddesses Lake)",
    dificuldade: 4, recompensa: "Diederik vendor + itens raros",
    x: 10, y: 58, anchorId: "boss-queen-stoneback",
  },

  // ---- Cluster Demeniss centro (imagem Opcionais: ~32-44% / 48-56%)
  {
    id: "ator-antumbra", numero: "★", nome: "Ator, Archon of Antumbra",
    tipo: "opcional", regiao: "The Abyss — Demeniss (último da série Antumbra)",
    dificuldade: 5, recompensa: "Abyss Artifact + itens do set Antumbra (HP 11.000)",
    x: 34, y: 50, anchorId: "boss-opcionais",
  },
  {
    id: "beloth", numero: "★", nome: "Beloth the Darksworn",
    tipo: "opcional", regiao: "The Abyss — Demeniss (HP 13.000)",
    dificuldade: 5, recompensa: "Halberd raro + magia das trevas",
    x: 40, y: 54, anchorId: "boss-opcionais",
  },
  {
    id: "forgotten-general", numero: "★", nome: "The Forgotten General",
    tipo: "opcional", regiao: "The Abyss — Demeniss (HP 13.000)",
    dificuldade: 5, recompensa: "Armor set completo do general",
    x: 44, y: 50, anchorId: "boss-opcionais",
  },

  // ---- Crimson Desert NE (imagem Opcionais: 7 pins entre x:60-86 / y:18-46)
  {
    id: "tarandus", numero: "★", nome: "Tarandus the Ashen",
    tipo: "opcional", regiao: "Crimson Desert — oeste (próximo a Urdavah)",
    dificuldade: 4, recompensa: "Tarandus Ashen War Hammer",
    x: 64, y: 30, anchorId: "boss-opcionais",
  },
  {
    id: "muskan", numero: "★", nome: "Muskan — Emperor of the Bonepit",
    tipo: "opcional", regiao: "The Bonepit — Crimson Desert",
    dificuldade: 4, recompensa: "Itens raros + título",
    x: 76, y: 38, anchorId: "boss-opcionais",
  },
  {
    id: "jackal-captain", numero: "★", nome: "One-Eyed Jackal Captain",
    tipo: "opcional", regiao: "Crimson Desert — facção dos Jackals",
    dificuldade: 3, recompensa: "Equipamento do clã + armas",
    x: 82, y: 24, anchorId: "boss-opcionais",
  },
  {
    id: "desert-scorpion", numero: "★", nome: "Escorpião Gigante do Deserto",
    tipo: "opcional", regiao: "Crimson Desert — dunas centrais",
    dificuldade: 4, recompensa: "Carapaça lendária + veneno raro",
    x: 70, y: 42, anchorId: "boss-opcionais",
  },
  {
    id: "desert-warlord", numero: "★", nome: "Warlord do Crimson Desert",
    tipo: "opcional", regiao: "Crimson Desert — fortaleza norte",
    dificuldade: 4, recompensa: "Cimitarra exclusiva + armadura nômade",
    x: 74, y: 22, anchorId: "boss-opcionais",
  },
  {
    id: "tashkalp-guardian", numero: "★", nome: "Guardião de Tashkalp",
    tipo: "opcional", regiao: "Tashkalp — fronteira NE do Crimson Desert",
    dificuldade: 4, recompensa: "Selo de Tashkalp + relíquia rara",
    x: 60, y: 34, anchorId: "boss-opcionais",
  },
  {
    id: "urdavah-champion", numero: "★", nome: "Campeão de Urdavah",
    tipo: "opcional", regiao: "Urdavah — NE do Crimson Desert",
    dificuldade: 4, recompensa: "Cetro de Urdavah + materiais raros",
    x: 86, y: 44, anchorId: "boss-opcionais",
  },

  // ---- Delesyia sul (imagem Opcionais: pin único ~50% / 78%)
  {
    id: "queen-bismuth", numero: "★", nome: "Queen Bismuth Oreback Crab",
    tipo: "opcional", regiao: "Delesyia — variante mineral da Stoneback Crab",
    dificuldade: 4, recompensa: "Itens raros + materiais únicos",
    x: 50, y: 78, anchorId: "boss-queen-bismuth",
  },
  {
    id: "hemon-beindel", numero: "★", nome: "Hemon Beindel",
    tipo: "opcional", regiao: "Hernand — facção (sul)",
    dificuldade: 3, recompensa: "Two-Hand Sword + Abyss Artifact",
    x: 46, y: 72, anchorId: "boss-opcionais",
  },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História", cor: "text-destructive-foreground", bg: "bg-destructive", border: "border-destructive" },
  opcional: { label: "Opcional", cor: "text-background", bg: "bg-geek", border: "border-geek" },
  secreto: { label: "Secreto", cor: "text-primary-foreground", bg: "bg-primary", border: "border-primary" },
};
