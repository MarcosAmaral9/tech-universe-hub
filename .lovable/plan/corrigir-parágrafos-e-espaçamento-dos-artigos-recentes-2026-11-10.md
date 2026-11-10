# Corrigir parágrafos e espaçamento dos artigos recentes

## O problema
Os artigos mais novos (a partir do guia de *I Will Fall With the Emperor*) colocam o texto dentro de um bloco de "texto de artigo" que deveria dar espaço entre parágrafos, títulos e listas automaticamente. Esse estilo automático não está ativado no site, então os parágrafos ficam colados uns nos outros e os títulos sem respiro. O texto em si já está dividido em parágrafos — falta o espaçamento visual.

Artigos afetados (17): I Will Fall With the Emperor, I Am the Fated Villain, City Lord Liu Feng, The Greatest Estate Developer, Medieval Dynasty, Manor Lords, Mandate Order, Minha Próxima Vida como Vilã, Tensei Kizoku Kantei Skill, Solo Leveling, Nano Banana, Tensei Shitara Ken Deshita, How Not to Summon a Demon Lord, Plataformas com várias IAs, Release That Witch, Peaky Blinders, The Last Kingdom e Todo Mundo Odeia o Chris.

## O que vou fazer
1. Adicionar ao estilo geral do site as regras de espaçamento para o texto dos artigos: espaço entre parágrafos, mais espaço antes de cada título de seção, margens para listas, tabelas e citações, e altura de linha confortável. Fica no padrão visual do site (fundo escuro, fonte DM Sans), sem mudar cores.
2. Revisar os outros artigos publicados depois do de *I Will Fall With the Emperor* que usam outro formato (N8N, Selic, investimentos no exterior, UBTech U1, Financiar ou alugar, DREX, IA fora de controle, melhores IAs de imagem/vídeo, GTA VI mecânicas) e corrigir qualquer trecho com parágrafos longos demais ou blocos colados.
3. Quebrar parágrafos muito longos (mais de ~5 linhas) em dois quando necessário, sem alterar o conteúdo.
4. Conferir na prévia, em computador e celular, alguns artigos de cada categoria para confirmar o espaçamento.

## Detalhes técnicos
- Causa: `@tailwindcss/typography` está instalado mas não registrado em `tailwind.config.ts` (só `tailwindcss-animate`), então `prose` não aplica margens.
- Correção escolhida: regras escopadas em `src/index.css` (`.prose p, h2, h3, ul, ol, li, table`) em vez de ativar o plugin, para não mudar cores/links de artigos antigos.
- Componentes `not-prose` (cards, tabelas próprias) não são afetados.
