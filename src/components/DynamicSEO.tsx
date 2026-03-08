import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "@/data/posts";

const SITE_NAME = "VICIO<CODE>";
const BASE_URL = "https://viciocode.com.br";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": { title: "IA, Investimentos, Geek & Otaku", description: "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku. Conteúdo de qualidade para mentes curiosas." },
  "/otaku": { title: "Otaku", description: "Mangás, manhwas, manhuas, animes e tudo do universo otaku." },
  "/ia": { title: "Inteligência Artificial", description: "As últimas novidades e análises sobre Inteligência Artificial." },
  "/financas": { title: "Investimentos & Finanças", description: "Guias completos sobre investimentos, finanças pessoais e educação financeira." },
  "/geek": { title: "Geek", description: "Games, séries, filmes e cultura geek." },
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

const DynamicSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = SITE_NAME;
    let description = "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku.";
    let image = `${BASE_URL}/og-image.jpg`;
    const url = `${BASE_URL}${pathname}`;

    // Check if it's a post page
    if (pathname.startsWith("/post/")) {
      const slug = pathname.replace("/post/", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        title = post.title;
        description = post.excerpt;
        // Post images are bundled assets (hashed URLs), make them absolute
        image = post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`;
      }
    } else {
      // Check static pages
      const pageMeta = PAGE_META[pathname];
      if (pageMeta) {
        title = pageMeta.title;
        description = pageMeta.description;
      }
    }

    const fullTitle = pathname === "/" ? `${SITE_NAME} - IA, Investimentos, Geek & Otaku` : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Standard meta
    setMetaTag("name", "description", description);

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
  }, [pathname]);

  return null;
};

export default DynamicSEO;
