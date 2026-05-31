
-- 1. Drop public read on profiles; profiles are read server-side via api.php
DROP POLICY IF EXISTS "Anyone can read profiles" ON public.profiles;

-- 2. Tighten newsletter subscribe (replace WITH CHECK true with email format validation)
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND char_length(email) BETWEEN 5 AND 255
    AND email ~* '^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
    AND is_active = true
  );

-- 3. Revoke EXECUTE on SECURITY DEFINER trigger functions from anon/authenticated.
--    These are only invoked by triggers (owned role) and should not be callable via API.
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- 4. Remove broad SELECT policy on storage.objects for avatars.
--    The avatars bucket is public, so files remain accessible via their public URLs
--    (CDN serves them without needing a SELECT RLS policy), but clients can no longer LIST.
DROP POLICY IF EXISTS "Anyone can view avatars" ON storage.objects;

-- 5. Realtime authorization for comments channel — restrict to authenticated subscribers.
ALTER TABLE IF EXISTS realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated can read comments realtime" ON realtime.messages;
CREATE POLICY "Authenticated can read comments realtime"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (true);
