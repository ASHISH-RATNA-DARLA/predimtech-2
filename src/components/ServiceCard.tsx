import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  image?: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, index, image, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-elegant hover-lift transition-smooth">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/5 to-orange-accent/5 opacity-10 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Service Image or Icon */}
          {image ? (
            <div className="relative w-full mb-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src={image} 
                alt={title}
                className="w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-accent/70 to-transparent rounded-b-xl"></div>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-8 w-8 text-white" />
            </div>
          )}

          {/* Content */}
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-accent transition-colors">
            {title}
          </h3>
          
          {/* Description - Only visible on hover */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mb-6"
            >
              <p className="text-gray-text leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          {link ? (
            <Link to={link}>
              <Button 
                variant="outline"
                className="w-full border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white transition-smooth group-hover:shadow-glow mt-auto"
              >
                Learn More
              </Button>
            </Link>
          ) : (
            <Button 
              variant="outline"
              className="w-full border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white transition-smooth group-hover:shadow-glow mt-auto"
            >
              Learn More
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
