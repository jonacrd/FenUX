'use client';

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./ui/hero-gallery-scroll-animation";
import { Button } from "./ui/button";

const IMAGES = [
  "/images/landing-hero.webp",
  "/images/landing-shot-1.webp", 
  "/images/landing-shot-2.webp",
  "/images/portfolio-showcase.webp",
  "/images/features-showcase.webp",
];

export default function HeroGalleryDemo() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`Gallery image ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-white">
          Landing Pages que Convierten
        </h1>
        <p className="my-6 max-w-xl text-sm text-gray-200 md:text-base">
          Diseñamos landing pages y portfolios profesionales que capturan la atención de tus clientes y generan más conversiones para tu negocio.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
            Ver Portfolio
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-white hover:text-gray-300"
          >
            Solicitar Cotización
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}
