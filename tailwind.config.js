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
          DEFAULT: 'var(--bg-main)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          surface: 'var(--bg-surface)',
          pill: 'var(--bg-pill)',
          nav: 'var(--bg-nav)',
          drawer: 'var(--bg-drawer)',
        },
        brand: {
          DEFAULT: 'var(--brand-primary)',
          blue: 'var(--brand-secondary)',
          cyan: 'var(--brand-accent)',
          gold: 'var(--brand-gold-start)',
          champagne: 'var(--brand-gold-mid)',
          darkBlue: 'var(--bg-main)',
          glow: 'var(--brand-glow)',
          hover: 'var(--brand-primary-hover)',
        },
        theme: {
          text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)',
            muted: 'var(--text-muted)',
            subtle: 'var(--text-subtle)',
            inverse: 'var(--text-inverse)',
          },
          border: {
            DEFAULT: 'var(--border-primary)',
            secondary: 'var(--border-secondary)',
            brand: 'var(--border-brand)',
            glass: 'var(--border-glass)',
          },
          btn: {
            'primary-text': 'var(--btn-primary-text)',
            'secondary-bg': 'var(--btn-secondary-bg)',
            'secondary-text': 'var(--btn-secondary-text)',
          },
          status: {
            success: 'var(--color-success)',
            warning: 'var(--color-warning)',
            error: 'var(--color-error)',
            info: 'var(--color-info)',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, var(--brand-glow) 0%, transparent 80%)',
        'cyan-blue-gradient': 'linear-gradient(135deg, var(--brand-gold-start) 0%, var(--brand-gold-mid) 50%, var(--brand-gold-end) 100%)',
        'gold-gradient': 'linear-gradient(135deg, var(--brand-gold-start) 0%, var(--brand-gold-mid) 25%, var(--brand-secondary) 50%, var(--brand-accent) 75%, var(--brand-gold-end) 100%)',
        'text-gradient': 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
        'card-gradient': 'linear-gradient(180deg, var(--brand-glow) 0%, transparent 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px var(--shadow-glow)',
        'glow-cyan': '0 0 40px -10px var(--shadow-glow)',
        'glow-combined': '0 0 50px -10px var(--shadow-glow), 0 0 20px -5px var(--shadow-glow)',
        'glass': '0 8px 32px 0 var(--shadow-glow)',
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
