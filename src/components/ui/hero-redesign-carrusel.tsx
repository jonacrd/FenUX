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
  }, []);

  const handleCarrusel1TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel1Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel1Ref.current) {
        carrusel1Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel1Dragging, dragStart]);

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
  }, []);

  const handleCarrusel2TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel2Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel2Ref.current) {
        carrusel2Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel2Dragging, dragStart]);

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
  }, []);

  const handleCarrusel3TouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carrusel3Dragging && dragStart !== null) {
      const deltaX = e.targetTouches[0].clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel3Ref.current) {
        carrusel3Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel3Dragging, dragStart]);

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
  }, []);

  const handleCarrusel1MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel1Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel1Ref.current) {
        carrusel1Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel1Dragging, dragStart]);

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
  }, []);

  const handleCarrusel2MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel2Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel2Ref.current) {
        carrusel2Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel2Dragging, dragStart]);

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
  }, []);

  const handleCarrusel3MouseMove = useCallback((e: React.MouseEvent) => {
    if (carrusel3Dragging && dragStart !== null) {
      e.stopPropagation(); // Evitar propagación
      const deltaX = e.clientX - dragStart;
      const newPosition = deltaX; // Usar directamente el delta, no acumular
      if (carrusel3Ref.current) {
        carrusel3Ref.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  }, [carrusel3Dragging, dragStart]);

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

  useEffect(() => {
    // Función para mover carrusel lentamente con loop infinito suave
    const moveCarrusel = (element: HTMLDivElement, direction: 'left' | 'right', speed: number, carruselId: string) => {
      let position = manualPosition[carruselId] || 0; // Empezar desde la posición guardada
      let lastDragTime = 0;
      
      const move = () => {
        const isThisCarruselDragging = 
          (carruselId === 'carrusel1' && carrusel1Dragging) ||
          (carruselId === 'carrusel2' && carrusel2Dragging) ||
          (carruselId === 'carrusel3' && carrusel3Dragging);
          
        if (!isThisCarruselDragging) {
          const now = Date.now();
          
          // Esperar 1 segundo después del último drag antes de continuar
          if (now - lastDragTime > 1000) {
            position += direction === 'left' ? -0.3 : 0.3; // Velocidad más lenta y suave
            element.style.transform = `translateX(${position}px)`;
            
            // Calcular el ancho de un set completo de imágenes (sin duplicados)
            const itemWidth = 320; // w-80 + gap aproximado
            const totalItems = 6; // 6 imágenes por carrusel
            const setWidth = itemWidth * totalItems;
            
            // Reset position cuando una imagen completa del primer set haya salido
            if (direction === 'left' && position <= -setWidth) {
              position = 0;
            } else if (direction === 'right' && position >= setWidth) {
              position = 0;
            }
          }
        } else {
          // Actualizar el tiempo del último drag
          lastDragTime = Date.now();
        }
      };
      
      return setInterval(move, speed);
    };

    // Iniciar movimientos lentos
    const interval1 = carrusel1Ref.current ? moveCarrusel(carrusel1Ref.current, 'left', 50, 'carrusel1') : null;
    const interval2 = carrusel2Ref.current ? moveCarrusel(carrusel2Ref.current, 'right', 60, 'carrusel2') : null;
    const interval3 = carrusel3Ref.current ? moveCarrusel(carrusel3Ref.current, 'left', 45, 'carrusel3') : null;

    // Cleanup
    return () => {
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      if (interval3) clearInterval(interval3);
    };
  }, [carrusel1Dragging, carrusel2Dragging, carrusel3Dragging, manualPosition]);

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
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 sm:space-y-6 lg:space-y-0 lg:space-x-8 mb-4 sm:mb-6 lg:mb-8 overflow-hidden pb-2 sm:pb-3 lg:pb-4">
          {/* Título a la izquierda */}
          <div className="flex-shrink-0 w-full lg:w-96 px-4 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Rediseño Web que <br className="hidden sm:block" /> Convierte
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-4 lg:mt-6 text-neutral-200 leading-relaxed">
              Transformamos tu sitio web obsoleto en una experiencia moderna y funcional. 
              Diseños únicos, responsive y optimizados para conversión.
            </p>
          </div>
          
          {/* Carrusel a la derecha */}
          <div className="flex-1 overflow-hidden">
          <div 
            ref={carrusel2Ref}
            data-carrusel-id="carrusel2"
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-pointer select-none"
            style={{ 
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
              {products.slice(6, 12).map((product, index) => (
                <div
                  key={`duplicate-2-${product.title}`}
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
