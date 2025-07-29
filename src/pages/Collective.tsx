import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Collective = () => {
  const testimonials = [
    {
      name: "Maya Patel",
      role: "Creative Director",
      quote: "The integration of research and practice gave me tools I never knew I needed. This community has become my sanctuary for growth and authentic expression.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b188?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. James Rodriguez",
      role: "Researcher",
      quote: "As an academic, I was skeptical of 'embodied' approaches. This work showed me how rigorous scholarship and somatic wisdom can enhance each other beautifully.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sofia Chen",
      role: "Entrepreneur",
      quote: "The nervous system regulation practices transformed not just my personal life, but how I show up as a leader. My team noticed the difference immediately.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            More than a service. A growing community.
          </h1>
          <p className="font-sans text-lg text-foreground/80 max-w-3xl mx-auto">
            We believe healing happens in relationship. Our collective is a space where researchers, 
            practitioners, creators, and seekers come together to explore what's possible when we 
            remember our wholeness—together.
          </p>
        </div>
      </section>

      {/* Community Gallery Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-secondary text-center mb-12">
            Moments from Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="h-64 bg-gradient-primary rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-white font-sans">Workshop Gallery</span>
            </div>
            <div className="h-64 bg-secondary rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-white font-sans">Retreat Photos</span>
            </div>
            <div className="h-64 bg-accent rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-white font-sans">Community Events</span>
            </div>
          </div>
          <p className="text-center font-sans text-foreground/60">
            Authentic moments of connection, learning, and transformation from our gatherings
          </p>
        </div>
      </section>

      {/* Voices from the Collective */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-secondary text-center mb-12">
            Voices from the Collective
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-8">
                  <blockquote className="font-sans text-foreground/80 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-sans font-semibold text-secondary">
                        {testimonial.name}
                      </div>
                      <div className="font-sans text-sm text-foreground/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-secondary text-center mb-12">
            Upcoming Gatherings
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                      Monthly Community Circle
                    </h3>
                    <p className="font-sans text-foreground/80 mb-2">
                      A virtual gathering for connection, sharing, and collective inquiry
                    </p>
                    <p className="font-sans text-sm text-foreground/60">
                      First Thursday of each month • 7:00 PM EST
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0">
                    Join Next Circle
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                      Spring Embodiment Workshop
                    </h3>
                    <p className="font-sans text-foreground/80 mb-2">
                      A day-long exploration of seasonal transitions and nervous system support
                    </p>
                    <p className="font-sans text-sm text-foreground/60">
                      March 21, 2024 • 10:00 AM - 4:00 PM • Local venue
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0">
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                      Research & Practice Symposium
                    </h3>
                    <p className="font-sans text-foreground/80 mb-2">
                      Annual gathering bridging academic inquiry and embodied practice
                    </p>
                    <p className="font-sans text-sm text-foreground/60">
                      June 14-16, 2024 • Registration opens February 1st
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0">
                    Get Notified
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to join our community?
          </h2>
          <p className="font-sans text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, practitioner, or simply curious about the intersection 
            of inquiry and embodied healing, there's a place for you here.
          </p>
          <Button variant="subtle" size="lg">
            Explore Membership
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Collective;