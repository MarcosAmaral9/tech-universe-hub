

## Recalibrar Mapa Interativo de Bosses — Crimson Desert

Reposicionar os marcadores no mapa interativo do artigo `/post/crimson-desert-bosses-guia-chefes` usando as duas novas imagens do Map Genie como **referência visual exata** para as posições, separando claramente História (coroas) de Opcionais (caveiras).

### O que será entregue

**1. Recalibração completa de coordenadas (`src/data/crimsonDesertBosses.ts`)**

Re-mapeamento pin a pin usando as coordenadas observadas nas duas imagens enviadas, normalizadas para a imagem oficial existente (1178×1074):

- **Imagem 1 (caveiras = opcionais/world)** — ~26 pins:
  - Pailune (cluster norte): 8 pins entre `x: 14-30 / y: 18-32`
  - Hernand W: 5 pins entre `x: 4-12 / y: 56-78`
  - Crimson Desert NE: 7 pins entre `x: 60-86 / y: 18-46`
  - Demeniss centro: 3 pins entre `x: 32-44 / y: 48-56`
  - Delesyia sul: 1 pin em `x: 50 / y: 78`

- **Imagem 2 (coroas = história principal)** — ~38 pins:
  - Pailune: 8 pins entre `x: 18-32 / y: 14-30`
  - Hernand SW (cluster denso): 10 pins entre `x: 8-22 / y: 60-78`
  - Demeniss centro (cluster denso): 12 pins entre `x: 30-50 / y: 42-62`
  - Delesyia/SE: 5 pins entre `x: 44-72 / y: 64-78`
  - Borda leste solitária: 1 pin em `x: 88 / y: 60`

Cada coordenada será triangulada usando rótulos visíveis (PAILUNE, HERNAND, DEMENISS, DELESYIA, CRIMSON DESERT, Silver Wolf Mountain, Tashkalp, Goathak, Urdavah) para máxima precisão.

**2. Numeração consistente com o conteúdo do artigo**

- Bosses de **História**: numeração sequencial **1–25** (P para prólogo, F1/F2/F3 para sequência final) — conforme o conteúdo escrito do artigo
- Bosses **Opcionais**: marcador `★` (já existente)
- Bosses **Secretos**: numeração `S1, S2` (Goyen, Master Du)
- A ordem narrativa do artigo (capítulos 1–10) será preservada

**3. Adição dos bosses faltantes detectados nas imagens**

Comparando os ~64 pins das imagens com os 41 atuais no arquivo de dados, faltam ~20 marcadores. Serão adicionados (com base no conteúdo já presente no artigo + Map Genie):

- **Opcionais novos** (caveira): `Queen Bismuth Oreback Crab` (Delesyia), variantes de world bosses já citados na tabela mas sem pin no mapa
- **História faltantes** que aparecem no cluster denso de Demeniss/Hernand (sub-bosses como Antumbra's Staff, Antumbra's Spear, sub-encontros do Capítulo 6–8)
- Para cada boss adicionado, um novo bloco textual conciso será inserido no artigo (3 cards de info: 📍 Localização / ⚠️ Dificuldade / 🏆 Recompensa + estratégia curta) com `id` âncora correspondente para que o botão "Ver detalhes no guia" do mapa funcione

**4. Atualização do conteúdo do artigo (`CrimsonDesertBosses.tsx`)**

- Atualizar localização textual de cada boss para corresponder exatamente à região destacada na imagem do Map Genie (corrigir incoerências como "Hexe Marie em Floresta de Hernand" → região exata onde o pin aparece)
- Adicionar os novos bosses faltantes em seções dedicadas (História ou Opcionais conforme o tipo)
- Expandir tabela de Bosses Opcionais para refletir todos os pins da imagem 1
- Manter o tom editorial existente (PT-BR, sem spoilers de história, foco em estratégia)

### Detalhes técnicos

- Sem mudanças no componente `CrimsonDesertBossMap.tsx` — ele já lê `crimsonDesertBosses` automaticamente
- Sem mudanças na imagem de fundo do mapa (mantém `crimson-desert-mapa-oficial.webp`)
- Cada novo boss receberá `id`, `numero`, `tipo`, `regiao`, `dificuldade`, `recompensa`, `x`, `y`, `anchorId`
- Todas as âncoras `boss-*` no array de dados terão um `<h3 id="boss-*" className="scroll-mt-24">` correspondente no artigo
- Tokens semânticos do design system mantidos (`bg-destructive`, `bg-geek`, `bg-primary`)

### Arquivos afetados

```text
~ src/data/crimsonDesertBosses.ts          (recalibração + ~20 novos bosses)
~ src/pages/posts/CrimsonDesertBosses.tsx  (novas seções + correções de localização)
```

### Resultado esperado

O mapa interativo passará a exibir exatamente os ~64 marcadores observados nas duas imagens do Map Genie, posicionados sobre as mesmas regiões geográficas. Ao filtrar "História" o usuário verá o layout da imagem 2; ao filtrar "Opcionais" verá o layout da imagem 1. Cada pin clicado levará a uma seção textual completa no artigo.

