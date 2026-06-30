## Diagnóstico

Levantei o estado atual rodando greps e contagem de palavras em prosa (strip de JSX/expressões):

**1. Breadcrumb duplicado**

- Os 177 posts usam `<BackNavigation/>` que já renderiza só o `<Breadcrumb/>` colorido novo. ✅
- Porém **18 posts** ainda têm um `<nav>` inline manual ANTES do `<BackNavigation/>` — ou seja, aparecem DOIS breadcrumbs (o antigo cinza + o novo colorido). Arquivos:
  ```
  BitcoinCripto2026, CarteiraIniciantes2026, Bitcoin2026ValeComprar,
  FIIs2026AindaVale, IRPF2026, FIIs2026, TesouroDireto2026, ETFs2026,
  EducacaoFinanceira3Baldes, EconomiaDomestica2026, RendaPassiva2026,
  IAMercadoFinanceiro2026, SelicComecaCair2026, IAFinancasPessoais2026,
  PlanejamentoFinanceiro2026, PrevidenciaPrivada2026, ReservaEmergencia2026,
  SairDasDividas2026
  ```

**2. Padrão "Análise do Marcos"**

- Não existe a string literal "Análise do Autor" em nenhum post. ✅
- Existem **~17 posts** com título `<EditorialTake title="Análise: ..."/>` (sem "do Marcos"). Devem virar `"Análise do Marcos: ..."`. Lista inclui todos os Crimson Desert, vários Bannerlord, AC*, DragonAge, BaldursGate3, Saros, Pragmata, Vikings.

**3. Ordem do artigo**

- Verifiquei programaticamente: `<h1>` → `<AuthorBio>` → `<EditorialTake>` está correto em 100% dos posts editoriais.
- O `prebuild` (`check-article-footer-order.mjs`) já trava a ordem `EditorialTake → ArticleSources → RelatedPosts → CommentSection` + CTA "Participe da conversa" embutido no `CommentSection`. ✅
- Os 7 Portals (hubs) são corretamente ignorados por essa validação.

**4. Contagem de prosa (< 1400 palavras)**

- **69 posts** ficam abaixo de 1400 palavras de prosa (medição automática strip-JSX, margem ~±5%). Vão de 658 (SuperMarioGalaxyMovie) a ~1395.
- Não expandir os 69 posts à mão, só quero uma lista dos posts que não tem as 1400 palavras para eu verificar manualmente

---

## Plano de execução

### Fase 1 — Limpeza estrutural (rápida, mecânica)

1. **Remover breadcrumbs duplicados** nos 18 posts listados. Em cada arquivo:
  - Apagar o bloco `{/* Breadcrumb */} <nav className="flex items-center gap-2 text-sm text-muted-foreground...">...</nav>`
  - Manter apenas o `<BackNavigation category="..."/>` (= novo breadcrumb colorido).
  - Limpar imports não usados (`ChevronRight` de `lucide-react`, `Link` se ficar órfão).
2. **Padronizar "Análise do Marcos"** nos ~17 posts:
  - Substituir `title="Análise: X"` por `title="Análise do Marcos: X"` no `<EditorialTake>`.
  - Conferir que o default do componente já é "Análise do Marcos" para casos sem `title=`.
3. **Rodar prebuild** (`check-article-footer-order.mjs` + `check-dynamicseo-duplicates.mjs` + `tsgo --noEmit`) para validar.

---

## Detalhes técnicos

- Script de medição de prosa será salvo em `scripts/check-post-prose.mjs` e adicionado ao `prebuild` para evitar regressões futuras (limite 1500 palavras, ignora Portals).

---