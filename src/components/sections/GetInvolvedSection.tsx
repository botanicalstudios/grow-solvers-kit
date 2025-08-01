import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  Handshake, 
  GraduationCap, 
  Users, 
  Heart,
  Building2,
  ArrowRight
} from 'lucide-react';

interface GetInvolvedSectionProps {
  onNavigate: (section: string) => void;
}

const GetInvolvedSection = ({ onNavigate }: GetInvolvedSectionProps) => {
  const opportunities = [
    {
      icon: DollarSign,
      title: "Micro-Grants",
      range: "$1,000 - $5,000",
      description: "Fund complete pilot installations including materials, training, and initial support for one community.",
      impact: "Directly feeds 10-15 families while building local capacity",
      cta: "Fund a Pilot"
    },
    {
      icon: Handshake,
      title: "NGO Partnerships", 
      range: "Strategic Alliance",
      description: "Partner with us to integrate hydroponic systems into your existing community development programs.",
      impact: "Amplify your food security and sustainability initiatives",
      cta: "Explore Partnership"
    },
    {
      icon: GraduationCap,
      title: "Workshop Sponsorship",
      range: "$500 - $2,000",
      description: "Sponsor community education workshops that train local leaders in hydroponic farming techniques.",
      impact: "Create sustainable knowledge transfer and local expertise",
      cta: "Sponsor Training"
    }
  ];

  const partners = [
    {
      icon: Building2,
      title: "Foundations & Grants",
      description: "Partner with us for larger-scale initiatives and multi-community programs"
    },
    {
      icon: Users,
      title: "Corporate Sponsors",
      description: "Support community programs while advancing your sustainability goals"
    },
    {
      icon: Heart,
      title: "Individual Donors",
      description: "Make a direct impact with contributions of any size"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Collaborate on research, student projects, and educational programs"
    }
  ];

  const fundingLevels = [
    {
      amount: "$1K",
      title: "Community Starter",
      description: "Basic pilot system for small community group",
      includes: ["System materials", "Basic training", "3-month support"]
    },
    {
      amount: "$3K", 
      title: "Village Champion",
      description: "Enhanced system with expanded training program",
      includes: ["Larger system", "Advanced training", "6-month support", "Train-the-trainer component"]
    },
    {
      amount: "$5K",
      title: "Regional Hub",
      description: "Comprehensive installation with replication strategy",
      includes: ["Multiple systems", "Leadership training", "12-month support", "Expansion planning"]
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Get Involved
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in building food sovereignty worldwide. Whether you're a funder, partner organization, 
              or passionate individual, there's a way for you to make a meaningful impact.
            </p>
          </div>

          {/* Main Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {opportunity.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-accent">
                    {opportunity.range}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {opportunity.description}
                  </p>
                  <div className="bg-accent-lighter rounded-lg p-4 mb-6">
                    <p className="text-accent font-medium text-sm">
                      <strong>Impact:</strong> {opportunity.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Funding Levels */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Funding Levels & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundingLevels.map((level, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{level.amount}</div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {level.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {level.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {level.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partner Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Partner Organizations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                      <partner.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {partner.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Create Impact?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every contribution moves us closer to a world where everyone has access to fresh, 
              nutritious food regardless of their circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;