# Artigo de IA: Nano Banana (Google) — evolução, criadores, planos e uso

## O que será publicado
Um guia completo na categoria IA, com a data de hoje (27/10/2026), em PT-BR e com mais de 1.500 palavras de prosa, no padrão do site.

## Conteúdo (somente informações verificadas em fontes públicas)
- **O que é o Nano Banana:** o apelido do modelo de geração e edição de imagens do Google DeepMind (família Gemini Image), como o nome surgiu no LMArena e por que virou a marca.
- **Evolução:** linha do tempo com as versões lançadas (Gemini 2.5 Flash Image, Nano Banana Pro / Gemini 3 Pro Image e versões posteriores confirmadas), com datas e o que cada uma trouxe: consistência de personagens, edição por texto, texto legível dentro da imagem, marca d'água SynthID.
- **Criadores e donos:** Google DeepMind e a Alphabet; equipe e porta-vozes citados oficialmente, sem atribuir créditos não confirmados.
- **Planos e preços em reais:** uso gratuito no app Gemini e limites; Google AI Pro e Ultra no Brasil; preço por imagem na API (Gemini API / Vertex AI), convertido com aviso sobre o câmbio.
- **Valor da marca:** números públicos sobre a Alphabet/Google e sobre o impacto do Nano Banana (usuários do app Gemini, imagens geradas). O "valor de marca" isolado do Nano Banana não é divulgado oficialmente; o artigo vai dizer isso, sem inventar números.
- **Quem usa o modelo:** produtos do Google (Gemini, Fotos, Pesquisa/Lens, NotebookLM, Flow) e parceiros que integraram oficialmente o modelo (por exemplo, Adobe, Canva, Figma, Perplexity, OpenRouter, fal), apenas os que tiverem anúncio confirmado.
- **Extras:** comparação com outras IAs de imagem, dicas de comandos, cuidados com direitos autorais e deepfakes, segurança e LGPD.
- Perguntas frequentes (6–7), análise do Marcos, 6 ou mais fontes, relacionados e comentários, na ordem padrão.

## Imagem de capa
Uma ilustração nova e única, sem logos oficiais, com legenda avisando que não é imagem oficial do Google.

## Detalhes técnicos
- Novo `src/pages/posts/NanoBananaGuia2026.tsx` seguindo o modelo dos artigos recentes (EditorialTake → ArticleSources → RelatedPosts → CommentSection; AuthorBio e ShareWhatsApp no header; nenhum anúncio dentro de `.map()`).
- Registrar ID 271 em `src/data/posts.ts` (categoria `ia`, FAQ estruturado, 10+ palavras-chave) e uma rota lazy em `src/App.tsx`.
- Hero WebP em `src/assets/nano-banana-google-guia-2026.webp`; gerar a versão para compartilhamento (og), sitemap, sitemap de imagens e feeds.
- Validar: prosa ≥1500, auditoria de estrutura, canonical/robots, abertura do artigo na prévia sem erros.
