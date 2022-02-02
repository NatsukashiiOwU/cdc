module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-restricted-globals': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
