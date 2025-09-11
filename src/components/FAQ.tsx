import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  // Validación adicional para evitar errores
  if (!items || !Array.isArray(items)) {
    return null;
  }

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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
        Preguntas frecuentes
      </motion.h2>
      
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="card reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '16px',
              transition: 'all 0.35s ease',
              willChange: 'transform',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onClick={() => toggleItem(index)}
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: openItems.has(index) ? '12px' : '0'
              }}
            >
              <motion.strong
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--ink, #1e293b)',
                  flex: 1
                }}
              >
                {item.q}
              </motion.strong>
              <motion.div
                animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '20px',
                  color: 'var(--c1)',
                  marginLeft: '12px'
                }}
              >
                ▼
              </motion.div>
            </motion.div>
            
            <AnimatePresence>
              {openItems.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    style={{
                      opacity: 0.85,
                      color: 'var(--ink, #1e293b)',
                      lineHeight: 1.6,
                      paddingTop: '8px'
                    }}
                  >
                    {item.a}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
