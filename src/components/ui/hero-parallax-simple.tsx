export default function HeroParallaxSimple() {
  const products = [
    {
      title: "E-commerce Moderno",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Portfolio Creativo",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Landing Page",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Dashboard Admin",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Blog Personal",
      thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Sitio Corporativo",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "App Web Móvil",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Tienda Online",
      thumbnail: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Sitio de Noticias",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Portal Educativo",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Plataforma SaaS",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "Sitio de Servicios",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background con web vieja opaca */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center"
          alt="Web vieja de fondo"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 md:py-40 px-4 w-full">
        <h1 className="text-2xl md:text-7xl font-bold text-white">
          Diseños Web que <br /> Convierten
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
          Creamos sitios web modernos y funcionales que impulsan tu negocio. 
          Diseños únicos, responsive y optimizados para conversión.
        </p>
      </div>

      {/* Carruseles */}
      <div className="relative z-10">
        {/* Primer carrusel */}
        <div className="flex space-x-8 mb-8 overflow-x-auto pb-4">
          {products.slice(0, 6).map((product, index) => (
            <div
              key={product.title}
              className="flex-shrink-0 w-80 h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
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

        {/* Segundo carrusel */}
        <div className="flex space-x-8 mb-8 overflow-x-auto pb-4">
          {products.slice(6, 12).map((product, index) => (
            <div
              key={product.title}
              className="flex-shrink-0 w-80 h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
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

        {/* Tercer carrusel */}
        <div className="flex space-x-8 mb-8 overflow-x-auto pb-4">
          {products.slice(0, 6).map((product, index) => (
            <div
              key={`third-${product.title}`}
              className="flex-shrink-0 w-80 h-64 relative group cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all duration-300"
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

      {/* Espaciado final */}
      <div className="h-screen"></div>
    </div>
  );
}