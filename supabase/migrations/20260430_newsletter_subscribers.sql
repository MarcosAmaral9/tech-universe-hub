-- Newsletter subscribers table
-- Run this in Supabase SQL Editor to activate the newsletter feature

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id           uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  email        text        UNIQUE NOT NULL,
  categories   text[]      DEFAULT '{}',
  confirmed    boolean     DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- RLS: only service role can read; anyone can insert their own email
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Users can view own row" ON newsletter_subscribers
  FOR SELECT TO anon USING (false); -- read via service role only

-- Index for fast email lookup
CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_email_idx ON newsletter_subscribers (lower(email));
