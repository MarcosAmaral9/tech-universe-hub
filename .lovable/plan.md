# Painel Mount & Blade II: Bannerlord — Geek

Espelhar o padrão dos painéis Crimson Desert / Assassin's Creed / Avatar: um portal central (`/geek/bannerlord`) + artigos individuais com a estrutura editorial completa do site.

## 1. Subtopic e taxonomia

- Adicionar `'bannerlord'` ao tipo `Subtopic` em `src/types/blog.ts`.
- Registrar label `"bannerlord": "Mount & Blade II: Bannerlord"` em `SUBTOPIC_LABELS` no `GeekPage.tsx`.
- Adicionar `SpecialPortalCard` no `GeekPage` apontando para `/geek/bannerlord` (badge "🛡️ Especial").

## 2. Rotas

Em `src/App.tsx`:

- `/geek/bannerlord` → `BannerlordPortal.tsx`
- `/post/<slug>` para cada um dos 12 artigos abaixo (mesmo padrão dos posts Crimson).

## 3. Imagens (12 + portal + hero)

Gerar via `imagegen` (premium para hero/portal, fast/standard para artigos) em `src/assets/`:
`bannerlord-hero.webp`, `bannerlord-portal.webp`, `bannerlord-guia.webp`, `bannerlord-mapa.webp`, `bannerlord-culturas.webp`, `bannerlord-reinos.webp`, `bannerlord-tropas.webp`, `bannerlord-melhores-tropas.webp`, `bannerlord-comparacao-tropas.webp`, `bannerlord-war-sails.webp`, `bannerlord-mods.webp`, `bannerlord-requisitos.webp`, `bannerlord-tempo-zerar.webp`, `bannerlord-dicas.webp`. Estilo realista, sem texto, sem rostos próximos detalhados.

## 4. Artigos (12, todos ≥ 1500 palavras escritas)

Todos com `category: "geek"`, `subtopic: "bannerlord"`, FAQ (mín. 5 perguntas), 4–5 fontes oficiais, blocos `EditorialTake` + `ArticleSources` + `RelatedPosts` + `CommentSection` (com `category="geek"`), `AuthorBio`, `BackNavigation` apontando para `/geek/bannerlord`, `trackArticleRead`, `ShareWhatsApp`, `AdLeaderboard` + `AdInArticle` posicionados conforme padrão, `DynamicSEO` via `posts.ts` (excerpt + 10+ keywords + readTime), Breadcrumb completo do caminho no portal e nos artigos.

Lista de artigos e foco factual (apenas dados reais, verificáveis via fontes oficiais TaleWorlds, Steam, Mount&Blade Wiki, PCGamingWiki, Nexus Mods):

