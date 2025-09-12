import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  change: string;
}

interface StatsProps {
  title: string;
  image: string;
  items: StatItem[];
}

const Stats: React.FC<StatsProps> = ({ title, image, items = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});

  // Validación adicional para evitar errores
  if (!items || !Array.isArray(items)) {
    return null;
  }

  useEffect(() => {
    if (isInView) {
      items.forEach((item, index) => {
        const numericValue = parseInt(item.value.replace(/[^\d]/g, ''));
        if (!isNaN(numericValue)) {
          const duration = 2000;
          const startTime = Date.now();
          
          const animateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setAnimatedValues(prev => ({
              ...prev,
              [index]: Math.floor(numericValue * easeOut)
            }));
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          
          setTimeout(() => animateCount(), index * 200);
        }
      });
    }
  }, [isInView, items]);

  return (
    <motion.section
      ref={ref}
      className="section reveal"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '64px 16px'
      }}
    >
      <motion.h2
        className="hl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(90deg, var(--c1), var(--c2))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          marginTop: '32px',
          alignItems: 'start'
        }}
      >
        <motion.div
          className="stats-image"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.img
            src={image}
            alt="Métricas de éxito"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          />
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }}
        >
          {items.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                textAlign: 'center',
                padding: '24px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <motion.div
                className="stat-value"
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '8px'
                }}
              >
                {stat.value.includes('%') ? (
                  `${animatedValues[index] || 0}%`
                ) : stat.value.includes('s') ? (
                  `${(animatedValues[index] || 0) / 10}s`
                ) : (
                  animatedValues[index] || 0
                )}
              </motion.div>

              <motion.div
                className="stat-label"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ink, #1e293b)',
                  marginBottom: '4px'
                }}
              >
                {stat.label}
              </motion.div>

              <motion.div
                className="stat-change"
                style={{
                  fontSize: '12px',
                  color: '#28ca42',
                  fontWeight: 600
                }}
              >
                {stat.change}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
        `
      }} />
    </motion.section>
  );
};

export default Stats;
