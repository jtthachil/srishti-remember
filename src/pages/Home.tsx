import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-healing.jpg";
import foundersImage from "@/assets/founders-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.4), rgba(44, 62, 80, 0.4)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Healing is a process of Re-membering.
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            We bridge academic and indigenous knowledge to explore the multidimensionality of healing through body, story, and community.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/offerings">Explore Our Offerings</Link>
          </Button>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                  Academic Inquiry
                </h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  Grounded in social sciences, philosophy, and functional medicine, we approach healing with rigorous research and evidence-based practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                  Embodied Wisdom
                </h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  Integrating yoga, somatic movement, and breathwork to honor the body's innate intelligence and capacity for healing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                  Relational Care
                </h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  Fostering healing in community and conversation, recognizing that transformation happens in relationship with others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offerings Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">
              Pathways to Transformation
            </h2>
            <p className="font-sans text-lg text-foreground/80 max-w-2xl mx-auto">
              Discover the offerings that resonate with your journey of healing and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="h-48 bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-2">
                  Immersive Retreats
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-4">
                  Transformative experiences that weave together movement, story, and community.
                </p>
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="h-48 bg-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-2">
                  One-on-One Sessions
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-4">
                  Personalized healing journeys through movement, yoga, and functional medicine.
                </p>
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="h-48 bg-accent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-2">
                  Leadership Programs
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-4">
                  Tailored containers for high-performing individuals seeking nervous system regulation.
                </p>
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="h-48 bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-secondary mb-2">
                  Research Labs
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-4">
                  Interdisciplinary residencies exploring the intersection of healing and inquiry.
                </p>
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet The Founders */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={foundersImage}
                alt="The founders of The Re-membering Collective"
                className="w-full h-auto rounded-lg shadow-warm"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary">
                Founded at the Intersection of Inquiry and Practice
              </h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                We are researchers, practitioners, and storytellers who believe that healing happens 
                when we remember our wholeness—not just as individuals, but as part of a larger web 
                of connection. Our work bridges the rigorous inquiry of academia with the embodied 
                wisdom of indigenous healing traditions.
              </p>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Through our shared journey in movement, research, and community building, we've 
                discovered that true transformation emerges when we honor both the mind's need for 
                understanding and the body's innate wisdom.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl italic font-medium mb-6 max-w-4xl mx-auto leading-relaxed">
            "This work changed not just how I understand healing, but how I inhabit my own body and 
            show up in relationship. The integration of research and embodied practice created a 
            container for transformation I never knew was possible."
          </blockquote>
          <cite className="font-sans text-accent">
            — Sarah Chen, Founder's Cohort Participant
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">
            The Journal: Research, Reflections, and Stories
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our ongoing inquiries into healing, transformation, and the spaces where 
            academic rigor meets embodied wisdom.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/journal">Start Reading</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;