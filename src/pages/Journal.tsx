const Journal = () => {
  const featuredArticle = {
    title: "The Neuroscience of Re-membering: How Embodied Practices Reshape Neural Pathways",
    excerpt: "Recent research in neuroplasticity reveals how somatic practices can literally rewire our brains for healing. This article explores the intersection of neuroscience and embodied wisdom, offering insights into why movement-based therapies are so effective for trauma recovery.",
    category: "Research",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
  };

  const articles = [
    {
      title: "From Academic to Embodied: A Personal Journey",
      excerpt: "A reflection on the transition from purely intellectual inquiry to integrated embodied practice...",
      category: "Storytelling",
      date: "March 10, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Philosophy of 'Enough': Rethinking Productivity Culture",
      excerpt: "Exploring how embodied wisdom challenges our cultural obsession with optimization and performance...",
      category: "Philosophy",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
    {
      title: "Somatic Approaches to Leadership: A Research Review",
      excerpt: "Examining the emerging research on how embodied practices transform leadership capacity...",
      category: "Research",
      date: "February 28, 2024",
      readTime: "12 min read"
    },
    {
      title: "Community Voices: Healing in Relationship",
      excerpt: "Stories from our collective about the power of healing in community and the importance of witness...",
      category: "Community Voices",
      date: "February 22, 2024",
      readTime: "6 min read"
    },
    {
      title: "Breathwork and Nervous System Regulation: A Practical Guide",
      excerpt: "Simple, evidence-based breathing practices for supporting nervous system health in daily life...",
      category: "Somatics",
      date: "February 15, 2024",
      readTime: "4 min read"
    },
    {
      title: "The Ethics of Healing: Cultural Appropriation vs. Appreciation",
      excerpt: "A thoughtful exploration of how to honor indigenous wisdom while creating accessible healing practices...",
      category: "Philosophy",
      date: "February 8, 2024",
      readTime: "9 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Research": "bg-blue-100 text-blue-800",
      "Storytelling": "bg-amber-100 text-amber-800",
      "Philosophy": "bg-purple-100 text-purple-800",
      "Community Voices": "bg-green-100 text-green-800",
      "Somatics": "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Featured Article */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="modern-card overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(featuredArticle.category)}`}>
                  {featuredArticle.category}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-gray-800 mt-4 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Journal
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Research, reflections, and stories from the intersection of academic inquiry and embodied wisdom.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg">All</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">Research</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">Storytelling</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">Philosophy</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">Somatics</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg">Community</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="modern-card group cursor-pointer">
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors leading-tight mt-4 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Never miss a story
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest research, reflections, and community stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;