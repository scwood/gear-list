module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2019,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
