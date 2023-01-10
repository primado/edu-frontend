/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",],
  theme: {

    colors: {
      // Configure your color palette here

      'bg-body': '#e8e8f2',
      'primary-100': '#3438cd',
      'text-black': '#141a28',
      'text-gray': '#717784',
      "link-ative": "#FB8500",
      'link-hover': "#3e44fe",
      "link-active": "#2b2fb1",
    },

    fontFamily: {
      // Configure your font family here

      'default_font': ['RobRoboto Slab', 'serif'],
      'auth_font': ['Raleway', 'sans-serif'],
      'inter-font': ['Inter', 'sans-serif'],

    },

    screens: {
      // Configure your responsive screen here
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1023px' },
      'md': { max: '767px' },
      'sm': { max: '639px' },
      'sm-425': {max: '425px'},
      'sm-375': {max: '375px'},
      
    },

    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
