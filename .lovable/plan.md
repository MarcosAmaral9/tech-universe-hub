# Plano: E-E-A-T, Fontes, Reescrita Editorial e Aprovação AdSense

## Escopo e aviso importante

O pedido tem 3 frentes grandes. A frente de **reescrita** é a mais pesada: 40 artigos × ≥1500 palavras = ~60.000 palavras de conteúdo factual com fontes reais. Não é viável entregar tudo numa única rodada sem comprometer a qualidade (e o pedido exige "não inventar nada"). Vou propor **arquitetura + 1ª leva (5 artigos)** nesta execução e seguir em levas seguintes mediante sua aprovação a cada bloco.

---

## Parte 1 — Infraestrutura editorial (uma vez só)

### 1.1 Componente `<AuthorBio />`

Novo componente reutilizável em `src/components/AuthorBio.tsx`:

- Foto/avatar, nome "Marcos Amaral", bio curta variável por categoria:
  - `ia` → "entusiasta de inteligência artificial"
  - `invest` → "entusiasta de finanças"
  - `geek` → "entusiasta do universo geek"
  - `otaku` → "entusiasta do mundo otaku"
- Link para `/sobre`, data de publicação e "atualizado em".
- Injeta `schema.org/Person` + `author` no JSON-LD do artigo (via prop para `DynamicSEO`).
- Inserido no topo (após o header) e no rodapé de cada artigo reescrito.

### 1.2 Componente `<ArticleSources />`

Novo em `src/components/ArticleSources.tsx`:

- Recebe array `{ title, url, publisher, accessedAt }`.
- Renderiza bloco "Fontes e referências" no fim do artigo, com `rel="noopener nofollow"` e ícone externo.
- Adiciona `citation` no JSON-LD (`citation: [{@type: "CreativeWork", url, name}]`).

### 1.3 Componente `<EditorialTake />`

Novo em `src/components/EditorialTake.tsx`:

- Bloco destacado "Opinião do Marcos" / "Análise editorial" com borda lateral colorida pela categoria.
- Garante que toda reescrita tenha um trecho de **perspectiva original** visualmente identificável (fator E-E-A-T do Google e crítico para AdSense).

### 1.4 Atualização do `DynamicSEO`

- Aceitar props `author`, `datePublished`, `dateModified`, `citations[]` para enriquecer JSON-LD `Article` / `NewsArticle`.
- Garantir `articleSection` por categoria.

---

## Parte 2 — Reescrita dos artigos (40 no total)

### Critérios obrigatórios por artigo

1. **≥1500 palavras** de corpo real (sem contar boilerplate).
2. **Apenas informação verificável** — coletada via `websearch--web_search` / `code--fetch_website` antes de escrever. Se um dado não for confirmável, é omitido.
3. **3 a 6 fontes externas** reais (sites oficiais, papers, releases, mídias estabelecidas) renderizadas via `<ArticleSources />`.
4. **Perspectiva editorial original** via `<EditorialTake />` — opinião, comparação inédita ou recorte para mercado brasileiro (ex.: preço em BRL, disponibilidade na Steam BR, tributação, dublagem PT-BR, lançamento em streaming nacional).
5. **Assinatura** via `<AuthorBio />` no topo e rodapé com a bio correta da categoria.
6. **Estrutura SEO**: H2/H3 hierárquicos, FAQ schema (3-5 perguntas), `updatedAt` preenchido, slot AdSense Leaderboard após 2º parágrafo + In-Article após cada H2 (regra do projeto).
7. **Imagem hero `.webp` única** já existente — reaproveitar.

### Lista dos 40 artigos (10 mais recentes por categoria, por `date`)

**IA** (10): 189, 182, 174, 175, 166, 167, + os próximos 4 mais recentes do mesmo bucket (a confirmar lendo `posts.ts` completo).
**Invest** (10): 190, 186, 187, 188, 183, 176, 177, 168, 169, + 1.
**Geek** (10): 191, 184, 178, 179, 170, 171, + 4.
**Otaku** (10): 192, 185, 180, 181, + 6.

A lista exata será fixada na 1ª etapa de execução lendo `src/data/posts.ts` ordenado por `date desc` por categoria.

### Ordem de execução proposta (por levas)

- **Leva 1 (esta rodada)**: infraestrutura (Parte 1) + **5 artigos piloto** (1 IA, 2 Invest, 1 Geek, 1 Otaku) — os mais recentes de cada categoria. Servem de gabarito visual e de tom.
- **Leva 2**: 10 artigos.
- **Leva 3**: 10 artigos.
- **Leva 4**: 15 artigos restantes.

Cada leva é uma mensagem sua autorizando seguir. Isso garante qualidade e respeita o limite "informação real, sem inventar".

---

## Parte 3 — Página `/sobre` (AboutPage.tsx)

Reescrever `src/pages/AboutPage.tsx` para incluir:

