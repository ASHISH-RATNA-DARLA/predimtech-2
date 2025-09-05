import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, Settings, Cpu, Zap, Building } from "lucide-react";

const TeamcenterIntegration = () => {
  const integrationServices = [
    {
      icon: Settings,
      title: "Integration Architecture and Alignment",
      description: "Strategic architectural planning and system alignment for seamless integration"
    },
    {
      icon: Database,
      title: "Integration Configuration and Customization", 
      description: "Precise configuration and customization of integration points and workflows"
    }
  ];

  const integrationTypes = [
    {
      category: "MCAD Integrations",
      items: ["NX", "Creo"],
      icon: Cpu,
      description: "Seamless integration with mechanical CAD systems for design data management"
    },
    {
      category: "ECAD Integrations", 
      items: ["Cadence Orcad", "Altium"],
      icon: Zap,
      description: "Electronic design automation integration for PCB and circuit design"
    },
    {
      category: "ERP Integrations",
      items: ["SAP", "M3", "Oracle"],
      icon: Building,
      description: "Enterprise resource planning system integration for business process alignment"
    }
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
                    Teamcenter <span className="text-blue-accent">Integration</span>
                  </h1>
                  <p className="text-xl text-gray-text leading-relaxed mb-8">
                    Unlock the full potential of Teamcenter with our seamless integration services. 
                    We ensure a smooth integration journey by focusing on architectural alignment and precise configuration and customization.
                  </p>
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                    >
                      Start Your Integration
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
                        src="/Teamcenter Integration-1.png" 
                        alt="Teamcenter Integration Architecture"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent"></div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
                      <img 
                        src="/Teamcenter Integration-2.png" 
                        alt="Integration Ecosystem"
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

        {/* Integration Services */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seamless Integrations with Teamcenter
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our Integration Services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {integrationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 hover-lift group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Integration Expertise */}
        <AnimatedSection className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                We have expertise in following Integrations to Teamcenter
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our expertise shines in a variety of integrations, including MCAD and ECAD solutions, as well as ERP systems.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {integrationTypes.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 hover-lift group h-full"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-accent transition-colors">
                    {integration.category}
                  </h3>
                  <p className="text-gray-text mb-6 leading-relaxed">
                    {integration.description}
                  </p>
                  <div className="space-y-2">
                    {integration.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-accent rounded-full mr-3"></div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Enterprise Software Integration */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seamless Enterprise Software Integrations
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our capabilities extend to integrating with a range of enterprise software, allowing you to harness the true power of Teamcenter's ecosystem.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-card p-12 text-center hover-lift"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Comprehensive Integration Ecosystem
                </h3>
                <p className="text-lg text-gray-text leading-relaxed mb-8">
                  We specialize in creating robust connections between Teamcenter and your existing enterprise applications, 
                  ensuring seamless data flow and synchronized business processes across your organization.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Cpu className="w-6 h-6 text-blue-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">Real-time Sync</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-orange-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">API Integration</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Building className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-foreground">Process Automation</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Company Trust Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Your Trusted PLM Partner
              </h2>
              <p className="text-xl text-gray-text leading-relaxed mb-8">
                PREDiM TECH is your trusted partner in your digital transformation journey and helps you in successful PLM implementation. 
                We combine deep technical expertise with industry best practices to deliver integration solutions that drive real business value.
              </p>
              <div className="inline-flex items-center bg-white/50 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-accent to-orange-accent bg-clip-text text-transparent">
                  PREDiM TECH
                </span>
              </div>
            </motion.div>
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
                Ready to Integrate Your Systems?
              </h2>
              <p className="text-xl text-gray-text mb-8">
                Let us help you unlock the full potential of Teamcenter through seamless enterprise integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                  >
                    Get Integration Quote
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

export default TeamcenterIntegration;