# Histórico de cotações imediato e sem consumo por visitante

## Objetivo

Ao abrir **Histórico de Cotações**, o visitante recebe imediatamente o último conjunto completo disponível para B3, câmbio, metais e criptomoedas. Nenhum visitante chama serviços externos, usa token, inicia preenchimento ou precisa atualizar a página.

## Diagnóstico confirmado

- A página atual faz uma requisição separada para cada ativo pelo endpoint `history`, embora o servidor já tenha um endpoint agregado `history_multi`.
- Quando faltam pontos, a própria visita dispara preenchimento em segundo plano e a tela pode mostrar “Montando o histórico”.
- O cron já é o ponto central previsto para consultar as fontes externas e gravar no MySQL da Hostinger.
- Neste momento, os endpoints públicos `history_assets` e `history_multi` respondem **503 — banco indisponível**. A conexão e as credenciais do MySQL precisam ser corrigidas antes de garantir o histórico em produção.

## Plano de implementação

### 1. Restabelecer e validar o MySQL da Hostinger

- Conferir as variáveis privadas `DB_HOST`, `DB_NAME`, `DB_USER` e `DB_PASS` em `/public_html/.env.php` e as permissões do usuário MySQL.
- Fazer o próprio cron criar/validar a tabela `price_history` e seus índices, sem depender do endpoint administrativo de diagnóstico.
- Adicionar uma verificação protegida que confirme conexão, quantidade de ativos, datas mínima/máxima e última atualização, sem expor credenciais.

### 2. Preencher o histórico antes de qualquer visitante chegar

- Transformar o `cron_refresh` no único responsável por consultar CoinGecko, fonte de câmbio/metais e fonte da B3.
- Executar o preenchimento retroativo automaticamente em lotes até completar 1 ano para todos os 24 ativos atuais.
- Registrar no MySQL o estado de cada ativo: último dia disponível, quantidade de pontos, tentativa, erro e situação completa/incompleta.
- Depois da carga inicial, o cron apenas acrescenta ou corrige o dia mais recente, usando `ON DUPLICATE KEY UPDATE` para evitar duplicações.
- Manter trava contra execuções simultâneas e limites por fonte para não exceder os recursos da hospedagem.

### 3. Criar uma cópia pronta para leitura instantânea

- Após cada atualização bem-sucedida, gerar no servidor um snapshot agregado com todos os ativos e períodos de 7, 30, 90 e 365 dias.
- Publicar o snapshot novo somente depois de ele estar completo e válido; durante uma atualização ou falha, continuar servindo a última cópia completa.
- Gravar ETag e horário da atualização para permitir cache rápido no navegador e na hospedagem.
- Nunca apagar a cópia anterior antes de a nova estar pronta.

### 4. Reduzir a abertura da página a uma única leitura

- Alterar `HistoricoCotacoesPage` para consumir uma única resposta agregada, em vez de fazer até 24 consultas independentes.
- Carregar todas as categorias e todos os períodos nessa resposta; trocar abas e períodos será instantâneo e sem novas chamadas.
- Remover da visita pública qualquer acionamento de backfill, espera de 25 segundos, novas tentativas e mensagem “Montando o histórico”.
- Usar a última cópia completa salva como fallback. Se o servidor estiver temporariamente indisponível, a página mantém os dados reais mais recentes e informa apenas a data deles, sem inventar séries simuladas.

### 5. Separar totalmente visitantes das fontes externas

```text
Cron protegido da Hostinger
        ↓
APIs externas (poucas chamadas centralizadas)
        ↓
MySQL + snapshot completo
        ↓
Uma leitura pública por abertura da página
        ↓
Filtros e gráficos locais, sem novas chamadas
```

- Tokens e segredos permanecem apenas no `.env.php` da Hostinger.
- O navegador nunca recebe token de CoinGecko, Brapi, Alpha Vantage ou do cron.
- Mil visitantes lerão o mesmo snapshot; não serão mil chamadas às fontes externas.

### 6. Garantir que nunca seja publicada uma série incompleta

- Validar os 24 ativos esperados e a cobertura mínima adequada: dias corridos para cripto/câmbio/metais e pregões para B3.
- Se um provedor falhar, preservar a última série completa daquele ativo.
- Marcar a atualização como concluída apenas quando o snapshot passar pela validação.
- Manter o bootstrap secreto somente como recuperação administrativa, sem participação do usuário e sem link público.

### 7. Testes e ativação

- Adicionar testes para: nenhum acesso público dispara API externa; snapshot incompleto não substitui o completo; todos os ativos retornam; períodos retornam em ordem e sem duplicatas.
- Testar falha do MySQL, falha de uma fonte e duas execuções simultâneas do cron.
- Medir a abertura da página em desktop e celular e confirmar uma única chamada de histórico, gráficos preenchidos e nenhuma mensagem de espera.
- Ativar em duas etapas: primeiro preencher e validar o banco; depois trocar a página para a nova resposta agregada.

## Resultado esperado

- Todos os gráficos aparecem na primeira abertura com a última série real completa disponível.
- Trocas entre B3, câmbio, metais, cripto e períodos são locais e imediatas.
- Novos visitantes não consomem tokens nem fazem chamadas às fontes de mercado.
- Uma indisponibilidade temporária preserva os últimos dados válidos em vez de deixar a página vazia.

## Limite realista

Toda página depende de alguns milissegundos para baixar HTML, JavaScript e dados. “Imediatamente” será implementado como **nenhum backfill ou consulta externa durante a visita, uma única leitura pequena e cacheável, e nenhuma tela aguardando a formação do histórico**.
