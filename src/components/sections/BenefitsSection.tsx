import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Droplet, 
  TrendingUp, 
  Calendar, 
  Award,
  Leaf,
  DollarSign 
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Droplet,
      title: "Exceptional Resource Efficiency",
      description: "Water Savings: Uses up to 90% less water than traditional farming by recycling nutrient-rich water, critical for regions facing droughts or water scarcity.",
      detail: "Space Optimization: Vertical farming enables 3-10x higher yields per square meter, ideal for urban expansion."
    },
    {
      icon: TrendingUp,
      title: "Higher Yields & Faster Growth",
      description: "Crops grow up to 2x faster with 20-25% higher yields compared to soil-based methods. For example, hydroponic lettuce yields can be 20x higher per acre.",
      detail: "Premium Quality & Safety: Eliminates soil-borne diseases and pesticides, often resulting in enhanced flavor and nutrition."
    },
    {
      icon: Calendar,
      title: "Year-Round, Climate-Resilient Production",
      description: "Grow crops regardless of external weather, ensuring stable supply even during monsoon seasons or extreme heat.",
      detail: "Economic Scalability: Shorter supply chains reduce transportation costs, and urban farms can deliver fresher produce to local markets."
    }
  ];

  const crops = [
    {
      icon: Leaf,
      title: "Leafy Greens (Lettuce, Kale, Spinach, Bok Choy)",
      description: "Fast-growing (3-4 weeks), high yields, and popular in urban markets.",
      stats: "Hydroponic lettuce yields up to 20x higher per hectare than soil farming, with test models producing 35-48 tonnes per 1,000 m² in controlled environments."
    },
    {
      icon: Award,
      title: "Herbs (Basil, Cilantro, Dill)",
      description: "High value (€28-€41/kg) and ideal for compact vertical systems. Basil thrives under LED lights, achieving premium pricing.",
      stats: "Example: Basil sells for ~€28/kg (€12.88/lb converted to €/kg at 1 lb = 0.4536 kg; exchange rate: $1 = €0.92)."
    },
    {
      icon: TrendingUp,
      title: "Strawberries",
      description: "Year-round demand with off-season premiums. Pilot projects report 33% water savings and 35% fertilizer reduction in hydroponic systems.",
      stats: "Efficiency: pilot projects report 33% water savings and 35% fertilizer reduction in hydroponic systems."
    },
    {
      icon: DollarSign,
      title: "Tomatoes & Cucumbers",
      description: "Resilient in controlled environments. Hydroponic tomatoes achieve 30% faster growth cycles, with yields up to 2-5x higher per m² than traditional methods.",
      stats: "Market Share: Tomatoes dominate Vietnam's hydroponic crop segment, driven by demand in urban centers."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Key Benefits of Hydroponic Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our hydroponic systems deliver exceptional results across resource efficiency, 
              yield optimization, and economic sustainability.
            </p>
          </div>

          {/* Main Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-lighter rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground text-center">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-secondary-lighter rounded-lg p-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* High-Demand Crops */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              High-Demand, High-Profit Crops
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {crops.map((crop, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                      <crop.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {crop.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {crop.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-accent-lighter rounded-lg p-3">
                    <p className="text-accent text-sm font-medium">
                      <strong>Stats:</strong> {crop.stats}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">90%</div>
              <p className="text-muted-foreground text-sm">Less Water Usage</p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-secondary mb-2">2x</div>
              <p className="text-muted-foreground text-sm">Faster Growth</p>
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">20x</div>
              <p className="text-muted-foreground text-sm">Higher Yields</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">365</div>
              <p className="text-muted-foreground text-sm">Days Growing Season</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
