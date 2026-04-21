export type BossTipo = "historia" | "opcional" | "secreto";

export interface BossMarker {
  id: string;
  numero: string;
  nome: string;
  tipo: BossTipo;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  /** Posição X em % (0-100) sobre a imagem do mapa */
  x: number;
  /** Posição Y em % (0-100) sobre a imagem do mapa */
  y: number;
  /** ID âncora no artigo (para scroll) */
  anchorId: string;
}

/**
 * Localizações reais dos chefes — fontes cruzadas:
 *  - pywel.app (oficial Pywel)
 *  - thegameswiki.com/crimson-desert/wiki/bosses
 *  - crimsondesert.co/wiki/bosses
 *
 * Mapa de Pywel — referência visual das regiões:
 *  - HERNAND: sudoeste (x ~14-32, y ~58-78)
 *  - PAILUNE: noroeste, inclui Silver Wolf Mountain (x ~26-42, y ~22-46)
 *  - DEMENISS: centro (x ~42-60, y ~46-66)
 *  - DELESYIA: sul/sudeste (x ~58-76, y ~70-84)
 *  - CRIMSON DESERT: nordeste — Urdavah, Tashkalp, Varnia (x ~58-86, y ~16-44)
 *  - THE ABYSS: portais e cripta sul (x ~46-56, y ~80-92)
 */
