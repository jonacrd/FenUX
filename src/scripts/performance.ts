// Performance optimizations for React components
export const performanceConfig = {
  // Reduce motion for users who prefer it
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Optimize animations based on device capabilities
  shouldReduceAnimations: () => {
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    const isSlowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g';
    return isLowEnd || isSlowConnection || performanceConfig.prefersReducedMotion();
  },

  // Preload critical images
  preloadImages: (imageUrls: string[]) => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  },

  // Debounce function for scroll events
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for resize events
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Intersection Observer for lazy loading
  createIntersectionObserver: (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
    return new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });
  },

  // Optimize animations for 60fps
  animationConfig: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
    stagger: 0.1
  },

  // Critical CSS loading
  loadCriticalCSS: () => {
    const criticalCSS = document.createElement('style');
    criticalCSS.textContent = `
      .hero-redesign, .hero-landing, .hero-webapp {
        background: linear-gradient(135deg, var(--c1, #667eea) 0%, var(--c2, #764ba2) 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      
      .background-paths-container {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
      }
      
      .hero-content {
        position: relative;
        z-index: 30;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        width: 100%;
      }
    `;
    document.head.appendChild(criticalCSS);
  }
};

// Initialize performance optimizations
export const initPerformance = () => {
  // Load critical CSS immediately
  performanceConfig.loadCriticalCSS();
  
  // Preload critical images
  const criticalImages = [
    '/images/landing-hero.webp',
    '/images/old.webp',
    '/images/new.webp',
    '/images/webapp-hero.webp'
  ];
  performanceConfig.preloadImages(criticalImages);
  
  // Add performance monitoring
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      // Log performance metrics
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('Performance Metrics:', {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        totalTime: perfData.loadEventEnd - perfData.fetchStart
      });
    });
  }
};
