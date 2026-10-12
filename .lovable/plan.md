# Artigo geek: Manor Lords — guia completo 2026

## Objetivo
Publicar um guia completo e verídico sobre Manor Lords (Slavic Magic / Hooded Horse) na categoria Geek, seguindo o padrão do site (mais de 1.500 palavras de prosa, PT-BR, sem spoilers, FAQ, fontes).

## Pesquisa antes de escrever (só fatos confirmados)
- Datas: anúncio, Acesso Antecipado na Steam (26/04/2024), status atual em 2026 (se já saiu a versão 1.0 ou não) e plataformas (PC/Steam, Game Pass PC, GOG).
- Preço oficial em reais na Steam hoje (consultar a loja brasileira); se o valor não puder ser confirmado, informar apenas o preço confirmado com data de acesso.
- História/contexto: Franconia medieval do fim do século XIV, desenvolvedor solo Greg Styczeń, inspiração histórica.
- Modos e configurações: modo história/sandbox ("Rise to Prosperity", "Restoring the Peace", "On the Edge"), dificuldade, inimigos, barões rivais.
- Tamanhos de mapa / regiões jogáveis e mapas adicionados por atualizações.
- Moradores "vivos": famílias, necessidades, aprovação, trabalho, envelhecimento — e se existe morte permanente (doença, fome, combate, mortes de moradores e do senhor). Só afirmar o que estiver confirmado em fontes oficiais ou patch notes.
- Requisitos de PC, principais patches, mods, recepção (avaliações na Steam, vendas anunciadas).

## Conteúdo do artigo
1. Introdução: o que é o jogo.
2. Ficha técnica (tabela): estúdio, editora, datas, plataformas, preço em R$, idioma PT-BR.
3. Cenário e história.
4. Modos de jogo e configurações.
5. Mapas e regiões.
6. Moradores vivos: famílias, necessidades, aprovação.
7. Morte permanente: o que acontece com moradores e soldados.
8. Economia, construção e combate.
9. Dicas para iniciantes (cards coloridos).
10. Requisitos de PC (usando a terminologia de SSD do site).
11. Atualizações e futuro do Acesso Antecipado.
12. FAQ em cards (dados estruturados).
13. Rodapé padrão: Análise do Marcos → Fontes (6 ou mais) → Posts relacionados → Comentários.

## Visual
- Imagem de capa nova e exclusiva em WebP: ilustração editorial de vila medieval franca (sem logos nem textos).
- Visual convidativo: ficha técnica em tabela, quadros coloridos na cor Geek, cards de dicas, espaço entre parágrafos.

## Detalhes técnicos
- Novo arquivo `src/pages/posts/ManorLordsGuia2026.tsx`; registrar o próximo ID em `src/data/posts.ts` (geek, subtopic `games`, data de hoje, FAQ) e a rota lazy em `src/App.tsx`.
- Regenerar sitemap, sitemap de imagens e feeds a partir do registro.
- Seguir as regras: nenhum `<Ad*>` dentro de `.map()`, sem `<Breadcrumb>` no post, `CommentSection` sem sobrescrever o convite.
- Validar: prosa ≥1.500 palavras, estrutura editorial, SEO/canonical, TypeScript, além de verificação com Playwright no computador e no celular.
