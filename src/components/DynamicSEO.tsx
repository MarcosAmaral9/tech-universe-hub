import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "@/data/posts";

const SITE_NAME = "VICIO<CODE>";
const BASE_URL = "https://viciocode.com.br";

// Pages where AdSense should NOT load
const NO_ADS_PAGES = ["/sobre", "/contato", "/privacidade", "/termos", "/politica-conteudo", "/painel-social", "/instalar"];

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
  "/geek/avatar": {
    title: "Portal Avatar",
    description: "Tudo sobre a franquia Avatar de James Cameron: filmes, jogos e tecnologia.",
    keywords: "Avatar, James Cameron, Pandora, Avatar 2, Avatar 3, Frontiers of Pandora, Na'vi, filme Avatar, tecnologia CGI, cinema 3D, franquia Avatar, Ubisoft",
  },
  "/geek/assassins-creed": {
    title: "Portal Assassin's Creed",
    description: "Guias, análises e ranking completo de todos os jogos Assassin's Creed.",
    keywords: "Assassins Creed, AC Valhalla, AC Shadows, AC Odyssey, AC Black Flag, AC Origins, AC Mirage, Ubisoft, jogos de mundo aberto, ranking Assassins Creed, história, parkour",
  },
};

// Keywords by category for blog posts
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

function loadAdSense() {
  if (document.querySelector('script[src*="adsbygoogle"]')) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907992121422514";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

function removeAdSense() {
  const script = document.querySelector('script[src*="adsbygoogle"]');
  if (script) script.remove();
}

const DynamicSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = SITE_NAME;
    let description = "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku.";
    let image = `${BASE_URL}/og-image.jpg`;
    let keywords = "VICIO CODE, tecnologia, IA, investimentos, geek, otaku, animes, mangás, finanças, games";
    const url = `${BASE_URL}${pathname}`;

    // Check if it's a post page
    if (pathname.startsWith("/post/")) {
      const slug = pathname.replace("/post/", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        title = post.title;
        description = post.excerpt;
        image = post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`;
        // Build keywords from post title words + category keywords
        const categoryKws = CATEGORY_KEYWORDS[post.category] || [];
        const titleWords = post.title.toLowerCase().replace(/[^a-záàâãéèêíïóôõúç\s]/g, "").split(/\s+/).filter(w => w.length > 3);
        keywords = [...new Set([...categoryKws, ...titleWords.slice(0, 5)])].join(", ");
      }
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

    // Standard meta
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", title);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", pathname.startsWith("/post/") ? "article" : "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "pt_BR");

    // Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
    setMetaTag("name", "twitter:image:alt", title);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // AdSense - conditional loading
    const shouldShowAds = !NO_ADS_PAGES.some(p => pathname === p || pathname.startsWith(p + "/"));
    if (shouldShowAds) {
      loadAdSense();
    } else {
      removeAdSense();
    }

    // JSON-LD Structured Data
    let scriptEl = document.querySelector('script[data-jsonld="dynamic"]') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.setAttribute("data-jsonld", "dynamic");
      document.head.appendChild(scriptEl);
    }

    // BreadcrumbList JSON-LD
    let breadcrumbEl = document.querySelector('script[data-jsonld="breadcrumb"]') as HTMLScriptElement | null;
    if (!breadcrumbEl) {
      breadcrumbEl = document.createElement("script");
      breadcrumbEl.setAttribute("type", "application/ld+json");
      breadcrumbEl.setAttribute("data-jsonld", "breadcrumb");
      document.head.appendChild(breadcrumbEl);
    }

    const categoryPages: Record<string, string> = {
      "/ia": "Inteligência Artificial",
      "/financas": "Finanças",
      "/geek": "Geek",
      "/otaku": "Otaku",
    };

    const isCategory = pathname in categoryPages;
    const isPost = pathname.startsWith("/post/");

    if (isPost) {
      const slug = pathname.replace("/post/", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        const articleJsonLd = {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: image,
          url: url,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            name: "VICIO<CODE>",
            logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512x512.png` },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          keywords: keywords,
        };
        scriptEl.textContent = JSON.stringify(articleJsonLd);

        const categoryMap: Record<string, { path: string; name: string }> = {
          ia: { path: "/ia", name: "Inteligência Artificial" },
          invest: { path: "/financas", name: "Finanças" },
          geek: { path: "/geek", name: "Geek" },
          otaku: { path: "/otaku", name: "Otaku" },
        };
        const cat = categoryMap[post.category] || { path: "/", name: "Home" };
        const breadcrumb = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: cat.name, item: `${BASE_URL}${cat.path}` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        };
        breadcrumbEl.textContent = JSON.stringify(breadcrumb);
      }
    } else if (isCategory) {
      const catName = categoryPages[pathname];
      scriptEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: catName,
        description: description,
        url: url,
        isPartOf: { "@type": "WebSite", name: "VICIO<CODE>", url: BASE_URL },
      });

      breadcrumbEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: catName, item: url },
        ],
      });
    } else {
      scriptEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "VICIO<CODE>",
        url: BASE_URL,
        description: description,
        publisher: {
          "@type": "Organization",
          name: "VICIO<CODE>",
          logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512x512.png` },
        },
      });
      breadcrumbEl.textContent = "";
    }
  }, [pathname]);

  return null;
};

export default DynamicSEO;
