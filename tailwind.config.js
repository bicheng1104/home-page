// 配置tailwind.config.js 内容
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        getty: "url('~assets/images/GettyImages-1092342344.png')",
      },
    },
    screens: {
      'phone-max': { max: '767px' },
      'pad-min': { min: '768px' },
      'pc-min': { min: '1280px' },
    },
  },
  variants: {},
  plugins: [],
}
