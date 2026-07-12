# Deploy — VicioCode → Hostinger

Pipeline automatizado que garante que **TODOS** os arquivos de `dist/`
(incluindo `dist/post/*.html` e `dist/sitemap.xml`) cheguem juntos no
`public_html/` da Hostinger. Nunca mais upload parcial.

## Comando único

```bash
npm run build
```

Faz, em ordem, com falha na primeira quebra:

1. `prebuild` — audita posts, verifica ordem editorial e **regenera**
   `public/sitemap.xml` + `public/sitemap-images.xml` a partir de
   `src/data/posts.ts` (sempre versionados no Git).
2. `vite build` — compila o bundle React e copia `public/` → `dist/`.
3. `generate-post-html.mjs` — pré-renderiza um `dist/post/<slug>.html`
   por post com `<title>`, `<link rel="canonical">`, `og:*` e JSON-LD
   próprios. Faz o Googlebot ver metadados corretos sem esperar JS.
4. `verify-build-output.mjs` — **guardião**: falha o build se qualquer
   post não tiver HTML pré-renderizado, se o `sitemap.xml` estiver
   incompleto, ou se o `index.html` ainda tiver boilerplate Lovable.

Se `npm run build` termina com `✅ dist/ pronto para deploy`, o
diretório está 100% correto para Hostinger.

## Opção A — Deploy automático (recomendado)

Cada push em `main` no GitHub dispara `.github/workflows/deploy-hostinger.yml`,
que builda e envia `dist/` inteiro por FTPS para `public_html/`.

Configuração única — adicione 3 secrets em
**GitHub → Settings → Secrets and variables → Actions**:

| Secret | Onde encontrar na Hostinger |
| --- | --- |
| `HOSTINGER_FTP_SERVER` | hPanel → Arquivos → Contas FTP → "Host FTP" (ex.: `ftp.viciocode.com`) |
| `HOSTINGER_FTP_USERNAME` | mesma tela — "Nome do usuário FTP" |
| `HOSTINGER_FTP_PASSWORD` | senha da conta FTP (crie/redefina lá mesmo) |

Recursos do workflow:
- **FTPS** (TLS) com o servidor da Hostinger.
- **Não apaga** `api.php`, `cache/` nem uploads externos ao build.
- Após o upload, faz *ping* nos sitemaps do Google para reindexação.
- `concurrency: hostinger-deploy` — deploys enfileirados, sem sobreposição.

## Opção B — Upload manual via ZIP

```bash
npm run build
npm run deploy:zip     # gera viciocode-dist.zip
```

1. Abra o **Gerenciador de Arquivos** da Hostinger em `public_html/`.
2. Faça upload de `viciocode-dist.zip`.
3. Clique com o direito → **Extrair** → sobrescreva.
4. Apague o zip do servidor.

Preserva `.htaccess`, `sitemap.xml`, `robots.txt` e todos os
`post/*.html`. Zero risco de subconjunto.

## O que NÃO enviar / não sobrescrever

- `api.php` (backend PHP da Hostinger — mantido pelo `exclude:` do workflow).
- `cache/` (snapshots do cron de cotações — populados em produção).
- Uploads de usuários (avatares etc.) fora de `dist/`.

## Após o deploy — validação de indexação

1. Aguarde 1–2 minutos e teste 3 posts aleatórios:
   ```bash
   curl -s https://viciocode.com/post/gta-vi-2026 | grep -E '<title>|canonical'
   curl -s https://viciocode.com/post/cdb-2026-guia-completo | grep -E '<title>|canonical'
   curl -s https://viciocode.com/post/bdr-2026-como-investir-apple-amazon-google-b3 | grep -E '<title>|canonical'
   ```
   Todos devem retornar título único + canonical próprio.
2. No **Google Search Console** → **Sitemaps**, reenvie
   `https://viciocode.com/sitemap.xml`.
3. Em **Páginas**, clique **Validar correção** nos grupos "Duplicada
   sem canônica selecionada pelo usuário" e "Descoberta — não indexada".
