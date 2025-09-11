// Performance utilities for React components

export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  
  const isLowEnd = navigator.hardwareConcurrency <= 2;
  const isSlowConnection = navigator.connection && 
    (navigator.connection.effectiveType === 'slow-2g' || 
     navigator.connection.effectiveType === '2g');
  
  return isLowEnd || isSlowConnection;
};

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const shouldReduceAnimations = () => {
  return isLowEndDevice() || prefersReducedMotion();
};

export const getOptimizedAnimationProps = (baseProps: any, reducedProps: any = {}) => {
  if (shouldReduceAnimations()) {
    return {
      ...reducedProps,
      transition: { duration: 0.1 },
      animate: { ...reducedProps.animate, opacity: 1 }
    };
  }
  
  return baseProps;
};

export const preloadCriticalImages = (imageUrls: string[]) => {
  if (typeof window === 'undefined') return;
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function executedFunction(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
