import { useEffect, useRef, useState, useCallback } from 'react';

export default function HeroRedesignCarrusel() {
  const carrusel1Ref = useRef<HTMLDivElement>(null);
  const carrusel2Ref = useRef<HTMLDivElement>(null);
  const carrusel3Ref = useRef<HTMLDivElement>(null);
  
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
    setIsPaused(true);
  }, []);

  // Función para manejar el toque final
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  // Función para manejar el final del toque
  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      // Aquí podrías agregar lógica adicional si necesitas cambiar la dirección
      console.log('Swipe detected:', isLeftSwipe ? 'left' : 'right');
    }
    
    // Reanudar después de un breve delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  }, [touchStart, touchEnd]);

  // Función para manejar hover (mouse)
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    // Función para mover carrusel lentamente
    const moveCarrusel = (element: HTMLDivElement, direction: 'left' | 'right', speed: number) => {
      let position = 0;
      const move = () => {
        if (!isPaused) {
          position += direction === 'left' ? -0.5 : 0.5;
          element.style.transform = `translateX(${position}px)`;
          
          // Reset position when it goes too far
          if (Math.abs(position) > element.scrollWidth / 2) {
            position = 0;
          }
        }
      };
      
      return setInterval(move, speed);
    };

    // Iniciar movimientos lentos
    const interval1 = carrusel1Ref.current ? moveCarrusel(carrusel1Ref.current, 'left', 50) : null;
    const interval2 = carrusel2Ref.current ? moveCarrusel(carrusel2Ref.current, 'right', 60) : null;
    const interval3 = carrusel3Ref.current ? moveCarrusel(carrusel3Ref.current, 'left', 45) : null;

    // Cleanup
    return () => {
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      if (interval3) clearInterval(interval3);
    };
  }, [isPaused]);

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
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-grab active:cursor-grabbing select-none"
            style={{ width: 'max-content' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
              className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-grab active:cursor-grabbing select-none"
              style={{ width: 'max-content' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 cursor-grab active:cursor-grabbing select-none"
            style={{ width: 'max-content' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
