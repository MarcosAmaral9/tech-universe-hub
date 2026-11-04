# Artigo Otaku: Release That Witch

## O que será publicado
Guia completo (mais de 1.500 palavras) na categoria Otaku, seguindo o padrão do site, com informações conferidas em fontes confiáveis antes de escrever.

## Conteúdo
- **Origem da obra:** web novel chinesa de Er Mu (Qidian), o manhua (quadrinho chinês, não manhwa coreano) e o anime chinês (donghua). O texto explica a diferença entre manhua, manhwa e mangá.
- **Gêneros:** fantasia, isekai/transmigração, construção de reino, ciência e engenharia, política, guerra, romance leve.
- **Protagonistas:** Cheng Yan, engenheiro que acorda no corpo do príncipe Roland Wimbledon, e Anna, a primeira bruxa que ele salva; cards com as principais bruxas e aliados.
- **Números:** total de capítulos da novel e do manhua, e quantos o anime adaptou, conferidos em fontes oficiais ou de referência. Se houver divergência, o artigo avisa em vez de chutar.
- **O que dá para aprender:** física, química, metalurgia, máquina a vapor, saneamento, educação, economia e gestão; cada tema explicado de forma simples e com aviso de que é ficção.
- **Onde ler e assistir no Brasil:** só plataformas confirmadas; o que não for confirmado fica indicado para o leitor conferir.
- **Sem spoilers** dos grandes acontecimentos, FAQ (7 perguntas), análise do Marcos, 5 ou mais fontes, autor, comentários.

## Capa
Ilustração nova (WebP), sem arte oficial e sem logotipo: o príncipe Roland numa oficina medieval com Anna usando fogo verde. As roupas ficam discretas e a legenda avisa que a imagem não é arte oficial.

## Detalhes técnicos
- Novo arquivo `src/pages/posts/ReleaseThatWitch2026.tsx`, ID 275 (o próximo livre será confirmado), registro em `posts.ts` e rota lazy em `App.tsx`.
- Ordem: EditorialTake → ArticleSources → RelatedPosts → CommentSection. Sem anúncios dentro de listas geradas por `.map()`.
- Gerar novamente o sitemap e os feeds, rodar a verificação de tamanho do texto e abrir o artigo na prévia.
