import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Users, Target, Award, Lightbulb } from "lucide-react";

// Company values
const values = [
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "Every solution and service is crafted to meet unique client needs."
  },
  {
    icon: Target,
    title: "Employee-Centric Excellence",
    description: "We value innovation, collaboration, and continuous growth."
  },
  {
    icon: Award,
    title: "Transparency in Everything", 
    description: "Honesty and openness define our relationships and operations."
  },
  {
    icon: Lightbulb,
    title: "Responsibility and Reliability",
    description: "We take stewardship of your trust seriously, delivering dependable results."
  }
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-accent/10 to-orange-accent/10 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Text Content - 60% */}
              <div className="lg:col-span-3 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-orange-accent text-sm font-semibold uppercase tracking-wider"
                >
                  About Us
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                >
                  About Us
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-blue-accent">PREDiM TECH</h2>
                  <p className="text-xl text-gray-text leading-relaxed">
                    We specialize in delivering top-tier IT services centered around Siemens Teamcenter PLM software.
                    Our esteemed founders bring with them a wealth of expertise from their tenure as ex-Siemens employees,
                    where they spearheaded PLM implementations across diverse industries.
                    Our unwavering mission is to empower our clients to realize triumphant PLM implementation goals.
                  </p>
                </motion.div>
              </div>

              {/* Image - 40% */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <img 
                    src="/about-us.png" 
                    alt="About PREDiM TECH"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-accent/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </section>

        {/* Our Cornerstones Section */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-16"
            >
              Our Cornerstones of Success
            </motion.h2>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-2xl font-semibold text-blue-accent italic">
                "Welcome to PREDiM TECH—where PLM aspirations evolve into reality."
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Founders Section */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
            >
              Founders Note
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by industry veterans with extensive experience at Siemens, PREDiM TECH has established itself as a trusted partner for organizations seeking to maximize their PLM investments.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our deep understanding of Teamcenter, combined with real-world implementation experience, enables us to deliver solutions that drive tangible business results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've successfully guided numerous organizations through their digital transformation journey, helping them streamline processes, improve collaboration, and accelerate time-to-market.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
                  <img 
                    src="/pradeep-dakua.jpeg" 
                    alt="Pradeep Dakua"
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-accent/20 mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Pradeep Dakua</h3>
                  <p className="text-blue-accent font-medium mb-2">Co-Founder & CEO</p>
                  <p className="text-muted-foreground">15+ years in PLM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Partners Section */}
        <AnimatedSection className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-16"
            >
              Our Partners
            </motion.h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-foreground">Kraftran GmbH</h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/kunzea.png" 
                  alt="Kunzea" 
                  className="h-16 w-auto mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default About;