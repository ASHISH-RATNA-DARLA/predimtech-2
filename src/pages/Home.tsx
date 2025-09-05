import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Settings, Database, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    "23+ Years PLM Experience",
    "Expert Teamcenter Implementation",
    "Seamless Migration & Integration",
    "24/7 Global Support"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Key Highlights Section */}
      <AnimatedSection className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Why Choose <span className="text-blue-accent">PREDiM TECH</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-text max-w-3xl mx-auto"
            >
              Leading the way in Siemens Teamcenter PLM solutions with unmatched expertise and innovation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover-lift"
              >
                <CheckCircle className="h-12 w-12 text-blue-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">{highlight}</h3>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8">
            <StatsCounter value={23} label="Years Experience" suffix="+" />
            <StatsCounter value={100} label="Projects Completed" suffix="+" />
            <StatsCounter value={15} label="Industries Served" suffix="+" />
            <StatsCounter value={50} label="Happy Clients" suffix="+" />
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive PLM Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Settings,
                title: "Teamcenter Implementation",
                description: "Complete end-to-end implementation services with comprehensive planning, architecture design, and seamless deployment.",
                image: "/Teamcenter Implementation.png",
                features: []
              },
              {
                icon: ArrowUpDown,
                title: "Migration & Upgrade",
                description: "Seamless migration from legacy systems and professional upgrade services to latest Teamcenter versions.",
                image: "/Teamcenter Migration .png",
                features: []
              },
              {
                icon: Database,
                title: "System Integration",
                description: "Comprehensive integration solutions connecting Teamcenter with existing enterprise systems and applications.",
                image: "/Teamcenter Integration.png",
                features: []
              }
            ].map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonial Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-orange-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-text italic mb-8">
                "PREDiM TECH's expertise in Teamcenter implementation exceeded our expectations. 
                Their professional approach and deep technical knowledge made our PLM transformation seamless."
              </blockquote>
              <div className="text-foreground font-semibold">Manufacturing Industry Leader</div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your PLM?
            </h2>
            <p className="text-xl text-gray-text mb-8">
              Let our experts guide you through your Teamcenter journey with proven methodologies and industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-blue-accent-foreground px-8 py-4 text-lg font-semibold"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;