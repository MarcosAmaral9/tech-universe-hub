import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Code splitting for better caching & smaller initial load
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libs — cached long-term
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // UI framework
          "vendor-ui": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip", "@radix-ui/react-popover", "@radix-ui/react-tabs"],
          // Data fetching
          "vendor-query": ["@tanstack/react-query", "@supabase/supabase-js"],
          // Charts (heavy, rarely needed on initial load)
          "vendor-charts": ["recharts"],
        },
      },
    },
    // Target modern browsers for smaller output
    target: "es2020",
    // Increase chunk size warning to avoid noise
    chunkSizeWarningLimit: 600,
    // Better minification
    minify: "esbuild",
    // CSS code splitting
    cssCodeSplit: true,
  },
}));
