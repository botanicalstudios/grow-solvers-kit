import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Thermometer, 
  MapPin, 
  TrendingUp, 
  Users, 
  Shield, 
  Heart 
} from 'lucide-react';

const WhyItMattersSection = () => {
  const challenges = [
    {
      icon: Thermometer,
      title: "Climate Vulnerability",
      description: "Rising temperatures, unpredictable rainfall, and extreme weather events threaten traditional farming, especially in vulnerable regions.",
      impact: "Our systems work independently of weather conditions and use 90% less water."
    },
    {
      icon: MapPin,
      title: "Land Contamination",
      description: "Soil pollution, salination, and degraded farmland make traditional agriculture impossible in many areas worldwide.",
      impact: "Soilless growing eliminates contamination risks and works on any surface."
    },
    {
      icon: TrendingUp,
      title: "Rising Food Costs",
      description: "Food prices continue to climb, making nutritious produce inaccessible to low-income communities and urban populations.",
      impact: "Local production reduces costs and creates economic opportunities."
    },
    {
      icon: Users,
      title: "Displaced Communities",
      description: "Refugees, migrants, and urban slum residents often lack access to land or resources for traditional farming.",
      impact: "Portable, space-efficient systems work in temporary or constrained living situations."
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Food Security",
      value: "Fresh vegetables year-round, regardless of external conditions"
    },
    {
      icon: Heart,
      title: "Community Health",
      value: "Improved nutrition and reduced dependence on processed foods"
    },
    {
      icon: Users,
      title: "Economic Empowerment",
      value: "Local food production creates jobs and reduces external dependence"
    },
    {
      icon: Thermometer,
      title: "Climate Resilience",
      value: "Sustainable growing that adapts to changing environmental conditions"
    }
  ];

  return (
    <section id="why-it-matters" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Why This Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Food insecurity affects over 2 billion people worldwide. Traditional farming faces 
              unprecedented challenges, but simple hydroponic systems offer a path to food sovereignty.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Addressing Critical Challenges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                          {challenge.title}
                        </CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent-lighter rounded-lg p-4">
                      <p className="text-accent font-medium">
                        <strong>Our Solution:</strong> {challenge.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Areas */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Creating Lasting Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">2B+</div>
              <p className="text-muted-foreground">People affected by food insecurity globally</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <p className="text-muted-foreground">Less water used compared to soil farming</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <div className="text-3xl font-bold text-secondary mb-2">$50</div>
              <p className="text-muted-foreground">Average cost to start a basic system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;