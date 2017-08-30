module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['else', 'if', 'include', 'mixin']
      }
    ],
    'color-hex-length': 'long',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['box', 'centered', 'container', 'fill', 'fit', 'grid', 'hbox', 'vbox']
      }
    ],

    'order/properties-alphabetical-order': true
  }
};
