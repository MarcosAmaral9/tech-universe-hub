## Diagnóstico

- `EditorialTake` e `ArticleSources` já são compartilhados por **156 posts** cada um.
- A ordem `EditorialTake → ArticleSources → RelatedPosts → CommentSection` (após o CTA "Comente") já é seguida em todos os posts amostrados (Seedance, ETFs, Deepfakes, MelhoresMangas, AbsoluteBatman). Não há reordenação a fazer no corpo dos posts.
- `EditorialTake` já é tematizado por categoria (`border-l-ia`, `bg-ia/5`, etc.).
- `ArticleSources` **não** recebe categoria — ícone, links e bordas usam `text-primary` (verde da marca) em vez da cor da categoria. É o único ponto fora do padrão visual descrito.

## Estratégia

Não vou migrar 156 posts para um novo wrapper (alto risco de regressão). A padronização vive nos dois componentes existentes; basta endurecê-los e plugar `category` no `ArticleSources`.

### 1. `src/components/EditorialTake.tsx`

Manter o layout do screenshot (barra lateral colorida + bg tint + ícone Quote + título uppercase + assinatura em itálico) e travar tipografia e espaçamento:

- Container: `not-prose my-10 border-l-4 rounded-r-xl p-6 md:p-7`
- Título: `font-display text-xs md:text-sm font-bold uppercase tracking-[0.12em]` na cor da categoria (`text-{cat}`)
- Corpo: `prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/90 leading-relaxed`
- Assinatura: `text-xs text-muted-foreground mt-4 italic`
- Ícone Quote: usar a cor da categoria, não `text-primary`

### 2. `src/components/ArticleSources.tsx`

Adicionar prop opcional `category?: Category`. Quando presente:

- Borda do card: `border-{cat}/30` em vez de `border-border`
- Fundo: gradiente sutil `bg-gradient-to-br from-{cat}/5 to-card/50`
- Ícone `BookOpen` e numeração: `text-{cat}`
- Links: `text-{cat} hover:text-{cat}/80`

Travar tipografia/espacamento iguais ao screenshot:

- Container: `not-prose mt-10 rounded-xl border p-6 md:p-7`
- Heading: `font-display text-base md:text-lg font-bold mb-4 flex items-center gap-2`
- Intro: `text-xs md:text-sm text-muted-foreground mb-5 leading-relaxed`
- Lista: `space-y-3 text-sm leading-relaxed list-decimal list-inside marker:font-bold`

Default sem categoria continua funcionando (fallback verde primary) — compatibilidade total com qualquer post não migrado.

### 3. Migração automática dos 156 posts

Script único `scripts/inject-sources-category.mjs` (não vai pro `prebuild`, só roda agora) que para cada arquivo em `src/pages/posts/`:

1. Lê o valor de `category="..."` da tag `<EditorialTake>` (ou do `<BackNavigation category="...">` como fallback).
2. Encontra `<ArticleSources` e injeta `category="<cat>"` se ainda não estiver presente.

Rápido, idempotente, sem tocar em nenhum outro conteúdo.

### 4. Componente opcional `ArticleFooter` (novo)

Criar `src/components/ArticleFooter.tsx` como conveniência **para posts futuros**:

```tsx
<ArticleFooter
  category="ia"
  slug="..."
  postTitle="..."
  editorialTitle="..."
  sources={[...]}
>
  <p>…opinião…</p>
</ArticleFooter>
```

Renderiza internamente, na ordem fixa: `EditorialTake` → `ArticleSources` → `RelatedPosts` → `CommentSection`. Garante o padrão sem depender de cada autor lembrar. Posts existentes não precisam ser migrados — usar para novos.

## Resumo das mudanças

- **Edit**: `src/components/EditorialTake.tsx` (tipografia + ícone na cor da categoria)
- **Edit**: `src/components/ArticleSources.tsx` (nova prop `category`, tematização condicional, tipografia padronizada)
- **Novo**: `src/components/ArticleFooter.tsx` (wrapper opcional para novos posts)
- **Novo (one-off)**: `scripts/inject-sources-category.mjs` (executado uma vez para popular `category=` em todos os `<ArticleSources>` existentes)

## Não vou fazer

- Não vou refatorar os 156 posts para usar `<ArticleFooter>` — risco alto, ganho baixo, ordenação já está correta.
- Não vou mexer na sequência de `RelatedPosts` / `CommentSection` — já está padronizada.
