import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface ExtraItem {
  name: string;
  desc: string;
  usd: number;
}

interface ExtrasProps {
  title: string;
  items: ExtraItem[];
}

const Extras: React.FC<ExtrasProps> = ({ title, items = [] }) => {
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
      <motion.h2
        className="hl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          background: 'linear-gradient(90deg, var(--c1), var(--c2))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '2rem'
        }}
      >
        {title}
      </motion.h2>
      
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
        {items.map((item, index) => (
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
              {item.name}
            </motion.h3>
            <motion.p
              style={{
                opacity: 0.85,
                margin: '8px 0',
                color: 'var(--ink, #1e293b)',
                lineHeight: 1.6
              }}
            >
              {item.desc}
            </motion.p>
            <motion.div
              style={{
                marginTop: '12px'
              }}
            >
              <motion.strong
                style={{
                  fontWeight: 700,
                  color: 'var(--c1)',
                  fontSize: '16px'
                }}
              >
                + USD {item.usd}
              </motion.strong>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 980px) {
          .grid-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        `
      }} />
    </motion.section>
  );
};

export default Extras;
