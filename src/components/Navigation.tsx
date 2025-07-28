import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'why-it-matters', label: 'Why It Matters' },
    { id: 'where-we-work', label: 'Where We Work' },
    { id: 'micro-pilots', label: 'Micro-Pilots' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'about', label: 'About Jay' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            <Leaf className="h-8 w-8" />
            Katari Farms
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-primary bg-primary-lighter'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="cta" size="sm" onClick={() => onNavigate('get-involved')}>
              Partner with Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-primary bg-primary-lighter'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    onNavigate('get-involved');
                    setIsMenuOpen(false);
                  }}
                >
                  Partner with Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;