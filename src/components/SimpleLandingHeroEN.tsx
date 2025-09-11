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

export default function SimpleLandingHeroEN() {
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Portfolio 1"
                />
              </div>
              
              {/* Small images */}
              <div className="col-span-2 md:col-span-2 row-span-2 hidden md:block overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Portfolio 2"
                />
              </div>
              
              <div className="col-span-2 md:col-span-2 row-span-2 hidden md:block overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Portfolio 3"
                />
              </div>
              
              <div className="col-span-4 md:col-span-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D"
                  alt="Portfolio 4"
                />
              </div>
              
              <div className="col-span-4 md:col-span-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  className="size-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww"
                  alt="Portfolio 5"
                />
              </div>
            </div>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 dark:text-slate-100">
                Landing Pages that Convert
              </h1>
              <p className="my-6 max-w-xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
                We design professional landing pages and portfolios that capture your clients' attention and generate more conversions for your business.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
                  View Portfolio
                </Button>
                <Button
                  variant="link"
                  className="bg-transparent px-4 py-2 font-medium"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why choose our services?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We create landing pages and portfolios that not only look amazing, but also generate real results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg border bg-card">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Unique Design</h3>
                <p className="text-muted-foreground">Each project is unique and customized for your brand</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                <p className="text-muted-foreground">Optimized for speed and conversion</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Responsive</h3>
                <p className="text-muted-foreground">Perfect on all devices</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
                <p className="text-muted-foreground">Better Google ranking</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const menuItems = [
  { name: 'Services', href: '#link' },
  { name: 'Portfolio', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'Contact', href: '#link' },
]

const HeroHeader = () => {
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
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm">
                  <a href="#contact">
                    <span>Contact</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">N</span>
      </div>
      <span className="text-xl font-bold text-gray-800 dark:text-white">NextSite</span>
    </div>
  )
}
