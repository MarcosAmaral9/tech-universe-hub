# Corrigir a leitura offline do aplicativo

Objetivo: baixar artigo funciona de verdade, o app abre sem internet direto na página de artigos baixados, e os artigos baixados abrem e leem normalmente offline.

## O que está errado hoje

1. **Sem internet o app pode nem abrir no React.** A regra de navegação do service worker usa `offline.html` como reserva. Se a URL aberta não estiver no cache (por exemplo o atalho abre em `/`, e `/` não foi baixado), o usuário cai numa página estática sem saída, e o redirecionamento para `/leitura-offline` nunca acontece porque ele depende do app React ter carregado.
2. **Download "silencioso".** Em `precachePosts.ts`, se algo falha o erro é engolido; e mesmo quando a resposta é vazia (0 bytes) o artigo é registrado como baixado. Resultado: aparece "Salvo offline" mas offline não abre nada.
3. **Chaves de cache inconsistentes.** A página é gravada só com a URL absoluta; a navegação offline pode pedir a variação com barra final. Também não há verificação depois do download confirmando que a entrada existe mesmo no cache.
4. **A tela de artigos baixados não se atualiza.** `OfflineReaderPage` lê o registro uma única vez ao montar e ignora o evento `viciocode:cache-updated`, então baixar um artigo não reflete na lista sem recarregar. Ela também confia só no registro, sem conferir se o conteúdo está realmente em cache.
5. **Pré-cache do essencial é condicional.** O shell mínimo (`/`, `/leitura-offline`, `/configuracoes/offline`) é gravado uma vez com um flag em storage; se falhar ou o cache for limpo, nunca é refeito.

Regras mantidas conforme sua escolha: download continua restrito ao app instalado (PWA) e a tela de Configurações → Offline continua exigindo login. O botão dentro do artigo (acima do "Conheça o autor") permanece onde está — só passa a funcionar de forma confiável.

## O que será feito

**Abertura offline**
- Navegações offline passam a cair no shell do app (`index.html`) em vez de `offline.html`, para o React sempre iniciar. `offline.html` fica só como último recurso.
- `OfflineGuard` passa a: redirecionar para `/leitura-offline` ao abrir sem internet, e também quando o usuário abre offline um artigo que não foi baixado (com aviso explicando).
- O shell essencial (`/`, `/leitura-offline`) é reverificado a cada inicialização com internet e regravado se estiver faltando, em vez de depender do flag único.

**Download confiável**
- Após o download, confirmar que a entrada existe no cache e tem tamanho > 0; só então registrar no IndexedDB. Se falhar, propagar o erro para o botão mostrar mensagem real de erro.
- Gravar a página nas variações de chave (`/post/slug`, `/post/slug/` e URL absoluta) para bater com qualquer forma da requisição de navegação.
- Baixar junto a imagem hero do artigo (já previsto) e garantir que os pacotes de código das rotas continuam no pré-cache do build.
- Botão do artigo: estados corretos (baixar / baixando / salvo / remover) refletindo o estado real, com mensagem de erro quando o download não completa.

**Tela de artigos baixados**
- `OfflineReaderPage` passa a usar o hook `useOfflinePosts`, atualizando em tempo real com o evento de cache.
- Cada item indica se está realmente pronto para leitura offline; itens quebrados podem ser rebaixados ou removidos.
- Botão de atualizar lista e contadores por categoria mantidos.

**Verificação**
- Rodar o build de produção, servir o `dist`, e testar com navegador headless: baixar um artigo, cortar a rede, reabrir na raiz e confirmar que cai em `/leitura-offline`, abrir o artigo baixado e confirmar que o conteúdo renderiza.

## Observação importante

Service worker não roda no preview do editor (fica desativado em desenvolvimento). O comportamento offline só é observável no app publicado/instalado na Hostinger — a validação automática será feita sobre o build de produção servido localmente.

## Detalhes técnicos

- `vite.config.ts`: ajustar a rota de navegação (`NetworkFirst` em `pages-cache`) para usar o shell do SPA como fallback e manter `navigateFallbackDenylist`.
- `src/utils/precachePosts.ts`: `downloadAndCache` valida `response.ok` e o tamanho; `runQueue` deixa de registrar downloads falhos e repassa o erro.
- `src/utils/offlineRegistry.ts`: manter API atual; remover as funções duplicadas não usadas (`removeDownloaded`, `clearAllDownloaded`).
- `src/components/OfflineGuard.tsx`, `src/components/OfflineDownloadButton.tsx`, `src/pages/OfflineReaderPage.tsx`, `src/utils/autoPrecacheStatic.ts`: alterações descritas acima.
