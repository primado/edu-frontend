/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
  "../templates/**/*.{html,js}",],
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
      'text-grey-100': '#3d4551',
      'black': '#000000',
      'black-indigo': '#111727',
      'light-blue': '#8ECAE6',
      'blue-grey': '#42454e',
      "bg-light-grey": '#e5e5e5',
      'bg-pink': '#fb6f92'
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
      'laptop': {max: '1024px'},
      'md': { max: '767px' },
      'sm': { max: '639px' },
      'sm-460': {max: '460px'},
      'sm-425': {max: '430px'},
      'sm-425-2': {max: '425px'},
      'sm-412': {max: '417px'},
      'sm-375': {max: '380px'},
      'sm-360': {max: '365px'},
      'sm-320': {max: '325px'},
      
    },

    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
