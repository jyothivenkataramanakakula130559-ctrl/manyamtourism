-- Create a storage bucket for photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery-photos', 'gallery-photos', true);

-- Allow anyone to view photos
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-photos');

-- Allow anyone to upload photos (you can restrict this later if needed)
CREATE POLICY "Anyone can upload photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery-photos');