import React from 'react';

interface FeatureItem {
  title: string;
  desc: string;
}

interface FeatureGridProps {
  title: string;
  items: FeatureItem[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, items = [] }) => {
  // Validación adicional para evitar errores
  if (!items || !Array.isArray(items)) {
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
      {title && (
        <h2
          className="hl"
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
        </h2>
      )}
      
      <div
        className="grid-2"
        style={{
          display: 'grid',
          gap: '18px',
          gridTemplateColumns: '1fr'
        }}
      >
        {items.map((feature, index) => (
          <article
            key={index}
            className="card reveal"
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
            <h3
              style={{
                margin: '0.2rem 0',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--ink, #1e293b)'
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                opacity: 0.85,
                margin: '8px 0 0 0',
                color: 'var(--ink, #1e293b)',
                lineHeight: 1.6
              }}
            >
              {feature.desc}
            </p>
          </article>
        ))}
      </div>

    </section>
  );
};

export default FeatureGrid;
