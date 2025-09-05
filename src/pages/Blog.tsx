import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of PLM: Trends Shaping Product Lifecycle Management in 2024",
    excerpt: "Explore the latest trends and innovations in PLM technology, from AI integration to cloud-native solutions, and how they're transforming product development.",
    author: "Pradeep Dakua",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "PLM Trends",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "Teamcenter Implementation Best Practices: Lessons from 100+ Projects",
      excerpt: "Key insights and best practices learned from successfully implementing Teamcenter across diverse industries and organizations.",
      author: "Srinivas Rao Maddukuri",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Implementation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
    },
    {
      title: "PLM Migration Strategies: Avoiding Common Pitfalls",
      excerpt: "A comprehensive guide to successful PLM system migrations, including planning, data transfer, and change management strategies.",
      author: "Pradeep Dakua",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Migration",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop"
    },
    {
      title: "Industry 4.0 and PLM: Integration Opportunities",
      excerpt: "How PLM systems are evolving to support Industry 4.0 initiatives, including IoT integration and smart manufacturing.",
      author: "Srinivas Rao Maddukuri",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Industry 4.0",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    },
    {
      title: "ROI Measurement in PLM Projects: Key Metrics and Methods",
      excerpt: "Understanding how to measure and demonstrate the return on investment of PLM implementations and optimizations.",
      author: "Tapan Dakua",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Business Value",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      title: "Teamcenter Cloud: Benefits and Migration Considerations",
      excerpt: "Exploring the advantages of cloud-based PLM solutions and key considerations for migrating to Teamcenter Cloud.",
      author: "Pradeep Dakua",
      date: "November 15, 2024",
      readTime: "8 min read",
      category: "Cloud PLM",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=300&fit=crop"
    },
    {
      title: "User Adoption Strategies for PLM Success",
      excerpt: "Proven strategies to ensure high user adoption rates and maximize the value of your PLM investment.",
      author: "Sushma Mannam",
      date: "November 8, 2024",
      readTime: "6 min read",
      category: "Change Management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop"
    }
  ];

  const categories = [
    "All Posts",
    "PLM Trends",
    "Implementation", 
    "Migration",
    "Industry 4.0",
    "Business Value",
    "Cloud PLM",
    "Change Management"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-accent/10 to-orange-accent/10 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-orange-accent text-sm font-semibold uppercase tracking-wider mb-4"
              >
                PLM Insights & Expertise
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Knowledge Hub
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-text leading-relaxed"
              >
                Discover the latest insights, best practices, and thought leadership in 
                Product Lifecycle Management from our team of PLM experts.
              </motion.p>
            </div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        </section>

        {/* Featured Post */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Featured Article
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="glass-card overflow-hidden hover-lift group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-blue-accent transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-text mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Blog Categories */}
        <AnimatedSection className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-full border transition-smooth hover:border-blue-accent hover:text-blue-accent ${
                    index === 0 
                      ? 'bg-blue-accent text-white border-blue-accent' 
                      : 'bg-white/50 text-gray-text border-border'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in PLM from our expert team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card overflow-hidden hover-lift group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-accent/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-text mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-text">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-blue-accent hover:text-blue-accent-hover p-0 h-auto font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <Button 
                variant="outline"
                className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white px-8 py-3"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Newsletter Signup */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center glass-card p-12"
            >
              <BookOpen className="h-16 w-16 text-blue-accent mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Stay Updated with PLM Insights
              </h2>
              <p className="text-xl text-gray-text mb-8">
                Subscribe to our newsletter and get the latest PLM trends, best practices, 
                and expert insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/50 border border-border rounded-lg focus:border-blue-accent outline-none transition-smooth"
                />
                <Button className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-6 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-text mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default Blog;