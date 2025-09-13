import { useEffect, useRef, useState, useCallback } from 'react';

export default function HeroRedesignCarrusel() {
  const carrusel1Ref = useRef<HTMLDivElement>(null);
  const carrusel2Ref = useRef<HTMLDivElement>(null);
  const carrusel3Ref = useRef<HTMLDivElement>(null);
  
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [manualPosition, setManualPosition] = useState<{[key: string]: number}>({
    carrusel1: 0,
    carrusel2: 0,
    carrusel3: 0
  });

  // Estados individuales para cada carrusel
  const [carrusel1Dragging, setCarrusel1Dragging] = useState(false);
  const [carrusel2Dragging, setCarrusel2Dragging] = useState(false);
  const [carrusel3Dragging, setCarrusel3Dragging] = useState(false);

  const products = [
    {
      title: "Barbería Moderna",
      thumbnail: "/portfolio/barberia/barberia 1.png",
    },
    {
      title: "Estilo Profesional",
      thumbnail: "/portfolio/barberia/barberia 2.png",
    },
    {
      title: "Corte Premium",
      thumbnail: "/portfolio/barberia/barberia 3.png",
    },
    {
      title: "Atención Personalizada",
      thumbnail: "/portfolio/barberia/barberia 4.png",
    },
    {
      title: "Ambiente Clásico",
      thumbnail: "/portfolio/barberia/barberia 5.png",
    },
    {
      title: "Servicio de Calidad",
      thumbnail: "/portfolio/barberia/barberia 6.png",
    },
    {
      title: "Muestra 1",
      thumbnail: "/portfolio/muestras/muestras 1.png",
    },
    {
      title: "Muestra 2",
      thumbnail: "/portfolio/muestras/muestras 2.png",
    },
    {
      title: "Muestra 3",
      thumbnail: "/portfolio/muestras/muestras 3.png",
    },
    {
      title: "Muestra 4",
      thumbnail: "/portfolio/muestras/muestras 4 (1).png",
    },
    {
      title: "Muestra 5",
      thumbnail: "/portfolio/muestras/muestras 5.png",
    },
    {
      title: "Muestra 6",
      thumbnail: "/portfolio/muestras/muestras 6.png",
    },
  ];

  // Función para manejar el toque inicial
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setDragStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsPaused(true);
  }, []);

  // Función para manejar el movimiento del toque
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (isDragging && dragStart !== null) {
      const deltaX = (e.targetTouches[0].clientX - dragStart) * 0.8; // Sensibilidad reducida para control más preciso
      const target = e.currentTarget as HTMLDivElement;
      const carruselId = target.getAttribute('data-carrusel-id');
      
      if (carruselId) {
        const newPosition = manualPosition[carruselId] + deltaX;
        setManualPosition(prev => ({
          ...prev,
          [carruselId]: newPosition
        }));
        target.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [isDragging, dragStart, manualPosition]);

  // Función para manejar el final del toque
  const handleTouchEnd = useCallback(() => {
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragStart(null);
    setIsPaused(false);
  }, []);

  // Manejadores específicos para cada carrusel
  const handleCarrusel1TouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setDragStart(e.targetTouches[0].clientX);
    setCarrusel1Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel1Ref.current) {
      const currentTransform = carrusel1Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel1: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel1TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel1Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      const newPosition = manualPosition.carrusel1 + deltaX; // Usar posición guardada como base
      if (carrusel1Ref.current) {
        carrusel1Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel1Dragging, dragStart, manualPosition.carrusel1]);

  const handleCarrusel1TouchEnd = useCallback(() => {
    setTouchStart(null);
    setTouchEnd(null);
    setCarrusel1Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel1Ref.current) {
      const currentTransform = carrusel1Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel1: finalPosition
        }));
      }
    }
  }, []);

  const handleCarrusel2TouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setDragStart(e.targetTouches[0].clientX);
    setCarrusel2Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel2Ref.current) {
      const currentTransform = carrusel2Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel2: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel2TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel2Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      let newPosition = manualPosition.carrusel2 + deltaX;
      
      // Calcular límites para el segundo carrusel
      const itemWidth = 320; // w-80 + gap aproximado
      const totalItems = 6; // 6 imágenes por carrusel
      const setWidth = itemWidth * totalItems;
      const maxRight = 0; // No puede ir más a la derecha que la posición inicial
      const maxLeft = -setWidth + itemWidth; // Debe mantener al menos una imagen visible
      
      // Aplicar límites con rebote suave
      if (newPosition > maxRight) {
        newPosition = maxRight + (newPosition - maxRight) * 0.3; // Rebote suave hacia la derecha
      } else if (newPosition < maxLeft) {
        newPosition = maxLeft + (newPosition - maxLeft) * 0.3; // Rebote suave hacia la izquierda
      }
      
      if (carrusel2Ref.current) {
        carrusel2Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel2Dragging, dragStart, manualPosition.carrusel2]);

  const handleCarrusel2TouchEnd = useCallback(() => {
    setTouchStart(null);
    setTouchEnd(null);
    setCarrusel2Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel2Ref.current) {
      const currentTransform = carrusel2Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel2: finalPosition
        }));
      }
    }
  }, []);

  const handleCarrusel3TouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setDragStart(e.targetTouches[0].clientX);
    setCarrusel3Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel3Ref.current) {
      const currentTransform = carrusel3Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel3: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel3TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel3Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      const newPosition = manualPosition.carrusel3 + deltaX; // Usar posición guardada como base
      if (carrusel3Ref.current) {
        carrusel3Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel3Dragging, dragStart, manualPosition.carrusel3]);

  const handleCarrusel3TouchEnd = useCallback(() => {
    setTouchStart(null);
    setTouchEnd(null);
    setCarrusel3Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel3Ref.current) {
      const currentTransform = carrusel3Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel3: finalPosition
        }));
      }
    }
  }, []);

  // Función para manejar hover (mouse) - removido para evitar scroll agresivo
  const handleMouseEnter = useCallback(() => {
    // No pausar en hover, solo en drag real
  }, []);

  const handleMouseLeave = useCallback(() => {
    // No reanudar en hover, solo en drag real
  }, []);

  // Manejadores de mouse específicos para cada carrusel
  const handleCarrusel1MouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo botón izquierdo
    e.stopPropagation(); // Evitar propagación a otros elementos
    setDragStart(e.clientX);
    setCarrusel1Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel1Ref.current) {
      const currentTransform = carrusel1Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel1: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel1MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel1Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      const newPosition = manualPosition.carrusel1 + deltaX; // Usar posición guardada como base
      if (carrusel1Ref.current) {
        carrusel1Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel1Dragging, dragStart, manualPosition.carrusel1]);

  const handleCarrusel1MouseUp = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar propagación
    setCarrusel1Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel1Ref.current) {
      const currentTransform = carrusel1Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel1: finalPosition
        }));
      }
    }
  }, []);

  const handleCarrusel2MouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo botón izquierdo
    e.stopPropagation(); // Evitar propagación a otros elementos
    setDragStart(e.clientX);
    setCarrusel2Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel2Ref.current) {
      const currentTransform = carrusel2Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel2: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel2MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel2Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      let newPosition = manualPosition.carrusel2 + deltaX;
      
      // Calcular límites para el segundo carrusel
      const itemWidth = 320; // w-80 + gap aproximado
      const totalItems = 6; // 6 imágenes por carrusel
      const setWidth = itemWidth * totalItems;
      const maxRight = 0; // No puede ir más a la derecha que la posición inicial
      const maxLeft = -setWidth + itemWidth; // Debe mantener al menos una imagen visible
      
      // Aplicar límites con rebote suave
      if (newPosition > maxRight) {
        newPosition = maxRight + (newPosition - maxRight) * 0.3; // Rebote suave hacia la derecha
      } else if (newPosition < maxLeft) {
        newPosition = maxLeft + (newPosition - maxLeft) * 0.3; // Rebote suave hacia la izquierda
      }
      
      if (carrusel2Ref.current) {
        carrusel2Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel2Dragging, dragStart, manualPosition.carrusel2]);

  const handleCarrusel2MouseUp = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar propagación
    setCarrusel2Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel2Ref.current) {
      const currentTransform = carrusel2Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel2: finalPosition
        }));
      }
    }
  }, []);

  const handleCarrusel3MouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo botón izquierdo
    e.stopPropagation(); // Evitar propagación a otros elementos
    setDragStart(e.clientX);
    setCarrusel3Dragging(true);
    
    // Ajustar la posición inicial para que el drag sea continuo
    if (carrusel3Ref.current) {
      const currentTransform = carrusel3Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const currentPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel3: currentPosition
        }));
      }
    }
  }, []);

  const handleCarrusel3MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel3Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      const newPosition = manualPosition.carrusel3 + deltaX; // Usar posición guardada como base
      if (carrusel3Ref.current) {
        carrusel3Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel3Dragging, dragStart, manualPosition.carrusel3]);

  const handleCarrusel3MouseUp = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar propagación
    setCarrusel3Dragging(false);
    setDragStart(null);
    
    // Guardar la posición final para continuar desde ahí
    if (carrusel3Ref.current) {
      const currentTransform = carrusel3Ref.current.style.transform;
      const match = currentTransform.match(/translateX\(([^)]+)\)/);
      if (match) {
        const finalPosition = parseFloat(match[1]);
        setManualPosition(prev => ({
          ...prev,
          carrusel3: finalPosition
        }));
      }
    }
  }, []);

  // useEffect separado para cada carrusel para evitar interferencia
  useEffect(() => {
    if (!carrusel1Ref.current) return;
    
    let position = manualPosition.carrusel1 || 0;
    let lastDragTime = 0;
    
    const move = () => {
      if (!carrusel1Dragging) {
        const now = Date.now();
        
        if (now - lastDragTime > 1000) {
          position += -0.3; // Movimiento hacia la izquierda
          carrusel1Ref.current!.style.transform = `translateX(${position}px)`;
          
          const itemWidth = 320;
          const totalItems = 6;
          const setWidth = itemWidth * totalItems;
          
          if (position <= -setWidth) {
            position = 0;
          }
        }
      } else {
        lastDragTime = Date.now();
      }
    };
    
    const interval = setInterval(move, 50);
    return () => clearInterval(interval);
  }, [carrusel1Dragging, manualPosition.carrusel1]);

  useEffect(() => {
    if (!carrusel2Ref.current) return;
    
    let position = manualPosition.carrusel2 || 0;
    let lastDragTime = 0;
    
    const move = () => {
      if (!carrusel2Dragging) {
        const now = Date.now();
        
        if (now - lastDragTime > 1000) {
          position += 0.3; // Movimiento hacia la derecha
          carrusel2Ref.current!.style.transform = `translateX(${position}px)`;
          
          const itemWidth = 320;
          const totalItems = 6;
          const setWidth = itemWidth * totalItems;
          const maxRight = 0;
          const maxLeft = -setWidth + itemWidth;
          
          // Aplicar límites
          if (position > maxRight) {
            position = maxRight;
          } else if (position < maxLeft) {
            position = maxLeft;
          }
        }
      } else {
        lastDragTime = Date.now();
      }
    };
    
    const interval = setInterval(move, 60);
    return () => clearInterval(interval);
  }, [carrusel2Dragging, manualPosition.carrusel2]);

  useEffect(() => {
    if (!carrusel3Ref.current) return;
    
    let position = manualPosition.carrusel3 || 0;
    let lastDragTime = 0;
    
    const move = () => {
      if (!carrusel3Dragging) {
        const now = Date.now();
        
        if (now - lastDragTime > 1000) {
          position += -0.3; // Movimiento hacia la izquierda
          carrusel3Ref.current!.style.transform = `translateX(${position}px)`;
          
          const itemWidth = 320;
          const totalItems = 6;
          const setWidth = itemWidth * totalItems;
          
          if (position <= -setWidth) {
            position = 0;
          }
        }
      } else {
        lastDragTime = Date.now();
      }
    };
    
    const interval = setInterval(move, 45);
    return () => clearInterval(interval);
  }, [carrusel3Dragging, manualPosition.carrusel3]);

  // Listener global para mouse up para liberar el drag
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setCarrusel1Dragging(false);
      setCarrusel2Dragging(false);
      setCarrusel3Dragging(false);
      setDragStart(null);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="w-full relative bg-black pb-20 pt-20">
      {/* Background con web vieja opaca */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center"
          alt="Web vieja de fondo"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      {/* Indicador de estado del carrusel */}
      {isPaused && (
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
          ⏸️ Pausado
        </div>
      )}

      {/* Carruseles automáticos lentos e interactivos con diseño dinámico */}
      <div className="relative z-10">
        {/* Primer carrusel - más arriba, se mueve hacia la izquierda */}
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mb-4 sm:mb-6 lg:mb-8 overflow-hidden pb-2 sm:pb-3 lg:pb-4">
          <div 
            ref={carrusel1Ref}
            data-carrusel-id="carrusel1"
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-pointer select-none"
            style={{ 
              width: 'max-content',
              transition: 'none' // Sin transiciones para control manual preciso
            }}
            onTouchStart={handleCarrusel1TouchStart}
            onTouchMove={handleCarrusel1TouchMove}
            onTouchEnd={handleCarrusel1TouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleCarrusel1MouseDown}
            onMouseMove={handleCarrusel1MouseMove}
            onMouseUp={handleCarrusel1MouseUp}
          >
            {products.slice(0, 6).map((product, index) => (
              <div
                key={product.title}
                className="flex-shrink-0 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
                <h3 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                  {product.title}
                </h3>
              </div>
            ))}
            {/* Duplicar para loop infinito */}
            {products.slice(0, 6).map((product, index) => (
              <div
                key={`duplicate-1-${product.title}`}
                className="flex-shrink-0 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
                <h3 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Segundo carrusel con título a la izquierda - se mueve hacia la derecha */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          overflow: 'hidden',
          paddingBottom: '1rem'
        }}>
          {/* Título a la izquierda */}
          <div style={{
            flexShrink: 0,
            width: '100%',
            maxWidth: '400px',
            padding: '0 1rem',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '1.2',
              margin: '0 0 1rem 0'
            }}>
              Rediseño Web que Convierte
            </h1>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              margin: '0',
              color: '#e5e7eb',
              lineHeight: '1.6'
            }}>
              Transformamos tu sitio web obsoleto en una experiencia moderna y funcional. 
              Diseños únicos, responsive y optimizados para conversión.
            </p>
          </div>
          
          {/* Carrusel a la derecha */}
          <div style={{
            flex: 1,
            overflow: 'hidden',
            width: '100%'
          }}>
            <div 
              ref={carrusel2Ref}
              data-carrusel-id="carrusel2"
              style={{ 
                display: 'flex',
                gap: '1rem',
                cursor: 'pointer',
                userSelect: 'none',
                width: 'max-content',
                transition: 'none' // Sin transiciones para control manual preciso
              }}
              onTouchStart={handleCarrusel2TouchStart}
              onTouchMove={handleCarrusel2TouchMove}
              onTouchEnd={handleCarrusel2TouchEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleCarrusel2MouseDown}
              onMouseMove={handleCarrusel2MouseMove}
              onMouseUp={handleCarrusel2MouseUp}
            >
              {products.slice(6, 12).map((product, index) => (
                <div
                  key={product.title}
                  style={{
                    flexShrink: 0,
                    width: '240px',
                    height: '192px',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-20px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderRadius: '8px',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                  }}
                  />
                  <h3 style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    color: 'white',
                    opacity: 0,
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    transition: 'opacity 0.3s ease',
                    margin: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                  >
                    {product.title}
                  </h3>
                </div>
              ))}
              {/* Duplicar para loop infinito */}
              {products.slice(6, 12).map((product, index) => (
                <div
                  key={`duplicate-2-${product.title}`}
                  style={{
                    flexShrink: 0,
                    width: '240px',
                    height: '192px',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-20px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderRadius: '8px',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                  }}
                  />
                  <h3 style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    color: 'white',
                    opacity: 0,
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    transition: 'opacity 0.3s ease',
                    margin: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                  >
                    {product.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tercer carrusel - se mueve hacia la izquierda */}
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mb-0 overflow-hidden pb-2 sm:pb-3 lg:pb-4">
          <div 
            ref={carrusel3Ref}
            data-carrusel-id="carrusel3"
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-pointer select-none"
            style={{ 
              width: 'max-content',
              transition: 'none' // Sin transiciones para control manual preciso
            }}
            onTouchStart={handleCarrusel3TouchStart}
            onTouchMove={handleCarrusel3TouchMove}
            onTouchEnd={handleCarrusel3TouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleCarrusel3MouseDown}
            onMouseMove={handleCarrusel3MouseMove}
            onMouseUp={handleCarrusel3MouseUp}
          >
            {products.slice(0, 6).map((product, index) => (
              <div
                key={`third-${product.title}`}
                className="flex-shrink-0 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
                <h3 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                  {product.title}
                </h3>
              </div>
            ))}
            {/* Duplicar para loop infinito */}
            {products.slice(0, 6).map((product, index) => (
              <div
                key={`duplicate-3-${product.title}`}
                className="flex-shrink-0 w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
                <h3 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
