import { useState } from "react";

const Offerings = () => {
  const [activeTab, setActiveTab] = useState("retreats");

  const tabs = [
    { id: "retreats", label: "Retreats" },
    { id: "individual", label: "1-on-1" },
    { id: "programs", label: "Programs" },
    { id: "partnerships", label: "Partnerships" },
    { id: "training", label: "Training" },
    { id: "research", label: "Research" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pathways to Healing & Transformation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer spaces for personal healing and creative transformation through an 
            interdisciplinary approach that honors both intellectual rigor and embodied wisdom.
          </p>
        </div>
      </section>

      {/* Offerings Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "retreats" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  Immersive Retreats & Workshops
                </h2>
                <p className="text-gray-600 mb-6">
                  Multi-day experiences that integrate movement, storytelling, and community building. 
                  Our retreats create containers for deep transformation through embodied practices 
                  and meaningful connection.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h3 className="font-serif font-bold text-gray-800">Upcoming: Spring Renewal Retreat</h3>
                    <p className="text-sm text-gray-500">April 15-18, 2024 • Natural healing sanctuary</p>
                  </div>
                  <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    View All Retreats
                  </button>
                </div>
              </div>
            )}

            {activeTab === "individual" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  One-on-One Consultations
                </h2>
                <p className="text-gray-600 mb-6">
                  Personalized sessions combining movement therapy, yoga, and functional medicine approaches. 
                  We work with you to develop sustainable practices for nervous system regulation and embodied healing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-serif font-bold text-gray-800 mb-2">Movement Therapy</h4>
                    <p className="text-sm text-gray-600">Somatic practices for trauma healing</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-serif font-bold text-gray-800 mb-2">Therapeutic Yoga</h4>
                    <p className="text-sm text-gray-600">Individualized yoga practices</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-serif font-bold text-gray-800 mb-2">Functional Medicine</h4>
                    <p className="text-sm text-gray-600">Holistic health consultations</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Book a Discovery Call
                </button>
              </div>
            )}

            {activeTab === "programs" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  Programs for High-Performing Individuals
                </h2>
                <p className="text-gray-600 mb-6">
                  Tailored containers for founders, creatives, and leaders seeking to regulate their nervous 
                  systems while maintaining peak performance. Our programs focus on sustainable leadership 
                  through embodied practices.
                </p>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Inquire for Your Cohort
                </button>
              </div>
            )}

            {activeTab === "partnerships" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  Institutional Partnerships
                </h2>
                <p className="text-gray-600 mb-6">
                  We collaborate with companies, universities, and organizations to bring embodied healing 
                  practices into institutional settings. Our partnerships focus on creating cultures of 
                  wellbeing and sustainable performance.
                </p>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Partner With Us
                </button>
              </div>
            )}

            {activeTab === "training" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  Facilitator Training & Mentorship
                </h2>
                <p className="text-gray-600 mb-6">
                  Short-term courses for healers, therapists, and facilitators wanting to integrate 
                  our interdisciplinary approach into their practice. Training includes supervision 
                  and ongoing mentorship.
                </p>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Apply for Training
                </button>
              </div>
            )}

            {activeTab === "research" && (
              <div className="modern-card p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-4">
                  Research Labs & Residencies
                </h2>
                <p className="text-gray-600 mb-6">
                  Interdisciplinary residencies exploring the intersection of healing and inquiry. 
                  We welcome researchers, artists, and practitioners interested in collaborative 
                  investigation of embodied healing modalities.
                </p>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Submit Proposal
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;