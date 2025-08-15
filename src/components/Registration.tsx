import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { FileText, User, Users, Baby, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const progressValue = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: "Member Information", icon: User },
    { number: 2, title: "Spouse Information", icon: Users },
    { number: 3, title: "Children Information", icon: Baby }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="register" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Member Registration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete your registration in three simple steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.number} className={`flex items-center gap-2 ${
                currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step.number 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'border-muted bg-background'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className="hidden sm:block font-medium text-sm">{step.title}</span>
              </div>
            ))}
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        {/* Registration Form */}
        <Card className="shadow-large border-border/50 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Member Information */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="id-number">ID Number *</Label>
                    <Input id="id-number" placeholder="Enter your ID number" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+254 7XX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="alt-phone">Alternative Phone *</Label>
                    <Input id="alt-phone" placeholder="+254 7XX XXX XXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sex">Gender *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="marital">Marital Status *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="residence">Area of Residence *</Label>
                  <Textarea id="residence" placeholder="Enter your residential area" />
                </div>

                <div>
                  <Label htmlFor="picture">Profile Picture *</Label>
                  <Input id="picture" type="file" accept="image/*" />
                </div>
              </div>
            )}

            {/* Step 2: Spouse Information */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-muted-foreground text-sm">
                  If you're married, please provide your spouse's information. Leave blank if single.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="spouse-name">Spouse Name</Label>
                    <Input id="spouse-name" placeholder="Enter spouse's full name" />
                  </div>
                  <div>
                    <Label htmlFor="spouse-id">Spouse ID Number</Label>
                    <Input id="spouse-id" placeholder="Enter spouse's ID number" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="spouse-phone">Spouse Phone</Label>
                    <Input id="spouse-phone" placeholder="+254 7XX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="spouse-alt">Spouse Alt. Phone</Label>
                    <Input id="spouse-alt" placeholder="+254 7XX XXX XXX" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="spouse-picture">Spouse Picture</Label>
                  <Input id="spouse-picture" type="file" accept="image/*" />
                </div>
              </div>
            )}

            {/* Step 3: Children Information */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <p className="text-muted-foreground text-sm">
                  Add information for up to 6 children. Leave blank if you have no children.
                </p>
                
                {[1, 2].map((childNum) => (
                  <Card key={childNum} className="border-border/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Child {childNum}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`child-${childNum}-name`}>Child Name</Label>
                          <Input id={`child-${childNum}-name`} placeholder="Enter child's name" />
                        </div>
                        <div>
                          <Label htmlFor={`child-${childNum}-dob`}>Date of Birth</Label>
                          <Input id={`child-${childNum}-dob`} type="date" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`child-${childNum}-age`}>Age</Label>
                          <Input id={`child-${childNum}-age`} placeholder="Child's age" />
                        </div>
                        <div>
                          <Label htmlFor={`child-${childNum}-cert`}>Birth Certificate</Label>
                          <Input id={`child-${childNum}-cert`} type="file" accept="image/*" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button variant="outline" className="w-full">
                  + Add More Children
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className={currentStep === 1 ? 'invisible' : ''}
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button variant="hero" onClick={nextStep}>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="success" size="lg">
                  <CheckCircle className="h-4 w-4" />
                  Complete Registration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Registration Info */}
        <div className="mt-8 text-center animate-fade-in">
          <Card className="inline-block p-4 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Registration Fee:</strong> KSh 50 (payable upon form submission)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;