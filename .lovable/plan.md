# Artigo geek: Mandate Order — guia completo 2026

## Objetivo
Publicar um guia completo e verídico sobre Mandate Order (烽沙, Digital Sky) na categoria Geek, no padrão do site: mais de 1.500 palavras de prosa, PT-BR, sem spoilers, FAQ e fontes.

## Fatos já confirmados
- Construtor de cidades com guerra, ambientado nos Reinos Combatentes da China antiga. Estúdio e editora: Digital Sky.
- Acesso Antecipado na Steam desde 11/08/2026 (12/08 pelo horário da China). Avaliações "Muito positivas".
- Construção livre, sem grade; moradores e trabalhadores que constroem, transportam e fazem manutenção; conselheiros das Cem Escolas (confucionistas, legalistas, moístas); diplomacia, rituais e desastres; batalhas em tempo real com milhares de soldados; cercos com muralhas, máquinas de cerco e destruição física.

## Pesquisa antes de escrever
- Preço oficial em R$ na Steam brasileira e eventual promoção, com a data da consulta.
- Modos, opções de dificuldade, tamanhos e tipos de mapa.
- Se moradores, conselheiros e soldados morrem de vez (batalha, fome, doença, desastres). Só afirmar o que estiver nas notas de atualização ou em fontes oficiais.
- Requisitos de PC, se há PT-BR, atualizações desde o lançamento e planos para a versão final.

## Estrutura do artigo
1. Introdução
2. Ficha técnica em tabela
3. Contexto histórico (Reinos Combatentes e Cem Escolas)
4. Modos e configurações
5. Mapas e tamanhos
6. Moradores vivos e cadeia de trabalho
7. Conselheiros e escolas de pensamento
8. Guerras de cerco: muralhas, defesas e máquinas de cerco
9. Morte permanente
10. Rituais, desastres e diplomacia
11. Dicas para iniciantes, em cards
12. Requisitos de PC
13. Atualizações e futuro
14. FAQ em cards
15. Rodapé: Análise do Marcos, fontes (6 ou mais), posts relacionados e comentários

## Visual
- Capa nova e exclusiva em WebP: ilustração de uma cidade murada chinesa sendo atacada, sem logos nem texto, com legenda avisando que não é imagem do jogo.
- Uma ilustração dentro do texto, na seção de cercos.
- Tabela, quadros na cor Geek, cards de dicas e espaço entre os parágrafos.

## Detalhes técnicos
- Novo arquivo `src/pages/posts/MandateOrderGuia2026.tsx`, seguindo o padrão de `ManorLordsGuia2026.tsx`. Registrar o ID 264 em `src/data/posts.ts` (geek, `games`, 2026-10-15, FAQ) e a rota lazy em `App.tsx`.
- Regenerar o sitemap, o sitemap de imagens e os feeds.
- Nenhum `<Ad*>` dentro de `.map()`, sem Breadcrumb no post, sem sobrescrever o convite do CommentSection.
- Validar a prosa (1.500 palavras ou mais), a estrutura editorial, o TypeScript e a página no computador e no celular com Playwright.