1. **bannerlord-guia-completo-2026** — Ficha técnica, lançamento (1.0 em 25/10/2022), engine, versões (datas e novidades de cada versão), modos (campanha sandbox, custom battle, multiplayer), preço atual Steam e Epic Games BRL/USD, edições.
2. **bannerlord-mapa-calradia-regioes** — Mapa de Calradia, regiões (Império do Norte/Sul/Oeste, Battania, Sturgia, Vlandia, Khuzaits, Aserai), cidades principais, geografia.
3. **bannerlord-culturas-explicadas** — 8 culturas jogáveis, bônus de cultura, traços, impactos em economia/diplomacia/recrutamento.
4. **bannerlord-reinos-faccoes-completo** — Os 8 reinos majoritários + clãs menores, líderes, política, casamentos, vassalagem.
5. **bannerlord-tropas-arvores-completas** — Árvores de tropas de cada cultura (recruta → tier 6), tropas nobres, tropas regulares, mercenárias.
6. **bannerlord-melhores-tropas-tier-list** — Ranking factual baseado em estatísticas do jogo: Fian Champions, Banner Knights, Druzhinnik Champions, Khan's Guard, Imperial Legionary, Mamluke Heavy, Veteran Falxman, Aserai Master Archer.
7. **bannerlord-comparacao-tropas-reinos** — Comparações tier 6 vs tier 6 entre reinos (cavalaria pesada, infantaria, arqueiros, montaria a distância) com stats reais (armadura, dano, skill).
8. **bannerlord-war-sails-dlc** — Tudo atualizado sobre a expansão War Sails: data de lançamento real, mecânica naval, novo conteúdo, preço real, plataformas, fontes oficiais TaleWorlds.
9. **bannerlord-mods-guia-instalacao** — Como funcionam mods: Steam Workshop vs Nexus Mods, Bannerlord Mod Launcher, ordem de carregamento, mods essenciais (Harmony, ButterLib, UIExtenderEx, Diplomacy, Calradia Expanded, RBM, BannerKings).
10. **bannerlord-requisitos-pc-armazenamento** — Requisitos mínimos e recomendados (CPU, GPU, RAM), tamanho de instalação (~60 GB), SSD obrigatório/recomendado conforme PCGamingWiki, performance por configuração.
11. **bannerlord-tempo-zerar-campanha** — Tempo aproximado para zerar (dados HowLongToBeat): main story ~50h, completionist ~200h+, sandbox infinito; objetivos da campanha (Império unificado vs novo reino, dragon banner).
12. **bannerlord-dicas-iniciantes-economia-combate** — 25+ dicas verificáveis: caravanas, workshops, política, perks, smithing, recrutamento, battle tactics.

> Regra dura: zero invenção. Qualquer dado que não tiver fonte oficial fica de fora. Se a War Sails não tiver detalhe específico publicado, dizer "ainda não confirmado".

## 5. Portal `BannerlordPortal.tsx`

Copiar a estrutura do `CrimsonDesertPortal.tsx`:

- `DynamicSEO`, `BackNavigation`, hero com `bannerlord-hero.webp`, intro (~3 parágrafos sobre Bannerlord/Calradia/TaleWorlds).
- Grid dos 12 artigos com card padrão (slug, title, subtitle, desc, image, badge).
- Seção CTA "Participe da conversa" via `CommentSection postId="bannerlord-portal" category="geek"` (hub, sem `EditorialTake`/`Sources`).
- Adicionar `'bannerlord-portal'` à allowlist de hubs em `scripts/check-article-footer-order.mjs`.

## 6. Registro em `src/data/posts.ts`

Cada um dos 12 artigos com: id, slug, title, excerpt (≤160 chars), content (resumo), category `"geek"`, subtopic `"bannerlord"`, image, author "VICIO&nbsp;", date, readTime, faq.

- Atualizar `prebuild` rodando `node scripts/generate-sitemaps.mjs` automaticamente (já no fluxo).

## 7. Validações automáticas no fim

- `node scripts/check-article-footer-order.mjs` deve passar 12 novos artigos.
- `node scripts/check-dynamicseo-duplicates.mjs`.
- Conferir manualmente word-count ≥ 1500 em cada novo arquivo (script utilitário pode ser reaproveitado do loop anterior).

## 8. Documentação curta

Atualizar `docs/article-footer.md` apenas se necessário (não deve mudar). Memory `mem://features/categories` já contempla Geek.

## Riscos / pontos de atenção

- **War Sails**: informação ainda esparsa. Manter o post focado em fatos anunciados pela TaleWorlds; evitar especulação.
- **Stats de tropas**: usar valores exatos da wiki oficial (mountandblade.fandom.com) e referenciar.
- **Preço Steam BRL**: snapshot com data de consulta, alertando que pode mudar.
- **Mods**: links apenas para Steam Workshop e Nexus Mods (sem hosts piratas).
- 12 artigos longos = chat extenso; vou implementar em batches paralelos por grupos de 3–4 arquivos.  
Irei adicionar a imagem original do mapa de war sails para você guardar e usar nos artigos que falarem de War Sails. O mapa oficial da campanha do jogo principal pode pesquisar na internet e usar.  
  
Faça o portal e o artigo 1 primeiro e depois vá fazendo 1 artigo por vez.