export const crimsonDesertBosses: BossMarker[] = [
  // ===== CAMPANHA PRINCIPAL =====
  { id: "myurdin-prologo", numero: "P", nome: "Myurdin (Tutorial — Prólogo)", tipo: "historia",
    regiao: "Acampamento Greymane — Hernand (oeste)", dificuldade: 1,
    recompensa: "Tutorial de combate básico", x: 16, y: 70, anchorId: "boss-myurdin-prologo" },

  { id: "matthias", numero: "1", nome: "Matthias", tipo: "historia",
    regiao: "Praça da cidade de Hernand", dificuldade: 2,
    recompensa: "Skill Pump Kick", x: 22, y: 70, anchorId: "boss-matthias" },

  { id: "kailok", numero: "2", nome: "Kailok the Hornsplitter", tipo: "historia",
    regiao: "Goldleaf Guildhouse — Hernand", dificuldade: 2,
    recompensa: "Sword of the Lord + Seal of Greed", x: 26, y: 66, anchorId: "boss-kailok" },

  { id: "reed-devil", numero: "3", nome: "Reed Devil", tipo: "historia",
    regiao: "Frozen Soul Mountain — Hernand", dificuldade: 3,
    recompensa: "Skill Swift Stab + Abyss Artifact", x: 30, y: 56, anchorId: "boss-reed-devil" },

  { id: "tenebrum", numero: "4", nome: "Tenebrum", tipo: "historia",
    regiao: "Scholastone Institute — Hernand", dificuldade: 2,
    recompensa: "Key to the Spire of the Stars", x: 34, y: 62, anchorId: "boss-tenebrum" },

  { id: "kearush", numero: "5", nome: "Kearush the Slayer", tipo: "historia",
    regiao: "Castelo de Hernand", dificuldade: 5,
    recompensa: "Arma exclusiva + Abyss Artifact raro", x: 18, y: 74, anchorId: "boss-kearush" },

  { id: "crowcaller", numero: "6", nome: "Draven the Crowcaller", tipo: "historia",
    regiao: "Crow's Nest — Abyss (Hernand norte)", dificuldade: 4,
    recompensa: "Tauria Curved Sword", x: 36, y: 50, anchorId: "boss-crowcaller" },

  { id: "cassius-morten", numero: "7", nome: "Cassius Morten", tipo: "historia",
    regiao: "Cidade de Calphade — Hernand", dificuldade: 3,
    recompensa: "Shield of Betrayal", x: 28, y: 60, anchorId: "boss-cassius-morten" },

  { id: "white-horn", numero: "8", nome: "White Horn, Shepherd of Souls", tipo: "opcional",
    regiao: "Hernand (norte) — montanhas", dificuldade: 4,
    recompensa: "Arma pesada exclusiva", x: 32, y: 46, anchorId: "boss-white-horn" },

  { id: "staglord", numero: "9", nome: "Saigord the Staglord", tipo: "opcional",
    regiao: "Icemoor Castle Ruins — Hernand", dificuldade: 4,
    recompensa: "Turning Slash Expertise + Staglord's Shield", x: 24, y: 60, anchorId: "boss-staglord" },

  { id: "hexe-marie", numero: "10", nome: "Hexe Marie", tipo: "historia",
    regiao: "Floresta de Hernand", dificuldade: 3,
    recompensa: "Abyss Artifact + necromancia", x: 20, y: 62, anchorId: "boss-hexe-marie" },

  { id: "ludvig", numero: "11", nome: "Ludvig & Awakened Ludvig", tipo: "historia",
    regiao: "Pailune Castle", dificuldade: 4,
    recompensa: "Abyss Artifact + Lariat skill", x: 32, y: 32, anchorId: "boss-ludvig" },

  { id: "one-armed-ludvig", numero: "12", nome: "One-Armed Ludvig", tipo: "historia",
    regiao: "Kingshield Mountain — Pailune", dificuldade: 4,
    recompensa: "Progressão da história", x: 28, y: 26, anchorId: "boss-one-armed-ludvig" },

  { id: "myurdin-revanche", numero: "13", nome: "Myurdin (Revanche)", tipo: "historia",
    regiao: "Hills of No Return — Hernand (norte)", dificuldade: 4,
    recompensa: "Cutscene importante + progressão", x: 38, y: 44, anchorId: "boss-myurdin-revanche" },

  { id: "gregor", numero: "14", nome: "Gregor the Halberd of Carnage", tipo: "historia",
    regiao: "Fort Ironclad — Demeniss", dificuldade: 4,
    recompensa: "Golden Vanguard", x: 50, y: 54, anchorId: "boss-gregor" },

  { id: "fortain", numero: "15", nome: "Fortain the Cursed Knight", tipo: "historia",
    regiao: "Thornbriar Fortress — Demeniss", dificuldade: 4,
    recompensa: "Armor set Fallen Kingdom", x: 54, y: 58, anchorId: "boss-fortain" },

  { id: "lucian-bastier", numero: "16", nome: "Lucian Bastier (Awakened)", tipo: "historia",
    regiao: "Spire of Clockwork — Demeniss", dificuldade: 5,
    recompensa: "Spire of Clockwork Key", x: 48, y: 62, anchorId: "boss-lucian-bastier" },

  { id: "goyen", numero: "17", nome: "Goyen (Secreto)", tipo: "secreto",
    regiao: "Nest of Valor — Hernand (Spire of the Sun)", dificuldade: 5,
    recompensa: "Meteor Kick + itens raros", x: 40, y: 56, anchorId: "boss-goyen" },

  { id: "trukan", numero: "18", nome: "T'rukan the Ascended", tipo: "historia",
    regiao: "Serpent Marsh — Demeniss", dificuldade: 5,
    recompensa: "Abyss Artifact + raros", x: 56, y: 50, anchorId: "boss-trukan" },

  { id: "master-du", numero: "19", nome: "Master Du (Secreto)", tipo: "secreto",
    regiao: "Cloister of Enlightenment — Hernand", dificuldade: 5,
    recompensa: "Wall climb + combos especiais", x: 32, y: 68, anchorId: "boss-master-du" },

  { id: "antumbra-sword", numero: "20", nome: "Antumbra's Sword", tipo: "opcional",
    regiao: "Sanctum of Absolution — Hernand (Abyss)", dificuldade: 4,
    recompensa: "Vessel of Dark Pursuit", x: 42, y: 52, anchorId: "boss-antumbra-sword" },

  { id: "priscus", numero: "21", nome: "Priscus the Ancient", tipo: "opcional",
    regiao: "Spire of Ringing Truth — Pailune", dificuldade: 4,
    recompensa: "Blessing of the Immortal", x: 36, y: 36, anchorId: "boss-priscus" },

  // ===== SEQUÊNCIA FINAL (THE ABYSS) =====
  { id: "corrupted-caliburn", numero: "F1", nome: "Corrupted Caliburn", tipo: "historia",
    regiao: "The Abyss — Hernand", dificuldade: 5,
    recompensa: "Espada +28 ataque", x: 46, y: 82, anchorId: "boss-corrupted-caliburn" },

  { id: "myurdin-umbra", numero: "F2", nome: "Lava Myurdin (Avatar de Umbra)", tipo: "historia",
    regiao: "Ashclaw Keep — Pailune", dificuldade: 5,
    recompensa: "Progressão para boss final", x: 30, y: 40, anchorId: "boss-myurdin-umbra" },

  { id: "umbra", numero: "F3", nome: "Umbra (Boss Final)", tipo: "historia",
    regiao: "The Abyss — clímax montado no dragão", dificuldade: 4,
    recompensa: "Créditos + epílogo", x: 50, y: 88, anchorId: "boss-umbra" },

  // ===== OPCIONAIS / WORLD BOSSES =====
  { id: "queen-stoneback", numero: "★", nome: "Queen Stoneback Crab", tipo: "opcional",
    regiao: "Stoneback Crab Wetlands — Delesyia", dificuldade: 4,
    recompensa: "Diederik vendor + raros", x: 64, y: 78, anchorId: "boss-queen-stoneback" },

  { id: "ator-antumbra", numero: "★", nome: "Ator, Archon of Antumbra", tipo: "opcional",
    regiao: "The Abyss (Demeniss/Hernand)", dificuldade: 5,
    recompensa: "Abyss Artifact poderoso (HP 11.000)", x: 52, y: 66, anchorId: "boss-opcionais" },

  { id: "beloth", numero: "★", nome: "Beloth the Darksworn", tipo: "opcional",
    regiao: "The Abyss (HP 13.000)", dificuldade: 5,
    recompensa: "Halberd raro + magia das trevas", x: 48, y: 70, anchorId: "boss-opcionais" },

  { id: "forgotten-general", numero: "★", nome: "The Forgotten General", tipo: "opcional",
    regiao: "The Abyss (HP 13.000)", dificuldade: 5,
    recompensa: "Armor set do general", x: 44, y: 76, anchorId: "boss-opcionais" },

  { id: "white-bear", numero: "★", nome: "White Bear of the High Mountains", tipo: "opcional",
    regiao: "Fort Askelund — Pailune", dificuldade: 4,
    recompensa: "Two-Hand Axe lendário", x: 40, y: 28, anchorId: "boss-opcionais" },

  { id: "tarandus", numero: "★", nome: "Tarandus the Ashen", tipo: "opcional",
    regiao: "Crimson Desert (oeste — Urdavah)", dificuldade: 4,
    recompensa: "Tarandus Ashen War Hammer", x: 62, y: 30, anchorId: "boss-opcionais" },

  { id: "muskan", numero: "★", nome: "Muskan — Emperor of the Bonepit", tipo: "opcional",
    regiao: "The Bonepit — Crimson Desert", dificuldade: 4,
    recompensa: "Itens raros + título", x: 76, y: 26, anchorId: "boss-opcionais" },

  { id: "moren", numero: "★", nome: "Moren, the Mistwood Huntmaster", tipo: "opcional",
    regiao: "Mistwood — Hernand", dificuldade: 3,
    recompensa: "Sword & Tower Shield exclusivos", x: 26, y: 54, anchorId: "boss-opcionais" },

  { id: "marni-excavatron", numero: "★", nome: "Marni's Excavatron", tipo: "opcional",
    regiao: "Karin Quarry — Hernand", dificuldade: 3,
    recompensa: "Blueprints mecânicos (sidequest Estate in Dismay)", x: 22, y: 56, anchorId: "boss-opcionais" },

  { id: "crimson-nightmare", numero: "★", nome: "Crimson Nightmare", tipo: "opcional",
    regiao: "Fort Perwin — Hernand", dificuldade: 3,
    recompensa: "Itens raros (sidequest Continuing Concern)", x: 30, y: 72, anchorId: "boss-opcionais" },

  { id: "queen-spider", numero: "★", nome: "Queen Spider", tipo: "opcional",
    regiao: "Arboria Castle — Hernand", dificuldade: 3,
    recompensa: "Materiais de aranha raros", x: 18, y: 66, anchorId: "boss-opcionais" },

  { id: "walter-lanford", numero: "★", nome: "Walter Lanford", tipo: "opcional",
    regiao: "Fort Warspike — Hernand", dificuldade: 4,
    recompensa: "Shotgun único + Name Written in Blood", x: 24, y: 76, anchorId: "boss-opcionais" },

  { id: "hemon-beindel", numero: "★", nome: "Hemon Beindel", tipo: "opcional",
    regiao: "Hernand — facção", dificuldade: 3,
    recompensa: "Two-Hand Sword + Abyss Artifact", x: 28, y: 78, anchorId: "boss-opcionais" },

  { id: "jackal-captain", numero: "★", nome: "One-Eyed Jackal Captain", tipo: "opcional",
    regiao: "Crimson Desert — facção dos Jackals", dificuldade: 3,
    recompensa: "Equipamento do clã Jackal", x: 70, y: 38, anchorId: "boss-opcionais" },

  { id: "black-fang", numero: "★", nome: "Black Fang", tipo: "opcional",
    regiao: "Forest of Wolves — Hernand", dificuldade: 3,
    recompensa: "Lobo lendário (montaria)", x: 16, y: 60, anchorId: "boss-opcionais" },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História", cor: "text-destructive-foreground", bg: "bg-destructive", border: "border-destructive" },
  opcional: { label: "Opcional", cor: "text-background", bg: "bg-geek", border: "border-geek" },
  secreto: { label: "Secreto", cor: "text-primary-foreground", bg: "bg-primary", border: "border-primary" },
};
