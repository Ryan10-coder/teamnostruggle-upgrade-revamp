import { Card } from '@/components/ui/card';
import { Users, DollarSign, Clock, MapPin } from 'lucide-react';
import supportImage from '@/assets/support-hands.jpg';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "3,500+ Members",
      description: "A large, diverse community united in purpose"
    },
    {
      icon: DollarSign,
      title: "KSh 100 Contribution",
      description: "Small individual contributions create significant collective support"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We're here when families need us most"
    },
    {
      icon: MapPin,
      title: "No Boundaries",
      description: "Open to members from all locations and backgrounds"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              About Our Mission
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Compassionate Support When It Matters Most
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Team No Struggle is a benevolent welfare group dedicated to providing 
              financial support during funeral processes. Through collective contributions, 
              we ensure no family faces these difficult times alone.
            </p>

            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Financial Support Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Principal Members, Spouses & Parents</span>
                  <span className="font-semibold text-success">Up to KSh 300,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Children (below 10 years)</span>
                  <span className="font-semibold text-success">Up to KSh 150,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-muted-foreground">Member Contribution</span>
                  <span className="font-semibold text-primary">KSh 100 per occurrence</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={supportImage} 
                alt="Community members supporting each other" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 p-4 shadow-large bg-card border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Active Members</p>
                  <p className="text-2xl font-bold text-success">3,500+</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;