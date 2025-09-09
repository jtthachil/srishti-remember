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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            More than a service. A growing community.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe healing happens in relationship. Our collective is a space where researchers, 
            practitioners, creators, and seekers come together to explore what's possible when we 
            remember our wholeness—together.
          </p>
        </div>
      </section>

      {/* Community Gallery Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">
            Moments from Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="h-64 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Workshop Gallery</span>
            </div>
            <div className="h-64 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Retreat Photos</span>
            </div>
            <div className="h-64 bg-gradient-to-br from-orange-400 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Community Events</span>
            </div>
          </div>
          <p className="text-center text-gray-500">
            Authentic moments of connection, learning, and transformation from our gatherings
          </p>
        </div>
      </section>

      {/* Voices from the Collective */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">
            Voices from the Collective
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="modern-card p-8">
                <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">
            Upcoming Gatherings
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="modern-card p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                    Monthly Community Circle
                  </h3>
                  <p className="text-gray-600 mb-2">
                    A virtual gathering for connection, sharing, and collective inquiry
                  </p>
                  <p className="text-sm text-gray-500">
                    First Thursday of each month • 7:00 PM EST
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
                  Join Next Circle
                </button>
              </div>
            </div>

            <div className="modern-card p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                    Spring Embodiment Workshop
                  </h3>
                  <p className="text-gray-600 mb-2">
                    A day-long exploration of seasonal transitions and nervous system support
                  </p>
                  <p className="text-sm text-gray-500">
                    March 21, 2024 • 10:00 AM - 4:00 PM • Local venue
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
                  Register
                </button>
              </div>
            </div>

            <div className="modern-card p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                    Research & Practice Symposium
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Annual gathering bridging academic inquiry and embodied practice
                  </p>
                  <p className="text-sm text-gray-500">
                    June 14-16, 2024 • Registration opens February 1st
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to join our community?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, practitioner, or simply curious about the intersection 
            of inquiry and embodied healing, there's a place for you here.
          </p>
          <button className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            Explore Membership
          </button>
        </div>
      </section>
    </div>
  );
};

export default Collective;