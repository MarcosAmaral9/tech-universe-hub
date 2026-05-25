# Plano: Template Padronizado + Auditoria SEO/E-E-A-T

## Diagnóstico atual (157 posts)

| Item | Cobertura | Faltam |
|------|-----------|--------|
| `AuthorBio` | 152 | 5 |
| `ArticleSources` (5 fontes) | 54 | 103 |
| `EditorialTake` / "Análise do Marcos" | 103 | 54 |
| `PAGE_META` manual em `DynamicSEO.tsx` | 37 | 120 |
| Conteúdo ≥1500 palavras (estimado) | ~70 | ~87 |
| Keyword principal validada em H1/intro/excerpt | desconhecido | a auditar |

O fallback automático em `DynamicSEO` (`buildPostKeywords`) cobre os 120 posts sem `PAGE_META`, mas extrai keywords genéricas do título/excerpt — sem garantia de que a keyword principal apareça consistente em `<title>`, `<h1>`, primeiro parágrafo e meta.

---

## Parte 1 — Padronizar o template (uma rodada, infra)

**1.1 Novo helper `src/lib/postKeyword.ts`**
- `getPrimaryKeyword(slug)`: retorna a keyword canônica de cada post (mapa explícito por slug; fallback = primeiras palavras do título sem stopwords).
- `derivePageMeta(post)`: gera `{title, description, keywords}` garantindo que a keyword apareça no `title` (início), na `description` (primeiros 120 chars) e na 1ª posição da lista de `keywords`.

**1.2 Componente `<PostHero />` (novo, opcional)**
- Recebe `slug`, `title`, `category`, `readTime`, `date`.
- Renderiza `<h1>` garantindo prefixo/sufixo com a keyword principal quando ela não estiver no título original (via `getPrimaryKeyword`).
- Substitui o bloco header repetido em cada post sem quebrar layout.

**1.3 Componente `<PostIntro />` (novo)**
- Recebe `slug` + `children` (lead atual).
- Injeta a keyword principal automaticamente no primeiro parágrafo se ainda não estiver presente (regra: prefixar "Em [keyword], …" ou append discreto).

**1.4 Componente `<PostSummary />` (novo)**
- Bloco "Resumo rápido" no final do conteúdo (antes de `NewsletterSignup`) com 3-5 bullets gerados a partir dos H2 + reforço da keyword principal.
- Reforça TL;DR exigido pelo AdSense/E-E-A-T e melhora dwell time.

**1.5 `DynamicSEO.tsx`**
- `PAGE_META` continua manual para sobrescrita, mas o fallback chama `derivePageMeta(post)` em vez de `buildPostKeywords`.
- Mantém props `author`, `datePublished`, `dateModified`, `citations[]` já existentes.

**1.6 Script de auditoria `scripts/audit-post-keywords.mjs`**
- Para cada `BlogPost`:
  1. Resolve `primaryKeyword`.
  2. Abre o `.tsx` correspondente.
  3. Checa presença (case-insensitive, sem acentos) em: `<h1>`, primeiro `<p>` após `<h1>`, `excerpt`, `PAGE_META.title`, `PAGE_META.description`, `PAGE_META.keywords`.
  4. Checa presença de `AuthorBio`, `ArticleSources` (≥5 itens), `EditorialTake`/"Análise do Marcos".
  5. Conta palavras do conteúdo (`prose` interno) → flag se <1500.
- Saída: `audit-report.json` + `audit-report.md` (tabela por slug com colunas Pass/Fail por critério).

---

## Parte 2 — Auditoria & geração da lista de falhas

Executar `scripts/audit-post-keywords.mjs` e consolidar em `.lovable/audit-seo-eeat.md` agrupando posts em 4 buckets:

- **A. Só falta SEO** (PAGE_META + keyword nas tags) — rápido, ~5min/post.
- **B. Falta E-E-A-T** (AuthorBio/EditorialTake/ArticleSources) — médio, ~15min/post.
- **C. Falta conteúdo (<1500 palavras)** — pesado, exige pesquisa web e fontes reais.
- **D. Múltiplos itens faltando** — combinação A+B+C.

---

## Parte 3 — Execução em levas

A partir do relatório:

| Leva | Escopo | Tamanho estimado |
|------|--------|------------------|
| **L-A1 → L-A?** | Bucket A (só PAGE_META + keyword tags) | 10 posts/leva |
| **L-B1 → L-B?** | Bucket B (E-E-A-T faltante) | 5 posts/leva |
| **L-C1 → L-C?** | Bucket C (expandir <1500 palavras + fontes reais + Análise do Marcos) | 3 posts/leva *(igual ao ritmo atual da expansão editorial)* |
| **L-D1 → L-D?** | Bucket D (combo completo) | 3 posts/leva |

Cada leva entrega:
1. Edições nos `.tsx` afetados.
2. Atualização de `PAGE_META` em `DynamicSEO.tsx`.
3. Atualização de `updatedAt` em `src/data/posts.ts`.
4. Re-roda o script de auditoria para confirmar que aqueles slugs saíram da lista.

Os números exatos por leva só ficam fixos após a Parte 2 (relatório).

---

## Detalhes técnicos

- Novos arquivos:
  - `src/lib/postKeyword.ts`
  - `src/components/PostHero.tsx`
  - `src/components/PostIntro.tsx`
  - `src/components/PostSummary.tsx`
  - `scripts/audit-post-keywords.mjs`
  - `.lovable/audit-seo-eeat.md` (gerado)
- Editados nesta primeira rodada:
  - `src/components/DynamicSEO.tsx` (fallback → `derivePageMeta`)
- `getPrimaryKeyword` usa mapa em `src/lib/postKeyword.ts` com overrides por slug (ex.: `solo-leveling-guia-completo-temporadas` → "Solo Leveling"). Slugs sem override caem em heurística baseada no `title`.
- Audit roda em Node ESM puro (sem dependências novas). Lê arquivos com `fs/promises`, faz regex tolerante a acentos (`String.prototype.normalize('NFD')`).
- Não toca em design tokens, rotas, backend, edge functions ou imagens.

---

## O que **não** está incluído

- Reescrita automática de conteúdo dos posts (continuará manual em levas C/D para respeitar a regra "nada inventado").
- Migração para SSR (preview social continua limitado).
- Mudanças no fluxo de publicação ou no sitemap (já automatizado via `prebuild`).
- Auditoria de slots AdSense individuais (mantém o padrão atual: Leaderboard após 2º parágrafo + In-Article após H2).

---

## Sequência ao aprovar

1. **Rodada 1**: Parte 1 (infra) + Parte 2 (rodar auditoria e publicar `audit-seo-eeat.md`).
2. **Rodada 2+**: você aprova as levas A → B → C → D conforme o relatório.
