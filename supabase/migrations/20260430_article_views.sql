-- Tabela de visualizações por artigo para o widget "Mais Lidos"
-- Execute no Supabase SQL Editor

CREATE TABLE IF NOT EXISTS article_views (
  slug        text        PRIMARY KEY,
  title       text        NOT NULL,
  category    text        NOT NULL,
  views       bigint      DEFAULT 1,
  last_viewed timestamptz DEFAULT now()
);

-- RLS: qualquer um pode incrementar e ler
ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read"   ON article_views FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public upsert" ON article_views FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public update" ON article_views FOR UPDATE TO anon USING (true);

-- View para top artigos por categoria
CREATE OR REPLACE VIEW top_articles AS
  SELECT slug, title, category, views
  FROM   article_views
  ORDER  BY views DESC;
