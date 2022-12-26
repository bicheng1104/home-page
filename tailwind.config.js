// 配置tailwind.config.js 内容
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        getty: "url('~assets/images/GettyImages-1092342344.png')",
      },
      spacing: {
        5.25: '1.3125rem',
        5.5: '1.375rem',
        6.25: '1.5625rem',
        6.875: '1.71875rem',
        7.5: '1.85rem',
        11.5: '2.875rem',
        12.75: '3.1875rem',
        25: '6.25rem',
        32.5: '8.125rem',
      },
    },
    screens: {
      'phone-max': { max: '767px' },
      'pad-min': { min: '768px' },
      'pc-min': { min: '1280px' },
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

      pcm: '1440px',
    },
  },
  variants: {},
  plugins: [],
}
