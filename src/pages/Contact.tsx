import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            Let's Connect
          </h1>
          <p className="font-sans text-lg text-foreground/80 max-w-3xl mx-auto">
            For inquiries, partnerships, or to share your story, please reach out. 
            We read every message and look forward to connecting with you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-secondary mb-6">
                  Get in Touch
                </h2>
                <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-8">
                  Whether you're curious about our offerings, interested in partnership opportunities, 
                  or simply want to share your own journey of healing and transformation, we welcome 
                  your connection.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-semibold text-secondary mb-1">Email</h3>
                      <a 
                        href="mailto:hello@re-membering.co" 
                        className="font-sans text-foreground/80 hover:text-primary transition-colors"
                      >
                        hello@re-membering.co
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-semibold text-secondary mb-1">Location</h3>
                      <p className="font-sans text-foreground/80">
                        Based in India • Practicing Globally
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-semibold text-secondary mb-1">Response Time</h3>
                      <p className="font-sans text-foreground/80">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3 font-sans text-foreground/80">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Thoughtful, personalized responses to all inquiries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Discovery calls for potential participants and partners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transparent communication about our processes and offerings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-warm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-sans font-medium text-secondary">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-sans font-medium text-secondary">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-sans font-medium text-secondary">
                      Subject *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Please select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">One-on-One Inquiry</SelectItem>
                        <SelectItem value="retreat">Retreat Information</SelectItem>
                        <SelectItem value="program">Program Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="training">Training & Mentorship</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-sans font-medium text-secondary">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your inquiry, what drew you to our work, or how we might support your journey..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-xs text-foreground/60 font-sans">
                    By submitting this form, you consent to us reaching out to you via email. 
                    We respect your privacy and will never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-secondary text-center mb-12">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-3">
                  How do I know if your offerings are right for me?
                </h3>
                <p className="font-sans text-foreground/80 text-sm">
                  We offer discovery calls for all potential participants. This allows us to understand 
                  your needs and share how our approach might support your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-3">
                  Do you work with people remotely?
                </h3>
                <p className="font-sans text-foreground/80 text-sm">
                  Yes! While we value in-person connection, we offer many services online and have 
                  supported clients globally through virtual sessions and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-3">
                  What's your approach to privacy and confidentiality?
                </h3>
                <p className="font-sans text-foreground/80 text-sm">
                  We maintain the highest standards of confidentiality. All personal information 
                  and session content is kept strictly private and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-3">
                  How can I stay updated on your offerings?
                </h3>
                <p className="font-sans text-foreground/80 text-sm">
                  Join our newsletter for regular updates on new programs, research insights, 
                  and community events. We send thoughtful, infrequent updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;