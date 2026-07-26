import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";

/**
 * Define o atributo `data-scroll-category` no <html> conforme a seção atual,
 * permitindo colorir a barra de rolagem com a cor da categoria (igual à
 * barra de progresso de leitura). Ver estilos em src/index.css.
 */
const routeCategory = (pathname: string): string | null => {
  if (pathname.startsWith("/post/")) {
    const slug = pathname.replace("/post/", "").replace(/\/$/, "");
    return getPostBySlug(slug)?.category ?? null;
  }
  if (pathname.startsWith("/ia")) return "ia";
  if (pathname.startsWith("/investimentos") || pathname.startsWith("/cotacoes")) return "invest";
  if (pathname.startsWith("/geek")) return "geek";
  if (pathname.startsWith("/otaku")) return "otaku";
  return null;
};

const ScrollbarTheme = () => {
  const location = useLocation();

  useEffect(() => {
    const category = routeCategory(location.pathname);
    const root = document.documentElement;
    if (category) root.setAttribute("data-scroll-category", category);
    else root.removeAttribute("data-scroll-category");
  }, [location.pathname]);

  return null;
};

export default ScrollbarTheme;
