module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'color-hex-length': 'long',
    'selector-pseudo-element-colon-notation': 'single',

    'order/properties-alphabetical-order': true
  }
};
