/**
 * ArchivePage — /arquivo
 *
 * Arquivo completo do blog com filtros por categoria (IA, Investimentos, Geek,
 * Otaku), busca por título/excerpt e paginação client-side. Estado sincronizado
 * com URL (?cat=&page=&q=) para ser bookmarkável.
 */
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, X, Archive } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import PostCard from "@/components/PostCard";
import DynamicSEO from "@/components/DynamicSEO";
import { blogPosts } from "@/data/posts";
import type { Category } from "@/types/blog";

const PER_PAGE = 12;

const FILTERS: { key: "all" | Category; label: string; emoji: string }[] = [
  { key: "all",    label: "Todos",         emoji: "🗂️" },
  { key: "ia",     label: "IA",            emoji: "🤖" },
  { key: "invest", label: "Investimentos", emoji: "💰" },
  { key: "geek",   label: "Geek",          emoji: "🎮" },
  { key: "otaku",  label: "Otaku",         emoji: "🌸" },
];

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const ArchivePage = () => {
  const [params, setParams] = useSearchParams();

  const cat = (params.get("cat") as "all" | Category | null) ?? "all";
  const page = Math.max(1, Number(params.get("page") ?? "1"));
  const q = params.get("q") ?? "";

  const [searchInput, setSearchInput] = useState(q);

  // Debounce 200ms entre o input e a URL
  useEffect(() => {
    const t = setTimeout(() => {
      const next = new URLSearchParams(params);
      if (searchInput) next.set("q", searchInput); else next.delete("q");
      next.delete("page"); // volta pra página 1 ao buscar
      setParams(next, { replace: true });
    }, 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const setCat = (k: "all" | Category) => {
    const next = new URLSearchParams(params);
    if (k === "all") next.delete("cat"); else next.set("cat", k);
    next.delete("page");
    setParams(next, { replace: true });
  };

  const setPage = (n: number) => {
    const next = new URLSearchParams(params);
    if (n <= 1) next.delete("page"); else next.set("page", String(n));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtragem
  const filtered = useMemo(() => {
    let list = [...blogPosts];
    if (cat !== "all") list = list.filter((p) => p.category === cat);
    if (q) {
      const nq = norm(q);
      list = list.filter(
        (p) => norm(p.title).includes(nq) || norm(p.excerpt).includes(nq),
      );
    }
    // Ordena por data desc (string ISO compatível)
    list.sort((a, b) => (a.date < b.date ? 1 : -1));
    return list;
  }, [cat, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  // Counts por categoria (para badges)
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: blogPosts.length };
    for (const p of blogPosts) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  // Páginas a exibir (no máximo 7 itens, com elipses)
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const set = new Set<number>([1, totalPages, safePage]);
    for (let d = 1; d <= 2; d++) {
      if (safePage - d > 1) set.add(safePage - d);
      if (safePage + d < totalPages) set.add(safePage + d);
    }
    return [...set].sort((a, b) => a - b);
  }, [totalPages, safePage]);

  return (
    <>
      <DynamicSEO />
      <div className="min-h-[70vh] py-6 sm:py-10 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Archive className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Arquivo do blog
              </h1>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Todos os {blogPosts.length} artigos do VicioCode em um só lugar.
              Filtre por categoria ou busque por palavra-chave.
            </p>
          </header>

          {/* Filtros + busca */}
          <div className="mb-6 sm:mb-8 space-y-3">
            {/* Chips de categoria */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const active = cat === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setCat(f.key)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    <span>{f.emoji}</span>
                    <span>{f.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        active ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {counts[f.key] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Busca */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por título ou descrição…"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-9 pr-9"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted"
                  aria-label="Limpar busca"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Contador */}
            <p className="text-xs sm:text-sm text-muted-foreground">
              {filtered.length === 0 ? (
                "Nenhum post encontrado."
              ) : (
                <>
                  Exibindo <strong className="text-foreground">{start + 1}</strong>–
                  <strong className="text-foreground">
                    {Math.min(start + PER_PAGE, filtered.length)}
                  </strong>{" "}
                  de <strong className="text-foreground">{filtered.length}</strong>{" "}
                  {filtered.length === 1 ? "post" : "posts"}
                  {q && (
                    <>
                      {" "}para "<span className="text-foreground">{q}</span>"
                    </>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Grid */}
          {pageItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {pageItems.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Não encontramos posts com esses filtros.
              </p>
              <button
                onClick={() => { setSearchInput(""); setCat("all"); }}
                className="text-primary hover:underline text-sm font-semibold"
              >
                Limpar filtros
              </button>
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="mt-8 sm:mt-10">
              <Pagination>
                <PaginationContent>
                  {safePage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => { e.preventDefault(); setPage(safePage - 1); }}
                      />
                    </PaginationItem>
                  )}
                  {pageNumbers.map((n, i) => {
                    const prev = pageNumbers[i - 1];
                    const showEllipsis = prev !== undefined && n - prev > 1;
                    return (
                      <span key={n} className="flex items-center">
                        {showEllipsis && (
                          <PaginationItem><PaginationEllipsis /></PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            isActive={n === safePage}
                            onClick={(e) => { e.preventDefault(); setPage(n); }}
                          >
                            {n}
                          </PaginationLink>
                        </PaginationItem>
                      </span>
                    );
                  })}
                  {safePage < totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => { e.preventDefault(); setPage(safePage + 1); }}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* CTA secundário */}
          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Quer navegar por categoria?{" "}
              <Link to="/ia" className="text-primary hover:underline font-semibold">IA</Link>
              {" · "}
              <Link to="/financas" className="text-primary hover:underline font-semibold">Finanças</Link>
              {" · "}
              <Link to="/geek" className="text-primary hover:underline font-semibold">Geek</Link>
              {" · "}
              <Link to="/otaku" className="text-primary hover:underline font-semibold">Otaku</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchivePage;
