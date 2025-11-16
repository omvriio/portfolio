/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2E9EF7',
          600: '#2563EB',
          900: '#1E3A8A',
        },
        secondary: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        accent: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          900: '#0F172A',
          950: '#020617',
        },
        dataStream: {
          1: '#2E9EF7',
          2: '#6366F1',
          3: '#8B5CF6',
        },
        neuralGlow: '#60A5FA',
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.6' }],
        xl: ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.3' }],
        '3xl': ['clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.8rem + 2.25vw, 3rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(3rem, 2.4rem + 3vw, 4rem)', { lineHeight: '1' }],
      },
      spacing: {
        '1': '0.5rem',
        '2': '1rem',
        '3': '1.5rem',
        '4': '2rem',
        '6': '3rem',
        '8': '4rem',
        '12': '6rem',
        '16': '8rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(46, 158, 247, 0.3)',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
