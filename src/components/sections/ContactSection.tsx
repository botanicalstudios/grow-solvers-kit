import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Send, 
  Users,
  Building2,
  DollarSign
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load reCAPTCHA
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      } else {
        setTimeout(loadRecaptcha, 100);
      }
    };
    loadRecaptcha();
  }, []);

  const executeRecaptcha = async (): Promise<string | null> => {
    if (!recaptchaLoaded || !window.grecaptcha) {
      console.error('reCAPTCHA not loaded');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute('6LfYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY', { action: 'contact_form' });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha();
      if (!recaptchaToken) {
        toast({
          title: "Error",
          description: "Security verification failed. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Send contact message
      const { data, error } = await supabase.functions.invoke('send-contact-message', {
        body: {
          ...formData,
          recaptchaToken,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('newsletter-email') as string;

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha();
      if (!recaptchaToken) {
        toast({
          title: "Error",
          description: "Security verification failed. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Subscribe to newsletter
      const { data, error } = await supabase.functions.invoke('handle-newsletter-subscription', {
        body: {
          email,
          recaptchaToken,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      const message = error.message === 'Email already subscribed' 
        ? "You're already subscribed to our newsletter!" 
        : "Failed to subscribe. Please try again.";
      
      toast({
        title: error.message === 'Email already subscribed' ? "Already subscribed" : "Error",
        description: message,
        variant: error.message === 'Email already subscribed' ? "default" : "destructive",
      });
    }
  };

  const interests = [
    { value: "funding", label: "Funding a Micro-Pilot", icon: DollarSign },
    { value: "partnership", label: "NGO Partnership", icon: Building2 },
    { value: "volunteer", label: "Volunteering", icon: Users },
    { value: "media", label: "Media Inquiry", icon: Mail },
    { value: "other", label: "Other", icon: Mail }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to join the movement for food sovereignty? Whether you're interested in funding, 
              partnership, or learning more about our work, we'd love to hear from you.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay Connected
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Get updates on our latest projects, farming innovations, and opportunities to get involved in building food sovereignty.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  name="newsletter-email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground text-center">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organization" className="text-foreground">Organization</Label>
                    <Input 
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={(e) => handleChange('organization', e.target.value)}
                      placeholder="NGO, Foundation, Company, etc."
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-foreground">I'm interested in *</Label>
                    <select 
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={(e) => handleChange('interest', e.target.value)}
                      required
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your interest</option>
                      {interests.map((interest) => (
                        <option key={interest.value} value={interest.value}>
                          {interest.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={6}
                      placeholder="Tell us about your project, questions, or how you'd like to get involved..."
                      className="mt-2"
                    />
                  </div>

                   <Button 
                     type="submit" 
                     className="w-full group"
                     disabled={isSubmitting}
                   >
                     {isSubmitting ? 'Sending...' : 'Send Message'}
                     <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;