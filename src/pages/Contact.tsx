import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";
import consultantImage from "@/assets/plm-consultant.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+46 70 478 59 40"],
      description: "Available during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@predimtech.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Kungsängen", "Stockholm County", "Sweden"],
      description: "Serving clients globally"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "CET (Central European Time)"],
      description: "24/7 emergency support available"
    }
  ];

  const services = [
    "Teamcenter Implementation",
    "Migration & Upgrade",
    "System Integration",
    "PLM Consulting",
    "Training & Support",
    "Other (please specify)"
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
                Contact Us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Let's Discuss Your{" "}
                <span className="text-blue-accent">PLM Journey</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-text leading-relaxed"
              >
                Ready to transform your product lifecycle management? Our PLM experts are here to help 
                you unlock the full potential of Siemens Teamcenter.
              </motion.p>
            </div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-accent/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </section>

        {/* Contact Form & Info Section */}
        <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-card p-8"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get Your Free PLM Consultation
                </h2>
                <p className="text-gray-text mb-8">
                  Fill out the form below and our PLM specialists will get back to you within 24 hours 
                  to discuss your specific requirements and how we can help.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        placeholder="John"
                        className="bg-white/50 border-border focus:border-blue-accent transition-smooth"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Doe"
                        className="bg-white/50 border-border focus:border-blue-accent transition-smooth"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john.doe@company.com"
                      className="bg-white/50 border-border focus:border-blue-accent transition-smooth"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <Input
                        placeholder="Your Company"
                        className="bg-white/50 border-border focus:border-blue-accent transition-smooth"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="bg-white/50 border-border focus:border-blue-accent transition-smooth"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select className="w-full p-3 bg-white/50 border border-border rounded-md focus:border-blue-accent transition-smooth">
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell us about your current PLM challenges, requirements, and goals. Include details about your industry, team size, and timeline if available."
                      rows={5}
                      className="bg-white/50 border-border focus:border-blue-accent resize-none transition-smooth"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-blue-accent border-border rounded focus:ring-blue-accent"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-text">
                      I agree to the processing of my personal data for the purpose of responding to my inquiry. 
                      You can read more in our <a href="#" className="text-blue-accent hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground py-4 text-lg font-semibold shadow-glow transition-smooth"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Consultation Request
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={consultantImage}
                    alt="PLM Consultant"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/80 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Expert PLM Consultation</h3>
                      <p className="text-white/90">23+ years of combined PLM experience ready to help you</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information Cards */}
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6 hover-lift"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-blue-accent font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-gray-text text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Connect Options */}
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Connect
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/46704785940" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">WhatsApp Chat</div>
                          <div className="text-sm text-gray-text">Instant messaging</div>
                        </div>
                      </div>
                      <div className="text-green-500 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </a>

                    <a 
                      href="https://linkedin.com/company/predimtech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg hover:bg-blue-600/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Linkedin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">LinkedIn</div>
                          <div className="text-sm text-gray-text">Professional network</div>
                        </div>
                      </div>
                      <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                Common questions about our PLM services and consultation process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How long does a typical Teamcenter implementation take?",
                  answer: "Implementation timelines vary based on scope and complexity, typically ranging from 3-12 months. We provide detailed project timelines during our initial consultation."
                },
                {
                  question: "Do you provide training for our team?",
                  answer: "Yes, comprehensive training is included in all our implementation projects. We offer both technical and end-user training programs tailored to your team's needs."
                },
                {
                  question: "Can you help migrate from our current PLM system?",
                  answer: "Absolutely. We specialize in migrations from various PLM systems to Teamcenter, ensuring data integrity and minimal business disruption."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We serve automotive, aerospace, industrial machinery, energy, medical devices, and electronics industries, bringing specialized knowledge to each sector."
                },
                {
                  question: "Do you offer ongoing support after implementation?",
                  answer: "Yes, we provide 24/7 support, maintenance services, and continuous optimization to ensure your PLM system delivers maximum value."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default Contact;