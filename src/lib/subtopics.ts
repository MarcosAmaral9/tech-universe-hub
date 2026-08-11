/**
 * subtopics.ts — rótulos legíveis de todos os subtópicos do site.
 *
 * Fonte única usada pelas páginas de tag (`/tag/:slug`) e por qualquer
 * componente que precise exibir o nome amigável de um subtópico.
 * As páginas de categoria mantêm seus mapas locais (subconjuntos deste).
 */
export const SUBTOPIC_LABELS: Record<string, string> = {
  // IA
  agentes: "Agentes de IA",
  apps: "Apps",
  comparativos: "Comparativos",
  criatividade: "Criatividade",
  dublagem: "Dublagem",
  educacao: "Educação",
  privacidade: "Privacidade",
  regulacao: "Regulação",
  saude: "Saúde",
  seguranca: "Segurança",
  trabalho: "Trabalho",
  tutorial: "Tutorial",
  ferramentas: "Ferramentas",
  produtividade: "Produtividade",
  datacenter: "Data Centers",
  ciberseguranca: "Cibersegurança",
  robotica: "Robótica",

  // Finanças
  calculadoras: "Calculadoras",
  carteira: "Carteira",
  cripto: "Criptomoedas",
  dividas: "Dívidas",
  "economia-domestica": "Economia Doméstica",
  economia: "Economia",
  "educacao-financeira": "Educação Financeira",
  etfs: "ETFs",
  fiis: "FIIs",
  "ia-financas": "IA & Finanças",
  impostos: "Impostos",
  planejamento: "Planejamento",
  "renda-fixa": "Renda Fixa",
  "renda-passiva": "Renda Passiva",
  renda: "Renda Extra",
  semicondutores: "Semicondutores",
  mercado: "Mercado",

  // Geek
  "assassins-creed": "Assassin's Creed",
  avatar: "Avatar",
  bannerlord: "Mount & Blade II: Bannerlord",
  "crimson-desert": "Crimson Desert",
  games: "Games",
  "gta-vi": "GTA VI",
  vikings: "Vikings",
  streaming: "Streaming",

  // Otaku
  anime: "Animes",
  manga: "Mangás",
  manhwa: "Manhwas",
  manhua: "Manhuas",
  cosplay: "Cosplay",
  cultura: "Cultura Japonesa",
  idiomas: "Idiomas",
  generos: "Gêneros",
  collectibles: "Colecionáveis",
  "saude-mental": "Saúde Mental",
  isekai: "Isekai",
  tensura: "TenSura",
  overlord: "Overlord",
};

export const subtopicLabel = (key: string): string => SUBTOPIC_LABELS[key] ?? key;
