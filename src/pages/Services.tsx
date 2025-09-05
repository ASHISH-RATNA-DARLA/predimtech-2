import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import PageTransition from "@/components/PageTransition";
import { Settings, Database, ArrowUpDown, Users, Cog, Shield, BookOpen, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Settings,
      title: "Teamcenter Implementation",
      description: "Complete end-to-end implementation services with comprehensive planning, architecture design, and seamless deployment.",
      image: "/Teamcenter Implementation.png",
      features: [
        "Requirements Analysis & Planning",
        "System Architecture Design",
        "Configuration & Customization",
        "Data Migration & Integration",
        "User Training & Change Management"
      ],
      link: "/services/teamcenter-implementation"
    },
    {
      icon: ArrowUpDown,
      title: "Migration & Upgrade",
      description: "Seamless migration from legacy systems and professional upgrade services to latest Teamcenter versions.",
      image: "/Teamcenter Migration .png",
      features: [
        "Legacy System Assessment",
        "Migration Strategy Development",
        "Data Transformation & Validation",
        "Version Upgrade Services",
        "Minimal Downtime Approach"
      ],
      link: "/services/teamcenter-migration"
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Comprehensive integration solutions connecting Teamcenter with existing enterprise systems and applications.",
      image: "/Teamcenter Integration.png",
      features: [
        "ERP System Integration",
        "CAD Tool Connectivity",
        "Third-party App Integration",
        "API Development & Management",
        "Real-time Data Synchronization"
      ],
      link: "/services/teamcenter-integration"
    }
  ];

  const additionalServices = [
    {
      icon: Cog,
      title: "PLM Consulting",
      description: "Strategic consulting to optimize your PLM processes and maximize ROI."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your PLM system meets industry standards and security requirements."
    },
    {
      icon: BookOpen,
      title: "Training & Documentation",
      description: "Comprehensive training programs and detailed documentation for your team."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services."
    }
  ];

  const industries = [
    {
      name: "Automotive",
      description: "Vehicle design, manufacturing, and lifecycle management solutions."
    },
    {
      name: "Aerospace",
      description: "Aircraft design, compliance, and complex product management."
    },
    {
      name: "Industrial Machinery",
      description: "Heavy equipment design and manufacturing optimization."
    },
    {
      name: "Energy & Utilities",
      description: "Power generation equipment and infrastructure management."
    },
    {
      name: "Medical Devices",
      description: "FDA-compliant product development and documentation."
    },
    {
      name: "Electronics",
      description: "Component design and supply chain optimization."
    }
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
                Our Services
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Comprehensive <span className="text-blue-accent">PLM Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-text leading-relaxed mb-8"
              >
                From implementation to integration, we provide end-to-end Siemens Teamcenter PLM solutions 
                tailored to your industry and business requirements.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        </section>

        {/* Main Services */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Core PLM Services
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our flagship services designed to transform your product lifecycle management 
                and drive operational excellence.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Services */}
        <AnimatedSection className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Comprehensive support services to ensure your PLM success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover-lift group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Industry Expertise */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                We bring deep industry knowledge and specialized solutions across various sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                A structured approach ensuring successful PLM implementation and transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Analyze current state and requirements" },
                { step: "02", title: "Strategy", description: "Develop comprehensive implementation plan" },
                { step: "03", title: "Design", description: "Create system architecture and configuration" },
                { step: "04", title: "Implementation", description: "Deploy and configure Teamcenter solution" },
                { step: "05", title: "Support", description: "Ongoing maintenance and optimization" }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-accent transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-text text-sm">
                    {process.description}
                  </p>
                </motion.div>
              ))}
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
              className="max-w-3xl mx-auto glass-card p-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Start Your PLM Journey?
              </h2>
              <p className="text-xl text-gray-text mb-8">
                Let's discuss how our PLM expertise can transform your product lifecycle management 
                and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/46704785940" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold"
                  >
                    WhatsApp Chat
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default Services;
