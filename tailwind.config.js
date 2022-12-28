// 配置tailwind.config.js 内容
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        3.75: '0.9375rem',
        4.25: '1.0625rem',
        4.5: '1.125rem',
        4.75: '1.1875rem',
        5.25: '1.3125rem',
        5.5: '1.375rem',
        6.25: '1.5625rem',
        6.875: '1.71875rem',
        7.25: '1.8125rem',
        7.5: '1.85rem',
        7.75: '1.9375rem',
        8.75: '2.1875rem',
        9.5: '2.375rem',
        11.5: '2.875rem',
        12.75: '3.1875rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14: '3.5rem',
        14.25: '3.5625rem',
        15: '3.75rem',
        15.5: '3.875rem',
        15.875: '3.96875rem',
        16.25: '4.0625rem',
        16.5: '4.125rem',
        17.5: '4.375rem',
        18: '4.5rem',
        18.25: '4.5625rem',
        18.5: '4.625rem',
        18.75: '4.6875rem',
        21.25: '5.3125rem',
        22.75: '5.6875rem',
        23.5: '5.875rem',
        23.75: '5.9375rem',
        25: '6.25rem',
        27: '6.75rem',
        28.125: '7.03125rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        32.5: '8.125rem',
        34.25: '8.5625rem',
        35: '8.75rem',
        38: '9.5rem',
        38.5: '9.625rem',
        39: '9.75rem',
        45: '11.25rem',
        47.5: '11.875rem',
        50: '12.5rem',
        52.25: '13.0625rem',
        53: '13.25rem',
        57: '14.25rem',
        57.5: '14.375rem',
        59: '14.75rem',
        62: '15.5rem',
        70: '17.5rem',
        71: '17.75rem',
        76: '19rem',
        81.75: '20.4375rem',
        90: '22.5rem',
        93.75: '23.4375rem',
        95: '23.75rem',
        106: '26.5rem',
        116: '29rem',
        120: '30rem',
        145: '36.25rem',
        149: '37.25rem',
        169: '42.25rem',
        180: '45rem',
        192: '48rem',
        195: '48.75rem',
        230: '57.5rem',
      },
      fontSize: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
      },
      letterSpacing: {
        '0.0075em': '0.0075em',
        '0.02em': '0.02em',
      },
      lineHeight: {},
      maxWidth: {
        93.75: '23.4375rem',
        192: '48rem',
        230: '57.5rem',
      },
      inset: {
        '-18.5': '-4.625rem',
        '-40': '-10rem',
      },
      textColor: {
        '#262626': '#262626',
        '#F2F2F2': '#F2F2F2',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        '#9B9B9B': '#9B9B9B',
        '#E20074': '#E20074',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        '#9B9B9B': '#9B9B9B',
      }),
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        '#870b4a': '#870b4a',
        '#e20074': '#e20074',
      }),
      boxShadow: {
        panel: '0 16px 40px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        getty: "url('~assets/images/GettyImages-1092342344.png')",
      },
    },
    screens: {
      pm: { max: '767px' },

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      pcm: { min: '1440px' },
    },
  },
  variants: {},
  plugins: [],
}
