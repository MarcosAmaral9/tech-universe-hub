# Artigo: n8n e primeiro atendente de WhatsApp

## Objetivo
Publicar um artigo novo na categoria **Inteligência Artificial**, em PT-BR, com data de 16/09/2026 e mais de 1.500 palavras de prosa. O guia explicará o n8n do básico ao uso prático e terminará com um primeiro projeto de atendente de WhatsApp para uma agência de viagens.

## Conteúdo do artigo
- Explicar o que é o n8n, para que serve e como os fluxos funcionam: gatilhos, nós, conexões, credenciais, expressões, execuções, dados e tratamento de erros.
- Diferenciar n8n Cloud e Community Edition auto-hospedada, incluindo requisitos de manutenção, segurança, backups e limites de cada opção.
- Apresentar planos e preços oficiais consultados na data do artigo, mantendo os valores em euro quando cobrados nessa moeda e deixando claro que preços, impostos e câmbio podem mudar.
- Cobrir usos comuns: atendimento, vendas, marketing, planilhas, CRM, e-mail, APIs, bancos de dados e agentes de IA.
- Incluir vantagens, limitações, custos indiretos, privacidade, licenciamento e critérios para decidir entre n8n, Make e Zapier sem transformar o texto em propaganda.
- Ensinar como começar: criar conta ou instalar, conhecer o editor, conectar credenciais, testar, publicar, observar execuções e corrigir falhas.

## Projeto prático: atendente de WhatsApp para agência de viagens
- Usar a integração oficial **WhatsApp Business Platform/Cloud API da Meta**, evitando APIs não oficiais que possam colocar o número em risco.
- Explicar os pré-requisitos: conta empresarial, aplicativo Meta, número habilitado, credenciais, URL pública segura e webhook.
- Montar um fluxo visual e reproduzível:

```text
WhatsApp Trigger
  → normalizar mensagem e telefone
  → identificar intenção e coletar destino, origem, datas, viajantes e orçamento
  → consultar uma base fictícia de pacotes/FAQ
  → IA redige uma resposta limitada aos dados disponíveis
  → condição de segurança
      ├─ dúvida simples → responder no WhatsApp
      └─ preço final, reserva, pagamento ou baixa confiança → encaminhar a um atendente humano
  → registrar atendimento sem expor dados desnecessários
```

- Fornecer um prompt pronto para o atendente, exemplos de mensagens, campos da base fictícia e configuração nó a nó.
- Separar claramente demonstração de produção: o exemplo não inventará disponibilidade nem concluirá reservas ou pagamentos sozinho.
- Explicar janela de atendimento, mensagens modelo aprovadas, consentimento, LGPD, retenção mínima, proteção de credenciais, prevenção de prompt injection, limites de gasto e opção “falar com humano”.
- Incluir checklist de teste e publicação, erros comuns e estimativa dos componentes de custo: n8n, hospedagem quando aplicável, provedor de IA e cobrança da Meta.

## Apresentação e padrão editorial
- Criar uma hero WebP exclusiva mostrando o fluxo n8n ligado ao WhatsApp de uma agência de viagens, sem logotipos falsificados nem texto pequeno ilegível.
- Usar o visual da categoria IA: títulos em destaque, quadros de resumo, tabela de planos, diagrama do fluxo, passos numerados, alertas de segurança e FAQ.
- Manter anúncios fora de listas geradas e aplicar `CategoryBadge`, navegação, compartilhamento, autor e rastreamento de leitura.
- Fechar na ordem obrigatória: **Análise do Marcos → Fontes → Artigos relacionados → Comentários**.
- Incluir ao menos 8 fontes primárias, priorizando documentação e preços oficiais do n8n, documentação oficial da Meta e LGPD.
- Configurar SEO completo: título, descrição, 10+ palavras-chave, canonical self-referencial, BlogPosting e FAQ schema.

## Integração ao site
- Criar o artigo como ID **258**, com slug `n8n-guia-atendente-whatsapp-agencia-viagens-2026` e subtópico `agentes`.
- Registrar os metadados e FAQ na lista de posts e adicionar a rota carregada sob demanda.
- Manter a imagem principal no sitemap de imagens e o artigo nos sitemaps e feeds gerados automaticamente.

## Validação
- Confirmar mais de 1.500 palavras de prosa e leitura adequada em celular e computador.
- Executar checagens de TypeScript, estrutura editorial, palavras-chave, ordem do rodapé, navegação “Leia a seguir”, canonical/robots, sitemap e feeds.
- Abrir o artigo na prévia para validar hero, tabelas, diagrama, espaçamento e ausência de conteúdo sobreposto.
