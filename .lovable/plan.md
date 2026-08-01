# Dois novos artigos de Finanças

## Artigo 1 — Elon Musk, o primeiro trilionário da história

Foco: como o IPO da SpaceX (12/06/2026, ações abrindo a US$ 150, +11% sobre o preço de oferta) levou a fortuna de Musk à casa de US$ 1,1 trilhão, com a SpaceX respondendo por cerca de 80% do patrimônio.

Conteúdo:
- O que aconteceu no dia do IPO e por que a abertura de capital "destrava" riqueza que antes era ilíquida.
- Radiografia do império: SpaceX/Starlink, Tesla (incluindo o pacote de remuneração bilionário), xAI/X, Neuralink e Boring Company — participação de cada uma na fortuna.
- Impacto no mercado: efeito de um IPO gigante sobre índices, apetite por risco, concorrentes do setor espacial e o debate sobre concentração de riqueza.
- O que isso significa para o investidor brasileiro: como acessar (ou não) esses ativos via BDRs, ETFs internacionais e fundos, custos, câmbio e tributação; riscos de "comprar a manchete".
- Caixas de alerta sobre volatilidade pós-IPO e lock-up.

Elementos visuais: tabela das empresas x valuation x fatia da fortuna, linha do tempo da trajetória patrimonial, boxes de destaque no padrão de Finanças.

## Artigo 2 — Recuperação judicial: por que tantas empresas estão pedindo e como isso afeta você

Foco: o recorde da série histórica da Serasa Experian — 977 processos em 2025 (+5,5% sobre 2024) envolvendo 2.466 empresas (+12,9%), maior número desde o início da série em 2012.

Conteúdo:
- O que é recuperação judicial (Lei 11.101/2005 com as mudanças da Lei 14.112/2020) e como ela difere de falência e de recuperação extrajudicial.
- Passo a passo do processo: pedido, deferimento, stay period, plano, assembleia de credores, homologação, biênio de fiscalização e convolação em falência.
- Por que os números explodiram: juros altos, crédito caro, endividamento pós-pandemia, varejo e agro.
- Como afeta clientes e consumidores: garantia, produtos pagos e não entregues, milhas e planos, cancelamento e reembolso, direitos do CDC, ordem de pagamento dos credores e onde se habilitar.
- Como afeta quem investe: debêntures, CRI/CRA, FIIs, ações de empresa em RJ e o que observar antes de aportar.
- Checklist prático de como identificar sinais de risco em uma empresa antes de comprar ou investir.

Elementos visuais: tabela comparando RJ x recuperação extrajudicial x falência, fluxo do processo em etapas, tabela da ordem de pagamento dos credores, boxes de alerta.

## Padrão editorial aplicado aos dois

- Categoria `invest`, subtópicos `mercado` (Musk) e `economia` (recuperação judicial), data de hoje, 12-14 min de leitura, texto 100% PT-BR e factual.
- Estrutura obrigatória: DynamicSEO/metadados, hero .webp exclusivo gerado para cada artigo, CategoryBadge, ShareWhatsApp, AuthorBio, TableOfContents, anúncios fora de `.map()`, e o rodapé na ordem Análise do Marcos → Fontes (mínimo 5, com Serasa Experian, Forbes, Exame, Bloomberg Línea e fontes oficiais) → RelatedPosts → CommentSection.
- FAQ estruturado (schema.org) em cada post.

## Detalhes técnicos

- Novos arquivos em `src/pages/posts/` (ex.: `ElonMuskTrilionario2026.tsx` e `RecuperacaoJudicialEmpresas2026.tsx`).
- Registro em `src/data/posts.ts` (próximos IDs livres, import da imagem hero) e rotas lazy em `src/App.tsx`.
- Heros gerados em `src/assets/*.webp`.
- Rodar `npm run build` (prebuild regenera `sitemap.xml` e `sitemap-images.xml`) e os scripts de auditoria (`audit-article-structure`, `audit-post-keywords`, `check-article-footer-order`) para validar o padrão.
