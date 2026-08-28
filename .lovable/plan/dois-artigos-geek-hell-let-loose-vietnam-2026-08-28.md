# Dois artigos geek: Hell Let Loose — Vietnam

Dois artigos longos (1.500+ palavras de prosa cada), em PT-BR, na categoria Geek, subtópico `games`, seguindo o padrão editorial do site.

## Artigo 1 — Mapas e contexto histórico da Guerra do Vietnã

- Lista dos mapas do jogo com o cenário real correspondente (ex.: Hue City, Khe Sanh, Ia Drang, Delta do Mekong), terreno, tipo de combate e como o mapa reflete a batalha real.
- Contexto histórico por mapa: datas das operações, forças envolvidas, resultado.
- Guerra Fria: por que o Vietnã virou palco de disputa; papel dos EUA, União Soviética e China; apoio financeiro e material a cada lado; Vietnã do Norte/Vietcong x Vietnã do Sul e aliados (Austrália, Coreia do Sul, Tailândia).
- Linha do tempo: 1954 (Genebra) → Golfo de Tonkin (1964) → Ofensiva do Tet (1968) → vietnamização → Acordos de Paris (1973) → queda de Saigon (1975).
- Tabela de baixas com números de fontes oficiais/consagradas, sempre com faixa de estimativa e origem do dado (militares americanos, aliados, forças norte-vietnamitas/VC, civis).
- Nota editorial deixando claro o que é fato histórico e o que é licença do jogo.

## Artigo 2 — Armas, classes e gameplay

- Arsenal por facção (EUA e NVA/Vietcong): origem histórica de cada arma (M16, M14, M60, M79, Mossberg, AK-47, SKS, RPD, RPG-7, PPSh, armadilhas), quando entrou em serviço e como se comporta no jogo.
- Tabela por classe: função, armas disponíveis, equipamento, papel no esquadrão.
- Novo sistema de peso/carga: como afeta stamina, deslocamento e escolha de loadout; recomendações práticas por classe.
- Dicas de gameplay: supressão, uso de vegetação e túneis, comunicação, construção de guarnições, artilharia/apoio aéreo, erros comuns de iniciante.
- Seção de progressão para quem vem do HLL clássico (o que muda).

## Padrão técnico (para ambos)

- Arquivos: `src/pages/posts/HellLetLooseVietnamMapas2026.tsx` e `src/pages/posts/HellLetLooseVietnamArmas2026.tsx`.
- Registro em `src/data/posts.ts` com IDs 247 e 248, `category: "geek"`, `subtopic: "games"`, data de hoje, `readTime` real, bloco `faq` (schema FAQPage) e imagem hero `.webp` própria gerada para cada post em `src/assets/`.
- Rotas lazy em `src/App.tsx` (`/post/<slug>`).
- Rodapé padrão na ordem `EditorialTake → ArticleSources (≥5 fontes) → RelatedPosts → CommentSection`, mais `AuthorBio`, `Breadcrumb`, `DynamicSEO`, `ReadNext` e link cruzado entre os dois artigos.
- Tabelas responsivas usando o padrão global já existente; nenhum `<Ad*>` dentro de `.map()`.
- Regeneração de sitemaps e feeds pelo `prebuild`; validação com os scripts de auditoria (`audit-article-structure`, `check-read-next`, `check-post-prose`).

## Conteúdo

Apenas dados verificáveis: informações do jogo conforme material oficial da Team17/Expression Games e dados históricos de fontes reconhecidas, com faixas de estimativa quando houver divergência. Sem invenção de mapas, armas ou números.
