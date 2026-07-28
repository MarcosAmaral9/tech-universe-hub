## Diagnóstico atual

O site já está muito bem posicionado para aprovação: 210 artigos longos (1.400+ palavras), páginas legais completas (privacidade com 7 menções a cookies/AdSense, termos, política de conteúdo, sobre, contato), `ads.txt` correto, sitemap com 231 URLs, robots.txt bloqueando só rotas privadas, breadcrumbs, FAQ schema e EditorialTake em todos os posts.

Pontos que ainda podem travar ou reduzir o desempenho:

1. **Slots de anúncio são placeholders** — `SLOTS` em `AdSense.tsx` usa IDs fictícios (`1234567890`, etc.). Mesmo com `ADS_ENABLED = true`, nenhum bloco preenche.
2. `**ADS_ENABLED = false**` — kill switch global desligado; correto durante a análise, mas precisa de um plano claro de ativação.
3. **7 posts sem `<AuthorBio>**` (203 de 210) — E-E-A-T inconsistente.
4. **Sem `app-ads.txt**` — não é bloqueante, mas o AdSense reclama se o PWA for tratado como app.
5. **Sem página de "Política de Anúncios/Publicidade"** explícita nem aviso de conteúdo patrocinado.
6. **Sem página de autor dedicada** (`/autor/marcos-amaral`) com bio, credenciais e links sociais — é o item de E-E-A-T que mais pesa em nichos YMYL (finanças).
7. **Disclaimer financeiro** não confirmado em todos os posts de finanças — YMYL sem aviso "não é recomendação de investimento" é motivo comum de reprovação.
8. **Descoberta/retenção**: falta hub de tags, "leia a seguir" no fim do artigo além dos relacionados, e newsletter só como modal.

## Etapa 1 — Requisitos de aprovação (bloqueantes)

- Criar `/autor/marcos-amaral`: bio longa, áreas de expertise, formação/experiência, links sociais, lista de artigos do autor, JSON-LD `Person` + `sameAs`. Linkar a partir de todo `AuthorBio`.
- Adicionar `<AuthorBio>` nos 7 posts faltantes (auditoria via script existente estendido).
- Adicionar disclaimer financeiro padronizado (componente `FinanceDisclaimer`) no fim de todo post de categoria `invest`, e disclaimer de "conteúdo informativo/IA" nos posts de IA.
- Criar página `/publicidade` (política de anúncios, afiliados e conteúdo patrocinado) e linkar no rodapé.
- Criar `public/app-ads.txt` com a mesma linha do `ads.txt`.
- Verificar que nenhuma página pública renderiza conteúdo vazio/placeholder (rodar auditorias já existentes + checagem de posts com prosa < 1.400 palavras via `check-post-prose.mjs`).

## Etapa 2 — Configuração correta dos anúncios

- Substituir os 4 slots placeholder pelos IDs reais do painel AdSense (você fornece; deixo `SLOTS` com comentário e validação em dev que avisa se ainda for placeholder).
- Manter `ADS_ENABLED = false` até a aprovação; depois trocar para `true` num único ponto.
- Revisar densidade: garantir no máximo 1 anúncio a cada ~2 blocos de conteúdo, nenhum acima do dobrar da tela em mobile além do leaderboard, e o anchor mobile sem sobrepor navegação — evita "layout enganoso".
- Confirmar bloqueio de anúncios em legais/auth/perfil (já implementado) e adicionar `/publicidade` e `/autor/` à lista bloqueada.

## Etapa 3 — Atrair mais leitores

- **Hub de tags/subtópicos** (`/tag/:slug`) com listagem paginada e SEO próprio — multiplica páginas indexáveis com valor real e melhora links internos.
- **"Leia a seguir"** contextual no fim do artigo (próximo/anterior da mesma série ou subtópico), além dos relacionados — aumenta páginas/sessão, o que eleva o RPM.
- **Newsletter inline** no fim dos artigos (hoje só modal), com CTA por categoria.
- **Índice de conteúdo (TOC)** flutuante em artigos longos no desktop — melhora tempo de permanência e gera sitelinks no Google.
- **Página de arquivo por data e por categoria** já existente reforçada com links internos no rodapé.
- **Otimizar Core Web Vitals**: auditar LCP das imagens hero (garantir `fetchpriority="high"` na hero e lazy em todo o resto) e reduzir CLS reservando altura dos slots (já parcialmente feito em `SIZE_CLASS`).
- **Compartilhamento**: botões nativos (Web Share API) no topo e fim do artigo, além do WhatsApp já existente.

## Detalhes técnicos

- Novos arquivos: `src/pages/AuthorPage.tsx`, `src/pages/AdvertisingPolicyPage.tsx`, `src/pages/TagPage.tsx`, `src/components/FinanceDisclaimer.tsx`, `src/components/ReadNext.tsx`, `src/components/TableOfContents.tsx`, `public/app-ads.txt`.
- Alterações: `src/App.tsx` (rotas), `src/components/Footer.tsx` (links legais), `src/components/AuthorBio.tsx` (link para página de autor), `src/components/AdSense.tsx` (slots + rotas bloqueadas), `src/components/DynamicSEO.tsx` (SEO das novas rotas), `scripts/generate-sitemaps.mjs` (incluir tags e autor), `scripts/audit-article-structure.mjs` (exigir AuthorBio e disclaimer).
- Nenhuma mudança de backend necessária.

## O que preciso de você

Os 4 IDs de slot reais do painel AdSense (leaderboard, retângulo, in-article, âncora). Sem eles, implemento tudo e deixo os slots marcados para troca em um único lugar.

&nbsp;

Ainda não foi autorizado o google adsense no site, quando for eu trago os codigos aqui, até lá deixe os anuncios desativados.