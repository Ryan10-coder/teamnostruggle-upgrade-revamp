-- Set your registration as approved (pending = false)
UPDATE staff_registrations 
SET pending = false
WHERE email = 'brianokutu@gmail.com' 
  AND staff_role = 'Area Coordinator'
  AND id = '96c0e41b-d4e4-440b-a95b-ccc3bc72d685';

-- Add some sample membership data in your area for testing
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
('John', 'Doe', 'john.doe@example.com', '+254701234567', '123 Main St', 'Nairobi', 'Kenya', '00100', 'Jane Doe', '+254701234568', 'individual'),
('Mary', 'Smith', 'mary.smith@example.com', '+254701234569', '456 Oak Ave', 'Nairobi', 'Kenya', '00200', 'Bob Smith', '+254701234570', 'family'),
('Peter', 'Johnson', 'peter.johnson@example.com', '+254701234571', '789 Pine St', 'Nairobi', 'Kenya', '00300', 'Lisa Johnson', '+254701234572', 'individual');