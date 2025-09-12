'use client';

import React from 'react';

export default function SimpleImageTest() {
  const images = [
    "/images/landing-hero.webp",
    "/images/landing-shot-1.webp", 
    "/images/landing-shot-2.webp",
    "/images/portfolio-showcase.webp",
    "/images/features-showcase.webp",
  ];

  return (
    <div style={{ 
      padding: '20px', 
      background: '#1a1a1a', 
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>
        Test de Imágenes
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {images.map((imageUrl, index) => (
          <div key={index} style={{ 
            background: '#333',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '10px' }}>Imagen {index + 1}</h3>
            <img 
              src={imageUrl} 
              alt={`Test image ${index + 1}`}
              style={{ 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover',
                borderRadius: '8px',
                border: '2px solid #555'
              }}
              onLoad={() => console.log(`✅ Imagen ${index + 1} cargada:`, imageUrl)}
              onError={(e) => console.error(`❌ Error cargando imagen ${index + 1}:`, imageUrl, e)}
            />
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#ccc' }}>
              {imageUrl}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
