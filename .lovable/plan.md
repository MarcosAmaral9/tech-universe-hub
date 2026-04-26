## 5 melhorias: Tema persistente, mapa, /arquivo, comentários e SEO

Cinco melhorias coordenadas. Itens 1, 2 e 5 são puramente client-side. Itens 3 e 4 exigem alterações no `public/api.php` (Hostinger/MySQL — produção) com fallback otimista no preview.

---

### 1) Persistência do modo claro/escuro (anti-flash, todas as páginas)

**Arquivos:** `index.html`, `src/contexts/ThemeContext.tsx`

- O `ThemeContext` já salva em `localStorage["viciocode-theme"]`, mas a classe `dark`/`light` só é aplicada no primeiro `useEffect` — o que provoca um *flash* na rota inicial (`/arquivo`, `/regiao/*`) antes do React montar.
- **Inserir um script inline no `<head>` do `index.html`** (antes do bundle Vite) que lê `localStorage["viciocode-theme"]` e aplica `document.documentElement.classList.add(theme)` imediatamente. Default `dark` se ausente.
- Acrescentar `<meta name="color-scheme" content="dark light">` para cor nativa de scrollbars/inputs.
- No `ThemeContext`, garantir que a leitura inicial do `useState` valide `"light" | "dark"` e dispare um `storage` listener para sincronizar entre abas.
- Resultado: `/arquivo`, `/regiao/pailune`, posts e qualquer outra rota carregam já com o tema correto, sem piscar branco→preto.

---

### 2) Mapa Pywel: rolagem suave + realce e mensagem "Local encontrado"

**Arquivos:** `src/pages/posts/CrimsonDesertMapa.tsx`, `src/components/CrimsonDesertRegionMap.tsx`

- Em `focarRegiao(slug)`:
  - Antes do `scrollIntoView`, fazer **scroll suave até o topo do componente do mapa** (`document.getElementById("mapa-pywel-interativo")?.scrollIntoView({ behavior: "smooth" })`) para que o usuário veja o pin destacado, **depois** scroll até o card detalhado.
  - Adicionar uma **mensagem efêmera "📍 Local encontrado: {Nome}"** abaixo da busca usando estado `foundMessage` que aparece com animação `animate-in fade-in slide-in-from-top-2` e some após 2,4s (mesmo timer já existente do highlight).
- Em `CrimsonDesertRegionMap.tsx`:
  - Quando `selectedKey` muda externamente, adicionar um efeito de **pulso animado** no pin: nova classe condicional `animate-[ping_1.2s_ease-out_2]` aplicada por ~2,4s no botão do pin selecionado (estado `pulseKey` controlado via prop ou efeito local).
  - Adicionar `aria-live="polite"` no painel de detalhes para leitores de tela anunciarem a região focada.
- Encapsular o mapa em `<div id="mapa-pywel-interativo">` para o scroll-anchor funcionar.

---

### 3) Filtros avançados no /arquivo (corpo do post + ordenação)

**Arquivos:** `src/pages/ArchivePage.tsx`, `src/types/blog.ts` (nenhuma alteração no schema, já há `content` em `BlogPost`)

- **Busca expandida**: o filtro atual só olha `title`/`excerpt`. Estender para também buscar em `post.content` (texto completo) — implementar com `String(post.content).toLowerCase().includes(nq)` para ser case/acento-insensível usando o `norm()` já existente.
- Adicionar **toggle "Buscar no conteúdo do post"** (checkbox) que ativa/desativa busca no corpo. Sincronizado na URL como `?deep=1`.
- **Ordenação** (`Select` shadcn) com 3 opções:
  1. **Mais recentes** (default — atual ordenação por `date desc`)
  2. **Mais antigos** (`date asc`)
  3. **Relevância** (apenas quando `q` está presente): score = (3 × ocorrências em `title`) + (2 × ocorrências em `excerpt`) + (1 × ocorrências em `content`). Empate desempata por data desc.
- Estado sincronizado na URL: `?cat=&page=&q=&deep=&sort=` (mantém o padrão atual).
- Performance: pré-normalizar os campos uma única vez via `useMemo` para evitar re-normalizar 130+ posts a cada keystroke.

---

### 4) Comentários: respostas, curtidas e ordenação (melhores / mais recentes)

**Arquivos:** `public/api.php`, `src/components/CommentSection.tsx`

#### Backend (MySQL)
- **Migrar tabela `comments`** adicionando coluna `parent_id VARCHAR(36) NULL` (FK lógica, índice). Já existe DDL no rodapé do `api.php` — atualizar e adicionar `ALTER TABLE comments ADD COLUMN parent_id VARCHAR(36) NULL, ADD INDEX idx_parent (parent_id);` no bloco de bootstrap idempotente.
- **Nova tabela `comment_likes`**:
  ```sql
  CREATE TABLE IF NOT EXISTS comment_likes (
    comment_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (comment_id, user_id),
    INDEX idx_comment (comment_id)
  );
  ```
