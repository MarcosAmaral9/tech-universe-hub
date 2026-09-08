# Histórico de cotações que se preenche sozinho

Hoje o histórico só aparece depois que alguém abre manualmente o link secreto de "bootstrap". A ideia é acabar com isso: o próprio site passa a completar o histórico em segundo plano, um pedaço por vez, até ficar completo — e continua se recuperando sozinho se o banco for zerado.

## Como vai funcionar

1. **Preenchimento automático em fatias.** A cada atualização automática do servidor (a mesma que já roda de tempos em tempos para as cotações do dia), o site também completa um pedaço do histórico que falta: algumas moedas, alguns dias de câmbio/metais e uma ação da bolsa por vez. Em poucas horas o histórico de 1 ano fica completo, sem ninguém fazer nada.

2. **Rede de segurança quando alguém abre a página.** Se um visitante abrir o Histórico de Cotações e faltar dado daquele ativo, o site busca na hora um pedaço pequeno (rápido, sem travar a página) e mostra o que já tem. Há um limite de tempo entre tentativas para não sobrecarregar as fontes de dados nem a hospedagem.

3. **Mensagem correta na tela.** Onde hoje aparece "Execute o bootstrap … link secreto", passa a aparecer algo como "Estamos montando o histórico deste ativo — os dados aparecem em instantes", com nova tentativa automática de carregar o gráfico.

4. **O link secreto continua existindo**, mas só como ferramenta manual de manutenção. Nenhum usuário precisa dele.

## Detalhes técnicos

- `public/api.php`:
  - Extrair a lógica de `history_bootstrap` em funções reaproveitáveis: `backfillCrypto($db,$coinId,$sym,$days)`, `backfillCurrencyDay($db,$dateStr)`, `backfillB3($db,$ticker,$days)`.
  - Novo executor com orçamento: `runBackfillStep($db, $maxSeconds, $maxUnits)` — escolhe o que está mais defasado (consulta em `price_history`), executa dentro do orçamento e grava progresso/carimbo numa linha de controle (`widget_cache` chave `history_backfill_state` ou tabela leve `history_backfill_state`) com trava para evitar execuções simultâneas.
  - Chamar `runBackfillStep` ao final do `cron_refresh` (orçamento ~20s), depois do JSON já enviado quando possível (`ignore_user_abort` + `fastcgi_finish_request`).
  - No endpoint `history` (e `history_multi`): se o ativo tiver menos pontos que o esperado para o período pedido, disparar um passo curto (~5s, 1 ativo) com trava de no mínimo 10 min por ativo, e devolver o resultado já com `"backfilling": true` no JSON.
  - Manter idempotência: todos os inserts já usam `ON DUPLICATE KEY UPDATE`.
- `src/pages/HistoricoCotacoesPage.tsx`: substituir o texto que cita a URL secreta pelo aviso de "montando histórico"; quando a resposta trouxer `backfilling: true` e poucos pontos, reconsultar automaticamente após ~20s (uma ou duas vezes).
- Sem mudanças de banco além, opcionalmente, da pequena tabela/linha de estado do preenchimento.

## Observação

A parte de PHP/MySQL só tem efeito depois do envio para a Hostinger; no preview estático o comportamento continua o de fallback.
