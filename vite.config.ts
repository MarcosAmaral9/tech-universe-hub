import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// Plugin to generate .htaccess in dist folder for Apache (Hostinger)
function htaccessPlugin(): Plugin {
  return {
    name: "generate-htaccess",
    apply: "build",
    closeBundle() {
      const htaccess = `# Processar arquivos PHP antes de qualquer reescrita
<FilesMatch "^(api|google-auth)\\.php$">
  SetHandler application/x-httpd-php
</FilesMatch>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Excluir arquivos PHP do SPA fallback (com ou sem query string)
  RewriteRule ^api\\.php$ - [L,QSA]
  RewriteRule ^google-auth\\.php$ - [L,QSA]

  # Bloquear acesso direto ao diretório de cache do PHP
  RewriteRule ^cache/ - [F,L]

  # Serve index.html file directly (avoid 403 on Hostinger when folder exists)
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.+?)/?$ $1.html [L]

  # SPA fallback — redirect all non-file/non-dir requests to index.html
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
`;
      const distPath = path.resolve(__dirname, "dist/.htaccess");
      if (fs.existsSync(path.resolve(__dirname, "dist"))) {
        fs.writeFileSync(distPath, htaccess);
      }
    },
  };
}

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      // JPEG: qualidade 82% — bom balanço visual/tamanho
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
      // WebP: qualidade 82% — formato moderno, ~30% menor que JPEG
      webp: { quality: 82 },
      // PNG: só comprime assets grandes, não os ícones PWA (já são pequenos e ficariam maiores)
      png: { quality: 90 },
      // SVG: usa svgo para limpar SVGs
      svg: {
        plugins: [
          { name: "removeComments" },
          { name: "removeEmptyAttrs" },
          { name: "removeUselessDefs" },
        ],
      },
      // Exclui arquivos que ficam maiores após otimização ou que não devem ser alterados
      exclude: [
        /icon-192x192\.png/,
        /icon-512x512\.png/,
        /favicon\.ico/,
        /og-image\.jpg/,
      ],
      includePublic: true,
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2,jpg}"],
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/~oauth/],
        // Runtime caching strategies
        runtimeCaching: [
          {
            // Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // Google Fonts webfont files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // External API calls (CoinGecko etc.)
            urlPattern: /^https:\/\/api\.coingecko\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "crypto-api",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 15 },
              networkTimeoutSeconds: 5,
            },
          },
          {
            // Navigation requests — cache visited pages
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
        ],
      },
      manifest: {
        name: "VICIO<CODE> - IA, Investimentos, Geek & Otaku",
        short_name: "VICIO<CODE>",
        description: "Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku.",
        theme_color: "#0a0a0a",
        background_color: "#0a0a0a",
        display: "standalone",
        start_url: "/",
        lang: "pt-BR",
        icons: [
          { src: "/favicon.ico",      sizes: "64x64",      type: "image/x-icon" },
          { src: "/icon-192x192.png", sizes: "192x192",    type: "image/png",   purpose: "any" },
          { src: "/icon-512x512.png", sizes: "512x512",    type: "image/png",   purpose: "any" },
          { src: "/icon-512x512.png", sizes: "512x512",    type: "image/png",   purpose: "maskable" },
        ],
      },
    }),
    htaccessPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) return "vendor-react";
            if (id.includes("@radix-ui")) return "vendor-ui";
            if (id.includes("@tanstack")) return "vendor-query";
            if (id.includes("recharts")) return "vendor-charts";
          }
        },
      },
    },
    target: "es2020",
    chunkSizeWarningLimit: 600,
    minify: "oxc",
    cssCodeSplit: true,
  },
}));
