# Rodapé editorial — `EditorialTake`, `ArticleSources`, `ArticleFooter`

Componentes que padronizam o final de **todos os posts** do VICIO&lt;CODE&gt;.
A ordem é validada no `prebuild` por `scripts/check-article-footer-order.mjs` —
se algum post sair do padrão, o build falha.

## Ordem obrigatória

```
EditorialTake (Análise do Marcos)
   ↓
ArticleSources (Fontes e referências)
   ↓
RelatedPosts (Artigos relacionados)
   ↓
CommentSection (Comentários)
```

A cor de destaque (borda, ícone, links, fundo tint) é puxada automaticamente
da `category` do post: `ia` (verde-marca), `invest` (dourado), `geek` (roxo),
`otaku` (rosa). Tipografia, espaçamento e responsividade são travados nos
componentes — não precisa estilizar nada no post.

---

## `EditorialTake`

Bloco "Análise do Marcos" — opinião editorial obrigatória (critério E-E-A-T).

### Props

| Prop       | Tipo                                | Obrigatório | Default                 |
| ---------- | ----------------------------------- | ----------- | ----------------------- |
| `category` | `"ia" \| "invest" \| "geek" \| "otaku"` | sim         | —                       |
| `title`    | `string`                            | não         | `"Análise do Marcos"`   |
| `children` | `React.ReactNode`                   | sim         | parágrafos da análise   |

### Exemplo

```tsx
<EditorialTake category="invest">
  <p>Aqui vai a opinião editorial do Marcos sobre o tema...</p>
  <p>Segundo parágrafo com nuance e contexto pessoal.</p>
</EditorialTake>
```

---

## `ArticleSources`

Lista numerada de fontes oficiais. Injeta automaticamente JSON-LD `ItemList`
para rich snippets.

### Props

| Prop           | Tipo              | Obrigatório | Default |
| -------------- | ----------------- | ----------- | ------- |
| `category`     | `Category`        | recomendado | —       |
| `sources`      | `ArticleSource[]` | sim         | —       |
| `injectSchema` | `boolean`         | não         | `true`  |

```ts
interface ArticleSource {
  title: string;
  url: string;
  publisher?: string;
  accessedAt?: string; // ex.: "Maio 2026"
}
```

### Exemplo

```tsx
<ArticleSources
  category="ia"
  sources={[
    {
      title: "Gemini 2.5 Pro — model card",
      url: "https://deepmind.google/technologies/gemini/pro/",
      publisher: "Google DeepMind",
      accessedAt: "Maio 2026",
    },
  ]}
/>
```

---

## `ArticleFooter` (recomendado para posts novos)

Wrapper que renderiza os 4 blocos na ordem correta. Garante o padrão sem
depender do autor lembrar da sequência.

### Props

| Prop              | Tipo              | Obrigatório |
| ----------------- | ----------------- | ----------- |
| `category`        | `Category`        | sim         |
| `slug`            | `string`          | sim         |
| `postTitle`       | `string`          | sim         |
| `editorialTitle`  | `string`          | não         |
| `sources`         | `ArticleSource[]` | sim         |
| `children`        | `React.ReactNode` | sim (análise) |

### Exemplo (post novo)

```tsx
<ArticleFooter
  category="otaku"
  slug="meu-novo-post"
  postTitle="Meu novo post: tudo sobre X"
  sources={[
    { title: "Fonte oficial", url: "https://...", publisher: "Editora", accessedAt: "Maio 2026" },
  ]}
>
  <p>Opinião editorial aqui.</p>
</ArticleFooter>
```

---

## Posts existentes

Os 156 posts existentes usam os 4 componentes individualmente (não via
`ArticleFooter`). Funciona igual — o `check-article-footer-order.mjs`
valida a ordem em ambos os formatos. Use `ArticleFooter` apenas em posts
**novos** para reduzir boilerplate.

## Verificação automática

```bash
node scripts/check-article-footer-order.mjs
```

Roda automaticamente no `npm run build` via `prebuild`. Falha se algum post
estiver fora da ordem ou sem um dos 4 componentes.
