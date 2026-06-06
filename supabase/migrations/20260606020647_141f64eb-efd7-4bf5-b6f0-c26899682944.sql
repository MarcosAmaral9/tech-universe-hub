
DROP POLICY IF EXISTS "Users can read own subscription" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Users can update own subscription" ON public.newsletter_subscribers;

CREATE POLICY "Users can read own subscription"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (
  lower(email) = lower((SELECT u.email FROM auth.users u WHERE u.id = auth.uid()))
);

CREATE POLICY "Users can update own subscription"
ON public.newsletter_subscribers
FOR UPDATE
TO authenticated
USING (
  lower(email) = lower((SELECT u.email FROM auth.users u WHERE u.id = auth.uid()))
)
WITH CHECK (
  lower(email) = lower((SELECT u.email FROM auth.users u WHERE u.id = auth.uid()))
);
