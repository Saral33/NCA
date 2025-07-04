module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'prettier/prettier': 'error'
  }
}
