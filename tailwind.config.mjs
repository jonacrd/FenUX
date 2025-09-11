/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'c1': 'var(--c1)',
        'c2': 'var(--c2)',
        'ink': 'var(--ink)',
        'bg': 'var(--bg)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'grad-x': 'grad-x 6s ease infinite',
        'sk': 'sk 1.4s linear infinite',
        'drift': 'drift 18s ease-in-out infinite alternate',
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
      },
    },
  },
  plugins: [],
}
