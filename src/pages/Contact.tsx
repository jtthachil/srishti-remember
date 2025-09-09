import { useState } from "react";

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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're curious about our offerings, interested in partnership opportunities, 
                  or simply want to share your own journey of healing and transformation, we welcome 
                  your connection.
                </p>
              </div>

              <div className="space-y-6">
                <div className="modern-card p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:hello@re-membering.co" 
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      hello@re-membering.co
                    </a>
                  </div>
                </div>

                <div className="modern-card p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Based in India • Practicing Globally
                    </p>
                  </div>
                </div>

                <div className="modern-card p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Thoughtful, personalized responses to all inquiries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Discovery calls for potential participants and partners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transparent communication about our processes and offerings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="modern-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-medium text-gray-800 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium text-gray-800 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-medium text-gray-800 mb-1">
                    Subject *
                  </label>
                  <select 
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="individual">One-on-One Inquiry</option>
                    <option value="retreat">Retreat Information</option>
                    <option value="program">Program Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="training">Training & Mentorship</option>
                    <option value="research">Research Collaboration</option>
                    <option value="general">General Question</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium text-gray-800 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your inquiry, what drew you to our work, or how we might support your journey..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-h-[120px] resize-y"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500">
                  By submitting this form, you consent to us reaching out to you via email. 
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="modern-card p-6">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
                How do I know if your offerings are right for me?
              </h3>
              <p className="text-gray-600 text-sm">
                We offer discovery calls for all potential participants. This allows us to understand 
                your needs and share how our approach might support your journey.
              </p>
            </div>

            <div className="modern-card p-6">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
                Do you work with people remotely?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! While we value in-person connection, we offer many services online and have 
                supported clients globally through virtual sessions and programs.
              </p>
            </div>

            <div className="modern-card p-6">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
                What's your approach to privacy and confidentiality?
              </h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards of confidentiality. All personal information 
                and session content is kept strictly private and secure.
              </p>
            </div>

            <div className="modern-card p-6">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
                How can I stay updated on your offerings?
              </h3>
              <p className="text-gray-600 text-sm">
                Join our newsletter for regular updates on new programs, research insights, 
                and community events. We send thoughtful, infrequent updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;