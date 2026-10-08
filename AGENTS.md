# Architecture Rules

- Keep dynamic and authenticated features on Hostinger PHP/MySQL; do not introduce another backend because production depends on `public/api.php` and the Hostinger database.
- Keep authentication in Secure, HttpOnly, SameSite cookies and derive user identity server-side because client-provided identities are forgeable.
- Keep credentials only in Hostinger `/public_html/.env.php`, never in tracked source or browser storage, because the repository and frontend are public.
- Serve public market history only from an atomically published complete snapshot; only the protected Hostinger cron may call market providers.
- Register each new editorial post in `posts.ts` and `App.tsx`, then derive SEO, sitemaps and feeds from that single post record to prevent metadata drift.
- Public snapshot reads must never create schemas or assemble snapshots; validate all expected series and preserve the last complete publication because incomplete or fabricated prices must not reach visitors.
- Release PHP API changes through a controlled Hostinger upload with private rollback backups alongside matching frontend revisions because the automated FTP deployment deliberately preserves `api.php`.
- Keep weekly ranking failures distinct from empty results and retain validated rankings with a stale notice because service outages must not erase real reading counts.
- Start Google OAuth before database initialization; keep account lookup and session issuance database-backed because authorization URL generation must not depend on unrelated MySQL availability.