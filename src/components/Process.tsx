import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

interface ProcessProps {
  title: string;
  image: string;
  steps: ProcessStep[];
}

const Process: React.FC<ProcessProps> = ({ title, image, steps = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Validación adicional para evitar errores
  if (!steps || !Array.isArray(steps)) {
    return null;
  }

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
        className="process-container"
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
          className="process-image"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {image && (
            <motion.img
              src={image}
              alt="Proceso de trabajo"
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
          )}
        </motion.div>

        <motion.div
          className="process-steps"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 10 }}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.div
                className="step-number"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '18px',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                {step.step}
              </motion.div>

              <motion.div
                className="step-content"
                style={{ flex: 1 }}
              >
                <motion.h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    color: 'var(--ink, #1e293b)'
                  }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="step-desc"
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 4px 0',
                    fontWeight: 600
                  }}
                >
                  {step.desc}
                </motion.p>
                <motion.p
                  className="step-detail"
                  style={{
                    fontSize: '12px',
                    color: '#888',
                    margin: 0
                  }}
                >
                  {step.detail}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .process-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Process;
