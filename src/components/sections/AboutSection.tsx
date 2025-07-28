import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Globe, 
  Users, 
  Award,
  Linkedin,
  Mail
} from 'lucide-react';
import jayImage from '@/assets/jay-barros.jpg';

interface AboutSectionProps {
  onNavigate: (section: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  const achievements = [
    {
      icon: Globe,
      title: "International Experience",
      description: "Built grassroots partnerships across Europe, Africa, and Latin America"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "15+ years working directly with underserved communities"
    },
    {
      icon: Award,
      title: "Social Innovation",
      description: "Recognized for developing accessible technology solutions"
    },
    {
      icon: MapPin,
      title: "Berlin-Based",
      description: "Operating from Europe's social innovation hub"
    }
  ];

  const timeline = [
    {
      year: "2010-2015",
      title: "Community Development Foundation",
      description: "Worked with NGOs across Latin America on sustainable development projects"
    },
    {
      year: "2016-2020", 
      title: "Food Security Research",
      description: "Studied accessible agriculture solutions for climate-vulnerable communities"
    },
    {
      year: "2021-2023",
      title: "Hydroponic Innovation",
      description: "Developed and tested low-tech hydroponic systems in multiple countries"
    },
    {
      year: "2024",
      title: "Katari Farms Launch",
      description: "Founded Katari Farms to scale food sovereignty solutions globally"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About Jay Barros
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A social entrepreneur on a mission to fight food insecurity using 
              ultra-accessible hydroponic technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Photo and Bio */}
            <div>
              <div className="mb-8">
                <img 
                  src={jayImage} 
                  alt="Jay Barros" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-card"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Jay Barros is a Berlin-based social entrepreneur dedicated to democratizing food production 
                  through innovative yet accessible technology. With over a decade of experience in international 
                  development, Jay has witnessed firsthand how climate change and economic instability threaten 
                  food security in vulnerable communities.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  His approach is rooted in the belief that the most effective solutions are often the simplest ones. 
                  Rather than high-tech fixes, Jay focuses on low-tech innovations that communities can understand, 
                  maintain, and replicate independently.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  Through Katari Farms, Jay is building a global network of communities empowered with the 
                  knowledge and tools to achieve food sovereignty, one micro-pilot at a time.
                </p>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" className="group">
                    <Linkedin className="h-4 w-4 group-hover:text-primary" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onNavigate('contact')}
                    className="group"
                  >
                    <Mail className="h-4 w-4 group-hover:text-primary" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            {/* Achievements and Timeline */}
            <div className="space-y-12">
              {/* Key Achievements */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                            <achievement.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2">
                              {achievement.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  Journey to Katari Farms
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-16 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="text-sm font-medium text-accent mb-1">
                          {item.year}
                        </div>
                        <h4 className="font-bold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              "Food sovereignty isn't just about feeding people—it's about empowering communities 
              to control their own food systems and futures."
            </h3>
            <p className="text-lg text-muted-foreground">
              — Jay Barros, Founder of Katari Farms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;