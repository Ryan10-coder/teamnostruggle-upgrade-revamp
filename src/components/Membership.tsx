import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, FileText, CreditCard, AlertCircle } from 'lucide-react';
import membershipImage from '@/assets/membership-diversity.jpg';

const Membership = () => {
  const eligibilityRequirements = [
    "Must be 18 years and above",
    "Open to both male and female",
    "No geographical boundaries",
    "Complete registration form required",
    "Administrative fee of KSh 50"
  ];

  const memberRights = [
    "Access to welfare records",
    "Participation in decision-making processes", 
    "Voting rights in group elections",
    "Attendance at Annual General Meetings",
    "Fair treatment and support during bereavement"
  ];

  const dismissalConditions = [
    "Fraudulent activities",
    "Consistent defaulting on contributions",
    "Permanent mental illness",
    "Death of member"
  ];

  return (
    <section id="membership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Membership Information
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community of Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Becoming a member means joining a community that supports each other through life's most challenging moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Membership Cards */}
          <div className="space-y-8 animate-slide-up">
            {/* Eligibility Requirements */}
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  Eligibility Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Member Rights */}
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-success" />
                  </div>
                  Member Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {memberRights.map((right, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{right}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Membership Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={membershipImage} 
                alt="Diverse membership community" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground">Join our diverse community</p>
                  <p className="text-xs text-muted-foreground">Members from all walks of life, united in purpose</p>
                </div>
              </div>
            </div>

            {/* Contribution Details */}
            <Card className="shadow-soft border-border/50 bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-secondary" />
                  </div>
                  Contribution Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="font-semibold text-foreground mb-2">Member Contribution</p>
                    <p className="text-2xl font-bold text-primary">KSh 100</p>
                    <p className="text-sm text-muted-foreground">Per occurrence (or KSh 50 for children below 10)</p>
                  </div>
                  <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                    <p className="font-semibold text-foreground mb-2">Registration Fee</p>
                    <p className="text-xl font-bold text-secondary">KSh 50</p>
                    <p className="text-sm text-muted-foreground">One-time administrative fee</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dismissal Conditions */}
            <Card className="shadow-soft border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-destructive">
                  <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  Important: Dismissal Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dismissalConditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="w-full">
              <FileText className="h-5 w-5" />
              Start Your Registration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;