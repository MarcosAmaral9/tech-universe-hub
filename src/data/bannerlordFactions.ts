/**
 * Dados das 9 facções de Calradia (Mount & Blade II: Bannerlord).
 * Cores baseadas nas paletas oficiais usadas pela TaleWorlds e wiki.
 * Coordenadas (x,y em %) referem-se ao centro de cada região nos mapas
 * gerados em src/assets/bannerlord-calradia-map-*.webp.
 */

export type FactionId =
  | "vlandia"
  | "sturgia"
  | "empire-norte"
  | "empire-oeste"
  | "empire-sul"
  | "khuzait"
  | "battania"
  | "aserai"
  | "nords";

export interface Faction {
  id: FactionId;
  name: string;
  culture: string;
  capital: string;
  cities: string[];
  troopT6: string;
  color: string; // hex sólido (contorno/legenda)
  desc: string;
  dlc?: "war-sails";
  /** Centro no mapa pré-War Sails (x%, y%). */
  posClassic?: { x: number; y: number };
  /** Centro no mapa pós-War Sails (x%, y%). */
  posWarSails?: { x: number; y: number };
}

export const FACTIONS: Faction[] = [
  {
    id: "vlandia",
    name: "Vlandia",
    culture: "Vlandiana (inspiração franco-normanda)",
    capital: "Pravend / Sargot",
    cities: ["Sargot", "Jaculan", "Galend", "Ocs Hall"],
    troopT6: "Banner Knight (cavalaria pesada T6)",
    color: "#b03a2e",
    desc: "Reino feudal do noroeste. Domina cavalaria pesada de choque e besteiros, com forte tradição de cercos.",
    posClassic: { x: 22, y: 27 },
    posWarSails: { x: 28, y: 36 },
  },
  {
    id: "sturgia",
    name: "Sturgia",
    culture: "Sturgiana (inspiração eslava/nórdica)",
    capital: "Revyl",
    cities: ["Revyl", "Varcheg", "Tyal", "Omor", "Balgard"],
    troopT6: "Druzhinnik Champion (cavalaria nobre T6)",
    color: "#1f6f9f",
    desc: "Reino do norte frio, com infantaria de escudo e machado e uma das melhores cavalarias nobres do jogo.",
    posClassic: { x: 45, y: 14 },
    posWarSails: { x: 46, y: 38 },
  },
  {
    id: "empire-norte",
    name: "Empire (Norte)",
    culture: "Imperial",
    capital: "Diathma",
    cities: ["Diathma", "Epicrotea", "Onica", "Argoron"],
    troopT6: "Cataphract (cavalaria nobre) / Elite Cataphract",
    color: "#7d3c98",
    desc: "Facção imperial do norte. Compartilha a árvore de tropas com os outros impérios, mas com clãs e capital próprios.",
    posClassic: { x: 70, y: 18 },
    posWarSails: { x: 63, y: 40 },
  },
  {
    id: "empire-oeste",
    name: "Empire (Oeste)",
    culture: "Imperial",
    capital: "Lycaron",
    cities: ["Lycaron", "Pravend", "Charas", "Jalmarys"],
    troopT6: "Cataphract / Imperial Elite Cataphract",
    color: "#5b2c6f",
    desc: "Império do oeste, herdeiro de uma das três facções imperiais que disputam o trono de Calradia.",
    posClassic: { x: 38, y: 50 },
    posWarSails: { x: 30, y: 60 },
  },
  {
    id: "empire-sul",
    name: "Empire (Sul)",
    culture: "Imperial",
    capital: "Ortysia",
    cities: ["Ortysia", "Lageta", "Amitatys", "Seonon"],
    troopT6: "Cataphract / Imperial Elite Cataphract",
    color: "#a16ae8",
    desc: "Império do sul, com territórios próximos do deserto Aserai e da Battania. Mesma árvore imperial.",
    posClassic: { x: 62, y: 62 },
    posWarSails: { x: 50, y: 62 },
  },
  {
    id: "khuzait",
    name: "Khuzait",
    culture: "Khuzait (inspiração mongol-túrquica)",
    capital: "Makeb",
    cities: ["Makeb", "Odokh", "Tulga", "Chaikand"],
    troopT6: "Khan's Guard (horse archer T6)",
    color: "#d68910",
    desc: "Khanato das estepes orientais. Domina cavalaria leve e arqueiros montados, ideal para guerra de movimento.",
    posClassic: { x: 85, y: 38 },
    posWarSails: { x: 83, y: 42 },
  },
  {
    id: "battania",
    name: "Battania",
    culture: "Battaniana (inspiração celta)",
    capital: "Marunath",
    cities: ["Marunath", "Pen Cannoc", "Car Banseth", "Dunglanys"],
    troopT6: "Fian Champion (arqueiro nobre T6)",
    color: "#1e8449",
    desc: "Tribos das florestas centrais. Possuem os melhores arqueiros do jogo (Fian Champions) e infantaria com falx.",
    posClassic: { x: 50, y: 47 },
    posWarSails: { x: 70, y: 62 },
  },
  {
    id: "aserai",
    name: "Aserai",
    culture: "Aserai (inspiração árabe-beduína)",
    capital: "Quyaz",
    cities: ["Quyaz", "Husn Fulq", "Iqbayl", "Razih", "Sanala"],
    troopT6: "Mameluke Cavalry / Aserai Master Archer",
    color: "#b9770e",
    desc: "Sultanato do deserto sul. Combina mamelucos blindados e arqueiros mestres, com forte economia de caravanas.",
    posClassic: { x: 45, y: 80 },
    posWarSails: { x: 52, y: 82 },
  },
  {
    id: "nords",
    name: "Nords",
    culture: "Nord (inspiração viking)",
    capital: "Jorvik",
    cities: ["Jorvik", "Skagar", "Hafnir", "Storfjord", "Iseborg"],
    troopT6: "Huscarl / Sea Jarl (T6 da expansão)",
    color: "#2e86c1",
    desc: "Adicionados pela expansão War Sails. Dominam o arquipélago norte e o combate naval, com infantaria pesada e raiders.",
    dlc: "war-sails",
    posWarSails: { x: 50, y: 9 },
  },
];

export const getFactionsByVariant = (variant: "classic" | "warsails"): Faction[] =>
  FACTIONS.filter((f) => (variant === "classic" ? !f.dlc : true));
