## Reestruturar Mapa Interativo de Bosses — Crimson Desert

Substituir as imagens atuais do mapa interativo do artigo `/post/crimson-desert-bosses-guia-chefes` por novas imagens limpas baseadas nas referências do MapGenie, mantendo apenas **2 abas** (Pywel completo e Abyss) e preservando os **4 filtros de tipo** (Todos / História / Opcionais / Secretos).

### O que será entregue

**1. Geração das novas imagens de mapa (`src/assets/`)**

Três imagens originais baseadas nas referências enviadas:

- **`crimson-desert-pywel-completo.webp`** — mesclagem das imagens 24 (norte) + 25 (sul) do MapGenie em uma única imagem do continente de Pywel inteiro
  - Resolução alvo: ~1600×1500px (proporção próxima a 1.07:1, similar ao mapa atual)
  - Costura vertical: img24 cobre y=0–55%, img25 cobre y=45–100%, com blend suave na faixa 45–55% para evitar emenda visível
  - Estilo limpo, sem os pins roxos do MapGenie (apenas o terreno, rótulos de regiões e pontos de referência geográficos como PAILUNE, HERNAND, DEMENISS, DELESYIA, CRIMSON DESERT)
  - Substitui a imagem `crimson-desert-mapa-oficial.webp` atual

- **`crimson-desert-abyss.webp`** — baseada na imagem 26
  - Resolução alvo: ~1200×1150px
  - Mantém as regiões do Abismo: Sleet Isles, Dry Valley, Triangle Ring, The Wanderer's Way, Path of Providence, Eternal Corridor
  - Substitui o fundo gradiente roxo atualmente gerado por CSS no componente

**2. Recalibração de coordenadas (`src/data/crimsonDesertBosses.ts`)**

Já que as duas imagens (norte e sul) serão mescladas em uma só imagem de Pywel, todas as coordenadas `x`/`y` dos bosses com `mapa: "pywel"` serão re-normalizadas para a nova imagem mesclada:

- Bosses originalmente da metade norte (Pailune, Crimson Desert NE): `y` permanece próximo do valor atual (escala ~0–55%)
- Bosses da metade sul (Hernand, Demeniss, Delesyia): `y` será ajustado para a faixa 45–100% da nova imagem
- Bosses do Abyss (`mapa: "abyss"`) ganham coordenadas precisas baseadas na imagem 26

Cada pin será triangulado pelos rótulos de região visíveis para garantir alinhamento exato com a marcação roxa do MapGenie nas imagens de referência.

**3. Atualização do componente (`src/components/CrimsonDesertBossMap.tsx`)**

- Mantém as **2 abas** já existentes: `Continente de Pywel` e `The Abyss`
- Substitui o import `mapaImg` por `crimson-desert-pywel-completo.webp`
- Adiciona import da nova imagem `crimson-desert-abyss.webp` e a usa no lugar do gradiente CSS atual (`bg-gradient-to-br from-slate-900...`)
- Remove o bloco de "region labels" hardcoded do Abyss (agora vem rotulado direto na imagem)
- Mantém os **4 filtros de tipo** intactos: Todos / História / Opcionais / Secretos
- Corrige o erro de build TS2339 (`Property 'numero' does not exist on type 'BossMarker'`) na linha 302 — o painel de detalhes deixa de exibir `bossSelecionado.numero` (campo que não existe no schema) e passa a exibir um ícone derivado do tipo:
  ```tsx
  {bossSelecionado.tipo === "secreto" ? "?" : bossSelecionado.tipo === "historia" ? "H" : "★"}
  ```

**4. Sincronização do conteúdo do artigo (`src/pages/posts/CrimsonDesertBosses.tsx`)**

- Garantir que cada `anchorId` definido em `crimsonDesertBosses.ts` tenha um `<h3 id="boss-*" className="scroll-mt-24">` correspondente no artigo
- Atualizar localizações textuais que estavam incoerentes com as posições dos pins nas imagens do MapGenie
- Sem novas seções de chefes — apenas correção de IDs faltantes e alinhamento de regiões

### Detalhes técnicos

- A mesclagem das imagens 24 + 25 será feita via Python + Pillow (`/tmp/merge.py`) durante o build, gravando o resultado direto em `src/assets/crimson-desert-pywel-completo.webp` com qualidade WebP 90 e blend linear na zona de overlap
- Imagem do Abismo: conversão simples PNG → WebP da imagem 26 com qualidade 90
- A imagem antiga `crimson-desert-mapa-oficial.webp` será removida do `src/assets/`
- Tipo `BossMarker` permanece sem campo `numero` — a correção é feita no consumidor (componente)
- Tokens semânticos do design system mantidos
- Sem libs novas

### Arquivos afetados

```text
+ src/assets/crimson-desert-pywel-completo.webp   (novo, mescla 24+25)
+ src/assets/crimson-desert-abyss.webp            (novo, baseado na 26)
- src/assets/crimson-desert-mapa-oficial.webp     (removido)
~ src/data/crimsonDesertBosses.ts                 (re-normalização das coordenadas y para o mapa mesclado + coords precisas do Abyss)
~ src/components/CrimsonDesertBossMap.tsx         (novos imports + remove gradiente CSS do Abyss + corrige TS2339)
~ src/pages/posts/CrimsonDesertBosses.tsx         (alinhamento de anchorIds e regiões textuais)
```

### Resultado esperado

O mapa interativo passará a ter:

- **Aba 1 — Continente de Pywel**: imagem única e contínua mesclando norte + sul, com todos os pins de Pywel posicionados exatamente sobre as marcações roxas do MapGenie
- **Aba 2 — The Abyss**: imagem real do Abismo (não mais um placeholder CSS) com pins precisos
- **Filtros mantidos**: Todos, História, Opcionais, Secretos — funcionam em ambas as abas
- **Popups funcionais**: clique em qualquer pin abre o painel com nome, região, dificuldade, recompensa e dica; sem mais erro de build
