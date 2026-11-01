# Artigo IA: plataformas "várias IAs em um só lugar" (assinatura única)

## O que será publicado
Guia completo na categoria IA (ID 272, data 01/11/2026, mais de 1.500 palavras, provavelmente 2.500+), seguindo o padrão do site.

## Conteúdo
- **O que são** essas plataformas e por que surgiram (um preço no lugar de várias assinaturas).
- **Tipos**:
  1. Agregadores de chat para o consumidor (ex.: Poe, You.com, Monica, Merlin, TypingMind, ChatLLM/Abacus).
  2. Buscadores com vários modelos (ex.: Perplexity Pro com escolha de modelo).
  3. Roteadores de API para desenvolvedores (ex.: OpenRouter e similares).
  4. Brasileiras ou com preço em reais, se houver opções confirmadas.
- **Donos/empresas**: quem fundou e quem controla cada uma (ex.: Poe da Quora/Adam D'Angelo), só com fontes.
- **Preços** em reais quando houver; em dólar com conversão aproximada indicada como estimativa.
- **Cotas, créditos e tokens**: como funcionam os "pontos", limites por modelo, o que acontece ao estourar, por que modelos caros consomem mais.
- **Comparativo** em cartões/tabela coloridos, prós e contras, armadilhas (limites escondidos, modelo "lite", privacidade/LGPD, cancelamento).
- **Como escolher** checklist; 7 perguntas frequentes; 8+ fontes; análise do Marcos; bio, comentários.
- Tudo verificado por pesquisa atual; o que não for confirmado fica marcado como tal.

## Capa
Ilustração nova (vários "núcleos" de IA ligados a um hub central), WebP, com texto alternativo.

## Detalhes técnicos
- Novo arquivo em `src/pages/posts/`, registro em `src/data/posts.ts` e rota em `src/App.tsx`.
- Ordem ET → AS → RelatedPosts → CS; `AuthorBio category="ia"`; `ShareWhatsApp` sem props; FAQ estruturado.
- Regenerar sitemap/feeds, rodar verificação de texto e abrir na prévia.
