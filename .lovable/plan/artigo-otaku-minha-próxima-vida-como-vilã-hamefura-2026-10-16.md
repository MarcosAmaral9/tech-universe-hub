# Artigo Otaku: Minha Próxima Vida como Vilã (Hamefura)

## O que será publicado
Guia completo em PT-BR, categoria Otaku (subtópico `manga`), com mais de 1.500 palavras de prosa, só com informações verificadas e sem spoilers do desfecho.

## Conteúdo
- **Origem e obra:** light novel de Satoru Yamaguchi (ilustrações de Nami Hidaka), mangá de Nami Hidaka (Ichijinsha), anime da SILVER LINK (2020, 2ª temporada 2021) e filme (2023). Datas, volumes e capítulos confirmados em fontes oficiais antes de escrever.
- **Premissa:** a garota que morre e reencarna como Katarina Claes, vilã do otome game Fortune Lover, e tenta escapar dos finais ruins (exílio ou morte).
- **Personagens principais:** Katarina, Geordo, Keith, Alan, Nicol, Mary, Sophia, Maria e outros, com papel e personalidade de cada um.
- **Por que todos se apaixonam por ela:** sinceridade, falta de preconceito, empatia sem segundas intenções, o "harém por acidente".
- **Boba e atrapalhada, mas decisiva:** a horta, o "Conselho Katarina" interno, os mal-entendidos cômicos e os momentos em que ela age com firmeza para ajudar os outros (sem spoilers).
- **Gêneros e temas:** isekai/reencarnação, otome game, comédia romântica, vilã como protagonista.
- **Onde ler e assistir no Brasil:** só serviços e editoras licenciados e confirmados (ex.: Crunchyroll), com ressalva quando não houver edição nacional.
- **FAQ em cards** (6 a 8 perguntas), com dados estruturados.

## Padrão do site
- Imagem de capa WebP única: ilustração editorial original, com legenda avisando que não é arte oficial.
- `AuthorBio` e botão de WhatsApp no cabeçalho; rodapé na ordem Análise do Marcos → Fontes (5 ou mais) → Relacionados → Comentários; anúncios fora de listas.
- Cadastrado no registro de posts e nas rotas; sitemap, sitemap de imagens e feeds regenerados.

## Etapas técnicas
1. Pesquisar e conferir os fatos (datas, volumes, estúdio, licenças no Brasil).
2. Gerar a capa em `src/assets/minha-proxima-vida-como-vila-hamefura-guia-2026.webp`.
3. Criar `src/pages/posts/MinhaProximaVidaComoVila2026.tsx`, registrar em `src/data/posts.ts` (próximo ID) e `src/App.tsx`.
4. Rodar as auditorias (estrutura, prosa ≥1500, SEO) e conferir no Playwright.
