module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
