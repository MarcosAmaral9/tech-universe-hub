## Mapa Interativo de Bosses — Crimson Desert (2 abas + 4 filtros)

Reestruturar o mapa interativo do artigo `/post/crimson-desert-bosses-guia-chefes` para usar **apenas 2 abas** com imagens novas, mantendo os filtros de tipo.

### O que será entregue

**1. Duas novas imagens de mapa (`src/assets/`)**

- **`crimson-desert-pywel-completo.webp`** — mesclagem das imagens 24 (norte) + 25 (sul) do MapGenie em uma única imagem do continente de Pywel inteiro
  - Resolução alvo: ~1600×1500px (proporção próxima a 1.07:1)
  - Costura vertical: img24 cobre y=0–55%, img25 cobre y=45–100%, com blend linear suave na faixa 45–55% para evitar emenda visível
  - Estilo limpo: terreno + rótulos de regiões (PAILUNE, HERNAND, DEMENISS, DELESYIA, CRIMSON DESERT) sem os pins roxos do MapGenie
  - Substitui a imagem `crimson-desert-mapa-oficial.webp` atual

- **`crimson-desert-abyss.webp`** — baseada na imagem 26
  - Resolução alvo: ~1200×1150px
  - Mantém as regiões do Abismo: Sleet Isles, Dry Valley, Triangle Ring, The Wanderer's Way, Path of Providence, Eternal Corridor
  - Substitui o fundo gradiente roxo gerado por CSS no componente

**2. Componente do mapa (`src/components/CrimsonDesertBossMap.tsx`)**

- Mantém **2 abas**: `🗺️ Continente de Pywel` e `🌀 The Abyss`
- Mantém os **4 filtros de tipo**: Todos / História / Opcionais / Secretos
- Substitui o import `mapaImg` por `crimson-desert-pywel-completo.webp`
- Adiciona import da nova `crimson-desert-abyss.webp` e a usa no lugar do gradiente CSS atual
- Remove o bloco hardcoded de "region labels" do Abyss (rótulos agora vêm direto na imagem)
- Corrige o erro de build TS2339 (`Property 'numero' does not exist on type 'BossMarker'`) no painel de detalhes — passa a exibir um ícone derivado do tipo:
  ```tsx
  {bossSelecionado.tipo === "secreto" ? "?" : bossSelecionado.tipo === "historia" ? "H" : "★"}
  ```

**3. Recalibração de coordenadas (`src/data/crimsonDesertBosses.ts`)**

Como o mapa de Pywel agora é uma imagem única mesclada, as coordenadas `x`/`y` dos bosses com `mapa: "pywel"` serão re-normalizadas:

- Bosses da metade norte (Pailune, Crimson Desert NE): `y` permanece próximo do valor atual (escala ~0–55%)
- Bosses da metade sul (Hernand, Demeniss, Delesyia): `y` ajustado para a faixa 45–100% da nova imagem
- Bosses do Abyss (`mapa: "abyss"`) recebem coordenadas precisas baseadas na imagem 26

Cada pin será triangulado pelos rótulos de região visíveis para garantir alinhamento exato com a marcação roxa do MapGenie nas imagens de referência.

**4. Sincronização do conteúdo do artigo (`src/pages/posts/CrimsonDesertBosses.tsx`)**

- Garantir que cada `anchorId` definido em `crimsonDesertBosses.ts` tenha um `<h3 id="boss-*" className="scroll-mt-24">` correspondente no artigo
- Atualizar localizações textuais incoerentes com as posições dos pins do MapGenie
- Sem novas seções de chefes — apenas correção de IDs faltantes e alinhamento de regiões

### Detalhes técnicos

- Mesclagem das imagens 24 + 25 via Python + Pillow (`/tmp/merge.py`), gravando direto em `src/assets/crimson-desert-pywel-completo.webp` com qualidade WebP 90 e blend linear na zona de overlap
- Imagem do Abismo: conversão PNG → WebP da imagem 26 com qualidade 90
- Imagem antiga `crimson-desert-mapa-oficial.webp` removida do `src/assets/`
- Tipo `BossMarker` permanece sem campo `numero` — correção feita no consumidor
- Tokens semânticos do design system mantidos
- Sem libs novas

### Arquivos afetados

```text
+ src/assets/crimson-desert-pywel-completo.webp   (novo, mescla 24+25)
+ src/assets/crimson-desert-abyss.webp            (novo, baseado na 26)
- src/assets/crimson-desert-mapa-oficial.webp     (removido)
~ src/data/crimsonDesertBosses.ts                 (re-normalização de coords + Abyss)
~ src/components/CrimsonDesertBossMap.tsx         (novos imports + sem gradiente CSS + corrige TS2339)
~ src/pages/posts/CrimsonDesertBosses.tsx         (alinhamento de anchorIds e regiões textuais)
```

### Resultado esperado

- **Aba 1 — Continente de Pywel**: imagem única e contínua mesclando norte + sul, com todos os pins de Pywel posicionados sobre as marcações roxas do MapGenie
- **Aba 2 — The Abyss**: imagem real do Abismo (não mais placeholder CSS) com pins precisos
- **Filtros mantidos**: Todos / História / Opcionais / Secretos — funcionam em ambas as abas
- **Popups funcionais**: clique em qualquer pin abre painel com nome, região, dificuldade, recompensa e dica; sem mais erro de build
