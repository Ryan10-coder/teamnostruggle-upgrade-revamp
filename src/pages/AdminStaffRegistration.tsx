import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { UserCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminStaffRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    staffRole: ''
  });

  const staffRoles = [
    'Advisory Committee',
    'General Coordinator', 
    'Area Coordinator',
    'Secretaries',
    'Customer Service Personel',
    'Organizing Secretary',
    'Treasury',
    'Auditors',
    'Treasurer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate staff role is selected
    if (!formData.staffRole) {
      toast({
        variant: "destructive",
        title: "Staff role required",
        description: "Please select a staff role before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const registrationData = {
        user_id: user?.id || null,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        staff_role: formData.staffRole
      };

      const { error } = await supabase
        .from('staff_registrations')
        .insert(registrationData);

      if (error) throw error;

      toast({
        title: "Staff registration submitted!",
        description: "Your staff registration has been submitted for review. You'll be notified once it's processed.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        staffRole: ''
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <UserCheck className="h-4 w-4" />
              Staff Registration
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Admin Staff Registration
            </h1>
            <p className="text-lg text-muted-foreground">
              Register as a staff member with your designated role in the organization
            </p>
          </div>

          <Card className="shadow-large">
            <CardHeader>
              <CardTitle>Staff Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="staffRole">Staff Role *</Label>
                  <Select 
                    value={formData.staffRole} 
                    onValueChange={(value) => handleInputChange('staffRole', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your staff role" />
                    </SelectTrigger>
                    <SelectContent>
                      {staffRoles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {!formData.staffRole && (
                    <p className="text-sm text-destructive mt-1">Please select a staff role</p>
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Staff Role Information:</h3>
                  <p className="text-sm text-muted-foreground">
                    Each role has specific responsibilities and access permissions within the organization. 
                    Your registration will be reviewed by administrators before approval.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.staffRole}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Staff Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminStaffRegistration;