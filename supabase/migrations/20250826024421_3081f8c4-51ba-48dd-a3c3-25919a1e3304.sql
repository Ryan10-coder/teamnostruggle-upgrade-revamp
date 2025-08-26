-- Update the Area Coordinator registration to approved status and assign an area
UPDATE staff_registrations 
SET 
  assigned_area = 'Nairobi, Kenya',
  user_id = (SELECT id FROM auth.users WHERE email = 'brianokutu@gmail.com')
WHERE email = 'brianokutu@gmail.com' 
  AND staff_role = 'Area Coordinator'
  AND id = '96c0e41b-d4e4-440b-a95b-ccc3bc72d685';

-- Add some sample membership registrations for testing the portal
INSERT INTO membership_registrations (
  first_name, 
  last_name, 
  email, 
  phone, 
  address, 
  city, 
  state, 
  zip_code, 
  emergency_contact_name, 
  emergency_contact_phone, 
  membership_type
) VALUES 
('John', 'Doe', 'john.doe@example.com', '+254701234567', '123 Main St', 'Nairobi', 'Kenya', '00100', 'Jane Doe', '+254701234568', 'Individual'),
('Mary', 'Smith', 'mary.smith@example.com', '+254701234569', '456 Oak Ave', 'Nairobi', 'Kenya', '00200', 'Bob Smith', '+254701234570', 'Family'),
('Peter', 'Johnson', 'peter.johnson@example.com', '+254701234571', '789 Pine St', 'Nairobi', 'Kenya', '00300', 'Lisa Johnson', '+254701234572', 'Individual');