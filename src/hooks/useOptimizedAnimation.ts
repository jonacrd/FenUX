import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export const useOptimizedAnimation = (threshold = 0.1) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Always disable complex animations to prevent glitch
    setShouldAnimate(false);
  }, []);

  const getAnimationProps = (props: any) => {
    // Return simple, non-glitchy animations
    return { 
      initial: { opacity: 0, y: 10 }, 
      animate: { opacity: 1, y: 0 }, 
      transition: { duration: 0.3, ease: "easeOut" } 
    };
  };

  return { ref, shouldAnimate: false, isInView, getAnimationProps };
};

export const usePerformanceOptimizedAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getAnimationProps = (baseProps: any, reducedProps: any = {}) => {
    if (!isClient) return reducedProps;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    
    if (prefersReducedMotion || isLowEnd) {
      return {
        ...reducedProps,
        transition: { duration: 0.1 }
      };
    }
    
    return baseProps;
  };

  return { getAnimationProps, isClient };
};
