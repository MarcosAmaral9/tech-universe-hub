import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "@/data/posts";

const SITE_NAME = "VICIO<CODE>";
const BASE_URL = "https://viciocode.com";
const SITE_LOGO = `${BASE_URL}/icon-512x512.png`;
const SITE_SOCIAL = [
  "https://instagram.com/viciocode",
  "https://tiktok.com/@viciocode",
];

const PAGE_META: Record<string, { title: string; description: string; keywords: string }> = {
  "/": {
    title: "IA, Investimentos, Geek & Otaku",
    description: "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku. Conteúdo de qualidade para mentes curiosas.",
    keywords: "inteligência artificial, investimentos, finanças pessoais, cultura geek, otaku, mangás, animes, tecnologia, criptomoedas, games, manhwas, educação financeira, IA generativa, ChatGPT",
  },
  "/otaku": {
    title: "Otaku",
    description: "Mangás, manhwas, manhuas, animes e tudo do universo otaku.",
    keywords: "otaku, mangás, animes, manhwas, manhuas, cultura japonesa, cosplay, anime 2026, melhores animes, mangás para ler, light novels, isekai, shonen, seinen",
  },
  "/ia": {
    title: "Inteligência Artificial",
    description: "As últimas novidades e análises sobre Inteligência Artificial.",
    keywords: "inteligência artificial, IA, ChatGPT, Gemini, Claude, machine learning, IA generativa, deepfake, agentes IA, automação, produtividade IA, regulamentação IA, IA saúde, IA educação",
  },
  "/financas": {
    title: "Investimentos & Finanças",
    description: "Guias completos sobre investimentos, finanças pessoais e educação financeira.",
    keywords: "investimentos, finanças pessoais, renda passiva, tesouro direto, fundos imobiliários, FIIs, bitcoin, criptomoedas, IRPF, planejamento financeiro, educação financeira, ações B3, carteira de investimentos, sair das dívidas",
  },
  "/geek": {
    title: "Geek",
    description: "Games, séries, filmes e cultura geek.",
    keywords: "cultura geek, games, jogos, séries, filmes, Assassins Creed, Avatar, Vikings, simulador de guerra, reviews de jogos, franquias de games, universo geek, Hell Let Loose, cinema",
  },
  "/cotacoes": {
    title: "Cotações em Tempo Real",
    description: "Acompanhe cotações de ações da B3, câmbio, metais preciosos e criptomoedas em tempo real.",
    keywords: "cotações, ações B3, câmbio, dólar, euro, bitcoin, criptomoedas, ouro, prata, metais preciosos, bolsa de valores, mercado financeiro, cotação em tempo real, investimentos",
  },
  "/entrar": {
    title: "Entrar",
    description: "Acesse sua conta no VICIO<CODE> para personalizar sua experiência.",
    keywords: "login, entrar, criar conta, cadastro, VICIO CODE, acesso, conta",
  },
  "/redefinir-senha": {
    title: "Redefinir Senha",
    description: "Defina uma nova senha para sua conta no VICIO<CODE>.",
    keywords: "redefinir senha, esqueci senha, recuperar conta, nova senha",
  },
  "/sobre": {
    title: "Sobre Nós",
    description: "Conheça o VICIO<CODE>, seu portal de IA, investimentos, cultura geek e otaku.",
    keywords: "sobre, VICIO CODE, equipe, missão, portal tecnologia, blog brasileiro, conteúdo digital, quem somos",
  },
  "/contato": {
    title: "Contato",
    description: "Entre em contato com a equipe do VICIO<CODE>.",
    keywords: "contato, fale conosco, email, suporte, VICIO CODE, mensagem, feedback",
  },
  "/privacidade": {
    title: "Política de Privacidade",
    description: "Política de privacidade do VICIO<CODE>.",
    keywords: "política de privacidade, dados pessoais, LGPD, privacidade, cookies, proteção de dados",
  },
  "/termos": {
    title: "Termos de Uso",
    description: "Termos de uso do VICIO<CODE>.",
    keywords: "termos de uso, condições, regras, uso do site, termos e condições",
  },
  "/politica-conteudo": {
    title: "Política de Conteúdo",
    description: "Política de conteúdo do VICIO<CODE>.",
    keywords: "política de conteúdo, diretrizes, regras de publicação, moderação, comunidade",
  },
  "/instalar": {
    title: "Instalar App",
    description: "Instale o VICIO<CODE> como aplicativo no seu dispositivo.",
    keywords: "instalar app, PWA, aplicativo, download, VICIO CODE app, celular, desktop",
  },
  "/configuracoes": {
    title: "Configurações",
    description: "Personalize sua experiência no VICIO<CODE>.",
    keywords: "configurações, preferências, tema, personalizar, conta, perfil",
  },
  "/otaku/tensura": {
    title: "TenSura: Guia Completo — Temporadas, Filmes e Personagens",
    description: "Guia completo de That Time I Got Reincarnated as a Slime (TenSura): 3 temporadas + T4 em abril 2026, Filme Scarlet Bond, Tears of the Azure Sea, Rimuru Tempest, Milim, Veldora e os Demon Lords.",
    keywords: "tensura, tensei shitara slime datta ken, rimuru tempest, milim nava, veldora, demon lords, temporada 4, filme scarlet bond, tears azure sea, slime diaries, isekai anime 2026, benimaru, shion, diablo, nazarick",
  },
  "/otaku/overlord": {
    title: "Overlord: Guia Completo — Ainz Ooal Gown, Temporadas e Nazarick",
    description: "Guia completo de Overlord: 4 temporadas (2015–2022), filme The Sacred Kingdom (2024), Ainz Ooal Gown, Albedo, Demiurge, Shalltear e os Floor Guardians da Grande Tumba de Nazarick. Tudo sobre a T5.",
    keywords: "overlord anime, ainz ooal gown, momonga, nazarick, floor guardians, albedo overlord, demiurge, shalltear, sacred kingdom 2024, overlord temporada 5, isekai dark fantasy, madhouse anime, kugane maruyama",
  },
  "/geek/avatar": {
    title: "Portal Avatar",
    description: "Tudo sobre a franquia Avatar de James Cameron: filmes, jogos e tecnologia.",
    keywords: "Avatar, James Cameron, Pandora, Avatar 2, Avatar 3, Frontiers of Pandora, Na'vi, filme Avatar, tecnologia CGI, cinema 3D, franquia Avatar, Ubisoft",
  },
  "/geek/crimson-desert": {
    title: "Portal Crimson Desert",
    description: "Tudo sobre Crimson Desert da Pearl Abyss: guia completo, combate, BlackSpace Engine e edições com preços em reais.",
    keywords: "Crimson Desert, Pearl Abyss, Kliff, Pywel, BlackSpace Engine, RPG ação mundo aberto, lançamento 2026, PC PS5 Xbox",
  },
  "/geek/assassins-creed": {
    title: "Portal Assassin's Creed",
    description: "Guias, análises e ranking completo de todos os jogos Assassin's Creed.",
    keywords: "Assassins Creed, AC Valhalla, AC Shadows, AC Odyssey, AC Black Flag, AC Origins, AC Mirage, Ubisoft, jogos de mundo aberto, ranking Assassins Creed, história, parkour",
  },
  "/post/solo-leveling-guia-completo-temporadas": {
    title: "Solo Leveling: Guia Completo — Temporadas, Filme e Personagens",
    description: "Solo Leveling completo: T1 A-1 Pictures (jan-mar 2024, 12 eps), T2 Arise from the Shadow (jan-mar 2025, 13 eps), filme ReAwakening (nov 2024). Sung Jinwoo, Cha Hae-in e os Monarcas. Anime do Ano Crunchyroll 2025.",
    keywords: "Solo Leveling, Sung Jinwoo, Monarca das Sombras, A-1 Pictures, temporadas Solo Leveling, Shadow Monarch, Cha Hae-in, manhwa, anime 2024, Crunchyroll Anime Awards, ReAwakening",
  },
  "/post/tsukimichi-moonlit-fantasy-guia-completo": {
    title: "Tsukimichi Moonlit Fantasy: Guia Completo de Temporadas e Personagens",
    description: "Tsuki ga Michibiku Isekai Douchuu: T1 C2C (jul-set 2021, 12 eps), T2 J.C.Staff (jan-jun 2024, 25 eps), T3 anunciada. Makoto Misumi banido pela deusa, acompanhado de Tomoe e Mio nas terras selvagens de Elysion.",
    keywords: "Tsukimichi, Tsuki ga Michibiku Isekai Douchuu, Moonlit Fantasy, Makoto Misumi, Tomoe, Mio, isekai 2021, isekai 2024, J.C.Staff, Elysion, temporadas Tsukimichi",
  },
  "/post/mugen-gacha-level-9999-traicao-dungeon": {
    title: "My Gift Lvl 9999 Unlimited Gacha: Traído na Dungeon — Guia Completo",
    description: "Shinjiteita Nakamatachi ni Dungeon Okuchi de Korosarekaketa: anime J.C.Staff out-dez 2025 no HIDIVE. Light traído pelos companheiros no Abismo usa o Gacha Ilimitada para invocar guerreiras nível 9999 e se vingar.",
    keywords: "Mugen Gacha, My Gift Lvl 9999, Shinjiteita Nakamatachi, dungeon okuchi, traição isekai, vingança anime 2025, J.C.Staff HIDIVE, Gift Otome, Level 9999, isekai revenge",
  },
  "/post/kizoku-tensei-noble-reincarnation-guia": {
    title: "Noble Reincarnation (Kizoku Tensei): O Príncipe Mais Forte — Guia 2026",
    description: "Kizoku Tensei anime CompTown estreou jan 2026 (12 eps, Crunchyroll). Noah Ararat, 13º filho do imperador reencarnado, com cap de nível infinito e habilidade de absorver poderes de servos leais.",
    keywords: "Kizoku Tensei, Noble Reincarnation, Noah Ararat, príncipe isekai, CompTown anime, isekai 2026, Megumareta Umare, Born Blessed, cap nível infinito, anime inverno 2026",
  },
  "/post/hell-mode-gamer-isekai-guia-completo": {
    title: "Hell Mode: O Gamer no Isekai com Dificuldade Máxima — Guia Completo",
    description: "Hell Mode anime Yokohama Animation Laboratory estreou jan 2026 (HIDIVE/Prime Video). Kenichi Yamada, gamer de 35 anos reencarnado como Allen o Invocador no Hell Mode — 100x mais XP necessário.",
    keywords: "Hell Mode, Yarikomizuki Gamer, isekai gamer, Allen Invocador, Yokohama Animation Lab, anime 2026, HIDIVE, isekai dificuldade máxima, Hell Mode anime, invocador isekai",
  },
  "/post/isekai-nonbiri-nouka-farming-life-guia": {
    title: "Farming Life in Another World (Isekai Nonbiri Nouka): Guia Completo",
    description: "Isekai Nonbiri Nouka: T1 anime Zero-G (jan-mar 2023, 12 eps). Hiraku Machio reencarnado com a Ferramenta Universal de Fazenda. Vampiras, elfas e dragões na fazenda. T2 confirmada abril 2026.",
    keywords: "Isekai Nonbiri Nouka, Farming Life Another World, Hiraku Machio, fazenda isekai, Zero-G anime 2023, temporada 2 Farming Life 2026, slice of life isekai, Loo vampira, Amazon Prime",
  },
  "/post/maousama-retry-demon-lord-guia-completo": {
    title: "Demon Lord Retry! (Maou-sama): Guia Completo — Temporadas e Personagens",
    description: "Maou-sama Retry: T1 Ekachi Epilka (jul-set 2019, 12 eps) e versão R Gekkō (out-dez 2024). Akira Oono, programador de 45 anos, reencarnado como o Rei Demônio Hakuto Kunai de seu próprio MMORPG.",
    keywords: "Maou-sama Retry, Demon Lord Retry, Hakuto Kunai, Aku, programador isekai, Ekachi Epilka 2019, Maou-sama Retry R 2024, Kenjiro Tsuda, Angel White, Yu Kirino, rei demônio isekai",
  },
  "/post/okiraku-ryoushu-territory-defense-guia": {
    title: "Easygoing Territory Defense (Okiraku Ryoushu): Guia Completo 2026",
    description: "Okiraku Ryoushu anime NAZ estreou jan 2026 (12 eps, Crunchyroll). Van usa a Magia de Produção para transformar um vilarejo esquecido na cidade-fortaleza mais poderosa do reino.",
    keywords: "Okiraku Ryoushu, Easygoing Territory Defense, Van Magia de Produção, NAZ anime 2026, isekai construção, defesa território isekai, Crunchyroll 2026, noble reincarnation build, anime inverno 2026",
  }
,
  "/post/crimson-desert-bosses-guia-chefes": {
    title: "Crimson Desert: Guia de Bosses — Como Derrotar Todos os Chefes",
    description: "Guia completo dos 76 bosses de Crimson Desert: estratégias, fraquezas, localização e recompensas de Myurdin, Kailok, Reed Devil, White Horn, Staglord, Hexe Marie, Kearush, Caliburn e mais. Patch 23/03/2026.",
    keywords: "Crimson Desert bosses, chefes Crimson Desert, Kailok Hornsplitter, Reed Devil, White Horn, Hexe Marie, Kearush Slayer, Caliburn boss final, guia bosses Pywel, fraquezas bosses",
  },
  "/post/crimson-desert-guia-iniciantes-dicas": {
    title: "Crimson Desert: Guia para Iniciantes — 20 Dicas Essenciais",
    description: "20 dicas para iniciantes em Crimson Desert: progressão sem XP, fast travel, combate avançado, inventário, culinária, companheiros e todos os sistemas que o jogo não explica. Evite os erros mais comuns em Pywel.",
    keywords: "Crimson Desert iniciantes, dicas Crimson Desert, guia começar Pywel, Abyss Artifacts, fast travel Crimson Desert, combate iniciante, Kliff Greymanes, Crimson Desert tips",
  },
  "/post/crimson-desert-melhores-equipamentos-inicio": {
    title: "Crimson Desert: Melhores Armas e Equipamentos do Início — Onde Encontrar",
    description: "Os melhores equipamentos do início ao meio de Crimson Desert: Sword of the Lord, Tauria's Curved Sword, Flamespitter, Knuckledrill, armaduras do Fallen Kingdom, Palm Concentrates e guia de refinamento completo.",
    keywords: "Crimson Desert equipamentos, melhores armas Crimson Desert, Sword of the Lord, Tauria Curved Sword, Flamespitter, Knuckledrill, Palm Concentrate, onde encontrar armas Pywel, refinamento armas",
  },
  "/post/poupanca-vs-cdb-tesouro-2026": {
    title: "Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?",
    description: "Comparação completa entre Poupança, CDB e Tesouro Direto em 2026: rendimentos, liquidez, riscos, imposto de renda e qual escolher para cada objetivo financeiro.",
    keywords: "poupança vs CDB vs Tesouro Direto, melhor investimento 2026, rendimento poupança, CDB liquidez diária, Tesouro Selic, renda fixa comparação, investimento iniciante, Selic 2026",
  },
  "/post/reserva-emergencia-2026-como-montar": {
    title: "Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo",
    description: "Guia completo para montar reserva de emergência em 2026: quanto guardar, onde investir (Tesouro Selic vs CDB), quanto tempo leva e os erros mais comuns. Com simulações por faixa de renda.",
    keywords: "reserva emergência 2026, quanto guardar reserva emergência, onde investir reserva emergência, Tesouro Selic reserva, CDB liquidez diária, quanto meses de despesas, reserva CLT autônomo",
  },
};

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  otaku: ["otaku", "anime", "mangá", "manhwa", "cultura japonesa", "cosplay", "japão", "light novel", "série anime", "comunidade otaku"],
  ia: ["inteligência artificial", "IA", "machine learning", "ChatGPT", "Gemini", "automação", "tecnologia", "deep learning", "IA generativa", "futuro da IA"],
  invest: ["investimentos", "finanças", "renda passiva", "educação financeira", "mercado financeiro", "bolsa de valores", "dinheiro", "economia", "poupança", "rentabilidade"],
  geek: ["geek", "games", "jogos", "cultura pop", "séries", "filmes", "tecnologia", "nerd", "entretenimento", "reviews"],
};

