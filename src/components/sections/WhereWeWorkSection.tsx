import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Home, Truck } from 'lucide-react';

const WhereWeWorkSection = () => {
  const regions = [
    {
      title: "South America",
      description: "Working with rural communities affected by climate change and economic challenges",
      focus: "Drought-resistant farming and community empowerment"
    },
    {
      title: "Caribbean",
      description: "Supporting island communities with limited arable land and water resources",
      focus: "Hurricane-resilient food systems and coastal adaptation"
    },
    {
      title: "Sub-Saharan Africa",
      description: "Partnering with communities facing water scarcity and soil degradation",
      focus: "Water-efficient farming and nutrition security"
    }
  ];

  const contexts = [
    {
      icon: Users,
      title: "Refugee Settlements",
      description: "Providing food security solutions for displaced populations with limited resources and temporary living situations."
    },
    {
      icon: Home,
      title: "Urban Slums & Informal Settlements",
      description: "Creating food production opportunities in dense urban areas with limited space and infrastructure."
    },
    {
      icon: MapPin,
      title: "Remote Rural Communities",
      description: "Supporting isolated communities with poor soil quality or limited access to fresh produce markets."
    },
    {
      icon: Truck,
      title: "Disaster-Affected Areas",
      description: "Rapidly deployable food production systems for communities recovering from natural disasters."
    }
  ];

  return (
    <section id="where-we-work" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Where We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our systems are designed to work anywhere, but we focus on communities that need them most—
              places where traditional farming faces the greatest challenges.
            </p>
          </div>

          {/* Geographic Focus */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Regional Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground text-center">
                      {region.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {region.description}
                    </p>
                    <div className="bg-primary-lighter rounded-lg p-3">
                      <p className="text-primary font-medium text-sm">
                        {region.focus}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Contexts */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Community Contexts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contexts.map((context, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-lighter rounded-lg flex items-center justify-center">
                        <context.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {context.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {context.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Impact Statement */}
          <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Building a Global Network
            </h3>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We're not just implementing systems—we're building a movement. Every community we work with 
              becomes part of a growing network of food sovereignty advocates, sharing knowledge and 
              supporting each other across continents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWorkSection;