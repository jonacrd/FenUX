import React from 'react';

interface ProcessStep {
  k: string;
  v: string;
}

interface ProcessStepsProps {
  title: string;
  steps: ProcessStep[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, steps = [] }) => {
  // Validación adicional para evitar errores
  if (!steps || !Array.isArray(steps)) {
    return null;
  }

  return (
    <section
      className="section"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '56px 16px'
      }}
    >
      <h2
        className="hl"
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
      </h2>
      
      <ol
        className="card reveal"
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
          <li
            key={index}
            style={{
              margin: '0.35rem 0',
              paddingLeft: '2rem',
              position: 'relative',
              counterIncrement: 'step-counter'
            }}
          >
            <span
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
            </span>
            <strong
              style={{
                color: 'var(--ink, #1e293b)',
                fontWeight: 700
              }}
            >
              {step.k}
            </strong>
            <span style={{ color: 'var(--ink, #1e293b)' }}> — {step.v}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProcessSteps;
