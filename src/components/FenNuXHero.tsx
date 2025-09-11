'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Globe, Zap, Palette, Target, Star, CheckCircle } from 'lucide-react';

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

export default function FenNuXHero() {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    {
      title: "Rediseño Web",
      description: "Transformamos tu sitio web obsoleto en una experiencia moderna y funcional",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      href: "/es/servicios/redisenio"
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversión diseñadas para generar leads y ventas",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      href: "/es/servicios/landing-portfolios"
    },
    {
      title: "Apps Web",
      description: "Aplicaciones web modernas, escalables y optimizadas para producción",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      href: "/es/servicios/apps-web"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90">FenNuX - Desarrollo Web Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Desarrollamos
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Experiencias Digitales
              </span>
              que Convierten
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transformamos ideas en realidad digital. Desde landing pages de alta conversión 
              hasta aplicaciones web complejas, creamos soluciones que impulsan tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4">
                <a href="#servicios">
                  <span>Ver Servicios</span>
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                <a href="#portfolio">
                  <span>Ver Portfolio</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Servicios rotativos */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  currentService === index ? 'scale-105' : 'scale-100'
                }`}
                onClick={() => setCurrentService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <Button
                    asChild
                    variant="ghost"
                    className="text-white hover:bg-white/10 w-full justify-center">
                    <a href={service.href}>
                      <span>Explorar</span>
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Satisfacción del Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400">Tiempo de Respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-gray-400">Calificación Promedio</div>
            </div>
          </div>

          {/* Características destacadas */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              ¿Por qué elegir FenNuX?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Desarrollo Rápido</h3>
                <p className="text-gray-400">Entregamos proyectos en tiempo récord sin comprometer la calidad</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6">
                  <Smartphone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile-First</h3>
                <p className="text-gray-400">Todos nuestros diseños están optimizados para dispositivos móviles</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">SEO Optimizado</h3>
                <p className="text-gray-400">Sitios web optimizados para motores de búsqueda desde el primer día</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
