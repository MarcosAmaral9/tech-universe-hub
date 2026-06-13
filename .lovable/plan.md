# Mapas Interativos de Calradia — Bannerlord

Criar dois mapas interativos (pré-War Sails e pós-War Sails) com base em dados públicos de Calradia (TaleWorlds, Mount & Blade Wiki, materiais oficiais do War Sails). Os mapas mostram regiões de cada facção contornadas e coloridas, com cidades nomeadas, legenda e interatividade (hover/click revela tooltip com facção, capital, cultura, tier de tropas).

## 1. Imagens base (alta resolução, premium)

Gerar via `imagegen` em qualidade **premium** (texto legível, sem cortes), 1792x1024:

- `src/assets/bannerlord-calradia-map-classic.webp` — mapa de Calradia **pré-War Sails** (8 facções). Estilo pergaminho/topográfico realista, com nomes de cidades e regiões em PT-BR já legíveis na imagem base.
- `src/assets/bannerlord-calradia-map-warsails.webp` — mapa **pós-War Sails** (9 facções, com território Nord no arquipélago norte/costa setentrional adicionado pela expansão).

Critérios: nomes não cortados nas bordas, tipografia serifada estilo manuscrito, alto contraste, sem rostos.

## 2. Componente interativo `CalradiaMap.tsx`

Novo componente em `src/components/CalradiaMap.tsx` inspirado em `CrimsonDesertRegionMap.tsx`:

- Recebe prop `variant: "classic" | "warsails"`.
- Renderiza `<LightboxImage>` (mantém zoom/pan já existente) como camada base.
- Sobreposição SVG absoluta com `<polygon>` por facção, `fill` semitransparente na cor da facção + `stroke` sólido (contorno colorido) + `pointer-events: all`.
- Hover/foco em uma região: destaca contorno (stroke mais grosso, fill mais opaco) e exibe tooltip com: nome da facção, cultura, capital, cidades principais, tropa-tier 6, badge "DLC War Sails" quando aplicável.
- Tap em mobile abre painel inferior com as mesmas infos (acessível por teclado, ARIA).
- Legenda lateral/inferior: quadrados coloridos com nome de cada facção; clicar na legenda também destaca a região no mapa.
- Coordenadas das polygons baseadas em proporções (`viewBox` 0–100) para escalar com a imagem.
- Suporte a leitura por screen reader: `role="img"`, `aria-label`, lista textual oculta com cidades.

### Dados (`src/data/bannerlordFactions.ts`)

Array tipado com as 9 facções; cada uma:

```ts
{ id, name, culture, capital, cities: string[], color: string,
  troopT6: string, dlc?: "war-sails", polygon: [number, number][] }
```

Cores oficiais usadas pela comunidade/wiki:
- Empire (Norte/Sul/Oeste) — tons de roxo escuro / vinho / púrpura
- Vlandia — vermelho
- Battania — verde-musgo
- Sturgia — azul-aço
- Khuzait — laranja/ocre
- Aserai — amarelo-areia
- Nords (War Sails) — azul-gelo / ciano (apenas no mapa pós-DLC)

## 3. Substituições no site

Onde hoje aparece `bannerlord-war-sails-map.webp` (5 arquivos), trocar pelo novo `CalradiaMap variant="warsails"`:

- `BannerlordPortal.tsx`
- `BannerlordGuiaCompleto.tsx`
- `BannerlordCulturasReinos.tsx`
- `BannerlordArvoresTropas.tsx`
- `BannerlordMelhoresTropas.tsx`

Manter o arquivo antigo no repo apenas se ainda referenciado por OG/SEO; senão remover import e arquivo.

## 4. Adições no painel `/geek/bannerlord`

Nova seção "Mapas de Calradia" com dois cards/abas:

- **Antes da expansão** → `CalradiaMap variant="classic"` (8 facções)
- **Depois da expansão War Sails** → `CalradiaMap variant="warsails"` (9 facções, destaque visual no território Nord)

Texto curto explicando a diferença entre os dois mapas (territórios adicionados, novas rotas marítimas).

## 5. Validações finais

- `node scripts/check-article-footer-order.mjs`
- Conferir que nenhum arquivo importa o `bannerlord-war-sails-map.webp` antigo após a troca (`rg`).
- Verificar layout mobile: legenda colapsável, tooltip vira bottom sheet.
- Lighthouse: imagens com `width/height` e `loading="lazy"` exceto a primeira do portal.

## Pontos técnicos

- Polygons em `viewBox="0 0 100 100"` para alinhar com qualquer tamanho da imagem.
- Calibragem das polygons: feita por inspeção visual de cada imagem após geração; possível ajuste fino depois (são 8–9 polígonos por mapa, ~6-10 pontos cada).
- Acessibilidade: cada `<polygon>` é `<button>`-like via `tabIndex={0}` + `onKeyDown` Enter/Espaço.
- Nenhuma mudança em backend, posts.ts ou SEO além de remover referências mortas.
