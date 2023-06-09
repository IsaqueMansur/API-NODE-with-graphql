module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] },
    ],
    '@typescript-eslint/indent': [2, 2],
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-cycle': 0,
  },
};
