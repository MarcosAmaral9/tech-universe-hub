# Plano (revisado): Newsletter via Hostinger MySQL, sem Supabase

Toda a leitura/escrita de newsletter passa a usar **exclusivamente** os endpoints PHP em `public/api.php` (`newsletter_get`, `newsletter_update`, `newsletter_send`). Nenhuma chamada ao Supabase para newsletter.

## 1. Histórico de envios + Pausa/Cancelar (perfil & configurações)

**`src/components/NewsletterPreferences.tsx`** — refatorado para usar PHP:
- `useEffect` chama `GET /api.php?action=newsletter_get&email=...` e popula:
  - `subscriber.is_active`, `categories`, `created_at`, `updated_at`
  - `history[]` (id, subject, categorias, status, sent_at) — exibido como lista dos últimos 20 envios com data PT-BR, chips de categorias e badge de status (✓ Entregue verde / ✗ Falhou vermelho).
- Botão **Salvar** → `POST /api.php?action=newsletter_update` com `{email, is_active, categories}`.
- Botão **"Pausar inscrição"** (quando ativa) → `is_active=0`, mantém categorias.
- Botão **"Cancelar inscrição"** (destrutivo, com `AlertDialog` de confirmação) → `is_active=0` + `categories=[]`.
- Status atualizado imediatamente no estado local após sucesso (sem reload).
- Remove todos os `import { supabase }` e `(supabase as any).from("newsletter_subscribers")` deste arquivo.

**`src/components/NewsletterSignup.tsx`** — refatorar fluxo de inscrição:
- `POST /api.php?action=newsletter_subscribe` (novo endpoint) com `{email, categories}` → faz upsert (INSERT ON DUPLICATE KEY UPDATE) na tabela MySQL `newsletter_subscribers`.
- Remove a lógica Supabase atual.

**`src/pages/SettingsPage.tsx`** — sem mudança estrutural; o `NewsletterPreferences` já está renderizado lá e agora trará histórico + pausa.

## 2. Endpoints PHP (`public/api.php`)

- **Novo**: `POST action=newsletter_subscribe` body `{email, categories[]}` → upsert em `newsletter_subscribers` (cria com `is_active=1`; se já existe, atualiza categorias e reativa).
- **Existente**: `newsletter_get`, `newsletter_update`, `newsletter_send` — manter (já filtram por categoria corretamente no worker).
- Schema MySQL documentado no rodapé do arquivo (criar/ajustar):
  ```sql
  CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(191) NOT NULL UNIQUE,
    categories VARCHAR(255) DEFAULT '',
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  CREATE TABLE IF NOT EXISTS newsletter_sends (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    subscriber_email VARCHAR(191) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    categories VARCHAR(255) DEFAULT '',
    status ENUM('sent','failed','pending') DEFAULT 'pending',
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email_time (subscriber_email, sent_at)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  ```

## 3. Worker de envio filtrando por categoria

`action=newsletter_send` em `api.php` (linhas 1996–2052) **já filtra por categoria** via `array_intersect`. Pequenos ajustes:
- Garantir validação: se categorias do envio não vazias e assinante sem nenhuma categoria casando → pular e logar como `skipped` (não criar linha em `newsletter_sends`, evitando ruído).
- Cron Hostinger sugerido (documentação no header): `0 9 * * 1` (segundas, 9h).

## 4. AdInArticle em todos os posts faltantes

- 152 posts; só 5 portais usam `AdInArticle`. Script Python (`/tmp/add_ad.py`) que para cada `src/pages/posts/*.tsx`:
  1. Garante `AdInArticle` no import de `@/components/AdSense`.
  2. Insere `<AdInArticle className="my-8" />` no meio do `<div className="prose...">`, idealmente após o ~3º `<h2>` ou na metade dos parágrafos.
- Validação manual em 3 amostras antes da aplicação em massa.

## 5. Widget "Mais Lidos" (contagem real via MySQL)

**Backend (`api.php`):**
- Tabela nova `post_views (slug, title, category, ip_hash, viewed_at)` com índices em `slug,viewed_at` e `viewed_at`.
- `POST action=track_view` body `{slug, title, category}` — insere com hash do IP (rate-limit 30 min por IP+slug).
- `GET action=top_posts&period=week&limit=10` — `SELECT slug, title, category, COUNT(*) AS views FROM post_views WHERE viewed_at >= NOW() - INTERVAL 7 DAY GROUP BY slug ORDER BY views DESC LIMIT ?`.

**Frontend:**
- `src/hooks/useReadingHistory.ts` — adicionar fetch fire-and-forget para `track_view` ao registrar leitura.
- Novo `src/components/MostReadWidget.tsx` — busca `top_posts?period=week`, exibe lista numerada "🔥 Mais Lidos da Semana" com título + view count + categoria. Fallback gracioso (esconde widget) quando endpoint indisponível (preview estático).
- Inserir widget na `src/pages/Index.tsx` (homepage) e dentro de `src/components/RelatedPosts.tsx` (sidebar dos posts).
- Badge **"🔥 Mais lido"** em `src/components/PostCard.tsx` quando o slug está no top 5 da semana (estado compartilhado via hook simples `useTopPosts`).

## Resumo dos arquivos

**Editados:**
- `src/components/NewsletterPreferences.tsx` (rewrite — usa PHP, histórico, pausar/cancelar)
- `src/components/NewsletterSignup.tsx` (rewrite signup → PHP)
- `public/api.php` (+ `newsletter_subscribe`, `track_view`, `top_posts`, schemas atualizados)
- `src/hooks/useReadingHistory.ts` (track_view)
- `src/pages/Index.tsx` (insere MostReadWidget)
- `src/components/RelatedPosts.tsx` (insere MostReadWidget)
- `src/components/PostCard.tsx` (badge Mais lido)
- ~140 posts em `src/pages/posts/*.tsx` via script (AdInArticle)

**Criados:**
- `src/components/MostReadWidget.tsx`
- `src/hooks/useTopPosts.ts`

**Observação:** Como toda a feature de newsletter e widget depende de PHP/MySQL Hostinger, no preview estático essas seções mostram fallback ("disponível em produção"). A regra de memória sobre PHP em preview já está documentada.

Confirma para implementar?
