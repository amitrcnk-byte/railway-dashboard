/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 24px rgba(16, 185, 129, 0.22), 0 0 60px rgba(16, 185, 129, 0.10)',
        led: '0 0 18px rgba(52, 211, 153, 0.35)',
        cyanGlow: '0 0 18px rgba(34, 211, 238, 0.35), 0 0 52px rgba(34, 211, 238, 0.12)',
        greenGlow: '0 0 18px rgba(52, 211, 153, 0.38), 0 0 52px rgba(52, 211, 153, 0.14)',
        orangeGlow: '0 0 18px rgba(249, 115, 22, 0.35), 0 0 52px rgba(249, 115, 22, 0.12)',
        yellowGlow: '0 0 18px rgba(250, 204, 21, 0.38), 0 0 52px rgba(250, 204, 21, 0.14)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.82' },
          '50%': { opacity: '1' }
        },
        slideTicker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        slideTicker: 'slideTicker 24s linear infinite'
      }
    }
  },
  plugins: []
};
