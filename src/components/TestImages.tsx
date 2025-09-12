'use client';

import React from 'react';

export default function TestImages() {
  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: 'white' }}>
      <h2>Test de Imágenes</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div>
          <h3>Landing Hero</h3>
          <img 
            src="/images/landing-hero.webp" 
            alt="Landing Hero" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid #333' }}
            onLoad={() => console.log('Landing Hero loaded')}
            onError={(e) => console.error('Landing Hero error:', e)}
          />
        </div>
        
        <div>
          <h3>Landing Shot 1</h3>
          <img 
            src="/images/landing-shot-1.webp" 
            alt="Landing Shot 1" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid #333' }}
            onLoad={() => console.log('Landing Shot 1 loaded')}
            onError={(e) => console.error('Landing Shot 1 error:', e)}
          />
        </div>
        
        <div>
          <h3>Landing Shot 2</h3>
          <img 
            src="/images/landing-shot-2.webp" 
            alt="Landing Shot 2" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid #333' }}
            onLoad={() => console.log('Landing Shot 2 loaded')}
            onError={(e) => console.error('Landing Shot 2 error:', e)}
          />
        </div>
        
        <div>
          <h3>Portfolio Showcase</h3>
          <img 
            src="/images/portfolio-showcase.webp" 
            alt="Portfolio Showcase" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid #333' }}
            onLoad={() => console.log('Portfolio Showcase loaded')}
            onError={(e) => console.error('Portfolio Showcase error:', e)}
          />
        </div>
        
        <div>
          <h3>Features Showcase</h3>
          <img 
            src="/images/features-showcase.webp" 
            alt="Features Showcase" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid #333' }}
            onLoad={() => console.log('Features Showcase loaded')}
            onError={(e) => console.error('Features Showcase error:', e)}
          />
        </div>
      </div>
    </div>
  );
}
