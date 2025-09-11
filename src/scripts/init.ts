// Initialize performance optimizations and critical loading
import { preloadCriticalImages } from '../utils/performance';

// Critical images to preload
const criticalImages = [
  '/images/landing-hero.webp',
  '/images/old.webp',
  '/images/new.webp',
  '/images/webapp-hero.webp',
  '/images/gallery-1.webp',
  '/images/gallery-2.webp',
  '/images/gallery-3.webp',
  '/images/testimonial-1.webp',
  '/images/testimonial-2.webp',
  '/images/testimonial-3.webp',
  '/images/process-workflow.webp',
  '/images/stats-dashboard.webp'
];

// Initialize performance optimizations
export const initPerformance = () => {
  // Preload critical images
  preloadCriticalImages(criticalImages);
  
  // Add loading class to body
  document.body.classList.add('loading');
  
  // Remove loading class when page is loaded
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  });
  
  // Optimize scroll performance
  let ticking = false;
  const optimizeScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Update scroll-dependent elements here
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', optimizeScroll, { passive: true });
  
  // Optimize resize performance
  let resizeTimeout: NodeJS.Timeout;
  const optimizeResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Update resize-dependent elements here
    }, 100);
  };
  
  window.addEventListener('resize', optimizeResize, { passive: true });
};

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPerformance);
  } else {
    initPerformance();
  }
}
