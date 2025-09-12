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
    <main style={{ padding: '20px', background: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>
        Landing Pages que Convierten
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main large image */}
        <div style={{ 
          gridColumn: 'span 2',
          background: '#333',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
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
          background: '#333',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            src="/images/landing-shot-1.webp"
            alt="Landing Page Shot 1"
            onLoad={() => console.log('✅ Landing Shot 1 loaded')}
            onError={(e) => console.error('❌ Landing Shot 1 error:', e)}
          />
        </div>
        
        <div style={{ 
          background: '#333',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            src="/images/landing-shot-2.webp"
            alt="Landing Page Shot 2"
            onLoad={() => console.log('✅ Landing Shot 2 loaded')}
            onError={(e) => console.error('❌ Landing Shot 2 error:', e)}
          />
        </div>
        
        <div style={{ 
          background: '#333',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            src="/images/portfolio-showcase.webp"
            alt="Portfolio Showcase"
            onLoad={() => console.log('✅ Portfolio Showcase loaded')}
            onError={(e) => console.error('❌ Portfolio Showcase error:', e)}
          />
        </div>
        
        <div style={{ 
          background: '#333',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            src="/images/features-showcase.webp"
            alt="Features Showcase"
            onLoad={() => console.log('✅ Features Showcase loaded')}
            onError={(e) => console.error('❌ Features Showcase error:', e)}
          />
        </div>
      </div>
    </main>
  )
}

