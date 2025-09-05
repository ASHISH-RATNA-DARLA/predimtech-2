import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-4"
      >
        {/* Logo with spinning animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <img 
            src="/favicon.png" 
            alt="Loading" 
            className="w-16 h-16"
          />
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-foreground font-medium"
        >
          Loading...
        </motion.p>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1/2 h-full bg-gradient-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;