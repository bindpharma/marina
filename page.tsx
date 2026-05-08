import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Yeni palet — tertemiz beyaz, derin lacivert, parlak altın
        navy: {
          DEFAULT: '#0B1B33',
          950: '#050E1F',
          900: '#0B1B33',
          800: '#13284A',
          700: '#1C3661',
          600: '#274479',
          500: '#3B5896',
        },
        gold: {
          DEFAULT: '#D4A95A',
          light: '#E8C485',
          dark: '#B68A3D',
          100: '#F8EFD9',
          200: '#EFDDB0',
        },
        sand: {
          DEFAULT: '#FAFAF7',  // çok hafif krem/beyaz
          50: '#FFFFFF',
          100: '#FAFAF7',
          200: '#F1F0EA',
          300: '#E5E3DA',
        },
        ink: '#0B1B33',
        muted: '#54607A',
        slate2: '#3A465E',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(11, 27, 51, 0.06)',
        'card': '0 8px 30px rgba(11, 27, 51, 0.08)',
        'lift': '0 18px 40px rgba(11, 27, 51, 0.12)',
        'gold': '0 14px 36px rgba(212, 169, 90, 0.32)',
      },
    },
  },
  plugins: [],
};

export default config;
