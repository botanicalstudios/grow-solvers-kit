import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  MapPin, 
  Users, 
  Building2, 
  DollarSign,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@katarifarms.org",
      description: "Best for detailed project discussions"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Berlin, Germany",
      description: "Central hub for European operations"
    }
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary-lighter rounded-lg flex items-center justify-center">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">
                              {method.title}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {method.detail}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Mail className="h-5 w-5" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Get updates on new pilots, partnerships, and impact stories.
                  </p>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="your@email.com" 
                      className="flex-1"
                    />
                    <Button variant="cta" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, questions, or how you'd like to get involved..."
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full group"
                    >
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Ready to Make an Impact?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {interests.slice(0, 3).map((interest, index) => (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                      <interest.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">
                      {interest.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Get started today
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;