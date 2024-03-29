module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'require-atomic-updates': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'no-case-declarations': 'off',
  },
};
