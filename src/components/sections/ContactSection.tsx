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
  CheckCircle,
  Instagram
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

  const [newsletter, setNewsletter] = useState({
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email body for fresh@katari.farm
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Organization: ${formData.organization}
        Interest: ${formData.interest}
        
        Message:
        ${formData.message}
      `;

      // Here you would typically send to your backend API that handles reCAPTCHA and emails
      console.log('Sending email to fresh@katari.farm:', emailBody);
      
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
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or email us directly at fresh@katari.farm",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
      detail: "fresh@katari.farm",
      description: "Best for detailed project discussions"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Berlin, Germany",
      description: "Central hub for European operations"
    },
    {
      icon: Instagram,
      title: "Instagram",
      detail: "@katarifarm",
      description: "Follow our growing journey and community updates",
      link: "https://instagram.com/katarifarm"
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
                             {method.link ? (
                               <a 
                                 href={method.link} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="text-primary font-medium mb-2 hover:text-primary-light transition-colors block"
                               >
                                 {method.detail}
                               </a>
                             ) : (
                               <p className="text-primary font-medium mb-2">
                                 {method.detail}
                               </p>
                             )}
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
                       disabled={isSubmitting}
                     >
                       {isSubmitting ? 'Sending...' : 'Send Message'}
                       <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;