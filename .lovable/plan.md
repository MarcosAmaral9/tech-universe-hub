## O que já está correto (verificado agora)

- `public/.htaccess` já força HTTP → HTTPS (301) e envia HSTS com `preload`, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
- `public/robots.txt` libera tudo exceto rotas privadas e aponta para os dois sitemaps.
- `scripts/generate-sitemaps.mjs` gera 283 URLs + 205 imagens; `scripts/validate-canonical-robots.mjs` confere consistência entre rotas, posts e sitemap.
- `DynamicSEO` emite canonical self-referencial e `noindex` só nas rotas privadas.
- O build gera um `.html` estático por post (`scripts/generate-post-html.mjs`), o que ajuda crawlers sem JavaScript.

## Lacunas que impedem a garantia de 100%

1. **Só os posts são pré-renderizados.** Home, `/ia`, `/financas`, `/geek`, `/otaku`, `/arquivo`, as 50 páginas `/tag/:slug`, `/autor/marcos-amaral`, `/cotacoes` e as páginas legais caem no `index.html` genérico — para um crawler sem JS, todas têm o mesmo título, descrição e canonical apontando para a home. É o maior risco de "página descoberta, mas não indexada".
2. **Sem canonicalização de host.** Não há regra `www` → domínio principal (nem o inverso) nem normalização de barra final, o que gera URLs duplicadas.
3. **Canonical/robots dos `.html` gerados não é validado** — o script remove metatags do `index.html`, mas não há checagem de que cada arquivo final tem canonical próprio e `robots: index, follow`.
4. **Sitemap não é verificado contra respostas reais** — nenhuma checagem de que cada URL devolve 200 em HTTPS.
5. **Search Console** não está confirmado como verificado nem com sitemap submetido; sem isso não há como comprovar indexação.
6. **CSP permite `http:` em `img-src`**, o que abre porta para conteúdo misto (quebra o cadeado HTTPS em algumas páginas).
7. **Segurança do backend não auditada nesta rodada** (RLS, políticas, dependências).

## Etapa 1 — Pré-renderizar todas as rotas indexáveis

- Generalizar `scripts/generate-post-html.mjs` para gerar HTML estático também para: home, 4 categorias, `/arquivo`, `/cotacoes`, `/historico-cotacoes`, `/autor/marcos-amaral`, `/publicidade`, páginas legais, portais e todas as tags de `/tag/:slug`, usando título/descrição vindos de `DynamicSEO`/`posts.ts`.
- Cada arquivo recebe: `<title>` próprio, `meta description`, `link rel=canonical` self-referencial em `https://viciocode.com/...`, `og:url` igual ao canonical e `robots: index, follow`.
- Rotas privadas (`/entrar`, `/perfil/*`, `/configuracoes`, `/painel-social`, `/leitura-offline`, `/redefinir-senha`, `/auth/*`) continuam fora do pré-render e mantêm `noindex`.

## Etapa 2 — HTTPS e canonicalização de URL

- Adicionar ao `.htaccess`, antes do fallback SPA: redirecionamento 301 de `www.viciocode.com` → `viciocode.com` (mantendo HTTPS num único salto) e remoção de barra final duplicada.
- Remover `http:` do `img-src` na CSP do `index.html` para eliminar conteúdo misto.
- Varredura no código por qualquer URL absoluta `http://` (JSON-LD, feeds, links de fontes, manifest) e conversão para `https://`.

## Etapa 3 — Validadores automáticos no build

- Estender `scripts/validate-canonical-robots.mjs` para, após o build, abrir cada `.html` de `dist/` e falhar se faltar canonical, se o canonical não for self-referencial/HTTPS, ou se houver `noindex` numa rota pública.
- Novo script `scripts/verify-sitemap-urls.mjs`: lê `sitemap.xml`, confere que toda URL é HTTPS, sem query string, sem duplicata, e que existe rota/arquivo correspondente; opcionalmente faz HEAD contra o site publicado para confirmar 200.
- Checagem cruzada: toda rota pública do `App.tsx` precisa estar no sitemap e vice-versa (já parcialmente feito) + toda página com imagem hero presente no `sitemap-images.xml`.

## Etapa 4 — Google Search Console

- Confirmar a verificação do domínio (o arquivo `google11368c308f3d772c.html` já existe) e, se o conector do Search Console estiver disponível, submeter `sitemap.xml` e `sitemap-images.xml` e rodar a Inspeção de URL numa amostra (home, 1 categoria, 1 tag, 1 post, página do autor) para confirmar status "URL está no Google".
- Relatar quaisquer URLs com cobertura negada e corrigir a causa.

## Etapa 5 — Auditoria de segurança

- Rodar o scan de segurança do backend (RLS, políticas, tabelas expostas) e o scan de dependências (npm audit); corrigir achados críticos/altos.
- Revisar policies das tabelas de comentários, favoritos e alertas: leitura pública apenas onde faz sentido, escrita sempre restrita ao usuário autenticado.
- Revisar as edge functions (`verify-turnstile`, `buffer-publish`, `generate-social-content`, cotações) quanto a segredos, CORS e validação de entrada.
- Reduzir a CSP onde possível (avaliar remoção de `unsafe-eval`) sem quebrar AdSense/Analytics.
- Confirmar que nenhuma chave privada está no repositório (apenas chaves publicáveis).

## Detalhes técnicos

- Arquivos alterados: `scripts/generate-post-html.mjs`, `scripts/validate-canonical-robots.mjs`, `public/.htaccess`, `index.html` (CSP), `package.json` (novo passo de verificação pós-build).
- Novo arquivo: `scripts/verify-sitemap-urls.mjs`.
- Sem alterações de banco de dados previstas; eventuais correções de RLS dependerão do resultado do scan.

## Ressalva honesta

Nenhuma configuração garante indexação: o Google decide o que indexa. O que este plano garante é que **nada do lado do site impeça a indexação** — canonical correto por página, HTML servido com conteúdo real, sitemap válido, HTTPS único e Search Console monitorando. Se quiser previews sociais e HTML renderizado no servidor de forma nativa, o app pode migrar para o template mais recente com SSR ([o que a migração entrega](https://lovable.dev/blog/building-apps-using-tanstack-start)).
