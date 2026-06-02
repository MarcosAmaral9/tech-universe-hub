## Objetivo

Padronizar o rodapé de todos os artigos para seguir a ordem:

```
Conteúdo → Análise (EditorialTake) → Fontes (ArticleSources) → Relacionados (RelatedPosts) → Comentários (CommentSection, agora com convite embutido)
```

A `<div className="mt-10 p-6 bg-secondary rounded-xl text-center">…</div>` ("Conta pra gente nos comentários! 👇") deixa de existir solta em cada post — vira um bloco fixo no topo do `CommentSection`, tematizado pela cor da categoria.

## Mudanças

### 1. `CommentSection` ganha convite integrado
- Aceitar nova prop opcional `category: Category` e `inviteTitle?: string`.
- Renderizar, antes do formulário/listagem, um header padronizado:
  - Caixa arredondada com `bg-{category}/5`, borda lateral `border-l-4 border-{category}`, ícone `MessageCircle`.
  - Título: "Participe da conversa" (padrão) ou `inviteTitle` quando informado.
  - Subtítulo fixo: "Conta pra gente o que achou — seu comentário ajuda outros leitores."
- Mantém todo comportamento atual (auth, offline, etc.).

### 2. `ArticleFooter` reflete nova ordem
- Remover qualquer expectativa de CTA externo.
- Passar `category` adiante para o `CommentSection`.
- Ordem do wrapper: `EditorialTake → ArticleSources → RelatedPosts → CommentSection`.

### 3. Script de migração (`scripts/migrate-comment-cta.mjs`)
Roda uma vez para limpar os 156 posts:
- Localiza e remove qualquer bloco `<div className="mt-10 p-6 bg-secondary rounded-xl text-center"> … </div>` (regex multiline robusta, com checagem de balanceamento simples por contagem de `<div>`/`</div>` dentro do match — abortando o arquivo se ambíguo).
- Adiciona prop `category="…"` no `<CommentSection …/>` correspondente, inferindo a categoria a partir do `<CategoryBadge category="…"/>` ou do `trackArticleRead(..., "<cat>")` do mesmo arquivo.
- Loga: arquivos alterados, arquivos pulados (sem CTA), arquivos com aviso manual.

### 4. Validação no prebuild (`scripts/check-article-footer-order.mjs`)
- Manter skip de Portais/hubs.
- Atualizar a lista `REQUIRED` para a nova ordem (sem CTA): `EditorialTake → ArticleSources → RelatedPosts → CommentSection`.
- Falhar build se encontrar resquício da `div` antiga: regex `mt-10 p-6 bg-secondary rounded-xl text-center` em qualquer `src/pages/posts/*.tsx`.
- Falhar build se `CommentSection` não tiver `category=` em posts não-hub.

### 5. Documentação
- Atualizar `docs/article-footer.md`: descrever que o CTA virou parte do `CommentSection`, novo exemplo de uso, prop `category` obrigatória, exemplo do `ArticleFooter` simplificado.

### 6. Post modelo
- Atualizar `Seedance20IA2026.tsx` (remover a `<div>` CTA, passar `category="ia"` ao `CommentSection`) para servir de referência viva.

## Detalhes técnicos

- Tokens de cor já existem por categoria (`ia`, `invest`, `geek`, `otaku`) — reaproveitar mesmo mapa usado em `EditorialTake`.
- Tipografia/espaçamento: replicar a métrica de `EditorialTake` (`my-10`, `p-6 md:p-7`, `font-display text-xs md:text-sm uppercase tracking-[0.12em]`) para consistência mobile/tablet/desktop.
- Script de migração é idempotente: rodar duas vezes não duplica `category` (checa se prop já existe antes de inserir).
- Sem mudanças de business logic, RLS ou backend.

## Plano de execução

```text
1. Editar CommentSection (nova prop + bloco de convite).
2. Editar ArticleFooter para repassar category.
3. Atualizar docs/article-footer.md.
4. Criar scripts/migrate-comment-cta.mjs e rodar 1x.
5. Atualizar scripts/check-article-footer-order.mjs (nova ordem + checagens extras).
6. Ajustar manualmente posts marcados como "aviso" pelo migrator (se houver).
7. Rodar prebuild — esperar 0 erros, 137 posts validados.
```

## Riscos

- Posts onde a `<div>` CTA foi customizada (texto diferente) serão removidos igualmente — o convite passa a ser único no `CommentSection`. Se algum post precisar de CTA específico de conteúdo (ex.: "qual seu isekai favorito?"), proponho deixar essa pergunta como último parágrafo do corpo do artigo, não como caixa separada.
- Inferência de categoria por arquivo falha se o post não usar `CategoryBadge` nem `trackArticleRead`; nesse caso o script loga aviso e pula, exigindo ajuste manual.