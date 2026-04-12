

# Análise da Arquitetura de APIs e Plano de Otimização

## Situação Atual

```text
┌─────────────────────────────────────────────────────────┐
│  Fluxo de dados atual                                   │
│                                                         │
│  Cron (Hostinger) ──→ api.php?action=cron_refresh       │
│    cada 10 min            │                             │
│                     ┌─────┴──────┐                      │
│                     │ 3 APIs     │                      │
│                     │ externas   │                      │
│                     └─────┬──────┘                      │
│                           ▼                             │
│                    MySQL (widget_cache)                  │
│                    + price_history                       │
│                           │                             │
│  Usuário ──→ api.php?action=all ──→ lê MySQL            │
│             (zero APIs externas)                        │
└─────────────────────────────────────────────────────────┘
```

### APIs usadas e limites

| API | Uso | Limite Gratuito | Consumo Atual (10min cron) |
|-----|-----|-----------------|---------------------------|
| **fawazahmed (jsDelivr CDN)** | Câmbio + Metais | Sem limite | ~4.320/mês |
| **CoinGecko** | Cripto (8 moedas) | 10.000 req/mês | ~4.320/mês (43%) |
| **brapi.dev** | B3 (10 ações) | 15.000 req/mês | ~2.232/mês (15%) |
| **Yahoo Finance** | Fallback B3 | Não oficial (bloqueado frequentemente) | Só quando brapi falha |
| **frankfurter.app (BCE)** | Fallback USD/EUR | Sem limite | Duplicado desnecessariamente |

### Problemas Identificados

1. **Hostinger limita cron a 2x/hora (cada 30 min)**, mas o código está configurado para 10 min — o cron real já roda a cada 30 min
2. **Duplicação**: `action=rates` e `action=crypto` e `action=b3` ainda chamam APIs externas quando acessados diretamente (bypass do cron)
3. **Botão "Atualizar"** no histórico ainda existe e pode confundir
4. **`history_crypto_proxy`** chama CoinGecko direto do browser (via servidor), gastando requisições fora do cron
5. **Frankfurter** é chamado 2x no fluxo de rates (redundante)
6. **Histórico B3** depende exclusivamente do cron acumulando 1 ponto/dia — sem bootstrap possível gratuitamente

## Plano de Otimização

### 1. Adaptar cron_refresh para ciclo de 30 minutos

Como a Hostinger só permite 2 execuções/hora, o cron real é `*/30 * * * *`. Ajustar TTLs e comentários para refletir isso.

**Novo cálculo mensal (30 min):**
- CoinGecko: 1 req/30min × 24h × 30d = **1.440/mês (14% do limite)**
- brapi.dev: ~1.116/mês durante pregão + fora = **~8% do limite**
- fawazahmed: sem limite

Isso libera muita margem. Podemos usar a sobra para o bootstrap de histórico.

### 2. Eliminar chamadas diretas a APIs externas nos endpoints individuais

Modificar `action=rates`, `action=crypto` e `action=b3` para **apenas ler o cache** (igual ao `action=all`), nunca chamando APIs externas. Isso garante que o cron é o ÚNICO ponto de contato com APIs.

### 3. Eliminar `history_crypto_proxy`

Este endpoint chama CoinGecko direto quando o usuário abre o histórico — fura o modelo "cron-only". Substituir por:
- **Bootstrap único** (`history_bootstrap`) já existe e popula 365 dias
- Depois, o cron acumula 1 ponto/dia automaticamente
- O frontend lê apenas do `action=history` (BD local)

### 4. Remover botões "Atualizar" de todas as páginas

- `/historico-cotacoes`: remover botão RefreshCw e a função manual `loadData`
- `/cotacoes`: já não tem scroll, verificar se tem botão refresh
- `useMarketData`: remover `refresh` da interface pública (manter poll automático)

### 5. Otimizar uso da margem restante de CoinGecko

Com 1.440 req/mês no cron, sobram ~8.500 requisições. Usar para:
- **Bootstrap automático no cron**: se o BD tiver <30 dias de cripto, o cron busca histórico de 90 dias (1 req por moeda × 8 = 8 req, uma única vez)
- Não precisa de endpoint separado — integra no `cron_refresh`

### 6. Manter APIs atuais (não trocar)

As APIs atuais são a melhor combinação gratuita:
- **fawazahmed**: única API gratuita sem limite que cobre câmbio E metais (XAU/XAG)
- **CoinGecko**: padrão da indústria, 10k req/mês gratuito
- **brapi.dev**: única API brasileira para B3 com plano free

Não há necessidade de adicionar outras APIs. Remover o fallback do Yahoo Finance (não funciona mais) e a chamada duplicada do frankfurter.

### Resumo das Modificações

| Arquivo | O que muda |
|---------|-----------|
| `public/api.php` | `action=rates/crypto/b3` → só leitura de cache; remover `history_crypto_proxy`; remover frankfurter duplicado; ajustar TTLs para 30min; auto-bootstrap no cron |
| `src/pages/HistoricoCotacoesPage.tsx` | Remover botão Atualizar; remover `fetchCryptoHistoryProxy`; ler tudo do BD |
| `src/pages/CotacoesPage.tsx` | Remover botão refresh se existir |
| `src/hooks/useMarketData.ts` | Ajustar `POLL_INTERVAL_MS` para 30min; remover `refresh` da API pública |
| `src/pages/posts/CalculadorasFinanceiras.tsx` | Remover botão refresh; manter `useMarketData` (já funciona via cache) |

### Configuração do Cron na Hostinger

```text
Cron Job: */30 * * * *
URL: https://viciocode.com/api.php?action=cron_refresh&secret=VC_CRON_2026

Bootstrap (executar 1x manualmente):
URL: https://viciocode.com/api.php?action=history_bootstrap&secret=VC_CRON_2026
```

