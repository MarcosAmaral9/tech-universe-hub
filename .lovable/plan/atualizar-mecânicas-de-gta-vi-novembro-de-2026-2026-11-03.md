# Atualizar "Mecânicas de GTA VI" (novembro de 2026)

O artigo atual (junho/2026) cita só os dois primeiros trailers. Desde então saíram o trailer de lançamento (out/2026), a prévia da revista Edge e os anúncios oficiais de pré-carregamento. A ideia é deixar o artigo como o guia mais completo do site sobre jogabilidade, com bem mais de 1.500 palavras (meta de 3.000 a 3.500).

## O que muda no artigo
- **Título e resumo novos:** "Mecânicas de GTA VI: Tudo Confirmado Sobre Combate, Direção, NPCs e Mundo Aberto", com data de hoje e tempo de leitura ajustado (cerca de 16 min).
- **Quadro "o que é oficial":** lançamento em 19/11/2026 no PS5 e no Xbox Series X|S, pré-carregamento a partir de 10/11 e até 212 GB de espaço.
- **Novas seções:**
  - Jason e Lucia: a dupla, a troca entre os dois e o que ainda não foi confirmado.
  - Mundo de Leonida: mapa cerca de duas vezes maior que o de GTA V, muito mais interiores e bairros com moradores de perfis diferentes.
  - NPCs: personalidades próprias, cerca de 600 mil animações e reações dos protagonistas ao ambiente.
  - Polícia: unidades K9 com cães farejadores, faixas de pregos e perseguições mais inteligentes.
  - Direção e veículos: o que aparece no trailer de lançamento.
  - Combate, furtividade e assaltos.
  - Interações cômicas: a cena da praia mostrada em South Park.
  - Rádios, clima e vida selvagem.
- **Tabelas:** "Confirmado x Rumor" e "GTA V x GTA VI".
- **Mais perguntas e respostas** (cerca de 8) e **pelo menos 8 fontes**, entre elas Rockstar, Xbox Wire, Edge (via ComicBook e Dexerto) e GamesRadar.
- **Regras de sempre:** nada sem fonte, sem spoilers da história, e o que for prévia de imprensa fica identificado como "demonstrado na prévia".

## Detalhes técnicos
- Reescrever `src/pages/posts/GtaViMecanicasGameplay2026.tsx` mantendo os componentes padrão e a ordem: EditorialTake, ArticleSources, RelatedPosts, CommentSection.
- Atualizar o registro `gta-vi-4` em `src/data/posts.ts` (título, resumo, data, tempo de leitura e perguntas frequentes). O endereço do artigo e a capa continuam os mesmos.
- Gerar de novo o sitemap e os feeds, rodar a checagem de texto e abrir o artigo na prévia.
