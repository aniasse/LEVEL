import type { Config } from 'tailwindcss';


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
      },
      aspectRatio: {
        '9/8': '1 / 1.125',
      },
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase }: { addBase: Function }) {
      addBase({
        '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap')",
      });
    },
  ],
};
