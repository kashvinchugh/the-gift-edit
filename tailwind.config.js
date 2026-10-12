/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#5F3848',
          'burgundy-dark': '#482836',
          'burgundy-light': '#77475B',
          'dusty-rose': '#CB9996',
          'dusty-rose-light': '#D9B2AF',
          blush: '#E5CCC8',
          'blush-light': '#F6ECE9',
          cream: '#FEDED7',
          'cream-soft': '#FDF8F5',
          'cream-light': '#FFFDFB',
          olive: '#505743',
          'olive-light': '#6B745A',
          ivory: '#FFFCFA',
          'off-white': '#FAF7F4',
          text: '#321D1B',
          'text-muted': '#6B5754',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(95, 56, 72, 0.08), 0 4px 6px -2px rgba(95, 56, 72, 0.04)',
        'luxury-hover': '0 20px 35px -5px rgba(95, 56, 72, 0.12), 0 10px 10px -5px rgba(95, 56, 72, 0.06)',
        'soft-glow': '0 0 25px rgba(203, 153, 150, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
