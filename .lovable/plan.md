## Painel GTA VI — Plano

Criar painel destaque `/geek/gta-vi` espelhando o padrão de Bannerlord/Crimson Desert, com 6 posts novos de 1.500+ palavras de prosa, todos com EditorialTake + ArticleSources + FAQ + readTime + DynamicSEO. **Apenas informações verificáveis** das fontes oficiais (Rockstar Games Newswire, Take-Two Interactive earnings calls, PlayStation Blog, Xbox Wire) e veículos consolidados (IGN, GameSpot, Eurogamer, The Verge, Polygon).

### 1. Portal e destaque na categoria Geek

- **Novo:** `src/pages/posts/GtaViPortal.tsx` — hub com cards dos artigos, banner hero, breadcrumb, AdInArticle, CommentSection.
- **Rota:** `/geek/gta-vi` em `src/App.tsx`.
- **Destaque em `src/pages/GeekPage.tsx`:** adicionar `SpecialPortalCard` GTA VI **como primeiro card** dos Painéis Especiais (badge "🔥 Destaque").
- **Hero do portal:** `src/assets/gta-vi-portal-hero.webp` (gerada via imagegen, paleta neon Vice City / pôr-do-sol Miami — sem usar logos/personagens reais protegidos).

### 2. Posts a criar (6 novos)

Cada post tem hero `.webp` própria gerada por IA (estética inspirada em Vice City — palmeiras, neon, cores quentes — sem reproduzir personagens/marca registrada). Todos com 1.500+ palavras de prosa, tabelas onde fizer sentido, FAQ, EditorialTake, ArticleSources, registro em `posts.ts`, `DynamicSEO.tsx`, `App.tsx` e `BreadcrumbContext` (categoria geek → painel GTA VI).

1. **`gta-vi-pre-venda-edicoes-2026`** — Pré-venda, edições anunciadas, bônus, datas de abertura na PS Store / Xbox Store, política de reembolso da Take-Two.
2. **`gta-vi-precos-brasil-dolar-real-2026`** — Tabela comparativa USD × BRL (preço sugerido, regionalização, conversão, histórico de preços Take-Two em GTA V/RDR2), edições e DLC anunciados.
3. **`gta-vi-plataformas-requisitos-2026`** — PS5 / Xbox Series X|S confirmados, ausência de PS4/Xbox One, status oficial sobre PC, expectativa baseada no histórico Rockstar (GTA V/RDR2 demoraram 18+ meses).
4. **`gta-vi-mecanicas-gameplay-2026`** — Mecânicas confirmadas pelos trailers oficiais 1 e 2: dupla protagonista, mira/cobertura, NPCs reativos, mapa Leonida, ciclo dia/noite, fauna, sem inventar features.
5. **`gta-vi-trailers-marketing-2026`** — Linha do tempo: anúncio dez/2023, trailer 1 (dez/2023, recorde YouTube), trailer 2 (mai/2025), próximas janelas confirmadas pela Take-Two, plano de marketing do verão 2026.
6. **`gta-vi-mapa-leonida-vice-city-2026`** — Geografia confirmada de Leonida (Vice City + interior, Everglades, Keys), comparação de tamanho com San Andreas, locais identificados nos trailers oficiais.

> Os dois posts existentes (`gta-vi-guia-completo-2026` e `gta-vi-novembro-2026-vice-city-leonida`) entram no portal como **cards de leitura complementar**. O primeiro tem data de lançamento antiga (26/09/2026) e será corrigido para 19/11/2026 conforme confirmação oficial atual da Take-Two.

### 3. Padrão editorial e dados

- **Fontes mínimas por post:** Rockstar Newswire, Take-Two IR, PlayStation Blog/Xbox Wire, dois veículos especializados.
- Toda alegação numérica (preço, data, tamanho de mapa) é marcada com fonte. Onde não houver confirmação oficial, o texto usa "ainda não confirmado" — sem invenção.
- FAQ com 4-6 perguntas reais; structured data herdado do template padrão.

### 4. Imagens

- Geradas via `imagegen` em estilo "neon noir Miami / Vice City", paleta rosa-magenta + ciano + dourado pôr-do-sol. Prompts evitam: logos, personagens reconhecíveis, mascotes, fontes oficiais.
- Todos os arquivos vão em `src/assets/gta-vi-*.webp`.

### 5. Tarefas técnicas auxiliares

- Atualizar `src/components/Breadcrumb.tsx` / mapeamento de subtópicos se necessário para reconhecer `subtopic: "gta-vi"` (novo valor a adicionar em `src/types/blog.ts`).
- Adicionar label `"gta-vi": "GTA VI"` em `SUBTOPIC_LABELS` da `GeekPage` para virar filtro automático.
- Regenerar `sitemap.xml` e `sitemap-images.xml` via `scripts/generate-sitemaps.mjs` (já roda no prebuild).
- Validar build, ausência de erros JSX, e contagem de palavras ≥ 1.500 em cada post via script rápido.

### Resumo do que muda

```
+ src/assets/gta-vi-portal-hero.webp
+ src/assets/gta-vi-pre-venda-edicoes.webp
+ src/assets/gta-vi-precos.webp
+ src/assets/gta-vi-plataformas.webp
+ src/assets/gta-vi-mecanicas.webp
+ src/assets/gta-vi-trailers.webp
+ src/assets/gta-vi-mapa-leonida.webp
+ src/pages/posts/GtaViPortal.tsx
+ src/pages/posts/GtaViPreVendaEdicoes2026.tsx
+ src/pages/posts/GtaViPrecosBrasilDolar2026.tsx
+ src/pages/posts/GtaViPlataformasRequisitos2026.tsx
+ src/pages/posts/GtaViMecanicasGameplay2026.tsx
+ src/pages/posts/GtaViTrailersMarketing2026.tsx
+ src/pages/posts/GtaViMapaLeonida2026.tsx
~ src/App.tsx                    (7 rotas novas)
~ src/data/posts.ts              (6 entradas novas + ajuste de data do guia antigo)
~ src/components/DynamicSEO.tsx  (6 PAGE_META novos + portal)
~ src/pages/GeekPage.tsx         (card destaque GTA VI primeiro + label subtopic)
~ src/types/blog.ts              (adiciona "gta-vi" em Subtopic)
```

Pronto para implementar quando aprovado.