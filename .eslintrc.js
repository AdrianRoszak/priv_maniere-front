module.exports = {
  extends: [
    'plugin:hydrogen/recommended',
    'plugin:hydrogen/typescript',
    'prettier',
  ],
  rules: {
    'node/no-missing-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/no-unescaped-entities': 'off',
  },
};
