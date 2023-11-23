module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:tailwindcss/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'api/**/*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': [1, { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'tailwindcss/no-custom-classname': 'off', // Ofc we will use custom classes
  },
};
