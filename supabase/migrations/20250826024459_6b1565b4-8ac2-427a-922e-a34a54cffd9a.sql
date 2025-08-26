-- Let's just update the assigned_area and user_id without changing registration_status
UPDATE staff_registrations 
SET 
  assigned_area = 'Nairobi, Kenya',
  user_id = (SELECT id FROM auth.users WHERE email = 'brianokutu@gmail.com')
WHERE email = 'brianokutu@gmail.com' 
  AND staff_role = 'Area Coordinator'
  AND id = '96c0e41b-d4e4-440b-a95b-ccc3bc72d685';