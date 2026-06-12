module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',
  },
  globals: {
    process: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
