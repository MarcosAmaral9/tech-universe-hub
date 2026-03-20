import { defineConfig, type Plugin } from "vite";
import { componentTagger } from "lovable-tagger";
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
      const htaccess = `# Force correct MIME types (required for ES modules on Hostinger)
<IfModule mod_mime.c>
  AddType application/javascript .js .mjs
  AddType text/css .css
  AddType image/webp .webp
  AddType font/woff2 .woff2
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>

# Processar arquivos PHP antes de qualquer reescrita
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

export default defineConfig(({ mode }) => ({
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
        "icon-192x192.png",
        "icon-512x512.png",
        "favicon.ico",
        "og-image.jpg",
      ],
      includePublic: true,
    }),
    VitePWA({
      registerType: "autoUpdate",
      // Empty globPatterns = no JS/CSS precaching = no stale bundle white screen
      workbox: {
        globPatterns: [],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        // Do NOT use navigateFallback — it intercepts all navigation and can serve stale HTML
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
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",
    cssCodeSplit: true,
  },
}));
