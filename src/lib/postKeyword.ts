import type { BlogPost, Category } from "@/types/blog";

const STOPWORDS = new Set([
  "a","o","as","os","de","do","da","dos","das","e","em","no","na","nos","nas","um","uma","uns","umas",
  "para","por","com","sem","ao","aos","à","às","que","como","ou","mais","menos","já","muito","muitos",
  "muita","muitas","tudo","todo","toda","todos","todas","ser","é","são","foi","será","ter","tem","têm",
  "guia","completo","melhor","melhores","tudo","sobre","2025","2026","review","análise","vs","x","the"
]);

const CATEGORY_FALLBACK: Record<Category, string> = {
  ia: "inteligência artificial",
  invest: "investimentos",
  geek: "cultura geek",
  otaku: "anime",
};

/**
 * Overrides explícitos slug → keyword principal canônica.
 * Para o que não está aqui, derivamos do título (primeira sequência significativa).
 */
const KEYWORD_OVERRIDES: Record<string, string> = {
  "gpt-5-ia-trabalhador-digital-autonomo-2026": "GPT-5.4",
  "berkshire-hathaway-greg-abel-2026-sem-buffett": "Berkshire Hathaway",
  "elden-ring-nightreign-guia-completo-2026": "Elden Ring Nightreign",
  "kaiju-no-8-temporada-2-guia-arco-final-2026": "Kaiju No. 8",
  "pnad-desemprego-61-marco-2026": "PNAD",
  "copom-selic-1450-corte-abril-2026": "Copom Selic",
  "petroleo-brent-77-dolares-guerra-ira-2026": "petróleo Brent",
  "anthropic-claude-5-2026": "Anthropic Claude 5",
  "magnificent-seven-2026": "Magnificent Seven",
  "super-mario-galaxy-filme-2026": "Super Mario Galaxy",
  "solo-leveling-guia-completo-temporadas": "Solo Leveling",
  "tsukimichi-moonlit-fantasy-guia-completo": "Tsukimichi Moonlit Fantasy",
  "mugen-gacha-level-9999-traicao-dungeon": "Mugen Gacha",
  "kizoku-tensei-noble-reincarnation-guia": "Kizoku Tensei",
  "hell-mode-gamer-isekai-guia-completo": "Hell Mode",
  "isekai-nonbiri-nouka-farming-life-guia": "Isekai Nonbiri Nouka",
  "maousama-retry-demon-lord-guia-completo": "Maou-sama Retry",
  "okiraku-ryoushu-territory-defense-guia": "Okiraku Ryoushu",
};

const stripDiacritics = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const norm = (s: string) => stripDiacritics(s).toLowerCase();

const tokenize = (s: string) =>
  norm(s)
    .replace(/[^a-z0-9\s.+-]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));

/**
 * Retorna a keyword principal canônica de um post.
 */
export function getPrimaryKeyword(post: Pick<BlogPost, "slug" | "title" | "category">): string {
  if (KEYWORD_OVERRIDES[post.slug]) return KEYWORD_OVERRIDES[post.slug];

  // Heurística: pega as 2-4 primeiras palavras significativas do título,
  // até atingir um dos delimitadores típicos (":", "—", "-", "|").
  const cut = post.title.split(/[:\-—|]/)[0].trim();
  const tokens = tokenize(cut);
  if (tokens.length === 0) return CATEGORY_FALLBACK[post.category];
  // pega entre 2 e 4 tokens
  const take = Math.min(4, Math.max(2, tokens.length));
  return tokens.slice(0, take).join(" ");
}

/**
 * Verifica se uma keyword aparece em um trecho de texto (tolerante a acentos).
 */
export function containsKeyword(haystack: string | undefined, keyword: string): boolean {
  if (!haystack) return false;
  return norm(haystack).includes(norm(keyword));
}

/**
 * Gera meta {title, description, keywords} garantindo que a keyword principal
 * apareça em todas as 3 propriedades.
 */
export function derivePageMeta(
  post: Pick<BlogPost, "slug" | "title" | "excerpt" | "category" | "subtopic">,
  opts?: { categoryName?: string }
): { title: string; description: string; keywords: string } {
  const keyword = getPrimaryKeyword(post);
  const cat = CATEGORY_FALLBACK[post.category];

  // TITLE — máx 60 chars; garante keyword no início se não estiver no título
  let title = post.title;
  if (title.length > 60) {
    title = title.slice(0, 57).replace(/[\s,;:.-]+$/, "") + "…";
  }
  if (!containsKeyword(title, keyword)) {
    const prefix = `${keyword} — `;
    title = (prefix + post.title).slice(0, 60).replace(/[\s,;:.-]+$/, "");
  }

  // DESCRIPTION — 140-160 chars com keyword
  let description = post.excerpt || "";
  if (!containsKeyword(description, keyword)) {
    description = `${keyword}: ${description}`;
  }
  if (description.length > 160) {
    description = description.slice(0, 157).replace(/[\s,;:.-]+$/, "") + "…";
  } else if (description.length < 80 && opts?.categoryName) {
    description = `${description} ${opts.categoryName} no VICIO<CODE>.`.trim();
    if (description.length > 160) {
      description = description.slice(0, 157) + "…";
    }
  }

  // KEYWORDS — keyword principal primeiro, depois 10+ termos derivados
  const extras: string[] = [];
  if (post.subtopic) extras.push(post.subtopic.replace(/-/g, " "));
  extras.push(cat);
  const titleTokens = tokenize(post.title).slice(0, 8);
  const excerptTokens = tokenize(post.excerpt || "").slice(0, 6);

  const seen = new Set<string>([norm(keyword)]);
  const list: string[] = [keyword];
  for (const t of [...extras, ...titleTokens, ...excerptTokens]) {
    const k = norm(t);
    if (k && !seen.has(k) && t.length > 2) {
      seen.add(k);
      list.push(t);
    }
    if (list.length >= 14) break;
  }
  const keywords = list.join(", ");

  return { title, description, keywords };
}
