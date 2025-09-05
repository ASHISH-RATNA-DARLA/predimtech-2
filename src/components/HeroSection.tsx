import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/plm-hero-image.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Siemens Teamcenter PLM Excellence",
      subtitle: "Unlocking Digital Dimensions through Comprehensive PLM Solutions",
    },
    {
      title: "Expert Teamcenter Implementation Services", 
      subtitle: "Seamless Integration and Configuration Tailored to Your Business Needs",
    },
    {
      title: "PLM Migration & Upgrade Solutions",
      subtitle: "Transform Your Product Lifecycle Management with Expert Guidance",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const videos = ["/dm (1).mov", "/plm (1).mov"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds
    return () => clearInterval(videoTimer);
  }, [videos.length]);

  return (
    <section className="h-[90vh] flex overflow-hidden">
      {/* Left Column - Text Content */}
      <div className="w-2/5 bg-background flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-accent/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        
        <div className="max-w-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-orange-accent text-sm font-semibold uppercase tracking-wider mb-4"
          >
            PLM Excellence
          </motion.div>
          <motion.h1 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p 
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-text mb-8 leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full bg-blue-accent hover:bg-blue-accent-hover text-blue-accent-foreground px-8 py-4 text-lg font-semibold shadow-glow"
              >
                Get PLM Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline"
                size="lg"
                className="w-full border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-blue-accent-foreground px-8 py-4 text-lg font-semibold"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
          
          {/* Slide Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-3 mt-8 justify-center"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-accent' : 'bg-border'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Column - Video Background */}
      <div className="w-3/5 relative overflow-hidden">
        <video 
          key={currentVideo}
          className="w-full h-full object-cover"
          src={videos[currentVideo]}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default HeroSection;