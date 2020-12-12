const colors = require('material-ui-colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        colors: { ...colors },
      },
    },
  },
  variants: {},
  plugins: [],
}
