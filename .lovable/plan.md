# Três artigos novos de Inteligência Artificial

Todos com data de hoje (16/08/2026), categoria `ia`, 10-15 min de leitura, PT-BR, 100% factuais (nada inventado; qualquer número vem de fonte citada).

## Artigo 1 — Os carros sem motorista da Amazon (Zoox)

Foco: como o robotáxi da Amazon saiu do teste e virou serviço em várias cidades dos EUA.

- O que é a Zoox: subsidiária da Amazon, veículo próprio sem volante nem pedais (isenção/aprovação da NHTSA).
- Onde já roda: Las Vegas e São Francisco, com expansão anunciada em março de 2026 e planos de operação em Austin e Miami no mesmo ano; programa "early rider" e corridas gratuitas.
- Como funciona a frota: sensores, teleoperação de apoio, veículo bidirecional.
- Comparação com Waymo e Tesla no estágio atual de cada uma.
- Riscos e freios: investigações e recalls de software, aceitação pública, custo por unidade.
- Recorte Brasil: por que não chega tão cedo (regulação, mapeamento, custo), e o que já existe de autonomia assistida por aqui.

Visuais: tabela de cidades × status, tabela comparativa Zoox × Waymo × Tesla Robotaxi, linha do tempo, boxes de alerta separando o que opera comercialmente do que é piloto.

## Artigo 2 — Os comboios de caminhões autônomos da Pony.ai

Foco: o modelo "1+N" de platooning da Pony.ai (Nasdaq: PONY) na China.

- O que é platooning e o formato 1+N: só o caminhão-líder com operador de segurança, os demais autônomos.
- A aprovação inédita de janeiro de 2025 para testes de comboio em rodovias entre Pequim, Tianjin e Hebei.
- A parceria com a SANY: caminhão pesado autônomo de 4ª geração, bateria acima de 400 kWh, ~60 toneladas de CO2 evitadas por veículo/ano, produção em massa e operação comercial a partir de 2026.
- Economia do frete: consumo de combustível, custo por km, escassez de motoristas.
- O que ainda trava: clima, regulação fora da China, responsabilidade civil, integração com pátios e portos.
- Recorte Brasil: rodovias, ANTT, e o que a Rumo/agro e o setor de mineração já testam de automação.

Visuais: diagrama em texto do comboio 1+N, tabela de marcos (2025-2026), tabela de especificações do caminhão SANY/Pony.ai, boxes de alerta.

## Artigo 3 — O tsunami de minidramas feitos por IA nas redes sociais

Foco: a explosão dos microdramas verticais gerados por IA (Sora, Veo e concorrentes) em TikTok, Reels, Kwai e apps dedicados.

- O que é o formato: episódios de 1-2 minutos, ganchos a cada 15 segundos, monetização por micropagamento e anúncio.
- Por que a IA acelerou tudo: geração de vídeo com áudio, custo de produção despencando, pipelines de roteiro + voz + imagem.
- O mercado: apps de microdrama (ReelShort, DramaBox e similares), receita do segmento e o peso da China no formato.
- O lado ruim: enxurrada de conteúdo de baixa qualidade ("AI slop"), deepfakes, direitos de imagem de atores, políticas de rotulagem de conteúdo sintético das plataformas.
- Impacto para criadores brasileiros: onde dá para ganhar dinheiro, o que a monetização das plataformas permite e o que derruba o alcance.
- Guia prático: como identificar um minidrama feito por IA.

Visuais: tabela de plataformas/apps e modelo de monetização, checklist de como reconhecer vídeo gerado por IA, boxes de alerta.

## Padrão editorial aplicado aos três

- Estrutura obrigatória: DynamicSEO (10+ keywords, canonical self-referencial), hero .webp exclusivo gerado para cada artigo, CategoryBadge, Breadcrumb, ShareWhatsApp, AuthorBio, anúncios fora de `.map()`.
- Rodapé na ordem Análise do Marcos → Fontes (mínimo 5, com veículos primários: Reuters, AP, TechCrunch, releases oficiais Zoox/Pony.ai/SANY, dados de plataformas) → RelatedPosts → CommentSection.
- FAQ com schema.org em cada post; valores em BRL quando houver conversão, com o original em USD/CNY indicado.
- Zero número sem fonte. Onde o dado não existir publicamente, o texto diz que não há confirmação.

## Detalhes técnicos

- Novos arquivos em `src/pages/posts/`: `ZooxCarrosSemMotoristaAmazon2026.tsx`, `PonyAiComboiosCaminhoes2026.tsx`, `MinidramasIARedesSociais2026.tsx`.
- IDs 237, 238 e 239 em `src/data/posts.ts`; rotas lazy em `src/App.tsx`.
- Subtópicos: `robotica` (artigos 1 e 2) e `criatividade` (artigo 3) — já existem em `src/types/blog.ts`.
- Heros gerados em `src/assets/*.webp`.
- Rodar `npm run build` (prebuild regenera sitemaps e feeds) e as auditorias: `audit-article-structure`, `audit-post-keywords`, `check-article-footer-order`, `check-read-next`, `check-editorial-standard`.
