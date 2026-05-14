# Plano completo: SEO + Segurança + AdSense

## Objetivo

Resolver pendências de SEO/segurança remanescentes, restaurar PWA/Push/Offline corretamente, garantir canônicos consistentes e maximizar a receita do AdSense sem prejudicar Core Web Vitals.

---

## 1. Service Worker / PWA / Push (restauração completa)

**Problema:** Mesmo após remover o `unregister()` do `index.html`, o projeto não tem registro ativo de SW (não há `vite-plugin-pwa` configurado nem `navigator.serviceWorker.register(...)` em `src/main.tsx`). Push, offline e auto-precache estão "mortos".

**Ações:**

- Criar `public/sw.js` próprio (sem `vite-plugin-pwa`, para evitar instabilidade no preview), com:
  - `install` → `skipWaiting`
  - `activate` → `clients.claim` + limpeza de caches antigos por versão
  - `fetch`:
    - **NetworkFirst** para navegação HTML (timeout 3s, fallback `/offline.html`)
    - **CacheFirst** para `/assets/*`, fontes, imagens (`.webp`, `.png`, `.svg`)
    - **StaleWhileRevalidate** para `/api.php?action=*` leves (most-read, comments)
  - `push` → exibe `Notification` com `title`, `body`, `icon`, `badge`, `data.url`
  - `notificationclick` → `clients.openWindow(data.url)`
- Em `src/main.tsx`, registrar o SW **apenas em produção e fora de iframes/preview**:
  ```ts
  const isPreview = location.hostname.includes("lovableproject.com") || location.hostname.includes("id-preview--");
  const inIframe = (() => { try { return self !== top; } catch { return true; } })();
  if (import.meta.env.PROD && !isPreview && !inIframe && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  } else {
    navigator.serviceWorker?.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
  }
  ```
- Versionar o cache (`viciocode-v{BUILD}`) para invalidar no deploy.
- Adicionar `.htaccess`: `Cache-Control: no-cache` para `/sw.js` (evita SW preso).

---

## 2. Canônico SPA — eliminar risco de duplicado/obsoleto

**Problema:** `DynamicSEO` injeta canônico via JS a cada rota; risco de tag remanescer da rota anterior ou de duplicar com a estática.

**Ações:**

- Auditar `src/components/DynamicSEO.tsx` para garantir que:
  - **Remove** qualquer `<link rel="canonical">` existente antes de inserir o novo (`document.querySelectorAll('link[rel=canonical]').forEach(n => n.remove())`).
  - Roda em `useEffect` com dependência da `pathname` atual.
  - Confirmar que `index.html` continua **sem** canônico estático (já está ✅).
- Migrar `DynamicSEO` para `react-helmet-async` (gerencia dedupe corretamente e prepara terreno para SSR/prerender futuro).
- Garantir `og:url` também atualizado por rota (mesmo problema de SPA).

---

## 3. Sitemaps — qualidade dos sinais

**Ações:**

- `public/sitemap.xml`: já corrigido (`xmlns` e `changefreq`/`priority` diferenciados). Validar contagem (176 URLs) bate com posts publicados.
- `public/sitemap-images.xml`: revisar com script — listar todas imagens hero (`/assets/posts/*.webp`) referenciadas em `src/data/posts.ts`, gerar `<image:image>` por post pai. Atualizar `<lastmod>` por data do post.
- Criar `scripts/generate-sitemaps.mjs` rodando em `prebuild` para manter ambos sempre em sincronia com `posts.ts` (evita esquecer ao publicar).
- Manter `robots.txt` referenciando os dois sitemaps (já está ✅).

---

## 4. AdSense — rentabilidade máxima sem matar performance

**Problema:** Script AdSense + GA4 + GTM + Auto Ads competem pelo main thread; LCP/INP mobile sofrem.

**Ações:**

- **Lazy-load do `adsbygoogle.js**`: trocar `<script async>` no `<head>` por carregamento diferido após `load` (igual já é feito com GTM). Reduz JS de boot em ~100KB.
- **Auto Ads:** garantir que o snippet `enable_page_level_ads: true` está presente no `AdSense.tsx` (ou via painel AdSense). Caso já habilitado no painel, manter.
- **Slots manuais bem posicionados** (mais rentáveis que Auto Ads sozinho):
  - Leaderboard topo do post (após h1, acima do fold em desktop, abaixo do hero em mobile).
  - In-article após 2º parágrafo e após cada `<h2>` (já mapeado em memória `layout/article-features`). Auditar todos os 157 posts.
  - Rectangle 300x250 sticky na sidebar desktop (categorias/cotações).
  - Multiplex no fim do artigo (relacionados monetizados).
  - Anchor mobile (já existe `AdAnchorMobile`).
