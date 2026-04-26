## Plano: Arquivo do blog, responsividade e revisão do sistema offline

Cinco frentes de trabalho, todas no mesmo loop. A primeira fase corrige os erros de build atuais (`RegionPageTemplate.tsx`).

---

### 0. Correção dos erros de build (bloqueante)

`src/pages/regions/RegionPageTemplate.tsx`:
- `<DynamicSEO title=... />` → o componente **não aceita props** (gera SEO automaticamente). Remover as props passadas. Se quisermos SEO específico para a região, criar um pequeno `useEffect` local que injeta `<title>`, `<meta name="description">` e `<meta name="keywords">` no `<head>` (mesmo padrão usado em `CrimsonDesertMapa.tsx` para o FAQ JSON-LD).
- `<BackNavigation />` → exige prop `category`. Passar `category="geek"`.
- `<RelatedPosts currentSlug={...} category="geek" />` → o componente só aceita `currentSlug`. Remover `category`.
- `<CommentSection postSlug={...} />` → o componente espera `postId` (não `postSlug`). Trocar para `postId={articleSlug} postTitle={`${name} — Guia da Região`}`.

---

### 1. Página de Arquivo do blog `/arquivo`

Nova rota com listagem completa de todos os 133 posts, paginação e filtros.

**Arquivo novo:** `src/pages/ArchivePage.tsx`
- Importa `blogPosts` de `@/data/posts`.
- Filtros (chips no topo): **Todos · IA · Investimentos · Geek · Otaku** (mapeando para as keys internas `ia | invest | geek | otaku`).
- Busca por título/keywords (Input + lupa, debounce 200ms).
- Ordenação: mais recente primeiro (já é o padrão de `posts.ts`).
- Paginação client-side: **12 posts por página**, com componente `<Pagination>` do shadcn (`src/components/ui/pagination.tsx` já existe).
- Cards usam `<PostCard>` (componente já existente) num grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`.
- Estado de filtro/página sincronizado com URL search params (`?cat=ia&page=2&q=...`) para que paginação seja bookmarkável.
- `<DynamicSEO />` no topo (auto-detecta a rota).
- Header H1 "Arquivo do blog" + contador "Exibindo X–Y de Z posts".

**Rota:** Adicionar em `src/App.tsx`:
```tsx
const ArchivePage = lazy(() => import("./pages/ArchivePage"));
// dentro de <Routes>
<Route path="/arquivo" element={<Suspense fallback={<div />}><ArchivePage /></Suspense>} />
```

**Navegação:** Adicionar link "Arquivo" no `src/components/Header.tsx` (menu principal e mobile drawer) entre "Cotações" e os hubs de categoria.

**Sitemap:** Adicionar `<url><loc>https://viciocode.com/arquivo</loc>...` em `public/sitemap.xml`.

---

### 2. Responsividade — auditoria e ajustes globais

Foco em ocupar o espaço disponível em qualquer largura, sem quebrar o design dark + neon.

**`src/components/Layout.tsx`** (sem alterações estruturais — o `flex flex-col` já garante full-height).

**`src/App.css`**: o seletor `#root` tem `max-width: 1280px` + `padding: 2rem` + `text-align: center`. Esses estilos genéricos do Vite estão **brigando** com os containers do Tailwind. Vou:
- Remover/zerar `#root { max-width, padding, text-align }` para que cada página controle seu próprio container.
- Manter as utilities `.logo`, `.read-the-docs` e a animação caso usadas em algum lugar (verificar com `rg`; se não usadas, remover).

