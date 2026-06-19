/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        rr: {
          navy: '#11142D',
          blue: '#254A93',
          sky: '#52BEE3',
          muted: '#737686',
          soft: '#EAF0FC',
        },
      },
      boxShadow: {
        rrCard: '0 30px 80px rgba(13, 35, 88, 0.08)',
        rrFloat: '0 22px 42px rgba(37, 74, 147, 0.16)',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        revealUp: 'revealUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
