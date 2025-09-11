import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface ProcessStep {
  k: string;
  v: string;
}

interface ProcessStepsProps {
  title: string;
  steps: ProcessStep[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, steps = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Validación adicional para evitar errores
  if (!steps || !Array.isArray(steps)) {
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
      
      <motion.ol
        className="card reveal"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -5, scale: 1.02 }}
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: '16px',
          padding: '12px 18px',
          transition: 'all 0.35s ease',
          willChange: 'transform',
          cursor: 'pointer',
          listStyle: 'none',
          counterReset: 'step-counter'
        }}
      >
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            style={{
              margin: '0.35rem 0',
              paddingLeft: '2rem',
              position: 'relative',
              counterIncrement: 'step-counter'
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                left: 0,
                top: '0.2rem',
                width: '1.5rem',
                height: '1.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 700,
                content: 'counter(step-counter)'
              }}
            >
              {index + 1}
            </motion.span>
            <motion.strong
              style={{
                color: 'var(--ink, #1e293b)',
                fontWeight: 700
              }}
            >
              {step.k}
            </motion.strong>
            <span style={{ color: 'var(--ink, #1e293b)' }}> — {step.v}</span>
          </motion.li>
        ))}
      </motion.ol>
    </motion.section>
  );
};

export default ProcessSteps;
