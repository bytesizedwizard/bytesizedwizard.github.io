/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FFD900',
          dim: 'rgba(255,217,0,0.08)',
          hover: '#FFE033',
          light: '#8A6B00',
        },
        bg: {
          base: '#09090B',
          surface: '#111113',
          elevated: '#18181B',
        },
        border: {
          DEFAULT: '#27272A',
          subtle: '#1C1C1F',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#52525B',
        },
        cipher: {
          bg: '#02140E',
        },
        // Light mode overrides applied via CSS vars
      },
      fontFamily: {
        display: ['Sen', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'shimmer': 'shimmer 0.8s ease forwards',
        'scroll-morse': 'scrollMorse 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scrollMorse: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #ffffff08 1px, transparent 1px)',
        'glow-yellow': 'radial-gradient(ellipse at center, rgba(255,217,0,0.08) 0%, transparent 70%)',
        'glow-yellow-sm': 'radial-gradient(ellipse at center, rgba(255,217,0,0.12) 0%, transparent 60%)',
      },
      backgroundSize: {
        'dot-grid': '48px 48px',
      },
      boxShadow: {
        'accent': '0 0 20px rgba(255, 217, 0, 0.15)',
        'accent-sm': '0 0 10px rgba(255, 217, 0, 0.1)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

