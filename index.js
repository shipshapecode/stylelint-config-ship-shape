module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['else']
    }],
    'at-rule-no-unknown': null,
    'color-hex-case': null,
    'color-hex-length': 'long',
    'selector-max-id': 0,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['box', 'centered', 'container', 'fill', 'fit', 'grid', 'hbox', 'vbox']
      }
    ],

    'order/properties-alphabetical-order': true,
    
    'scss/at-rule-no-unknown': true
  }
};
