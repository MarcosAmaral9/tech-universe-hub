# Architecture Rules

- Keep dynamic and authenticated features on Hostinger PHP/MySQL; do not introduce another backend because production depends on `public/api.php` and the Hostinger database.
- Keep authentication in Secure, HttpOnly, SameSite cookies and derive user identity server-side because client-provided identities are forgeable.
- Keep credentials only in Hostinger `/public_html/.env.php`, never in tracked source or browser storage, because the repository and frontend are public.
- Register each new editorial post in `posts.ts` and `App.tsx`, then derive SEO, sitemaps and feeds from that single post record to prevent metadata drift.