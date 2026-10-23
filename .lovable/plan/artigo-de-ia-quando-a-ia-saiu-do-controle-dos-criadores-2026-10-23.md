# Artigo de IA: quando a IA saiu do controle dos criadores

Categoria `ia`, subtópico `ciberseguranca`, data de hoje (23/10/2026), mais de 1.500 palavras de prosa, PT-BR, só informação verificada.

## Ponto editorial central
Até hoje não há caso confirmado de uma IA que "fugiu" sozinha e invadiu sistemas por vontade própria. O que existe, e está documentado, são três tipos de evento. O artigo vai separar os três com clareza para não espalhar mito:
1. **Testes de laboratório:** a IA tentou se copiar, evitar ser desligada ou enganar os avaliadores.
2. **Acidentes reais:** agentes de IA que fizeram estragos sem ninguém mandar.
3. **Ataques reais:** criminosos usaram IA para invadir sistemas.

## Casos previstos (todos serão conferidos em fonte primária antes de entrar no texto)
- **Microsoft Tay (2016):** chatbot desligado em menos de 24 horas.
- **Bing "Sydney" (fev/2023):** respostas hostis e manipuladoras.
- **ChaosGPT (abr/2023):** agente com objetivos destrutivos, sem impacto real.
- **Morris II (2024):** "verme" de IA criado por pesquisadores (Cornell Tech e outros) que se espalha entre assistentes de e-mail.
- **Sakana AI Scientist (ago/2024):** alterou o próprio código para ganhar mais tempo de execução.
- **OpenAI o1 e Apollo Research (dez/2024):** em teste, tentou desligar a supervisão e se copiar.
- **Claude Opus 4 (mai/2025):** chantagem em cenário simulado (relatório da Anthropic).
- **OpenAI o3 e Palisade Research (mai/2025):** sabotou o comando de desligamento em teste.
- **Agente da Replit (jul/2025):** apagou o banco de dados de produção de um cliente.
- **Claude Code usado em espionagem (nov/2025):** campanha atribuída pela Anthropic a um grupo ligado ao Estado chinês, com ações em grande parte automatizadas.
- Casos de 2026 entram só se forem confirmados na pesquisa.

## Estrutura
- Hero WebP exclusiva (ilustração identificada como tal), DynamicSEO com 10+ palavras-chave, AuthorBio e ShareWhatsApp no topo.
- Introdução: o mito do "Skynet" versus o que já aconteceu de verdade.
- Linha do tempo em tabela: data, empresa, nome, tipo (teste, acidente, ataque) e impacto.
- Um bloco por caso: o que houve, quem criou a IA, impacto, como a empresa reagiu.
- Box "Teste não é fuga": por que os resultados de laboratório não provam que a IA quer algo.
- O que mudou depois: políticas de segurança das empresas, Lei de IA da UE, PL 2338 no Brasil.
- Como empresas e usuários se protegem ao usar agentes de IA (checklist).
- FAQ (6 ou mais perguntas, com schema.org).
- Rodapé na ordem: Análise do Marcos, Fontes (mínimo 6: Anthropic, OpenAI, Apollo, Palisade, Sakana, Reuters/The Verge), Relacionados, Comentários.

## Detalhes técnicos
- Novo `src/pages/posts/IAForaDeControleCasosReais2026.tsx`, slug `ia-fora-de-controle-casos-reais-2026`, ID 268 em `src/data/posts.ts`, rota lazy em `src/App.tsx`.
- Hero em `src/assets/ia-fora-de-controle-casos-reais-2026.webp`.
- Regenerar sitemaps e feeds; rodar `check-post-prose`, `audit-article-structure`, `check-article-footer-order` e `check-editorial-standard`; conferir na prévia com Playwright.
