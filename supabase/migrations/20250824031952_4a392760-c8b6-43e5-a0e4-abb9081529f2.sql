-- Add area assignment to staff registrations table
ALTER TABLE public.staff_registrations 
ADD COLUMN assigned_area TEXT;

-- Create an index for better performance when filtering by area
CREATE INDEX idx_staff_registrations_assigned_area ON public.staff_registrations(assigned_area);
CREATE INDEX idx_membership_registrations_city_state ON public.membership_registrations(city, state);

-- Add RLS policy for area coordinators to view members in their area
CREATE POLICY "Area coordinators can view members in their area"
ON public.membership_registrations
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.staff_registrations sr
    WHERE sr.user_id = auth.uid()
    AND sr.staff_role = 'Area Coordinator'
    AND sr.assigned_area = CONCAT(public.membership_registrations.city, ', ', public.membership_registrations.state)
    AND sr.registration_status = 'approved'
  )
);