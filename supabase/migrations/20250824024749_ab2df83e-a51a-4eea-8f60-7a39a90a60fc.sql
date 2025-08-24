-- Create staff registrations table
CREATE TABLE public.staff_registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  staff_role text NOT NULL CHECK (staff_role IN (
    'Advisory Committee',
    'General Coordinator', 
    'Area Coordinator',
    'Secretaries',
    'Customer Service Personel',
    'Organizing Secretary',
    'Treasury',
    'Auditors',
    'Treasurer'
  )),
  registration_status text DEFAULT 'pending' CHECK (registration_status IN ('pending', 'approved', 'rejected')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.staff_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for staff registrations
CREATE POLICY "Anyone can create staff registrations" 
ON public.staff_registrations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own staff registrations" 
ON public.staff_registrations 
FOR SELECT 
USING ((auth.uid() = user_id) OR (user_id IS NULL));

CREATE POLICY "Users can update their own staff registrations" 
ON public.staff_registrations 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_staff_registrations_updated_at
BEFORE UPDATE ON public.staff_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();