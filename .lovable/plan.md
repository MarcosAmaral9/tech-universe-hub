

## Mapa Pywel: Hero, SEO, Pins corretos, Busca e Páginas de regiões

Aprimoramentos no artigo `/post/crimson-desert-mapa-regioes-pywel` e criação de 5 novas páginas dedicadas para cada região do mapa.

### 1. Hero do mapa exibido por completo

`src/pages/posts/CrimsonDesertMapa.tsx` (linhas 163–171):
- Trocar `aspect-video` (16:9) + `object-cover` por um container que respeita a proporção real do mapa (~1.1:1 — quase quadrado).
- Usar `aspect-[1178/1074]` com `object-contain` e `bg-card` para garantir que a imagem inteira apareça sem corte, com um leve padding ao redor.
- Mover a legenda para baixo da imagem (em vez de overlay) para não cobrir o conteúdo do mapa.
- Aplicar a mesma estratégia em qualquer outro local que use a imagem como hero (verificado: `CrimsonDesertPortal.tsx` usa em card pequeno — sem alteração necessária; `posts.ts` é apenas thumbnail).

### 2. SEO: título, metadescrição e FAQ

- Adicionar `<DynamicSEO>` ao topo de `CrimsonDesertMapa.tsx` com:
  - **Title**: "Mapa de Pywel — Crimson Desert: Todas as Regiões, Bosses e Locais"
  - **Description** (~155 chars): Resumo das 5 regiões + tamanho do mapa + locomoção.
  - **Keywords** (12+): `crimson desert mapa, pywel mapa, regioes pywel, hernand, pailune, demeniss, delesyia, crimson desert deserto, mapa interativo crimson desert, bosses pywel, pearl abyss, kliff greymane, fast travel pywel`.
- Inserir uma seção **"Perguntas Frequentes (FAQ)"** ao final do artigo com 6 perguntas:
  1. Qual o tamanho do mapa de Pywel em Crimson Desert?
  2. Quantas regiões tem o continente de Pywel?
  3. Qual a melhor região para começar em Crimson Desert?
  4. Onde fica o deserto carmesim no mapa?
  5. Como viajar rapidamente entre regiões em Pywel?
  6. Qual a região mais perigosa de Pywel?
- Renderizar como cards visuais + injetar **JSON-LD `FAQPage`** (schema.org) em um `<script type="application/ld+json">` dentro do `<DynamicSEO>` ou via `useEffect` no DOM.

### 3. Correção das posições dos pins no mapa interativo

`src/components/CrimsonDesertRegionMap.tsx` — recalibração das coordenadas `x/y` (% sobre a imagem 1178×1074) para coincidir com os rótulos visíveis no mapa oficial:

| Região         | Atual (x, y) | Novo (x, y) | Justificativa                              |
|----------------|--------------|-------------|--------------------------------------------|
| Pailune        | 50, 14       | **38, 18**  | Rótulo "PAILUNE" fica no NW, não no centro |
| Hernand        | 30, 46       | **22, 56**  | Rótulo "HERNAND" no centro-oeste/sul       |
| Demeniss       | 56, 50       | **52, 44**  | Rótulo "DEMENISS" no centro-norte          |
| Delesyia       | 80, 56       | **76, 50**  | Rótulo "DELESYIA" no leste/centro          |
| Crimson Desert | 47, 84       | **54, 78**  | Rótulo "CRIMSON DESERT" no sul/centro-sul  |

(Coordenadas finais validadas visualmente pela imagem `crimson-desert-pywel-completo.webp`. Pequenos ajustes finos podem ser aplicados na implementação.)

### 4. Busca por região no post

Adicionar abaixo do mapa interativo um campo de busca:
- `<Input>` com ícone de lupa (lucide `Search`).
- Filtra `regionsData` por nome (case-insensitive, sem acento).
- Sugestões aparecem como dropdown clicável; ao escolher:
  - Abre o popup da região no mapa interativo (estado `selecionada` levantado para `CrimsonDesertMapa.tsx` via prop `controlledRegion`/`onRegionChange` no `CrimsonDesertRegionMap`).
  - Faz scroll suave até o card da região (id="regiao-{nome}") com destaque temporário (ring animado).
- Não exige backend — apenas estado local React.

### 5. Páginas dedicadas por região

Criar 5 novas páginas em `src/pages/regions/`:
- `PailunePage.tsx`
- `HernandPage.tsx`
- `DemenissPage.tsx`
- `DelesyiaPage.tsx`
- `CrimsonDesertRegionPage.tsx`

Cada página contém:
- `<DynamicSEO>` específico (título, descrição, 10+ keywords focadas na região).
- Hero com a imagem do mapa de Pywel + ícone/cor da região.
- Seções: **Visão geral**, **Bioma e clima**, **Localização no mapa**, **Cidades e locais-chave**, **Bosses confirmados**, **Dicas de exploração**.
- Bloco "Outras regiões de Pywel" no final com cards-link para as outras 4 regiões.
- Link "← Voltar ao mapa completo" para `/post/crimson-desert-mapa-regioes-pywel`.
- Conteúdo factual extraído do `regionsData` já existente + expansão.

Rotas adicionadas em `src/App.tsx`:
```text
/regiao/pailune
/regiao/hernand
/regiao/demeniss
/regiao/delesyia
/regiao/crimson-desert
```

Nos cards de região do post `CrimsonDesertMapa.tsx`, adicionar botão **"Saiba mais sobre {região} →"** linkando para a página dedicada. No popup do mapa interativo, adicionar o mesmo link no rodapé.

### Detalhes técnicos

- Sem mudanças em `crimson-desert-pywel-completo.webp` (mantém imagem atual como hero e mapa interativo).
- `CrimsonDesertRegionMap` recebe duas novas props opcionais: `selectedKey?: RegionKey` e `onSelect?: (key: RegionKey | null) => void` para controle externo (busca).
- FAQ JSON-LD inserido via `useEffect` (cria `<script type="application/ld+json">` no `<head>` e remove no unmount).
- Adicionar `sitemap.xml` (público) com as 5 novas rotas — lembrar o usuário de fazer deploy.
- Tokens semânticos (`bg-card`, `text-muted-foreground`, etc.) preservados.

### Arquivos afetados

```text
~ src/pages/posts/CrimsonDesertMapa.tsx          (hero, SEO, FAQ, busca, links p/ regiões)
~ src/components/CrimsonDesertRegionMap.tsx      (coords corretas + props controladas)
~ src/App.tsx                                    (5 novas rotas lazy)
~ public/sitemap.xml                             (5 novas URLs)
+ src/pages/regions/PailunePage.tsx
+ src/pages/regions/HernandPage.tsx
+ src/pages/regions/DemenissPage.tsx
+ src/pages/regions/DelesyiaPage.tsx
+ src/pages/regions/CrimsonDesertRegionPage.tsx
```

