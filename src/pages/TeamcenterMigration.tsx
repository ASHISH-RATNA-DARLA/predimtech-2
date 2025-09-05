import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpDown, Database, Settings, CheckCircle, Upload, Search, FileCheck, Wrench, Code } from "lucide-react";

const TeamcenterMigration = () => {
  const migrationServices = [
    {
      icon: Search,
      title: "Migration Planning",
      description: "Comprehensive planning and strategy development for seamless data migration"
    },
    {
      icon: Database,
      title: "Data Source Assessment", 
      description: "Thorough evaluation of existing data sources and their structure"
    },
    {
      icon: Settings,
      title: "Precise Data Mapping",
      description: "Detailed mapping of data elements from source to target systems"
    },
    {
      icon: Wrench,
      title: "Migration Rules Formulation",
      description: "Development of comprehensive migration rules and validation criteria"
    },
    {
      icon: Code,
      title: "Migration Tool Development",
      description: "Custom tool development using scripts and Toolkit APIs"
    }
  ];

  const migrationExecution = [
    "Source Data Extraction",
    "Data Cleansing & Transformation", 
    "Efficient Data Upload",
    "Rigorous Validation & Verification",
    "Streamlined Post-Load Activities"
  ];

  const upgradeServices = [
    {
      icon: Search,
      title: "Upgrade Planning",
      description: "Strategic planning for seamless Teamcenter upgrades"
    },
    {
      icon: Settings,
      title: "Functionality Mapping",
      description: "Comprehensive mapping of existing functionalities"
    },
    {
      icon: Database,
      title: "Infrastructure Assessment",
      description: "Thorough evaluation of current infrastructure capabilities"
    },
    {
      icon: Code,
      title: "Code and Configuration Evaluation",
      description: "Assessment of existing code and configuration requirements"
    }
  ];

  const upgradeDevelopment = [
    "Data Model Upgrade",
    "Code and Configuration Enhancement",
    "Environments Upgrade"
  ];

  const upgradeExecution = [
    "Development & Test Upgrade",
    "Precise Production Upgrade"
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
                    Teamcenter <span className="text-blue-accent">Migration & Upgrade</span>
                  </h1>
                  <p className="text-xl text-gray-text leading-relaxed mb-8">
                    Experience a seamless journey as we navigate your non-CAD data into Teamcenter. 
                    Our proven migration services cover every essential step, from meticulous planning and precise data mapping to the development of tailored migration tools.
                  </p>
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                    >
                      Start Your Migration
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
                        src="/Teamcenter Migration-1.png" 
                        alt="Teamcenter Migration Process"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent"></div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
                      <img 
                        src="/Teamcenter Migration-2.png" 
                        alt="Migration Tools and Process"
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

        {/* Migration Services */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seamless Non-CAD Data Migration to Teamcenter
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our Comprehensive Migration Services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift group"
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

        {/* Migration Tools */}
        <AnimatedSection className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Expertise in Migration Tools
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                We harness the power of existing tools or craft new ones using scripts and APIs, ensuring a flawless transition.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                  Utilization of Available Tools
                </h3>
                <p className="text-gray-text leading-relaxed">
                  Leveraging existing migration tools and platforms for efficient data transfer.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-accent transition-colors">
                  Crafting New Tools using Scripts and Toolkit APIs
                </h3>
                <p className="text-gray-text leading-relaxed">
                  Custom development of migration tools using advanced scripting and API integration.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Migration Execution */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Smooth Migration Execution
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Our expertise ensures efficient execution, leaving no detail unchecked.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {migrationExecution.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-blue-accent transition-colors">
                    {step}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Upgrade Services */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-orange-accent/5 to-blue-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seamless Teamcenter Upgrade and Patching Services
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Experience a seamless transition with our specialized Teamcenter Upgrade and Patching services.
              </p>
            </div>
            
            {/* Upgrade Planning */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Upgrade Planning</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {upgradeServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-6 text-center hover-lift group"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-blue-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-text text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expert Upgrade Development */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Expert Upgrade Development</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {upgradeDevelopment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-6 text-center hover-lift group"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-blue-accent transition-colors">
                      {item}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Efficient Migration Execution */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Efficient Migration Execution</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {upgradeExecution.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="glass-card p-8 text-center hover-lift group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-blue-accent transition-colors">
                      {item}
                    </h4>
                  </motion.div>
                ))}
              </div>
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
                Trust us to take your data migration to the next level.
              </h2>
              <p className="text-xl text-gray-text mb-8">
                Trust us to elevate your Teamcenter experience through seamless upgrades and migrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                  >
                    Get Migration Quote
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

export default TeamcenterMigration;