'use client';

import React from 'react';
import { ArrowRight, Palette, Zap, Globe, Target } from 'lucide-react';
import ReusableHeader from './ReusableHeader';

// Simple Button component
const Button = ({ children, className = '', variant = 'default', size = 'default', asChild = false, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return React.cloneElement(children, { className: classes, ...props });
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Utility function
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export default function SimpleLandingHero() {
  return (
    <main style={{ 
      padding: '20px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>
        Landing Pages que Convierten
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        fontSize: '1.2rem',
        maxWidth: '800px',
        margin: '0 auto 40px auto',
        opacity: 0.9
      }}>
        Diseñamos landing pages y portfolios profesionales que capturan la atención de tus clientes y generan más conversiones para tu negocio.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '40px'
      }}>
        {/* Main large image */}
        <div style={{ 
          gridColumn: 'span 2',
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Landing Hero</h3>
          <img
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block'
            }}
            src="/images/landing-hero.webp"
            alt="Landing Page Hero"
            onLoad={() => console.log('✅ Landing Hero loaded')}
            onError={(e) => console.error('❌ Landing Hero error:', e)}
          />
        </div>
        
        {/* Small images */}
        <div style={{ 
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Landing Shot 1</h3>
          <img
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block'
            }}
            src="/images/landing-shot-1.webp"
            alt="Landing Page Shot 1"
            onLoad={() => console.log('✅ Landing Shot 1 loaded')}
            onError={(e) => console.error('❌ Landing Shot 1 error:', e)}
          />
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Landing Shot 2</h3>
          <img
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block'
            }}
            src="/images/landing-shot-2.webp"
            alt="Landing Page Shot 2"
            onLoad={() => console.log('✅ Landing Shot 2 loaded')}
            onError={(e) => console.error('❌ Landing Shot 2 error:', e)}
          />
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Portfolio Showcase</h3>
          <img
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block'
            }}
            src="/images/portfolio-showcase.webp"
            alt="Portfolio Showcase"
            onLoad={() => console.log('✅ Portfolio Showcase loaded')}
            onError={(e) => console.error('❌ Portfolio Showcase error:', e)}
          />
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Features Showcase</h3>
          <img
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block'
            }}
            src="/images/features-showcase.webp"
            alt="Features Showcase"
            onLoad={() => console.log('✅ Features Showcase loaded')}
            onError={(e) => console.error('❌ Features Showcase error:', e)}
          />
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button style={{ 
          background: 'white', 
          color: '#667eea', 
          padding: '15px 30px', 
          border: 'none', 
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0 10px'
        }}>
          Ver Portfolio
        </button>
        <button style={{ 
          background: 'transparent', 
          color: 'white', 
          padding: '15px 30px', 
          border: '2px solid white', 
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0 10px'
        }}>
          Solicitar Cotización
        </button>
      </div>
    </main>
  )
}

