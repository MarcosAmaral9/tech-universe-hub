# Corrigir Google, histórico de cotações e mais lidos

## Diagnóstico confirmado no site

As consultas públicas a `viciocode.com` retornaram:

| Recurso | Resultado observado |
|---|---|
| Iniciar login com Google | HTTP 500: “Serviço temporariamente indisponível.” |
| Mais lidos da semana | HTTP 500 com a mesma mensagem |
| Histórico de PETR4 e Bitcoin | HTTP 503: “Banco indisponível” |
| Snapshot agregado do histórico | HTTP 500 com a mensagem genérica |
| Cotações de B3, cripto e câmbio | HTTP 503: dados indisponíveis |

**Há uma falha compartilhada no acesso ao MySQL.** A mensagem genérica corresponde, no código atual, ao tratamento de falha de configuração/conexão ao banco. Ainda não é possível distinguir senha incorreta, configuração ausente, permissões ou indisponibilidade do serviço sem verificar a Hostinger; não atribuir o problema a uma senha específica sem essa confirmação.

**O histórico publicado está desatualizado.** O arquivo JavaScript servido pelo site ainda contém “Montando o histórico” e não utiliza `history_snapshot`, enquanto a página atual do projeto já utiliza a leitura agregada.

**Os mais lidos desaparecem quando a consulta falha.** O código transforma falhas em uma lista vazia e esconde o bloco. Isso não comprova ausência de leituras no banco.

## Plano de correção

### 1. Restabelecer o acesso ao banco na Hostinger
- Verificar o carregamento de `/public_html/.env.php`, os campos obrigatórios, o usuário do banco e suas permissões, sem expor valores privados.
- Acrescentar diagnóstico seguro: mensagens públicas sem informações sensíveis e registros privados com identificador e categoria da falha, sem senhas, tokens ou respostas completas dos provedores.
- Confirmar as tabelas necessárias antes de alterar qualquer estrutura; preservar usuários, leituras e preços já salvos.
- Corrigir a configuração de produção conforme o diagnóstico. Essa etapa depende de acesso à Hostinger ou da ação do proprietário.

### 2. Corrigir o login com Google
- Verificar a presença das credenciais do Google e da chave de sessão no arquivo privado, além do retorno autorizado `https://viciocode.com/auth/google`.
- Corrigir um problema confirmado no código: o cookie de validação do Google usa o caminho `/auth/google`, mas é lido na chamada para `/api.php`. Usar um caminho compatível também ao apagar o cookie, mantendo Secure, HttpOnly, SameSite e validação obrigatória de `state`.
- Impedir que a troca do código de autorização seja executada duas vezes na mesma tentativa.
- Distinguir indisponibilidade do site, configuração incompleta e cancelamento, sem retirar a proteção do login.
- Verificar o fluxo completo, incluindo retorno do Google, criação da sessão e acesso às configurações. Caso não seja possível autenticar uma conta real, informar explicitamente que essa parte permanece pendente.

### 3. Destravar o histórico de cotações
- Publicar a página atual e a versão correspondente de `api.php`, verificando os arquivos efetivamente servidos pela Hostinger e a atualização do aplicativo instalado.
- Conferir o agendamento e o resultado do cron protegido, o progresso de cada um dos 24 ativos, limites dos provedores e permissão de escrita do snapshot.
- Corrigir eventuais bloqueios encontrados no preenchimento: a publicação atual exige todos os ativos completos; identificar exatamente quais impedem a primeira cópia, sem relaxar essa regra nem inventar preços.
- Garantir avanço equilibrado entre cripto, câmbio, metais e B3, sem deixar uma categoria consumir permanentemente o tempo destinado às demais.
- Manter a última cópia completa durante falhas. As visitas apenas leem dados preparados: nenhuma chamada a provedores, nenhum token e nenhuma tarefa manual para o visitante.
- Encerrar a espera com prazo limitado e estado honesto quando não existir cópia disponível; não mostrar preços de exemplo como reais, nem prometer que há uma cópia salva quando não houver.
- Exibir imediatamente a cópia local válida, quando existente, enquanto a consulta atualiza os dados.

### 4. Recuperar os mais lidos da semana
- Verificar a tabela `post_views`, a gravação de novas leituras e a consulta dos últimos sete dias após restabelecer o banco.
- Criar a tabela de forma idempotente somente se ausente, sem apagar registros existentes.
- Separar falha de consulta de uma semana realmente sem leituras; preservar o último ranking válido durante falhas transitórias, sem inventar visualizações ou substituir silenciosamente a semana por outro período.
- Validar a exibição do ranking nos locais que já usam o bloco.

## Detalhes técnicos e publicação
- Manter exclusivamente PHP/MySQL na Hostinger e sessões seguras por cookies; não adicionar outro serviço de dados.
- A publicação automática atual exclui `api.php`. Preparar uma entrega controlada que atualize esse arquivo junto à página, com possibilidade de reversão, preservando `.env.php`, caches e uploads. Atualizar as instruções para não manter essa divergência entre versões.
- Adicionar testes de regressão para o caminho do cookie OAuth, troca única do código, estados de erro, preservação de cache, avanço do cron e publicação somente de snapshot completo.
- Executar os testes relevantes e conferir os três fluxos em produção depois da entrega. A prévia estática não executa PHP e não comprova o funcionamento da Hostinger.

## Critérios de conclusão
- **Google:** seleção de conta, retorno válido e sessão confirmada no site.
- **Histórico:** cópia real completa dos 24 ativos disponível, navegação entre categorias/períodos sem preenchimento provocado pelo visitante, preservação da última cópia em falhas.
- **Mais lidos:** contagem real persistida e ranking semanal exibido quando houver leituras.
- **Publicação:** site servindo as versões corrigidas da página e de `api.php`, sem alterar arquivos privados.

**Limitação atual:** não há credenciais de publicação da Hostinger disponíveis neste ambiente; não será possível afirmar que o MySQL ou o cron foram corrigidos apenas alterando o projeto.