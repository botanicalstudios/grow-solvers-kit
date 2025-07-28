import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Droplet, Leaf, Beaker } from 'lucide-react';
import hydroponicDiagram from '@/assets/hydroponic-diagram.jpg';

const HowItWorksSection = () => {
  const methods = [
    {
      icon: Droplet,
      title: "Kratky Method",
      description: "The simplest passive hydroponic system. Plants grow in containers with their roots suspended in nutrient solution. No pumps, no electricity.",
      benefits: ["Zero energy required", "Self-regulating", "Perfect for beginners"]
    },
    {
      icon: Leaf,
      title: "NFT (Nutrient Film Technique)",
      description: "A shallow stream of nutrient solution flows past plant roots in sloped channels, using gravity to create circulation.",
      benefits: ["Efficient water use", "Faster growth", "Scalable design"]
    },
    {
      icon: Beaker,
      title: "DWC (Deep Water Culture)",
      description: "Plant roots are suspended in oxygenated nutrient solution, creating ideal growing conditions without soil.",
      benefits: ["Maximum nutrient uptake", "High yields", "Simple maintenance"]
    }
  ];

  const principles = [
    "No soil required - eliminates contamination issues",
    "90% less water than traditional farming",
    "No electricity or pumps needed",
    "Works in any climate or location",
    "Built from locally available materials",
    "Easily taught and replicated"
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How Our Systems Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our passive hydroponic systems use simple, proven techniques that anyone can learn and implement. 
              No complex technology, no expensive equipment—just smart design and natural processes.
            </p>
          </div>

          {/* Diagram */}
          <div className="mb-16">
            <img 
              src={hydroponicDiagram} 
              alt="Hydroponic System Diagram" 
              className="w-full rounded-lg shadow-card"
            />
          </div>

          {/* Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {methods.map((method, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Principles */}
          <div className="bg-card rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Core Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;