export type BossTipo = "historia" | "opcional" | "secreto";

export interface BossMarker {
  id: string;
  numero: string;
  nome: string;
  tipo: BossTipo;
  regiao: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  recompensa: string;
  /** Posição X em % (0-100) sobre a imagem do mapa (1178x1074, ratio ~1.1:1) */
  x: number;
  /** Posição Y em % (0-100) sobre a imagem do mapa (1178x1074, ratio ~1.1:1) */
  y: number;
  /** ID âncora no artigo (para scroll) */
  anchorId: string;
}

/**
 * Coordenadas calibradas a partir dos screenshots oficiais do Map Genie
 * (mapgenie.io/crimson-desert/maps/pywel) — abril 2026.
 *
 * Referências visuais utilizadas para ancorar regiões na imagem (1178x1074):
 *   PAILUNE        : NORTE       — bosses história ~16-32% / 18-42%
 *   HERNAND        : SW/W        — bosses ~3-25% / 55-80% (cluster denso na borda oeste)
 *   DEMENISS       : Centro      — bosses história ~36-52% / 42-60%
 *   DELESYIA       : S/SE        — bosses ~50-90% / 65-80%
 *   CRIMSON DESERT : NE          — bosses opcionais ~55-85% / 18-50%
 *   THE ABYSS      : portais     — Sanctum/Crow's Nest ~30-40% / 35-55%
 *
 * Fontes: Map Genie (Pywel), Pywel.app/database/bosses, crimsondesertwiki.net
 */
