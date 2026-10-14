# Histórico de 365 dias buscado pelo próprio servidor

## Objetivo
O servidor da Hostinger usa os seus tokens (guardados só no `.env.php`) para buscar os últimos 365 dias dos 24 ativos, salva tudo no MySQL e passa a entregar esse histórico pronto. Visitantes só leem o banco: nenhuma consulta externa, nenhum token exposto e nada para rodar no seu computador.

## Como vai funcionar
1. **Carga inicial de 1 ano, feita pelo servidor**
   - B3 (10 ações): brapi com o seu `BRAPI_TOKEN`, pedindo o período de 1 ano de uma vez por ação. Alpha Vantage fica como reserva se a chave existir.
   - Cripto (8): CoinGecko, 365 dias por moeda.
   - Câmbio e metais (6): fonte diária atual, preenchendo os dias que faltam.
   - Tudo é gravado sem duplicar (atualiza o dia se ele já existir) e em lotes curtos, para respeitar o tempo da hospedagem e os limites dos provedores.
2. **Depois da carga, só atualização diária**: o servidor busca apenas o dia mais recente de cada ativo. Isso gasta poucas chamadas por dia, não uma por visitante.
3. **Entrega imediata**: ao terminar, o servidor monta uma cópia pronta com os 24 ativos (7, 30, 90 e 365 dias). A página abre lendo essa cópia em uma única chamada.
4. **Sem tela vazia**: se um provedor falhar, continua valendo a última cópia completa. Nenhum preço é inventado.

## O que você precisa fazer (uma vez, no navegador)
- No hPanel → Avançado → Cron Jobs, cadastrar uma tarefa que o servidor executa sozinho a cada 15 minutos. Eu escrevo a linha pronta para copiar e colar. Ela roda na Hostinger, não no seu computador.
- Enviar o `api.php` novo pelo Gerenciador de Arquivos.
- Conferir se `$BRAPI_TOKEN` está no `.env.php`.

Sem essa tarefa agendada o servidor não tem como iniciar a busca sozinho. Pelas regras de segurança do site, uma visita não pode chamar os provedores.

## Detalhes técnicos
- `public/api.php`:
  - `backfillB3` passa a usar `brapi.dev/api/quote/{ticker}?range=1y&interval=1d&token=...` como fonte principal; usa Yahoo/Alpha Vantage só como alternativa.
  - Registro por ativo (pontos, data mais antiga/recente, último erro). O cron prioriza o ativo com menos cobertura e reparte o tempo entre as categorias.
  - Cobertura mínima para publicar: cerca de 240 pregões na B3 e 360 dias corridos nos demais. Ativo incompleto mantém a série anterior, e o snapshot só é trocado quando os 24 ativos são validados (troca atômica com escrita em arquivo temporário e `rename`).
  - Novo `history_status` protegido por `X-Cron-Secret` que mostra o progresso por ativo, sem expor tokens.
  - Endpoints públicos continuam somente leitura.
- `src/lib/historySnapshot.ts` e testes: ajustar os limites de validação para os novos mínimos.
- Testes: brapi 1y convertido corretamente, sem duplicatas, snapshot incompleto não substitui o completo, rotação entre categorias.
- `DEPLOY.md`: a linha do cron no hPanel e como conferir o progresso.

## Limitação
Não tenho acesso à Hostinger. A carga só começa depois que o `api.php` for enviado e a tarefa agendada for cadastrada. Se o plano gratuito da brapi não liberar 1 ano para alguma ação, isso aparece no status e eu aviso, sem preencher com dados falsos.
