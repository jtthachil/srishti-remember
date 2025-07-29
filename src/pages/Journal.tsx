import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      "Research": "bg-primary text-primary-foreground",
      "Storytelling": "bg-accent text-accent-foreground",
      "Philosophy": "bg-secondary text-secondary-foreground",
      "Community Voices": "bg-muted text-muted-foreground",
      "Somatics": "bg-primary/80 text-primary-foreground"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Featured Article */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <Card className="overflow-hidden shadow-warm max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className={getCategoryColor(featuredArticle.category)} variant="secondary">
                  {featuredArticle.category}
                </Badge>
                <CardTitle className="font-serif text-2xl lg:text-3xl font-bold text-secondary mt-4 mb-4 leading-tight">
                  {featuredArticle.title}
                </CardTitle>
                <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60 mb-6">
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Button variant="default">Read Full Article</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">
                The Journal
              </h1>
              <p className="font-sans text-lg text-foreground/80 max-w-2xl">
                Research, reflections, and stories from the intersection of academic inquiry and embodied wisdom.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="ghost" size="sm">Research</Button>
              <Button variant="ghost" size="sm">Storytelling</Button>
              <Button variant="ghost" size="sm">Philosophy</Button>
              <Button variant="ghost" size="sm">Somatics</Button>
              <Button variant="ghost" size="sm">Community</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <Badge className={getCategoryColor(article.category)} variant="secondary">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-serif text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Never miss a story
          </h2>
          <p className="font-sans text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest research, reflections, and community stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="subtle">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;