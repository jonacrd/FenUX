'use client';

import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react';

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

export default function AppsWebHeroEN() {
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20 pt-32">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <a
                href="/"
                className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0">
                <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                <span className="text-sm">Web Application Development</span>
                <span className="bg-border block h-4 w-px"></span>
                <ArrowRight className="size-4" />
              </a>

              <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl text-white drop-shadow-2xl bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                Production-Ready Web Applications
              </h1>
              
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                We develop modern, scalable, and optimized web applications. 
                From MVP to complex enterprise applications.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#contacto">
                    <span>Start Project</span>
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10">
                  <a href="#portfolio">
                    <span>View Portfolio</span>
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-500/20 p-3 mb-3">
                    <Code className="size-6 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Development</h3>
                  <p className="text-xs text-gray-400 mt-1">React, Next.js, Node.js</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-green-500/20 p-3 mb-3">
                    <Smartphone className="size-6 text-green-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Responsive</h3>
                  <p className="text-xs text-gray-400 mt-1">Mobile-first</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-purple-500/20 p-3 mb-3">
                    <Zap className="size-6 text-purple-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Fast</h3>
                  <p className="text-xs text-gray-400 mt-1">Optimized</p>
                </div>
              </div>
            </div>

            <div className="relative mt-16 lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 h-4 bg-white/20 rounded"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-blue-500/30 rounded w-3/4"></div>
                      <div className="h-4 bg-purple-500/30 rounded w-1/2"></div>
                      <div className="h-4 bg-green-500/30 rounded w-2/3"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}