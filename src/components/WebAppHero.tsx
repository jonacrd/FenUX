'use client';

import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react';
import ReusableHeader from './ReusableHeader';

// Simple Button component
const Button = ({ children, className = '', variant = 'default', size = 'default', asChild = false, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
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

export default function WebAppHero() {
  return (
    <>
      <ReusableHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block overflow-hidden">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=3276&h=4095&fit=crop&crop=center"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-auto object-cover object-center max-w-full"
                width="3276"
                height="4095"
              />
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <div className="opacity-100 transition-opacity duration-1000">
                  <a
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">Desarrollo de Aplicaciones Web Modernas</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </a>
        
                  <h1
                    className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Aplicaciones Web que Impulsan tu Negocio
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Desarrollamos aplicaciones web personalizadas, escalables y de alto rendimiento que se adaptan a las necesidades específicas de tu empresa.
                  </p>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base">
                      <a href="#link">
                        <span className="text-nowrap">Comenzar Proyecto</span>
                      </a>
                    </Button>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5">
                    <a href="#link">
                      <span className="text-nowrap">Ver Portfolio</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="opacity-100 transition-opacity duration-1000">
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block w-full h-auto object-cover"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&h=1440&fit=crop&crop=center"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden w-full h-auto object-cover"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&h=1440&fit=crop&crop=center"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Tecnologías que Dominamos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Utilizamos las mejores tecnologías del mercado para crear aplicaciones web robustas y escalables
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg border bg-card">
                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Frontend Moderno</h3>
                <p className="text-muted-foreground">React, Vue.js, Angular, Next.js</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Backend Robusto</h3>
                <p className="text-muted-foreground">Node.js, Python, PHP, .NET</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">Mobile-first, PWA, Cross-platform</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Alto Rendimiento</h3>
                <p className="text-muted-foreground">Optimización, SEO, Velocidad</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

