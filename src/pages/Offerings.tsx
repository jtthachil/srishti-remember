import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Offerings = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            Pathways to Healing & Transformation
          </h1>
          <p className="font-sans text-lg text-foreground/80 max-w-3xl mx-auto">
            We offer spaces for personal healing and creative transformation through an 
            interdisciplinary approach that honors both intellectual rigor and embodied wisdom.
          </p>
        </div>
      </section>

      {/* Offerings Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="retreats" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
              <TabsTrigger value="retreats">Retreats</TabsTrigger>
              <TabsTrigger value="individual">1-on-1</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            <TabsContent value="retreats" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    Immersive Retreats & Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    Multi-day experiences that integrate movement, storytelling, and community building. 
                    Our retreats create containers for deep transformation through embodied practices 
                    and meaningful connection.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-serif font-bold text-secondary">Upcoming: Spring Renewal Retreat</h3>
                      <p className="font-sans text-sm text-foreground/70">April 15-18, 2024 • Natural healing sanctuary</p>
                    </div>
                    <Button variant="default">View All Retreats</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="individual" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    One-on-One Consultations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    Personalized sessions combining movement therapy, yoga, and functional medicine approaches. 
                    We work with you to develop sustainable practices for nervous system regulation and embodied healing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 border border-muted rounded-lg">
                      <h4 className="font-serif font-bold text-secondary mb-2">Movement Therapy</h4>
                      <p className="font-sans text-sm text-foreground/70">Somatic practices for trauma healing</p>
                    </div>
                    <div className="p-4 border border-muted rounded-lg">
                      <h4 className="font-serif font-bold text-secondary mb-2">Therapeutic Yoga</h4>
                      <p className="font-sans text-sm text-foreground/70">Individualized yoga practices</p>
                    </div>
                    <div className="p-4 border border-muted rounded-lg">
                      <h4 className="font-serif font-bold text-secondary mb-2">Functional Medicine</h4>
                      <p className="font-sans text-sm text-foreground/70">Holistic health consultations</p>
                    </div>
                  </div>
                  <Button variant="default">Book a Discovery Call</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    Programs for High-Performing Individuals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    Tailored containers for founders, creatives, and leaders seeking to regulate their nervous 
                    systems while maintaining peak performance. Our programs focus on sustainable leadership 
                    through embodied practices.
                  </p>
                  <Button variant="default">Inquire for Your Cohort</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partnerships" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    Institutional Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    We collaborate with companies, universities, and organizations to bring embodied healing 
                    practices into institutional settings. Our partnerships focus on creating cultures of 
                    wellbeing and sustainable performance.
                  </p>
                  <Button variant="default">Partner With Us</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    Facilitator Training & Mentorship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    Short-term courses for healers, therapists, and facilitators wanting to integrate 
                    our interdisciplinary approach into their practice. Training includes supervision 
                    and ongoing mentorship.
                  </p>
                  <Button variant="default">Apply for Training</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-secondary">
                    Research Labs & Residencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    Interdisciplinary residencies exploring the intersection of healing and inquiry. 
                    We welcome researchers, artists, and practitioners interested in collaborative 
                    investigation of embodied healing modalities.
                  </p>
                  <Button variant="default">Submit Proposal</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Offerings;