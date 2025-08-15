import { Button } from '@/components/ui/button';
import { Users, Heart, Shield, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-community.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community support and unity" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-scale-in">
            <Users className="h-4 w-4" />
            Supporting 3,500+ Members
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            United in Support,
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Strong in Community
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Team No Struggle provides reliable financial support during life's most difficult moments, 
            helping families navigate funeral expenses with dignity and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="xl" className="group">
              Join Our Community
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">3,500+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-success" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">KSh 300K</h3>
              <p className="text-muted-foreground">Maximum Support</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
              <div className="flex items-center justify-center mb-3">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Community Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;