import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        className="packs"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          display: 'grid',
          gap: '16px',
          marginBottom: '1rem',
          gridTemplateColumns: '1fr'
        }}
      >
        {packs.map((pack, index) => (
          <motion.article
            key={index}
            className="card reveal pack price-box"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
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
            <motion.h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 16px 0',
                color: 'var(--ink, #1e293b)'
              }}
            >
              {pack.name}
            </motion.h3>
            
            <motion.div
              style={{
                marginBottom: '16px'
              }}
            >
              <motion.span
                className="price"
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(22px, 5vw, 36px)',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                {convertedPrices[pack.usd] || '—'}
              </motion.span>
              <motion.span
                className="currency"
                style={{
                  fontWeight: 700,
                  opacity: 0.9,
                  marginLeft: '8px',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                {currency}
              </motion.span>
              <motion.small
                className="muted"
                style={{
                  opacity: 0.7,
                  marginLeft: '8px',
                  color: 'var(--ink, #1e293b)'
                }}
              >
                ({i18n.from} USD {pack.usd})
              </motion.small>
            </motion.div>

            <motion.ul
              className="clean"
              style={{
                paddingLeft: '18px',
                margin: '8px 0 24px 0',
                listStyle: 'none'
              }}
            >
              {pack.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + itemIndex * 0.05 }}
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
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              className="btn"
              href={pack.cta.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
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
            </motion.a>
          </motion.article>
        ))}
      </motion.div>

      <motion.p
        className="small muted"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          marginTop: '8px',
          opacity: 0.7,
          color: 'var(--ink, #1e293b)',
          fontSize: '14px'
        }}
      >
        {i18n.base}: USD {baseUSD} — conversión aprox. según tu país.
      </motion.p>

      <style jsx={true}>{`
        @media (min-width: 980px) {
          .packs {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Pricing;
