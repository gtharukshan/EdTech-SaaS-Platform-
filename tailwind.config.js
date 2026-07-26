/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050505',
          secondary: '#0A0A0C',
          card: '#0C0D12',
          surface: '#111319',
        },
        brand: {
          blue: '#D4AF37',
          cyan: '#F5D061',
          gold: '#D4AF37',
          champagne: '#F5D061',
          darkBlue: '#0A0B0E',
          glow: 'rgba(212, 175, 55, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(245, 208, 97, 0.05) 50%, transparent 80%)',
        'cyan-blue-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5D061 50%, #AA771C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'text-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(212, 175, 55, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(245, 208, 97, 0.5)',
        'glow-combined': '0 0 50px -10px rgba(212, 175, 55, 0.35), 0 0 20px -5px rgba(245, 208, 97, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