- **Nunca excluir as páginas legais (/privacidade, /termos, /sobre, /contato) — ter elas no site é uma exigência da política AdSense .**
- **CLS:** todo `<ins>` precisa de `min-height` reservado (já feito no `SIZE_CLASS`). Confirmar visualmente em desktop ≥1280px.
- **ads.txt:** verificar `public/ads.txt` contém linha oficial `google.com, pub-4907992121422514, DIRECT, f08c47fec0942fa0`.
- **Política:** adicionar consentimento de cookies (GDPR/LGPD) — usar Google Funding Choices (`fundingchoicesmessages.google.com`) para servir consent banner que destrava personalized ads (eCPM maior).

---

## 5. CSP — desbloquear GA4/GTM eventos e Funding Choices

**Problema:** apesar do fix anterior incluir `googletagmanager.com` em `connect-src`, faltam endpoints de envio de eventos e o domínio do Funding Choices para consentimento.

**Ações em `index.html` CSP:**

- `connect-src`: adicionar `https://region1.google-analytics.com`, `https://*.googletagmanager.com`, `https://fundingchoicesmessages.google.com`.
- `script-src`: adicionar `https://fundingchoicesmessages.google.com`, `https://*.googlesyndication.com` (Auto Ads injeta de subdomínios).
- `frame-src`: adicionar `https://*.googlesyndication.com`, `https://*.doubleclick.net`.
- `img-src`: já liberal (`https:`), ok.

---

## 6. HTTPS / Segurança extra

**Ações em `public/.htaccess`:**

- HSTS já configurado ✅. Adicionar `preload` ao Google HSTS Preload List (passo manual após validar).
- Adicionar `Cross-Origin-Opener-Policy: same-origin-allow-popups` (necessário para Google OAuth popup).
- `Cross-Origin-Resource-Policy: cross-origin` para assets servidos a AdSense.
- Headers de cache: `index.html` → `Cache-Control: no-cache, must-revalidate`; `/assets/*` (hashed) → `max-age=31536000, immutable`.

---

## 7. Performance / Core Web Vitals

- Preload do hero do FeaturedCarousel (LCP image) — adicionar `<link rel="preload" as="image">` dinâmico no `Index.tsx`.
- Confirmar `font-display: swap` em `public/fonts/fonts.css` (já deve estar).
- Auditar `content-visibility: auto` nos cards (já aplicado em `post-card-deferred`).
- Lighthouse target: LCP <2.5s, INP <200ms, CLS <0.1 em mobile 4G.

---

## 8. Validação final

1. `tsc --noEmit` limpo.
2. Build (`vite build`) sem warnings.
3. Lighthouse mobile + desktop em `/`, `/post/<slug>`, `/cotacoes`.
4. Validar sitemap em [https://www.xml-sitemaps.com/validate-xml-sitemap.html](https://www.xml-sitemaps.com/validate-xml-sitemap.html).
5. Google Search Console: reenviar sitemaps, conferir cobertura.
6. AdSense: verificar status "Ready" em todos os slots após 24h.
7. Em produção (Hostinger): testar push notifications real, instalar PWA, navegar offline.

---

## Ordem de execução sugerida

1. **CSP + AdSense lazy-load + ads.txt** (impacto receita imediato, baixo risco).
2. **Service Worker novo + registro condicional** (restaura PWA/Push/Offline).
3. **DynamicSEO → react-helmet-async** (corrige canônico SPA).
4. **Script `generate-sitemaps.mjs` + `sitemap-images.xml**`.
5. **Headers extras `.htaccess**` (HSTS preload, COOP, CORP).
6. **Auditoria de slots AdSense post a post** (maior trabalho manual).
7. **Validação Lighthouse + GSC + AdSense**.

Quer que eu execute em uma única implementação ou divida em PRs menores (p.ex. começar só pelos itens 1–3)? Faça todas as mudanças de uma vez.