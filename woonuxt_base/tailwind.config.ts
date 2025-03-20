import type { Config } from 'tailwindcss';
import animate from "tailwindcss-animate"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          light: '#7B241C',
          DEFAULT: process.env.PRIMARY_COLOR || '#7B241C',
          dark: '#7B241C',
        },
        secondary: {
          DEFAULT: '#4A4A4A', // Gris foncé par défaut
          light: '#808080',   // Gris clair
        },
         // Vous pouvez ajouter d'autres nuances de doré si nécessaire
         gold: {
          100: '#FFF1C1',
          200: '#FFE58F',
          300: '#FFD95D',
          400: '#FFCD2B',
          500: '#C5A028', // Votre couleur dorée principale
          600: '#CD7F32',
          700: '#7B241C',
        },
        // purple:{
        //   500: '#CD7F32'
        // }
      },
      
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "background-pan": {
          from: { backgroundPosition: "0% center" },
          to: { backgroundPosition: "-200% center" }
        },
        "shimmer": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - 100px) 0"
          },
          "30%, 60%": {
            "background-position": "calc(100% + 100px) 0"
          }
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" }
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - 1rem))" }
        },
        "color-cycle": {
          "0%, 100%": { backgroundColor: "rgb(249, 115, 22)" }, // bg-purple-500
          "25%": { backgroundColor: "rgb(96, 165, 250)" }, // bg-blue-400
          "50%": { backgroundColor: "rgb(34, 197, 94)" }, // bg-green-500
          "75%": { backgroundColor: "rgb(249, 115, 22)" } // bg-orange-500
        },
        risingstar: {
          from: {
            transform: 'translateY(0px)'
          },
          to: {
            transform: 'translateY(-3840px)'
          }
        }
      },
      aspectRatio: {
        '9/8': '1 / 1.125',
      },
      screens: {
        '2xl': '1400px',
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "background-pan": "background-pan 3s linear infinite",
        "shimmer": "shimmer 6s infinite",
        "marquee": "marquee 20s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
        "color-cycle": "color-cycle 8s linear infinite",
        risingstar: 'risingstar 1000s linear infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    animate,
    
  ],
};
