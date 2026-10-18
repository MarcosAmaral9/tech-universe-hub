# Artigo: Comprar imóvel financiado ou morar de aluguel e investir a diferença?

## Objetivo
Publicar na categoria Finanças um guia com contas reais, que ajude o leitor brasileiro a decidir entre financiar um imóvel ou alugar e investir a diferença.

## Conteúdo
- Introdução com a dúvida clássica, no cenário atual de juros altos (Selic e taxas do crédito imobiliário confirmadas em fontes oficiais na data de publicação).
- Como funcionam SAC e Price, com tabela comparativa de primeira parcela, última parcela e juros totais.
- Simulação educativa: imóvel de R$ 400 mil, entrada de 20%, 30 anos, taxa realista de mercado; custos de entrada (ITBI, escritura, registro, avaliação) e CET.
- Cenário aluguel: aluguel médio com base no índice FipeZap, reajuste pelo IGP-M/IPCA, e a entrada mais a diferença das parcelas investida em Tesouro Selic, Tesouro IPCA+ e CDB, já descontado o IR.
- Quadro "quem sai na frente em 10, 20 e 30 anos", deixando claro que são estimativas, não previsões.
- Valorização do imóvel, manutenção, IPTU, condomínio e custo de oportunidade.
- Lado emocional: segurança da casa própria contra flexibilidade e liquidez.
- Quando financiar faz sentido: FGTS, Minha Casa Minha Vida, amortização antecipada, portabilidade de crédito; e quando é um erro.
- Checklist de decisão e erros comuns.
- Análise do Marcos, pelo menos 5 fontes (Banco Central, Caixa, FipeZap, Tesouro Direto, Receita Federal/Planalto), FAQ, autoria, comentários e posts relacionados na ordem do site.
- Aviso de que o texto é educativo e não substitui orientação profissional.

## Publicação
- Mais de 1.500 palavras, imagem de capa WebP exclusiva (ilustração de casa com chave e gráficos), data de hoje.
- Registro na lista de posts e na navegação; sitemap, sitemap de imagens e feeds atualizados.
- Validação do texto mínimo, da estrutura editorial e da exibição no computador e no celular.

## Detalhes técnicos
- Novo arquivo `src/pages/posts/FinanciarOuAlugar2026.tsx`, ID 266, categoria `invest`, subtopic `planejamento`, slug `financiar-imovel-ou-alugar-e-investir-2026`.
- Rota lazy em `App.tsx`, ordem ET → AS → RelatedPosts → CS, sem `<Ad*>` dentro de `.map()`.
- Contas calculadas por script antes de entrarem no texto, para os números ficarem consistentes.
