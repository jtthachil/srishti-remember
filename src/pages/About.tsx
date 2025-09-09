const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About The Re-membering Collective
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our work emerges from the understanding that healing is not about fixing what's broken, 
            but about remembering what was never lost—our inherent wholeness and connection.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8">Our Philosophy</h2>
            <div className="text-gray-700 space-y-6 leading-relaxed">
              <p>
                The word "re-member" invites us to consider healing not as a linear process of repair, 
                but as a practice of remembering—bringing back together the parts of ourselves that 
                have been fragmented by trauma, conditioning, and disconnection from our essential nature.
              </p>
              <p>
                We believe that true healing happens at the intersection of rigorous inquiry and embodied 
                practice, where academic understanding meets the wisdom held in our bodies, our stories, 
                and our communities.
              </p>
              <p>
                Our approach honors both the precision of scientific research and the profound intelligence 
                of indigenous healing traditions, creating spaces where transformation can emerge naturally 
                and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">
            Our work sits at the intersection of:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-amber-600 mb-4">Health</h3>
              <p className="text-gray-600">
                Integrating functional medicine, somatic practices, and nervous system regulation 
                to support whole-person wellbeing.
              </p>
            </div>
            <div className="modern-card p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-amber-600 mb-4">Art</h3>
              <p className="text-gray-600">
                Honoring creativity, storytelling, and expressive practices as essential pathways 
                to healing and self-discovery.
              </p>
            </div>
            <div className="modern-card p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-amber-600 mb-4">Spirituality</h3>
              <p className="text-gray-600">
                Exploring the profound questions of meaning, connection, and purpose that guide 
                us toward our truest expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8">The Founders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Detailed founder biographies and their unique journeys into this work will be featured here, 
            including their academic backgrounds, personal healing journeys, and vision for the collective.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;