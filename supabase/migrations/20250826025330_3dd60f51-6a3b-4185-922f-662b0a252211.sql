-- Add sample membership registrations in your assigned area (Nairobi, Kenya)
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
  membership_type,
  registration_status,
  payment_status
) VALUES 
('John', 'Doe', 'john.doe@example.com', '+254701234567', '123 Kenyatta Avenue', 'Nairobi', 'Kenya', '00100', 'Jane Doe', '+254701234568', 'individual', 'approved', 'completed'),
('Mary', 'Smith', 'mary.smith@example.com', '+254701234569', '456 Uhuru Highway', 'Nairobi', 'Kenya', '00200', 'Bob Smith', '+254701234570', 'family', 'approved', 'completed'),
('Peter', 'Johnson', 'peter.johnson@example.com', '+254701234571', '789 Moi Avenue', 'Nairobi', 'Kenya', '00300', 'Lisa Johnson', '+254701234572', 'individual', 'pending', 'pending'),
('Grace', 'Wanjiku', 'grace.wanjiku@example.com', '+254701234573', '321 Ngong Road', 'Nairobi', 'Kenya', '00400', 'Samuel Wanjiku', '+254701234574', 'student', 'approved', 'completed'),
('David', 'Kimani', 'david.kimani@example.com', '+254701234575', '654 Valley Road', 'Nairobi', 'Kenya', '00500', 'Lucy Kimani', '+254701234576', 'individual', 'approved', 'pending');