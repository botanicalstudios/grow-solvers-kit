import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Zap, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-farming.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Grow Anywhere.
            <br />
            <span className="text-accent-lighter">Feed Everyone.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Empowering food sovereignty in underserved communities through simple, 
            scalable hydroponic farming that requires no electricity, minimal water, and no soil.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Droplet className="h-6 w-6 text-accent-lighter" />
              <span className="font-medium">90% Less Water</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Zap className="h-6 w-6 text-accent-lighter" />
              <span className="font-medium">No Electricity Needed</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Globe className="h-6 w-6 text-accent-lighter" />
              <span className="font-medium">Works Anywhere</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => onNavigate('get-involved')}
              className="group"
            >
              Partner with Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => onNavigate('how-it-works')}
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-primary-foreground/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;