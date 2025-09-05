import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Settings, Database, Users, FileText, Clipboard, Wrench, Shield } from "lucide-react";

const TeamcenterImplementation = () => {
  const expertise = [
    {
      icon: Database,
      title: "Engineering Data Management",
      description: "Comprehensive management of engineering data and documentation"
    },
    {
      icon: Settings,
      title: "BOM & Product Configuration Management",
      description: "Advanced bill of materials and product configuration control"
    },
    {
      icon: Clipboard,
      title: "Change Management",
      description: "Streamlined change request and approval processes"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized document control and version management"
    },
    {
      icon: Clipboard,
      title: "Requirement Management",
      description: "Requirements traceability and management solutions"
    },
    {
      icon: Wrench,
      title: "Manufacturing Data Management",
      description: "Manufacturing process and production data control"
    },
    {
      icon: Shield,
      title: "Material & Substance Compliance",
      description: "Regulatory compliance and material management"
    }
  ];

  const services = [
    "Solutions Alignment",
    "Solutions Architecture", 
    "Solutions Configuration and Customization"
  ];

  const supportedProducts = [
    "Teamcenter",
    "Active Workspace"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-accent/10 to-orange-accent/10 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Link to="/services">
                  <Button variant="outline" className="mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Services
                  </Button>
                </Link>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-orange-accent text-sm font-semibold uppercase tracking-wider mb-4">
                    Core Service
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Teamcenter <span className="text-blue-accent">Implementation</span>
                  </h1>
                  <p className="text-xl text-gray-text leading-relaxed mb-8">
                    Welcome to our Teamcenter Implementation Services, where every aspect is meticulously crafted for your success. 
                    From precise solutions alignment to expert-level architecture, we deliver comprehensive services tailored to your unique needs.
                  </p>
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                    >
                      Start Your Implementation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
                      <img 
                        src="/Teamcenter Implementation-1.png" 
                        alt="Teamcenter Implementation Process"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent"></div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
                      <img 
                        src="/Teamcenter Implementation-2.png" 
                        alt="Teamcenter Architecture"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-accent/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Expertise in Teamcenter Implementation
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Services for Successful Implementation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 text-center hover-lift group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-accent transition-colors">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Domains/Modules Expertise */}
        <AnimatedSection className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Domains/Modules Expertise
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our domains/modules expertise covers a spectrum of critical functionalities, ensuring your project's seamless progress.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Supported Products */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Supported Products
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                As trusted experts, we also offer support for Teamcenter and Active Workspace products.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {supportedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 text-center hover-lift group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-accent transition-colors">
                    {product}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto glass-card p-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Your journey towards enhanced PLM capabilities begins here.
              </h2>
              <p className="text-xl text-gray-text mb-8">
                Trust us to deliver a comprehensive Teamcenter implementation that transforms your product lifecycle management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                  >
                    Get Implementation Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white px-8 py-4 text-lg font-semibold"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default TeamcenterImplementation;