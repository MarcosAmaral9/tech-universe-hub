DROP POLICY IF EXISTS "Anyone can read comments" ON public.comments;
CREATE POLICY "Users can read own comments" ON public.comments FOR SELECT TO authenticated USING (auth.uid() = user_id);
REVOKE SELECT ON public.comments FROM anon;