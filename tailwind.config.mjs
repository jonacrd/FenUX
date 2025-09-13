/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0d0712',
          mid: '#2b0f2f',
          magenta: '#C0176C',
          fuchsia: '#D2137D',
          orange: '#FF8A00',
        },
        'c1': 'var(--c1)',
        'c2': 'var(--c2)',
        'ink': 'var(--ink)',
        'bg': 'var(--bg)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C0176C 0%, #D2137D 50%, #FF8A00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0d0712 0%, #2b0f2f 100%)',
      },
      animation: {
        'grad-x': 'grad-x 6s ease infinite',
        'sk': 'sk 1.4s linear infinite',
        'drift': 'drift 18s ease-in-out infinite alternate',
        'slide-in-left': 'slideInLeft 600ms ease-out forwards',
        'slide-in-right': 'slideInRight 600ms ease-out forwards',
        'bounce-in': 'bounceIn 700ms ease-out forwards',
      },
      keyframes: {
        'grad-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'sk': {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
        'drift': {
          '0%': { 'transform': 'translate3d(-2%, 0, 0) scale(1)' },
          '100%': { 'transform': 'translate3d(2%, 2%, 0) scale(1.03)' },
        },
        'slideInLeft': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slideInRight': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'bounceIn': {
          '0%': { 
            opacity: '0',
            transform: 'scale(1.2)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
