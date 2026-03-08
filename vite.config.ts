import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// Plugin to generate .htaccess in dist folder for Apache (Hostinger)
function htaccessPlugin(): Plugin {
  return {
    name: "generate-htaccess",
    apply: "build",
    closeBundle() {
      const htaccess = `# Prerender.io — serve cached HTML to social media crawlers & bots
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Prerender.io token
  RequestHeader set X-Prerender-Token "Ig0m7uRnxCqA2HPyD0RX"

  # Detect crawlers / bots
  RewriteCond %{HTTP_USER_AGENT} googlebot|bingbot|yandex|baiduspider|facebookexternalhit|facebot|twitterbot|rogerbot|linkedinbot|embedly|quora\\ link\\ preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|whatsapp|Discordbot|TelegramBot [NC,OR]
  RewriteCond %{QUERY_STRING} _escaped_fragment_
  # Don't prerender static files
  RewriteCond %{REQUEST_URI} !\\.(js|css|xml|less|png|jpg|jpeg|webp|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|woff2|svg|eot)$ [NC]
  # Proxy matching requests to prerender.io
  RewriteRule ^(.*) https://service.prerender.io/https://viciocode.com.br/$1 [P,L]

  # SPA fallback
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
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
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
            // Edge functions (exchange rates, b3 quotes) — network first, fallback to cache
            urlPattern: /\/functions\/v1\/(exchange-rates|b3-quotes)/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-data",
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 },
              networkTimeoutSeconds: 5,
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
        icons: [
          { src: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
          { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
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
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip", "@radix-ui/react-popover", "@radix-ui/react-tabs"],
          "vendor-query": ["@tanstack/react-query", "@supabase/supabase-js"],
          "vendor-charts": ["recharts"],
        },
      },
    },
    target: "es2020",
    chunkSizeWarningLimit: 600,
    minify: "esbuild",
    cssCodeSplit: true,
  },
}));
