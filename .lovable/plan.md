
## Mapa Interativo de Bosses — Crimson Desert

Adicionar um mapa interativo no artigo `/post/crimson-desert-bosses-guia-chefes` usando a imagem oficial do mapa de Pywel que você enviou, com marcadores de todos os chefes, filtros e zoom.

### O que será entregue

**1. Imagem oficial do mapa**
- Copiar `image-18.png` para `src/assets/crimson-desert-mapa-oficial.webp` (convertido para WebP otimizado).

**2. Novo componente `CrimsonDesertBossMap.tsx`**

Componente interativo independente, reutilizável, com:

- **Visualização do mapa oficial** como fundo (object-contain, mantém proporção em qualquer tela)
- **Marcadores numerados** sobre o mapa em coordenadas percentuais (% relativas à imagem) para cada boss — posicionados conforme as regiões descritas no artigo (Hernand, Pailune, Demeniss, Delesyia, Crimson Desert)
- **Cores dos marcadores por tipo:**
  - 🔴 Vermelho — Boss da história principal
  - 🟡 Amarelo — Boss opcional
  - 🟣 Roxo — Boss secreto (Goyen, Master Du)
- **Filtros (tabs no topo):** Todos · História · Opcionais · Secretos — com contador
- **Zoom e pan:** botões `+` / `−` / `Reset` + suporte a scroll do mouse e arrastar com mouse/touch (pinch-to-zoom em mobile)
- **Tooltip ao passar o mouse / tocar:** mostra nome do boss, região e dificuldade (★)
- **Clique no marcador:** abre painel lateral compacto com nome, localização, recompensa e link âncora para a seção correspondente do artigo
- **Legenda** fixa abaixo do mapa explicando as cores
- **Acessibilidade:** marcadores com `aria-label`, navegação por teclado (Tab + Enter)
- **Mobile-first:** altura `400px` no mobile, `600px` em desktop; controles maiores no toque

**3. Dados dos bosses (`crimsonDesertBosses.ts`)**

Array tipado com ~30 bosses extraídos do próprio artigo, cada um com:
```ts
{ id, nome, tipo: 'historia' | 'opcional' | 'secreto',
  regiao, dificuldade: 1-5, recompensa, x: %, y: %, anchorId }
```

Coordenadas posicionadas aproximadamente sobre cada região (Hernand sudoeste, Pailune norte, Demeniss centro, Delesyia leste, Crimson Desert nordeste). Marcadores da mesma região recebem leve dispersão para não sobrepor.

**4. Integração no artigo**

- Inserir o componente logo após o bloco de "Mecânicas Gerais de Boss" e antes da seção "Bosses da Campanha Principal", com header `<h2>Mapa Interativo dos Bosses de Pywel</h2>`
- Adicionar `id` âncora em cada `<h3>` de boss para o link "Ver detalhes" funcionar (scroll suave)

### Detalhes técnicos

- Zoom implementado com transform `scale()` + `translate()` em estado React, sem dependência externa
- Limites de zoom: 1x–4x; pan limitado às bordas da imagem
- Wheel listener com `passive: false` apenas no container do mapa
- Imagem servida via `import` (otimizada pelo Vite), `loading="lazy"` e `decoding="async"` — não impacta LCP
- Todas as cores via tokens semânticos (`bg-destructive`, `bg-geek`, etc.) conforme regras do design system
- Sem libs novas — apenas React + Tailwind + lucide-react já presentes

### Arquivos afetados

```text
+ src/assets/crimson-desert-mapa-oficial.webp     (novo)
+ src/components/CrimsonDesertBossMap.tsx         (novo)
+ src/data/crimsonDesertBosses.ts                 (novo)
~ src/pages/posts/CrimsonDesertBosses.tsx         (importa o mapa + adiciona ids nos h3)
```
