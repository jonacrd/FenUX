'use client';

import React from 'react';

export default function SimpleHeroTest() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Landing Pages que Convierten
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
          Diseñamos landing pages y portfolios profesionales que capturan la atención de tus clientes
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img 
              src="/images/landing-hero.webp" 
              alt="Landing Hero" 
              style={{ 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                marginBottom: '10px'
              }}
              onLoad={() => console.log('✅ Landing Hero loaded')}
              onError={(e) => console.error('❌ Landing Hero error:', e)}
            />
            <h3 style={{ margin: '10px 0', fontSize: '1.1rem' }}>Landing Hero</h3>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img 
              src="/images/landing-shot-1.webp" 
              alt="Landing Shot 1" 
              style={{ 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                marginBottom: '10px'
              }}
              onLoad={() => console.log('✅ Landing Shot 1 loaded')}
              onError={(e) => console.error('❌ Landing Shot 1 error:', e)}
            />
            <h3 style={{ margin: '10px 0', fontSize: '1.1rem' }}>Landing Shot 1</h3>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img 
              src="/images/landing-shot-2.webp" 
              alt="Landing Shot 2" 
              style={{ 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                marginBottom: '10px'
              }}
              onLoad={() => console.log('✅ Landing Shot 2 loaded')}
              onError={(e) => console.error('❌ Landing Shot 2 error:', e)}
            />
            <h3 style={{ margin: '10px 0', fontSize: '1.1rem' }}>Landing Shot 2</h3>
          </div>
        </div>
        
        <div style={{ marginTop: '40px' }}>
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
      </div>
    </div>
  );
}
