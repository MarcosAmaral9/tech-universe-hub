# Feeds RSS, busca avançada e dados estruturados

Três entregas independentes: feeds RSS por categoria e por tag, uma página de busca com filtros e paginação, e o reforço do Schema.org nos posts.

## 1. Feeds RSS

Geração estática no `prebuild`, a partir de `src/data/posts.ts` (mesma fonte do sitemap), sem depender de PHP:

- `/feed.xml` — todos os posts (últimos 50)
- `/feed/ia.xml`, `/feed/financas.xml`, `/feed/geek.xml`, `/feed/otaku.xml`
- `/feed/tag/<tag>.xml` para cada subtópico usado

Cada item traz título, link absoluto HTTPS, `guid`, `pubDate`, descrição (excerpt) e a imagem hero como `<enclosure>`. Os feeds serão anunciados via `<link rel="alternate" type="application/rss+xml">` no `index.html` (feed geral) e nas páginas de categoria e tag (feed específico), além de links visíveis no rodapé.

## 2. Busca com filtros e paginação

Nova rota `/busca` (indexável apenas na forma base; resultados com query recebem `noindex`):  
Já tenho a pagina arquivo, utilize e melhore ela ao inves de criar  tudo do zero, veeeerifiqye a 

- Campo de texto com busca em título, resumo e tags
- Filtros por categoria (IA, Finanças, Geek, Otaku) e por tag/subtópico
- Destaque (`<mark>`) do termo pesquisado no título e no resumo
- Paginação de 12 resultados por página, estado refletido na URL (`?q=`, `?cat=`, `?tag=`, `?page=`)
- Ordenação por relevância (título > tag > resumo) e depois por data

O modal de busca do cabeçalho passa a oferecer "Ver todos os resultados", levando para `/busca?q=...`, mantendo o atalho rápido atual.

## 3. Dados estruturados dos posts

Hoje o post renderizado pelo React emite `Article`, enquanto o HTML pré-renderizado emite `BlogPosting` — dois tipos diferentes para a mesma URL. Padronizar em `BlogPosting` nos dois lugares e completar os campos:

- `author` como `Person` (Marcos) com `url` da página de autor, `publisher` como `Organization` com logo
- `image` como `ImageObject` com largura/altura
- `datePublished` / `dateModified` em ISO completo
- `articleSection`, `keywords`, `wordCount`, `inLanguage`, `mainEntityOfPage`, `isAccessibleForFree`
- Manter `BreadcrumbList` e `FAQPage` já existentes, sem duplicar entre o HTML estático e o Helmet

## Detalhes técnicos

- Novo `scripts/generate-feeds.mjs`, encadeado no `prebuild` junto de `generate-sitemaps.mjs`; escreve em `public/feed.xml` e `public/feed/`.
- `scripts/verify-sitemap-urls.mjs` ganha checagem de que todo feed gerado tem XML válido e URLs HTTPS.
- Nova página `src/pages/SearchPage.tsx` + rota em `src/App.tsx`; helper de destaque em `src/lib/highlight.ts`; reutiliza `PostCard`, `CategoryBadge` e `subtopicLabel`.
- `src/components/DynamicSEO.tsx`: troca `Article` por `BlogPosting` e completa campos; `scripts/generate-post-html.mjs` alinhado ao mesmo objeto.
- `public/robots.txt`: permitir `/feed*` e desautorizar `/busca?*` (query strings) para não gerar páginas duplicadas.