import React from 'react';
import { motion } from 'framer-motion';

interface HeroRedesignSimpleProps {
  title: string;
  subtitle: string;
  badges: string[];
  before?: string;
  after?: string;
  ctas: { href: string; label: string; alt?: boolean; attrs?: any }[];
}

const HeroRedesignSimple: React.FC<HeroRedesignSimpleProps> = ({
  title,
  subtitle,
  badges = [],
  before = "/images/old.webp",
  after = "/images/new.webp",
  ctas = [],
}) => {
  return (
    <motion.section
      className="hero-redesign-simple"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Simple background overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)
          `,
          zIndex: 1
        }}
      />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Text content */}
        <motion.div
          className="hero-text"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              background: 'linear-gradient(90deg, #00E5FF, #7C4DFF)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              opacity: 0.9,
              marginBottom: '2rem',
              color: '#e5e7eb',
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
          
          <div
            className="badges"
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            {badges.map((badge, i) => (
              <motion.span
                key={i}
                className="badge"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.25rem 0.55rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#cbd5e1',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
          
          <div
            className="cta-buttons"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {ctas.map((cta, i) => (
              <motion.a
                key={i}
                className={`btn ${cta.alt ? 'alt' : ''}`}
                href={cta.href}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.8rem 1rem',
                  fontWeight: 700,
                  background: cta.alt 
                    ? 'transparent' 
                    : 'linear-gradient(90deg, #00E5FF, #7C4DFF)',
                  color: cta.alt ? '#e5e7eb' : '#051018',
                  textDecoration: 'none',
                  display: 'inline-block',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                {...cta.attrs}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(0, 194, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {cta.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Visual content */}
        <motion.div
          className="hero-visual"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '600px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <img
              src={before}
              alt="Before"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              loading="eager"
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              Antes
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroRedesignSimple;
