"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export default function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background con web vieja opaca */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center"
          alt="Web vieja de fondo"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}

export const products = [
  {
    title: "E-commerce Moderno",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Portfolio Creativo",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Landing Page",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Dashboard Admin",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Blog Personal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio Corporativo",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "App Web Móvil",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Tienda Online",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio de Noticias",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Portal Educativo",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Plataforma SaaS",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio de Servicios",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Web de Restaurante",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio de Viajes",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1488646950254-7d0fd7e1272b?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Portal Inmobiliario",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio de Fitness",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Web de Música",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Sitio de Arte",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&crop=center",
  },
];
