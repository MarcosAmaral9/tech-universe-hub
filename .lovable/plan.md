# Artigo de Finanças: DREX e Tokenização de Ativos no Brasil

## Objetivo
Publicar um guia completo e factual, "DREX e Tokenização de Ativos no Brasil: O Que Muda para o Seu Dinheiro", na categoria Finanças, com data de hoje e no mesmo padrão dos outros artigos do site.

## Apuração antes de escrever
- Conferir o estágio atual do DREX em fontes oficiais do Banco Central (comunicados, página do Drex, notas à imprensa). Em 2025 o BC mudou a rota do projeto: a primeira fase passou a ser sem blockchain, voltada ao registro de garantias (gravames). O texto vai refletir o que estiver oficialmente em vigor em outubro de 2026, sem repetir promessas antigas como se fossem atuais.
- Conferir os pilotos (fases 1 e 2), os consórcios participantes e os casos testados (títulos públicos, crédito com garantia, recebíveis, imóveis e veículos).
- Conferir as regras da CVM sobre tokenização (Resolução 88, sandbox regulatório) e exemplos reais de tokens de recebíveis e crédito privado no Brasil.
- Se algum dado não tiver confirmação oficial (datas, cronograma, custos), o artigo dirá isso claramente.

## Conteúdo do artigo
1. Introdução: por que o tema confunde (é cripto? substitui o Pix?).
2. O que é o DREX (moeda digital do Banco Central) e por que não é Bitcoin: emissor, lastro, valor fixo em real, sem especulação.
3. Pix x DREX: quadro comparativo (pagamento instantâneo x plataforma de contratos e liquidação simultânea "entrega contra pagamento").
4. Tokenização explicada com exemplos: Tesouro fracionado, crédito privado, recebíveis, imóveis e veículos; onde pode baratear e onde ainda há limites.
5. Privacidade e LGPD: o desafio que atrasou o projeto e como o BC tratou o tema.
6. Custódia e segurança: quem guarda os ativos, papel dos bancos, golpes que usam o nome "Drex".
7. Cronograma oficial: linha do tempo do lançamento até a fase atual, sem inventar datas.
8. O que muda (e o que não muda) para o investidor comum hoje; checklist prático.
9. Perguntas frequentes (6 a 8), Análise do Marcos, 5+ fontes oficiais, relacionados e comentários, na ordem padrão.

## Visual
- Capa nova: ilustração editorial (real digital, blocos/contratos, cores do site), sem texto em inglês.
- Quadros coloridos para comparativos e linha do tempo, mantendo o estilo dos artigos recentes.

## Detalhes técnicos
- Novo arquivo de post em `src/pages/posts/`, registro ID 268 em `src/data/posts.ts` (categoria invest, subtópico `economia` ou `cripto`, FAQ) e rota lazy em `src/App.tsx`.
- Hero WebP única em `src/assets/`.
- Regenerar sitemap e feeds; rodar verificações de prosa (>=1500 palavras), estrutura editorial e padrão "Análise do Marcos".
- Conferir o artigo na prévia com navegador automatizado.
