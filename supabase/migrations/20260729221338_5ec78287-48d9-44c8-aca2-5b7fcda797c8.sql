DROP POLICY IF EXISTS "Public can read avatars" ON storage.objects;

CREATE POLICY "Users can list own avatar files"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'avatars'
  AND (auth.uid())::text = (storage.foldername(name))[1]
);