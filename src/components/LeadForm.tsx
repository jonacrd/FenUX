import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface LeadFormProps {
  language?: string;
  email: string;
  whatsapp: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ language = "es", email, whatsapp }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const T = {
    es: {
      title: "Solicita una propuesta",
      name: "Tu nombre",
      email: "Tu email",
      msg: "Cuéntame del proyecto",
      send: "Enviar",
      ok: "¡Gracias! Te escribiré pronto.",
      or: "o"
    },
    en: {
      title: "Request a proposal",
      name: "Your name",
      email: "Your email",
      msg: "Tell me about your project",
      send: "Send",
      ok: "Thanks! I'll get back to you.",
      or: "or"
    }
  }[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/api/lead', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Fire conversion tracking
        if (typeof window !== 'undefined' && (window as any).fireLeadSubmit) {
          (window as any).fireLeadSubmit();
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
        {T.title}
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
        <motion.form
          id="lead"
          className="card reveal"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '16px',
            padding: '24px',
            transition: 'all 0.35s ease',
            willChange: 'transform'
          }}
        >
          <input
            type="text"
            name="company"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          
          <motion.label
            style={{
              display: 'block',
              marginBottom: '16px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink, #1e293b)'
            }}
          >
            {T.name}
            <motion.input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '10px',
                border: '1px solid #2b2f36',
                background: '#0f1218',
                color: '#d2d7de',
                marginTop: '4px',
                fontSize: '16px'
              }}
            />
          </motion.label>

          <motion.label
            style={{
              display: 'block',
              marginBottom: '16px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink, #1e293b)'
            }}
          >
            {T.email}
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '10px',
                border: '1px solid #2b2f36',
                background: '#0f1218',
                color: '#d2d7de',
                marginTop: '4px',
                fontSize: '16px'
              }}
            />
          </motion.label>

          <motion.label
            style={{
              display: 'block',
              marginBottom: '16px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink, #1e293b)'
            }}
          >
            {T.msg}
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '10px',
                border: '1px solid #2b2f36',
                background: '#0f1218',
                color: '#d2d7de',
                marginTop: '4px',
                fontSize: '16px',
                resize: 'vertical',
                minHeight: '120px'
              }}
            />
          </motion.label>

          <motion.button
            className="btn"
            type="submit"
            disabled={isSubmitting}
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
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              willChange: 'transform'
            }}
            data-cta="form"
          >
            {isSubmitting ? 'Enviando...' : T.send}
          </motion.button>

          <motion.small
            className="muted"
            style={{
              display: 'block',
              marginTop: '8px',
              opacity: 0.7,
              color: 'var(--ink, #1e293b)',
              fontSize: '12px'
            }}
          >
            * Respondo en 24 h hábiles.
          </motion.small>
        </motion.form>

        <motion.div
          className="card reveal"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '16px',
            padding: '24px',
            transition: 'all 0.35s ease',
            willChange: 'transform'
          }}
        >
          <motion.p
            style={{
              margin: '0 0 16px 0',
              color: 'var(--ink, #1e293b)',
              fontSize: '16px'
            }}
          >
            <strong>WhatsApp</strong> {T.or} <strong>Email</strong>
          </motion.p>
          
          <motion.a
            className="btn"
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-block',
              marginRight: '12px',
              marginBottom: '8px',
              position: 'relative',
              overflow: 'hidden',
              border: 'none',
              borderRadius: '12px',
              padding: '0.8rem 1rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, var(--c1), var(--c2))',
              color: '#051018',
              textDecoration: 'none',
              cursor: 'pointer',
              willChange: 'transform'
            }}
            data-whatsapp
          >
            WhatsApp
          </motion.a>
          
          <motion.a
            className="btn alt"
            href={`mailto:${email}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              padding: '0.8rem 1rem',
              fontWeight: 700,
              background: 'transparent',
              color: 'var(--ink, #1e293b)',
              textDecoration: 'none',
              cursor: 'pointer',
              willChange: 'transform'
            }}
          >
            Email
          </motion.a>
        </motion.div>
      </motion.div>

      {isSubmitted && (
        <motion.p
          id="lead-ok"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: '8px',
            padding: '12px 16px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '8px',
            color: 'var(--ink, #1e293b)',
            textAlign: 'center',
            fontWeight: 600
          }}
          role="status"
        >
          {T.ok}
        </motion.p>
      )}

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

export default LeadForm;
