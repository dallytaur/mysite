module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  ignorePatterns: [
    'node_modules/',
  ],
  rules: {
    'semi': 'always',
    'comma-dangle': 'always',
  },
};
