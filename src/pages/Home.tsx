import { Link } from "react-router-dom";
import heroImage from "../assets/hero-healing.jpg";
import foundersImage from "../assets/founders-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-8 leading-tight fade-in-up">
            Healing is a process of <span className="text-amber-400">Re-membering</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
            We bridge academic and indigenous knowledge to explore the multidimensionality of healing through body, story, and community.
          </p>
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/offerings" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Explore Our Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three pillars that guide our healing philosophy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Inquiry */}
            <div className="modern-card text-center p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Inquiry</h3>
              <p className="text-gray-600 leading-relaxed">
                Grounded in social sciences, philosophy, and functional medicine, we approach healing with rigorous research and evidence-based practices.
              </p>
            </div>

            {/* Embodied Wisdom */}
            <div className="modern-card text-center p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Embodied Wisdom</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrating yoga, somatic movement, and breathwork to honor the body's innate intelligence and capacity for healing.
              </p>
            </div>

            {/* Relational Care */}
            <div className="modern-card text-center p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Relational Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering healing in community and conversation, recognizing that transformation happens in relationship with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pathways to Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the offerings that resonate with your journey of healing and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Immersive Retreats */}
            <div className="modern-card group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Immersive Retreats</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Transformative experiences that weave together movement, story, and community.
                </p>
                <Link to="/offerings" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* One-on-One Sessions */}
            <div className="modern-card group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">One-on-One Sessions</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Personalized healing journeys through movement, yoga, and functional medicine.
                </p>
                <Link to="/offerings" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Leadership Programs */}
            <div className="modern-card group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Leadership Programs</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Tailored containers for high-performing individuals seeking nervous system regulation.
                </p>
                <Link to="/offerings" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Research Labs */}
            <div className="modern-card group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Research Labs</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Interdisciplinary residencies exploring the intersection of healing and inquiry.
                </p>
                <Link to="/offerings" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Founders */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={foundersImage}
                alt="The founders of The Re-membering Collective"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Founded at the Intersection of <span className="text-amber-600">Inquiry and Practice</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are researchers, practitioners, and storytellers who believe that healing happens 
                when we remember our wholeness—not just as individuals, but as part of a larger web 
                of connection. Our work bridges the rigorous inquiry of academia with the embodied 
                wisdom of indigenous healing traditions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our shared journey in movement, research, and community building, we've 
                discovered that true transformation emerges when we honor both the mind's need for 
                understanding and the body's innate wisdom.
              </p>
              <Link 
                to="/about" 
                className="inline-block px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-4xl italic font-light mb-8 max-w-5xl mx-auto leading-relaxed">
            "This work changed not just how I understand healing, but how I inhabit my own body and 
            show up in relationship. The integration of research and embodied practice created a 
            container for transformation I never knew was possible."
          </blockquote>
          <cite className="text-amber-400 text-lg font-semibold">
            — Sarah Chen, Founder's Cohort Participant
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-healing">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The Journal: Research, Reflections, and Stories
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore our ongoing inquiries into healing, transformation, and the spaces where 
            academic rigor meets embodied wisdom.
          </p>
          <Link 
            to="/journal" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            Start Reading
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;