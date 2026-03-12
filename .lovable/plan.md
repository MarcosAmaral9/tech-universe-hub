

## Plano: Simplificar Painel Social + Sugestão de Música + Histórico por Plataforma

### Mudanças

**1. `src/pages/SocialPanelPage.tsx`**
- Remover toda a seção "Step 3: Enviar via Zapier" (webhooks, botão enviar, estados `publishing`, `webhookIG`, `webhookTT`, constantes de webhook, função `handlePublish`, `saveWebhook`)
- Remover imports não utilizados (`Send`, `Link2`, `Input`)
- Adicionar botão "Sugerir Música" ao lado do botão "Gerar Imagem IA" na seção de plataformas (ícone `Music` do lucide)
- Estado `suggestMusic` (boolean) — quando ativo, a edge function também retorna sugestão de música
- Adicionar botão "Salvar no Histórico" no lugar do antigo "Enviar para Zapier" que salva as versões IG e TT separadamente no histórico local
- O histórico agora salva cada plataforma como entrada individual (com campo `platform` singular) preservando o conteúdo editado e a imagem

**2. `src/components/social/SocialHistoryPanel.tsx`**
- Adicionar campo `platform` (string) ao `HistoryEntry` para identificar Instagram vs TikTok
- Exibir badge da plataforma no item do histórico
- Adicionar campo opcional `musicSuggestion` ao `HistoryEntry`
- Exibir sugestão de música quando presente

**3. `supabase/functions/generate-social-content/index.ts`**
- Aceitar novo param `suggestMusic` (boolean)
- Quando `true`, adicionar ao prompt instruções para sugerir uma música trending para a plataforma
- Adicionar `musicSuggestion` ao tool schema e resposta

### Detalhes Técnicos
- Sugestão de música via prompt na mesma chamada de IA (sem API externa) — pede músicas trending para Instagram Reels ou TikTok com base na categoria do artigo
- Histórico continua no `localStorage`, mas agora cada entrada tem `platform: "instagram" | "tiktok"` em vez de `platforms: string[]`

