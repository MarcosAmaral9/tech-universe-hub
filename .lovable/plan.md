## Estado atual

Verifiquei o repositório antes de planejar e dois dos três itens já estão prontos das correções anteriores:

1. **`src/components/DynamicSEO.tsx`** — o objeto `PAGE_META` tem **188 chaves únicas, 0 duplicadas**. Nada a fazer.
2. **Componentes `EditorialTake` e `ArticleSources`** — ambos já existem em `src/components/` com `export default` (e `ArticleSources` ainda exporta a interface `ArticleSource`). Nada a fazer.
3. **Check de prebuild** — não existe ainda. É a única coisa que precisa ser implementada.

## O que vou fazer

### Criar `scripts/check-dynamicseo-duplicates.mjs`

Script Node puro (sem dependências novas) que:

- Lê `src/components/DynamicSEO.tsx`.
- Localiza o bloco `const PAGE_META: ... = { ... }`.
- Percorre as chaves de topo (linhas com indentação de 2 espaços no formato `"..."`: `{`).
- Coleta a primeira ocorrência de cada chave e registra qualquer repetição com o número da linha original e da duplicata.
- Se encontrar duplicatas: imprime cada conflito (`chave — linha X duplicada na linha Y`), sai com `process.exit(1)` e aborta o build.
- Se estiver tudo limpo: imprime `✓ DynamicSEO PAGE_META: N chaves únicas` e sai com 0.

### Integrar ao `prebuild` em `package.json`

Encadear o novo check antes do gerador de sitemaps já existente:

```json
"prebuild": "node scripts/check-dynamicseo-duplicates.mjs && node scripts/generate-sitemaps.mjs"
```

Assim qualquer chave repetida que voltar a ser introduzida no `PAGE_META` quebra o build (`npm run build`) antes do Vite começar a compilar, com mensagem clara apontando a linha.

### Por que script dedicado em vez de regra ESLint

- O TypeScript já detecta `TS1117` para literais, mas só durante a compilação — o objetivo do usuário é falhar **antes** do compile.
- A regra `no-dupe-keys` do ESLint cobriria isso, mas exigiria ativar/ajustar a config e rodar o lint inteiro no prebuild (lento). Um script dedicado de ~30 linhas é instantâneo e dá mensagem direcionada ao arquivo certo.

## Arquivos afetados

- **Novo:** `scripts/check-dynamicseo-duplicates.mjs`
- **Editado:** `package.json` (apenas a linha do `prebuild`)
