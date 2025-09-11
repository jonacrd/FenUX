import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface TestimonialsProps {
  title: string;
  items: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, items = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Validación adicional para evitar errores
  if (!items || !Array.isArray(items)) {
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
        className="grid-3"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          marginTop: '32px'
        }}
      >
        {items.map((testimonial, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--r, 20px)',
              padding: '24px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.35s ease',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
          >
            <motion.div
              className="testimonial-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.2)'
                }}
              />
              <div>
                <motion.h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--ink, #1e293b)'
                  }}
                >
                  {testimonial.name}
                </motion.h4>
                <motion.p
                  className="role"
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: 0
                  }}
                >
                  {testimonial.role}
                </motion.p>
              </div>
            </motion.div>

            <motion.p
              className="testimonial-text"
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '16px',
                color: 'var(--ink, #1e293b)',
                fontStyle: 'italic'
              }}
            >
              "{testimonial.text}"
            </motion.p>

            <motion.div
              className="rating"
              style={{
                color: '#ffa500',
                fontSize: '18px',
                display: 'flex',
                gap: '2px'
              }}
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Testimonials;
