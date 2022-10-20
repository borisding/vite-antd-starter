const prettierConfig = require('./prettier.config.cjs');

module.exports = {
  root: true,
  plugins: ['react', 'prettier'],
  extends: ['plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module',
    ecmaVersion: 2020
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
};
