import { defineConfig, type Plugin } from "vite";
import { componentTagger } from "lovable-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// ── LCP preload images ────────────────────────────────────────────────────────
// Source asset names (without hash) for the 4 carousel slides (one per category).
// The plugin finds the hashed filename at build time and injects <link rel="preload">
// so the browser fetches them before parsing JS — critical for LCP score.
const LCP_IMAGE_PATTERNS = [
  "ia-brasil-adocao-2026",          // ia   (latest: 03 Abr 2026)
  "fiis-defensivos-abril-2026",     // invest (latest: 03 Abr 2026)
  "crimson-desert-personagens",     // geek  (latest: 04 Abr 2026)
  "solo-leveling",                  // otaku (latest: 29 Mar 2026)
];

function lcpPreloadPlugin(): Plugin {
  return {
    name: "lcp-preload",
    apply: "build",
    closeBundle() {
      const distPath = path.resolve(__dirname, "dist");
      const indexPath = path.join(distPath, "index.html");
      if (!fs.existsSync(indexPath)) return;

      const assetsDir = path.join(distPath, "assets");
      const allAssets = fs.readdirSync(assetsDir);

      const preloadTags = LCP_IMAGE_PATTERNS
        .map((pattern) => allAssets.find((f) => f.startsWith(pattern) && f.endsWith(".webp")))
        .filter(Boolean)
        .map((f) => `  <link rel="preload" as="image" href="/assets/${f}" fetchpriority="high" type="image/webp">`)
        .join("\n");

      if (!preloadTags) return;

      let html = fs.readFileSync(indexPath, "utf8");
      // Inject just before </head>
      html = html.replace("</head>", `${preloadTags}\n</head>`);
      fs.writeFileSync(indexPath, html);
      console.log(`✅ LCP preload tags injected (${LCP_IMAGE_PATTERNS.length} images)`);
    },
  };
}


// Plugin: inline critical CSS + make full CSS non-blocking
function criticalCSSPlugin(): Plugin {
  return {
    name: "critical-css",
    apply: "build",
    closeBundle() {
      const distPath = path.resolve(__dirname, "dist");
      if (!fs.existsSync(distPath)) return;

      const indexPath = path.join(distPath, "index.html");
      if (!fs.existsSync(indexPath)) return;

      // Read the generated CSS
      const assetsDir = path.join(distPath, "assets");
      const cssFile = fs.readdirSync(assetsDir).find(f => f.match(/^index-.*\.css$/));
      if (!cssFile) return;

      const fullCSS = fs.readFileSync(path.join(assetsDir, cssFile), "utf8");

      // Extract critical above-fold CSS
      const criticalParts: string[] = [];
      // Tailwind reset
      const reset = fullCSS.match(/\*,:before,:after\{[^}]+\}/);
      if (reset) criticalParts.push(reset[0]);
      // :root variables
      const root = fullCSS.match(/:root\{[^}]+\}/);
      if (root) criticalParts.push(root[0]);
      // .dark overrides
      const darkMatches = fullCSS.matchAll(/\.dark\{[^}]+\}/g);
      for (const dm of darkMatches) criticalParts.push(dm[0]);
      // html/body base
      const html = fullCSS.match(/(?:^|[\s,])html\{([^}]+)\}/);
      if (html) criticalParts.push("html{" + html[1] + "}");
      const body = fullCSS.match(/(?:^|[\s,])body\{([^}]+)\}/);
      if (body) criticalParts.push("body{" + body[1] + "}");
      // Anti-FOUC backgrounds
      criticalParts.push("html{background-color:hsl(0 0% 98%)}html.dark{background-color:hsl(220 25% 6%)}");

      const criticalCSS = criticalParts.join("").replace(/\s{2,}/g, " ").trim();

      // Transform index.html: inline critical + make full CSS non-blocking
      let html_content = fs.readFileSync(indexPath, "utf8");
      const cssLink = `<link rel="stylesheet" crossorigin href="/assets/${cssFile}">`;
      const nonBlockingCSS = [
        `<style id="critical-css">${criticalCSS}</style>`,
        `<link rel="preload" href="/assets/${cssFile}" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
        `<noscript><link rel="stylesheet" href="/assets/${cssFile}"></noscript>`,
      ].join("\n    ");

      html_content = html_content.replace(cssLink, nonBlockingCSS);
      fs.writeFileSync(indexPath, html_content);
      console.log("✅ Critical CSS inlined, full CSS non-blocking");
    },
  };
}

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

# ── Cache: hashed assets (JS/CSS/fonts/images) → 1 year immutable
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  # HTML — short cache so new deploys propagate fast
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Cache-Control: immutable for hashed Vite assets (never revalidate)
<IfModule mod_headers.c>
  <FilesMatch "\.(js|css|woff2|woff)$">
    Header append Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\.(webp|jpg|jpeg|png|svg|ico)$">
    Header append Cache-Control "public, max-age=31536000"
  </FilesMatch>
  # HTML must revalidate on every request
  <FilesMatch "\.html$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
</IfModule>

# Brotli compression (preferred, ~20% better than gzip)
<IfModule mod_brotli.c>
  AddOutputFilterByType BROTLI_COMPRESS text/html text/css application/javascript application/json image/svg+xml font/woff2
</IfModule>

# Gzip compression (fallback when Brotli unavailable)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml font/woff2
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
      // "prompt" allows us to show a custom notification before applying the update
      registerType: "prompt",
      // Inject the virtual module so we can use useRegisterSW in the app
      injectRegister: "auto",
      workbox: {
        // Precache only the shell assets — JS/CSS bundles are hashed so safe to cache
        globPatterns: ["**/*.{js,css,woff2}"],
        cleanupOutdatedCaches: true,
        skipWaiting: false,   // We control this manually via the update prompt
        clientsClaim: true,
        // Runtime caching — makes the app work offline
        runtimeCaching: [
          {
            // HTML pages (navigation requests) — network-first, fallback to cache
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 60, maxAgeSeconds: 7 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Images (WebP/PNG) — cache-first, long TTL
            urlPattern: /\.(?:webp|png|jpg|jpeg|svg|ico)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Fonts — cache-first, very long TTL
            urlPattern: /\/fonts\//i,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-cache",
              expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // External APIs (cotações) — stale-while-revalidate so data never blocks
            urlPattern: /^https:\/\/(api\.coingecko\.com|brapi\.dev|query1\.finance\.yahoo\.com)/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: { maxEntries: 30, maxAgeSeconds: 5 * 60 },
              cacheableResponse: { statuses: [0, 200] },
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
        scope: "/",
        lang: "pt-BR",
        launch_handler: {
          client_mode: "navigate-new",
        },
        icons: [
          { src: "/favicon.ico",      sizes: "64x64",      type: "image/x-icon" },
          { src: "/icon-192x192.png", sizes: "192x192",    type: "image/png",   purpose: "any" },
          { src: "/icon-512x512.png", sizes: "512x512",    type: "image/png",   purpose: "any" },
          { src: "/icon-512x512.png", sizes: "512x512",    type: "image/png",   purpose: "maskable" },
        ],
      },
    }),
    criticalCSSPlugin(),
    lcpPreloadPlugin(),
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
    rollupOptions: {
      output: {
        manualChunks: {
          // Animation — framer-motion is large (~100 kB gzip), isolate for better caching
          "vendor-motion": ["framer-motion"],
          // Query — tanstack is stable between deploys
          "vendor-query": ["@tanstack/react-query"],
          // UI primitives — radix + shadcn components
          "vendor-ui": [
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-dialog",
            "@radix-ui/react-toast",
          ],
        },
      },
    },
  },
}));