- **Endpoints novos**:
  - `GET ?action=comments&post_id=X` — devolver `like_count` (subselect/`COUNT`) e `liked_by_me` (se `user_id` na query).
  - `POST ?action=comments` — aceitar `parent_id` opcional. Validar que parent existe e pertence ao mesmo `post_id`.
  - `POST ?action=comment-like` body `{ comment_id, user_id }` → cria like (idempotente via PK).
  - `DELETE ?action=comment-like&comment_id=&user_id=` → remove like.

#### Frontend (`CommentSection.tsx`)
- Carregar comentários com `like_count`/`liked_by_me`.
- **Estrutura em árvore**: agrupar por `parent_id`. Renderizar em 1 nível (respostas indentadas com `pl-8 border-l-2 border-primary/20`).
- Botão "Responder" em cada comentário — abre um mini-form embutido. Limite: respostas só no nível raiz (sem aninhamento múltiplo) para evitar threads infinitas.
- Botão "Curtir" (ícone `Heart`/`ThumbsUp` lucide) com contador. Otimista: incrementa imediatamente, faz POST no fundo, reverte se falhar. Requer login (mostra tooltip "Faça login para curtir" se anônimo).
- **Ordenação** (Select acima da lista):
  - **Mais recentes** (default — `created_at desc`).
  - **Melhores** (`like_count desc`, depois `created_at desc`).
- Persistir escolha em `localStorage["viciocode-comments-sort"]`.
- Manter compatibilidade com fila offline (`offlineCommentQueue`). Likes não vão para fila (precisa estar online).

---

### 5) SEO dinâmico por post (já parcialmente implementado — refinamento)

**Arquivos:** `src/components/DynamicSEO.tsx`

Hoje o `DynamicSEO.tsx` (linhas 273–291) **já gera title/description/keywords dinâmicos** a partir de `blogPosts.find(slug)`. Vamos **refinar a qualidade**:

- **Title**: garantir limite de ~60 chars. Se `post.title` > 55, encurtar com `…`. Manter sufixo `| VICIO<CODE>`.
- **Description**: garantir 150–160 chars. Se `post.excerpt` > 160, truncar no último espaço antes do limite e adicionar `…`. Se < 80, concatenar com a descrição da categoria.
- **Keywords (mín. 10)**: hoje gera `[categoryKws + 5 titleWords]` mas pode resultar em < 10. Novo algoritmo:
  1. Pegar todas keywords da categoria (`CATEGORY_KEYWORDS[post.category]`).
  2. Adicionar palavras significativas do `title` (>3 chars, sem stopwords PT-BR: "para", "como", "mais", "guia", "tudo", "sobre", etc.).
  3. Adicionar palavras significativas do `excerpt` (top 5 por frequência).
  4. Se houver `subtopic`, incluí-lo como keyword.
  5. Deduplicate e garantir mínimo de 12 keywords (preencher com keywords genéricas da categoria se faltar).
- **Article schema JSON-LD**: já existe, mas adicionar `articleSection: post.category` (mapeado para nome humano) e `wordCount` (calculado de `post.content.length / 5`).
- **`PAGE_META` overrides**: posts com entrada manual em `PAGE_META` continuam tendo prioridade — a otimização auto-gerada é fallback.
- Como `DynamicSEO` já é montado em `App.tsx`/`Layout`, **todos os 130+ posts ganham SEO otimizado automaticamente** sem editar arquivos individuais.

---

### Arquivos afetados

```text
~ index.html                                         (script anti-flash do tema)
~ src/contexts/ThemeContext.tsx                      (storage listener cross-tab)
~ src/pages/posts/CrimsonDesertMapa.tsx              (mensagem "encontrado" + scroll para o mapa)
~ src/components/CrimsonDesertRegionMap.tsx          (pulso animado no pin + aria-live)
~ src/pages/ArchivePage.tsx                          (busca em conteúdo + ordenação + URL state)
~ public/api.php                                     (parent_id em comments + tabela comment_likes + endpoints)
~ src/components/CommentSection.tsx                  (respostas, curtidas, ordenação)
~ src/components/DynamicSEO.tsx                      (title/description trim + 12+ keywords + articleSection/wordCount)
```

### Notas operacionais

- **Comentários (item 4)**: o `api.php`/MySQL roda apenas em produção (Hostinger). No preview Lovable as novas funcionalidades de like/reply seguirão a mesma estratégia atual (`/api.php` retorna 404, frontend exibe estado vazio sem quebrar).
- **Tema**: o script inline de anti-flash será mínimo (~10 linhas) e `try/catch` para localStorage indisponível.
- **SEO**: nenhuma quebra — apenas qualidade aprimorada para os posts que ainda não tinham entrada manual em `PAGE_META`.
- **Sitemap**: não precisa atualizar (nenhuma rota nova).
