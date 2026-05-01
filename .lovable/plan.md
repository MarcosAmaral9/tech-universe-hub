## Diagnóstico

A imagem do usuário (375px) mostra duas coisas que parecem "espaço preto vazio" e "zoom diminuído":

1. **Frame escuro ao redor do carousel**: a `<section>` do `FeaturedCarousel` tem `bg-gradient-to-br from-secondary via-background to-secondary` + `container py-8`. No mobile esse fundo escuro aparece como uma "moldura" em volta do card do carousel, dando a sensação de espaço vazio nas laterais e no topo/baixo.
2. **Container Tailwind com padding pequeno em mobile** (`0.75rem`) e textos/ícones em tamanhos `sm`/`text-base` que, num celular grande, parecem desproporcionalmente pequenos e deixam muito ar nas laterais dos cards de categoria e do header.

Não há bug de viewport/zoom — o `<meta viewport>` está correto e o body usa `overflow-x:hidden`. O problema é puramente de layout/escala mobile-first.

## O que será feito

### 1. Remover a moldura escura do carousel no mobile
Em `src/components/FeaturedCarousel.tsx`:
- Trocar o `bg-gradient-to-br from-secondary via-background to-secondary` por `bg-background` puro (sem moldura) no mobile, mantendo o gradiente apenas em `md:` se desejado.
- Reduzir `py-8` para `py-3 md:py-8` para colar o card no header.
- Mudar `container` para `container px-3 sm:px-4` para que o card encoste mais nas bordas em telas pequenas.
- Aumentar a altura da imagem mobile de `h-48` para `h-56 sm:h-72` para ocupar mais espaço vertical útil.
- Aumentar o título mobile de `text-lg` → `text-xl` e o excerpt de `text-sm` → `text-base`.

### 2. Aumentar ícones e padding do Header no mobile
Em `src/components/Header.tsx`:
- Aumentar todos os ícones de ação (Search, Menu, OfflinePostsBadge, FileText, WifiOff, User) de `h-4 w-4`/`h-5 w-5` para `h-5 w-5`/`h-6 w-6` consistentemente no mobile.
- Aumentar a logo `text-2xl` → `text-2xl sm:text-2xl` mantendo, mas reduzir o `gap-2` entre botões para `gap-1` para caber.
- Garantir que o container do header use `px-3 sm:px-4` (já vem do Tailwind container).

### 3. Cards de categoria preenchendo melhor a tela
Em `src/pages/Index.tsx`:
- Reduzir o padding lateral da section: `container px-3 sm:px-4 py-8 md:py-12` (mobile mais compacto).
- Aumentar tamanho de fonte dos cards: `text-base sm:text-lg` → `text-lg sm:text-xl` para o nome da categoria; `text-xs` → `text-sm` para a contagem de artigos.
- Aumentar padding interno: `p-4 sm:p-6` → `p-5 sm:p-7` para cards mais cheios visualmente.
- Trocar `gap-3` → `gap-3 sm:gap-4` (mantém compacto no mobile, mais espaço no desktop).

### 4. Ajuste global de container mobile
Em `tailwind.config.ts`:
- Reduzir o padding `DEFAULT` do container de `0.75rem` para `0.5rem` (apenas mobile), liberando ~8px adicionais por lado, o que faz o conteúdo encostar mais nas bordas em telas pequenas (≤375px).
- Manter `sm: 1rem`, `lg: 1.5rem`, `xl: 2rem` inalterados — desktop continua igual.

### 5. Tamanho de fonte base levemente maior em telas muito pequenas
Em `src/index.css`:
- Adicionar regra `@media (max-width: 380px)` para subir o `font-size` do `html` de `16px` para `17px`, dando um boost geral em todos os textos sem precisar editar componente por componente. (Respeita as classes `font-small/normal/large` já existentes.)
- Garantir que os títulos `h2 font-display` da Index usem `text-2xl sm:text-3xl` (já estão), mas validar que não há `max-w` artificial limitando o título "Últimos Artigos" / "Explore por Categoria".

## Detalhes técnicos

Arquivos a editar:
- `tailwind.config.ts` — `container.padding.DEFAULT: "0.5rem"`
- `src/index.css` — media query `(max-width: 380px) { html { font-size: 17px } }` (somente quando `html` não tem `.font-small` / `.font-large`)
- `src/components/FeaturedCarousel.tsx` — remover gradiente do `<section>`, reduzir paddings, aumentar imagem/textos mobile
- `src/components/Header.tsx` — uniformizar ícones para `h-5 w-5` mínimo no mobile
- `src/pages/Index.tsx` — aumentar fontes/paddings dos cards de categoria, reduzir padding lateral da section

Sem mudanças de dados, rotas ou backend. Nenhuma quebra de layout em desktop (todas as alterações são `mobile-first` com overrides `sm:`/`md:` mantendo os tamanhos atuais em telas maiores).

## Resultado esperado

No celular (≤414px):
- Carousel encostado nas bordas, sem moldura escura visível.
- Header com ícones ~25% maiores, mais fáceis de tocar.
- Cards de categoria preenchendo melhor a largura, com texto mais legível.
- Sensação geral de "zoom correto" — sem mais a percepção de conteúdo encolhido.
