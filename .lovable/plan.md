# Dois artigos de IA sobre robótica e os robôs da China

## Artigo 1 — O avanço da robótica em 2026: dos braços industriais aos robôs humanoides

Foco: como a robótica saiu do chão de fábrica e virou plataforma de IA física ("embodied AI"), o que já funciona de verdade e o que ainda é demonstração.

Conteúdo:
- O que mudou: modelos de visão-linguagem-ação, aprendizado por imitação e simulação em larga escala como motor do salto recente.
- Panorama dos principais projetos globais (Tesla Optimus, Figure, Boston Dynamics Atlas elétrico, Agility Digit, projetos da Nvidia para robótica) com estágio real de cada um.
- Onde a robótica já dá retorno hoje: logística, inspeção, agro, saúde e manufatura — com números de adoção verificáveis.
- Limites técnicos honestos: autonomia de bateria, destreza das mãos, confiabilidade fora de ambientes controlados, custo por unidade.
- Impacto no trabalho e o recorte brasileiro: densidade de robôs na indústria nacional, custo de importação e onde faz sentido automatizar.
- Caixas de alerta separando o que é produto vendido do que é vídeo de marketing.

Elementos visuais: tabela comparando robôs humanoides (empresa, país, altura/peso, status comercial, preço estimado), linha do tempo do avanço recente, boxes de destaque no padrão da categoria IA.

## Artigo 2 — A China e a corrida dos robôs: por que o país virou a fábrica dos humanoides

Foco: a estratégia chinesa de produção em massa de robôs — política industrial, cadeia de suprimentos e as empresas que estão liderando.

Conteúdo:
- O peso da China na instalação global de robôs industriais e o que os dados da IFR mostram.
- Política de Estado: metas oficiais para robôs humanoides, subsídios, fundos setoriais e o papel dos governos provinciais.
- As empresas: Unitree, UBTech, Fourier, AgiBot/Zhiyuan, Galbot e os braços de robótica de grandes grupos de tecnologia — o que cada uma entrega hoje e a que preço.
- A vantagem da cadeia de suprimentos: atuadores, redutores harmônicos, sensores, baterias e ímãs de terras raras, e por que isso derruba o preço unitário.
- Onde estão sendo usados: linhas de montagem, varejo, atendimento, pesquisa e o mercado de robôs de consumo.
- O que falta: software e autonomia, restrições de chips, dúvidas sobre demanda real x produção subsidiada.
- O que isso significa para o Brasil: preço de robôs importados, dependência tecnológica e oportunidades para quem trabalha com integração e software.

Elementos visuais: tabela de fabricantes chineses (empresa, modelo, preço, status), gráfico/linha do tempo de instalações de robôs, box comparando China x EUA na corrida, boxes de alerta.

## Padrão editorial aplicado aos dois

- Categoria `ia`, data de hoje (11/08/2026), 12-15 min de leitura, texto 100% PT-BR e factual, sem números inventados.
- Estrutura obrigatória: metadados/DynamicSEO, hero .webp exclusivo gerado para cada artigo, CategoryBadge, ShareWhatsApp, AuthorBio, anúncios fora de `.map()`, e o rodapé na ordem Análise do Marcos → Fontes (mínimo 5: IFR, Reuters, Nvidia, MIT Technology Review, fontes oficiais chinesas/relatórios setoriais) → RelatedPosts → CommentSection.
- FAQ estruturado (schema.org) em cada post.
- Valores em BRL quando houver conversão, com o valor original em USD/CNY indicado.

## Detalhes técnicos

- Novos arquivos em `src/pages/posts/` (`AvancoRobotica2026.tsx` e `RobosChina2026.tsx`), IDs 233 e 234 em `src/data/posts.ts`, rotas lazy em `src/App.tsx`.
- Novo subtópico `robotica` adicionado ao tipo `Subtopic` em `src/types/blog.ts` (a categoria IA hoje não tem um subtópico adequado), o que também gera o feed de tag correspondente.
- Heros gerados em `src/assets/*.webp`.
- Rodar `npm run build` (prebuild regenera sitemaps e feeds) e os scripts de auditoria (`audit-article-structure`, `audit-post-keywords`, `check-article-footer-order`, `check-read-next`) para validar o padrão.
