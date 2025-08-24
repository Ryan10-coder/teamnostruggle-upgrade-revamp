-- Add new fields to membership_registrations table
ALTER TABLE public.membership_registrations 
ADD COLUMN id_number text,
ADD COLUMN alternative_phone text,
ADD COLUMN sex text CHECK (sex IN ('Male', 'Female')),
ADD COLUMN marital_status text CHECK (marital_status IN ('Single', 'Married', 'Divorced')),
ADD COLUMN profile_picture_url text;

-- Create storage bucket for profile pictures
INSERT INTO storage.buckets (id, name, public) 
VALUES ('member-profiles', 'member-profiles', true);

-- Create storage policies for member profile pictures
CREATE POLICY "Anyone can view member profile pictures" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'member-profiles');

CREATE POLICY "Users can upload their own profile pictures" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'member-profiles');

CREATE POLICY "Users can update their own profile pictures" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'member-profiles');

CREATE POLICY "Users can delete their own profile pictures" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'member-profiles');