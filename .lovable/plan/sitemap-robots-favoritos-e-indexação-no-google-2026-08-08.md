# Sitemap/robots, favoritos e indexação no Google

Três frentes: validar geração de sitemap/robots, corrigir os favoritos (ativos, artigos e o link salvo no navegador que abre em tela preta) e diagnosticar a falta de indexação/HTTPS no Google.

## 1. Sitemap e robots.txt

- Rodar os validadores já existentes (`generate-sitemaps`, `validate-canonical-robots`, `verify-sitemap-urls`, `validate-social-cards`) e corrigir o que acusar.
- Garantir no sitemap: só rotas indexáveis, sem duplicidade, sem query/hash, sem barra final, canonical self-referencial e um HTML pré-renderizado para cada URL.
- Incluir/conferir hubs de categoria, tags e páginas de arquivo; e conferir se as páginas com paginação (arquivo/busca) ficam fora do sitemap e com `noindex` quando têm parâmetros.
- Revisar `robots.txt`: manter bloqueio das rotas privadas, liberar assets (JS/CSS/imagens) para o Googlebot e manter as duas linhas de `Sitemap:`.

## 2. Tela preta ao abrir o site pelos favoritos do navegador

Diagnóstico provável (a confirmar no navegador): o Service Worker do PWA guarda o `index.html` antigo no precache e serve essa versão nas navegações (`navigateFallback: "index.html"`). Depois de um novo deploy na Hostinger, esse HTML aponta para arquivos JS com hash que não existem mais → nada renderiza (tela preta). Quem entra pelo endereço salvo cai direto nesse caminho.

Correção planejada:
- Reproduzir no navegador (Playwright) com SW ativo, simulando o deploy antigo, e confirmar os 404 de chunk.
- Ajustar a estratégia do SW para navegações: sempre rede primeiro com fallback correto, sem servir `index.html` de precache desatualizado; e não usar o shell quando existir HTML pré-renderizado daquela rota.
- Adicionar recuperação automática: ao detectar falha de carregamento de chunk, limpar caches do app, desregistrar o SW e recarregar uma única vez (sem loop).
- Conferir o `.htaccess` para que `index.html` e os `.html` pré-renderizados nunca fiquem em cache longo, enquanto `/assets/*` continua com cache anual.

## 3. Botão de favoritar (ativos e artigos)

- Verificar o fluxo ponta a ponta: sessão do usuário, chamadas a `api.php` (`favorite_assets` e favoritos de artigos), retorno do backend e atualização da lista na tela.
- Corrigir o que estiver quebrado: identificação do usuário enviada na requisição, cabeçalho de autenticação, resposta esperada pelo front e persistência após recarregar a página.
- Deixar claro na interface quando a ação falhar (hoje erros são engolidos silenciosamente).
- Observação: esses recursos dependem do PHP/MySQL da Hostinger e não funcionam no preview estático — a validação final é em produção.

## 4. Por que o Google não indexa / não reconhece HTTPS

- Consultar o Search Console conectado: estado de indexação da home, cobertura, canonical escolhido pelo Google, status do sitemap enviado e inspeção de URLs de amostra (post, categoria, tag).
- Conferir no código o que pode bloquear: `noindex` acidental, canonical apontando para outro host/protocolo, links internos em `http://`, recursos externos em HTTP e CSP bloqueando scripts.
- Conferir a hospedagem: se o redirecionamento HTTP→HTTPS e `www`→raiz do `.htaccess` está realmente ativo, se o certificado cobre os dois hosts e se `sitemap.xml`/`robots.txt` respondem 200 em HTTPS.
- Entregar um relatório com a causa confirmada e as correções aplicadas; o que depender de ação no painel da Hostinger ou no Search Console fica listado como passo manual.

## Detalhes técnicos

- Arquivos envolvidos: `vite.config.ts` (config do Workbox/VitePWA), `public/.htaccess`, `public/robots.txt`, `scripts/generate-sitemaps.mjs`, `scripts/validate-canonical-robots.mjs`, `scripts/verify-sitemap-urls.mjs`, `src/hooks/useFavoriteAssets.ts`, `src/components/FavoriteButton.tsx`, favoritos de artigos em `src/pages/SettingsPage.tsx` e `public/api.php`.
- Nenhuma mudança de backend fora do PHP/MySQL da Hostinger.
