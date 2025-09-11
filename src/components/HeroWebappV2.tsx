import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface HeroWebappV2Props {
  title: string;
  subtitle: string;
  badges: string[];
  image: string;
  ctas: Array<{
    label: string;
    href: string;
    alt?: boolean;
    attrs?: Record<string, any>;
  }>;
}

const HeroWebappV2: React.FC<HeroWebappV2Props> = ({
  title,
  subtitle,
  badges,
  image,
  ctas
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [counts, setCounts] = useState({ revenue: 0, conversion: 0 });

  useEffect(() => {
    // Preload images
    const preloadImages = [image];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [image]);

  useEffect(() => {
    if (isInView) {
      // Animate counters
      const duration = 2000;
      const startTime = Date.now();
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCounts({
          revenue: Math.floor(12430 * progress),
          conversion: Math.floor(18 * progress)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      animateCount();
    }
  }, [isInView]);

  const titleWords = title.split(' ');

  return (
    <motion.section
      ref={containerRef}
      className="section noise"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--c1, #667eea) 0%, var(--c2, #764ba2) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Mesh background */}
      <div
        className="mesh"
        style={{
          position: 'absolute',
          inset: '-20vmax',
          zIndex: -1,
          filter: 'blur(60px) saturate(120%)',
          background: `
            radial-gradient(35vmax 35vmax at 10% 20%, var(--c1) 0%, transparent 60%),
            radial-gradient(40vmax 40vmax at 80% 30%, var(--c2) 0%, transparent 60%),
            radial-gradient(30vmax 30vmax at 50% 80%, color-mix(in oklab, var(--c1) 60%, white) 0%, transparent 60%)
          `,
          animation: 'drift 18s ease-in-out infinite alternate'
        }}
      />

      {/* Noise overlay */}
      <div
        className="noise"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .6 .6 .6 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E")`,
          mixBlendMode: 'soft-light'
        }}
      />

      <div
        className="grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          width: '100%'
        }}
      >
        {/* Header */}
        <motion.header
          className="reveal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="kick kinetic split"
            style={{
              fontSize: 'clamp(34px, 6.5vw, 62px)',
              lineHeight: 1.02,
              margin: '0 0 0.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              display: 'inline-block',
              background: 'linear-gradient(90deg, var(--c1), var(--c2))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {titleWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + wordIndex * 0.1,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.5rem' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ opacity: 0.9, fontSize: '1.125rem', lineHeight: 1.6 }}
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
              marginTop: '1rem'
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
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '14px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {ctas.map((cta, index) => (
              <motion.a
                key={index}
                href={cta.href}
                className={`btn mag ripple ${cta.alt ? 'outline' : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.9rem 1.1rem',
                  borderRadius: '14px',
                  border: '0',
                  fontWeight: 800,
                  background: cta.alt 
                    ? 'transparent' 
                    : 'linear-gradient(90deg, var(--c1), var(--c2))',
                  color: cta.alt ? 'var(--fg)' : '#041015',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  willChange: 'transform'
                }}
                {...cta.attrs}
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.header>

        {/* Parallax with animated stats */}
        <motion.div
          className="parallax"
          data-parallax
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'relative',
            isolation: 'isolate',
            overflow: 'hidden',
            borderRadius: 'var(--r, 20px)',
            minHeight: '280px'
          }}
        >
          <img
            className="hero-media"
            data-d="1"
            src={image}
            alt=""
            style={{
              borderRadius: 'var(--r, 20px)',
              width: '100%',
              display: 'block',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
            }}
          />
          
          {/* Animated revenue counter */}
          <motion.div
            className="layer card"
            data-d="0.8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              position: 'absolute',
              left: '6%',
              top: '8%',
              width: '44%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--r, 20px)',
              padding: '18px',
              backdropFilter: 'blur(10px)',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
            }}
          >
            <div
              className="count"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(26px, 5vw, 40px)',
                background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              {counts.revenue.toLocaleString()}
            </div>
            <small style={{ opacity: 0.7, fontSize: '0.875rem' }}>Monthly revenue</small>
          </motion.div>

          {/* Animated conversion counter */}
          <motion.div
            className="layer card"
            data-d="0.9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '8%',
              width: '46%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--r, 20px)',
              padding: '18px',
              backdropFilter: 'blur(10px)',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>↑</span>
              <span
                className="count"
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(26px, 5vw, 40px)',
                  background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {counts.conversion}
              </span>
              <span>%</span>
            </div>
            <small style={{ opacity: 0.7, fontSize: '0.875rem' }}>Conversion rate</small>
          </motion.div>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default HeroWebappV2;
