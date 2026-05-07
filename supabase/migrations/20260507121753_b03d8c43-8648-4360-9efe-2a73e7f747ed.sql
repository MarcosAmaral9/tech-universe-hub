-- Allow authenticated users to read and update their own newsletter subscription (matched by email)
CREATE POLICY "Users can read own subscription"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (lower(email) = lower((auth.jwt() ->> 'email')));

CREATE POLICY "Users can update own subscription"
ON public.newsletter_subscribers
FOR UPDATE
TO authenticated
USING (lower(email) = lower((auth.jwt() ->> 'email')))
WITH CHECK (lower(email) = lower((auth.jwt() ->> 'email')));