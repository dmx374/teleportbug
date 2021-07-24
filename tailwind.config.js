const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class',

  purge: {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ],

    options: {
      safelist: [],
      whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/ ]
    }
  },

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px'
    },

    spacing: {
      'px': '1px',
      '0': '0px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '84': '22rem',
      '90': '24rem',
      '96': '26rem'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: {
         50: '#f8fbfc',
        100: '#f3f6fa',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
        950: '#0a1016'
      },

      teal: {
        100: '#e0fcff',
        200: '#bef8fd',
        300: '#87eaf2',
        400: '#54d1db',
        500: '#38bec9',
        600: '#2cb1bc',
        700: '#14919b',
        800: '#0e7c86',
        900: '#005860'
      },

      green: {
        100: '#fafff3',
        200: '#eaf9c9', 
        300: '#d1efa0',
        400: '#b2e16e',
        500: '#96ce4c',
        600: '#7bb53d',
        700: '#649934',
        800: '#507b2e',
        900: '#456829'
      },

      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },

      // yellow: colors.yellow,
      // indigo: colors.indigo,
      // blue: colors.blue,
      // purple: colors.purple

      red: colors.red,
      pink: colors.pink
    }
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
