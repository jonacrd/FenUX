import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface FeatureItem {
  title: string;
  desc: string;
}

interface FeatureGridProps {
  title: string;
  items: FeatureItem[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, items = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Validación adicional para evitar errores
  if (!items || !Array.isArray(items)) {
    return null;
  }

  return (
    <motion.section
      ref={ref}
      className="section"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '56px 16px'
      }}
    >
      {title && (
        <motion.h2
          className="hl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginBottom: '8px',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(90deg, var(--c1), var(--c2))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {title}
        </motion.h2>
      )}
      
      <motion.div
        className="grid-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          display: 'grid',
          gap: '18px',
          gridTemplateColumns: '1fr'
        }}
      >
        {items.map((feature, index) => (
          <motion.article
            key={index}
            className="card reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '16px',
              transition: 'all 0.35s ease',
              willChange: 'transform',
              cursor: 'pointer'
            }}
          >
            <motion.h3
              style={{
                margin: '0.2rem 0',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--ink, #1e293b)'
              }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              style={{
                opacity: 0.85,
                margin: '8px 0 0 0',
                color: 'var(--ink, #1e293b)',
                lineHeight: 1.6
              }}
            >
              {feature.desc}
            </motion.p>
          </motion.article>
        ))}
      </motion.div>

    </motion.section>
  );
};

export default FeatureGrid;
