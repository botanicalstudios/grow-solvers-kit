import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import WhyItMattersSection from '@/components/sections/WhyItMattersSection';
import WhereWeWorkSection from '@/components/sections/WhereWeWorkSection';
import MicroPilotsSection from '@/components/sections/MicroPilotsSection';
import GetInvolvedSection from '@/components/sections/GetInvolvedSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setCurrentSection(sectionId);
  };

  // Handle scroll events for active section highlighting and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setShowScrollTop(window.scrollY > 400);

      // Determine current section based on scroll position
      const sections = [
        'home',
        'how-it-works',
        'why-it-matters', 
        'where-we-work',
        'micro-pilots',
        'get-involved',
        'about',
        'contact'
      ];

      let current = 'home';
      
      for (const section of sections) {
        if (section === 'home') continue;
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          current = section;
        }
      }

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onNavigate={scrollToSection} 
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onNavigate={scrollToSection} />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Benefits */}
        <BenefitsSection />

        {/* Why It Matters */}
        <WhyItMattersSection />

        {/* Where We Work */}
        <WhereWeWorkSection />

        {/* Micro-Pilots */}
        <MicroPilotsSection onNavigate={scrollToSection} />

        {/* Get Involved */}
        <GetInvolvedSection onNavigate={scrollToSection} />

        {/* About Jay */}
        <AboutSection onNavigate={scrollToSection} />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Katari Farms</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-4">
                  Empowering food sovereignty in underserved communities through 
                  simple, scalable hydroponic farming.
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  © 2024 Katari Farms. Fighting food insecurity, one community at a time.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>
                    <button 
                      onClick={() => scrollToSection('how-it-works')}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('micro-pilots')}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Micro-Pilots
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('get-involved')}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Get Involved
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      About
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-primary-foreground/80 text-sm">
                  <li>jay@katari.farm</li>
                  <li>Berlin, Germany</li>
                  <li>9470 West Elm Lane, Miramar FL, 33025</li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Send Message
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 shadow-lg"
          variant="cta"
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
