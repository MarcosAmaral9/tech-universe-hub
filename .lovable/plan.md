## Objetivo

1. Ao abrir o app **sem internet**, cair direto na página de artigos baixados (`/leitura-offline`).
2. Ao **instalar o app**, baixar apenas o essencial (shell do app: JS/CSS/fontes/ícones + a própria tela de leitura offline) — **nenhum artigo**.
3. Os artigos continuam sendo baixados só quando o usuário escolher.

## Situação atual (verificada no código)

- `src/utils/autoPrecacheStatic.ts` roda no `main.tsx` quando o app está em modo standalone e chama `precacheStaticPages()`, que baixa todas as páginas estáticas de `STATIC_PAGES` **incluindo `assetUrls: imagesByCategory.***` — e essas listas contêm a imagem hero de **todos os posts** de cada categoria (`precachePosts.ts`). Ou seja, hoje a instalação puxa centenas de imagens de artigos automaticamente.
- `src/components/OfflineGuard.tsx` já redireciona para `/leitura-offline` quando `navigator.onLine === false`, mas roda em qualquer contexto (inclusive navegador web) e só na primeira montagem; se o app abrir e o React só montar depois do fallback do Service Worker, o usuário pode ver `offline.html` em vez da biblioteca.
- `vite.config.ts` (VitePWA) usa `navigateFallback: index.html` e `precacheFallback: /offline.html` no cache de navegação; `start_url` é `/`.

## Mudanças propostas

### 1. Instalação enxuta (só o essencial)

- Reescrever `autoPrecacheStatic.ts` para pré-cachear apenas um conjunto mínimo: `/` (shell), `/leitura-offline` e `/configuracoes/offline` — **sem `assetUrls**`, portanto sem imagens de artigos.
- Ajustar `STATIC_PAGES` para separar `assetUrls` (imagens de posts da categoria) do download automático: manter o download completo de hubs disponível apenas como ação **manual** em Configurações → Offline.
- Resultado: instalar o app baixa poucos KB/MB (bundle já precacheado pelo Workbox) e zero artigos.

### 2. Abertura offline direto na biblioteca

- Melhorar `OfflineGuard`: além do redirect no mount, escutar o evento `offline` e tratar o caso de navegação inicial; manter as rotas isentas atuais (`/entrar`, `/cadastro`, `/auth`, e a própria `/leitura-offline`).
- Adicionar um redirect precoce (antes do React montar) em `index.html`/`main.tsx`: se `!navigator.onLine` e o caminho atual não for isento, trocar para `/leitura-offline` já na inicialização, evitando flash de tela vazia.
- Garantir que o `offline.html` do Workbox só apareça em último caso: apontar o fallback de navegação para a rota da biblioteca offline quando o shell estiver em cache, e manter `offline.html` apenas quando nem o shell existir.
- Faça: mudar `start_url` do manifest para `/?source=pwa` mantido em `/`, sem alterar `start_url` para uma rota offline — o redirect em runtime resolve, e mudar `start_url` exigiria reinstalação em apps já instalados.

### 3. Tela de leitura offline

- Em `OfflineReaderPage`, tratar o estado "app recém-instalado, nada baixado" com CTA claro para Configurações → Offline (já existe) e adicionar atalho para baixar por categoria.
- Filtrar corretamente registros do tipo `static` (hoje já são ignorados pelo lookup em `blogPosts`).

## Detalhes técnicos

- Arquivos tocados: `src/utils/autoPrecacheStatic.ts`, `src/utils/precachePosts.ts` (separação de assets), `src/components/OfflineGuard.tsx`, `src/main.tsx`, `src/pages/OfflineReaderPage.tsx`, `vite.config.ts` (apenas ajuste do fallback de navegação).
- Nenhuma alteração de backend, dados ou de conteúdo dos artigos.
- Observação: o comportamento offline só é testável no app publicado (Hostinger/PWA instalado), não no preview do editor.