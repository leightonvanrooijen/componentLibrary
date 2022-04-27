module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // project: './tsconfig.json',
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'jest',
  ],
  rules: {
    'max-len': ['error', 150],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-filename-extension': 'off',
        'import/order': 'off',
        'array-callback-return': 'off',
        'implicit-arrow-linebreak': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'no-shadow': 'off',
      },
    },
  ],
};