**Páginas/componentes a revisar (heuristicamente, ajustes pontuais):**
- `src/pages/Index.tsx` — checar se o hero ocupa `max-w-7xl` e usa `px-3 sm:px-4 lg:px-6`.
- Hubs `IAPage`, `InvestimentosPage`, `GeekPage`, `OtakuPage` — uniformizar container para `max-w-7xl mx-auto px-3 sm:px-4 lg:px-6`.
- `CrimsonDesertMapa.tsx` — checar que o hero do mapa não ultrapassa `max-w-5xl` no desktop e usa `aspect-[1178/1074]` (já feito no plano anterior).
- Tipografia fluida: garantir que H1 dos posts use `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (padrão já adotado no template).
- `<PostCard>` — confirmar que a imagem usa `aspect-[16/9]` + `object-cover` + `w-full` para nunca extrapolar.
- Imagens hero dentro de posts: padronizar para `w-full h-auto` com wrapper `aspect-video sm:aspect-[16/9]`.

> Não vou tocar em **todos** os 133 posts — aplicarei correções no template/layout compartilhado e em 5–8 páginas-mãe que governam o restante.

---

### 3. Sistema offline: posts MANUAL, páginas estáticas AUTOMÁTICO

Mudança conceitual: o usuário **nunca** baixa post sem clicar; mas as páginas-âncora do site (hubs, cotações, sobre, instalar, home, arquivo) são pré-cacheadas em background na primeira abertura do PWA.

**3.1 Auto-precache das páginas estáticas**

Novo arquivo: `src/utils/autoPrecacheStatic.ts`
```ts
// Roda uma única vez por sessão do PWA standalone, em idle time.
import { precacheStaticPages } from "./precachePosts";
export async function autoPrecacheStaticPages() {
  if (sessionStorage.getItem("viciocode:auto-static-done")) return;
  // Aguarda a página ficar idle para não competir com renderização inicial
  const run = () => precacheStaticPages().then(() => sessionStorage.setItem("viciocode:auto-static-done", "1")).catch(() => {});
  if ("requestIdleCallback" in window) (window as any).requestIdleCallback(run, { timeout: 5000 });
  else setTimeout(run, 3000);
}
```

Disparar em `src/main.tsx` após o registro do SW, **somente** quando `usePWAStandalone()` for true (chequei via `matchMedia('(display-mode: standalone)')` direto, sem hook React, no bootstrap).

Adicionar `/arquivo` ao `STATIC_PAGES` em `src/utils/precachePosts.ts`.

**3.2 Botão "Baixar para leitura offline" dentro de cada post**

Novo componente: `src/components/OfflineDownloadButton.tsx`
- Props: `slug: string`, `title: string`, `imageUrl?: string`.
- Visível **apenas no PWA standalone** (usa `usePWAStandalone`).
- Estado local: lê `useOfflinePosts().isCached(slug)`.
- 3 estados visuais:
  - **Não baixado** → botão `<Button variant="outline">` "Baixar para offline" + ícone `Download`.
  - **Baixando** → loader + "Baixando…" (disabled).
  - **Baixado** → botão "Salvo para offline ✓" + ícone `CheckCircle2`, com opção de remover (variant ghost ao lado).
- Ao clicar baixar: chama `precacheSlugs([slug])`.
- Ao clicar remover: chama `removePage('/post/' + slug, imageUrl ? [imageUrl] : [])`.

**Onde inserir:** O botão precisa aparecer em **todos os 133 posts**. Vou inseri-lo dentro do `<BackNavigation />` ou diretamente abaixo de `<ShareWhatsApp />` no header de cada post.

**Estratégia escalável:** Em vez de editar 133 arquivos, vou adicionar o botão no **componente compartilhado** mais próximo. Após inspeção, todos os posts importam `<ShareWhatsApp />` individualmente — então vou:
1. Atualizar o componente `<ShareWhatsApp />` para aceitar uma prop opcional `postSlug` e renderizar o `<OfflineDownloadButton>` ao lado dele quando `postSlug` é fornecido E o usuário está em PWA.
2. **OU** (preferido) — adicionar o `<OfflineDownloadButton>` no componente `<BackNavigation />` quando este recebe uma nova prop opcional `postSlug`.

→ **Decisão:** seguir a opção 1 (ShareWhatsApp), pois nem todos os posts usam BackNavigation com a mesma assinatura, mas todos usam ShareWhatsApp logo após o título. Vou alterar `<ShareWhatsApp />` para detectar a rota `/post/<slug>` automaticamente via `useLocation()` e renderizar o botão de download offline em paralelo (sem precisar editar nenhum post individualmente). Isso entrega o botão em todos os 133 posts numa única edição.

**3.3 Remover aba "Páginas do site" da `OfflineSettingsPage.tsx`**

Linhas 513–564: remover toda a `<section>` de páginas estáticas (já são auto-baixadas).

Manter um pequeno indicador no card de status no topo: "Páginas do site: salvas automaticamente ✓".

**3.4 Atualização instantânea após download/remoção**

O sistema **já emite** o evento `viciocode:cache-updated` em `precachePosts.ts` (`notify()` é chamado após cada download e em `removePage`). O hook `useOfflinePosts` **já escuta** esse evento e refaz `listDownloaded()`. Logo, "Posts salvos" e "Espaço usado" já atualizam em tempo real — **mas** preciso garantir que:
- Após `handleDownloadPost`/`handleRemovePost` na `OfflineSettingsPage`, NÃO há setState manual conflitante. Atualmente já chama `await refresh()` — manter.
- O novo `<OfflineDownloadButton>` no post também ouvirá esse hook (`useOfflinePosts`), portanto ao baixar de dentro do post a UI da `/configuracoes/offline` aberta em outra aba também atualiza (via evento `visibilitychange` que o hook já escuta).
- Vou adicionar um `BroadcastChannel('viciocode-cache')` opcional para sincronizar entre múltiplas abas/janelas em tempo real (o evento `viciocode:cache-updated` é por janela; `BroadcastChannel` cobre cross-tab).

---

### 4. Verificação geral das funções do app

Auditoria rápida (read-only, durante implementação) de:
- `src/hooks/useOfflinePosts.ts` — confere que `count` e `totalBytes` derivam de `cachedPosts` (não de `downloadedPages`); ajustar `totalBytes` para somar somente posts (já que páginas estáticas agora são auto-baixadas e não contam para o "espaço usado pelo usuário"). Ou manter total — decidir mostrando dois contadores: "Posts: X MB · Páginas: Y MB".
- Service Worker (`vite.config.ts` / Workbox) — confirmar runtime caching para HTML continua `NetworkFirst` e que `pages-cache` tem `maxEntries` suficiente (300 já basta).
- Console e network: depois de implementar, verificar via tools que não há erros 404 nas rotas novas.

---

### Arquivos afetados

```text
~ src/pages/regions/RegionPageTemplate.tsx       (correção dos 4 erros TS)
+ src/pages/ArchivePage.tsx                      (nova página)
~ src/App.tsx                                    (rota /arquivo lazy)
~ src/components/Header.tsx                      (link para /arquivo)
~ public/sitemap.xml                             (URL /arquivo)
~ src/App.css                                    (remover estilos legados de #root)

+ src/utils/autoPrecacheStatic.ts                (auto-cache idle das estáticas)
~ src/main.tsx                                   (chama autoPrecacheStaticPages)
~ src/utils/precachePosts.ts                     (adiciona /arquivo a STATIC_PAGES)

+ src/components/OfflineDownloadButton.tsx       (novo)
~ src/components/ShareWhatsApp.tsx               (renderiza OfflineDownloadButton em /post/<slug>)
~ src/pages/OfflineSettingsPage.tsx              (remove seção "Páginas do site", mantém status de auto-cache)
~ src/hooks/useOfflinePosts.ts                   (BroadcastChannel cross-tab, totals separados)

(auditoria responsiva — ajustes pequenos em até 6–8 páginas-mãe)
```

### Notas finais
- Total estimado de edições: ~12 arquivos modificados + 3 novos.
- Nenhuma migração de banco; nenhuma chamada externa nova.
- Nenhum impacto em SEO (mantém prerender atual; rota nova segue padrão `<DynamicSEO />`).
