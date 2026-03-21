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
    title: "TenSura — Portal Completo",
    description: "Tudo sobre That Time I Got Reincarnated as a Slime: temporadas, filmes, personagens e o universo de Rimuru Tempest.",
    keywords: "tensura, tensei shitara slime, rimuru tempest, milim nava, temporadas, filme scarlet bond, isekai, anime 2026",
  },
  "/otaku/overlord": {
    title: "Overlord — Portal Completo",
    description: "Tudo sobre Overlord: as 4 temporadas, o filme Sacred Kingdom (2024), Ainz Ooal Gown, os Floor Guardians e o universo de Nazarick.",
    keywords: "overlord, ainz ooal gown, momonga, nazarick, floor guardians, temporadas overlord, sacred kingdom, isekai",
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
