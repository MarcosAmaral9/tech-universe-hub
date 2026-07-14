import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
      // Breadcrumb é renderizado UMA ÚNICA vez em src/components/Layout.tsx.
      // Qualquer outro arquivo que importe quebra o padrão global (topo do <main>).
      "no-restricted-imports": ["error", {
        patterns: [{
          group: ["**/components/Breadcrumb", "@/components/Breadcrumb"],
          message: "Breadcrumb é renderizado apenas em src/components/Layout.tsx. Não importe em páginas/componentes — o Layout já injeta no topo do <main>.",
        }],
      }],
    },
  },
  {
    // Layout.tsx é o ÚNICO arquivo permitido a importar Breadcrumb.
    files: ["src/components/Layout.tsx"],
    rules: { "no-restricted-imports": "off" },
  },
);

