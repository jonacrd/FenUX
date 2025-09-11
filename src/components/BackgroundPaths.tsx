import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePerformanceOptimizedAnimation } from '../hooks/useOptimizedAnimation';

interface BackgroundPathsProps {
  className?: string;
}

const BackgroundPaths: React.FC<BackgroundPathsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { getAnimationProps, isClient } = usePerformanceOptimizedAnimation();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Check if we should reduce animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    const isSlowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g';
    
    setShouldAnimate(!prefersReducedMotion && !isLowEnd && !isSlowConnection);
    
    // Preload animations
    if (containerRef.current) {
      containerRef.current.style.willChange = 'transform, opacity';
    }
  }, []);

  const paths = Array.from({ length: 36 }, (_, i) => {
    const position = 1;
    const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
    const width = 0.5 + i * 0.03;
    const opacity = 0.1 + i * 0.03;
    
    return {
      id: i,
      d,
      width,
      opacity,
      delay: i * 0.1,
      duration: 20 + Math.random() * 10
    };
  });

  const reversePaths = Array.from({ length: 36 }, (_, i) => {
    const position = -1;
    const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
    const width = 0.5 + i * 0.03;
    const opacity = 0.1 + i * 0.03;
    
    return {
      id: i,
      d,
      width,
      opacity,
      delay: i * 0.1,
      duration: 20 + Math.random() * 10
    };
  });

  return (
    <div 
      ref={containerRef}
      className={`background-paths-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <div 
        className="floating-paths"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <svg 
          className="w-full h-full" 
          viewBox="0 0 696 316" 
          fill="none"
          style={{ color: 'rgba(255, 255, 255, 0.1)' }}
        >
          <title>Background Paths</title>
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
              initial={{ 
                pathLength: 0,
                opacity: 0.1
              }}
              animate={{
                pathLength: 1,
                opacity: [0.1, 0.3, 0.6, 0.3, 0.1]
              }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                strokeDasharray: 1000,
                willChange: 'stroke-dashoffset, opacity'
              }}
            />
          ))}
        </svg>
      </div>
      
      <motion.div 
        className="floating-paths reverse"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
        animate={{
          scaleX: [1, -1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg 
          className="w-full h-full" 
          viewBox="0 0 696 316" 
          fill="none"
          style={{ color: 'rgba(255, 255, 255, 0.1)' }}
        >
          <title>Background Paths</title>
          {reversePaths.map((path) => (
            <motion.path
              key={`reverse-${path.id}`}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
              initial={{ 
                pathLength: 0,
                opacity: 0.1
              }}
              animate={{
                pathLength: 1,
                opacity: [0.1, 0.3, 0.6, 0.3, 0.1]
              }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                strokeDasharray: 1000,
                willChange: 'stroke-dashoffset, opacity'
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default BackgroundPaths;
