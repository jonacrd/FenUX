import React, { useState, useEffect } from 'react';

interface Pack {
  name: string;
  usd: number;
  items: string[];
  cta: {
    label: string;
    href: string;
    attrs: Record<string, any>;
  };
}

interface PricingProps {
  title: string;
  baseUSD: number;
  packs: Pack[];
  lang?: string;
}

const Pricing: React.FC<PricingProps> = ({ title, baseUSD, packs = [], lang = 'es' }) => {
  const [convertedPrices, setConvertedPrices] = useState<{ [key: number]: number }>({});
  const [currency, setCurrency] = useState('USD');

  // Validación adicional para evitar errores
  if (!packs || !Array.isArray(packs)) {
    return null;
  }

  const i18n = {
    es: { from: 'Desde', currency: 'Moneda', base: 'Precio base' },
    en: { from: 'From', currency: 'Currency', base: 'Base price' }
  }[lang];

  useEffect(() => {
    // Simulate currency conversion
    const conversionRates: { [key: string]: number } = {
      'USD': 1,
      'EUR': 0.85,
      'GBP': 0.73,
      'CAD': 1.35,
      'AUD': 1.50,
      'MXN': 20.0
    };

    const newPrices: { [key: number]: number } = {};
    packs.forEach(pack => {
      newPrices[pack.usd] = Math.round(pack.usd * conversionRates[currency]);
    });
    setConvertedPrices(newPrices);
  }, [currency, packs]);

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

      <div
        className="packs"
        style={{
          display: 'grid',
          gap: '16px',
          marginBottom: '1rem',
          gridTemplateColumns: '1fr'
        }}
      >
        {packs.map((pack, index) => (
          <article
            key={index}
            className="card reveal pack price-box"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '24px',
              transition: 'all 0.35s ease',
              willChange: 'transform',
              cursor: 'pointer'
            }}
            data-usd={pack.usd}
            data-currency=""
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 16px 0',
                color: 'var(--ink, #1e293b)'
              }}
            >
              {pack.name}
            </h3>
            
            <div
              style={{
                marginBottom: '16px'
              }}
            >
              <span
                className="price"
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(22px, 5vw, 36px)',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                {convertedPrices[pack.usd] || '—'}
              </span>
              <span
                className="currency"
                style={{
                  fontWeight: 700,
                  opacity: 0.9,
                  marginLeft: '8px',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                {currency}
              </span>
              <small
                className="muted"
                style={{
                  opacity: 0.7,
                  marginLeft: '8px',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                ({i18n.from} USD {pack.usd})
              </small>
            </div>

            <ul
              className="clean"
              style={{
                paddingLeft: '18px',
                margin: '8px 0 24px 0',
                listStyle: 'none'
              }}
            >
              {pack.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  style={{
                    margin: '0.35rem 0',
                    color: 'var(--ink, #1e293b)',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '-18px',
                      color: 'var(--c1)',
                      fontWeight: 'bold'
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              className="btn"
              href={pack.cta.href}
              style={{
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                borderRadius: '12px',
                padding: '0.8rem 1rem',
                fontWeight: 700,
                background: 'linear-gradient(90deg, var(--c1), var(--c2))',
                color: '#051018',
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
                willChange: 'transform'
              }}
              {...pack.cta.attrs}
            >
              {pack.cta.label}
            </a>
          </article>
        ))}
      </div>

      <p
        className="small muted"
        style={{
          marginTop: '8px',
          opacity: 0.7,
          color: 'var(--ink, #1e293b)',
          fontSize: '14px'
        }}
      >
        {i18n.base}: USD {baseUSD} — conversión aprox. según tu país.
      </p>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 980px) {
            .packs {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default Pricing;
