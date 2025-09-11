import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundPathsOptimized from './BackgroundPathsOptimized';

interface HeroRedesignV3Props {
  title: string;
  subtitle: string;
  badges: string[];
  before: string;
  after: string;
  ctas: Array<{
    label: string;
    href: string;
    alt?: boolean;
    attrs?: Record<string, any>;
  }>;
}

const HeroRedesignV3: React.FC<HeroRedesignV3Props> = ({
  title,
  subtitle,
  badges,
  before,
  after,
  ctas
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Preload images
    const preloadImages = [before, after];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [before, after]);

  const titleWords = title.split(' ');

  return (
    <motion.section
      ref={containerRef}
      className="hero-redesign"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--c1, #667eea) 0%, var(--c2, #764ba2) 100%)'
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
          `,
          zIndex: 2
        }}
      />

      {/* Animated background paths */}
      <BackgroundPathsOptimized />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 30,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Text content */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: 'white' }}
        >
          <motion.h1
            className="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {titleWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + wordIndex * 0.1
                }}
                style={{ display: 'inline-block', marginRight: '0.5rem' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              lineHeight: 1.6
            }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}
          >
            {badges.map((badge, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {ctas.map((cta, index) => (
              <motion.a
                key={index}
                href={cta.href}
                className={`btn ${cta.alt ? 'outline' : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                  willChange: 'transform',
                  background: cta.alt 
                    ? 'transparent' 
                    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  color: cta.alt ? 'white' : '#1e293b',
                  borderColor: cta.alt ? 'rgba(255,255,255,0.3)' : 'transparent',
                  borderWidth: cta.alt ? '2px' : '0',
                  borderStyle: 'solid',
                  backdropFilter: cta.alt ? 'blur(10px)' : 'none',
                  boxShadow: cta.alt 
                    ? 'none' 
                    : '0 4px 15px rgba(0,0,0,0.1)'
                }}
                {...cta.attrs}
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual content */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          <motion.div
            className="before-after-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              willChange: 'transform',
              transition: 'transform 0.3s ease'
            }}
          >
            <div
              className="image-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                overflow: 'hidden'
              }}
            >
              <img
                src={before}
                alt="Antes"
                className="before-image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'saturate(0.6) contrast(0.9) brightness(0.9)',
                  zIndex: 1
                }}
              />
              <motion.img
                src={after}
                alt="Después"
                className="after-image"
                animate={{
                  clipPath: isHovered 
                    ? 'inset(0 0 0 0)' 
                    : 'inset(0 50% 0 0)'
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 2,
                  willChange: 'clip-path'
                }}
              />
            </div>
            
            <div
              className="comparison-label"
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 3
              }}
            >
              <span
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}
              >
                Antes
              </span>
              <span
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}
              >
                Después
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default HeroRedesignV3;
