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
      
    },
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