export const crimsonDesertBosses: BossMarker[] = [
  // ===== CAMPANHA PRINCIPAL =====
  // Cluster Hernand SW (8 pins observados na imagem 2 entre x:8-22 / y:60-78)
  { id: "myurdin-prologo", numero: "P", nome: "Myurdin (Tutorial — Prólogo)", tipo: "historia",
    regiao: "Acampamento Greymane — Hernand (oeste)", dificuldade: 1,
    recompensa: "Tutorial de combate básico", x: 10, y: 76, anchorId: "boss-myurdin-prologo" },

  { id: "matthias", numero: "1", nome: "Matthias", tipo: "historia",
    regiao: "Praça da cidade de Hernand", dificuldade: 2,
    recompensa: "Skill Pump Kick", x: 14, y: 70, anchorId: "boss-matthias" },

  { id: "kailok", numero: "2", nome: "Kailok the Hornsplitter", tipo: "historia",
    regiao: "Goldleaf Guildhouse — Hernand", dificuldade: 2,
    recompensa: "Sword of the Lord + Seal of Greed", x: 18, y: 68, anchorId: "boss-kailok" },

  { id: "reed-devil", numero: "3", nome: "Reed Devil", tipo: "historia",
    regiao: "Mountain of Frozen Souls — Pailune", dificuldade: 3,
    recompensa: "Skill Swift Stab + Abyss Artifact", x: 24, y: 28, anchorId: "boss-reed-devil" },

  { id: "tenebrum", numero: "4", nome: "Tenebrum", tipo: "historia",
    regiao: "Scholastone Institute — Hernand (norte)", dificuldade: 2,
    recompensa: "Key to the Spire of the Stars", x: 22, y: 56, anchorId: "boss-tenebrum" },

  { id: "kearush", numero: "5", nome: "Kearush the Slayer", tipo: "historia",
    regiao: "Hernand Castle", dificuldade: 5,
    recompensa: "Arma exclusiva + Abyss Artifact raro", x: 12, y: 72, anchorId: "boss-kearush" },

  { id: "crowcaller", numero: "6", nome: "Draven the Crowcaller", tipo: "historia",
    regiao: "Crow's Nest — The Abyss (norte de Hernand)", dificuldade: 4,
    recompensa: "Tauria Curved Sword + skill Aerial Roll", x: 30, y: 40, anchorId: "boss-crowcaller" },

  { id: "cassius-morten", numero: "7", nome: "Cassius Morten", tipo: "historia",
    regiao: "Calphade Castle — Hernand", dificuldade: 3,
    recompensa: "Shield of Betrayal", x: 20, y: 62, anchorId: "boss-cassius-morten" },

  { id: "white-horn", numero: "8", nome: "White Horn, Shepherd of Souls", tipo: "opcional",
    regiao: "Hernand (norte) — montanhas de Pailune", dificuldade: 4,
    recompensa: "Arma pesada exclusiva", x: 26, y: 32, anchorId: "boss-white-horn" },

  { id: "staglord", numero: "9", nome: "Saigord the Staglord", tipo: "opcional",
    regiao: "Icemoor Castle Ruins — Pailune (sul)", dificuldade: 4,
    recompensa: "Turning Slash Expertise + Staglord's Shield", x: 28, y: 36, anchorId: "boss-staglord" },

  { id: "hexe-marie", numero: "10", nome: "Hexe Marie", tipo: "historia",
    regiao: "Floresta de Hernand", dificuldade: 3,
    recompensa: "Abyss Artifact + necromancia", x: 16, y: 64, anchorId: "boss-hexe-marie" },

  // Pailune cluster norte (imagem 2: ~16-32% / 18-30%)
  { id: "ludvig", numero: "11", nome: "Ludvig & Awakened Ludvig", tipo: "historia",
    regiao: "Pailune Castle", dificuldade: 4,
    recompensa: "Abyss Artifact + Lariat skill", x: 28, y: 22, anchorId: "boss-ludvig" },

  { id: "one-armed-ludvig", numero: "12", nome: "One-Armed Ludvig", tipo: "historia",
    regiao: "Kingshield Mountain — Pailune", dificuldade: 4,
    recompensa: "Progressão da história", x: 22, y: 18, anchorId: "boss-one-armed-ludvig" },

  { id: "myurdin-revanche", numero: "13", nome: "Myurdin (Revanche)", tipo: "historia",
    regiao: "Hills of No Return — fronteira Hernand/Pailune", dificuldade: 4,
    recompensa: "Cutscene importante + progressão", x: 32, y: 42, anchorId: "boss-myurdin-revanche" },

  // Demeniss centro (imagem 2: cluster denso ~36-52% / 42-60%)
  { id: "gregor", numero: "14", nome: "Gregor the Halberd of Carnage", tipo: "historia",
    regiao: "Fort Ironclad — Demeniss (oeste)", dificuldade: 4,
    recompensa: "Golden Vanguard", x: 38, y: 50, anchorId: "boss-gregor" },

  { id: "fortain", numero: "15", nome: "Fortain the Cursed Knight", tipo: "historia",
    regiao: "Thornbriar Fortress — Demeniss", dificuldade: 4,
    recompensa: "Armor set Fallen Kingdom", x: 44, y: 54, anchorId: "boss-fortain" },

  { id: "lucian-bastier", numero: "16", nome: "Lucian Bastier (Awakened)", tipo: "historia",
    regiao: "Spire of Clockwork — Demeniss", dificuldade: 5,
    recompensa: "Spire of Clockwork Key", x: 48, y: 58, anchorId: "boss-lucian-bastier" },

  { id: "goyen", numero: "17", nome: "Goyen (Secreto)", tipo: "secreto",
    regiao: "Nest of Valor — Spire of the Sun (Hernand norte)", dificuldade: 5,
    recompensa: "Meteor Kick + itens raros", x: 34, y: 46, anchorId: "boss-goyen" },

  { id: "trukan", numero: "18", nome: "T'rukan the Ascended", tipo: "historia",
    regiao: "Serpent Marsh — Demeniss (leste)", dificuldade: 5,
    recompensa: "Abyss Artifact + raros", x: 52, y: 50, anchorId: "boss-trukan" },

  { id: "master-du", numero: "19", nome: "Master Du (Secreto)", tipo: "secreto",
    regiao: "Cloister of Enlightenment — Hernand", dificuldade: 5,
    recompensa: "Wall climb + combos especiais", x: 24, y: 72, anchorId: "boss-master-du" },

  { id: "antumbra-sword", numero: "20", nome: "Antumbra's Sword", tipo: "opcional",
    regiao: "Sanctum of Absolution — The Abyss (Hernand)", dificuldade: 4,
    recompensa: "Vessel of Dark Pursuit", x: 36, y: 54, anchorId: "boss-antumbra-sword" },

  { id: "priscus", numero: "21", nome: "Priscus the Ancient", tipo: "opcional",
    regiao: "Spire of Ringing Truth — Pailune", dificuldade: 4,
    recompensa: "Blessing of the Immortal", x: 30, y: 30, anchorId: "boss-priscus" },

  // ===== SEQUÊNCIA FINAL (THE ABYSS / DELESYIA SUL) =====
  // Imagem 2 mostra cluster denso no sul/SE de Delesyia (60-78% / 65-78%)
  { id: "corrupted-caliburn", numero: "F1", nome: "Corrupted Caliburn", tipo: "historia",
    regiao: "The Abyss — sob Hernand", dificuldade: 5,
    recompensa: "Espada +28 ataque", x: 46, y: 70, anchorId: "boss-corrupted-caliburn" },

  { id: "myurdin-umbra", numero: "F2", nome: "Lava Myurdin (Avatar de Umbra)", tipo: "historia",
    regiao: "Ashclaw Keep — Pailune", dificuldade: 5,
    recompensa: "Progressão para boss final", x: 24, y: 34, anchorId: "boss-myurdin-umbra" },

  { id: "umbra", numero: "F3", nome: "Umbra (Boss Final)", tipo: "historia",
    regiao: "The Abyss — clímax montado no dragão", dificuldade: 4,
    recompensa: "Créditos + epílogo", x: 52, y: 72, anchorId: "boss-umbra" },

  // ===== OPCIONAIS / WORLD BOSSES =====
  // Hernand oeste — pins na imagem 1: borda oeste ~3-10% / 56-78%
  { id: "queen-stoneback", numero: "★", nome: "Queen Stoneback Crab", tipo: "opcional",
    regiao: "Redfox Forest — Hernand (Goddesses Lake)", dificuldade: 4,
    recompensa: "Diederik vendor + raros", x: 8, y: 60, anchorId: "boss-queen-stoneback" },

  // The Abyss / Demeniss centro
  { id: "ator-antumbra", numero: "★", nome: "Ator, Archon of Antumbra", tipo: "opcional",
    regiao: "The Abyss (Demeniss/Hernand)", dificuldade: 5,
    recompensa: "Abyss Artifact poderoso (HP 11.000)", x: 32, y: 52, anchorId: "boss-opcionais" },

  { id: "beloth", numero: "★", nome: "Beloth the Darksworn", tipo: "opcional",
    regiao: "The Abyss (HP 13.000)", dificuldade: 5,
    recompensa: "Halberd raro + magia das trevas", x: 40, y: 56, anchorId: "boss-opcionais" },

  { id: "forgotten-general", numero: "★", nome: "The Forgotten General", tipo: "opcional",
    regiao: "The Abyss (HP 13.000)", dificuldade: 5,
    recompensa: "Armor set do general", x: 50, y: 78, anchorId: "boss-opcionais" },

  // Pailune cluster norte (imagem 1: ~16-30% / 18-32%)
  { id: "white-bear", numero: "★", nome: "White Bear of the High Mountains", tipo: "opcional",
    regiao: "Fort Askelund — Pailune (norte)", dificuldade: 4,
    recompensa: "Two-Hand Axe lendário", x: 18, y: 22, anchorId: "boss-opcionais" },

  // Crimson Desert NE (imagem 1: cluster ~55-85% / 18-50%)
  { id: "tarandus", numero: "★", nome: "Tarandus the Ashen", tipo: "opcional",
    regiao: "Crimson Desert (oeste — Urdavah)", dificuldade: 4,
    recompensa: "Tarandus Ashen War Hammer", x: 58, y: 30, anchorId: "boss-opcionais" },

  { id: "muskan", numero: "★", nome: "Muskan — Emperor of the Bonepit", tipo: "opcional",
    regiao: "The Bonepit — sob a Crimson Desert", dificuldade: 4,
    recompensa: "Itens raros + título", x: 72, y: 36, anchorId: "boss-opcionais" },

  // Hernand norte / Mistwood
  { id: "moren", numero: "★", nome: "Moren, the Mistwood Huntmaster", tipo: "opcional",
    regiao: "Mistwood — Hernand (norte)", dificuldade: 3,
    recompensa: "Sword & Tower Shield exclusivos", x: 34, y: 26, anchorId: "boss-opcionais" },

  { id: "marni-excavatron", numero: "★", nome: "Marni's Excavatron", tipo: "opcional",
    regiao: "Karin Quarry — Hernand", dificuldade: 3,
    recompensa: "Blueprints mecânicos (sidequest Estate in Dismay)", x: 14, y: 56, anchorId: "boss-opcionais" },

  { id: "crimson-nightmare", numero: "★", nome: "Crimson Nightmare", tipo: "opcional",
    regiao: "Fort Perwin — Hernand", dificuldade: 3,
    recompensa: "Itens raros (sidequest Continuing Concern)", x: 6, y: 56, anchorId: "boss-opcionais" },

  { id: "queen-spider", numero: "★", nome: "Queen Spider", tipo: "opcional",
    regiao: "Arboria Castle — Hernand", dificuldade: 3,
    recompensa: "Materiais de aranha raros", x: 4, y: 70, anchorId: "boss-opcionais" },

  { id: "walter-lanford", numero: "★", nome: "Walter Lanford", tipo: "opcional",
    regiao: "Fort Warspike — Hernand", dificuldade: 4,
    recompensa: "Shotgun único + Name Written in Blood", x: 3, y: 78, anchorId: "boss-opcionais" },

  // Delesyia sul (imagem 1: pin único ~52% / 78%)
  { id: "hemon-beindel", numero: "★", nome: "Hemon Beindel", tipo: "opcional",
    regiao: "Delesyia — facção", dificuldade: 3,
    recompensa: "Two-Hand Sword + Abyss Artifact", x: 52, y: 78, anchorId: "boss-opcionais" },

  // Crimson Desert NE — cluster (imagem 1: ~62-85% / 22-50%)
  { id: "jackal-captain", numero: "★", nome: "One-Eyed Jackal Captain", tipo: "opcional",
    regiao: "Crimson Desert — facção dos Jackals", dificuldade: 3,
    recompensa: "Equipamento do clã Jackal", x: 78, y: 22, anchorId: "boss-opcionais" },

  // Hernand floresta oeste
  { id: "black-fang", numero: "★", nome: "Black Fang", tipo: "opcional",
    regiao: "Forest of Wolves — Hernand", dificuldade: 3,
    recompensa: "Lobo lendário (montaria)", x: 6, y: 64, anchorId: "boss-opcionais" },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História", cor: "text-destructive-foreground", bg: "bg-destructive", border: "border-destructive" },
  opcional: { label: "Opcional", cor: "text-background", bg: "bg-geek", border: "border-geek" },
  secreto: { label: "Secreto", cor: "text-primary-foreground", bg: "bg-primary", border: "border-primary" },
};
