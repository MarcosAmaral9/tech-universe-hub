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
 * Coordenadas aproximadas baseadas no mapa oficial de Pywel.
 * Regiões principais (referência visual):
 *  - Hernand: sudoeste (x ~22-32, y ~62-78)
 *  - Pailune: norte/noroeste (x ~28-42, y ~22-38)
 *  - Demeniss: centro (x ~48-58, y ~48-62)
 *  - Delesyia: leste (x ~70-82, y ~52-70)
 *  - Crimson Desert: nordeste (x ~72-86, y ~22-36)
 *  - The Abyss / final: centro-sul (x ~50, y ~78)
 */
export const crimsonDesertBosses: BossMarker[] = [
  // ===== CAMPANHA PRINCIPAL =====
  { id: "myurdin-prologo", numero: "P", nome: "Myurdin (Prólogo)", tipo: "historia",
    regiao: "Acampamento Greymane — Hernand", dificuldade: 1,
    recompensa: "Progressão da história", x: 18, y: 70, anchorId: "boss-myurdin-prologo" },

  { id: "matthias", numero: "1", nome: "Matthias", tipo: "historia",
    regiao: "Cidade de Hernand", dificuldade: 2,
    recompensa: "Skill Pump Kick", x: 26, y: 72, anchorId: "boss-matthias" },

  { id: "kailok", numero: "2", nome: "Kailok the Hornsplitter", tipo: "historia",
    regiao: "Acampamento Goblin — Hernand", dificuldade: 2,
    recompensa: "Sword of the Lord", x: 22, y: 64, anchorId: "boss-kailok" },

  { id: "reed-devil", numero: "3", nome: "Reed Devil", tipo: "historia",
    regiao: "Campo de Juncos — leste de Hernand", dificuldade: 3,
    recompensa: "Habilidade de área + Abyss Artifact", x: 34, y: 68, anchorId: "boss-reed-devil" },

  { id: "tenebrum", numero: "4", nome: "Tenebrum", tipo: "historia",
    regiao: "Scholarship Institute", dificuldade: 2,
    recompensa: "Key to the Spire of the Stars", x: 44, y: 56, anchorId: "boss-tenebrum" },

  { id: "kearush", numero: "5", nome: "Kearush the Slayer", tipo: "historia",
    regiao: "Castelo de Hernand", dificuldade: 5,
    recompensa: "Arma exclusiva + Abyss Artifact raro", x: 28, y: 76, anchorId: "boss-kearush" },

  { id: "crowcaller", numero: "6", nome: "Crowcaller", tipo: "historia",
    regiao: "Crow's Nest", dificuldade: 4,
    recompensa: "Tauria Curved Sword", x: 38, y: 60, anchorId: "boss-crowcaller" },

  { id: "cassius-morten", numero: "7", nome: "Cassius Morten", tipo: "historia",
    regiao: "Cidade de Calphade", dificuldade: 3,
    recompensa: "Progressão + Abyss Artifact", x: 46, y: 50, anchorId: "boss-cassius-morten" },

  { id: "white-horn", numero: "8", nome: "White Horn", tipo: "opcional",
    regiao: "Montanhas Brancas — norte de Pywel", dificuldade: 4,
    recompensa: "Arma pesada exclusiva", x: 32, y: 24, anchorId: "boss-white-horn" },

  { id: "staglord", numero: "9", nome: "Saigord the Staglord", tipo: "opcional",
    regiao: "Hernand Farmhouse", dificuldade: 4,
    recompensa: "Turning Slash Expertise", x: 30, y: 78, anchorId: "boss-staglord" },

  { id: "hexe-marie", numero: "10", nome: "Hexe Marie", tipo: "historia",
    regiao: "Floresta de Hernand", dificuldade: 3,
    recompensa: "Abyss Artifact + necromancia", x: 24, y: 58, anchorId: "boss-hexe-marie" },

  { id: "ludvig", numero: "11", nome: "Ludvig & Awakened Ludvig", tipo: "historia",
    regiao: "Pailune Castle", dificuldade: 4,
    recompensa: "Abyss Artifact", x: 36, y: 30, anchorId: "boss-ludvig" },

  { id: "one-armed-ludvig", numero: "12", nome: "One-Armed Ludvig", tipo: "historia",
    regiao: "Kingshield Mountain", dificuldade: 4,
    recompensa: "Progressão da história", x: 42, y: 36, anchorId: "boss-one-armed-ludvig" },

  { id: "myurdin-revanche", numero: "13", nome: "Myurdin (Revanche)", tipo: "historia",
    regiao: "Capítulo 7 — missão principal", dificuldade: 4,
    recompensa: "Cutscene importante", x: 40, y: 42, anchorId: "boss-myurdin-revanche" },

  { id: "gregor", numero: "14", nome: "Gregor the Halberd", tipo: "historia",
    regiao: "Fort Ironclad, Demeniss", dificuldade: 4,
    recompensa: "Golden Vanguard", x: 52, y: 52, anchorId: "boss-gregor" },

  { id: "fortain", numero: "15", nome: "Fortain the Cursed Knight", tipo: "historia",
    regiao: "Demeniss", dificuldade: 4,
    recompensa: "Armor set Fallen Kingdom", x: 56, y: 58, anchorId: "boss-fortain" },

  { id: "lucian-bastier", numero: "16", nome: "Lucian Bastier", tipo: "historia",
    regiao: "Spire of Clockwork, Demeniss", dificuldade: 5,
    recompensa: "Spire of Clockwork Key", x: 50, y: 62, anchorId: "boss-lucian-bastier" },

  { id: "goyen", numero: "17", nome: "Goyen (Secreto)", tipo: "secreto",
    regiao: "Nest of Valor — Spire of the Sun", dificuldade: 5,
    recompensa: "Meteor Kick + itens raros", x: 60, y: 44, anchorId: "boss-goyen" },

  { id: "trukan", numero: "18", nome: "T'rukan the Ascended", tipo: "historia",
    regiao: "Demeniss — Capítulo 9", dificuldade: 5,
    recompensa: "Abyss Artifact + raros", x: 54, y: 46, anchorId: "boss-trukan" },

  { id: "master-du", numero: "19", nome: "Master Du (Secreto)", tipo: "secreto",
    regiao: "Cloister of Enlightenment", dificuldade: 5,
    recompensa: "Wall climb + combos especiais", x: 48, y: 38, anchorId: "boss-master-du" },

  { id: "antumbra-sword", numero: "20", nome: "Antumbra's Sword", tipo: "historia",
    regiao: "Sanctum of Absolution", dificuldade: 4,
    recompensa: "Vessel of Dark Pursuit", x: 58, y: 70, anchorId: "boss-antumbra-sword" },

  { id: "priscus", numero: "21", nome: "Priscus the Ancient", tipo: "opcional",
    regiao: "Spire of Ringing Truth — Pailune", dificuldade: 2,
    recompensa: "Blessing of the Immortal", x: 38, y: 22, anchorId: "boss-priscus" },

  // ===== SEQUÊNCIA FINAL =====
  { id: "corrupted-caliburn", numero: "F1", nome: "Corrupted Caliburn", tipo: "historia",
    regiao: "The Abyss", dificuldade: 5,
    recompensa: "Espada +28 ataque", x: 48, y: 80, anchorId: "boss-corrupted-caliburn" },

  { id: "myurdin-umbra", numero: "F2", nome: "Myurdin, Avatar de Umbra", tipo: "historia",
    regiao: "The Abyss", dificuldade: 5,
    recompensa: "Progressão para boss final", x: 50, y: 84, anchorId: "boss-myurdin-umbra" },

  { id: "umbra", numero: "F3", nome: "Umbra (Boss Final)", tipo: "historia",
    regiao: "The Abyss — montado no dragão", dificuldade: 4,
    recompensa: "Créditos + epílogo", x: 52, y: 88, anchorId: "boss-umbra" },

  // ===== OPCIONAIS =====
  { id: "queen-stoneback", numero: "★", nome: "Queen Stoneback Crab", tipo: "opcional",
    regiao: "Stoneback Crab Wetlands, Delesyia", dificuldade: 4,
    recompensa: "Diederik vendor + raros", x: 76, y: 60, anchorId: "boss-queen-stoneback" },

  { id: "ator-antumbra", numero: "★", nome: "Ator, Archon of Antumbra", tipo: "opcional",
    regiao: "Sanctums — final série Antumbra", dificuldade: 5,
    recompensa: "Abyss Artifact poderoso", x: 64, y: 66, anchorId: "boss-opcionais" },

  { id: "beloth", numero: "★", nome: "Beloth the Darksworn", tipo: "opcional",
    regiao: "Demeniss — exploração", dificuldade: 4,
    recompensa: "Magia das trevas", x: 58, y: 54, anchorId: "boss-opcionais" },

  { id: "forgotten-general", numero: "★", nome: "The Forgotten General", tipo: "opcional",
    regiao: "Delesyia — exploração", dificuldade: 4,
    recompensa: "Armor set do general", x: 72, y: 56, anchorId: "boss-opcionais" },

  { id: "white-bear", numero: "★", nome: "White Bear of the High Mountains", tipo: "opcional",
    regiao: "Montanhas — Delesyia", dificuldade: 4,
    recompensa: "Itens exclusivos de urso", x: 78, y: 48, anchorId: "boss-opcionais" },

  { id: "tarandus", numero: "★", nome: "Tarandus the Ashen", tipo: "opcional",
    regiao: "Crimson Desert region", dificuldade: 4,
    recompensa: "Tarandus Ashen Armor", x: 80, y: 30, anchorId: "boss-opcionais" },

  { id: "ice-walker", numero: "★", nome: "Ice Walker", tipo: "opcional",
    regiao: "Região nevada", dificuldade: 3,
    recompensa: "Movimentação no gelo", x: 30, y: 18, anchorId: "boss-opcionais" },

  { id: "moren", numero: "★", nome: "Moren the Mistwood Huntmaster", tipo: "opcional",
    regiao: "Floresta de névoa", dificuldade: 3,
    recompensa: "Arco exclusivo", x: 44, y: 28, anchorId: "boss-opcionais" },

  { id: "keglord", numero: "★", nome: "Keglord Garnier Mk. XXIII", tipo: "opcional",
    regiao: "Complexo mecânico de Marni", dificuldade: 4,
    recompensa: "Blueprints mecânicos", x: 66, y: 38, anchorId: "boss-opcionais" },

  { id: "crookrock", numero: "★", nome: "Crookrock Walker", tipo: "opcional",
    regiao: "Crimson Desert region", dificuldade: 3,
    recompensa: "Materiais de pedra raros", x: 84, y: 26, anchorId: "boss-opcionais" },

  { id: "walter-lanford", numero: "★", nome: "Walter Lanford", tipo: "opcional",
    regiao: "Demeniss — facção avançada", dificuldade: 4,
    recompensa: "Equipamento de mercenário", x: 54, y: 60, anchorId: "boss-opcionais" },

  { id: "hemon-beindel", numero: "★", nome: "Hemon Beindel", tipo: "opcional",
    regiao: "Pailune — facção", dificuldade: 3,
    recompensa: "Abyss Artifact", x: 32, y: 34, anchorId: "boss-opcionais" },

  { id: "jackal-captain", numero: "★", nome: "One-Eyed Jackal Captain", tipo: "opcional",
    regiao: "Hernand — facção dos Jackals", dificuldade: 3,
    recompensa: "Equipamento do clã", x: 20, y: 56, anchorId: "boss-opcionais" },
];

export const bossTipoMeta: Record<BossTipo, { label: string; cor: string; bg: string; border: string }> = {
  historia: { label: "História", cor: "text-destructive-foreground", bg: "bg-destructive", border: "border-destructive" },
  opcional: { label: "Opcional", cor: "text-background", bg: "bg-geek", border: "border-geek" },
  secreto: { label: "Secreto", cor: "text-primary-foreground", bg: "bg-primary", border: "border-primary" },
};
