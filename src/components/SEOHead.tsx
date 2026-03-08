import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = "VICIO<CODE>";
const BASE_URL = "https://viciocode.com.br";

const SEOHead = ({ title, description, image, url, type = "article" }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
    const fullImage = image
      ? image.startsWith("http")
        ? image
        : `${BASE_URL}${image}`
      : `${BASE_URL}/og-image.jpg`;

    document.title = fullTitle;

    const metaTags: Record<string, string> = {
      "description": description,
      "og:title": title,
      "og:description": description,
      "og:image": fullImage,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:alt": title,
      "og:url": fullUrl,
      "og:type": type,
      "og:site_name": SITE_NAME,
      "og:locale": "pt_BR",
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": fullImage,
      "twitter:image:alt": title,
    };

    const cleanups: (() => void)[] = [];

    Object.entries(metaTags).forEach(([key, value]) => {
      const isOg = key.startsWith("og:") || key.startsWith("twitter:");
      const attr = isOg ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        cleanups.push(() => el?.remove());
      }

      const prev = el.getAttribute("content");
      el.setAttribute("content", value);

      if (!cleanups.length || prev !== null) {
        cleanups.push(() => {
          if (prev !== null) el?.setAttribute("content", prev);
        });
      }
    });

    return () => {
      document.title = `${SITE_NAME} - IA, Investimentos, Geek & Otaku`;
    };
  }, [title, description, image, url, type]);

  return null;
};

export default SEOHead;
