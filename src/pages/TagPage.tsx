import { useMemo } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { Tag as TagIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/posts";
import { subtopicLabel } from "@/lib/subtopics";
import PostCard from "@/components/PostCard";
import CategoryBadge from "@/components/CategoryBadge";

const BASE_URL = "https://viciocode.com";

const CATEGORY_PATH: Record<string, string> = {
  ia: "/ia",
  invest: "/financas",
  geek: "/geek",
  otaku: "/otaku",
};

const CATEGORY_NAME: Record<string, string> = {
  ia: "Inteligência Artificial",
  invest: "Finanças",
  geek: "Mundo Geek",
  otaku: "Mundo Otaku",
};

/**
 * /tag/:slug — hub indexável de um subtópico, cruzando todas as categorias.
 * Cada tag vira uma página com SEO próprio, o que multiplica os pontos de
 * entrada orgânicos e reforça os links internos entre artigos relacionados.
 */
const TagPage = () => {
  const { slug = "" } = useParams();

  const posts = useMemo(
    () =>
      blogPosts
        .filter((p) => p.subtopic === slug)
        .sort(
          (a, b) =>
            new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime()
        ),
    [slug]
  );

  if (posts.length === 0) return <Navigate to="/arquivo" replace />;

  const label = subtopicLabel(slug);
  const canonical = `${BASE_URL}/tag/${slug}`;
  const title = `${label}: todos os artigos | VICIO<CODE>`;
  const description = `${posts.length} artigo${posts.length > 1 ? "s" : ""} sobre ${label} no VICIO<CODE> — análises, guias e notícias apuradas em fontes oficiais.`;

  // Categorias em que a tag aparece (para links internos)
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label} — VICIO<CODE>`,
    description,
    url: canonical,
    hasPart: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE_URL}/post/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="container px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <TagIcon className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">{label}</h1>
          </div>
          <p className="text-muted-foreground">
            {posts.length} artigo{posts.length > 1 ? "s" : ""} publicado
            {posts.length > 1 ? "s" : ""} sobre {label} no VICIO&lt;CODE&gt;.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-xs text-muted-foreground">Também em:</span>
            {categories.map((c) => (
              <Link key={c} to={CATEGORY_PATH[c] ?? "/arquivo"} className="inline-flex">
                <CategoryBadge category={c} size="sm" />
                <span className="sr-only">{CATEGORY_NAME[c]}</span>
              </Link>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TagPage;