- **Bio completa**: "Marcos Vinícius Cavalcante Amaral, formado em Sistemas de Informação, nascido em 14/09/2000, entusiasta da tecnologia e de como ela afeta a vida humana."
- Propósito do site: portfólio profissional + fonte de renda extra.
- Áreas de interesse: IA, finanças, cultura geek, mundo otaku.
- Foto/avatar (placeholder, você troca depois).
- Bloco de contato com link para `/contato`.
- JSON-LD `Person` + `AboutPage` schema.
- Link para perfis sociais (já existentes no Footer).
- Mantém o visual/tema atual (dark, primary `#00FF87`, JetBrains Mono).

---

## Parte 4 — Plano de aprovação no Google AdSense

O AdSense já tem `ads.txt` correto. As reprovações típicas em sites como esse são: conteúdo raso, falta de E-E-A-T, navegação/políticas incompletas. Checklist completo:

### 4.1 Conteúdo (resolvido pela Parte 2)

- Mínimo 1500 palavras por artigo principal.
- Autoria visível (`AuthorBio`).
- Fontes verificáveis (`ArticleSources`).
- Opinião original (`EditorialTake`).
- Sem spoilers, sem conteúdo gerado puramente por IA sem revisão.

### 4.2 Páginas obrigatórias (auditar e completar)

- `/sobre` — reforçar identidade (Parte 3).
- `/contato` — verificar se tem e-mail real, formulário funcional, endereço.
- `/politica-de-privacidade` — confirmar menção a cookies, AdSense, GA4, direitos LGPD.
- `/termos` — confirmar.
- `/politica-de-conteudo` — já existe, confirmar.
- Adicionar **link para todas** no rodapé (já existe — apenas auditar).

### 4.3 Técnico

- **Desativar Auto Ads enquanto estiver em análise** (recomendação Google): manter apenas slots manuais. Reativar após aprovação.
- Confirmar que **não há anúncios em páginas legais** (regra de memória — verificar `AdSense.tsx`).
- Garantir `consent mode v2` no GA4/AdSense para LGPD/GDPR (revisar `CookieConsent.tsx`).
- Confirmar `robots.txt` permite `Mediapartners-Google`.
- `sitemap.xml` válido e submetido no Search Console (sitemap auto-gerado já existe).
- HTTPS em todas as páginas (Hostinger — confirmar redirect 301 no `.htaccess`).
- Sem páginas órfãs / 404 indexáveis.

### 4.4 Navegação

- Menu com todas as categorias.
- Breadcrumbs em artigos (já existe).
- Busca funcional (já existe).
- Tempo médio de sessão / pageviews por sessão — estimular com "Posts relacionados" (já existe).

### 4.5 Submissão

- Aguardar pelo menos **15-20 artigos reescritos** publicados antes de submeter (densidade editorial).
- Submeter via painel AdSense → Sites → Adicionar `viciocode.com`.
- Manter `<script>` do AdSense + meta `google-adsense-account` no `<head>` (já está).

---

## Detalhes técnicos

### Arquivos novos

- `src/components/AuthorBio.tsx`
- `src/components/ArticleSources.tsx`
- `src/components/EditorialTake.tsx`
- `src/assets/marcos-amaral-avatar.webp` (placeholder ou gerado)

### Arquivos editados (Parte 1 + 3 + piloto)

- `src/components/DynamicSEO.tsx` — props de autoria/citações.
- `src/pages/AboutPage.tsx` — bio completa.
- `src/pages/posts/<5 piloto>.tsx` — reescrita completa.
- `src/data/posts.ts` — preencher `updatedAt` nos reescritos, ajustar `excerpt` quando necessário.

### Pesquisa de fontes

Para cada artigo, antes de reescrever:

1. `websearch--web_search` no tema com `category: "news"` quando for notícia financeira/tech.
2. `code--fetch_website` em fontes oficiais (Banco Central, B3, Reuters, oficial dos jogos/animes).
3. Cross-check de pelo menos 2 fontes por afirmação numérica.
4. Se não encontrar fonte confiável → afirmação é cortada do artigo (não inventar).

### Estimativa de tempo

- Parte 1 + Parte 3: 1 rodada.
- 5 artigos piloto: 1 rodada (várias chamadas web).
- Cada leva subsequente: 1 rodada.
- **Total**: ~5 rodadas suas para concluir as 40 reescritas.

---

## O que **não** está incluído

- Tradução para outros idiomas.
- Geração de novas imagens hero (reaproveita as existentes em `.webp`).
- Migração de hospedagem ou mudanças no backend PHP/MySQL.
- Auditoria post-a-post de slots AdSense nos 117 artigos restantes (não-prioritários).

---

Confirma este plano? Ao aprovar, começo pela **Parte 1 (infra) + Parte 3 (Sobre) + 5 artigos piloto** e te entrego para revisão antes de seguir para a Leva 2.