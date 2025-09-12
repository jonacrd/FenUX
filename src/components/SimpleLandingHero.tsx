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
    <>
      <ReusableHeader />
      <main className="overflow-hidden">
        {/* Hero Section with Gallery */}
        <section className="relative min-h-screen w-full">
          <div className="relative h-screen w-full p-4">
            <div className="grid grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr] gap-4 h-full">
              {/* Main large image */}
              <div className="col-span-8 md:col-span-6 row-span-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="/images/landing-hero.webp"
                  alt="Landing Page Hero"
                />
              </div>
              
              {/* Small images */}
              <div className="col-span-2 md:col-span-2 row-span-2 hidden md:block overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="/images/landing-shot-1.webp"
                  alt="Landing Page Shot 1"
                />
              </div>
              
              <div className="col-span-2 md:col-span-2 row-span-2 hidden md:block overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="/images/landing-shot-2.webp"
                  alt="Landing Page Shot 2"
                />
              </div>
              
              <div className="col-span-4 md:col-span-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="/images/portfolio-showcase.webp"
                  alt="Portfolio Showcase"
                />
              </div>
              
              <div className="col-span-4 md:col-span-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="/images/features-showcase.webp"
                  alt="Features Showcase"
                />
              </div>
            </div>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 dark:text-slate-100">
                Landing Pages que Convierten
              </h1>
              <p className="my-6 max-w-xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
                Diseñamos landing pages y portfolios profesionales que capturan la atención de tus clientes y generan más conversiones para tu negocio.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
                  Ver Portfolio
                </Button>
                <Button
                  variant="link"
                  className="bg-transparent px-4 py-2 font-medium"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">¿Por qué elegir nuestros servicios?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Creamos landing pages y portfolios que no solo se ven increíbles, sino que también generan resultados reales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg border bg-card">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Diseño Único</h3>
                <p className="text-muted-foreground">Cada proyecto es único y personalizado para tu marca</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Alto Rendimiento</h3>
                <p className="text-muted-foreground">Optimizado para velocidad y conversión</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Responsive</h3>
                <p className="text-muted-foreground">Perfecto en todos los dispositivos</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimizado</h3>
                <p className="text-muted-foreground">Mejor posicionamiento en Google</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

