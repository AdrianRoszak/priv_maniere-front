/* We  */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */

// function withOpacityValue(variable) {
//   return ({opacityValue}) => {
//     if (opacityValue === undefined) {
//       return `rgb(var(${variable}))`;
//     }
//     return `rgb(var(${variable}) / ${opacityValue})`;
//   };
// }

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        contrast: 'var(--color-contrast)',
        supplementary: 'var(--color-supplementary)',
        shopPay: 'var(--color-shop-pay)',
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        'bl-quarter': 'calc(var(--ts--baseline) / 4)',
        'bl-0.25': 'calc(var(--ts--baseline) / 4)',
        'bl-third': 'calc(var(--ts--baseline) /3)',
        'bl-0.33': 'calc(var(--ts--baseline) / 3)',
        'bl-half': 'calc(var(--ts--baseline) * 0.5)',
        'bl-0.5': 'calc(var(--ts--baseline) * 0.5)',
        'bl-0.75': 'calc(var(--ts--baseline) * 0.75)',
        bl: 'var(--ts--baseline)',
        'bl-1': 'var(--ts--baseline)',
        'bl-1.5': 'calc(var(--ts--baseline) * 1.5)',
        'bl-2': 'calc(var(--ts--baseline) * 2)',
        'bl-2.5': 'calc(var(--ts--baseline) * 2.5)',
        'bl-3': 'calc(var(--ts--baseline) * 3)',
        'bl-3.5': 'calc(var(--ts--baseline) * 3.5)',
        'bl-4': 'calc(var(--ts--baseline) * 4)',
        'bl-5': 'calc(var(--ts--baseline) * 5)',
        'bl-6': 'calc(var(--ts--baseline) * 6)',
        'bl-7': 'calc(var(--ts--baseline) * 7)',
        'bl-8': 'calc(var(--ts--baseline) * 8)',
        'bl-9': 'calc(var(--ts--baseline) * 9)',
        'bl-10': 'calc(var(--ts--baseline) * 10)',
        'bl-11': 'calc(var(--ts--baseline) * 11)',
        'bl-12': 'calc(var(--ts--baseline) * 12)',
        'bl-14': 'calc(var(--ts--baseline) * 14)',
        'bl-16': 'calc(var(--ts--baseline) * 16)',
        'bl-18': 'calc(var(--ts--baseline) * 18)',
        'bl-20': 'calc(var(--ts--baseline) * 20)',
        'bl-22': 'calc(var(--ts--baseline) * 22)',
        'bl-24': 'calc(var(--ts--baseline) * 24)',
        'bl-26': 'calc(var(--ts--baseline) * 26)',
        'bl-28': 'calc(var(--ts--baseline) * 28)',
        'bl-30': 'calc(var(--ts--baseline) * 30)',
        'bl-32': 'calc(var(--ts--baseline) * 32)',
        'bl-36': 'calc(var(--ts--baseline) * 36)',
        'bl-40': 'calc(var(--ts--baselin) * 40)',
        'bl-44': 'calc(var(--ts--baseline) * 44)',
        'bl-48': 'calc(var(--ts--baseline) * 48)',
        'bl-52': 'calc(var(--ts--baseline) * 52)',
        'bl-56': 'calc(var(--ts--baseline) * 56)',
        'bl-60': 'calc(var(--ts--baseline) * 60)',
        'bl-64': 'calc(var(--ts--baseline) * 64)',
        'bl-72': 'calc(var(--ts--baseline) * 72)',
        'bl-80': 'calc(var(--ts--baseline) * 80)',
        'bl-96': 'calc(var(--ts--baseline) * 96)',
        'bl-100': 'calc(var(--ts--baseline) * 100)',
        'bl-200': 'calc(var(--ts--baseline) * 200)',
        'bl-400': 'calc(var(--ts--baseline) * 400)',
        'bl-800': 'calc(var(--ts--baseline) * 800)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: [
          'Overpass',
          'Helvetica Neue',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        serif: ['Cormorant Garamond', '"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
        '3xs': ['var(--ts--fs-down-4)', {lineHeight: '1.4'}],
        '2xs': ['var(--ts--fs-down-3)', {lineHeight: '1.4'}],
        xs: ['var(--ts--fs-down-2)', {lineHeight: '1.4'}],
        sm: ['var(--ts--fs-down-1)', {lineHeight: '1.4'}],
        base: ['var(--ts--fs-base)', {lineHeight: 'var(--ts--baseline)'}],
        lg: ['var(--ts--fs-up-1)', {lineHeight: 'var(--ts--lh-up-1)'}],
        xl: ['var(--ts--fs-up-2)', {lineHeight: 'var(--ts--lh-up-2)'}],
        '2xl': ['var(--ts--fs-up-3)', {lineHeight: 'var(--ts--lh-up-3)'}],
        '3xl': ['var(--ts--fs-up-4)', {lineHeight: 'var(--ts--lh-up-4)'}],
        '4xl': ['var(--ts--fs-up-5)', {lineHeight: 'var(--ts--lh-up-5)'}],
        '5xl': ['var(--ts--fs-up-6)', {lineHeight: 'var(--ts--lh-up-6)'}],
        '6xl': ['var(--ts--fs-up-7)', {lineHeight: 'var(--ts--lh-up-7)'}],
        '7xl': ['var(--ts--fs-up-8)', {lineHeight: 'var(--ts--lh-up-8)'}],
        '8xl': ['var(--ts--fs-up-9)', {lineHeight: 'var(--ts--lh-up-9)'}],
        '9xl': ['var(--ts--fs-up-10)', {lineHeight: 'var(--ts--lh-up-10)'}],
      },
      lineHeight: {
        baseline: 'var(--ts--baseline)',
        1: 'var(--ts--baseline)',
        2: 'calc(var(--ts--baseline) * 2)',
        3: 'calc(var(--ts--baseline) * 3)',
        4: 'calc(var(--ts--baseline) * 4)',
        5: 'calc(var(--ts--baseline) * 5)',
        6: 'calc(var(--ts--baseline) * 6)',
        7: 'calc(var(--ts--baseline) * 7)',
        8: 'calc(var(--ts--baseline) * 8)',
        9: 'calc(var(--ts--baseline) * 9)',
        10: 'calc(var(--ts--baseline) * 10)',
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  // eslint-disable-next-line node/no-unpublished-require
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