function setMetaTag(attrName: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrCreateScript(dataAttr: string): HTMLScriptElement {
  let el = document.querySelector(`script[data-jsonld="${dataAttr}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-jsonld", dataAttr);
    document.head.appendChild(el);
  }
  return el;
}

function clearScript(dataAttr: string) {
  const el = document.querySelector(`script[data-jsonld="${dataAttr}"]`);
  if (el) el.textContent = "";
}

const DynamicSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = SITE_NAME;
    let description = "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku.";
    // og:image MUST be absolute URL for WhatsApp/Facebook/Discord to render correctly
    let image = `${BASE_URL}/og-image.jpg`;
    let keywords = "VICIO CODE, tecnologia, IA, investimentos, geek, otaku, animes, mangás, finanças, games";
    const url = `${BASE_URL}${pathname}`;
    const isPost = pathname.startsWith("/post/");

    let post = isPost ? blogPosts.find((p) => p.slug === pathname.replace("/post/", "")) : undefined;

    if (post) {
      title = post.title;
      description = post.excerpt;
      // Ensure absolute URL — imported assets resolve to relative paths like /assets/xyz.webp
      const rawImage = String(post.image);
      image = rawImage.startsWith("http") ? rawImage : `${BASE_URL}${rawImage}`;
      const categoryKws = CATEGORY_KEYWORDS[post.category] || [];
      const titleWords = post.title.toLowerCase().replace(/[^a-záàâãéèêíïóôõúç\s]/g, "").split(/\s+/).filter(w => w.length > 3);
      keywords = [...new Set([...categoryKws, ...titleWords.slice(0, 5)])].join(", ");
    } else {
      const pageMeta = PAGE_META[pathname];
      if (pageMeta) {
        title = pageMeta.title;
        description = pageMeta.description;
        keywords = pageMeta.keywords;
      }
    }

    const fullTitle = pathname === "/" ? `${SITE_NAME} - IA, Investimentos, Geek & Otaku` : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // ── Standard meta ────────────────────────────────────────────────────────
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // ── Open Graph ───────────────────────────────────────────────────────────
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);          // absolute URL
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", title);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", isPost ? "article" : "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "pt_BR");

    // ── Twitter Card ─────────────────────────────────────────────────────────
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);         // absolute URL
    setMetaTag("name", "twitter:image:alt", title);

    // ── Robots — ensure all pages are indexable ─────────────────────────────
    // Private pages should not be indexed
    const privatePaths = ["/configuracoes", "/entrar", "/redefinir-senha", "/painel-social", "/instalar"];
    const isPrivate = privatePaths.some(p => pathname.startsWith(p)) || pathname.startsWith("/perfil/") || pathname.startsWith("/auth/");
    const robotsContent = isPrivate
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-image-preview:large";
    setMetaTag("name", "robots", robotsContent);
    setMetaTag("name", "googlebot", isPrivate ? "noindex, nofollow" : "index, follow");
    setMetaTag("name", "googlebot", "index, follow");

    // ── Canonical ────────────────────────────────────────────────────────────
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // ── JSON-LD: main entity ─────────────────────────────────────────────────
    const mainEl = setOrCreateScript("dynamic");
    const breadcrumbEl = setOrCreateScript("breadcrumb");
    const faqEl = setOrCreateScript("faq");

    const categoryPages: Record<string, string> = {
      "/ia": "Inteligência Artificial",
      "/financas": "Finanças",
      "/geek": "Geek",
      "/otaku": "Otaku",
    };
    const isCategory = pathname in categoryPages;

    // Shared publisher / organization block (E-E-A-T)
    const organization = {
      "@type": "Organization",
      name: "VICIO<CODE>",
      url: `${BASE_URL}/sobre`,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
      sameAs: SITE_SOCIAL,
    };

    if (post) {
      // ── Article schema ──────────────────────────────────────────────────
      const articleJsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: image,
        url: url,
        datePublished: post.date,
        // dateModified signals freshness to Google — fall back to datePublished if not set
        dateModified: post.updatedAt ?? post.date,
        author: {
          ...organization,
          // Treat VICIO<CODE> as the author organization for E-E-A-T
        },
        publisher: organization,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: keywords,
        inLanguage: "pt-BR",
      };
      mainEl.textContent = JSON.stringify(articleJsonLd);

      // ── Breadcrumb ──────────────────────────────────────────────────────
      const categoryMap: Record<string, { path: string; name: string }> = {
        ia: { path: "/ia", name: "Inteligência Artificial" },
        invest: { path: "/financas", name: "Finanças" },
        geek: { path: "/geek", name: "Geek" },
        otaku: { path: "/otaku", name: "Otaku" },
      };
      const cat = categoryMap[post.category] || { path: "/", name: "Home" };
      breadcrumbEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: cat.name, item: `${BASE_URL}${cat.path}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      });

      // ── FAQPage schema — only when post has faq data ────────────────────
      if (post.faq && post.faq.length > 0) {
        faqEl.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        });
      } else {
        clearScript("faq");
      }
    } else if (isCategory) {
      const catName = categoryPages[pathname];
      mainEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: catName,
        description: description,
        url: url,
        publisher: organization,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: BASE_URL },
        inLanguage: "pt-BR",
      });
      breadcrumbEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: catName, item: url },
        ],
      });
      clearScript("faq");
    } else {
      mainEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: BASE_URL,
        description: description,
        publisher: organization,
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "pt-BR",
      });
      clearScript("breadcrumb");
      clearScript("faq");
    }
  }, [pathname]);

  return null;
};

export default DynamicSEO;
