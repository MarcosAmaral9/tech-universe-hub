# Atualização dos artigos de Crimson Desert (dados até agosto de 2026)

Os 12 artigos de Crimson Desert do site foram escritos entre março e abril de 2026 e estão desatualizados: falam em "3 milhões de cópias", "Metacritic 78 / OpenCritic 80" e param nos patches de abril. Dados verificados hoje mostram números diferentes.

## Dados verificados a aplicar

| Tema | No site hoje | Correto (ago/2026) |
|---|---|---|
| Vendas | 3 milhões (1ª semana) | 2 mi em 24h, 3 mi na 1ª semana, **6 milhões em menos de 3 meses** |
| Metacritic | 78 (genérico) | **77 (PC) / 78 (PS5)** |
| OpenCritic | 80, 93 críticos | **74% de críticos recomendam** |
| Plataformas | PC, PS5, Xbox Series | PC, PS5, Xbox Series, **macOS**; **Switch 2 no início de 2027** |
| Inventário | crítica de lançamento | crítica mantida, mas **baú de armazenamento adicionado em patch pós-lançamento** |
| Polêmicas | assets de IA | assets de IA (pedido de desculpas + auditoria e substituição por arte humana) e **suporte problemático a GPUs Intel Arc** |

## Artigos a atualizar

1. `CrimsonDesertVendasReview.tsx` — reescrever os números de vendas e as notas; nova seção "3 meses depois: 6 milhões".
2. `CrimsonDesertReview.tsx` — corrigir Metacritic/OpenCritic, atualizar veredicto considerando os patches.
3. `CrimsonDesertPatches.tsx` — estender o histórico de abril até agosto de 2026 (baú de armazenamento, correções de inventário, ajustes de Intel Arc, substituição dos assets de IA).
4. `CrimsonDesertGuiaCompleto.tsx` — atualizar bloco de ficha técnica (plataformas, macOS, Switch 2 2027, vendas).
5. `CrimsonDesertIniciantes.tsx` e `CrimsonDesertEquipamentos.tsx` — ajustar dicas de inventário para refletir o baú e os slots atuais.
6. `CrimsonDesertCombate.tsx`, `CrimsonDesertBuilds.tsx`, `CrimsonDesertPersonagens.tsx`, `CrimsonDesertBosses.tsx`, `CrimsonDesertMapa.tsx`, `CrimsonDesertPortal.tsx` — revisão pontual: remover afirmações contrariadas pelos dados novos e citar mudanças de patch quando afetarem o guia.

Em todos: manter o padrão editorial (Análise do Marcos antes das fontes, ≥5 fontes, AuthorBio, comentários), acrescentar fontes atuais (Wikipedia/Pearl Abyss/IGN/Metacritic/OpenCritic) e nada de spoilers.

## Detalhes técnicos

- Atualizar `updatedAt` (e `excerpt`, quando o texto citar números antigos) das 12 entradas em `src/data/posts.ts`; revisar `faq` dos posts afetados pelas correções numéricas.
- Rodar o build para regenerar `sitemap.xml`, `sitemap-images.xml` e `public/feed/tag/crimson-desert.xml` com as novas datas/descrições.
- Validar com `audit-article-structure.mjs`, `check-article-footer-order.mjs` e `check-read-next.mjs`.
