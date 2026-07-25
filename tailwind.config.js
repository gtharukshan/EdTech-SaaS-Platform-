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
          blue: '#0050FF',
          cyan: '#00D6FF',
          darkBlue: '#050815',
          glow: 'rgba(0, 214, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 80, 255, 0.15) 0%, rgba(0, 214, 255, 0.05) 50%, transparent 80%)',
        'cyan-blue-gradient': 'linear-gradient(135deg, #0050FF 0%, #00D6FF 100%)',
        'text-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(0, 80, 255, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(0, 214, 255, 0.5)',
        'glow-combined': '0 0 50px -10px rgba(0, 80, 255, 0.3), 0 0 20px -5px rgba(0, 214, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
