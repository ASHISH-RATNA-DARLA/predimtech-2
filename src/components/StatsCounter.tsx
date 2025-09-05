import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter = ({ value, label, suffix = "", duration = 2 }: StatsCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOut cubic
        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="text-center p-6 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-elegant hover-lift"
    >
      <div className="text-4xl font-bold text-blue-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-text font-medium">{label}</div>
    </motion.div>
  );
};

export default StatsCounter;