'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

const Logo = ({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'white' | 'dark' }) => {
  const logoSrc = variant === 'white' ? '/logos/logosimpleblanco.png' : 
                  variant === 'dark' ? '/logos/logosimplenegro.png' : 
                  '/logos/logosimple.png';
  
  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src={logoSrc}
        alt="FenNuX Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}

const menuItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Rediseño Web', href: '/es/servicios/redisenio' },
  { name: 'Landing Pages', href: '/es/servicios/landing-portfolios' },
  { name: 'Apps Web', href: '/es/servicios/apps-web' },
  { name: 'Contacto', href: '#contacto' },
]

export default function ReusableHeader() {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-50 w-full px-2 group">
         <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/95 backdrop-blur-lg max-w-4xl rounded-2xl border border-white/30 lg:px-5 shadow-2xl')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo variant="white" />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-300 font-semibold block duration-150 text-shadow-sm transition-colors">
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/95 backdrop-blur-lg group-data-[state=active]:block hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/30 p-6 shadow-2xl md:flex-nowrap lg:hidden">
              <div>
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-white hover:text-blue-300 font-semibold block duration-150 text-shadow-sm transition-colors">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#contacto">
                    <span>Contacto</span>
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex lg:items-center">
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="#contacto">
                  <span>Contacto</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
