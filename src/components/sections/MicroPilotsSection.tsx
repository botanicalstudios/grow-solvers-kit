import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

interface MicroPilotsSectionProps {
  onNavigate: (section: string) => void;
}

const MicroPilotsSection = ({ onNavigate }: MicroPilotsSectionProps) => {
  const phases = [
    {
      phase: "1",
      title: "Community Partnership",
      description: "We identify and partner with local NGOs, schools, or community organizations that can serve as implementation partners.",
      icon: Users
    },
    {
      phase: "2", 
      title: "Demonstration Setup",
      description: "Install a small-scale hydroponic system (about the size of a raised garden bed) as a proof-of-concept and learning tool.",
      icon: Target
    },
    {
      phase: "3",
      title: "Knowledge Transfer",
      description: "Train community members in system maintenance, plant care, and basic hydroponic principles through hands-on workshops.",
      icon: BookOpen
    },
    {
      phase: "4",
      title: "Scale & Replicate",
      description: "Support the community in expanding successful systems and training others, creating a network of local expertise.",
      icon: TrendingUp
    }
  ];

  const benefits = [
    "Low financial risk with high educational value",
    "Builds local capacity and ownership", 
    "Creates visible proof-of-concept for funders",
    "Generates real data on community needs",
    "Establishes trust and partnership foundations",
    "Provides immediate food security benefits"
  ];

  const specs = [
    { label: "Setup Cost", value: "$1,000 - $5,000" },
    { label: "Installation Time", value: "1-2 days" },
    { label: "Training Duration", value: "1 week workshop" },
    { label: "Maintenance", value: "2-3 hours/week" },
    { label: "Expected Yield", value: "20-30 plants ongoing" },
    { label: "ROI Timeline", value: "3-6 months" }
  ];

  return (
    <section id="micro-pilots" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Micro-Pilots Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We start small to think big. Our micro-pilot approach creates immediate impact while 
              building the foundation for larger-scale food security initiatives.
            </p>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Our 4-Phase Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300 relative">
                  {/* Phase Number */}
                  <div className="absolute -top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{phase.phase}</span>
                  </div>
                  
                  <CardHeader className="pt-8">
                    <div className="w-12 h-12 bg-accent-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground text-center">
                      {phase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits and Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Why Micro-Pilots Work
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Pilot Specifications
              </h3>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <div className="space-y-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-border last:border-0 pb-2 last:pb-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Launch a Micro-Pilot?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're an NGO, school, community organization, or funder, 
              we can help you start a micro-pilot that creates immediate impact and long-term change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroPilotsSection;