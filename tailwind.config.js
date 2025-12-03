/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // 30s болгож хурдыг тааруулав (тоог багасгавал хурдан гүйнэ)
        marquee: 'marquee 30s linear infinite', 
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // Энэ мөр баруунаас зүүн тийш гүйлгэнэ
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate(-50%, 20px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
      },
    },
  },
  plugins: [],
};