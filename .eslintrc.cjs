module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // `react` first then packages starting with a character
              ['^react$', '^[a-z]'],
              // Packages starting with `@`
              ['^@'],
              // Custom aliases
              ['^@components'],
              ['^@pages'],
              ['^@form'],
              ['^@utils'],
              ['^@stores'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'api/**/*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'tailwindcss/no-custom-classname': 'off', // Ofc we will use custom classes
  },
};
