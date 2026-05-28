## Diagnóstico

Capturei o preview em 390px e confirmei o problema: o header mobile tem ícones demais lado a lado (Logo + Painel Social + Search + Login + Settings + Hamburger), o que causa **overflow horizontal** — o último ícone (hambúrguer ≡) é parcialmente/totalmente cortado, e em telas reais de celular (com notch, safe-area e fontes maiores) a engrenagem e o "Entrar" também somem.

Causas concretas em `src/components/Header.tsx`:
- Nenhum ícone do bloco de ações está marcado como `hidden md:flex`, então TODOS aparecem em mobile.
- O botão "Painel Social" aparece sempre que o hostname contém `lovable` (preview), ocupando espaço extra.
- O atalho "Conteúdo Offline" (WifiOff) aparece no header quando é PWA standalone — mas o usuário pediu que esse link **só exista no app instalado** e fica melhor dentro do menu, não no header.
- O botão "Entrar" em mobile só mostra ícone, mas ainda concorre por espaço.

## Plano (frontend only, `Header.tsx`)

### 1. Header mobile enxuto
Mostrar no header em mobile apenas 4 itens, nessa ordem:
```
[Logo]   ........   [Login/Avatar] [⚙ Settings] [☰ Menu]
```
Tudo o resto vira `hidden md:flex` e migra para o menu hambúrguer:
- 🔍 Busca → vira primeiro item do menu mobile (abre `SearchModal`).
- 📄 Painel Social (admin/lovable) → entra no menu mobile como link.
- 💾 OfflinePostsBadge → entra no menu mobile (mesmo componente, mas dentro do drawer).
- 📱 Atalho "Conteúdo Offline" (PWA standalone) → migra para o menu mobile, com guarda `isStandalone && user`, garantindo que **nunca apareça no navegador web**.

Em desktop (md+) nada muda — todos os ícones continuam visíveis na barra.

### 2. Garantir que Login/Settings/Hamburger nunca somem
- O bloco `[Login] [Settings] [Menu]` fica sempre visível em mobile, em ordem fixa, sem `hidden` classes.
- Adicionar `shrink-0` no container de ações e `truncate` no logo para evitar que o nome empurre os ícones para fora.

### 3. Item "Conteúdo Offline" estritamente PWA-only
Validar com `usePWAStandalone()` (já existe). Continuar omitindo o link no SettingsDrawer/Header quando não for standalone (já é assim em `SettingsDrawer.tsx`, manter). Reforçar a regra no menu mobile:
```tsx
{isStandalone && user && (
  <Link to="/leitura-offline">…Conteúdo Offline…</Link>
)}
```

### 4. Validação visual
Após a edição, capturar screenshot em 390px e 360px para confirmar que:
- Engrenagem ⚙ aparece
- Ícone Entrar aparece
- Hamburger ☰ aparece inteiro
- Dentro do menu hambúrguer: Busca, Offline (se PWA), Social (se admin/preview), nav links, Entrar, Páginas Legais.

## Arquivos a editar
- `src/components/Header.tsx` (único arquivo necessário)

Nenhuma mudança de business logic, rotas ou backend.
